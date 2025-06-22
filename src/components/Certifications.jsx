import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { certifications } from '../constants';
import Footer from './Footer';

const Certifications = () => {
  return (
    <>
      <div className='certifications bg-black w-screen text-white pt-16 overflow-x-hidden' id='certifications'>
        <div className='pt-12 sm:px-16 px-6'>
          <p className='font-light text-sm sm:text-base'>MY JOURNEY SO FAR.</p>
          <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Certifications.</h2>
        </div>

        <VerticalTimeline className='mt-9'>
          {certifications.map((certification, index) => (
            <VerticalTimelineElement
              key={`certification-${index}`}
              className='relative vertical-timeline-element--work'
              contentStyle={{ background: "#1d1836", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #232631" }}
              date={certifications.duration}
              iconStyle={{
                background: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '12px',
                color: '#000',
                cursor: 'pointer'
              }}
              icon={
                <a
                  href={certifications.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-full h-full flex items-center justify-center no-underline text-black'
                >
                  LINK
                </a>
              }
            >
              <div>
                <h3 className='text-white text-[20px] sm:text-[24px] font-bold'>{certifications.role}</h3>
                <p className='text-gray-400 text-[14px] sm:text-[16px] font-semibold' style={{ margin: 0 }}>
                  {certifications.company}
                </p>
              </div>

              <ul className='mt-4 list-disc ml-5 space-y-2'>
                {certification.points.map((point, idx) => (
                  <li
                    key={`certification-point-${idx}`}
                    className='text-white text-[14px] tracking-wider'
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

      </div>
      <Footer />
    </>
  );
};

export default Certifications;
