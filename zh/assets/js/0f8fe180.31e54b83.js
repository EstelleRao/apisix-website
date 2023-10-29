"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[65647],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(r),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},55532:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={title:"APISIX"},o=void 0,c={unversionedId:"architecture-design/apisix",id:"version-3.1/architecture-design/apisix",isDocsHomePage:!1,title:"APISIX",description:"\u8f6f\u4ef6\u67b6\u6784",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.1/architecture-design/apisix.md",sourceDirName:"architecture-design",slug:"/architecture-design/apisix",permalink:"/zh/docs/apisix/architecture-design/apisix",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.1/docs/zh/latest/architecture-design/apisix.md",tags:[],version:"3.1",frontMatter:{title:"APISIX"},sidebar:"version-3.1/docs",previous:{title:"APISIX \u5b89\u88c5\u6307\u5357",permalink:"/zh/docs/apisix/installation-guide"},next:{title:"\u53d1\u5e03 API",permalink:"/zh/docs/apisix/tutorials/expose-api"}},s=[{value:"\u8f6f\u4ef6\u67b6\u6784",id:"\u8f6f\u4ef6\u67b6\u6784",children:[]},{value:"\u63d2\u4ef6\u52a0\u8f7d\u6d41\u7a0b",id:"\u63d2\u4ef6\u52a0\u8f7d\u6d41\u7a0b",children:[]},{value:"\u63d2\u4ef6\u5185\u90e8\u7ed3\u6784",id:"\u63d2\u4ef6\u5185\u90e8\u7ed3\u6784",children:[]}],p={toc:s};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u8f6f\u4ef6\u67b6\u6784"},"\u8f6f\u4ef6\u67b6\u6784"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/3.1/docs/assets/images/flow-software-architecture.png",alt:"\u8f6f\u4ef6\u67b6\u6784"})),(0,a.kt)("p",null,"Apache APISIX \u662f\u4e00\u4e2a\u52a8\u6001\u3001\u5b9e\u65f6\u3001\u9ad8\u6027\u80fd\u7684\u4e91\u539f\u751f API \u7f51\u5173\u3002\u5b83\u6784\u5efa\u4e8e NGINX + ngx_lua \u7684\u6280\u672f\u57fa\u7840\u4e4b\u4e0a\uff0c\u5145\u5206\u5229\u7528\u4e86 LuaJIT \u6240\u63d0\u4f9b\u7684\u5f3a\u5927\u6027\u80fd\u3002 ",(0,a.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2021/08/25/why-apache-apisix-chose-nginx-and-lua/"},"\u4e3a\u4ec0\u4e48 Apache APISIX \u9009\u62e9 NGINX+Lua \u6280\u672f\u6808\uff1f"),"\u3002"),(0,a.kt)("p",null,"APISIX \u4e3b\u8981\u5206\u4e3a\u4e24\u4e2a\u90e8\u5206\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"APISIX \u6838\u5fc3\uff1a\u5305\u62ec Lua \u63d2\u4ef6\u3001\u591a\u8bed\u8a00\u63d2\u4ef6\u8fd0\u884c\u65f6\uff08Plugin Runner\uff09\u3001Wasm \u63d2\u4ef6\u8fd0\u884c\u65f6\u7b49\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u529f\u80fd\u4e30\u5bcc\u7684\u5404\u79cd\u5185\u7f6e\u63d2\u4ef6\uff1a\u5305\u62ec\u53ef\u89c2\u6d4b\u6027\u3001\u5b89\u5168\u3001\u6d41\u91cf\u63a7\u5236\u7b49\u3002")),(0,a.kt)("p",null,"APISIX \u5728\u5176\u6838\u5fc3\u4e2d\uff0c\u63d0\u4f9b\u4e86\u8def\u7531\u5339\u914d\u3001\u8d1f\u8f7d\u5747\u8861\u3001\u670d\u52a1\u53d1\u73b0\u3001API \u7ba1\u7406\u7b49\u91cd\u8981\u529f\u80fd\uff0c\u4ee5\u53ca\u914d\u7f6e\u7ba1\u7406\u7b49\u57fa\u7840\u6027\u6a21\u5757\u3002\u9664\u6b64\u4e4b\u5916\uff0cAPISIX \u63d2\u4ef6\u8fd0\u884c\u65f6\u4e5f\u5305\u542b\u5176\u4e2d\uff0c\u63d0\u4f9b\u539f\u751f Lua \u63d2\u4ef6\u7684\u8fd0\u884c\u6846\u67b6\u548c\u591a\u8bed\u8a00\u63d2\u4ef6\u7684\u8fd0\u884c\u6846\u67b6\uff0c\u4ee5\u53ca\u5b9e\u9a8c\u6027\u7684 Wasm \u63d2\u4ef6\u8fd0\u884c\u65f6\u7b49\u3002APISIX \u591a\u8bed\u8a00\u63d2\u4ef6\u8fd0\u884c\u65f6\u63d0\u4f9b\u591a\u79cd\u5f00\u53d1\u8bed\u8a00\u7684\u652f\u6301\uff0c\u6bd4\u5982 Golang\u3001Java\u3001Python\u3001JS \u7b49\u3002"),(0,a.kt)("p",null,"APISIX \u76ee\u524d\u4e5f\u5185\u7f6e\u4e86\u5404\u7c7b\u63d2\u4ef6\uff0c\u8986\u76d6\u4e86 API \u7f51\u5173\u7684\u5404\u79cd\u9886\u57df\uff0c\u5982\u8ba4\u8bc1\u9274\u6743\u3001\u5b89\u5168\u3001\u53ef\u89c2\u6d4b\u6027\u3001\u6d41\u91cf\u7ba1\u7406\u3001\u591a\u534f\u8bae\u63a5\u5165\u7b49\u3002\u5f53\u524d APISIX \u5185\u7f6e\u7684\u63d2\u4ef6\u4f7f\u7528\u539f\u751f Lua \u5b9e\u73b0\uff0c\u5173\u4e8e\u5404\u4e2a\u63d2\u4ef6\u7684\u4ecb\u7ecd\u4e0e\u4f7f\u7528\u65b9\u5f0f\uff0c\u53ef\u4ee5\u67e5\u770b\u76f8\u5173",(0,a.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/batch-requests"},"\u63d2\u4ef6\u6587\u6863"),"\u3002"),(0,a.kt)("h2",{id:"\u63d2\u4ef6\u52a0\u8f7d\u6d41\u7a0b"},"\u63d2\u4ef6\u52a0\u8f7d\u6d41\u7a0b"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/3.1/docs/assets/images/flow-load-plugin.png",alt:"\u63d2\u4ef6\u52a0\u8f7d\u6d41\u7a0b"})),(0,a.kt)("h2",{id:"\u63d2\u4ef6\u5185\u90e8\u7ed3\u6784"},"\u63d2\u4ef6\u5185\u90e8\u7ed3\u6784"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/3.1/docs/assets/images/flow-plugin-internal.png",alt:"\u63d2\u4ef6\u5185\u90e8\u7ed3\u6784"})))}l.isMDXComponent=!0}}]);