import React from 'react';
import { within, fireEvent, userEvent, screen } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import CalendarSchedular from 'components/Dashboard/Account/CalendarSchedular';
import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: 'Dashboard/Account',
  component: CalendarSchedular,
} as Meta;

const Template: StoryFn = (args) => <CalendarSchedular {...args} />;

export const CalendarComponent = Template.bind({});

// CasesTest.parameters = {
//   design: {
//     type: "figma",
//     url: "https://www.figma.com/file/K1uGsN6EQHTiMN2wlCfmmB/Chromatic-Testing?node-id=4%3A20&t=US2BdAT8jDTJktpF-1",
//   },
// };

CalendarComponent.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

};