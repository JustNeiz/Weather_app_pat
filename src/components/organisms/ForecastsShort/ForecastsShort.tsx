import React from 'react';

import css from './ForecastsShort.module.css'
import DailyForecastFullCard from "../../molecules/DailyForecastFullCard/DailyForecastFullCard.tsx";
import DailyForecastShortCard from "../../molecules/DailyForecastShortCard/DailyForecastShortCard.tsx";

const ForecastsShort = () => {
    return (
        <div className={css.ForecastsShort}>
            <DailyForecastFullCard/>
            <DailyForecastShortCard/>
            <DailyForecastShortCard/>
            <DailyForecastShortCard/>
            <DailyForecastShortCard/>
            <DailyForecastShortCard/>
            <DailyForecastShortCard/>
        </div>
    );
};

export default ForecastsShort;