import React from 'react';

type OrtoDesignSystemSectionProps = {
  lang: string;
  copiedColor: string | null;
  onCopyHex: (hex: string) => void;
};

const categoryColors = [
  { labelIt: 'Orto Generale', labelEn: 'General Garden', bg: '#0054F0' },
  { labelIt: 'Tropicale', labelEn: 'Tropical', bg: '#EEBE00' },
  { labelIt: 'Orto Siculo', labelEn: 'Sicilian Garden', bg: '#28BF31' },
  { labelIt: 'Arido', labelEn: 'Arid', bg: '#CE2B37' },
  { labelIt: 'Mediterraneo', labelEn: 'Mediterranean', bg: '#6B4FD4' },
  { labelIt: 'Fontanella', labelEn: 'Water Fountain', bg: '#39A1F6' },
  { labelIt: 'Bagni', labelEn: 'Restrooms', bg: '#00025D' },
];

export function OrtoDesignSystemSection({ lang, copiedColor, onCopyHex }: OrtoDesignSystemSectionProps) {
  const palette = ['#068B35', '#FFFFFF', '#EBEBEB'];

  return (
    <section className="flex flex-col gap-6 text-left" id="orto-design-system-section" aria-label="Design system Orto Botanico">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
        <div className="md:col-span-3 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl p-8 flex flex-col justify-center items-center shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            {palette.map((color) => (
              <button key={color} onClick={() => onCopyHex(color)} className="group/btn flex flex-col items-center gap-3 cursor-pointer">
                <div className="w-14 h-14 rounded-full shadow-lg border border-white/10 shrink-0 transition-transform group-hover/btn:scale-110" style={{ backgroundColor: color }} />
                <div className="text-center">
                  <span className="text-[11px] font-raleway text-neutral-500 group-hover/btn:text-white transition-colors">{copiedColor === color ? 'Copied' : color}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="md:col-span-9 max-md:hidden rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl p-8 flex flex-col justify-center items-center shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-5 relative z-10 w-full" id="orto-categories-row">
            {categoryColors.map((item, index) => (
              <button key={item.bg} onClick={() => onCopyHex(item.bg)} className="flex items-center gap-3 group/pill cursor-pointer" id={`category-pill-${index}`}>
                <div className="w-6 h-6 rounded-full shadow-md border border-white/10 shrink-0 transition-transform group-hover/pill:scale-110" style={{ backgroundColor: item.bg }} />
                <div className="text-left">
                  <span className="font-semibold text-sm text-white/90 block">{lang === 'it' ? item.labelIt : item.labelEn}</span>
                  <span className="font-raleway text-[11px] text-neutral-500 group-hover/pill:text-white transition-colors">{copiedColor === item.bg ? 'Copied!' : item.bg}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="md:col-span-7 max-md:hidden self-start rounded-[2.5rem] bg-[#111111] border border-white/10 shadow-2xl relative overflow-hidden" id="orto-block-components">
          <div className="relative w-full aspect-[2348/1746]">
            <img src="./Images/Project 01/design_system/reference-layout/percorso-breve.png" alt="Percorso Breve" className="absolute h-auto" style={{ left: '8.3%', top: '9.9%', width: '83.4%' }} />
            <img src="./Images/Project 01/design_system/reference-layout/ricerca-pianta.png" alt="Ricerca pianta" className="absolute h-auto" style={{ left: '8.2%', top: '40.3%', width: '40.2%' }} />
            <img src="./Images/Project 01/design_system/reference-layout/piante.png" alt="Piante" className="absolute h-auto" style={{ left: '58.3%', top: '40.2%', width: '33.4%' }} />
            <img src="./Images/Project 01/design_system/reference-layout/categorie.png" alt="Categorie botaniche" className="absolute h-auto" style={{ left: '8.2%', top: '54.8%', width: '83.1%' }} />
            <img src="./Images/Project 01/design_system/reference-layout/coffea.png" alt="Scheda Coffea" className="absolute h-auto" style={{ left: '8.5%', top: '71.2%', width: '39.8%' }} />
            <img src="./Images/Project 01/design_system/reference-layout/inizia-percorso.png" alt="Inizia il percorso" className="absolute h-auto" style={{ left: '53.7%', top: '76.4%', width: '38.3%' }} />
          </div>
        </div>

        <div className="md:col-span-5 flex flex-col gap-6">
          <div className="rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl p-8 md:p-10 flex flex-col justify-center items-start shadow-2xl relative overflow-hidden group flex-1">
            <div className="absolute inset-0 bg-gradient-to-bl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex flex-col gap-2 relative z-10">
              <span className="font-raleway text-[11px] text-[#068B35] font-bold uppercase tracking-wider mb-2">Body / Plus Jakarta Sans, Regular, 28px</span>
              <p className="text-[#EBEBEB] text-[16px] md:text-2xl leading-relaxed font-light">
                <span className="md:hidden">Body</span>
                <span className="hidden md:inline">{lang === 'it' ? 'Esplora la ricca biodiversità della nostra collezione di piante tropicali, progettata per stupire e ispirare.' : 'Explore the rich biodiversity of our tropical plant collection, designed to amaze and inspire.'}</span>
              </p>
            </div>
          </div>
          <div className="rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl p-8 md:p-12 flex flex-col justify-center items-start shadow-2xl relative overflow-hidden group flex-1">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex flex-col gap-2 relative z-10 w-full">
              <span className="font-raleway text-[11px] text-[#068B35] font-bold uppercase tracking-wider mb-2">H1 / Plus Jakarta Sans, Semibold, 62px</span>
              <div className="text-white text-[24px] md:text-[56px] lg:text-[62px] font-semibold leading-tight tracking-tight">
                <span className="md:hidden">Title</span>
                <span className="hidden md:inline">{lang === 'it' ? 'Scegli il percorso' : 'Choose the path'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
