import React from 'react'
import { BrowserRouter, Link , NavLink , Route , Routes } from 'react-router-dom'
import Home from './home/Home'
import About from './About/About'
import MySkills from './MySkills/MySkills'
import Navbar from "./Navbar/Navbar"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  return (
    <BrowserRouter>
     
     <Navbar/>

          <Routes>
            <Route path='/' element= {<Home/>}/>
            <Route path='/About' element= {<About/>}/>
            <Route path='/MySkills' element= {<MySkills/>}/>
          </Routes>




    </BrowserRouter>
  )
}

export default App