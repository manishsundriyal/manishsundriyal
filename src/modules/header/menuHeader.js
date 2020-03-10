import React, { useContext } from 'react'
import { AppContext } from '../../lib/context';

const MenuHeader = () => {
    const { fileName = "" } = useContext(AppContext);
    return (
        <header className="menuHeader">
            <span>{fileName}</span>
        </header>
    );
}

export default MenuHeader;
