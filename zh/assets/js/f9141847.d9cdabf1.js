"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[96282],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},58215:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294);const r=function(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},55064:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(79443);const i=function(){const e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var l=a(86010);const o="tabItem_vU9c",p="tabItemActive_cw6a";const s=function(e){var t;const{lazy:a,block:r,defaultValue:s,values:c,groupId:d,className:u}=e,m=n.Children.toArray(e.children),h=null!=c?c:m.map((e=>({value:e.props.value,label:e.props.label}))),k=null!=s?s:null==(t=m.find((e=>e.props.default)))?void 0:t.props.value,{tabGroupChoices:g,setTabGroupChoices:N}=i(),[f,I]=(0,n.useState)(k),b=[];if(null!=d){const e=g[d];null!=e&&e!==f&&h.some((t=>t.value===e))&&I(e)}const v=e=>{const t=e.currentTarget,a=b.indexOf(t),n=h[a].value;I(n),null!=d&&(N(d,n),setTimeout((()=>{(function(e){const{top:t,left:a,bottom:n,right:r}=e.getBoundingClientRect(),{innerHeight:i,innerWidth:l}=window;return t>=0&&r<=l&&n<=i&&a>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p),setTimeout((()=>t.classList.remove(p)),2e3))}),150))},A=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=b.indexOf(e.target)+1;a=b[t]||b[0];break}case"ArrowLeft":{const t=b.indexOf(e.target)-1;a=b[t]||b[b.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},u)},h.map((e=>{let{value:t,label:a}=e;return n.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":f===t}),key:t,ref:e=>b.push(e),onKeyDown:A,onFocus:v,onClick:v},null!=a?a:t)}))),a?(0,n.cloneElement)(m.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},m.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}},79443:(e,t,a)=>{a.d(t,{Z:()=>n});const n=(0,a(67294).createContext)(void 0)},7374:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),i=a(55064),l=a(58215);const o={title:"\u5feb\u901f\u5165\u95e8\u6307\u5357",keywords:["APISIX","APISIX \u5165\u95e8\u6307\u5357","APISIX docker \u5b89\u88c5\u6559\u7a0b"],description:"\u672c\u6587\u6863\u5c06\u5f15\u5bfc\u4f60\u4e86\u89e3\u5982\u4f55\u5f00\u59cb\u4f7f\u7528 Apache APISIX\u3002"},p=void 0,s={unversionedId:"getting-started",id:"version-3.1/getting-started",isDocsHomePage:!1,title:"\u5feb\u901f\u5165\u95e8\u6307\u5357",description:"\u672c\u6587\u6863\u5c06\u5f15\u5bfc\u4f60\u4e86\u89e3\u5982\u4f55\u5f00\u59cb\u4f7f\u7528 Apache APISIX\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.1/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/zh/docs/apisix/getting-started",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.1/docs/zh/latest/getting-started.md",tags:[],version:"3.1",frontMatter:{title:"\u5feb\u901f\u5165\u95e8\u6307\u5357",keywords:["APISIX","APISIX \u5165\u95e8\u6307\u5357","APISIX docker \u5b89\u88c5\u6559\u7a0b"],description:"\u672c\u6587\u6863\u5c06\u5f15\u5bfc\u4f60\u4e86\u89e3\u5982\u4f55\u5f00\u59cb\u4f7f\u7528 Apache APISIX\u3002"},sidebar:"version-3.1/docs",next:{title:"APISIX \u5b89\u88c5\u6307\u5357",permalink:"/zh/docs/apisix/installation-guide"}},c=[{value:"Apache APISIX \u662f\u4ec0\u4e48\uff1f",id:"apache-apisix-\u662f\u4ec0\u4e48",children:[{value:"\u4e3b\u8981\u7279\u6027",id:"\u4e3b\u8981\u7279\u6027",children:[]}]},{value:"\u4e3b\u8981\u6982\u5ff5",id:"\u4e3b\u8981\u6982\u5ff5",children:[]},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",children:[]},{value:"\u5b89\u88c5 APISIX",id:"\u5b89\u88c5-apisix",children:[]},{value:"\u521b\u5efa\u8def\u7531",id:"\u521b\u5efa\u8def\u7531",children:[]},{value:"\u4f7f\u7528\u4e0a\u6e38\u670d\u52a1\u521b\u5efa\u8def\u7531",id:"\u4f7f\u7528\u4e0a\u6e38\u670d\u52a1\u521b\u5efa\u8def\u7531",children:[]},{value:"\u4f7f\u7528 APISIX Dashboard",id:"\u4f7f\u7528-apisix-dashboard",children:[]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],d={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6587\u5c06\u4e3a\u4f60\u4ecb\u7ecd Apache APISIX \u7684\u6982\u5ff5\u3001\u529f\u80fd\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528 APISIX\u3002"),(0,r.kt)("p",null,"\u901a\u8fc7\u672c\u6587\u4f60\u53ef\u4ee5\u4e86\u89e3\u5230\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Apache APISIX \u662f\u4ec0\u4e48\uff1f"),(0,r.kt)("li",{parentName:"ul"},"APISIX \u7684\u67b6\u6784\u53ca\u4e3b\u8981\u6982\u5ff5\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u4f55\u4f7f\u7528 Docker \u5b89\u88c5\u5e76\u8fd0\u884c APISIX\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u4f55\u4f7f\u7528 Admin API \u521b\u5efa\u7b2c\u4e00\u4e2a\u8def\u7531\u5e76\u914d\u7f6e\u4e0a\u6e38\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u4f55\u4f7f\u7528 APISIX Dashboard\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u4f55\u5bfb\u6c42\u5e2e\u52a9\u3002")),(0,r.kt)("h2",{id:"apache-apisix-\u662f\u4ec0\u4e48"},"Apache APISIX \u662f\u4ec0\u4e48\uff1f"),(0,r.kt)("p",null,"Apache APISIX \u662f Apache \u8f6f\u4ef6\u57fa\u91d1\u4f1a\u4e0b\u7684\u4e91\u539f\u751f API \u7f51\u5173\uff0c\u5b83\u517c\u5177\u52a8\u6001\u3001\u5b9e\u65f6\u3001\u9ad8\u6027\u80fd\u7b49\u7279\u70b9\uff0c\u63d0\u4f9b\u4e86\u8d1f\u8f7d\u5747\u8861\u3001\u52a8\u6001\u4e0a\u6e38\u3001\u7070\u5ea6\u53d1\u5e03\uff08\u91d1\u4e1d\u96c0\u53d1\u5e03\uff09\u3001\u670d\u52a1\u7194\u65ad\u3001\u8eab\u4efd\u8ba4\u8bc1\u3001\u53ef\u89c2\u6d4b\u6027\u7b49\u4e30\u5bcc\u7684\u6d41\u91cf\u7ba1\u7406\u529f\u80fd\u3002\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 Apache APISIX \u6765\u5904\u7406\u4f20\u7edf\u7684\u5357\u5317\u5411\u6d41\u91cf\uff0c\u4e5f\u53ef\u4ee5\u5904\u7406\u670d\u52a1\u95f4\u7684\u4e1c\u897f\u5411\u6d41\u91cf\u3002\u540c\u65f6\uff0c\u5b83\u4e5f\u652f\u6301\u4f5c\u4e3a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller"},"K8s Ingress Controller")," \u6765\u4f7f\u7528\u3002"),(0,r.kt)("h3",{id:"\u4e3b\u8981\u7279\u6027"},"\u4e3b\u8981\u7279\u6027"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u591a\u5e73\u53f0\u652f\u6301\uff1aAPISIX \u63d0\u4f9b\u4e86\u591a\u5e73\u53f0\u89e3\u51b3\u65b9\u6848\uff0c\u5b83\u4e0d\u4f46\u652f\u6301\u88f8\u673a\u8fd0\u884c\uff0c\u4e5f\u652f\u6301\u5728 Kubernetes \u4e2d\u4f7f\u7528\uff0c\u8fd8\u652f\u6301\u4e0e AWS Lambda\u3001Azure Function\u3001Lua \u51fd\u6570\u548c Apache OpenWhisk \u7b49\u4e91\u670d\u52a1\u96c6\u6210\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5168\u52a8\u6001\u80fd\u529b\uff1aAPISIX \u652f\u6301\u70ed\u52a0\u8f7d\uff0c\u8fd9\u610f\u5473\u7740\u4f60\u4e0d\u9700\u8981\u91cd\u542f\u670d\u52a1\u5c31\u53ef\u4ee5\u66f4\u65b0 APISIX \u7684\u914d\u7f6e\u3002\u8bf7\u8bbf\u95ee",(0,r.kt)("a",{parentName:"li",href:"https://apisix.apache.org/zh/blog/2021/08/25/why-apache-apisix-chose-nginx-and-lua/"},"\u4e3a\u4ec0\u4e48 Apache APISIX \u9009\u62e9 Nginx + Lua \u8fd9\u4e2a\u6280\u672f\u6808\uff1f"),"\u4ee5\u4e86\u89e3\u5b9e\u73b0\u539f\u7406\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7cbe\u7ec6\u5316\u8def\u7531\uff1aAPISIX \u652f\u6301\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"li",href:"http://nginx.org/en/docs/varindex.html"},"NGINX \u5185\u7f6e\u53d8\u91cf"),"\u505a\u4e3a\u8def\u7531\u7684\u5339\u914d\u6761\u4ef6\uff0c\u4f60\u53ef\u4ee5\u81ea\u5b9a\u4e49\u5339\u914d\u51fd\u6570\u6765\u8fc7\u6ee4\u8bf7\u6c42\uff0c\u5339\u914d\u8def\u7531\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8fd0\u7ef4\u53cb\u597d\uff1aAPISIX \u652f\u6301\u4e0e\u4ee5\u4e0b\u5de5\u5177\u548c\u5e73\u53f0\u96c6\u6210\uff1a",(0,r.kt)("a",{parentName:"li",href:"/zh/docs/apisix/plugins/jwt-auth#usage-with-hashicorp-vault"},"HashiCorp Vault"),"\u3001",(0,r.kt)("a",{parentName:"li",href:"/zh/docs/apisix/plugins/zipkin"},"Zipkin"),"\u3001",(0,r.kt)("a",{parentName:"li",href:"/zh/docs/apisix/plugins/skywalking"},"Apache SkyWalking"),"\u3001",(0,r.kt)("a",{parentName:"li",href:"/zh/docs/apisix/discovery/consul_kv"},"Consul"),"\u3001",(0,r.kt)("a",{parentName:"li",href:"/zh/docs/apisix/discovery/nacos"},"Nacos"),"\u3001",(0,r.kt)("a",{parentName:"li",href:"/zh/docs/apisix/discovery"},"Eureka"),"\u3002\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"li",href:"/docs/dashboard/USER_GUIDE"},"APISIX Dashboard"),"\uff0c\u8fd0\u7ef4\u4eba\u5458\u53ef\u4ee5\u901a\u8fc7\u53cb\u597d\u4e14\u76f4\u89c2\u7684 UI \u914d\u7f6e APISIX\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u591a\u8bed\u8a00\u63d2\u4ef6\u652f\u6301\uff1aAPISIX \u652f\u6301\u591a\u79cd\u5f00\u53d1\u8bed\u8a00\u8fdb\u884c\u63d2\u4ef6\u5f00\u53d1\uff0c\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u9009\u62e9\u64c5\u957f\u8bed\u8a00\u7684 SDK \u5f00\u53d1\u81ea\u5b9a\u4e49\u63d2\u4ef6\u3002")),(0,r.kt)("h2",{id:"\u4e3b\u8981\u6982\u5ff5"},"\u4e3b\u8981\u6982\u5ff5"),(0,r.kt)("p",null,"\u4e0b\u56fe\u4e3a Apache APISIX \u7684\u67b6\u6784\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/flow-software-architecture.png",alt:"flow-software-architecture"})),(0,r.kt)("p",null,"\u4e0b\u8868\u662f\u672c\u6587\u6d89\u53ca\u5230\u7684 APISIX \u7684\u4e3b\u8981\u6982\u5ff5\u548c\u7ec4\u4ef6\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6982\u5ff5/\u7ec4\u4ef6"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Route"),(0,r.kt)("td",{parentName:"tr",align:null},"\u901a\u8fc7\u8def\u7531\u5b9a\u4e49\u89c4\u5219\u6765\u5339\u914d\u5ba2\u6237\u7aef\u8bf7\u6c42\uff0c\u6839\u636e\u5339\u914d\u7ed3\u679c\u52a0\u8f7d\u5e76\u6267\u884c\u76f8\u5e94\u7684\u63d2\u4ef6\uff0c\u6700\u540e\u628a\u8bf7\u6c42\u8f6c\u53d1\u7ed9\u5230\u6307\u5b9a\u7684\u4e0a\u6e38\u5e94\u7528\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Upstream"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0a\u6e38\u7684\u4f5c\u7528\u662f\u6309\u7167\u914d\u7f6e\u89c4\u5219\u5bf9\u670d\u52a1\u8282\u70b9\u8fdb\u884c\u8d1f\u8f7d\u5747\u8861\uff0c\u5b83\u7684\u5730\u5740\u4fe1\u606f\u53ef\u4ee5\u76f4\u63a5\u914d\u7f6e\u5230\u8def\u7531\u6216\u670d\u52a1\u4e0a\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Admin API"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 Admin API \u63a7\u5236 APISIX \u5b9e\u4f8b\u3002")))),(0,r.kt)("h2",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,r.kt)("p",null,"\u5728\u5f00\u59cb\u4f7f\u7528 APISIX \u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u4f60\u5df2\u7ecf\u5b89\u88c5\u4ee5\u4e0b\u5e94\u7528\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker")," \u548c ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/"},"Docker Compose"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://curl.se/docs/manpage.html"},"curl")," \u7528\u4e8e\u6d4b\u8bd5 API\u3002\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"li",href:"https://hoppscotch.io/"},"Hoppscotch")," \u4e4b\u7c7b\u7684\u5de5\u5177\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u672c\u6587\u4f7f\u7528\u7684\u4e0a\u6e38\u670d\u52a1\u662f ",(0,r.kt)("a",{parentName:"li",href:"https://httpbin.org"},"httpbin.org"),"\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u5b83\u8fdb\u884c\u6d4b\u8bd5\u3002\u8fd9\u662f\u4e00\u4e2a\u8fd4\u56de\u670d\u52a1\uff0c\u5b83\u5c06\u8fd4\u56de\u6211\u4eec\u5728\u8bf7\u6c42\u4e2d\u4f20\u9012\u7684\u53c2\u6570\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u5185\u5bb9\uff1a")),(0,r.kt)("p",null,"\u8bf7\u6c42 URL \u7531\u4ee5\u4e0b\u53c2\u6570\u6784\u6210\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Protocol\uff1a\u5373\u7f51\u7edc\u4f20\u8f93\u534f\u8bae\uff0c\u5728\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u7684\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"HTTP")," \u534f\u8bae\u3002"),(0,r.kt)("li",{parentName:"ul"},"Port\uff1a\u5373\u7aef\u53e3\uff0c\u793a\u4f8b\u4e2d\u4f7f\u7528\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"80")," \u7aef\u53e3\u3002"),(0,r.kt)("li",{parentName:"ul"},"Host\uff1a\u5373\u4e3b\u673a\u5730\u5740\uff0c\u793a\u4f8b\u4e2d\u4f7f\u7528\u7684\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"httpbin.org"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"Path\uff1a\u5373\u8def\u5f84\uff0c\u793a\u4f8b\u4e2d\u7684\u8def\u5f84\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"/get"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"Query Parameters\uff1a\u5373\u67e5\u8be2\u5b57\u7b26\u4e32\uff0c\u8fd9\u91cc\u6709\u4e24\u4e2a\u5b57\u7b26\u4e32\uff0c\u5206\u522b\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"foo1")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"foo2"),"\u3002")),(0,r.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u53d1\u9001\u8bf7\u6c42\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request GET "http://httpbin.org/get?foo1=bar1&foo2=bar2"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u5185\u5bb9\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "args": {\n    "foo1": "bar1",\n    "foo2": "bar2"\n  },\n  "headers": {\n    "Accept": "*/*",\n    "Host": "httpbin.org",\n    "User-Agent": "curl/7.29.0",\n    "X-Amzn-Trace-Id": "Root=1-6088fe84-24f39487166cce1f0e41efc9"\n  },\n  "origin": "58.152.81.42",\n  "url": "http://httpbin.org/get?foo1=bar1&foo2=bar2"\n}\n')),(0,r.kt)("h2",{id:"\u5b89\u88c5-apisix"},"\u5b89\u88c5 APISIX"),(0,r.kt)("p",null,"\u6211\u4eec\u5c06\u4f7f\u7528 Docker \u5b89\u88c5 APISIX \u5e76\u542f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/admin-api"},"Admin API"),"\u3002"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"git")," \u547d\u4ee4\u514b\u9686 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-docker"},"apisix-docker")," \u4ed3\u5e93\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/apache/apisix-docker.git\ncd apisix-docker/example\n")),(0,r.kt)("p",null,"\u73b0\u5728\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose")," \u542f\u52a8 APISIX\u3002"),(0,r.kt)(i.Z,{groupId:"cpu-arch",defaultValue:"x86",values:[{label:"x86",value:"x86"},{label:"ARM/M1",value:"arm"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"x86",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose -p docker-apisix up -d\n"))),(0,r.kt)(l.Z,{value:"arm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose -p docker-apisix -f docker-compose-arm64.yml up -d\n")))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4f60\u4e5f\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/installation-guide"},"APISIX \u5b89\u88c5\u6307\u5357"),"\u4e86\u89e3\u4e0d\u540c\u7684\u5b89\u88c5\u65b9\u6cd5\u3002"))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANT")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u8bf7\u786e\u4fdd\u5176\u4ed6\u7cfb\u7edf\u8fdb\u7a0b\u6ca1\u6709\u5360\u7528 ",(0,r.kt)("strong",{parentName:"p"},"9080\u30019180\u30019443 \u548c 2379")," \u7aef\u53e3\u3002"),(0,r.kt)("p",{parentName:"div"},"\u5728\u57fa\u4e8e UNIX \u7684\u7cfb\u7edf\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6765\u7ec8\u6b62\u6307\u5b9a\u76d1\u542c\u7aef\u53e3\u7684\u8fd0\u884c\uff1a"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo fuser -k 9443/tcp\n")),(0,r.kt)("p",{parentName:"div"},"\u5982\u679c Docker \u5bb9\u5668\u4e0d\u80fd\u6b63\u5e38\u8fd0\u884c\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u68c0\u67e5\u65e5\u5fd7\u8fdb\u884c\u95ee\u9898\u8bca\u65ad\uff1a"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs -f --tail $<container_id>\n")))),(0,r.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u4f60\u53ef\u4ee5\u5728\u8fd0\u884c Docker \u7684\u5bbf\u4e3b\u673a\u4e0a\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," \u547d\u4ee4\u8bbf\u95ee Admin API\uff0c\u6839\u636e\u8fd4\u56de\u6570\u636e\u5224\u65ad APISIX \u662f\u5426\u6210\u529f\u542f\u52a8\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6ce8\u610f\uff1a\u8bf7\u5728\u8fd0\u884c Docker \u7684\u5bbf\u4e3b\u673a\u4e0a\u6267\u884c curl \u547d\u4ee4\u3002\ncurl \"http://127.0.0.1:9180/apisix/admin/services/\" -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1'\n")),(0,r.kt)("p",null,"\u5982\u679c\u8fd4\u56de\u6570\u636e\u5982\u4e0b\u6240\u793a\uff0c\u5219\u8868\u793a APISIX \u6210\u529f\u542f\u52a8\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "count":0,\n  "node":{\n    "key":"/apisix/services",\n    "nodes":[],\n    "dir":true\n  }\n}\n')),(0,r.kt)("p",null,"\u5b8c\u6210\u4e0a\u8ff0\u6b65\u9aa4\u540e\uff0c\u4f60\u5c31\u5df2\u7ecf\u62e5\u6709\u4e86\u4e00\u4e2a\u6b63\u5728\u8fd0\u884c\u7684 APISIX \u7684\u5b9e\u4f8b\u4e86\uff0c\u73b0\u5728\u4f60\u53ef\u4ee5\u4ece\u4e4b\u540e\u7684\u5c0f\u8282\u4e2d\u5b66\u4e60\u5982\u4f55\u521b\u5efa\u8def\u7531\u4ee5\u53ca\u4e86\u89e3 APISIX Dashboard \u7684\u64cd\u4f5c\u3002"),(0,r.kt)("h2",{id:"\u521b\u5efa\u8def\u7531"},"\u521b\u5efa\u8def\u7531"),(0,r.kt)("p",null,"APISIX \u63d0\u4f9b\u4e86\u5f3a\u5927\u7684 ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/admin-api"},"Admin API")," \u548c ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard"},"Dashboard")," \u4f9b\u7528\u6237\u4f7f\u7528\u3002\u5728\u4e0b\u8ff0\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528 Admin API \u521b\u5efa\u4e00\u4e2a ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/terminology/route"},"Route")," \u5e76\u4e0e ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/terminology/upstream"},"Upstream")," \u7ed1\u5b9a\uff0c\u5f53\u4e00\u4e2a\u8bf7\u6c42\u5230\u8fbe APISIX \u65f6\uff0cAPISIX \u4f1a\u5c06\u8bf7\u6c42\u8f6c\u53d1\u5230\u6307\u5b9a\u7684\u4e0a\u6e38\u670d\u52a1\u4e2d\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u5c06\u4e3a\u8def\u7531\u914d\u7f6e\u5339\u914d\u89c4\u5219\uff0c\u4ee5\u4fbf APISIX \u53ef\u4ee5\u5c06\u8bf7\u6c42\u8f6c\u53d1\u5230\u5bf9\u5e94\u7684\u4e0a\u6e38\u670d\u52a1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl "http://127.0.0.1:9180/apisix/admin/routes/1" -H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -X PUT -d \'\n{\n  "methods": ["GET"],\n  "host": "example.com",\n  "uri": "/anything/*",\n  "upstream": {\n    "type": "roundrobin",\n    "nodes": {\n      "httpbin.org:80": 1\n    }\n  }\n}\'\n')),(0,r.kt)("p",null,"\u8be5\u914d\u7f6e\u610f\u5473\u7740\uff0c\u5f53\u8bf7\u6c42\u6ee1\u8db3\u4e0b\u8ff0\u7684",(0,r.kt)("strong",{parentName:"p"},"\u6240\u6709"),"\u89c4\u5219\u65f6\uff0c\u8bf7\u6c42\u5c06\u88ab\u8f6c\u53d1\u5230\u4e0a\u6e38\u670d\u52a1\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"httpbin.org:80"),"\uff09\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u7684 HTTP \u65b9\u6cd5\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"GET"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u5934\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"li"},"host")," \u5b57\u6bb5\uff0c\u4e14\u5b83\u7684\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"example.com"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u8def\u5f84\u5339\u914d ",(0,r.kt)("inlineCode",{parentName:"li"},"/anything/*"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"*")," \u610f\u5473\u7740\u4efb\u610f\u7684\u5b50\u8def\u5f84\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"/anything/foo?arg=10"),"\u3002")),(0,r.kt)("p",null,"\u5f53\u8def\u7531\u521b\u5efa\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u8bbf\u95ee\u4e0a\u6e38\u670d\u52a1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -i -X GET "http://127.0.0.1:9080/anything/foo?arg=10" -H "Host: example.com"\n')),(0,r.kt)("p",null,"\u8be5\u8bf7\u6c42\u5c06\u88ab APISIX \u8f6c\u53d1\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"http://httpbin.org:80/anything/foo?arg=10"),"\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528\u4e0a\u6e38\u670d\u52a1\u521b\u5efa\u8def\u7531"},"\u4f7f\u7528\u4e0a\u6e38\u670d\u52a1\u521b\u5efa\u8def\u7531"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u521b\u5efa\u4e00\u4e2a\u4e0a\u6e38\uff0c\u5e76\u5728\u8def\u7531\u4e2d\u4f7f\u7528\u5b83\uff0c\u800c\u4e0d\u662f\u76f4\u63a5\u5c06\u5176\u914d\u7f6e\u5728\u8def\u7531\u4e2d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl "http://127.0.0.1:9180/apisix/admin/upstreams/1" -H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -X PUT -d \'\n{\n  "type": "roundrobin",\n  "nodes": {\n    "httpbin.org:80": 1\n  }\n}\'\n')),(0,r.kt)("p",null,"\u8be5\u4e0a\u6e38\u914d\u7f6e\u4e0e\u4e0a\u4e00\u8282\u914d\u7f6e\u5728\u8def\u7531\u4e2d\u7684\u4e0a\u6e38\u76f8\u540c\u3002\u540c\u6837\u4f7f\u7528\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"roundrobin")," \u4f5c\u4e3a\u8d1f\u8f7d\u5747\u8861\u673a\u5236\uff0c\u5e76\u8bbe\u7f6e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"httpbin.org:80")," \u4e3a\u4e0a\u6e38\u670d\u52a1\u3002\u4e3a\u4e86\u5c06\u8be5\u4e0a\u6e38\u7ed1\u5b9a\u5230\u8def\u7531\uff0c\u6b64\u5904\u9700\u8981\u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"upstream_id")," \u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},'"1"'),"\u3002\u66f4\u591a\u5b57\u6bb5\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/admin-api"},"Admin API"),"\u3002"),(0,r.kt)("p",null,"\u4e0a\u6e38\u670d\u52a1\u521b\u5efa\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u7ed1\u5b9a\u5230\u6307\u5b9a\u8def\u7531\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl "http://127.0.0.1:9180/apisix/admin/routes/1" -H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -X PUT -d \'\n{\n  "uri": "/get",\n  "host": "httpbin.org",\n  "upstream_id": "1"\n}\'\n')),(0,r.kt)("p",null,"\u6211\u4eec\u5df2\u7ecf\u521b\u5efa\u4e86\u8def\u7531\u4e0e\u4e0a\u6e38\u670d\u52a1\uff0c\u73b0\u5728\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u8bbf\u95ee\u4e0a\u6e38\u670d\u52a1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -i -X GET "http://127.0.0.1:9080/get?foo1=bar1&foo2=bar2" -H "Host: httpbin.org"\n')),(0,r.kt)("p",null,"\u8be5\u8bf7\u6c42\u5c06\u88ab APISIX \u8f6c\u53d1\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"http://httpbin.org:80/anything/foo?arg=10"),"\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528-apisix-dashboard"},"\u4f7f\u7528 APISIX Dashboard"),(0,r.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528 APISIX Dashboard \u521b\u5efa\u548c\u914d\u7f6e\u7c7b\u4f3c\u4e8e\u4e0a\u8ff0\u6b65\u9aa4\u4e2d\u6240\u521b\u5efa\u7684\u8def\u7531\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u5df2\u7ecf\u5b8c\u6210\u4e0a\u8ff0\u64cd\u4f5c\u6b65\u9aa4\uff0c\u5c31\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:9000/"},(0,r.kt)("inlineCode",{parentName:"a"},"localhost:9000"))," \u8bbf\u95ee APISIX Dashboard\u3002"),(0,r.kt)("p",null,"\u5355\u51fb\u4fa7\u8fb9\u680f\u4e2d\u7684 ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:9000/routes/list"},(0,r.kt)("inlineCode",{parentName:"a"},"Route")),"\uff0c\u53ef\u4ee5\u67e5\u770b\u5df2\u7ecf\u914d\u7f6e\u7684\u8def\u7531\u5217\u8868\u3002\u4f60\u4e5f\u53ef\u4ee5\u770b\u5230\u5728\u4e0a\u8ff0\u6b65\u9aa4\u4e2d\u4f7f\u7528 Admin API \u521b\u5efa\u7684\u8def\u7531\u3002"),(0,r.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5355\u51fb ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:9000/routes/create"},(0,r.kt)("inlineCode",{parentName:"a"},"Create"))," \u6309\u94ae\u5e76\u6309\u7167\u63d0\u793a\u521b\u5efa\u65b0\u8def\u7531\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/3.1/docs/assets/images/create-a-route.png",alt:"Creating a Route with APISIX Dashboard"})),(0,r.kt)("p",null,"\u65b0\u521b\u5efa\u7684\u8def\u7531\u5c06\u88ab\u6dfb\u52a0\u5230\u8def\u7531\u5217\u8868\u4e2d\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/3.1/docs/assets/images/list-of-routes.png",alt:"Creating a Route with APISIX Dashboard"})),(0,r.kt)("p",null,"\u60f3\u8981\u4e86\u89e3\u66f4\u591a\u5173\u4e8e APISIX Dashboard \u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/docs/dashboard/USER_GUIDE"},"APISIX Dashboard \u6587\u6863"),"\u3002"),(0,r.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.kt)("p",null,"\u5b8c\u6210\u4e0a\u8ff0\u6b65\u9aa4\u540e\uff0cAPISIX \u5c31\u53ef\u4ee5\u6b63\u5e38\u8fd0\u884c\u4e86\u3002\u5982\u679c\u60f3\u5229\u7528 APISIX \u5b9e\u73b0\u8eab\u4efd\u9a8c\u8bc1\u3001\u5b89\u5168\u6027\u3001\u9650\u6d41\u9650\u901f\u548c\u53ef\u89c2\u6d4b\u6027\u7b49\u529f\u80fd\uff0c\u53ef\u901a\u8fc7\u6dfb\u52a0\u63d2\u4ef6\u5b9e\u73b0\u3002\u5404\u7c7b\u63d2\u4ef6\u7684\u8be6\u7ec6\u4fe1\u606f\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/plugins"},"\u63d2\u4ef6\u5e02\u573a"),"\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u5728\u4f7f\u7528\u5f53\u4e2d\u9047\u5230\u56f0\u96be\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"/docs/general/join"},"APISIX \u793e\u533a\u9891\u9053"),"\u6216\u8005\u5728 GitHub \u4e0a",(0,r.kt)("a",{parentName:"p",href:"/docs/general/submit-issue"},"\u63d0\u4ea4\u4e00\u4e2a issue")," \u5bfb\u6c42\u5e2e\u52a9\u3002"))}u.isMDXComponent=!0},86010:(e,t,a)=>{function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:()=>r});const r=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}}}]);