import OrderForm from '../components/OrderForm';

const Order = () => {
    return (
        <div className="order-page">
            <section className="products-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Custom Cake Order</h2>
                        <p className="text-center">Design your perfect cake and we'll bake it fresh for you</p>
                    </div>
                    <OrderForm/>
                </div>
            </section>
        </div>
    )
}

export default Order;
