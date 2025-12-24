import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../features/auth/authSlice';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
    navigate('/login');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0a0a0a] px-4">
      <div className="w-full max-w-md bg-[#1a1a1a] p-10 rounded-[32px] border border-[#333] shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Create Account</h2>
        
        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="Full Name" 
            className="w-full p-4 rounded-2xl bg-black border border-[#444] text-white focus:border-indigo-500 outline-none"
            onChange={(e) => setFormData({...formData, name: e.target.value})} 
            required 
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full p-4 rounded-2xl bg-black border border-[#444] text-white focus:border-indigo-500 outline-none"
            onChange={(e) => setFormData({...formData, email: e.target.value})} 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full p-4 rounded-2xl bg-black border border-[#444] text-white focus:border-indigo-500 outline-none"
            onChange={(e) => setFormData({...formData, password: e.target.value})} 
            required 
          />
          <button type="submit" className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all">
            Register
          </button>
        </form>

        <p className="mt-8 text-center text-gray-400 text-sm">
          Already have an account? <Link to="/login" className="text-indigo-400 font-semibold ml-1">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;