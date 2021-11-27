import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import PageTop from '../Header/PageTop/PageTop';

const About = () => {
    return (
        <>
            <PageTop title="About Us"></PageTop>

            <Container fluid="true">
              
                <Card className="p-5">
                    <div className="headline mb-3">Who are We?</div>
                    <p className="m-2">Travel Bangladesh is the country’s first and leading online travel aggregator. Initially started with the name Travel Booking BD, we had a dream to make travel easier for people. And that is what we did since our inception. And now with our new, innovative, easy to use app, travel services are on your palm. The dynamic app lets you book your flight, find your perfect holiday from our thousands of holiday packages around the globe.</p>
                    <p  className="m-2">
                        Travel Bangladesh is revolutionizing the way we book travel services. With Travel Bangladesh’s website and mobile app, booking your flight, hotel or holiday become more fun that you would think. With exciting games and real rewards like free trips and air ticket makes Travel Bangladesh more fun to use! You can also win TripCoin by playing games and booking service from Travel Bangladesh, that you can use to avail discount.


                    </p>
                    <p  className="m-2">We have more than 100 employees, who are all experts in their respective fields. They have the experience and professionalism to understand each and every customer's requirements and fulfill it. With today’s era of digitalization, where everyone has a lot of information and choice in hand, our clients still choose us. Because we provide the best rates and wide range of choices for your accommodations and travel plans.</p>
                    
               </Card>

            </Container>
          <Footer></Footer>            


        </>
    );
};

export default About;