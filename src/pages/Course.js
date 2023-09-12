import './Course.css';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetail from './CourseDetail';
import CourseForm from './CourseForm';

export default function Course() {
    let data = useLoaderData();

    return (
        <div>
            <h1>List of Courses</h1>
            <CourseForm />
            {data.map((course) => (
                <div key={course.id}>
                    <CourseDetail key={course.id} course={course} />
                </div>
            ))}
        </div>
    );
}

export async function loader() {
    //XHR / fetch me jayaga data
    const response = await fetch('http://localhost:8088/api/v1/course/', {
        method: 'GET'
    });

    console.log('Request:', response);

    if (!response.ok) {
        console.error("Error Occured");
        throw new Error('Failed to fetch data');
    }
    // JSON me data aayega network s or Java Script k object m convert krdega json() method
    const responseData = await response.json();
    console.log(responseData);
    return responseData;
}

