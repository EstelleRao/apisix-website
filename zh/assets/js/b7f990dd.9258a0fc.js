"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[60842],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=p(r),m=a,d=h["".concat(l,".").concat(m)]||h[m]||u[m]||i;return r?n.createElement(d,s(s({ref:t},c),{},{components:r})):n.createElement(d,s({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},64403:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={title:"Install Ingress APISIX on KubeSphere"},s=void 0,o={unversionedId:"deployments/kubesphere",id:"version-1.2.0/deployments/kubesphere",isDocsHomePage:!1,title:"Install Ingress APISIX on KubeSphere",description:"This document explains how to install Ingress APISIX on KubeSphere.",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-1.2.0/deployments/kubesphere.md",sourceDirName:"deployments",slug:"/deployments/kubesphere",permalink:"/zh/docs/ingress-controller/1.2.0/deployments/kubesphere",editUrl:"/zh/edit#https://github.com/apache/apisix-ingress-controller/edit/v1.2.0/docs/zh/latest/deployments/kubesphere.md",tags:[],version:"1.2.0",frontMatter:{title:"Install Ingress APISIX on KubeSphere"},sidebar:"version-1.2.0/docs",previous:{title:"Install Ingress APISIX on K3S and Rancher RKE",permalink:"/zh/docs/ingress-controller/1.2.0/deployments/k3s-rke"},next:{title:"Install Ingress APISIX on Minikube",permalink:"/zh/docs/ingress-controller/1.2.0/deployments/minikube"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install APISIX and apisix-ingress-controller",id:"install-apisix-and-apisix-ingress-controller",children:[]}],p={toc:l};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document explains how to install Ingress APISIX on ",(0,a.kt)("a",{parentName:"p",href:"https://kubesphere.io/"},"KubeSphere"),"."),(0,a.kt)("p",null,"KubeSphere is a distributed operating system managing cloud native applications with Kubernetes as its kernel, and provides plug-and-play architecture for the seamless integration of third-party applications to boost its ecosystem."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://kubesphere.io/docs/quick-start/"},"KubeSphere"),", you can choose ",(0,a.kt)("a",{parentName:"li",href:"https://kubesphere.io/docs/quick-start/all-in-one-on-linux/"},"All-in-one Installation on Linux")," or ",(0,a.kt)("a",{parentName:"li",href:"https://kubesphere.io/docs/quick-start/minimal-kubesphere-on-k8s/"},"Minimal KubeSphere on Kubernetes"),"."),(0,a.kt)("li",{parentName:"ul"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://helm.sh/"},"Helm"),"."),(0,a.kt)("li",{parentName:"ul"},"Clone ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-helm-chart"},"Apache APISIX Charts"),"."),(0,a.kt)("li",{parentName:"ul"},"Make sure your target namespace exists, kubectl operations of this document will be executed in namespace ",(0,a.kt)("inlineCode",{parentName:"li"},"ingress-apisix"),".")),(0,a.kt)("h2",{id:"install-apisix-and-apisix-ingress-controller"},"Install APISIX and apisix-ingress-controller"),(0,a.kt)("p",null,"As the data plane of apisix-ingress-controller, ",(0,a.kt)("a",{parentName:"p",href:"http://apisix.apache.org/"},"Apache APISIX")," can be deployed at the same time using Helm chart."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd /path/to/apisix-helm-chart\nhelm repo add bitnami https://charts.bitnami.com/bitnami\nhelm repo update\nkubectl create ns ingress-apisix\nhelm install apisix charts/apisix \\\n  --set gateway.type=NodePort \\\n  --set ingress-controller.enabled=true \\\n  --namespace ingress-apisix\nkubectl get service --namespace ingress-apisix\n")),(0,a.kt)("p",null,"Five Service resources were created."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"apisix-gateway"),", which processes the real traffic;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"apisix-admin"),", which acts as the control plane to process all the configuration changes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller"),", which exposes apisix-ingress-controller's metrics."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"apisix-etcd")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"apisix-etcd-headless")," for etcd service and internal communication.")),(0,a.kt)("p",null,"The gateway service type is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"NodePort"),", so that clients can access Apache APISIX through the Node IPs and the assigned port.\nIf you want to expose a ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," service, try to use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubesphere/porter"},"Porter"),"."),(0,a.kt)("p",null,"Now try to create some ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/tree/master/docs/en/latest/concepts"},"resources")," to verify the running status. As a minimalist example, see ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/ingress-controller/1.2.0/practices/proxy-the-httpbin-service"},"proxy-the-httpbin-service")," to learn how to apply resources to drive the apisix-ingress-controller."))}c.isMDXComponent=!0}}]);