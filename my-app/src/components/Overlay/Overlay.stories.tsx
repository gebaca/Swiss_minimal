import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Overlay } from './Overlay';

const meta: Meta<typeof Overlay> = {
  title: 'SwissDesign/Overlay',
  component: Overlay,
  parameters: {
    // Esto permite que el Overlay use toda la pantalla de Storybook
    layout: 'fullscreen',
  },
  argTypes: {
    onClose: { action: 'Cerrado con éxito' },
  },
};

export default meta;
type Story = StoryObj<typeof Overlay>;

export const ExpansionSuiza: Story = {
  args: {
    isOpen: true,
    data: {
      title: 'JS Runtime',
      description:
        'Un entorno de ejecución (Runtime) es donde tu código de JavaScript se ejecuta realmente. Incluye el motor de JS, las Web APIs y el Event Loop.',
    },
    // Simulamos que el botón estaba en el centro de la pantalla
    startRect: {
      top: 300,
      left: 400,
      width: 200,
      height: 60,
    } as DOMRect,
  },
};
