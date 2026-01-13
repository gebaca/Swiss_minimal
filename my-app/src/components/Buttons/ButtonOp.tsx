import { baseButton } from '../../types';

type LenguajeTipo =
  | 'js'
  | 'ts'
  | 'react'
  | 'css'
  | 'html'
  | 'tailwind'
  | 'gsap'
  | 'tanstack';

//SUPERINTERESANTE EL OMIT PARA REUTILIZAR INTERFACES
//Omit<baseButton, 'text'>

interface ButtonOpProps extends baseButton {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  lenguaje: LenguajeTipo;
}

interface StyleConfig {
  text?: string;
  border: string;
  textStyle?: string;
  image?: string;
  hoverBg: string;
}

///TODO: AÑADIR IMAGENES A LOS QUE FALTAN

const LENGUAJE_STYLES: Record<LenguajeTipo, StyleConfig> = {
  js: {
    border: 'border-yellow-400',
    textStyle:
      'text-yellow-400 text-[46px] font-bold leading-none tracking-tighter',
    hoverBg: 'hover:bg-yellow-400',
    text: 'JS',
  },
  ts: {
    border: 'border-blue-500',
    textStyle:
      'text-blue-500 text-[46px] font-bold leading-none tracking-tighter',
    hoverBg: 'hover:bg-blue-500',
    text: 'TS',
  },
  react: {
    border: 'border-cyan-400',
    textStyle:
      'text-cyan-400 text-[46px] font-bold leading-none tracking-tighter',
    hoverBg: 'hover:bg-cyan-400',
  },
  css: {
    border: 'border-blue-600',
    textStyle:
      'text-blue-600 text-[46px] font-bold leading-none tracking-tighter',
    hoverBg: 'hover:bg-blue-600',
    text: 'CSS',
  },
  html: {
    border: 'border-orange-500',
    textStyle:
      'text-orange-500 text-[32px] font-bold leading-none tracking-tighter',
    hoverBg: 'hover:bg-orange-500',
    text: 'HTML',
  },
  tailwind: {
    border: 'border-sky-400',
    textStyle:
      'text-sky-400 text-[46px] font-bold leading-none tracking-tighter',
    hoverBg: 'hover:bg-sky-400',
  },
  gsap: {
    border: 'border-green-500',
    textStyle:
      'text-green-500 text-[46px] font-bold leading-none tracking-tighter',
    hoverBg: 'hover:bg-green-500',
  },
  tanstack: {
    border: 'border-red-500',
    textStyle:
      'text-red-500 text-[46px] font-bold leading-none tracking-tighter',
    hoverBg: 'hover:bg-red-500',
  },
};

export const ButtonOp = ({ onClick, id, lenguaje }: ButtonOpProps) => {
  const style = LENGUAJE_STYLES[lenguaje] || LENGUAJE_STYLES.js;

  return (
    <button
      id={id}
      onClick={onClick}
      // 3. Aplicamos las clases dinámicamente
      className={`
        rounded-md w-[100px] h-[100px] border bg-transparent
        flex items-end justify-end p-2 transition-colors duration-700 ease-out group
        ${style.border} ${style.hoverBg}
      `}
    >
      <span
        className={`
          transition-colors duration-500 delay-100 ease-out group-hover:text-black
          ${style.textStyle}
        `}
      >
        {/* LÓGICA DE IMAGEN VS TEXTO */}
        {style.image ? (
          <img
            src={style.image}
            alt={style.image}
            className='w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all'
          />
        ) : (
          style.text
        )}
      </span>
    </button>
  );
};
