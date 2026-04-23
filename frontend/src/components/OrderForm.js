import { useState } from 'react';

const OrderForm = () => {
    const [itemName, setItemName] = useState('');
    const [colour, setColour] = useState('');
    const [shape, setShape] = useState('');
    const [error, setError] = useState(null);

    const handleOrder = async (e) => {
        e.preventDefault() // prevents reload the page

        const order = {itemName, colour, shape};

        // since fetch always defaults to GET 
        // we have to specify that the method is POST
        const response = await fetch('/order', {
            method: 'POST',
            body: JSON.stringify(order),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // if the above request was a success, the return item is a json
        const json = await response.json();

        if (!response.ok) {
            // set the error property to the json error property
            setError(json.error)
            return;
        }

        if (response.ok) {
            setItemName('');
            setColour('');
            setShape('');
            setError(null);
            console.log('new order added');
        }
    }
    // returns some template 
    return (
        <form  className="create" onSubmit={handleOrder}>
            <label>Cake Name</label>
            <input 
                type="text"
                onChange={(eventObject) => setItemName(eventObject.target.value)}
                value={itemName}
                placeholder="e.g., Birthday Celebration Cake"
            />
            <label>Cake Colour</label>
            <input 
                type="text"
                onChange={(eventObject) => setColour(eventObject.target.value)}
                value={colour}
                placeholder="e.g., Pink, Blue, Yellow"
            />
            <label>Cake Shape</label>
            <input 
                type="text"
                onChange={(eventObject) => setShape(eventObject.target.value)}
                value={shape}
                placeholder="e.g., Round, Square, Heart"
            />
            
            <button>Submit Order</button>
            {error && <div className="error">{error}</div>}
        </form>
    );
}

export default OrderForm;