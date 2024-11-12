import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Login = () => {
       
        const {signInUser, signInGoogle} = useContext(AuthContext)

    const navigate = useNavigate()

    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)


        // sign In user
        signInUser(email,password)
        .then(result=>{
            console.log(result)
            e.target.reset();
            navigate('/')
        })
        .catch(error=>{
            console.log(error)
        })


        
    }

    // google popup
    const handleGoogleSign = () =>{
        signInGoogle()
        .then(result =>{
            console.log(result)
            navigate('/')
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold text-center">Login now!</h1>
                    
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="ml-3">New to this website? please <Link className="underline" to="/register">Register</Link></p>
                    <button onClick={handleGoogleSign} className="btn btn-ghost w-fit">Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;