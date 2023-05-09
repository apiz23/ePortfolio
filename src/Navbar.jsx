import React from "react";

export default function Navbar() {
	return (
		<>
			<section class="navigation">
				<div class="nav-container">
					<div class="brand">
						<a href="#!">Code by: Hafiz</a>
					</div>
					<nav>
						<div class="nav-mobile">
							<a id="nav-toggle" href="#!">
								<span></span>
							</a>
						</div>
						<ul class="nav-list">
							<li>
								<a href="#!">Who Am I?</a>
							</li>
							<li>
								<a href="#!">Education</a>
							</li>
							<li>
								<a href="#!">Experience & Achivement</a>
							</li>
							<li>
								<a href="#!">Contact</a>
							</li>
						</ul>
					</nav>
				</div>
			</section>
		</>
	);
}
