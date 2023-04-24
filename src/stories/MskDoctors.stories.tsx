import { within, userEvent, createEvent } from '@storybook/testing-library';
import type { Meta, StoryFn } from "@storybook/react";
import { expect } from '@storybook/jest'
import MskDoctors from 'components/Home/MskDoctors';

export default {
  title: 'Home/Msk Doctors Cards',
  component: MskDoctors
} as Meta;

const Mockdata =  {
    'drName' : 'Dr Bob',
    'specialist': 'surgical oncologist',
    'doctorPage': 'cancer-care/doctors/mock-data',
    'drImg': 'https://img.freepik.com/premium-vector/doctor-profile-with-medical-service-icon_617655-48.jpg?w=350'
}

const Template: StoryFn = (args) => <MskDoctors doctorInfo={Mockdata} {...args} />;

export const MskDoctorCards = Template.bind({});
MskDoctorCards.parameters = {
  backgrounds: {
    default: 'light',
    values: [

      { name: 'light', value: '#F4F4F4' },
      { name: 'dark', value: '#222' },
    ],
  }
}

MskDoctorCards.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

//   const ReadMoreBtn = canvas.getAllByText('Read More');
//   ReadMoreBtn.map(data => {
//     userEvent.hover(data)
//     expect(data).toHaveClass('hover:bg-primary hover:text-white')
//   })

  const ServicesImg = canvas.getAllByRole('img')
  ServicesImg.map(data => {
    const ServiceTitle : any = data.parentElement?.nextElementSibling?.firstElementChild?.firstChild;
    userEvent.hover(ServiceTitle);
    expect(ServiceTitle).toHaveClass('hover:text-secondary')

  })

};



