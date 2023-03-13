import React from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Contacct.css"
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';



const Contact = () => {
  return (
    <body>


 {/* title start */}
 <div id="app" class="col-xl-12 col-lg-12 col-md-12 col-sm-12 mt-5 ">
      <div id="wrapper">
       <h1 class="glitch" data-text="Contact-Me">Contact-Me</h1>
  
     </div>
 
    </div>
      {/* title end */}





        <section className='container col-xl-12 col-lg-12'>
         

            
           <a href="mailto:amouryelsherbiny178@gmail.com"><button class="gmail buto mb-2">Send Me An Email <i class="fa-solid fa-envelope"></i></button></a>
           <br />
           <a href='https://wa.me/201101761785?'><button class="WhatsApp buto mb-2">WhatsApp <i class="fa-brands fa-whatsapp"></i></button></a>
           <br />
           <a href="https://www.messenger.com/t/100007883706222/"><button  class="Messenger buto mb-2">Messenger <i class="fa-brands fa-facebook-messenger"></i></button></a>
           <br />
           <a href="https://web.facebook.com/profile.php?id=100085240531782"><button class="FaceBook buto mb-2">My FaceBook Account <i class="fa-brands fa-facebook"></i></button></a>
           <br />
           <a href="https://web.facebook.com/profile.php?id=100085240531782"><button class="Instagram buto mb-5">My Instagram Account <i class="fa-brands fa-instagram"></i></button></a>
           <br />
         

        </section>

       

        
    </body>
  )
}

export default Contact