import React from 'react';
import { NavLink } from 'react-router-dom';
import "../index.css";

const Navbar = () => {
    return (
        <>
            <div clNavLinkssName='container-fluid'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                                <a className="navbar-brand" to="/">ツΝ_হার্টツ</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse nav justify-content-end" id="navbarNavAltMarkup">
                                    <ul className="navbar-nav">
                                        <NavLink activeClassName='menu_active' className="nav-link" aria-current="page" to="/">Home</NavLink>
                                        <NavLink activeClassName='menu_active' className="nav-link" to="/gallery">Gallery</NavLink>
                                        <NavLink activeClassName='menu_active' className="nav-link" to="/videos">Videos</NavLink>
                                        <NavLink activeClassName='menu_active' className="nav-link" to="/contract">Contract</NavLink>
                                        <NavLink activeClassName='menu_active' className="nav-link" to="/about">About</NavLink>
                                        <NavLink activeClassName='menu_active' className="nav-link" to="/login">LogIn</NavLink>
                                        {/* <ul>
                                                <li>
                                                    <a to="#" title=""><i className="fas fa-sign-in-alt"> Log-In </i></a>
                                                </li>
                                                <li>
                                                    <a to="#" title=""><i className="fas fa-edit"> Sign-Up</i></a>
                                                </li>
                                            </ul> */}



                                    </ul>
                                </div>
                            </div>
                        </nav>

                    </div>
                </div>
            </div>

        </>
    );
};

export default Navbar;