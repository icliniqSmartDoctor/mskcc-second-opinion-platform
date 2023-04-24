import React from 'react';
import { within, fireEvent} from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import SideNav from 'components/Dashboard/Common/SideNav';
import * as CONSTANTS from 'constants.tsx';
import type { Meta, StoryFn } from "@storybook/react";


export default {
  title: 'Dashboard/SideNav',
  component: SideNav,
  argTypes: {
    activeMenu: { control : 'radio'}
  }
} as Meta;


const hoverTest = async (canvas: any, elem: any) => {
  // Mouse Hover and Check Color
  const hoverElem = canvas.getByText(elem).parentElement?.parentElement?.parentElement;
  await fireEvent.mouseOver(hoverElem);
  await expect(hoverElem).toHaveClass('hover:bg-blue-100')
}

const Template : StoryFn = (args) => <SideNav activeMenu={'home'} {...args} />;

export const SideNavComponent = Template.bind({});

// CasesTest.parameters = {
//   design: {
//     type: "figma",
//     url: "https://www.figma.com/file/K1uGsN6EQHTiMN2wlCfmmB/Chromatic-Testing?node-id=4%3A20&t=US2BdAT8jDTJktpF-1",
//   },
// };

SideNavComponent.play = async ({ canvasElement }) => {

  const canvas = within(canvasElement);
  const logoutHoverCheck = canvas.getAllByRole('link');
  


  CONSTANTS.SIDEMENU.map((options) => {
    hoverTest(canvas, options.title)
  })
  logoutHoverCheck.map((res) => {
    res.firstElementChild?.classList.contains('fa-sign-out') &&  expect(res.firstElementChild).toHaveClass('hover:text-red-500')
  })


};