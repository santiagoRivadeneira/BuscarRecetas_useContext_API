import React from 'react'
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoRecetas from './components/ListaRecetas';


//context
import CategoriasProvider from './context/CategoriaContect';
//context de Recetas
import RecetasProvider from './context/RecetasContext';
//ModalContext
import ModalProvider from './context/ModalContext';

function App() {
  return (
        <CategoriasProvider>
          <ModalProvider>
            <RecetasProvider>

              <Header mensaje='Busca Recetas de Bebidas'/>
            
              <div className="container mt-5">
                <div className="row">
                    <Formulario />
                </div>

               <ListadoRecetas />
          </div>
          
          </RecetasProvider>
         </ModalProvider>
        </CategoriasProvider>
     
      
  );
}

export default App;
