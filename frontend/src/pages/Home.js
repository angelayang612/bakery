import { useEffect, useState } from 'react';


// components
// product deatils

import ProductDetails from '../components/ProductDetails';


const Home = () => {
    const [products, setProducts] = useState(null);
    // the fetch shouldn't be async 
    useEffect(() => {
        // but the function inside should be async
        const fetchProducts = async () => {
            // this sends a get request to the backend to retrive the list of products
            // fetch always defaults to GET
            const response = await fetch('/api/products');
            // an array of objects where each object represents a product
            const json = await response.json();

            if (response.ok) {
                // updates the products stats with the data fetched from the backend api
                setProducts(json);
            }
        }

        fetchProducts();
    }, []);

    return (
        <div className="home">
            <section className="hero">
                <div className="container">
                    <span className="eyebrow">Handcrafted Daily</span>
                    <h2>Fresh from Our Oven</h2>
                    <p>Discover our selection of artisanal baked goods, made with love and the finest ingredients.</p>
                </div>
            </section>

            <section className="products-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Products</h2>
                        <p className="text-center">Baked fresh every morning</p>
                    </div>
                    <div className="products-grid">
                        {products && products.map((product) => (
                            <ProductDetails key={product._id} product={product}/>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;