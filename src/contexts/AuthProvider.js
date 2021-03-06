import React, { createContext } from 'react'
import initializeAuthentication from '../firebase/firebase.init';
import useFirebase from '../hooks/useFirebase';

initializeAuthentication();

const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    )
}
export { AuthProvider, AuthContext };