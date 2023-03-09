import React ,{ useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./about.css"
import AOS from "aos";
import "aos/dist/aos.css";
import img from "./Programming-rafiki.png"
import imgg from "./Hand coding-bro.png"
import imggg from "./Coding.png"
import imgggg from "./Palette-amico.png"

import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';


const About = () => {


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);



  return (
    <body>

{/* Title start */}
     <div id="app" class="col-xl-12 col-lg-12 col-md-12 col-sm-12 mt-5">
    <div id="wrapper">
      <h1 class="glitch" data-text="About-Me">About-Me</h1>
    </div>
  </div>
{/* title end */}


{/* About start */}

  <section class="container">
    <div class="row">

      
      <div  data-aos="fade-up" class="col-xl-6 col-lg-6col-md-6 col-sm-6 text-center title ">
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-mdb-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={img} class="d-block w-100" alt="Wild Landscape"/>
            </div>
       
          </div>
        </div>
     </div>
        <div  data-aos="fade-down" class="col-xl-6 col-lg-6col-md-6 col-sm-6 text-center title mb-5 ">
            <h4>👋 Hi there! I'm Amr Elsherbiny Meticulous web developer with over 2 years of front end experience and passion for responsive website design
                and a firm believer in the mobile-first approach.
                I have extensive experience in HTML, CSS, JAVASCRIPT, BOOTSTRAP, Api, Json and React.
                Implemented new responsive website approach which increased mobile traffic by 20%.
                Over 2 years of experience working on Personal Blogs, Ecommerce website, Landing Page, 
                I mostly work with clients from all over the world and local as well like Saudi Arabia, Kuwait, United States</h4>
        </div>

    </div>
  </section>

  <section class="container text-center align-content-center">
    <div class="row">
      
      <div  data-aos="fade-right" class="col-xl-6 col-lg-6col-md-6 col-sm-6 text-center title ">
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-mdb-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={imgg} class="d-block w-100" alt="Wild Landscape"/>
            </div>
       
          </div>
        </div>
     </div>

        <div  data-aos="fade-right" class="col-xl-6 col-lg-6 col-md-6 col-sm-6  mt-3  title text-center">
            <h3 class="mb-4">🛠 My Services:</h3>
            <p>✅ Design mockups and wireframes.</p>
                <p>  ✅ Bug fix, QA, and problem solve.</p>
                    <p> ✅ Maintain, update, and improve existing company websites.</p>
                        <p> ✅ Implement websites, landing pages, and applications from concept through deployment, with a  responsive, mobile-first approach.</p>
               
                <p>  ✅ Work closely with other team members on the development team.</p>
                    <p>✅ Perform code reviews.</p>
                        <p> ✅ HTML (5) / CSS (3) converted from Figma / PSD / XD</p>
                            <p> ✅ Responsive Web Design (with Bootstrap, or without - pure CSS)</p>
                                <p> ✅JavaScript (vanilla JS)</p>
                                    <p> ✅ Hosting your site on Github, Netlify, or on my server from a hosting service</p>
                                        <p> ✅ Domain name buying</p>
        </div>

        
        <div  data-aos="fade-up" class="col-xl-6 col-lg-6col-md-6 col-sm-6 text-center title ">
          <div id="carouselExampleSlidesOnly" class="carousel slide" data-mdb-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={imggg} class="d-block w-100" alt="Wild Landscape"/>
              </div>
         
            </div>
          </div>
       </div>


       

        <div  data-aos="fade-up" class="col-xl-6 col-lg-6 col-md-6 col-sm-6  title  mt-3 mb-5">
            <h3 class="mb-4">🛠 My technical skills:</h3>
            <p >✅ Design mockups and wireframes.</p>
            <p > ✅ Bug fix, QA, and problem solve.</p>
            <p > ✅ Maintain, update, and improve existing company websites.</p>
            <p > ✅ Implement websites, landing pages, and applications from concept through deployment, with a  responsive, mobile-first approach.</p>
            <p > ✅ Work closely with other team members on the development team.</p>
            <p > ✅ Perform code reviews.</p>
            <p >  ✅ HTML (5) / CSS (3) converted from Figma / PSD / XD</p>
            <p > ✅ Responsive Web Design (with Bootstrap, or without - pure CSS)</p>
            <p > ✅JavaScript (vanilla JS)</p>
                <p>✅ Hosting your site on Github, Netlify, or on my server from a hosting service</p>
                <p>✅ Domain name buying</p> 
        </div>

        <div data-aos="fade-down" class="col-xl-6 col-lg-6col-md-6 col-sm-6 text-center title ">
          <div id="carouselExampleSlidesOnly" class="carousel slide" data-mdb-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={imgggg} class="d-block w-100" alt="Wild Landscape"/>
              </div>
         
            </div>
          </div>
       </div>

        <div data-aos="fade-down" class="col-xl-6 col-lg-6col-md-6 col-sm-6  text-center  title mt-5">
            <h3 class="mb-4">🛠 My Tools :</h3>

                <p >👉 Git</p>
                <p > 👉 GitHub</p>
                <p > 👉 Vs Code</p>
                <p > 👉 Node Package Manager</p>
                <p > 👉 CodePen</p>
                <p >   👉 Chrome Developer Tools</p>
        </div>

          
    <div data-aos="fade-up" class="col-xl-12 col-lg-12 col-md-12 col-sm-12  title mt-5 ">
    
        <p>The main goal of my work is to meet the client's needs and deadlines. I enjoy
            learning new things and writing clean code. If you're looking for creating
            responsive websites by providing quality, well-structured, semantic, and
            performant front-end code - I'll enjoy doing it!👌
            </p>
    </div>

    
</div>


<div data-aos="fade-up" class="col-xl-12 col-lg-12 col-md-12 col-sm-12   title mt-5">
   
    <p>
        Always here to bring your ideas to be alive. Do not hesitate to contact me if you need any help, consultation or to discuss your project, please feel free to contact me at any time.👌
    </p>
</div>



  </section>



{/* About end */}

 
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

export default About