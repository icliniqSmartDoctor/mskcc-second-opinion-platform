
import type { Meta, StoryFn, StoryObj } from "@storybook/react";


import { userEvent, within } from "@storybook/testing-library";
import {expect} from '@storybook/jest'

import VideoAppointment from "components/Dashboard/Home/VideoAppoinment";

const meta = {
    title: "Dashboard/Video Appointment",
    component: VideoAppointment,
  } as Meta
  
  export default meta;
  type Story = StoryObj<typeof meta>;

  const Template:StoryFn = (args) => <VideoAppointment numDays={5} date={"2022-03-20"} time={"20:20"} {...args} />;

  export const VideoAppoinmentCard=Template.bind({})
  VideoAppoinmentCard.args={
    date:'',
    numDays:2,
    time:''
  }

