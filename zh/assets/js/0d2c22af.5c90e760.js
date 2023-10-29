"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[58850],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=o(n),m=r,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75564:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"basic-auth",keywords:["APISIX","Plugin","Basic Auth","basic-auth"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `basic-auth` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},i=void 0,u={unversionedId:"plugins/basic-auth",id:"version-3.1/plugins/basic-auth",isDocsHomePage:!1,title:"basic-auth",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `basic-auth` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.1/plugins/basic-auth.md",sourceDirName:"plugins",slug:"/plugins/basic-auth",permalink:"/zh/docs/apisix/plugins/basic-auth",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.1/docs/zh/latest/plugins/basic-auth.md",tags:[],version:"3.1",frontMatter:{title:"basic-auth",keywords:["APISIX","Plugin","Basic Auth","basic-auth"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `basic-auth` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},sidebar:"version-3.1/docs",previous:{title:"jwt-auth",permalink:"/zh/docs/apisix/plugins/jwt-auth"},next:{title:"authz-keycloak",permalink:"/zh/docs/apisix/plugins/authz-keycloak"}},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],o={toc:p};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"basic-auth")," \u63d2\u4ef6\u53ef\u4ee5\u5c06 ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Basic_access_authentication"},"Basic_access_authentication")," \u6dfb\u52a0\u5230 Route \u6216 Service \u4e2d\u3002"),(0,r.kt)("p",null,"\u8be5\u63d2\u4ef6\u9700\u8981\u4e0e ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/terminology/consumer"},"Consumer")," \u4e00\u8d77\u4f7f\u7528\u3002API \u7684\u6d88\u8d39\u8005\u53ef\u4ee5\u5c06\u5b83\u4eec\u7684\u5bc6\u94a5\u6dfb\u52a0\u5230\u8bf7\u6c42\u5934\u4e2d\u4ee5\u9a8c\u8bc1\u5176\u8bf7\u6c42\u3002"),(0,r.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,r.kt)("p",null,"Consumer \u7aef\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"Consumer \u7684\u7528\u6237\u540d\u5e76\u4e14\u8be5\u7528\u6237\u540d\u662f\u552f\u4e00\uff0c\u5982\u679c\u591a\u4e2a Consumer \u4f7f\u7528\u4e86\u76f8\u540c\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"username"),"\uff0c\u5c06\u4f1a\u51fa\u73b0\u8bf7\u6c42\u5339\u914d\u5f02\u5e38\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u7684\u5bc6\u7801\u3002")))),(0,r.kt)("p",null,"\u6ce8\u610f\uff1aschema \u4e2d\u8fd8\u5b9a\u4e49\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},'encrypt_fields = {"password"}'),"\uff0c\u8fd9\u610f\u5473\u7740\u8be5\u5b57\u6bb5\u5c06\u4f1a\u88ab\u52a0\u5bc6\u5b58\u50a8\u5728 etcd \u4e2d\u3002\u5177\u4f53\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/plugin-develop#%E5%8A%A0%E5%AF%86%E5%AD%98%E5%82%A8%E5%AD%97%E6%AE%B5"},"\u52a0\u5bc6\u5b58\u50a8\u5b57\u6bb5"),"\u3002"),(0,r.kt)("p",null,"Route \u7aef\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hide_credentials"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8be5\u53c2\u6570\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u5219\u4e0d\u4f1a\u5c06 Authorization \u8bf7\u6c42\u5934\u4f20\u9012\u7ed9 Upstream\u3002")))),(0,r.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5982\u679c\u9700\u8981\u542f\u7528\u63d2\u4ef6\uff0c\u5c31\u5fc5\u987b\u521b\u5efa\u4e00\u4e2a\u5177\u6709\u8eab\u4efd\u9a8c\u8bc1\u914d\u7f6e\u7684 Consumer\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/consumers \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "foo",\n    "plugins": {\n        "basic-auth": {\n            "username": "foo",\n            "password": "bar"\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"/docs/dashboard/USER_GUIDE"},"APISIX Dashboard")," \u5b8c\u6210\u4e0a\u8ff0\u64cd\u4f5c\u3002"),(0,r.kt)("p",null,"\u521b\u5efa Consumer \u540e\uff0c\u5c31\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e Route \u6216 Service \u6765\u9a8c\u8bc1\u63d2\u4ef6\uff0c\u4ee5\u4e0b\u662f\u914d\u7f6e Route \u7684\u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/hello",\n    "plugins": {\n        "basic-auth": {}\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:8080": 1\n        }\n    }\n}\'\n')),(0,r.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,r.kt)("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u547d\u4ee4\u542f\u7528\u63d2\u4ef6\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u6cd5\u6d4b\u8bd5\u63d2\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i -ufoo:bar http://127.0.0.1:9080/hello\n")),(0,r.kt)("p",null,"\u5982\u679c\u914d\u7f6e\u6210\u529f\u5219\u8fd4\u56de\u5982\u4e0b\u7ed3\u679c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n...\nhello, world\n")),(0,r.kt)("p",null,"\u5982\u679c\u8bf7\u6c42\u672a\u6388\u6743\uff0c\u5219\u8fd4\u56de\u5982\u4e0b\u7ed3\u679c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 401 Unauthorized\n...\n{"message":"Missing authorization in request"}\n')),(0,r.kt)("p",null,"\u5982\u679c\u7528\u6237\u540d\u548c\u5bc6\u7801\u9519\u5219\u8fd4\u56de\u5982\u4e0b\u7ed3\u679c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 401 Unauthorized\n...\n{"message":"Invalid user authorization"}\n')),(0,r.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u7981\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"basic-auth")," \u63d2\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:8080": 1\n        }\n    }\n}\'\n')))}s.isMDXComponent=!0}}]);