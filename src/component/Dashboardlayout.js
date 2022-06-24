import React, { useState } from "react";
import "antd/dist/antd.css";
// import "./DashLayout.css";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu  } from "antd";
import { useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const Dashboard = ({ children }) => {
  const navigate= useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined onClick={()=>navigate("/Dashboard")}/>,
              label: <h4 onClick={()=>navigate("/Dashboard")} style={{color:"white"}}>Dashboard</h4>
            },
            {
              key: "2",
              icon: <VideoCameraOutlined  onClick={()=>navigate("/ManagerUser")}/>,
              label: <h4 onClick={()=>navigate("/ManagerUser")} style={{color:"white"}}>Manageruser</h4>
            },
            {
              key: "3",
              icon: <UploadOutlined onClick={()=>navigate("/trips")}/>,
              label:<h4 onClick={()=>navigate("/trips")} style={{color:"white"}}>Managertrips</h4>
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;