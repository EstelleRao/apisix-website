"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[36139],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=i,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},53967:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const o={title:"FAQ"},a=void 0,s={unversionedId:"FAQ",id:"version-0.4.0/FAQ",isDocsHomePage:!1,title:"FAQ",description:"How to bind Service and Upstream?",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-0.4.0/FAQ.md",sourceDirName:".",slug:"/FAQ",permalink:"/docs/ingress-controller/0.4.0/FAQ",editUrl:"/edit#https://github.com/apache/apisix-ingress-controller/edit/v0.4.0/docs/en/latest/FAQ.md",tags:[],version:"0.4.0",frontMatter:{title:"FAQ"},sidebar:"version-0.4.0/docs",previous:{title:"Contributing to apisix-ingress-controller",permalink:"/docs/ingress-controller/0.4.0/contribute"}},l=[],c={toc:l};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"How to bind Service and Upstream?")),(0,i.kt)("p",null,"All resource objects are uniquely determined by the namespace / name / port combination Id. If the combined Id is the same, the ",(0,i.kt)("inlineCode",{parentName:"p"},"service")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"upstream")," will be considered as a binding relationship."),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"When modifying a CRD, how do other binding objects perceive it?")),(0,i.kt)("p",null,"This is a cascading update problem, see for details ",(0,i.kt)("a",{parentName:"p",href:"/docs/ingress-controller/0.4.0/design"},"apisix-ingress-controller Design ideas")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Can I mix CRDs and admin api to define routing rules?")),(0,i.kt)("p",null,"No, currently we are implementing one-way synchronization, that is, CRDs file -> Apache AIPSIX. If the configuration is modified separately through admin api, it will not be synchronized to CRDs in Kubernetes."),(0,i.kt)("p",null,"This is because CRDs are generally declared in the file system, and Apply to enter Kubernetes etcd, we follow the definition of CRDs and synchronize to Apache Apisix Data Plane, but the reverse will make the situation more complicated."),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},'Why there are some error logs like "list upstreams failed, err: http get failed, url: blahblahblah, err: status: 401"?')),(0,i.kt)("p",null,"So far apisix-ingress-controller doesn't support set admin_key for Apache APISIX, so when you deploy your APISIX cluster, admin_key should be removed from config."),(0,i.kt)("p",null,"Note since APISIX have two configuration files, the first is config.yaml, which contains the user specified configs, the other is config-default.yaml, which has all default items, config items in these two files will be merged. So admin_key in both files should be removed. You can customize these two configuration files and mount them to APISIX deployment."),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Failed to create route with ",(0,i.kt)("inlineCode",{parentName:"li"},"ApisixRoute"),"?")),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix-ingress-controller")," creates a route with CRD, it checks the ",(0,i.kt)("inlineCode",{parentName:"p"},"Endpoint")," resources in Kubernetes (matched by namespace_name_port). If the corresponding endpoint information is not found, the route will not be created and wait for the next retry."),(0,i.kt)("p",null,"Tips: The failure caused by empty upstream nodes is a limitation of Apache APISIX, related ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/3072"},"issue")),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"What is the retry rule of ",(0,i.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller"),"?")),(0,i.kt)("p",null,"If an error occurs during the process of ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix-ingress-controller")," parsing CRD and distributing the configuration to APISIX, a retry will be triggered."),(0,i.kt)("p",null,"The delayed retry method is adopted. After the first failure, it is retried once per second. After 5 retries are triggered, the slow retry strategy will be enabled, and the retry will be performed every 1 minute until it succeeds."))}p.isMDXComponent=!0}}]);