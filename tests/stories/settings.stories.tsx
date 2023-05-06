
import '../index.css'
import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import Settings from 'components/Dashboard/Account/settings';

const meta = {
  title: "Settings",
  component: Settings,
  
} as Meta<typeof Settings>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template:StoryFn = (args) => <Settings {...args} />;

export const storyOne=Template.bind({})
