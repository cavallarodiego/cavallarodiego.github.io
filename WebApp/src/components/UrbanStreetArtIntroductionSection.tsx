import React from 'react';
import { motion } from 'motion/react';
import { LogoMorph } from './LogoMorph';
import { useUrbanActivity } from './useUrbanMobile';

export function UrbanStreetArtIntroductionSection() {
  const { ref, active } = useUrbanActivity<HTMLElement>();
  return (
    <section ref={ref} id="urban-streetart-introduction" data-project-section="02-introduction" aria-label="Introduzione Urban StreetArt Sicily" className="relative z-20 w-full">
      <div className="relative left-1/2 -translate-x-1/2 w-[100vw] overflow-hidden border-b-2 border-[#0D0D0D] py-2 sm:py-3 flex items-center bg-[#FCD306]">
        <motion.div animate={active ? { x: ['0%', '-50%'] } : { x: '0%' }} transition={{ repeat: active ? Infinity : 0, ease: 'linear', duration: active ? 20 : 0 }} className="flex whitespace-nowrap gap-8 text-[#0D0D0D] font-urbanist font-black text-[18px] sm:text-2xl uppercase tracking-widest">
          {[...Array(20)].map((_, index) => (
            <React.Fragment key={index}>
              <span>INTRODUZIONE</span>
              <span className="text-[#0D0D0D] text-lg sm:text-xl">✦</span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      <div className="w-full flex flex-col items-center justify-center min-h-[65svh] md:min-h-screen py-12 md:py-20 px-6 sm:px-12 md:px-16 max-w-[1600px] mx-auto">
        <div className="w-full max-w-5xl p-10 md:p-16 lg:p-0 grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-20 items-center">
          <div className="flex flex-col items-center justify-center gap-8">
            <LogoMorph active={active} />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <p className="text-white font-urbanist text-xl md:text-2xl lg:text-[28px] leading-[1.4] font-light tracking-tight text-center md:text-left">
              <span className="block font-semibold text-[18px] md:text-inherit text-[#FCD306] mb-4">
                Rebranding dell'identità visiva<br />
                di Urban StreetArt Sicily
              </span>
              <span className="block text-[16px] md:text-inherit">
                Pagina Instagram dedicata alla<br />
                diffusione dell'arte urbana in<br />
                Sicilia, con l'obiettivo di<br />
                trasformarla in un vero e proprio<br />
                portale digitale.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
