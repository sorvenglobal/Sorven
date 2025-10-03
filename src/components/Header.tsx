import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Services',
      path: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'All Services', path: '/services' },
        { name: 'Web Development', path: '/services/web-development' },
        { name: 'App Development', path: '/services/app-development' },
        { name: 'Digital Marketing', path: '/services/digital-marketing' },
        { name: 'AI Integration', path: '/services/ai-integration' },
        { name: 'Video Editing', path: '/services/video-editing' }
      ]
    },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3">
            <Logo size={40} />
            <span className="text-2xl font-bold text-white">SORVEN</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <div
                    className="flex items-center space-x-1 cursor-pointer"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      to={item.path}
                      className={`text-sm font-medium transition-colors duration-200 ${
                        location.pathname.startsWith('/services')
                          ? 'text-cyan-400'
                          : 'text-gray-300 hover:text-cyan-400'
                      }`}
                    >
                      {item.name}
                    </Link>
                    <ChevronDown className="w-4 h-4 text-gray-300" />
                    
                    <div
                      className={`absolute top-full left-0 mt-2 w-56 bg-slate-800 rounded-lg shadow-xl py-2 transition-all duration-200 ${
                        servicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                      }`}
                    >
                      {item.dropdownItems?.map((dropItem) => (
                        <Link
                          key={dropItem.name}
                          to={dropItem.path}
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors duration-200"
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-sm font-medium transition-colors duration-200 ${
                      location.pathname === item.path
                        ? 'text-cyan-400'
                        : 'text-gray-300 hover:text-cyan-400'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>
          </nav>

          <button
            className="md:hidden text-white hover:text-cyan-400 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-slate-800 rounded-lg mt-4 py-4">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.path}
                  className={`block px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-cyan-400'
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  {item.name}
                </Link>
                {item.hasDropdown && (
                  <div className="pl-6">
                    {item.dropdownItems?.slice(1).map((dropItem) => (
                      <Link
                        key={dropItem.name}
                        to={dropItem.path}
                        className="block px-4 py-2 text-xs text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                      >
                        {dropItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-4 mt-4">
              <Link
                to="/contact"
                className="block w-full text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;