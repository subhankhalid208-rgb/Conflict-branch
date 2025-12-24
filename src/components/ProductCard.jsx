import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-[#1a1a1a] border border-[#333] rounded-3xl p-4 overflow-hidden shadow-lg">
      <img 
        src={product.images?.[0]} 
        className="w-full h-48 object-cover rounded-2xl mb-4" 
        alt={product.title} 
      />
      <h3 className="text-white font-bold truncate">{product.title}</h3>
      <p className="text-indigo-400 font-bold mt-1">${product.price}</p>
      
 
      <button 
        onClick={() => dispatch(addToCart(product))}
        className="w-full mt-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all active:scale-95"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;