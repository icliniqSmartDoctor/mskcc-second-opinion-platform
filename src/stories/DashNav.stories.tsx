
 

import React from 'react';
import { within, fireEvent, userEvent, screen } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import DashNav from 'components/Dashboard/Common/DashNav';
import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: 'Dashboard/Dash Nav',
  component: DashNav,
} as Meta;

const Template  : StoryFn = (args) => <DashNav {...args} />;

export const DashboardNavbar = Template.bind({});

// CasesTest.parameters = {
//   design: {
//     type: "figma",
//     url: "https://www.figma.com/file/K1uGsN6EQHTiMN2wlCfmmB/Chromatic-Testing?node-id=4%3A20&t=US2BdAT8jDTJktpF-1",
//   },
// };

DashboardNavbar.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
};