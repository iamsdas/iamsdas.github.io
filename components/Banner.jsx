import React from 'react';
import Typical from 'react-typical';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGitlab } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Banner = () => {
  const contactInfo = [
    { name: 'github', url: 'https://github.com/iamsdas', icon: faGithub },
    { name: 'gitlab', url: 'https://gitlab.gnome.org/iamsdas', icon: faGitlab },
    {
      name: 'email',
      url: 'mailto:suryashankardas.2002@gmail.com',
      icon: faEnvelope,
    },
    {
      name: 'linkedin',
      url: 'https://linkedin.com/in/iamsdas',
      icon: faLinkedinIn,
    },
    { name: 'twitter', url: 'https://twitter.com/_iamsdas', icon: faTwitter },
  ];
  return (
    <section
      className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900
      font-medium uppercase text-gray-50 text-center sm:text-left'>
      <div
        className='min-h-screen flex flex-col-reverse justify-center items-center px-5'>
        <div>
          <div className='text-5xl lg:text-6xl'>Hey there !!</div>
          <div className='sm:text-6xl text-5xl lg:text-7xl'>
            I am{' '}
            <span className='font-bold text-yellow-300'>Suryashankar Das</span>,
          </div>
          <div className='text-5xl lg:text-6xl'>A Student Developer</div>
          <div className='text-3xl lg:text-4xl pt-8 font-thin font-mono text-gray-300'>
            Interested in
            <Typical
              steps={[
                'Web Development',
                1200,
                'Blockchain',
                1200,
                'Deep Learning',
                1200,
                'App Development',
                1200,
              ]}
              loop={Infinity}
            />
          </div>
          <div className='flex sm:justify-start items-center gap-6 sm:gap-8 justify-center pt-12 text-4xl pb-2'>
            {contactInfo.map(({ name, url, icon }, index) => (
              <a href={url} aria-label={name} key={index}>
                <FontAwesomeIcon
                  icon={icon}
                  className='hover:text-yellow-300 w-9 h-9'
                  aria-hidden='true'
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
