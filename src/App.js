import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Navigationbar from './components/Navigationbar';
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";

function App() {
    return (
    <BrowserRouter>
    <div className="App">
        <Navigationbar/>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>} />
            <Route path="/" element={<Home/>} />
        </Routes>
        </div>
    </BrowserRouter>
    
    );
}

export default App;
