
import { useEffect, useState } from 'react';
import { Award, Code, Users } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('about');
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-50 rounded-full opacity-70"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-blue-50 rounded-full opacity-70"></div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title text-center">關於我</h2>
        
        <div className="max-w-3xl mx-auto">
          <div 
            className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="relative">
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <Users className="h-10 w-10 text-white" />
              </div>
              <div className="pt-10">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  我是Leo Chiang，目前擔任<span className="font-semibold text-primary">Strategy Manager</span>，擁有超過10年的軟體產品開發支援和管理經驗，涵蓋各種角色、敏捷產品開發和軟體可用性方面的專業知識。
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  我具備4年以上的C/C++/C#軟體開發和整合經驗，曾參與Windows XP Embedded和Windows Phone上的Windows應用程式整合。
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  專長於維護與客戶的關係和溝通，熟悉敏捷開發流程和產品管理，目前居住於台灣台北。
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className={`bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 text-center shadow-md transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              style={{ transitionDelay: '0.4s' }}
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-2">10+</h3>
              <p className="text-gray-700">軟體管理經驗</p>
            </div>
            
            <div 
              className={`bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 text-center shadow-md transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              style={{ transitionDelay: '0.6s' }}
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-2">4+</h3>
              <p className="text-gray-700">軟體開發經驗</p>
            </div>
            
            <div 
              className={`bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 text-center shadow-md transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              style={{ transitionDelay: '0.8s' }}
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-2">5+</h3>
              <p className="text-gray-700">專業證照</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
