import './Home.css';
import { useEffect, useState } from 'react';
import api from '../services/api';

export default function Home(){
         
    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get("/movie/popular", {
                params:{
                    api_key: "bf344bc0dfdbd5db737382942ea970bf",
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