"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5642],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,f=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42352:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(25773),i=(n(27378),n(35318));const a={title:"Apache APISIX Vulnerability for Rewriting X-REAL-IP Header (CVE-2022-24112)",keywords:["Vulnerability","Header","IP restrictions"],description:"In versions prior to Apache APISIX 2.12.1, there is a risk of rewriting X-REAL-IP header after enabling the Apache APISIX `batch- requests` plugin.",tags:["Vulnerabilities"],image:"https://static.apiseven.com/2022/blog/0818/cve/CVE-2022-24112.png"},l=void 0,o={permalink:"/blog/2022/02/11/cve-2022-24112",source:"@site/blog/2022/02/11/cve-2022-24112.md",title:"Apache APISIX Vulnerability for Rewriting X-REAL-IP Header (CVE-2022-24112)",description:"In versions prior to Apache APISIX 2.12.1, there is a risk of rewriting X-REAL-IP header after enabling the Apache APISIX `batch- requests` plugin.",date:"2022-02-11T00:00:00.000Z",formattedDate:"February 11, 2022",tags:[{label:"Vulnerabilities",permalink:"/blog/tags/vulnerabilities"}],readingTime:1.23,truncated:!0,authors:[],prevItem:{title:"How to develop plugin in API Gateway",permalink:"/blog/2022/02/16/file-logger-api-gateway"},nextItem:{title:"Integrating Splunk HTTP Event Collector with API Gateway",permalink:"/blog/2022/02/10/splunk-apisix-integration"}},s={authorsImageUrls:[]},c=[{value:"Problem Description",id:"problem-description",children:[],level:2},{value:"Affected Versions",id:"affected-versions",children:[],level:2},{value:"Solution",id:"solution",children:[],level:2},{value:"Vulnerability details",id:"vulnerability-details",children:[],level:2},{value:"Contributor Profile",id:"contributor-profile",children:[],level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In versions prior to Apache APISIX 2.12.1, there is a risk of rewriting X-REAL-IP header after enabling the Apache APISIX ",(0,i.kt)("inlineCode",{parentName:"p"},"batch-requests")," plug-in. Now the processing information will be announced.")),(0,i.kt)("h2",{id:"problem-description"},"Problem Description"),(0,i.kt)("p",null,"In versions of Apache APISIX prior to 2.12.1 (excluding 2.12.1 and 2.10.4), there is a risk of rewriting the X-REAL-IP header when the Apache APISIX batch-requests plugin is enabled."),(0,i.kt)("p",null,"This risk leads to two problems:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An attacker bypasses the IP restrictions on the Apache APISIX data plane via the batch-requests plugin. For example, bypassing IP black and white list restrictions."),(0,i.kt)("li",{parentName:"ul"},"If the user uses the default Apache APISIX configuration (Admin API enabled, with the default Admin Key and no additional admin port assigned), an attacker can invoke the Admin API via the batch-requests plug-in.")),(0,i.kt)("h2",{id:"affected-versions"},"Affected Versions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All versions of Apache APISIX between 1.3 ~ 2.12.1 (excluding 2.12.1)"),(0,i.kt)("li",{parentName:"ul"},"All LTS versions of Apache APISIX between 2.10.0 ~ 2.10.4 (excluding 2.10.4)")),(0,i.kt)("h2",{id:"solution"},"Solution"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This issue has been resolved in versions 2.12.1 and 2.10.4, please update to the relevant version as soon as possible."),(0,i.kt)("li",{parentName:"ul"},"In affected versions of Apache APISIX, you can avoid this risk by explicitly commenting out batch-requests in the conf/config.yaml and conf/config-default.yaml files and restarting Apache APISIX.")),(0,i.kt)("h2",{id:"vulnerability-details"},"Vulnerability details"),(0,i.kt)("p",null,"Severity\uff1aHigh"),(0,i.kt)("p",null,"Vulnerability public date: February 11, 2022"),(0,i.kt)("p",null,"CVE details: ",(0,i.kt)("a",{parentName:"p",href:"https://nvd.nist.gov/vuln/detail/CVE-2022-24112"},"https://nvd.nist.gov/vuln/detail/CVE-2022-24112")),(0,i.kt)("h2",{id:"contributor-profile"},"Contributor Profile"),(0,i.kt)("p",null,"This vulnerability was reported to the Apache Software Foundation by Sauercloud. Thank you for your contributions to the Apache APISIX community."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1644632196291-6b9bca14-7893-47c7-9f93-99c28ff54044.png",alt:"Sauercloud"})))}u.isMDXComponent=!0}}]);