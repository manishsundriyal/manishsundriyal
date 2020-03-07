import React, { useContext } from 'react'
import logo from "../../file_type_js.svg";
import { AppContext } from '../../lib/context';

const Header = props => {
    const { fileName = "" } = useContext(AppContext);
    return (
        <header className="header">
            <img src={logo} width="16px;" height="35px;" alt="fileIcon"/>
            <span>{fileName}</span>
        </header>
    );
}

export default Header;
