import { within, userEvent, createEvent } from '@storybook/testing-library';
import type { Meta, StoryFn } from "@storybook/react";
import ServicesOffered from 'components/Home/ServicesOffered';
import { expect } from '@storybook/jest'

export default {
  title: 'Home/Services Offered',
  component: ServicesOffered,
} as Meta;

const Template: StoryFn = (args) => <ServicesOffered {...args} />;

export const ServicesOfferedByMsk = Template.bind({});
ServicesOfferedByMsk.parameters = {
  backgrounds: {
    default: 'light',
    values: [

      { name: 'light', value: '#F4F4F4' },
      { name: 'dark', value: '#222' },
    ],
  }
}

ServicesOfferedByMsk.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const ReadMoreBtn = canvas.getAllByText('Read More');
  ReadMoreBtn.map(data => {
    userEvent.hover(data)
    expect(data).toHaveClass('hover:bg-primary hover:text-white')
  })

  const ServicesImg = canvas.getAllByRole('img')
  ServicesImg.map(data => {
    const ServiceTitle : any = data.parentElement?.nextElementSibling?.firstElementChild?.firstChild;
    userEvent.hover(ServiceTitle);
    expect(ServiceTitle).toHaveClass('hover:text-secondary')
  })

};



