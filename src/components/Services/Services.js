import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../hooks/useServices';
import Service from './Service';

const Services = () => {
    const [services] = useServices();
    
    return (
        <>
            <div className="headline">Our Packages</div>
            {services.length? <Row className="my-4">

  
            {
                services.map(service =>(<Service key={service._id} service={service}></Service>))
            }

            </Row> :<div className="text-center my-5"><div class="spinner-border" role="status">
  <span class="sr-only"></span>
</div></div>}
            

            </>
    );
};

export default Services;