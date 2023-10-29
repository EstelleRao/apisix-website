"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7342],{35318:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(r),f=o,y=m["".concat(l,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(y,c(c({ref:t},s),{},{components:r})):n.createElement(y,c({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},77296:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(25773),o=(r(27378),r(35318));const a={title:"\u5fae\u670d\u52a1\u4e2d\u7684\u670d\u52a1\u53d1\u73b0\u662f\u4ec0\u4e48",author:"\u7f57\u6cfd\u8f69",authorURL:"https://github.com/spacewander",authorImageURL:"https://github.com/spacewander.png",keywords:["\u5fae\u670d\u52a1","\u670d\u52a1\u53d1\u73b0","\u5f00\u6e90","APISIX","Nacos"],description:"\u672c\u6587\u901a\u8fc7\u670d\u52a1\u53d1\u73b0\u7684\u76f8\u5173\u80cc\u666f\u548c APISIX \u5bf9\u4e8e\u670d\u52a1\u53d1\u73b0\u7684\u5e94\u7528\u4e0e\u5b9e\u8df5\uff0c\u6765\u4ecb\u7ecd\u5fae\u670d\u52a1\u4e2d\u7684\u670d\u52a1\u53d1\u73b0\u5185\u5bb9\u3002",tags:["Ecosystem"]},c=void 0,i={permalink:"/zh/blog/2022/11/10/what-is-service-in-microservice-discovery",source:"@site/blog/2022/11/10/what-is-service-in-microservice-discovery.md",title:"\u5fae\u670d\u52a1\u4e2d\u7684\u670d\u52a1\u53d1\u73b0\u662f\u4ec0\u4e48",description:"\u672c\u6587\u901a\u8fc7\u670d\u52a1\u53d1\u73b0\u7684\u76f8\u5173\u80cc\u666f\u548c APISIX \u5bf9\u4e8e\u670d\u52a1\u53d1\u73b0\u7684\u5e94\u7528\u4e0e\u5b9e\u8df5\uff0c\u6765\u4ecb\u7ecd\u5fae\u670d\u52a1\u4e2d\u7684\u670d\u52a1\u53d1\u73b0\u5185\u5bb9\u3002",date:"2022-11-10T00:00:00.000Z",formattedDate:"2022\u5e7411\u670810\u65e5",tags:[{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"}],readingTime:13.41,truncated:!0,authors:[{name:"\u7f57\u6cfd\u8f69",url:"https://github.com/spacewander",imageURL:"https://github.com/spacewander.png"}],prevItem:{title:"\u793e\u533a\u53cc\u5468\u62a5 (10.16 - 11.4)",permalink:"/zh/blog/2022/11/10/weekly-report-1110"},nextItem:{title:"\u817e\u8baf\u84dd\u9cb8 API \u7f51\u5173\u5982\u4f55\u501f\u52a9 APISIX \u5b9e\u73b0\u4ea7\u54c1\u5347\u7ea7\u4e0e\u4e1a\u52a1\u5b8c\u5584",permalink:"/zh/blog/2022/11/05/tencent-blueking-with-apisix"}},l={authorsImageUrls:[void 0]},p=[],s={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u901a\u8fc7\u670d\u52a1\u53d1\u73b0\u7684\u76f8\u5173\u80cc\u666f\u548c APISIX \u5bf9\u4e8e\u670d\u52a1\u53d1\u73b0\u7684\u5e94\u7528\u4e0e\u5b9e\u8df5\uff0c\u6765\u4ecb\u7ecd\u5fae\u670d\u52a1\u4e2d\u7684\u670d\u52a1\u53d1\u73b0\u5185\u5bb9\u3002")))}u.isMDXComponent=!0}}]);