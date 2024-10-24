import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [addCart, setAddCart] = useState([]);

    const handleAddToCart = (product) => {
        const index = addCart.findIndex((item) => item.id === product.id);
        if (index !== -1) {
            const updatedProduct = { ...product, quantity: addCart[index].quantity + 1 };
            setAddCart([...addCart.slice(0, index), updatedProduct, ...addCart.slice(index + 1)]);
        } else {
            setAddCart([...addCart, { ...product, quantity: 1 }]);
        }
    };

    const handleIncrement = (product) => {
        const index = addCart.findIndex((item) => item.id === product.id);
        if (index !== -1) {
            const updatedProduct = { ...product, quantity: product.quantity + 1 };
            setAddCart([...addCart.slice(0, index), updatedProduct, ...addCart.slice(index + 1)]);
        }
    };

    const handleDecrement = (product) => {
        const index = addCart.findIndex((item) => item.id === product.id);
        if (index !== -1) {
            if (product.quantity > 1) {
                const updatedProduct = { ...product, quantity: product.quantity - 1 };
                setAddCart([...addCart.slice(0, index), updatedProduct, ...addCart.slice(index + 1)]);
            } else {
                setAddCart(addCart.filter((item) => item.id !== product.id));
            }
        }
    };

    const calculateTotal = () => {
        let total = 0;
        addCart.forEach((product) => {
            total += product.price * product.quantity;
        });
        return total;
    };

    return (
        <CartContext.Provider value={{ addCart, handleAddToCart, handleIncrement, handleDecrement, calculateTotal }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};