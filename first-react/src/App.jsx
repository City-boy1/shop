import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Auth from "./pages/auth"
import Checkout from "./pages/checkout"
import Navbar from "./components/Navbar"
import ProductDetails from "./pages/product"
import { AuthProvider } from "./context/AuthContext"
import { CartProvider } from "./context/CartContext"

export default function App(){
    return(
        <div className="app">
            <AuthProvider >
                <CartProvider>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/auth/:mode" element={<Auth />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/products/:id" element={<ProductDetails />} />
            </Routes>
                </CartProvider>
            </AuthProvider>
        </div>
    )
}
