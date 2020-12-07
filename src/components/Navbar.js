import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "../css/global/styles.scss";

function Navbar() {
	const pages = [
		{
			id: 1,
			link: "/",
			name: "home",
		},
		{
			id: 2,
			link: "/about",
			name: "about",
		},
		{
			id: 3,
			link: "/products",
			name: "products",
		},
		{
			id: 4,
			link: "/contact",
			name: "contact",
		},
	];

	return (
		<nav className="nav">
			<div className="nav-inner-container">
				<div className="nav-hamburger-container">
					<button className="hamburger-btn">
						<GiHamburgerMenu />
					</button>
				</div>
				<div className="nav-logo-container">
					<h2 className="nav-logo">Coffee Shop</h2>
				</div>
				<div className="nav-links-container">
					<ul className="nav-ul">
						{pages.map((page) => {
							const { id, link, name } = page;
							return (
								<li className="nav-li" key={id}>
									<Link to={link} className="nav-a">
										{name}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
