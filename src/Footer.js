import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
	return (
		<Container fluid className="bg-dark text-white">
			<Row>
				<Col className="text-center py-3">© 2023 Your Website Name</Col>
			</Row>
		</Container>
	);
}