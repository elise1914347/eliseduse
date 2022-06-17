import React,{useState} from "react";
import {Card,description,Image, Space, Typography,Button,Drawer} from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import SingleTour from "../component/singleTour"; 
import allTours from "../assets/Data/tours.json";
const {Text,Title}=Typography
const Tours = () =>{
    const [showDrawer,setShowDrawer]=useState(false);
    const[selectedTour,setSelectedTour]=useState({});
    return(
        <>
        <div style={{width:'100%',height:'auto',padding:'10px',padding:"20px 90px",background:"black"}}>
            <Card style={{background:"grey"}}>
                {allTours.map((tour)=>(
                    <Card.Grid className="tour-card-grid"
                     style={{width:"100",minHeight:"40rem",textAlign:"center"}}>
                        <Space direction="vertical">
                            <Image preview={true} src={tour.photo}/>
                            <Title level={4} style={{color:"brack"}}>
                                {tour.title.toUpperCase()}
                                </Title>
                                <Text type="secondary" style={{color:"white",fontSize:"15px"}} italic>{tour.description}</Text>
                                <Space>
                        
                        <Text>DUE Date:</Text>
                        <Text strong>{tour.dueDate} 10h30</Text>
                        </Space>
                        <Button type="primary" shape="round" onClick={() =>{
                            setSelectedTour(tour);
                            setShowDrawer(true)}}>Book Now</Button>
                        
                        </Space>
                    </Card.Grid>
                    )) }
                    </Card>
          
                    </div>
                    <Drawer title="Single Tour!" 
                    placement="right"  
                    onClose={() =>{setShowDrawer(false)}}
                    visible={showDrawer}>
                        <SingleTour data={selectedTour}/>
                    </Drawer>
                    </>
                    );
};
export default Tours;