import React from 'react';
import SEO from '../components/SEO';

const About: React.FC = () => {
  const handleDownloadResume = () => {
    // In a real application, this would download the actual resume PDF
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Placeholder path
    link.download = 'Carl_Bowen_Resume.pdf';
    link.click();
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/carlbowen',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: 'GitHub',
      url: 'https://github.com/carlbowen',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/carlbowen',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
    },
  ];

  return (
    <>
      <SEO 
        title="About Carl Bowen - Full-Stack Developer"
        description="Learn more about Carl Bowen, a passionate full-stack developer with 5+ years of experience creating innovative digital solutions. Download resume and connect on social media."
        keywords="About Carl Bowen, Full-Stack Developer Bio, Carl Bowen Experience, Developer Resume, Software Engineer"
        url="https://carlbowen.dev/about"
      />
      <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Passionate developer with a love for creating innovative solutions 
              and beautiful user experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center text-white text-6xl font-bold shadow-lg">
                  CB
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💻</span>
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Hi, I'm Carl Bowen
              </h2>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  I'm a full-stack developer with over 5 years of experience creating 
                  digital solutions that make a difference. My journey began with a 
                  curiosity about how things work, which led me to discover the 
                  fascinating world of programming.
                </p>
                
                <p>
                  I specialize in modern web technologies including React, TypeScript, 
                  Node.js, and cloud platforms. I'm passionate about clean code, 
                  user-centered design, and creating applications that are both 
                  beautiful and functional.
                </p>
                
                <p>
                  When I'm not coding, you can find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge with 
                  the developer community. I believe in continuous learning and 
                  staying up-to-date with the latest industry trends.
                </p>
              </div>

              {/* Download Resume Button */}
              <div className="mt-8">
                <button
                  onClick={handleDownloadResume}
                  className="btn-primary flex items-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Download Resume</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              My Journey
            </h2>
            <p className="text-lg text-gray-600">
              A timeline of my professional experience and key milestones
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-4 h-4 bg-primary-600 rounded-full mt-2"></div>
                <div className="flex-1">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Senior Full-Stack Developer
                    </h3>
                    <p className="text-primary-600 font-medium mb-2">TechCorp Inc. • 2022 - Present</p>
                    <p className="text-gray-700">
                      Leading development of scalable web applications using React, Node.js, 
                      and cloud technologies. Mentoring junior developers and implementing 
                      best practices for code quality and performance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-4 h-4 bg-primary-600 rounded-full mt-2"></div>
                <div className="flex-1">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Full-Stack Developer
                    </h3>
                    <p className="text-primary-600 font-medium mb-2">StartupXYZ • 2020 - 2022</p>
                    <p className="text-gray-700">
                      Built and maintained multiple web applications from concept to deployment. 
                      Collaborated with cross-functional teams to deliver high-quality products 
                      on time and within budget.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-4 h-4 bg-primary-600 rounded-full mt-2"></div>
                <div className="flex-1">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Frontend Developer
                    </h3>
                    <p className="text-primary-600 font-medium mb-2">Digital Agency • 2019 - 2020</p>
                    <p className="text-gray-700">
                      Developed responsive web interfaces and user experiences for various 
                      clients. Focused on modern JavaScript frameworks and accessibility standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Let's Connect
          </h2>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-gray-100 hover:bg-primary-100 rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600 transition-all duration-200 hover:scale-110 transform"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default About;
