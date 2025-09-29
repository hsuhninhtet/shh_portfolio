import { Code, Palette, Zap, Heart } from 'lucide-react';

export default function About() {
  const skills = [
    {
      icon: Code,
      title: 'Development',
      description: 'Front-end development with modern technologies and best practices'
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Creating beautiful, user-centered designs that enhance user experience'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing web applications for speed, scalability, and reliability'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Dedicated to continuous learning and delivering exceptional results'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get to know more about my journey, skills, and what drives me to create amazing digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/photo_2025-09-29 12.09.44.jpeg"
                alt="Su Hnin Htet"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <Heart className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Passionate Developer & Creative Thinker
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Hello! I'm Su Hnin Htet, a dedicated professional with a passion for creating 
                  innovative digital solutions. My journey in technology has been driven by 
                  curiosity and a desire to solve complex problems through elegant code.
                </p>
                <p>
                  I believe in the power of technology to transform ideas into reality. Whether 
                  it's building responsive web applications, crafting intuitive user interfaces, 
                  or optimizing system performance, I approach each project with enthusiasm and 
                  attention to detail. 
                  I'm always eager to take on new challenges and collaborate on exciting projects.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-blue-600 rounded-lg">
                      <skill.icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900">{skill.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm">{skill.description}</p>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <a
                href="https://drive.google.com/file/d/19HNaz484mTePAgxBsffCtDb1kr1sInko/view?usp=sharing"
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                <span>View My Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}