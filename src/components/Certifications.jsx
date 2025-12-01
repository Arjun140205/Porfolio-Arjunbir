import React from 'react';
import { certifications } from '../constants';
import CertificationMarqueeColumn from './CertificationMarqueeColumn';

const splitCerts = (certs, n) => {
  // Split certifications into n nearly equal groups
  const out = Array.from({ length: n }, () => []);
  certs.forEach((c, i) => out[i % n].push(c));
  return out;
};

const [leftCerts, middleCerts, rightCerts] = splitCerts(certifications, 3);

const Certifications = () => {
  return (
    <>
      <section className="certifications bg-black w-screen text-white pt-16 min-h-screen overflow-x-hidden flex flex-col items-center" id="certifications" aria-label="Professional certifications and courses">
        <div className="pt-12 sm:px-16 px-6 w-full max-w-7xl text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-cyan-400 to-white bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
            My journey of continuous learning and professional development
          </p>
        </div>
        <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-0 sm:gap-8">
          <CertificationMarqueeColumn
            certifications={leftCerts}
            direction="down"
            duration={20}
            className="hidden sm:flex -mt-16"
          />
          <CertificationMarqueeColumn
            certifications={middleCerts}
            direction="up"
            duration={16}
            className="z-10"
          />
          <CertificationMarqueeColumn
            certifications={rightCerts}
            direction="down"
            duration={22}
            className="hidden sm:flex -mt-24"
          />
              </div>
      </section>
    </>
  );
};

export default Certifications;
