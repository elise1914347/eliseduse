import React from "react";
import {Space, Button,Card} from "antd";

const SingleUser = ({ data }) => {
  return (
    <>
    <div
      style={{
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        minHeight:"100vh",
        background:"green"
      }}
    >
        <img src={data?.profilePicture} style={{Position:"absolute",marginBottom:"center",marginRight:"20px"}}/>
        <h1 style={{color:"white"}}>{data?.name}</h1>
        <p style={{color:"white"}}>{data?.about}</p>
    </div>
    <Card title="Application Form" style={{fontSize:"20px",textAlign:"center",background:"yellow"}}>
        <Space direction="vertical"></Space>   
        <input placeholder="Email" style={{fontSize:"10px",textAlign:"center",padding:"4px"}}></input>
        <input placeholder="phone"style={{fontSize:"10px",textAlign:"center",padding:"4px",margin:"5px"}}></input>
        <Button onClick={()=>{}}>Send Application</Button>
        </Card>
        </>
  );
};
export default SingleUser;
