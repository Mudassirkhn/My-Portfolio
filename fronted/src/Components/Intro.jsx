import React from 'react';
import Photo from '../assets/photo2.png';
import { FaDownload } from 'react-icons/fa';

const Intro = () => {
    return (
         <div className="bg-black min-h-screen flex items-center text-white px-4 py-10 mt-18">
            <div className="text-center w-full max-w-6xl mx-auto flex flex-col items-center" id='home'>

                {/* Profile Image */}
                <img
                    src={Photo}
                    alt="Photo"
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover shadow-lg"
                />

                {/* Name */}
                <p className="font-sans text-xl sm:text-2xl font-bold mt-4">
                    Hi! I'm Mudassir Khan
                </p>

                {/* Title and Description */}
                <div className="w-full px-4 sm:px-0 sm:w-[80%] md:w-[70%] lg:w-[60%] mt-6 space-y-6">

                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight font-poppins">
                        MERN Stack Web Developer
                    </h1>

                    {/* Paragraph */}
                    <p className="text-sm sm:text-base font-sans leading-7">
                        As a skilled MERN stack web developer, I leverage the power of
                        MongoDB, Express, React.js, and Node.js to craft scalable, efficient,
                        and visually stunning web applications. With a passion for innovative
                        solutions, I bring ideas to life through clean code, intuitive design,
                        and seamless user experiences. Let's collaborate to build something
                        amazing together!
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
                        <a
                            href="#contact"
                            className="px-7 py-2 border rounded-2xl bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-all duration-300 shadow-md"
                        >
                            Hire Me
                        </a>

                        <a
                            href="/resume2.pdf"
                            download
                            className="px-7 py-2 border rounded-2xl bg-white text-black font-semibold flex items-center gap-2 hover:scale-105 hover:shadow-lg transition-all duration-300"
                        >
                            <p>My Resume</p>
                            <FaDownload size={18} />
                        </a>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Intro;
