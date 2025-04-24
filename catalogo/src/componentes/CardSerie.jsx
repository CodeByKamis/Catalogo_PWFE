import estilo from './Card.module.css';

export function CardSerie({ serie, onOpenModal }){
    // adicionando informações sobre a serie
    return(
        <div className={estilo.conteiner}>
            <h3>{serie.name}</h3>
            <img src={`http://image.tmdb.org/t/p/w500/${serie.poster_path}`}onClick={()=>onOpenModal(serie)}/>
            
        </div>
    );

    
}