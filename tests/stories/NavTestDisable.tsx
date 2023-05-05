


// import { within, userEvent } from '@storybook/testing-library';
// import Nav from 'components/Common/Nav';
// import {MSKCC_MENU} from 'constants/HomeConstants';
// import type { Meta, StoryFn } from "@storybook/react";
// import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
// import { expect } from '@storybook/jest'

// export default {
//   title: 'Home/Nav',
//   component: Nav,
// } as Meta;

// const Template: StoryFn = (args) => <Nav {...args} />;

// export const NavbarMobile = Template.bind({});
// NavbarMobile.parameters =
// {
//   viewport: {
//     viewports: INITIAL_VIEWPORTS,
//     defaultViewport: 'iphonexr'
//   },
// }
// NavbarMobile.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   await new Promise(r => setTimeout(r, 1000));

//   const menuBtn: any = canvas.getByRole('button');
//   userEvent.click(menuBtn)
//   const customAccord = document.getElementsByClassName('custom-accordation');
//   await expect(customAccord[0]).toHaveClass('custom-accordation-open')


//   Object.keys(MSKCC_MENU).map(async (res) => {
//     if (Array.isArray(MSKCC_MENU[res])) {
//       const InnerAccordBtn = canvas.getByText(res.toUpperCase());
//       const InnerAccordMenu = InnerAccordBtn.parentElement?.nextElementSibling;
//       expect(InnerAccordMenu).toHaveClass('mskcc-nav-options');
//       userEvent.click(InnerAccordBtn)
//       InnerAccordBtn.parentElement?.nextElementSibling?.classList.contains('mskcc-nav-options') &&
//         expect(InnerAccordMenu).toHaveClass('mskcc-nav-option-open');
//       userEvent.click(InnerAccordBtn)
//     }
//   })


//   userEvent.click(menuBtn)


// };


// export const NavbarDesktop = Template.bind({});
// NavbarDesktop.parameters =
// {
//   viewport: {
//     viewports: INITIAL_VIEWPORTS
//   },
// }
// NavbarDesktop.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);


// };



