"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[11341],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||s;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32556:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const s={title:"Install Ingress APISIX on Amazon EKS"},i=void 0,o={unversionedId:"deployments/aws",id:"version-1.5.0/deployments/aws",isDocsHomePage:!1,title:"Install Ingress APISIX on Amazon EKS",description:"This document explains how to install Ingress APISIX on Amazon EKS.",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-1.5.0/deployments/aws.md",sourceDirName:"deployments",slug:"/deployments/aws",permalink:"/zh/docs/ingress-controller/1.5.0/deployments/aws",editUrl:"/zh/edit#https://github.com/apache/apisix-ingress-controller/edit/v1.5.0/docs/zh/latest/deployments/aws.md",tags:[],version:"1.5.0",frontMatter:{title:"Install Ingress APISIX on Amazon EKS"},sidebar:"version-1.5.0/docs",previous:{title:"Install Ingress APISIX on ACK",permalink:"/zh/docs/ingress-controller/1.5.0/deployments/ack"},next:{title:"Install Ingress APISIX on Azure AKS",permalink:"/zh/docs/ingress-controller/1.5.0/deployments/azure"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install APISIX and apisix-ingress-controller",id:"install-apisix-and-apisix-ingress-controller",children:[{value:"Specify The Ingress Version",id:"specify-the-ingress-version",children:[]},{value:"Enable SSL",id:"enable-ssl",children:[]},{value:"Change default apikey",id:"change-default-apikey",children:[]}]}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document explains how to install Ingress APISIX on ",(0,r.kt)("a",{parentName:"p",href:"https://amazonaws-china.com/eks/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc&eks-blogs.sort-by=item.additionalFields.createdDate&eks-blogs.sort-order=desc"},"Amazon EKS"),"."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create an EKS Service on AWS."),(0,r.kt)("li",{parentName:"ul"},"Download the kube config for your EKS from ",(0,r.kt)("a",{parentName:"li",href:"https://amazonaws-china.com/cli/"},"aws cli interface"),"."),(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://helm.sh/"},"Helm"),".")),(0,r.kt)("h2",{id:"install-apisix-and-apisix-ingress-controller"},"Install APISIX and apisix-ingress-controller"),(0,r.kt)("p",null,"As the data plane of apisix-ingress-controller, ",(0,r.kt)("a",{parentName:"p",href:"http://apisix.apache.org/"},"Apache APISIX")," can be deployed at the same time using Helm chart."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add apisix https://charts.apiseven.com\nhelm repo add bitnami https://charts.bitnami.com/bitnami\nhelm repo update\nkubectl create ns ingress-apisix\nhelm install apisix apisix/apisix \\\n  --set gateway.type=LoadBalancer \\\n  --set ingress-controller.enabled=true \\\n  --namespace ingress-apisix \\\n  --set ingress-controller.config.apisix.serviceNamespace=ingress-apisix\nkubectl get service --namespace ingress-apisix\n")),(0,r.kt)("p",null,"Five Service resources were created."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"apisix-gateway"),", which processes the real traffic;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"apisix-admin"),", which acts as the control plane to process all the configuration changes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller"),", which exposes apisix-ingress-controller's metrics."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"apisix-etcd")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"apisix-etcd-headless")," for etcd service and internal communication.")),(0,r.kt)("p",null,"The gateway service type is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," (See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html"},"AWS Network Balancer")," for more details), so that clients can access Apache APISIX through a load balancer. You can find the load balancer hostname by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get service apisix-gateway --namespace ingress-apisix -o jsonpath='{.status.loadBalancer.ingress[].hostname}'\n")),(0,r.kt)("p",null,"Now open your ",(0,r.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/eks/home"},"EKS console"),", choosing your cluster and clicking the Workloads tag, you'll see all pods of Apache APISIX, etcd and apisix-ingress-controller are ready."),(0,r.kt)("p",null,"Try to create some ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/tree/master/docs/en/latest/concepts"},"resources")," to verify the running status. As a minimalist example, see ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/ingress-controller/1.5.0/tutorials/proxy-the-httpbin-service"},"proxy-the-httpbin-service")," to learn how to apply resources to drive the apisix-ingress-controller."),(0,r.kt)("h3",{id:"specify-the-ingress-version"},"Specify The Ingress Version"),(0,r.kt)("p",null,"apisix-ingress-controller will watch apiVersion of ",(0,r.kt)("inlineCode",{parentName:"p"},"networking.k8s.io/v1")," by default. If the target kubernetes version is under ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.19"),", add ",(0,r.kt)("inlineCode",{parentName:"p"},"--set ingress-controller.config.kubernetes.ingressVersion=networking/v1beta1")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--set ingress-controller.config.kubernetes.ingressVersion=extensions/v1beta1")," if your kubernetes cluster is under ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.16")),(0,r.kt)("h3",{id:"enable-ssl"},"Enable SSL"),(0,r.kt)("p",null,"The ssl config is disabled by default, add ",(0,r.kt)("inlineCode",{parentName:"p"},"--set gateway.tls.enabled=true")," to enable tls support."),(0,r.kt)("h3",{id:"change-default-apikey"},"Change default apikey"),(0,r.kt)("p",null,"It's Recommended to change the default key by add ",(0,r.kt)("inlineCode",{parentName:"p"},"--set ingress-controller.config.apisix.adminKey=ADMIN_KEY_GENERATED_BY_YOURSELF"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"--set admin.credentials.admin=ADMIN_KEY_GENERATED_BY_YOURSELF"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"--set admin.credentials.viewer=VIEWER_KEY_GENERATED_BY_YOURSELF"),", notice that ",(0,r.kt)("inlineCode",{parentName:"p"},"ingress-controller.config.apisix.adminKey")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"admin.credentials.admin")," must be the same, and should better not same as ",(0,r.kt)("inlineCode",{parentName:"p"},"admin.credentials.viewer"),"."))}p.isMDXComponent=!0}}]);