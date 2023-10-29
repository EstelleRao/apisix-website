"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[66907],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93804:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"proxy-control",keywords:["APISIX","API \u7f51\u5173","Proxy Control"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX proxy-control \u63d2\u4ef6\u7684\u76f8\u5173\u64cd\u4f5c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u6b64\u63d2\u4ef6\u52a8\u6001\u5730\u63a7\u5236 NGINX \u4ee3\u7406\u7684\u884c\u4e3a\u3002"},l=void 0,i={unversionedId:"plugins/proxy-control",id:"version-3.1/plugins/proxy-control",isDocsHomePage:!1,title:"proxy-control",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX proxy-control \u63d2\u4ef6\u7684\u76f8\u5173\u64cd\u4f5c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u6b64\u63d2\u4ef6\u52a8\u6001\u5730\u63a7\u5236 NGINX \u4ee3\u7406\u7684\u884c\u4e3a\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.1/plugins/proxy-control.md",sourceDirName:"plugins",slug:"/plugins/proxy-control",permalink:"/zh/docs/apisix/plugins/proxy-control",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.1/docs/zh/latest/plugins/proxy-control.md",tags:[],version:"3.1",frontMatter:{title:"proxy-control",keywords:["APISIX","API \u7f51\u5173","Proxy Control"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX proxy-control \u63d2\u4ef6\u7684\u76f8\u5173\u64cd\u4f5c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u6b64\u63d2\u4ef6\u52a8\u6001\u5730\u63a7\u5236 NGINX \u4ee3\u7406\u7684\u884c\u4e3a\u3002"},sidebar:"version-3.1/docs",previous:{title:"request-id",permalink:"/zh/docs/apisix/plugins/request-id"},next:{title:"client-control",permalink:"/zh/docs/apisix/plugins/client-control"}},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],c={toc:p};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy-control")," \u63d2\u4ef6\u80fd\u591f\u52a8\u6001\u5730\u63a7\u5236 NGINX \u4ee3\u7406\u7684\u76f8\u5173\u884c\u4e3a\u3002"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u91cd\u8981")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u6b64\u63d2\u4ef6\u9700\u8981 APISIX \u5728 ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/FAQ#%E5%A6%82%E4%BD%95%E6%9E%84%E5%BB%BA-apisix-base-%E7%8E%AF%E5%A2%83"},"APISIX-Base")," \u73af\u5883\u4e0a\u8fd0\u884c\u3002\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/api7/apisix-build-tools"},"apisix-build-tools"),"\u3002"))),(0,a.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request_buffering"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"true"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),"\uff0c\u63d2\u4ef6\u5c06\u52a8\u6001\u8bbe\u7f6e ",(0,a.kt)("a",{parentName:"td",href:"http://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_request_buffering"},(0,a.kt)("inlineCode",{parentName:"a"},"proxy_request_buffering")),"\u3002")))),(0,a.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u5728\u6307\u5b9a\u8def\u7531\u4e0a\u542f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy-control")," \u63d2\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9180/apisix/admin/routes/1 \\\n  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/upload",\n    "plugins": {\n        "proxy-control": {\n            "request_buffering": false\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,a.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,a.kt)("p",null,"\u542f\u7528\u63d2\u4ef6\u540e\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"curl")," \u547d\u4ee4\u8bf7\u6c42\u8be5\u8def\u7531\u8fdb\u884c\u4e00\u4e2a\u5927\u6587\u4ef6\u7684\u4e0a\u4f20\u6d4b\u8bd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/upload -d @very_big_file\n")),(0,a.kt)("p",null,'\u5982\u679c\u5728\u9519\u8bef\u65e5\u5fd7\u4e2d\u6ca1\u6709\u627e\u5230\u5173\u4e8e "a client request body is buffered to a temporary file" \u7684\u4fe1\u606f\uff0c\u5219\u8bf4\u660e\u63d2\u4ef6\u751f\u6548\u3002'),(0,a.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,a.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u7981\u7528\u8be5\u63d2\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d\n{\n    "uri": "/upload",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}s.isMDXComponent=!0}}]);