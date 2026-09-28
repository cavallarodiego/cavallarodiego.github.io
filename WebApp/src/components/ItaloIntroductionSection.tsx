export function ItaloIntroductionSection() {
  return (
    <section
      id="italo-treni-introduction"
      data-project-section="02-introduction"
      aria-label="Introduzione al progetto Italo Treni"
      className="w-full min-h-[100svh] relative z-10 bg-transparent flex flex-col justify-center py-20 sm:py-24 lg:py-28"
    >
      <div className="flex-1 flex items-center justify-center px-6 sm:px-12 md:px-16 w-full max-w-[1600px] mx-auto z-20">
        <p className="text-white font-urbanist text-xl md:text-2xl lg:text-3xl leading-[1.4] font-light tracking-tight text-center max-w-4xl">
          <span className="font-semibold text-[#B50D3A]">Il redesign dell'applicazione di Italo Treno</span>{' '}
          si concentra sull'abbattimento del carico cognitivo durante la ricerca, selezione e pagamento delle tratte ad alta velocità.
        </p>
      </div>
    </section>
  );
}
