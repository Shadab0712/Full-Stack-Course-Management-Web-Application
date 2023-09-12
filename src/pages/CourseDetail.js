import './CourseDetail.css';
import React from 'react';

export default function CourseDetail(props) {

    return (
        <div>
            <div>
                <h2>{props.course.id}</h2>
            </div>
            <div>
                <h3>{props.course.title}</h3>
                <h3>{props.course.description}</h3>
                <h3>{props.course.duration}</h3>
            </div>
            <h3>{props.course.date}</h3>
            <div>
            </div>
            <hr></hr>
            <br></br>
        </div>
    );
}