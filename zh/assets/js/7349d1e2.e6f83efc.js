"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9807],{35318:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=c(n),u=r,m=h["".concat(p,".").concat(u)]||h[u]||s[u]||l;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},12215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(25773),r=(n(27378),n(35318));const l={title:"APISIX \u4e0e Ory Hydra \u96c6\u6210\u4e30\u5bcc\u8eab\u4efd\u8ba4\u8bc1\u65b9\u5f0f",authors:[{name:"Fei Han",title:"Technical Writer",url:"https://github.com/hf400159",image_url:"https://github.com/hf400159.png"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4"}],keywords:["Apache APISIX","API \u7f51\u5173","\u8eab\u4efd\u8ba4\u8bc1","Hydra","OpenID Connect","OIDC"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 API \u7f51\u5173 Apache APISIX \u901a\u8fc7 OpenID Connect \u63d2\u4ef6\u4e0e Ory Hydra \u96c6\u6210\u5b9e\u73b0\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1\uff0c\u5e76\u4e14\u4ecb\u7ecd\u4e86\u5173\u4e8e Ory Hydra \u7684\u5e94\u7528\u573a\u666f\u53ca OpenID \u76f8\u5173\u77e5\u8bc6\u3002",tags:["Authentication","Plugins"],image:"https://static.apiseven.com/2022/blog/0818/plugins/ory.png"},o=void 0,i={permalink:"/zh/blog/2022/07/04/apisix-integrates-with-hydra",source:"@site/blog/2022/07/04/apisix-integrates-with-hydra.md",title:"APISIX \u4e0e Ory Hydra \u96c6\u6210\u4e30\u5bcc\u8eab\u4efd\u8ba4\u8bc1\u65b9\u5f0f",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 API \u7f51\u5173 Apache APISIX \u901a\u8fc7 OpenID Connect \u63d2\u4ef6\u4e0e Ory Hydra \u96c6\u6210\u5b9e\u73b0\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1\uff0c\u5e76\u4e14\u4ecb\u7ecd\u4e86\u5173\u4e8e Ory Hydra \u7684\u5e94\u7528\u573a\u666f\u53ca OpenID \u76f8\u5173\u77e5\u8bc6\u3002",date:"2022-07-04T00:00:00.000Z",formattedDate:"2022\u5e747\u67084\u65e5",tags:[{label:"Authentication",permalink:"/zh/blog/tags/authentication"},{label:"Plugins",permalink:"/zh/blog/tags/plugins"}],readingTime:11.385,truncated:!0,authors:[{name:"Fei Han",title:"Technical Writer",url:"https://github.com/hf400159",image_url:"https://github.com/hf400159.png",imageURL:"https://github.com/hf400159.png"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4",imageURL:"https://avatars.githubusercontent.com/u/39793568?v=4"}],prevItem:{title:"\u5982\u4f55\u4f7f\u7528 DataAnt \u76d1\u63a7 Apache APISIX",permalink:"/zh/blog/2022/07/05/use-dataant-to-monitor-apisix"},nextItem:{title:"\u52a9\u529b\u5f00\u53d1\u8005\uff0c\u5168\u65b9\u4f4d\u89e3\u8bfb APISIX \u6d4b\u8bd5\u6848\u4f8b",permalink:"/zh/blog/2022/06/27/getting-start-with-apisix-test-cases"}},p={authorsImageUrls:[void 0,void 0]},c=[{value:"\u80cc\u666f\u4ecb\u7ecd",id:"\u80cc\u666f\u4ecb\u7ecd",children:[{value:"Apache APISIX",id:"apache-apisix",children:[],level:3},{value:"ORY Hydra",id:"ory-hydra",children:[],level:3}],level:2},{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",children:[],level:2},{value:"\u64cd\u4f5c\u6b65\u9aa4",id:"\u64cd\u4f5c\u6b65\u9aa4",children:[{value:"\u6b65\u9aa4\u4e00\uff1a\u521b\u5efa\u5e76\u90e8\u7f72\u6570\u636e\u5e93",id:"\u6b65\u9aa4\u4e00\u521b\u5efa\u5e76\u90e8\u7f72\u6570\u636e\u5e93",children:[],level:3},{value:"\u6b65\u9aa4\u4e8c\uff1a\u90e8\u7f72 Hydra",id:"\u6b65\u9aa4\u4e8c\u90e8\u7f72-hydra",children:[],level:3},{value:"\u6b65\u9aa4\u4e09\uff1a\u90e8\u7f72\u767b\u5f55\u548c\u9a8c\u8bc1\u7a0b\u5e8f",id:"\u6b65\u9aa4\u4e09\u90e8\u7f72\u767b\u5f55\u548c\u9a8c\u8bc1\u7a0b\u5e8f",children:[],level:3},{value:"\u6b65\u9aa4\u56db\uff1a\u6267\u884c OAuth 2.0 \u6388\u6743\u4ee3\u7801\u6d41\u7a0b",id:"\u6b65\u9aa4\u56db\u6267\u884c-oauth-20-\u6388\u6743\u4ee3\u7801\u6d41\u7a0b",children:[],level:3},{value:"\u6b65\u9aa4\u4e94\uff1a\u542f\u52a8 APISIX \u5e76\u914d\u7f6e\u8def\u7531",id:"\u6b65\u9aa4\u4e94\u542f\u52a8-apisix-\u5e76\u914d\u7f6e\u8def\u7531",children:[],level:3},{value:"\u6b65\u9aa4\u516d\uff1a\u8bbf\u95ee APISIX",id:"\u6b65\u9aa4\u516d\u8bbf\u95ee-apisix",children:[],level:3}],level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[],level:2},{value:"\u76f8\u5173\u9605\u8bfb",id:"\u76f8\u5173\u9605\u8bfb",children:[],level:2}],d={toc:c};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX \u5982\u4f55\u4e0e Ory Hydra \u96c6\u6210\u5b9e\u73b0\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1\u3002")),(0,r.kt)("h2",{id:"\u80cc\u666f\u4ecb\u7ecd"},"\u80cc\u666f\u4ecb\u7ecd"),(0,r.kt)("h3",{id:"apache-apisix"},"Apache APISIX"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix"},"Apache APISIX")," \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u4e91\u539f\u751f API \u7f51\u5173\uff0c\u4f5c\u4e3a API \u7f51\u5173\uff0c\u5b83\u517c\u5177\u52a8\u6001\u3001\u5b9e\u65f6\u3001\u9ad8\u6027\u80fd\u7b49\u7279\u70b9\uff0c\u63d0\u4f9b\u4e86\u8d1f\u8f7d\u5747\u8861\u3001\u52a8\u6001\u4e0a\u6e38\u3001\u7070\u5ea6\u53d1\u5e03\u3001\u670d\u52a1\u7194\u65ad\u3001\u8eab\u4efd\u8ba4\u8bc1\u3001\u53ef\u89c2\u6d4b\u6027\u7b49\u4e30\u5bcc\u7684\u6d41\u91cf\u7ba1\u7406\u529f\u80fd\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 APISIX \u6765\u5904\u7406\u4f20\u7edf\u7684\u5357\u5317\u5411\u6d41\u91cf\uff0c\u4ee5\u53ca\u670d\u52a1\u95f4\u7684\u4e1c\u897f\u5411\u6d41\u91cf\uff0c\u4e5f\u53ef\u4ee5\u5f53\u505a K8s Ingress controller \u6765\u4f7f\u7528\u3002"),(0,r.kt)("p",null,"APISIX \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"openid-connect")," \u63d2\u4ef6\u652f\u6301 OpenID Connect \u534f\u8bae\uff0c\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u8be5\u63d2\u4ef6\u8ba9 APISIX \u5bf9\u63a5\u4f17\u591a\u8ba4\u8bc1\u9274\u6743\u8f6f\u4ef6\uff0c\u4f5c\u4e3a\u96c6\u4e2d\u5f0f\u8ba4\u8bc1\u7f51\u5173\u90e8\u7f72\u4e8e\u4f01\u4e1a\u4e2d\u3002"),(0,r.kt)("h3",{id:"ory-hydra"},"ORY Hydra"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ory/hydra"},"Ory Hydra")," \u662f\u652f\u6301 OAuth 2.0 \u548c OpenID Connect \u534f\u8bae\u7684\u8eab\u4efd\u63d0\u4f9b\u5546\u4e4b\u4e00\uff0c\u57fa\u4e8e OAuth 2.0 \u6388\u6743\u6846\u67b6\u4ee5\u53ca Open ID Connect Core 1.0 \u6846\u67b6\u5b9e\u73b0\uff0c\u517c\u5177\u5f00\u6e90\u4e0e\u4e91\u539f\u751f\u7279\u6027\u3002\u5b83\u53ef\u4ee5\u4e0e\u4efb\u4f55\u767b\u5f55\u7cfb\u7edf\u96c6\u6210\uff0c\u901a\u8fc7 OAuth 2.0 Acces\u3001Refresh \u548c ID Tokens\uff0c\u4f7f\u5f97\u7b2c\u4e09\u65b9\u80fd\u591f\u8f7b\u677e\u8bbf\u95ee\u4f60\u7684 API\uff0c\u5b9e\u73b0\u7528\u6237\u968f\u65f6\u968f\u5730\u4e0e\u4efb\u4f55\u5e94\u7528\u7a0b\u5e8f\u7684\u4ea4\u4e92\u3002"),(0,r.kt)("p",null,"Ory Hydra \u91c7\u7528 Go \u8bed\u8a00\u5f00\u53d1\uff0c\u4e3a\u51e0\u4e4e\u6240\u6709\u5f00\u53d1\u8bed\u8a00\u90fd\u63d0\u4f9b\u4e86 SDK\uff0c\u5305\u62ec Dart\u3001.NET\u3001Go\u3001Java\u3001PHP\u3001Python\u3001Ruby\u3001Rust \u548c Typescript\u3002\u5b83\u9002\u7528\u4e8e\u4efb\u4f55\u767b\u5f55\u7cfb\u7edf\uff0c\u5e76\u4e14\u53ef\u4ee5\u8f7b\u677e\u81ea\u5b9a\u4e49\u767b\u5f55\u4f53\u9a8c\u3002"),(0,r.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,r.kt)("p",null,"OpenID \u662f\u4e00\u79cd\u96c6\u4e2d\u8ba4\u8bc1\u6a21\u5f0f\uff0c\u5b83\u662f\u4e00\u4e2a\u53bb\u4e2d\u5fc3\u5316\u7684\u8eab\u4efd\u8ba4\u8bc1\u7cfb\u7edf\u3002\u4f7f\u7528 OpenID \u7684\u597d\u5904\u662f\uff1a\u7528\u6237\u53ea\u9700\u8981\u5728\u4e00\u4e2a OpenID \u8eab\u4efd\u63d0\u4f9b\u65b9\u7684\u7f51\u7ad9\u4e0a\u6ce8\u518c\u548c\u767b\u5f55\uff0c\u4f7f\u7528\u4e00\u4efd\u8d26\u6237\u5bc6\u7801\u4fe1\u606f\u5373\u53ef\u8bbf\u95ee\u4e0d\u540c\u5e94\u7528\u3002"),(0,r.kt)("p",null,"\u901a\u8fc7 APISIX \u652f\u6301\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"openid-connect")," \u63d2\u4ef6\uff0c\u6211\u4eec\u53ef\u4ee5\u4e0e\u652f\u6301 OpenID Connect \u534f\u8bae\u7684\u8ba4\u8bc1\u7a0b\u5e8f\u96c6\u6210\u3002\u6bd4\u5982 Ory Hydra\u3002\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2021/08/25/using-the-apache-apisix-openid-connect-plugin-for-centralized-authentication"},"\u96c6\u4e2d\u8eab\u4efd\u8ba4\u8bc1"),"\u3002"),(0,r.kt)("p",null,"Ory Hydra \u7684\u6700\u5927\u4f18\u52bf\u4e4b\u4e00\u662f\uff1a\u5b83\u5b9e\u73b0\u4e86 OAuth \u548c OpenID Connect \u6807\u51c6\uff0c\u800c\u4e0d\u662f\u5f3a\u5236\u4f60\u4f7f\u7528 \u201cHydra \u7528\u6237\u7ba1\u7406\u201d\uff08\u767b\u5f55\u3001\u6ce8\u9500\u3001\u914d\u7f6e\u6587\u4ef6\u7ba1\u7406\u3001\u6ce8\u518c\uff09\u3001\u7279\u5b9a\u6a21\u677f\u5f15\u64ce\u6216\u8005\u9884\u5b9a\u4e49\u7684\u524d\u7aef\u3002"),(0,r.kt)("p",null,"\u5b83\u5141\u8bb8\u4f7f\u7528\u4f60\u7684\u7a0b\u5e8f\u6240\u9700\u7684\u8eab\u4efd\u9a8c\u8bc1\u673a\u5236\uff08\u57fa\u4e8e\u4ee4\u724c\u7684 2FA\u3001SMS 2FA \u7b49\uff09\uff0c\u5e76\u4e14\u5728\u4f60\u7684\u4e1a\u52a1\u7cfb\u7edf\u4e2d\u5b9e\u73b0\u7528\u6237\u7ba1\u7406\u548c\u767b\u5f55\u3002\u5f53\u7136\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u73b0\u6709\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u4f8b\u5982 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/go-authboss/authboss"},"authboss"),"\uff0c\u5e76\u4e3a\u4f60\u63d0\u4f9b OAuth 2.0 \u548c OpenID Connect \u7684\u6240\u6709\u4f18\u52bf\u529f\u80fd\uff0c\u540c\u65f6\u5bf9\u4e1a\u52a1\u903b\u8f91\u548c\u6280\u672f\u6808\u7684\u4fb5\u5165\u6027\u6700\u5c0f\u3002"),(0,r.kt)("p",null,"OAuth 2.0 \u9002\u7528\u4e8e\u591a\u79cd\u73af\u5883\u548c\u591a\u7528\u9014\u573a\u666f\u3002\u4ee5\u4e0b\u4fe1\u606f\u53ef\u80fd\u4f1a\u5e2e\u52a9\u4f60\u786e\u5b9a OAuth 2.0 \u548c Hydra \u662f\u5426\u9002\u5408\u67d0\u4e2a\u573a\u666f\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5141\u8bb8\u7b2c\u4e09\u65b9\u7684\u5408\u4f5c\u65b9\u8bbf\u95ee\u4f60\u7684 API\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6210\u4e3a\u50cf Google\u3001Facebook \u6216 Microsoft \u8fd9\u6837\u7684\u8eab\u4efd\u8ba4\u8bc1\u63d0\u4f9b\u8005\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u6d4f\u89c8\u5668\u3001\u79fb\u52a8\u8bbe\u5907\u6216\u53ef\u7a7f\u6234\u5e94\u7528\u7a0b\u5e8f\u80fd\u591f\u8bbf\u95ee\u4f60\u7684 API\uff1a\u8fd0\u884c OAuth2 \u63d0\u4f9b\u7a0b\u5e8f\u53ef\u4ee5\u5f88\u597d\u5730\u5b9e\u73b0\u8fd9\u4e00\u70b9\u3002\u4f60\u4e0d\u5fc5\u5728\u8bbe\u5907\u4e0a\u5b58\u50a8\u5bc6\u7801\uff0c\u5e76\u4e14\u53ef\u4ee5\u968f\u65f6\u64a4\u9500\u8bbf\u95ee\u4ee4\u724c\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u60f3\u8981\u9650\u5236\u540e\u7aef\u670d\u52a1\u53ef\u4ee5\u76f8\u4e92\u8bfb\u53d6\u7684\u4fe1\u606f\u7c7b\u578b\u3002\u4f8b\u5982\uff0c\u53ea\u5141\u8bb8\u8bc4\u8bba\u670d\u52a1\u83b7\u53d6\u7528\u6237\u914d\u7f6e\u6587\u4ef6\u66f4\u65b0\uff0c\u4f46\u4e0d\u80fd\u8bfb\u53d6\u7528\u6237\u5bc6\u7801\u3002")),(0,r.kt)("h2",{id:"\u64cd\u4f5c\u6b65\u9aa4"},"\u64cd\u4f5c\u6b65\u9aa4"),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u5c06\u4f7f\u7528\u771f\u5b9e\u793a\u4f8b\u4e3a\u4f60\u5c55\u793a APISIX \u5982\u4f55\u4e0e Hydra \u96c6\u6210\u3002\u5728\u8be5\u793a\u4f8b\u4e2d\u5c06\u4f7f\u7528 Docker \u90e8\u7f72\u6240\u9700\u7684\u73af\u5883\uff0c\u8bf7\u5728\u6267\u884c\u672c\u64cd\u4f5c\u524d\u5b89\u88c5\u5b8c\u6210 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"Docker"),"\u3002"),(0,r.kt)("h3",{id:"\u6b65\u9aa4\u4e00\u521b\u5efa\u5e76\u90e8\u7f72\u6570\u636e\u5e93"},"\u6b65\u9aa4\u4e00\uff1a\u521b\u5efa\u5e76\u90e8\u7f72\u6570\u636e\u5e93"),(0,r.kt)("p",null,"\u4e3a\u4e86\u5feb\u901f\u90e8\u7f72\u6d4b\u8bd5\u73af\u5883\uff0c\u6211\u4eec\u5c06\u4f7f\u7528 Docker \u8fd0\u884c PostgreSQL \u4f5c\u4e3a Hydra \u7684\u6570\u636e\u5e93\u3002\u5efa\u8bae\u4e0d\u8981\u5728\u751f\u4ea7\u73af\u5883\u4f7f\u7528 Docker \u8fd0\u884c\u6570\u636e\u5e93\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker network create hydraguide && \\\ndocker run \\\n  --network hydraguide \\\n  --name ory-hydra-example--postgres \\\n  -e POSTGRES_USER=hydra \\\n  -e POSTGRES_PASSWORD=secret \\\n  -e POSTGRES_DB=hydra \\\n  -d postgres:9.6\n")),(0,r.kt)("p",null,"\u4e0a\u8ff0\u547d\u4ee4\u5c06\u521b\u5efa\u4e00\u4e2a\u540d\u79f0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"hydraguide")," \u7684\u7f51\u7edc\uff0c\u5e76\u4e14\u542f\u52a8\u4e00\u4e2a\u540d\u79f0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"ory-hydra-example--postgres")," \u7684 Postgres \u5b9e\u4f8b\uff0c\u8be5\u5b9e\u4f8b\u521b\u5efa\u4e86\u6570\u636e\u5e93 ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra"),"\uff0c\u7528\u6237 ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra")," \u548c\u7528\u6237\u5bc6\u7801 ",(0,r.kt)("inlineCode",{parentName:"p"},"secret"),"\u3002"),(0,r.kt)("h3",{id:"\u6b65\u9aa4\u4e8c\u90e8\u7f72-hydra"},"\u6b65\u9aa4\u4e8c\uff1a\u90e8\u7f72 Hydra"),(0,r.kt)("p",null,"\u8be5\u6b65\u9aa4\u4e2d\u4f1a\u5206\u522b\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"4444")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"4445")," \u6620\u5c04\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"5444")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"5445")," \u7aef\u53e3\uff0c\u8bf7\u786e\u4fdd\u8fd9\u4e9b\u7aef\u53e3\u672a\u88ab\u5360\u7528\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u7cfb\u7edf\u5bc6\u94a5\u53ea\u80fd\u9488\u5bf9\u65b0\u6570\u636e\u5e93\u8bbe\u7f6e\uff0c\u4e0d\u652f\u6301\u5bc6\u94a5\u8f6e\u6362\u3002 \u6b64\u5bc6\u94a5\u7528\u4e8e\u52a0\u5bc6\u6570\u636e\u5e93\uff0c\u6bcf\u6b21\u8fdb\u7a0b\uff08\u91cd\u65b0\uff09\u542f\u52a8\u65f6\u90fd\u9700\u8981\u8bbe\u7f6e\u4e3a\u76f8\u540c\u7684\u503c\u3002 \u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"/dev/urandom")," \u751f\u6210\u5bc6\u94a5\u3002\u4f46\u8bf7\u786e\u4fdd\u5728\u4f60\u5b9a\u4e49\u5b83\u7684\u65f6\u5019\uff0c\u8be5\u5bc6\u94a5\u90fd\u5fc5\u987b\u76f8\u540c\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u5c06\u503c\u5b58\u50a8\u5728\u67d0\u5904:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"export SECRETS_SYSTEM=$(export LC_CTYPE=C; cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)\n")),(0,r.kt)("p",null,"\u901a\u8fc7\u914d\u7f6e\u73af\u5883\u53d8\u91cf\uff0c\u8bbe\u7f6e Hydra \u7684\u6570\u636e\u5e93 URL \u6307\u5411 Postgres \u5b9e\u4f8b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"export DSN=postgres://hydra:secret@ory-hydra-example--postgres:5432/hydra?sslmode=disable\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Ory Hydra \u6ca1\u6709\u81ea\u52a8\u8fc1\u79fb\u6570\u636e\u5e93\uff0c\u56e0\u6b64\u4f60\u9700\u8981\u624b\u52a8\u6267\u884c\u8fc1\u79fb\u6570\u636e\u5e93\u7684\u64cd\u4f5c\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull oryd/hydra:v1.10.6 && \\\ndocker run -it --rm \\\n  --network hydraguide \\\n  oryd/hydra:v1.10.6 \\\n  migrate sql --yes $DSN\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u8fd0\u884c Hydra \u670d\u52a1\u5668\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"li",href:"https://www.ory.sh/docs/hydra/configure-deploy#deploy-ory-hydra"},"deploy-ory-hydra"),"\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d \\\n  --name ory-hydra-example--hydra \\\n  --network hydraguide \\\n  -p 5444:4444 \\\n  -p 5445:4445 \\\n  -e SECRETS_SYSTEM=$SECRETS_SYSTEM \\\n  -e DSN=$DSN \\\n  -e URLS_SELF_ISSUER=https://localhost:5444/ \\\n  -e URLS_CONSENT=http://localhost:9020/consent \\\n  -e URLS_LOGIN=http://localhost:9020/login \\\n  oryd/hydra:v1.10.6 serve all\n")),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u67e5\u770b Hydra \u7684\u65e5\u5fd7\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker logs ory-hydra-example--hydra\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5982\u679c\u672a\u6307\u5b9a Hydra \u7684\u5bc6\u7801\uff0c\u4f60\u53ef\u4ee5\u5728\u65e5\u5fd7\u4e2d\u67e5\u5230\u5bc6\u7801\u4fe1\u606f\u3002\u5982\u679c\u5fd8\u8bb0\u5bc6\u7801\u5c06\u65e0\u6cd5\u91cd\u65b0\u542f\u52a8 Hydra\u3002"))),(0,r.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b Hydra \u76f8\u5173\u4ecb\u7ecd\u53ca\u64cd\u4f5c\u547d\u4ee4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -it --rm --entrypoint hydra oryd/hydra:v1.10.6 help serve\n")),(0,r.kt)("h3",{id:"\u6b65\u9aa4\u4e09\u90e8\u7f72\u767b\u5f55\u548c\u9a8c\u8bc1\u7a0b\u5e8f"},"\u6b65\u9aa4\u4e09\uff1a\u90e8\u7f72\u767b\u5f55\u548c\u9a8c\u8bc1\u7a0b\u5e8f"),(0,r.kt)("p",null,"Login Provider \u548c Consent Provider \u53ef\u4ee5\u662f\u4e24\u4e2a\u72ec\u7acb\u7684 Web \u670d\u52a1\u3002 Hydra \u63d0\u4f9b\u4e86\u793a\u4f8b\u7a0b\u5e8f\uff0c\u5b83\u5728\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7ed3\u5408\u4e86\u8fd9\u4e24\u4e2a\u529f\u80fd\u3002 \u63a5\u4e0b\u6765\u3002\u6211\u4eec\u5c06\u4f7f\u7528 Docker \u90e8\u7f72\u8be5\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull oryd/hydra-login-consent-node:v1.10.6 && \\\ndocker run -d \\\n  --name ory-hydra-example--consent \\\n  -p 9020:3000 \\\n  --network hydraguide \\\n  -e HYDRA_ADMIN_URL=https://ory-hydra-example--hydra:4445 \\\n  -e NODE_TLS_REJECT_UNAUTHORIZED=0 \\\n  oryd/hydra-login-consent-node:v1.10.6\n")),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u68c0\u67e5\u7a0b\u5e8f\u662f\u5426\u8fd0\u884c\u6b63\u5e38\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker logs ory-hydra-example--consent\n")),(0,r.kt)("p",null,"\u6b63\u5e38\u8fd4\u56de\u7ed3\u679c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"> hydra-login-consent-logout@0.0.0 serve /usr/src/app\n> node lib/app.js\n\nListening on http://0.0.0.0:3000\n")),(0,r.kt)("h3",{id:"\u6b65\u9aa4\u56db\u6267\u884c-oauth-20-\u6388\u6743\u4ee3\u7801\u6d41\u7a0b"},"\u6b65\u9aa4\u56db\uff1a\u6267\u884c OAuth 2.0 \u6388\u6743\u4ee3\u7801\u6d41\u7a0b"),(0,r.kt)("p",null,"Hydra \u652f\u6301\u901a\u8fc7 CLI \u8bbe\u7f6e OAuth 2.0 \u4f7f\u7528\u8005\u548c OAuth 2.0 \u56de\u8c03 URL \u7684\u529f\u80fd\uff0c\u8fd9\u662f\u4e00\u4e2a\u8bf7\u6c42\u8bbf\u95ee\u670d\u52a1\u5668\u4e0a\u7684\u7528\u6237\u8d44\u6e90\u7684\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,r.kt)("p",null,"\u914d\u7f6e APISIX ",(0,r.kt)("inlineCode",{parentName:"p"},"openid-connect")," \u63d2\u4ef6\u65f6\u9700\u8981\u63d0\u4f9b\u8fd9\u4e9b\u4fe1\u606f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")," \u5bf9\u5e94\u7684\u662f\u4e0b\u8ff0\u8def\u7531\u4e2d\u63d2\u4ef6\u914d\u7f6e\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"client_id"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"secret")," \u5bf9\u5e94\u7684\u662f\u4e0b\u8ff0\u8def\u7531\u4e2d\u63d2\u4ef6\u914d\u7f6e\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"client_secret"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scope")," \u5bf9\u5e94\u7684\u662f\u4e0b\u8ff0\u8def\u7531\u4e2d\u63d2\u4ef6\u914d\u7f6e\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"scope"),"\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --rm -it \\\n  -e HYDRA_ADMIN_URL=https://ory-hydra-example--hydra:4445 \\\n  -- network hydraguide \\\n  oryd/hydra:v1.10.6 \\\n  clients create --skip-tls-verify \\\n    --id facebook-photo-backup \\\n    --secret some-secret \\\n    --grant-types authorization_code,refresh_token,client_credentials,implicit \\\n    --response-types token,code,id_token \\\n    --scope openid,offline,photos.read \\\n    --callbacks http://127.0.0.1:9010/callback\n")),(0,r.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c06\u6267\u884c\u4e00\u4e2a OAuth 2.0 \u6388\u6743\u6d41\u7a0b\u3002\u4e3a\u7b80\u5316\u6b64\u64cd\u4f5c\uff0cHydra CLI \u63d0\u4f9b\u4e86\u4e00\u4e2a\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra token user")," \u7684\u8f85\u52a9\u547d\u4ee4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"}," docker run --rm -it \\\n  --network hydraguide \\\n  -p 9010:9010 \\\n  oryd/hydra:v1.10.6 \\\n  token user --skip-tls-verify \\\n    --port 9010 \\\n    --auth-url https://localhost:5444/oauth2/auth \\\n    --token-url https://localhost:5444/oauth2/token \\\n    --client-id facebook-photo-backup \\\n    --client-secret some-secret \\\n    --scope openid,offline,photos.read\n")),(0,r.kt)("p",null,"\u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\u5219\u8868\u793a\u914d\u7f6e\u6b63\u5e38\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Setting up home route on http://127.0.0.1:9010/\nSetting up callback listener on http://127.0.0.1:9010/callback\nPress ctrl + c on Linux / Windows or cmd + c on OSX to end the process.\nIf your browser doesn't open automatically, navigate to:\n\n        http://127.0.0.1:9010/\n")),(0,r.kt)("p",null,"\u8be5\u6b65\u9aa4\u5c06\u4f1a\u542f\u52a8\u4e00\u4e2a\u7528\u6237\u767b\u5f55\u7a0b\u5e8f\uff0c\u6211\u4eec\u5c06\u5728\u4e0b\u9762\u7684\u6b65\u9aa4\u4e2d\u4f7f\u7528\u8be5\u7a0b\u5e8f\u3002"),(0,r.kt)("h3",{id:"\u6b65\u9aa4\u4e94\u542f\u52a8-apisix-\u5e76\u914d\u7f6e\u8def\u7531"},"\u6b65\u9aa4\u4e94\uff1a\u542f\u52a8 APISIX \u5e76\u914d\u7f6e\u8def\u7531"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u5b89\u88c5 APISIX\uff0c\u8bf7\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/apisix/next/installation-guide"},"\u5b89\u88c5 APISIX"),"\u3002"),(0,r.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u4ec5\u9700\u521b\u5efa\u8def\u7531\u5e76\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"openid-connect")," \u63d2\u4ef6\u5373\u53ef\u3002\u4e3a\u4e86\u66f4\u76f4\u89c2\u5730\u9a8c\u8bc1\u6548\u679c\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u542f\u52a8\u4e86\u4e00\u4e2a NGINX \u670d\u52a1\u5f53\u505a\u4e0a\u6e38\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5df2\u6709\u7684\u4e0a\u6e38\u670d\u52a1\u3002"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u672c\u793a\u4f8b\u4e2d\u7684 APISIX \u662f\u5b89\u88c5\u5728\u5bbf\u4e3b\u673a\u4e0a\uff0c\u5982\u679c\u662f\u4f7f\u7528 Docker \u542f\u52a8\u7684 APISIX\uff0c\u53ef\u80fd\u4f1a\u51fa\u73b0\u7f51\u7edc\u95ee\u9898\u3002"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u9996\u5148\u4f7f\u7528 Docker \u521b\u5efa\u4e00\u4e2a NGINX \u4e0a\u6e38\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d --name test-nginx -p 8083:80 nginx\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u521b\u5efa\u8def\u7531\uff0c\u5e76\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"li"},"openid-connect")," \u63d2\u4ef6\u3002")),(0,r.kt)("p",null,"\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"client_id")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"client_secret")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"scope")," \u662f\u6b65\u9aa4\u56db\u4e2d\u8bbe\u7f6e\u7684 ID\u3002\u4f60\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://www.ory.sh/docs/hydra/production#exposing-administrative-and-public-api-endpoints"},"Preparing for Production")," \u83b7\u53d6\u5176\u4ed6\u4fe1\u606f\u3002\u4ece\u4e0a\u8ff0\u94fe\u63a5\u7684\u5185\u5bb9\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"discovery")," \u7684\u5730\u5740\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"https://{IP:Port}/.well-known/openid-configuration"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri":"/*",\n    "plugins":{\n        "openid-connect":{\n            "client_id":"facebook-photo-backup",\n            "client_secret":"some-secret",\n            "discovery":"https://127.0.0.1:5444/.well-known/openid-configuration",\n            "scope":"openid",\n            "token_endpoint_auth_method": "client_secret_basic",\n            "bearer_only": false,\n            "redirect_uri":"http://127.0.0.1:9080/callback"\n        }\n    },\n    "upstream":{\n        "type":"roundrobin",\n        "nodes":{\n            "127.0.0.1:8083":1\n        }\n    }\n}\'\n')),(0,r.kt)("h3",{id:"\u6b65\u9aa4\u516d\u8bbf\u95ee-apisix"},"\u6b65\u9aa4\u516d\uff1a\u8bbf\u95ee APISIX"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u6d4f\u89c8\u5668\u4e2d\u8f93\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:9080/index.html"),"\uff0c\u7531\u4e8e\u5df2\u7ecf\u5f00\u542f\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"openid-connect")," \u63d2\u4ef6\uff0c\u6240\u4ee5\u9875\u9762\u88ab\u91cd\u5b9a\u5411\u5230\u767b\u5f55\u9875\u9762\u3002\u5728\u6b64\u9875\u9762\u8f93\u5165\u7528\u6237\u9a8c\u8bc1\u7a0b\u5e8f\u4e2d\u9ed8\u8ba4\u7684\u8d26\u53f7\u5bc6\u7801\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0704/1.png",alt:"\u7f51\u7edc\u9519\u8bef/\u8ba4\u8bc1\u9875\u9762"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9009\u62e9\u8ba4\u8bc1\u534f\u8bae\uff0c\u5e76\u5355\u51fb ",(0,r.kt)("inlineCode",{parentName:"p"},"Allow Access"),"\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0704/2.png",alt:"\u7f51\u7edc\u9519\u8bef/\u9009\u62e9\u9875\u9762"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9a8c\u8bc1\u6210\u529f\u4e4b\u540e\uff0c\u5c31\u53ef\u4ee5\u8bbf\u95ee\u5230\u4e0a\u6e38\u670d\u52a1\u7684\u9875\u9762\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0704/3.png",alt:"\u7f51\u7edc\u9519\u8bef/\u4e0a\u6e38\u9875\u9762"})))),(0,r.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4e86 Hydra \u5982\u4f55\u4e0e APISIX \u8fdb\u884c\u96c6\u6210\u4ee5\u53ca Hydra \u7684\u5e94\u7528\u573a\u666f\u3002\u4f60\u53ea\u9700\u8981\u5728\u670d\u52a1\u5668\u4e0a\u5b89\u88c5 Hydra \u76f8\u5173\u7684\u7a0b\u5e8f\uff0c\u5c31\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u5b83\u4f5c\u4e3a\u4f60\u7684\u8eab\u4efd\u8ba4\u8bc1\u7a0b\u5e8f\u3002"),(0,r.kt)("h2",{id:"\u76f8\u5173\u9605\u8bfb"},"\u76f8\u5173\u9605\u8bfb"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://apisix.apache.org/zh/blog/2021/08/25/using-the-apache-apisix-openid-connect-plugin-for-centralized-authentication"},"\u4f7f\u7528 APISIX openid-connect \u63d2\u4ef6\u8fdb\u884c\u96c6\u4e2d\u8eab\u4efd\u8ba4\u8bc1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://apisix.apache.org/zh/blog/2021/08/16/using-the-apache-apisix-openid-connect-plugin-for-centralized-authentication"},"Using the Apache APISIX OpenID Connect Plugin for Okta Centralized Authentication"))))}s.isMDXComponent=!0}}]);