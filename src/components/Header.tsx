
import { useState, useEffect } from 'react';
import { Menu, X, MoonStar, Sun } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <h1 className={`text-xl font-bold transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'}`}>
              <span className="inline-block animate-pulse">✨</span> Leo Chiang
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => scrollTo(link.id)}
                    className={`font-medium transition-all duration-300 hover:text-primary relative group ${isScrolled ? 'text-gray-700' : 'text-white'}`}
                  >
                    {link.text}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
              ))}
            </ul>
            
            <button 
              onClick={toggleDarkMode} 
              className={`ml-4 p-2 rounded-full ${isScrolled ? 'bg-gray-100 text-gray-700' : 'bg-white/10 text-white'} hover:bg-primary/10 transition-colors`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <MoonStar className="h-5 w-5" />}
            </button>
          </nav>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleDarkMode} 
              className={`mr-2 p-2 rounded-full ${isScrolled ? 'bg-gray-100 text-gray-700' : 'bg-white/10 text-white'} transition-colors`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <MoonStar className="h-5 w-5" />}
            </button>
            
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
        className={`fixed inset-0 bg-white z-50 transform transition-all duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
      >
        <div className="flex justify-end p-4">
          <button 
            onClick={toggleMenu}
            className="p-2 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
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
                  className="text-xl font-medium text-gray-700 hover:text-primary transition-colors w-full text-left py-2 border-b border-gray-100"
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
