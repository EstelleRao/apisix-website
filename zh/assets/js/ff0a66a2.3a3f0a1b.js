"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[91400],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(r),d=i,m=u["".concat(c,".").concat(d)]||u[d]||h[d]||s;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,a=new Array(s);a[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var l=2;l<s;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},57954:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const s={title:"Proxy the httpbin service with Ingress"},a=void 0,o={unversionedId:"practices/proxy-the-httpbin-service-with-ingress",id:"version-1.1.0/practices/proxy-the-httpbin-service-with-ingress",isDocsHomePage:!1,title:"Proxy the httpbin service with Ingress",description:"This document explains how apisix-ingress-controller guides Apache APISIX routes traffic to httpbin service correctly by the Kubernetes Ingress.",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-1.1.0/practices/proxy-the-httpbin-service-with-ingress.md",sourceDirName:"practices",slug:"/practices/proxy-the-httpbin-service-with-ingress",permalink:"/zh/docs/ingress-controller/1.1.0/practices/proxy-the-httpbin-service-with-ingress",editUrl:"/zh/edit#https://github.com/apache/apisix-ingress-controller/edit/v1.1.0/docs/zh/latest/practices/proxy-the-httpbin-service-with-ingress.md",tags:[],version:"1.1.0",frontMatter:{title:"Proxy the httpbin service with Ingress"},sidebar:"version-1.1.0/docs",previous:{title:"APISIX Ingress Controller the Hard Way",permalink:"/zh/docs/ingress-controller/1.1.0/practices/the-hard-way"},next:{title:"Proxy the httpbin service",permalink:"/zh/docs/ingress-controller/1.1.0/practices/proxy-the-httpbin-service"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Deploy httpbin service",id:"deploy-httpbin-service",children:[]},{value:"Resource Delivery",id:"resource-delivery",children:[]},{value:"Test",id:"test",children:[]}],l={toc:c};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document explains how apisix-ingress-controller guides Apache APISIX routes traffic to httpbin service correctly by the ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"Kubernetes Ingress"),"."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Prepare an available Kubernetes cluster in your workstation, we recommend you to use ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/minikube"},"Minikube"),"."),(0,i.kt)("li",{parentName:"ul"},"Install Apache APISIX in Kubernetes by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-helm-chart"},"Helm Chart"),"."),(0,i.kt)("li",{parentName:"ul"},"Install ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/blob/master/install.md"},"apisix-ingress-controller"),".")),(0,i.kt)("h2",{id:"deploy-httpbin-service"},"Deploy httpbin service"),(0,i.kt)("p",null,"We use ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/kennethreitz/httpbin/"},"kennethreitz/httpbin")," as the service image, See its overview page for details."),(0,i.kt)("p",null,"Now, try to deploy it to your Kubernetes cluster:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl run httpbin --image kennethreitz/httpbin --port 80\nkubectl expose pod httpbin --port 80\n")),(0,i.kt)("h2",{id:"resource-delivery"},"Resource Delivery"),(0,i.kt)("p",null,"Here we create an Ingress resource."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# httpbin-ingress.yaml\n# Note use apiVersion is networking.k8s.io/v1, so please make sure your\n# Kubernetes cluster version is v1.19.0 or higher.\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: httpserver-ingress\nspec:\n  # apisix-ingress-controller is only interested in Ingress\n  # resources with the matched ingressClass name, in our case,\n  # it's apisix.\n  ingressClassName: apisix\n  rules:\n  - host: local.httpbin.org\n    http:\n      paths:\n      - backend:\n          service:\n            name: httpbin\n            port:\n              number: 80\n        path: /\n        pathType: Prefix\n\n# Use ingress.networking.k8s.io/v1beta1 if your Kubernetes cluster\n# version is older than v1.19.0.\napiVersion: networking.k8s.io/v1beta1\nkind: Ingress\nmetadata:\n  name: httpserver-ingress\n  # Note for ingress.networking.k8s.io/v1beta1,\n  # you have to carry annotation kubernetes.io/ingress.class,\n  # and its value must be matched with the one configured in\n  # apisix-ingress-controller, in our case, it's apisix.\n  annotations:\n    kubernetes.io/ingress.class: apisix\nspec:\n  rules:\n    - host: local.httpbin.org\n      http:\n        paths:\n          - backend:\n              serviceName: httpbin\n              servicePort: 80\n            path: /\n            pathType: Prefix\n")),(0,i.kt)("p",null,"The YAML snippet shows a simple Ingress configuration, which tells Apache APISIX to route all requests with Host ",(0,i.kt)("inlineCode",{parentName:"p"},"local.httpbin.org")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"httpbin")," service.\nNow try to create it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f httpbin-ingress.yaml\n")),(0,i.kt)("h2",{id:"test"},"Test"),(0,i.kt)("p",null,"Run curl call in one of Apache APISIX Pods to check whether the resource was delivered to it. Note you should replace the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"--apisix-admin-key")," to the real ",(0,i.kt)("inlineCode",{parentName:"p"},"admin_key")," value in your Apache APISIX cluster."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl exec -it -n ${namespace of Apache APISIX} ${Pod name of Apache APISIX} -- curl http://127.0.0.1:9180/apisix/admin/routes -H 'X-API-Key: edd1c9f034335f136f87ad84b625c8f1'\n")),(0,i.kt)("p",null,"And request to Apache APISIX to verify the route."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl exec -it -n ${namespace of Apache APISIX} ${Pod name of Apache APISIX} -- curl http://127.0.0.1:9080/headers -H 'Host: local.httpbin.org'\n")),(0,i.kt)("p",null,"In case of success, you'll see a JSON string which contains all requests headers carried by ",(0,i.kt)("inlineCode",{parentName:"p"},"curl")," like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "headers": {\n    "Accept": "*/*",\n    "Host": "httpbin.org",\n    "User-Agent": "curl/7.64.1",\n    "X-Amzn-Trace-Id": "Root=1-5ffc3273-2928e0844e19c9810d1bbd8a"\n  }\n}\n')))}p.isMDXComponent=!0}}]);