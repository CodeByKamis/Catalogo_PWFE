import estilos from'./BarraNavegacao.module.css';
import { Link } from 'react-router-dom';

//AS FONTES PODE COLOCAR NO ASSETS E AS IMAGENS TAMBEM

//estutura 
// O nome da função deve ser o mesmo do arquivo

export function BarraNavegacao(){
    //Todo retorno só pode renderizar um componente
    return(
        <nav className={estilos.conteiner}>
            <ul>
                <Link to= '/'>
                <li>
                    <span class="material-symbols-outlined">home</span>
                    Home
                </li>
                </Link>

                <Link to ='series'>
                <li>
                    <span class="material-symbols-outlined">tv</span>
                    Series
                </li>
                </Link>
{/* os nomes dos links deve ser o mesmo nome que está no arquivo Rotas.jsx */}
                <Link to='perfil'>
                <li>
                    <span class="material-symbols-outlined">person</span>
                    Perfil
                </li>
                </Link>
            </ul>
        </nav>
    )
}