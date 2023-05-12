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
								<h3 className="card-title mb-3">High School</h3>
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
					<div className="col-md-6 p-2">
						<div class="card">
							<img src={uthm} className="card-img-top" alt="..." />
							<div className="card-body">
								<h3 className="card-title mb-3">University</h3>
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
