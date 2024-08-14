import ForecastMapDiv from "../ForecastMapDiv/ForecastMapDiv.tsx";
import RainOtherCitiesDiv from "../RainOtherCitiesDiv/RainOtherCitiesDiv.tsx";
import { Flex } from '@mantine/core';


const Dashboard = () => {
    
    return (
        <Flex
            w="100%"
            h="92%"
            style={{
                borderRadius: 25,
            }}
        >
            <ForecastMapDiv />
            <RainOtherCitiesDiv />
        </Flex>
    );
};

export default Dashboard;
