import estilos from './ModalSerie.module.css';
// mostrar informações sobre a serie quando clicar no card dele
export function ModalSerie({ serie, onClose}){
    if(!serie){
        return null;
    }
     console.log(serie);
   
    return(
        <div className={estilos.modalback}>
            <div className={estilos.modalConteiner}>
                <div className={estilos.ModalHeader}>
                <button onClick={onClose}>x</button>
                {/* titulo da serie */}
                    <h2 className={estilos.name}>{serie.name}</h2>
                   {/* imagem da serie */}
                    <img className= {estilos.imgModal} src={`http://image.tmdb.org/t/p/w500/${serie.poster_path}`}/>
                    <div className={estilos.imgDetalhes}>
                        <ul>
                            {/* informações adicionais quando for clicado no card da serie */}

                            <li>{`Popularidade: ${serie.popularity}` }</li>
                            <li>{`Lançamento: ${serie.release_date}`}</li>
                            <li>{`Quantidade de votos: ${serie.vote_count}`}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        )
   
}