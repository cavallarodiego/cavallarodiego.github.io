import { Fragment } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import WireframeComparisonCarousel from './WireframeComparisonCarousel';

export function ItaloWireframeSection() {
  const reduceMotion = useReducedMotion();
  const paragraphs = [
    {
      text: 'Sono stati analizzati i flussi principali degli utenti e le funzionalità più utilizzate.',
      className: '',
    },
    {
      text: 'Successivamente è stato sviluppato un wireframe a bassa fedeltà per definire la struttura della schermata, la disposizione dei contenuti e la gerarchia delle informazioni.',
      className: 'text-neutral-400 text-base sm:text-lg leading-relaxed',
    },
  ];
  const textVariants = {
    hidden: {},
    visible: { transition: { delayChildren: 0.12, staggerChildren: 0.035 } },
  };
  const wordVariants = {
    hidden: { y: '110%', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const renderAnimatedText = (text: string, className: string) => (
    <motion.p
      key={text}
      aria-label={text}
      initial={reduceMotion ? false : 'hidden'}
      whileInView={reduceMotion ? undefined : 'visible'}
      viewport={{ once: true, amount: 0.2 }}
      variants={textVariants}
      className={className}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.split(' ').map((word, index) => (
          <Fragment key={`${word}-${index}`}>
            {index > 0 ? ' ' : null}
            <span className="inline-block overflow-hidden align-bottom pb-[0.08em]">
              <motion.span
                variants={reduceMotion ? undefined : wordVariants}
                className="inline-block"
              >
                {word}
              </motion.span>
            </span>
          </Fragment>
        ))}
      </span>
    </motion.p>
  );

  return (
    <section
      id="italo-treni-wireframe"
      data-project-section="04-wireframe"
      aria-labelledby="italo-wireframe-title"
      className="w-full min-h-[100svh] relative z-20 isolate flex items-center justify-center py-20 sm:py-24 lg:py-28 px-6 sm:px-12"
    >
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 w-full max-w-6xl mx-auto">
        <div className="w-full lg:w-[520px] shrink-0 flex flex-col items-start max-md:items-center text-left max-md:text-center gap-6 relative">
          <div
            className="absolute -top-32 -left-32 sm:-top-44 sm:-left-44 w-[600px] sm:w-[750px] lg:w-[850px] h-[600px] sm:h-[750px] lg:h-[850px] rounded-full bg-[radial-gradient(circle_at_center,rgba(181,13,58,0.28)_0%,rgba(158,28,31,0.12)_45%,transparent_70%)] blur-[35px] sm:blur-[50px] transform-gpu -z-10 pointer-events-none"
            aria-hidden="true"
          />

          <div className="flex flex-col items-start max-md:items-center gap-3 relative z-10">
            <h2
              id="italo-wireframe-title"
              className="max-md:max-w-[280px] text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase font-sans"
            >
              Sviluppo Wireframe
            </h2>
            <div className="w-12 h-1 bg-[#B50D3A] mt-1 rounded-full" />
          </div>

          <div className="flex max-md:max-w-[280px] flex-col gap-5 text-neutral-300 font-urbanist text-lg sm:text-xl leading-relaxed font-light relative z-10">
            {paragraphs.map(({ text, className }) => renderAnimatedText(text, className))}
          </div>
        </div>

        <div className="w-full lg:w-[340px] shrink-0 flex justify-center items-center">
          <WireframeComparisonCarousel />
        </div>
      </div>
    </section>
  );
}
