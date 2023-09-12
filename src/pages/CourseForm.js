import './CourseForm.css';
import React, { useState } from 'react';

import {
    Form,
    useNavigate,
    useActionData,
    json,
    redirect,
    useNavigation
} from 'react-router-dom';

export default function CourseForm({ method, event }) {
    const data = useActionData();
    const [showForm, setShowForm] = useState(false);
    const navigate = useNavigate();
    const navigation = useNavigation();

    const toggleForm = () => {
        setShowForm(!showForm);
    }

    function cancelHandler() {
        navigate('..');
    }

    async function submitHandler(event) {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);
        const courseData = {
            title: formData.get('title'),
            date: formData.get('date'),
            description: formData.get('description'),
            duration: formData.get('duration')
        };

        // Make the API POST request
        const response = await fetch('http://localhost:8088/api/v1/course/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(courseData)
        });

        if (response.status === 422) {
            const errorData = await response.json();
            console.error(errorData); // Log error details
        } else if (!response.ok) {
            console.error(' Could not save event.');
        } else {
            // Redirect to the course page on successful submission
            setShowForm(false);
            navigate('/course/');
        }
    }

    return (
        <div>
            <button type='button' onClick={toggleForm}>Add Course</button>
            {showForm && (
                <Form method='post' onSubmit={submitHandler}>
                    {/* Your form fields */}
                    <p>
                        <label htmlFor="title">Title</label>
                        <input
                            id="title"
                            type="text"
                            name="title"
                            required
                            defaultValue={event ? event.title : ''}
                            style={{ margin: '5px 5px 5px 30px' }}
                        />
                    </p>
                    <p>
                        <label htmlFor='date'>Date</label>
                        <input
                            id="date"
                            type="date"
                            name="date"
                            required
                            defaultValue={event ? event.date : ''}
                            style={{ margin: '5px 5px 5px 30px' }}
                        />
                    </p>
                    <p>
                        <label htmlFor='description'>Description</label>
                        <textarea
                            id="description"
                            name="description"
                            rows="3"
                            required
                            defaultValue={event ? event.description : ''}
                            style={{ margin: '5px 5px 5px 30px' }}
                        />
                    </p>

                    <p>
                        <label htmlFor='duration'>Duration</label>
                        <textarea
                            id="duration"
                            name="duration"
                            rows="1"
                            required
                            defaultValue={event ? event.duration : ''}
                            style={{ margin: '5px 5px 5px 30px' }}
                        />
                    </p>

                    <div>
                        <button type="button" onClick={cancelHandler}>
                            Cancel
                        </button>
                        <button type="submit">Save</button>
                    </div>
                </Form>
            )}
        </div>
    );
}
