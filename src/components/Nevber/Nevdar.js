import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nevbar.css'

const Nevdar = () => {
    return (
        <div className="nevbar">
            <nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/course">Course</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/contact">Contact US</NavLink>
            </nav>
        </div>
    );
};

export default Nevdar;