import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
import { useContext } from 'react';



const Payment = () => {
    const navigate = useNavigate();

    const { addCart, handleAddToCart, handleIncrement, handleDecrement, calculateTotal } = useContext(CartContext);

    const handleBackToShopping = () => {
        navigate('/');
    };


    return (
        <div className="flex justify-between p-4 pt-24 gap-2">
            {/* Left Box: Payment Options */}
            <div className="w-1/2 p-4 border border-gray-300 rounded-lg">
                <h2 className="text-xl font-bold mb-4">Payment Details</h2>
                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg mb-4">
                    <div className="mb-4">
                        <label className="block mb-2">Credit Card Number</label>
                        <input type="text" className="border border-gray-400 rounded-lg p-2 w-full bg-gray-700 text-white placeholder-gray-400" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="mb-4 flex justify-between">
                        <div className="w-1/2 pr-1">
                            <label className="block mb-2">Expiry Date</label>
                            <input type="text" className="border border-gray-400 rounded-lg p-2 w-full bg-gray-700 text-white placeholder-gray-400" placeholder="MM/YY" />
                        </div>
                        <div className="w-1/2 pl-1">
                            <label className="block mb-2">CVV</label>
                            <input type="text" className="border border-gray-400 rounded-lg p-2 w-full bg-gray-700 text-white placeholder-gray-400" placeholder="123" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="inline-flex items-center">
                            <input type="radio" name="paymentMethod" value="creditCard" className="mr-2" />
                            Credit Card
                        </label>
                        <label className="inline-flex items-center">
                            <input type="radio" name="paymentMethod" value="cashOnDelivery" className="mr-2" />
                            Cash on Delivery
                        </label>
                    </div>
                    <button type="submit" className="bg-green-500 hover:bg-green-600 rounded-lg px-3 py-1 text-white">
                        Pay Now
                    </button>
                </div>
            </div>
            {/* Right Box: Cart View */}
            <div className="w-1/2 p-4 border border-gray-300 rounded-lg">
                <h2 className="text-xl font-bold mb-4">Cart View</h2>
                <ul className="mb-4">
                    {addCart.map((product, index) => (
                        <li key={index} className='flex justify-between pt-1 border-b-2'>
                            <div className="p-1  object-cover">
                                <img src={product.image} height="50" width="50" className="card-img-top object-cover" alt="productImage" style={{ objectFit: "contain" }} />
                            </div>
                            <div className="productDescription w-10/12 py-1 ">
                                <h6 className="productName text-blue-950">
                                    {product.title}
                                </h6>
                                <div className="priceQuantity flex justify-between p-5">
                                    <span>${product.price}</span>
                                    <div className='px-5 '>

                                        <span>  <b>Unit : {product.quantity}</b> </span>


                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className=" text-center">
                    <p className='font-bold'>   Total Amount: ${calculateTotal().toFixed(2)}</p>
                    <button onClick={handleBackToShopping} className="bg-yellow-500 hover:bg-yellow-400 rounded-lg px-4 py-1  mt-4">
                        Back to Shopping
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Payment;