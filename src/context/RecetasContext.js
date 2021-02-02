import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';


export const RecetasContext = createContext()


const RecetasProvider = props =>{



const [recetas, guardarRecetas] = useState([]);
const [busqueda, buscarRecetas] = useState({
    nombre: '',
    categoria:''
});
const [consultar, guardarConsultar] = useState(false);


//destructuring para obtener los valores de busqueda.
const {nombre, categoria} = busqueda;



//useEffect que recarga la pagina cada vez que cambia el vaor de la busqueda
useEffect(() => {
if(consultar){
    const obtenerRecetas = async () =>{
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`
   
        const resultado = await axios.get(url);

        guardarRecetas(resultado.data.drinks);
    }
    obtenerRecetas();

}

}, [busqueda ]);



    return(
        <RecetasContext.Provider
            value={{
                buscarRecetas,
                guardarConsultar,
                
                recetas
            }}
        >
            {props.children}
        </RecetasContext.Provider>

    )


}

export default RecetasProvider;