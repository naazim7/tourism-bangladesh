import React, { useEffect, useState } from 'react';
import { Card, Container, Table } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import PageTop from '../Header/PageTop/PageTop';
import TableData from './TableData';

const UpdateOrders = () => {

    const [orders,setOrders]= useState([])

    
   
	useEffect(() => {
		fetch(`https://frightful-flesh-29607.herokuapp.com/order`)
			.then(res => res.json())
		   .then(data=>setOrders(data))
	  
  },[orders])
    return (
       <>
            <PageTop title="Manage Orders"></PageTop>

            <Container fluid={true}>
                <Card className="text-center my-5">

<Table striped bordered >
  <thead>
    <tr>
      
      <th>Package</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
                  {
                  orders?.map((order) => (<TableData key={order._id} order={order}></TableData>))

    }
  
     
      
 
   
  </tbody>
</Table>

                </Card>

            </Container>

            <Footer></Footer>
         </>
    );
};

export default UpdateOrders;