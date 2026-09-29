import { StickyCard002 } from './ui/sticky-card';

const galleryCards = [
  { id: 'home', image: `${import.meta.env.BASE_URL}Images/Project 03/mockup_gallery/mockup_home.jpg`, alt: 'Mockup della home dell’app Italo' },
  { id: 'tickets', image: `${import.meta.env.BASE_URL}Images/Project 03/mockup_gallery/scegli_biglietto.jpg`, alt: 'Mockup della selezione del biglietto Italo' },
  { id: 'purchase', image: `${import.meta.env.BASE_URL}Images/Project 03/mockup_gallery/acquista.jpg`, alt: 'Mockup del flusso di acquisto Italo' },
  { id: 'ticket', image: `${import.meta.env.BASE_URL}Images/Project 03/mockup_gallery/biglietto.jpg`, alt: 'Mockup del biglietto digitale Italo' },
];

export function ItaloMockupGallerySection() {
  return (
    <section id="italo-treni-mockup-gallery" data-project-section="07-mockup-gallery" aria-label="Galleria mockup Italo">
      <StickyCard002 cards={galleryCards} imageClassName="[clip-path:inset(0_2px_0_0)]" />
    </section>
  );
}
