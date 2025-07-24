import { GraduationCap, School, Smartphone, TrendingUp, Leaf, FlaskConical, Atom } from "lucide-react";

interface EducationItemProps {
  icon: React.ReactNode;
  institution: string;
  period: string;
  achievements: Array<{ icon: React.ReactNode; text: string }>;
  gradientColors: string;
  titleColor: string;
}

function EducationItem({ icon, institution, period, achievements, gradientColors, titleColor }: EducationItemProps) {
  return (
    <div className="glassmorphism p-8 rounded-2xl">
      <div className="flex items-center mb-6">
        <div className={`w-16 h-16 bg-gradient-to-r ${gradientColors} rounded-full flex items-center justify-center mr-4`}>
          {icon}
        </div>
        <div>
          <h3 className={`text-xl font-bold ${titleColor}`}>{institution}</h3>
          <p className="text-gray-400">{period}</p>
        </div>
      </div>
      <ul className="space-y-3 text-gray-300">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-400 mr-3 mt-1 flex-shrink-0">{achievement.icon}</span>
            <span>{achievement.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function EducationSection() {
  const educationData = [
    {
      icon: <GraduationCap className="text-white w-8 h-8" />,
      institution: "Tom Mboya University",
      period: "September 2024 – Present",
      achievements: [
        { icon: <GraduationCap className="w-4 h-4" />, text: "Coursework in database management, cybersecurity, and network administration" },
        { icon: <Smartphone className="w-4 h-4" />, text: "Led mobile application development for local business" },
        { icon: <TrendingUp className="w-4 h-4" />, text: "Presented research on emerging IT technologies at conferences" }
      ],
      gradientColors: "from-blue-400 to-purple-500",
      titleColor: "text-blue-400"
    },
    {
      icon: <School className="text-white w-8 h-8" />,
      institution: "Sawagongo High School",
      period: "January 2020 – November 2023",
      achievements: [
        { icon: <Leaf className="w-4 h-4" />, text: "Researched environmental sustainability and presented at conferences" },
        { icon: <FlaskConical className="w-4 h-4" />, text: "Assisted in laboratory experiments with focus on safety" },
        { icon: <Atom className="w-4 h-4" />, text: "Completed coursework in biology, chemistry, and physics" }
      ],
      gradientColors: "from-purple-500 to-orange-500",
      titleColor: "text-purple-500"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500 opacity-10 animate-gradient-xy"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-blue-400 to-orange-500 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {educationData.map((education, index) => (
            <EducationItem key={index} {...education} />
          ))}
        </div>
      </div>
    </section>
  );
}
