import React from "react";
import { Contact } from "./Contact";
import Exp from "./Exp";
import Footer from "./Footer";
import intro from "./img/intro.JPG";
import Intro from "./Intro";
import Learning from "./Learning";
import "./Main.scss";
import Navbar from "./Navbar";

export default function Main() {
	return (
		<>
			<section className="sec">
				<Navbar />
				<div className="row p-3">
					<div className="container container-lg" id="bannerDiv">
						<img
							src={intro}
							id="banner"
							className="img-fluid rounded"
							alt="Responsive image"
						/>
					</div>
				</div>
				<Intro />
				<Learning />
				<Exp />
				<Contact />
				<Footer />
			</section>
		</>
	);
}
