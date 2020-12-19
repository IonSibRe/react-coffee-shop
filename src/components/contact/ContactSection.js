import React from "react";
import { contact_us_data } from "../../sample_data/contact_us_data";

function ContactSection() {
	return (
		<section className="contact-us-section">
			<div className="contact-us-inner-container">
				<div className="write-us-container">
					<div className="contact-us-text-wrap">
						<h2 className="contact-us-title">write us</h2>
						<div className="contact-us-underline"></div>
						<p className="contact-us-paragraph">
							Alienum phaedrum torquatos nec eu, vis detraxit
							periculis ex, nihil expetendis in mei. Mei an
							pericula euripidis, hinc partem ei est. Eos ei nisl
							graecis, vix aperiri nsequat an. Eius lorem
							tincidunt vix at, vel pertinax sensibus id.
						</p>
					</div>
					<div className="write-us-form-wrap">
						<input
							type="text"
							placeholder="Your Name"
							className="contact-us-input"
						/>
						<input
							type="text"
							placeholder="Your Name"
							className="contact-us-input"
						/>
						<textarea
							className="contact-us-textarea"
							placeholder="Your Massage"
						></textarea>
						<div className="contact-us-form-btn-wrap">
							<button
								type="submit"
								className="contact-us-form-btn"
							>
								send
							</button>
						</div>
					</div>
				</div>
				<div className="locations-container">
					<div className="contact-us-text-wrap">
						<h2 className="contact-us-title">locations</h2>
						<div className="contact-us-underline"></div>
						<p className="contact-us-paragraph">
							Alienum phaedrum torquatos nec eu, vis detraxit
							periculis ex, nihil expetendis in mei. Mei an
							pericula euripidis, hinc partem ei est. Eos ei nisl
							graecis, vix aperiri nsequat an. Eius lorem
							tincidunt vix at, vel pertinax sensibus id.
						</p>
					</div>
					<div className="locations-info-container">
						{contact_us_data.map((item) => {
							const {
								id,
								type,
								title,
								street,
								city,
								postal_code,
								phone,
								cell_phone,
								first_email,
								second_email,
							} = item;
							return (
								<>
									{type === "address" && (
										<div
											className="locations-info-item"
											key={id}
										>
											<div className="locations-icon-wrap">
												<i className="fas fa-map-marker-alt locations-icon"></i>
											</div>
											<div className="locations-text-wrap">
												<h3 className="locations-item-title">
													{title}
												</h3>
												<p className="locations-item-text">
													{street}
												</p>
												<p className="locations-item-text">
													{city}
												</p>
												<p className="locations-item-text">
													{postal_code}
												</p>
											</div>
										</div>
									)}

									{type === "phone" && (
										<div
											className="locations-info-item"
											key={id}
										>
											<div className="locations-icon-wrap">
												<i className="fas fa-phone-alt locations-icon"></i>
											</div>
											<div className="locations-text-wrap">
												<h3 className="locations-item-title">
													{title}
												</h3>
												<p className="locations-item-text">
													{phone}
												</p>
												<p className="locations-item-text">
													{cell_phone}
												</p>
											</div>
										</div>
									)}

									{type === "email" && (
										<div
											className="locations-info-item"
											key={id}
										>
											<div className="locations-icon-wrap">
												<i className="far fa-envelope locations-icon"></i>
											</div>
											<div className="locations-text-wrap">
												<h3 className="locations-item-title">
													{title}
												</h3>
												<p className="locations-item-text">
													{first_email}
												</p>
												<p className="locations-item-text">
													{second_email}
												</p>
											</div>
										</div>
									)}
								</>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}

export default ContactSection;
