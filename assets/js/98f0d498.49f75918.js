"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3523],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),g=p(r),f=o,m=g["".concat(s,".").concat(f)]||g[f]||l[f]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6552:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(25773),o=(r(27378),r(35318));const i={title:"Apache APISIX Extensions Guide",slug:"2021/10/29/extension-guide",author:"Zexuan Luo",authorURL:"https://github.com/spacewander",authorImageURL:"https://avatars.githubusercontent.com/u/4161644?v=4",keywords:["Apache APISIX","API Gateway","Plugin","HTTP","Apache"],description:"This article introduces the expansion direction of Rewrite or Access, configuring service discovery, configuring load balancing, and processing responses.",tags:["Ecosystem"]},a=void 0,c={permalink:"/blog/2021/10/29/extension-guide",source:"@site/blog/2021/10/29/Extension-guide.md",title:"Apache APISIX Extensions Guide",description:"This article introduces the expansion direction of Rewrite or Access, configuring service discovery, configuring load balancing, and processing responses.",date:"2021-10-29T00:00:00.000Z",formattedDate:"October 29, 2021",tags:[{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:7.69,truncated:!0,authors:[{name:"Zexuan Luo",url:"https://github.com/spacewander",imageURL:"https://avatars.githubusercontent.com/u/4161644?v=4"}],prevItem:{title:"Weekly Report (Oct.15 - Oct.31)",permalink:"/blog/2021/11/02/weekly-report-1031"},nextItem:{title:"How APISIX Ingress grown from 0 to 1",permalink:"/blog/2021/10/26/apisix-ingress"}},s={authorsImageUrls:[void 0]},p=[],u={toc:p};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This article provides an extension guide for Apache APISIX, aiming to provide users with some ideas for extending Apache APISIX.")))}l.isMDXComponent=!0}}]);