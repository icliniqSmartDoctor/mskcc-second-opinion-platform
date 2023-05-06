

import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import MessageWindow from "components/Dashboard/Messages/Message-Window/MessageWindow";

const meta = {
    title: "Dashboard/Message Window",
    component: MessageWindow,
  } satisfies Meta<typeof MessageWindow>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;

  const Template:StoryFn = (args) => <MessageWindow topic={""} body={""} from={""} {...args} />;

  export const textBox=Template.bind({})
  textBox.args={
    topic:'eye',
    body:'short sight'
  }