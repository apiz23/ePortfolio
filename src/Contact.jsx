import React from "react";

export const Contact = () => {
	return (
		<>
			<div className="container container-sm mt-5" id="contact">
				<div className="row d-flex justify-content-center mx-auto p-3">
					<div className="card text-bg-dark m-3" id="cardContact">
						<div className="card-header">Header</div>
						<div className="card-body">
							<h5 className="card-title">How to get Contact with me?</h5>
							<div
								className="alert alert-warning alert-dismissible fade show mt-3"
								role="alert"
							>
								<strong>Click Button below</strong>
								<span className="material-symbols-outlined" id="arrowDown">
									keyboard_double_arrow_down
								</span>

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
												<span
													className="material-symbols-outlined"
													id="contactIcon"
												>
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
