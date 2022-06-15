import React from "react";
import logofooter from "../assets/images/download.jpg"
import {FacebookOutlined,TwitterOutlined,InstagramOutlined} from "@ant-design/icons"
import "./footer.css";

const Footer=()=>{
    const d = new Date();
let year=d.getFullYear()
    return(
        <div className="footer-container">
           <div className="logo-column">
               <img src={logofooter} alt="logo footer" className="logo-img"/>
               <div className="icons">
                   <FacebookOutlined/>
                   <TwitterOutlined />
                   <InstagramOutlined />
               </div>
               <p className="copyright">copyright &copy;{year} by shecancode,
               <span> Inc.All right resrved</span>{""}
               </p>
           </div>
           <div className="contactus-column">
               <h3 className="footer-title">Contact-us</h3>
               <p>623 Kacyiru ST., 2nd floor,<span>Kigali Rwanda</span></p>
               <p><a href="tel:+250-788-737-287">tel:+250-788-737-287</a>
               <a href="mailto:webmaste@example.com">eliseduse@gmail.com</a>
               
               </p>
           </div>
           <div className="account-column">
               <h3 className="footer-title">account</h3>
               <p><a href="#">Create Account</a></p>
               <p><a href="#">Sign up</a></p>
           </div>
           <div className="company-column">
               <h3 className="footer-title">company</h3>
               <p><a href="#">About me </a></p>
               <p><a href="#">career</a></p>
               <p><a href="#">partner</a></p>
           </div>
           <div className="company-column">
               <h3 className="footer-title">Resources</h3>
               <p><a href="#">About me for directory</a></p>
               <p><a href="#">Help center</a></p>
               <p><a href="#">privacy</a></p>
           </div>
        </div>
    )
}
export default Footer;
