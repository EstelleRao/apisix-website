"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4896],{35318:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),g=p(r),m=o,f=g["".concat(i,".").concat(m)]||g[m]||u[m]||a;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=g;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},67898:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(25773),o=(r(27378),r(35318));const a={title:"APISIX Ingress \u5982\u4f55\u652f\u6301\u81ea\u5b9a\u4e49\u63d2\u4ef6",author:"\u5f20\u664b\u6d9b",authorURL:"https://github.com/tao12345666333",authorImageURL:"https://github.com/tao12345666333.png",keywords:["Kubernetes","APISIX Ingress","\u4e91\u539f\u751f","APISIX","Plugin"],description:"\u672c\u7bc7\u4e3b\u8981\u4ecb\u7ecd\u4e86 Ingress \u8d44\u6e90\u76f8\u5173\u7684\u8bed\u4e49\uff0c\u4ee5\u53ca\u5982\u4f55\u5bf9 Ingress \u8d44\u6e90\u8fdb\u884c\u80fd\u529b\u7684\u6269\u5c55\u3002",tags:["Ecosystem"]},s=void 0,c={permalink:"/zh/blog/2022/12/15/how-support-ingress-custom-plugins",source:"@site/blog/2022/12/15/how-support-ingress-custom-plugins.md",title:"APISIX Ingress \u5982\u4f55\u652f\u6301\u81ea\u5b9a\u4e49\u63d2\u4ef6",description:"\u672c\u7bc7\u4e3b\u8981\u4ecb\u7ecd\u4e86 Ingress \u8d44\u6e90\u76f8\u5173\u7684\u8bed\u4e49\uff0c\u4ee5\u53ca\u5982\u4f55\u5bf9 Ingress \u8d44\u6e90\u8fdb\u884c\u80fd\u529b\u7684\u6269\u5c55\u3002",date:"2022-12-15T00:00:00.000Z",formattedDate:"2022\u5e7412\u670815\u65e5",tags:[{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"}],readingTime:8.605,truncated:!0,authors:[{name:"\u5f20\u664b\u6d9b",url:"https://github.com/tao12345666333",imageURL:"https://github.com/tao12345666333.png"}],prevItem:{title:"\u9a6c\u65af\u514b\u90fd\u4e0d\u61c2\u7684 GraphQL\uff0cAPI \u7f51\u5173\u53c8\u80fd\u5bf9\u5176\u5982\u4f55\u7406\u89e3\uff1f",permalink:"/zh/blog/2022/12/16/what-is-graphql"},nextItem:{title:"\u805a\u7126\u4eba\u673a\u4ea4\u4e92\u667a\u80fd\u5e94\u7528\u9886\u57df\uff0cAPISIX \u5728\u5e0c\u6c83\u7f51\u5173\u7684\u5e94\u7528\u4e0e\u5b9e\u8df5",permalink:"/zh/blog/2022/12/13/seewo-with-apache-apisix"}},i={authorsImageUrls:[void 0]},p=[],l={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u672c\u7bc7\u4e3b\u8981\u4ecb\u7ecd\u4e86 Ingress \u8d44\u6e90\u76f8\u5173\u7684\u8bed\u4e49\uff0c\u4ee5\u53ca\u5982\u4f55\u5bf9 Ingress \u8d44\u6e90\u8fdb\u884c\u80fd\u529b\u7684\u6269\u5c55\u3002")))}u.isMDXComponent=!0}}]);