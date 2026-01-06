import { baseButton } from '../../types';

interface ButtonOpProps extends baseButton {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  //lenguaje: 'js' | 'ts';
}

export const ButtonOp = ({ onClick, text, id }: ButtonOpProps) => {
  return (
    <>
      <button
        id={id}
        onClick={onClick}
        className='rounded-md w-[100px] h-[100px] border border-yellow-400 bg-transparent
  flex items-end justify-end p-2  
  hover:bg-yellow-400 transition-colors duration-700 ease-out group'
      >
        <span
          className='text-[46px] font-bold leading-none tracking-tighter
    text-yellow-400 group-hover:text-black transition-colors duration-500 delay-100 ease-out'
        >
          {text}
        </span>
      </button>
    </>
  );
};
