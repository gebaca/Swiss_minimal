import './index.css';
import { ButtonOp } from './components/Buttons/ButtonOp';

export const App = () => {
  return (
    <div className='min-h-screen w-full bg-swiss-black text-white font-sans selection:bg-white selection:text-black'>
      {/* 1. Contenedor centrado con margen arriba/abajo */}
      <main className='max-w-7xl mx-auto min-h-screen flex flex-col items-center justify-center p-8'>
        {/* Título o Header opcional para dar contexto suizo */}
        <h1 className='text-[11px] font-mono mb-10 opacity-30 uppercase tracking-[0.5em] italic'>
          selecciona tecnologia
        </h1>

        {/* 2. El Grid de botones */}
        <div className='flex flex-wrap justify-center gap-4 max-w-[600px]'>
          <ButtonOp id='01' lenguaje='js' onClick={() => {}} />
          <ButtonOp id='02' lenguaje='ts' onClick={() => {}} />
          <ButtonOp
            id='03'
            lenguaje='react'
            image='/favicon.ico'
            onClick={() => {}}
          />
          <ButtonOp id='04' lenguaje='css' onClick={() => {}} />
          <ButtonOp id='05' lenguaje='html' onClick={() => {}} />
          <ButtonOp id='06' lenguaje='tailwind' onClick={() => {}} />
          <ButtonOp id='07' lenguaje='gsap' onClick={() => {}} />
          <ButtonOp id='08' lenguaje='tanstack' onClick={() => {}} />
        </div>
      </main>
    </div>
  );
};
