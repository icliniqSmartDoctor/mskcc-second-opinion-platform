
import CaseStatus from "components/Dashboard/Home/CaseStatus";
import "../index.css";

import type { Meta, StoryFn } from "@storybook/react";
import { CASE_STATUS } from "constants/DashboardConstants";

export default {
  title: "CaseStatus",
  component: CaseStatus,
}as Meta;

interface Status {
  isPassed: boolean;
  milestone: string;
  timestamp: string;
}

const Template:StoryFn = (args) => <CaseStatus sample={args.statusData} />;
export const storyCase = Template.bind({})
storyCase.args={
    statusData:CASE_STATUS,
}
