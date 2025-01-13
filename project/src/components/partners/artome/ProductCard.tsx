import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ProductCardProps {
  product: {
    name: string;
    category: string;
    image: string;
    description: string;
    features: string[];
  };
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-on-mount">
      <div className="relative h-48">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-purple-600 text-white text-sm font-medium rounded-full">
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <ul className="space-y-2">
          {product.features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
              <span className="text-sm text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductCard;