import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import Footer from '../Footer/Footer';
import PageTop from '../Header/PageTop/PageTop';
import useAuth from '../hooks/useAuth';

const Booking = () => {
    const history = useHistory();
    
    const { user } = useAuth()
    const [status,setStatus]=useState({status:'Pending'})
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const onSubmit = data => {
    const result= {...data,...status
        }
        axios.post('https://frightful-flesh-29607.herokuapp.com/order',result)
            .then(res => {
        if (res.data.insertedId) {
                    
            alert("Added Succesfully")
            reset()
            history.push('/orders')
        }
    })
    

		
    	};
        const {placeID} = useParams();

    const [service,setService]= useState({})

    
   
	useEffect(() => {
		fetch(`https://frightful-flesh-29607.herokuapp.com/packages/${placeID}`)
			.then(res => res.json())
		   .then(data=>setService(data))
	  
  },[placeID])
    return (
        <>
            
            <PageTop title="Booking "></PageTop>


            <Container className="w-75 mx-auto p-1">


				<Card className="hookForm text-center">
					<div className="headline">Make Sure Your Info</div>

    {service?.name ?<form onSubmit={handleSubmit(onSubmit)}>
    
      <input  defaultValue={service?.name} {...register("name")} />
      
    
      <input   defaultValue={service?.price}{...register("price")} />
    
     

      <input  defaultValue={service?.duration}{...register("duration")} />
      
    
   
      <input defaultValue={user?.email} {...register("email")} />
      <input defaultValue={user?.displayName} {...register("username")} />
      <input placeholder="Enter Your Phone Number" {...register("phone", { required: true })} />
    
     
      
    
    
     
      
    
      
      
      
      <input type="submit" />
    </form> : <div className="text-center my-5"><div class="spinner-border" role="status">
  <span class="sr-only"></span>
</div></div>
}




                    
                </Card>

            </Container>

            <Footer></Footer>
            


        </>
    );
};

export default Booking;