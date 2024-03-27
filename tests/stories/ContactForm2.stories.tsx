import React from 'react';
import { within, userEvent } from '@storybook/testing-library'; // Ensure you have these libraries installed
import { expect } from '@storybook/jest';
import type { StoryFn } from "@storybook/react";
import ContactForm2 from 'constants/Contact-Form.tsx';

export default {
  title: 'Components/ContactForm2',
  component: ContactForm2,
};

const Template:StoryFn = () => <ContactForm2  />;

export const FillAndSubmit = Template.bind({});

FillAndSubmit.play = async ({ canvasElement }) => {
  // Access the canvas for the current story
  const canvas = within(canvasElement);

  // Fill out the form inputs
  await userEvent.type(canvas.getByPlaceholderText('Your Name'), 'John Doe', { delay: 100 });
  await userEvent.type(canvas.getByPlaceholderText('Your Email'), 'john.doe@example.com', { delay: 100 });
  await userEvent.type(canvas.getByPlaceholderText('Your Phone'), '1234567890', { delay: 100 });
  await userEvent.type(canvas.getByPlaceholderText('Your Subject'), 'Greetings', { delay: 100 });
  await userEvent.type(canvas.getByPlaceholderText('Your Message'), 'Hello, this is a test message.', { delay: 100 });

  // Click the submit button
  // await userEvent.click(canvas.getByRole('button', { name: 'Submit' }));
  // await userEvent.click(canvas.getByRole('button', { name: /submit/i }));

  // Here you would add assertions if you need to verify certain behaviors after submit,
  // for instance, checking if a confirmation message appears.
  // Since this example doesn't include the actual form submission logic or its outcomes,
  // it's not possible to provide a specific assertion example.
};