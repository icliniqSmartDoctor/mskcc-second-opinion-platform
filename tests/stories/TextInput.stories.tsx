
import type { Meta, StoryObj,StoryFn } from "@storybook/react";

import { userEvent, within } from "@storybook/testing-library";
import {expect} from '@storybook/jest'
import '../index.css'
import TextInputs from "components/Dashboard/Messages/Message-Window/TextInput";
import type { ChatData } from "components/Dashboard/Messages/Message-Window/ChatBox";

const meta = {
  title: "Text input",
  component: TextInputs,
  args: {
    color: "blue",
  },
  
} satisfies Meta<typeof TextInputs>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template:StoryFn = (args) => <TextInputs onSubmit={function (data: ChatData): void {
  throw new Error("Function not implemented.");
} } color={"red"} {...args} />;

export const FormFunctionality: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const topicInput = canvas.getByPlaceholderText("write text here..");

    await userEvent.type(topicInput, "pimple", {
      delay: 10,
    });

    const bodyInput = canvas.getByPlaceholderText("write text here...");

    await userEvent.type(bodyInput, " face pimple", {
      delay: 100,
    });

    const submitButton = canvas.getByRole("button");

    await userEvent.click(submitButton);
    // expect(await canvas.getByRole('button')).toHaveStyle({backgroundColor: 'blue'})
    expect(await canvas.getByTestId('chat-form')).toHaveFormValues({
        body:" face pimple",
        topic:"pimple"
        
    })

    expect(await canvas.getByRole('button')).toHaveStyle({backgroundColor: ''})
  },
};

export const ButtonColor = Template.bind({});
ButtonColor.args = {
  color: "blue",
};
