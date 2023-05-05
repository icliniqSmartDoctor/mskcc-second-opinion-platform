import { within, fireEvent, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Home from 'components/Dashboard/Home';
import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: 'Dashboard/Home',
  component: Home,
} as Meta;

const Template: StoryFn = (args) => <Home {...args} />;

export const HomeComponent = Template.bind({});

// CasesTest.parameters = {
//   design: {
//     type: "figma",
//     url: "https://www.figma.com/file/K1uGsN6EQHTiMN2wlCfmmB/Chromatic-Testing?node-id=4%3A20&t=US2BdAT8jDTJktpF-1",
//   },
// };

HomeComponent.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const viewButton : any = canvas.getByText('View')?.parentElement;
  await fireEvent.mouseOver(viewButton);
  await expect(viewButton).toHaveClass('hover:bg-blue-800')
  await userEvent.click(viewButton);

  const uploadButton  : any = canvas.getByText('Upload')?.parentElement;
  await fireEvent.mouseOver(uploadButton);
  await expect(uploadButton).toHaveClass('hover:bg-blue-800')
  await userEvent.click(uploadButton);
};