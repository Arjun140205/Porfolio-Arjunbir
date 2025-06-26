import React from 'react';
import { certifications } from '../constants';
import Footer from './Footer';
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
      <div className="certifications bg-black w-screen text-white pt-16 min-h-screen overflow-x-hidden flex flex-col items-center" id="certifications">
        <div className="pt-12 sm:px-16 px-6 w-full max-w-5xl">
          <p className="font-light text-sm sm:text-base">MY JOURNEY SO FAR.</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold mt-2 mb-8">Certifications</h2>
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
      </div>
      <Footer />
    </>
  );
};

export default Certifications;
