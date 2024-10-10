import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './style.css'

function Register() {
    
    const [colegiado, setColegiado] = useState(""); 
    const [dpi, setDPI] = useState(""); 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fnacimiento, setFNacimiento] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate registration process (add your API call here)
        console.log("Registering:", { colegiado, dpi, name, email, password, fnacimiento });
        // Redirect to login page on successful registration
    };

    return (
        <div className="login template d-flex justify-content-center align-items-center 100-w vh-100 bg-secondary"> 
        <div className="form_container p-5 rounded bg-white">
            <h2 className="text-center">Crear una cuenta nueva</h2>
            <form onSubmit={handleSubmit}>

                <p className="text-center mt-3">
                    ¿Ya estas registrado? <Link to="/login">Accede</Link>
                </p>

                <div className="mb-3">
                    <label>NUMERO DE COLEGIADO</label>
                    <input type="number" placeholder="Ingresar colegiado sin guiones" className="form-control" value={colegiado} onChange={(e) => setColegiado(e.target.value)} required />
                </div>

                <div className="mb-3">
                <label>DPI</label>
                    <input type="number" placeholder="Ingresar DPI sin guiones" className="form-control" value={dpi} onChange={(e) => setDPI(e.target.value)} required />
                </div>

                <div className="mb-3">
                    <label>NOMBRE</label>
                    <input type="text" placeholder="nombre y apellido" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label>CORREO ELECTRONICO</label>
                    <input type="email" placeholder="ejemplo@dominio.com" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>

                <div className="mb-3">
                    <label>CLAVE</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>

                <div className="mb-3">
                    <label>FECHA DE NACIMIENTO</label>
                    <input type="date" id="start" name="trip-start" placeholder="2002-10-19" min="1970-01-01" max="2002-12-31" className="form-control" value={fnacimiento} onChange={(e) => setFNacimiento(e.target.value)} required />
                </div>

                <button type="submit" className="btn btn-primary w-100">Registrar</button>
            </form>
            
        </div>
        </div>
    );
}

export default Register;