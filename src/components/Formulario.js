import React, { useContext, useState } from 'react';
import {CategoriasContext} from '../context/CategoriaContect.js'
import {RecetasContext} from '../context/RecetasContext.js'


const Formulario = () => {

//context con las categorias    
const { categorias } = useContext(CategoriasContext);
//context con los atributos de recetas
const {buscarRecetas, guardarConsultar} = useContext(RecetasContext)


const [busqueda, guardarBusqueda] = useState({
    nombre: '',
    categoria: ''
});


//funcion para leer los contenidos
const obtenerDatosRecetas = e =>{
    guardarBusqueda({
        ...busqueda,
        [e.target.name] : e.target.value
    })
}

const enviarReceta = e =>{
    e.preventDefault()
    buscarRecetas(busqueda);
    guardarConsultar(true);
}


    return ( 
        <form 
        className="col-12"
        onSubmit={enviarReceta}
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por Categoria o Ingrediente </legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                        type="text"
                        name="nombre"
                        className="form-control"
                        placeholder="Buscar Por Ingrediente"
                        onChange={obtenerDatosRecetas}
                    />
                </div>
                
                <div className="col-md-4">
                    <select 
                        className="form-control"
                        name="categoria"
                        onChange={obtenerDatosRecetas}
                    >
                        <option value="">-- Selecciona Categoría --</option>
                        {categorias.map(categoria => (
                            <option 
                                key={categoria.strCategory} 
                                value={categoria.strCategory} 
                            >{categoria.strCategory}</option>
                        ))}
                    </select>
                </div>
                
                <div className="col-md-4">
                    <input 
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar Bebidas"
                    />
                </div>
           
            </div>

        </form>

        
     );
}
 
export default Formulario;