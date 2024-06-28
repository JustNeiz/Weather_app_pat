import React from 'react';

import css from './SearchMenu.module.css'
import SearchForm from "../../atoms/SearchForm/SearchForm.tsx";

const SearchMenu = () => {
    return (
        <div className={css.SearchMenu}>
            <SearchForm/>
        </div>
    );
};

export default SearchMenu;