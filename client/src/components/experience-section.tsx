import { CheckCircle } from "lucide-react";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  achievements: string[];
  gradientColors: string;
  titleColor: string;
}

function ExperienceItem({ title, company, period, achievements, gradientColors, titleColor }: ExperienceItemProps) {
  return (
    <div className="gradient-border">
      <div className="gradient-border-content p-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
          <div>
            <h3 className={`text-2xl font-bold ${titleColor} mb-2`}>{title}</h3>
            <h4 className="text-xl text-white font-semibold">{company}</h4>
          </div>
          <div className={`bg-gradient-to-r ${gradientColors} px-4 py-2 rounded-full mt-4 lg:mt-0`}>
            <span className="text-white font-bold">{period}</span>
          </div>
        </div>
        <ul className="space-y-3 text-gray-300">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className={`${getCheckColor(index)} w-5 h-5 mr-3 mt-1 flex-shrink-0`} />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function getCheckColor(index: number): string {
  const colors = ['text-blue-400', 'text-purple-500', 'text-orange-500'];
  return colors[index % colors.length];
}

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Biometric Expert",
      company: "Pharo Schools Nairobi",
      period: "Dec 2023 – Dec 2024",
      achievements: [
        "Deployed biometric authentication systems to enhance organizational security",
        "Analyzed biometric data trends to boost efficiency and improve authentication",
        "Provided staff training, achieving high adoption and user satisfaction"
      ],
      gradientColors: "from-blue-400 to-purple-500",
      titleColor: "text-blue-400"
    },
    {
      title: "Biometric & IT Expert",
      company: "Tender Care Junior Schools",
      period: "Jan 2024 – Sep 2024",
      achievements: [
        "Designed and installed biometric access control, reducing unauthorized entry by 20%",
        "Improved face recognition algorithm accuracy by 15%",
        "Conducted security audits and recommended system enhancements"
      ],
      gradientColors: "from-purple-500 to-orange-500",
      titleColor: "text-purple-500"
    },
    {
      title: "IT Support Specialist",
      company: "Tom Mboya University",
      period: "Sep 2024",
      achievements: [
        "Led mobile app development to increase business sales and engagement",
        "Supported over 100 users per week, maintaining a 95% first-touch resolution rate",
        "Presented emerging tech research at university conferences"
      ],
      gradientColors: "from-orange-500 to-blue-400",
      titleColor: "text-orange-500"
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-400 mx-auto"></div>
        </div>
        
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
