import { Product } from './Product.ts';

export type CartItem = Product & {quantity: number};

export type CartState = {
    cartItems: CartItem[];
};

export type Action = 
    | { type: 'ADD_TO_CART'; payload: Product }
    | { type: 'REMOVE_FROM_CART'; payload: number}
    | { type: 'CLEAR_CART'}
    | { type: "INCREASE_QUANTITY"; payload: string | number }
    | { type: "DECREASE_QUANTITY"; payload: string | number };