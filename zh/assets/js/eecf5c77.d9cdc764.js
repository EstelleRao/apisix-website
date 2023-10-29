"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[1194],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),y=o,d=m["".concat(c,".").concat(y)]||m[y]||u[y]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},94923:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={title:"API Gateway",keywords:["APISIX","API \u7f51\u5173","\u7f51\u5173"],description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4e86 API \u7f51\u5173\u7684\u4f5c\u7528\u4ee5\u53ca\u4e3a\u4ec0\u4e48\u9700\u8981 API \u7f51\u5173\u3002"},i=void 0,l={unversionedId:"terminology/api-gateway",id:"version-3.1/terminology/api-gateway",isDocsHomePage:!1,title:"API Gateway",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4e86 API \u7f51\u5173\u7684\u4f5c\u7528\u4ee5\u53ca\u4e3a\u4ec0\u4e48\u9700\u8981 API \u7f51\u5173\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.1/terminology/api-gateway.md",sourceDirName:"terminology",slug:"/terminology/api-gateway",permalink:"/zh/docs/apisix/terminology/api-gateway",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.1/docs/zh/latest/terminology/api-gateway.md",tags:[],version:"3.1",frontMatter:{title:"API Gateway",keywords:["APISIX","API \u7f51\u5173","\u7f51\u5173"],description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4e86 API \u7f51\u5173\u7684\u4f5c\u7528\u4ee5\u53ca\u4e3a\u4ec0\u4e48\u9700\u8981 API \u7f51\u5173\u3002"},sidebar:"version-3.1/docs",previous:{title:"\u914d\u7f6e\u5ba2\u6237\u7aef\u4e0e APISIX \u4e4b\u95f4\u7684\u53cc\u5411\u8ba4\u8bc1\uff08mTLS\uff09",permalink:"/zh/docs/apisix/tutorials/client-to-apisix-mtls"},next:{title:"Consumer",permalink:"/zh/docs/apisix/terminology/consumer"}},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u4e3a\u4ec0\u4e48\u9700\u8981 API \u7f51\u5173\uff1f",id:"\u4e3a\u4ec0\u4e48\u9700\u8981-api-\u7f51\u5173",children:[]}],p={toc:c};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,o.kt)("p",null,"API \u7f51\u5173\u662f\u4f4d\u4e8e\u5ba2\u6237\u7aef\u4e0e\u540e\u7aef\u670d\u52a1\u96c6\u4e4b\u95f4\u7684 API \u7ba1\u7406\u5de5\u5177\u3002API \u7f51\u5173\u76f8\u5f53\u4e8e\u53cd\u5411\u4ee3\u7406\uff0c\u7528\u4e8e\u63a5\u53d7\u6240\u6709 API \u7684\u8c03\u7528\u3001\u6574\u5408\u5904\u7406\u8fd9\u4e9b\u8c03\u7528\u6240\u9700\u7684\u5404\u79cd\u670d\u52a1\uff0c\u5e76\u8fd4\u56de\u76f8\u5e94\u7684\u7ed3\u679c\u3002API \u7f51\u5173\u901a\u5e38\u4f1a\u5904\u7406",(0,o.kt)("strong",{parentName:"p"},"\u8de8 API \u670d\u52a1\u7cfb\u7edf\u4f7f\u7528"),"\u7684\u5e38\u89c1\u4efb\u52a1\uff0c\u5e76\u7edf\u4e00\u63a5\u5165\u8fdb\u884c\u7ba1\u7406\u3002\u901a\u8fc7 API \u7f51\u5173\u7684\u7edf\u4e00\u62e6\u622a\uff0c\u53ef\u4ee5\u5b9e\u73b0\u5bf9 API \u63a5\u53e3\u7684\u5b89\u5168\u3001\u65e5\u5fd7\u7b49\u5171\u6027\u9700\u6c42\uff0c\u5982\u7528\u6237\u8eab\u4efd\u9a8c\u8bc1\u3001\u901f\u7387\u9650\u5236\u548c\u7edf\u8ba1\u4fe1\u606f\u3002"),(0,o.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u9700\u8981-api-\u7f51\u5173"},"\u4e3a\u4ec0\u4e48\u9700\u8981 API \u7f51\u5173\uff1f"),(0,o.kt)("p",null,"\u4e0e\u4f20\u7edf\u7684 API \u5fae\u670d\u52a1\u76f8\u6bd4\uff0cAPI \u7f51\u5173\u6709\u5f88\u591a\u597d\u5904\u3002\u6bd4\u5982\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5b83\u662f\u6240\u6709 API \u8bf7\u6c42\u7684\u552f\u4e00\u5165\u53e3\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u53ef\u7528\u4e8e\u5c06\u8bf7\u6c42\u8f6c\u53d1\u5230\u4e0d\u540c\u7684\u540e\u7aef\uff0c\u6216\u6839\u636e\u8bf7\u6c42\u5934\u5c06\u8bf7\u6c42\u8f6c\u53d1\u5230\u4e0d\u540c\u7684\u670d\u52a1\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u53ef\u7528\u4e8e\u6267\u884c\u8eab\u4efd\u9a8c\u8bc1\u3001\u6388\u6743\u548c\u9650\u901f\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5b83\u53ef\u7528\u4e8e\u652f\u6301\u5206\u6790\uff0c\u4f8b\u5982\u76d1\u63a7\u3001\u65e5\u5fd7\u8bb0\u5f55\u548c\u8ddf\u8e2a\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4fdd\u62a4 API \u514d\u53d7 SQL \u6ce8\u5165\u3001DDOS \u653b\u51fb\u548c XSS \u7b49\u6076\u610f\u653b\u51fb\u5a92\u4ecb\u7684\u653b\u51fb\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5b83\u53ef\u4ee5\u964d\u4f4e API \u548c\u5fae\u670d\u52a1\u7684\u590d\u6742\u6027\u3002")))}s.isMDXComponent=!0}}]);