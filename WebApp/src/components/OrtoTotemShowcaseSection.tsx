import { useEffect, useState } from 'react';
import { StickyCard002 } from './ui/sticky-card';

const totemShowcaseCards = [
  { id: 1, image: './Images/Project 01/mockup_totem_3.jpg', alt: 'Totem Mockup 3' },
  { id: 2, image: './Images/Project 01/mockup_totem.jpg', alt: 'Totem Mockup' },
  { id: 3, image: './Images/Project 01/mockup_cartello_zone_2.jpeg', alt: 'Cartello Zone Mockup' },
  { id: 4, image: './Images/Project 01/mockup_cartello_pianta_2.jpg', alt: 'Cartello Pianta Mockup 2' },
];

export function OrtoTotemShowcaseSection() {
  const [isDesktop, setIsDesktop] = useState(() => window.matchMedia('(min-width: 768px)').matches);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const updateViewport = () => setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener('change', updateViewport);
    return () => mediaQuery.removeEventListener('change', updateViewport);
  }, []);

  useEffect(() => {
    if (isDesktop) return;
    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % totemShowcaseCards.length);
    }, 4000);
    return () => window.clearInterval(interval);
  }, [isDesktop]);

  return (
    <section id="totem-showcase" className="relative z-10 w-full shrink-0 block">
      {isDesktop ? (
        <StickyCard002 cards={totemShowcaseCards} />
      ) : (
        <div className="relative left-1/2 flex h-[78svh] min-h-[480px] max-h-[760px] w-screen -translate-x-1/2 items-center justify-center overflow-hidden rounded-none bg-[#050505] p-0" role="region" aria-label="Galleria automatica dei totem e della segnaletica">
          {totemShowcaseCards.map((card, index) => (
            <img
              key={card.id}
              src={card.image}
              alt={card.alt || ''}
              className={`absolute inset-0 h-full w-full rounded-none object-cover transition-opacity duration-700 ${index === activeImage ? 'opacity-100' : 'opacity-0'}`}
              aria-hidden={index !== activeImage}
            />
          ))}
        </div>
      )}
    </section>
  );
}
