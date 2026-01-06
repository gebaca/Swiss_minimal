import type { StorybookConfig } from '@storybook/react-webpack5'; // Cambiamos preset-create-react-app por react-webpack5 aquí arriba

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app', // Pero lo mantenemos aquí abajo
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
};
export default config;
