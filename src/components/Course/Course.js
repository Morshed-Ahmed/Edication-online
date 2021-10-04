import React, { useEffect, useState } from 'react';
import './Course.css'

const Course = () => {
    const [courses, setCourse] = useState([])
    useEffect(() => {
        fetch(`courses.JSON`)
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])
    // console.log(courses)
    return (
        <div className="row py-4 ">
            <h3 className="">COURSE</h3>
            {
                courses.map(course =>
                    <div className="col-md-4"
                        key={course.key}
                    >
                        <div className="cart-style">
                            <div className="logo-img">
                                <img className="img-fluid" src={course.img} alt="" />
                            </div>
                            <h3>{course.name}</h3>
                            <h5>{course.student}</h5>
                            <p>{course.price}</p>
                            <button type="button" className="btn btn-primary">Details</button>

                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default Course;