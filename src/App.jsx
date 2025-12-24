import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import TailwindPage from './pages/Tailwind';
function App() {
  const { token } = useSelector((state) => state.auth);

  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <Navbar />
        <Routes>
         
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route 
            path="/" 
            element={token ? <Dashboard /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/cart" 
            element={token ? <Cart /> : <Navigate to="/login" />} 
          />
        </Routes>
        <TailwindPage/>
      </div>
    </Router>
  );
}

export default App;