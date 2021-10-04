import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div>

            <div className="row p-5">
                <div className="col-md-6">
                    <h2>Contact Info</h2><hr />
                    <br />
                    <h3>Address</h3>
                    <p>11st Floor New World Tower Miami</p>
                    <h3> Phone</h3>
                    <p>(6348)794-758</p>
                    <h3>Email</h3>
                    <p>support@yourmail.com</p>
                </div>
                <div className="col-md-6">
                    <h2>Send A Message</h2><hr />
                    <br />
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;