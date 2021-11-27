import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Table } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import PageTop from '../Header/PageTop/PageTop';

const ManageOrders = () => {
  

    const [orders,setOrders]= useState([])

    
   
	useEffect(() => {
		fetch(`https://frightful-flesh-29607.herokuapp.com/order`)
			.then(res => res.json())
		   .then(data=>setOrders(data))
	  
  }, [orders])
  

  const deleteOrder = (id) => {
    alert('Are You Sure ?')
    axios.delete(`https://frightful-flesh-29607.herokuapp.com/order/${id}`)
    
  }
    return (
       <>
            <PageTop title="Manage Orders"></PageTop>

            <Container fluid={true}>
                <Card className="text-center my-5">

<Table striped bordered >
  <thead>
    <tr>
      
      <th>Name</th>
      <th>Place</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
                            {
       orders?.map((order)=>(<tr><td>{order.username}</td>
      <td>{order.name}</td>
      <td><Button variant="danger" onClick={()=>{deleteOrder(order._id)}}>Delete</Button></td></tr>))                         

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

export default ManageOrders;