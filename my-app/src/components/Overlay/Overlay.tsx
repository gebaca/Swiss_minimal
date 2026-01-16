import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { LENGUAJE_STYLES, LenguajeTipo } from '../Buttons/ButtonOp';
import { gsap } from 'gsap';

export interface OverlayContent {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  lenguaje: LenguajeTipo;
  media?: {
    type: 'image';
    src: string;
  };
}
export interface OverlayAction {
  label: string;
  onClick: (id: string) => void;
}

export interface OverlayProps {
  isOpen: boolean;
  content: OverlayContent | null;
  actions: OverlayAction[];
  onClose: () => void;
}

export const Overlay = ({
  isOpen,
  content,
  actions,
  onClose,
}: OverlayProps) => {
  const RefBase = useRef<HTMLDivElement>(null);
  
  // Guardamos el timeline en un ref para que persista
  const tl = useRef<gsap.core.Timeline>(null);


  

 useGSAP(
  () => {
    // AÑADE .timeline() AQUÍ
    tl.current = gsap.timeline({ paused: true }) 
      .fromTo(
        '#overlay-container', 
        { clipPath: 'inset(0 100% 0 0)' },
        {
          clipPath: 'inset(0 0% 0 0)',
          // ... resto de tus propiedades
          duration: 0.6,
          ease: 'power4.inOut',
        }
      )
      .from(
        '.overlay-content', 
        {
          y: 50,
          opacity: 0,
          stagger: 0.1,
          duration: 0.4,
          ease: 'expo.out',
        },
        '-=0.2'
      );
      
    // Disparar la animación según el estado
    if (isOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  },
  { dependencies: [isOpen], scope: RefBase }
);
  
  if (!isOpen || !content) return null;
  const style = LENGUAJE_STYLES[content.lenguaje];
  return (
    <div
      ref={RefBase}
      className='fixed inset-0 z-50 overflow-hidden bg-black flex items-center justify-center p-4'
    >
      <div
        id='overlay-container'
        /* @container para que hijos reaccionen a este ancho */
        className={`@container relative w-full h-full max-w-7xl p-6 md:p-10 grid grid-cols-12 grid-rows-6  border ${style.border} bg-black`}
      >
        <div
          id='overlay-actions'
          /* Si el contenedor es pequeño (móvil), ocupa 12 cols arriba. Si es grande (@lg), 3 cols a la izquierda */
          className='col-span-12 row-span-1 @lg:col-span-3 @lg:row-span-6 flex @lg:flex-col gap-4 border-b @lg:border-b-0 @lg:border-r border-white/20 pb-6 @lg:pb-0 @lg:pr-10'
        >
          {actions.map((action, index) => (
            <button
              key={index}
              className='action-btn text-left text-sm font-mono uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity'
              onClick={() => action.onClick(content.id)}
            >
              {action.label}
            </button>
          ))}
        </div>

        {/* Agregamos las clases de Grid al main para que ocupe el resto del espacio */}
        <main className='overlay-content col-span-12 row-span-5 @lg:col-span-9 @lg:row-span-6 flex flex-col justify-center p-4 @lg:p-20'>
          <h1 className="text-[30px] @lg:text-[40px] font-mono mb-10 opacity-60 uppercase tracking-[0.5em] leading-tight text-white">
            {content.title}
          </h1>
          <p className="max-w-xl mb-10 text-white/90">
            {content.description}
          </p>

          {content.media && (
            <div className="media-container w-full max-w-2xl border border-white/10">
              <img 
                src={content.media.src} 
                alt={content.title} 
                className="w-full h-auto object-cover" 
              />
            </div>
          )}
        </main>

        <button 
          onClick={onClose} 
          id='RefCloseButton' 
          className={`absolute top-6 right-6 @lg:top-10 @lg:right-10 p-2 border transition-colors duration-500
            ${style.border} ${style.text} hover:bg-white hover:text-black`}
        >
          {content.buttonText}
        </button>
      </div>
    </div>
  );
};
