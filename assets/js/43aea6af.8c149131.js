"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[6789],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,g=m["".concat(o,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(g,s(s({ref:t},c),{},{components:n})):a.createElement(g,s({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87365:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const i={title:"GKE (Google)",keywords:["APISIX ingress","Apache APISIX","Kubernetes ingress","Google Cloud Platform"],description:"Guide to install APISIX ingress controller on Google Kubernetes Engine (GKE)."},s=void 0,l={unversionedId:"deployments/gke",id:"deployments/gke",isDocsHomePage:!1,title:"GKE (Google)",description:"Guide to install APISIX ingress controller on Google Kubernetes Engine (GKE).",source:"@site/docs/apisix-ingress-controller/deployments/gke.md",sourceDirName:"deployments",slug:"/deployments/gke",permalink:"/docs/ingress-controller/next/deployments/gke",editUrl:"/edit#https://github.com/apache/apisix-ingress-controller/edit/master/docs/en/latest/deployments/gke.md",tags:[],version:"current",frontMatter:{title:"GKE (Google)",keywords:["APISIX ingress","Apache APISIX","Kubernetes ingress","Google Cloud Platform"],description:"Guide to install APISIX ingress controller on Google Kubernetes Engine (GKE)."},sidebar:"docs",previous:{title:"ACK (Alibaba Cloud)",permalink:"/docs/ingress-controller/next/deployments/ack"},next:{title:"AKS (Azure)",permalink:"/docs/ingress-controller/next/deployments/azure"}},o=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install APISIX and ingress controller",id:"install-apisix-and-ingress-controller",children:[]},{value:"Next steps",id:"next-steps",children:[{value:"Enable SSL",id:"enable-ssl",children:[]},{value:"Change default keys",id:"change-default-keys",children:[]}]}],p={toc:o};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide explains how you can install APISIX ingress on ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine"},"Google Kubernetes Engine (GKE)"),"."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Setting up APISIX ingress on GKE requires the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/kubernetes-engine/docs/deploy-app-cluster#create_cluster"},"Create a GKE cluster")," on Google Cloud."),(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/sdk"},"Google Cloud SDK")," and update the credentials in your kube config file or use the ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/shell"},"shell"),"."),(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://helm.sh/"},"Helm"),".")),(0,r.kt)("h2",{id:"install-apisix-and-ingress-controller"},"Install APISIX and ingress controller"),(0,r.kt)("p",null,"The script below installs APISIX and the ingress controller:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add apisix https://charts.apiseven.com\nhelm repo add bitnami https://charts.bitnami.com/bitnami\nhelm repo update\n#  We use Apisix 3.0 in this example. If you're using Apisix v2.x, please set to v2\nADMIN_API_VERSION=v3\nhelm install apisix apisix/apisix \\\n  --set gateway.type=LoadBalancer \\\n  --set ingress-controller.enabled=true \\\n  --create-namespace \\\n  --namespace ingress-apisix \\\n  --set ingress-controller.config.apisix.serviceNamespace=ingress-apisix \\\n  --set ingress-controller.config.apisix.adminAPIVersion=$ADMIN_API_VERSION\nkubectl get service --namespace ingress-apisix\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"By default, APISIX ingress controller will watch the apiVersion of ",(0,r.kt)("inlineCode",{parentName:"p"},"networking.k8s.io/v1"),"."),(0,r.kt)("p",{parentName:"div"},"If the target Kubernetes version is under ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.19"),", add the flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--set ingress-controller.config.kubernetes.ingressVersion=networking/v1beta1"),"."),(0,r.kt)("p",{parentName:"div"},"Else, if your Kubernetes cluster version is under ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.16"),", set the flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--set ingress-controller.config.kubernetes.ingressVersion=extensions/v1beta1"),"."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"APISIX Ingress also supports (beta) the new ",(0,r.kt)("a",{parentName:"p",href:"https://gateway-api.sigs.k8s.io/"},"Kubernetes Gateway API"),"."),(0,r.kt)("p",{parentName:"div"},"If the Gateway API CRDs are not installed in your cluster by default, you can install it by running:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://github.com/kubernetes-sigs/gateway-api/releases/download/v0.5.0/standard-install.yaml\n")),(0,r.kt)("p",{parentName:"div"},"You should also enable APISIX Ingress controller to work with the Gateway API. You can do this by adding the flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--set ingress-controller.config.kubernetes.enableGatewayAPI=true")," while installing through Helm."),(0,r.kt)("p",{parentName:"div"},"See ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/ingress-controller/tutorials/configure-ingress-with-gateway-api"},"this tutorial")," for more info."))),(0,r.kt)("p",null,"This will create the five resources mentioned below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"apisix-gateway"),": dataplane the process the traffic."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"apisix-admin"),": control plane that processes all configuration changes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller"),": ingress controller which exposes APISIX."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"apisix-etcd")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"apisix-etcd-headless"),": stores configuration and handles internal communication.")),(0,r.kt)("p",null,"The gateway service type will be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalancer"),". Clients can access Apache APISIX through the ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/concepts/service#services_of_type_loadbalancer"},"GKE Load Balancer"),"."),(0,r.kt)("p",null,"You can find the load balancer IP address by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get service apisix-gateway --namespace ingress-apisix -o jsonpath='{.status.loadBalancer.ingress[].ip}'\n")),(0,r.kt)("p",null,"You should now be able to use APISIX ingress controller. You can try running this ",(0,r.kt)("a",{parentName:"p",href:"/docs/ingress-controller/next/tutorials/proxy-the-httpbin-service"},"minimal example")," to see if everything is working perfectly."),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("h3",{id:"enable-ssl"},"Enable SSL"),(0,r.kt)("p",null,"SSL is disabled by default. You can enable it by adding the flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--set gateway.tls.enabled=true"),"."),(0,r.kt)("h3",{id:"change-default-keys"},"Change default keys"),(0,r.kt)("p",null,"It is recommended to change the default keys for security:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"--set ingress-controller.config.apisix.adminKey=ADMIN_KEY_GENERATED_BY_YOURSELF\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"--set admin.credentials.admin=ADMIN_KEY_GENERATED_BY_YOURSELF\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"--set admin.credentials.viewer=VIEWER_KEY_GENERATED_BY_YOURSELF\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ingress-controller.config.apisix.adminKey")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"admin.credentials.admin")," must be the same. It is better if these are not same as ",(0,r.kt)("inlineCode",{parentName:"p"},"admin.credentials.viewer"),"."))))}c.isMDXComponent=!0}}]);