import "./Filme.css";
import api from "../services/api";
import { useEffect, useState } from 'react';
import { HiArrowLeft } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi";

export default function Filme() {
    const [filmes, setFilmes] = useState([]);
    const [lancamento, setLancamento] = useState([]);
    const [originalFilme, setOriginalFilme] = useState([]);
    const [continuarFilme, setContinuarFilme] = useState([]);
   


    const [scroll, setScroll] = useState(-400);
    const [scrollOriginal, setScrollOriginal] = useState(-300);
    const [scrollContinuar, setScrollContinuar] = useState(-36);

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("/movie/now_playing", {
                params: {
                    api_key: "bf344bc0dfdbd5db737382942ea970bf",
                    language: "pt-BR",
                    page: 1,
                }
            })
            setFilmes(response.data.results.slice(0, 1));
        }
        loadFilmes();
    }, []);


    //lançamentos
    useEffect(() => {
        async function lancamento() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "bf344bc0dfdbd5db737382942ea970bf",
                    language: "pt-BR",
                    page: 1,
                }
            })

            setLancamento(response.data.results.slice(0, 30));

        }

        lancamento();

    }, []);


    //original
    useEffect(() => {
        async function original() {
            const response = await api.get("movie/upcoming", {
                params: {
                    api_key: "bf344bc0dfdbd5db737382942ea970bf",
                    language: "pt-BR",
                    page: 1,
                }
            })

            setOriginalFilme(response.data.results.slice(0, 30));

        }

        original();

    }, []);


    //continue assistindo
    useEffect(() => {
        async function Continuar() {
            const response = await api.get("movie/upcoming", {
                params: {
                    api_key: "bf344bc0dfdbd5db737382942ea970bf",
                    language: "pt-BR",
                    page: 1,
                }
            })

            setContinuarFilme(response.data.results.slice(0, 5));

        }

        Continuar();

    }, []);



    //funções para setas
    function left(){
        let numero = scroll+30;
        if (numero < 0 ){
            setScroll(numero);
        }
         
    }
    function rigth(){
        let numero = scroll-30;
        if (numero > -999 ){
            setScroll(numero);
        }
         
    }


    function leftOriginal(){
        let numero = scrollOriginal+30;
        if (numero < 0 ){
            setScrollOriginal(numero);
        }
         
    }
    function rigthOriginal(){
        let numero = scrollOriginal-30;
        if (numero > -999 ){
            setScrollOriginal(numero);
        }
         
    }



    function leftContinur(){
        let numero = scrollContinuar+30;
        if (numero < 0 ){
            setScrollContinuar(numero);
        }
         
    }
    function rigthContinur(){
        let numero = scrollContinuar-30;
        if (numero > -300 ){
            setScrollContinuar(numero);
        }
         
    }

    

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
            <div className="caixaSeta">
                <HiArrowLeft onClick={left} className="seta" />
                <HiArrowRight onClick={rigth}  className="seta" />
            </div>

            <div className="area-filme" >
                <div className="area-filme-item" style={{ marginLeft: scroll }} >
                    {lancamento.map((lancamentos) => {
                        return (
                            <img src={`https://image.tmdb.org/t/p/original/${lancamentos.poster_path}`} alt={lancamento.title} />
                        )
                    })}
                </div>
            </div>






            <h3>Original da EricFlix</h3>
            <div className="caixaSeta">
                <HiArrowLeft onClick={leftOriginal} className="seta" />
                <HiArrowRight onClick={rigthOriginal}  className="seta" />
            </div>

            <div className="area-filme" >
                <div className="area-filme-item" style={{ marginLeft: scrollOriginal }} >
                    {originalFilme.map((lancamentos) => {
                        return (
                            <img src={`https://image.tmdb.org/t/p/original/${lancamentos.poster_path}`} alt={lancamento.title} />
                        )
                    })}
                </div>
            </div>



            <h3>Continuar Assistindo</h3>
            <div className="caixaSeta">
                <HiArrowLeft onClick={leftContinur} className="seta" />
                <HiArrowRight onClick={rigthContinur}  className="seta" />
            </div>

            <div className="area-filme" >
                <div className="area-filme-item" style={{ marginLeft: scrollContinuar }} >
                    {continuarFilme.map((lancamentos) => {
                        return (
                            <img src={`https://image.tmdb.org/t/p/original/${lancamentos.poster_path}`} alt={lancamento.title} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}