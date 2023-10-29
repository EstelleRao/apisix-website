"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6514],{35318:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(27378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=u(r),m=i,g=h["".concat(c,".").concat(m)]||h[m]||p[m]||a;return r?n.createElement(g,o(o({ref:t},s),{},{components:r})):n.createElement(g,o({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},16280:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(25773),i=(r(27378),r(35318));const a={title:"High Availability Configuration with TiDB and APISIX",authors:[{name:"Chao Zhang",title:"Author",url:"https://github.com/tokers",image_url:"https://avatars.githubusercontent.com/u/10428333?v=4"},{name:"Estelle Rao",title:"Technical Writer",url:"https://github.com/EstelleRao",image_url:"https://github.com/EstelleRao.png"}],keywords:["API Gateway","APISIX","TiDB","High Availability Configuration","TiDB Hackathon"],description:"The APISIX team presented TiDB and APISIX to realize configuration center in TiDB Hackathon 2021. This article will bring stories behind the project.",tags:["Ecosystem"]},o=void 0,l={permalink:"/blog/2022/04/22/apisix-with-tidb-practice",source:"@site/blog/2022/04/22/apisix-with-tidb-practice.md",title:"High Availability Configuration with TiDB and APISIX",description:"The APISIX team presented TiDB and APISIX to realize configuration center in TiDB Hackathon 2021. This article will bring stories behind the project.",date:"2022-04-22T00:00:00.000Z",formattedDate:"April 22, 2022",tags:[{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:10.915,truncated:!0,authors:[{name:"Chao Zhang",title:"Author",url:"https://github.com/tokers",image_url:"https://avatars.githubusercontent.com/u/10428333?v=4",imageURL:"https://avatars.githubusercontent.com/u/10428333?v=4"},{name:"Estelle Rao",title:"Technical Writer",url:"https://github.com/EstelleRao",image_url:"https://github.com/EstelleRao.png",imageURL:"https://github.com/EstelleRao.png"}],prevItem:{title:"Interview with JU Zhiyuan: Becoming One of the 918 ASF Members, I Felt Thrilled and Proud",permalink:"/blog/2022/04/29/interview-juzhiyuan-apache-member"},nextItem:{title:"The Vulnerability of Leaking Information in Error Response from jwt-auth Plugin\uff08CVE-2022-29266\uff09",permalink:"/blog/2022/04/20/cve-2022-29266"}},c={authorsImageUrls:[void 0,void 0]},u=[],s={toc:u};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In the TiDB Hackathon 2021, the APISIX team (team leader: Chao Zhang, team members: Zeping Bai, Zhengsong Tu, Jinghan Chen) presented the ability of TiDB to interface with Apache APISIX to implement a universal configuration center. In this article, we will bring you some stories behind the project and the future outlook, if you are interested in the project, please feel free to participate in the project.")))}p.isMDXComponent=!0}}]);