import React, { createContext, useState, useEffect } from 'react';
import * as firebase from 'firebase';

const AuthContext = createContext({signed: false});

export const AuthProvider = ({ children }) => {

    const [signed, setSigned] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        firebase.auth().onAuthStateChanged(user => {
            if (user != null) {
                setSigned(true);
                setLoading(false);
            } else {
                setLoading(false);
            }
        })
    }, [])

    async function register(email, password) {
        try {
            const registerUser = await firebase.auth().createUserWithEmailAndPassword(email, password);
            if (registerUser && registerUser.user) {
                const hadleCreate = await createUserDB()
                if(hadleCreate){
                    setSigned(true);
                    return true
                } else {
                    alert('Não foi possível criar usuário no banco de dados')
                    return false
                }
            }
        } catch (e) {
            alert(e);
            return false
        }
    }

    async function createUserDB(){
        try {
            const createUser = firebase.app().database().ref(`users/${firebase.auth().currentUser.uid}`)
            createUser.set({
                email: firebase.auth().currentUser.email
            })
            return true
        } catch (e) {
            alert(e)
            return false
        }
    }

    async function login(email, password) {
        try {
            const loginUser = await firebase.auth().signInWithEmailAndPassword(email, password);
            if (loginUser && loginUser.user) {
                setSigned(true);
                return true
            }
        } catch (e) {
            alert(e);
            return false
        }
    }

    async function signOut() {
        try {
            const signOutUser = await firebase.auth().signOut();
            if(signOutUser){
                setSigned(false);
            }
        } catch (e) {
            alert(e);
        }
    }

    return (
        <AuthContext.Provider
            value={{
                signed: signed,
                register,
                login,
                signOut,
                loading
            }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;