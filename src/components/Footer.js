import React from "react";
import {
	opening_days,
	latest_posts,
	contact_us,
	other_locations,
} from "../sample_data/footer_data";
import "../css/global/_footer.scss";
import footer_background from "../assets/footer-background.jpg";
import { Link } from "react-router-dom";

function Footer() {
	const background = {
		background: `url(${footer_background}) no-repeat center center/cover`,
	};

	return (
		<footer className="footer">
			<div className="main-footer" style={background}>
				<div className="footer-overlay">
					<div className="footer-inner">
						<OpeningHours />
						<LatestPosts />
						<ContactUs />
						<OtherLocations />
					</div>
				</div>
			</div>
			<div className="final-footer">
				<div className="final-inner-footer">
					<div className="footer-icon-container">
						<Link
							className="footer-icon-link"
							to="https://facebook.com"
						>
							<i className="fab fa-facebook-f"></i>
						</Link>
						<Link
							className="footer-icon-link"
							to="https://twitter.com"
						>
							<i className="fab fa-twitter"></i>
						</Link>
						<Link
							className="footer-icon-link"
							to="https://instagram.com"
						>
							<i className="fab fa-instagram"></i>
						</Link>
					</div>
					<div className="footer-rights-wrap">
						<h4 className="footer-rights-text">
							© {new Date().getFullYear()} All rights reserved
						</h4>
					</div>
				</div>
			</div>
		</footer>
	);
}

const OpeningHours = () => {
	return (
		<div className="opening-hours-container">
			<h3 className="opening-hours-heading">opening hours</h3>
			{opening_days.map((day) => {
				const { id, title, time } = day;
				return (
					<div className="opening-hours-wrap" key={id}>
						<h4 className="opening-hours-day">{title}</h4>
						<h4 className="opening-hours-time">{time}</h4>
					</div>
				);
			})}
		</div>
	);
};

const LatestPosts = () => {
	return (
		<div className="latest-posts-container">
			<h3 className="latest-posts-heading">latest posts</h3>
			{latest_posts.map((post) => {
				const { id, title, time } = post;
				return (
					<div className="latest-posts-wrap" key={id}>
						<h4 className="latest-posts-title">{title}</h4>
						<h4 className="latest-posts-time">{time}</h4>
					</div>
				);
			})}
		</div>
	);
};

const ContactUs = () => {
	const { id, email, phone, street, city } = contact_us;
	return (
		<div className="contact-us-container">
			<h3 className="contact-us-heading">contact us</h3>
			<div className="contact-us-wrap" key={id}>
				<h4 className="contact-us-text contact-us-email">{email}</h4>
				<h4 className="contact-us-text">{phone}</h4>
				<h4 className="contact-us-text">{street}</h4>
				<h4 className="contact-us-text">{city}</h4>
			</div>
			<form className="email-form">
				<input
					type="text"
					className="email-input"
					placeholder="Your E-Mail"
				/>
				<button type="submit" className="email-btn">
					<i className="fas fa-chevron-right"></i>
				</button>
			</form>
		</div>
	);
};

const OtherLocations = () => {
	return (
		<div className="other-locations-container">
			<h3 className="other-locations-heading">other locations</h3>
			{other_locations.map((location) => {
				const { id, title, street_address, city_address } = location;
				return (
					<div className="location-container" key={id}>
						<h4 className="location-title">{title}</h4>
						<h4 className="location-address">{street_address}</h4>
						<h4 className="location-address">{city_address}</h4>
					</div>
				);
			})}
		</div>
	);
};

export default Footer;
