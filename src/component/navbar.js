import React from 'react';
import logo from "../assets/images/download.jpg";
import "./navbar.css";

const Nav= ()=>{
    return(
       <div className="nav">
           <img src={logo} alt="Rwanda booking tour" className="logo-img"/>
           <div className="navigation-links">
               <ul className="nav-links">
                   <li>
                       <a href="home" className="nav-link">
                           Home
                           </a></li>
                           <li><a href="aboutus" className="nav-link">
                               About-us
                               </a></li>
                               <li><a href="ContactUs" className="nav-link">
                                   Contact-us
                                   </a></li>
                                   <li><a href="images" className="nav-link">
                                           Gallery
                                           </a></li>
                                   <li><a href="signup" className="nav-link link-green" >
                                       sign-up
                                       </a></li>
                                       <li><a href="tours" className="nav-link btn-link">
                                       Tours
                                       </a></li>
                                      
               </ul>
           </div>
       </div>
    );
};
export default Nav;