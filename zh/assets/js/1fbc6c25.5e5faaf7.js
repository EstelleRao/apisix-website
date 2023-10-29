"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[83403],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,k=u["".concat(o,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(k,a(a({ref:t},p),{},{components:n})):r.createElement(k,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},80326:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var r=n(87462),i=(n(67294),n(3905));const s={title:"kind",keywords:["APISIX ingress","Apache APISIX","Kubernetes ingress","kind"],description:"Guide to install APISIX ingress controller on kind."},a=void 0,l={unversionedId:"deployments/kind",id:"version-1.6.1/deployments/kind",isDocsHomePage:!1,title:"kind",description:"Guide to install APISIX ingress controller on kind.",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-1.6.1/deployments/kind.md",sourceDirName:"deployments",slug:"/deployments/kind",permalink:"/zh/docs/ingress-controller/deployments/kind",editUrl:"/zh/edit#https://github.com/apache/apisix-ingress-controller/edit/v1.6.1/docs/zh/latest/deployments/kind.md",tags:[],version:"1.6.1",frontMatter:{title:"kind",keywords:["APISIX ingress","Apache APISIX","Kubernetes ingress","kind"],description:"Guide to install APISIX ingress controller on kind."},sidebar:"version-1.6.1/docs",previous:{title:"minikube",permalink:"/zh/docs/ingress-controller/deployments/minikube"},next:{title:"EKS (Amazon)",permalink:"/zh/docs/ingress-controller/deployments/aws"}},o=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Create a kind cluster",id:"create-a-kind-cluster",children:[]},{value:"Install APISIX and ingress controller",id:"install-apisix-and-ingress-controller",children:[]}],c={toc:o};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document explains how you can install APISIX ingress locally on ",(0,i.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/"},"kind"),"."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install ",(0,i.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/docs/user/quick-start/"},"kind"),"."),(0,i.kt)("li",{parentName:"ul"},"Install ",(0,i.kt)("a",{parentName:"li",href:"https://helm.sh/"},"Helm"),"."),(0,i.kt)("li",{parentName:"ul"},"Install ",(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/"},"kubectl"),".")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you encounter issues, check the version you are using. This document uses kind v0.12.0, Helm v3.8.1, and kubectl v1.23.5."))),(0,i.kt)("h2",{id:"create-a-kind-cluster"},"Create a kind cluster"),(0,i.kt)("p",null,"Ensure you have Docker running and start the kind cluster:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kind create cluster\n")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/ingress/#create-cluster"},"Ingress")," to learn more about setting up ingress on a kind cluster."),(0,i.kt)("h2",{id:"install-apisix-and-ingress-controller"},"Install APISIX and ingress controller"),(0,i.kt)("p",null,"The script below installs APISIX and the ingress controller:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add apisix https://charts.apiseven.com\nhelm repo add bitnami https://charts.bitnami.com/bitnami\nhelm repo update\nkubectl create ns ingress-apisix\nhelm install apisix apisix/apisix \\\n  --set gateway.type=NodePort \\\n  --set ingress-controller.enabled=true \\\n  --namespace ingress-apisix \\\n  --set ingress-controller.config.apisix.serviceNamespace=ingress-apisix\nkubectl get service --namespace ingress-apisix\n")),(0,i.kt)("p",null,"This will create the five resources mentioned below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apisix-gateway"),": dataplane the process the traffic."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apisix-admin"),": control plane that processes all configuration changes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller"),": ingress controller which exposes APISIX."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apisix-etcd")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"apisix-etcd-headless"),": stores configuration and handles internal communication.")),(0,i.kt)("p",null,"You should now be able to use APISIX ingress controller. You can try running this ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/ingress-controller/tutorials/proxy-the-httpbin-service"},"minimal example")," to see if everything is working perfectly."))}p.isMDXComponent=!0}}]);