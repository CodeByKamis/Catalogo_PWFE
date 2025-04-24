import axios from "axios";
import React, {useState, useEffect} from "react";
import { Card } from './Card';
import { Modal } from './Modal';
// senha para ter acesso aos filmes da api
const API_URL = 'https://api.themoviedb.org/3';
const API_key = 'af26cce282aecf5c6cc39a264f29d0a7';

// função da lista dos filmes
export function Lista(){
    const[movies, setMovies] = useState([]);
    const[SelectedMovie, setSelectMovie] = useState(null) 
    //()parametros {}script de programação , []dependencias
    useEffect(()=>{
        axios.get(`${API_URL}/movie/popular?api_key=${API_key}&language=pt-BR`)
            .then(response=>{
                console.log(response.data.results);
                setMovies(response.data.results);
            })
            .catch(error => {
                console.log('erro', error);
            });
    },[]);

    const handleOpenModal = (movie)=>{
        setSelectMovie(movie);
    }

    const handleCloseModal =()=>{
        setSelectMovie(null);
    }

    // Retornar os cards de filmes
    return(
        <div>
            <figure>
                {movies.map(movie=>(
                    <Card key={movie.id}
                    movie={movie}
                    onOpenModal = {handleOpenModal}
                    />
                ))}
            </figure>
            {SelectedMovie &&(<Modal movie={SelectedMovie} onClose={handleCloseModal}/>)}
        </div>
    )

}