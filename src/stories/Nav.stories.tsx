


import React from 'react';
import { within, fireEvent, userEvent, screen } from '@storybook/testing-library';
import Nav from '../components/common/Nav';
import * as CONSTANTS from '../constants';
import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: 'Home/Nav',
  component: Nav,
} as Meta;

const Template: StoryFn = (args) => <Nav {...args} />;
export const Navbar = Template.bind({});



Navbar.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

 

};

