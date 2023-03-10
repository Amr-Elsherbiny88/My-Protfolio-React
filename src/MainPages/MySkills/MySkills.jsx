import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Myskills.css"
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { MDBProgress, MDBProgressBar } from 'mdb-react-ui-kit';

import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';









const MySkills = () => {


 

  return (
    <body>

      {/* title start */}
     <div id="app" class="col-xl-12 col-lg-12 col-md-12 col-sm-12 mt-5 mb-5">
      <div id="wrapper">
       <h1 class="glitch" data-text="My-Skills">My-Skills</h1>
  
     </div>
 
    </div>
      {/* title end */}


      {/* skills start */}

    
      <AnimationOnScroll animateIn="animate__fadeInLeftBig" className='d-flex'>
        
    <section class="container skills text-center mb-5">
    <div class="row">

    <div  class="col-xl-4 col-lg-4 col-md-4 col-sm-12  mb-2 logo">
            <i class="fa-brands fa-html5 mb-5 icc"></i>
            <p>HTML</p>

           
        </div>

        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12   mb-5" >

          <MDBProgress height='25'>
          <MDBProgressBar className='progHtml' width='100' valuemin={0} valuemax={100}>
          <h4 class="mt-2">100%</h4>
          </MDBProgressBar>
          </MDBProgress>
        </div>

   
    </div>
    </section>

    </AnimationOnScroll>
 


   
       
      <AnimationOnScroll animateIn="animate__fadeInLeftBig" className='d-flex'>
        
        <section class="container skills text-center mb-5">
        <div class="row">
    
       
    <div  class="col-xl-4 col-lg-4 col-md-4 col-sm-4 mt-5 mb-2 logo">
            <i class="fa-brands fa-css3 mb-5 icc"></i>
            <p>CSS</p>
        </div>

        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 mt-5  mb-5" >

         <MDBProgress height='25'>
         <MDBProgressBar className='progCss' width='100' valuemin={0} valuemax={100}>
         <h4 class="mt-2">100%</h4>
         </MDBProgressBar>
         </MDBProgress>
       </div>
   
    
       
        </div>
        </section>
    
        </AnimationOnScroll>
     
    
    

   

        <AnimationOnScroll animateIn="animate__fadeInLeftBig" className='d-flex'>
        
        <section class="container skills text-center mb-5">
        <div class="row">
    
       
   
        <div  class="col-xl-4 col-lg-4 col-md-4 col-sm-4 mt-5 mb-2 logo">
            <i class="fa-brands fa-js mb-5 icc "></i>
            <p>Java Script</p>
        </div>
 
        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 mt-5  mb-5" >

         <MDBProgress height='25'>
         <MDBProgressBar className='progJs' width='90' valuemin={0} valuemax={100}>
         <h4 class="mt-2">90%</h4>
         </MDBProgressBar>
         </MDBProgress>
       </div>
    
       
        </div>
        </section>
    
        </AnimationOnScroll>
     

       


     
        <AnimationOnScroll animateIn="animate__fadeInLeftBig" className='d-flex'>
        
        <section class="container skills text-center mb-5">
        <div class="row">
    
       
   
        <div  class="col-xl-4 col-lg-4 col-md-4 col-sm-4 mt-5 mb-2 logo">
            <i class="fa-brands fa-bootstrap mb-5 icc"></i>
            <p>Bootstrap</p>
        </div>


        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 mt-5  mb-5" >

         <MDBProgress height='25'>
         <MDBProgressBar className='progBt' width='100' valuemin={0} valuemax={100}>
         <h4 class="mt-2">100%</h4>
         </MDBProgressBar>
         </MDBProgress>
       </div>

        </div>
        </section>
    
        </AnimationOnScroll>
     

       


       

       

   
        <AnimationOnScroll animateIn="animate__fadeInLeftBig" className='d-flex'>
        
        <section class="container skills text-center mb-5">
        <div class="row">
    
      
       
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 mt-5 mb-2 logo">
            <i class="fa-brands fa-mdb mb-5 icc"></i>
            <p>MDB</p>
        </div>

        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 mt-5  mb-5" >

         <MDBProgress height='25'>
         <MDBProgressBar className='progMdb' width='100' valuemin={0} valuemax={100}>
         <h4 class="mt-2">100%</h4>
         </MDBProgressBar>
         </MDBProgress>
       </div>
    
       

        </div>
        </section>
    
        </AnimationOnScroll>
     

       

       

        <AnimationOnScroll animateIn="animate__fadeInLeftBig" className='d-flex'>
        
        <section class="container skills text-center mb-5">
        <div class="row">
    
      
      
        <div  class="col-xl-4 col-lg-4 col-md-4 col-sm-4 mt-5 mb-2 logo">
            <i class="fa-brands fa-react mb-5 icc"></i>
            <p>React</p>
        </div>

        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 mt-5   mb-5" >

         <MDBProgress height='25'>
         <MDBProgressBar className='progRet' width='85' valuemin={0} valuemax={100}>
           <h4 class="mt-2">85%</h4>
         </MDBProgressBar>
         </MDBProgress>
       </div>



    
       

        </div>
        </section>
    
        </AnimationOnScroll>
     

       

     
  
      

      
  

{/* skills end */}








    </body>
  )
}

export default MySkills