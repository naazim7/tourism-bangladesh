import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
	const {_id}=service;
    	const url=`/packages/${_id}`
    return (
        <>
            <Col lg={4} md={6} sm={12} className="centerXY">
				<Card className="serviceCard">
					<img src={service.img} className="serviceImg" alt="imggs"></img>

                <div className="serviceCardText text-center">
                    <p>{service.name}</p>
                    
                   	<p className="fw-bold">Duration : {service.duration}Days</p>
					<button className="buttonCustom"><Link to={url}>See Details</Link></button>
					</div>
				</Card>
			</Col>
            
            
        </>
    );
};

export default Service;