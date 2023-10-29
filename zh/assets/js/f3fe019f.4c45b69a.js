"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[735],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),f=o,g=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},47335:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(25773),o=(r(27378),r(35318));const a={title:"\u4e3a\u4ec0\u4e48 APISIX Ingress \u662f\u6bd4 Traefik \u66f4\u597d\u7684\u9009\u62e9\uff1f",author:"\u5f20\u664b\u6d9b",authorURL:"https://github.com/tao12345666333",authorImageURL:"https://github.com/tao12345666333.png",keywords:["Apache APISIX","Ingress","Ingress controller","Gateway API","Traefik"],description:"\u672c\u6587\u53ef\u4ee5\u4e3a\u6b63\u5728\u9009\u578b Kubernetes Ingress Controller \u4ea7\u54c1\u7684\u7528\u6237\u63d0\u4f9b\u4e00\u4e9b\u5e2e\u52a9\u3002",tags:["Ecosystem"]},i=void 0,l={permalink:"/zh/blog/2022/12/19/apisix-ingress-better-than-traefik",source:"@site/blog/2022/12/19/apisix-ingress-better-than-traefik.md",title:"\u4e3a\u4ec0\u4e48 APISIX Ingress \u662f\u6bd4 Traefik \u66f4\u597d\u7684\u9009\u62e9\uff1f",description:"\u672c\u6587\u53ef\u4ee5\u4e3a\u6b63\u5728\u9009\u578b Kubernetes Ingress Controller \u4ea7\u54c1\u7684\u7528\u6237\u63d0\u4f9b\u4e00\u4e9b\u5e2e\u52a9\u3002",date:"2022-12-19T00:00:00.000Z",formattedDate:"2022\u5e7412\u670819\u65e5",tags:[{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"}],readingTime:8.88,truncated:!0,authors:[{name:"\u5f20\u664b\u6d9b",url:"https://github.com/tao12345666333",imageURL:"https://github.com/tao12345666333.png"}],prevItem:{title:"\u793e\u533a\u53cc\u5468\u62a5 (12.05 - 12.18)",permalink:"/zh/blog/2022/12/22/weekly-report-1218"},nextItem:{title:"\u8ba4\u8bc1\u9274\u6743\u5bf9\u4e8e API \u7f51\u5173\u7684\u91cd\u8981\u6027",permalink:"/zh/blog/2022/12/19/auth-apisix-gateway"}},c={authorsImageUrls:[void 0]},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u53ef\u4ee5\u4e3a\u6b63\u5728\u9009\u578b Kubernetes Ingress Controller \u4ea7\u54c1\u7684\u7528\u6237\u63d0\u4f9b\u4e00\u4e9b\u5e2e\u52a9\u3002")))}u.isMDXComponent=!0}}]);