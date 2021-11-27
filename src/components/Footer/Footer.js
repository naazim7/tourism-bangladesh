import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <>

            <Container fluid={true} className="footerBG text-center">
                <Row>

                    <Col lg={3} md={6} sm={12}>
                     
                        <p className="footerTitle">Address</p>
                        <p className="smallText">ShareTrip Ltd,
                           
                
                            Banani, Dhaka 1213,
                            Bangladesh</p>
                   </Col>
                    <Col lg={3} md={6} sm={12}>
                     
                        <p className="footerTitle">Explore</p>
                     
                        <a className="footerLinks" href="https://github.com/">Spin To Win</a>
                        <a className="footerLinks" href="https://github.com/">Leader Borard</a>
                   </Col>
                    <Col lg={3} md={6} sm={12}>
                     
                        <p className="footerTitle">Help</p>
                        <a className="footerLinks" href="https://github.com/">FAQ</a>
                        <a className="footerLinks" href="https://github.com/">Support Center</a>
                        <a className="footerLinks" href="https://github.com/">Payment Sequrity</a>
                        <a className="footerLinks" href="https://github.com/">Privacy Policy</a>
                        <a className="footerLinks" href="https://github.com/">EMI</a>
                   </Col>
                    <Col lg={3} md={6} sm={12}>
                     
                        <p className="footerTitle">Terms & Condition</p>
                         <a className="footerLinks" href="https://github.com/">General</a>
                         <a className="footerLinks" href="https://github.com/">Company Policy</a>
                   </Col>

                </Row>



           </Container>


        </>
    );
};

export default Footer;