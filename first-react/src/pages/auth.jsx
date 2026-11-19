import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext"
import { Link, useNavigate, useParams } from "react-router-dom"

export default function Auth() {
    const {mode} = useParams()
    const {signup,login,error,setError}= useAuth();
    const navigate = useNavigate()

    const{
        register,
        handleSubmit,
        formState: {errors},
    } = useForm()

    function onSubmit(data){
        setError(null)
        let result;
        if(mode === "signup"){
        result = signup(data.email,data.password)
        } else{
            result = login(data.email,data.password)
        }

        if(result.success){
            navigate("/")
        } else{
            setError(result.error)
        }
    }
  return (
    <div className="page">
      <div className="container">
        <div className="auth-contain">
            <h1 className="page-title">
               {mode === "signup"? "Sign Up" : "Login"}
            </h1>
            {error && <div className="error">{error}</div>}
            <form  className="auth-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="user@gmail.com" id="email" {...register('email',{required:"Email is required"})}/>
                    {errors.email && (
                        <span>{errors.email.message}</span>
                    )}
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input type="passwords" name="password" placeholder="as123.xd;" id="password"{...register('password',{
                        required:"Password is required",
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters",
                        },
                        maxLength: {
                            value: 12,
                            message: "Password must be less than 12 characters",
                        },
                        })}/>
                        {errors.password && (
                        <span>{errors.password.message}</span>
                    )}
                </div>
                <button type="submit" className="btn btn-primary">
                    {mode === "signup"? "Sign Up" : "Login"}
                </button>
            </form>

            <div className="auth-switch">
                {mode === "signup"? <p>
                    Already have an account? <Link to="/auth/login">Login</Link>
                    </p> : <p>
                    Don't have an account? <Link to="/auth/signup">Sign Up</Link>
                    </p>}
            </div>
        </div>
      </div>
    </div>
  )
}