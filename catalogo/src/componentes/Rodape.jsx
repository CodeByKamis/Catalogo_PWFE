import estilos from './Rodape.module.css';

export function Rodape(){
    return(
        <main className={estilos.container}>
            {/* texto que aparece no footer */}
            <p>&copy;Todos os direitos reservados a FilmesFlix</p>
        </main>
    )
}