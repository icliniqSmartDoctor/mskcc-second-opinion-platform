import React from "react";

import AccordionExample from "../../src/components/Home/AccordionExample";


export default {
  title: 'Example/AccordionExample',
  component: AccordionExample,
};

const Template = (args) => <AccordionExample {...args} />;

export const DefaultAccordion = Template.bind({});
DefaultAccordion.args = {};
