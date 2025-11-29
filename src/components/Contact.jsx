import React, { useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HighlightGroup, HighlighterItem, Particles } from "./ui/highlighter.jsx";
import { useAnimate } from "framer-motion";

const Contact = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      [
        ["#pointer", { left: 200, top: 60 }, { duration: 0 }],
        ["#design", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 50, top: 102 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#design", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#development", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 224, top: 170 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#development", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#fullstack", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 88, top: 198 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#fullstack", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#webdev", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 200, top: 60 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#webdev", { opacity: 0.5 }, { at: "-0.3", duration: 0.1 }],
      ],
      {
        repeat: Number.POSITIVE_INFINITY,
      },
    );
  }, [animate]);

  return (
    <>
      <section className="relative z-0 bg-black w-full min-h-screen">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <HighlightGroup className="group h-full">
            <div className="group/item h-full" data-aos="fade-down">
              <HighlighterItem className="rounded-3xl p-6">
                <div className="relative z-20 h-full overflow-hidden rounded-3xl border border-gray-800 bg-gray-900/50 backdrop-blur-lg">
                  <Particles
                    className="absolute inset-0 -z-10 opacity-20 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-40"
                    quantity={200}
                    color="#4f46e5"
                    vy={-0.2}
                  />
                  <div className="flex justify-center w-full">
                    <div className="flex h-full w-full flex-col justify-center gap-10 p-6 sm:p-8 md:p-12 md:flex-row">
                      <div
                        className="relative mx-auto h-[300px] w-[300px] md:h-[400px] md:w-[400px]"
                        ref={scope}
                      >
                        <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 text-2xl">
                          <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Laptop.webp" alt="Laptop" width="25" height="25" />
                        </div>
                        <div
                          id="webdev"
                          className="absolute bottom-12 left-14 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-sm opacity-50 text-cyan-200"
                        >
                          Web Dev
                        </div>
                        <div
                          id="development"
                          className="absolute left-2 top-20 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-sm opacity-50 text-cyan-200"
                        >
                          Development
                        </div>
                        <div
                          id="fullstack"
                          className="absolute bottom-20 right-1 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-sm opacity-50 text-cyan-200"
                        >
                          Full Stack
                        </div>
                        <div
                          id="design"
                          className="absolute right-12 top-10 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-sm opacity-50 text-cyan-200"
                        >
                          Design
                        </div>

                        <div id="pointer" className="absolute">
                          <svg
                            width="20"
                            height="22"
                            viewBox="0 0 12 13"
                            className="fill-cyan-400"
                            stroke="white"
                            strokeWidth="1"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 5.50676L0 0L2.83818 13L6.30623 7.86537L12 5.50676V5.50676Z"
                            />
                          </svg>
                          <span className="relative -top-1 left-3 rounded-3xl bg-gradient-to-r from-gray-500 to-cyan-400 px-3 py-1.5 text-sm text-white font-medium">
                            Arjun
                          </span>
                        </div>
                      </div>

                      <div className="-mt-20 flex h-full flex-col justify-center p-2 md:mt-0 md:ml-10 lg:ml-16 md:w-[450px] lg:w-[500px]">
                        <div className="flex flex-col items-center">
                          <p className="font-light text-gray-400 mb-2 tracking-wider">GET IN TOUCH</p>
                          <h2                        className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-cyan-400 mb-4">
                            Contact.
                          </h2>
                        </div>
                        <p className="mb-6 text-center text-gray-400 text-lg font-medium">
                          Let's connect and create something meaningful.
                        </p>
                        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center mt-6">
                          {/* Call Button */}
                          <a
                            href="tel:6005168257"
                            className="flex items-center gap-3 px-8 py-4 rounded-full bg-gray-900/70 border border-gray-800 shadow-lg hover:shadow-cyan-400/30 hover:border-cyan-400 transition-all duration-200 text-white font-semibold text-lg backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            title="Call Arjunbir Singh"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15l2.25-2.25a2.121 2.121 0 00-2.121-2.121c-.472 0-.933.074-1.372.215a12.042 12.042 0 01-5.357-5.357c.141-.439.215-.9.215-1.372A2.121 2.121 0 006.75 6.75L4.5 9z" />
                            </svg>
                            Call
                          </a>
                          {/* Email Button */}
                          <a
                            href="mailto:arjunbirsingh1699@gmail.com"
                            className="flex items-center gap-3 px-8 py-4 rounded-full bg-gray-900/70 border border-gray-800 shadow-lg hover:shadow-cyan-400/30 hover:border-cyan-400 transition-all duration-200 text-white font-semibold text-lg backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            title="Email Arjunbir Singh"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.5 7.5a2.25 2.25 0 01-3.182 0l-7.5-7.5A2.25 2.25 0 012.25 6.993V6.75" />
                            </svg>
                            Email
                          </a>
                          {/* WhatsApp Button */}
                          <a
                            href="https://wa.me/919103203635"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-8 py-4 rounded-full bg-gray-900/70 border border-gray-800 shadow-lg hover:shadow-cyan-400/30 hover:border-cyan-400 transition-all duration-200 text-white font-semibold text-lg backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            title="WhatsApp Arjunbir Singh"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-400">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 14.487a6.75 6.75 0 10-2.375 2.375l2.122.53a.75.75 0 00.91-.91l-.53-2.122z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9.75h.008v.008H15.75V9.75z" />
                            </svg>
                            WhatsApp
                          </a>
                          {/* LinkedIn Button */}
                          <a
                            href="https://www.linkedin.com/in/arjunbir-singh/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-8 py-4 rounded-full bg-gray-900/70 border border-gray-800 shadow-lg hover:shadow-cyan-400/30 hover:border-cyan-400 transition-all duration-200 text-white font-semibold text-lg backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            title="LinkedIn Arjunbir Singh"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-blue-400">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
                            </svg>
                            LinkedIn
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </HighlighterItem>
            </div>
          </HighlightGroup>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Contact;