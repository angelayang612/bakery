import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Buy = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const product = location.state?.product;

    const [customerName, setCustomerName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    // If no product was passed, redirect back to home
    if (!product) {
        return (
            <div className="buy-page">
                <div className="container">
                    <h2>No Product Selected</h2>
                    <p>Please select a product from the home page.</p>
                    <button className="btn btn-primary" onClick={() => navigate('/')}>
                        Back to Home
                    </button>
                </div>
            </div>
        );
    }

    const handleCheckout = async (e) => {
        e.preventDefault();
        setError(null);

        // Validate form
        if (!customerName || !email || !address) {
            setError('Please fill in all fields');
            return;
        }

        // Create order data
        const orderData = {
            customerName,
            email,
            address,
            product: {
                itemName: product.itemName,
                price: product.price,
                id: product._id
            }
        };

        try {
            const response = await fetch('/api/order', {
                method: 'POST',
                body: JSON.stringify(orderData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                const errorText = await response.text();
                setError(`Order failed: ${errorText}`);
                return;
            }

            const json = await response.json();
            console.log('Order successful:', json);
            
            setSuccess(true);
            
            // Reset form
            setCustomerName('');
            setEmail('');
            setAddress('');

            // Redirect to home after 2 seconds
            setTimeout(() => {
                navigate('/');
            }, 2000);

        } catch (error) {
            console.error('Checkout error:', error);
            setError(`Error: ${error.message}`);
        }
    };

    return (
        <div className="buy-page">
            <div className="container">
                <h2>Checkout</h2>
                
                {success && (
                    <div className="success-message">
                        Order placed successfully! Redirecting to home...
                    </div>
                )}

                <div className="checkout-container">
                    <div className="order-summary">
                        <h3>Order Summary</h3>
                        <div className="product-summary">
                            <h4>{product.itemName}</h4>
                            <p className="price">${product.price}</p>
                        </div>
                        <div className="total">
                            <strong>Total: ${product.price}</strong>
                        </div>
                    </div>

                    <form className="checkout-form" onSubmit={handleCheckout}>
                        <h3>Customer Information</h3>
                        
                        <label>Full Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            required
                        />

                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="john@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <label>Delivery Address</label>
                        <textarea
                            placeholder="123 Main St, City, State, ZIP"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            rows="3"
                            required
                        />

                        {error && <div className="error">{error}</div>}

                        <div className="form-actions">
                            <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>
                                Cancel
                            </button>
                            <button type="submit" className="btn btn-primary">
                                Place Order
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Buy;