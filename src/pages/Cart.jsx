import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, decrementQuantity, removeFromCart } from '../features/cart/cartSlice';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center text-white">
        <ShoppingBag size={80} className="text-gray-700 mb-4" />
        <h2 className="text-2xl font-bold">Your cart is empty</h2>
        <Link to="/" className="mt-4 text-indigo-500 hover:underline flex items-center gap-2">
          <ArrowLeft size={18} /> Back to Inventory
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-10">Shopping <span className="text-indigo-500">Cart</span></h1>
        
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-[#1a1a1a] border border-[#333] p-6 rounded-[24px] flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img src={item.images?.[0]} alt={item.title} className="w-20 h-20 object-cover rounded-xl border border-[#333]" />
                <div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-indigo-400 font-bold">${item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center bg-black border border-[#333] rounded-xl overflow-hidden">
                 
                  <button 
                    onClick={() => dispatch(decrementQuantity(item.id))}
                    className="p-3 hover:bg-red-500/10 text-gray-400 hover:text-red-500 transition-all"
                  >
                    <Minus size={18} />
                  </button>
                  
                  <span className="w-10 text-center font-bold text-lg">{item.quantity}</span>
                  
                  
                  <button 
                    onClick={() => dispatch(addToCart(item))}
                    className="p-3 hover:bg-indigo-500/10 text-gray-400 hover:text-indigo-500 transition-all"
                  >
                    <Plus size={18} />
                  </button>
                </div>

                <button 
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="p-3 bg-gray-900 rounded-xl text-gray-500 hover:text-red-500 transition-all"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-8 bg-[#1a1a1a] border border-indigo-500/30 rounded-[32px] flex justify-between items-center">
          <div>
            <p className="text-gray-400">Total Balance</p>
            <h2 className="text-3xl font-bold text-white">${totalPrice.toFixed(2)}</h2>
          </div>
          <button className="px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-lg shadow-indigo-500/20 transition-all active:scale-95">
            Checkout Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;