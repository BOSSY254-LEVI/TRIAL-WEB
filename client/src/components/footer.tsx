import { Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Livingstone Oduor Otieno
          </h3>
          <p className="text-gray-400 mb-6">Information Technology Expert | Biometric Systems Specialist</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="#" 
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-purple-500 transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-8 h-8" />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="w-8 h-8" />
            </a>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-500">© 2024 Livingstone Oduor Otieno. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
