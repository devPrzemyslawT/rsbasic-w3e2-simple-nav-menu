import React from "react";
import MenuLink from "../MenuLink/MenuLink";

const Menu = props => {
	return (
		<div>
			<MenuLink href='/' label='Home' />
			<MenuLink href='/contact' label='Contact' />
			<MenuLink href='/about' label='About' />
		</div>
	);
};

export default Menu;
