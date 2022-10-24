import { Link } from "react-router-dom";
import './Header.css';

export default function Header(){
    return (
        <header>
            EricfliX
            <Link to={'/login'} >Entrar</Link>
        </header>
    )
}