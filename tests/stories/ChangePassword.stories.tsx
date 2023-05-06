
import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import ChangePassword from "components/Dashboard/Account/settings/ChangePassword";

const submit = (oldPassword: string, newPassword: string) =>
  console.log(oldPassword, newPassword);

const meta = {
  title: "Dashboard/Change Password",
  component: ChangePassword,
  args: {
    onSubmit: submit,
  },
} as Meta

export default meta;
type Story = StoryObj<typeof meta>;

const Template:StoryFn = (args) => <ChangePassword onSubmit={function (oldPassword: string, newPassword: string): void {
  throw new Error("Function not implemented.");
} } {...args} />;

export const FormFunctionality: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const currentPassword = canvas.getByText("Current password");
    await userEvent.type(currentPassword, "Rajamani");

    const newPassword = canvas.getByText("New password");
    await userEvent.type(newPassword, "ssss");

    const confirmPassword = canvas.getByText("Confirm password");
    await userEvent.type(confirmPassword, "ssss");

    const submitButton = canvas.getByText("Save");
    await userEvent.click(submitButton);

    const cancelButton = canvas.getByText("Cancel");
    await userEvent.click(cancelButton);
  },
};
