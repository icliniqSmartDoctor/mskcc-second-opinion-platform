"use strict";(self.webpackChunkstrong_shepherd=self.webpackChunkstrong_shepherd||[]).push([[513],{"./src/stories/Footer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FooterBar:()=>FooterBar,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Footer_stories});var esm=__webpack_require__("./node_modules/.pnpm/@storybook+testing-library@0.0.14-next.2/node_modules/@storybook/testing-library/dist/esm/index.js"),GlobalConstants=__webpack_require__("./src/GlobalConstants.ts"),AssetAccessor=__webpack_require__("./src/utils/AssetAccessor.tsx"),jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Common_Footer=function Footer(){const sortedSpecialities=GlobalConstants.zC.sort(((a,b)=>a.cancer_label.localeCompare(b.cancer_label))),middleIndex=Math.ceil(sortedSpecialities.length/2),firstSpecialities=sortedSpecialities.slice(0,middleIndex),secondSpecialities=sortedSpecialities.slice(middleIndex);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("div",{className:"bg-primary h-auto relative mt-10 w-full",children:[(0,jsx_runtime.jsx)("div",{className:"container-alternate mx-auto ",children:(0,jsx_runtime.jsxs)("div",{className:"grid grid-cols-2 gap-6 py-24",children:[(0,jsx_runtime.jsxs)("div",{className:"col-span-2 lg:col-span-1",children:[(0,jsx_runtime.jsxs)("div",{className:"flex items-center justify-between",children:[(0,jsx_runtime.jsx)("a",{href:"https://www.mskcc.org/",children:(0,jsx_runtime.jsx)("img",{className:"h-16",title:"MSK Logo",alt:"MSK Logo",src:"https://assets.icliniq.com/mskcc/logo/msk-logo-white.svg"})}),(0,jsx_runtime.jsx)("a",{href:"https://www.icliniq.com/",children:(0,jsx_runtime.jsx)("img",{className:"h-10",title:"iCliniq Logo",alt:"iCliniq Logo",src:"https://assets.icliniq.com/v2/assets/images/iCliniq-logo/ic-blue-logo.svg"})})]}),(0,jsx_runtime.jsx)("div",{className:"mt-10 text-white leading-24",children:"Our experts treat every form of cancer, including the most important one—yours. MSK is able to provide guidance and care for patients in India through our collaboration with iCliniq, a leading global telemedicine provider. Our India-based team of dedicated clinical specialists and care coordinators will help you, your family, or representative access MSK’s doctors in New York."}),(0,jsx_runtime.jsxs)("div",{className:"text-md flex items-center tracking-wide\t mt-8 font-normal\t",children:[(0,jsx_runtime.jsx)("span",{className:"material-icons-outlined text-white pr-2 -mt-1 text-3xl",children:"mail"}),(0,jsx_runtime.jsx)("p",{className:"text-white",children:"Email: "}),(0,jsx_runtime.jsx)("a",{className:"pl-2 text-white underline",href:"mailto:mskccindia@icliniq.com",children:"mskccindia@icliniq.com"})]}),(0,jsx_runtime.jsxs)("div",{className:"text-md flex items-center tracking-wide\t mt-3 font-normal\t",children:[(0,jsx_runtime.jsx)("span",{className:"material-icons-outlined text-white pr-2 -mt-1 text-3xl",children:"call"}),(0,jsx_runtime.jsx)("p",{className:"text-white",children:"Phone Number: "}),(0,jsx_runtime.jsx)("a",{className:"pl-2 text-white underline",href:"tel:+918270070000",children:"+91 82 700 70000"})]})]}),(0,jsx_runtime.jsxs)("div",{className:"col-span-2 mt-10 lg:mt-0 lg:col-span-1",children:[(0,jsx_runtime.jsx)("h3",{className:"text-white text-2xl font-semibold",children:"Specialities"}),(0,jsx_runtime.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center gap-10",children:[(0,jsx_runtime.jsx)("div",{className:"col-span-1 md:col-span-1 lg:col-span-1",children:firstSpecialities.map((specialites=>(0,jsx_runtime.jsx)("div",{className:"mt-5 w-auto break-words ",children:(0,jsx_runtime.jsx)("a",{className:"text-white capitalize hover:text-gray-200",href:specialites.cancer_path_url,children:specialites.cancer_label})})))}),(0,jsx_runtime.jsx)("div",{className:"col-span-1 md:col-span-1 lg:col-span-1",children:secondSpecialities.map((specialites=>(0,jsx_runtime.jsx)("div",{className:"mt-5 w-auto break-words ",children:(0,jsx_runtime.jsx)("a",{className:"text-white capitalize hover:text-gray-200",href:specialites.cancer_path_url,children:specialites.cancer_label})})))})]})]})]})}),(0,jsx_runtime.jsx)("a",{href:"https://api.whatsapp.com/send?phone=918270070000",target:"_blank",children:(0,jsx_runtime.jsx)("img",{className:"fixed banner-whatsapp-icon",src:AssetAccessor.Z.whatsappIcon,alt:"Whatsapp Icon",title:"Whatsapp Icon"})}),(0,jsx_runtime.jsx)("a",{href:"tel:+91-82-700-70000",children:(0,jsx_runtime.jsx)("img",{className:"fixed banner-call-icon",src:AssetAccessor.Z.telephoneIcon,alt:"Telephone Icon",title:"Telephone Icon"})}),(0,jsx_runtime.jsx)("div",{className:"footer-bottom h-16 flex items-center justify-center",children:(0,jsx_runtime.jsx)("span",{children:"Powered by iCliniq"})})]})})},Footer_stories={title:"Home/Footer",component:Common_Footer},Template=args=>(0,jsx_runtime.jsx)(Common_Footer,{...args});Template.displayName="Template";const FooterBar=Template.bind({});FooterBar.play=async({canvasElement})=>{(0,esm.uh)(canvasElement)},FooterBar.parameters={...FooterBar.parameters,docs:{...FooterBar.parameters?.docs,source:{originalSource:"args => <Footer {...args} />",...FooterBar.parameters?.docs?.source}}};const __namedExportsOrder=["FooterBar"]},"./src/utils/AssetAccessor.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>utils_AssetAccessor});const utils_AssetAccessor={whatsappIcon:__webpack_require__.p+"static/media/whatsappIcon.cdc361d1.svg",telephoneIcon:__webpack_require__.p+"static/media/telephoneIcon.02f9afe7.svg",mskccBuilding:__webpack_require__.p+"static/media/mskcc-building-v1.6e44b55a.webp"}}}]);