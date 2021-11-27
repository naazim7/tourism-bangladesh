import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
	Bar, BarChart, ResponsiveContainer, Tooltip, XAxis
} from "recharts";

const Charts = () => {
	const chartData = [
		{ Country: "Bangladesh", Client: 40 },
		{ Country: "India", Client: 80 },
		{ Country: "Srilanka", Client: 70 },
		{ Country: "USA", Client: 50 },
		{ Country: "Scotland", Client: 100 },
		{ Country: "Netharland", Client: 40 },
		{ Country: "UAE", Client: 70 },
	];
	let fill = "blue";
	return (
		<>	<h1 className="headline mt-3">Client Infromation</h1>
			<Container fluid="true my-4 p-2">
			

				<Row>
					<Col
						lg={6}
						md={12}
						sm={12}
						style={{ width: "100", height: "300px" }}>
						<ResponsiveContainer width="100%" height="100%">
							<BarChart width={100} height={300} data={chartData}>
								<Tooltip />
								<XAxis dataKey="Country" />
								<Bar dataKey="Client" fill="#8884d8" />
							</BarChart>
						</ResponsiveContainer>
					</Col>
					<Col lg={6} md={12} sm={12}>
						<p className="text-justify description">
							Travel Bangladesh is the country’s first and leading online travel aggregator. Initially started with the name Travel Booking BD, we had a dream to make travel easier for people. And that is what we did since our inception. And now with our new, innovative, easy to use app, travel services are on your palm. The dynamic app lets you book your flight, find your perfect holiday from our thousands of holiday packages around the globe.


						</p>
						<p className="text-justify description mt-1">
							Travel Bangladesh is the country’s first and leading online travel aggregator. Initially started with the name Travel Booking BD, we had a dream to make travel easier for people. And that is what we did since our inception. And now with our new, innovative, easy to use app, travel services are on your palm. The dynamic app lets you book your flight, find your perfect holiday from our thousands of holiday packages around the globe.


						</p>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Charts;
