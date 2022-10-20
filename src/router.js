import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Header from "./Header";



export default function Rota(){

    return(
    <Router>
        <Header/>
        <Routes>
            <Route path="/"   element={<Home/>} />
        </Routes>
    </Router>
    )
}