import './Home.css';
import { useEffect, useState } from 'react';
import api from '../services/api';

export default function Home(){
         
    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "28fc232cc001c31e8a031f419d0a14ca",
                    language: "pt-BR",
                    page: 1,
                   }
            })
            setFilmes(response.data.results.slice(0, 20));
        }
        loadFilmes();
    },[]);

    return (
        <div class="slider">
            {filmes.map((filme) => {
               
                return (
                    <>
                        <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                    </>
                );
            }
            )}

        </div>
    )
}