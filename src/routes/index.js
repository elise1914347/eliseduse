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
import App from '../views/DashBoard/Alltours';
import Register from "../component/register";


import ManagerUser from "../views/DashBoard/ManagerUser";
import ManagerTrips from '../views/DashBoard/CreateTour';
import Dashboard from "../views/DashBoard/Dashboard"
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
            <Route exact path="/admin" element={<Dashboardlayout/>}/>

            <Route exact path="/ManagerUser" element={<ManagerUser/>}/>    
            <Route exact path="/trips" element={<ManagerTrips/>}/>
            <Route exact path="/Dashboard" element={<Dashboard/>}/>
        </Routes>
        {/* <Dashboardlayout>
            <Routes>
                <Route exact path="/admin" element={<App/>}/>
                <Route exact path="/admindashboard" element={<NewTour/>}/>
            </Routes>

        </Dashboardlayout> */}
        </HomeLayout>
      
 </>
    );
};
export default Index;