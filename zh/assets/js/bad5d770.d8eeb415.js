"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7599],{35318:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>m});var n=l(27378);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function o(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function p(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?o(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function r(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):p(p({},t),e)),l},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),k=u(l),m=a,h=k["".concat(i,".").concat(m)]||k[m]||s[m]||o;return l?n.createElement(h,p(p({ref:t},c),{},{components:l})):n.createElement(h,p({ref:t},c))}));function m(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=l.length,p=new Array(o);p[0]=k;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r.mdxType="string"==typeof e?e:a,p[1]=r;for(var u=2;u<o;u++)p[u]=l[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,l)}k.displayName="MDXCreateElement"},21866:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var n=l(25773),a=(l(27378),l(35318));const o={title:"APISIX \u52a9\u529b\u4e2d\u4e1c\u793e\u4ea4\u8f6f\u4ef6\uff0c\u5b9e\u73b0\u672c\u5730\u5316\u90e8\u7f72",authors:[{name:"\u80e1\u4e3d\u9e9f",title:"Author"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4"}],keywords:["API \u7f51\u5173","Apache APISIX","Beeto","\u672c\u5730\u5316\u90e8\u7f72","\u6d41\u91cf","\u52a8\u6001\u8f6c\u53d1"],description:"\u672c\u6587\u6574\u7406\u81ea\u80e1\u4e3d\u9e9f\uff08Beeto \u5e73\u53f0\u7814\u53d1\uff09\u5728 Apache APISIX Summit ASIA 2022 \u4e2d\u8fdb\u884c\u7684\u5206\u4eab\uff0c\u4ecb\u7ecd\u4e86\u4e2d\u4e1c\u793e\u4ea4\u8f6f\u4ef6 Beeto \u5982\u4f55\u4f7f\u7528 APISIX \u5b9e\u73b0\u672c\u5730\u5316\u90e8\u7f72\u3002",tags:["Case Studies"],image:"https://static.apiseven.com/2022/blog/0817/beeto.png"},p=void 0,r={permalink:"/zh/blog/2022/06/14/beeto-with-apache-apisix",source:"@site/blog/2022/06/14/beeto-with-apache-apisix.md",title:"APISIX \u52a9\u529b\u4e2d\u4e1c\u793e\u4ea4\u8f6f\u4ef6\uff0c\u5b9e\u73b0\u672c\u5730\u5316\u90e8\u7f72",description:"\u672c\u6587\u6574\u7406\u81ea\u80e1\u4e3d\u9e9f\uff08Beeto \u5e73\u53f0\u7814\u53d1\uff09\u5728 Apache APISIX Summit ASIA 2022 \u4e2d\u8fdb\u884c\u7684\u5206\u4eab\uff0c\u4ecb\u7ecd\u4e86\u4e2d\u4e1c\u793e\u4ea4\u8f6f\u4ef6 Beeto \u5982\u4f55\u4f7f\u7528 APISIX \u5b9e\u73b0\u672c\u5730\u5316\u90e8\u7f72\u3002",date:"2022-06-14T00:00:00.000Z",formattedDate:"2022\u5e746\u670814\u65e5",tags:[{label:"Case Studies",permalink:"/zh/blog/tags/case-studies"}],readingTime:19.655,truncated:!0,authors:[{name:"\u80e1\u4e3d\u9e9f",title:"Author"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4",imageURL:"https://avatars.githubusercontent.com/u/39793568?v=4"}],prevItem:{title:"\u57fa\u4e8e Apache APISIX \u7684\u81ea\u52a8\u5316\u8fd0\u7ef4\u5e73\u53f0",permalink:"/zh/blog/2022/06/14/automated-operation-base-apache-apisix"},nextItem:{title:"\u963f\u91cc\u4e91 MSE \u57fa\u4e8e Apache APISIX \u7684\u5168\u94fe\u8def\u7070\u5ea6\u65b9\u6848\u5b9e\u8df5",permalink:"/zh/blog/2022/06/14/how-mse-supports-canary-release-with-apache-apisix"}},i={authorsImageUrls:[void 0,void 0]},u=[{value:"Beeto \u4ecb\u7ecd",id:"beeto-\u4ecb\u7ecd",children:[],level:2},{value:"Beeto \u67b6\u6784\u8bbe\u8ba1\u4e2d\u7684\u75db\u70b9",id:"beeto-\u67b6\u6784\u8bbe\u8ba1\u4e2d\u7684\u75db\u70b9",children:[{value:"\u5355\u4f53\u670d\u52a1\u67b6\u6784\u8bbe\u8ba1",id:"\u5355\u4f53\u670d\u52a1\u67b6\u6784\u8bbe\u8ba1",children:[],level:3},{value:"\u591a\u670d\u52a1\u843d\u5730\u56f0\u96be",id:"\u591a\u670d\u52a1\u843d\u5730\u56f0\u96be",children:[],level:3}],level:2},{value:"APISIX \u7f51\u5173\u4e3a Beeto \u67b6\u6784\u52a9\u529b",id:"apisix-\u7f51\u5173\u4e3a-beeto-\u67b6\u6784\u52a9\u529b",children:[],level:2},{value:"\u5e94\u7528 APISIX \u540e\u7684\u4e1a\u52a1\u5b9e\u8df5",id:"\u5e94\u7528-apisix-\u540e\u7684\u4e1a\u52a1\u5b9e\u8df5",children:[{value:"\u5b89\u5168\u6027\uff1a\u8ba4\u8bc1\u63d2\u4ef6",id:"\u5b89\u5168\u6027\u8ba4\u8bc1\u63d2\u4ef6",children:[{value:"\u5357\u5317\u5411\u6d41\u91cf-Cookie",id:"\u5357\u5317\u5411\u6d41\u91cf-cookie",children:[],level:4},{value:"\u4e1c\u897f\u5411\u6d41\u91cf-Token",id:"\u4e1c\u897f\u5411\u6d41\u91cf-token",children:[],level:4}],level:3},{value:"\u4f38\u7f29\u6027\uff1a\u65e0\u72b6\u6001\u670d\u52a1\u6269\u5bb9\u8fc1\u79fb",id:"\u4f38\u7f29\u6027\u65e0\u72b6\u6001\u670d\u52a1\u6269\u5bb9\u8fc1\u79fb",children:[],level:3},{value:"\u529f\u80fd\u6269\u5c55\u6027\uff1a\u4e1a\u52a1\u52a8\u6001\u8f6c\u53d1",id:"\u529f\u80fd\u6269\u5c55\u6027\u4e1a\u52a1\u52a8\u6001\u8f6c\u53d1",children:[],level:3}],level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[],level:2}],c={toc:u};function s(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u6574\u7406\u81ea\u80e1\u4e3d\u9e9f\uff08Beeto \u5e73\u53f0\u7814\u53d1\uff09\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://apisix-summit.org/"},"Apache APISIX Summit ASIA 2022")," \u4e2d\u8fdb\u884c\u7684\u5206\u4eab\uff0c\u4ecb\u7ecd\u4e86\u4e2d\u4e1c\u793e\u4ea4\u8f6f\u4ef6 Beeto \u5982\u4f55\u4f7f\u7528 APISIX \u5b9e\u73b0\u672c\u5730\u5316\u90e8\u7f72\u3002")),(0,a.kt)("h2",{id:"beeto-\u4ecb\u7ecd"},"Beeto \u4ecb\u7ecd"),(0,a.kt)("p",null,"Beeto \u662f\u4e00\u6b3e\u9762\u5411\u4e2d\u4e1c\u5e02\u573a\u4e3b\u6253\u963f\u62c9\u4f2f\u8bed\u8a00\u7684\u793e\u4ea4\u8f6f\u4ef6\uff0c\u5728\u4ea7\u54c1\u8bbe\u8ba1\u548c\u6280\u672f\u67b6\u6784\u4e0a\u90fd\u662f\u672c\u5730\u5316\u843d\u5730\u5b9e\u65bd\u7684\u3002\u66fe\u5728\u6c99\u7279 iOS \u5e94\u7528\u5546\u5e97 Top Charts \u699c\u5355\u4e2d\u8d85\u8fc7\u8001\u724c\u793e\u4ea4\u5de8\u5934 Facebook\uff0c\u4f4d\u5217\u7b2c 4 \u540d\u3002\n\u5176\u5b9e\u4e2d\u4e1c\u5728\u4e92\u8054\u7f51\u9886\u57df\u7b97\u662f\u53d1\u5c55\u8f83\u6210\u719f\u7684\u533a\u57df\uff0c\u5728\u793e\u4ea4\u7f51\u7edc\u4e2d\u7684\u6d3b\u8dc3\u7528\u6237\u6e17\u900f\u7387\u975e\u5e38\u9ad8\uff0c\u5c24\u5176\u5728\u6c99\u7279\u533a\u57df\uff0c2019 \u5e74\u7684\u4e92\u8054\u7f51\u7528\u6237\u5c31\u5df2\u7ecf\u8fbe\u5230\u4e86 90%\uff0c\u6d3b\u8dc3\u7528\u6237\u6e17\u900f\u7387\u5728 2020 \u5e74\u5c31\u5df2\u7ecf\u6392\u5230\u4e86\u7b2c 9 \u4f4d\u3002"),(0,a.kt)("p",null,"\u4e92\u8054\u7f51\u5e02\u573a\u7684\u6210\u719f\uff0c\u5e26\u6765\u7684\u662f\u56fd\u9645\u6027\u8f6f\u4ef6\u7684\u8986\u76d6\uff0c\u50cf WhatsApp\u3001YouTube \u548c Instagram \u7b49\u90fd\u662f\u5f53\u5730\u4e3b\u6d41\u7684\u793e\u4ea4\u8f6f\u4ef6\u3002\u4f46\u56de\u8fc7\u5934\u770b\uff0c\u4f60\u4f1a\u53d1\u73b0\u5728\u4e2d\u4e1c\u5730\u533a\u57fa\u672c\u6ca1\u6709\u7c7b\u4f3c\u56fd\u5185\u5fae\u535a\u8fd9\u79cd\u672c\u5730\u5316\u7684\u793e\u4ea4\u7c7b\u8f6f\u4ef6\u3002\u6240\u4ee5\u5728 Beeto \u4ea7\u54c1\u8bde\u751f\u4e4b\u524d\uff0c\u5c31\u7784\u51c6\u4e86\u300c\u4e2d\u4e1c\u4e92\u8054\u7f51\u6210\u719f\u3001\u6e17\u900f\u7387\u9ad8\uff0c\u4f46\u672c\u5730\u5316\u5c11\u300d\u7684\u65b9\u5411\uff0c\u5e76\u5f00\u542f\u4e86\u4e13\u6ce8\u300c\u672c\u5730\u5316\u7279\u8272\u300d\u7684\u4ea7\u54c1\u51c6\u5907\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/06/blog/beeto-1.png",alt:"\u672c\u5730\u5316\u8bc9\u6c42"})),(0,a.kt)("p",null,"Beeto \u5728\u4e2d\u4e1c\u5176\u5b9e\u5bf9\u6807\u7684\u662f Twitter \u548c Facebook \u8fd9\u79cd Feed \u6d41\u5e94\u7528\uff0c\u6240\u4ee5\u5728\u4e1a\u52a1\u67b6\u6784\u7684\u90e8\u7f72\u4e0a\u4e00\u5f00\u59cb\u5c31\u89c4\u5212\u597d\u4e86\u76f8\u5bf9\u5b8c\u6574\u7684\u6846\u67b6\u3002\u6bd4\u5982\u6ee1\u8db3\u793e\u4ea4\u5c5e\u6027\u7684\u5173\u7cfb\u4e92\u52a8\u3001\u5185\u5bb9\u6d88\u8d39\uff08\u56fe\u6587\u3001\u89c6\u9891\u76f4\u64ad\u3001\u540c\u57ce\u5e7f\u544a\u7b49\uff09\uff0c\u8fd8\u6709\u91d1\u878d\u7c7b\u548c\u670d\u52a1\u7c7b\u7684\u6253\u8d4f\u3001\u63d0\u73b0\u3001\u6295\u7968\u548c\u62bd\u5956\u7b49\u7b49\u5404\u79cd\u4e1a\u52a1\uff0c\u751a\u81f3\u5305\u62ec\u5e73\u53f0\u4fa7\u7684\u76d1\u7ba1\u3001\u5185\u5bb9\u5b89\u5168\u5ba1\u6838\u7b49\u8981\u6c42\u3002"),(0,a.kt)("p",null,"\u5728\u524d\u6587\u6211\u4eec\u4e5f\u63d0\u5230\u8fc7\uff0c\u4e2d\u4e1c\u5e02\u573a\u7684\u4e92\u8054\u7f51\u6210\u719f\u5ea6\u52bf\u5fc5\u5bf9\u4e00\u4e2a\u4ea7\u54c1\u7684\u53d1\u5e03\u6709\u7740\u9ad8\u8d28\u91cf\u7684\u8981\u6c42\uff0c\u6240\u4ee5\u60f3\u8981\u5207\u5b9e\u6253\u5165\u4e2d\u4e1c\u5e02\u573a\uff0c\u4e0d\u53ef\u80fd\u5148\u505a\u4e00\u4e2a\u7b80\u5355\u529f\u80fd\u7684\u5e94\u7528\u76f4\u63a5\u4e0a\u7ebf\u3002"),(0,a.kt)("p",null,"\u6240\u4ee5 Beeto \u7684\u7b2c\u4e00\u7248\u4e1a\u52a1\u67b6\u6784\u5c31\u662f\u4e00\u4e2a\u5b8c\u6574\uff0c\u5e76\u4e14\u7b26\u5408\u4e3b\u6d41\u793e\u4ea4\u8f6f\u4ef6\u5e94\u8be5\u5177\u5907\u7684\u5404\u79cd\u529f\u80fd\u96c6\u4e00\u8eab\u7684\u4ea7\u54c1\u3002\u540c\u65f6 Beeto \u7684\u76ee\u6807\u4e5f\u5f88\u660e\u786e\uff0c\u5c31\u662f\u8981\u7528\u300c\u672c\u5730\u5316\u7279\u8272\u300d\u6210\u4e3a\u4e2d\u4e1c\u5730\u533a\u6700\u5927\u7684\u963f\u62c9\u4f2f\u8bed\u793e\u4ea4\u5e73\u53f0\u548c\u6700\u597d\u7684\u963f\u62c9\u4f2f\u8bed\u793e\u533a\u3002"),(0,a.kt)("h2",{id:"beeto-\u67b6\u6784\u8bbe\u8ba1\u4e2d\u7684\u75db\u70b9"},"Beeto \u67b6\u6784\u8bbe\u8ba1\u4e2d\u7684\u75db\u70b9"),(0,a.kt)("p",null,"Beeto \u4ea7\u54c1\u8981\u8d70\u672c\u5730\u5316\u6a21\u5f0f\uff0c\u9664\u4e86\u5728\u4e1a\u52a1\u5c42\u9762\u8981\u6ee1\u8db3\u5f53\u5730\u73b0\u6709\u7684\u793e\u4ea4\u9700\u6c42\u5916\uff0c\u5728\u6280\u672f\u5c42\u9762\u4e5f\u9700\u8981\u505a\u4e00\u4e9b\u672c\u5730\u5316\u64cd\u4f5c\uff0c\u6bd4\u5982\u670d\u52a1\u90e8\u7f72\u548c\u6570\u636e\u5b58\u50a8\u7b49\u90fd\u8981\u8981\u672c\u5730\u5316\u3002\u719f\u6089\u5fae\u535a\u6216\u8005 Twitter \u7684\u6280\u672f\u670b\u53cb\u5e94\u8be5\u90fd\u77e5\u9053\uff0c\u60f3\u8981\u5b9e\u73b0\u8fd9\u79cd\u5e9e\u5927\u4fe1\u606f\u6d41\u4ea7\u54c1\u7684\u80cc\u540e\uff0c\u5176\u5b9e\u662f\u9700\u8981\u51e0\u5341\u751a\u81f3\u4e0a\u767e\u4e2a\u67b6\u6784\u7cfb\u7edf\u6765\u534f\u4f5c\u5b8c\u6210\u7684\u3002"),(0,a.kt)("h3",{id:"\u5355\u4f53\u670d\u52a1\u67b6\u6784\u8bbe\u8ba1"},"\u5355\u4f53\u670d\u52a1\u67b6\u6784\u8bbe\u8ba1"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/06/blog/beeto-2.png",alt:"\u670d\u52a1\u5212\u5206"})),(0,a.kt)("p",null,"\u76ee\u524d Beeto \u4ea7\u54c1\u7684\u4e1a\u52a1\u4e3b\u8981\u53ef\u5212\u5206\u4e3a\u4ee5\u4e0a\u8fd9\u4e9b\u3002\u8fd9\u4e9b\u4e1a\u52a1\u7684\u5b9e\u73b0\u5176\u5b9e\u90fd\u9700\u8981\u5728\u4e2d\u4e1c\u5730\u533a\u8fdb\u884c\u672c\u5730\u5316\u90e8\u7f72\u3002\u5982\u679c\u628a\u6bcf\u9879\u4e1a\u52a1\u6309\u7167\u670d\u52a1\u8fdb\u884c\u62c6\u5206\u7684\u8bdd\uff0c\u90a3\u6bcf\u4e2a\u670d\u52a1\u5176\u5b9e\u5c31\u662f\u72ec\u7acb\u7684\u5355\u4f53\u67b6\u6784\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/06/blog/beeto-3.png",alt:"Deployment"})),(0,a.kt)("p",null,"\u4e0a\u56fe\u5c55\u793a\u7684\u662f\u4e00\u4e2a\u5f88\u5e38\u89c1\u7684\u90e8\u7f72\u67b6\u6784\u3002\u62ff Beeto \u7684 Feed \u6d41\u670d\u52a1\u6765\u8bf4\uff0c\u60f3\u8981\u5b9e\u73b0\u7528\u6237\u6d4f\u89c8 Feed \u6d41\u9700\u6c42\uff0c\u5c31\u5fc5\u987b\u8981\u652f\u6301\u516c\u7f51\u8bbf\u95ee\uff0c\u5373\u5357\u5317\u5411\u6d41\u91cf\u7684\u8bbf\u95ee\uff1b\u540c\u65f6 Feed \u6d41\u670d\u52a1\u8fd8\u4f1a\u63d0\u4f9b\u4e00\u4e9b\u7c7b\u4f3c\u8bdd\u9898\u4e1a\u52a1\u7b49\u5f62\u5f0f\u7684\u5185\u90e8\u8c03\u7528\uff0c\u5373\u4e1c\u897f\u5411\u6d41\u91cf\u8c03\u7528\u3002\u6240\u4ee5\u6574\u4f53\u7684\u670d\u52a1\u5c5e\u6027\u662f\u660e\u786e\u652f\u6301\u5916\u90e8\u548c\u5185\u90e8\u4e24\u79cd\u8c03\u7528\u6a21\u5f0f\uff0c\u7528\u6237\u6d41\u91cf\u7ecf\u8fc7\u4e03\u5c42\u8d1f\u8f7d\u5747\u8861\uff0c\u5206\u914d\u5230\u4e0d\u540c\u7684\u670d\u52a1\u5668\u518d\u8c03\u7528\u4e0d\u540c\u7684\u5b58\u50a8\u8d44\u6e90\uff0c\u4e1c\u897f\u5411\u4e5f\u7c7b\u4f3c\u3002\u6574\u4e2a\u4e03\u5c42\u96c6\u7fa4\u8d1f\u8d23\u5904\u7406\u5357\u5317\u548c\u4e1c\u897f\u5411\u6d41\u91cf\uff0c\u8fdb\u884c\u8d1f\u8f7d\u5747\u8861\u3001\u5b89\u5168\u8ba4\u8bc1\u548c\u8282\u70b9\u76d1\u63a7\u3002"),(0,a.kt)("p",null,"\u5f53\u628a\u591a\u9879\u4e1a\u52a1\u7684\u7684\u670d\u52a1\u7ec4\u5408\u5728\u4e00\u8d77\u65f6\uff0c\u5c31\u4f1a\u5f62\u6210\u5982\u4e0b\u6240\u793a\u7684\u6574\u4f53\u67b6\u6784\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/06/blog/beeto-4.png",alt:"\u6574\u4f53\u67b6\u6784"})),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u65e0\u8bba\u662f\u9002\u914d\u5c42\u3001\u4e1a\u52a1\u5c42\u8fd8\u662f\u57fa\u7840\u670d\u52a1\u5c42\uff0c\u90fd\u5b58\u5728\u7740\u82e5\u5e72\u670d\u52a1\u3002\u6bcf\u9879\u670d\u52a1\u7684\u90e8\u7f72\u67b6\u6784\u90fd\u62e5\u6709\u524d\u6587\u63d0\u5230\u7684\u5355\u4f53\u67b6\u6784\u7ec6\u8282\uff0c\u6240\u4ee5\u4e2d\u95f4\u5c31\u4f1a\u5b58\u5728\u7740\u82e5\u5e72\u4e2a\u4e03\u5c42\u96c6\u7fa4\uff0c\u8fd9\u5176\u5b9e\u5df2\u7ecf\u662f\u4e00\u5957\u975e\u5e38\u5e9e\u5927\u4e14\u590d\u6742\u7684\u7cfb\u7edf\u67b6\u6784\u4e86\u3002"),(0,a.kt)("p",null,"\u4f46\u7531\u4e8e\u76ee\u524d Beeto \u4ea7\u54c1\u8fd8\u5904\u4e8e\u521b\u4e1a\u9636\u6bb5\uff0c\u5c24\u5176\u662f\u4ea7\u54c1\u672c\u8eab\u5728\u4e2d\u4e1c\u672c\u571f\u843d\u5730\uff0c\u800c\u7814\u53d1\u4eba\u5458\u5728\u4e2d\u56fd\u7684\u60c5\u5f62\uff0c\u6309\u7167\u4e0a\u8ff0\u8fd9\u4e2a\u89c4\u6a21\u90e8\u7f72\uff0c\u9700\u8981\u6295\u5165\u975e\u5e38\u5927\u7684\u670d\u52a1\u5668\u6210\u672c\u548c\u7ef4\u62a4\u6210\u672c\u3002\u540c\u65f6\u540e\u671f\u968f\u7740\u4e1a\u52a1\u589e\u52a0\uff0c\u5355\u4f53\u670d\u52a1\u7684\u6570\u91cf\u52bf\u5fc5\u4e5f\u4f1a\u4e0d\u65ad\u589e\u52a0\uff0c\u4e0d\u7ba1\u5728\u6210\u672c\u8fd8\u662f\u8fd0\u7ef4\u64cd\u4f5c\u4e0a\u90fd\u4f1a\u53d8\u5f97\u66f4\u96be\u63a7\u5236\u3002"),(0,a.kt)("h3",{id:"\u591a\u670d\u52a1\u843d\u5730\u56f0\u96be"},"\u591a\u670d\u52a1\u843d\u5730\u56f0\u96be"),(0,a.kt)("p",null,"\u9664\u4e86\u4e0a\u8ff0\u63d0\u5230\u7684\u67b6\u6784\u90e8\u7f72\u590d\u6742\u5916\uff0c\u5176\u5b9e\u5728\u96c6\u7fa4\u5185\u90e8\u670d\u52a1\u4e4b\u95f4\u7684\u8c03\u7528\u4e5f\u662f\u975e\u5e38\u590d\u6742\u7684\u3002"),(0,a.kt)("p",null,"\u5357\u5317\u5411\u6d41\u91cf\u5206\u6563\u5230\u5404\u4e2a\u670d\u52a1\u6c60\uff0c\u4e1c\u897f\u5411\u6d41\u91cf\u4e5f\u4ea4\u9519\u5728\u5404\u4e2a\u670d\u52a1\u4e4b\u95f4\uff0c\u8fd9\u4e9b\u670d\u52a1\u7684\u8c03\u7528\u5173\u7cfb\u4e4b\u95f4\u9519\u7efc\u76f8\u4ea4\u3002\u5bf9\u6bcf\u4e00\u5957\u670d\u52a1\u800c\u8a00\u90fd\u9700\u8981\u53bb\u7ef4\u62a4\u8fd9\u4e9b\u8c03\u7528\u5173\u7cfb\uff0c\u4ece\u800c\u5bfc\u81f4\u8c03\u7528\u94fe\u8def\u4e0d\u6e05\u6670\u4e14\u4e0d\u597d\u7ba1\u7406\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/06/blog/beeto-5.png",alt:"\u6280\u672f\u6808\u5dee\u5f02\u5316"})),(0,a.kt)("p",null,"\u9664\u4e86\u8c03\u7528\u5173\u7cfb\u590d\u6742\u5916\uff0c\u6bcf\u4e2a\u670d\u52a1\u4e4b\u95f4\u8fd8\u5b58\u5728\u6280\u672f\u6808\u7684\u5dee\u5f02\u3002\u6bd4\u5982\u5728\u8c03\u7528\u534f\u8bae\u4e0a\uff0c\u6709\u4e9b\u670d\u52a1\u63d0\u4f9b\u7684\u662f HTTP\uff0c\u6709\u4e9b\u5219\u662f RPC\uff1b\u800c\u5728\u5f00\u53d1\u8bed\u8a00\u4e0a\uff0c\u5219\u4f1a\u51fa\u73b0 Java\u3001Go \u7b49\u591a\u8bed\u8a00\u6df7\u5408\u7684\u60c5\u51b5\u3002"),(0,a.kt)("p",null,"\u4ece\u4e0a\u8ff0\u8fd9\u4e9b\u7ec6\u8282\u5c31\u53ef\u4ee5\u770b\u51fa\uff0c\u8fd9\u6837\u7684\u591a\u670d\u52a1\u67b6\u6784\u4f53\u7cfb\u5728\u8fdb\u884c\u672c\u5730\u843d\u5730\u65f6\uff0c\u5c31\u4f1a\u5f88\u660e\u663e\u5730\u66b4\u9732\u51fa\u90e8\u7f72\u4e0e\u7ef4\u62a4\u6210\u672c\u9ad8\u7684\u95ee\u9898\uff0c\u540c\u65f6\u6bcf\u5957\u4e03\u5c42\u670d\u52a1\u90fd\u9700\u8981\u6295\u5165\u670d\u52a1\u5668\u6210\u672c\uff0c\u800c\u5404\u4e2a\u670d\u52a1\u7684\u6d41\u91cf\u5dee\u5f02\u53c8\u4f1a\u5bfc\u81f4\u6d41\u91cf\u4e0d\u5747\u8861\uff0c\u4ece\u800c\u5bfc\u81f4\u670d\u52a1\u5668\u7b49\u8d44\u6e90\u5229\u7528\u7387\u4f4e\uff0c\u9020\u6210\u8d44\u6e90\u6d6a\u8d39\u3002"),(0,a.kt)("p",null,"\u7531\u4e8e\u76ee\u524d Beeto \u7684\u6210\u672c\u91cd\u70b9\u653e\u5728\u4e86\u4e1a\u52a1\u5347\u7ea7\u4e0e\u8fed\u4ee3\u4e0a\uff0c\u6240\u4ee5\u5728\u67b6\u6784\u8bbe\u8ba1\u4e0a\u66f4\u503e\u5411\u4e8e\u4fbf\u4e8e\u7ef4\u62a4\u548c\u7edf\u4e00\u7ba1\u7406\uff0c\u90a3\u4e48\u5982\u4f55\u5b9e\u73b0\u8fd9\u4e2a\u76ee\u6807\u5462\uff1f"),(0,a.kt)("h2",{id:"apisix-\u7f51\u5173\u4e3a-beeto-\u67b6\u6784\u52a9\u529b"},"APISIX \u7f51\u5173\u4e3a Beeto \u67b6\u6784\u52a9\u529b"),(0,a.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u670d\u52a1\u7ba1\u7406\u4e0d\u4fbf\u4e0e\u6210\u672c\u6295\u5165\u5927\u7684\u75db\u70b9\uff0c\u540c\u65f6\u5f97\u76ca\u4e8e APISIX \u914d\u5408 etcd \u7684\u52a8\u6001\u8868\u73b0\u66f4\u7b26\u5408 Beeto \u7684\u4ea7\u54c1\u9700\u6c42\uff0c\u6240\u4ee5\u5728\u67b6\u6784\u90e8\u7f72\u4e2d\u5f15\u5165\u4e86 APISIX \u4f5c\u4e3a\u7f51\u5173\uff0c\u5e76\u642d\u5efa\u4e86\u7f51\u5173\u96c6\u7fa4\uff0c\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/06/blog/beeto-6.png",alt:"\u5168\u65b0\u67b6\u6784"})),(0,a.kt)("p",null,"\u7f51\u5173\u96c6\u7fa4\u5bf9\u6240\u6709\u7684\u670d\u52a1\u90fd\u63d0\u4f9b\u4e86\u6ce8\u518c\u4e2d\u5fc3\u3001\u670d\u52a1\u63a7\u5236\u3001\u670d\u52a1\u76d1\u63a7\u3001\u534f\u8bae\u8f6c\u53d1\u548c\u5e94\u7528\u63d2\u4ef6\u7b49\u6269\u5c55\u5de5\u5177\u3002\u5404\u4e2a\u670d\u52a1\u7684\u96c6\u7fa4\u90fd\u53ef\u4ee5\u7edf\u4e00\u5728\u7f51\u5173\u8fdb\u884c\u6ce8\u518c\uff0c\u65b0\u670d\u52a1\u4e0a\u4e0b\u7ebf\u4e5f\u90fd\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7\u7f51\u5173\u6765\u5b8c\u6210\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/06/blog/beeto-7.png",alt:"\u96c6\u7fa4\u8c03\u7528\u94fe\u8def"})),(0,a.kt)("p",null,"\u540c\u65f6\u5f15\u5165\u7f51\u5173\u540e\uff0c\u6574\u4e2a\u96c6\u7fa4\u7684\u8c03\u7528\u94fe\u8def\u4e5f\u53d8\u5f97\u975e\u5e38\u6e05\u6670\u3002\u5357\u5317\u5411\u6d41\u91cf\u7edf\u4e00\u7531\u7f51\u5173\u8fdb\u884c\u8def\u7531\u8f6c\u53d1\uff0c\u4e1c\u897f\u5411\u6d41\u91cf\u7531\u7f51\u5173\u8fdb\u884c\u5185\u7f51\u7684\u670d\u52a1\u8f6c\u53d1\u3002\u5728\u529f\u80fd\u5c42\u9762\uff0cAPISIX \u8d1f\u8d23\u7edf\u4e00\u7ef4\u62a4\u8fd9\u4e9b\u6d41\u91cf\u6240\u8c03\u7528\u7684\u8ba4\u8bc1\uff0c\u8fd9\u6837\u5728\u7f51\u5173\u5c42\u5c31\u80fd\u591f\u6e05\u6670\u4e86\u89e3\u5230\u5404\u670d\u52a1\u4e4b\u95f4\u7684\u6027\u80fd\u5dee\u5f02\u548c\u6d41\u91cf\u5dee\u5f02\u7b49\u4fe1\u606f\u3002"),(0,a.kt)("p",null,"\u603b\u7ed3\u6765\u8bf4\uff0c\u5f15\u5165 APISIX \u7f51\u5173\u505a\u67b6\u6784\u6574\u5408\u4e4b\u540e\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u89e3\u51b3\u4e86\u5357\u5317\u5411\u548c\u4e1c\u897f\u5411\u6d41\u91cf\u7edf\u4e00\u7684\u95ee\u9898\uff0c\u8282\u7701\u4e86\u8d44\u6e90\u548c\u4eba\u529b\u6210\u672c\uff0c\u5b9e\u73b0\u52a8\u6001\u7edf\u4e00\u7ba1\u7406\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u4e1a\u52a1\u670d\u52a1\u7684\u90e8\u7f72\u67b6\u6784\u91cd\u70b9\u5728\u670d\u52a1\u672c\u8eab\uff0c\u4ece\u800c\u5b9e\u73b0\u7f51\u5173\u72ec\u7acb\u5b58\u5728\u548c\u4e1a\u52a1\u65e0\u611f\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u6269\u5c55\u63d2\u4ef6\uff0c\u5404\u670d\u52a1\u7684\u6743\u9650\u9a8c\u8bc1\u3001\u8def\u7531\u5206\u53d1\u548c\u5065\u5eb7\u68c0\u67e5\u7b49\u529f\u80fd\u5747\u7531\u7f51\u5173\u6258\u7ba1\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u65b0\u4e1a\u52a1\u4e0a\u7ebf\u4e0e\u670d\u52a1\u8fc1\u79fb\u90fd\u53ef\u4ee5\u52a8\u6001\u5b8c\u6210\uff0c\u5bf9\u8fd0\u7ef4\u5341\u5206\u53cb\u597d\u3002")),(0,a.kt)("p",null,"\u5f53\u7136\uff0c\u7531\u4e8e\u5728\u6b64\u67b6\u6784\u4e2d\uff0c\u7f51\u5173\u627f\u8f7d\u4e86\u6240\u6709\u7684\u6d41\u91cf\uff0c\u540e\u671f\u968f\u7740\u670d\u52a1\u7684\u4e0d\u65ad\u6269\u5f20\uff0c\u670d\u52a1\u6570\u91cf\u4e5f\u4f1a\u589e\u52a0\uff0c\u5c4a\u65f6\u7f51\u5173\u7684\u7ef4\u62a4\u6210\u672c\u4e5f\u4f1a\u589e\u5927\uff0c\u5c31\u4f1a\u9700\u8981\u8003\u8651\u65b0\u7684\u5e94\u5bf9\u65b9\u6848\u3002\u4f46\u5728\u76ee\u524d\u80cc\u666f\u4e0b\uff0c\u8be5\u65b9\u6848\u4ecd\u662f\u6700\u4f18\u9009\u62e9\u3002"),(0,a.kt)("h2",{id:"\u5e94\u7528-apisix-\u540e\u7684\u4e1a\u52a1\u5b9e\u8df5"},"\u5e94\u7528 APISIX \u540e\u7684\u4e1a\u52a1\u5b9e\u8df5"),(0,a.kt)("p",null,"Apache APISIX \u4f5c\u4e3a\u7f51\u5173\u53ef\u4ee5\u5728\u7f51\u5173\u5c42\u7edf\u4e00\u5904\u7406\u591a\u79cd\u7b56\u7565\uff0c\u6bd4\u5982\u5b89\u5168\u8ba4\u8bc1\u3001\u670d\u52a1\u8f6c\u53d1\u548c\u5065\u5eb7\u68c0\u67e5\u7b49\u3002\u56e0\u6b64 Beeto \u5728\u5f15\u5165 APISIX \u540e\uff0c\u5728\u4e1a\u52a1\u5b9e\u8df5\u5c42\u9762\u4e5f\u505a\u4e86\u5f88\u591a\u5c1d\u8bd5\u3002"),(0,a.kt)("h3",{id:"\u5b89\u5168\u6027\u8ba4\u8bc1\u63d2\u4ef6"},"\u5b89\u5168\u6027\uff1a\u8ba4\u8bc1\u63d2\u4ef6"),(0,a.kt)("h4",{id:"\u5357\u5317\u5411\u6d41\u91cf-cookie"},"\u5357\u5317\u5411\u6d41\u91cf-Cookie"),(0,a.kt)("p",null,"\u6211\u4eec\u524d\u9762\u8bb2\u4e86\u516c\u7f51\u7528\u6237\u7684\u8bbf\u95ee\u6d41\u91cf\u7edf\u4e00\u7ecf\u8fc7\u7f51\u5173\u3002\u800c\u5bf9\u4e8e\u516c\u7f51\u7528\u6237\u7684\u8ba4\u8bc1\uff0c\u5219\u662f\u57fa\u4e8e Cookie \u8ba4\u8bc1\u7684\u7528\u6237\u8bf7\u6c42\u3002\u5f53\u7528\u6237\u8bf7\u6c42\u643a\u5e26 Cookie \u5230\u8fbe\u7f51\u5173\u65f6\uff0c\u5728\u7f51\u5173\u4e0a\u901a\u8fc7\u8ba4\u8bc1\u63d2\u4ef6\u5bf9\u5176\u8fdb\u884c\u9a8c\u8bc1\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/06/blog/beeto-8.png",alt:"Cookie \u5904\u7406\u6d41\u7a0b"})),(0,a.kt)("p",null,"\u5982\u4e0a\u65b9\u6d41\u7a0b\u56fe\u6240\u793a\uff0c\u63d2\u4ef6\u5185\u90e8\u4f1a\u5148\u8fdb\u884c\u672c\u5730\u5316\u9a8c\u8bc1\uff0c\u7136\u540e\u6839\u636e\u7b56\u7565\u8fdb\u884c\u8fdc\u7aef\u670d\u52a1\u7684\u8ba4\u8bc1\u6821\u9a8c\u3002\u5f53\u8bf7\u6c42\u5b8c\u6210 Cookie \u6821\u9a8c\u540e\uff0c\u518d\u8f6c\u53d1\u5230\u6307\u5b9a\u7684\u670d\u52a1\u4e0a\u3002"),(0,a.kt)("p",null,"\u8fd9\u6837\u505a\u7684\u4f18\u52bf\u4e3b\u8981\u4f53\u73b0\u5728\u4e24\u65b9\u9762\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u4e86\u7528\u6237 Cookie \u7684\u4fe1\u606f\u5b89\u5168\u3002\u56e0\u4e3a Cookie \u5c5e\u4e8e\u654f\u611f\u6570\u636e\uff0c\u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\u786e\u4fdd\u53ea\u6709\u7f51\u5173\u5c42\u80fd\u591f\u63a5\u6536\u5e76\u8fdb\u884c\u5904\u7406\uff0c\u5176\u4ed6\u4e1a\u52a1\u5c42\u5747\u4e0d\u80fd\u63a5\u89e6\u3002\u9632\u6b62\u4e1a\u52a1\u5904\u7406\u89c4\u5219\u4e0d\u4e00\u81f4\u800c\u5bfc\u81f4\u7684\u5b89\u5168\u95ee\u9898\uff0c\u4e5f\u6709\u6548\u907f\u514d\u4e86\u4eba\u4e3a\u56e0\u7d20\u548c\u4e0d\u89c4\u8303\u95ee\u9898\u5bfc\u81f4\u7684 Cookie \u6cc4\u9732\u7b49\u5b89\u5168\u95ee\u9898\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u964d\u4f4e\u4e86\u5404\u4e2a\u670d\u52a1 Cookie \u8ba4\u8bc1\u7684\u590d\u6742\u6027\u3002\u524d\u6587\u63d0\u5230\u4e86 Cookie \u5728\u8fc7\u7a0b\u4e2d\u9700\u8981\u8fdb\u884c\u672c\u5730\u9a8c\u8bc1\u6216\u8fdc\u7aef\u9a8c\u8bc1\uff0c\u540c\u65f6 Cookie \u5347\u7ea7\u65f6\uff0c\u5404\u4e2a\u670d\u52a1\u4e5f\u90fd\u9700\u8981\u540c\u6b65\u5347\u7ea7\u3002\u901a\u8fc7\u7f51\u5173\u8fdb\u884c\u7edf\u4e00\u7ba1\u7406\u4e0e\u6821\u9a8c\uff0c\u5728\u4e1a\u52a1\u670d\u52a1\u7684\u5904\u7406\u4e0a\u5c31\u7701\u53bb\u4e86\u6821\u9a8c\u6210\u672c\uff0c\u53ea\u9700\u5173\u6ce8\u7ed3\u679c\uff0c\u5229\u7528\u7ed3\u679c\u8fdb\u884c\u4e1a\u52a1\u89c4\u5219\u5904\u7406\uff0c\u4ece\u800c\u4fdd\u8bc1\u5404\u4e2a\u4e1a\u52a1\u5904\u7406\u66f4\u805a\u7126\u4e8e\u4e1a\u52a1\u672c\u8eab\u3002")),(0,a.kt)("h4",{id:"\u4e1c\u897f\u5411\u6d41\u91cf-token"},"\u4e1c\u897f\u5411\u6d41\u91cf-Token"),(0,a.kt)("p",null,"\u50cf\u4e0b\u56fe\u4e2d\u7684 A \u670d\u52a1\u8c03\u7528 B \u670d\u52a1\u7684\u64cd\u4f5c\uff0c\u901a\u5e38\u6765\u8bb2\u4e92\u76f8\u8c03\u7528\u65f6\u53ea\u9700\u63d0\u4f9b\u4e00\u4e2a API \u5373\u53ef\u5b8c\u6210\u3002\u4f46\u662f\u5728\u5185\u90e8\u6d41\u7a0b\u4e2d\uff0c\u9700\u8981\u53bb\u4e86\u89e3\u300cAPI \u88ab\u8c01\u8c03\u7528\u4e86\u3001\u901a\u8fc7\u4ec0\u4e48\u65b9\u5f0f\u8c03\u7528\u7684\u3001\u662f\u5426\u9700\u8981\u8fdb\u884c\u6743\u9650\u6821\u9a8c\uff0c\u662f\u5426\u9700\u8981\u5bf9\u8c03\u7814\u65b9\u8fdb\u884c\u63a7\u5236\u300d\u7b49\u8fd9\u4e9b\u95ee\u9898\uff0c\u90fd\u662f\u9700\u8981\u5185\u90e8\u53bb\u5904\u7406\u7684\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/06/blog/beeto-9.png",alt:"Token \u5904\u7406\u6d41\u7a0b"})),(0,a.kt)("p",null,"\u6709\u4e86 APISIX \u7f51\u5173\u4e4b\u540e\uff0c\u6d41\u7a0b\u5c31\u53d8\u5f97\u7b80\u5355\u5f88\u591a\u3002\u6240\u6709\u5185\u90e8\u670d\u52a1\u7684\u4e92\u76f8\u8c03\u7528\u53ea\u9700\u5728 Auth \u8ba4\u8bc1\u670d\u52a1\u4e0a\u8fdb\u884c\u6ce8\u518c\uff0c\u7ed9\u6bcf\u4e2a\u670d\u52a1\u9881\u53d1 App key \uff0c\u7528\u6765\u8868\u660e\u670d\u52a1\u7684\u8eab\u4efd ID\u3002\u540c\u65f6\u5185\u90e8\u670d\u52a1\u4e92\u76f8\u8c03\u7528\u4e5f\u4f1a\u7ecf\u8fc7\u7f51\u5173\uff0c\u643a\u5e26 Token \u7ecf\u8fc7\u7f51\u5173\u540e\uff0c\u7f51\u5173\u4f1a\u901a\u8fc7 Token \u63d2\u4ef6\u8fdb\u884c Token \u8ba4\u8bc1\u3002\u8ba4\u8bc1\u901a\u8fc7\u540e\u4f1a\u5c06\u8ba4\u8bc1\u6807\u8bc6\u4f20\u9012\u7ed9\u88ab\u8c03\u7528\u7684\u670d\u52a1\uff0c\u6574\u4e2a\u8fc7\u7a0b\u4e2d\u670d\u52a1\u7edf\u4e00\u8fdb\u884c\u8ba4\u8bc1\u6ce8\u518c\uff0c\u5b8c\u6210\u4e92\u76f8\u8c03\u7528\u3002"),(0,a.kt)("p",null,"\u5f97\u76ca\u4e8e App key \u7684 Token \u89c4\u5219\uff0c\u4e0a\u8ff0\u64cd\u4f5c\u4fbf\u4e8e\u8ffd\u6eaf\u8c03\u7528\u6765\u6e90\uff0c\u4ece\u800c\u8fdb\u884c\u95ee\u9898\u6392\u67e5\u548c\u6743\u9650\u63a7\u5236\uff0c\u5bf9\u975e\u6cd5\u8c03\u7528\u4e5f\u8d77\u5230\u4e86\u6709\u6548\u7684\u63a7\u5236\u3002"),(0,a.kt)("p",null,"\u6240\u4ee5\u65e0\u8bba\u662f\u5357\u5317\u5411\u6d41\u91cf\u8fd8\u662f\u4e1c\u897f\u5411\u6d41\u91cf\u7684\u8ba4\u8bc1\uff0c\u7edf\u4e00\u8ba4\u8bc1\u7684\u4f18\u52bf\u5c31\u662f\u4fdd\u8bc1\u4e86\u96c6\u7fa4\u7684\u5b89\u5168\u6027\u4e0e\u7edf\u4e00\u6027\uff0c\u5728\u95ee\u9898\u6392\u67e5\u6eaf\u6e90\u548c\u8c03\u7528\u63a7\u5236\u7b49\u65b9\u9762\u90fd\u6709\u5f88\u5927\u7684\u5e2e\u52a9\u3002"),(0,a.kt)("h3",{id:"\u4f38\u7f29\u6027\u65e0\u72b6\u6001\u670d\u52a1\u6269\u5bb9\u8fc1\u79fb"},"\u4f38\u7f29\u6027\uff1a\u65e0\u72b6\u6001\u670d\u52a1\u6269\u5bb9\u8fc1\u79fb"),(0,a.kt)("p",null,"\u76ee\u524d Beeto \u7684\u96c6\u7fa4\u6574\u4f53\u90e8\u7f72\u67b6\u6784\u662f\u4ece\u4e0a\u5230\u4e0b\u662f\u6309\u7167 APISIX \u7f51\u5173\u96c6\u7fa4-\u65e0\u72b6\u6001\u670d\u52a1\u7684\u4e1a\u52a1\u670d\u52a1\u96c6\u7fa4-\u6709\u72b6\u6001\u670d\u52a1\u7684\u6570\u636e\u4e2d\u5fc3\u96c6\u7fa4\u7ec4\u6210\u3002\u5728\u4e2d\u4e1c\u672c\u5730\u843d\u5730\u90e8\u7f72\u65f6\uff0c\u90fd\u662f\u90e8\u7f72\u5728\u5404\u5927\u4e91\u96c6\u7fa4\u4e0a\u7684\u3002\u6309\u7167\u4e2d\u4e1c\u5730\u533a\u7684\u4e91\u8986\u76d6\u89c4\u6a21\u548c\u4e0d\u540c\u5730\u533a\u7684\u4e91\u5382\u5546\uff0c\u5728\u8fdb\u884c\u670d\u52a1\u90e8\u7f72\u65f6\u5c31\u9700\u8981\u8003\u8651\u4e91\u670d\u52a1\u7684\u6269\u5bb9\u548c\u8fc1\u79fb\u95ee\u9898\u3002"),(0,a.kt)("p",null,"\u5728\u8fc1\u79fb\u7684\u8fc7\u7a0b\u4e2d\uff0cBeeto \u91cd\u70b9\u5173\u6ce8\u5728\u65e0\u72b6\u6001\u670d\u52a1\u7684\u8fc1\u79fb\u3002\u56e0\u4e3a\u6570\u636e\u4e2d\u5fc3\u7684\u8fc1\u79fb\u6210\u672c\uff0c\u51b3\u5b9a\u4e86\u5b83\u4e0d\u9002\u5408\u9002\u5408\u505a\u52a8\u6001\u8c03\u6574\uff1b\u540c\u65f6\u5927\u90e8\u5206\u8bf7\u6c42\u538b\u529b\u90fd\u662f\u7531\u65e0\u72b6\u6001\u670d\u52a1\u6765\u627f\u8f7d\u7684\uff0c\u6240\u4ee5\u4fdd\u8bc1\u65e0\u72b6\u6001\u670d\u52a1\u5177\u6709\u4e00\u4e2a\u826f\u597d\u7684\u4f38\u7f29\u6027\u662f\u975e\u5e38\u91cd\u8981\u7684\u524d\u63d0\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/06/blog/beeto-10.png",alt:"\u8fc1\u79fb\u8fc7\u7a0b"})),(0,a.kt)("p",null,"\u5728 Beeto \u7684\u67b6\u6784\u4e2d\uff0c\u670d\u52a1\u4f38\u7f29\u6027\u4e3b\u8981\u4f53\u73b0\u5728\u4e24\u4e2a\u65b9\u9762\uff0c\u5373\u5355\u4f53\u670d\u52a1\u4f38\u7f29\u6027\u548c\u6574\u4f53\u96c6\u7fa4\u4f38\u7f29\u6027\u3002\u6bd4\u5982\u67d0\u4e2a\u5355\u4f53\u670d\u52a1\u51fa\u73b0\u8d44\u6e90\u4e0d\u591f\uff0c\u9700\u8981\u8fdb\u884c\u6269\u5bb9\u64cd\u4f5c\u65f6\uff0c\u5229\u7528 APISIX \u7f51\u5173\u5c31\u53ef\u4ee5\u8fdb\u884c\u52a8\u6001\u8282\u70b9\u6dfb\u52a0\u5b9e\u73b0\u6269\u5bb9\u3002\u540c\u6837\u5728\u8de8\u96c6\u7fa4\u6216\u8005\u8de8\u4e91\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u901a\u8fc7\u90e8\u7f72\u591a\u4e2a APISIX \u7f51\u5173\uff0c\u5c06\u4e0d\u540c\u7684\u670d\u52a1\u8fc1\u79fb\u5230\u4e0d\u540c\u7684\u7f51\u5173\u8282\u70b9\u4e0b\u5b9e\u73b0\u96c6\u7fa4\u4f38\u7f29\u6027\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u4e1a\u52a1\u670d\u52a1\u6765\u8bf4\uff0c\u6574\u4f53\u67b6\u6784\u6ca1\u6709\u53d8\u5316\uff0c\u5c31\u53ef\u4ee5\u5728\u7f51\u5173\u5c42\u5b9e\u73b0\u5bf9\u5404\u4e2a\u670d\u52a1\u7684\u52a8\u6001\u6269\u7f29\u5bb9\u3001\u670d\u52a1\u8fc1\u79fb\u7b49\u3002\u6574\u4e2a\u8fc7\u7a0b\u7684\u65b9\u6848\u548c\u76ee\u6807\u90fd\u5f88\u660e\u786e\uff0c\u4e00\u65e6\u6d89\u53ca\u53d8\u66f4\uff0c\u4e5f\u4e0d\u4f1a\u9020\u6210\u6574\u4f53\u67b6\u6784\u7684\u4e0d\u7a33\u5b9a\u3002"),(0,a.kt)("h3",{id:"\u529f\u80fd\u6269\u5c55\u6027\u4e1a\u52a1\u52a8\u6001\u8f6c\u53d1"},"\u529f\u80fd\u6269\u5c55\u6027\uff1a\u4e1a\u52a1\u52a8\u6001\u8f6c\u53d1"),(0,a.kt)("p",null,"\u9664\u4e86\u4e0a\u8ff0\u8fd9\u4e9b\u8033\u719f\u80fd\u8be6\u7684\u7f51\u5173\u901a\u7528\u573a\u666f\u5b9e\u8df5\u5916\uff0cApache APISIX \u4e3a Beeto \u7684\u4e1a\u52a1\u52a8\u6001\u8f6c\u53d1\u5c42\u9762\u4e5f\u63d0\u4f9b\u4e86\u975e\u5e38\u5927\u7684\u5e2e\u52a9\u3002"),(0,a.kt)("p",null,"\u719f\u6089 APP \u7aef UI \u548c\u540e\u7aef\u7684\u670b\u53cb\u5e94\u8be5\u90fd\u77e5\u9053\uff0c\u4e0d\u540c\u7684\u4ea7\u54c1\u9875\u9762\u662f\u7531\u4e0d\u540c\u7684\u670d\u52a1\u63d0\u4f9b\u3002\u4e00\u4e2a\u9875\u9762\u662f\u7531\u4e0d\u540c\u6a21\u5757\u7ec4\u6210\u7684\uff0c\u5176\u4e2d\u7684\u5185\u5bb9\u5168\u90e8\u7531\u63a5\u53e3\u4e0b\u53d1\u3002\u63a5\u53e3\u4e0b\u53d1\u4ec0\u4e48\u6a21\u5757\u7684\u6570\u636e\uff0c\u7aef\u4e0a\u5c31\u6e32\u67d3\u6210\u4ec0\u4e48\u6837\u3002\u8fd9\u662f\u4e00\u79cd\u8054\u5408\u5ba2\u6237\u7aef\u7684\u6e32\u67d3\u89c4\u8303\uff0c\u76ee\u7684\u662f\u8ba9\u5ba2\u6237\u7aef\u7684\u6e32\u67d3\u8fc7\u7a0b\u66f4\u901a\u7528\uff0c\u4e1a\u52a1\u5904\u7406\u66f4\u7075\u6d3b\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/06/blog/beeto-11.png",alt:"PageA"})),(0,a.kt)("p",null,"\u6bd4\u5982\u4e0a\u56fe PageA \u7684\u5b9e\u73b0\uff0c\u5c31\u662f\u5ba2\u6237\u7aef\u8c03\u7528\u4e86\u670d\u52a1 A \u7684\u63a5\u53e3\uff0c\u4e0b\u53d1\u5bf9\u5e94\u6a21\u5757\u6570\u636e\uff0c\u5b8c\u6210 PageA \u7684\u6e32\u67d3\u3002\u8fd9\u79cd\u64cd\u4f5c\u4f1a\u51fa\u73b0\u4e00\u4e2a\u95ee\u9898\uff0c\u5ba2\u6237\u7aef\u9700\u8981\u53bb\u7ef4\u62a4\u6bcf\u4e00\u4e2a\u9875\u9762\uff0c\u5bf9\u63a5\u6bcf\u4e00\u4e2a\u670d\u52a1\u7684\u63a5\u53e3\u3002\u5982\u679c\u5185\u5bb9\u51fa\u73b0\u53d8\u66f4\uff0c\u5c31\u9700\u8981\u8fdb\u884c\u53d1\u7248\u89e3\u51b3\uff0c\u64cd\u4f5c\u6027\u548c\u6548\u7387\u4f53\u73b0\u4e0a\u90fd\u5f88\u4e0d\u53cb\u597d\u3002"),(0,a.kt)("p",null,"\u89e3\u51b3\u4e0a\u8ff0\u95ee\u9898\u7684\u4e3b\u8981\u601d\u8def\u5c31\u662f\u5728\u6574\u4f53\u67b6\u6784\u4e0a\u5b9e\u73b0\u670d\u52a1\u7684\u7edf\u4e00\u5206\u53d1\u3002\u5373\u5ba2\u6237\u7aef\u9996\u5148\u7edf\u4e00\u8bf7\u6c42\u63a5\u53e3\u5730\u5740\uff0c\u5c06\u8fd9\u4e00\u7c7b\u7684\u6240\u6709\u8bf7\u6c42\u90fd\u8f6c\u53d1\u5230\u4e00\u4e2a\u63a5\u53e3\uff0c\u5728\u7f51\u5173\u5c42\u5bf9 URL \u5730\u5740\u8fdb\u884c\u8bf7\u6c42\u53c2\u6570\u548c URL \u89c4\u5219\u7684\u5904\u7406\uff0c\u7136\u540e\u5f15\u5165\u5206\u53d1\u63d2\u4ef6\u3002\u6700\u540e\u6309\u7167\u914d\u7f6e\u89c4\u5219\uff0c\u5c06\u89e3\u6790\u540e\u7684\u8bf7\u6c42\u5728\u7f51\u5173\u5c42\u76f4\u63a5\u5c06\u8bf7\u6c42\u8f6c\u53d1\u5230\u6307\u5b9a\u7684\u670d\u52a1\u4e0a\u53bb\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/06/blog/beeto-12.png",alt:"\u4e1a\u52a1\u52a8\u6001\u8f6c\u53d1"})),(0,a.kt)("p",null,"\u6574\u4e2a\u8fc7\u7a0b\u5ba2\u6237\u7aef\u53ea\u9700\u786e\u5b9a\u6e32\u67d3\u89c4\u8303\uff0c\u65e0\u9700\u5173\u5fc3\u6570\u636e\u6765\u6e90\u3002\u7f51\u5173\u5c42\u627f\u62c5\u4e86\u4e1a\u52a1\u5206\u53d1\u7684\u804c\u8d23\uff0c\u76f4\u63a5\u5c06\u6d41\u91cf\u8fdb\u884c\u8f6c\u53d1\u3002\u540c\u65f6 APISIX \u4e2d\u7684\u63d2\u4ef6\u914d\u7f6e\u6587\u4ef6\u53ef\u4ee5\u505a\u5230\u52a8\u6001\u5b9e\u65f6\u66f4\u65b0\uff0c\u8f6c\u53d1\u89c4\u5219\u4e5f\u53ef\u4ee5\u52a8\u6001\u8c03\u6574\uff0c\u5341\u5206\u7075\u6d3b\u3002\u5176\u5b9e\u7c7b\u4f3c\u50cf BFF(Backend for Frontend) \u67b6\u6784\u7684\u5e94\u7528\uff0c\u8fd9\u79cd\u9700\u6c42\u90fd\u53ef\u4ee5\u7f51\u5173\u5c42\u8fdb\u884c\u89e3\u51b3\u3002"),(0,a.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,a.kt)("p",null,"\u672c\u6587\u4ece Beeto \u7684\u4ea7\u54c1\u8bbe\u8ba1\u89c6\u89d2\uff0c\u5448\u73b0\u4e86 Beeto \u5f15\u5165 Apache APISIX \u7f51\u5173\u540e\u7684\u8bbe\u8ba1\u601d\u8def\u548c\u4e0e\u4e1a\u52a1\u5c42\u9762\u7684\u4e00\u4e9b\u5e94\u7528\u5b9e\u8df5\u3002\u6709\u4e86 APISIX \u7f51\u5173\u7684\u52a0\u6301\uff0c\u5728\u63a7\u5236\u8d44\u6e90\u6210\u672c\u4e0e\u4e1a\u52a1\u4ea7\u54c1\u7ebf\u591a\u7684\u524d\u63d0\u4e0b\uff0c\u4e5f\u5e2e\u52a9 Beeto \u5b9e\u73b0\u4e86\u4e2d\u4e1c\u672c\u5730\u5316\u90e8\u7f72\u3001\u7edf\u4e00\u7ba1\u7406\u53ca\u8fd0\u7ef4\u53cb\u597d\u7684\u573a\u666f\u3002"))}s.isMDXComponent=!0}}]);