"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[27514],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},42107:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"Deploy with Docker"},i=void 0,l={unversionedId:"deploy-with-docker",id:"version-2.8/deploy-with-docker",isDocsHomePage:!1,title:"Deploy with Docker",description:"NOTE: We support Docker Image, please visit DockerHub for more information. The following steps are for building Docker Image manually.",source:"@site/docs-apisix-dashboard_versioned_docs/version-2.8/deploy-with-docker.md",sourceDirName:".",slug:"/deploy-with-docker",permalink:"/zh/docs/dashboard/2.8/deploy-with-docker",editUrl:"/zh/edit#https://github.com/apache/apisix-dashboard/edit/release/2.8/docs/zh/latest/deploy-with-docker.md",tags:[],version:"2.8",frontMatter:{title:"Deploy with Docker"},sidebar:"version-2.8/docs",previous:{title:"Deploy with Source Codes",permalink:"/zh/docs/dashboard/2.8/deploy"},next:{title:"Deploy with RPM",permalink:"/zh/docs/dashboard/2.8/deploy-with-rpm"}},s=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Build",id:"build",children:[]},{value:"Launch",id:"launch",children:[]},{value:"Other",id:"other",children:[]}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE:")," We support Docker Image, please visit ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/apache/apisix-dashboard"},"DockerHub")," for more information. The following steps are for building Docker Image manually."),(0,a.kt)("p",null,"To build the Dashboard with Docker, you simply download the ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," file from the ",(0,a.kt)("strong",{parentName:"p"},"root directory")," to your device (no need to download all source codes) then follow this guide."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"manager-api")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"web")," will be included in this build guide product."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Before using Docker to build images and start containers, make sure that the following dependencies are installed and running in your environment."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Docker")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://etcd.io/docs/v3.4.0/dl-build/"},"etcd")," 3.4.0+")),(0,a.kt)("h2",{id:"build"},"Build"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# Execute the build command in the directory where the Dockerfile is located (by default, the project root), specifying the tag manually.\n$ docker build -t apisix-dashboard:$tag .\n\n# For users in mainland China, the `ENABLE_PROXY` parameter can be provided to speed up module downloads.\n$ docker build -t apisix-dashboard:$tag . --build-arg ENABLE_PROXY=true\n\n# If you want to use the latest codes to build, you can specify the `APISIX_DASHBOARD_VERSION` parameter to `master`.\n# This parameter can also be specified as branch name of a specific version, such as `v2.1.1`.\n$ docker build -t apisix-dashboard:$tag . --build-arg APISIX_DASHBOARD_VERSION=master\n")),(0,a.kt)("h2",{id:"launch"},"Launch"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Preparing configuration files")),(0,a.kt)("p",null,"Before starting the container, the configuration file ",(0,a.kt)("inlineCode",{parentName:"p"},"conf.yaml")," needs to be prepared inside the ",(0,a.kt)("strong",{parentName:"p"},"host")," to override the default ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard/blob/master/api/conf/conf.yaml"},"configuration file")," inside the container."),(0,a.kt)("p",null,"Kindly note:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Only when ",(0,a.kt)("inlineCode",{parentName:"li"},"conf.listen.host")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"0.0.0.0")," can the external network access the services within the container."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"conf.etcd.endpoints")," must be able to access the ",(0,a.kt)("inlineCode",{parentName:"li"},"etcd")," service within the container. For example: use ",(0,a.kt)("inlineCode",{parentName:"li"},"host.docker.internal:2379")," so that the container can access ",(0,a.kt)("inlineCode",{parentName:"li"},"etcd")," on the host network.")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Launch the Dashboard")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# /path/to/conf.yaml Requires an absolute path pointing to the configuration file mentioned above.\n$ docker run -d -p 9000:9000 -v /path/to/conf.yaml:/usr/local/apisix-dashboard/conf/conf.yaml --name apisix-dashboard apisix-dashboard:$tag\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Check if the container started successfully")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ docker ps -a\n")),(0,a.kt)("p",null,"If the container ",(0,a.kt)("inlineCode",{parentName:"p"},"apisix-dashboard")," is ok, visit ",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:9000")," to use the dashboard with GUI, where the default username and password are ",(0,a.kt)("inlineCode",{parentName:"p"},"admin"),"."),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Stop")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ docker stop apisix-dashboard\n")),(0,a.kt)("h2",{id:"other"},"Other"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Caching is not recommended when building a image multiple times.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ docker build -t apisix-dashboard:$tag . --no-cache=true\n")))}c.isMDXComponent=!0}}]);