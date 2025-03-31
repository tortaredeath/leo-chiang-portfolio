
import { Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Strategy Manager",
      company: "鈦坦科技 (Titansoft Pte Ltd)",
      period: "2023年3月 - 至今",
      location: "台灣 臺北市",
      type: "全職",
      description: "作為Strategy Manager，負責策略規劃和管理工作，運用豐富的產品管理和敏捷開發經驗，為公司的業務發展提供戰略指導。"
    },
    {
      title: "Department Manager",
      company: "鈦坦科技 (Titansoft Pte Ltd)",
      period: "2020年1月 - 2023年4月",
      location: "台灣 台北",
      type: "全職",
      description: "負責產品管理部門的管理工作。作為客戶經理，維護與關鍵客戶的業務關係，並創造產品價值以滿足客戶需求。同時，負責制定業務策略，管理主要產品線，並擔任敏捷Scrum開發的產品負責人(Product Owner)。"
    },
    {
      title: "Assistant Manager",
      company: "鈦坦科技 (Titansoft Pte Ltd)",
      period: "2019年1月 - 2020年1月",
      location: "台灣",
      type: "全職",
      description: "協助管理團隊和項目，為公司的產品開發和管理提供支持。"
    },
    {
      title: "Senior Product Owner",
      company: "鈦坦科技 (Titansoft Pte Ltd)",
      period: "2016年8月 - 2018年",
      location: "台灣",
      type: "全職",
      description: "負責產品規劃、需求分析和產品開發流程的管理，確保產品符合市場需求和客戶期望。"
    },
    {
      title: "Product Developer",
      company: "鈦坦科技 (Titansoft Pte Ltd)",
      period: "2014年5月 - 2016年8月",
      location: "新加坡",
      type: "全職",
      description: "參與產品開發工作，運用技術知識和開發經驗，為公司的產品開發做出貢獻。"
    },
    {
      title: "Senior Software Engineer",
      company: "MiTAC Inc.",
      period: "2011年10月 - 2014年5月",
      location: "台灣",
      type: "全職",
      description: "負責C/C++軟體開發、Windows XP embedded系統開發、嵌入式系統中的Linux開發、系統分析與設計。"
    },
    {
      title: "監事",
      company: "社團法人台灣敏捷協會 (Agile Community Taiwan)",
      period: "2024年12月 - 至今",
      location: "台灣 臺北市",
      type: "兼職",
      description: "擔任社團法人台灣敏捷協會第四屆監事，參與協會的監督和管理工作。"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title text-center">工作經驗</h2>
        
        <div className="max-w-4xl mx-auto mt-12">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="mb-2">
                <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                <div className="flex items-center text-primary">
                  <Building className="h-4 w-4 mr-2" />
                  <span className="font-medium">{exp.company}</span>
                </div>
              </div>
              
              <div className="mb-4 text-sm text-gray-500">
                <div>{exp.period}</div>
                <div>{exp.location} · {exp.type}</div>
              </div>
              
              <p className="text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
