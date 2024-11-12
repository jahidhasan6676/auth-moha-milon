import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "../firease.init";


export const AuthContext = createContext(null)

    const name ='jahid hasan';
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

const authInfo = {
    name,
    createUser
}

const AuthProvider = ({children}) => {
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;