import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const ClientReview = () => {


	var settings = {
	autoplay: true,
	autoplaySpeed: 1000,
	vertical: true,
	verticalSwiping: true,
	dots: true,
	infinite: true,
	speed: 2000,
	slidesToShow: 1,
	slidesToScroll: 1,

	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				initialSlide: 1,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
};

    return (
			<>
				<Container className="text-center my-5" fluid="true">
					<h1 className="headline">Client Says</h1>
					<Slider {...settings} className="p-3">
						<Row>
							<Col>
								<div className="text-center centerXY">
									<img
										className="roundedImg"
										src="https://www.bollywoodhungama.com/wp-content/uploads/2021/03/WhatsApp-Image-2021-03-17-at-5.52.11-PM-1.jpeg" alt="img" />
									<h1>Jhon Abraham</h1>
									<p>Lovely Service With Good Helping Mind</p>
								</div>
							</Col>
						</Row>
						<Row>
							<Col>
								<div className="text-center centerXY">
								<img className="roundedImg" src="https://dimikcomputing.com/wp-content/uploads/2016/04/subeen-440x400.jpg" alt="dfd" />
								
									<h1>Tamim</h1>
									<p>Love Their Hospitality</p>
								</div>
							</Col>
						</Row>
						<Row>
							<Col className="my-2">
								<div className="text-center centerXY">
									<img
										className="roundedImg "
										src="https://see.news/wp-content/uploads/2021/07/jr-1140x570.jpg" alt="imag"/>
							
									<h1>Subeen</h1>
									<p>This is Very Good Service I have ever worked with</p>
								</div>
							</Col>
						</Row>
					</Slider>
				</Container>
			</>
		);
};

export default ClientReview;