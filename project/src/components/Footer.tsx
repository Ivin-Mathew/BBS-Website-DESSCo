import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2">
              <Monitor className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">Bright Business Solutions</span>
            </div>
            <p className="mt-4 text-gray-400">
              Empowering businesses with cutting-edge technology solutions for a brighter future.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/" className="text-base text-gray-300 hover:text-white">
                  Property Management
                </Link>
              </li>
              <li>
                <Link to="/" className="text-base text-gray-300 hover:text-white">
                  VR and AR Solutions
                </Link>
              </li>
              <li>
                <Link to="/" className="text-base text-gray-300 hover:text-white">
                  Smart LCD & LED
                </Link>
              </li>
              <li>
                <Link to="/" className="text-base text-gray-300 hover:text-white">
                  Video Conference
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/contact" className="text-base text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/helpdesk" className="text-base text-gray-300 hover:text-white">
                  Help Desk
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} Bright Business Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}