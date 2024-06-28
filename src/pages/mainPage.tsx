import Header from "../components/organisms/Header/Header.tsx";

import css from './mainPage.module.css'
import Dashboard from "../components/pages/MainPage/Dashboard.tsx";

const MainPage = () => {
    return (
        <div className={css.mainPage}>
            <Header/>
            <Dashboard/>
        </div>
    );
};

export default MainPage;