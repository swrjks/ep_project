
import React, { useState } from 'react';
import { GaneshaIcon, MenuIcon, CloseIcon } from './icons';

interface HeaderProps {
  onHomeClick: () => void;
  onProductsClick: () => void;
  onServicesClick: () => void;
  onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onHomeClick, onProductsClick, onServicesClick, onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = (
    <>
      <li className="py-2 md:py-0"><button onClick={onHomeClick} className="hover:text-blue-500 transition-colors duration-300">Home</button></li>
      <li className="py-2 md:py-0"><button onClick={onProductsClick} className="hover:text-blue-500 transition-colors duration-300">Products</button></li>
      <li className="py-2 md:py-0"><button onClick={onServicesClick} className="hover:text-blue-500 transition-colors duration-300">Services</button></li>
      <li className="py-2 md:py-0"><button onClick={onContactClick} className="hover:text-blue-500 transition-colors duration-300">Contact Us</button></li>
    </>
  );

  return (
    <header className="bg-white/80 backdrop-blur-lg shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={onHomeClick}>
          <GaneshaIcon className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-800 tracking-tight">Sri Sai Ganesh Marketing</span>
        </div>

        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8 font-medium">
            {navLinks}
          </ul>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <ul className="flex flex-col items-center py-4 space-y-2 font-medium" onClick={() => setIsMenuOpen(false)}>
            {navLinks}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
