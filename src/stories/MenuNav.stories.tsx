
 

import React from 'react';
import { within, fireEvent, userEvent, screen } from '@storybook/testing-library';
import * as CONSTANTS from '../constants';
import type { Meta, StoryFn } from "@storybook/react";
import MenuNav from 'components/MenuNav';

export default {
  title: 'Home/Nav',
  component: MenuNav,
} as Meta;

const Template  : StoryFn = (args) => <MenuNav {...args} />;

export const NavMenu = Template.bind({});

// CasesTest.parameters = {
//   design: {
//     type: "figma",
//     url: "https://www.figma.com/file/K1uGsN6EQHTiMN2wlCfmmB/Chromatic-Testing?node-id=4%3A20&t=US2BdAT8jDTJktpF-1",
//   },
// };

NavMenu.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

};

