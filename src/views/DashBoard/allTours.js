import React from "react";
// import React from 'react';
import "antd/dist/antd.css";
import allTours from "../../assets/Data/tours.json";
import { Table } from "antd";
const columns = [
  {
    title: "Title",
    dataIndex: "title",
  },
  {
    title: "names",
    dataIndex: "description",
  },
  {
    title: "dueDate",
    dataIndex: "dueDate",
  },
  {
    title: "amount",
    dataIndex: "amount",
  },
  {
    title: "seats",
    dataIndex: "seats",
  }, 
    ]
const App = () => {



const onFinish = (value) => {
  console.log("params", "value");
};

  return <Table columns={columns} dataSource={allTours} onFinish={onFinish} />;
};

export default App;
