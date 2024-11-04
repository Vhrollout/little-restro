// actions/cartActions.js
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INCREMENT_ITEM = "INCREMENT_ITEM";
export const DECREMENT_ITEM = "DECREMENT_ITEM";

export function addToCart(item) {
    return {
        type: ADD_TO_CART,
        payload: item
    };
}

export function removeFromCart(item) {
    return {
        type: REMOVE_FROM_CART,
        payload: item
    };
}

export function incrementItem(item) {
    return {
        type: INCREMENT_ITEM,
        payload: item
    };
}

export function decrementItem(item) {
    return {
        type: DECREMENT_ITEM,
        payload: item
    };
}
