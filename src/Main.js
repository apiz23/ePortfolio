import React from "react";
import { Contact } from "./Contact";
import Exp from "./Exp";
import intro from "./img/intro.JPG";
import Intro from "./Intro";
import Learning from "./Learning";
import "./Main.scss";
import Navbar from "./Navbar";

export default function Main() {
	return (
		<>
			<Navbar />
			<div className="row p-3">
				<div className="container container-lg">
					<img
						src={intro}
						id="banner"
						className="rounded"
						alt="Responsive image"
					/>
				</div>
			</div>
			<Intro />
			<Learning />
			<Exp />
			<Contact />
		</>
	);
}
