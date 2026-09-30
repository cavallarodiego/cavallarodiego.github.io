import { useState } from 'react';
import { Home, Search, Ticket, Sparkles } from 'lucide-react';
import { AnimatedMenuText } from './ui/animated-menu';

interface ItaloBeforeAfterSectionProps {
  lang: 'it' | 'en';
}

interface ScreenComparison {
  id: string;
  labelIt: string;
  labelEn: string;
  icon: any;
  oldImg: string;
  newImg: string;
  titleIt: string;
  titleEn: string;
  descIt: string;
  descEn: string;
  highlightsIt: string[];
  highlightsEn: string[];
}

export default function ItaloBeforeAfterSection({ lang }: ItaloBeforeAfterSectionProps) {
  const screens: ScreenComparison[] = [
    {
      id: 'home',
      labelIt: 'Home',
      labelEn: 'Home',
      icon: Home,
      oldImg: 'home.jpg',
      newImg: '1_home.png',
      titleIt: 'Home Screen & Prenotazione Rapida',
      titleEn: 'Home Screen & Quick Booking',
      descIt: 'Riorganizzazione visiva radicale: la ricerca rapida è posta in primo piano, con un widget pulito che semplifica la selezione delle tratte e l\'accesso immediato all\'ultimo viaggio acquistato.',
      descEn: 'Radical visual reorganization: quick search is brought front and center with a streamlined widget that eases station inputs and provides immediate access to upcoming bookings.',
      highlightsIt: [
        'Gerarchia visiva focalizzata sulla ricerca del viaggio',
        'Visualizzazione dinamica del biglietto attivo e stato treno in tempo reale',
        'Eliminazione degli elementi decorativi superflui per la massima leggibilità'
      ],
      highlightsEn: [
        'Visual hierarchy focused on immediate trip booking',
        'Dynamic active ticket card with live train status',
        'Elimination of extraneous decorative elements for optimal legibility'
      ]
    },
    {
      id: 'cerca',
      labelIt: 'Cerca Biglietto',
      labelEn: 'Search Route',
      icon: Search,
      oldImg: 'search-results.jpg',
      newImg: '4_cerca_biglietto.png',
      titleIt: 'Selezione Tratta & Parametri di Viaggio',
      titleEn: 'Route Selection & Travel Parameters',
      descIt: 'Il modulo di ricerca passa da un modulo statico a un\'interfaccia conversazionale e touch-friendly, con selezione stazioni fluida e filtri intelligenti per andata e ritorno.',
      descEn: 'The search form transitions from a static layout into an intuitive touch-first UI with smart station auto-completion and seamless round-trip selectors.',
      highlightsIt: [
        'Input stazioni ottimizzato con cronologia delle ricerche frequenti',
        'Selettore data con calendario interattivo e prezzi minimi in anteprima',
        'Controllo immediato del numero di passeggeri e sconti attivi'
      ],
      highlightsEn: [
        'Optimized station inputs with frequent travel history',
        'Date picker with interactive calendar previewing lowest daily fares',
        'Instant passenger count and promotion code validation'
      ]
    },
    {
      id: 'biglietti',
      labelIt: 'I tuoi biglietti',
      labelEn: 'Select Ticket',
      icon: Ticket,
      oldImg: 'my-trips.jpg',
      newImg: '3_ticket.png',
      titleIt: 'Risultati di Ricerca & Tariffe',
      titleEn: 'Search Results & Travel Tariffs',
      descIt: 'Trasparenza totale sui prezzi: i viaggi disponibili sono organizzati in card orarie ad alto contrasto con chiara distinzione delle classi di viaggio (Smart, Prima, Club Executive).',
      descEn: 'Total fare transparency: available trains are categorized into high-contrast timeline cards clearly distinguishing Italo travel classes (Smart, Prima, Club Executive).',
      highlightsIt: [
        'Confronto orizzontale istantaneo delle classi e delle condizioni di rimborso',
        'Visualizzazione chiara della durata di viaggio e delle coincidenze',
        'Badge distintivo per la tariffa più economica disponibile sul treno'
      ],
      highlightsEn: [
        'Instant horizontal comparison of travel classes and refund rules',
        'Clear display of travel duration, train code, and connections',
        'Prominent badge highlighting the lowest available fare'
      ]
    },
    {
      id: 'offerte',
      labelIt: 'Offerte',
      labelEn: 'Offers',
      icon: Sparkles,
      oldImg: 'offers.jpg',
      newImg: '2_offerte.png',
      titleIt: 'Offerte & Vantaggi Italo Più',
      titleEn: 'Offers & Italo Più Perks',
      descIt: 'La sezione promozionale si trasforma in un hub premiante: card visive con immagini aspirazionali, codici sconto applicabili con un tocco e integrazione con il programma fedeltà.',
      descEn: 'The promotional section evolves into a rewarding hub: visual editorial cards, one-tap coupon code redemption, and seamless loyalty program integration.',
      highlightsIt: [
        'Card promozionali fotografiche con payoff accattivanti e chiari',
        'Saldo punti Italo Più sempre visibile e progress bar verso il livello successivo',
        'Pulsante rapido per applicare il codice sconto direttamente alla ricerca'
      ],
      highlightsEn: [
        'Photographic promo cards with compelling, transparent value propositions',
        'Italo Più points balance always visible with level progression bar',
        'One-tap button to apply promo codes directly to search parameters'
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState<string>('home');
  const [comparisonPosition, setComparisonPosition] = useState(50);
  const activeScreen = screens.find((s) => s.id === activeTab) || screens[0];

  const oldBasePath = `${import.meta.env.BASE_URL}Images/Project 03/app_mobile/legacy/`;
  const newBasePath = `${import.meta.env.BASE_URL}Images/Project 03/app_mobile/redesign/`;

  return (
    <section
      id="italo-treni-before-after"
      data-project-section="06-before-after"
      aria-labelledby="italo-before-after-title"
      className="w-full min-h-[100svh] relative z-20 py-20 sm:py-24 lg:py-28 px-6 sm:px-12 md:px-16 max-w-[1600px] mx-auto isolate"
    >
      <div
        className="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 pointer-events-none opacity-40"
        aria-hidden="true"
        style={{
          background: 'linear-gradient(135deg, #4A071C 0%, #8D0A30 42%, #B50D3A 72%, #650820 100%)',
        }}
      />
      {/* Section Title Header */}
      <div className="flex flex-col items-center justify-center text-center gap-3 mb-16 sm:mb-20 lg:mb-24">
        <h2
          id="italo-before-after-title"
          className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase font-sans text-center"
        >
          {lang === 'it' ? 'Prima e Dopo' : 'Before & After'}
        </h2>
      </div>

      {/* Preload images for instant switching without lag */}
      <div className="hidden" aria-hidden="true">
        {screens.map((s) => (
          <div key={s.id}>
            <img src={`${oldBasePath}${s.oldImg}`} alt="" loading="eager" decoding="async" />
            <img src={`${newBasePath}${s.newImg}`} alt="" loading="eager" decoding="async" />
          </div>
        ))}
      </div>

      <div className="mx-auto grid w-full max-w-[900px] grid-cols-1 items-center gap-8 md:grid-cols-[300px_minmax(0,1fr)] md:gap-12 lg:gap-16">
        {/* Animated vertical menu */}
        <nav aria-label={lang === 'it' ? 'Schermate del confronto' : 'Comparison screens'} className="order-1 mx-auto w-full max-w-[340px] md:order-2">
          <ul className="flex w-full flex-col items-stretch justify-center gap-1.5 rounded-2xl border border-white/15 bg-white/[0.06] p-3 shadow-[0_12px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:p-4">
            {screens.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              const label = lang === 'it' ? tab.labelIt : tab.labelEn;
              return (
                <li key={tab.id}>
                  <button
                    type="button"
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setComparisonPosition(50);
                    }}
                    className={`group relative flex min-h-12 w-full items-center gap-3 overflow-hidden rounded-xl px-4 py-3 text-left uppercase transition-colors duration-200 ${isActive ? 'bg-[#B50D3A] text-white shadow-[0_0_15px_rgba(181,13,58,0.28)]' : 'text-neutral-400 hover:bg-white/[0.06] hover:text-white'}`}
                  >
                    <span className="relative z-10 flex w-full items-center gap-3">
                      <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <AnimatedMenuText center className="text-sm font-bold tracking-wide sm:text-base">
                        {label}
                      </AnimatedMenuText>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Before and after image comparison slider */}
        <div className="relative mx-auto order-2 w-full max-w-[280px] rounded-[2.1rem] bg-gradient-to-b from-neutral-800/90 via-neutral-900 to-black p-2 sm:p-2.5 border border-white/15 shadow-[0_24px_80px_rgba(0,0,0,0.45)] md:order-1">
          <div className="relative w-full aspect-[393/852] rounded-[1.9rem] overflow-hidden bg-neutral-950">
            <img
              key={`new-${activeScreen.id}`}
              src={`${newBasePath}${activeScreen.newImg}`}
              alt={`${activeScreen.labelIt} - Redesign`}
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
            <img
              key={`old-${activeScreen.id}`}
              src={`${oldBasePath}${activeScreen.oldImg}`}
              alt={`${activeScreen.labelIt} - Prima`}
              className="absolute inset-0 h-full w-full object-cover"
              style={{ clipPath: `inset(0 ${100 - comparisonPosition}% 0 0)` }}
              loading="eager"
              decoding="async"
            />
            <div
              className="absolute inset-y-0 z-10 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_12px_rgba(0,0,0,0.7)] pointer-events-none"
              style={{ left: `${comparisonPosition}%` }}
              aria-hidden="true"
            >
              <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-[#B50D3A] text-white shadow-lg">
                <span className="text-lg leading-none">↔</span>
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={comparisonPosition}
              onChange={(event) => setComparisonPosition(Number(event.target.value))}
              aria-label={lang === 'it' ? 'Confronta versione originale e redesign' : 'Compare original and redesign'}
              className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
