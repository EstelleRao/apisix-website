"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[93343],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),l=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(a.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=l(n),d=i,f=g["".concat(a,".").concat(d)]||g[d]||c[d]||o;return n?r.createElement(f,p(p({ref:t},u),{},{components:n})):r.createElement(f,p({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,p=new Array(o);p[0]=g;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:i,p[1]=s;for(var l=2;l<o;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},61202:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>a});var r=n(87462),i=(n(67294),n(3905));const o={title:"ext-plugin-post-req",keywords:["APISIX","Plugin","ext-plugin-post-req"],description:"This document contains information about the Apache APISIX ext-plugin-post-req Plugin."},p=void 0,s={unversionedId:"plugins/ext-plugin-post-req",id:"version-3.1/plugins/ext-plugin-post-req",isDocsHomePage:!1,title:"ext-plugin-post-req",description:"This document contains information about the Apache APISIX ext-plugin-post-req Plugin.",source:"@site/docs-apisix_versioned_docs/version-3.1/plugins/ext-plugin-post-req.md",sourceDirName:"plugins",slug:"/plugins/ext-plugin-post-req",permalink:"/docs/apisix/plugins/ext-plugin-post-req",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.1/docs/en/latest/plugins/ext-plugin-post-req.md",tags:[],version:"3.1",frontMatter:{title:"ext-plugin-post-req",keywords:["APISIX","Plugin","ext-plugin-post-req"],description:"This document contains information about the Apache APISIX ext-plugin-post-req Plugin."},sidebar:"version-3.1/docs",previous:{title:"ext-plugin-pre-req",permalink:"/docs/apisix/plugins/ext-plugin-pre-req"},next:{title:"ext-plugin-post-resp",permalink:"/docs/apisix/plugins/ext-plugin-post-resp"}},a=[{value:"Description",id:"description",children:[]}],l={toc:a};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ext-plugin-post-req")," differs from the ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/plugins/ext-plugin-pre-req"},"ext-plugin-pre-req")," Plugin in that it runs after executing the built-in Lua Plugins and before proxying to the Upstream."),(0,i.kt)("p",null,"You can learn more about the configuration from the ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/plugins/ext-plugin-pre-req"},"ext-plugin-pre-req")," Plugin document."))}u.isMDXComponent=!0}}]);