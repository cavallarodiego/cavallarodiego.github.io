import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const components = [
  ['calendar.png', 'Calendario', 'Calendar'],
  ['promo-default.png', 'Promozioni Italo', 'Italo promotions'],
  ['promo-friends.png', 'Italo Friends', 'Italo Friends'],
  ['ticket.png', 'Biglietto digitale', 'Digital ticket'],
  ['tabbar.png', 'Navigazione inferiore', 'Tab bar'],
  ['navbar.png', 'Navigazione superiore', 'Navigation bar'],
  ['route.png', 'Selezione della tratta', 'Route selector'],
  ['button-red.png', 'Pulsante primario', 'Primary button'],
  ['button-dark.png', 'Pulsante secondario', 'Secondary button'],
  ['passengers.png', 'Selezione passeggeri', 'Passenger selector'],
];

export function ItaloDesignSystemCarousel({ basePath, lang }: { basePath: string; lang: 'it' | 'en' }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [manualChange, setManualChange] = useState(0);
  const reduceMotion = useReducedMotion();

  const selectImage = (index: number) => {
    setActive((index + components.length) % components.length);
    setManualChange((count) => count + 1);
  };
  const arrowClass = 'flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 active:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white';

  useEffect(() => {
    const container = containerRef.current;
    if (!container || reduceMotion) return;

    const mobile = window.matchMedia('(max-width: 767px)');
    let visible = false;
    let timer: ReturnType<typeof setInterval> | undefined;
    const syncPlayback = () => {
      clearInterval(timer);
      if (visible && mobile.matches && !document.hidden) {
        timer = setInterval(() => setActive((index) => (index + 1) % components.length), 3200);
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncPlayback();
    }, { threshold: 0.25 });
    observer.observe(container);
    mobile.addEventListener('change', syncPlayback);
    document.addEventListener('visibilitychange', syncPlayback);
    return () => {
      clearInterval(timer);
      observer.disconnect();
      mobile.removeEventListener('change', syncPlayback);
      document.removeEventListener('visibilitychange', syncPlayback);
    };
  }, [reduceMotion, manualChange]);

  const [file, italian, english] = components[active];
  const label = lang === 'it' ? italian : english;

  return (
    <div ref={containerRef} className="relative z-10 md:hidden" role="region" aria-roledescription="carousel" aria-label={lang === 'it' ? 'Componenti del Design System' : 'Design System components'}>
      <div className="relative h-[320px] overflow-hidden" aria-live="off">
        <AnimatePresence initial={false}>
          <motion.img
            key={file}
            src={`${basePath}${file}`}
            alt={label}
            initial={{ x: reduceMotion ? 0 : '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: reduceMotion ? 0 : '-100%', opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full object-contain p-2"
            draggable={false}
          />
        </AnimatePresence>
      </div>
      <div className="mt-3 flex items-center justify-between gap-1">
        <button type="button" onClick={() => selectImage(active - 1)} className={arrowClass}
          aria-label={lang === 'it' ? 'Immagine precedente' : 'Previous image'}>
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <div className="flex min-w-0 flex-1 items-center justify-center">
        {components.map(([name, it, en], index) => (
          <button key={name} type="button" onClick={() => selectImage(index)}
            aria-label={lang === 'it' ? it : en} aria-current={active === index ? 'true' : undefined}
            className="flex h-11 min-w-0 flex-1 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
            <span className={`h-1.5 rounded-full transition-all ${active === index ? 'w-3 bg-[#B50D3A]' : 'w-1 bg-white/30'}`} />
          </button>
        ))}
        </div>
        <button type="button" onClick={() => selectImage(active + 1)} className={arrowClass}
          aria-label={lang === 'it' ? 'Immagine successiva' : 'Next image'}>
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
