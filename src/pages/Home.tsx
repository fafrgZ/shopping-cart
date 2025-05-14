import React from 'react';
import ProductCard from '../components/ProductCard';
import { Products } from '../data/Products';
import Hero from '../components/Hero'

const Home: React.FC = () => {
  return (
    <div className="max-w-[1340px] mx-auto px-4 pb-4 mt-20">
      <Hero />
      <h1 className="text-4xl font-bold mb-8 text-center pt-4 text-[#10233d]">Productos Destacados</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {Products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;