import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Facebook, Twitter, Phone, Mail } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'App Development', path: '/services/app-development' },
    { name: 'Digital Marketing', path: '/services/digital-marketing' },
    { name: 'AI Integration', path: '/services/ai-integration' },
    { name: 'Video Editing', path: '/services/video-editing' }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/sorven-global/?viewAsMember=true',
      icon: Linkedin
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/sorvenglobal/',
      icon: Instagram
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61581476070865',
      icon: Facebook
    },
    {
      name: 'Twitter',
      href: 'https://x.com/SorvenGlobal',
      icon: Twitter
    }
  ];

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Logo size={40} />
              <span className="text-2xl font-bold text-white">SORVEN</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering Businesses with Next-Gen Solutions. We make technology work for you.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/918438300993"
                className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone size={16} />
                <span>+91-8438300993</span>
              </a>
              <a
                href="mailto:business@sorvenglobal.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
              >
                <Mail size={16} />
                <span>business@sorvenglobal.com</span>
              </a>
            </div>
            
            <div className="mt-6">
              <h4 className="text-white font-medium mb-3">Newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-slate-800 text-white text-sm rounded-l-md border border-slate-700 focus:outline-none focus:border-cyan-500"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-r-md text-sm hover:from-blue-700 hover:to-cyan-700 transition-all duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Sorven Global. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-conditions"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;