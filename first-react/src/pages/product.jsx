import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getProductById } from "../data";
import { useCart } from "../context/CartContext";
export default function ProductDetails() {
    const [product,setProduct] = useState({})
    const navigate = useNavigate();
    const {id} = useParams();

    const { addToCart, cartItems } = useCart();
        const productInCart = cartItems.find(item => item.id === product.id)
        const productitemQuantity = productInCart ? productInCart.quantity : "";

    useEffect(()=>{
        const foundProduct = getProductById(id)
        if(!foundProduct){
            navigate('/')
            return
        }
        setProduct(foundProduct)
    },[id])

    if(!product){
        return <div>Loading...</div>
    }
  return (
    <div className="page">
      <div className="container">
        <div className="product-detail">
            <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
            </div>
            <div className="product-detail-content">
                <h1 className="product-name">{product.name}</h1>
                <p className="product-price">${product.price}</p>
                <p>{product.description}</p>
                <button className="btn btn-primary" onClick={()=>addToCart(product.id)}>Add to Cart {productitemQuantity}</button>
            </div>
        </div>
      </div>
    </div>
  )
}