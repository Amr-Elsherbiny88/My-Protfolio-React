import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter, Link , NavLink , Route , Routes } from 'react-router-dom'
import "./Navbar.css"
import {
  MDBNavbar,
  MDBBtn,
  MDBContainer
} from 'mdb-react-ui-kit';




function CollapsibleExample() {
    return (
        <MDBNavbar className=''  bgColor='dark'>
        <MDBContainer tag="form" fluid className='justify-content-center'>


            <NavLink to="/"> 
            <MDBBtn outline color="light" className='butt' size="sm" type='button'>
            Home
          </MDBBtn>
          </NavLink>
         
         <NavLink to="/About">
         <MDBBtn outline color="light" className='butt' size="sm" type='button'>
            About-Me
          </MDBBtn>
         </NavLink>

         <NavLink to="/MySkills"> 
         <MDBBtn outline color="light" className='butt' size="sm" type='button'>
            My-Skills
          </MDBBtn>
         </NavLink>

         <NavLink to="/MyWork">
         <MDBBtn outline color="light" className='butt'  size="sm" type='button'>
            My-Work
          </MDBBtn>
         </NavLink>


         

        </MDBContainer>
      </MDBNavbar>
    );
  }
  
  export default CollapsibleExample;