// Estrutura basica para os componentes
//O nome da função tem que ser o mesmo do arquivo
import estilos from './Cabecalho.module.css';

export function Cabecalho(){
    return(
        // nome do site que fica no cabeçalho
        <header className={estilos.conteiner}>
            <h1>FilmesFlix</h1>
        </header>
    )
}