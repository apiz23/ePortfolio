import React, { useState } from "react";
import tennis from "./img/tennis.jpg";
import projectCuti2 from "./img/projectCuti2.png";
import tgbAnugerah from "./img/tgb.jpg";
import sem12223 from "./img/sem1388.png";
import sem12122 from "./img/sem1387.png";
import sem22122 from "./img/sem2383.png";
import js from "./img/JS.png";
import reactPic from "./img/react.png";
import cSharp from "./img/cSharp.png";
import fyp from "./img/fypDemo.png";
import fyp1 from "./img/Home.png"
import mb1 from "./img/mb1.png";
import mb2 from "./img/mb2.png";
import mb3 from "./img/mb3.png";
import mb4 from "./img/mb4.png";
import mb5 from "./img/mb5.png";
import mc from "./img/mc.jpg"

export default function Exp() {
	const [selectedCard, setSelectedCard] = useState("");
	const pageProject = [
		{
			imgSrc: fyp1,
			title: "Final Year Project",
			desc: "Making a Booking system for UTHM focusing in space and equipment",
		},
		{
			imgSrc: projectCuti2,
			title: "Project Cuti2",
			desc: "Personal project that I have been working on during my semester break",
		},
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
					<div className="card mb-3 mx-auto" style={{ width: "fit-content" }}>
						<div className="row g-0">
							<div className="col-md-4 mx-auto">
								<img
									src={tennis}
									id="tennis"
									className="img-fluid rounded-start"
									alt="..."
								/>
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h2 className="card-title my-3">
										Tennis Open Tournament (State Level)
									</h2>
									<p className="card-text mt-3">
										<ol
											class="list-group list-group-numbered mx-auto"
											id="olDesc"
										>
											<li class="list-group-item d-flex justify-content-between align-items-start">
												<div class="ms-2 me-auto">
													<div class="fw-bold">Location</div>
													Kompleks Tenis Ayer Keroh, Melaka
												</div>
											</li>
											<li class="list-group-item d-flex justify-content-between align-items-start">
												<div class="ms-2 me-auto">
													<div class="fw-bold">Category</div>
													Single & Double
												</div>
											</li>
											<li class="list-group-item d-flex justify-content-between align-items-start">
												<div class="ms-2 me-auto">
													<div class="fw-bold">Period</div>
													April 2019
												</div>
											</li>
											<li class="list-group-item d-flex justify-content-between align-items-start">
												<div class="ms-2 me-auto">
													<div class="fw-bold">Award</div>
													Top 8 Single Men & Second Place Double Men
												</div>
											</li>
										</ol>
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
									<img className="img-fluid rounded" src={tgbAnugerah} alt="" />
									<h2 className="m-3">Dean's award certificate (MRSM)</h2>
								</div>

								<div
									className="collapse multi-collapse m-2"
									id="multiCollapseExample2"
								>
									<div
										id="carouselExampleInterval"
										class="carousel slide"
										data-bs-ride="carousel"
									>
										<div class="carousel-inner">
											<div class="carousel-item active" data-bs-interval="2000">
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
									<h2 className="m-3">Dean's award certificate (UTHM)</h2>
								</div>
								<div
									className="collapse multi-collapse m-2"
									id="multiCollapseExample3"
								>
									<div
										id="carouselExampleControlsNoTouching"
										class="carousel slide"
										data-bs-touch="false"
									>
										<div class="carousel-inner">
											<div class="carousel-item active">
												<img src={js} class="d-block w-100" alt="..." />
											</div>
											<div class="carousel-item">
												<img src={reactPic} class="d-block w-100" alt="..." />
											</div>
											<div class="carousel-item">
												<img src={cSharp} class="d-block w-100" alt="..." />
											</div>
										</div>
										<button
											class="carousel-control-prev"
											type="button"
											data-bs-target="#carouselExampleControlsNoTouching"
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
											data-bs-target="#carouselExampleControlsNoTouching"
											data-bs-slide="next"
										>
											<span
												class="carousel-control-next-icon"
												aria-hidden="true"
											></span>
											<span class="visually-hidden">Next</span>
										</button>
									</div>
									<h2 className="m-3">
										Completed Courses Certificate at Sololearn Website
									</h2>
								</div>
							</div>
						</div>
					</div>
				)}

				{selectedCard === "projects" && (
					<div className="row g-0">
						<div className="card-body">
							{pageProject.map((page, index) => (
								<div className="card my-3" style={{ border: "none" }}>
									<div
										className="card p-2"
										key={index}
										style={{ border: "none" }}
									>
										<div className="card-body">
											<img className="img-fluid rounded p-3" src={page.imgSrc} alt="" />
											<h3 className="card-title">{page.title}</h3>
											<ul className="list-group">
												<li className="list-group-item" id="textProjects">
													{page.desc}
												</li>
											</ul>
										</div>
									</div>
								</div>
							))}
						</div>
						<div class="card mb-3 mt-3" style={{ border: "none" }}>
							<div class="row g-0">
								<div class="col-md-5 mx-auto">
									<div
										id="carouselMCSlide"
										className="carousel slide mx-auto" style={{width: "350px"}}
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
											data-bs-target="#carouselMCSlide"
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
											data-bs-target="#carouselMCSlide"
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
									<div class="card-body p-3" style={{width: "fit-content"}}>
										<h3 class="card-title">Perfect Fitness</h3>
										<p class="card-text" id="textProjects">
											Perfect Fitness is an app that was developed by my group
											during our second semester in junior year for our Mobile
											Computing class.
										</p>
										<p class="card-text" id="textProjects">
											Awards: <strong>Runner Up</strong>
										</p>
										<img src={mc} className="img-fluid rounded" alt="" />
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
