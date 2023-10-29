"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1614],{35318:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),g=u(r),m=a,h=g["".concat(l,".").concat(m)]||g[m]||p[m]||o;return r?n.createElement(h,i(i({ref:t},s),{},{components:r})):n.createElement(h,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},50588:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(25773),a=(r(27378),r(35318));const o={title:"APISIX \u652f\u6301 gRPC Web \u534f\u8bae\u8bf7\u6c42\u4ee3\u7406",authors:[{name:"\u5e05\u8fdb\u8d85",title:"Author",url:"https://github.com/shuaijinchao",image_url:"https://avatars.githubusercontent.com/u/8529452?v=4"},{name:"\u66fe\u5955\u9716",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://avatars.githubusercontent.com/u/36651058?v=4"}],keywords:["Apache APISIX","gRPC","API \u7f51\u5173","Ecosystem"],description:"\u901a\u8fc7\u793e\u533a\u7684\u79ef\u6781\u8ba8\u8bba\u548c\u8d21\u732e\uff0cApache APISIX \u53c8\u62d3\u5bbd\u4e86 gRPC \u751f\u6001\u7684\u652f\u6301\u8303\u56f4\u3002\u672c\u6587\u5c06\u4ecb\u7ecd gRPC Web \u534f\u8bae\u8bf7\u6c42\u4ee3\u7406\u7684\u5177\u4f53\u4f7f\u7528\u6b65\u9aa4\u53ca\u7ec6\u8282\u3002",tags:["Ecosystem","Plugins"]},i=void 0,c={permalink:"/zh/blog/2022/01/25/apisix-grpc-web-integration",source:"@site/blog/2022/01/25/apisix-grpc-web-integration.md",title:"APISIX \u652f\u6301 gRPC Web \u534f\u8bae\u8bf7\u6c42\u4ee3\u7406",description:"\u901a\u8fc7\u793e\u533a\u7684\u79ef\u6781\u8ba8\u8bba\u548c\u8d21\u732e\uff0cApache APISIX \u53c8\u62d3\u5bbd\u4e86 gRPC \u751f\u6001\u7684\u652f\u6301\u8303\u56f4\u3002\u672c\u6587\u5c06\u4ecb\u7ecd gRPC Web \u534f\u8bae\u8bf7\u6c42\u4ee3\u7406\u7684\u5177\u4f53\u4f7f\u7528\u6b65\u9aa4\u53ca\u7ec6\u8282\u3002",date:"2022-01-25T00:00:00.000Z",formattedDate:"2022\u5e741\u670825\u65e5",tags:[{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"},{label:"Plugins",permalink:"/zh/blog/tags/plugins"}],readingTime:7.89,truncated:!0,authors:[{name:"\u5e05\u8fdb\u8d85",title:"Author",url:"https://github.com/shuaijinchao",image_url:"https://avatars.githubusercontent.com/u/8529452?v=4",imageURL:"https://avatars.githubusercontent.com/u/8529452?v=4"},{name:"\u66fe\u5955\u9716",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://avatars.githubusercontent.com/u/36651058?v=4",imageURL:"https://avatars.githubusercontent.com/u/36651058?v=4"}],prevItem:{title:"\u65b0\u63d2\u4ef6 forward-auth \u5df2\u4e0a\u7ebf\uff0c\u8ba4\u8bc1\u529f\u80fd\u53c8\u591a\u4e00\u9879\u9009\u62e9",permalink:"/zh/blog/2022/01/26/apisix-integrate-forward-auth-plugin"},nextItem:{title:"Apache APISIX 2.12.0 \u6b63\u5f0f\u53d1\u5e03",permalink:"/zh/blog/2022/01/25/release-apache-apisix-2.12"}},l={authorsImageUrls:[void 0,void 0]},u=[],s={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Apache APISIX \u5df2\u7ecf\u652f\u6301\u4e86 gRPC \u534f\u8bae\u4ee3\u7406\uff0c\u4ee5\u53ca\u901a\u8fc7 gRPC Transcode \u63d2\u4ef6\u652f\u6301\u4e86 HTTP(s) \u5230 gRPC Server \u7684\u4ee3\u7406\u3002\u901a\u8fc7\u793e\u533a\u7684\u79ef\u6781\u8ba8\u8bba\u548c\u8d21\u732e\uff0cApache APISIX \u53c8\u62d3\u5bbd\u4e86 gRPC \u751f\u6001\u7684\u652f\u6301\u8303\u56f4\uff1a\u652f\u6301 gRPC Web \u534f\u8bae\u8bf7\u6c42\u4ee3\u7406\u3002")))}p.isMDXComponent=!0}}]);