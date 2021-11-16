import React from 'react'
import {db} from '../firebase'

export const LibrosContext = React.createContext()

const LibrosProvider = (props) => {

    const [libros, setLibros] = React.useState([])

    React.useEffect(() => {
        fetchLibros()
    })

    const fetchLibros = async() =>{
        try {
            const res = await db.collection('libros').get()
            const arrayLibros = res.docs.map(doc => {
                return {
                    ...doc.data(),
                    id: doc.id
                }
            })
            setLibros(arrayLibros)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <LibrosContext.Provider value={{libros, fetchLibros}}>
            {props.children}
        </LibrosContext.Provider>
    )
}

export default LibrosProvider
