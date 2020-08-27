import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Courses.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
const Courses = (props) => {
    const {name, student, fee, teacher, pic} = props.course;
    return (
        <div className="col-md-4">
            <div  className="singleCourse">
                <img className="img-fluid" src={pic} alt=""/>
                <h2>{name}</h2>
                <p>Instructor: {teacher}</p>
                <p>Students: {student}</p>
                <p>Price: ${fee}</p>
                <button type="button" className="btn btn-outline-success" onClick={ () => props.click(props.course)}> Enroll Now <FontAwesomeIcon icon={faAngleDoubleRight} /></button>
            </div>
        </div>
    );
};

export default Courses;