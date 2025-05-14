import { useCart } from "../hooks/useCart";

const Cart = () => {
    const { state, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
    const { cartItems } = state;

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="p-6 max-w-[1240px] mx-auto min-h-screen">
            <h1 className="text-2xl font-bold mb-4 mt-20 ">Carrito de Compras</h1>

            { cartItems.length === 0 ? (
                <p className="text-xl font-bold mt-20">Tu carrito esta vacio.</p>
            ) : (
                <>
                    <ul className="">
                        {cartItems.map((item) => (
                            <li key={item.id} className="flex items-center py-4 bg-white shadow-2xl m-2 border-0 rounded">
                                <img src={item.image} alt={item.name} className="w-40 h-40 object-contain mx-4"/>
                                <div className="flex flex-col justify-between h-41">
                                    <h2 className="font-bold flex-start">{item.name}</h2>
                                    <div className="mt-2 flex items-center gap-4">
                                        <div className="flex items-center space-x-2 border-2 rounded-full ">
                                            <button onClick={() => decreaseQuantity(item.id)} className="px-3">-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => increaseQuantity(item.id)} className="px-3">+</button>
                                        </div>
                                        <div>
                                            <button onClick={() => removeFromCart(item.id)} className="ml-4 text-red-500">Eliminar</button>
                                        </div>
                                    </div>                          
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-6 text-rigth">
                        <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
                        <button className="mt-4 px-6 py-2 bg-[#10233d] text-white rounded">Finalizar compra</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;