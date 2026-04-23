import { useNavigate } from 'react-router-dom';

const ProductDetails = ({ product }) => {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate('/buy', { state: { product } });
    }
    
    return (
        <article className="card">
            <div className="card-body">
                <h3>{product.itemName}</h3>
                <p className="card-price">${product.price}</p>
                <button 
                    className="btn btn-primary mt-2" 
                    onClick={handleClick}
                    type="button"
                >
                    Add to Cart
                </button>
            </div>
        </article>
    )
};

export default ProductDetails;