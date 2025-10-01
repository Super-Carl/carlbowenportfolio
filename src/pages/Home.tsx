import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <>
      <SEO 
        title="Carl Bowen - Full-Stack Developer & UI/UX Enthusiast"
        description="Professional portfolio of Carl Bowen, a full-stack developer specializing in React, TypeScript, Node.js, and modern web technologies. Available for remote work and new opportunities."
        keywords="Carl Bowen, Full-Stack Developer, React Developer, TypeScript, Node.js, Web Developer, Frontend Developer, Backend Developer, UI/UX Designer, Portfolio"
        url="https://carlbowen.dev"
      />
      <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-max text-center">
          <div className="max-w-4xl mx-auto">
            {/* Profile Photo */}
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                CB
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Hi, I'm{' '}
              <span className="text-primary-600">Carl Bowen</span>
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-slide-up">
              Full-Stack Developer & UI/UX Enthusiast
            </p>

            {/* Description */}
            <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up">
              I create beautiful, functional, and user-centered digital experiences. 
              Passionate about clean code, modern design, and innovative solutions 
              that make a difference.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link
                to="/projects"
                className="btn-primary text-lg px-8 py-3 rounded-lg hover:scale-105 transform transition-all duration-200"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="btn-secondary text-lg px-8 py-3 rounded-lg hover:scale-105 transform transition-all duration-200"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="card p-8">
              <div className="text-4xl font-bold text-primary-600 mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="card p-8">
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="card p-8">
              <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Skills Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What I Do
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I specialize in creating modern web applications with a focus on 
              user experience and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center hover:scale-105 transform transition-all duration-200">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Frontend Development</h3>
              <p className="text-gray-600 text-sm">React, TypeScript, TailwindCSS</p>
            </div>

            <div className="card p-6 text-center hover:scale-105 transform transition-all duration-200">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Backend Development</h3>
              <p className="text-gray-600 text-sm">Node.js, Python, PostgreSQL</p>
            </div>

            <div className="card p-6 text-center hover:scale-105 transform transition-all duration-200">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">UI/UX Design</h3>
              <p className="text-gray-600 text-sm">Figma, Adobe XD, User Research</p>
            </div>

            <div className="card p-6 text-center hover:scale-105 transform transition-all duration-200">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">DevOps</h3>
              <p className="text-gray-600 text-sm">AWS, Docker, CI/CD</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
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
