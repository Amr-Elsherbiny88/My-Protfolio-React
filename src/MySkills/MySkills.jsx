import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Myskills.css"
import AOS from "aos";
import "aos/dist/aos.css";


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

    <section class="container skills text-center mb-5">
    <div class="row">
        <div data-aos="fade-right" class="logo col-xl-6 col-lg-6 col-md-6 col-sm-6  mb-5">
            <i class="fa-brands fa-html5 mb-5 icc"></i>
            <p>HTML</p>
        </div>

        <div data-aos="fade-right" class="logo col-xl-6 col-lg-6 col-md-6 col-sm-6  mb-5">
            <i class="fa-brands fa-css3 mb-5 icc"></i>
            <p>CSS</p>
        </div>

        <div data-aos="fade-up" class="col-xl-6 col-lg-6 col-md-6 col-sm-6 mt-5 mb-5 logo">
            <i class="fa-brands fa-js mb-5 icc "></i>
            <p>Java Script</p>
        </div>

        <div data-aos="fade-up" class="col-xl-6 col-lg-6 col-md-6 col-sm-6 mt-5 mb-5 logo">
            <i class="fa-brands fa-bootstrap mb-5 icc"></i>
            <p>Bootstrap</p>
        </div>

        
        <div data-aos="fade-down" class="col-xl-6 col-lg-6 col-md-6 col-sm-6 mt-5 mb-5 logo">
            <i class="fa-brands fa-mdb mb-5 icc"></i>
            <p>MDB</p>
        </div>

        
        <div data-aos="fade-down" class="col-xl-6 col-lg-6 col-md-6 col-sm-6 mt-5 mb-5 logo">
            <i class="fa-brands fa-react mb-5 icc"></i>
            <p>React</p>
        </div>
    </div>
</section>

{/* skills end */}




     {/* footer start */}
     <MDBFooter  data-aos="fade-right" className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='https://web.facebook.com/profile.php?id=100085240531782'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0d5a07' }}
            href='https://wa.me/201101761785?'
            role='button'
          >
          <MDBIcon far icon="comment-dots" />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='https://accounts.google.com/SignOutOptions?hl=en&continue=https://mail.google.com&service=mail'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='https://www.instagram.com/amrelsherbiny20/'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

         
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='https://github.com/Amr-Elsherbiny88'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-white' href='https://wa.me/201101761785?'>
          AmrElsherbiny
        </a>
      </div>
    </MDBFooter>

{/* footer end */}




    </body>
  )
}

export default MySkills