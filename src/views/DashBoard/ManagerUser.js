import React from "react";
// import UsersTable from "../../component/Admin/Userstable";
import UserTable from "../../component/admin/UserTable";
import Dashboardlayout from '../../component/Dashboardlayout';



const ManagerUser =()=>{

    return (
        <Dashboardlayout>
        <UserTable/>
        </Dashboardlayout>
    )
};
export default  ManagerUser;