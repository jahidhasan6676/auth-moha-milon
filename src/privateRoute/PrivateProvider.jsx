import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateProvider = ({children}) => {
    const {user,loading} = useContext(AuthContext);

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>;
    }

    if(user){
        return children;
    }
    else{
       return <Navigate to="/login"></Navigate>;
    }
    return (
        <div>
            
        </div>
    );
};

export default PrivateProvider;