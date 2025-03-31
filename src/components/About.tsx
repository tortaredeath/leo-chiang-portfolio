
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title text-center">關於我</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 animate-slideUp">
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
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-blue-800 mb-2">10+</h3>
              <p className="text-gray-700">軟體管理經驗</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-blue-800 mb-2">4+</h3>
              <p className="text-gray-700">軟體開發經驗</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-blue-800 mb-2">5+</h3>
              <p className="text-gray-700">專業證照</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
