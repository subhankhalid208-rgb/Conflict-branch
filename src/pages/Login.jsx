import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, clearError } from '../features/auth/authSlice';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, error } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  useEffect(() => {
    if (token) navigate('/');
  }, [token, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(credentials));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0a0a0a] px-4">
      <div className="w-full max-w-md bg-[#1a1a1a] p-10 rounded-[32px] border border-[#333] shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-white tracking-tight">
          Login to <span className="text-indigo-500">SubhanHub</span>
        </h2>
        
        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full p-4 rounded-2xl bg-black border border-[#444] text-white focus:border-indigo-500 outline-none transition-all"
            onChange={(e) => setCredentials({...credentials, email: e.target.value})} 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full p-4 rounded-2xl bg-black border border-[#444] text-white focus:border-indigo-500 outline-none transition-all"
            onChange={(e) => setCredentials({...credentials, password: e.target.value})} 
            required 
          />
          <button 
            type="submit" 
            className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-lg transition-all active:scale-95 shadow-lg shadow-indigo-500/20"
          >
            Sign In
          </button>
        </form>

        {error && <p className="text-red-500 mt-4 text-center text-sm bg-red-500/10 py-2 rounded-lg">{error}</p>}
        
        <p className="mt-8 text-center text-gray-400 text-sm">
          Don't have an account? 
          <Link to="/register" className="text-indigo-400 hover:text-indigo-300 font-semibold ml-1">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;