import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

import resume from '../../../public/Shajid Resume.pdf'
// icon
// import {Fagithub} from 'react-icons/fa';
// // animation
// import {TypeAnimation} from 'react-type-animation';

// import{motion} from 'framer-motion';

// import {fadeIn} from 

const Banner = () => {
    return (
        <section className='pt-20' >
            <div className='container sm:mx-5 p-5 mx-auto  lg:flex justify-center gap-10 mt-5 mb-5'>
                <div className='lg:w-1/2 sm:flex sm:flex-col sm:justify-center'>
                    <h1 className='text-3xl font-bold'>
                        MD <span className='text-pink-700'>SHAJID</span> HASAN
                    </h1>
                    <div className='text-2xl font-semibold'>
                        <span className='mr-2'>I am a</span>
                        <TypeAnimation sequence={[
                            'Front-End',
                            2000,
                            'Developer',
                            2000,

                        ]}
                            speed={50}
                            className='text-accent'
                            wrapper='span'
                            repeat={Infinity}
                        />
                    </div>
                    <p className='text-xl text-purple-800 mt-3'>As a beginner front-end developer, I'm eager to improve my skills in HTML, CSS, and JavaScript to create engaging user interfaces.</p>
                    <div className='flex gap-6 justify-start items-center mt-5'>
                        <button className='btn btn-lg'>Contact me</button>

                        <a href={resume} download={'https://drive.google.com/file/d/1-1iI29cbH_UdlVpUyPYBtu1DNVQqRgsz/view?usp=drive_link'} className='text-gradient bg-black p-5 rounded-lg btn-link' > My Resume</a>
                    </div>
                    {/* social */}

                    <div className='flex gap-4 mt-12 items-center mb-5 text-3xl justify-center'>
                        <a href="https://www.facebook.com/mdshajid.hasan.92?mibextid=LQQJ4d"><FaFacebook className='text-blue-800'></FaFacebook></a>
                        <a href="https://github.com/shajid444"><FaGithub className='text-white'></FaGithub></a>
                        <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmd-shajid-hasan-8a824030b%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dios_app%26fbclid%3DIwZXh0bgNhZW0CMTAAAR1769mfAK-1R5xLZ-fS0dimWhBh5tHAMOWCN1gZVLkQlILAyXN9PzpUsMM_aem_W4bXJaU0RFAHHRKxBE8W2A&h=AT1jL4p2vXOx84X1R9YIzZkXziw89PNkWS409iY2nbfjWLLSZhUhwkxR5wU-DfQkb-LlOQAz_y-J5JEG1S4DmAJxYqgvdq0aH9Qx2YDDsqPaZxqZUGuqi2vTKKpFLq3lTx-Xow"><FaLinkedin className='text-blue-950' ></FaLinkedin></a>

                    </div>
                </div>
                <div className='rounded-3xl  flex justify-center'><img className=' rounded-3xl object-cover ' src="https://i.ibb.co/p1L8GdC/Black-Gold-Dynamic-Business-Circle-Profile-Image.png" alt="" /></div>
            </div>


        </section>
    );
};

export default Banner;