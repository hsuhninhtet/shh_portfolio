import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/photo_2025-09-29 12.09.44.jpeg"
          alt="Su Hnin Htet"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/70 via-purple-900/60 to-blue-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Su Hnin Htet
          </h1>
          <p className="text-xl md:text-2xl text-pink-100 mb-4 font-light">
            Business Computing & IT Developer
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Turning ideas into impactful digital experiences
          </p>
          
          <button
            onClick={scrollToProjects}
            className="group bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            View My Work
            <ArrowDown className="inline-block ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pink-400/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-400/20 rounded-full blur-xl animate-float-slow"></div>
    </section>
  );
}