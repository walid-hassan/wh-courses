import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {name, student, fee, teacher, pic} = props.course;
    return (           
            <div className="row singleItem">
                <div className="col-md-4 coursePic">
                    <img className="img-fluid" src={pic} alt=""/>
                </div>
                <div className="col-md-5 courseName">
                    <h6>{name}</h6>
                </div>
                <div className="col-md-3 coursePrice">
                    <p>${fee}</p>
                </div>
            </div>
    )
};

export default Cart;