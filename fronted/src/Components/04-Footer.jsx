import React from 'react'
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (

        <div className="flex flex-col items-center justify-center text-white bg-black w-full py-5 px-4" id="footer">
            {/* Name and Email */}
            <h1 className="font-semibold font-poppins leading-tight text-2xl sm:text-4xl text-center">
                Mudassir Khan
                <span className="text-pink-700 font-extrabold"> </span>
            </h1>

            <p className="flex items-center justify-center gap-2 py-4 text-sm sm:text-base">
                <MdEmail size={22} />
                <a
                    href="mailto:mmkhan213@gmail.com"
                    className="font-mono border-b-2 border-transparent hover:border-white transition-all duration-200"
                >
                    mmkhan213@gmail.com
                </a>
            </p>

            {/* Divider Line */}
            <div className="border-t border-gray-500 w-full max-w-5xl my-6"></div>

            {/* Bottom Copyright and Links */}
            <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-5xl text-center text-sm sm:text-[14px] space-y-4 sm:space-y-0">

                {/* Left Text */}
                <h2>©2025 Mudassir Web Developer. All rights reserved</h2>

                {/* Social Links */}
                <div className="flex space-x-6">
                    <a href="https://www.linkedin.com/in/mudassir-khan-0a91862b7/" target="_blank" rel="noopener noreferrer" className="border-b-2 border-transparent hover:border-white transition-all duration-200">LinkedIn</a>
                    <a href="https://github.com/Mudassirkhn" target="_blank" rel="noopener noreferrer" className="border-b-2 border-transparent hover:border-white transition-all duration-200">Github</a>
                    <a href="" target="_blank" rel="noopener noreferrer" className="border-b-2 border-transparent hover:border-white transition-all duration-200">Instagram</a>
                    <a href="" target="_blank" rel="noopener noreferrer" className="border-b-2 border-transparent hover:border-white transition-all duration-200">Facebook</a>
                </div>
            </div>
        </div>

    )
}

export default Footer
