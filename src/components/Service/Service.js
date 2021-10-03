import React, { useEffect, useState } from 'react';
//import { Card, Col, Row } from 'react-bootstrap';
import './Service.css'
const Service = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch(`course.JSON`)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    console.log(courses)
    return (
        <div className="row">
            {
                courses.map(course =>
                    <div className="col-md-4">
                        <div className="cart">
                            <div className="logo-img">
                                <img className="img-fluid" src={course.img} alt="" />
                            </div>
                            <h3>{course.name}</h3>
                            <p>{course.price}</p>

                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default Service;