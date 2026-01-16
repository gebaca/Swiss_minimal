import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { RefObject, useRef } from 'react';

interface UseOverlayAnimationProps {
  isOpen: boolean;
  scope: RefObject<HTMLElement | null>; // La referencia al padre
  containerSelector: string;            // '#overlay-container'
  contentSelector: string;              // '.overlay-content'
  onCompleteClose?: () => void;
}

export function useOverlayAnimation({ containerSelector, isOpen, contentSelector, scope,onCompleteClose}: UseOverlayAnimationProps){
    const tl = useRef<gsap.core.Timeline | null>(null);
    useGSAP(
        () => {

    tl.current = gsap.timeline({ paused: true }) 
      .fromTo(
        containerSelector, 
        { clipPath: 'inset(0 100% 0 0)' },
        {
          clipPath: 'inset(0 0% 0 0)',
          // ... resto de tus propiedades
          duration: 0.6,
          ease: 'power4.inOut',
        }
      )
      .from(
        contentSelector, 
        {
          y: 50,
          opacity: 0,
          stagger: 0.1,
          duration: 0.4,
          ease: 'expo.out',
        },
        '-=0.2'
      );
      
  
    if (isOpen) {
  tl.current.play();
} else {
  // Cuando termine el reverse, avisamos al componente
  tl.current.reverse().eventCallback("onReverseComplete", () => {
    if (onCompleteClose) onCompleteClose();
  });
}
  },
  { dependencies: [isOpen], scope: scope }
);
  
};

//scope is refbase
//las ref son las clases de container y content ==> '#overlay-container' y '.overlay-content'

  