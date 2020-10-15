import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row p-5">
                    <div className="col-md-6">
                        <h2>Let us handle your <br /> project, professionally.</h2>
                        <p><small>With well written codes, we build amazing apps for all <br /> platforms, mobile and web apps in general.</small></p>
                    </div>
                    <div className="col-md-6">
                        <form action="">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Email Address *" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your name / company’s name *" />
                            </div>
                            <div className="form-group">
                                <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your message *"></textarea>
                            </div>
                            <div className="form-group">
                                <button type="button" className="btn button"> Send </button>
                            </div>
                        </form>
                    </div>
                </div>
                <p className="text-center p-5">copyright Orange labs 2020</p>
            </div>
        </footer>
    );
};

export default Footer;