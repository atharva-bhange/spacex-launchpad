import React from "react";

import "./Header.scss";
import Logo from "assets/image/logo.png";

const Header: React.FC = () => {
	return (
		<div className="header">
			<img src={Logo} alt="Logo" /> <span>Launchpads</span>
		</div>
	);
};

export default Header;
