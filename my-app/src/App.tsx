import './index.css';
import { ButtonOp } from './components/Buttons/ButtonOp';

export const App = () => {
  return (
    <div className='min-h-screen w-full bg-swiss-black text-white font-sans selection:bg-white selection:text-black'>
      {/* 1. Contenedor centrado con margen arriba/abajo */}
      <main className='max-w-7xl mx-auto min-h-screen flex flex-col items-center justify-center p-8'>
        {/* Título o Header opcional para dar contexto suizo */}
        <h1 className='text-[10px] font-mono mb-10 opacity-30 uppercase tracking-[0.5em]'>
          Technical_Archive / 2026
        </h1>

        {/* 2. El Grid de botones */}
        <div className='flex flex-wrap justify-center gap-4 max-w-[600px]'>
          <ButtonOp text='JS' id='01' onClick={() => {}} />
        </div>
      </main>
    </div>
  );
};
