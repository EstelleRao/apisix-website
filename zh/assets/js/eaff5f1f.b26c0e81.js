"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9909],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=c(n),k=r,m=h["".concat(o,".").concat(k)]||h[k]||s[k]||p;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,l=new Array(p);l[0]=h;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<p;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},95980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var a=n(25773),r=(n(27378),n(35318));const p={title:"API \u7f51\u5173 Apache APISIX \u96c6\u6210 CNCF OpenFunction",authors:[{name:"\u674e\u4ece\u65fa",title:"Author",url:"https://github.com/jackkkkklee",image_url:"https://github.com/jackkkkklee.png"}],keywords:["API \u7f51\u5173","Apache APISIX","Kubernetes","CNCF","OpenFunction","Serverless"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX openfunction \u63d2\u4ef6\u7684\u529f\u80fd\u4e0e\u4f7f\u7528\u6b65\u9aa4\uff0c\u4e3a APISIX \u7684\u65e0\u670d\u52a1\u9886\u57df\u529f\u80fd\u518d\u6dfb\u4e00\u5458\u3002",tags:["Plugins","Ecosystem"],image:"https://static.apiseven.com/2022/09/20/63296a9c05e59.png"},l=void 0,i={permalink:"/zh/blog/2022/09/20/apisix-integrate-cncf-openfunction",source:"@site/blog/2022/09/20/apisix-integrate-cncf-openfunction.md",title:"API \u7f51\u5173 Apache APISIX \u96c6\u6210 CNCF OpenFunction",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX openfunction \u63d2\u4ef6\u7684\u529f\u80fd\u4e0e\u4f7f\u7528\u6b65\u9aa4\uff0c\u4e3a APISIX \u7684\u65e0\u670d\u52a1\u9886\u57df\u529f\u80fd\u518d\u6dfb\u4e00\u5458\u3002",date:"2022-09-20T00:00:00.000Z",formattedDate:"2022\u5e749\u670820\u65e5",tags:[{label:"Plugins",permalink:"/zh/blog/tags/plugins"},{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"}],readingTime:7.18,truncated:!0,authors:[{name:"\u674e\u4ece\u65fa",title:"Author",url:"https://github.com/jackkkkklee",image_url:"https://github.com/jackkkkklee.png",imageURL:"https://github.com/jackkkkklee.png"}],prevItem:{title:"\u4e3a\u4ec0\u4e48\u8bf4 Apache APISIX \u662f\u6700\u597d\u7684 API \u7f51\u5173\uff1f",permalink:"/zh/blog/2022/09/27/why-apache-apisix-is-best-apigateway"},nextItem:{title:"API \u7f51\u5173 Apache APISIX \u96c6\u6210 Elasticsearch \u5b9e\u73b0\u5b9e\u65f6\u65e5\u5fd7\u76d1\u63a7",permalink:"/zh/blog/2022/09/15/apache-apisix-integrat-with-elasticsearch-for-logger"}},o={authorsImageUrls:[void 0]},c=[{value:"Apache APISIX",id:"apache-apisix",children:[],level:2},{value:"OpenFunction",id:"openfunction",children:[],level:2},{value:"\u96c6\u6210\u539f\u7406",id:"\u96c6\u6210\u539f\u7406",children:[],level:2},{value:"\u5982\u4f55\u4f7f\u7528\u63d2\u4ef6",id:"\u5982\u4f55\u4f7f\u7528\u63d2\u4ef6",children:[{value:"\u6b65\u9aa4\u4e00\uff1a\u5b89\u88c5\u4e0e\u8fd0\u884c APISIX",id:"\u6b65\u9aa4\u4e00\u5b89\u88c5\u4e0e\u8fd0\u884c-apisix",children:[],level:3},{value:"\u6b65\u9aa4\u4e8c\uff1a \u901a\u8fc7 Helm Chart \u5b89\u88c5 OpenFunction",id:"\u6b65\u9aa4\u4e8c-\u901a\u8fc7-helm-chart-\u5b89\u88c5-openfunction",children:[],level:3},{value:"\u6b65\u9aa4\u4e09\uff1a\u521b\u5efa\u5e76\u63a8\u9001\u51fd\u6570",id:"\u6b65\u9aa4\u4e09\u521b\u5efa\u5e76\u63a8\u9001\u51fd\u6570",children:[],level:3},{value:"\u6b65\u9aa4\u56db\uff1a\u542f\u7528\u63d2\u4ef6",id:"\u6b65\u9aa4\u56db\u542f\u7528\u63d2\u4ef6",children:[],level:3},{value:"\u6b65\u9aa4\u4e94\uff1a\u53d1\u9001\u8bf7\u6c42",id:"\u6b65\u9aa4\u4e94\u53d1\u9001\u8bf7\u6c42",children:[],level:3}],level:2},{value:"\u5173\u95ed\u63d2\u4ef6",id:"\u5173\u95ed\u63d2\u4ef6",children:[],level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[],level:2}],u={toc:c};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4f5c\u8005\u674e\u4ece\u65fa\uff0c\u5f00\u6e90\u7231\u597d\u8005\u4e0e\u4e91\u539f\u751f\u6280\u672f\u7231\u597d\u8005\uff0c\u76ee\u524d\u4e8e\u4f50\u6cbb\u4e9a\u7406\u5de5\u5b66\u9662\u6df1\u5733\u6821\u533a\u8fdb\u4fee\u7855\u58eb\u5b66\u4f4d\u3002\u672c\u7bc7\u6587\u7ae0\u662f\u5728\u53c2\u4e0e APISIX \u5f00\u6e90\u4e4b\u590f\u9879\u76ee\u300c\u96c6\u6210 OpenFunction \u81f3 Apache APISIX\u300d\u7684\u529f\u80fd\u5448\u73b0\uff0c\u5e0c\u671b\u6b64\u529f\u80fd\u53ef\u4ee5\u8ba9\u4f60\u5728\u4f7f\u7528 APISIX \u8fdb\u884c\u6269\u5c55\u65f6\u66f4\u52a0\u4fbf\u6377\u3002")),(0,r.kt)("p",null,"\u5728\u65e0\u670d\u52a1\u65f6\u4ee3\uff0cAPI \u7f51\u5173\u4f9d\u65e7\u662f\u7ba1\u7406\u548c\u5145\u5206\u5229\u7528\u65e0\u670d\u52a1\u5668\u5e73\u53f0\u7684\u5173\u952e\u3002\u56e0\u6b64\uff0cApache APISIX \u793e\u533a\u4e5f\u7d27\u8ddf\u8d8b\u52bf\uff0c\u5728\u8fc7\u53bb\u7684\u4e00\u5e74\u591a\u65f6\u95f4\u5185\u96c6\u6210\u4e86\u65e0\u670d\u52a1\u5668\u63d0\u4f9b\u5546\uff0c\u5982 ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/lambda/"},"AWS Lambda")," \u548c ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-functions/functions-overview"},"Azure Functions"),"\uff0c\u4ee5\u53ca\u5f00\u6e90\u7684\u65e0\u670d\u52a1\u5e73\u53f0 ",(0,r.kt)("a",{parentName:"p",href:"https://openwhisk.apache.org/"},"Apache OpenWhisk")," \u7b49\u3002"),(0,r.kt)("p",null,"\u672c\u6708\uff0cAPISIX \u53c8\u65b0\u589e\u4e86\u4e0d\u5c11\u751f\u6001\u63d2\u4ef6\uff0c\u5176\u4e2d\u5c31\u5305\u62ec\u4e0e ",(0,r.kt)("a",{parentName:"p",href:"https://openfunction.dev/"},"OpenFunction")," \u96c6\u6210\u7684\u65e0\u670d\u52a1\u63d2\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"openfunction"),"\u3002\u672c\u6587\u5c06\u4ecb\u7ecd Apache APISIX \u65b0\u7684\u65e0\u670d\u52a1\u63d2\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"openfunction"),"\uff0c\u5e76\u5e26\u6765\u66f4\u591a\u96c6\u6210\u7ec6\u8282\u3002"),(0,r.kt)("h2",{id:"apache-apisix"},"Apache APISIX"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/"},"Apache APISIX")," \u662f\u4e00\u4e2a\u52a8\u6001\u3001\u5b9e\u65f6\u3001\u9ad8\u6027\u80fd\u7684 API \u7f51\u5173\uff0c\u63d0\u4f9b\u8d1f\u8f7d\u5747\u8861\u3001\u52a8\u6001\u4e0a\u6e38\u3001\u7070\u5ea6\u53d1\u5e03\u3001\u670d\u52a1\u7194\u65ad\u3001\u8eab\u4efd\u8ba4\u8bc1\u3001\u53ef\u89c2\u6d4b\u6027\u7b49\u4e30\u5bcc\u7684\u6d41\u91cf\u7ba1\u7406\u529f\u80fd\u3002Apache APISIX \u4e0d\u4ec5\u652f\u6301\u63d2\u4ef6\u52a8\u6001\u53d8\u66f4\u548c\u70ed\u63d2\u62d4\uff0c\u800c\u4e14\u62e5\u6709\u4f17\u591a\u5b9e\u7528\u7684\u63d2\u4ef6\u3002"),(0,r.kt)("h2",{id:"openfunction"},"OpenFunction"),(0,r.kt)("p",null,"OpenFunction \u662f\u4e00\u4e2a\u4e91\u539f\u751f\u7684\u5f00\u6e90 FaaS \u5e73\u53f0\uff0c\u65e8\u5728\u8ba9\u7528\u6237\u4e13\u6ce8\u4e8e\u81ea\u5df1\u7684\u4e1a\u52a1\u903b\u8f91\uff0c\u800c\u4e0d\u5fc5\u7ef4\u62a4\u5e95\u5c42\u8fd0\u884c\u65f6\u73af\u5883\u548c\u57fa\u7840\u8bbe\u65bd\u3002"),(0,r.kt)("p",null,"\u6838\u5fc3\u529f\u80fd\u5305\u62ec\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e0e\u4e91\u63d0\u4f9b\u5546\u7684 BaaS \u89e3\u8026"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u63d2\u5165\u7684\u67b6\u6784\uff0c\u5141\u8bb8\u591a\u4e2a\u51fd\u6570\u8fd0\u884c\u65f6"),(0,r.kt)("li",{parentName:"ul"},"\u540c\u65f6\u652f\u6301\u540c\u6b65\u548c\u5f02\u6b65\u51fd\u6570"),(0,r.kt)("li",{parentName:"ul"},"\u72ec\u7279\u7684\u5f02\u6b65\u51fd\u6570\u652f\u6301\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u6765\u81ea\u4e8b\u4ef6\u6e90\u7684\u4e8b\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u76f4\u63a5\u4ece\u51fd\u6570\u6e90\u4ee3\u7801\u751f\u6210\u517c\u5bb9 OCI \u7684\u5bb9\u5668\u955c\u50cf\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7075\u6d3b\u7684\u4ece 0 \u5230 n \u7684\u81ea\u52a8\u7f29\u653e"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u57fa\u4e8e\u4e8b\u4ef6\u6e90\u7684\u7279\u5b9a\u6307\u6807\u7684\u9ad8\u7ea7\u5f02\u6b65\u529f\u80fd\u81ea\u52a8\u7f29\u653e"),(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u5f15\u5165 ",(0,r.kt)("a",{parentName:"li",href:"https://dapr.io/"},"Dapr")," \u7b80\u5316\u540c\u6b65\u548c\u5f02\u6b65\u529f\u80fd\u7684 BaaS \u96c6\u6210"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gateway-api.sigs.k8s.io/"},"K8s Gateway API")," \u63d0\u4f9b\u7684\u9ad8\u7ea7\u51fd\u6570\u5165\u53e3\u548c\u6d41\u91cf\u7ba1\u7406\uff08\u8fdb\u884c\u4e2d\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u7075\u6d3b\u6613\u7528\u7684\u4e8b\u4ef6\u7ba1\u7406\u6846\u67b6")),(0,r.kt)("h2",{id:"\u96c6\u6210\u539f\u7406"},"\u96c6\u6210\u539f\u7406"),(0,r.kt)("p",null,"\u8be5\u63d2\u4ef6\u4f1a\u5c06\u6b63\u5728\u8fdb\u884c\u7684\u8bf7\u6c42\u8f6c\u53d1\u5230\u7528\u6237\u5b9a\u4e49\u7684\u7279\u5b9a URI\uff0c\u5e76\u63d0\u4f9b\u76f8\u5173\u7684\u6388\u6743\u7ec6\u8282\u3001\u8bf7\u6c42\u5934\u3001\u8bf7\u6c42\u6b63\u6587\u548c\u67e5\u8be2\u5b57\u7b26\u4e32\uff0c\u7136\u540e\u5c06\u54cd\u5e94\u8fd4\u56de\u7ed9\u539f\u59cb\u7684\u5ba2\u6237\u7aef\u3002"),(0,r.kt)("p",null,"\u65e0\u670d\u52a1\u5177\u6709\u9ad8\u5ea6\u53ef\u6269\u5c55\u548c\u6210\u672c\u4f4e\u7b49\u4f18\u52bf\uff0c\u4f7f\u7528\u8fd9\u79cd\u65b9\u5f0f\u90e8\u7f72\u4e1a\u52a1\u670d\u52a1\u80fd\u591f\u6781\u5927\u964d\u4f4e\u8d44\u6e90\u4f7f\u7528\u548c\u6295\u5165\u6210\u672c\u3002\u5982\u679c\u4f60\u6b63\u5728\u4f7f\u7528 OpenFunction \u4f5c\u4e3a\u65e0\u670d\u52a1\u5e73\u53f0\uff0c\u4f60\u5c31\u53ef\u4ee5\u4f7f\u7528 Apache APISIX \u53bb\u4ee3\u7406\u8fd9\u4e9b\u51fd\u6570\u7684\u8bf7\u6c42\uff0c\u4e3a\u51fd\u6570\u8bf7\u6c42\u8ffd\u52a0\u670d\u52a1\u6cbb\u7406\u7684\u80fd\u529b\u3002"),(0,r.kt)("p",null,"\u6b63\u5982\u524d\u6587\u63d0\u5230\u7684 OpenFunction \u6838\u5fc3\u529f\u80fd\uff0c",(0,r.kt)("a",{parentName:"p",href:"https://gateway-api.sigs.k8s.io/"},"K8s Gateway API")," \u63d0\u4f9b\u4e86\u51fd\u6570\u7684\u5165\u53e3\u3002OpenFunction \u7684\u8ba4\u8bc1\u65b9\u5f0f\u53d6\u51b3\u4e8e K8s \u7f51\u5173\uff0c\u4e14\u968f\u7f51\u5173\u7684\u9009\u62e9\u800c\u53d8\u5316\u3002\u56e0\u6b64\u8be5\u63d2\u4ef6\u53ea\u652f\u6301\u6807\u51c6\u7684 Basic Auth \u8ba4\u8bc1\u65b9\u5f0f\u3002"),(0,r.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528\u63d2\u4ef6"},"\u5982\u4f55\u4f7f\u7528\u63d2\u4ef6"),(0,r.kt)("h3",{id:"\u6b65\u9aa4\u4e00\u5b89\u88c5\u4e0e\u8fd0\u884c-apisix"},"\u6b65\u9aa4\u4e00\uff1a\u5b89\u88c5\u4e0e\u8fd0\u884c APISIX"),(0,r.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u63a8\u8350\u4f7f\u7528 Docker \u5feb\u901f\u5b89\u88c5 APISIX\uff0c\u56e0\u6b64\u4f60\u9700\u8981\u9884\u5148\u5b89\u88c5 ",(0,r.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," \u548c ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"Docker Compose"),"\u3002"),(0,r.kt)("p",null,"\u5b89\u88c5\u8be6\u60c5\u4ee5\u53ca\u66f4\u591a\u5b89\u88c5\u65b9\u5f0f\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/apisix/installation-guide/"},"APISIX \u5b89\u88c5\u6307\u5357"),"\uff0c\u540e\u7eed\u7684\u4f7f\u7528\u6b65\u9aa4\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/apisix/getting-started/"},"\u5feb\u901f\u5165\u95e8\u6307\u5357"),"\u3002"),(0,r.kt)("h3",{id:"\u6b65\u9aa4\u4e8c-\u901a\u8fc7-helm-chart-\u5b89\u88c5-openfunction"},"\u6b65\u9aa4\u4e8c\uff1a \u901a\u8fc7 Helm Chart \u5b89\u88c5 OpenFunction"),(0,r.kt)("p",null,"\u8bf7\u786e\u4fdd\u5f53\u524d\u73af\u5883\u4e2d\u5df2\u7ecf\u5b89\u88c5\u5bf9\u5e94\u7248\u672c\u7684 Kubernetes \u96c6\u7fa4\u3002\u8be6\u60c5\u53ef\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://openfunction.dev/docs/getting-started/installation/"},"OpenFunction \u5b89\u88c5\u6307\u5357")," \u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u6dfb\u52a0 OpenFunction \u5230 Chart \u5b58\u50a8\u5e93\nhelm repo add openfunction https://openfunction.github.io/charts/\nhelm repo update\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5b89\u88c5 OpenFunction chart\nkubectl create namespace openfunction\nhelm install openfunction openfunction/openfunction -n openfunction\n")),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u6765\u9a8c\u8bc1 OpenFunction \u662f\u5426\u5df2\u7ecf\u5b89\u88c5\u6210\u529f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pods --namespace openfunction\n")),(0,r.kt)("h3",{id:"\u6b65\u9aa4\u4e09\u521b\u5efa\u5e76\u63a8\u9001\u51fd\u6570"},"\u6b65\u9aa4\u4e09\uff1a\u521b\u5efa\u5e76\u63a8\u9001\u51fd\u6570"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFunction/samples"},"OpenFunction \u5b98\u65b9\u793a\u4f8b")," \u521b\u5efa\u51fd\u6570\u3002\u6784\u5efa\u51fd\u6570\u65f6\uff0c\u4f60\u9700\u8981\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u4e3a\u5bb9\u5668\u4ed3\u5e93\u751f\u6210\u4e00\u4e2a\u5bc6\u94a5\uff0c\u624d\u53ef\u4ee5\u5c06\u51fd\u6570\u5bb9\u5668\u955c\u50cf\u63a8\u9001\u5230\u5bb9\u5668\u4ed3\u5e93 ( \u4f8b\u5982 Docker Hub \u6216 Quay.io\uff09\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"REGISTRY_SERVER=https://index.docker.io/v1/ REGISTRY_USER=${your_registry_user} REGISTRY_PASSWORD=${your_registry_password}\nkubectl create secret docker-registry push-secret \\\n    --docker-server=$REGISTRY_SERVER \\\n    --docker-username=$REGISTRY_USER \\\n    --docker-password=$REGISTRY_PASSWORD\n")),(0,r.kt)("h3",{id:"\u6b65\u9aa4\u56db\u542f\u7528\u63d2\u4ef6"},"\u6b65\u9aa4\u56db\uff1a\u542f\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5728\u6307\u5b9a\u8def\u7531\u4e2d\u542f\u7528\u8be5\u63d2\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {\n        "openfunction": {\n            "function_uri": "http://localhost:30583/default/function-sample/test",\n            "authorization": {\n                "service_token": "test:test"\n            }\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"9180"),"\u662f APISIX admin API \u66b4\u9732\u7684\u7aef\u53e3 \uff0c\u800c ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:30583")," \u662f\u5047\u8bbe\u672c\u6b21\u901a\u8fc7 NodePort \u65b9\u5f0f\u6620\u5c04\u7684\u7f51\u5173\u5165\u53e3\u3002"),(0,r.kt)("p",null,"\u66f4\u591a\u5173\u4e8e OpenFunction \u51fd\u6570\u5165\u53e3\u4ee5\u53ca\u5982\u4f55\u8bbe\u7f6e\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://openfunction.dev/docs/concepts/networking/function-entrypoints/"},"Function Entrypoints | OpenFunction"),"\u3002"),(0,r.kt)("h3",{id:"\u6b65\u9aa4\u4e94\u53d1\u9001\u8bf7\u6c42"},"\u6b65\u9aa4\u4e94\uff1a\u53d1\u9001\u8bf7\u6c42"),(0,r.kt)("p",null,"\u63d2\u4ef6\u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u4f60\u53ef\u4ee5\u5411\u8def\u7531\u53d1\u9001\u4e00\u4e2a\u8bf7\u6c42\uff0c\u5b83\u4f1a\u8c03\u7528\u914d\u7f6e\u597d\u7684\u51fd\u6570\u3002\u5b98\u65b9\u7684\u793a\u4f8b\u51fd\u6570 hello-world \u4f1a\u8f93\u51fa \u201cHello, {\u51fd\u6570 uri \u4e2d\u7684\u540e\u7f00\u90e8\u5206}!\\n\u201d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# 9080 \u662f APISIX \u9664 admin API \u4ee5\u5916\u66b4\u9732\u7684\u7aef\u53e3\ncurl -i http://127.0.0.1:9080/hello\n")),(0,r.kt)("p",null,"\u51fd\u6570\u8fd4\u56de\u7684\u54cd\u5e94\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"hello, test!\n")),(0,r.kt)("h2",{id:"\u5173\u95ed\u63d2\u4ef6"},"\u5173\u95ed\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5f53\u4f60\u4e0d\u9700\u8981\u518d\u4f7f\u7528\u8be5\u63d2\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ece\u8def\u7531\u914d\u7f6e\u4e2d\u53bb\u9664 ",(0,r.kt)("inlineCode",{parentName:"p"},"openfunction")," \u63d2\u4ef6\u6765\u7981\u7528\u5b83\u7684\u529f\u80fd\uff08\u6ce8\u610f\uff0c\u6309\u7167 Apache APISIX \u8def\u7531 Schema \u8981\u6c42\uff0c\u5728\u53bb\u9664\u8be5\u63d2\u4ef6\u540e\uff0c\u5982\u679c\u8be5\u8def\u7531\u6ca1\u6709\u5176\u4ed6\u63d2\u4ef6\uff0c\u4f60\u5fc5\u987b\u4e3a\u8be5\u8def\u7531\u914d\u7f6e\u4e00\u4e2a\u4e0a\u6e38\u5bf9\u8c61\uff09\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n\n    "uri": "/hello",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.kt)("p",null,"\u672c\u6587\u4e3a\u5927\u5bb6\u4ecb\u7ecd\u4e86 Apache APISIX ",(0,r.kt)("inlineCode",{parentName:"p"},"openfunction")," \u63d2\u4ef6\u7684\u529f\u80fd\u4e0e\u4f7f\u7528\u6b65\u9aa4\uff0c\u66f4\u591a\u5173\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"openfunction")," \u63d2\u4ef6\u8bf4\u660e\u548c\u5b8c\u6574\u914d\u7f6e\u5217\u8868\uff0c\u53ef\u4ee5\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/apisix/next/plugins/openfunction/"},"\u5b98\u65b9\u6587\u6863"),"\u3002"),(0,r.kt)("p",null,"\u76ee\u524d\uff0cAPISIX \u793e\u533a\u4e5f\u5728\u5f00\u53d1\u5176\u4ed6 Serverless \u63d2\u4ef6\u4ee5\u4fbf\u4e0e\u66f4\u591a\u4e91\u670d\u52a1\u8fdb\u884c\u96c6\u6210\u3002\u5982\u679c\u4f60\u5bf9\u6b64\u7c7b\u96c6\u6210\u9879\u76ee\u611f\u5174\u8da3\uff0c\u4e5f\u6b22\u8fce\u968f\u65f6\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/discussions"},"GitHub Discussions")," \u4e2d\u53d1\u8d77\u8ba8\u8bba\uff0c\u6216\u901a\u8fc7",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/general/join"},"\u90ae\u4ef6\u5217\u8868"),"\u8fdb\u884c\u4ea4\u6d41\u3002"))}s.isMDXComponent=!0}}]);