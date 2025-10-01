import React, { useState } from 'react';
import SEO from '../components/SEO';
import CVViewer from '../components/CVViewer';

const About: React.FC = () => {
  const [isCVViewerOpen, setIsCVViewerOpen] = useState(false);

  const handleDownloadResume = () => {
    const now = new Date();
    const month = now.toLocaleString('default', { month: 'long' });
    const year = now.getFullYear();
    const link = document.createElement('a');
    link.href = '/resources/docs/cv.pdf';
    link.download = `Carl Bowen, CV (${month} ${year}).pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/carl-bowen',
      icon: (
        <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      url: 'https://github.com/DigiDigiblez',
      icon: (
        <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
        </svg>
      ),
    },
    {
      name: 'CarlBowen.me',
      url: 'https://carlbowen.me',
      icon: (
        <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' />
        </svg>
      ),
    },
  ];

  return (
    <>
      <SEO
        title='About Carl Bowen - Full-Stack Developer'
        description='Learn more about Carl Bowen, a passionate full-stack developer with 5+ years of experience creating innovative digital solutions. Download resume and connect on social media.'
        keywords='About Carl Bowen, Full-Stack Developer Bio, Carl Bowen Experience, Developer Resume, Software Engineer'
        url='https://carlbowen.dev/about'
      />
      <div className='pt-16'>
        {/* Hero Section */}
        <section className='section-padding bg-gradient-to-br from-primary-50 to-secondary-50'>
          <div className='container-max'>
            <div className='max-w-4xl mx-auto text-center'>
              <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
                About Me
              </h1>
              <p className='text-xl text-gray-600 leading-relaxed'>
                Passionate developer with a love for creating innovative
                solutions and beautiful user experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className='section-padding bg-white'>
          <div className='container-max'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
              {/* Profile Image */}
              <div className='order-2 lg:order-1'>
                <div className='relative'>
                  <div className='w-full h-96 rounded-lg overflow-hidden shadow-lg'>
                    <img
                      src='/resources/images/profile-img.jpeg'
                      alt='Carl Bowen - AI Transformation Consultant'
                      className='w-full h-full object-cover'
                      loading='lazy'
                      width='400'
                      height='384'
                      decoding='async'
                    />
                  </div>
                  <div className='absolute -bottom-4 -right-4 w-24 h-24 bg-secondary-200 rounded-full flex items-center justify-center'>
                    <span className='text-2xl'>💻</span>
                  </div>
                </div>
              </div>

              {/* Bio Content */}
              <div className='order-1 lg:order-2'>
                <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                  Hi, I'm Carl Bowen
                </h2>

                <div className='space-y-4 text-gray-700 leading-relaxed'>
                  <p>
                    I'm an AI Transformation Consultant and Principal Developer
                    with 8+ years of proven experience in senior engineering and
                    leadership roles. I help organizations transform their
                    software development lifecycle with AI-first strategies,
                    designing approaches, engineering prompt frameworks, and
                    enabling full automation from concept to production.
                  </p>

                  <p>
                    My expertise spans requirements analysis, automated code
                    generation, CI/CD build automation, integration & system
                    testing, release orchestration, and AI-driven monitoring. I
                    combine deep technical skill with effective leadership —
                    mentoring teams, building high-performing squads, and
                    fostering a culture of innovation.
                  </p>

                  <p>
                    What sets me apart is blending technical mastery with a
                    personable approach — staying ahead through personal
                    projects, continuous learning, and engagement with the AI
                    and tech community. I thrive at the intersection of
                    innovation and execution, delivering responsive,
                    customer-centric products that empower end-users to shape
                    the products they use.
                  </p>
                </div>

                {/* Resume Actions */}
                <div className='mt-8 flex flex-col sm:flex-row gap-4'>
                  <button
                    onClick={() => setIsCVViewerOpen(true)}
                    className='btn-primary inline-flex items-center px-6 py-3 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
                    aria-label='View resume in browser'
                  >
                    <svg
                      className='w-5 h-5 mr-2'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                      />
                    </svg>
                    View Resume
                  </button>
                  <button
                    onClick={handleDownloadResume}
                    className='inline-flex items-center px-6 py-3 rounded-lg text-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'
                    aria-label='Download resume as PDF'
                  >
                    <svg
                      className='w-5 h-5 mr-2'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                      />
                    </svg>
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className='section-padding bg-gray-50'>
          <div className='container-max'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                My Journey
              </h2>
              <p className='text-lg text-gray-600'>
                A timeline of my professional experience and key milestones
              </p>
            </div>

            <div className='max-w-3xl mx-auto'>
              <div className='space-y-8'>
                <div className='flex items-start space-x-4'>
                  <div className='flex-shrink-0 w-4 h-4 bg-primary-600 rounded-full mt-2'></div>
                  <div className='flex-1'>
                    <div className='bg-white rounded-lg p-6 shadow-md'>
                      <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                        AI Transformation Consultant
                      </h3>
                      <p className='text-primary-600 font-medium mb-2'>
                        Admiral Group Plc • Aug 2025 - Present
                      </p>
                      <p className='text-gray-700'>
                        Planning & evaluating AI-driven requirements analysis,
                        design, code generation, review, and unit testing.
                        Designing CI/CD build strategies with AI automation,
                        integration testing, debugging, and non-functional
                        testing.
                      </p>
                    </div>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='flex-shrink-0 w-4 h-4 bg-primary-600 rounded-full mt-2'></div>
                  <div className='flex-1'>
                    <div className='bg-white rounded-lg p-6 shadow-md'>
                      <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                        AI Transformation Consultant
                      </h3>
                      <p className='text-primary-600 font-medium mb-2'>
                        Digiblez • Mar 2025 - Aug 2025
                      </p>
                      <p className='text-gray-700'>
                        Assessed AI readiness across systems, data, and
                        workflows. Identified high-impact AI/GenAI use cases and
                        designed AI adoption strategies and roadmaps. Led change
                        management and culture shift for AI adoption.
                      </p>
                    </div>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='flex-shrink-0 w-4 h-4 bg-primary-600 rounded-full mt-2'></div>
                  <div className='flex-1'>
                    <div className='bg-white rounded-lg p-6 shadow-md'>
                      <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                        Senior Full-Stack Developer
                      </h3>
                      <p className='text-primary-600 font-medium mb-2'>
                        Experian • Dec 2024 - Mar 2025
                      </p>
                      <p className='text-gray-700'>
                        Built Experian's credit lock feature to prevent
                        fraudulent credit applications. Developed secure APIs
                        and integrated identity verification workflows.
                        Delivered responsive UIs with real-time lock/unlock
                        functionality.
                      </p>
                    </div>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='flex-shrink-0 w-4 h-4 bg-primary-600 rounded-full mt-2'></div>
                  <div className='flex-1'>
                    <div className='bg-white rounded-lg p-6 shadow-md'>
                      <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                        Principal Full-Stack Developer
                      </h3>
                      <p className='text-primary-600 font-medium mb-2'>
                        Digiblez • Aug 2022 - Nov 2024
                      </p>
                      <p className='text-gray-700'>
                        Led greenfield development of a next-gen freelancing
                        platform (MERN stack). Managed and mentored an 8-person
                        dev team, ensuring code quality and team performance.
                        Drove system design, performance optimization, and
                        scalable architecture decisions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='flex-shrink-0 w-4 h-4 bg-primary-600 rounded-full mt-2'></div>
                  <div className='flex-1'>
                    <div className='bg-white rounded-lg p-6 shadow-md'>
                      <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                        Senior Full-Stack Developer
                      </h3>
                      <p className='text-primary-600 font-medium mb-2'>
                        Raise • May 2022 - Aug 2022
                      </p>
                      <p className='text-gray-700'>
                        Built a modern atomic design system in collaboration
                        with the UI Director. Developed and launched a robust
                        agency management platform. Mentored a large outsourced
                        team of junior developers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className='section-padding bg-white'>
          <div className='container-max text-center'>
            <h2 className='text-3xl font-bold text-gray-900 mb-8'>
              Let's Connect
            </h2>
            <div className='flex justify-center space-x-6'>
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-16 h-16 bg-gray-100 hover:bg-primary-100 rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600 transition-all duration-200 hover:scale-110 transform'
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* CV Viewer Modal */}
      <CVViewer
        isOpen={isCVViewerOpen}
        onClose={() => setIsCVViewerOpen(false)}
      />
    </>
  );
};

export default About;
