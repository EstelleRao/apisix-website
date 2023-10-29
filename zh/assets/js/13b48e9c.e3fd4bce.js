"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5717],{35318:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(r),g=o,f=m["".concat(l,".").concat(g)]||m[g]||u[g]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9606:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(25773),o=(r(27378),r(35318));const a={title:"\u9a6c\u8702\u7a9d\u5982\u4f55\u5229\u7528 APISIX \u7f51\u5173\u5b9e\u73b0\u5fae\u670d\u52a1\u67b6\u6784\u5347\u7ea7",authors:[{name:"\u8463\u7ea2\u5e05",title:"Author",url:"https://github.com/hansedong",image_url:"https://github.com/hansedong.png"}],keywords:["\u9a6c\u8702\u7a9d","Apache APISIX","\u7f51\u5173","\u67b6\u6784"],description:"\u672c\u6587\u4ece\u9a6c\u8702\u7a9d\u7684\u5fae\u670d\u52a1\u67b6\u6784\u5e73\u53f0\u8702\u6548\u8fed\u4ee3\u8fc7\u7a0b\u548c\u5e94\u7528 APISIX \u540e\u7684\u4ea7\u54c1\u5b9e\u8df5\u89d2\u5ea6\uff0c\u4e3a\u5927\u5bb6\u5448\u73b0\u4e86\u57fa\u4e8e APISIX \u7684\u7f51\u5173\u5e94\u7528\u5b9e\u4f8b\u3002",tags:["Case Studies"],image:"https://static.apiseven.com/uploads/2023/01/17/GhQuQxSZ_20230117-111941.png"},i=void 0,c={permalink:"/zh/blog/2023/01/15/mafengwo-with-apisix",source:"@site/blog/2023/01/15/mafengwo-with-apisix.md",title:"\u9a6c\u8702\u7a9d\u5982\u4f55\u5229\u7528 APISIX \u7f51\u5173\u5b9e\u73b0\u5fae\u670d\u52a1\u67b6\u6784\u5347\u7ea7",description:"\u672c\u6587\u4ece\u9a6c\u8702\u7a9d\u7684\u5fae\u670d\u52a1\u67b6\u6784\u5e73\u53f0\u8702\u6548\u8fed\u4ee3\u8fc7\u7a0b\u548c\u5e94\u7528 APISIX \u540e\u7684\u4ea7\u54c1\u5b9e\u8df5\u89d2\u5ea6\uff0c\u4e3a\u5927\u5bb6\u5448\u73b0\u4e86\u57fa\u4e8e APISIX \u7684\u7f51\u5173\u5e94\u7528\u5b9e\u4f8b\u3002",date:"2023-01-15T00:00:00.000Z",formattedDate:"2023\u5e741\u670815\u65e5",tags:[{label:"Case Studies",permalink:"/zh/blog/tags/case-studies"}],readingTime:20.185,truncated:!0,authors:[{name:"\u8463\u7ea2\u5e05",title:"Author",url:"https://github.com/hansedong",image_url:"https://github.com/hansedong.png",imageURL:"https://github.com/hansedong.png"}],prevItem:{title:"\u670d\u52a1\u7f51\u683c\u9886\u57df\u7684\u767e\u82b1\u9f50\u653e\uff0c\u662f\u5426\u5b58\u5728\u4e00\u4e2a\u66f4\u4f18\u89e3\uff1f",permalink:"/zh/blog/2023/01/18/what-is-service-mesh"},nextItem:{title:"\u5982\u4f55\u4f7f\u7528 Amesh \u914d\u7f6e\u63d2\u4ef6",permalink:"/zh/blog/2023/01/12/amesh-config-plugin"}},l={authorsImageUrls:[void 0]},p=[],s={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4ece\u9a6c\u8702\u7a9d\u7684\u5fae\u670d\u52a1\u67b6\u6784\u5e73\u53f0\u8702\u6548\u8fed\u4ee3\u8fc7\u7a0b\u548c\u5e94\u7528 APISIX \u540e\u7684\u4ea7\u54c1\u5b9e\u8df5\u89d2\u5ea6\uff0c\u4e3a\u5927\u5bb6\u5448\u73b0\u4e86\u57fa\u4e8e APISIX \u7684\u7f51\u5173\u5e94\u7528\u5b9e\u4f8b\u3002")))}u.isMDXComponent=!0}}]);