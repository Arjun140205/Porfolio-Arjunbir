import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaLinkedin, FaHeart } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { BsArrowUp } from 'react-icons/bs';

const Footer = () => {
	const year = new Date().getFullYear();

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const socialLinks = [
		{
			name: 'Email',
			href: 'mailto:arjunbirsingh1699@gmail.com',
			icon: HiMail,
			color: 'hover:text-cyan-400',
		},
		{
			name: 'LinkedIn',
			href: 'https://www.linkedin.com/in/arjunbir-singh/',
			icon: FaLinkedin,
			color: 'hover:text-cyan-400',
		},
		{
			name: 'GitHub',
			href: 'https://github.com/Arjun140205',
			icon: FaGithub,
			color: 'hover:text-cyan-400',
		},
		{
			name: 'Instagram',
			href: 'https://www.instagram.com/arjunbir_singhh/',
			icon: FaInstagram,
			color: 'hover:text-cyan-400',
		},
	];

	return (
		<footer className='relative bg-black border-t border-white/5 overflow-hidden' role="contentinfo" aria-label="Site footer">
			{/* Subtle gradient background */}
			<div className='absolute inset-0 bg-gradient-to-t from-cyan-950/5 via-transparent to-transparent pointer-events-none' />
			
			{/* Animated grid pattern */}
			<motion.div
				className='absolute inset-0 opacity-[0.02]'
				style={{
					backgroundImage: 'radial-gradient(circle, rgba(34, 211, 238, 0.3) 1px, transparent 1px)',
					backgroundSize: '40px 40px',
				}}
				animate={{
					backgroundPosition: ['0px 0px', '40px 40px'],
				}}
				transition={{
					duration: 20,
					repeat: Infinity,
					ease: 'linear',
				}}
			/>

			<div className='relative max-w-7xl mx-auto px-4 py-12'>
				{/* Main content */}
				<div className='flex flex-col items-center space-y-8'>
					{/* Social links */}
					<motion.nav
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className='flex items-center gap-6'
						aria-label="Social media links"
					>
						{socialLinks.map((social, index) => (
							<motion.a
								key={social.name}
								href={social.href}
								target={social.href.startsWith('http') ? '_blank' : undefined}
								rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
								aria-label={social.name}
								initial={{ opacity: 0, scale: 0.5 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.3, delay: index * 0.1 }}
								viewport={{ once: true }}
								whileHover={{ scale: 1.2, y: -4 }}
								whileTap={{ scale: 0.9 }}
								className={`text-neutral-400 ${social.color} transition-colors duration-300`}
							>
								<social.icon className='w-6 h-6' aria-hidden="true" />
							</motion.a>
						))}
					</motion.nav>

					{/* Divider */}
					<motion.div
						initial={{ scaleX: 0 }}
						whileInView={{ scaleX: 1 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className='w-32 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent'
					/>

					{/* Copyright */}
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						className='text-center space-y-2'
					>
						<p className='text-neutral-500 text-sm'>
							© {year}{' '}
							<span className='text-white font-medium'>Arjunbir Singh</span>
							. All rights reserved.
						</p>
						<p className='text-neutral-600 text-xs flex items-center justify-center gap-1'>
							Crafted with <FaHeart className='text-cyan-400 w-3 h-3 animate-pulse' /> and lots of caffeine
						</p>
					</motion.div>

					{/* Back to top button */}
					<motion.button
						onClick={scrollToTop}
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						viewport={{ once: true }}
						whileHover={{ scale: 1.1, y: -2 }}
						whileTap={{ scale: 0.9 }}
						className='group flex items-center gap-2 px-4 py-2 text-sm text-neutral-400 hover:text-cyan-400 border border-white/10 hover:border-cyan-400/30 rounded-full transition-all duration-300 backdrop-blur-sm bg-black/40 hover:bg-black/60'
						aria-label='Back to top'
					>
						<span>Back to top</span>
						<BsArrowUp className='w-4 h-4 group-hover:animate-bounce' />
					</motion.button>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
