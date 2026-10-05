import { Fragment } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function ItaloIntroductionSection() {
  const reduceMotion = useReducedMotion();
  const assetBase = `${import.meta.env.BASE_URL}Images/Project 03/introduction/3d/`;
  const brandRedColorCorrection = 'hue-rotate(-8deg) saturate(1.2) brightness(1.22)';
  const introText = "Il redesign dell'applicazione di Italo Treno si concentra sull'abbattimento del carico cognitivo durante la ricerca, selezione e pagamento delle tratte ad alta velocità.";
  const emphasizedWordCount = "Il redesign dell'applicazione di Italo Treno".split(' ').length;
  const introWords = introText.split(' ');
  const introTextVariants = {
    hidden: {},
    visible: {
      transition: { delayChildren: 0.12, staggerChildren: 0.035 },
    },
  };
  const introWordVariants = {
    hidden: { y: '110%', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const floatingMotion = (
    duration: number,
    delay: number,
    distance: number,
    rotation: number,
    horizontalDistance: number,
  ) =>
    reduceMotion
      ? undefined
      : {
          x: [0, horizontalDistance * 0.7, 0, -horizontalDistance * 0.55, 0],
          y: [0, -distance * 0.72, distance * 0.48, -distance * 0.24, 0],
          rotate: [0, rotation * 0.7, -rotation * 0.45, rotation * 0.25, 0],
          scale: [1, 1.025, 1, 0.99, 1],
          filter: [
            `${brandRedColorCorrection} blur(0px) drop-shadow(0 18px 28px rgba(0,0,0,0.28))`,
            `${brandRedColorCorrection} blur(2px) drop-shadow(0 18px 28px rgba(0,0,0,0.22))`,
            `${brandRedColorCorrection} blur(0.6px) drop-shadow(0 18px 28px rgba(0,0,0,0.26))`,
            `${brandRedColorCorrection} blur(1.2px) drop-shadow(0 18px 28px rgba(0,0,0,0.24))`,
            `${brandRedColorCorrection} blur(0px) drop-shadow(0 18px 28px rgba(0,0,0,0.28))`,
          ],
          transition: {
            duration,
            delay,
            repeat: Infinity,
            ease: 'easeInOut' as const,
          },
        };

  return (
    <section
      id="italo-treni-introduction"
      data-project-section="02-introduction"
      aria-label="Introduzione al progetto Italo Treni"
      className="w-full min-h-[100svh] max-md:min-h-[85svh] relative z-10 isolate overflow-hidden bg-transparent flex flex-col justify-center py-20 max-md:py-12 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute left-[8%] top-[12%] h-72 w-72 rounded-full bg-[#B50D3A]/[0.12] blur-[140px] sm:left-[12%] sm:h-[26rem] sm:w-[26rem] sm:blur-[170px]" />
        <div className="absolute right-[12%] top-[15%] h-64 w-64 rounded-full bg-[#B50D3A]/[0.1] blur-[130px] sm:right-[18%] sm:h-80 sm:w-80 sm:blur-[160px]" />
        <div className="absolute bottom-[8%] right-[18%] h-80 w-80 rounded-full bg-[#B50D3A]/[0.12] blur-[150px] sm:bottom-[10%] sm:right-[22%] sm:h-[30rem] sm:w-[30rem] sm:blur-[180px]" />
      </div>
      <div className="absolute inset-0 z-10 pointer-events-none" aria-hidden="true">
        <motion.img
          src={`${assetBase}location-3d.png`}
          alt=""
          className="absolute top-[14%] right-[9%] w-16 sm:right-[14%] sm:w-24 lg:right-[21%] lg:w-36 object-contain"
          animate={floatingMotion(12, -1.1, 20, -6, 13)}
          loading="eager"
          draggable={false}
        />
        <motion.img
          src={`${assetBase}suitcase-3d.png`}
          alt=""
          className="absolute bottom-[7%] left-[2%] w-28 sm:bottom-[9%] sm:left-[6%] sm:w-40 lg:left-[7%] lg:w-56 object-contain"
          animate={floatingMotion(15, -2.4, 18, 5, 11)}
          loading="eager"
          draggable={false}
        />
        <motion.img
          src={`${assetBase}ticket-3d.png`}
          alt=""
          className="absolute top-[8%] left-[10%] w-28 sm:left-[14%] sm:w-40 lg:left-[21%] lg:w-56 object-contain"
          animate={floatingMotion(13, -0.5, 22, -7, 14)}
          loading="eager"
          draggable={false}
        />
        <motion.img
          src={`${assetBase}train-3d.png`}
          alt=""
          className="absolute top-[66%] right-[1%] w-44 md:top-[54%] sm:right-[4%] sm:w-72 lg:right-[6%] lg:w-[475px] object-contain"
          animate={floatingMotion(17, -1.7, 24, 3.5, 16)}
          loading="eager"
          draggable={false}
        />
      </div>
      <div className="relative z-20 flex-1 flex items-center justify-center px-6 sm:px-12 md:px-16 w-full max-w-[1600px] mx-auto">
        <motion.p
          aria-label={introText}
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.2 }}
          variants={introTextVariants}
          className="text-white font-urbanist text-[17px] md:text-2xl lg:text-3xl leading-[1.4] font-light tracking-tight text-center max-w-[320px] md:max-w-4xl"
        >
          <span className="sr-only">{introText}</span>
          <span aria-hidden="true">
            {introWords.map((word, index) => (
              <Fragment key={`${word}-${index}`}>
                {index > 0 ? ' ' : null}
                <span className="inline-block overflow-hidden align-bottom pb-[0.08em]">
                  <motion.span
                    variants={reduceMotion ? undefined : introWordVariants}
                    className={`inline-block ${index < emphasizedWordCount ? 'font-semibold text-[#B50D3A]' : ''}`}
                  >
                    {word}
                  </motion.span>
                </span>
              </Fragment>
            ))}
          </span>
        </motion.p>
      </div>
    </section>
  );
}
