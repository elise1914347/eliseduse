import React from 'react';
import logo from "../assets/images/download.jpg";
import "./navbar.css";
import { Button, Modal,Input,Form } from 'antd';
import { useState } from 'react';

const Nav= ()=>{
    const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    console.log(e);
    setVisible(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setVisible(false);
  };
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
                                   {/* <li><a href="" className="nav-link link-green" >
                                       sign-up
                                       </a></li> */}
                                       <li><a href="tours" className="nav-link btn-link">
                                       Tours
                                       </a></li>
                                       {/* <li><a href='admindash' >admindash</a></li> */}
                                       <Button type="primary" style={{background:"green"}} onClick={showModal}>
        Sign-In
      </Button>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{
          disabled: true,
        }}
        cancelButtonProps={{
          disabled: true,
        }}
      >
        <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input  placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
          >
        <Input
         
          type="password"
          placeholder="Password"
        />
      </Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" style={{color:"white",fontSize:"15px"}}>
         Log in
        </Button>
        <Form.Item>
        Or <a href="/register" style={{color:"green",fontSize:"15px"}}>register now!</a>
      </Form.Item>
      </Modal>
                                      
               </ul>
           </div>
       </div>
    );
};
export default Nav;