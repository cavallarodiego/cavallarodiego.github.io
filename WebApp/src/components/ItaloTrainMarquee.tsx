import React from 'react';

interface ItaloTrainMarqueeProps {
  label: string;
  className?: string;
}

const MARQUEE_ITEMS = 5;

function TrainShape() {
  const trainSrc = `${import.meta.env.BASE_URL}train_divider.svg`;

  return (
    <svg
      viewBox="0 0 1194 145"
      aria-hidden="true"
      className="h-full w-auto aspect-[1194/145] shrink-0"
    >
      <image href={trainSrc} width="2153" height="145" preserveAspectRatio="xMinYMid meet" />
    </svg>
  );
}

function MarqueeTrack({ label, clone = false }: { label: string; clone?: boolean }) {
  return (
    <div
      className="flex h-full shrink-0 items-center gap-8 pr-8 sm:gap-12 sm:pr-12"
      aria-hidden={clone || undefined}
    >
      {Array.from({ length: MARQUEE_ITEMS }, (_, index) => (
        <React.Fragment key={`${clone ? 'clone' : 'primary'}-${index}`}>
          <span className="shrink-0 whitespace-nowrap font-sans text-[18px] font-black uppercase tracking-tight text-white sm:text-[24px] lg:text-[30px]">
            {label}
          </span>
          <TrainShape />
        </React.Fragment>
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
      className={`relative flex h-[42px] w-full select-none items-center overflow-hidden border-b border-[#B50D3A]/20 opacity-90 pointer-events-none ${className}`}
      aria-label={label}
    >
      <div className="flex h-full w-max animate-train-scroll-seamless">
        <MarqueeTrack label={label} />
        <MarqueeTrack label={label} clone />
      </div>
    </div>
  );
});
