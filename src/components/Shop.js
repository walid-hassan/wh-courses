import React, { useState } from 'react';
import './Shop.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Fakedata from '../fakeData/course'
import Courses from './Courses';
import Cart from './Cart';
const Shop = () => {
    const allCourses = Fakedata;
    const [courses, setCourse] = useState([]);
    const click = (course) => {
        let clickedCourse = [...courses, course];
        setCourse(clickedCourse);
        console.log(clickedCourse);
    };
    let total = 0;
    for (let i = 0; i < courses.length; i++) {
        const price = courses[i].fee;
        total = total + price;
        
    }
    const grandTotal = total.toFixed(2);
    return (
        <div className="shop">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 allCourse">
                        <div className="row">
                            {
                                allCourses.map( course => <Courses click={click} course= {course}></Courses>)
                            }
                        </div>
                    </div>
                    <div className="col-md-4 cartArea ">
                            <div className="row">
                                <div className="col-md-12 courseNumber">
                                    <h2>Selected Courses: {courses.length}</h2>
                                </div>
                                <div className="col-md-12">
                                    {
                                        courses.map( course => <Cart key={course.id} course={course}></Cart>)
                                    }
                                </div>
                                <div className="col-md-12 total text-center">
                                    <h2>Total Price: ${grandTotal}</h2>
                                    <button type="button" className="btn btn-outline-info"> Check Out </button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;