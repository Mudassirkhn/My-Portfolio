import React from 'react'
import backend from '../assets/backend.png'
import Fronted from '../assets/Fronted.png'
import debug from '../assets/debug.png'
import fullstack from '../assets/FullStack.png'
import Hosting from '../assets/Hosting.png'

const Services = () => {
    return (
        <div className="bg-black min-h-screen py-24 px-4" id="services">
            {/* Heading Section */}
            <p className="text-white text-center text-sm sm:text-base">What I offer</p>
            <h1 className="text-white font-semibold text-2xl sm:text-4xl text-center mt-2">My Services</h1>

            {/* Description Paragraph */}
            <p className="text-white text-center leading-7 mt-6 max-w-4xl mx-auto text-sm sm:text-base">
                I am a professional MERN Stack developer. I offer comprehensive web development services
                leveraging the power of MongoDB, Express.js, React.js, and Node.js. I create dynamic, responsive,
                and high-performance web applications tailored to your business needs. Whether you require a custom
                web application, SPA, or API integration, I ensure a seamless and efficient development process.
            </p>

            {/* Cards Container */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
                {[
                    { icon: Fronted, title: 'Front End Web Development' },
                    { icon: backend, title: 'Backend Web Development' },
                    { icon: Hosting, title: 'Websites Hosting & Setup' },
                    { icon: fullstack, title: 'Debugging & Error Solve' },
                    { icon: debug, title: 'Full Stack Web Development' },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="border border-white text-white rounded-xl p-6 w-full sm:w-[45%] md:w-[30%] lg:w-[20%] min-h-[300px] flex flex-col items-start transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-pink-400"
                    >
                        <div className="rounded-xl bg-pink-500 p-2 mb-4">
                            <img src={item.icon} alt="service-icon" className="w-6" />
                        </div>
                        <h1 className="font-semibold text-lg">{item.title}</h1>
                        <p className="text-sm mt-3">
                            Expert full stack web development services, from front-end design to back-end.
                        </p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Services
