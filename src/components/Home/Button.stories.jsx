import React from "react";
import { Meta } from "@storybook/react";

import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = {
  args: {
    text: "Click me",
    onClick: () => alert("Button clicked!"),
  },
  render: Template,
};
