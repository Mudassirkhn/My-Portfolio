import React from 'react'
import Photo from '../assets/photo2.png'
import { BiCodeAlt } from 'react-icons/bi';
import { FaGraduationCap } from 'react-icons/fa';
import { MdWork } from 'react-icons/md'
import Html from '../assets/codinght.png'
import Css from '../assets/css.png'
import JavaScript from '../assets/js.png'
import Express from '../assets/expressjs.png'
import Mongo from '../assets/mongoose.png'
import tailwand from '../assets/tailwand.png'
import Vscode from '../assets/vscode.png'
import Node from '../assets/nodejs.png'

export const About = () => {
    return (
        <div className="bg-black h-full py-14 space-y-4 px-4" id="about">
            {/* Heading */}
            <p className="text-white text-center text-sm sm:text-base">Introduction</p>
            <h1 className="font-semibold text-3xl sm:text-4xl text-white text-center">About me</h1>

            {/* Main Flex Container */}
            <div className="flex flex-col lg:flex-row gap-1 px-6 py-6 w-full max-w-7xl mx-auto items-start">

                {/* Image Section (hidden on small devices) */}
                <div className="hidden py-3 lg:flex justify-center lg:w-1/2">
                    <img
                        src={Photo}
                        alt="photo"
                        className="rounded-xl w-[420px] h-[500px] object-cover shadow-xl hover:scale-105 transition-all duration-300"
                    />
                </div>

                {/* Text and Cards Section */}
                <div className="text-white w-full lg:w-1/2 space-y-6">

                    {/* Introduction Paragraph */}
                    <p className="font-sans text-base sm:text-lg leading-7 text-center lg:text-left">
                        As a MERN Stack Web Developer, I specialize in building dynamic, responsive
                        web applications using the MERN stack, which comprises MongoDB, Express.js,
                        React.js, and Node.js. My expertise lies in creating robust back-end services
                        and seamless front-end interfaces, ensuring a cohesive user experience.
                    </p>

                    {/* Cards Section */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                        {/* Card 1 */}
                        <div className="w-full sm:w-[45%] md:w-[30%] rounded border border-white p-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-200">
                            <BiCodeAlt size={28} />
                            <h1 className="font-semibold text-xl mt-2">Languages</h1>
                            <p className="mt-4 text-sm">JavaScript, Node.js, React.js, CSS, HTML, Express.js, etc.</p>
                        </div>

                        {/* Card 2 */}
                        <div className="w-full sm:w-[45%] md:w-[30%] rounded border border-white p-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-200">
                            <FaGraduationCap size={28} />
                            <h1 className="font-semibold text-xl mt-2">Education</h1>
                            <p className="mt-4 text-sm">MCA, Master of Computer Applications, Integral University Lucknow</p>
                        </div>

                        {/* Card 3 */}
                        <div className="w-full sm:w-[45%] md:w-[30%] rounded border border-white p-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-200">
                            <MdWork size={28} />
                            <h1 className="font-semibold text-xl mt-2">Projects</h1>
                            <p className="mt-4 text-sm">Websites, Web Applications, and more.</p>
                        </div>
                    </div>

                    {/* Work On Section */}
                    <h1 className="text-2xl sm:text-3xl font-semibold text-center lg:text-left">Work on</h1>

                    {/* Technologies Grid */}
                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                        {[Html, Css, JavaScript, Express, Mongo, tailwand, Vscode, Node].map((tech, index) => (
                            <div key={index} className="border rounded p-2 transition-transform duration-300 hover:-translate-y-2 hover:shadow-md hover:shadow-pink-200">
                                <img src={tech} alt="tech-icon" className="w-[30px] sm:w-[35px]" />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

