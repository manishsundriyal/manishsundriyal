import React, { useState } from "react";
import logo from "../../file_type_js.svg";
import Header from "../header/header";

const navBarOptions = [
    {
        id: "option1",
        label: "Option 1",
        subOptions: [],
    },
    {
        id: "option2",
        label: "Option 2",
        subOptions: [
            {
                id: "option2.1",
                label: "Option 2.1",
                subOptions: [],
            },
            {
                id: "option2.2",
                label: "Option 2.2",
                subOptions: [],
            },
            {
                id: "option2.3",
                label: "Option 2.3",
                subOptions: [],
            },
        ],
    },
    {
        id: "option3",
        label: "Option 3",
        subOptions: [],
    },
    {
        id: "option4",
        label: "Option 4",
        subOptions: [],
    },
];

const NavBar = () => {
    const [isDropDownShown, setIsDropDownShown] = useState(false);

    const listOptions = options => {
        return (
            <ul>
                {
                    options.map(option => (
                        <React.Fragment key={option.id}>
                            <li className={(!!isDropDownShown[option.id] && "clicked") || ""} onClick={() => setIsDropDownShown({ ...isDropDownShown, [option.id]: !isDropDownShown[option.id] })}>{option.label}</li>
                            {
                                !!option.subOptions.length && !!isDropDownShown[option.id] && listOptions(option.subOptions)
                            }
                        </React.Fragment>
                    )
                    )
                }
            </ul>
        )
    };

    return (
        <nav className="nav-bar" id="left">
            <div className="nav-bar-list">
                {listOptions(navBarOptions)}
            </div>
        </nav>
    );
}

const getMainContent = (props) => {
    const { children } = props;
    return (
        <main className="content" id="something1">
            <pre className="line-numbers" id="something2">
                {/* <code className="language-javascript"> */}
                    {children}
                {/* </code> */}
            </pre>
        </main>
    );
};

const Layout = props => {
    return (
        <div id="main">
            <NavBar />
            <div id="right" className="column">
                <Header />
                {getMainContent(props)}
            </div>
        </div>
    )
}

export default Layout;
