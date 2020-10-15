import { faCalendar, faCog, faFileAlt, faGripHorizontal, faSignOutAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faHdd, faPlus, faShoppingCart, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import logo from '../../../images/logos/logo.png';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);

    useEffect(() => {
        fetch(`https://creative-agency-main.herokuapp.com/admin?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    const newUser = { ...loggedInUser };
                    newUser.setUser = true;
                    setLoggedInUser(newUser)
                }
                else {
                    const newUser = { ...loggedInUser };
                    newUser.setUser = false;
                    setLoggedInUser(newUser)
                }
            })
    }, [])


    return (
        <>
            <Link to="/" >
                <div style={{ textAlign: 'center', marginTop: "20px" }}>
                    <img style={{ height: "50px" }} src={logo} className='img-fluid' alt="" />
                </div>
            </Link>

            <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
                <ul className="list-unstyled">
                    {
                        loggedInUser.setUser ? <div className="my-5">
                            <li>
                                <Link to="/serviceList" className="text-secondary">
                                    <FontAwesomeIcon icon={faHdd} /> <span>Service list admin</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/addService" className="text-secondary">
                                    <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/mainAdmin" className="text-secondary" >
                                    <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                                </Link>
                            </li>
                        </div>
                            :
                            <div>
                                <li>
                                    <Link to="/order" className="text-secondary">
                                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/serviceListO" className="text-secondary">
                                        <FontAwesomeIcon icon={faHdd} /> <span>Service list user</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/review" className="text-secondary">
                                        <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                                    </Link>
                                </li>
                            </div>
                    }

                </ul>
                <div>
                    <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
                </div>
            </div>
        </>
    );
};

export default Sidebar;