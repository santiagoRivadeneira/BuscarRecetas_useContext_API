import React, {useContext} from 'react';
import Receta from '../components/Receta'
import {RecetasContext} from '../context/RecetasContext.js'


const ListaRecetas = () => {
    //extraemos las recetas
    const { recetas } = useContext(RecetasContext);
   
    //console.log(recetas);
    return ( 
        <div className="row mt-5">
            {recetas.map(receta => (
                <Receta 
                  key={receta.idDrink}
                  receta={receta} 
                />
            ))}
        </div>
        
    );
}
 
export default ListaRecetas;