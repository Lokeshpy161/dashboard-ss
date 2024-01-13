import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import person from '../assets/person.jpg';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="flex justify-between items-center p-4 bg-blue-900 shadow-custom">
      <div className="text-2xl font-bold text-white pl-4">JORISIDE ENERGY</div>
      <div className="flex items-center space-x-3 pr-4">
        {(location.pathname.includes('/paysage') || location.pathname.includes('/portrait')) && (
          <>
            <img
              src={person}
              alt="Profile Pic"
              className="w-8 h-8 rounded-full shadow-md"
            />
            <button onClick={handleLogout} className="text-white font-bold hover:underline">Logout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
