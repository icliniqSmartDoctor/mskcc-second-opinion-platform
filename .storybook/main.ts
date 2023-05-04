import type { StorybookConfig } from "@storybook/react-webpack5";
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const config: StorybookConfig = {

  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@locofy/storybook-addon",
    
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: true,
      },
    },
  ],
  webpackFinal: async (config: any, { configType }) => {
    config.resolve.plugins = [new TsconfigPathsPlugin()];
    return config;
  }, /// Added for global paths
  
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
