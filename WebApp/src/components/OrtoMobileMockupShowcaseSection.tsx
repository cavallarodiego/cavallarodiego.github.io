import React from 'react';
import { useOrtoAutoplay } from './useOrtoAutoplay';
import { useOrtoMobile } from './useOrtoMobile';

export function OrtoMobileMockupShowcaseSection() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const autoplay = useOrtoAutoplay(sectionRef);
  const isMobile = useOrtoMobile();
  const [mobileImageIndex, setMobileImageIndex] = React.useState(0);

  React.useEffect(() => {
    if (!autoplay) return;
    const interval = window.setInterval(() => {
      setMobileImageIndex((previousIndex) => (previousIndex === 0 ? 1 : 0));
    }, 4000);

    return () => window.clearInterval(interval);
  }, [autoplay]);

  return (
    <section
      ref={sectionRef}
      id="mobile-mockup-showcase"
      className="relative z-30 flex flex-col justify-center items-center w-[100vw] left-1/2 -translate-x-1/2 h-[60vh] md:h-[100vh]"
    >
      <div className="relative w-full h-full">
        <img
          src="./Images/Project 01/mockup_mobile.jpg"
          alt="Bussola Verde App Preview 1"
          loading={isMobile ? 'lazy' : undefined}
          decoding={isMobile ? 'async' : undefined}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 shadow-2xl ${mobileImageIndex === 0 ? 'opacity-100' : 'opacity-0'}`}
        />
        <img
          src="./Images/Project 01/mockup_mobile_2.jpg"
          alt="Bussola Verde App Preview 2"
          loading={isMobile ? 'lazy' : undefined}
          decoding={isMobile ? 'async' : undefined}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 shadow-2xl ${mobileImageIndex === 1 ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
    </section>
  );
}
