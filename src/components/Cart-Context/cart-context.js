import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const localData = localStorage.getItem('cartItems');
        return localData ? JSON.parse(localData) : [];
    });
    const [condition, setCondition] = useState(false);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (item) => {
        setCartItems(
            cartItems.some(cartItem => cartItem.id === item.id)
                ? cartItems.map(cartItem => {
                    if (cartItem.id === item.id) {
                        return { ...cartItem, quantity: cartItem.quantity + 1 };
                    }
                    return cartItem;
                })
                : [...cartItems, { ...item, quantity: 1 }]
        );
        setCondition(true);
    };

    const removeFromCart = (item) => {
        setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));
        // Reset condition when item is removed
        if (cartItems.length === 1) {
            setCondition(false);
        }
    };

    const incrementCartItem = (itemId) => {
        setCartItems(cartItems.map(cartItem => {
            if (cartItem.id === itemId) {
                return { ...cartItem, quantity: cartItem.quantity + 1 };
            }
            return cartItem;
        }));
        setCondition(true); // Maintain condition when incrementing
    };

    const decrementCartItem = (itemId) => {
        setCartItems(cartItems.map(cartItem => {
            if (cartItem.id === itemId && cartItem.quantity > 1) {
                return { ...cartItem, quantity: cartItem.quantity - 1 };
            }
            return cartItem;
        }));
        setCondition(true); // Maintain condition when decrementing
    };

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const cartItem = cartItems.find(item => item.id === cartItems.id);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, decrementCartItem, incrementCartItem, removeFromCart, totalItems, cartTotal, condition, setCondition, cartItem }}>
            {children}
        </CartContext.Provider>
    );
};
