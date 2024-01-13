import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedPage, setSelectedPage] = useState('paysage'); 

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'Lokesh' && password === 'roof') {
      navigate(`/${selectedPage}`);
    } else {
      alert('Incorrect username or password');
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <form onSubmit={handleLogin} className="max-w-md mx-auto p-6 bg-white border rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
          <input
            type="text"
            id="username"
            className="w-full px-3 py-2 border rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="pageSelect" className="block text-gray-700 text-sm font-bold mb-2">Select Page</label>
          <select
            id="pageSelect"
            className="w-full px-3 py-2 border rounded"
            value={selectedPage}
            onChange={(e) => setSelectedPage(e.target.value)}
          >
            <option value="paysage">PAYSAGE</option>
            <option value="portrait">PORTRAIT</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
    