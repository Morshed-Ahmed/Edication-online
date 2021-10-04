import React, { useEffect, useState } from 'react';
//import { Card, Col, Row } from 'react-bootstrap';
import './Service.css'
const Service = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch(`course.JSON`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    //console.log(courses)
    return (
        <div className="row py-5 ">
            <h3>SERVICE</h3>
            {
                services.map(service =>
                    <div className="col-md-6 "
                        key={service.key}
                    >
                        <div className="container">
                            <div className=" cart">
                                <div className="logo-img">
                                    <img className="img-fluid" src={service.img} alt="" />
                                </div>

                                <h4>{service.name}</h4>
                                <h5>{service.student}</h5>
                                <h6>{service.price}</h6>
                                <button type="button" className="btn btn-primary">Details</button>

                            </div>
                        </div>
                    </div>
                )
            }

        </div >
    );
};

export default Service;