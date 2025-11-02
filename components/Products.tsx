
import React from 'react';

const products = [
  {
    name: 'Aquaguard Aura',
    description: 'Features Active Copper and UV e-boiling technology, ensuring your water is as pure as boiled water.',
    imageUrl: '/images/aquaguard_aura.jpg',
  },
  {
    name: 'Smart RO Purifier',
    description: 'A smart purifier with RO+UV+UF+TDS control to remove dissolved impurities while retaining essential minerals.',
    imageUrl: '/images/smart_ro.jpg',
  },
  {
    name: 'Alkaline Water Purifier',
    description: 'Enhances the pH level of water, providing alkaline water for better hydration and health benefits.',
    imageUrl: '/images/alkaline_purifier.jpg',
  },
  {
    name: 'Compact Wall-Mount Purifier',
    description: 'Sleek and modern design that saves kitchen space while delivering powerful multi-stage purification.',
    imageUrl: '/images/wall_mount.webp',
  },
  {
    name: 'Under-the-Sink RO System',
    description: 'A discreet, high-capacity system that provides purified water directly from your tap without cluttering the countertop.',
    imageUrl: '/images/under_sink.jpg',
  },
  {
    name: 'Portable Water Purifier Bottle',
    description: 'Ideal for travel and outdoor activities, this bottle purifies water on the go, removing contaminants instantly.',
    imageUrl: '/images/portable.jpg',
  },
  {
    name: 'UV Guardian Purifier',
    description: 'Uses powerful UV-C light to disinfect water, eliminating bacteria and viruses without chemicals.',
    imageUrl: '/images/uv_guard.webp',
  },
  {
    name: 'EcoPure Gravity Filter',
    description: 'A non-electric purifier that uses gravity and advanced filters to provide safe drinking water anywhere.',
    imageUrl: '/images/filter.jpg',
  },
];

interface ProductCardProps {
  name: string;
  description: string;
  imageUrl: string;
  onQuoteClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, imageUrl, onQuoteClick }) => {
  return (
    <div className="flex-shrink-0 w-80 bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out flex flex-col">
      <img src={imageUrl} alt={name} className="w-full h-56 object-cover"/>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{name}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
       <div className="p-6 pt-0">
        <button 
          onClick={onQuoteClick}
          className="w-full bg-transparent hover:bg-blue-600 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full transition-colors duration-300"
        >
          Get a Quote
        </button>
      </div>
    </div>
  );
};

interface ProductsProps {
  onQuoteClick: () => void;
}

const Products: React.FC<ProductsProps> = ({ onQuoteClick }) => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Premier Products</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">We offer a wide range of water purifiers to suit every need and budget.</p>
        </div>
      </div>
      <div className="pl-6 container mx-auto">
        <div className="flex space-x-8 overflow-x-auto pb-8 custom-scrollbar">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} onQuoteClick={onQuoteClick} />
          ))}
           {/* Add a spacer to the right */}
          <div className="flex-shrink-0 w-1"></div>
        </div>
      </div>
    </section>
  );
};

export default Products;