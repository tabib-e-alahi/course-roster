
import PropTypes from 'prop-types';

const Course = ({course}) => {
    // console.log(course);
    return (
        <div>
            <h1>Course: {course.price}</h1>
        </div>
    );
};

Course.propTypes = {
    course:PropTypes.object.isRequired
};

export default Course;