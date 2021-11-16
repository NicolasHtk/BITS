import React from 'react'
import {LibrosContext} from '../context/LibrosProvider'
import PintarVendedor from './PintarVendedor'

const Libros = () => {
    const {libros} = React.useContext(LibrosContext)

    return (
        <div className='mt-5'>
            <h3>Lista libros</h3>
            <ul className='list-group'>
                {
                    libros.map(libro => (
                        <li className="list-group-item" key={libro.id}>
                            <span>
                                {libro.titulo}
                            </span>
                            <span>
                                <PintarVendedor referencia={libro.autor} id={libro.id}/>
                            </span>
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}

export default Libros
