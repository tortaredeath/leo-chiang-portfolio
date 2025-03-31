
import { Heart, Github, Linkedin, Mail, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L50,100 L100,0 Z" fill="currentColor" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="text-center">
          <div className="inline-block animate-bounce mb-4">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto">
              <span className="text-blue-900 font-bold text-lg">L</span>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-blue-200">Leo Chiang</h2>
          <p className="mb-6 text-blue-100">Strategy Manager | Product Management | Agile Expert</p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://www.linkedin.com/in/leo-chiang/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white transition-colors transform hover:scale-110 duration-200"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="text-blue-300 hover:text-white transition-colors transform hover:scale-110 duration-200"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
            <a 
              href="#" 
              className="text-blue-300 hover:text-white transition-colors transform hover:scale-110 duration-200"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">Github</span>
            </a>
            <a 
              href="#" 
              className="text-blue-300 hover:text-white transition-colors transform hover:scale-110 duration-200"
            >
              <Coffee className="h-6 w-6" />
              <span className="sr-only">Buy me a coffee</span>
            </a>
          </div>
          
          <div className="border-t border-blue-800 pt-6 flex flex-col sm:flex-row justify-center items-center text-sm text-blue-300">
            <p className="flex items-center">
              &copy; {currentYear} Leo Chiang. Made with <Heart className="h-4 w-4 mx-1 text-red-400 animate-pulse" /> in Taiwan
            </p>
          </div>
        </div>
      </div>
      
      {/* Wave effect at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-40 wave-animation"></div>
    </footer>
  );
};

export default Footer;
