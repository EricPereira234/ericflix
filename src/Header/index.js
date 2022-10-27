import { Link } from "react-router-dom";
import { useState } from "react";
import './Header.css';

export default function Header(props) {
    const [button, setButton] = useState();
    const [link, setLink] = useState();

    let text1 = "Entar";
    let text2 = "Sair";

    function troca() {
        setButton(!button);
        setLink(!link);
    }
    return (
        <header>
            EricfliX
            <Link to={link ? '/' : '/login'} onClick={troca} >
                {button ? text2 : text1}
            </Link>
        </header>
    )
}