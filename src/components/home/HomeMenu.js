import React, { useState } from "react";
import items from "../../sample_data/home_menu_data";
import menu_background from "../../assets/home-imgs/menu_background.jpg";

const categories = ["all", ...new Set(items.map((item) => item.category))];

const randomID = () => {
	return Math.ceil(Math.random() * 1000000);
};

function HomeMenu() {
	const [menuItems, setMenuItems] = useState(items);

	const displayItems = (category) => {
		if (category === "all") {
			setMenuItems(items);
		} else {
			const newItems = items.filter((item) => item.category === category);
			setMenuItems(newItems);
		}
	};

	const background = {
		background: `url(${menu_background}) no-repeat center center/cover`,
	};

	return (
		<section className="home-menu-section" style={background}>
			<div className="home-menu-overlay">
				<div className="home-menu-text-wrap">
					<h2 className="home-menu-title">
						favorite coffee flavours
					</h2>
				</div>
				<div className="menu-buttons-wrap">
					{categories.map((btn) => {
						return (
							<button
								type="button"
								key={randomID()}
								className="menu-btn"
								onClick={() => displayItems(btn)}
							>
								{btn}
							</button>
						);
					})}
				</div>
				<div className="home-menu-grid-container">
					{menuItems.map((item) => {
						const { id, title, category, price, desc, img } = item;

						return (
							<div
								className="menu-item"
								key={id}
								data-category={category}
							>
								<div className="menu-img-wrap">
									<img
										src={img}
										alt={title}
										className="menu-img"
									/>
								</div>
								<div className="menu-item-desc-wrap">
									<h3 className="menu-item-title">{title}</h3>
									<h4 className="menu-item-desc">{desc}</h4>
								</div>
								<div className="menu-item-price-wrap">
									<h3 className="menu-item-price">
										${price}
									</h3>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default HomeMenu;
