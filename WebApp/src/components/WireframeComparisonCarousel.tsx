import { useCallback, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface WireframeScreen {
  id: string;
  name: string;
  wireframeImg: string;
}

const SCREENS: WireframeScreen[] = [
  {
    id: 'home',
    name: 'Home Screen',
    wireframeImg: `${import.meta.env.BASE_URL}Images/Project 03/app_mobile/wireframe-hd/home.png`,
  },
  {
    id: 'biglietti',
    name: 'Scelta Biglietto',
    wireframeImg: `${import.meta.env.BASE_URL}Images/Project 03/app_mobile/wireframe-hd/biglietti.png`,
  },
  {
    id: 'fedelta',
    name: 'Programma Fedeltà',
    wireframeImg: `${import.meta.env.BASE_URL}Images/Project 03/app_mobile/wireframe-hd/programma_fedelta.png`,
  },
  {
    id: 'relax',
    name: 'Relax',
    wireframeImg: `${import.meta.env.BASE_URL}Images/Project 03/app_mobile/wireframe-hd/relax.png`,
  },
  {
    id: 'tracker',
    name: 'Live Tracker Corsa',
    wireframeImg: `${import.meta.env.BASE_URL}Images/Project 03/app_mobile/wireframe-hd/tracker.png`,
  },
];

export default function WireframeComparisonCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentScreen = SCREENS[currentIndex];

  const handlePrevious = useCallback(() => {
    setCurrentIndex((previous) => (previous - 1 + SCREENS.length) % SCREENS.length);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((previous) => (previous + 1) % SCREENS.length);
  }, []);

  return (
    <div
      className="w-[340px] flex flex-col items-center gap-3 select-none shrink-0"
      role="region"
      aria-roledescription="carousel"
      aria-label="Wireframe dell’app Italo"
    >
      <div className="relative h-[440px] sm:h-[480px] md:h-[500px] aspect-[640/1385] rounded-2xl overflow-hidden bg-[#0A0A0A] border border-white/15 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.9)] shrink-0">
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={currentScreen.id}
            src={currentScreen.wireframeImg}
            alt={`Wireframe ${currentScreen.name}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-contain object-center"
            loading="eager"
            draggable={false}
          />
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between w-full h-14 px-2 mt-1 gap-3 shrink-0">
        <button
          type="button"
          onClick={handlePrevious}
          aria-label="Wireframe precedente"
          className="w-9 h-9 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-[#B50D3A] hover:border-[#B50D3A] flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-md shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex-1 flex flex-col items-center justify-center gap-1.5 text-center min-w-0">
          <span className="text-sm sm:text-base font-urbanist font-semibold text-white tracking-tight truncate whitespace-nowrap block max-w-full">
            {currentScreen.name}
          </span>

          <div className="flex items-center gap-1.5 mt-0.5" aria-label="Paginazione wireframe">
            {SCREENS.map((screen, index) => (
              <button
                key={screen.id}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Mostra il wireframe ${index + 1}: ${screen.name}`}
                aria-current={index === currentIndex ? 'true' : undefined}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-5 bg-[#B50D3A]' : 'w-1.5 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Wireframe successivo"
          className="w-9 h-9 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-[#B50D3A] hover:border-[#B50D3A] flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-md shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <p className="sr-only" aria-live="polite">
        Wireframe {currentIndex + 1} di {SCREENS.length}: {currentScreen.name}
      </p>
    </div>
  );
}
