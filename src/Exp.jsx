import React, { useState } from "react";
import tennis from "./img/tennis.jpg";
import tennis1 from "./img/tennis1.jpg";
import tennis2 from "./img/tennis2.jpg";
import tennis3 from "./img/tennis3.jpg";
import projectCuti2 from "./img/projectCuti2.png"

export default function Exp() {
	const [selectedCard, setSelectedCard] = useState("");
	const [pageProject, setPageProject] = useState([
		{
			gmbr: {projectCuti2},
			title: "Final Year Projects",
			desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis enim amet cumque, cum blanditiis pariatur voluptates accusantium sunt deleniti illum velit numquam iusto similique aspernatur, consequuntur tenetur, rem asperiores in.",
		},
		{
			title: "Project Cuti2",
			desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis enim amet cumque, cum blanditiis pariatur voluptates accusantium sunt deleniti illum velit numquam iusto similique aspernatur, consequuntur tenetur, rem asperiores in.",
		},
		{
			title: "Mobile Computing Projects",
			desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis enim amet cumque, cum blanditiis pariatur voluptates accusantium sunt deleniti illum velit numquam iusto similique aspernatur, consequuntur tenetur, rem asperiores in.",
		},
	]);

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
					<div className="card text-center">
						<div className="card-header">
							<h1>Education</h1>
						</div>
						<div className="card-body">
							<div className="row">
								<div className="col col-md-4">
									<a
										className="btn btn-primary"
										data-bs-toggle="collapse"
										href="#multiCollapseExample1"
										role="button"
										aria-expanded="false"
										aria-controls="multiCollapseExample1"
									>
										Toggle first element
									</a>
								</div>
								<div className="col col-md-4">
									<button
										className="btn btn-primary"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#multiCollapseExample2"
										aria-expanded="false"
										aria-controls="multiCollapseExample2"
									>
										Toggle second element
									</button>
								</div>
								<div className="col col-md-4">
									<button
										className="btn btn-primary"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#multiCollapseExample3"
										aria-expanded="false"
										aria-controls="multiCollapseExample3"
									>
										Toggle both elements
									</button>
								</div>
							</div>
							<div className="row m-3">
								<div
									className="collapse multi-collapse m-2"
									id="multiCollapseExample1"
								>
									<div className="card card-body">
										Some placeholder content for the first collapse component of
										this multi-collapse example. This panel is hidden by default
										but revealed when the user activates the relevant trigger.
									</div>
								</div>

								<div
									className="collapse multi-collapse m-2"
									id="multiCollapseExample2"
								>
									<div className="card card-body">
										Some placeholder content for the second collapse component
										of this multi-collapse example. This panel is hidden by
										default but revealed when the user activates the relevant
										trigger.
									</div>
								</div>
								<div
									className="collapse multi-collapse m-2"
									id="multiCollapseExample3"
								>
									<div className="card card-body">
										Some placeholder content for the second collapse component
										of this multi-collapse example. This panel is hidden by
										default but revealed when the user activates the relevant
										trigger.
									</div>
								</div>
							</div>
						</div>
					</div>
				)}

				{selectedCard === "projects" && (
					<div className="row g-0">
						<div className="card-body">
							{pageProject.map((page) => {
								return (
									<div className="card my-3">
										<div className="card-body">
											<h5 className="card-title">{page.title}</h5>
											<ul className="list-group">
												<li className="list-group-item">{page.desc}</li>
											</ul>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				)}
			</div>
		</>
	);
}
