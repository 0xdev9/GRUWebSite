import React from 'react';
import { Eye } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Eye className="w-6 h-6 text-brown-400" />
            <span className="font-bold">GRU - Guardia Recon Unit</span>
          </div>
          <div className="text-sm">
            © {new Date().getFullYear()} GRU. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
}