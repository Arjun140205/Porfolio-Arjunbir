import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, EMAIL_JS_PUBLIC_KEY } from "../constants";
import { HighlightGroup, HighlighterItem, Particles } from "./ui/highlighter.jsx";
import { Button } from "./ui/button.jsx";
import { useAnimate } from "framer-motion";
import { cn } from "../lib/utils";
import Footer from "./Footer";

const Contact = () => {
  const formRef = useRef();
  const [scope, animate] = useAnimate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

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

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // cleaning the form data
    const username = form.name.trim();
    const user_email = form.email.trim();
    const user_message = form.message.trim();

    if (username === '' || user_email === '' || user_message === '') {
      setLoading(false);
      toast.error("Please fill all the fields.", {
        position: 'bottom-right',
      });
      return;
    }

    emailjs
      .send(
        EMAIL_JS_SERVICE_ID,
        EMAIL_JS_TEMPLATE_ID,
        {
          from_name: username,
          to_name: "Arjunbir Singh",
          reply_to: user_email,
          to_email: "arjunbirsingh1699@gmail.com",
          message: user_message,
        },
        EMAIL_JS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Message sent successfully!", {
            position: 'bottom-right',
          });
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast.error("Uh, oh! Something went wrong. Please try again later.", {
            position: 'bottom-right',
          });
        }
      );
  };

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
                          👨‍💻
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
                        <p className="mb-6 text-center text-gray-400">
                          Let's discuss your ideas and make them reality!
                        </p>
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="w-full rounded-lg border border-gray-800 bg-gray-900/50 px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                          />
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="w-full rounded-lg border border-gray-800 bg-gray-900/50 px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                          />
                          <textarea
                            name="message"
                            rows="4"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            className="w-full rounded-lg border border-gray-800 bg-gray-900/50 px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 resize-none"
                          />
                          <div className="flex gap-2">
                            <Button
                              type="submit"
                              disabled={loading}
                              className="w-full bg-gradient-to-r from-gray-500 to-cyan-400 hover:from-gray-600 hover:to-cyan-500 text-white font-medium py-3 rounded-lg transition-all duration-200 transform hover:scale-[1.02]"
                            >
                              {loading ? "Sending..." : "Send Message"}
                            </Button>
                          </div>
                        </form>
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
      <Footer />
    </>
  );
};

export default Contact;