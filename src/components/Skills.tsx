
const Skills = () => {
  const technicalSkills = [
    {
      category: "程式語言",
      skills: [
        { name: "C", endorsements: 6 },
        { name: "C++", endorsements: 4 },
        { name: "Java", endorsements: 6 },
        { name: "JavaScript", endorsements: 0 },
        { name: "PHP", endorsements: 3 },
        { name: "Visual C#", endorsements: 2 }
      ]
    },
    {
      category: "系統與平台",
      skills: [
        { name: "Linux", endorsements: 6 },
        { name: "Windows Embedded", endorsements: 0 },
        { name: "嵌入式系統 (Embedded Systems)", endorsements: 4 },
        { name: "嵌入式軟體 (Embedded Software)", endorsements: 5 }
      ]
    },
    {
      category: "版本控制",
      skills: [
        { name: "Subversion", endorsements: 3 }
      ]
    },
    {
      category: "網路技術",
      skills: [
        { name: "無線網路 (Wireless Networking)", endorsements: 0 },
        { name: "無線感測網路 (Wireless Sensor Networks)", endorsements: 0 },
        { name: "IEEE 802.11", endorsements: 0 },
        { name: "IEEE 802.16m", endorsements: 0 },
        { name: "OFDMA", endorsements: 0 },
        { name: "RFID應用 (RFID applications)", endorsements: 0 },
        { name: "智能卡 (Smart Cards)", endorsements: 0 }
      ]
    }
  ];

  const managementSkills = [
    {
      category: "專案管理",
      skills: ["JIRA", "Confluence", "Jira Service Management"]
    },
    {
      category: "方法論",
      skills: ["敏捷開發 (Agile)", "DevOps"]
    },
    {
      category: "人工智能",
      skills: ["Prompt Engineering", "NLP (自然語言處理)"]
    },
    {
      category: "軟技能",
      skills: ["產品管理", "領導力"]
    }
  ];

  const languages = ["中文", "英文"];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title text-center">專業技能</h2>
        
        <div className="max-w-5xl mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">技術技能</h3>
              
              {technicalSkills.map((category, cIndex) => (
                <div key={cIndex} className="mb-8">
                  <h4 className="font-semibold text-primary mb-4">{category.category}</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill, sIndex) => (
                      <div key={sIndex} className="flex items-center bg-white p-3 rounded-md shadow-sm">
                        <span className="flex-1 text-gray-800">{skill.name}</span>
                        {skill.endorsements > 0 && (
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                            {skill.endorsements}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">管理與工具技能</h3>
              
              {managementSkills.map((category, cIndex) => (
                <div key={cIndex} className="mb-8">
                  <h4 className="font-semibold text-primary mb-4">{category.category}</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill, sIndex) => (
                      <div key={sIndex} className="bg-white p-3 rounded-md shadow-sm">
                        <span className="text-gray-800">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="mt-8">
                <h4 className="font-semibold text-primary mb-4">語言能力</h4>
                <div className="grid grid-cols-2 gap-4">
                  {languages.map((language, index) => (
                    <div key={index} className="bg-white p-3 rounded-md shadow-sm">
                      <span className="text-gray-800">{language}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
