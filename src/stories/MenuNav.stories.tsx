


import React from 'react';
import { within, fireEvent, userEvent, screen, waitFor } from '@storybook/testing-library';
import * as CONSTANTS from '../constants';
import type { Meta, StoryFn } from "@storybook/react";
import MenuNav from 'components/Common/MenuNav';
import { expect } from '@storybook/jest'

export default {
  title: 'Home/Nav',
  component: MenuNav,
} as Meta;

const Template: StoryFn = (args) => <MenuNav {...args} />;
export const NavMenu = Template.bind({});


function capitalizeFirstLetter(string: string) {
  var splitStr = string.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }

  return splitStr.join(' ');
}



NavMenu.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const arrButton: any = canvas.getByText('about us'+ " +").parentElement;
  const arrMenu: any  = arrButton?.nextElementSibling;



  // CONSTANTS.MSKCC_MENU.map(data => {
  //   Object.values(data).map(async (res) => {

  //     if (Array.isArray(res)) {
  //       const arrButton: any = canvas.getByText(Object.keys(data).toString() + " +").parentElement;
  //       const arrMenu: any  = canvas.getByText(Object.keys(data).toString() + " +").parentElement?.nextElementSibling;

  //         await userEvent.click(arrButton);
  //         // await new Promise(r => setTimeout(r, 200));
  //         await expect(arrMenu).toBeVisible()
  //         // await userEvent.unhover(arrButton);


  //         // console.log(window.getComputedStyle(arrMenu).visibility);





  //     }
  //     else {
  //       <a href={`${Object.values(data).toString()}`}> <div className='mx-4 capitalize'>{Object.keys(data).toString()}</div></a >
  //     }

  //   })
  // })
};

