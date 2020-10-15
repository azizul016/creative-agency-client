import React, { useContext } from 'react';
import './Header.css';
import logo from '../../../images/logos/logo.png';
import frame from '../../../images/logos/Frame.png';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflex from '../../../images/logos/netflix.png';
import airbuv from '../../../images/logos/airbnb.png';
import { Link } from 'react-router-dom';
import ServiceLogo from '../ServiceLogo/ServiceLoge';
import { UserContext } from '../../../App';

const Header = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext)
    const service = [
        {
            id: 1,
            image: slack,
        },
        {
            id: 2,
            image: google,
        },
        {
            id: 3,
            image: uber,
        },
        {
            id: 4,
            image: netflex,
        },
        {
            id: 5,
            image: airbuv,
        },
    ]
    return (
        <header>
            <div className="header">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light row">
                        <div className="col-md-4">
                            <Link className="navbar-brand" to="/">
                                <img style={{ height: "45px" }} src={logo} alt="" className="img-fluid" />
                            </Link>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="col-md-8">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <Link style={{ fontWeight: 'bold' }} className="nav-link" to="">Home <span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link style={{ fontWeight: 'bold' }} className="nav-link" to="portfolio">Our Portfolio</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link style={{ fontWeight: 'bold' }} className="nav-link" to="dashboard">Our Team</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link style={{ fontWeight: 'bold' }} className="nav-link" to="contact">Contact Us</Link>
                                    </li>
                                    {loggedInUser.name ? <h5 className="p-2">{loggedInUser.name}</h5> : <Link to="/login"><button className="btn button ml-3">LogIn</button></Link>}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-6 image-padding ">
                            <h2>Let’s Grow Your <br /> Brand To The <br /> Next Level</h2>
                            <p className="my-4"><small>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Purus commodo ipsum duis <br /> laoreet maecenas. Feugiat </small></p>
                            <button className="btn btn-primary">Hire us</button>
                        </div>
                        <div className="col-md-6 image-padding ">
                            <img src={frame} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-2 col-sm-12 mb-3"><img style={{ height: "30px" }} src={slack} alt="" className="img-fluid" /></div>
                    <div className="col-md-2 col-sm-12 mb-3"><img style={{ height: "30px" }} src={google} alt="" className="img-fluid" /></div>
                    <div className="col-md-2 col-sm-12 mb-3"><img style={{ height: "30px" }} src={uber} alt="" className="img-fluid" /></div>
                    <div className="col-md-2 col-sm-12 mb-3"><img style={{ height: "30px" }} src={netflex} alt="" className="img-fluid" /></div>
                    <div className="col-md-2 col-sm-12 mb-3"><img style={{ height: "30px" }} src={airbuv} alt="" className="img-fluid" /></div>
                </div>
            </div>
        </header>
    );
};

export default Header;




// {
//     service.map(sv => <ServiceLogo key={sv.id} service={sv}></ServiceLogo>)
// }