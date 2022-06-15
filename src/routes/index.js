import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from '../views/Home';
import AboutUs from "../views/About"
import Tours from "../views/Tours";
import SignUp from "../views/SignUp";
import Contactus from "../views/ContactUs";
import Images from "../views/Images";
import HomeLayout from '../component/Homelayout';

const Index=() =>{
    return (
        <HomeLayout>
        <Routes>
            <Route exact path="/" element={<Home/>}></Route> 
            <Route exact path="/home" element={<Home/>}></Route> 
            <Route exact path="/aboutus" element={<AboutUs/>}></Route>
            <Route exact path="/signup" element={<SignUp/>}></Route>
            <Route exact path="/contactUs" element={<Contactus/>}></Route>
            <Route exact path="/images" element={<Images/>}></Route>  
            <Route path="/tours" element={<Tours/>}/>          
        </Routes>
        </HomeLayout>
    );
};
export default Index;