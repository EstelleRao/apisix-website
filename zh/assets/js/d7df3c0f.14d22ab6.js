"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3168],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(r),h=a,g=m["".concat(p,".").concat(h)]||m[h]||s[h]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},91593:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(25773),a=(r(27378),r(35318));const o={title:"\u57fa\u4e8e Apache APISIX \u7684\u81ea\u52a8\u5316\u8fd0\u7ef4\u5e73\u53f0",authors:[{name:"\u9648\u5e86",title:"Author",url:"https://github.com/chenqing24",image_url:"https://avatars.githubusercontent.com/u/3502467?v=4"},{name:"\u97e9\u98de",title:"Technical Writer",url:"https://github.com/hf400159",image_url:"https://github.com/hf400159.png"}],keywords:["Apache APISIX","API \u7f51\u5173","\u81ea\u52a8\u5316","\u8fd0\u7ef4","\u5fae\u670d\u52a1","\u6743\u9650"],description:"\u672c\u6587\u7531\u524d\u540c\u7a0b\u6570\u79d1\u8fd0\u7ef4\u7ecf\u7406\u9648\u5e86\u4ecb\u7ecd\u4e86\u5982\u4f55\u57fa\u4e8e Apache APISIX \u5b9e\u73b0\u81ea\u52a8\u5316\u8fd0\u7ef4\u5e73\u53f0\uff0c\u5e76\u4ece\u7528\u6237\u767b\u5f55\u53ca\u9274\u6743\u573a\u666f\uff0c\u5e26\u6765\u66f4\u591a\u7ec6\u8282\u5c55\u793a\u3002",tags:["Case Studies"],image:"https://static.apiseven.com/2022/blog/0817/%E5%90%8C%E7%A8%8B%E6%95%B0%E7%A7%91.png"},i=void 0,c={permalink:"/zh/blog/2022/06/14/automated-operation-base-apache-apisix",source:"@site/blog/2022/06/14/automated-operation-base-apache-apisix.md",title:"\u57fa\u4e8e Apache APISIX \u7684\u81ea\u52a8\u5316\u8fd0\u7ef4\u5e73\u53f0",description:"\u672c\u6587\u7531\u524d\u540c\u7a0b\u6570\u79d1\u8fd0\u7ef4\u7ecf\u7406\u9648\u5e86\u4ecb\u7ecd\u4e86\u5982\u4f55\u57fa\u4e8e Apache APISIX \u5b9e\u73b0\u81ea\u52a8\u5316\u8fd0\u7ef4\u5e73\u53f0\uff0c\u5e76\u4ece\u7528\u6237\u767b\u5f55\u53ca\u9274\u6743\u573a\u666f\uff0c\u5e26\u6765\u66f4\u591a\u7ec6\u8282\u5c55\u793a\u3002",date:"2022-06-14T00:00:00.000Z",formattedDate:"2022\u5e746\u670814\u65e5",tags:[{label:"Case Studies",permalink:"/zh/blog/tags/case-studies"}],readingTime:17.425,truncated:!0,authors:[{name:"\u9648\u5e86",title:"Author",url:"https://github.com/chenqing24",image_url:"https://avatars.githubusercontent.com/u/3502467?v=4",imageURL:"https://avatars.githubusercontent.com/u/3502467?v=4"},{name:"\u97e9\u98de",title:"Technical Writer",url:"https://github.com/hf400159",image_url:"https://github.com/hf400159.png",imageURL:"https://github.com/hf400159.png"}],prevItem:{title:"\u793e\u533a\u53cc\u5468\u62a5\uff086.01 - 6.15\uff09",permalink:"/zh/blog/2022/06/21/weekly-report-0621"},nextItem:{title:"APISIX \u52a9\u529b\u4e2d\u4e1c\u793e\u4ea4\u8f6f\u4ef6\uff0c\u5b9e\u73b0\u672c\u5730\u5316\u90e8\u7f72",permalink:"/zh/blog/2022/06/14/beeto-with-apache-apisix"}},p={authorsImageUrls:[void 0,void 0]},l=[],u={toc:l};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u7531\u524d\u540c\u7a0b\u6570\u79d1\u8fd0\u7ef4\u7ecf\u7406\u9648\u5e86\u4ecb\u7ecd\u4e86\u5982\u4f55\u57fa\u4e8e Apache APISIX \u5b9e\u73b0\u81ea\u52a8\u5316\u8fd0\u7ef4\u5e73\u53f0\u3002")))}s.isMDXComponent=!0}}]);