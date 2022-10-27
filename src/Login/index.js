import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import {  toast } from 'react-toastify';

export default function Logar() {
    const navigate = useNavigate();
    const [imputemail, setImputEmais] = useState('');
    const [imputSenha, setImputSenha] = useState('');

    let email = "ericflix";
    let senha = 123;
    function Login() {
        if (email == imputemail && senha == imputSenha) {
            navigate("/filme");
        
        }else{
            toast.error("email e senha invjálida !");
            navigate("/login");
        }
        
    }
    return (
        <div className="container">
            <label>Login</label>
            <input type={"text"} placeholder="exemple@.com" 
             value={imputemail}
             onChange={(e)=>setImputEmais(e.target.value)}
            />
            <input type={"password"} 
                value={imputSenha}
                onChange={(e)=>setImputSenha(e.target.value)}
            />
            <button onClick={Login} >Entrar</button>
            <a href="/login" >esqueceu sua senha ?</a>
        </div>
    )
}