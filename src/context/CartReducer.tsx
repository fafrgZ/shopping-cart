import { CartState, Action } from "../types/Cart";

const CartReducer = (state: CartState, action: Action): CartState => {
    switch (action.type) {
        case "ADD_TO_CART": {
            const existing = state.cartItems.find(item => item.id === action.payload.id);
            if (existing) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + action.payload.quantity }
                            : item
                    ),
                };
            }
            return {
                ...state,
                cartItems: [...state.cartItems, { ...action.payload}],
            };
        }

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload),
            };

        case 'CLEAR_CART':
            return { cartItems: [] };

        case 'INCREASE_QUANTITY':
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.id === action.payload
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
            };

        case 'DECREASE_QUANTITY':
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.id === action.payload && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                ),
            };

        default:
            return state;
    }
};

export default CartReducer;