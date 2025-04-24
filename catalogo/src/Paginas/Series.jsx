import axios from "axios";
import React, {useState, useEffect} from "react";
import { ModalSerie } from '../componentes/ModalSerie';
import { CardSerie } from '../componentes/CardSerie';
import estilos from './Series.module.css';

const API_key = 'af26cce282aecf5c6cc39a264f29d0a7';
const API_URL = 'https://api.themoviedb.org/3';

export function Series(){
    const [series, setSeries] = useState([]);
    const [selectedSerie, setSelectedSerie] = useState(null);
     
        useEffect(() => {
            axios.get(`${API_URL}/tv/popular?api_key=${API_key}&language=pt-BR`)
                .then(response=>{
                    console.log(response.data.results);
                    setSeries(response.data.results);
                })
                .catch(error => {
                    console.log('erro', error);
                });
        },[]);

        const handleOpenModal = (serie)=>{
            setSelectedSerie(serie);
        }
    
        const handleCloseModal =()=>{
            setSelectedSerie(null);
        }
    return(
        <main className={estilos.container}>
            <h2 className={estilos.titulo}>Series</h2>
            <div>
                <figure>
                    {series.map(serie=>(
                        <CardSerie key={serie.id}
                        serie={serie}
                        onOpenModal = {handleOpenModal}
                        />
                    ))}
                </figure>
                {selectedSerie &&(<ModalSerie serie={selectedSerie} onClose={handleCloseModal}/>)}
            </div>
        </main>
        
    )
}