import { StickyCard002 } from './ui/sticky-card';
import { useEffect, useRef, useState } from 'react';
import { useOrtoAutoplay } from './useOrtoAutoplay';
import { useOrtoMobile } from './useOrtoMobile';

const galleryCards = [
  { id: 'home', image: `${import.meta.env.BASE_URL}Images/Project 03/mockup_gallery/mockup_home.jpg`, alt: 'Mockup della home dell’app Italo' },
  { id: 'tickets', image: `${import.meta.env.BASE_URL}Images/Project 03/mockup_gallery/scegli_biglietto.jpg`, alt: 'Mockup della selezione del biglietto Italo' },
  { id: 'purchase', image: `${import.meta.env.BASE_URL}Images/Project 03/mockup_gallery/acquista.jpg`, alt: 'Mockup del flusso di acquisto Italo' },
  { id: 'ticket', image: `${import.meta.env.BASE_URL}Images/Project 03/mockup_gallery/biglietto.jpg`, alt: 'Mockup del biglietto digitale Italo' },
];

const mobileImageMask = 'linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)';

export function ItaloMockupGallerySection() {
  const isMobile = useOrtoMobile();

  if (isMobile) return null;

  return (
    <section id="italo-treni-mockup-gallery" data-project-section="07-mockup-gallery" aria-label="Galleria mockup Italo" className="hidden bg-[#050505] pt-12 sm:pt-16 md:block lg:pt-20">
      <StickyCard002 cards={galleryCards} imageClassName="[clip-path:inset(0_2px_0_0)]" />
    </section>
  );
}

export function ItaloMobileMockupShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const autoplay = useOrtoAutoplay(sectionRef);
  const isMobile = useOrtoMobile();
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (!isMobile || !autoplay) return;
    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % galleryCards.length);
    }, 4000);
    return () => window.clearInterval(interval);
  }, [isMobile, autoplay]);

  return (
    <section
      ref={sectionRef}
      id="italo-treni-mobile-showcase"
      data-project-section="07-mockup-gallery-mobile"
      aria-label="Galleria schermate Italo"
      className="relative z-10 w-full shrink-0 md:hidden"
    >
      <div className="relative flex h-[68svh] min-h-[420px] max-h-[640px] w-full items-center justify-center overflow-hidden rounded-none bg-black p-0" role="region" aria-label="Galleria automatica dei mockup Italo">
        {galleryCards.map((card, index) => (
          <img
            key={card.id}
            src={card.image}
            alt={card.alt}
            loading="lazy"
            decoding="async"
            className={`absolute inset-0 h-full w-full rounded-none object-cover transition-opacity duration-700 ${index === activeImage ? 'opacity-100' : 'opacity-0'}`}
            style={{ maskImage: mobileImageMask, WebkitMaskImage: mobileImageMask }}
            aria-hidden={index !== activeImage}
          />
        ))}
      </div>
    </section>
  );
}
