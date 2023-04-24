import { within} from '@storybook/testing-library';
import type { Meta, StoryFn } from "@storybook/react";
import Footer from 'components/Common/Footer';

export default {
  title: 'Home/Footer',
  component: Footer,
} as Meta;

const Template: StoryFn = (args) => <Footer {...args} />;

export const FooterBar = Template.bind({});

FooterBar.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);


};



