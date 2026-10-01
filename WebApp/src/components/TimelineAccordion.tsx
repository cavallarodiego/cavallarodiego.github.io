import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertTriangle, Lightbulb, Check, X } from 'lucide-react';

export interface PhaseData {
  id: string;
  title: string;
  icon: React.ReactNode;
  features: string[];
  linkText: string;
  linkHref: string;
  textColors: {
    active: string;
    hover: string;
    iconBorder: string;
    iconGlow: string;
    gradientFrom: string;
    gradientTo: string;
    check: string;
    link: string;
    linkBorder: string;
    linkBorderHover: string;
  };
}

export const defaultPhases: PhaseData[] = [
  {
    id: 'problems',
    title: 'Problemi riscontrati',
    icon: <AlertTriangle className="w-5 h-5 text-[#E8302A]" />,
    features: ['Disorientamento dei visitatori', 'Informazione analogica statica', 'Mancanza di interazione', 'Poche informazioni utili'],
    linkText: 'Analisi dei problemi',
    linkHref: '#',
    textColors: {
      active: 'text-white',
      hover: 'group-hover:text-[#E8302A]',
      iconBorder: 'border-[#E8302A]',
      iconGlow: 'bg-[#E8302A]/20',
      gradientFrom: '#E8302A',
      gradientTo: '#8B0606', // darker red
      check: 'text-[#E8302A]',
      link: 'text-[#E8302A]',
      linkBorder: 'border-[#E8302A]/30',
      linkBorderHover: 'group-hover/link:border-[#E8302A]'
    }
  },
  {
    id: 'solutions',
    title: 'Soluzioni adottate',
    icon: <Lightbulb className="w-5 h-5 text-[#068B35]" />,
    features: ['Totem interattivi all\'ingresso', 'QR Code per approfondimenti', 'Web-App dedicata', 'Mappa digitale a portata di mano'],
    linkText: 'Scopri le soluzioni',
    linkHref: '#',
    textColors: {
      active: 'text-white',
      hover: 'group-hover:text-[#068B35]',
      iconBorder: 'border-[#068B35]',
      iconGlow: 'bg-[#068B35]/20',
      gradientFrom: '#068B35', // classic green
      gradientTo: '#023011', 
      check: 'text-[#068B35]',
      link: 'text-[#068B35]',
      linkBorder: 'border-[#068B35]/30',
      linkBorderHover: 'group-hover/link:border-[#068B35]'
    }
  }
];

export default function TimelineAccordion({ 
  activePhase, 
  onPhaseChange,
  phases = defaultPhases
}: { 
  activePhase: string, 
  onPhaseChange: (phase: string) => void,
  phases?: PhaseData[]
}) {
  return (
    <div className="pointer-events-auto col-span-full duration-500 ease-in-out lg:col-span-4 w-full max-w-lg font-raleway mx-auto lg:ml-12 grid auto-rows-fr max-md:auto-rows-auto max-md:content-start">
      {phases.map((phase, index) => {
        const isActive = activePhase === phase.id;
        const colors = phase.textColors;
        
        return (
          <div 
            key={phase.id}
            role="button" 
            tabIndex={0} 
            className={`phase-item py-6 max-md:py-10 relative flex cursor-pointer gap-4 outline-none group ${index === 0 ? 'max-md:pt-4' : ''}`}
            onClick={() => onPhaseChange(phase.id)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onPhaseChange(phase.id);
              }
            }}
            aria-expanded={isActive}
          >
            {/* Top Separator Line for inactive items (except first) */}
            {index > 0 && (
              <span className="h-[1px] absolute top-0 left-0 w-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-opacity duration-300 max-md:via-white/20"></span>
            )}
            
              <div className="phase-content relative flex lg:block flex-wrap w-full max-md:flex-nowrap max-md:gap-4 max-md:flex-col max-md:items-center">
              {/* Vertical Connection Line */}
              <span 
                className="left-6 lg:-left-12 absolute top-0 h-[calc(100%+3rem)] w-[1px] border-l border-dashed border-white/20 max-md:hidden"
              >
                {/* Active gradient overlay line inside */}
                <motion.span 
                  initial={{ height: 0 }}
                  animate={{ height: isActive ? '100%' : '0%' }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute top-0 left-[-1px] w-[2px]" 
                  style={{ backgroundImage: `linear-gradient(to bottom, ${colors.gradientFrom}, ${colors.gradientTo})` }}
                />
              </span>
              
              {/* Circular Icon Container */}
              <div className="bg-[#121312] relative flex h-12 w-12 items-center justify-center rounded-full lg:absolute lg:-top-2 lg:-left-[4.2rem] shrink-0 border border-white/10 z-10 transition-all duration-300">
                {/* Glow effect for active state */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className={`absolute inset-[-4px] rounded-full blur-md ${colors.iconGlow} ${colors.iconBorder} border`}
                    />
                  )}
                </AnimatePresence>
                
                {/* Internal Icon */}
                <div className="relative z-10">
                  {phase.icon}
                </div>
              </div>

              {/* Accordion Content */}
              <div className="relative ml-20 lg:ml-0 w-full max-md:ml-0 max-md:min-w-0 max-md:flex-none">
                
                {/* Title */}
                <div className="flex items-center lg:min-h-12 lg:-translate-y-2 max-md:min-h-12 max-md:justify-center">
                  <p className={`text-xl max-md:text-[20px] font-bold transition-colors duration-300 ${isActive ? colors.active : `text-white/60 ${colors.hover}`}`}>
                    {phase.title}
                  </p>
                </div>
                
                {/* Expandable Body */}
                <div className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} lg:-mt-2 max-md:mt-4`}>
                  <div className="min-h-0">
                    <div className="relative space-y-4 text-white pb-4 pt-2">
                      
                      {/* Features List */}
                      <ul className="m-0 list-none space-y-2 max-md:space-y-5 p-0 max-md:w-full max-md:max-w-[280px] max-md:mx-auto">
                        {phase.features.map((feature, idx) => (
                          <li key={idx} className="list-none">
                            <div className="flex items-center gap-2">
                              {phase.id === 'problems' ? (
                                <>
                                  <Check className={`hidden md:block w-4 h-4 shrink-0 ${colors.check}`} strokeWidth={2.5} />
                                  <X className={`md:hidden w-4 h-4 shrink-0 ${colors.check}`} strokeWidth={2.5} />
                                </>
                              ) : (
                                <Check className={`w-4 h-4 shrink-0 ${colors.check}`} strokeWidth={2.5} />
                              )}
                              <p className="min-w-0 text-sm max-md:text-[16px] text-white/90 font-light max-md:text-white/75">{feature}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Explore Link removed as requested */}

                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
