import React from "react";
import header_background from "../../assets/about-imgs/header-background.jpg";
import "../../css/about/about.scss";

function Header() {
	const background = {
		background: `url(${header_background}) no-repeat center center/cover`,
	};
	return (
		<header className="about-header" style={background}>
			<h1 className="about-heading">About Me</h1>
		</header>
	);
}

export default Header;
