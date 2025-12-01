import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 3);
  const secondRow = products.slice(3, 6);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 200]), springConfig);
  
  return (
    <div
      ref={ref}
      className="h-[200vh] lg:h-[250vh] xl:h-[280vh] pt-40 pb-32 md:pb-24 lg:pb-32 xl:pb-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-10">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-0 space-x-20">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl lg:text-7xl font-black mb-6"
      >
        <span className="bg-gradient-to-r from-white via-cyan-400 to-white bg-clip-text text-transparent">
          Projects
        </span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-2xl text-lg md:text-xl text-neutral-400"
      >
        A collection of my work showcasing full-stack development, modern web technologies, and creative problem-solving.
      </motion.p>
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
        willChange: 'transform',
      }}
      whileHover={{
        y: -20,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block group-hover/product:shadow-2xl"
      >
        <img
          src={product.thumbnail}
          className="object-cover object-center absolute h-full w-full inset-0 rounded-2xl bg-neutral-900"
          alt={product.title}
          loading="lazy"
          decoding="async"
          crossOrigin="anonymous"
          style={{ contentVisibility: 'auto' }}
        />
      </a>
      <div 
        className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none rounded-2xl transition-opacity duration-300"
        style={{ willChange: 'opacity' }}
      ></div>
      <div 
        className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 transition-opacity duration-300"
        style={{ willChange: 'opacity' }}
      >
        <h2 className="text-white text-xl font-bold mb-2">{product.title}</h2>
        <p className="text-neutral-300 text-sm line-clamp-2">{product.description}</p>
      </div>
    </motion.div>
  );
};
