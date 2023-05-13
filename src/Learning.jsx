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
								<h4 className="card-title my-3">
									Mara Junior Science College Tun Ghafar Baba
								</h4>
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
												Grade
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
								<h4 className="card-title my-3">
									Universiti Tun Hussein Onn Malaysia
								</h4>
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
												<ol class="list-group list-group-numbered" id="olDesc">
													<li class="list-group-item d-flex justify-content-between align-items-start">
														<div class="ms-2 me-auto">
															<div class="fw-bold">Location</div>
															Pagoh, Muar
														</div>
													</li>
													<li class="list-group-item d-flex justify-content-between align-items-start">
														<div class="ms-2 me-auto">
															<div class="fw-bold">Course</div>
															Diploma Information Technology
														</div>
													</li>
													<li class="list-group-item d-flex justify-content-between align-items-start">
														<div class="ms-2 me-auto">
															<div class="fw-bold">Period</div>
															2021 - 2024 (2 Year)
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
												data-bs-target="#collapseFour"
												aria-expanded="false"
												aria-controls="collapseFour"
											>
												Grade
											</button>
										</h2>
										<div
											id="collapseFour"
											class="accordion-collapse collapse"
											data-bs-parent="#accordionExample"
										>
											<div class="accordion-body">
												<div class="row">
													<div class="col-4">
														<div
															class="list-group"
															id="list-tab"
															role="tablist"
														>
															<a
																class="list-group-item list-group-item-action active"
																id="list-home-list"
																data-bs-toggle="list"
																href="#list-home"
																role="tab"
																aria-controls="list-home"
															>
																CPA
															</a>
															<a
																class="list-group-item list-group-item-action"
																id="list-profile-list"
																data-bs-toggle="list"
																href="#list-profile"
																role="tab"
																aria-controls="list-profile"
															>
																GPA's
															</a>
															<a
																class="list-group-item list-group-item-action"
																id="list-messages-list"
																data-bs-toggle="list"
																href="#list-messages"
																role="tab"
																aria-controls="list-messages"
															>
																Subject
															</a>
														</div>
													</div>
													<div class="col-8">
														<div class="tab-content" id="nav-tabContent">
															<div
																class="tab-pane fade show active"
																id="list-home"
																role="tabpanel"
																aria-labelledby="list-home-list"
															>
																3.84
															</div>
															<div
																class="tab-pane fade"
																id="list-profile"
																role="tabpanel"
																aria-labelledby="list-profile-list"
															>
																<ul id="olDesc">
																	<li>Sem 0 21/22: 3.71</li>
																	<li>Sem 1 21/22: 3.87</li>
																	<li>Sem 2 21/22: 3.83</li>
																	<li>Sem 1 22/23: 3.88</li>
																</ul>
															</div>
															<div
																class="tab-pane fade"
																id="list-messages"
																role="tabpanel"
																aria-labelledby="list-messages-list"
															>
																<ul id="olDesc">
																	<li>Object Oriented Programming</li>
																	<li>Web Development</li>
																	<li>Mobile Computing</li>
																	<li>Principle of Programming</li>
																	<li>System Analysis & Design</li>
																	<li>Database</li>
																</ul>
															</div>
														</div>
													</div>
												</div>
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
