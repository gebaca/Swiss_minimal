import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import gsap from 'gsap';

export interface OverlayContent {
  id: string;
  title: string;
  description: string;
  media?: {
    type: 'image' | 'gif' | 'video';
    src: string;
  };
}
export interface OverlayAction {
  label: string;
  variant?: 'primary' | 'secondary' | 'danger';
  onClick: (id: string) => void;
}

export interface OverlayProps {
  isOpen: boolean;
  content: OverlayContent | null;
  actions: OverlayAction[];
  backgroundColor?: string;
  onClose: () => void;
}

export const Overlay = ({
  isOpen,
  content,
  actions,
  backgroundColor,
  onClose,
}: OverlayProps) => {
  return (
    <div
      id='overlay-base'
      className='fixed inset-0 z-50 overflow-hidden bg-black flex items-center justify-center'
    >
      <div
        id='overlay-container'
        className='relative w-full h-full max-w-7xl p-10 grid grid-cols-12 grid-rows-6'
      >
        <div
          id='overlay-actions'
          className='col-span-3 row-span-6 flex flex-col gap-4 border-r border-white/20'
        >
          <button id='action-btn'></button>
          <button id='action-btn'></button>
        </div>
        <main className='overlay-content col-span-9 row-span-6 p-12 flex flex-col justify-center'>
          {/* Aquí iría tu title, description, etc. */}
        </main>
        <button className='absolute top-10 right-10'>CLOSE</button>
      </div>
    </div>
  );
};
