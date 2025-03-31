
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 animate-fadeIn">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tighter">
          Leo Chiang
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-8">
          Strategy Manager | Product Management | Agile Expert
        </p>
        <p className="max-w-2xl mx-auto text-blue-200 mb-12">
          超過10年的軟體產品開發支援和管理經驗，專注於敏捷開發流程和策略規劃
        </p>
        
        {/* Scroll down button */}
        <button
          onClick={scrollToAbout}
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-800 bg-white hover:bg-blue-50 transition-colors duration-300"
        >
          了解更多
          <ArrowDown className="ml-2 h-4 w-4" />
        </button>
      </div>
      
      {/* Decorative dots pattern - simplified for performance */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(white 1px, transparent 1px)', 
          backgroundSize: '50px 50px' 
        }}></div>
      </div>
    </section>
  );
};

export default Hero;
