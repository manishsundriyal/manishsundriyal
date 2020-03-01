import React from 'react'
import logo from "../../file_type_js.svg";

const Header = props => {
    const { fileName = "" } = props;
    return (
        <header className="header">
            <img src={logo} width="16px;" height="35px;" />
            <span>{fileName}</span>
        </header>
    );
}

export default Header;
