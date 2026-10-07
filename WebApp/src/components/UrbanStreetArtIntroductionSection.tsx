import React from 'react';
import { motion } from 'motion/react';
import { LogoMorph } from './LogoMorph';
import { useUrbanActivity } from './useUrbanMobile';

export function UrbanStreetArtIntroductionSection({ lang = 'it' }: { lang?: 'it' | 'en' }) {
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
        <div className="w-full max-w-5xl md:max-w-6xl p-10 md:p-16 lg:p-0 grid grid-cols-1 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-20 md:gap-20 items-center">
          <div className="flex flex-col items-center justify-center gap-8">
            <LogoMorph active={active} />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <p className="w-full text-white font-urbanist text-xl md:text-[30px] lg:text-[34px] leading-[1.4] font-light tracking-tight text-center md:text-left">
              <span className="block w-full font-semibold text-[18px] md:text-[26px] lg:text-[30px] text-[#FCD306] md:text-[#FED305] mb-4">
                Rebranding dell'identità visiva<br />
                di Urban StreetArt Sicily
              </span>
              <span className="block w-full text-[16px] md:text-inherit">
                {lang === 'it' ? <>
                  Pagina Instagram dedicata alla<br className="md:hidden" />{' '}
                  diffusione dell'arte urbana in<br className="md:hidden" />{' '}
                  Sicilia, con l'obiettivo di<br className="md:hidden" />{' '}
                  trasformarla in un vero e proprio<br className="md:hidden" />{' '}
                  portale digitale.
                </> : <>
                  An Instagram page devoted to<br className="md:hidden" />{' '}
                  urban art in Sicily, with the goal<br className="md:hidden" />{' '}
                  of turning it into a true<br className="md:hidden" />{' '}
                  digital platform.
                </>}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
