import React from 'react'
import {auth, db, firebase} from '../firebase'

export const UsuarioContext = React.createContext()

const UsuarioProvider = (props) => {

    const dataUsuarioInicial = {
        email: null,
        uid: null,
        activo: null
    }
    const [usuario, setUsuario] = React.useState(dataUsuarioInicial)

    React.useEffect(() => {
        detectarUsuario()
    }, [])

    const detectarUsuario = () => {
        auth.onAuthStateChanged(user => {
            if(user){
                console.log(user)

                user.getIdTokenResult()
                    .then(idTokenResult => {
                        console.log(idTokenResult)
                        if (!!idTokenResult.claims.admin) {

                            console.log('es admin')
                            setUsuario({
                                email: user.email,
                                uid: user.uid,
                                activo: true,
                                rol: 'Admin'
                            })

                        }else if (!!idTokenResult.claims.vendedor) {
                            console.log('es vendedor')
                            setUsuario({
                                email: user.email,
                                uid: user.uid,
                                activo: true,
                                rol: 'Vendedor'
                            })
                        }else{
                            console.log('es invitado')
                            setUsuario({
                                email: user.email,
                                uid: user.uid,
                                activo: true,
                                rol: 'Invitado'
                            })
                        }

                    })

                
            }else{
                console.log(user)
                setUsuario({
                    email: null,
                    uid: null,
                    activo: false,
                    rol: 'No'
                })
            }
        })
    }

    

    const iniciarSesion = async() =>{
        try {
            const provider = new firebase.auth.GoogleAuthProvider()
            const res = await auth.signInWithPopup(provider)
            
            const existe = await db.collection('usuarios').doc(res.user.email).get()


            if(!existe.exists){
                await db.collection('usuarios').doc(res.user.email).set({
                    uid: res.user.uid,
                    email: res.user.email,
                    rol: 'Invitado'
                })
            }


        } catch (error) {
            console.log(error)   
        }
    }


    const cerrarSesion = () => {
        auth.signOut()
        localStorage.removeItem('usuario')
    }



    return (
        <div>
            <UsuarioContext.Provider value={{usuario, iniciarSesion, cerrarSesion}}>
                {props.children}
            </UsuarioContext.Provider>
        </div>
    )
}

export default UsuarioProvider