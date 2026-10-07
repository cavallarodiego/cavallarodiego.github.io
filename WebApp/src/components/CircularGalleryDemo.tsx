import { lazy, Suspense, useEffect, useMemo, useRef, useState } from "react";

const CircularGallery = lazy(() =>
  import("./ui/circular-gallery-2").then(module => ({ default: module.CircularGallery }))
);

import { getGalleryItems } from "./galleryData";

export function CircularGalleryDemo({ lang }: { lang: 'it' | 'en' }) {
  const items = useMemo(() => getGalleryItems(lang), [lang]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [nearViewport, setNearViewport] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || nearViewport) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setNearViewport(true);
        observer.disconnect();
      }
    }, { rootMargin: '200px 0px' });
    observer.observe(container);
    return () => observer.disconnect();
  }, [nearViewport]);

  return (
    <div ref={containerRef} className="relative h-[480px] sm:h-[600px] w-full bg-transparent">
      {nearViewport && <Suspense fallback={null}>
        <CircularGallery
          items={items}
          bend={3}
          borderRadius={0.05}
          scrollEase={0.02}
          className="text-white"
        />
      </Suspense>}
    </div>
  );
}
