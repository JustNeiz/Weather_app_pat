import React from 'react';
import css from './Header.module.css'
import NavMenu from "../../molecules/NavMenu/NavMenu.tsx";
import SearchMenu from "../../molecules/SearchMenu/SearchMenu.tsx";
import UserMenu from "../../molecules/UserMenu/UserMenu.tsx";
import ThemeSwitcher from "../../molecules/ThemeSwitcher/ThemeSwitcher.tsx";

const Header = () => {
    return (
        <div className={css.Header}>
            <NavMenu/>
            <SearchMenu/>
            <ThemeSwitcher/>
            <UserMenu/>
        </div>
    );
};

export default Header;