import React, { useState, useContext } from 'react'
import { AppContext } from "../../lib/context";

const navBarOptions = [
	{
		id: "home",
		label: "Home",
		subOptions: [],
		link: "/home",
		icon: "H",
	},
	{
		id: "about",
		label: "About",
		link: "/about",
		icon: "A",
		subOptions: [
			{
				id: "me",
				label: "Me",
				subOptions: [],
				link: "/about",

			},
			{
				id: "experience",
				label: "Experience",
				subOptions: [],
				link: "/experience",
			},
			{
				id: "work",
				label: "Work",
				subOptions: [],
				link: "/work",
			},
		],
	},
	{
		id: "blogs",
		label: "Blogs",
		subOptions: [],
		link: "/blogs",
		icon: "B",
	},
	{
		id: "contact",
		label: "Contact",
		subOptions: [],
		link: "/contact",
		icon: "C",
	},
];

const NavBar = () => {
	const [isDropDownShown, setIsDropDownShown] = useState(false);
	const [isClicked, setIsClicked] = useState(false);
	const [isNavVisible, setIsNavVisible] = useState(false);
	const { history } = useContext(AppContext);

	const handleClick = option => {
		setIsDropDownShown({ ...isDropDownShown, [option.id]: !isDropDownShown[option.id] });
		setIsClicked({ [option.id]: !isClicked[option.id] });
		history.push(option.link);
	}
	const listOptions = options => {
		if (!isNavVisible) {
			return null;
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

	const listFixedOptions = options => {
		return (
			<ul>
				{
					options.map(option => {
						return (
							<React.Fragment key={option.id}>
								<li className={(!!isClicked[option.id] && "fixed-active") || ""} onClick={() => {
									handleClick(option);
									setIsNavVisible(!isNavVisible)
								}}>
									{option.icon}
								</li>
							</React.Fragment>
						)
					})
				}
			</ul>
		)
	}

	return (
		<nav className="nav-bar" id="left">
			<div className="nav-bar-list-fixed">
				{listFixedOptions(navBarOptions)}
			</div>
			<div className="nav-bar-list">
				{listOptions(navBarOptions)}
			</div>
		</nav>
	);
}

export default NavBar;
