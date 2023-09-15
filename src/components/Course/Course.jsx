import PropTypes from "prop-types";
 import {FaDollarSign,FaBookOpen} from 'react-icons/fa'


const Course = ({ course, handleAddCourseInfo }) => {
  const { course_img, course_name, credit, price, course_details } = course;
  // console.log(course);
  return (
    <div className="p-4 bg-[#FFF]  rounded-xl relative">
      <div className="space-y-4 mb-24">
        <img
          className="w-full"
          src={course_img}
          alt={`Image of the course ${course_name}`}
        />
        <h2 className="text-lg font-semibold">{course_name}</h2>
        <p className="h-20 text-[#1C1B1B99] text-sm font-normal">
          {course_details}
        </p>
        <div className="absolute bottom-4 w-11/12 mx-auto">

          <div className="flex justify-between items-center mb-4">
            <p className="flex items-center gap-3">
              {/* <img src={FaDollarSign}alt="" /> */}
              <FaDollarSign className="text-zinc-500"></FaDollarSign>
              <span className="text-[#1C1B1B99] text-base">Price: {price}</span>
            </p>
            <p className="flex items-center gap-3">
              <FaBookOpen className="text-zinc-500"></FaBookOpen>
              <span className="text-[#1C1B1B99] text-base">
                Credit: {credit}hr
              </span>
            </p>
          </div>
          <button
            onClick={() => handleAddCourseInfo(course_name, credit, price)}
            className=" w-full bg-[#2F80ED] py-2 rounded-lg text-white  "
          >
            Select
          </button>

        </div>
      </div>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
  handleAddCourseInfo: PropTypes.func,
};

export default Course;
