import { Link } from "react-router-dom";  
import { useAuth } from "../context/AuthContext";

export default function Navbar(){
    const{user,logout} = useAuth()
    return(
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-brand">AccraHub</Link>
            <div className="navbar-links">
                <Link to="/" className="navbar-link">Home</Link>
                <Link to="/checkout" className="navbar-link">Checkout</Link>
            </div>
            <div className="navbar-auth">
                {user ? (
                    <>
                    <div>
                        {user.email}
                    </div>
                        <button className="btn btn-secondary" onClick={logout}>Logout</button>
                    </>
                ):(
                <div className="navbar-auth-links">
                    <Link to="/auth/login" className="btn btn-secondary">Login</Link>
                    <Link to="/auth/signup" className="btn btn-primary">Signup</Link>
                </div>)}
            </div>
            </div>
        </nav>
    )
}