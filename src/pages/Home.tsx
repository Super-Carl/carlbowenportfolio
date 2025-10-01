import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import InteractiveSkillBadges from '../components/InteractiveSkillBadges';

const Home = () => {
  return (
    <>
      <SEO
        title='Carl Bowen - Full-Stack Developer & UI/UX Enthusiast'
        description='Professional portfolio of Carl Bowen, a full-stack developer specializing in React, TypeScript, Node.js, and modern web technologies. Available for remote work and new opportunities.'
        keywords='Carl Bowen, Full-Stack Developer, React Developer, TypeScript, Node.js, Web Developer, Frontend Developer, Backend Developer, UI/UX Designer, Portfolio'
        url='https://carlbowen.dev'
      />
      <div className='pt-16'>
        {/* Hero Section */}
        <section className='min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 relative'>
          <InteractiveSkillBadges />
          <div className='container-max text-center relative z-10'>
            <div className='max-w-4xl mx-auto'>
              {/* Profile Photo */}
              <div className='mb-8'>
                <div className='w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg ring-4 ring-primary-200'>
                  <img
                    src='/images/profile-img.jpeg'
                    alt='Carl Bowen - AI Transformation Consultant'
                    className='w-full h-full object-cover'
                    loading='eager'
                    width='128'
                    height='128'
                    decoding='async'
                  />
                </div>
              </div>

              {/* Headline */}
              <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in'>
                Hi, I'm <span className='text-primary-600'>Carl Bowen</span>
              </h1>

              {/* Tagline */}
              <p className='text-xl md:text-2xl text-gray-600 mb-8 animate-slide-up'>
                AI Transformation Consultant & Principal Developer
              </p>

              {/* Description */}
              <p className='text-lg text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up'>
                I help organizations transform their software development
                lifecycle with AI-first strategies. With 8+ years of experience
                in senior engineering and leadership roles, I design approaches,
                engineer prompt frameworks, and enable full automation from
                concept to production.
              </p>

              {/* CTA Buttons */}
              <div className='flex flex-col sm:flex-row gap-4 justify-center animate-slide-up'>
                <Link
                  to='/projects'
                  className='btn-primary text-lg px-8 py-3 rounded-lg hover:scale-105 transform transition-all duration-200'
                >
                  View My Work
                </Link>
                <Link
                  to='/contact'
                  className='btn-secondary text-lg px-8 py-3 rounded-lg hover:scale-105 transform transition-all duration-200'
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className='section-padding bg-white'>
          <div className='container-max'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
              <div className='card p-8'>
                <div className='text-4xl font-bold text-primary-600 mb-2'>
                  8+
                </div>
                <div className='text-gray-600'>Years Experience</div>
              </div>
              <div className='card p-8'>
                <div className='text-4xl font-bold text-primary-600 mb-2'>
                  20+
                </div>
                <div className='text-gray-600'>Projects Led</div>
              </div>
              <div className='card p-8'>
                <div className='text-4xl font-bold text-primary-600 mb-2'>
                  100%
                </div>
                <div className='text-gray-600'>Test Coverage</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Skills Preview */}
        <section className='section-padding bg-gray-50'>
          <div className='container-max'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                What I Do
              </h2>
              <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                I specialize in creating modern web applications with a focus on
                user experience and performance.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              <div className='card p-6 text-center hover:scale-105 transform transition-all duration-200'>
                <div className='w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-lg flex items-center justify-center'>
                  <svg
                    className='w-8 h-8 text-primary-600'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
                    />
                  </svg>
                </div>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                  AI Transformation
                </h3>
                <p className='text-gray-600 text-sm'>
                  GenAI, AI SDLC, Prompting
                </p>
              </div>

              <div className='card p-6 text-center hover:scale-105 transform transition-all duration-200'>
                <div className='w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-lg flex items-center justify-center'>
                  <svg
                    className='w-8 h-8 text-primary-600'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
                    />
                  </svg>
                </div>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                  Full-Stack Development
                </h3>
                <p className='text-gray-600 text-sm'>
                  React, Next.js, Node.js, AWS
                </p>
              </div>

              <div className='card p-6 text-center hover:scale-105 transform transition-all duration-200'>
                <div className='w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-lg flex items-center justify-center'>
                  <svg
                    className='w-8 h-8 text-primary-600'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                    />
                  </svg>
                </div>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                  Team Leadership
                </h3>
                <p className='text-gray-600 text-sm'>
                  Mentoring, Consulting, Management
                </p>
              </div>

              <div className='card p-6 text-center hover:scale-105 transform transition-all duration-200'>
                <div className='w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-lg flex items-center justify-center'>
                  <svg
                    className='w-8 h-8 text-primary-600'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </div>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                  Quality Assurance
                </h3>
                <p className='text-gray-600 text-sm'>
                  Testing, Code Quality, Automation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className='section-padding bg-primary-600 text-white'>
          <div className='container-max text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Ready to Work Together?
            </h2>
            <p className='text-xl text-primary-100 mb-8 max-w-2xl mx-auto'>
              Let's discuss your project and create something amazing together.
            </p>
            <Link
              to='/contact'
              className='inline-block bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200'
            >
              Start a Project
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
