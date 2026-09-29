import React from 'react';
import WireframeComparisonCarousel from './WireframeComparisonCarousel';
import { GridVignetteBackground } from './ui/vignette-grid-background';

export function ItaloWireframeSection() {
  return (
    <section
      id="italo-treni-wireframe"
      data-project-section="04-wireframe"
      aria-labelledby="italo-wireframe-title"
      className="w-full min-h-[100svh] relative z-20 isolate flex items-center justify-center py-20 sm:py-24 lg:py-28 px-6 sm:px-12"
    >
      <GridVignetteBackground className="opacity-100" horizontalVignetteSize={50} verticalVignetteSize={50} intensity={100} />
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 w-full max-w-6xl mx-auto">
        <div className="w-full lg:w-[520px] shrink-0 flex flex-col items-start text-left gap-6 relative">
          <div
            className="absolute -top-32 -left-32 sm:-top-44 sm:-left-44 w-[600px] sm:w-[750px] lg:w-[850px] h-[600px] sm:h-[750px] lg:h-[850px] rounded-full bg-[radial-gradient(circle_at_center,rgba(181,13,58,0.28)_0%,rgba(158,28,31,0.12)_45%,transparent_70%)] blur-[35px] sm:blur-[50px] transform-gpu -z-10 pointer-events-none"
            aria-hidden="true"
          />

          <div className="flex flex-col items-start gap-3 relative z-10">
            <h2
              id="italo-wireframe-title"
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase font-sans"
            >
              Sviluppo Wireframe
            </h2>
            <div className="w-12 h-1 bg-[#B50D3A] mt-1 rounded-full" />
          </div>

          <div className="flex flex-col gap-5 text-neutral-300 font-urbanist text-lg sm:text-xl leading-relaxed font-light relative z-10">
            <p>Sono stati analizzati i flussi principali degli utenti e le funzionalità più utilizzate.</p>
            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
              Successivamente è stato sviluppato un wireframe a bassa fedeltà per definire la struttura della schermata, la disposizione dei contenuti e la gerarchia delle informazioni.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[340px] shrink-0 flex justify-center items-center">
          <WireframeComparisonCarousel />
        </div>
      </div>
    </section>
  );
}
