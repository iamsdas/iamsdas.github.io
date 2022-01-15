import React from 'react';
import Image from 'next/image';

const projects = ({ projects }) => (
  <section className='bg-neutral-900 text-neutral-300 px-4 sm:px-8 md:px-16'>
    <div className='pt-24 pb-8 font-para text-xl text-center sm:w-3/5 md:w-5/6 lg:w-3/5 mx-auto'>
      This is a showcase of some of my projects. Click an image to get further
      details about the project.
    </div>
    <div className='space-y-8 pb-8 flex flex-col justify-around items-center'>
      {projects.map(({ name, description, stack, image, url, rgb }, index) => (
        <div
          className='bg-neutral-800 flex flex-col md:flex-row items-stretch justify-center w-full sm:w-3/5 md:w-5/6 lg:w-3/5 transition ease-in-out sm:hover:-translate-y-1 sm:hover:scale-105 rounded-2xl shadow-sm sm:hover:shadow-2xl'
          key={index}>
          <a
            href={url}
            className='w-full md:w-2/5 flex justify-center items-center p-2 bg-neutral-700 rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl'>
            <div className='filter w-full hover:blur'>
              <div className='aspect-square relative flex-1'>
                <Image
                  src={`/images/projects/${image}.webp`}
                  alt={name}
                  layout='fill'
                  objectFit='scale-down'
                  placeholder='blur'
                  unoptimized={true}
                  blurDataURL={rgbDataURL(...rgb)}
                />
              </div>
            </div>
          </a>
          <div className='space-y-6 w-full md:w-3/5 p-4 self-center leading-snug'>
            <h1 className='text-2xl font-bold text-neutral-100 group-hover:text-neutral-50'>
              {name}
            </h1>
            <p className='text-md font-para text-neutral-50'>{description}</p>
            <p className='text-amber-300 text-md'>{stack}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const rgbDataURL = (r, g, b) => {
  const keyStr =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

  const triplet = (e1, e2, e3) =>
    keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63);

  return `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;
};

export const getStaticProps = async () => {
  const projects = [
    {
      name: 'Martial Arts Simulator',
      description: `This is a simple martial arts simulator built using HTML Canvas`,
      stack: 'HTML, CSS, Javascript',
      url: 'https://fightsim.pages.dev/',
      image: 'martial',
      rgb: [255, 255, 255],
    },
    {
      name: 'Todo Lists',
      description: `This is a simple todo lists web app made using Next.js. The backend
      serves GraphQL via Next.js API routes (serverless functions) using Apollo server.
      It uses NextAuth for OAuth based passwordless authentication`,
      stack: 'Next.js, Apollo, Prisma, Postgres, Graphql, NextAuth',
      url: 'https://todo-lists.vercel.app/',
      image: 'todo',
      rgb: [31, 41, 56],
    },
    {
      name: 'Plane Rush',
      description: `This is a NFT(blockchain) based game and marketplace,
      built initially by me and my team during the Chainlink Fall hackathon.`,
      stack:
        'IPFS, Chainlink, Polygon, Openzepplin, Filecoin, React.js, Phaser3',
      url: 'https://devpost.com/software/plane-rush',
      image: 'plane',
      rgb: [215, 228, 225],
    },
    {
      name: 'Collaborative Whiteboard',
      description: `This is a personal project in which I made a simple collaborative
      drawing whiteboard web app using Vue.js and Socket.io in which users can enter
      a unique room code and collaborate with each others.`,
      stack: 'Vue.js, Node.js, Socket.io',
      url: 'https://github.com/iamsdas/whiteboard',
      image: 'whiteboard',
      rgb: [255, 255, 255],
    },
    {
      name: 'Decentraskill',
      description: `This is a group project in which we have made a
      blockchain based based skill verification system`,
      stack: 'React.js, Solidity',
      url: 'https://github.com/iamsdas/Decentraskill/',
      image: 'decentraskill',
      rgb: [198, 196, 176],
    },
    {
      name: 'Text Compression',
      description: `This is a class project in which I made an interactive CLI utility
      for lossless text compression using an optimized LZW algorithm in C++.`,
      stack: 'C++, LZW',
      url: 'https://github.com/iamsdas/Text-Compression',
      image: 'txtcomp',
      rgb: [30, 30, 30],
    },
    {
      name: 'Xmeme',
      description: `This is a full stack project I built while I was initially
      exploring REST APIs. It has a Vue.js frontend which shows a list of memes
      served from a Flask backend with an option to add, delete and modify them.
      The backend also exposes the API documentation using Swagger-UI.`,
      stack: 'Flask, Vue.js, Bootstrap, Docker, Swagger-UI',
      url: 'https://github.com/iamsdas/xmeme-backend',
      image: 'xmeme',
      rgb: [255, 255, 255],
    },
    {
      name: 'Gesture Calculator',
      description: `This is a personal project in which I built a calculator
      applicaiton using Flutter which takes in input via touch based gestures
      which are classified into standard standard numericals and arithmetic
      symbols using TensorFlow (CNNs)`,
      stack: 'Flutter, TensorFlow, TFlite',
      url: 'https://github.com/iamsdas/Flutter-Gesture-Calculator',
      image: 'calculator',
      rgb: [255, 255, 255],
    },
    {
      name: 'Apoyo',
      description: `This is a project built during my first hackathon. In this
      project we built a Flutter app that gives suggestions to improve the mental
      health based on the user's mood. It uses Firebase for backend storage and
      for authentication.`,
      stack: 'Flutter, Firebase',
      url: 'https://devpost.com/software/apoyo-gxj0fe',
      image: 'apoyo',
      rgb: [255, 255, 255],
    },
    {
      name: 'Static Pastebin Clone',
      description: `This is a personal project in which I have made a static
      pastebin clone using simple HTML, CSS and JavaScript. It encodes and
      saves the user provided string in the URL which is then shareable. It
      also provides some minimal syntax highlighting using Prism.js`,
      stack: 'HTML, CSS, Prism.js, ULZSS',
      url: 'https://iamsdas.github.io/paste',
      image: 'pastebin',
      rgb: [40, 41, 34],
    },
  ];

  return {
    props: {
      projects,
    },
  };
};

export default projects;
