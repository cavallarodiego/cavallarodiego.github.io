import React from 'react';

interface ItaloTrainMarqueeProps {
  label: string;
  className?: string;
}

const MARQUEE_ITEMS = 6;

function MarqueeTrack({ label, clone = false }: { label: string; clone?: boolean }) {
  return (
    <div
      className="flex h-full shrink-0 items-center gap-12 pr-12 sm:gap-20 sm:pr-20"
      aria-hidden={clone || undefined}
    >
      {Array.from({ length: MARQUEE_ITEMS }, (_, index) => (
        <span
          key={`${clone ? 'clone' : 'primary'}-${index}`}
          className="shrink-0 whitespace-nowrap font-sans text-[18px] font-black uppercase tracking-tight text-white sm:text-[24px] lg:text-[30px]"
        >
          {label}
        </span>
      ))}
    </div>
  );
}

export const ItaloTrainMarquee = React.memo(function ItaloTrainMarquee({
  label,
  className = '',
}: ItaloTrainMarqueeProps) {
  return (
    <div
      className={`relative flex h-[56px] w-full select-none items-center overflow-hidden bg-[#B50D3A]/40 pointer-events-none sm:h-[64px] ${className}`}
      aria-label={label}
    >
      <div className="flex h-full w-max animate-train-scroll-seamless">
        <MarqueeTrack label={label} />
        <MarqueeTrack label={label} clone />
      </div>
    </div>
  );
});
