import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from '../views/Home';
import AboutUs from "../views/About"
import Tours from "../views/Tours";
// import SignUp from "../views/SignUp";
import Contactus from "../views/ContactUs";
import Images from "../views/Images";
import HomeLayout from '../component/Homelayout';
import Dashboardlayout from "../component/Dashboardlayout"
import { AntDesignOutlined } from '@ant-design/icons';
import AllTours from "../views/DashBoard/allTours";
import NewTour from '../views/DashBoard/CreateTour';
import App from '../views/DashBoard/allTours';
import Register from "../component/register"

const Index=() =>{
    return (
        <>
         <HomeLayout>
       
       

       
        <Routes>
            <Route exact path="/" element={<Home/>}></Route> 
            <Route exact path="/home" element={<Home/>}></Route> 
            <Route exact path="/aboutus" element={<AboutUs/>}></Route>
            {/* <Route exact path="/signup" element={<SignUp/>}></Route> */}
            <Route path="/register" element={<Register/>}/>   
            <Route exact path="/contactUs" element={<Contactus/>}></Route>
            <Route exact path="/images" element={<Images/>}></Route>  
            <Route path="/tours" element={<Tours/>}/>          
        </Routes>
        <Dashboardlayout>
            <Routes>
                <Route exact path="/admin" element={<App/>}/>
                <Route exact path="/admindashboard" element={<NewTour/>}/>
            </Routes>

        </Dashboardlayout>
        </HomeLayout>
      
 </>
    );
};
export default Index;