import "./Filme.css";
import api from "../services/api";
import { useEffect, useState } from 'react';

export default function Filme() {
    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get("/movie/popular", {
                params:{
                    api_key: "28fc232cc001c31e8a031f419d0a14ca",
                    language: "pt-BR",
                    page: 1,
                   }
            })
            setFilmes(response.data.results.slice(0, 1));
        }
        loadFilmes();
    },[]);

    return (
        <>
            <div className="destaque" >
            {filmes.map((filme) => {
               
               return (
               <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
               );
            }
            )}
           </div>
            <h3>Lançamentos</h3>
            <h3>Lançamentos</h3>
            <h3>Lançamentos</h3>
        </>
    )
}