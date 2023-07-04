import React from "react";
import profilePic from "./img/pfp.jpg";
import dataVis from "./img/Python.png";
import webDev from "./img/Webdev.png";
import webFrame from "./img/WebFrame.png";
import mobDev from "./img/mobDev.png";
import others from "./img/others.png";
import dbHost from "./img/dbHost.png";

export default function Intro() {
	return (
		<>
			<div className="container container-sm mt-5 p-3">
				<h2 className="display-4 text-light">INTRODUCTION</h2>
				<div className="row p-3 bg-dark text-light" id="intro">
					<div className="col-lg-6 p-3">
						<img src={profilePic} id="pfp" className="img-fluid" alt="Avatar" />
					</div>
					<div className="col-lg-6">
						<p id="introduction">
							Hello everyone, I'm Muhammad Hafizuddin Bin Abdul Hamid, and I'm
							excited to share my ePortfolio with you. My hometown are in Pagoh
							which a small town in Muar district located in state of Johor
							Darul Takzim and right now I am currently studying at Universiti
							Tun Hussein Onn Malaysia. I love to learn and try new things,
							which has led me to pursue many different interests especially in
							Computer and Mathematics. I'm highly motivated and passionate
							about continuous learning and self-improvement, and I believe that
							staying open-minded is essential for personal and professional
							growth.
						</p>
					</div>
				</div>
				<div className="row p-3 bg-dark text-light" id="whatIam">
					<h3
						id="whatIamTitle"
						style={{ textAlign: "left", margin: "10px 30px 0" }}
					>
						What I Am Good At?
					</h3>
					<div className="col-lg-6 ">
						<p id="introduction">
							As someone who is passionate about coding, critical thinking, and
							the statistical aspects of mathematics, I have honed my
							programming skills over the years. This has given me the
							confidence to take on projects with ease and to utilize a range of
							computer literacy skills which are:
							<ul class="list-group list-group-flush mt-3">
								<li class="list-group-item">React,Bootstrap Framework</li>
								<li class="list-group-item">Web Development</li>
								<li class="list-group-item">Object Oriented Programming</li>
								<li class="list-group-item">Data Visualization</li>
								<li class="list-group-item">Database & Hosting</li>
							</ul>
						</p>
					</div>
					<div className="col-lg-6 p-3">
						<div
							id="carouselExampleAutoplaying"
							class="carousel slide"
							data-bs-ride="carousel"
						>
							<div class="carousel-inner">
								<div class="carousel-item active">
									<img src={dataVis} class="d-block w-100" alt="..." />
								</div>
								<div class="carousel-item">
									<img src={webDev} class="d-block w-100" alt="..." />
								</div>
								<div class="carousel-item">
									<img src={webFrame} class="d-block w-100" alt="..." />
								</div>
								<div class="carousel-item">
									<img src={mobDev} class="d-block w-100" alt="..." />
								</div>
								<div class="carousel-item">
									<img src={dbHost} class="d-block w-100" alt="..." />
								</div>
								<div class="carousel-item">
									<img src={others} class="d-block w-100" alt="..." />
								</div>
							</div>
							<button
								class="carousel-control-prev"
								type="button"
								data-bs-target="#carouselExampleAutoplaying"
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
								data-bs-target="#carouselExampleAutoplaying"
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
				</div>
			</div>
		</>
	);
}
