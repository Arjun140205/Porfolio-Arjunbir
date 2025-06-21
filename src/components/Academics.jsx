import React from 'react';
import DavLogo from '../assets/RMPS.png'; 
import kvLogo from '../assets/sghms.png';
import VitLogo from '../assets/vit-bhopal.png';
import '../App.css';
import { motion } from 'framer-motion';

const Academics = () => {
    const pageStyle = {
        backgroundColor: '#000', // Black background for the entire page
        minHeight: '100vh', // Ensure it covers the full height of the viewport
        padding: '20px', // Padding around the container
        boxSizing: 'border-box',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column', // Allows footer to be at the bottom
    };

    const academics = [
        {
            title: 'Secondary Education (10th Grade)',
            school: 'RM PUBLIC SCHOOL',
            domain: 'Standard Mathematics',
            year: '2020',
            logo: DavLogo,
            link: 'https://rmpublicschool.com/',
            linkText: 'Visit RM Public School',
        },
        {
            title: 'Senior Secondary Education (12th Grade)',
            school: 'SHRI GURU HARKRISHAN MODEL SCHOOL',
            domain: 'PHYSICS CHEMISTRY MATHEMATICS',
            year: '2022',
            logo: kvLogo,
            link: 'https://www.sghms.com/',
            linkText: 'Visit Shri Guru Harkrishan Model School',
        },
        {
            title: 'Undergraduate Studies (B.Tech Program)',
            school: 'VELLORE INSTITUTE OF TECHNOLOGY BHOPAL',
            domain: 'COMPUTER SCIENCE AND ENGINEERING',
            year: 'Pursuing',
            logo: VitLogo,
            link: 'https://vitbhopal.ac.in/',
            linkText: 'Visit VIT Bhopal University',
        },
    ];

    return (
        <div style={pageStyle} className="min-h-screen bg-neutral-950 flex flex-col relative">
            <div className="w-full flex flex-col items-center justify-center pt-28 pb-8 px-4">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-cyan-400 mb-2 text-center drop-shadow-lg">Academics</h1>
                <p className="text-lg md:text-xl font-light text-neutral-200 text-center max-w-2xl mb-2">
                    My academic journey reflects a commitment to excellence and a passion for learning across diverse disciplines.
                </p>
                <p className="text-base md:text-lg text-neutral-400 text-center max-w-2xl">
                    Education is the journey that transforms potential into achievement.
                </p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center px-4 pb-16">
                <div className="w-full max-w-3xl mx-auto space-y-12 pt-4">
                    {academics.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="relative bg-gradient-to-br from-white/10 via-cyan-200/5 to-neutral-900/30 border border-neutral-700 rounded-2xl px-8 py-7 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 mb-12 shadow-lg transition-all duration-300 overflow-visible"
                            style={{ zIndex: 1 }}
                            initial={{ opacity: 0.7, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.4, delay: idx * 0.12, ease: 'easeOut' }}
                        >
                            {/* Subtle vignette for depth */}
                            <div className="pointer-events-none absolute inset-0 rounded-2xl" style={{background:'radial-gradient(circle at 70% 80%,rgba(0,0,0,0.12) 0%,transparent 70%)'}} />
                            {/* Logo with soft glow */}
                            <div className="flex-shrink-0 flex items-center justify-center bg-white/10 rounded-xl p-3 shadow-inner relative">
                                <div className="absolute inset-0 rounded-xl bg-cyan-200/20 blur-xl z-0" />
                                <img
                                    src={item.logo}
                                    alt={item.school + ' Logo'}
                                    className="w-20 h-20 object-contain drop-shadow-xl relative z-10"
                                    loading="lazy"
                                />
                            </div>
                            {/* Details */}
                            <div className="flex-1">
                                <h2 className="text-xl md:text-2xl font-bold text-neutral-100 mb-1 drop-shadow-lg">{item.title}</h2>
                                <p className="text-base md:text-lg font-semibold text-neutral-200 mb-1">{item.school}</p>
                                <p className="text-base md:text-lg text-neutral-300 mb-1">Domain: <span className="font-normal">{item.domain}</span></p>
                                <p className="text-base md:text-lg text-neutral-300 mb-3">{item.year.includes('Pursuing') ? 'Current Year' : 'Year of Passing'}: <span className="font-normal">{item.year}</span></p>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-2 px-5 py-2 rounded-lg border border-neutral-600 bg-neutral-800 text-white font-semibold shadow hover:bg-neutral-700 hover:text-white transition-colors duration-200"
                                >
                                    {item.linkText}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Academics;
