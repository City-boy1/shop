import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(); 
export function AuthProvider({ children }) {
        const [user,setUser] = useState(localStorage.getItem("currentUser") ? {
            email: localStorage.getItem("currentUser")} : null
        )
        const[error,setError] = useState(null)

        const signup = (email,password) => {
            const users = JSON.parse(localStorage.getItem("users") ||"[]")
            if(users.find(u=> u.email === email)){
                return{success: false,error:"Email already exists"}
            }
            const newUser = {email,password}
            users.push(newUser);
            localStorage.setItem("users",JSON.stringify(users));
            localStorage.setItem("currentUser",email)
            setUser({ email })
            return {success:true}
        }
        const login = (email,password) => {
            const users = JSON.parse(localStorage.getItem("users") ||[])
            const foundUser = users.find((u) => u.email === email && u.password ===password)
            if(!foundUser){
                return{success: false,error:"Invalid credentials"}
            }
            localStorage.setItem("currentUser",email)
            setUser({email})
            return{success:true}
        }
        const logout = () => {
            localStorage.removeItem("currentUser")
            setUser(null)
        }

        return(
            <AuthContext.Provider value={{ signup, logout, login, user, error,setError }}>
                {children}
            </AuthContext.Provider>
        )
    } 

    export function useAuth(){
        const context = useContext(AuthContext)
        return context;
    }