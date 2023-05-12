import React from "react";
import tgb from "./img/mrsm_tgb.jpg";
import uthm from "./img/uthm.jpeg";

export default function Learning() {
	return (
		<>
			<div className="container container-sm mt-5" id="learning">
				<h2>My Learning Journey</h2>
				<div className="row p-3">
					<div className="col-md-6 p-2">
						<div className="card">
							<img src={tgb} className="card-img-top" alt="..." />
							<div className="card-body">
								<h4 className="card-title my-3">Mara Junior Science College Tun Ghafar Baba</h4>
								<div class="accordion" id="accordionExample">
									<div class="accordion-item">
										<h2 class="accordion-header">
											<button
												class="accordion-button"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne"
												aria-expanded="true"
												aria-controls="collapseOne"
											>
												Overview
											</button>
										</h2>
										<div
											id="collapseOne"
											class="accordion-collapse collapse show"
											data-bs-parent="#accordionExample"
										>
											<div class="accordion-body">
												<ol class="list-group list-group-numbered" id="olDesc">
													<li class="list-group-item d-flex justify-content-between align-items-start">
														<div class="ms-2 me-auto">
															<div class="fw-bold">Location</div>
															Jasin, Melaka
														</div>
													</li>
													<li class="list-group-item d-flex justify-content-between align-items-start">
														<div class="ms-2 me-auto">
															<div class="fw-bold">Course</div>
															Science Stream
														</div>
													</li>
													<li class="list-group-item d-flex justify-content-between align-items-start">
														<div class="ms-2 me-auto">
															<div class="fw-bold">Period</div>
															2019 - 2021 (2 Year)
														</div>
													</li>
													<li class="list-group-item d-flex justify-content-between align-items-start">
														<div class="ms-2 me-auto">
															<div class="fw-bold">Academic Programe</div>
															MRSM Bitara
														</div>
													</li>
												</ol>
											</div>
										</div>
									</div>
									<div class="accordion-item">
										<h2 class="accordion-header">
											<button
												class="accordion-button collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseTwo"
												aria-expanded="false"
												aria-controls="collapseTwo"
											>
												Grade & Accomplishment
											</button>
										</h2>
										<div
											id="collapseTwo"
											class="accordion-collapse collapse"
											data-bs-parent="#accordionExample"
										>
											<div class="accordion-body">
												<ul id="olDesc">
													<li>SPM: 3A+ 3A 1A- 2B</li>
													<li>Graduate: First Class (Lower)</li>
													<li>CGPA: 3.58</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 p-2">
						<div class="card">
							<img src={uthm} className="card-img-top" alt="..." />
							<div className="card-body">
								<h4 className="card-title my-3">Universiti Tun Hussein Onn Malaysia</h4>
								<div class="accordion" id="accordionExample">
									<div class="accordion-item">
										<h2 class="accordion-header">
											<button
												class="accordion-button"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseThree"
												aria-expanded="true"
												aria-controls="collapseThree"
											>
												Overview
											</button>
										</h2>
										<div
											id="collapseThree"
											class="accordion-collapse collapse show"
											data-bs-parent="#accordionExample"
										>
											<div class="accordion-body">
												<strong>
													This is the first item's accordion body.
												</strong>{" "}
												It is shown by default, until the collapse plugin adds
												the appropriate classes that we use to style each
												element. These classes control the overall appearance,
												as well as the showing and hiding via CSS transitions.
												You can modify any of this with custom CSS or overriding
												our default variables. It's also worth noting that just
												about any HTML can go within the{" "}
												<code>.accordion-body</code>, though the transition does
												limit overflow.
											</div>
										</div>
									</div>
									<div class="accordion-item">
										<h2 class="accordion-header">
											<button
												class="accordion-button collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseFour"
												aria-expanded="false"
												aria-controls="collapseFour"
											>
												Grade & Accomplishment
											</button>
										</h2>
										<div
											id="collapseFour"
											class="accordion-collapse collapse"
											data-bs-parent="#accordionExample"
										>
											<div class="accordion-body">
												<strong>
													This is the third item's accordion body.
												</strong>{" "}
												It is hidden by default, until the collapse plugin adds
												the appropriate classes that we use to style each
												element. These classes control the overall appearance,
												as well as the showing and hiding via CSS transitions.
												You can modify any of this with custom CSS or overriding
												our default variables. It's also worth noting that just
												about any HTML can go within the{" "}
												<code>.accordion-body</code>, though the transition does
												limit overflow.
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
