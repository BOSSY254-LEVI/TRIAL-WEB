import { UserCog, Trophy, Shield, Fingerprint } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-orange-500 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="glassmorphism p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-blue-400 mb-6">
              <UserCog className="inline w-8 h-8 mr-3" />
              Professional Profile
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I am a detail-oriented IT professional with hands-on experience in operating systems, firewalls, network security, and troubleshooting. My specialties include biometric systems, software configuration, and providing responsive IT support.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I thrive in high-pressure environments, solve problems analytically, and am passionate about contributing both my technical and communication skills as an IT Technician.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="gradient-border">
              <div className="gradient-border-content p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <Trophy className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">2+ Years Experience</h4>
                    <p className="text-gray-400">IT Support & Biometric Systems</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="gradient-border">
              <div className="gradient-border-content p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full flex items-center justify-center mr-4">
                    <Shield className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">95% Resolution Rate</h4>
                    <p className="text-gray-400">First-Touch Issue Resolution</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="gradient-border">
              <div className="gradient-border-content p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-400 rounded-full flex items-center justify-center mr-4">
                    <Fingerprint className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Biometric Expert</h4>
                    <p className="text-gray-400">Advanced Authentication Systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
