import React from "react";
import HomeLayout from "../component/Homelayout";
import irakoze from "../assets/images/irakoze.jpg";
import ira from "../assets/images/snowface.jpg"
import "./home.css";
const About = () => {
  return (
    <div className="didi" >
      <h1 style={{ color: "black", textAlign: "center", fontWeight: "bold" }}>
        About us
      </h1>
      <p style={{ fontWeight: "bolder",textAlign:"center"}}>
        The Tour du Rwanda is a cycling event created in 1988 and based in
        Rwanda. The event is a cycling stage race that is organized by the
        Rwanda Cycling Federation. The event has been part of the UCI Africa
        Tour as a category 2.1-rated event since 2009. Tour du Rwanda 2022:
        Mugisha Wins 8th Stage as Eritrean Tesfazion Romps to Victory. Eritrean
        Natnael Tesfazion won the 14th Edition of Tour du Rwanda. Mugisha, who
        races for South Africa's ProTouch, won the eighth stage of the tour,
        which was flagged of by President Kagame, at Canal Olympia in Rebero,
        Kicukiro district
      </p>
      <div className="ira">
      <img  src={irakoze} alt=""></img>
      <img  src={irakoze} alt=""></img>
      </div>
    </div>
  );
};
export default About;
