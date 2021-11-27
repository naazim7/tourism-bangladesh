import React from "react";
import CountUp from "react-countup";

import VisibiltySensor from "react-visibility-sensor"

import { Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Summary = () => {
	return (
		<>
			<Container
				fluid={true}
				className="summaryBanner container-fluid p-0 mt-2">
				<div className="summaryBannerOverlay">
					<Container className="summaryContent">
						<Row className="summarySize">
							<Col lg={4} md={6} sm={12} className="text-center">
								<h1>
									<CountUp start={0} end={100} duration={2}>
										{({ countUpRef, start }) => (
											<VisibiltySensor onChange={start} delayedCall>
												<span ref={countUpRef} />
											</VisibiltySensor>
										)}
									</CountUp>
								</h1>
								<h3>Projects</h3>
							</Col>
							<Col lg={4} md={6} sm={12} className="text-center">
								<h1>
									<CountUp start={0} end={45} duration={2}>
										{({ countUpRef, start }) => (
											<VisibiltySensor onChange={start} delayedCall>
												<span ref={countUpRef} />
											</VisibiltySensor>
										)}
									</CountUp>
								</h1>
								<h3>Projects</h3>
							</Col>
							<Col lg={4} md={6} sm={12}>
								<Card className="workCard">
									<Card.Body>
										<Card.Title className="text-primary text-center">
											What We Teach?
										</Card.Title>
										<Card.Text>
											<p className="sumarrySubTxt">
												<FontAwesomeIcon
													className="bullet"
													icon={faCheckCircle}
												/>
												JavaScript
											</p>
											<p className="sumarrySubTxt ">
												<FontAwesomeIcon
													className="bullet"
													icon={faCheckCircle}
												/>{" "}
												ReacJS
											</p>
											<p className="sumarrySubTxt">
												<FontAwesomeIcon
													className="bullet"
													icon={faCheckCircle}
												/>{" "}
												VueJS
											</p>
											<p className="sumarrySubTxt">
												<FontAwesomeIcon
													className="bullet"
													icon={faCheckCircle}
												/>{" "}
												NodeJS
											</p>
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Container>
				</div>
			</Container>
		</>
	);
};

export default Summary;
