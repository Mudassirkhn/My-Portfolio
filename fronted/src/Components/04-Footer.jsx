import React from 'react';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer id="footer" className="pb-10 pt-4">
      <div className="section-shell">
        <div className="glass-panel space-y-6 px-6 py-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-2xl font-bold">Mudassir Khan</h3>
              <p className="mt-1 text-sm text-soft">MERN Stack Web Developer</p>
            </div>
            <a
              href="mailto:mmkhan213@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-soft transition hover:border-[#00c2a8] hover:text-white"
            >
              <MdEmail size={18} /> mmkhan213@gmail.com
            </a>
          </div>

          <div className="h-px w-full bg-white/10" />

          <div className="flex flex-col gap-4 text-sm text-soft sm:flex-row sm:items-center sm:justify-between">
            <p>Copyright 2026 Mudassir Khan. All rights reserved.</p>
            <div className="flex items-center gap-5">
              <a href="https://www.linkedin.com/in/mudassir-khan-0a91862b7/" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">LinkedIn</a>
              <a href="https://github.com/Mudassirkhn" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
