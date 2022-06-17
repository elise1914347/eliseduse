import React from "react";
import HomeLayout from "../component/Homelayout";
import { Button, Checkbox, Form, Input, Space } from 'antd';
import 'antd/dist/antd.css';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { DownloadOutlined } from "@ant-design/icons";
import Card from "antd";
import "./home.css";
import TextArea from "antd/lib/input/TextArea";
const Contact = () => {
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };
    return(
        <div  style={{width:"100%",height:"auto",padding:"10rem 50rem 30rem 10rem",backgroundColor:"grey"}}>
        <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
        >
        <Input placeholder="firstName" style={{padding:"1.5rem",background:"black"}} />
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
        <Input placeholder="LastName" style={{padding:"1.5rem",background:"black"}}/>
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
            <Input  placeholder="MiddleName" style={{padding:"1.5rem",background:"black"}} />
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
         <TextArea placeholder="your message" style={{padding:"5rem",background:"black"}}>your message</TextArea> 
         <Button type="primary" shape="round" style={{marginLeft:"20rem",marginTop:"30px",fontSize:"20px",height:"100%",fontWeight:"80px",color:"white",background:"green"}}>Submit
                            </Button>
      </Form.Item>
    </Form>
   </div>
  );
};
export default Contact;