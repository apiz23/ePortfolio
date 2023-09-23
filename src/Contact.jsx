import React from "react";

export const Contact = () => {
	return (
		<>
			<div className="container container-sm mt-5" id="contact">
				<div className="row d-flex justify-content-center mx-auto p-3">
					<div className="card text-bg-warning m-3" id="cardContact">
						<h2 className=" title-contact m-3">Contact</h2>

						<div className="card-body">
							<h5 className="card-title">How to get Contact with me?</h5>
							<div
								className="alert alert-warning alert-dismissible fade show mt-3"
								role="alert"
							>
								<strong>Click Button below</strong>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									fill="currentColor"
									class="bi bi-caret-down-fill mx-2"
									viewBox="0 0 16 16"
								>
									<path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
								</svg>

								<button
									type="button"
									class="btn-close"
									data-bs-dismiss="alert"
									aria-label="Close"
								></button>
							</div>
							<p className="card-text">
								<a
									className="btn btn-primary mt-3"
									data-bs-toggle="collapse"
									href="#multiCollapseExampleContact"
									role="button"
									aria-expanded="false"
									aria-controls="multiCollapseExampleContact"
									id="btnContact"
								>
									Here !
								</a>
								<div className="row mt-3">
									<div
										className="collapse multi-collapse"
										id="multiCollapseExampleContact"
									>
										<div className="card card-body" style={{ color: "black" }}>
											<p>
												<span className="material-symbols-outlined" id="contactIcon">
													call
												</span>
												+601111263463
											</p>
											<p>
												<span class="material-symbols-outlined">mail</span>{" "}
												piz230601@gmail.com
											</p>
										</div>
									</div>
								</div>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
