import React from 'react';

interface NavbarProps {
  onOpenModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  return (
    <nav className="bg-indigo-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">✈️</span>
          <span className="text-xl font-bold tracking-wide">MM-Fly Management</span>
        </div>
        <button
          onClick={onOpenModal}
          className="bg-indigo-700 hover:bg-indigo-800 text-white font-medium px-4 py-2 rounded-lg transition duration-200 shadow"
        >
          + Registrar Vuelo
        </button>
      </div>
    </nav>
  );
};