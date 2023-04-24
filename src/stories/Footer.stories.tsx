


import React from 'react';
import { within, fireEvent, userEvent, screen } from '@storybook/testing-library';
import * as CONSTANTS from '../constants';
import type { Meta, StoryFn } from "@storybook/react";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { expect } from '@storybook/jest'
import Footer from 'components/common/Footer';

export default {
  title: 'Home/Footer',
  component: Footer,
} as Meta;

const Template: StoryFn = (args) => <Footer {...args} />;

export const FooterBar = Template.bind({});

FooterBar.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);


};



