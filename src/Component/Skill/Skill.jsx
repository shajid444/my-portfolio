

import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaNodeJs } from 'react-icons/fa';

import './Skills.css';

const Skill = () => {
  return (
    <section id="skills" className="my-8 mx-10 p-8">
      <h2 className="text-3xl text-black text-center font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <div className="skill-item flex items-center space-x-2 p-4 justify-center rounded shadow-2xl">
          <FaHtml5 className="text-3xl text-orange-600 skill-icon" />
          <span className='text-black'>HTML5</span>
        </div>
        <div className="skill-item flex items-center space-x-2 p-4justify-center rounded shadow-2xl">
          <FaCss3Alt className="text-3xl text-blue-600 skill-icon" />
          <span className='text-black'>CSS3</span>
        </div>
        <div className="skill-item flex items-center space-x-2 p-4 justify-center rounded shadow-2xl">
          <FaJs className="text-3xl text-yellow-600 skill-icon" />
          <span className='text-black'>JavaScript</span>
        </div>
        <div className="skill-item flex items-center space-x-2 p-4 justify-center rounded shadow-2xl">
          <FaReact className="text-3xl text-blue-500 skill-icon" />
          <span className='text-black'>React JS</span>
        </div>
        <div className="skill-item flex items-center space-x-2 p-4 justify-center rounded shadow-2xl">
          <FaGithub className="text-3xl text-gray-800 skill-icon" />
          <span className='text-black'>GitHub</span>
        </div>
        <div className="skill-item flex items-center space-x-2 p-4 justify-center rounded shadow-2xl">
          <FaNodeJs className="text-3xl text-green-500 skill-icon" />
          <span className='text-black'>Node.js</span>
        </div>
        
      </div>
    </section>
  );
};

export default Skill;
