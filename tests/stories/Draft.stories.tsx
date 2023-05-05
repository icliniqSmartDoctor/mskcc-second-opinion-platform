import { within,  userEvent  } from '@storybook/testing-library';
import Draft from 'components/Dashboard/Home/Draft';
import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: 'Dashboard/Home',
  component: Draft,
} as Meta;

const Template: StoryFn = (args) => <Draft {...args} />;

export const DraftComponent= Template.bind({});

// CasesTest.parameters = {
//   design: {
//     type: "figma",
//     url: "https://www.figma.com/file/K1uGsN6EQHTiMN2wlCfmmB/Chromatic-Testing?node-id=4%3A20&t=US2BdAT8jDTJktpF-1",
//   },
// };

DraftComponent.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const clickButton = canvas.getByText('Resume')
  await userEvent.click(clickButton);
};