import "./Filme.css";
import api from "../services/api";
import { useEffect, useState } from 'react';

export default function Filme() {
    const [filmes, setFilmes] = useState([]);
    const [lancamento, setLancamento] = useState([]);

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("/movie/popular", {
                params: {
                    api_key: "28fc232cc001c31e8a031f419d0a14ca",
                    language: "pt-BR",
                    page: 1,
                }
            })
            setFilmes(response.data.results.slice(0, 1));
        }
        loadFilmes();
    }, []);

    useEffect(() => {

        async function lancamento() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "28fc232cc001c31e8a031f419d0a14ca",
                    language: "pt-BR",
                    page: 1,
                }
            })

            setLancamento(response.data.results.slice(0, 30));

        }

        lancamento();

    }, [])

    return (
        <>
            <div className="destaque" >
                {filmes.map((filme) => {

                    return (
                        <>
                            <div className="legenda" >
                                <h2>{filme.title}</h2>
                                <p>{filme.overview}</p>
                                <p>Avalição: {filme.vote_average}</p>
                                <div class="branco"></div>
                            </div>

                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                        </>
                    );
                }
                )}
            </div>

        
            <h3>Lançamentos</h3>
            <div className="area-filme">
                <div className="area-filme-item" >
                    {lancamento.map((lancamentos) => {
                        return (
                            <img src={`https://image.tmdb.org/t/p/original/${lancamentos.poster_path}`} alt={lancamento.title} />
                        )
                    })}
                </div>
            </div>


            <h3>Lançamentos</h3>
            <h3>Lançamentos</h3>
        </>
    )
}