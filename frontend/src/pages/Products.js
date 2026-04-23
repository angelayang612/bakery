import { useEffect, useState } from 'react';

// components
// product deatils

import ProductDetails from '../components/ProductDetails';

const Products = () => {
    // first render products as null
    const [products, setProducts] = useState(null);
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('/products');
            const json = await response.json();
            if (response.ok) {
                // updates the products stats with the data fetched from the backend api
                setProducts(json);
            }
        }
        fetchProducts();
    }, []);

    return (
        <div>    
        <div className="container">
            <h3><i>Browse Products</i></h3>
                <div className="products-grid">
                    {products && products.map((product) => (
                        <ProductDetails key={product._id} product={product}/>
                    ))}
                </div>
            </div>
        </div>   
    );
}

export default Products