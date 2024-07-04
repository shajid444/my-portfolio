import React, { useEffect } from 'react';
import { FaUniversity, FaSchool, FaGraduationCap } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <section id="education" className="p-10 mx-10 my-8">
            <h2 className="text-3xl font-bold text-center text-black mb-4">Educational Qualifications</h2>
            <div className=" p-4 rounded shadow">
                <div data-aos="fade-up" className="mb-4 flex items-center space-x-4">
                    <FaGraduationCap className="text-4xl text-blue-600" />
                    <div>
                        <h3 className="text-xl text-black font-bold">Bachelor of Science in Computer Science & Engineering</h3>
                        <p className="text-gray-600 ">North South University</p>
                        <p className="text-gray-600">2022 - Present</p>
                    </div>
                </div>
                <div data-aos="fade-up" className="mb-4 flex items-center space-x-4">
                    <FaUniversity className="text-4xl text-green-600" />
                    <div>
                        <h3 className="text-xl text-black font-bold">Higher Secondary Certificate (HSC)</h3>
                        <p className="text-gray-600">Bakolia Gvt college</p>
                        <p className="text-gray-600">2018 - 2020</p>
                    </div>
                </div>
                <div data-aos="fade-up" className="mb-4 flex items-center space-x-4">
                    <FaSchool className="text-4xl text-orange-600" />
                    <div>
                        <h3 className="text-xl text-black font-bold">Secondary School Certificate (SSC)</h3>
                        <p className="text-gray-600">Sonargaong High School</p>
                        <p className="text-gray-600">2016 - 2018</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
