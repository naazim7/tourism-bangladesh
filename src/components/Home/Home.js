import React from 'react';
import ClientReview from '../ClientReview/ClientReview';
import Footer from '../Footer/Footer';
import Topbanner from '../Header/TopBanner/Topbanner';
import Services from '../Services/Services';
import Charts from '../Charts/Charts';


const Home = () => {
    return (
        <>
            <Topbanner></Topbanner>
            <Services></Services>
            <ClientReview></ClientReview>
            <Charts></Charts>
            <Footer></Footer>

        </>
    );
};

export default Home;