import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Monitor, ChevronDown } from 'lucide-react';

const partners = [
  { name: 'BOE Technology Group', path: '/partner/boe' },
  { name: 'ARTOME', path: '/partner/artome' },
  { name: 'Kramer', path: '/partner/kramer' },
  { name: 'VView', path: '/partner/vview' },
  { name: 'HTC VIVE', path: '/partner/htc-vive' },
  { name: 'propGOTO', path: '/partner/propgoto' },
  { name: 'ClassVR', path: '/partner/classvr' }
];

export default function Navbar() {
  const [partnersOpen, setPartnersOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Monitor className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Bright Business Solutions</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              Home
            </Link>

            {/* Partners Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setPartnersOpen(true)}
              onMouseLeave={() => setPartnersOpen(false)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 px-3 py-2">
                <span>Partners</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {partnersOpen && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-md py-2 z-50">
                  {partners.map((partner) => (
                    <Link
                      key={partner.path}
                      to={partner.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {partner.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}