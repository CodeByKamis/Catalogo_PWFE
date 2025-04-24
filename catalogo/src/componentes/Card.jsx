import estilo from './Card.module.css';

// filmes que aparecem na home e as informaçõe sobre ele
export function Card({ movie, onOpenModal }){
    return(
        <div className={estilo.conteiner}>
            <h3>{movie.title}</h3>
            <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}onClick={()=>onOpenModal(movie)}/>
            <p>{movie.overview}</p>
        </div>
    );

    
}