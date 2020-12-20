import React from "react";
import { Link } from "react-router-dom";
import { coffeeBuildItems } from "../../sample_data/home_data";

function CoffeeBase() {
	return (
		<section className="coffee_build_section">
			<div className="coffee_build_inner_container">
				<div className="coffee_build_heading_container">
					<h3 className="coffee_build_subtitle">What Happens Here</h3>
					<h2 className="coffee_build_title">
						Coffee Build Your Base.
					</h2>
					<div className="coffee_build_text_underline"></div>
				</div>
				<div className="coffee_build_grid_container">
					{coffeeBuildItems.map((item) => {
						const { id, title, desc, img } = item;
						return (
							<div className="coffee_build_grid_item" key={id}>
								<div className="coffee_build_img_wrap">
									<img
										src={img}
										alt={title}
										className="coffee_build_img"
									/>
								</div>
								<div className="coffee_build_text_wrap">
									<h2 className="coffee_build_item_title">
										{title}
									</h2>
									<p className="coffee_build_item_desc">
										{desc}
									</p>
									<Link
										to="/about"
										className="coffee_build_item_link"
									>
										read more{" "}
										<i className="fas fa-arrow-right link-icon"></i>
									</Link>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default CoffeeBase;
