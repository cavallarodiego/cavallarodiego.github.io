import { ItaloTrainMarquee } from './ItaloTrainMarquee';
import { ItaloDesignSystemCarousel } from './ItaloDesignSystemCarousel';

interface ItaloDesignSystemSectionProps {
  lang?: 'it' | 'en';
}

export default function ItaloDesignSystemSection({ lang = 'it' }: ItaloDesignSystemSectionProps) {
  const primaryColors = [
    { hex: '#B50D3A', bgClass: 'bg-[#B50D3A]' },
    { hex: '#FFFFFF', bgClass: 'bg-white' },
    { hex: '#EBEBEB', bgClass: 'bg-[#EBEBEB]' },
    { hex: '#111111', bgClass: 'bg-[#111111]' },
  ];

  const basePath = `${import.meta.env.BASE_URL}Images/Project 03/design_system/`;
  const componentsPath = `${basePath}updated-components/`;

  return (
    <section
      id="italo-treni-design-system"
      data-project-section="05-design-system"
      aria-labelledby="italo-design-system-title"
      className="w-full relative z-20 py-24 sm:py-28 lg:py-32 px-5 sm:px-8 md:px-12 max-w-[1400px] mx-auto"
    >
      <h2 id="italo-design-system-title" className="sr-only">Design System</h2>
      <div className="relative left-1/2 mb-14 w-screen -translate-x-1/2 sm:mb-16 lg:mb-20">
        <ItaloTrainMarquee label="DESIGN SYSTEM" />
      </div>

      {/* Design System Bento Grid */}
      <div className="flex w-full flex-col gap-4 lg:gap-5">

        {/* Palette and typography above the component card */}
        <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-5">
          <div className="rounded-[1.5rem] bg-white/[0.02] border border-white/[0.07] backdrop-blur-lg p-5 sm:p-6 max-md:!py-9 flex flex-col justify-center items-center shadow-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#B50D3A]/[0.035] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="grid grid-cols-2 sm:grid-cols-4 justify-items-center gap-x-3 gap-y-4 relative z-10 w-full max-w-[520px]">
              {primaryColors.map((color) => (
                <div key={color.hex} className="flex w-full flex-col items-center gap-2">
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full shadow-md border border-white/10 shrink-0 ${color.bgClass}`} />
                  <div className="text-center">
                    <span className="text-[10px] font-mono text-neutral-500">{color.hex}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] bg-white/[0.02] border border-white/[0.07] backdrop-blur-lg p-5 sm:p-6 md:p-7 flex flex-col justify-center items-start shadow-lg relative overflow-hidden group min-h-[170px]">
            <div className="absolute inset-0 bg-gradient-to-bl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="flex flex-col gap-2 relative z-10 w-full">
              <span className="font-mono text-[11px] text-[#B50D3A] font-bold uppercase tracking-wider mb-1">Body / Instrument Sans, Regular, 18px</span>
              <p style={{ fontFamily: "'Instrument Sans', sans-serif" }} className="text-neutral-300 text-base sm:text-lg leading-relaxed font-normal">Body</p>
            </div>
          </div>

          <div className="rounded-[1.5rem] bg-white/[0.02] border border-white/[0.07] backdrop-blur-lg p-5 sm:p-6 md:p-7 flex flex-col justify-center items-start shadow-lg relative overflow-hidden group min-h-[170px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#B50D3A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="flex flex-col gap-2 relative z-10 w-full">
              <span className="font-mono text-[11px] text-[#B50D3A] font-bold uppercase tracking-wider mb-2">H1 / Instrument Sans, Bold, 56px</span>
              <div style={{ fontFamily: "'Instrument Sans', sans-serif" }} className="text-white text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight leading-tight">Title</div>
            </div>
          </div>
        </div>

        {/* Componenti Core & UI Kit */}
        <div className="rounded-[2rem] bg-white/[0.02] border border-white/[0.07] backdrop-blur-lg p-5 sm:p-7 md:p-9 shadow-xl relative overflow-hidden group flex flex-col gap-8">
          <div className="absolute inset-0 bg-gradient-to-br from-[#B50D3A]/[0.035] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <ItaloDesignSystemCarousel basePath={componentsPath} lang={lang} />
          <div className="relative z-10 hidden w-full flex-col gap-12 md:flex lg:gap-16">
            {/* Main app screens */}
            <div className="grid w-full grid-cols-1 items-center gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 xl:gap-10">
              <img
                src={`${componentsPath}calendar.png`}
                alt="Selettore della data di ritorno"
                className="mx-auto h-[250px] w-full max-w-[230px] object-contain drop-shadow-xl transition-transform duration-300 hover:scale-[1.02] sm:h-[270px]"
                loading="eager"
              />
              <img
                src={`${componentsPath}promo-default.png`}
                alt="Card promozionale Italo"
                className="mx-auto h-[250px] w-full max-w-[230px] object-contain drop-shadow-xl transition-transform duration-300 hover:scale-[1.02] sm:h-[270px]"
                loading="eager"
              />
              <img
                src={`${componentsPath}promo-friends.png`}
                alt="Card promozionale Italo Friends"
                className="mx-auto h-[250px] w-full max-w-[230px] object-contain drop-shadow-xl transition-transform duration-300 hover:scale-[1.02] sm:h-[270px]"
                loading="eager"
              />
              <img
                src={`${componentsPath}ticket.png`}
                alt="Biglietto digitale Italo"
                className="mx-auto h-[250px] w-full max-w-[270px] object-contain drop-shadow-xl transition-transform duration-300 hover:scale-[1.02] sm:h-[270px]"
                loading="eager"
              />
            </div>

            {/* Supporting UI components aligned in three balanced columns */}
            <div className="grid w-full grid-cols-1 items-center gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-12">
              <div className="flex min-w-0 items-center justify-center">
                <img
                  src={`${componentsPath}tabbar.png`}
                  alt="Barra di navigazione inferiore"
                  className="h-auto w-full max-w-[340px] object-contain drop-shadow-lg transition-transform duration-300 hover:scale-[1.015]"
                  loading="eager"
                />
              </div>

              <div className="flex min-w-0 items-center justify-center">
                <img
                  src={`${componentsPath}navbar.png`}
                  alt="Barra superiore dell’app Italo"
                  className="h-auto w-full max-w-[340px] object-contain drop-shadow-lg transition-transform duration-300 hover:scale-[1.015]"
                  loading="eager"
                />
              </div>

              <div className="flex min-w-0 items-center justify-center">
                <img
                  src={`${componentsPath}route.png`}
                  alt="Selettore della tratta"
                  className="h-auto w-full max-w-[340px] object-contain drop-shadow-lg transition-transform duration-300 hover:scale-[1.02]"
                  loading="eager"
                />
              </div>

              <div className="flex min-w-0 items-center justify-center">
                <img src={`${componentsPath}button-red.png`} alt="Pulsante primario" className="w-full max-w-[350px] object-contain" loading="eager" />
              </div>

              <div className="flex min-w-0 items-center justify-center">
                <img src={`${componentsPath}button-dark.png`} alt="Pulsante secondario" className="w-full max-w-[350px] object-contain" loading="eager" />
              </div>

              <div className="flex min-w-0 items-center justify-center">
                <img
                  src={`${componentsPath}passengers.png`}
                  alt="Selettore del numero di passeggeri"
                  className="h-auto w-full max-w-[340px] object-contain drop-shadow-lg transition-transform duration-300 hover:scale-[1.02]"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
