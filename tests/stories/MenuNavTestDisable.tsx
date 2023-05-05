// import { within} from '@storybook/testing-library';
// import type { Meta, StoryFn } from "@storybook/react";
// import MenuNav from 'components/Common/MenuNav';

// export default {
//   title: 'Home/Nav',
//   component: MenuNav,
// } as Meta;

// const Template: StoryFn = (args) => <MenuNav {...args} />;
// export const NavMenu = Template.bind({});


// function capitalizeFirstLetter(string: string) {
//   var splitStr = string.toLowerCase().split(' ');
//   for (var i = 0; i < splitStr.length; i++) {
//     splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
//   }

//   return splitStr.join(' ');
// }



// NavMenu.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);

//   const arrButton: any = canvas.getByText('about us'+ " +").parentElement;
//   const arrMenu: any  = arrButton?.nextElementSibling;
// };

