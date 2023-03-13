import React from 'react'
import { BrowserRouter, Link , NavLink , Route , Routes } from 'react-router-dom'
import Home from './MainPages/home/Home'
import About from './MainPages/About/About'
import MySkills from './MainPages/MySkills/MySkills'
import Navbar from "./LayOuts/Navbar/Navbar"
import Footer from './LayOuts/Footer/Footer'
import MyWork from "./MainPages/MyWork/MyWork"
import Contact from './MainPages/Contact/Contact'

const App = () => {
  return (
    <BrowserRouter>
     
     <Navbar/>

          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/About' element= {<About/>}/>
            <Route path='/MySkills' element= {<MySkills/>}/>
            <Route path='/MyWork' element={<MyWork/>}/>
            <Route path='/Contact' element={<Contact/>}/>
          </Routes>
    
    

    <Footer/>

    </BrowserRouter>
  )
}

export default App