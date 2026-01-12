import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const GSAPex = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  // Guardamos el timeline en un ref para que persista
  const tl = useRef<gsap.core.Timeline>(null);

  // 1. Extraemos contextSafe pasando el scope obligatorio para evitar el error
  const { contextSafe } = useGSAP({ scope: containerRef });

  // 2. Creamos la animación una sola vez al montar el componente
  useGSAP(
    () => {
      tl.current = gsap
        .timeline({ paused: true })
        // 1. El botón viaja a la esquina instantáneamente (Estilo Monogatari)
        .to(boxRef.current, {
          x: -window.innerWidth / 2 + 60,
          y: -window.innerHeight / 2 + 60,
          duration: 0.4,
          ease: 'expo.inOut',
        })
        // 2. Revelación por tajo (clip-path)
        .fromTo(
          boxRef.current,
          { clipPath: 'inset(0 100% 0 0)' }, // Empezamos ocultos por la derecha
          {
            clipPath: 'inset(0 0% 0 0)',
            width: '100vw',
            height: '100vh',
            position: 'fixed',
            top: 0,
            left: 0,
            x: 0,
            y: 0,
            duration: 0.6,
            ease: 'power4.inOut',
          }
        )
        // 3. Texto que aparece por bloques (Stagger)
        .from(
          '.texto-revelar',
          {
            y: 50,
            opacity: 0,
            stagger: 0.1,
            duration: 0.4,
            ease: 'expo.out',
          },
          '-=0.2'
        );
    },
    { scope: containerRef }
  );

  // 3. Ejecutamos la animación de forma segura
  const onClickAnimar = contextSafe(() => {
    if (!tl.current) return;

    // Si quieres que se ejecute entera cada vez y no se "pille":
    if (!tl.current.isActive()) {
      tl.current.restart();
    }
  });

  return (
    <div
      ref={containerRef}
      className='flex flex-col items-center justify-center min-h-screen bg-gray-200'
    >
      {/* El Cubo/Overlay */}
      <div
        ref={boxRef}
        className='w-20 h-20 bg-red-600 shadow-lg flex flex-col items-center justify-center overflow-hidden z-50'
      >
        {/* TEXTO OCULTO QUE SE REVELARÁ */}
        <div className='flex flex-col gap-2 text-white font-black uppercase text-4xl'>
          <span className='texto-revelar'>Precisión</span>
          <span className='texto-revelar'>Caos</span>
          <span className='texto-revelar'>Shaft</span>
        </div>
      </div>

      <button
        onClick={onClickAnimar}
        className='mt-10 px-8 py-3 bg-black text-white font-mono uppercase tracking-tighter text-lg hover:bg-red-600 transition-colors'
      >
        Activar Secuencia
      </button>
    </div>
  );
};
