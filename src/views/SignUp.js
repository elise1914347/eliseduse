import React from "react";
import HomeLayout from "../component/Homelayout";
import { Button, Checkbox, Form, Input } from 'antd';
import 'antd/dist/antd.css';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import Card from "antd";
import "./home.css";
const SignUp = () => {
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
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox style={{color:"white",fontSize:"15px"}}>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="" style={{color:"green",fontSize:"15px"}}>
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" style={{color:"white",fontSize:"15px"}}>
          Log in
        </Button>
        Or <a href="" style={{color:"green",fontSize:"15px"}}>register now!</a>
      </Form.Item>
    </Form>
   </div>
  );
};
export default SignUp;
