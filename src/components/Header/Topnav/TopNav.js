import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const TopNav = () => {
  const { user,logOut } = useAuth();
    return (
        <>
            
<Navbar collapseOnSelect expand="lg" className="topNav" variant="dark">
  <Container>
  <Navbar.Brand href="/home">Travel Bangladesh</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    
      
    </Nav>
    <Nav>
      <Nav.Link as={Link} to='/'>Home</Nav.Link>
      <Nav.Link as={Link} to='/about'>About</Nav.Link>
      
      <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
      
                            
      

     {!user?.email ? (
									
											<Nav.Link as={Link} to="/login">
												Login
											</Nav.Link>
										
                ) : (<>
                    <NavDropdown title="Dashboard" id="collasible-nav-dropdown">
        <NavDropdown.Item as={Link} to="/manageorders">Manage Orders</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/updateorders">Update Orders</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/addservice">Add New Spot</NavDropdown.Item>
        </NavDropdown>
										<Navbar.Text>
											{user.displayName || user.email}
											<Button className="ms-1" variant="danger" size="sm" onClick={logOut}>
												LogOut
											</Button>
										</Navbar.Text>
                  </>
									)}
                
      
                            

      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    );
};

export default TopNav;