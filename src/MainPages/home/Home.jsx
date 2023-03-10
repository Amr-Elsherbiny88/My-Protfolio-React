import React from 'react'

import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./home.css"
import AOS from "aos";
import "aos/dist/aos.css";






const Home = () => {
  return (
    <body  >
      
      <AnimationOnScroll animateIn="animate__fadeInLeftBig" className='d-flex'>

      <div  id="appp" class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
      <div  id="wrapperr">
        <h1 class="glitchh" data-text="AmrElsherbiny">AmrElsherbiny</h1>
        <span class="subb">Front End Developer</span>
      </div>
      
    </div>
      </AnimationOnScroll>




    </body>
  )
}

export default Home