import React from 'react';
import css from './ForecastMapDiv.module.css'
import ForecastContainer from "../../organisms/ForecastContainer/ForecastContainer.tsx";
import MapContainer from "../../organisms/MapContainer/MapContainer.tsx";

const ForecastMapDiv = () => {
    return (
        <div className={css.ForecastMapDiv}>
            <ForecastContainer/>
            <MapContainer/>

        </div>
    );
};

export default ForecastMapDiv;