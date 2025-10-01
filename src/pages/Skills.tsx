import React from 'react';
import SEO from '../components/SEO';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon?: string;
}

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 95, category: 'frontend' },
        { name: 'TypeScript', level: 90, category: 'frontend' },
        { name: 'JavaScript', level: 95, category: 'frontend' },
        { name: 'HTML/CSS', level: 98, category: 'frontend' },
        { name: 'TailwindCSS', level: 92, category: 'frontend' },
        { name: 'Next.js', level: 88, category: 'frontend' },
        { name: 'Vue.js', level: 85, category: 'frontend' },
        { name: 'SASS/SCSS', level: 90, category: 'frontend' }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 90, category: 'backend' },
        { name: 'Python', level: 85, category: 'backend' },
        { name: 'Express.js', level: 92, category: 'backend' },
        { name: 'FastAPI', level: 80, category: 'backend' },
        { name: 'REST APIs', level: 95, category: 'backend' },
        { name: 'GraphQL', level: 75, category: 'backend' },
        { name: 'Microservices', level: 70, category: 'backend' }
      ]
    },
    {
      title: 'Database & Cloud',
      skills: [
        { name: 'PostgreSQL', level: 88, category: 'database' },
        { name: 'MongoDB', level: 85, category: 'database' },
        { name: 'Redis', level: 80, category: 'database' },
        { name: 'AWS', level: 75, category: 'cloud' },
        { name: 'Docker', level: 85, category: 'cloud' },
        { name: 'Kubernetes', level: 70, category: 'cloud' },
        { name: 'CI/CD', level: 80, category: 'cloud' }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 95, category: 'tools' },
        { name: 'Figma', level: 85, category: 'tools' },
        { name: 'Adobe XD', level: 80, category: 'tools' },
        { name: 'Jest', level: 88, category: 'tools' },
        { name: 'Webpack', level: 75, category: 'tools' },
        { name: 'Linux', level: 85, category: 'tools' },
        { name: 'Agile/Scrum', level: 90, category: 'tools' }
      ]
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'frontend':
        return 'from-blue-400 to-blue-600';
      case 'backend':
        return 'from-green-400 to-green-600';
      case 'database':
        return 'from-purple-400 to-purple-600';
      case 'cloud':
        return 'from-orange-400 to-orange-600';
      case 'tools':
        return 'from-pink-400 to-pink-600';
      default:
        return 'from-gray-400 to-gray-600';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'frontend':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case 'backend':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
          </svg>
        );
      case 'database':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
          </svg>
        );
      case 'cloud':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        );
      case 'tools':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <SEO 
        title="Skills & Expertise - Carl Bowen"
        description="Comprehensive overview of Carl Bowen's technical skills including React, TypeScript, Node.js, Python, AWS, and more. Full-stack developer with expertise in modern web technologies."
        keywords="Carl Bowen Skills, Technical Skills, React Developer Skills, TypeScript Skills, Node.js Skills, Full-Stack Developer Skills"
        url="https://carlbowen.dev/skills"
      />
      <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skills & Expertise
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise 
            across different technologies and domains.
          </p>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.title}>
                <div className="flex items-center mb-8">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${getCategoryColor(category.skills[0].category)} flex items-center justify-center text-white mr-4`}>
                    {getCategoryIcon(category.skills[0].category)}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="card p-6">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {skill.name}
                        </h3>
                        <span className="text-sm font-medium text-primary-600">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full bg-gradient-to-r ${getCategoryColor(skill.category)} transition-all duration-1000 ease-out`}
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Skills */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Skills
            </h2>
            <p className="text-lg text-gray-600">
              Other technologies and methodologies I work with
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Responsive Design', 'Mobile Development', 'PWA', 'SEO Optimization',
              'Performance Optimization', 'Security Best Practices', 'Code Review',
              'Technical Writing', 'Mentoring', 'Project Management', 'UI/UX Design',
              'User Research', 'A/B Testing', 'Analytics', 'Monitoring', 'Testing',
              'Documentation', 'Version Control', 'Code Quality', 'Refactoring',
              'Architecture Design', 'System Design', 'API Design', 'Database Design'
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-200"
              >
                <span className="text-sm font-medium text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Journey */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Continuous Learning
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Technology evolves rapidly, and I'm committed to staying current with 
              the latest trends and best practices in software development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Online Courses</h3>
              <p className="text-gray-600">
                Regularly taking courses on platforms like Udemy, Coursera, and Pluralsight
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Certifications</h3>
              <p className="text-gray-600">
                AWS Certified Developer, Google Cloud Professional, and more
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600">
                Active in developer communities, contributing to open source projects
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Skills;
