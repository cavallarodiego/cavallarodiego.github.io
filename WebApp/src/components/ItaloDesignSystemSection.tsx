import { ItaloTrainMarquee } from './ItaloTrainMarquee';

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
      className="w-full min-h-[100svh] relative z-20 py-20 sm:py-24 lg:py-28 px-6 sm:px-12 md:px-16 max-w-[1600px] mx-auto"
    >
      <h2 id="italo-design-system-title" className="sr-only">Design System</h2>
      <div className="relative left-1/2 mb-14 w-screen -translate-x-1/2 sm:mb-16 lg:mb-20">
        <ItaloTrainMarquee label="DESIGN SYSTEM" />
      </div>

      {/* Design System Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 w-full items-stretch">

        {/* Left Side: Componenti Core & UI Kit (lg:col-span-7) */}
        <div className="lg:col-span-7 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden group flex flex-col gap-8">
          <div className="absolute inset-0 bg-gradient-to-br from-[#B50D3A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="relative z-10 grid w-full grid-cols-1 gap-x-8 gap-y-9 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:gap-x-10 lg:gap-y-14">
            {/* Top row: calendar and promotional cards */}
            <div className="col-span-full mx-auto grid w-full max-w-[660px] grid-cols-1 items-end gap-6 sm:grid-cols-3 sm:gap-5 xl:gap-8">
              <img
                src={`${componentsPath}calendar.png`}
                alt="Selettore della data di ritorno"
              className="mx-auto h-[250px] w-full max-w-[230px] object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-[1.025]"
                loading="eager"
              />
              <img
                src={`${componentsPath}promo-default.png`}
                alt="Card promozionale Italo"
              className="mx-auto h-[250px] w-full max-w-[230px] object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-[1.025]"
                loading="eager"
              />
              <img
                src={`${componentsPath}promo-friends.png`}
                alt="Card promozionale Italo Friends"
              className="mx-auto h-[250px] w-full max-w-[230px] object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-[1.025]"
                loading="eager"
              />
            </div>

            {/* Navigation bars */}
            <div className="col-span-full mx-auto grid w-full max-w-[660px] grid-cols-1 items-center gap-7 sm:grid-cols-2 sm:gap-8">
              <div className="flex min-w-0 items-center justify-center sm:justify-self-center">
                <img
                  src={`${componentsPath}tabbar.png`}
                  alt="Barra di navigazione inferiore"
                  className="h-auto w-full max-w-[340px] object-contain drop-shadow-xl transition-transform duration-300 hover:scale-[1.02]"
                  loading="eager"
                />
              </div>
              <div className="flex min-w-0 items-center justify-center sm:justify-self-center">
                <img
                  src={`${componentsPath}navbar.png`}
                  alt="Barra superiore dell’app Italo"
                  className="h-auto w-full max-w-[340px] object-contain drop-shadow-xl transition-transform duration-300 hover:scale-[1.02]"
                  loading="eager"
                />
              </div>
            </div>

            {/* Primary and secondary actions */}
            <div className="col-span-full mx-auto grid w-full max-w-[660px] grid-cols-1 items-center gap-5 sm:grid-cols-2 sm:gap-7">
              <img src={`${componentsPath}button-red.png`} alt="Pulsante primario" className="w-full object-contain" loading="eager" />
              <img src={`${componentsPath}button-dark.png`} alt="Pulsante secondario" className="w-full object-contain" loading="eager" />
            </div>

            {/* Ticket and booking fields */}
            <img
              src={`${componentsPath}ticket.png`}
              alt="Biglietto digitale Italo"
              className="mx-auto max-h-[360px] w-full max-w-[300px] object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-[1.025] sm:justify-self-center"
              loading="eager"
            />

            <div className="mx-auto flex w-full max-w-[330px] min-w-0 flex-col items-center justify-center gap-6 sm:gap-7 sm:self-center">
              <img
                src={`${componentsPath}route.png`}
                alt="Selettore della tratta"
                className="max-h-[124px] w-full object-contain drop-shadow-xl transition-transform duration-300 hover:scale-[1.025]"
                loading="eager"
              />
              <img
                src={`${componentsPath}passengers.png`}
                alt="Selettore del numero di passeggeri"
                className="max-h-[64px] w-full object-contain drop-shadow-xl transition-transform duration-300 hover:scale-[1.025]"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Color Palette & Typography (lg:col-span-5) */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5 lg:gap-6">
          {/* Color Palette Principale */}
          <div className="sm:col-span-2 lg:col-span-1 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-center items-center shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#B50D3A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 justify-items-center gap-x-4 gap-y-5 relative z-10 w-full max-w-[520px]">
              {primaryColors.map((color) => (
                <div
                  key={color.hex}
                  className="flex w-full flex-col items-center gap-2"
                >
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full shadow-lg border border-white/15 shrink-0 ${color.bgClass}`}
                  />
                  <div className="text-center">
                    <span className="text-[10px] font-mono text-neutral-500">
                      {color.hex}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Body Text Demo */}
          <div className="rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl p-6 sm:p-7 md:p-8 flex flex-col justify-center items-start shadow-2xl relative overflow-hidden group min-h-[210px]">
            <div className="absolute inset-0 bg-gradient-to-bl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="flex flex-col gap-2 relative z-10 w-full">
              <span className="font-mono text-[11px] text-[#B50D3A] font-bold uppercase tracking-wider mb-1">
                Body / Instrument Sans, Regular, 18px
              </span>
              <p 
                style={{ fontFamily: "'Instrument Sans', sans-serif" }} 
                className="text-neutral-300 text-base sm:text-lg leading-relaxed font-normal"
              >
                {lang === 'it'
                  ? "La nuova esperienza digitale di Italo unisce velocità, trasparenza e chiarezza visiva. Un sistema tipografico ad alto contrasto per rendere ogni informazione immediata e priva di attriti."
                  : "Italo's new digital experience blends high speed, transparency, and visual clarity. A high-contrast typographic system engineered to make every travel decision instantaneous and frictionless."}
              </p>
            </div>
          </div>

          {/* H1 Demo */}
          <div className="rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl p-6 sm:p-7 md:p-8 flex flex-col justify-center items-start shadow-2xl relative overflow-hidden group min-h-[210px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#B50D3A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="flex flex-col gap-2 relative z-10 w-full">
              <span className="font-mono text-[11px] text-[#B50D3A] font-bold uppercase tracking-wider mb-2">
                H1 / Instrument Sans, Bold, 56px
              </span>
              <h1 
                style={{ fontFamily: "'Instrument Sans', sans-serif" }} 
                className="text-white text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight leading-tight"
              >
                {lang === 'it' ? 'Viaggia ad Alta Velocità' : 'High-Speed Journey'}
              </h1>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
