"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[478],{8357:function(e,n,t){t.d(n,{U:function(){return u}});var r=t(5893),l=(t(7294),t(5227)),s=t(4283),i=t(9547);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}function a(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=function(e){var n=e.children,t=e.transformLinkUri,o=e.transformImageUri,u=e.className,d=void 0===u?"w-full markdown":u;return(0,r.jsx)(i.D,{className:d,transformLinkUri:t,transformImageUri:o,components:{code:function(e){e.node;var n=e.inline,t=e.className,i=e.children,o=a(e,["node","inline","className","children"]),u=/language-(\w+)/.exec(t||"");return!n&&u?(0,r.jsx)(l.Z,c({language:u[1],style:s.wB,PreTag:"div",customStyle:{fontSize:"16px",fontFamily:"mono"}},o,{children:String(i).replace(/\n$/,"")})):(0,r.jsx)("code",c({className:t},o,{children:i}))}},children:n})}},9042:function(e,n,t){t.d(n,{T:function(){return j}});var r=t(5893),l=t(7294),s=function(e){return e.condition?(0,r.jsx)(r.Fragment,{children:e.children}):null},i=t(9547),o=t(1163),c=function(e){var n=e.titleSuperscript,t=e.titleSubscript,l=e.image,c=e.title,a=(0,o.useRouter)(),u=Boolean(l);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("header",{className:"pt-24",children:(0,r.jsxs)("div",{className:"container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center",children:[(0,r.jsxs)("div",{className:"flex flex-col w-full ".concat(u?"md:w-2/5":"md:w-full pb-10"," justify-center items-start text-center md:text-left"),children:[(0,r.jsx)(s,{condition:Boolean(n),children:(0,r.jsx)(i.D,{className:"uppercase tracking-loose w-full",children:n})}),(0,r.jsx)("h1",{className:"my-4 text-5xl font-bold leading-tight",children:c}),(0,r.jsx)(s,{condition:Boolean(t),children:(0,r.jsx)(i.D,{className:"leading-normal text-2xl mb-8",children:t})})]}),(0,r.jsx)(s,{condition:u,children:(0,r.jsx)("div",{className:"w-full h-3/5 w-4/5 sm:w-4/5 md:w-3/5 lg:w-2/5 py-10 px-32 md:px-26 text-center",children:(0,r.jsx)("img",{className:"object-scale-down z-50","aria-hidden":"true",alt:"Header image",src:a.basePath+l})})})]})}),(0,r.jsx)("div",{className:"relative -mt-12 lg:-mt-24",children:(0,r.jsxs)("svg",{viewBox:"0 0 1400 175",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsxs)("g",{transform:"translate(0, 45)",fill:"#FFFFFF",children:[(0,r.jsx)("path",{d:"M 0 0 C 90.7283 0.9275 147.9128 27.1879 291.9102 59.9119 C 387.9085 81.7279 543.6051 89.3348 759 82.7326 C 469.3361 156.2544 216.3361 153.6679 0 88",opacity:"0.1"}),(0,r.jsx)("path",{d:"M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z",opacity:"0.1"}),(0,r.jsx)("path",{d:"M 1046 51.6521 C 1140 41 1262 35 1439 79 L 1439 120 C 1271.1721 77.9435 1140.1721 55.1609 990 69 Z",opacity:"0.2"})]}),(0,r.jsx)("g",{transform:"translate(-4, 76)",fill:"#FFFFFF",children:(0,r.jsx)("path",{d:"M 1 53 C 57.086 53.198 98.208 65.809 123.822 71.865 C 181.454 85.495 234.295 90.29 272.033 93.459 C 311.355 96.759 396.635 95.801 461.025 91.663 C 486.76 90.01 518.727 86.372 556.926 80.752 C 595.747 74.596 622.372 70.008 636.799 66.991 C 663.913 61.324 712.501 49.503 727.605 46.128 C 780.47 34.317 810 31 849 27 C 879 24 954 19 1012 19 C 1075 19 1092 19 1136 23 C 1198 29 1205 30 1245 35 C 1323 46 1323 50 1440.886 72.354 L 1441.191 104.352 L 1.121 104.031 L 1 60 Z"})})]})})]})},a=function(){return(0,r.jsx)("footer",{className:"rotate-180 -mt-1",children:(0,r.jsxs)("svg",{viewBox:"0 0 1400 100",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsxs)("g",{transform:"translate(0, 1)",fill:"#FFFFFF",children:[(0,r.jsx)("path",{d:"M 0 0 C 90.7283 0.9275 147.9128 27.1879 291.9102 59.9119 C 387.9085 81.7279 543.6051 89.3348 759 82.7326 C 469.3361 156.2544 216.3361 153.6679 0 88",opacity:"0.1"}),(0,r.jsx)("path",{d:"M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z",opacity:"0.1"}),(0,r.jsx)("path",{d:"M 1046 51.6521 C 1140 41 1262 35 1439 79 L 1439 120 C 1271.1721 77.9435 1140.1721 55.1609 990 69 Z",opacity:"0.2"})]}),(0,r.jsx)("g",{transform:"translate(0, 1)",fill:"#FFFFFF",children:(0,r.jsx)("path",{d:"M 1 53 C 57.086 53.198 98.208 65.809 123.822 71.865 C 181.454 85.495 234.295 90.29 272.033 93.459 C 311.355 96.759 396.635 95.801 461.025 91.663 C 486.76 90.01 518.727 86.372 556.926 80.752 C 595.747 74.596 622.372 70.008 636.799 66.991 C 663.913 61.324 712.501 49.503 727.605 46.128 C 780.47 34.317 810 31 849 27 C 879 24 954 19 1012 19 C 1075 19 1092 19 1136 23 C 1198 29 1205 30 1245 35 C 1323 46 1323 50 1440.886 72.354 L 1441.191 104.352 L 1.121 104.031 L 1 60 Z"})})]})})},u=t(1664),d=t.n(u),f=t(1954);function x(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var m=function(e){var n=e.slug,t=e.name,l=e.scrolling,s=e.insideResponsiveMenu,i=e.selected,o=void 0!==i&&i;return(0,r.jsx)("li",{className:"mr-3",children:(0,r.jsx)(d(),{href:n,children:(0,r.jsx)("a",{className:o?"inline-block py-2 px-4 text-lg ".concat(s?"text-black":"text-white"," underline underline-offset-8 decoration-2 font-bold pointer-events-none"):"inline-block py-2 px-4 text-lg ".concat(l&&!s?"text-white":"text-black"," no-underline hover:underline hover:underline-offset-8 hover:decoration-2 font-bold"),children:t})})})},h=function(e){var n=e.pages.sort((function(e,n){return e.menuIndex-n.menuIndex})),t=(0,o.useRouter)(),s=n.map((function(e){return{slug:"/"+e.slug,name:e.title,selected:t.asPath=="/"+e.slug}})),i=(0,l.useState)(!1),c=i[0],a=i[1],u=(0,l.useState)(!1),h=u[0],g=u[1];return(0,l.useEffect)((function(){var e=function(e){window.scrollY>0&&!h&&g(!0),0===window.scrollY&&h&&g(!1)};return document.addEventListener("scroll",e),function(){document.removeEventListener("scroll",e)}})),(0,r.jsxs)("nav",{id:"header",className:"fixed w-full z-30 top-0 text-white ".concat(c?"bg-white lg:bg-transparent":"","  ").concat(h&&!c?"bg-black transform transition duration-500 ease-in-out":""," "),onBlur:function(){return c?setTimeout((function(){return a(!1)}),250):{}},children:[(0,r.jsxs)("div",{className:"w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2",children:[(0,r.jsx)("div",{className:"pl-4 flex items-center",children:(0,r.jsx)(d(),{href:"/",children:(0,r.jsxs)("a",{className:"toggleColour ".concat(c?"text-gray-700":"text-white"," no-underline hover:no-underline font-bold text-2xl lg:text-3xl"),children:[(0,r.jsx)("svg",{x:"0px",y:"0px",viewBox:"0 0 512.005 512.005",className:"h-8 fill-current inline pr-6",children:(0,r.jsx)("path",{d:"M481.82,113.212L248.656,25.904c-2.302-0.857-4.854-0.857-7.157,0L6.707,113.822c-4.122,1.199-9.106,7.707-5.419,14.367 v246.524c0,4.356,2.761,8.224,6.878,9.65l231.043,79.744c1.371,0.788,2.428,1.48,4.85,1.801c3.394,0.45,5.542-0.502,5.558-0.507 l234.792-81.038c4.117-1.426,6.879-5.294,6.879-9.65V123.382C491.374,118.49,485.637,114.565,481.82,113.212z M450.76,123.382 l-205.07,76.793l-61.542-23.04l195.319-80.45L450.76,123.382z M351.383,86.168l-205.248,84.537l-5.054,49.097l-38.212-15.392 v-45.568l212.879-86.019L351.383,86.168z M245.078,46.361l42.396,15.875L90.17,141.947l-50.172-18.791L245.078,46.361z M21.706,138.559l60.747,22.749v56.879l76.163,30.686l5.852-56.86l71.613,26.818v222.595l-214.375-73.99V138.559z M470.872,367.435 l-214.375,73.99V218.377l214.375-80.271V367.435z"})}),f.D.name]})})}),(0,r.jsx)("div",{className:"block lg:hidden pr-4",children:(0,r.jsx)("button",{id:"nav-toggle",className:"flex items-center p-1 ".concat(c?"text-black":"text-white"," hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"),onClick:function(){return a(!c)},children:(0,r.jsxs)("svg",{className:"fill-current h-6 w-6",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("title",{children:"Menu"}),(0,r.jsx)("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})]})})}),(0,r.jsxs)("div",{className:"w-full flex-grow lg:flex lg:items-center lg:w-auto ".concat(c?"":"hidden"," mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"),id:"nav-content",children:[(0,r.jsxs)("ul",{className:"list-reset lg:flex justify-end flex-1 items-center",children:[s.map((function(e){return(0,r.jsx)(m,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){x(e,n,t[n])}))}return e}({insideResponsiveMenu:c,scrolling:h},e),e.slug)})),(0,r.jsx)(m,{name:"Code Docs",scrolling:h,insideResponsiveMenu:c,selected:t.asPath.startsWith("/docs/"),slug:"/docs/code-docs"})]}),(0,r.jsxs)("a",{href:f.D.gitHubUrl,className:"inline-block mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out",children:[(0,r.jsx)("svg",{x:"0px",y:"0px",viewBox:"0 0 16 16",className:"h-8 fill-gray-700 inline pr-4",children:(0,r.jsx)("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})}),"GitHub"]})]})]}),(0,r.jsx)("hr",{className:"border-b border-gray-100 opacity-25 my-0 py-0"})]})};function g(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){g(e,n,t[n])}))}return e}var j=function(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h,{pages:e.pages}),(0,r.jsx)(c,p({},e)),(0,r.jsx)("main",{children:e.children}),(0,r.jsx)(a,{})]})}}}]);