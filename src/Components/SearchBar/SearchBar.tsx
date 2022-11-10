import React from 'react';

// import { Input } from './style';

import "./style.css"
import "../../styles/global"


export interface SearchBarProps {
    children?: any;
}


export function SearchBar({ children }: SearchBarProps) {
    return (
        <div className='flex'>
            {/* <SearchIcon className="icon-search"></SearchIcon> */}
            <input className="search-input" placeholder="Search Twitter">                
            </input>
        </div>
    );
}

export default SearchBar;