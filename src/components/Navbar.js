import React, { useRef } from "react";
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

	const nav_ul = useRef(null);

	const toggleClass = () => {
		nav_ul.current.classList.toggle("open");
	};

	return (
		<nav className="nav">
			<div className="nav-inner">
				<h2 className="nav-title">Coffee Shop</h2>
				<button className="toggle-btn" onClick={toggleClass}>
					<GiHamburgerMenu />
				</button>
				<ul className="nav-ul" ref={nav_ul}>
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
		</nav>
	);
}

export default Navbar;
