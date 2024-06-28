import React from 'react';

import css from "./ForecastSelector.module.css"
import ForecastDurationSelect from "../../molecules/ForecastDurationSelect/ForecastDurationSelect.tsx";
import ForecastAirqualitySwitcher from "../../molecules/ForecastAirqualitySwitcher/ForecastAirqualitySwitcher.tsx";

const ForecastSelector = () => {
    return (
        <div className={css.ForecastSelector}>
            <ForecastDurationSelect/>
            <ForecastAirqualitySwitcher/>

        </div>
    );
};

export default ForecastSelector;