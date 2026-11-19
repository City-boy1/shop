import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Productcard({ product }) {
    const { addToCart, cartItems } = useCart();
    const productInCart = cartItems.find(item => item.id === product.id)
    const productitemQuantity = productInCart ? productInCart.quantity : "";
    return (
        <div className="product-card">
                            <img src={product.image} alt={product.name} className="product-image" />
                            <div className="product-card-content">
                                <h3 className="product-name">{product.name}</h3>
                                <p className="product-price">${product.price.toFixed(2)}</p>
                                <div className="product-card-actions">
                                    <Link className="btn btn-secondary" to={`/products/${product.id}`}>
                                        View Details
                                    </Link>
                                    <button className="btn btn-primary" onClick={()=>addToCart(product.id)}>Add to Cart {productitemQuantity}</button>
                                </div>
                            </div>
                        </div>
    );
}