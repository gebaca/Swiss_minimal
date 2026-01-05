interface ButtonOpProps {
  onClick?: () => void;
  text: string;
  id: string;
}

export const ButtonOp = ({ onClick, text, id }: ButtonOpProps) => {
  return (
    <>
      <button
        id={id}
        onClick={onClick}
        className='rounded-sm w-[100px] h-[100px] border border-yellow-400 bg-transparent
  flex items-end justify-end p-2  /* Alinea a la esquina inferior derecha */
  hover:bg-yellow-400 transition-all group'
      >
        <span
          className='text-[46px] font-bold leading-none tracking-tighter
    text-yellow-400 group-hover:text-black'
        >
          {text}
        </span>
      </button>
    </>
  );
};
