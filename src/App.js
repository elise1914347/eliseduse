import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./routes";
import {Provider} from "react-redux";
import Store from "./redux/Stores"
const App=()=>{
    return(
        <Provider store={Store}>
        <Router>
            <Routes></Routes>
        </Router>
        </Provider>
    );   
};

export default App;
