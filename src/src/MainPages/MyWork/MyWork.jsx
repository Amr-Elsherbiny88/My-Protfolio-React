import React from 'react'
import "./MyWork.css"
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import imgs from "./facebook.png"
import imgss from "./Ecommerce.png"
import imgsss from "./Shop.png"
import imgssss from "./Master.png"
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';


const MyWork = () => {
  return (
    <body>
        
      {/* title start */}
     <div id="app" class="col-xl-12 col-lg-12 col-md-12 col-sm-12 mt-5 ">
      <div id="wrapper">
       <h1 class="glitch" data-text="My-Work">My-Work</h1>
  
     </div>
 
    </div>
      {/* title end */}

       {/* work start */}



       <AnimationOnScroll animateIn="animate__fadeInLeftBig" className='d-flex'>
       <section className='col-xl-12 col-lg-12 col-md-12 col-sm-12 d-flex text-center justify-content-center'>

        <div className='col-xl-5 col-lg-5 col-md-5 col-sm-5 me-5 mb-5'>
        <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={imgs} fluid alt='...' />
        <a>
          <div className='mask ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.46)' }}> </div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>FaceBook-Clone</MDBCardTitle>
        <MDBCardText>
       faceBook-clone Same interface as Facebook using html css full Responsive
        </MDBCardText>
        <MDBBtn href='https://facebook-clone-eta.vercel.app/'>Launch <i class="fa-solid fa-arrow-up-right-from-square"></i></MDBBtn>
      </MDBCardBody>
    </MDBCard>
         </div>


        <div className='col-xl-5 col-lg-5 col-md-5 col-sm-5 mb-5'>
        <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={imgss} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.46)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>E-Commerce</MDBCardTitle>
        <MDBCardText>
        e-commerce website using js html css bootstrap mdb bootstrap Responsive
        </MDBCardText>
        <MDBBtn href='https://e-commerce-sepia-delta.vercel.app/'>Launch <i class="fa-solid fa-arrow-up-right-from-square"></i></MDBBtn>
      </MDBCardBody>
    </MDBCard>
         </div>



        </section>  

       </AnimationOnScroll>
       


       <AnimationOnScroll animateIn="animate__fadeInLeftBig" className='d-flex'>
       <section className='col-xl-12 col-lg-12 col-md-12 col-sm-12 d-flex text-center justify-content-center'>

    

        <div className='col-xl-5 col-lg-5 col-md-5 col-sm-5 me-5 mb-5'>
        <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={imgsss} fluid alt='...' />
        <a>
          <div className='mask ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.46)' }}> </div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Shop interface </MDBCardTitle>
        <MDBCardText>
      Shop site interface using html css bootstrap mdb bootstrap Responsive
        </MDBCardText>
        <MDBBtn href='https://clothes-shop-full-respinsive.vercel.app/'>Launch <i class="fa-solid fa-arrow-up-right-from-square"></i></MDBBtn>
      </MDBCardBody>
    </MDBCard>
         </div>


        <div className='col-xl-5 col-lg-5 col-md-5 col-sm-5 mb-5'>
        <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={imgssss} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.46)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>FootBall Academy</MDBCardTitle>
        <MDBCardText>
        FootBall Academy site using html css bootstrap mdb bootstrap Responsive
        </MDBCardText>
        <MDBBtn href='https://master-academy.vercel.app/'>Launch <i class="fa-solid fa-arrow-up-right-from-square"></i></MDBBtn>
      </MDBCardBody>
    </MDBCard>
         </div>

         

        </section>  

       </AnimationOnScroll>


       
       <AnimationOnScroll animateIn="animate__fadeInLeftBig" className='d-flex'>
        
        <section class="container skills text-center mb-5">
        <div class="row">
    
    
       <a> <button className='button-con mb-5 mt-5'>Contact-Me</button></a>

        </div>
        </section>
    
        </AnimationOnScroll>
     

       

       






      
    </body>
  )
}

export default MyWork