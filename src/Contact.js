import React from "react";

export const Contact = () => {
	return (
		<>
			<div className="container container-sm mt-5">
				<div className="row d-flex justify-content-center mx-auto p-3">
					<div className="card text-bg-dark m-3" id="cardContact">
						<div className="card-header">Header</div>
						<div className="card-body">
							<h5 className="card-title">How to get Contact with me?</h5>
							<div
								class="alert alert-warning alert-dismissible fade show"
								role="alert"
							>
								<strong>Click Button below</strong>
								<span class="material-symbols-outlined" id="arrowDown">
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
									className="btn btn-primary"
									data-bs-toggle="collapse"
									href="#multiCollapseExample1"
									role="button"
									aria-expanded="false"
									aria-controls="multiCollapseExample1"
                                    id="btnContact"
								>
									Toggle first element
								</a>
								<div className="row mt-3">
									<div
										className="collapse multi-collapse"
										id="multiCollapseExample1"
									>
										<div className="card card-body">
											Some placeholder content for the first collapse component
											of this multi-collapse example. This panel is hidden by
											default but revealed when the user activates the relevant
											trigger.
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
