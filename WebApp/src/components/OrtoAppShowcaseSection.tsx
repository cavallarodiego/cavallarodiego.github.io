import ThreeDMarquee from './ui/3d-marquee';
import { useRef } from 'react';
import { useOrtoAutoplay } from './useOrtoAutoplay';
import { useOrtoMobile } from './useOrtoMobile';

const showcaseImages = [
  './Images/Project 01/app/mobile/showcase/coffea.jpg',
  './Images/Project 01/app/mobile/showcase/home.jpg',
  './Images/Project 01/app/mobile/showcase/map.jpg',
  './Images/Project 01/app/mobile/showcase/plants.jpg',
  './Images/Project 01/app/mobile/showcase/qr-scan.jpg',
  './Images/Project 01/app/mobile/showcase/short-route.jpg',
  './Images/Project 01/app/mobile/showcase/discovery-route.jpg',
  './Images/Project 01/app/mobile/showcase/route-map.jpg',
  './Images/Project 01/app/mobile/showcase/study-route.jpg',
];

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
      <ThreeDMarquee images={showcaseImages} animate={autoplay} lazyImages={isMobile} />
    </section>
  );
}
