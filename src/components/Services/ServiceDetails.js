import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import PageTop from '../Header/PageTop/PageTop';




const ServiceDetails = () => {
       const {placeID} = useParams();
	const [service,setService]= useState({})

    
   
	useEffect(() => {
		fetch(`https://frightful-flesh-29607.herokuapp.com/packages/${placeID}`)
			.then(res => res.json())
		   .then(data=>setService(data))
	  
  },[])
   
	const url =`/booking/${placeID}`

    return (
			<>
		
				<PageTop title="Packages Details"></PageTop>

				{ service ? 
					<Container className="my-4">
						<Card className="p-3">
							<Row>
								<Col lg={6} md={12} sm={12}>
									<img src={service?.img} className="serviceProfile" alt={service?.name}></img>
								</Col>
								<Col lg={6} md={12} sm={12}>
									<div >
										<p className="fw-bold fs-4">{service.name}</p>
										
                                    <p>{service.desc}</p>
                                    <p className="text-primary fw-bold mt-4">Cost: {service.price} TK</p>
										<p className="fw-bold">Duration{service.duration}Days</p>
                                   <Link to={url}> <Button variant="success" className="text-white mt-5"> Lets Book Tour For {service.name}</Button></Link>
									</div>
								</Col>
							</Row>
						</Card>
					</Container>
				: <div className="text-center my-5"><div class="spinner-border" role="status">
  <span class="sr-only"></span>
</div></div>}
				<Footer></Footer>
			</>
		);
};

export default ServiceDetails;