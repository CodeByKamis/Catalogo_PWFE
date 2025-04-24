import estilo from './Perfil.module.css';

export function Perfil(){
    return(
        <main className={estilo.container}>
            <h2 className={estilo.perfil}>Meu Perfil</h2>

            <div className={estilo.divi}>
            <p>Nome: Kamila Vitória de Souza Cardozo</p>
            <p>Idade: 19 anos</p>
            <p>Quantidade de filmes assistidos:</p>
            <ul>
                <li>
                    <p>Janeiro: 10</p>
                    <p>Feveiro: 3</p>
                    <p>Março: 15</p>
                    <p>Abril: 4</p>
                </li>
            </ul>

            <p>Gêneros mais assistidos:</p>
            <ul>
                <li>
                    <p>1º Lugar: Romance</p>
                    <p>2º Lugar: Comédia</p>
                    <p>3º Lugar: Suspense</p>
                    <p>4º Lugar: Terror</p>
                </li>
            </ul>
            
            <p>Conta criada: 20/03/2025</p>
            <p></p>
                
            </div>

        </main>

    );
}