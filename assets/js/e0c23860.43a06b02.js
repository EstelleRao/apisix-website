"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[99129],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},25750:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const a={title:"Build an image from the source codes"},i=void 0,c={unversionedId:"build",id:"version-apisix-3.1.0/build",isDocsHomePage:!1,title:"Build an image from the source codes",description:"Docker images are not official ASF releases but provided for convenience. Recommended usage is always to build the source.",source:"@site/docs-apisix-docker_versioned_docs/version-apisix-3.1.0/build.md",sourceDirName:".",slug:"/build",permalink:"/docs/docker/apisix-3.1.0/build",editUrl:"/edit#https://github.com/apache/apisix-docker/edit/release/apisix-3.1.0/docs/en/latest/build.md",tags:[],version:"apisix-3.1.0",frontMatter:{title:"Build an image from the source codes"},sidebar:"version-apisix-3.1.0/docs",next:{title:"Deploy Apache APISIX with Docker",permalink:"/docs/docker/apisix-3.1.0/manual"}},l=[{value:"Build an image from source",id:"build-an-image-from-source",children:[]}],s={toc:l};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"build-an-image-from-source"},"Build an image from source"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Docker images are not official ASF releases but provided for convenience. Recommended usage is always to build the source.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"install release version (Apache releases are beginning from version 0.9):")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Assign Apache release version number to variable `APISIX_VERSION`, for example: 3.0.0. The latest version can be find at `https://github.com/apache/apisix/releases`\n\nexport APISIX_VERSION=3.0.0\nmake build-on-debian\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"install master branch version, which has latest code(ONLY for the developer's convenience):")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export APISIX_VERSION=master\nmake build-on-debian\n")))}p.isMDXComponent=!0}}]);