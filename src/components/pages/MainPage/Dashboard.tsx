import React from 'react';

import css from './Dashboard.module.css'
import ForecastMapDiv from "../ForecastMapDiv/ForecastMapDiv.tsx";
import RainOtherCitiesDiv from "../RainOtherCitiesDiv/RainOtherCitiesDiv.tsx";

const Dashboard = () => {
    return (
        <div className={css.Dashboard}>
            <ForecastMapDiv/>
            <RainOtherCitiesDiv/>
        </div>
    );
};

export default Dashboard;