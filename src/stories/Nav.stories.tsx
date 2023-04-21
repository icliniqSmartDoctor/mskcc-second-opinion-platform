


import React from 'react';
import { within, fireEvent, userEvent, screen } from '@storybook/testing-library';
import Nav from '../components/common/Nav';
import * as CONSTANTS from '../constants';
import type { Meta, StoryFn } from "@storybook/react";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export default {
  title: 'Home/Nav',
  component: Nav,
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: ''
  },
} as Meta;

const Template: StoryFn = (args) => <Nav {...args} />;
export const Navbar = Template.bind({});


Navbar.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  CONSTANTS.MSKCC_MENU.map(data => {
    Object.values(data).map(async (res) => {
      if (Array.isArray(res)) {
        const arrButton: any = canvas.getByText(Object.keys(data)[0] + " +").parentElement;

      }
    })
  })


};



