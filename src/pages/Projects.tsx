import React, { useState } from 'react';
import SEO from '../components/SEO';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  category: string;
}

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Experian Credit Lock Feature',
      description:
        "Built Experian's credit lock feature to prevent fraudulent credit applications. Developed secure APIs and integrated identity verification workflows with responsive, real-time UI for lock/unlock functionality.",
      technologies: [
        'React',
        'Next.js',
        'TypeScript',
        'Node.js',
        'AWS',
        'Design Systems',
      ],
      image: '/api/placeholder/600/400',
      liveUrl: 'https://www.experian.co.uk',
      category: 'fullstack',
    },
    {
      id: 2,
      title: 'Digiblez Freelancing Platform',
      description:
        'Led greenfield development of a next-gen freelancing platform using MERN stack. Managed and mentored an 8-person dev team, ensuring code quality and team performance while driving system design and scalability.',
      technologies: [
        'React',
        'Next.js',
        'TypeScript',
        'Node.js',
        'MongoDB',
        'AWS',
        'MERN',
      ],
      image: '/api/placeholder/600/400',
      liveUrl: 'https://www.digiblez.com',
      category: 'fullstack',
    },
    {
      id: 3,
      title: 'Raise Agency Management Platform',
      description:
        'Built a modern atomic design system in collaboration with the UI Director. Developed and launched a robust agency management platform while mentoring a large outsourced team of junior developers.',
      technologies: [
        'React',
        'Next.js',
        'TypeScript',
        'GraphQL',
        'AWS',
        'Design Systems',
        'Cypress',
      ],
      image: '/api/placeholder/600/400',
      category: 'fullstack',
    },
    {
      id: 4,
      title: 'Vibrant Media Contextual Targeting',
      description:
        'Led a multi-level development team to create advanced keyword-level technology for precise contextual targeting. Shaped product UI design direction and ensured 100% automated test coverage.',
      technologies: [
        'React',
        'Next.js',
        'TypeScript',
        'Node.js',
        'AWS',
        'Jest',
        'Cypress',
      ],
      image: '/api/placeholder/600/400',
      category: 'fullstack',
    },
    {
      id: 5,
      title: 'Superbet Sports Betting Platform',
      description:
        'Developed a greenfield sports betting platform with progressive enhancement via PWA. Led a 5-dev team enforcing strict code reviews and achieved 100% automated test coverage.',
      technologies: [
        'React',
        'Next.js',
        'TypeScript',
        'Node.js',
        'Jest',
        'Cypress',
        'PWA',
      ],
      image: '/api/placeholder/600/400',
      category: 'fullstack',
    },
    {
      id: 6,
      title: 'Endemol Shine Slot Games',
      description:
        'Developed bespoke slot games including Dumb and Dumber, Oliver Twist, and Deal or No Deal. Engineered core game mechanics and graphics, transitioning to hybrid QA Lead role.',
      technologies: [
        'HTML5',
        'JavaScript',
        'Phaser.js',
        'Pixi.js',
        'TypeScript',
        'ES6+',
      ],
      image: '/api/placeholder/600/400',
      category: 'frontend',
    },
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'fullstack', label: 'Full Stack' },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter(project => project.category === selectedCategory);

  return (
    <>
      <SEO
        title='Projects - Carl Bowen Portfolio'
        description="Explore Carl Bowen's portfolio of web development projects including e-commerce platforms, task management apps, weather dashboards, and more. Built with React, TypeScript, and modern technologies."
        keywords='Carl Bowen Projects, Web Development Portfolio, React Projects, TypeScript Projects, Full-Stack Projects, Developer Portfolio'
        url='https://carlbowen.dev/projects'
      />
      <div className='pt-16'>
        {/* Hero Section */}
        <section className='section-padding bg-gradient-to-br from-primary-50 to-secondary-50'>
          <div className='container-max text-center'>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
              My Projects
            </h1>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              A collection of projects that showcase my skills and passion for
              creating innovative digital solutions.
            </p>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className='py-8 bg-white border-b'>
          <div className='container-max'>
            <div className='flex flex-wrap justify-center gap-4'>
              {categories.map(category => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category.value
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className='section-padding bg-white'>
          <div className='container-max'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {filteredProjects.map(project => (
                <div
                  key={project.id}
                  className='card overflow-hidden hover:scale-105 transform transition-all duration-300'
                >
                  {/* Project Image */}
                  <div className='h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-2xl font-bold'>
                    {project.title.charAt(0)}
                  </div>

                  {/* Project Content */}
                  <div className='p-6'>
                    <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                      {project.title}
                    </h3>

                    <p className='text-gray-600 mb-4 text-sm leading-relaxed'>
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className='mb-4'>
                      <div className='flex flex-wrap gap-2'>
                        {project.technologies.map(tech => (
                          <span
                            key={tech}
                            className='px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className='flex space-x-3'>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='flex-1 btn-primary text-center text-sm py-2'
                        >
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='flex-1 btn-secondary text-center text-sm py-2'
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className='section-padding bg-gray-50'>
          <div className='container-max text-center'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Interested in Working Together?
            </h2>
            <p className='text-lg text-gray-600 mb-8 max-w-2xl mx-auto'>
              I'm always excited to take on new challenges and create amazing
              digital experiences. Let's discuss your project!
            </p>
            <a
              href='/contact'
              className='btn-primary text-lg px-8 py-3 rounded-lg hover:scale-105 transform transition-all duration-200'
            >
              Get In Touch
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;
