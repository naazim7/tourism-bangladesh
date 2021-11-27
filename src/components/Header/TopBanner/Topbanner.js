import React from 'react';
import { Container } from 'react-bootstrap';
import TopNav from '../Topnav/TopNav';

const Topbanner = () => {
    return (
        

        <Container fluid={true} className="topBanner ">

         
            <div className="topBannerOverlay">
                
                <TopNav></TopNav>
            
            <p className="titleText centerXY">Travel Bangladesh</p>
            <p className="titleSubText centerXY"> “Take only memories, leave only footprints”</p>
            
            </div>
            
        </Container>
    );
};

export default Topbanner;