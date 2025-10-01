import React, { useState } from 'react';
import SEO from '../components/SEO';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));

      // In a real application, you would send the data to your backend
      console.log('Form submitted:', formData);

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
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
      url: 'https://www.carlbowen.me',
      icon: (
        <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' />
        </svg>
      ),
    },
  ];

  if (isSubmitted) {
    return (
      <div className='pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50'>
        <div className='container-max text-center'>
          <div className='max-w-md mx-auto'>
            <div className='w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center'>
              <svg
                className='w-10 h-10 text-green-600'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M5 13l4 4L19 7'
                />
              </svg>
            </div>
            <h1 className='text-3xl font-bold text-gray-900 mb-4'>
              Message Sent!
            </h1>
            <p className='text-lg text-gray-600 mb-8'>
              Thank you for reaching out. I'll get back to you as soon as
              possible.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className='btn-primary'
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title='Contact Carl Bowen - Full-Stack Developer'
        description='Get in touch with Carl Bowen for web development projects, freelance opportunities, or collaboration. Contact form available with quick response time.'
        keywords='Contact Carl Bowen, Hire Developer, Web Development Services, Freelance Developer, React Developer Contact'
        url='https://carlbowen.dev/contact'
      />
      <div className='pt-16'>
        {/* Hero Section */}
        <section className='section-padding bg-gradient-to-br from-primary-50 to-secondary-50'>
          <div className='container-max text-center'>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
              Get In Touch
            </h1>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Have a project in mind or just want to chat? I'd love to hear from
              you. Send me a message and I'll respond as soon as possible.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className='section-padding bg-white'>
          <div className='container-max'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
              {/* Contact Form */}
              <div>
                <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                  Send me a message
                </h2>

                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Name *
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder='Your full name'
                    />
                    {errors.name && (
                      <p className='mt-1 text-sm text-red-600'>{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Email *
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder='your.email@example.com'
                    />
                    {errors.email && (
                      <p className='mt-1 text-sm text-red-600'>
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor='message'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Message *
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder='Tell me about your project or just say hello...'
                    />
                    {errors.message && (
                      <p className='mt-1 text-sm text-red-600'>
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-primary-600 hover:bg-primary-700 hover:scale-105 transform'
                    } text-white`}
                  >
                    {isSubmitting ? (
                      <div className='flex items-center justify-center'>
                        <svg
                          className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                        >
                          <circle
                            className='opacity-25'
                            cx='12'
                            cy='12'
                            r='10'
                            stroke='currentColor'
                            strokeWidth='4'
                          ></circle>
                          <path
                            className='opacity-75'
                            fill='currentColor'
                            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                          ></path>
                        </svg>
                        Sending...
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                  Let's connect
                </h2>

                <div className='space-y-8'>
                  <div>
                    <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                      Contact Information
                    </h3>
                    <div className='space-y-4'>
                      <div className='flex items-center space-x-3'>
                        <div className='w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center'>
                          <svg
                            className='w-5 h-5 text-primary-600'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                            />
                          </svg>
                        </div>
                        <div>
                          <p className='font-medium text-gray-900'>Email</p>
                          <p className='text-gray-600'>
                            Bowen.Enquiries@gmail.com
                          </p>
                        </div>
                      </div>

                      <div className='flex items-center space-x-3'>
                        <div className='w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center'>
                          <svg
                            className='w-5 h-5 text-primary-600'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                            />
                          </svg>
                        </div>
                        <div>
                          <p className='font-medium text-gray-900'>Phone</p>
                          <p className='text-gray-600'>078 4224 0049</p>
                        </div>
                      </div>

                      <div className='flex items-center space-x-3'>
                        <div className='w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center'>
                          <svg
                            className='w-5 h-5 text-primary-600'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                            />
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                            />
                          </svg>
                        </div>
                        <div>
                          <p className='font-medium text-gray-900'>Location</p>
                          <p className='text-gray-600'>Nottingham, UK</p>
                        </div>
                      </div>

                      <div className='flex items-center space-x-3'>
                        <div className='w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center'>
                          <svg
                            className='w-5 h-5 text-primary-600'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                            />
                          </svg>
                        </div>
                        <div>
                          <p className='font-medium text-gray-900'>
                            Response Time
                          </p>
                          <p className='text-gray-600'>
                            Usually within 24 hours
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                      Follow me
                    </h3>
                    <div className='flex space-x-4'>
                      {socialLinks.map(social => (
                        <a
                          key={social.name}
                          href={social.url}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='w-12 h-12 bg-gray-100 hover:bg-primary-100 rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600 transition-all duration-200 hover:scale-110 transform'
                          aria-label={social.name}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className='bg-gray-50 rounded-lg p-6'>
                    <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                      What I'm looking for
                    </h3>
                    <ul className='space-y-2 text-gray-600'>
                      <li className='flex items-center'>
                        <svg
                          className='w-4 h-4 text-green-500 mr-2'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path
                            fillRule='evenodd'
                            d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                            clipRule='evenodd'
                          />
                        </svg>
                        Full-time opportunities
                      </li>
                      <li className='flex items-center'>
                        <svg
                          className='w-4 h-4 text-green-500 mr-2'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path
                            fillRule='evenodd'
                            d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                            clipRule='evenodd'
                          />
                        </svg>
                        Freelance projects
                      </li>
                      <li className='flex items-center'>
                        <svg
                          className='w-4 h-4 text-green-500 mr-2'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path
                            fillRule='evenodd'
                            d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                            clipRule='evenodd'
                          />
                        </svg>
                        Open source contributions
                      </li>
                      <li className='flex items-center'>
                        <svg
                          className='w-4 h-4 text-green-500 mr-2'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path
                            fillRule='evenodd'
                            d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                            clipRule='evenodd'
                          />
                        </svg>
                        Mentoring opportunities
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
