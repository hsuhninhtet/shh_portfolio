import { ExternalLink, Github } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'Mention Hospital ',
      description: 'Healthcare facility website with appointment booking, doctor profiles, and mdeical services information.',
      image: '/photo_2025-09-29 12.52.28.jpeg',
      tags: ['HTML', 'CSS', 'Javascript' , 'Bootstrap'],
      liveUrl: '#',
      githubUrl: 'https://github.com/hsuhninhtet/mentionhospital'
    },
    {
      title: 'AMZ Photo Studio',
      description: 'Professional photography studio website with portfolio gallery and booking system.',
      image: '/photo_2025-09-29 12.52.31.jpeg',
      tags: ['HTML', 'CSS', 'Javascript' , 'Bootstrap'],
      liveUrl: '#',
      githubUrl: 'https://github.com/hsuhninhtet/amzphotostudio'
    },
    {
      title: 'Laptop Landing Page',
      description: 'Multiple responsive landing pages designed for various business needs with conversion-focused layout',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['HTML', 'CSS', 'Javascript' , 'Bootstrap'],
      liveUrl: '#',
      githubUrl: 'https://github.com/hsuhninhtet/landingpage'
    },
    {
      title: 'Portfolio Website',
      description: 'Responsive portfolio website showcasing creative work and professional experience.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of projects that showcase my skills and passion for creating exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}