import React, { useState, useContext } from 'react'
import { AppContext } from "../../lib/context";

const navBarOptions = [
    {
        id: "home",
        label: "home",
        subOptions: [],
        link: "/home",
    },
    {
        id: "about",
        label: "about",
        link: "/about",
        subOptions: [
            {
                id: "me",
                label: "me",
                subOptions: [],
                link: "/about",

            },
            {
                id: "experience",
                label: "experience",
                subOptions: [],
                link: "/experience",
            },
            {
                id: "work",
                label: "work",
                subOptions: [],
                link: "/work",
            },
        ],
    },
    {
        id: "blogs",
        label: "blogs",
        subOptions: [],
        link: "/blogs",
    },
    {
        id: "contact",
        label: "Contact",
        subOptions: [],
        link: "/contact",
    },
];

const NavBar = () => {
    const [isDropDownShown, setIsDropDownShown] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const { history } = useContext(AppContext);

    const listOptions = options => {
        const handleClick = option => {
            setIsDropDownShown({ ...isDropDownShown, [option.id]: !isDropDownShown[option.id] });
            setIsClicked({ [option.id]: !isClicked[option.id] });
            history.push(option.link);
        }
        return (
            <ul>
                {
                    options.map(option => (
                        <React.Fragment key={option.id}>
                            <li className={(!!isClicked[option.id] && "clicked") || ""} onClick={() => handleClick(option)}>{option.label}</li>
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

export default NavBar;
