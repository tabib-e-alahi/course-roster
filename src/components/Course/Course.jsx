
import PropTypes from 'prop-types';

const Course = ({course}) => {

    const {course_img,course_name,credit,price,course_details} = course;
    // console.log(course);
    return (
        <div className='p-4 bg-[#FFF] space-y-4 rounded-xl'>
            <img className='w-full' src={course_img} alt={`Image of the course ${course_name}`} />
            <h2 className='text-lg font-semibold'>{course_name}</h2>
            <p className='h-20 text-[#1C1B1B99] text-sm font-normal'>{course_details}</p>
            <div className='flex justify-between items-center'>
                <p className='flex items-center gap-3'>
                    <img src="/src/assets/dollar-sign 1.png" alt="" />
                    <span className='text-[#1C1B1B99] text-base'>Price: {price}</span>
                </p>
                <p className='flex items-center gap-3'>
                    <img src="/src/assets/Frame.png" alt="" />
                    <span className='text-[#1C1B1B99] text-base'>Credit: {credit}hr</span>
                </p>
            </div>
            <button className='w-full bg-[#2F80ED] py-3 rounded-lg text-white '>Select</button>
        </div>
    );
};

Course.propTypes = {
    course:PropTypes.object.isRequired
};

export default Course;