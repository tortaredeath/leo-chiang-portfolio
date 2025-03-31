
const Education = () => {
  const educations = [
    {
      school: "淡江大學 (Tamkang University)",
      degree: "碩士學位，資訊工程",
      period: "2009年 - 2011年",
      papers: [
        "Hung-Chang Chen, Chi-Tao Chiang, Chih-Ping Chiang, Sheng-Shih Wang, Kuei-Ping Shih, \"A variable-length burst scheduling algorithm (VLBS) for downlink traffic in IEEE 802.16m OFDMA systems,\" in Proceedings of the IEEE Wireless Communications and Networking Conference (WCNC), 2012.",
        "Hung-Chang Chen, Chi-Tao Chiang, Chih-Ping Chiang, and Kuei-Ping Shih, \"HTC: A Hybrid Transmission Time Interval Compression Scheme for Downlink Traffic in IEEE 802.16m OFDMA Systems,\" in Proceedings of the Workshop on Wireless Ad Hoc and Sensor Networks(WASN2010), Taipei, Taiwan, Sep. 2-3, 2010.",
        "Chih-Ping Chiang, Chi-Tao Chiang, Kuei-Ping Shih, \"Android platform software development and application of wireless real-time battle system,\" in Proceedings of the Information Education and Technological Application Conference,(IETAC2011), Taiwan, 2011."
      ]
    },
    {
      school: "國立虎尾科技大學 (National Formosa University)",
      degree: "理學學士，資訊工程",
      period: "2005年 - 2006年",
      description: "2年制技術學校"
    },
    {
      school: "修平科技大學 (Hsiuping University of Science and Technology)",
      degree: "電機工程副學士",
      period: "2001年 - 2005年",
      description: "5年制專科學校",
      projects: ["LabVIEW Protocol on GPS Tracking and Coordination Transform"]
    }
  ];

  const courses = [
    "Wireless Local Area Networks (92/100)",
    "Algorithm (89/100)",
    "Broadband Wireless Access Networks (90/100)",
    "Communication Protocols for Wireless Networks (96/100)",
    "Mobile Communication Techniques (90/100)",
    "Mobile Computing (90/100)",
    "Wireless LAN (92/100)",
    "Wireless sensor network (90/100)"
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title text-center">教育背景</h2>
        
        <div className="max-w-4xl mx-auto mt-12">
          {educations.map((edu, index) => (
            <div key={index} className="mb-12 animate-slideUp" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="mb-2">
                <h3 className="text-xl font-bold text-gray-900">{edu.school}</h3>
                <div className="font-medium text-primary">{edu.degree}</div>
                <div className="text-sm text-gray-500">{edu.period}</div>
                {edu.description && <div className="text-sm text-gray-500">{edu.description}</div>}
              </div>
              
              {edu.papers && (
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-700 mb-2">發表論文：</h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                    {edu.papers.map((paper, pIndex) => (
                      <li key={pIndex}>{paper}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {edu.projects && (
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-700 mb-2">項目：</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    {edu.projects.map((project, pIndex) => (
                      <li key={pIndex}>{project}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
          
          <div className="mt-16">
            <h3 className="text-xl font-bold text-gray-900 mb-4">專業課程</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {courses.map((course, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-md">{course}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
