
import axios from 'axios';
import { Alert } from 'bootstrap';
import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import Footer from '../Footer/Footer';
import PageTop from '../Header/PageTop/PageTop';



const AddService = () => {
  const history= useHistory()
     const { register, handleSubmit,reset, formState: { errors } } = useForm();
	const onSubmit = data => {
    axios.post('https://frightful-flesh-29607.herokuapp.com/addPlace', data)
    .then(res=>console.log(res))
    

    alert("Added Succesfully")
    history.push('/')
		reset()	};
    return (
        <>
            
            <PageTop title="Add Your Favourite Place"></PageTop>
            <Container className="w-75 mx-auto p-1">


				<Card className="hookForm text-center">
					<div className="headline">Add Your  Favourite Place</div>

    <form onSubmit={handleSubmit(onSubmit)}>
     
      <input placeholder="Enter Your Spot Name" {...register("name",{ required: true })} />
      
     
      <input  placeholder="Price"{...register("price", { required: true })} />
    
      {errors.exampleRequired && <Alert>This field is required</Alert>}
      
      <input  placeholder="Duration in Days"{...register("duration", { required: true })} />
      <input  placeholder="Place ID (Numeric)"{...register("id", { required: true })} />
    
      {errors.exampleRequired && <Alert>This field is required</Alert>}
      
      <input  placeholder="Located In?"{...register("location", { required: true })} />
    
      {errors.exampleRequired && <Alert>This field is required</Alert>}
      <input  placeholder="Image URL"{...register("img", { required: true })} />
    
      {errors.exampleRequired && <Alert>This field is required</Alert>}
      <input  placeholder="Description"{...register("desc", { required: true })} />
    
      {errors.exampleRequired && <Alert>This field is required</Alert>}
      
      <input type="submit" />
    </form>





                    
                </Card>

            </Container>


            <Footer></Footer>
        </>
    );
};

export default AddService;