
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { text: '關於我', id: 'about' },
    { text: '工作經驗', id: 'experience' },
    { text: '教育背景', id: 'education' },
    { text: '專業技能', id: 'skills' },
    { text: '認證', id: 'certifications' },
    { text: '聯絡我', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <h1 className={`text-xl font-bold transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'}`}>
              Leo Chiang
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => scrollTo(link.id)}
                    className={`font-medium transition-colors duration-300 hover:text-primary ${isScrolled ? 'text-gray-700' : 'text-white'}`}
                  >
                    {link.text}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className={`p-2 rounded-md transition-colors duration-300 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
              aria-label="Menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-end p-4">
          <button 
            onClick={toggleMenu}
            className="p-2 text-gray-700 rounded-md"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="px-8 py-4">
          <ul className="space-y-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button 
                  onClick={() => scrollTo(link.id)}
                  className="text-xl font-medium text-gray-700 hover:text-primary"
                >
                  {link.text}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
