import React, { useState } from "react";
import tennis from "./img/tennis.jpg";
import tennis1 from "./img/tennis1.jpg";
import tennis2 from "./img/tennis2.jpg";
import tennis3 from "./img/tennis3.jpg";

export default function Exp() {
	const [selectedCard, setSelectedCard] = useState("");

	const handleCardClick = (card) => {
		setSelectedCard(card);
	};

	return (
		<>
			<div className="container container-sm mt-5">
				<h2>Experience and Achievement</h2>
				<div className="row my-5">
					<div className="col col-md-3.5 m-3">
						<button
							onClick={() => handleCardClick("sports")}
							type="button"
							id="btnSport"
							className="btn btn-light"
						>
							<p>Sports</p>
						</button>
					</div>
					<div className="col col-md-4">
						<button
							onClick={() => handleCardClick("education")}
							type="button"
							id="btnEducation"
							className="btn btn-light"
						>
							<p>Education</p>
						</button>
					</div>
					<div className="col col-md-3.5 m-3">
						<button
							onClick={() => handleCardClick("projects")}
							stype="button"
							id="btnProjects"
							className="btn btn-light"
						>
							<p>Projects</p>
						</button>
					</div>
				</div>

				{selectedCard === "sports" && (
					<div className="card mb-3">
						<div className="row g-0">
							<div className="col-md-4">
								<img
									src={tennis}
									id="tennis"
									className="img-fluid rounded-start"
									alt="..."
								/>
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">Sports Card title</h5>
									<p className="card-text">
										This is a wider card with supporting text below as a natural
										lead-in to additional content. This content is a little bit
										longer.
									</p>
									<p className="card-text">
										<small className="text-body-secondary">
											Last updated 3 mins ago
										</small>
									</p>
								</div>
							</div>
						</div>
					</div>
				)}

				{selectedCard === "education" && (
					<div className="card mb-3">
						<div className="row g-0">
							<div className="col-md-4">
								<img
									src={tennis2}
									id="education"
									className="img-fluid rounded-start"
									alt="..."
								/>
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">Education Card title</h5>
									<p className="card-text">
										This is a wider card with supporting text below as a natural
										lead-in to additional content. This content is a little bit
										longer.
									</p>
									<p className="card-text">
										<small className="text-body-secondary">
											Last updated 3 mins ago
										</small>
									</p>
								</div>
							</div>
						</div>
					</div>
				)}

				{selectedCard === "projects" && (
					<div className="card mb-3">
						<div className="row g-0">
							<div className="col-md-4">
								<img
									src={tennis3}
									id="projects"
									className="img-fluid rounded-start"
									alt="..."
								/>
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">Projects Card title</h5>
									<p className="card-text">
										This is a wider card with supporting text below as a natural
										lead-in to additional content. This content is a little bit
										longer.
									</p>
									<p className="card-text">
										<small className="text-body-secondary">
											Last updated 3 mins ago
										</small>
									</p>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
}
