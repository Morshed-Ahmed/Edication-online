import React from 'react';
import Button from 'react-bootstrap/Button'
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner-style text-white">
            <div className="row style ">

                <div className="col-md-6 text-white  ">
                    <div >
                        <h2>BE THE BASKETBALL
                            STAR AND SHINE</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                        <Button variant="primary">About Us</Button>{' '}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;