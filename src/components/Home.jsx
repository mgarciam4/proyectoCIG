import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './style.css'

function Home() {
    return (
        <div className="login template d-flex justify-content-center align-items-center 100-w vh-100 bg-white"> 
        <div className="form_container p-5 rounded bg-white">
            <h2 className="text-center">Bienvenido!!!</h2>
                <p className="text-center mt-3">
                    Para registrar | <Link to="/register"> Registro </Link>
                </p>
                <p className="text-center mt-3">
                    Para login | <Link to="/login"> Login </Link>
                </p>
            
        </div>
        </div>
    );
}

export default Home;