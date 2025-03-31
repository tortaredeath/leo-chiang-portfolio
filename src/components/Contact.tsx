
import { Mail, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title text-center">聯絡資訊</h2>
        
        <div className="max-w-3xl mx-auto mt-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">地點</h3>
                      <p className="mt-1 text-gray-700">台灣台北</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Email</h3>
                      <p className="mt-1 text-gray-700">
                        <a href="mailto:contact@example.com" className="hover:text-primary">
                          聯絡我的Email
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Linkedin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">LinkedIn</h3>
                      <p className="mt-1 text-gray-700">
                        <a 
                          href="https://www.linkedin.com/in/leo-chiang/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-primary"
                        >
                          linkedin.com/in/leo-chiang
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-gray-700">
                  目前開放接洽合作機會，歡迎透過以上方式聯繫。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
