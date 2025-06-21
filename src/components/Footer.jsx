import React from 'react';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className='bg-[#181c24] text-white py-6 px-4'>
			<div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4'>
				<p className='text-center text-sm md:text-base font-light'>
					© {year} <span className='font-semibold'>Arjunbir Singh</span>. All rights reserved.
				</p>

				<div className='flex space-x-4 text-xl'>
					<a
						href='mailto:arjunbirsingh1699@gmail.com'
						aria-label='Email'
						className='hover:text-red-400 transition transform hover:scale-110'
					>
						<FiMail />
					</a>
					<a
						href='https://www.linkedin.com/in/arjunbir-singh-736620280/'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='LinkedIn'
						className='hover:text-blue-500 transition transform hover:scale-110'
					>
						<AiFillLinkedin />
					</a>
					<a
						href='https://github.com/Arjun140205'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='GitHub'
						className='hover:text-gray-400 transition transform hover:scale-110'
					>
						<FaGithub />
					</a>
					<a
						href='https://www.instagram.com/arjunbir_singhh?igsh=MWcyYWoyN2QwazR4OA=='
						target='_blank'
						rel='noopener noreferrer'
						aria-label='Instagram'
						className='hover:text-pink-500 transition transform hover:scale-110'
					>
						<FaInstagram />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
