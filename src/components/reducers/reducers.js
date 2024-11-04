import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_ITEM, DECREMENT_ITEM } from "../Actions/cart-actions";

const initialState = {
    cartItems: []
};

export function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            const itemExists = state.cartItems.some(i => i.id === action.payload.id);
            if (itemExists) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(i =>
                        i.id === action.payload.id ? { ...i, quantity: i.quantity + 1 } : i
                    )
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }]
                };
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(i => i.id !== action.payload.id)
            };
        case INCREMENT_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.map(i =>
                    i.id === action.payload.id ? { ...i, quantity: i.quantity + 1 } : i
                )
            };
        case DECREMENT_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.map(i =>
                    i.id === action.payload.id && i.quantity > 1 ? { ...i, quantity: i.quantity - 1 } : i
                ).filter(i => i.quantity > 0)// Ensure no items with quantity 0 are left
            };
        default:
            return state;
    }
}
