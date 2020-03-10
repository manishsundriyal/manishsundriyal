import React from "react";
import Header from "../header/header";

import { NavBar } from "../";
import MenuHeader from "../header/menuHeader";

const getMainContent = (props) => {
    const { children } = props;
    return (
        <main className="content" id="main-content">
            {/* <pre className="line-numbers" id="something2"> */}
                {children}
            {/* </pre> */}
        </main>
    );
};

const Layout = props => {
    return (
        <div id="main">
            <MenuHeader />
            <NavBar />
            <div id="right" className="column">
                <Header />
                {getMainContent(props)}
            </div>
        </div>
    )
}

export default Layout;
