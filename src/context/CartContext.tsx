import { createContext } from "react";
import { CartState, Action } from "../types/Cart"


export const CartContext = createContext<{
    state: CartState;
    dispatch: React.Dispatch<Action>;
} | undefined>(undefined);