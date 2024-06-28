import React from 'react';
import css from './NavMenu.module.css'
import OpenMore from "../../atoms/OpenMore/OpenMore.tsx";
import NotificationButton from "../../atoms/NotificationButton/NotificationButton.tsx";
import GeolocationDiv from "../GeolocationDiv/GeolocationDiv.tsx";

const NavMenu = () => {
    return (
        <div className={css.NavMenu}>
            <OpenMore/>
            <NotificationButton/>
            <GeolocationDiv/>
        </div>
    );
};

export default NavMenu;