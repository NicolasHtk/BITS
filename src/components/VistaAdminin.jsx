import React from 'react'
import { db, functions } from '../firebase'
import { UsuarioContext } from '../context/UsuarioProvider'

const VistaAdminin = (props) => {

    const [usuarios, setUsuarios] = React.useState([])

    React.useEffect(() => {
        fetchUsuarios()
    }, [])

    const fetchUsuarios = async () => {
        try {
            const res = await db.collection('usuarios').get()
            setUsuarios(res.docs.map(doc => doc.data()))
        } catch (error) {

        }
    }


    const administrador = email => {
        if (!email.trim()) {
            return console.log('email vacio')
        }

        const agregarRol = functions.httpsCallable('agregarAdministrador')
        agregarRol({ email: email })
            .then(res => {
                console.log(res)
                if (res.data.error) {
                    console.log('no tiene permisos')
                    return
                }

                db.collection('usuarios').doc(email).update({ rol: 'Admin' })
                    .then(user => {
                        console.log('usuairo modificado rol: administrador')
                        fetchUsuarios()
                    })
            })
    }

    const crearVendedor = email => {

        const agregarRol = functions.httpsCallable('crearVendedor')
        agregarRol({ email: email })
            .then(res => {
                console.log(res)
                if (res.data.error) {
                    console.log('no tiene permisos')
                    return
                }
                db.collection('usuarios').doc(email).update({ rol: 'Vendedor' })
                    .then(user => {
                        console.log('usuairo modificado rol: Vendedor')
                        fetchUsuarios()
                    })
            })
    }

    const eliminarVendedor = email => {
        const agregarRol = functions.httpsCallable('eliminarVendedor')
        agregarRol({ email: email })
            .then(res => {
                console.log(res)
                if (res.data.error) {
                    console.log('no tiene permisos')
                    return
                }
                db.collection('usuarios').doc(email).update({ rol: 'Invitado' })
                    .then(user => {
                        console.log('usuairo modificado rol: Invitado')
                        fetchUsuarios()
                    })
            })
    }


    const eliminarAdministrador = email => {
        const agregarRol = functions.httpsCallable('eliminarAdministrador')
        agregarRol({ email: email })
            .then(res => {
                console.log(res)
                if (res.data.error) {
                    console.log('no tiene permisos')
                    return
                }
                db.collection('usuarios').doc(email).update({ rol: 'Invitado' })
                    .then(user => {
                        console.log('usuairo modificado rol: Invitado')
                        fetchUsuarios()
                    })
            })
    }

    // const borrar = email => {
    //     const eliminar = functions.httpsCallable('eliminarAdministrador')
    //     eliminar({ email: email })
    //         .then(res => {
    //             console.log(res)
    //             if (res.data.error) {
    //                 console.log('no tiene permisos')
    //                 return
    //             }
    //             db.collection('usuarios').doc(email).delete()
    //                 .then(user => {
    //                     console.log('usuairo eliminado')
    //                     fetchUsuarios()
    //                 })
    //         })
    // }

    return (
        <div className='mt-4'>
            <h3>Administración de usuarios</h3>
            <ul className='list-group'>
                {
                    usuarios.map(usuario => (
                        <li className="list-group-item mb-2" key={usuario.uid}>
                            <span>{usuario.email} - rol: {usuario.rol} </span>

                            {
                                usuario.rol === 'Admin' ? (
                                    <button
                                        className='btn btn-danger mx-2 float-end'
                                        onClick={() => eliminarAdministrador(usuario.email)}
                                    >
                                        Eliminar Administrador
                                    </button>
                                ) : (
                                    <>
                                        <button
                                            className='btn btn-dark mx-2 float-end'
                                            onClick={() => administrador(usuario.email)}
                                        >
                                            Administrador
                                        </button>

                                        <button
                                            className='btn btn-success mx-2 float-end'
                                            onClick={() => crearVendedor(usuario.email)}
                                        >
                                            Vendedor
                                        </button>
                                        <button
                                            className='btn btn-info mx-2 float-end'
                                            onClick={() => eliminarVendedor(usuario.email)}
                                        >
                                            Invitado
                                        </button>




                                        {/* <button
                                            onClick={borrar}
                                            className='btn btn-danger float-end'
                                        >
                                            Borrar usuario
                                        </button> */}



                                    </>
                                )
                            }

                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default VistaAdminin
