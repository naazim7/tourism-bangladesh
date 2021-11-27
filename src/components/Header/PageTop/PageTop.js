import React from 'react';
import { Container } from 'react-bootstrap';
import TopNav from '../Topnav/TopNav';

const PageTop = (props) => {
    return (
        <>
          <Container fluid={true} className="PagetopBanner ">

         
            <div className="PagetopBannerOverlay">
                
                <TopNav></TopNav>
            
                    <p className="titleTextpage centerXY">{props.title}</p>
           
            
            </div>
            
        </Container>


        </>
    );
};

export default PageTop;