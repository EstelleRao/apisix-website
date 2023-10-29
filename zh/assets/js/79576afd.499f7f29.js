"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1862],{35318:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>h});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),u=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},o=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),m=u(a),h=r,g=m["".concat(c,".").concat(h)]||m[h]||s[h]||l;return a?n.createElement(g,p(p({ref:t},o),{},{components:a})):n.createElement(g,p({ref:t},o))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var u=2;u<l;u++)p[u]=a[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},74530:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=a(25773),r=(a(27378),a(35318));const l={title:"\u591a\u534f\u8bae\u63a5\u5165\u6846\u67b6 xRPC \u7ec6\u8282\u524d\u77bb",authors:[{name:"\u5e05\u8fdb\u8d85",title:"Author",url:"https://github.com/shuaijinchao",image_url:"https://avatars.githubusercontent.com/u/8529452?v=4"},{name:"\u82cf\u94b0",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4"}],keywords:["\u591a\u534f\u8bae","Apache APISIX","Java","\u591a\u8bed\u8a00","\u751f\u6001"],description:"\u672c\u6587\u4e3a\u5927\u5bb6\u5e26\u6765\u4e86 Apache APISIX \u5373\u5c06\u53d1\u5e03\u7684 xRPC \u6846\u67b6\u4ee5\u53ca\u76f8\u5173\u7ec6\u8282\uff0c\u540c\u65f6\u4ecb\u7ecd\u4e86 Apache APISIX \u5728\u591a\u8bed\u8a00\u5f00\u53d1\u652f\u6301\u4e2d\u7684\u7ec6\u8282\u5c55\u793a\u3002",tags:["Ecosystem"]},p=void 0,i={permalink:"/zh/blog/2022/01/21/apisix-xrpc-details-and-miltilingual",source:"@site/blog/2022/01/21/apisix-xrpc-details-and-miltilingual.md",title:"\u591a\u534f\u8bae\u63a5\u5165\u6846\u67b6 xRPC \u7ec6\u8282\u524d\u77bb",description:"\u672c\u6587\u4e3a\u5927\u5bb6\u5e26\u6765\u4e86 Apache APISIX \u5373\u5c06\u53d1\u5e03\u7684 xRPC \u6846\u67b6\u4ee5\u53ca\u76f8\u5173\u7ec6\u8282\uff0c\u540c\u65f6\u4ecb\u7ecd\u4e86 Apache APISIX \u5728\u591a\u8bed\u8a00\u5f00\u53d1\u652f\u6301\u4e2d\u7684\u7ec6\u8282\u5c55\u793a\u3002",date:"2022-01-21T00:00:00.000Z",formattedDate:"2022\u5e741\u670821\u65e5",tags:[{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"}],readingTime:11.33,truncated:!0,authors:[{name:"\u5e05\u8fdb\u8d85",title:"Author",url:"https://github.com/shuaijinchao",image_url:"https://avatars.githubusercontent.com/u/8529452?v=4",imageURL:"https://avatars.githubusercontent.com/u/8529452?v=4"},{name:"\u82cf\u94b0",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4",imageURL:"https://avatars.githubusercontent.com/u/39793568?v=4"}],prevItem:{title:"Apache APISIX \u96c6\u6210 HashiCorp Vault\uff0c\u751f\u6001\u7cfb\u7edf\u518d\u6dfb\u4e00\u5458",permalink:"/zh/blog/2022/01/21/apisix-hashicorp-vault-integration"},nextItem:{title:"CDN \u4e1a\u52a1\u573a\u666f\u4e0b\uff0c\u53c8\u62cd\u4e91\u7684\u516c\u7f51\u7f51\u5173\u573a\u666f\u5b9e\u8df5",permalink:"/zh/blog/2022/01/20/upyun-public-gateway-usecase"}},c={authorsImageUrls:[void 0,void 0]},u=[{value:"\u591a\u534f\u8bae\u4ee3\u7406",id:"\u591a\u534f\u8bae\u4ee3\u7406",children:[{value:"\u4e3a\u4ec0\u4e48\u8981\u5f00\u53d1 xRPC \u6846\u67b6",id:"\u4e3a\u4ec0\u4e48\u8981\u5f00\u53d1-xrpc-\u6846\u67b6",children:[],level:3},{value:"\u4ec0\u4e48\u662f xRPC",id:"\u4ec0\u4e48\u662f-xrpc",children:[{value:"\u5e94\u7528\u573a\u666f\u793a\u4f8b",id:"\u5e94\u7528\u573a\u666f\u793a\u4f8b",children:[],level:4},{value:"\u8ba1\u5212\u5b9e\u73b0\u9636\u6bb5",id:"\u8ba1\u5212\u5b9e\u73b0\u9636\u6bb5",children:[],level:4}],level:3}],level:2},{value:"\u591a\u8bed\u8a00\u751f\u6001",id:"\u591a\u8bed\u8a00\u751f\u6001",children:[{value:"xPluginRunner",id:"xpluginrunner",children:[],level:3},{value:"Java Plugin Runner \u793a\u4f8b",id:"java-plugin-runner-\u793a\u4f8b",children:[],level:3}],level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[],level:2}],o={toc:u};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4e3a\u5927\u5bb6\u5e26\u6765\u4e86 Apache APISIX \u5373\u5c06\u53d1\u5e03\u7684 xRPC \u6846\u67b6\u4ee5\u53ca\u76f8\u5173\u7ec6\u8282\uff0c\u540c\u65f6\u4ecb\u7ecd\u4e86 Apache APISIX \u5728\u591a\u8bed\u8a00\u5f00\u53d1\u652f\u6301\u4e2d\u7684\u7ec6\u8282\u5c55\u793a\u3002")),(0,r.kt)("p",null,"\u968f\u7740\u4e1a\u52a1\u573a\u666f\u548c\u9700\u6c42\u8d8a\u6765\u8d8a\u590d\u6742\u548c\u591a\u6837\u5316\uff0c\u8d8a\u6765\u8d8a\u591a\u7684\u6807\u51c6\u548c\u534f\u8bae\u90fd\u5f00\u59cb\u5d2d\u9732\u5934\u89d2\u3002Apache APISIX \u4f5c\u4e3a Apache \u57fa\u91d1\u4f1a\u7684\u9876\u7ea7\u5f00\u6e90\u9879\u76ee\uff0c\u4e00\u76f4\u79ef\u6781\u53c2\u4e0e\u5e76\u63a8\u8fdb\u76f8\u5173\u751f\u6001\u5c42\u9762\u7684\u6269\u5c55\u3002"),(0,r.kt)("p",null,"\u672c\u6587\u5c06\u4ece",(0,r.kt)("strong",{parentName:"p"},"\u591a\u534f\u8bae\u4ee3\u7406"),"\u4e0e",(0,r.kt)("strong",{parentName:"p"},"\u591a\u8bed\u8a00\u652f\u6301"),"\u4e24\u4e2a\u89d2\u5ea6\uff0c\u4e3a\u5927\u5bb6\u5e26\u6765 Apache APISIX \u5373\u5c06\u53d1\u5e03\u7684 xRPC \u6846\u67b6\u4e0e\u591a\u8bed\u8a00\u63d2\u4ef6\u7684\u76f8\u5173\u793a\u4f8b\u3002"),(0,r.kt)("h2",{id:"\u591a\u534f\u8bae\u4ee3\u7406"},"\u591a\u534f\u8bae\u4ee3\u7406"),(0,r.kt)("p",null,"\u5728 Apache APISIX \u4e2d\uff0c\u6bcf\u4e2a\u8bf7\u6c42\u90fd\u4f1a\u5bf9\u5e94\u4e00\u4e2a Route \u5bf9\u8c61\u3002\u76ee\u524d Apache APISIX \u7684\u4ee3\u7406\u573a\u666f\u4e3b\u8981\u4ee5\u4e0b\u4e24\u79cd\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1642732975469-74071c65-e869-4133-857f-822b58d6b86e.png",alt:"\u76ee\u524d APISIX \u4e24\u79cd\u4ee3\u7406\u573a\u666f"})),(0,r.kt)("p",null,"\u7b2c\u4e00\u79cd\u662f HTTP \u534f\u8bae\u4ee3\u7406\uff0c\u4e5f\u662f\u76ee\u524d APISIX \u4e2d\u6700\u5e38\u7528\u7684\u8bf7\u6c42\u4ee3\u7406\u3002\u57fa\u4e8e HTTP \u534f\u8bae\u4ee3\u7406\uff0cApache APISIX \u76ee\u524d\u5df2\u7ecf\u5b9e\u73b0\u4e86\u6570\u5341\u79cd\u6d41\u91cf\u6cbb\u7406\u80fd\u529b\uff0c\u5982\uff1a\u7ec6\u7c92\u5ea6\u7684\u6d41\u63a7\u3001\u5b89\u5168\u548c\u53ef\u89c2\u6d4b\u6027\u7b49\u3002"),(0,r.kt)("p",null,"\u7b2c\u4e8c\u79cd\u5219\u662f\u57fa\u4e8e TCP \u548c UDP \u7684\u52a8\u6001\u534f\u8bae\u4ee3\u7406\u548c\u8d1f\u8f7d\u5747\u8861\uff0c\u5b83\u63d0\u4f9b\u4e86\u6700\u57fa\u7840\u7684\u6d41\u91cf\u51c6\u5165\u80fd\u529b\u548c\u94fe\u63a5\u7ea7\u522b\u7684\u65e5\u5fd7\u80fd\u529b\u3002\u8fd9\u79cd\u4ee3\u7406\u6a21\u5f0f\u53ef\u4ee5\u4ee3\u7406\u4efb\u4f55\u57fa\u4e8e TCP/UDP \u534f\u8bae\u7684\u8bf7\u6c42\uff0c\u5982\uff1aMySQL\u3001Redis\u3001Mongo \u6216 DNS \u7b49\u3002\u4f46\u7531\u4e8e\u5b83\u662f\u57fa\u4e8e TCP/UDP \u7684\u4ee3\u7406\u6ca1\u6709\u4e0a\u5c42\u7684\u5e94\u7528\u5c42\u534f\u8bae\uff0c\u53ea\u80fd\u83b7\u53d6\u5230\u56db\u5143\u7ec4\u7684\u4e00\u4e9b\u57fa\u7840\u4fe1\u606f\uff0c\u6240\u4ee5\u5728\u6269\u5c55\u80fd\u529b\u4e0a\u4f1a\u7a0d\u5f31\u4e00\u4e9b\u3002"),(0,r.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u8981\u5f00\u53d1-xrpc-\u6846\u67b6"},"\u4e3a\u4ec0\u4e48\u8981\u5f00\u53d1 xRPC \u6846\u67b6"),(0,r.kt)("p",null,"\u7531\u4e8e Stream Route \u5728\u534f\u8bae\u4ee3\u7406\u4e0a\u7684\u9650\u5236\uff0c\u52a0\u4e4b\u6211\u4eec\u5e0c\u671b\u5728 APISIX \u4e0a\u53ef\u4ee5\u652f\u6301\u66f4\u591a\u7684\u5e94\u7528\u5c42\u534f\u8bae\uff0c\u4ee5\u670d\u52a1\u66f4\u591a\u7528\u6237\u548c\u5e94\u7528\u573a\u666f\uff0cxRPC \u6846\u67b6\u5e94\u8fd0\u800c\u751f\u3002"),(0,r.kt)("p",null,"\u901a\u8fc7 xRPC \u6846\u67b6\u53ef\u4ee5\u975e\u5e38\u4fbf\u6377\u5730\u6269\u5c55\u534f\u8bae\u80fd\u529b\uff0c\u4e0d\u7ba1\u662f\u7279\u5b9a\u8fd8\u662f\u79c1\u6709\u6570\u636e\u534f\u8bae\uff0c\u90fd\u53ef\u4ee5\u5177\u5907\u7c7b\u4f3c HTTP \u534f\u8bae\u4ee3\u7406\u7684",(0,r.kt)("strong",{parentName:"p"},"\u7cbe\u51c6\u9897\u7c92\u5ea6"),"\u7684\u548c",(0,r.kt)("strong",{parentName:"p"},"\u66f4\u9ad8\u9636\u7684 7 \u5c42\u63a7\u5236"),"\uff0c\u6bd4\u5982\u8bf7\u6c42\u7ea7\u522b\u7684\u53ef\u89c2\u6d4b\u6027\u3001\u9ad8\u7ea7\u8bbf\u95ee\u63a7\u5236\u548c\u4ee3\u7406\u7b56\u7565\u7b49\u529f\u80fd\u3002"),(0,r.kt)("h3",{id:"\u4ec0\u4e48\u662f-xrpc"},"\u4ec0\u4e48\u662f xRPC"),(0,r.kt)("p",null,"xRPC \u4ece\u5b57\u9762\u89d2\u5ea6\u6765\u5206\u6790\uff0c\u5373 X \u4e3a\u534f\u8bae\u8d44\u6e90\u7684\u62bd\u8c61\u4ee3\u8868\u3002\u800c RPC \u662f\u6211\u4eec\u8ba4\u4e3a\u6240\u6709\u7ecf\u8fc7\u7f51\u5173\u7684\u8d44\u6e90\u90fd\u4e3a\u4e00\u4e2a\u8fc7\u7a0b\u8c03\u5ea6\uff0c\u5373\u5b83\u662f\u4e00\u4e2a\u534f\u8bae\u6269\u5c55\u6846\u67b6\u3002\u6240\u4ee5\u5728\u5b9a\u4f4d\u4e0a\uff0cxRPC \u662f\u4e00\u4e2a\u57fa\u7840\u6846\u67b6\uff0c\u800c\u4e0d\u662f\u4e00\u79cd\u5177\u4f53\u534f\u8bae\u7684\u5b9e\u73b0\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1642733068660-f479ffcc-5bda-49de-bbd9-0d04d7259450.png",alt:"xRPC \u67b6\u6784\u56fe"})),(0,r.kt)("p",null,"\u4ece\u4e0a\u56fe\u67b6\u6784\u53ef\u4ee5\u770b\u51fa\uff0cxRPC \u662f\u57fa\u4e8e APISIX Core \u6269\u5c55\u51fa\u6765\u7684\u6846\u67b6\u3002\u5728\u8be5\u6846\u67b6\u7684\u57fa\u7840\u4e4b\u4e0a\uff0c\u7528\u6237\u53ef\u4ee5\u53bb\u5b9e\u73b0\u4e0d\u540c\u5e94\u7528\u5c42\u7684\u534f\u8bae\uff0c\u6bd4\u5982 Redis\u3001MySQL\u3001Mongo \u548c Postgres \u7b49\u3002\u800c\u5728\u4e0d\u540c\u7684\u534f\u8bae\u4e4b\u4e0a\uff0c\u53c8\u53ef\u4ee5\u53bb\u62bd\u8c61\u4e00\u4e9b\u5171\u6027\u56e0\u7d20\uff0c\u5b9e\u73b0\u76f8\u5173\u63d2\u4ef6\u80fd\u529b\uff0c\u8ba9\u4e0d\u540c\u7684\u534f\u8bae\u53ef\u4ee5\u5171\u4eab\u8fd9\u4e9b\u80fd\u529b\u3002"),(0,r.kt)("p",null,"\u6240\u4ee5 xRPC \u7684\u4e3b\u8981\u4f5c\u7528\u53ef\u4ee5\u603b\u7ed3\u4e3a\uff1a",(0,r.kt)("strong",{parentName:"p"},"\u63d0\u4f9b\u6807\u51c6\u5316\u5e94\u7528\u5c42\u534f\u8bae\u7684\u63a5\u5165\u80fd\u529b\uff0c\u652f\u6301\u8de8\u534f\u8bae\u7684\u80fd\u529b\u5171\u4eab\uff0c\u4ee5\u53ca\u8ba9\u7528\u6237\u53ef\u4ee5\u83b7\u5f97\u81ea\u5b9a\u4e49\u534f\u8bae\u7684\u6269\u5c55\u80fd\u529b"),"\u3002"),(0,r.kt)("h4",{id:"\u5e94\u7528\u573a\u666f\u793a\u4f8b"},"\u5e94\u7528\u573a\u666f\u793a\u4f8b"),(0,r.kt)("p",null,"\u6709\u4e86 xRPC \u534f\u8bae\u6846\u67b6\u4e4b\u540e\uff0c\u5b83\u53ef\u4ee5\u89e3\u51b3\u54ea\u4e9b\u573a\u666f\u5462\uff1f\u8fd9\u91cc\u7b80\u5355\u7ed9\u5927\u5bb6\u4e3e\u51e0\u4e2a\u4f8b\u5b50\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u793a\u4f8b 1 \uff1a\u50cf Redis \u5728\u65e9\u671f\u7248\u672c\u4e2d\u662f\u4e0d\u652f\u6301 TLS \u7684\u3002\u5982\u679c\u6211\u4eec\u7cfb\u7edf\u91cc\u540c\u65f6\u5b58\u5728\u591a\u4e2a\u7248\u672c\u7684 Redis\uff0c\u540c\u65f6\u56e0\u4e3a\u67d0\u4e9b\u539f\u56e0\u6682\u65f6\u4e0d\u80fd\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u5347\u7ea7 Redis\uff0c\u4f46\u53c8\u6709\u589e\u52a0 TLS \u80fd\u529b\u7684\u9700\u6c42\u3002\u8fd9\u4e2a\u65f6\u5019\u5c31\u53ef\u4ee5\u57fa\u4e8e xPRC \u7684 Redis Protocol \u6765\u89e3\u51b3\u4e0a\u8ff0\u60c5\u51b5\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u793a\u4f8b 2\uff1a\u5f53\u6211\u4eec\u60f3\u5bf9\u67d0\u4e9b IP \u6216\u8005\u8c03\u7528\u65b9\u505a\u9891\u7387\u9650\u5236\u5e76\u4e14\u60f3\u76f4\u89c2\u7684\u770b\u5230\u6bcf\u4e2a\u8c03\u7528\u6765\u6e90\u7684\u8c03\u7528\u9891\u7387\uff0c\u8fd9\u4e9b Redis \u81ea\u8eab\u662f\u4e0d\u652f\u6301\u7684\u3002\u6b64\u65f6\u5c31\u53ef\u4ee5\u901a\u8fc7\u90a3\u901a\u8fc7 xRPC \u6269\u5c55\u51fa\u6765\u7684 Redis Protocol \u5b8c\u7f8e\u89e3\u51b3\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u793a\u4f8b 3\uff1a\u5982\u679c\u60f3\u5229\u7528 MySQL \u4e34\u65f6\u5f00\u542f\u6162\u67e5\u8be2\u529f\u80fd\uff0c\u53ea\u9700\u63a5\u5165 MySQL Protocol \u5e76\u5728 APISIX \u914d\u7f6e\u76f8\u5173\u7b56\u7565\u5373\u53ef\uff0c\u7701\u53bb\u4e86\u540e\u7eed\u518d\u4e00\u53f0\u53f0\u673a\u5668\u53bb\u767b\u5f55\u5b9e\u4f8b\u7684\u7e41\u7410\u6b65\u9aa4\u3002")),(0,r.kt)("p",null,"\u5f53\u7136\uff0c\u7c7b\u4f3c\u7684\u5e94\u7528\u573a\u666f\u8fd8\u5f88\u591a\uff0c\u4e5f\u5e0c\u671b\u5728\u529f\u80fd\u53d1\u5e03\u4e4b\u540e\uff0c\u5927\u5bb6\u591a\u591a\u5728\u5b9e\u9645\u7684\u5e94\u7528\u8fc7\u7a0b\u4e2d\u53bb\u4f53\u9a8c\u548c\u5b9e\u8df5\u3002\u63a5\u5165 xPRC \u540e\u7684\u8c03\u7528\u8fc7\u7a0b\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1643103835579-d215a120-f62e-4ba5-aa14-59ea3d38a429.png",alt:"\u8c03\u7528\u8fc7\u7a0b"})),(0,r.kt)("p",null,"\u4e00\u65e6\u901a\u8fc7 Apache APISIX \u5b8c\u6210\u4e86\u4e0a\u6e38\u670d\u52a1\u7684\u63a5\u7ba1\uff0c\u5c31\u53ef\u4ee5\u628a\u4e0a\u6e38\u4e0d\u540c\u7684\u5e94\u7528\u670d\u52a1\u8fdb\u884c\u7edf\u4e00\u5316\u7ba1\u7406\u3002\u7c7b\u4f3c\u65e5\u5fd7\u8f93\u51fa\u3001\u76d1\u63a7\u3001\u5b89\u5168\u8fd8\u6709\u95ee\u9898\u6392\u67e5\u7b49\u529f\u80fd\uff0c\u90fd\u53ef\u4ee5\u901a\u8fc7\u4e00\u5957\u6807\u51c6\u5316\u7684\u7b56\u7565\u6765\u5b8c\u6210\u3002"),(0,r.kt)("h4",{id:"\u8ba1\u5212\u5b9e\u73b0\u9636\u6bb5"},"\u8ba1\u5212\u5b9e\u73b0\u9636\u6bb5"),(0,r.kt)("p",null,"\u76ee\u524d Apache APISIX xRPC \u6846\u67b6\u7684\u8bbe\u8ba1\uff0c\u521d\u6b65\u5212\u5206\u4e3a 5 \u4e2a\u9636\u6bb5\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1643103835583-40afb0a0-ec20-40e8-84de-b34afee2724c.png",alt:"\u8ba1\u5212\u5b9e\u73b0\u9636\u6bb5\u56fe"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9636\u6bb5\u4e00\uff1aRead \u8bfb\u53d6\u6570\u636e\u4e0e\u534f\u8bae\u89e3\u7801\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u9636\u6bb5\u4e8c\uff1aAccess Phase \u51c6\u5165\u9636\u6bb5\u3002\u63d0\u4f9b\u63d2\u4ef6\u63a5\u5165\u529f\u80fd\uff0c\u53ef\u5b9e\u73b0\u5b89\u5168\u3001\u6d41\u63a7\u548c\u51c6\u5165\u7b49\u9700\u6c42\u573a\u666f\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u9636\u6bb5\u4e09\uff1aProxy \u6570\u636e\u8f6c\u53d1\u4e0e\u8d1f\u8f7d\u5747\u8861\u3002\u63d0\u4f9b\u81ea\u5b9a\u4e49\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u53ca\u7b97\u6cd5\u7684\u63a5\u5165\u652f\u6301\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u9636\u6bb5\u56db\uff1aSend \u53d1\u9001\u6570\u636e\u4e0e\u534f\u8bae\u7f16\u7801\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u9636\u6bb5\u4e94\uff1aLog Phase \u65e5\u5fd7\u9636\u6bb5\u3002\u63d0\u4f9b\u63d2\u4ef6\u63a5\u5165\u529f\u80fd\uff0c\u5b9e\u73b0\u65e5\u5fd7\u4e0a\u62a5\u548c\u8bb0\u5f55\u7b49\u9700\u6c42\u573a\u666f\u3002")),(0,r.kt)("h2",{id:"\u591a\u8bed\u8a00\u751f\u6001"},"\u591a\u8bed\u8a00\u751f\u6001"),(0,r.kt)("p",null,"\u4e3a\u4e86\u6ee1\u8db3\u65e5\u76ca\u4e30\u5bcc\u548c\u5e9e\u5927\u7684\u8ba1\u7b97\u8bed\u8a00\u5e93\uff0c\u6253\u9020\u591a\u8bed\u8a00\u73af\u5883\u7684\u4ee3\u7801\u652f\u6301\u6210\u4e3a\u5e94\u5bf9\u672a\u6765\u6280\u672f\u53d1\u5c55\u7684\u7b2c\u4e00\u95e8\u69db\u3002Apache APISIX \u5728\u591a\u8bed\u8a00\u5f00\u53d1\u7684\u9053\u8def\u4e0a\u4e5f\u505a\u4e86\u5f88\u591a\u7684\u63a2\u7d22\u4e0e\u5b9e\u8df5\u3002"),(0,r.kt)("p",null,"\u6bd4\u5982\u5728\u8fd1\u671f\u5df2\u7ecf\u5b9e\u73b0\u4e86\u5bf9 ",(0,r.kt)("strong",{parentName:"p"},"WebAssembly")," \u7684\u652f\u6301\uff0c\u5177\u4f53\u5b9e\u73b0\u7ec6\u8282\u4e0e\u529f\u80fd\u53ef\u53c2\u8003\u300c",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2021/11/19/apisix-supports-wasm"},"Apache APISIX \u62e5\u62b1 WASM \u751f\u6001\u300d"),"\u6587\u7ae0\u3002\u5f53\u7136\uff0c\u76ee\u524d Apache APISIX \u5bf9 WASM \u7684\u529f\u80fd\u652f\u6301\u8fd8\u5c5e\u4e8e\u5b9e\u9a8c\u9636\u6bb5\uff0c\u672a\u6765\u4ecd\u4f1a\u7ee7\u7eed\u5b8c\u5584\u5bf9 WASM \u7684\u76f8\u5173\u652f\u6301\u3002\u5982\u679c\u60a8\u5bf9\u6b64\u9879\u76ee\u611f\u5174\u8da3\uff0c\u4e5f\u6b22\u8fce\u79ef\u6781\u53c2\u4e0e\u5230 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/api7/wasm-nginx-module"},"wasm-nginx-module")," \u9879\u76ee\u8d21\u732e\u4e2d\u3002"),(0,r.kt)("p",null,"\u540c\u65f6\uff0c\u5728\u5bf9 WASM \u5b9e\u73b0\u652f\u6301\u524d\uff0cApache APISIX \u5df2\u901a\u8fc7 \u300cxPluginRunner \u591a\u8bed\u8a00\u63d2\u4ef6\u8fd0\u884c\u65f6\u300d\u5b9e\u73b0\u4e86\u5bf9\u591a\u79cd\u5f00\u53d1\u8bed\u8a00\u7684\u652f\u6301\u3002\u5373\u5728\u5f00\u53d1 APISIX \u63d2\u4ef6\u65f6\uff0c\u7528\u6237\u4e0d\u4ec5\u53ef\u4ee5\u4f7f\u7528 APISIX \u539f\u751f\u652f\u6301\u7684 Lua \u4ee3\u7801\u53bb\u7f16\u5199\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5404\u81ea\u719f\u6089\u7684\u8bed\u8a00\uff0c\u6bd4\u5982 Go\u3001Java \u548c Python \u7b49\uff0c\u5b9e\u73b0\u5bf9 APISIX \u63d2\u4ef6\u7684\u7f16\u5199\u4e0e\u6269\u5c55\u3002"),(0,r.kt)("h3",{id:"xpluginrunner"},"xPluginRunner"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1642733411405-19b13181-0f5e-46af-837b-66e485f2e0b0.png",alt:"xPluginRunner \u5b9e\u73b0\u65b9\u5f0f\u56fe"})),(0,r.kt)("p",null,"xPluginRunner \u7684\u5b9e\u73b0\u65b9\u5f0f\u5982\u4e0a\u56fe\u6240\u793a\u3002\u6574\u4e2a\u901a\u4fe1\u8fc7\u7a0b\u662f\u5728\u5185\u7f6e\u63d2\u4ef6\u300c\u5f00\u59cb\u6267\u884c\u4e4b\u524d\u300d\u548c\u300c\u5b8c\u6210\u6267\u884c\u4e4b\u540e\u300d\uff0cAPISIX \u4f1a\u53d1\u8d77\u672c\u5730 RPC \u8bf7\u6c42\u5230\u5404\u8bed\u8a00\u7684\u63d2\u4ef6\u8fd0\u884c\u65f6\u3002\u5728\u63d2\u4ef6\u8fd0\u884c\u65f6\u4e2d\uff0c\u5b9e\u73b0\u5404\u4e2a\u63d2\u4ef6\u5185\u7684\u8ba1\u7b97\u548c\u7b56\u7565\u5904\u7406\uff0c\u6700\u540e\u5c06\u7ed3\u679c\u54cd\u5e94\u7ed9 APISIX\uff0c\u57fa\u4e8e\u54cd\u5e94\u7ed3\u679c\u518d\u8fdb\u884c\u540e\u7eed\u7684\u51b3\u7b56\u3002"),(0,r.kt)("p",null,"xPluginRunner \u4f5c\u4e3a\u8ddf Apache APISIX \u901a\u4fe1\u7684\u6865\u6881\uff0c\u4e3b\u8981\u5b9e\u73b0\u4e86",(0,r.kt)("strong",{parentName:"p"},"\u79c1\u6709\u6570\u636e\u534f\u8bae\u7684\u89e3\u6790\u4e0e RPC \u62a5\u6587\u7684\u5c01\u5305\u4e0e\u89e3\u5305"),"\u3002"),(0,r.kt)("p",null,"\u76ee\u524d Apache APISIX xPluginRunner \u7684\u65b9\u6848\u5df2\u7ecf\u5904\u4e8e\u6bd4\u8f83\u7a33\u5b9a\u7684\u9636\u6bb5\u4e86\uff0c\u4ece\u793e\u533a\u53cd\u9988\u4e2d\u4e5f\u5f97\u77e5\u90e8\u5206\u4f01\u4e1a\u5df2\u7ecf\u5f00\u59cb\u5c1d\u8bd5\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u5e94\u7528\u4e86\u3002\u5982\u679c\u60a8\u5bf9\u6b64\u9879\u76ee\u611f\u5174\u8da3\uff0c\u4e5f\u6b22\u8fce\u79ef\u6781\u53c2\u4e0e\u5230\u5404\u4e2a\u5f00\u53d1\u8bed\u8a00\u63d2\u4ef6\u9879\u76ee\u4e2d\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-go-plugin-runner"},"apisix-go-plugin-runner")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-java-plugin-runner"},"apisix-java-plugin-runner")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-python-plugin-runner"},"apache-apisix-python-runner"))),(0,r.kt)("p",null,"\u6700\u540e\u6211\u4eec\u5c06\u901a\u8fc7\u4e00\u4e2a\u7b80\u5355\u7684 Java \u793a\u4f8b\uff0c\u4e3a\u5927\u5bb6\u5c55\u793a\u4e00\u4e0b\u5982\u4f55\u57fa\u4e8e Java Plugin Runner \u6765\u5f00\u53d1 APISIX \u63d2\u4ef6\u3002"),(0,r.kt)("h3",{id:"java-plugin-runner-\u793a\u4f8b"},"Java Plugin Runner \u793a\u4f8b"),(0,r.kt)("p",null,"\u9996\u5148\u5728\u5f00\u53d1\u63d2\u4ef6\u65f6\uff0c\u6211\u4eec\u9700\u8981\u53bb\u5b9e\u73b0 PluginFilter \u7684 Interface\u3002Interface \u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," \u65b9\u6cd5\u4e3b\u8981\u7528\u6765\u6807\u8bc6\u548c\u63d0\u53d6\u63d2\u4ef6\u540d\u79f0\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"filter")," \u65b9\u6cd5\u5219\u7528\u6765\u8fc7\u6ee4\u8bf7\u6c42\uff08\u4e5f\u5c31\u662f\u6267\u884c\u63d2\u4ef6\u4e3b\u4f53\u903b\u8f91\uff09\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1642733591297-642091b2-d4c7-4098-b7ff-41ffa5a2e00a.png",alt:"Plugin"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1642733657248-5b7db563-f95f-4683-997e-47e76eeda4d9.png",alt:"Interface"})),(0,r.kt)("p",null,"\u9700\u8981\u989d\u5916\u6ce8\u610f\u4e00\u70b9\uff0c\u4e0a\u8ff0\u4ee3\u7801\u4e2d\u51fa\u73b0\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"request")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"response")," \u4e24\u4e2a\u53c2\u6570\u5728 Runner \u4e2d\u5b58\u5728\u56fa\u5b9a\u903b\u8f91\uff08\u6240\u6709 Runner \u90fd\u9002\u7528\uff09\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u5e0c\u671b\u8bf7\u6c42\u7ee7\u7eed\u8f6c\u53d1\uff0c\u4ec5\u8fdb\u884c\u4e00\u4e9b\u7b56\u7565\u8bbe\u7f6e\uff08\u5982\u6539\u5199\u8bf7\u6c42\u53c2\u6570\u3001\u5934\u4fe1\u606f\u7b49\uff09\uff0c\u53ea\u9700\u64cd\u4f5c ",(0,r.kt)("inlineCode",{parentName:"li"},"request")," \u5bf9\u8c61\u5373\u53ef\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u60f3\u8981\u7ec8\u6b62\u8bf7\u6c42\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"response")," \u5bf9\u8c61\u6765\u5b8c\u6210\uff08\u5982\u8bbe\u7f6e\u54cd\u5e94\u4f53\u3001\u54cd\u5e94\u5934\u3001\u72b6\u6001\u7801\u7b49\uff09\u3002")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"APISIX \u4e00\u65e6\u611f\u77e5\u5230 Runner \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"response")," \u5bf9\u8c61\u88ab\u64cd\u4f5c\u5c31\u4f1a\u7acb\u5373\u7ec8\u6b62\u5f53\u524d\u8bf7\u6c42\u3002"))),(0,r.kt)("p",null,"\u63d2\u4ef6\u5f00\u53d1\u5b8c\u6210\u4e4b\u540e\uff0c\u5c31\u53ef\u4ee5\u5728 APISIX \u4e2d\u8fdb\u884c\u5e94\u7528\u7684\u5b9e\u8df5\u4e86\u3002\u9996\u5148\u5c06 Runner \u53ca\u9879\u76ee\u4e2d\u7684\u63d2\u4ef6\u7f16\u8bd1\u4e3a jar \u5305\uff0c\u5e76\u5c06 jar \u5305\u7684\u7edd\u5bf9\u8def\u5f84\u914d\u7f6e\u5230 APISIX \u4e3b\u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u914d\u7f6e\u65b9\u5f0f\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1642733807923-9e3ad231-0094-4e37-a830-29973b43e495.png",alt:"\u5c06 Runner jar \u914d\u7f6e\u5230 APISIX \u4e3b\u914d\u7f6e"})),(0,r.kt)("p",null,"\u6700\u540e\u91cd\u542f Apache APISIX\uff0c\u5c31\u53ef\u4ee5\u8fdb\u884c\u8def\u7531\u548c\u63d2\u4ef6\u7684\u914d\u7f6e\u53ca\u8bf7\u6c42\u9a8c\u8bc1\u73af\u8282\u4e86\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1642733908224-64f3ec2c-6d33-4130-b8b6-0fe10e00c48e.png",alt:"\u8def\u7531\u548c\u63d2\u4ef6\u914d\u7f6e"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1642733944940-69b06c71-22f7-45e4-9b6d-7f1b62167180.png",alt:"\u8bf7\u6c42\u9a8c\u8bc1"})),(0,r.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.kt)("p",null,"\u672c\u6587\u4e3a\u5927\u5bb6\u5e26\u6765\u4e86 Apache APISIX \u5373\u5c06\u53d1\u5e03\u7684 xRPC \u6846\u67b6\u4ee5\u53ca\u76f8\u5173\u7ec6\u8282\uff0c\u540c\u65f6\u4ecb\u7ecd\u4e86 Apache APISIX \u5728\u591a\u8bed\u8a00\u5f00\u53d1\u652f\u6301\u4e2d\u7684\u7ec6\u8282\u5c55\u793a\u3002\u901a\u8fc7\u591a\u534f\u8bae\u4ee3\u7406\u4e0e\u591a\u8bed\u8a00\u652f\u6301\u4e24\u4e2a\u89d2\u5ea6\uff0c\u5145\u5206\u5c55\u793a\u4e86 Apache APISIX \u5728\u9762\u5411\u751f\u6001\u7684\u591a\u9879\u52aa\u529b\u3002\u4e5f\u6b22\u8fce\u968f\u65f6\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/discussions"},"GitHub Discussions")," \u4e2d\u53d1\u8d77\u8ba8\u8bba\uff0c\u6216\u901a\u8fc7",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/general/join"},"\u90ae\u4ef6\u5217\u8868"),"\u8fdb\u884c\u4ea4\u6d41\u3002"))}s.isMDXComponent=!0}}]);