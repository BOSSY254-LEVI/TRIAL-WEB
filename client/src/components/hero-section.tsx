import { Download, Mail, MapPin } from "lucide-react";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500 animate-gradient-xy opacity-20"></div>
      <div className="absolute inset-0 bg-gray-900 opacity-80"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-30 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full opacity-40 animate-float" style={{animationDelay: '-2s'}}></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-400 rounded-full opacity-35 animate-float" style={{animationDelay: '-4s'}}></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-pulse-slow">
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-orange-500 bg-clip-text text-transparent">
              Livingstone Oduor Otieno
            </span>
          </h1>
        </div>
        <div className="gradient-border inline-block mb-8">
          <div className="gradient-border-content px-8 py-4">
            <p className="text-xl md:text-2xl font-semibold text-gray-200">
              Information Technology Expert
            </p>
            <p className="text-lg text-gray-400 mt-2">
              <MapPin className="inline w-5 h-5 text-orange-500 mr-2" />
              Nairobi, Kenya
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-orange-500 transition-all duration-500 px-8 py-4 rounded-full font-bold text-white shadow-2xl transform hover:scale-105">
            <Download className="inline w-5 h-5 mr-2" />
            Download Resume
          </button>
          <button 
            onClick={scrollToContact}
            className="glassmorphism border-2 border-blue-400 hover:bg-blue-400 hover:bg-opacity-20 transition-all duration-300 px-8 py-4 rounded-full font-bold"
          >
            <Mail className="inline w-5 h-5 mr-2" />
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
