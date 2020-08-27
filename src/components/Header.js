import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Logo from '../images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div>
            <div className="head">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 logo">
                        <img className="img-fluid" src={Logo} alt=""/>
                    </div>
                    <div className="menu col-md-9 d-flex align-items-center d-flex justify-content-end">
                        <a href="#">Home</a>
                        <a href="#">Our Courses</a>
                        <a href="#">Shop</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="slider">
            <div className="row d-flex align-items-center d-flex justify-content-center">
                <div className="col-md-5 text-center">
                    <h1  className="sliderTitle">Learn From Online With Our Courses</h1>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Header;