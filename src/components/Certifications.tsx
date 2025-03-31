
const Certifications = () => {
  const certifications = [
    {
      year: "2025年",
      title: "Atlassian系列認證",
      certs: [
        { name: "Exploring Atlassian Cloud products for agile and DevOps", org: "Atlassian", date: "2025年2月" },
        { name: "Get the most out of Confluence", org: "Atlassian", date: "2025年1月" },
        { name: "Search and automate using natural language", org: "Atlassian", date: "2025年1月" },
        { name: "Get help from Rovo Chat and Agents", org: "Atlassian", date: "2025年1月" },
        { name: "Get started quickly with Rovo", org: "Atlassian", date: "2025年1月" },
        { name: "Get the most out of Rovo", org: "Atlassian", date: "2025年1月" }
      ]
    },
    {
      year: "2024年",
      title: "Atlassian系列認證",
      certs: [
        { name: "Agile at Scale Sales Accreditation", org: "Atlassian", date: "2024年10月" },
        { name: "Cloud Migration Technical Delivery Accreditation", org: "Atlassian", date: "2024年10月" },
        { name: "Atlassian DevOps Essentials", org: "Atlassian", date: "2024年7月" },
        { name: "Cloud Migration Sales Accreditation", org: "Atlassian", date: "2024年7月" },
        { name: "Confluence Fundamentals Badge", org: "Atlassian", date: "2024年7月" },
        { name: "Product Development Sales Accreditation", org: "Atlassian", date: "2024年7月" },
        { name: "Streamlining development work with integrations", org: "Atlassian", date: "2024年7月" }
      ]
    },
    {
      year: "2023年",
      certs: [
        { name: "Level 1 Award in Spirits", org: "Wine & Spirit Education Trust (WSET)", date: "2023年11月" }
      ]
    },
    {
      year: "2022年",
      certs: [
        { name: "Neuro-Linguistic Programming Practitioner", org: "NLP University", date: "2022年9月" }
      ]
    },
    {
      year: "2021年",
      certs: [
        { name: "Scrum@Scale practitioner", org: "Scrum Inc.", date: "2021年8月 - 2022年8月" }
      ]
    },
    {
      year: "2017年",
      certs: [
        { name: "Certified Scrum Product Owner (CSPO)", org: "Scrum Alliance", date: "2017年2月" }
      ]
    },
    {
      year: "2015年",
      certs: [
        { name: "Certified ScrumMaster (CSM)", org: "Scrum Alliance", date: "2015年5月" }
      ]
    },
    {
      year: "2013年",
      certs: [
        { name: "MCTS:Windows Embedded Standard 7 for Developers (70-582)", org: "Microsoft", date: "2013年8月" }
      ]
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title text-center">專業證照與認證</h2>
        
        <div className="max-w-4xl mx-auto mt-12">
          <div className="space-y-12">
            {certifications.map((certYear, index) => (
              <div key={index} className="animate-slideUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="inline-block text-lg font-bold text-white bg-primary px-4 py-2 rounded-md mb-6">
                  {certYear.year}
                </h3>
                
                {certYear.title && (
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">{certYear.title}</h4>
                )}
                
                <div className="space-y-4">
                  {certYear.certs.map((cert, cIndex) => (
                    <div key={cIndex} className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-500">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <div>
                          <h5 className="font-medium text-gray-900">{cert.name}</h5>
                          <p className="text-primary">{cert.org}</p>
                        </div>
                        <div className="text-sm text-gray-500 mt-2 md:mt-0">{cert.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
