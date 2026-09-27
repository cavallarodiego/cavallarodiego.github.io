import React from 'react';

const TrainDividerBanner = React.memo(function TrainDividerBanner() {
  const trainCount = 6;
  const trainSrc = `${import.meta.env.BASE_URL}train_divider.svg`;

  return (
    <div className="w-full relative h-[22px] sm:h-[32px] lg:h-[42px] overflow-hidden flex items-center border-b border-[#B50D3A]/20 opacity-90 mt-16 md:mt-24 pointer-events-none select-none">
      <div className="flex w-max h-full animate-train-scroll-seamless">
        <div className="flex items-center h-full shrink-0 gap-6 sm:gap-8 pr-6 sm:pr-8">
          {[...Array(trainCount)].map((_, index) => (
            <img
              key={`train-primary-${index}`}
              src={trainSrc}
              alt="Italo Train"
              className="h-full w-auto aspect-[2153/145] object-contain flex-shrink-0"
              loading="eager"
            />
          ))}
        </div>

        <div className="flex items-center h-full shrink-0 gap-6 sm:gap-8 pr-6 sm:pr-8" aria-hidden="true">
          {[...Array(trainCount)].map((_, index) => (
            <img
              key={`train-clone-${index}`}
              src={trainSrc}
              alt=""
              className="h-full w-auto aspect-[2153/145] object-contain flex-shrink-0"
              loading="eager"
            />
          ))}
        </div>
      </div>
    </div>
  );
});

export function ItaloIntroductionSection() {
  return (
    <section
      id="italo-treni-introduction"
      data-project-section="02-introduction"
      aria-label="Introduzione al progetto Italo Treni"
      className="w-full h-screen relative z-10 bg-transparent flex flex-col justify-start"
    >
      <TrainDividerBanner />

      <div className="flex-1 flex items-center justify-center px-6 sm:px-12 md:px-16 w-full max-w-[1600px] mx-auto z-20">
        <p className="text-white font-urbanist text-xl md:text-2xl lg:text-3xl leading-[1.4] font-light tracking-tight text-center max-w-4xl">
          <span className="font-semibold text-[#B50D3A]">Il redesign dell'applicazione di Italo Treno</span>{' '}
          si concentra sull'abbattimento del carico cognitivo durante la ricerca, selezione e pagamento delle tratte ad alta velocità.
        </p>
      </div>
    </section>
  );
}
