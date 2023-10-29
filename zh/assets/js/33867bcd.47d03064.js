"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7352],{35318:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var l=n(27378);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=l.createContext({}),s=function(t){var e=l.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return l.createElement(p.Provider,{value:e},t.children)},I={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},c=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=s(n),m=a,k=c["".concat(p,".").concat(m)]||c[m]||I[m]||r;return n?l.createElement(k,i(i({ref:e},u),{},{components:n})):l.createElement(k,i({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},11592:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>I,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var l=n(25773),a=(n(27378),n(35318));const r={title:"\u9a6c\u8702\u7a9d\u5982\u4f55\u5229\u7528 APISIX \u7f51\u5173\u5b9e\u73b0\u5fae\u670d\u52a1\u67b6\u6784\u5347\u7ea7",authors:[{name:"\u8463\u7ea2\u5e05",title:"Author",url:"https://github.com/hansedong",image_url:"https://github.com/hansedong.png"}],keywords:["\u9a6c\u8702\u7a9d","Apache APISIX","\u7f51\u5173","\u67b6\u6784"],description:"\u672c\u6587\u4ece\u9a6c\u8702\u7a9d\u7684\u5fae\u670d\u52a1\u67b6\u6784\u5e73\u53f0\u8702\u6548\u8fed\u4ee3\u8fc7\u7a0b\u548c\u5e94\u7528 APISIX \u540e\u7684\u4ea7\u54c1\u5b9e\u8df5\u89d2\u5ea6\uff0c\u4e3a\u5927\u5bb6\u5448\u73b0\u4e86\u57fa\u4e8e APISIX \u7684\u7f51\u5173\u5e94\u7528\u5b9e\u4f8b\u3002",tags:["Case Studies"],image:"https://static.apiseven.com/uploads/2023/01/17/GhQuQxSZ_20230117-111941.png"},i=void 0,o={permalink:"/zh/blog/2023/01/15/mafengwo-with-apisix",source:"@site/blog/2023/01/15/mafengwo-with-apisix.md",title:"\u9a6c\u8702\u7a9d\u5982\u4f55\u5229\u7528 APISIX \u7f51\u5173\u5b9e\u73b0\u5fae\u670d\u52a1\u67b6\u6784\u5347\u7ea7",description:"\u672c\u6587\u4ece\u9a6c\u8702\u7a9d\u7684\u5fae\u670d\u52a1\u67b6\u6784\u5e73\u53f0\u8702\u6548\u8fed\u4ee3\u8fc7\u7a0b\u548c\u5e94\u7528 APISIX \u540e\u7684\u4ea7\u54c1\u5b9e\u8df5\u89d2\u5ea6\uff0c\u4e3a\u5927\u5bb6\u5448\u73b0\u4e86\u57fa\u4e8e APISIX \u7684\u7f51\u5173\u5e94\u7528\u5b9e\u4f8b\u3002",date:"2023-01-15T00:00:00.000Z",formattedDate:"2023\u5e741\u670815\u65e5",tags:[{label:"Case Studies",permalink:"/zh/blog/tags/case-studies"}],readingTime:20.185,truncated:!0,authors:[{name:"\u8463\u7ea2\u5e05",title:"Author",url:"https://github.com/hansedong",image_url:"https://github.com/hansedong.png",imageURL:"https://github.com/hansedong.png"}],prevItem:{title:"\u670d\u52a1\u7f51\u683c\u9886\u57df\u7684\u767e\u82b1\u9f50\u653e\uff0c\u662f\u5426\u5b58\u5728\u4e00\u4e2a\u66f4\u4f18\u89e3\uff1f",permalink:"/zh/blog/2023/01/18/what-is-service-mesh"},nextItem:{title:"\u5982\u4f55\u4f7f\u7528 Amesh \u914d\u7f6e\u63d2\u4ef6",permalink:"/zh/blog/2023/01/12/amesh-config-plugin"}},p={authorsImageUrls:[void 0]},s=[{value:"\u5fae\u670d\u52a1 1.0 \u6a21\u5f0f\u73b0\u72b6",id:"\u5fae\u670d\u52a1-10-\u6a21\u5f0f\u73b0\u72b6",children:[{value:"\u75db\u70b9\u68b3\u7406",id:"\u75db\u70b9\u68b3\u7406",children:[],level:3}],level:2},{value:"\u57fa\u4e8e APISIX \u7684\u5fae\u670d\u52a1 2.0 \u6a21\u5f0f",id:"\u57fa\u4e8e-apisix-\u7684\u5fae\u670d\u52a1-20-\u6a21\u5f0f",children:[{value:"\u65b0\u5e73\u53f0\u4e0e\u65b0\u67b6\u6784",id:"\u65b0\u5e73\u53f0\u4e0e\u65b0\u67b6\u6784",children:[],level:3},{value:"\u7f51\u5173\u9009\u578b",id:"\u7f51\u5173\u9009\u578b",children:[],level:3},{value:"\u843d\u5730\u65b9\u6848\u4e0e\u5b9e\u8df5\u95ee\u9898",id:"\u843d\u5730\u65b9\u6848\u4e0e\u5b9e\u8df5\u95ee\u9898",children:[],level:3}],level:2},{value:"\u603b\u7ed3\u4e0e\u53d1\u5c55",id:"\u603b\u7ed3\u4e0e\u53d1\u5c55",children:[],level:2}],u={toc:s};function I(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,l.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4ece\u9a6c\u8702\u7a9d\u7684\u5fae\u670d\u52a1\u67b6\u6784\u5e73\u53f0\u8702\u6548\u8fed\u4ee3\u8fc7\u7a0b\u548c\u5e94\u7528 APISIX \u540e\u7684\u4ea7\u54c1\u5b9e\u8df5\u89d2\u5ea6\uff0c\u4e3a\u5927\u5bb6\u5448\u73b0\u4e86\u57fa\u4e8e APISIX \u7684\u7f51\u5173\u5e94\u7528\u5b9e\u4f8b\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4f5c\u8005\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/hansedong"},"\u8463\u7ea2\u5e05"),"\uff0c\u9a6c\u8702\u7a9d\u5fae\u670d\u52a1\u4f53\u7cfb\u5efa\u8bbe\u4ee5\u53ca\u57fa\u7840\u670d\u52a1\u80fd\u529b\u5efa\u8bbe\u4e13\u5bb6\u3002")),(0,a.kt)("p",null,"\u9a6c\u8702\u7a9d\u4f5c\u4e3a\u65c5\u884c\u793e\u4ea4\u5e73\u53f0\uff0c\u662f\u6570\u636e\u9a71\u52a8\u7684\u65b0\u578b\u65c5\u884c\u7535\u5546\u3002\u57fa\u4e8e\u5341\u4f59\u5e74\u7684\u5185\u5bb9\u79ef\u7d2f\uff0c\u9a6c\u8702\u7a9d\u901a\u8fc7 AI \u6280\u672f\u4e0e\u5927\u6570\u636e\u7b97\u6cd5\uff0c\u5c06\u4e2a\u6027\u5316\u65c5\u884c\u4fe1\u606f\u4e0e\u6765\u81ea\u5168\u7403\u5404\u5730\u7684\u65c5\u6e38\u4ea7\u54c1\u4f9b\u5e94\u5546\u5b9e\u73b0\u8fde\u63a5\uff0c\u4e3a\u7528\u6237\u63d0\u4f9b\u4e0e\u4f17\u4e0d\u540c\u7684\u65c5\u884c\u4f53\u9a8c\u3002"),(0,a.kt)("p",null,"\u968f\u7740\u4e1a\u52a1\u7684\u53d1\u5c55\uff0c\u9a6c\u8702\u7a9d\u67b6\u6784\u4e5f\u5728\u8ddf\u968f\u6280\u672f\u6b65\u4f10\u8fdb\u884c\u66f4\u8fed\uff0c\u5f00\u59cb\u57fa\u4e8e Kubernetes \u8fdb\u884c\u66f4\u591a\u7684\u5ef6\u5c55\u3002\u5728\u8fd9\u4e2a\u6280\u672f\u80cc\u666f\u4e0b\uff0c\u9700\u8981\u9488\u5bf9\u4e91\u670d\u52a1\u5f00\u542f\u65b0\u4e00\u8f6e\u7684\u67b6\u6784\u66f4\u65b0\uff0c\u6bd4\u5982\uff1a\u5fae\u670d\u52a1\u573a\u666f\u5efa\u8bbe\u65b0\u7684\u8702\u6548\u5e73\u53f0\u53ca\u5468\u8fb9\u8bbe\u65bd\u6765\u652f\u6301\u8fed\u4ee3\u548c\u6d41\u91cf\u6cf3\u9053\u7684\u80fd\u529b\uff0c\u5728\u591a Kubernetes \u96c6\u7fa4\u573a\u666f\u5f15\u5165 Karmada \u5b9e\u73b0\u591a\u96c6\u7fa4\u7ba1\u7406\uff0c\u5728\u5fae\u670d\u52a1\u7f51\u5173\u9886\u57df\u5c06 Istio + Envoy \u7684\u67b6\u6784\u66ff\u6362\u4e3a Apache APISIX \u4e0e Envoy \u5171\u5b58\u7684\u5fae\u670d\u52a1\u7f51\u5173\u6a21\u5f0f\u3002"),(0,a.kt)("h2",{id:"\u5fae\u670d\u52a1-10-\u6a21\u5f0f\u73b0\u72b6"},"\u5fae\u670d\u52a1 1.0 \u6a21\u5f0f\u73b0\u72b6"),(0,a.kt)("p",null,"\u76ee\u524d\u9a6c\u8702\u7a9d\u5185\u90e8\u7684\u5fae\u670d\u52a1\u67b6\u6784\u7ecf\u5386\u4e86\u4e24\u6b21\u8fed\u4ee3\uff0c\u672c\u6587\u4e2d\u5c06\u9488\u5bf9\u539f\u6709\u67b6\u6784\u7684\u7b2c\u4e00\u6b21\u8c03\u6574\u5b9a\u4e49\u4e3a 1.0 \u7248\u672c\u3002\u5728\u8fdb\u884c\u5fae\u670d\u52a1 1.0 \u67b6\u6784\u7684\u642d\u5efa\u4e4b\u524d\uff0c\u6211\u4eec\u4ece\u53d1\u5e03\u7cfb\u7edf\u80fd\u529b\u3001Kubernetes \u5bb9\u5668\u3001\u670d\u52a1\u53d1\u73b0\u548c\u5fae\u670d\u52a1\u7f51\u5173\u7b49\u89d2\u5ea6\u8fdb\u884c\u4e86\u4e00\u4e9b\u8003\u91cf\u4e0e\u76ee\u6807\u5bf9\u9f50\u3002\u6bd4\u5982 Kubernetes \u7684\u5e7f\u6cdb\u5e94\u7528\uff0c\u9700\u8981\u5f00\u59cb\u8003\u8651\u57fa\u4e8e\u5bb9\u5668\u505a\u591a\u8bed\u8a00\u652f\u6301\uff0c\u5728 CI/CD \u73af\u8282\u5b9e\u73b0\u5168\u9762\u5bb9\u5668\u5316\uff0c\u5e76\u652f\u6301\u591a Kubernetes \u96c6\u7fa4\u7b49\u3002"),(0,a.kt)("p",null,"\u5728\u8fdb\u884c\u7b2c\u4e00\u6b21\u8fed\u4ee3\u4e4b\u524d\uff0c\u5185\u90e8\u67b6\u6784\u7684\u5fae\u670d\u52a1\u7f51\u5173\u4f7f\u7528\u7684\u662f NGINX Ingress\uff0c\u4f46\u5b83\u5176\u5b9e\u662f\u5b58\u5728\u95ee\u9898\u7684\u3002\u6bd4\u5982\u914d\u7f6e\u53d8\u66f4\u57fa\u4e8e NGINX reload\uff0c\u4f1a\u9020\u6210\u4e1a\u52a1\u6709\u635f\uff1b\u540c\u65f6\u5728\u5e94\u7528\u8303\u56f4\u5185\u4ec5\u652f\u6301\u5355 Kubernetes \u96c6\u7fa4\uff0c\u573a\u666f\u53d7\u9650\uff1b\u5185\u7f6e\u8d44\u6e90\u8fc7\u4e8e\u7b80\u5355\uff0c\u5927\u91cf\u5339\u914d\u89c4\u5219\u4f9d\u8d56 Annotations\uff0c\u914d\u7f6e\u7e41\u6742\u4e0d\u53cb\u597d\uff0c\u5c24\u5176\u662f\u5bf9\u5916\u90e8\u670d\u52a1\u53d1\u73b0\u80fd\u529b\u652f\u6301\u5f88\u5f31\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\u5728\u8fdb\u884c\u5fae\u670d\u52a1 1.0 \u8fed\u4ee3\u843d\u5730\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4e3a\u4e86\u6ee1\u8db3\u4e00\u4e9b\u4e1a\u52a1\u9700\u6c42\uff0c\u6211\u4eec\u8fdb\u884c\u4e86\u5982\u4e0b\u52a8\u4f5c\uff08\u9009\u53d6\u90e8\u5206\u64cd\u4f5c\u5217\u4e3e\uff09\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728 Kubernetes \u5bb9\u5668\u5185\uff0c\u57fa\u4e8e macvlan \u6539\u9020\u5bb9\u5668\u7f51\u7edc\uff0cIDC \u673a\u623f\u7f51\u7edc\u4e0e\u4e91\u5382\u5546\u7f51\u7edc\u4e92\u901a\uff08\u5bb9\u5668\u4e92\u901a\u7684\u901a\u4fe1\u57fa\u7840\uff09\uff1b\u501f\u52a9\u7f51\u5173\u6216\u5bb9\u5668\u76f4\u8fde\u5b9e\u73b0\u670d\u52a1\u4e92\u8bbf\uff0c\u4e0d\u518d\u4f7f\u7528 Kubernetes Service\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e Kubernetes \u5bb9\u5668\u573a\u666f\u90e8\u7f72\uff1b\u57fa\u4e8e Consul \u7269\u7406\u673a\u865a\u62df\u673a\u90e8\u7f72\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u589e\u52a0\u7edf\u4e00\u670d\u52a1\u53d1\u73b0\u80fd\u529b\uff0c\u57fa\u4e8e Kubernetes\u3001Consul \u5efa\u8bbe\u7edf\u4e00\u7684\u53d1\u73b0\u4e2d\u5fc3 \u2014 Atlas\uff1b\u540c\u65f6\u57fa\u4e8e Atlas \u6269\u5c55\u5fae\u670d\u52a1\u7f51\u5173\u3001Java \u751f\u6001\u3001\u76d1\u63a7\u4f53\u7cfb\u7b49\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u5fae\u670d\u52a1\u7f51\u5173\u7684\u9009\u62e9\u4e0a\uff0c\u57fa\u4e8e Istio + Envoy \u67b6\u6784\u8fdb\u884c\u6784\u5efa\u3002\u5bf9 Istio \u4e2d Pilot \u8fdb\u884c\u4e8c\u6b21\u5f00\u53d1\uff0c\u5bf9\u63a5 Atlas \u53d1\u73b0\u4e2d\u5fc3\uff0c\u7531\u4e8e Atlas \u6570\u636e\u6765\u6e90\u4e8e\u591a\u5957 Kubernetes \u548c Consul\uff0c\u8fdb\u800c\u5c06\u5b9e\u4f8b\u53d1\u73b0\u4e0e Kubernetes \u96c6\u7fa4\u89e3\u8026\uff0c\u95f4\u63a5\u505a\u5230\u7f51\u5173\u5bf9\u63a5\u591a Kubernetes \u96c6\u7fa4\u7684\u80fd\u529b\uff0c\u5b9e\u73b0\u6574\u4e2a\u7f51\u5173\u52a8\u6001\u611f\u77e5\u8bc6\u522b\u7684\u53d8\u5316\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2023/01/17/jydzEiWC_image%20%2837%29.png",alt:"\u8702\u6548 1.0 \u5fae\u670d\u52a1\u7f51\u5173\u67b6\u6784"})),(0,a.kt)("h3",{id:"\u75db\u70b9\u68b3\u7406"},"\u75db\u70b9\u68b3\u7406"),(0,a.kt)("p",null,"\u5728\u5fae\u670d\u52a1 1.0 \u7684\u8fd9\u5957\u67b6\u6784\u4e2d\uff0c\u5b9e\u8df5\u4e0b\u6765\u8fd8\u662f\u5b58\u5728\u4e00\u4e9b\u75db\u70b9\u3002"),(0,a.kt)("p",null,"\u9996\u5148\u662f\u5728\u53d1\u5e03\u7cfb\u7edf\u80fd\u529b\u65b9\u9762\uff0c\u5fae\u670d\u52a1 1.0 \u4e2d\u7684\u53d1\u5e03\u7cfb\u7edf\uff0c\u4ec5\u4ec5\u662f\u4e00\u4e2a\u53d1\u5e03\u7cfb\u7edf\uff0c\u65e0\u6cd5\u6709\u6548\u878d\u5408\u9879\u76ee\u9700\u6c42\u7684\u7ba1\u7406\uff08\u53d1\u5e03\u4e5f\u662f\u5ea6\u91cf\u7684\u4e00\u73af\uff09\uff1b\u540c\u65f6\u8fd9\u5957\u53d1\u5e03\u7cfb\u7edf\u57fa\u4e8e PHP \u6784\u5efa\uff0c\u65e0\u6cd5\u5f88\u597d\u5730\u652f\u6301\u81ea\u52a8\u5316\u6eda\u52a8\u90e8\u7f72\u3001\u591a\u7248\u672c\u6eda\u52a8\u90e8\u7f72\u5bb9\u91cf\u53d8\u66f4\u7b49\u8f83\u4e3a\u590d\u6742\u7684\u90e8\u7f72\u573a\u666f\uff1b\u5f53\u591a\u4eba\u5bf9\u540c\u4e00\u4e2a\u9879\u76ee\u5f00\u53d1\uff0c\u6216\u4e00\u4e2a\u9700\u6c42\u5173\u8054\u591a\u4e2a\u9879\u76ee\u65f6\uff0c\u7f3a\u5c11\u673a\u5236\u8ba9\u6d41\u91cf\u5728\u540c\u4e00\u4e2a\u8fed\u4ee3\u4e2d\u81ea\u52a8\u4e32\u8054\uff08\u6d41\u91cf\u6cf3\u9053\uff09\u3002\u540c\u65f6\u5bf9\u591a Kubernetes \u96c6\u7fa4\u7ba1\u7406\u5e76\u4e0d\u65b9\u4fbf\uff0c\u5f53 Kubernetes \u4e0b\u7ebf\u65f6\u9700\u8981\u4e1a\u52a1\u4fa7\u53c2\u4e0e\uff0c\u7ed9\u4e1a\u52a1\u7ebf\u5e26\u6765\u4e86\u65f6\u95f4\u6210\u672c\u7b49\u3002"),(0,a.kt)("p",null,"\u5176\u6b21\u5c31\u662f\u5fae\u670d\u52a1\u7f51\u5173\u67b6\u6784\u5c42\u9762\u3002\u524d\u6587\u4e5f\u63d0\u5230\u4e86 1.0 \u67b6\u6784\u4e0b\u7f51\u5173\u662f\u57fa\u4e8e Istio+Envoy \u5bf9 Pilot \u505a\u4e86\u4e8c\u6b21\u5f00\u53d1\uff0c\u4e3b\u8981\u662f\u5bf9\u63a5 Atlas \u53d1\u73b0\u4e2d\u5fc3\u3002\u968f\u7740\u4e1a\u52a1\u7684\u5e94\u7528\u6570\u91cf\u8d8a\u6765\u8d8a\u591a\uff0c\u8bbf\u95ee\u89c4\u5219\u4e5f\u8d8a\u6765\u8d8a\u591a\uff0c\u8fd9\u5c31\u5bfc\u81f4\u6211\u4eec\u7ebf\u4e0a\u7684\u7f51\u5173\u751f\u6548\u5ef6\u8fdf\u4e5f\u8d8a\u6765\u8d8a\u9ad8\u3002\u5728\u6d41\u91cf\u5dc5\u5cf0\u72b6\u6001\u4e0b\uff0c\u5927\u6982\u6709 15 \u79d2\u5de6\u53f3\u7684\u5ef6\u8fdf\u3002\u8fd9\u4e2a\u5ef6\u8fdf\u4e3b\u8981\u6765\u81ea\u4e8e CRD \u8d44\u6e90\uff0c\u51e0\u4e4e\u5168\u90fd\u5728\u76f8\u540c\u7684 namespace \u4e0b\uff0c\u540c\u65f6\u4e0a\u4e0b\u7ebf\u65f6\u4f1a\u89e6\u53d1\u5168\u91cf\u66f4\u65b0\u5bfc\u81f4\u5ef6\u8fdf\u8f83\u9ad8\u3002"),(0,a.kt)("p",null,"\u800c\u5728\u65e9\u671f\u7684\u4f7f\u7528\u8fc7\u7a0b\u4e2d\uff0cEnvoy \u5728\u6570\u636e\u5168\u91cf\u63a8\u9001\u8fc7\u7a0b\u4e2d\u8fd8\u4f1a\u51fa\u73b0\u94fe\u63a5\u4e2d\u65ad\u7684\u72b6\u51b5\uff0c\u9020\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"503")," \u95ee\u9898\u7684\u4ea7\u751f\u3002\u9664\u6b64\u4e4b\u5916\uff0cEnvoy \u8fd8\u5b58\u5728\u4f7f\u7528\u5185\u5b58\u6301\u7eed\u589e\u957f\u5bfc\u81f4 OOM \u7684\u60c5\u51b5\uff0c\u5f53\u7f51\u5173\u51fa\u73b0\u95ee\u9898\u65f6\uff0c\u5bf9 Envoy \u548c Pilot \u8fdb\u884c\u6392\u9519\u7684\u6210\u672c\u8f83\u9ad8\u3002\u5f53\u4f7f\u7528\u4e00\u4e9b\u9ad8\u9636\u914d\u7f6e\u65f6\uff0c\u9700\u8981\u501f\u52a9 Envoy Filter \u5b9e\u73b0\uff0c\u5176\u4e0a\u624b\u95e8\u69db\u8f83\u9ad8\uff0c\u5bf9\u4e8e\u60f3\u7b80\u5355\u5b9e\u73b0\u7194\u65ad\u3001\u9650\u6d41\u3001Auth \u9274\u6743\u7b49\u529f\u80fd\u800c\u8a00\uff0c\u6210\u672c\u8f83\u9ad8\u3002"),(0,a.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0c\u4e24\u4e2a\u793e\u533a\uff08Istio \u548c Envoy\uff09\u7684\u53d1\u5c55\u901f\u5ea6\u5f88\u5feb\uff0c\u8fd9\u4e5f\u5bfc\u81f4\u6211\u4eec\u7684\u67b6\u6784\u6bd4\u8f83\u96be\u8ddf\u8fdb\u4e0a\u6e38\u793e\u533a\u7684\u53d1\u5c55\u3002"),(0,a.kt)("h2",{id:"\u57fa\u4e8e-apisix-\u7684\u5fae\u670d\u52a1-20-\u6a21\u5f0f"},"\u57fa\u4e8e APISIX \u7684\u5fae\u670d\u52a1 2.0 \u6a21\u5f0f"),(0,a.kt)("h3",{id:"\u65b0\u5e73\u53f0\u4e0e\u65b0\u67b6\u6784"},"\u65b0\u5e73\u53f0\u4e0e\u65b0\u67b6\u6784"),(0,a.kt)("p",null,"\u9762\u5bf9 1.0 \u67b6\u6784\u4e0b\u5b58\u5728\u7684\u75db\u70b9\u4e0e\u95ee\u9898\uff0c\u5185\u90e8\u5bf9\u4e8e\u8fd9\u5957\u5fae\u670d\u52a1\u67b6\u6784\u8fdb\u884c\u4e86\u518d\u6b21\u8fed\u4ee3\uff0c\u6765\u5230\u4e86 2.0 \u65f6\u4ee3\u30022.0 \u67b6\u6784\u573a\u666f\u4e0b\uff0c\u6211\u4eec\u65b0\u589e\u4e86\u4e00\u5957\u53d1\u5e03\u5e73\u53f0\u2014\u2014\u8702\u6548\u5e73\u53f0\u3002"),(0,a.kt)("p",null,"\u8702\u6548\u5e73\u53f0\u91cd\u70b9\u7a81\u51fa\u4e86\u4ee5\u4e0b\u80fd\u529b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u878d\u5408\u4e86\u9700\u6c42\u7ba1\u7406\uff0c\u652f\u6301\u4e86\u8fed\u4ee3\u90e8\u7f72\u80fd\u529b\uff0c\u4f7f\u5f97\u53d1\u5e03\u7cfb\u7edf\u53ef\u4ee5\u589e\u76ca\u5ea6\u91cf\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5c06\u5bb9\u5668\u90e8\u7f72\u548c\u673a\u5668\u90e8\u7f72\uff08\u7269\u7406\u673a\u90e8\u7f72\uff09\u5728\u4ea7\u54c1\u80fd\u529b\u4e0a\u8fdb\u884c\u4e86\u7edf\u4e00\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u589e\u5f3a\u4e86\u7cbe\u7ec6\u5316\u7684\u6d41\u91cf\u7ba1\u7406\u80fd\u529b\u3001\u56de\u6eda\u80fd\u529b\uff08\u56de\u6eda\u7b56\u7565\uff1a\u6279\u6b21\u3001\u5b9e\u4f8b\u6570\u3001\u95f4\u9694\u7b49\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u4e0e Java \u751f\u6001\u878d\u5408\u5171\u5efa\uff0c\u652f\u6301\u4e86\u6d41\u91cf\u6cf3\u9053\u80fd\u529b\uff0c\u73af\u5883\u6d41\u91cf\u9694\u79bb\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7f51\u5173\u57fa\u4e8e APISIX \u8fdb\u884c\u91cd\u6784\uff0c\u89e3\u51b3 Envoy OOM \u53ca\u89c4\u5219\u751f\u6548\u5ef6\u8fdf\u8f83\u9ad8\u7684\u540c\u65f6\uff0c\u901a\u8fc7 APISIX \u4ea7\u54c1\u5316\u80fd\u529b\u964d\u4f4e\u4e86\u95ee\u9898\u6392\u9519\u6210\u672c\uff0c\u964d\u4f4e\u4e86\u6269\u5c55\u548c\u914d\u7f6e\u7f51\u5173\u7684\u4e0a\u624b\u95e8\u69db\u3002")),(0,a.kt)("p",null,"\u5728\u8702\u6548\u5e73\u53f0\u4ea7\u54c1\u4fa7\u4e2d\uff0c\u6211\u4eec\u5c06\u9700\u6c42\u7ba1\u7406\u4e0e\u8fed\u4ee3\u90e8\u7f72\u5173\u8054\u7ed3\u5408\uff0c\u5e76\u4e14\u4e3a\u4e86\u652f\u6301\u4e86\u591a\u79cd\u8fed\u4ee3\u6d41\u6c34\u7ebf\u6a21\u5f0f\u3002\u5728\u6d41\u91cf\u7ba1\u7406\u65b9\u9762\uff0c\u6211\u4eec\u501f\u52a9 Atlas Instance \u6a21\u578b\u4e2d\u7684 env \u5c5e\u6027\u4ee5\u53ca\u6269\u5c55\u5c5e\u6027\uff0c\u5b9e\u73b0\u4e86\u6d41\u91cf\u6cf3\u9053\u80fd\u529b\u3002\u57fa\u4e8e\u6d41\u91cf\u6cf3\u9053\u6a21\u578b\uff0c\u5728\u4e0a\u5c42\u4ea7\u54c1\u4fa7\u6784\u5efa\u8fed\u4ee3\u6d41\u91cf\u73af\u5883\u8c03\u7528\u94fe\u8def\u9694\u79bb\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2023/01/17/FmMR3bfp_image%20%2838%29.png",alt:"\u89c4\u5212\u8702\u6548 2.0 "})),(0,a.kt)("p",null,"\u5728\u5468\u8fb9\u751f\u6001\u5efa\u8bbe\u65b9\u9762\uff0cJava SDK \u4fa7\u505a\u5230\u4e86\u5e94\u7528\u5728\u8fed\u4ee3\u73af\u5883\u4e2d\u53ef\u4ee5\u5b9e\u73b0\u9694\u79bb\u7684\u94fe\u8def\u8c03\u7528\uff0c\u7f51\u5173\u4fa7\u4e5f\u8fdb\u884c\u4e86\u7c7b\u4f3c\u7684\u64cd\u4f5c\u3002\u53ea\u662f\u7f51\u5173\u4fa7\u4f5c\u4e3a\u6574\u4e2a\u6d41\u91cf\u7684\u5165\u53e3\uff0c\u6211\u4eec\u662f\u901a\u8fc7 Cookie \u7684\u89c4\u5219\uff0c\u4e5f\u5c31 Cookie \u7684\u65b9\u5f0f\u8fdb\u884c\u914d\u7f6e\u7684\u3002\u57fa\u7ebf\u73af\u5883\u7684\u6d41\u91cf\u53ea\u80fd\u5230\u8fbe\u57fa\u7ebf\u73af\u5883\u7684\u7248\u672c\u4e2d\uff0c\u8fed\u4ee3\u73af\u5883\u7684\u6d41\u91cf\u5c31\u4f1a\u8f6c\u53d1\u5230\u8fed\u4ee3\u7684\u7248\u672c\u4e0a\u53bb\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2023/01/17/QCn1I0Gh_%E6%B5%81%E7%A8%8B%E5%9B%BE%20%283%29%20%281%29.jpg",alt:"v1 \u4e0e v2 \u7248\u672c\u7684\u6d41\u91cf\u5206\u914d"})),(0,a.kt)("p",null,"\u540c\u65f6\u5728\u90e8\u7f72\u5c42\u7684 Kubernetes \u591a\u96c6\u7fa4\u7ba1\u7406\u5c42\u9762\uff0c\u6211\u4eec\u5219\u501f\u52a9 Karmada \u5b9e\u73b0\u4e86\u4e00\u4e2a\u591a Kubernetes \u96c6\u7fa4\u7684\u7ba1\u7406\u3002\u5728\u6574\u4e2a\u67b6\u6784\u4e2d\uff08\u5982\u4e0b\u56fe\u6240\u793a\uff09\uff0c\u5e95\u5c42\u7684\u80fd\u529b\u4e3b\u8981\u662f\u7531 Kubernetes \u591a\u96c6\u7fa4\u548c\u6d41\u91cf\u7f51\u5173 Envoy \u4e0e APISIX\u3001\u53d1\u73b0\u4e2d\u5fc3 Atlas\u3001\u65e5\u5fd7\u670d\u52a1\u4e0e\u76d1\u63a7\u670d\u52a1\u7b49\u7ec4\u6210\u3002"),(0,a.kt)("p",null,"\u800c\u8702\u6548\u5e73\u53f0\u5728\u6574\u4e2a\u67b6\u6784\u4e2d\u4e3b\u8981\u662f\u8fdb\u884c\u914d\u7f6e\u7ba1\u7406\u3001\u6784\u5efa\u90e8\u7f72\u3001\u6269\u7f29\u5bb9\u548c\u4e0a\u4e0b\u7ebf\u7b49\u7b49\uff0c\u540c\u65f6\u5305\u542b\u4efb\u52a1\u6d41\u7684\u6a21\u5757\u3002\u6700\u4e0a\u65b9\u5219\u662f\u5e94\u7528\u5e02\u573a\u7684\u4e00\u4e9b\u80fd\u529b\uff0c\u6bd4\u5982\u8fed\u4ee3\u80fd\u529b\u548c\u63d2\u4ef6\u80fd\u529b\u7b49\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2023/01/17/luSFWibx_%E6%B5%81%E7%A8%8B%E5%9B%BE%20%284%29.jpg",alt:"\u8702\u6548\u5e73\u53f0 2.0 \u67b6\u6784\u56fe"})),(0,a.kt)("p",null,"\u6574\u4f53\u6765\u8bf4\uff0c\u6211\u4eec\u57fa\u4e8e\u5e94\u7528\u4e2d\u5fc3\u548c\u670d\u52a1\u6253\u9020\u51fa\u4e86 2.0 \u65b0\u67b6\u6784\u3002\u8fd9\u5957\u65b0\u67b6\u6784\u5728 Kubernetes \u96c6\u7fa4\u53d1\u751f\u53d8\u66f4\u65f6\uff0c\u53ef\u901a\u8fc7 PropagationPolicy\u3001OveridePolicy \u7b49\u7b56\u7565\uff0c\u5b9e\u73b0 Deployment \u7b49\u5728 Kubernetes \u96c6\u7fa4\u7ea7\u522b\u7684\u8d44\u6e90\u5206\u53d1\uff0c\u51cf\u5c11\u96c6\u7fa4\u53d8\u66f4\u65f6\u4e1a\u52a1\u53c2\u4e0e\u7684\u6210\u672c\uff0c\u51cf\u8f7b\u4e86\u4e1a\u52a1\u7814\u53d1\u4fa7\u7684\u4e00\u4e9b\u538b\u529b\u3002"),(0,a.kt)("h3",{id:"\u7f51\u5173\u9009\u578b"},"\u7f51\u5173\u9009\u578b"),(0,a.kt)("p",null,"\u5728 2.0 \u6a21\u5f0f\u7684\u67b6\u6784\u4e2d\uff0c\u6d41\u91cf\u7f51\u5173\u6211\u4eec\u63d0\u5230\u4e86\u4e24\u4e2a\u7f51\u5173\u4ea7\u54c1\uff0c\u5373 Envoy \u4e0e APISIX\u3002Envoy \u4f5c\u4e3a\u4e4b\u524d 1.0 \u7248\u672c\u7684\u9009\u62e9\uff0c\u6211\u4eec\u5e76\u6ca1\u6709\u5b8c\u5168\u653e\u5f03\uff0c\u5728 2.0 \u4e2d\u6211\u4eec\u4e5f\u56e0\u4e3a\u4e00\u4e9b\u9700\u6c42\u548c\u4ea7\u54c1\u671f\u671b\uff0c\u5f00\u59cb\u8003\u8651\u65b0\u7684\u7f51\u5173\u4ea7\u54c1\u8fdb\u884c\u66ff\u4ee3\uff0c\u6bd4\u5982\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8bbf\u95ee\u89c4\u5219\u53d8\u5316\u65f6\uff0c\u7f51\u5173\u7684\u751f\u6548\u901f\u5ea6\u9700\u8981\u63a7\u5236\u5728\u6beb\u79d2\u7ea7\uff08\u751f\u6548\u6162\uff0c\u4f1a\u5bfc\u81f4\u7f51\u5173\u751f\u6548\u901f\u5ea6\u4e0d\u4e00\uff0c\u5728\u4f7f\u7528\u4e86 CDN \u573a\u666f\u4e0b\u53ef\u80fd\u5bfc\u81f4\u4e1a\u52a1\u8d44\u6e90\u957f\u65f6\u95f4 404\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u5728\u73b0\u6709\u573a\u666f\u4e2d\uff0c\u5b8c\u5168\u66ff\u6362 Istio+Envoy \u67b6\u6784\uff1b\u540c\u65f6\u652f\u6301 HTTP\u3001gRPC\uff0c\u5e76\u517c\u5bb9\u73b0\u6709\u8def\u7531\u7b56\u7565\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u9700\u8981\u964d\u4f4e\u95ee\u9898\u7684\u6392\u67e5\u6210\u672c\uff0c\u6700\u597d\u6709\u4ea7\u54c1\u5316\u652f\u6301\uff08\u5982 Dashboard\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4ea7\u54c1\u8db3\u591f\u7a33\u5b9a\uff0c\u793e\u533a\u6d3b\u8dc3\uff0c\u529f\u80fd\u5f3a\uff08\u5bf9\u9650\u6d41\u7b49\u573a\u666f\u652f\u6301\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u9700\u8981\u4e8c\u6b21\u5f00\u53d1\u5373\u53ef\u652f\u6301\u516c\u53f8\u73b0\u6709\u67b6\u6784\u7684\u66ff\u6362\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u66ff\u6362 Istio+Envoy \u67b6\u6784\u8fc7\u7a0b\u4e2d\uff0c\u9700\u8981\u4fdd\u6301\u53cc\u67b6\u6784\u53ef\u7528\uff08Istio\u3001Envoy \u4e0e\u65b0\u7f51\u5173\u5e76\u5b58\uff09\uff0c\u5982\u679c\u65b0\u67b6\u6784\u6709\u95ee\u9898\u53ef\u5feb\u901f\u56de\u9000\u81f3\u539f\u6765\u65b9\u6848\u3002")),(0,a.kt)("p",null,"\u5728\u8c03\u7814\u4e86\u4e00\u4e9b\u5173\u952e\u7f51\u5173\u4ea7\u54c1\u7684\u6a21\u578b\u4e4b\u540e\uff0c\u6211\u4eec\u6700\u7ec8\u5c06\u65b9\u6848\u9501\u5b9a\u5728\u4e86 Apache APISIX\u3002APISIX \u7684\u67b6\u6784\u4e5f\u5206\u4e3a\u63a7\u5236\u9762\u548c\u6570\u636e\u9762\uff0c\u540c\u65f6\u8fd8\u9644\u5e26 Dashboard \u4ea7\u54c1\u3002\u5728\u529f\u80fd\u4f7f\u7528\u4e0a\uff0cAPISIX \u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u63d2\u4ef6\uff0c\u6bd4\u5982\u9650\u6d41\u3001\u7194\u65ad\u3001\u65e5\u5fd7\u5b89\u5168\u548c\u76d1\u63a7\u7b49\u7b49\u3002\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 APISIX \u7684 Admin API \u63d0\u4f9b\u7684\u63a5\u53e3\uff0c\u53bb\u5b8c\u6574\u64cd\u4f5c APISIX \u7684\u6240\u6709\u80fd\u529b\uff0c\u6bd4\u5982 Upstream\u3001Consumer \u8fd8\u6709\u5404\u79cd\u63d2\u4ef6\u7b49\u3002\u5bf9\u6211\u4eec\u800c\u8a00\uff0cAPISIX \u8fd8\u6709\u4e00\u4e2a\u7279\u522b\u6709\u4f18\u52bf\u7684\u70b9\uff0c\u5c31\u662f APISIX \u5728\u5347\u7ea7\u65f6\uff0c\u80fd\u591f\u505a\u5230\u5bf9\u4f4e\u7248\u672c\u7684 API \u8fdb\u884c\u7edf\u4e00\u7684\u517c\u5bb9\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2023/01/17/RxOc4qk7_image%20%2840%29.png",alt:"APISIX \u67b6\u6784"})),(0,a.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0c\u6211\u4eec\u8ba4\u4e3a APISIX \u8fd8\u6709\u4ee5\u4e0b\u51e0\u4e2a\u4f18\u52bf\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"APISIX \u57fa\u4e8e Openresty \u7684\u6027\u80fd\u5f88\u597d\uff0c\u76f8\u6bd4 Envoy \u6765\u8bf4\uff0c\u6027\u80fd\u635f\u8017\u5f88\u5c11\u3002\u5728\u7ecf\u8fc7\u6211\u4eec\u6d4b\u8bd5\u4e4b\u540e\uff0c\u5728 QPS \u7684\u8868\u73b0\u4e0a\uff0cAPISIX \u635f\u8017 3%\uff0c\u800c Envoy \u635f\u8017 16%\uff1b\u5728\u65f6\u5ef6\u8868\u73b0\u4e0a\uff0cAPISIX \u5e73\u5747\u8f6c\u53d1\u8017\u65f6 2ms\uff0c\u800c Envoy \u8017\u65f6 7ms\u3002\u6570\u636e\u7684\u4f53\u73b0\uff0c\u5df2\u7ecf\u5c55\u793a\u4e86 APISIX \u5728\u6027\u80fd\u4e0a\u7684\u5353\u8d8a\u4f18\u52bf\u3002"),(0,a.kt)("li",{parentName:"ul"},"APISIX \u8fd8\u9644\u6709 Dashboard \u652f\u6301\uff0c\u5bf9\u4e8e\u8def\u7531\u5339\u914d\u5f02\u5e38\u7b49\u573a\u666f\u53ef\u5feb\u901f\u5224\u65ad\u662f\u5426\u4e3a\u89c4\u5219\u914d\u7f6e\u9519\u8bef\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a\u5f00\u6e90\u4ea7\u54c1\uff0cAPISIX \u7684\u793e\u533a\u66f4\u4e3a\u6d3b\u8dc3\u3002\u5728\u4ea7\u54c1\u7684\u529f\u80fd\u4e0a\uff0c\u5728\u9650\u6d41\u3001\u9274\u6743\u3001\u76d1\u63a7\u7b49\u65b9\u9762\u76f8\u6bd4 Envoy \u6210\u672c\u66f4\u4f4e\uff0c\u652f\u6301\u6027\u66f4\u597d\u3002"),(0,a.kt)("li",{parentName:"ul"},"APISIX \u76f8\u6bd4 Envoy \u5185\u5b58\u5360\u7528\u5f88\u4f4e\uff0c\u4f46\u5728\u914d\u7f6e\u7684\u52a8\u6001\u53d8\u66f4\u4e0a\u76f8\u6bd4 Envoy \u8981\u5f31\uff08Envoy \u51e0\u4e4e\u5927\u90e8\u5206\u914d\u7f6e\u53ef\u52a8\u6001\u4e0b\u53d1\uff09\uff0c\u4f46\u4e5f\u8db3\u591f\u6ee1\u8db3\u9700\u6c42\u3002")),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u5728\u8c03\u7814\u4e0e\u6d4b\u8bd5\u4e4b\u540e\uff0c\u6211\u4eec\u5728\u5fae\u670d\u52a1 2.0 \u7684\u67b6\u6784\u4e0b\u589e\u6dfb\u4e86 Apache APISIX \u4f5c\u4e3a\u6d41\u91cf\u7f51\u5173\u52a0\u5165\u3002\u7531\u4e8e\u7f51\u5173\u662f\u6574\u4e2a\u5fae\u670d\u52a1\u6d41\u91cf\u7684\u6838\u5fc3\uff0c\u5982\u679c\u4ece\u4e00\u5957\u65e7\u67b6\u6784\u5207\u6362\u5230\u4e00\u5957\u65b0\u7684\u67b6\u6784\uff0c\u5176\u5b9e\u6210\u672c\u662f\u6bd4\u8f83\u9ad8\u7684\u3002\u6240\u4ee5\u6211\u4eec\u5e0c\u671b\u5fae\u670d\u52a1\u7684\u7f51\u5173\u89c4\u5219\u53d8\u5316\u80fd\u591f\u5bf9\u65b0\u65e7\u4e24\u5957\u7f51\u5173\uff08Envoy \u4e0e APISIX\uff09\u540c\u65f6\u751f\u6548\uff0c\u4e5f\u5c31\u662f\u4e00\u5957\u914d\u7f6e\u53ef\u4ee5\u9002\u7528\u4e8e\u4e24\u79cd\u67b6\u6784\uff0c\u56e0\u6b64\u6211\u4eec\u5728 2.0 \u67b6\u6784\u4e2d\uff0c\u9488\u5bf9\u8fd9\u4e9b\u53d8\u52a8\u505a\u4e86\u4e00\u4e9b\u8c03\u6574\u3002"),(0,a.kt)("h3",{id:"\u843d\u5730\u65b9\u6848\u4e0e\u5b9e\u8df5\u95ee\u9898"},"\u843d\u5730\u65b9\u6848\u4e0e\u5b9e\u8df5\u95ee\u9898"),(0,a.kt)("p",null,"\u9996\u5148\u8003\u8651\u5230\u6210\u672c\u95ee\u9898\uff0c\u5bf9\u539f\u672c\u7684 Istio \u67b6\u6784\u4fdd\u6301\u4e0d\u53d8\uff0c\u5e76\u672a\u8fdb\u884c\u6539\u9020\u3002\u540c\u65f6\u5728\u7f51\u5173\u67b6\u6784\u4e2d\uff0c\u5f15\u5165\u4e86\u65b0\u5f00\u53d1\u7684\u5173\u952e\u7ec4\u4ef6\u2014\u2014 ",(0,a.kt)("strong",{parentName:"p"},"istio-apisix-translator"),"\u3002"),(0,a.kt)("p",null,"istio-apisix-translator \u4e3b\u8981\u662f\u53bb\u5bf9\u63a5 Atlas \u53d1\u73b0\u4e2d\u5fc3\u4ee5\u53ca Istio \u7684 CRD \u6570\u636e\u3002\u4f5c\u4e3a\u6570\u636e\u540c\u6b65\u670d\u52a1\uff0c\u5b9e\u65f6\u5c06 VirtualService\u3001DestinationRule \u7b49\u89c4\u5219\u53d8\u5316\u8f6c\u6362\u4e3a APISIX \u8def\u7531\u89c4\u5219\uff0c\u5c06 Atlas Instance \u6570\u636e\u5b9e\u65f6\u8f6c\u6362\u4e3a APISIX Upstream \u89c4\u5219\u7b49\u3002\u7b80\u5355\u6765\u8bf4\uff0c\u5c31\u662f\u901a\u8fc7\u8fd9\u6837\u4e00\u4e2a\u670d\u52a1\u7ec4\u4ef6\uff0c\u5b9e\u73b0\u4e86\u5bf9 Atlas \u4ee5\u53ca Istio CRD \u7684\u6570\u636e\u652f\u6301\u3002"),(0,a.kt)("p",null,"\u501f\u52a9\u8fd9\u79cd\u67b6\u6784\uff0c\u6211\u4eec\u5c31\u5b9e\u73b0\u4e86\u5bf9\u4e24\u79cd\u7f51\u5173\u7684\u5b8c\u6574\u652f\u6301\uff0c\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2023/01/17/Ai05UtVk_image%20%2841%29.png",alt:"\u8702\u6548 2.0 \u5fae\u670d\u52a1\u7f51\u5173\u67b6\u6784"})),(0,a.kt)("p",null,"\u7f51\u5173\u67b6\u6784\u7684\u6838\u5fc3\u90e8\u5206\u5219\u662f\u56fe\u4e2d\u6700\u4e0b\u65b9\u7684 APISIX\uff0c\u4e0a\u5c42\u7684 istio-apisix-translator \u5219\u5145\u5f53\u7c7b\u4f3c Istio \u67b6\u6784\u4e2d\u7684 Pilot \u89d2\u8272\uff0c\u5c06 Instance \u4e0e CR \u6570\u636e\u6574\u5408\u540e\uff0c\u501f\u7531 APISIX Admin API \u63a8\u9001\u81f3 APISIX \u4e2d\uff0c\u5b9e\u4f8b\u5219\u662f\u5bf9\u63a5\u5230\u5185\u90e8\u4e1a\u52a1\u7684 Atlas \u53d1\u73b0\u4e2d\u5fc3\u3002\u56e0\u6b64\uff0c\u65e0\u8bba\u662f\u8bbf\u95ee\u89c4\u5219\u53d1\u751f\u53d8\u5316\u8fd8\u662f Atlas \u7684\u6570\u636e\u6e90\u53d1\u751f\u53d8\u5316\uff0c\u90fd\u53ef\u4ee5\u5c06\u8fd9\u4efd\u6570\u636e\u53d8\u5316\u8f6c\u6362\u6210 APISIX \u7684\u6570\u636e\u63a8\u5230 APISIX \u4e2d\u3002\u76ee\u524d\u5168\u94fe\u8def\u90fd\u662f\u57fa\u4e8e Watch \u673a\u5236\u4fdd\u8bc1\u6570\u636e\u53d8\u5316\u7684\u5b9e\u65f6\u5904\u7406\uff0c\u56e0\u6b64\u5728\u5b9e\u9645\u5e94\u7528\u573a\u666f\u4e0b\uff0c\u57fa\u672c\u53ef\u4ee5\u8fbe\u5230\u6570\u636e\u53d8\u5316\u7684\u6beb\u79d2\u7ea7\u751f\u6548\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5f53\u7136\uff0c\u5728\u4f7f\u7528 APISIX \u7684\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u4e5f\u9047\u5230\u4e86\u51e0\u5904\u95ee\u9898\u3002\u4f46\u5747\u5df2\u89e3\u51b3\u5e76\u5c06\u7ed3\u679c\u540c\u6b65\u7ed9\u4e86\u793e\u533a\u8fdb\u884c\u53cd\u9988\u3002")),(0,a.kt)("p",null,"\u7b2c\u4e00\u4e2a\u95ee\u9898\u5c31\u662f\u5728 APISIX \u4f7f\u7528\u8bc1\u4e66\u5bf9\u63a5 etcd \u65f6\uff0c\u5982\u679c APISIX \u8282\u70b9\u8f83\u591a\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4 APISIX Admin API \u63a5\u53e3\u54cd\u5e94\u975e\u5e38\u6162\u3002\u8fd9\u4e2a\u95ee\u9898\u7684\u539f\u56e0\u662f\u56e0\u4e3a\u76ee\u524d etcd \u5b58\u5728\u4e00\u4e2a\u5173\u4e8e HTTP/2 \u7684 BUG\u3002\u5982\u679c\u901a\u8fc7 HTTPS \u64cd\u4f5c etcd\uff08HTTP \u4e0d\u53d7\u5f71\u54cd\uff09\uff0cHTTP/2 \u7684\u8fde\u63a5\u6570\u4e0a\u9650\u4e3a Golang \u9ed8\u8ba4\u7684 250 \u4e2a\u3002\u800c APISIX \u7684\u63a7\u5236\u9762\u548c Istio \u67b6\u6784\u7684\u63a7\u5236\u9762\u6709\u533a\u522b\uff0cAPISIX \u8282\u70b9\u662f\u76f4\u8fde etcd\uff0c\u5f53 APISIX \u6570\u636e\u9762\u8282\u70b9\u6570\u8f83\u591a\u65f6\uff0c\u4e00\u65e6\u6240\u6709 APISIX \u8282\u70b9\u4e0e etcd \u8fde\u63a5\u6570\u8d85\u8fc7\u8fd9\u4e2a\u4e0a\u9650\uff0c\u5219 APISIX \u7684\u63a5\u53e3\u54cd\u5e94\u4f1a\u975e\u5e38\u7684\u6162\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u4e5f\u5728 etcd \u548c APISIX \u7684\u793e\u533a\u5747\u8fdb\u884c\u4e86\u53cd\u9988\uff0c\u540e\u7eed\u4e5f\u901a\u8fc7\u5347\u7ea7\u7248\u672c\uff08etcd 3.4 \u5347\u7ea7\u5230 3.4.20 \u53ca\u4ee5\u4e0a\uff0cetcd 3.5 \u5347\u7ea7\u5230 3.5.5 \u53ca\u4ee5\u4e0a\uff09\u89e3\u51b3\u4e86\u8fd9\u4e2a\u95ee\u9898\u3002\u540c\u65f6\u6211\u4eec\u4e5f\u5df2\u5c06\u8fd9\u4e2a\u7ed3\u679c\u540c\u6b65\u5230\u4e86 APISIX \u793e\u533a\u5b98\u7f51 Q&A \u6587\u6863\u4e2d\uff0c\u65b9\u4fbf\u540e\u7eed\u7528\u6237\u9047\u5230\u540c\u6837\u95ee\u9898\u65f6\uff0c\u53ef\u4ee5\u6709\u6240\u53c2\u8003\u3002"),(0,a.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u95ee\u9898\u5c31\u662f\u5728\u4f7f\u7528 APISIX \u7684\u8fc7\u7a0b\u4e2d\u4f1a\u9047\u5230\u6027\u80fd\u6296\u52a8\u7684\u95ee\u9898\u3002"),(0,a.kt)("p",null,"\u9996\u5148\u662f\u4f1a\u51fa\u73b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"499")," \u54cd\u5e94\u6296\u52a8\uff0c\u8fd9\u4e2a\u95ee\u9898\u4e3b\u8981\u51fa\u73b0\u5728\u8fde\u7eed\u4e24\u6b21\u4ee5\u4e0a\u8fc7\u5feb\u7684 post \u8bf7\u6c42\uff08\u4e5f\u4e0d\u6b62 post\uff09\u7684\u573a\u666f\u4e0b\u3002\u8fd9\u79cd\u60c5\u51b5\u662f NGINX \u8ba4\u5b9a\u4e3a\u4e0d\u5b89\u5168\u7684\u8fde\u63a5\uff0c\u5219\u4e3b\u52a8\u65ad\u5f00\u4e86\u5ba2\u6237\u7aef\u7684\u8fde\u63a5\u3002\u4e3a\u4e86\u5904\u7406\u8fd9\u4e2a\u95ee\u9898\uff0c\u53ea\u9700\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy_ignore_client_abort")," \u7684\u914d\u7f6e\u8c03\u6574\u4e3a on \u5373\u53ef\u3002"),(0,a.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0c\u5f53 APISIX Admin API \u63a5\u53e3\u8bf7\u6c42\u5bc6\u96c6\u65f6\uff0c\u4e5f\u4f1a\u51fa\u73b0 APISIX \u6570\u636e\u9762\u5c11\u90e8\u5206\u54cd\u5e94\u8d85\u65f6\u7684\u72b6\u51b5\u3002\u8fd9\u4e2a\u4e3b\u8981\u662f\u56e0\u4e3a istio-apisix-translator \u5728\u91cd\u542f\u65f6\uff0c\u4f1a\u5c06 Atlas\u3001Istio CR \u6570\u636e\u805a\u5408\uff0c\u5168\u91cf\u540c\u6b65\u81f3 APISIX \u4e2d\uff0c\u5927\u91cf\u8bf7\u6c42\u5f15\u53d1 APISIX \u6570\u636e\u53d8\u66f4\uff0cAPISIX \u6570\u636e\u9762\u5bc6\u96c6\u7684\u540c\u6b65\u53d8\u66f4\u5bfc\u81f4\u5c0f\u90e8\u5206\u54cd\u5e94\u8d85\u65f6\u3002\u4e3a\u6b64\uff0c\u6211\u4eec\u5f15\u5165\u534f\u7a0b\u6c60\u548c\u4ee4\u724c\u6876\u9650\u6d41\uff0c\u51cf\u5c11 APISIX \u6570\u636e\u5bc6\u96c6\u53d8\u66f4\u7684\u573a\u666f\u6765\u5e94\u5bf9\u6b64\u95ee\u9898\u3002"),(0,a.kt)("h2",{id:"\u603b\u7ed3\u4e0e\u53d1\u5c55"},"\u603b\u7ed3\u4e0e\u53d1\u5c55"),(0,a.kt)("p",null,"\u9a6c\u8702\u7a9d\u5f53\u524d\u662f\u57fa\u4e8e Kubernetes \u5bb9\u5668\u90e8\u7f72\u4ee5\u53ca\u57fa\u4e8e Consul \u7684\u673a\u5668\u90e8\u7f72\u573a\u666f\uff0c\u81ea\u5efa Atlas \u670d\u52a1\u53d1\u73b0\u4e2d\u5fc3\uff0c\u540c\u65f6\uff0c\u5728 Java \u751f\u6001\u3001\u5fae\u670d\u52a1\u7f51\u5173\uff0c\u5fae\u670d\u52a1\u4f53\u7cfb\u7684\u6d41\u91cf\u6cf3\u9053\uff0c\u4ee5\u53ca\u76d1\u63a7\u4f53\u7cfb\u505a\u5bf9\u63a5\u548c\u9002\u914d\u3002"),(0,a.kt)("p",null,"\u5728\u5fae\u670d\u52a1\u7f51\u5173\u524d\u671f\uff0c\u662f\u57fa\u4e8e Istio 1.5.10 \u5bf9 Pilot \u4e8c\u6b21\u5f00\u53d1\uff0c\u4e5f\u5728\u7f51\u5173\u4fa7\u652f\u6301\u975e\u5bb9\u5668\u90e8\u7f72\u573a\u666f\u3002\u76ee\u524d\u9636\u6bb5\u5219\u662f\u4fdd\u6301\u4e86 Istio+Envoy \u67b6\u6784\u4e0e APISIX \u67b6\u6784\u540c\u65f6\u652f\u6301\uff0c\u901a\u8fc7\u5f15\u5165\u5916\u90e8\u670d\u52a1\u7ec4\u4ef6\uff0c\u8ba9 APISIX \u4e5f\u590d\u7528 Istio CRD \u8d44\u6e90\u3002"),(0,a.kt)("p",null,"\u4ece\u7f51\u5173\u53d1\u5c55\u89c6\u89d2\u6765\u770b\uff0c\u672a\u6765\u6211\u4eec\u4e5f\u4f1a\u8ddf\u968f\u7f51\u5173\u7684\u4e00\u4e9b\u8d8b\u52bf\u3002\u6bd4\u5982\u73b0\u5728\u5f88\u591a\u4ea7\u54c1\u90fd\u5f00\u59cb\u652f\u6301 Gateway API\uff0c\u50cf APISIX Ingress\u3001Traefik\u3001Contour \u7b49\uff1b\u540c\u65f6\u7f51\u5173\u7684\u52a8\u6001\u5316\u914d\u7f6e\u4e5f\u662f\u672a\u6765\u975e\u5e38\u660e\u663e\u7684\u8d8b\u52bf\uff0c\u5bf9\u4e8e\u8fd0\u7ef4\u6216\u8005\u57fa\u7840\u7814\u53d1\u7684\u540c\u5b66\u6765\u8bf4\uff0c\u5728\u540e\u7eed\u8003\u8651\u7f51\u5173\u67b6\u6784\u7684\u9009\u578b\u548c\u8fed\u4ee3\u65f6\uff0c\u4e5f\u53ef\u4ee5\u66f4\u591a\u5173\u6ce8\u7f51\u5173\u52a8\u6001\u914d\u7f6e\u7684\u65b9\u9762\u3002"))}I.isMDXComponent=!0}}]);