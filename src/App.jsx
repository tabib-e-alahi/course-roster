import './App.css'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const notify = () => {
    toast.error("You already have selected this course.", {
      position: toast.POSITION.TOP_RIGHT,
      className:'tcustom'
    });
  };

  return (
    <>
      <Header></Header>
      <ToastContainer />
      <Courses notify= {notify}></Courses>
    </>
  )
}

export default App

