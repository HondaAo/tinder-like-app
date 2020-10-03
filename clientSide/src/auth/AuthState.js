import React, { useState, useEffect } from 'react'
import AuthContext from './authContext';
import firebase from '../firebase'


const AuthState = (props) => {
    const [ user, setUser ] = useState('');
    const login = async (email, password, history)=>{

        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            history.push("/");
          } catch (error) {
            alert(error);
        }
    }
    const register = async (email, password, history) =>{
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
            history.push("/");
          } catch (error) {
            alert(error);
          }
    }
    useEffect(() => {
        firebase.auth().onAuthStateChanged(setUser);
      }, []);
    return (
        <AuthContext.Provider
         value={{
             user,
             setUser,
             login,
             register
         }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState
