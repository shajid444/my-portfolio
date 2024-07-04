
import './About.css'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import myPhoto from './path/to/your/photo.jpg'; 

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    return (
        <section id="about" className="mt-16 p-10">
            <h2 className="text-3xl font-bold mb-10 mt-5 text-center text-black">About Me</h2>
            <div className=" p-6 rounded shadow-lg flex flex-col md:flex-row items-center">
                <img src='https://i.ibb.co/8xmx0Lh/Holud-212.jpg' alt="My Photo" className="w-80 h-80 rounded-full mb-4 md:mb-0 md:mr-6" data-aos="fade-right" />
                <div data-aos="fade-left">
                    <p className="text-gray-700 mb-6">
                        Hello! I'm a dedicated third-year Computer Science and Engineering student at North South University. My journey into the tech world has been both exciting and enriching, with a particular passion for web development.
                    </p>
                    <p className="text-gray-700 mb-6">
                        Throughout my studies, I've honed my skills in front-end development, enjoying the creative process of bringing designs to life and crafting seamless user experiences. I thrive on the challenges and continuous learning that web development offers, and I am always eager to explore new technologies and methodologies.
                    </p>
                    <p className="text-gray-700">
                        In addition to my academic pursuits, I am committed to applying my knowledge practically, constantly seeking opportunities to grow and contribute to innovative projects. Let's create something amazing together.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
