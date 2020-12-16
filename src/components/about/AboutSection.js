import React from "react";
import { Link } from "react-router-dom";
import about_img from "../../assets/about-img.png";

const about_data = {
	title: "John Doe",
	desc_1:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum possimus ipsum sapiente, ipsa libero ea corporis deserunt suscipit nobis saepe sunt repellendus aut deleniti magni molestias quisquam non! Doloremque.",
	quote:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus enim in voluptatem.",
	desc_2:
		"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex quasi, libero debitis magnam recusandae minima voluptates eligendi quo voluptas atque tempore velit sed maiores accusantium molestiae enim est natus veniam hic consequatur. Rerum possimus odio unde iste praesentium eaque eligendi.",
};

function AboutSection() {
	const { title, desc_1, quote, desc_2 } = about_data;
	return (
		<section className="about-section">
			<div className="about-inner-container">
				<div className="about-img-container">
					<img src={about_img} alt="" className="about-img" />
				</div>
				<div className="about-text-container">
					<div className="about-text-inner-container">
						<h2 className="about-heading">{title}</h2>
						<p className="about-paragraph">{desc_1}</p>
						<div className="quote-wrap">
							<h3 className="quote-text">{quote}</h3>
						</div>
						<p className="about-paragraph">{desc_2}</p>
						<div className="about-icons-wrap">
							<Link
								to="https://www.facebook.com/"
								className="about-icon"
							>
								<i className="fab fa-facebook"></i>
							</Link>
							<Link
								to="https://twitter.com"
								className="about-icon"
							>
								<i className="fab fa-twitter"></i>
							</Link>
							<Link
								to="https://www.instagram.com/"
								className="about-icon"
							>
								<i className="fab fa-instagram"></i>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutSection;
