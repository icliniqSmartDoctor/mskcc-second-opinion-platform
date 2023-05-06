
import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import { userEvent, within } from "@storybook/testing-library";
import PhyisicanCarousel from "components/Dashboard/Home/PhyisicanCarousel";

const meta = {
    title: "PhyisicanCarousel",
    component: PhyisicanCarousel,
  } satisfies Meta<typeof PhyisicanCarousel>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;

  const Template:StoryFn = (args) => <PhyisicanCarousel/>;

 
  export const Navigations:Story={
    play: async({canvasElement})=>{
      const canvas=within(canvasElement)
      const leftButton=canvas.getByText("left")
      await userEvent.click(leftButton)

      const rightButton=canvas.getByText("right")
      await userEvent.click(rightButton)

    }
  }