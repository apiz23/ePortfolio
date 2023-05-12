import React, { useState } from "react";
import tennis from "./img/tennis.jpg";
import tennis1 from "./img/tennis1.jpg";
import tennis2 from "./img/tennis2.jpg";
import tennis3 from "./img/tennis3.jpg";
import projectCuti2 from "./img/projectCuti2.png";
import tgbAnugerah from "./img/tgb.jpg";
import sem12223 from "./img/sem1388.png";
import sem12122 from "./img/sem1387.png";
import sem22122 from "./img/sem2383.png";
import js from "./img/JS.png";
import reactPic from "./img/react.png";
import cSharp from "./img/cSharp.png";
import fyp from "./img/fypDemo.png";
import mb1 from "./img/mb1.png";
import mb2 from "./img/mb2.png";
import mb3 from "./img/mb3.png";
import mb4 from "./img/mb4.png";
import mb5 from "./img/mb5.png";

export default function Exp() {
	const [selectedCard, setSelectedCard] = useState("");
	const pageProject = [
		{
			imgSrc: fyp,
			title: "FYP",
			desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, alias?",
		},
		{
			imgSrc: projectCuti2,
			title: "Project Cuti2",
			desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, alias?",
		}
	];

	const handleCardClick = (card) => {
		setSelectedCard(card);
	};

	return (
		<>
			<div className="container container-sm mt-5" id="exp">
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
									className="img-fluid rounded-start w-75"
									alt="..."
									style={{float: "left"}}
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
							<div className="row my-3">
								<div className="col col-md-4">
									<button
										className="btn btn-primary"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#multiCollapseExample1"
										aria-expanded="false"
										aria-controls="multiCollapseExample1"
										id="eduBtn"
									>
										1
									</button>
								</div>
								<div className="col col-md-4">
									<button
										className="btn btn-primary"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#multiCollapseExample2"
										aria-expanded="false"
										aria-controls="multiCollapseExample2"
										id="eduBtn"
									>
										2
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
										id="eduBtn"
									>
										3
									</button>
								</div>
							</div>
							<div className="row">
								<div
									className="collapse multi-collapse m-2"
									id="multiCollapseExample1"
								>
									<div className="card card-body">
										<img className="img-fluid" src={tgbAnugerah} alt="" />
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
										<div
											id="carouselExampleInterval"
											class="carousel slide"
											data-bs-ride="carousel"
										>
											<div class="carousel-inner">
												<div
													class="carousel-item active"
													data-bs-interval="2000"
												>
													<img src={sem12223} class="d-block w-100" alt="..." />
												</div>
												<div class="carousel-item" data-bs-interval="2000">
													<img src={sem22122} class="d-block w-100" alt="..." />
												</div>
												<div class="carousel-item">
													<img src={sem12122} class="d-block w-100" alt="..." />
												</div>
											</div>
											<button
												class="carousel-control-prev"
												type="button"
												data-bs-target="#carouselExampleInterval"
												data-bs-slide="prev"
											>
												<span
													class="carousel-control-prev-icon"
													aria-hidden="true"
												></span>
												<span class="visually-hidden">Previous</span>
											</button>
											<button
												class="carousel-control-next"
												type="button"
												data-bs-target="#carouselExampleInterval"
												data-bs-slide="next"
											>
												<span
													class="carousel-control-next-icon"
													aria-hidden="true"
												></span>
												<span class="visually-hidden">Next</span>
											</button>
										</div>
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
										<div
											id="carouselExampleInterval"
											class="carousel slide"
											data-bs-ride="carousel"
										>
											<div class="carousel-inner">
												<div
													class="carousel-item active"
													data-bs-interval="2000"
												>
													<img src={js} class="d-block w-100" alt="..." />
												</div>
												<div class="carousel-item" data-bs-interval="2000">
													<img src={reactPic} class="d-block w-100" alt="..." />
												</div>
												<div class="carousel-item">
													<img src={cSharp} class="d-block w-100" alt="..." />
												</div>
											</div>
											<button
												class="carousel-control-prev"
												type="button"
												data-bs-target="#carouselExampleInterval"
												data-bs-slide="prev"
											>
												<span
													class="carousel-control-prev-icon"
													aria-hidden="true"
												></span>
												<span class="visually-hidden">Previous</span>
											</button>
											<button
												class="carousel-control-next"
												type="button"
												data-bs-target="#carouselExampleInterval"
												data-bs-slide="next"
											>
												<span
													class="carousel-control-next-icon"
													aria-hidden="true"
												></span>
												<span class="visually-hidden">Next</span>
											</button>
										</div>
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
								{pageProject.map((page, index) => (
								<div className="card my-3">
									<div className="card p-2" key={index}>
										<div className="card-body">
											<img className="img-fluid" src={page.imgSrc} alt="" />
											<h5 className="card-title">{page.title}</h5>
											<ul className="list-group">
												<li className="list-group-item">{page.desc}</li>
											</ul>
										</div>
									</div>
								</div>
								))}
						</div>
						<div class="card mb-3">
							<div class="row g-0">
								<div class="col-md-5 p-4">
									<div
										id="carouselExampleInterval"
										class="carousel slide"
										data-bs-ride="carousel"
									>
										<div class="carousel-inner">
											<div class="carousel-item active" data-bs-interval="2000">
												<img src={mb1} class="d-block w-100" alt="..." />
											</div>
											<div class="carousel-item" data-bs-interval="2000">
												<img src={mb2} class="d-block w-100" alt="..." />
											</div>
											<div class="carousel-item">
												<img src={mb3} class="d-block w-100" alt="..." />
											</div>
											<div class="carousel-item">
												<img src={mb4} class="d-block w-100" alt="..." />
											</div>
											<div class="carousel-item">
												<img src={mb5} class="d-block w-100" alt="..." />
											</div>
										</div>
										<button
											class="carousel-control-prev"
											type="button"
											data-bs-target="#carouselExampleInterval"
											data-bs-slide="prev"
										>
											<span
												class="carousel-control-prev-icon"
												aria-hidden="true"
											></span>
											<span class="visually-hidden">Previous</span>
										</button>
										<button
											class="carousel-control-next"
											type="button"
											data-bs-target="#carouselExampleInterval"
											data-bs-slide="next"
										>
											<span
												class="carousel-control-next-icon"
												aria-hidden="true"
											></span>
											<span class="visually-hidden">Next</span>
										</button>
									</div>
								</div>
								<div class="col-md-7">
									<div class="card-body">
										<h5 class="card-title">Perfect Fitness</h5>
										<p class="card-text">
											This is a wider card with supporting text below as a
											natural lead-in to additional content. This content is a
											little bit longer.
										</p>
										<p class="card-text">
											<small class="text-body-secondary">
												Last updated 3 mins ago
											</small>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
}
