import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Courses = ({ notify }) => {
  const handleCreditLimit = () => {
    toast.error("You do not have enough credit", {
      position: toast.POSITION.TOP_RIGHT,
      className: "tcustom",
    });
  };

  const [courses, setCourses] = useState([]);

  const [courseName, setCourseName] = useState([]);
  const [count, setCount] = useState(0);

  const [credits, setCredits] = useState(0);
  const [remainingCredits, setRemainingCredits] = useState(20);

  const [prices, setPrices] = useState(0);

  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleAddCourseInfo = (course_name, credit, price) => {
    // console.log(course_name,credit,price)

    for (const coN of courseName) {
      if (coN === course_name) {
        notify();
        return;
      }
    }

    const newCredit = credits + credit;
    const newRemainingCredit = remainingCredits - credit;
    if (newCredit > 20 || newRemainingCredit < 0 ) {
      handleCreditLimit();
      return;
    }

    // setting course name
    const newCourseName = [...courseName, course_name];
    setCourseName(newCourseName);

    const newCount = count + 1;
    setCount(newCount);
    console.log(count);

    //setting credit
    setCredits(newCredit);

    //setting remaining credits
    
    setRemainingCredits(newRemainingCredit);

    //setting total price
    setPrices(prices + price);
  };
  return (
    <div className="w-10/12 md:w-11/12 mx-auto flex flex-col-reverse md:flex-row gap-6 relative">

      <div className="w-full md:w-1/2  lg:w-3/4 gap-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 ">
        {courses.map((course) => (
          <Course
            key={course.id}
            course={course}
            handleAddCourseInfo={handleAddCourseInfo}
          ></Course>
        ))}
      </div>

      <ToastContainer></ToastContainer>

      <div className="w-full md:w-[45%] lg:w-1/4 p-6 h-1/3 bg-[#FFF]  rounded-xl my-custom-class md:fixed md:right-4  md:h-auto">
        <h1 className="text-lg text-[#2F80ED] font-bold mb-4">
          Credit Hour Remaining {remainingCredits} hr
        </h1>
        <hr className="" />
        <h2 className="text-lg font-bold mb-4">Course Name </h2>
        <div className="mb-6">
          {courseName.map((cN, idx) => (
            <h3 className="text-base text-[#1C1B1B99]" key={idx}>
              {idx + 1} {cN}
            </h3>
          ))}
        </div>
        <hr />
        <p className="font-medium my-4">Total Credit Hour: {credits} </p>
        <hr />
        <p className="font-semibold my-4">Total Price: {prices} USD</p>
      </div>

    </div>
  );
};

Courses.propTypes = {
  notify: PropTypes.func,
};

export default Courses;
