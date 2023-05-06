import Activities from 'components/Dashboard/Home/Activities';
import { ACTIVITIES } from 'constants/DashboardConstants';

import type { Meta } from '@storybook/react';

export default{
    title:'Dashboard/Activities',
    component:Activities
} as Meta;

const Template=()=><Activities Acts={ACTIVITIES}/>

export const ActivityCard=Template.bind({})

