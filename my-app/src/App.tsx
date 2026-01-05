import './index.css';
import { ButtonOp } from './components/Buttons/ButtonOp';

export const App = () => {
  return (
    <>
      <div className='min-h-screen w-full @apply bg-swiss-black text-white font-sans'>
        <ButtonOp onClick={() => {}} text='JS' id='buttonJS' />
      </div>
    </>
  );
};
