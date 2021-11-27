import React, { useEffect, useState } from 'react';
import { Card, Container, Table } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import PageTop from '../Header/PageTop/PageTop';

const Orders = () => {

    const [orders,setOrders]= useState([])

    
   
	useEffect(() => {
		fetch(`https://frightful-flesh-29607.herokuapp.com/order`)
			.then(res => res.json())
		   .then(data=>setOrders(data))
	  
  },[orders])
    return (
       <>
            <PageTop title="Orders"></PageTop>

            <Container fluid={true}>
                <Card className="text-center my-5">

<Table striped bordered >
  <thead>
    <tr>
      
      <th>Email</th>
      <th>Place</th>
      <th>Duration</th>
    </tr>
  </thead>
  <tbody>
                            {
       orders?.map((order)=>(<tr key={order._id}><td>{order.username}</td>
      <td>{order.name}</td>
      <td>{order.duration}Days</td></tr>))                         

    }
    <tr>
     
      
    </tr>
   
  </tbody>
</Table>

                </Card>

            </Container>

            <Footer></Footer>
         </>
    );
};

export default Orders;