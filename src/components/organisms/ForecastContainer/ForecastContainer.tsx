import React from 'react';

import css from './ForecastContainer.module.css'
import ForecastSelector from "../ForecastSelector/ForecastSelector.tsx";
import ForecastsShort from "../ForecastsShort/ForecastsShort.tsx";
const ForecastContainer = () => {
    return (
        <div className={css.ForecastContainer}>
            <ForecastSelector/>
            <ForecastsShort/>

        </div>
    );
};

export default ForecastContainer;