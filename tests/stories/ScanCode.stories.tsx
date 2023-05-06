
import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import ScanCode from "components/Dashboard/Home/ScanCode";

const meta = {
    title: "Dashboard/Scan Code",
    component: ScanCode,
  } as Meta<typeof ScanCode>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;

  const Template:StoryFn = (args) => <ScanCode imageUrl={"https://imgs.search.brave.com/cyo_EoKRmMXUWC60jW-JBgq26RlGenp4_eVcBqRvrfI/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC56/SDZfbW5Fb0lxUWQz/Z1ZYTGpQUjJBSGFI/YSZwaWQ9QXBp"} {...args} />;

  export const ImageParams=Template.bind({})
  ImageParams.args={
    imageUrl:'https://imgs.search.brave.com/cyo_EoKRmMXUWC60jW-JBgq26RlGenp4_eVcBqRvrfI/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC56/SDZfbW5Fb0lxUWQz/Z1ZYTGpQUjJBSGFI/YSZwaWQ9QXBp'
  }
