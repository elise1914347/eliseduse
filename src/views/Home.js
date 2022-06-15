import React from 'react';
import Nav from '../component/navbar';
import gorilla from "../assets/images/gorilla.jpeg";
import lake from "../assets/images/lake.webp"
import forest from "../assets/images/beach.jpeg"
import travel from "../assets/images/travel.jpeg"
import "./home.css";
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import Footer from "../component/footer";
import HomeLayout from "../component/Homelayout";
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: 'green',
    }}
  />
);
const onSearch = (value) => console.log(value);

const Home=()=> {
    return(
      <>
        <div className="home-container">
            
            <div className="home-content">
                <h1 className="heading-title">Rwanda Booking tour</h1>
               <div className="carousel-img">
                <Carousel autoplay>
                    <img src={gorilla}alt="gorilla image"/>
                    <img src={lake} alt="gorilla image"/>
                    <img src={forest} alt="gorilla image"/>
                    <img src={travel} alt="gorilla image"/>
                </Carousel>
                <Search
      placeholder="search tour"
      enterButton="Search"
      size="large"
      suffix={suffix}
      onSearch={onSearch}
    />
    </div>
    <h3 className="topTour">Top Tours</h3>
    <hr className="align"></hr>
                
            </div>
        </div>
        </>
    );
};
export default Home;
