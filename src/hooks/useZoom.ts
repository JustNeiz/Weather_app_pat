import { useEffect, RefObject, Dispatch, SetStateAction } from "react";
import * as d3 from "d3";
import { Bounds, Transform } from "../types/BoundsTypes.ts";

const logVisibleBounds = (
  transform: Transform,
  projection: d3.GeoProjection,
  width: number,
  height: number
): Bounds => {
  const { k, x, y } = transform;

  const boundsPixel = [
    [0, 0],
    [width, 0],
    [width, height],
    [0, height],
  ];

  const boundsProjection = boundsPixel.map(([px, py]) => {
    const [pxScaled, pyScaled] = [(px - x) / k, (py - y) / k];

    const inverted = projection.invert ? projection.invert([pxScaled, pyScaled]) : [0, 0];
    return inverted ? inverted : [0, 0];
  });

  const [bottomLeft, topRight] = [
    [boundsProjection[0][0], boundsProjection[2][1]],
    [boundsProjection[1][0], boundsProjection[1][1]],
  ];

  return {
    latMin: bottomLeft[1],
    lonMin: bottomLeft[0],
    latMax: topRight[1],
    lonMax: topRight[0],
  };
};

interface Dimensions {
  width: number;
  height: number;
}

export const useZoom = (
  svgRef: RefObject<SVGSVGElement>, // тип для svgRef
  dimensions: Dimensions, // тип для размеров
  setZoomLevel: Dispatch<SetStateAction<number>>, // тип для setZoomLevel
  setVisibleBounds: Dispatch<SetStateAction<Bounds | null>> // тип для setVisibleBounds
) => {
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0 || !svgRef.current) return;

    const { width, height } = dimensions;

    const projection = d3.geoMercator()
      .scale(150)
      .translate([width / 2, height / 2]);

    // Правильная типизация для зумирования SVG элементов
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([1, 8])
      .on("zoom", (event) => {
        const { transform } = event;
        if (svgRef.current) { // Проверяем, что svgRef.current не null
          d3.select<SVGSVGElement, unknown>(svgRef.current)
            .select<SVGGElement>("g")
            .attr("transform", transform.toString());
          setZoomLevel(transform.k);
          setVisibleBounds(logVisibleBounds(transform, projection, width, height));
        }
      });

    if (svgRef.current) { // Проверяем, что svgRef.current не null
      d3.select<SVGSVGElement, unknown>(svgRef.current).call(zoom);
    }

    return () => {
      if (svgRef.current) { // Проверяем, что svgRef.current не null перед очисткой
        d3.select(svgRef.current).on('.zoom', null); // Очистка обработчиков событий
      }
    };
  }, [dimensions, svgRef, setZoomLevel, setVisibleBounds]);
};
