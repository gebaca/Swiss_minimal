import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Overlay } from './Overlay';

const meta: Meta<typeof Overlay> = {
  title: 'Components/Overlay',
  component: Overlay,
  parameters: {
    layout: 'fullscreen', // Para que el fondo negro cubra todo el canvas de Storybook
  },
  // Decorador para asegurar que el fondo sea oscuro detrás del overlay
  decorators: [
    (Story) => (
      <div className="bg-zinc-950 min-h-screen">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Overlay>;

const commonActions = [
  { label: 'View Project', onClick: (id: string) => console.log('View', id) },
  { label: 'Github Repo', onClick: (id: string) => console.log('Repo', id) },
  { label: 'Case Study', onClick: (id: string) => console.log('Case', id) },
];

export const Javascript: Story = {
  args: {
    isOpen: true,
    onClose: () => alert('Close clicked'),
    actions: commonActions,
    content: {
      id: 'js-01',
      title: 'Motor de Partículas',
      description: 'Un experimento visual utilizando canvas puro y algoritmos de optimización para renderizar 10,000 partículas a 60fps.',
      buttonText: 'JS',
      lenguaje: 'js', // Asegúrate de que este valor coincida con tus LENGUAJE_STYLES
      media: {
        type: 'image',
        src: '',
      },
    },
  },
};

export const ReactProject: Story = {
  args: {
    isOpen: true,
    onClose: () => alert('Close clicked'),
    actions: commonActions,
    content: {
      id: 're-02',
      title: 'E-commerce Dashboard',
      description: 'Interfaz administrativa con gestión de estado compleja y visualización de datos en tiempo real.',
      buttonText: 'js',
      lenguaje: 'js',
      media: {
        type: 'image',
        src: '',
      },
    },
  },
};

export const EmptyMedia: Story = {
  args: {
    ...Javascript.args,
    content: {
      ...Javascript.args!.content!,
      title: 'Proyecto sin Imagen',
      media: undefined,
    },
  },
};