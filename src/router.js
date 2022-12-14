import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Header from "./Header";
import Filme from "./Filme";
import Logar from "./Login";



export default function Rota(){

    return(
    <Router>
        <Header/>
        <Routes>
            <Route path="/"   element={<Home/>} />
            <Route path="/login" element={<Logar/>} />
            <Route path="/filme" element={<Filme/>} />
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    </Router>
    )
}