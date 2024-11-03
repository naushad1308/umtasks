import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleAddToCart, handleIncrement, handleDecrement, calculateTotal } from '../features/cartSlice';
import { useNavigate } from 'react-router-dom';

const DisplayShoes = () => {
    const products = useSelector((state) => state.cart.products); // Fetching products from the Redux state
    const cartItems = useSelector((state) => state.cart.cartItems); // Fetching cart items from the Redux state
    const total = useSelector((state) => state.cart.total)
    // console.log(cartItems)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleProceedToPayment = () => {
        navigate('/payment');  // Redirect to payment page
    };



    return (
        <div className='pt-2'>
            <div className='px-7 py-5 flex justify-between'>
                {/* Left Container */}
                <div className="shoesCardWrapper flex justify-around mt-16 gap-1 overflow-auto flex-wrap w-7/12 ">
                    {products.map((product) => (
                        <div key={product.id} className="card mt-5 w-80 relative shadow-lg shadow-gray-300 rounded-sm" style={{ height: "480px" }}>
                            <div className='flex justify-center p-8 object-scale-down'>
                                <img src={product.image} className="object-contain h-52" alt="productImage" />
                            </div>
                            <div className="card-body p-1 line absolute bottom-16 w-full">
                                <h5 className="text-gray-700 font-bold text-center text-lg">{product.title}</h5>
                                <p className="text-gray-600 leading-relaxed py-3 text-center">${product.price}</p>
                            </div>
                            <button onClick={() => dispatch(handleAddToCart(product))} className="p-3 bg-gray-500 hover:bg-slate-600 rounded-lg w-full absolute bottom-0 text-white">Add to Cart</button>
                        </div>
                    ))}
                </div>
                <div className="mt-20 addToCart fixed right-0 basis-1/2 flex-1 bg-gray-100 w-5/12 h-96 overflow-y-scroll">
                    <h2 className='text-center font-bold text-lg py-2'>Cart</h2>
                    <ul className='w-50'>
                        {cartItems.map((product) => (
                            <li key={product.id} className='flex justify-between pt-1 border-b-2'>
                                <div className="p-1 object-cover">
                                    <img src={product.image} height="50" width="50" className="card-img-top object-cover" alt="productImage" style={{ objectFit: "contain" }} />
                                </div>
                                <div className="productDescription w-10/12 py-1">
                                    <h6 className="productName text-blue-950">{product.title}</h6>
                                    <div className="priceQuantity flex justify-between p-5">
                                        <span>${product.price}</span>
                                        <div className='px-5'>
                                            <button className='px-2 bg-yellow-500 rounded-lg' onClick={() => { dispatch(handleDecrement(product)) }}>-</button>
                                            <span className='px-2'>{product.quantity}</span>
                                            <button className='px-2 bg-yellow-500 rounded-lg' onClick={() => { dispatch(handleIncrement(product)) }}>+</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="total py-2 text-center">
                        <strong>Total: ${total.toFixed(2)}</strong>
                    </div>
                    <div className='text-center'>
                        <button onClick={handleProceedToPayment} className='bg-yellow-500 hover:bg-yellow-400 rounded-lg py-1 px-3'>Proceed to Payment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayShoes;