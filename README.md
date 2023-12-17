### live: https://6504732002e6b8388f918941--luminous-lily-622ef8.netlify.app/

# Features:

this website has the following 3 features:

- Course selection: Users can browse and select their desire course .

- Course pricing: Users can view the  pricing for each course.

- Credit hour tracking: Users can track their remaining credit hours and has a automatic credit tracking system.


# State Management:

In this assignment website, I have to manage the state several times to show the desired data. Let's break down briefly:
- First of all, my goal was to display data from a fake JSON source on a website. To achieve this, I utilized React's useState hook. I defined the courses state variable to store an array of objects and used the setCourses function to update it. I initialized courses with an empty array as the initial value.And used the React's useEffect hook to fetch the fake json data and store them in courses variable with the help of setCourse(). Then I used map method to loop through the courses and send course to the Course component as a child props drilling.

- Secondly, my task is to add almost 3  features of adding credit , course name , price, and all of those are triggered by a single Select button from each course card. But there is a problem that , the Select button is in "Course.jsx" components and The section where the data's will be stored is in "Courses.jsx" components which is a parent component. So the state will be in parent component, But in JSX can't triggered parent components directly. So I sent the "handleAddCourseInfo" function as a prop to the child and The child received it as a props parameter then used it in a arrow function with onClick event to triggered it. That's how I manage the states.
