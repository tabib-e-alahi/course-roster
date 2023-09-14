
// import PropTypes from 'prop-types';

import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = () => {
    const [courses, setCourses] = useState([]);

    const [courseName,setCourseName] = useState([]);
    const [count,setCount] = useState(0);

    useEffect(()=>{
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    const handleAddCourseInfo = (course_name,credit,price) =>{
        // console.log(course_name,credit,price)
       
        for(const coN of courseName){
            if(coN === course_name){
                alert('Multiple data are not allowed');
                
                return
            }
        }
        const newCourseName = [...courseName,course_name]
        setCourseName(newCourseName)

        const newCount = count + 1;
        setCount(newCount)
    console.log(count);
    }
    return (
        <div className="w-11/12 mx-auto md:flex gap-6">
            <div className=" lg:w-3/4 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        courses.map(course => <Course key={course.id} course = {course} handleAddCourseInfo={handleAddCourseInfo}></Course>)
                    }
            </div>

            <div className="w-1/4 p-6 h-1/3 bg-[#FFF]  rounded-xl">
                    <h1 className="text-lg text-[#2F80ED] font-bold mb-4">Credit Hour Remaining 7 hr</h1>
                    <hr className="" />
                    <h2 className="text-lg font-bold mb-4">Course Name: {courseName.length} </h2>
                    <div className="mb-6">
                        {
                            courseName.map((cN,idx) => <h3 className="text-base text-[#1C1B1B99]" key={idx}>{idx+1} {cN}</h3>)
                        }
                    </div>
                    <hr />
                    <p className="font-medium my-4">Total Credit Hour: </p>
                    <hr />
                    <p className="font-semibold my-4">Total Price: </p>
            </div>
        </div>
    );
};

// Courses.propTypes = {
    
// };

export default Courses;