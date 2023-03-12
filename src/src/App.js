import React from 'react'
import { BrowserRouter, Link , NavLink , Route , Routes } from 'react-router-dom'
import Home from './MainPages/home/Home'
import About from './MainPages/About/About'
import MySkills from './MainPages/MySkills/MySkills'
import Navbar from "./LayOuts/Navbar/Navbar"
import Footer from './LayOuts/Footer/Footer'
import MyWork from "./MainPages/MyWork/MyWork"

const App = () => {
  return (
    <BrowserRouter>
     
     <Navbar/>

          <Routes>
            <Route index element={<Home/>} />
            <Route path='/About' element= {<About/>}/>
            <Route path='/MySkills' element= {<MySkills/>}/>
            <Route path='/MyWork' element={<MyWork/>}/>
          </Routes>


    <Footer/>

    </BrowserRouter>
  )
}

export default App