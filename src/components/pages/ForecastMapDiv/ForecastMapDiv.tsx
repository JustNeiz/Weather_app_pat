import css from "./ForecastMapDiv.module.css";
import MapContainer from "../../organisms/MapContainer/MapContainer.tsx";
import ForecastContainer from "../../organisms/ForecastContainer/ForecastContainer.tsx";

const ForecastMapDiv = () => {
  return (
    <div className={css.ForecastMapDiv}>
      <ForecastContainer />
      <MapContainer />
    </div>
  );
};

export default ForecastMapDiv;
