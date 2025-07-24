import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glassmorphism">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Livingstone O.
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="hover:text-blue-400 transition-colors duration-300 px-3 py-2 text-sm font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="hover:text-purple-500 transition-colors duration-300 px-3 py-2 text-sm font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="hover:text-orange-500 transition-colors duration-300 px-3 py-2 text-sm font-medium"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="hover:text-blue-400 transition-colors duration-300 px-3 py-2 text-sm font-medium"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-purple-500 transition-colors duration-300 px-3 py-2 text-sm font-medium"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-400 focus:outline-none focus:text-blue-400"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glassmorphism">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left hover:text-blue-400 transition-colors duration-300 px-3 py-2 text-sm font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left hover:text-purple-500 transition-colors duration-300 px-3 py-2 text-sm font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="block w-full text-left hover:text-orange-500 transition-colors duration-300 px-3 py-2 text-sm font-medium"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="block w-full text-left hover:text-blue-400 transition-colors duration-300 px-3 py-2 text-sm font-medium"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left hover:text-purple-500 transition-colors duration-300 px-3 py-2 text-sm font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
