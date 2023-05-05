
 

import React from 'react';
import { within, fireEvent, userEvent, screen } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Messages from 'components/Dashboard/Messages';
import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: 'Dashboard/Messages',
  component: Messages,
} as Meta;

const Template : StoryFn = (args) => <Messages {...args} />;

export const MessagesComponent = Template.bind({});

// CasesTest.parameters = {
//   design: {
//     type: "figma",
//     url: "https://www.figma.com/file/K1uGsN6EQHTiMN2wlCfmmB/Chromatic-Testing?node-id=4%3A20&t=US2BdAT8jDTJktpF-1",
//   },
// };

MessagesComponent.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const clickButton = canvas.getByText('Send Message')
  await userEvent.click(clickButton);
};