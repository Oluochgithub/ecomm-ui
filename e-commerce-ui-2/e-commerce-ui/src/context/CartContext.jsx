import React, { createContext, useState} from 'react';

const CartContext = createContext();

export const CartProvider = ({ Children}) => {
    const [cartItems,setCartItems] = useState([]);
    const addToCart = (product) => {
        setCartItems ((prev)=> {
            const exisiting = prev.find((item)=> item.id === product.id);
            if (exisiting) {
                return prev.map((item)=>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item 
                );
            }
            return [...prev, { ...product, quantity: 1}];
        });

    };
    const removeFromCart = (id) => {
        setCartItems((prev)=> prev.filter((item)=> item.id !== id));   
    };
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {Children}
        </CartContext.Provider>
    );
};