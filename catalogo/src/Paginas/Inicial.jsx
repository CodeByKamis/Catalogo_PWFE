import { BarraNavegacao } from '../componentes/BarraNavegacao';
import { Cabecalho } from '../componentes/Cabecalho';
import { Rodape } from '../componentes/Rodape';
import { Outlet } from 'react-router-dom';

export function Inicial(){
    return(
        <>
            
            <Cabecalho/>
            <BarraNavegacao />
            <Outlet/>
            <Rodape/>
        </>
    )
}