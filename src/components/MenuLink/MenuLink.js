import React from "react";

import "./MenuLink.css";

const MenuLink = props => {
	const { href, label } = props;

	return (
		<a href={href} className='menuLink'>
			{label}
		</a>
	);
};

export default MenuLink;
