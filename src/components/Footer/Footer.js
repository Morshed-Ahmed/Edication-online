import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer-style p-3">
            <h1>EDUCATION SERVICE</h1>
            <div className="footer-styles d-flex justify-content-center text-white">
                <p>Address: <small>11st Floor Newt World Tower Miami</small></p>
                <p>Enail: <small>suppert@yourmail.com</small></p>
                <p>Phone: <small>(6348)794-758</small></p>
            </div>
            <p><small>© 2021 PowerBoosts ALL Right Reserved</small></p>
        </div>
    );
};

export default Footer;