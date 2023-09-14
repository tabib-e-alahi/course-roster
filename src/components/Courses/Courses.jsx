
// import PropTypes from 'prop-types';

import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className="w-11/12 mx-auto">
            <div className=" lg:w-3/4 lg:gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        courses.map(course => <Course key={course.id} course = {course}></Course>)
                    }
            </div>

            <div className="w-1/3">

            </div>
        </div>
    );
};

// Courses.propTypes = {
    
// };

export default Courses;