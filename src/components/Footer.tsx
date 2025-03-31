
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Leo Chiang</h2>
          <p className="mb-6">Strategy Manager | Product Management | Agile Expert</p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://www.linkedin.com/in/leo-chiang/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
          
          <div className="border-t border-blue-800 pt-6">
            <p className="text-sm text-blue-300">
              &copy; {currentYear} Leo Chiang. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
