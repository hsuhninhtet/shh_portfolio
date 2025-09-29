import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Su Hnin Htet</h3>
            <p className="text-gray-400">
              Business Computing & IT developer
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/hsuhninhtet"
                className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="http://linkedin.com/in/su-hnin-htet-73150a230"
                className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:hsuhninhtet12@gmail.com"
                className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Home
              </a>
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors duration-200">
                About
              </a>
              <a href="#portfolio" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Portfolio
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>suhninhtet12@gmail.com</p>
              <p>+95 9770244613</p>
              <p>Available for remote work</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-1">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>by Su Hnin Htet © 2025</span>
          </p>
        </div>
      </div>
    </footer>
  );
}