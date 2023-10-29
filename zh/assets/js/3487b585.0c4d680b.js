"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[61703],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var s=n.createContext({}),a=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=a(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=a(r),d=p,f=g["".concat(s,".").concat(d)]||g[d]||c[d]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var i=r.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:p,o[1]=l;for(var a=2;a<i;a++)o[a]=r[a];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},37696:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),p=(r(67294),r(3905));const i={title:"ext-plugin-post-req",keywords:["APISIX","Plugin","ext-plugin-post-req"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `ext-plugin-post-req` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},o=void 0,l={unversionedId:"plugins/ext-plugin-post-req",id:"version-3.1/plugins/ext-plugin-post-req",isDocsHomePage:!1,title:"ext-plugin-post-req",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `ext-plugin-post-req` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.1/plugins/ext-plugin-post-req.md",sourceDirName:"plugins",slug:"/plugins/ext-plugin-post-req",permalink:"/zh/docs/apisix/plugins/ext-plugin-post-req",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.1/docs/zh/latest/plugins/ext-plugin-post-req.md",tags:[],version:"3.1",frontMatter:{title:"ext-plugin-post-req",keywords:["APISIX","Plugin","ext-plugin-post-req"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `ext-plugin-post-req` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},sidebar:"version-3.1/docs",previous:{title:"ext-plugin-pre-req",permalink:"/zh/docs/apisix/plugins/ext-plugin-pre-req"},next:{title:"ext-plugin-post-resp",permalink:"/zh/docs/apisix/plugins/ext-plugin-post-resp"}},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]}],a={toc:s};function u(e){let{components:t,...r}=e;return(0,p.kt)("wrapper",(0,n.Z)({},a,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"ext-plugin-post-req")," \u63d2\u4ef6\u7684\u529f\u80fd\u4e0e ",(0,p.kt)("inlineCode",{parentName:"p"},"ext-plugin-pre-req")," \u63d2\u4ef6\u7684\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\uff1a",(0,p.kt)("inlineCode",{parentName:"p"},"ext-plugin-post-req")," \u63d2\u4ef6\u662f\u5728\u5185\u7f6e Lua \u63d2\u4ef6\u6267\u884c\u4e4b\u540e\u4e14\u5728\u8bf7\u6c42\u5230\u8fbe\u4e0a\u6e38\u4e4b\u524d\u5de5\u4f5c\u3002"),(0,p.kt)("p",null,"\u4f60\u53ef\u4ee5\u53c2\u8003 ",(0,p.kt)("a",{parentName:"p",href:"/zh/docs/apisix/plugins/ext-plugin-pre-req"},"ext-plugin-pre-req")," \u6587\u6863\uff0c\u5b66\u4e60\u5982\u4f55\u914d\u7f6e\u548c\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"ext-plugin-post-req")," \u63d2\u4ef6\u3002"))}u.isMDXComponent=!0}}]);