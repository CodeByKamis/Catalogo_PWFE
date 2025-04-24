import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Rotas } from './Rotas/Rotas';


//estrutura basica para usar React é atraves das funçõees
function App() {
//para trazer o resultado da função eu coloco o que quero no Return que deve ter apenas 1 componente

  return (
    <BrowserRouter>
      <Rotas/>
    </BrowserRouter>
    //para chamar o css dei  um apelido de estilos e chamei usando o classnome.
   //Tags fantasmas serverm para que eu cosiga usar duas tags no mesmo componentes.
  
  );
}

export default App
