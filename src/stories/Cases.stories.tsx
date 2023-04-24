
import { within, userEvent } from '@storybook/testing-library';
import Cases from 'components/Dashboard/Cases';
import type { Meta, StoryFn } from "@storybook/react";


export default {
  title: 'Dashboard/Cases',
  component: Cases,
} as Meta;

const Template: StoryFn = (args) => <Cases {...args} />;

export const CasesComponent = Template.bind({});

// CasesTest.parameters = {
//   design: {
//     type: "figma",
//     url: "https://www.figma.com/file/K1uGsN6EQHTiMN2wlCfmmB/Chromatic-Testing?node-id=4%3A20&t=US2BdAT8jDTJktpF-1",
//   },
// };

CasesComponent.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const clickButton = canvas.getByText('View Cases')
  await userEvent.click(clickButton);
};