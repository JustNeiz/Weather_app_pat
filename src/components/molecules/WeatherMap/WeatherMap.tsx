import { useCallback, useEffect, useRef, useState } from "react";
import { useDebouncedValue } from "@mantine/hooks";
import { useZoom } from "../../../hooks/useZoom.ts";
import { useQuery } from "@tanstack/react-query";
import { citiesForMapService } from "../../../services/citiesForMapService.ts";
import { otherCitiesService } from "../../../services/otherCitiesService.ts";
import { weatherCodes } from "../../../constants/weatherCodesConstants.ts";
import * as d3 from 'd3';
import { Bounds } from "../../../types/BoundsTypes.ts";
import { OtherCitiesResponse } from "../../../types/OtherCitiesResponse.ts";

const WorldMap = () => {
  const initialBounds = {latMin: -60.46580578154576, lonMin: -119.38112809483637, latMax: 60.465805781545775, lonMax: 119.38112809483637};
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [visibleBounds, setVisibleBounds] = useState<Bounds | null>(initialBounds);
  const [zoomLevel, setZoomLevel] = useState(1);

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  const [debouncedVisibleBounds] = useDebouncedValue(visibleBounds, 300);
  const [debouncedZoomLevel] = useDebouncedValue(zoomLevel, 300);

  useEffect(() => {
    const updateDimensions = () => {
      if (wrapperRef.current) {
        const { width, height } = wrapperRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  useZoom(svgRef, dimensions, setZoomLevel, setVisibleBounds);

  const { data: citiesArray} = useQuery<OtherCitiesResponse[]>({
    queryKey: ["citiesForMap", debouncedVisibleBounds, debouncedZoomLevel],
    queryFn: () => citiesForMapService(debouncedVisibleBounds as Bounds, debouncedZoomLevel),
    enabled: !!debouncedVisibleBounds,
  });

  const { data: weatherData } = useQuery<OtherCitiesResponse[]>({
    queryKey: ["weatherData", citiesArray],
    queryFn: () =>
      otherCitiesService(
        citiesArray?.map((city) => city.latitude).join(",") ?? "",
        citiesArray?.map((city) => city.longitude).join(",") ?? ""
      ),
    enabled: !!citiesArray,
  });

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const g = svg.select("g");

    const projection = d3.geoMercator()
      .scale(150)
      .translate([dimensions.width / 2, dimensions.height / 2]);

    const path = d3.geoPath().projection(projection);

    // Определите тип данных для `world`
    d3.json<GeoJSON.FeatureCollection>("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")
      .then((world) => {
        if (!world) return;

        g.selectAll("path")
          .data(world.features)
          .join("path")
          .attr("d", (d) => path(d) || "") // Используйте функцию `path(d)` для генерации строки
          .attr("fill", "#333") // Цвет заливки для карты
          .attr("stroke", "#666"); // Цвет границ для карты
      })
    renderWeatherIcons();
  }, [weatherData, dimensions, zoomLevel, citiesArray]);

  const renderWeatherIcons = useCallback(() => {
    if (!weatherData || !svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const g = svg.select("g");

    const projection = d3.geoMercator()
      .scale(150)
      .translate([dimensions.width / 2, dimensions.height / 2]);

    g.selectAll("image").remove();

    const iconSize = 20;

    g.selectAll("image")
      .data(weatherData)
      .join("image")
      .attr("xlink:href", (d) => weatherCodes[d.current.weather_code] || "")
      .attr("x", (d) => {
        const coords = projection([d.longitude, d.latitude]);
        return coords ? coords[0] - iconSize / 2 : 0;
      })
      .attr("y", (d) => {
        const coords = projection([d.longitude, d.latitude]);
        return coords ? coords[1] - iconSize / 2 : 0;
      })
      .attr("width", iconSize / zoomLevel)
      .attr("height", iconSize / zoomLevel);
  }, [weatherData, dimensions, zoomLevel, citiesArray]);

  return (
    <div ref={wrapperRef} style={{ width: "100%", height: "50vh", border: "1px lightgrey solid", borderRadius: '10px'}}>
      <svg ref={svgRef} style={{ width: "100%", height: "100%" }}>
        <g />
      </svg>
    </div>
  );
};

export default WorldMap;
