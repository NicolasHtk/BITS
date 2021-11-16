import React from 'react'
import {db} from '../firebase'
import { LibrosContext } from '../context/LibrosProvider'
import { UsuarioContext } from '../context/UsuarioProvider'

const PintarVendedor = (props) => {

    const [autor, setAutor] = React.useState('')

    const {fetchLibros} = React.useContext(LibrosContext)
    const {usuario} = React.useContext(UsuarioContext)

    React.useEffect(() =>{
        fetchAutor()
    }, [])

    const eliminarLibro = async() => {
        try {
            await db.collection('libros').doc(props.id).delete()
            fetchLibros()
        } catch (error) {
            console.log(error)
        }
    }

    const fetchAutor = async() => {
        try {
            const res = await props.referencia.get()
            console.log(res.data())
            setAutor(res.data().email)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <span> vendedor: {autor}</span>
            {
                (autor === usuario.email || usuario.rol === 'Admin') && (
                    <button 
                        onClick={eliminarLibro}
                        className='btn btn-danger float-end'
                    >
                        Eliminar
                    </button>
                )
            }
            
        </>
    )
}

export default PintarVendedor
