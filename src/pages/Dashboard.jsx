import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/products/productSlice';
import ProductCard from '../components/ProductCard';
import { Search, Filter, DollarSign } from 'lucide-react';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const filteredProducts = items.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'All' || product.category?.name === category;
    const matchesMinPrice = priceRange.min === '' || product.price >= parseFloat(priceRange.min);
    const matchesMaxPrice = priceRange.max === '' || product.price <= parseFloat(priceRange.max);

    return matchesSearch && matchesCategory && matchesMinPrice && matchesMaxPrice;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 text-center md:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Subhan’s <span className="text-indigo-500">Inventory</span>
          </h1>
          <p className="text-gray-400 mt-2">Lahore Premium Inventory Management</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-[#1a1a1a] p-6 rounded-3xl border border-[#333] mb-12 items-end shadow-xl">
          <div className="flex flex-col gap-2">
            <label className="text-xs text-gray-400 font-bold uppercase tracking-wider ml-1">Search Product</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input 
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-3 bg-black border border-[#444] rounded-xl focus:border-indigo-500 outline-none transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs text-gray-400 font-bold uppercase tracking-wider ml-1">Category</label>
            <select 
              className="w-full px-4 py-3 bg-black border border-[#444] rounded-xl focus:border-indigo-500 outline-none appearance-none"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Electronics">Electronics</option>
              <option value="Furniture">Furniture</option>
              <option value="Clothes">Clothes</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-xs text-gray-400 font-bold uppercase tracking-wider ml-1">Price Range ($)</label>
            <div className="flex items-center gap-3">
              <input 
                type="number" 
                placeholder="Min" 
                className="w-full px-4 py-3 bg-black border border-[#444] rounded-xl focus:border-indigo-500 outline-none"
                value={priceRange.min}
                onChange={(e) => setPriceRange({...priceRange, min: e.target.value})}
              />
              <span className="text-gray-600">to</span>
              <input 
                type="number" 
                placeholder="Max" 
                className="w-full px-4 py-3 bg-black border border-[#444] rounded-xl focus:border-indigo-500 outline-none"
                value={priceRange.max}
                onChange={(e) => setPriceRange({...priceRange, max: e.target.value})}
              />
            </div>
          </div>
        </div>
        {status === 'loading' ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-indigo-500"></div>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-400 text-sm">Showing {filteredProducts.length} items found in Lahore hub</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;