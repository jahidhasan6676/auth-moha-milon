import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firease.init";


export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    
    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
        
    }
    // user singIn
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // sign out user
    const signOutUser = ()=>{
        setLoading(true)
        signOut(auth);
       
    }

    // google popup
    const signInGoogle = () =>{
        return signInWithPopup(auth,provider);
    }
    

    // observe login user

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('current user', currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe();
        }
    },[])
    

    const authInfo = {
      
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        signInGoogle
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;