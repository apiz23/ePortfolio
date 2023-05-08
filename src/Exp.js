import React from "react";
import tennis from "./img/tennis.jpg";
import tennis1 from "./img/tennis1.jpg";
import tennis2 from "./img/tennis2.jpg";
import tennis3 from "./img/tennis3.jpg";

export default function Exp() {
	return (
		<>
			<div className="container container-sm mt-5">
				<h2>Experience and Achievement</h2>
				<div className="row my-5">
					<div className="col col-md-3.5 m-3">
						<button type="button" id="btnSport" className="btn btn-light">
							<p>Sports</p>
						</button>
					</div>
					<div className="col col-md-4">
						<button type="button" id="btnEducation" className="btn btn-light">
							<p>Education</p>
						</button>
					</div>
					<div className="col col-md-3.5 m-3">
						<button type="button" id="btnProjects" className="btn btn-light">
							<p>Projects</p>
						</button>
					</div>
				</div>
				{/* tennis */}
				<div class="card mb-3">
					<div class="row g-0">
						<div class="col-md-4">
							<img
								src={tennis}
								id="tennis"
								className="img-fluid rounded-start"
								alt="..."
							/>
						</div>
						<div class="col-md-8">
							<div class="card-body">
								<h5 class="card-title">Card title</h5>
								<p class="card-text">
									This is a wider card with supporting text below as a natural
									lead-in to additional content. This content is a little bit
									longer.
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
				<div class="card mb-3">
					<div class="row g-0">
						<div class="col-md-4">
							<img
								src={tennis}
								id="tennis"
								className="img-fluid rounded-start"
								alt="..."
							/>
						</div>
						<div class="col-md-8">
							<div class="card-body">
								<h5 class="card-title">Card title</h5>
								<p class="card-text">
									This is a wider card with supporting text below as a natural
									lead-in to additional content. This content is a little bit
									longer.
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
				<div class="card mb-3">
					<div class="row g-0">
						<div class="col-md-4">
							<img
								src={tennis}
								id="tennis"
								className="img-fluid rounded-start"
								alt="..."
							/>
						</div>
						<div class="col-md-8">
							<div class="card-body">
								<h5 class="card-title">Card title</h5>
								<p class="card-text">
									This is a wider card with supporting text below as a natural
									lead-in to additional content. This content is a little bit
									longer.
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
		</>
	);
}
