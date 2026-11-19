import { getProducts } from "../data"
import Productcard from "../components/Productcard";

export default function Home() {
  const products = getProducts();
  return (
    <div className="page">
        <div className="home-hero">
            <h1 className="home-title">Welcome to AccraHub</h1>
            <p className="home-subtitle">
                Discover amazing products at great prices
            </p>
        </div>
            <div className="container">
                <h2 className="page-title">Our Products</h2>
                <div className="product-grid">
                    {products.map((product) => (
                        <Productcard key={product.id} product={product} />
                    ))}
                </div>
            </div>
    </div>
  )
}