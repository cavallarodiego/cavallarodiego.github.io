import ThreeDMarquee from './ui/3d-marquee';
import { useRef } from 'react';
import { useOrtoAutoplay } from './useOrtoAutoplay';
import { useOrtoMobile } from './useOrtoMobile';

export function OrtoAppShowcaseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const autoplay = useOrtoAutoplay(sectionRef);
  const isMobile = useOrtoMobile();
  return (
    <section
      ref={sectionRef}
      id="orto-app-showcase-section"
      aria-label="Schermate dell'app Orto Botanico"
      className="mt-24 md:mt-32 w-[100vw] relative left-1/2 -translate-x-1/2 overflow-hidden"
    >
      <ThreeDMarquee animate={autoplay} lazyImages={isMobile} />
    </section>
  );
}
