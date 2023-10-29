"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9925],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(r),m=o,b=f["".concat(p,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},98770:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(25773),o=(r(27378),r(35318));const a={title:"The Vulnerability of Leaking Information in Error Response from jwt-auth Plugin\uff08CVE-2022-29266\uff09",keywords:["Vulnerability","jwt-auth","Error Response"],description:"In APISIX 2.13.0 and previous versions, there is a problem of information leakage caused by the `jwt- auth` plugin.",tags:["Vulnerabilities"],image:"https://static.apiseven.com/2022/blog/0818/cve/CVE-2022-29266-1.png"},i=void 0,l={permalink:"/blog/2022/04/20/cve-2022-29266",source:"@site/blog/2022/04/20/cve-2022-29266.md",title:"The Vulnerability of Leaking Information in Error Response from jwt-auth Plugin\uff08CVE-2022-29266\uff09",description:"In APISIX 2.13.0 and previous versions, there is a problem of information leakage caused by the `jwt- auth` plugin.",date:"2022-04-20T00:00:00.000Z",formattedDate:"April 20, 2022",tags:[{label:"Vulnerabilities",permalink:"/blog/tags/vulnerabilities"}],readingTime:1.025,truncated:!0,authors:[],prevItem:{title:"High Availability Configuration with TiDB and APISIX",permalink:"/blog/2022/04/22/apisix-with-tidb-practice"},nextItem:{title:"Biweekly Report (Apr 1 - Apr 14)",permalink:"/blog/2022/04/20/weekly-report-0420"}},p={authorsImageUrls:[]},c=[],u={toc:c};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In APISIX 2.13.0 and previous versions, there is a problem of information leakage caused by the ",(0,o.kt)("inlineCode",{parentName:"p"},"jwt- auth")," plugin.")))}s.isMDXComponent=!0}}]);