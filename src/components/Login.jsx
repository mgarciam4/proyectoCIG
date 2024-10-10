import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './style.css'

function Login() {
    const [colegiado, setColegiado] = useState(""); 
    const [dpi, setDPI] = useState(""); 
    const [fnacimiento, setFNacimiento] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate login process (add your API call here)
        console.log("Logging in with:", { colegiado, dpi, fnacimiento,password });
        // Redirect to home page on successful login
    };

    return (
        <div className="login template d-flex justify-content-center align-items-center 100-w vh-100 bg-white"> 
        <div className="form_container p-5 rounded bg-white">
            <h2 className="text-center">Acceder</h2>
            <form onSubmit={handleSubmit}>

                <p className="text-center mt-3">
                    Inicia sesion para continuar | <Link to="/register"> Registro </Link>
                </p>

                <div className="mb-3">
                    <label>NUMERO DE COLEGIADO</label>
                    <input type="number" className="form-control" value={colegiado} onChange={(e) => setColegiado(e.target.value)} required />
                </div>

                <div className="mb-3">
                    <label>DPI</label>
                    <input type="number" className="form-control" value={dpi} onChange={(e) => setDPI(e.target.value)} required />
                </div>

                <div className="mb-3">
                    <label>FECHA DE NACIMIENTO</label>
                    <input type="date" id="start" name="trip-start" placeholder="2002-10-19" min="1970-01-01" max="2002-12-31" className="form-control" value={fnacimiento} onChange={(e) => setFNacimiento(e.target.value)} required />
                </div>

                <div className="mb-3">
                    <label>CLAVE</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-secondary w-100">Ingresar</button>
            </form>
            
        </div>
        </div>
    );
}

export default Login;