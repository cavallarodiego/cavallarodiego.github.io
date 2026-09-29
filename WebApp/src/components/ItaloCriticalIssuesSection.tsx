import React from 'react';
import { AlertTriangle, Compass, Image, Smartphone, type LucideIcon } from 'lucide-react';
import CardFanCarousel from './ui/card-fan-carousel';

interface IssueCardProps {
  icon: LucideIcon;
  title: React.ReactNode;
  description: string;
  number: string;
}

function IssueCard({ icon: Icon, title, description, number }: IssueCardProps) {
  return (
    <>
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-20 bg-[#B50D3A] opacity-[0.25] blur-[40px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#B50D3A]/80 to-transparent z-10" />

      <div className="flex flex-col items-center justify-center w-full h-full gap-8 relative z-10 pt-4">
        <div className="w-16 h-16 rounded-full bg-white/[0.02] flex items-center justify-center border border-white/[0.05] shadow-inner shrink-0">
          <Icon className="w-7 h-7 text-[#B50D3A]" />
        </div>
        <div className="flex flex-col items-center gap-4 text-center">
          <h4 className="text-white font-medium text-2xl md:text-[32px] tracking-tight leading-[1.1]">{title}</h4>
          <p className="text-neutral-400 text-[15px] leading-relaxed font-light max-w-[280px]">{description}</p>
          <span className="text-[11px] font-mono font-bold text-[#B50D3A] uppercase tracking-[0.2em] mt-6">
            Problema {number}
          </span>
        </div>
      </div>
    </>
  );
}

const issues = [
  {
    icon: AlertTriangle,
    title: <>Navigazione<br />Labirintica</>,
    description: "Eccessiva ridondanza dei menu con voci duplicate e sezioni superflue che rallentano il flusso d'acquisto disorientando l'utente.",
    number: '01',
  },
  {
    icon: Compass,
    title: <>Gerarchia<br />Visiva Assente</>,
    description: 'Testi monocromatici e dimensionamento errato (prezzi minuscoli, titoli non centrati) rendono faticosa la scansione rapida.',
    number: '02',
  },
  {
    icon: Image,
    title: <>Frizioni<br />Cromatiche</>,
    description: 'Uso fuorviante dei colori: il rosso viene usato per evidenziare messaggi positivi. Scarso contrasto sulle call to action primarie.',
    number: '03',
  },
  {
    icon: Smartphone,
    title: <>Discontinuità<br />d'Interfaccia</>,
    description: "Spaziature incoerenti, layout frammentato e icone fuori standard che minano pesantemente la percezione qualitativa dell'app.",
    number: '04',
  },
];

export function ItaloCriticalIssuesSection() {
  return (
    <section
      id="italo-treni-critical-issues"
      data-project-section="03-critical-issues"
      aria-labelledby="italo-critical-issues-title"
      className="w-full min-h-[100svh] relative z-20 flex items-center justify-center overflow-hidden py-20 sm:py-24 lg:py-28"
      style={{ backgroundColor: '#000000' }}
    >
      <div className="relative z-20 flex flex-col items-center gap-12 w-full max-w-[90rem] px-6 pointer-events-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2
            id="italo-critical-issues-title"
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase font-sans drop-shadow-lg"
          >
            Criticità
          </h2>
        </div>
        <div className="w-full relative z-30">
          <CardFanCarousel
            cards={issues.map((issue) => ({
              content: <IssueCard {...issue} />,
            }))}
          />
        </div>
      </div>
    </section>
  );
}
