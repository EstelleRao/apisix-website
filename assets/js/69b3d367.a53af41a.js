"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3530],{35318:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=c(n),m=o,h=g["".concat(p,".").concat(m)]||g[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2047:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(25773),o=(n(27378),n(35318));const a={title:"How to use Go to develop Apache APISIX plugin",slug:"2021/08/19/go-makes-apache-apisix-better",author:"Zexuan Luo",authorURL:"https://github.com/spacewander",authorImageURL:"https://avatars.githubusercontent.com/u/4161644?v=4",keywords:["Go","APISIX","Go Plugin","APISIX Go plugin","apisix-go-plugin-runner","Golang"],description:"This article explains in detail how to use Go to develop the plug-in and specific operation steps of the cloud native API gateway Apache APISIX.",tags:["Ecosystem","Plugins"]},i=void 0,l={permalink:"/blog/2021/08/19/go-makes-apache-apisix-better",source:"@site/blog/2021/08/19/go-makes-Apache-APISIX-better.md",title:"How to use Go to develop Apache APISIX plugin",description:"This article explains in detail how to use Go to develop the plug-in and specific operation steps of the cloud native API gateway Apache APISIX.",date:"2021-08-19T00:00:00.000Z",formattedDate:"August 19, 2021",tags:[{label:"Ecosystem",permalink:"/blog/tags/ecosystem"},{label:"Plugins",permalink:"/blog/tags/plugins"}],readingTime:5.62,truncated:!0,authors:[{name:"Zexuan Luo",url:"https://github.com/spacewander",imageURL:"https://avatars.githubusercontent.com/u/4161644?v=4"}],prevItem:{title:"Apache APISIX Meetup in Shanghai, welcome to register!",permalink:"/blog/2021/08/21/shanghai-meetup"},nextItem:{title:"Licensing with Casbin in Apache APISIX",permalink:"/blog/2021/08/18/auth-with-casbin-in-apache-apisix"}},p={authorsImageUrls:[void 0]},c=[],s={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This article will explain in detail how to use Go to develop Apache APISIX plugins. By embracing the Go ecosystem and breaking new ground for Apache APISIX, we hope that Go will make Apache APISIX even better!")))}u.isMDXComponent=!0}}]);