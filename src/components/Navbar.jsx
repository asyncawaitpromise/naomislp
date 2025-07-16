import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'react-feather';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Naomi', href: '/about' },
    { name: 'Cleft Palate Therapy', href: '/therapy' },
    { name: 'Contact', href: '/contact' }
  ];

  const desktopNavigation = [
    { name: 'Home', href: '/' },
    { name: 'About Naomi', href: '/about' },
    { name: 'Cleft Palate Therapy', href: '/therapy' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center py-4 lg:py-5">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div className="flex-shrink-0">
              <h1 className="text-xl lg:text-2xl font-bold text-gray-800 group-hover:text-teal-700 transition-colors duration-300">
                Naomi's Speech Therapy
              </h1>
              <p className="text-xs lg:text-sm text-gray-600 hidden sm:block">Specialized Cleft Palate Care</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {desktopNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-300 relative overflow-hidden group ${
                  isActive(item.href)
                    ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-md'
                    : 'text-gray-700 hover:text-teal-700 hover:bg-teal-50'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {!isActive(item.href) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-10"></div>
                )}
              </Link>
            ))}
            <div className="mx-4 h-8 w-px bg-gray-300"></div>
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-gradient-to-r from-teal-600 to-blue-700 text-white rounded-lg font-semibold hover:from-teal-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Schedule Consultation
            </Link>
          </div>

          {/* Tablet Navigation */}
          <div className="hidden md:flex lg:hidden items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 relative overflow-hidden group text-sm ${
                  isActive(item.href)
                    ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-md'
                    : 'text-gray-700 hover:text-teal-700 hover:bg-teal-50'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {!isActive(item.href) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-10"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-teal-700 hover:bg-teal-50 transition-all duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-2 border-t border-gray-200">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-md'
                    : 'text-gray-700 hover:text-teal-700 hover:bg-teal-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block mx-4 mt-4 px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-700 text-white rounded-lg font-semibold text-center hover:from-teal-700 hover:to-blue-800 transition-all duration-300 shadow-md"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;