import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { ShoppingCart, LogOut, Package } from 'lucide-react';

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!token) return null;
<Link to="/tailwind" className="text-gray-400 hover:text-white transition-colors">
  Tailwind Test
</Link>
  return (
    <nav className="sticky top-0 z-50 bg-[#1a1a1a]/80 backdrop-blur-md border-b border-[#333] p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Package className="text-indigo-500" />
          <span className="font-bold text-xl">SubhanHub</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/cart" className="relative p-2 hover:bg-white/5 rounded-full transition-all">
            <ShoppingCart size={24} />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                {cartItems.length}
              </span>
            )}
          </Link>
          <button onClick={() => { dispatch(logout()); navigate('/login'); }} className="text-gray-400 hover:text-red-500 transition-colors">
            <LogOut size={22} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;