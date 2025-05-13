import { useState } from 'react';
import { Product } from '../types/Product';
import { useCart } from '../hooks/useCart';
import { CartItem } from '../types/Cart';

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    const { addToCart } = useCart();
    
    const [isSelecting, setIsSelecting] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const handleStartSelection = () => {
        setIsSelecting(true);
    };

    const handleConfirm = () => {
        const cartItem: CartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity,
        };

        addToCart(cartItem);
        setIsSelecting(false);
        setQuantity(1); // reinicia si querés
    };

    const handleIncreaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <div className='border-0 rounded p-4 shadow-xl hover:shadow-2xl transition '>
            <img src={product.image} className='w-full h-60 object-cover mb-2 rounded' alt={product.name} />
            <h2 className='text-large font-bold'>{product.name}</h2>
            <p className='text-sm text-gray-600'>${product.price}</p>

            {!isSelecting && (
                <button onClick={handleStartSelection} className='bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600'>
                    Agregar al carrito
                </button>
            )}

            {isSelecting && (
                <div className="flex flex-col items-center gap-2 mt-4">
                    <div className="flex items-center gap-4">
                        <button onClick={handleDecreaseQuantity} className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400">-</button>
                        <span className="text-xl">{quantity}</span>
                        <button onClick={handleIncreaseQuantity} className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400">+</button>
                    </div>
                    <button onClick={handleConfirm} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                        Confirmar
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProductCard;