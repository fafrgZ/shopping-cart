import { useReducer, ReactNode } from "react";
import { CartContext }  from "./CartContext";
import   CartReducer  from "./CartReducer";

export const CartProvider = ({children}: {children: ReactNode}) => {
    const [state, dispatch] = useReducer(CartReducer, {cartItems: [] });

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};