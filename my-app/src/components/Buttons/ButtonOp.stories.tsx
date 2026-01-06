import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Overlay } from '../Overlay/Overlay';

const meta: Meta<typeof Overlay> = {
  title: 'SwissDesign/Overlay',
  component: Overlay,
  parameters: {
    layout: 'fullscreen', // El overlay ocupa toda la pantalla
  },
  argTypes: {
    onClose: { action: 'closed' },
  },
};

export default meta;
type Story = StoryObj<typeof Overlay>;

export const Default: Story = {
  args: {
    isOpen: true,
    data: {
      title: 'JS ENGINE',
      description:
        'El motor de JavaScript es un programa informático que ejecuta código JS...',
    },
    // Simulamos que el botón estaba en el centro para que la animación nazca de ahí
    startRect: { top: 300, left: 500, width: 200, height: 50 } as DOMRect,
  },
};
