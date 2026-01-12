import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { GSAPex } from './GSAPex';

const meta: Meta<typeof GSAPex> = {
  title: 'Laboratorio/GSAPex',
  component: GSAPex,
};

export default meta;
type Story = StoryObj<typeof GSAPex>;

export const Default: Story = {};
