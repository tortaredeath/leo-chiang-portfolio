
import { ArrowDown, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 animate-gradient-x"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              opacity: Math.random() * 0.5 + 0.1,
              animation: `float ${Math.random() * 15 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      {/* Content with parallax effect */}
      <div 
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center mb-4">
            <Sparkles className="text-yellow-300 h-6 w-6 mr-2 animate-pulse" />
            <span className="text-yellow-300 font-medium">Strategy & Innovation</span>
            <Sparkles className="text-yellow-300 h-6 w-6 ml-2 animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200">
            Leo Chiang
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Strategy Manager | Product Management | Agile Expert
          </p>
          
          <p className="max-w-2xl mx-auto text-blue-200 mb-12 text-lg">
            超過10年的軟體產品開發支援和管理經驗，專注於敏捷開發流程和策略規劃
          </p>
        </div>
        
        {/* Animated button */}
        <button
          onClick={scrollToAbout}
          className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-blue-800 bg-white rounded-full group hover:scale-105 transition-all duration-300"
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-600 rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
          <span className="relative flex items-center">
            了解更多
            <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
          </span>
        </button>
      </div>
      
      {/* Dynamic grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px), radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px, 20px 20px',
          backgroundPosition: '0 0, 20px 20px'
        }}></div>
      </div>
    </section>
  );
};

export default Hero;
