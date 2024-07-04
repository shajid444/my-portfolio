
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Projects = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);
    return (
        <section id="projects" className="my-8 p-10">
            <h2 className="text-3xl font-bold mb-4 text-black text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* 1 */}
                <div data-aos="fade-left" className="card card-compact w-96 bg-purple-900 bg-opacity-80 hover:bg-lime-800 p-4 rounded-xl shadow-2xl ">
                    <figure>
                        <img
                            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8fDB8fHww"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h3 className="text-xl font-bold text-black mb-2">Project 1</h3>
                        <p>
                        "Effortlessly manage your events with our smart ticketing website. Streamline ticket sales, simplify check-ins, and enhance attendee experiences with real-time analytics. Discover the future of event management with our intuitive, secure, and user-friendly platform.


                        </p>
                        <div className='flex'>
                            <a href="https://shajid444.github.io/smart-ticketing/" className="text-blue-500 hover:underline">Live Link</a>
                            <Link to="https://github.com/shajid444/smart-ticketing.git" className="text-blue-500 hover:underline ml-4">GitHub</Link>
                        </div>

                    </div>
                </div>



                {/* ------------2-------------- */}
                <div data-aos="fade-down" className="card card-compact w-96 bg-purple-900 bg-opacity-80 hover:bg-lime-800 p-4 rounded-xl shadow-2xl ">
                    <figure>
                        <img
                            src="https://images.unsplash.com/photo-1528719953625-3e95efad84da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyYXZlbCUyMGd1aWRlfGVufDB8fDB8fHww"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h3 className="text-xl font-bold text-black mb-2">Project 2</h3>
                        <p>Welcome to the Southeast Asia Travel Guide, your ultimate companion for discovering the enchanting beauty and rich culture of Southeast Asia. Whether you're a seasoned explorer or planning your first adventure, our website is here to guide you through the wonders of this diverse region.</p>
                        <div className='flex'>
                            <a href="https://tourists-place.web.app/" className="text-blue-500 hover:underline">Live Link</a>
                            <Link to="https://github.com/shajid444/tourist-spot-10-client.git" className="text-blue-500 hover:underline ml-4">GitHub</Link>
                        </div>

                    </div>
                </div>

                {/* ----3----------- */}

                <div data-aos="fade-right" className="card card-compact w-96 bg-purple-900 bg-opacity-80 hover:bg-lime-800 p-4 rounded-xl shadow-2xl ">
                    <figure>
                        <img
                            src="https://images.unsplash.com/photo-1676364423907-8d8ccd4e486f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1lZGljaW5lJTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D"
                            alt="Medicine" />
                    </figure>
                    <div className="card-body">
                        <h3 className="text-xl font-bold text-black mb-2">Project 3</h3>
                        <p>MediMart is a multi-vendor e-commerce platform for buying and selling medicines and healthcare products, offering user authentication, product management, order processing, and responsive design using the MERN stack and Stripe for secure payments.</p>
                        <div className='flex'>
                            <a href="https://assignment-000-c4847.web.app/" className="text-blue-500 hover:underline">Live Link</a>
                            <Link to="https://github.com/shajid444/medi-mart-client.git" className="text-blue-500 hover:underline ml-4">GitHub</Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
