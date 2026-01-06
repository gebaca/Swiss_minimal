import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface OverlayProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    title: string;
    description: string;
  } | null;
  startRect: DOMRect | null; // La posición del botón para la animación
}

export const Overlay = ({ isOpen, onClose, data, startRect }: OverlayProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (isOpen && startRect && overlayRef.current) {
      // 1. Posicionamos el overlay justo encima del botón antes de empezar
      gsap.set(overlayRef.current, {
        top: startRect.top,
        left: startRect.left,
        width: startRect.width,
        height: startRect.height,
        borderRadius: '0px',
        opacity: 1,
        backgroundColor: '#ffffff',
      });

      // 2. Animación de expansión a pantalla completa
      gsap.to(overlayRef.current, {
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        duration: 0.8,
        ease: 'expo.inOut',
      });

      // 3. Animación del texto (aparece suavemente al final)
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.6, ease: 'power2.out' }
      );
    }
  }, [isOpen]); // Se dispara cuando se abre

  if (!isOpen || !data) return null;

  return (
    <div
      ref={overlayRef}
      className='fixed z-50 flex flex-col items-center justify-center bg-white text-black p-10'
    >
      {/* Botón de cierre estilo suizo */}
      <button
        onClick={onClose}
        className='absolute top-10 right-10 text-sm uppercase tracking-widest font-bold hover:opacity-50 transition-opacity'
      >
        [ Close ]
      </button>

      <div ref={contentRef} className='max-w-2xl text-left'>
        <h2 className='text-6xl font-bold uppercase mb-8 tracking-tighter leading-none'>
          {data.title}
        </h2>
        <p className='text-xl leading-relaxed font-light'>{data.description}</p>
      </div>
    </div>
  );
};
