"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5873],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(n),g=a,h=m["".concat(p,".").concat(g)]||m[g]||s[g]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57551:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(25773),a=(n(27378),n(35318));const i={title:"API Gateway Apache APISIX provides enhancements on API Management",authors:[{name:"Zeping Bai",title:"Author",url:"https://github.com/bzp2010",image_url:"https://avatars.githubusercontent.com/u/8078418?v=4"},{name:"Fei Han",title:"Technical Writer",url:"https://github.com/hf400159",image_url:"https://avatars.githubusercontent.com/u/97138894?v=4"}],keywords:["Apache APISIX","API Gateway","Security","Ecosystem"],description:"You can protect custom APIs in APISIX plugins through the public-api plugin of Apache APISIX, a cloud-native API gateway, and introduce its application scenarios.",tags:["Plugins","Ecosystem"]},o=void 0,c={permalink:"/blog/2022/03/01/apisix-integration-public-api-plugin",source:"@site/blog/2022/03/01/apisix-integration-public-api-plugin.md",title:"API Gateway Apache APISIX provides enhancements on API Management",description:"You can protect custom APIs in APISIX plugins through the public-api plugin of Apache APISIX, a cloud-native API gateway, and introduce its application scenarios.",date:"2022-03-01T00:00:00.000Z",formattedDate:"March 1, 2022",tags:[{label:"Plugins",permalink:"/blog/tags/plugins"},{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:8.06,truncated:!0,authors:[{name:"Zeping Bai",title:"Author",url:"https://github.com/bzp2010",image_url:"https://avatars.githubusercontent.com/u/8078418?v=4",imageURL:"https://avatars.githubusercontent.com/u/8078418?v=4"},{name:"Fei Han",title:"Technical Writer",url:"https://github.com/hf400159",image_url:"https://avatars.githubusercontent.com/u/97138894?v=4",imageURL:"https://avatars.githubusercontent.com/u/97138894?v=4"}],prevItem:{title:"Implement Traffic Governance in Internet Insurance with APISIX",permalink:"/blog/2022/03/02/zhongan-usercase-with-apache-apisix"},nextItem:{title:"Upgrade of observability capabilities, API Gateway Apache APISIX integrates OpenTelemetry",permalink:"/blog/2022/02/28/apisix-integration-opentelemetry-plugin"}},p={authorsImageUrls:[void 0,void 0]},l=[],u={toc:l};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This article introduces the principle and usage of API gateway Apache APISIX native plugin ",(0,a.kt)("inlineCode",{parentName:"p"},"public-api"),".")))}s.isMDXComponent=!0}}]);