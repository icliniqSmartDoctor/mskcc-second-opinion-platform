"use strict";(self.webpackChunkstrong_shepherd=self.webpackChunkstrong_shepherd||[]).push([[602],{"./src/stories/MenuNav.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NavMenu:()=>NavMenu,__namedExportsOrder:()=>__namedExportsOrder,default:()=>MenuNav_stories});var esm=__webpack_require__("./node_modules/.pnpm/@storybook+testing-library@0.0.14-next.2/node_modules/@storybook/testing-library/dist/esm/index.js"),GlobalConstants=__webpack_require__("./src/GlobalConstants.ts"),jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Common_MenuNav=function MenuNav(){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("div",{className:"bg-primary relative h-16 w-full hidden lg:block",children:(0,jsx_runtime.jsx)("div",{className:"container-alternate mx-auto px-10 flex justify-between items-center h-full",children:(0,jsx_runtime.jsx)("div",{className:"flex text-white items-center h-full tracking-wide w-full",children:Object.keys(GlobalConstants.nI).map((res=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:Array.isArray(GlobalConstants.nI[res])?"login"===res.toLowerCase()?(0,jsx_runtime.jsxs)("div",{className:"relative  h-full flex items-center ml-auto",children:[(0,jsx_runtime.jsxs)("div",{className:"px-4 capitalize cursor-pointer menu-opt w-full h-full flex items-center font-medium",children:[" ",(0,jsx_runtime.jsxs)("span",{children:[res," "]})," "]}),(0,jsx_runtime.jsx)("div",{className:"mskcc-menu-nav-options h-auto top-16 right-5 absolute w-60 max-w-60 leading-9 bg-primary  border-t-4 border-secondary px-5 py-3",children:GlobalConstants.nI[res].map((menuOpt=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("a",{href:`${Object.values(menuOpt).toString()}`,children:(0,jsx_runtime.jsx)("div",{className:"h-auto py-1  w-full ml-auto",children:(0,jsx_runtime.jsx)("span",{className:"capitalize",children:Object.keys(menuOpt).toString()})})})})))})]}):(0,jsx_runtime.jsxs)("div",{className:"relative  h-full flex items-center",children:[(0,jsx_runtime.jsxs)("div",{className:"px-4 capitalize cursor-pointer menu-opt w-full h-full flex items-center font-medium",children:[" ",(0,jsx_runtime.jsxs)("span",{children:[res," +"]})," "]}),(0,jsx_runtime.jsx)("div",{className:"mskcc-menu-nav-options h-auto top-16  left-5 absolute w-60 max-w-60 leading-9 bg-primary  border-t-4 border-secondary px-5 py-3",children:GlobalConstants.nI[res].map((menuOpt=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("a",{href:`${Object.values(menuOpt).toString()}`,children:(0,jsx_runtime.jsx)("div",{className:"h-auto py-1  w-full ml-auto",children:(0,jsx_runtime.jsx)("span",{className:"capitalize",children:Object.keys(menuOpt).toString()})})})})))})]}):(0,jsx_runtime.jsx)("a",{href:`${GlobalConstants.nI[res]}`,children:(0,jsx_runtime.jsx)("div",{className:"mx-4 capitalize font-medium",children:"home"===res.toString().toLowerCase()?(0,jsx_runtime.jsx)("span",{className:"material-symbols-outlined",children:"home"}):res})})})))})})})})},MenuNav_stories={title:"Home/Nav",component:Common_MenuNav},Template=args=>(0,jsx_runtime.jsx)(Common_MenuNav,{...args});Template.displayName="Template";const NavMenu=Template.bind({});NavMenu.play=async({canvasElement})=>{(0,esm.uh)(canvasElement).getByText("about us +").parentElement,arrButton?.nextElementSibling},NavMenu.parameters={...NavMenu.parameters,docs:{...NavMenu.parameters?.docs,source:{originalSource:"args => <MenuNav {...args} />",...NavMenu.parameters?.docs?.source}}};const __namedExportsOrder=["NavMenu"]}}]);