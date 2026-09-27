import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const galleryImages = [
  { file: 'mockup_home.jpg', alt: 'Mockup della home dell’app Italo' },
  { file: 'scegli_biglietto.jpg', alt: 'Mockup della selezione del biglietto Italo' },
  { file: 'acquista.jpg', alt: 'Mockup del flusso di acquisto Italo' },
  { file: 'biglietto.jpg', alt: 'Mockup del biglietto digitale Italo' },
];

const basePath = `${import.meta.env.BASE_URL}Images/Project 03/mockup_gallery/`;

export function ItaloMockupGallerySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % galleryImages.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section
      id="italo-treni-mockup-gallery"
      data-project-section="07-mockup-gallery"
      aria-roledescription="carousel"
      aria-label="Galleria dei mockup dell’app Italo"
      className="relative left-1/2 w-screen h-[100svh] -translate-x-1/2 overflow-hidden bg-black"
    >
      <div className="hidden" aria-hidden="true">
        {galleryImages.map((image) => (
          <img key={image.file} src={`${basePath}${image.file}`} alt="" loading="eager" decoding="async" />
        ))}
      </div>

      <div className="absolute inset-0 overflow-hidden bg-[#080808]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={galleryImages[activeIndex].file}
            src={`${basePath}${galleryImages[activeIndex].file}`}
            alt={galleryImages[activeIndex].alt}
            initial={{ opacity: 0, scale: 1.015 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
        </AnimatePresence>
      </div>

      <p className="sr-only" aria-live="polite">
        Immagine {activeIndex + 1} di {galleryImages.length}
      </p>
    </section>
  );
}
