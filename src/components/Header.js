import React from 'react';

const Header = () => {
  return (
    <header className="bg-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">Printify</a>
        <ul className="flex items-center">
          <li><a href="#" className="text-gray-600 hover:text-gray-900">Features</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;