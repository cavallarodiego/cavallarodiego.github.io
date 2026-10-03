import { RefObject, useEffect, useState } from 'react';
import { useOrtoMobile } from './useOrtoMobile';

// Desktop retains its current timing. Mobile animations run only while visible.
export function useOrtoAutoplay(ref: RefObject<HTMLElement | null>) {
  const isMobile = useOrtoMobile();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!isMobile || !ref.current) return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible = false;
    const update = () => setActive(visible && !document.hidden && !media.matches);
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    });
    observer.observe(ref.current);
    media.addEventListener('change', update);
    document.addEventListener('visibilitychange', update);
    return () => {
      observer.disconnect();
      media.removeEventListener('change', update);
      document.removeEventListener('visibilitychange', update);
    };
  }, [isMobile, ref]);

  return !isMobile || active;
}
