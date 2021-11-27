import {
    faGoogle
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from "react-router-dom";
import login from '../../assets/images/Login.jpg';
import Footer from '../Footer/Footer';
import PageTop from '../Header/PageTop/PageTop';
import useAuth from "../hooks/useAuth";

const Login = () => {
    const { googleSignIn, emailSignIn, setEmail, setPassword, error, user, setError, setUser, setLoading } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const url = location.state?.from || "/home";


 const handleEmail = (e) => {
		e.preventDefault();
		setEmail(e.target.value);
 };

 const handlePassword = (e) => {
		e.preventDefault();
		setPassword(e.target.value);
 };

	
	
	
	const handleGoogleSignIn = () => {
		googleSignIn()
			.then((result) => {
				history.push(url);
			})
			.catch((error) => {
				const errorMessage = error.message;
				setError(errorMessage);
			})
			.finally(() => setLoading(false));
      
	
	}










	
	const handleEmailSignIn = (e) => {
		   e.preventDefault();
	
		           emailSignIn()
									.then(() => {
										history.push(url);
									})
									.catch((error) => {
										const errorMessage = error.message;
										setError(errorMessage);
									})
									.finally(() => setLoading(false));
	}
	













    return (
        <>

           <PageTop title="Login"></PageTop>
        <Row>
            <Col lg={6} sm={12}>
<img src={login} alt="Login" className="img-fluid" />
            </Col>
                <Col lg={6} sm={12}>
                      <h1 className="text-center text-primary my-3">Login</h1>

                    <Form onSubmit={handleEmailSignIn}>
								
								
									<Form.Group className="mb-3" controlId="formBasicEmail">
										<Form.Label>Email address</Form.Label>
										<Form.Control type="email" placeholder="Enter email" onBlur={handleEmail} />
										<Form.Text className="text-muted">
											We'll never share your email with anyone else.
										</Form.Text>
									</Form.Group>
									<Form.Group className="mb-3" controlId="formBasicPassword">
										<Form.Label>Password</Form.Label>
										<Form.Control type="password" placeholder="Password" onBlur={handlePassword} />
									</Form.Group>
									{error && <Alert>{error}</Alert>}
									<Button variant="success" type="submit" >
										LogIn
									</Button>
									<p className="my-2">
										New Here? <Link to="/register">Regiser</Link>
									</p>
								
									<Button
										variant="dark"
									
										onClick={handleGoogleSignIn}>
										<FontAwesomeIcon
											icon={faGoogle}
											style={{ color: "green" }}
										/>
										Login Using Google
									</Button>
								</Form> 










            </Col>
</Row>
<Footer></Footer>


</>

    );
};

export default Login;