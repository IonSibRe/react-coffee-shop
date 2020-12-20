import React from "react";
import AboutSection from "../components/about/AboutSection";
import AboutHeader from "../components/about/AboutHeader";
import Footer from "../components/Footer";
import "../css/global/styles.scss";
import "../css/about.scss";

function About() {
	return (
		<>
			<AboutHeader />
			<AboutSection />
			<Footer />
		</>
	);
}

export default About;
