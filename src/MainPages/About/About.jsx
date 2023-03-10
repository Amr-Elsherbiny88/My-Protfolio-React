import React ,{ useEffect } from 'react'
import "./about.css"
import "aos/dist/aos.css";
import img from "./Programming-rafiki.png"
import imgg from "./Hand coding-bro.png"
import imggg from "./Coding.png"
import imgggg from "./Palette-amico.png"
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';



const About = () => {





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
<AnimationOnScroll animateIn="animate__fadeInLeftBig" className='d-flex'>
<section class="container">
    <div class="row">

      
      <div   class="col-xl-6 col-lg-6col-md-6 col-sm-6 text-center title ">
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-mdb-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={img} class="d-block w-100" alt="Wild Landscape"/>
            </div>
       
          </div>
        </div>
     </div>
        <div   class="col-xl-6 col-lg-6col-md-6 col-sm-6 text-center title mb-5 ">
            <h4>👋 Hi there! I'm Amr Elsherbiny Meticulous web developer with over 2 years of front end experience and passion for responsive website design
                and a firm believer in the mobile-first approach.
                I have extensive experience in HTML, CSS, JAVASCRIPT, BOOTSTRAP, Api, Json and React.
                Implemented new responsive website approach which increased mobile traffic by 20%.
                Over 2 years of experience working on Personal Blogs, Ecommerce website, Landing Page, 
                I mostly work with clients from all over the world and local as well like Saudi Arabia, Kuwait, United States</h4>
        </div>

    </div>
  </section>
</AnimationOnScroll>
 

<AnimationOnScroll animateIn="animate__fadeInLeftBig" className='d-flex'>
<section class="container text-center align-content-center">
  <div className="row">
  <div   class="col-xl-6 col-lg-6col-md-6 col-sm-6 text-center title ">
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-mdb-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={imgg} class="d-block w-100" alt="Wild Landscape"/>
            </div>
       
          </div>
        </div>
     </div>

        <div   class="col-xl-6 col-lg-6 col-md-6 col-sm-6  mt-3  title text-center">
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

  </div>
</section>
    
</AnimationOnScroll>


      
    
<AnimationOnScroll animateIn="animate__fadeInLeftBig" className='d-flex'>
<section class="container text-center align-content-center">
        <div class="row">
        <div   class="col-xl-6 col-lg-6col-md-6 col-sm-6 text-center title ">
          <div id="carouselExampleSlidesOnly" class="carousel slide" data-mdb-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={imggg} class="d-block w-100" alt="Wild Landscape"/>
              </div>
         
            </div>
          </div>
       </div>

       <div   class="col-xl-6 col-lg-6 col-md-6 col-sm-6  title  mt-3 mb-5">
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

        

        </div>
          </section>      
       
</AnimationOnScroll>
        

       

<AnimationOnScroll animateIn="animate__fadeInLeftBig" className='d-flex'>
<section class="container text-center align-content-center">
        <div class="row">
             
        <div  class="col-xl-6 col-lg-6col-md-6 col-sm-6 text-center title ">
          <div id="carouselExampleSlidesOnly" class="carousel slide" data-mdb-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={imgggg} class="d-block w-100" alt="Wild Landscape"/>
              </div>
         
            </div>
          </div>
       </div>

        <div  class="col-xl-6 col-lg-6col-md-6 col-sm-6  text-center  title mt-5">
            <h3 class="mb-4">🛠 My Tools :</h3>

                <p >👉 Git</p>
                <p > 👉 GitHub</p>
                <p > 👉 Vs Code</p>
                <p > 👉 Node Package Manager</p>
                <p > 👉 CodePen</p>
                <p >   👉 Chrome Developer Tools</p>
        </div>


        </div>
          </section>      
       
</AnimationOnScroll>
        
       



          
    <div  class="col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center  title mt-5 ">
    
        <p>The main goal of my work is to meet the client's needs and deadlines. I enjoy
            learning new things and writing clean code. If you're looking for creating
            responsive websites by providing quality, well-structured, semantic, and
            performant front-end code - I'll enjoy doing it!👌
            </p>
    </div>

    



<div  class="col-xl-12 col-lg-12 col-md-12 col-sm-12  text-center   title mt-5">
   
    <p>
        Always here to bring your ideas to be alive. Do not hesitate to contact me if you need any help, consultation or to discuss your project, please feel free to contact me at any time.👌
    </p>
</div>







 

{/* About end */}


















    </body>
  )
}

export default About