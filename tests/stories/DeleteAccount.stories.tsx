
import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import '../index.css'

import DeleteAccount from "components/Dashboard/Account/settings/DeleteAccount";

const meta = {
  title: "DeleteAccount",
  component: DeleteAccount,
  args: {
    onsubmit: "",
  },
} as Meta

export default meta;
type Story = StoryObj<typeof meta>;

const Template:StoryFn = (args) => <DeleteAccount {...args} />;

export const sampleStory=Template.bind({})
