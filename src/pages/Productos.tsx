import { Products } from "../data/Products";
import ProductCard from "../components/ProductCard";

function Productos () {

    return(
        <div className="max-w-[1240px] mx-auto p-4 mt-20">
            <h1 className="text-3xl font-bold mb-6 text-center">Productos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {Products.map(product => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </div>
    );
}

export default Productos;