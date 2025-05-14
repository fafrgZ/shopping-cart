import { Product } from '../types/Product'
import  Iphone  from '../assets/Apple-iPhone-15-Pro.jpg'
import Tv from '../assets/tv.png'
import Pc from '../assets/pc-gamer.png'

export const Products: Product[] = [
    {
        id: 1,
        name: 'Iphone 15 Pro Max',
        price: 1000,
        image: Iphone,
        quantity: 10,
    },
    {
        id: 2,
        name: 'Smart tv',
        price: 800,
        image: Tv,
        quantity: 20,
    },
    {
        id: 3,
        name: 'Pc Gamer',
        price: 2000,
        image: Pc,
        quantity: 5,
    }
]