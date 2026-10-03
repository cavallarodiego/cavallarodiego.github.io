import { useEffect, useRef, useState, useSyncExternalStore } from 'react';

const mobileQuery = '(max-width: 767px)';
const reducedQuery = '(prefers-reduced-motion: reduce)';
const subscribe = (notify: () => void) => {
  const queries = [matchMedia(mobileQuery), matchMedia(reducedQuery)];
  queries.forEach(query => query.addEventListener('change', notify));
  return () => queries.forEach(query => query.removeEventListener('change', notify));
};
const snapshot = () => (matchMedia(mobileQuery).matches ? 1 : 0) |
  (matchMedia(reducedQuery).matches ? 2 : 0);

export function useUrbanMobile() {
  const flags = useSyncExternalStore(subscribe, snapshot, () => 0);
  return { isMobile: Boolean(flags & 1), reducedMotion: Boolean(flags & 2) };
}

// Desktop keeps its existing animation lifecycle. On phones, stop offscreen work
// and react to breakpoint changes rather than mobile browser toolbar resizes.
export function useUrbanActivity<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const { isMobile, reducedMotion } = useUrbanMobile();
  const [visible, setVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  useEffect(() => {
    if (!isMobile || !ref.current) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      rootMargin: '100px',
    });
    observer.observe(ref.current);
    const onVisibility = () => setPageVisible(!document.hidden);
    onVisibility();
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [isMobile]);
  return { ref, isMobile, reducedMotion, visible,
    active: !isMobile || (visible && pageVisible && !reducedMotion) };
}
