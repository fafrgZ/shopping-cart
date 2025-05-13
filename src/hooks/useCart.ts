import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { CartItem } from '../types/Cart';

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart debe usarse dentro de un CartProvider');
  }

  const { state, dispatch } = context;

  const addToCart = (product: CartItem) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const increaseQuantity = (id: number) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: id });
  };

  const decreaseQuantity = (id: number) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: id });
  };

  const removeFromCart = (id: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return {
    state,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  };
};