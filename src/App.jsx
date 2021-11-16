import React from 'react'

import Navbar from './components/Navbar'
import VistaAdminin from './components/VistaAdminin'
import AgregarLibros from './components/AgregarLibros'
import Libros from './components/Libros'

import { UsuarioContext } from './context/UsuarioProvider'


const App = () => {

    const {usuario} = React.useContext(UsuarioContext)

    return (
        <div>
            <Navbar />
            <div className="container-xl">

                {
                usuario.rol === 'Admin' && <VistaAdminin />
                }

                {
                usuario.rol === 'Vendedor' && <AgregarLibros />
                }

                <Libros />


            </div>
        </div>
    )
}

export default App
