import React from "react";
import ContactSection from "../components/contact/ContactSection";
import ContactHeader from "../components/contact/ContactHeader";
import Footer from "../components/Footer";
import "../css/global/styles.scss";
import "../css/contact.scss";

function Contact() {
	return (
		<>
			<ContactHeader />
			<ContactSection />
			<Footer />
		</>
	);
}

export default Contact;
