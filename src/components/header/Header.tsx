import React from 'react';
import DropdownBtn from '../DropdownBtn/DropdownBtn';

import "./Header.css"



function Header() {
    return (
        <div className='Header'>
            <h1 className='Title'>My Favorite Franchises</h1>
            <DropdownBtn>Erika</DropdownBtn>
        </div>

    );
}

export default Header;