import React,{useState} from "react";
import {Space, Table,Tag,Drawer} from "antd";
import Users from "../../assets/Data/User.json";
import ViewUser from "./viewUser";
import SingleUser from "./viewUser";
// import Dashboardlayout from "../component/Dashboardlayout";


const UserTable=() => {
    const [visibleDrawer,setVisibleDrawer]=useState(false);
    const columns=[
        {
         title:'Name',
         dataIndex:'name',
         key:'name',
        //  render:(text)=> <a>{text.split("")[0]}</a>,   
        },
           {
            title:'gender',
            dataIndex:'gender',
            key:'gender',
           },
           {
            title:'email',
            dataIndex:'email',
            key:'email',
           },
           {
            title:'phone',
            dataIndex:'phone',
            key:'phone',
           },
              {
            title:'active',
            dataIndex:'isActive',
            key:'isActive',
            render:(text)=><Tag color={text?"green":"red"}>{text.toString()}</Tag>  
           },
           {
            title:"Action",
            key:"action",
            render:(_, record) => (
                <Space size="middle">
                    <a>Activate</a>
                    <a>Delete</a>
                    <a onClick={() => {
                  
                  setVisibleDrawer(true)
                }}
>views</a>
                </Space>
            )
           }
    ]
    return (
        <>
        <Drawer visible={visibleDrawer} onClose={()=>{setVisibleDrawer(false)}}><SingleUser data={Users[0]}/></Drawer>
<Table columns={columns} dataSource={Users}></Table>
</>
);

};
export default UserTable;