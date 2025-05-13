import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from '../assets/logo2.png';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const { state } = useCart();
    const itemCount = state.cartItems.reduce((sum, item) => sum + item.quantity, 0);

    const handleNav = () => setNav(!nav);

    return (
        <nav className='bg-white shadow-md w-full fixed top-0 left-0 z-50'>
            <div className='flex justify-between items-center h-20 mx-auto px-4'>
                
                {/* Logo */}
                <Link to='/'>
                    <img src={Logo} alt="MiTienda" className='w-20' />
                </Link>

                {/* Menú Desktop */}
                <ul className='hidden md:flex items-center gap-6 text-black'>
                    <li><Link to='/productos' className='hover:text-[#3b3b91]'>Productos</Link></li>
                    <li><Link to='/contacto' className='hover:text-[#3b3b91]'>Contacto</Link></li>
                    <li>
                        <Link to='/cart' className='relative'>
                            <FaShoppingCart className='w-6 h-6' />
                            {itemCount > 0 && (
                                <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
                                    {itemCount}
                                </span>
                            )}
                        </Link>
                    </li>
                </ul>

                {/* Botón Toggle Mobile */}
                <div className='md:hidden' onClick={handleNav}>
                    {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                </div>
            </div>

            {/* Menú Mobile */}
            <div className={`fixed top-0 left-0 w-[60%] h-full bg-white shadow-md border-r border-gray-200 transition-transform duration-500 ease-in-out ${nav ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='p-6'>
                    <img src={Logo} alt="MiTienda" className='w-24 mb-8' />
                    <ul className='space-y-6 text-black'>
                        <li><Link to='/productos' onClick={handleNav} className='block hover:text-[#3b3b91]'>Productos</Link></li>
                        <li><Link to='/contacto' onClick={handleNav} className='block hover:text-[#3b3b91]'>Contacto</Link></li>
                        <li>
                            <Link to='/cart' onClick={handleNav} className='block relative hover:text-[#3b3b91]'>
                                <div className='flex items-center'>
                                    <FaShoppingCart className='w-5 h-5 mr-2' />
                                    <span>Carrito</span>
                                    {itemCount > 0 && (
                                        <span className='ml-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
                                            {itemCount}
                                        </span>
                                    )}
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;