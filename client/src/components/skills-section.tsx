import { useEffect, useRef, useState } from "react";
import { Code, Users, MessageCircle, Clock, Search, Handshake } from "lucide-react";

interface SkillBarProps {
  skill: string;
  level: number;
  color: string;
}

function SkillBar({ skill, level, color }: SkillBarProps) {
  const [width, setWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setTimeout(() => setWidth(level), 100);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [level, isVisible]);

  return (
    <div ref={ref} className="skill-item">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-semibold">{skill}</span>
        <span className={`${color} font-bold`}>{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3">
        <div 
          className={`skill-bar bg-gradient-to-r ${getGradientClass(color)} h-3 rounded-full transition-all duration-1000 ease-in-out`}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
}

function getGradientClass(color: string): string {
  switch (color) {
    case 'text-blue-400':
      return 'from-blue-400 to-purple-500';
    case 'text-purple-500':
      return 'from-purple-500 to-orange-500';
    case 'text-orange-500':
      return 'from-orange-500 to-blue-400';
    default:
      return 'from-blue-400 to-purple-500';
  }
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-purple-600 to-blue-600 opacity-10 animate-gradient-xy"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-orange-500 to-blue-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-purple-500 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="glassmorphism p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-blue-400 mb-8 flex items-center">
              <Code className="w-8 h-8 mr-3" />
              Technical Skills
            </h3>
            <div className="space-y-6">
              <SkillBar skill="Biometric Systems" level={95} color="text-blue-400" />
              <SkillBar skill="Network Security" level={90} color="text-purple-500" />
              <SkillBar skill="Windows & Linux OS" level={88} color="text-orange-500" />
              <SkillBar skill="Programming (Python, Java)" level={85} color="text-blue-400" />
              <SkillBar skill="SQL Databases" level={80} color="text-purple-500" />
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="glassmorphism p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-purple-500 mb-8 flex items-center">
              <Users className="w-8 h-8 mr-3" />
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="text-white w-6 h-6" />
                </div>
                <h4 className="font-bold text-white mb-2">Communication</h4>
                <p className="text-gray-400 text-sm">Excellent verbal and written communication</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-white w-6 h-6" />
                </div>
                <h4 className="font-bold text-white mb-2">Time Management</h4>
                <p className="text-gray-400 text-sm">Efficient project and deadline management</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="text-white w-6 h-6" />
                </div>
                <h4 className="font-bold text-white mb-2">Attention to Detail</h4>
                <p className="text-gray-400 text-sm">Meticulous approach to problem-solving</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="text-white w-6 h-6" />
                </div>
                <h4 className="font-bold text-white mb-2">Team Collaboration</h4>
                <p className="text-gray-400 text-sm">Strong teamwork and leadership abilities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
