"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5033],{35318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,m=d["".concat(l,".").concat(u)]||d[u]||h[u]||i;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},15491:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(25773),r=(a(27378),a(35318));const i={title:"How to integrate with Dapr to build Apache APISIX Gateway Controller",author:"Shanyou Zhang",authorURL:"https://github.com/geffzhang",authorImageURL:"https://avatars.githubusercontent.com/u/439390?v=4",keywords:["Apache APISIX","Dapr","Kubernetes","API Gateway","Sidecar"],description:"This article introduces the concepts of Dapr and Apache APISIX Ingress Controller, and shows how to integrate Dapr to create an Apache APISIX controller.",tags:["Ecosystem"],image:"https://static.apiseven.com/2022/blog/0818/ecosystem/dapr.png"},s=void 0,o={permalink:"/blog/2021/11/17/dapr-with-apisix",source:"@site/blog/2021/11/17/dapr-with-apisix.md",title:"How to integrate with Dapr to build Apache APISIX Gateway Controller",description:"This article introduces the concepts of Dapr and Apache APISIX Ingress Controller, and shows how to integrate Dapr to create an Apache APISIX controller.",date:"2021-11-17T00:00:00.000Z",formattedDate:"November 17, 2021",tags:[{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:5.725,truncated:!0,authors:[{name:"Shanyou Zhang",url:"https://github.com/geffzhang",imageURL:"https://avatars.githubusercontent.com/u/439390?v=4"}],prevItem:{title:"Apache APISIX embraces the WASM ecosystem",permalink:"/blog/2021/11/19/apisix-supports-wasm"},nextItem:{title:"Weekly Report (Sep 1 - Sep 14)",permalink:"/blog/2021/11/16/weekly-report-1114"}},l={authorsImageUrls:[void 0]},p=[{value:"Overview",id:"overview",children:[{value:"Apache APISIX Ingress",id:"apache-apisix-ingress",children:[],level:3},{value:"Dapr",id:"dapr",children:[],level:3}],level:2},{value:"Start of practice",id:"start-of-practice",children:[{value:"Environment preparation",id:"environment-preparation",children:[],level:3},{value:"Step 1: Apache APISIX Helm Configuration",id:"step-1-apache-apisix-helm-configuration",children:[],level:3},{value:"Step 2: Create the Apache APISIX Ingerss namespace",id:"step-2-create-the-apache-apisix-ingerss-namespace",children:[],level:3},{value:"Step 3: Install the APISIX Controller with Dapr Support",id:"step-3-install-the-apisix-controller-with-dapr-support",children:[],level:3},{value:"Step 4: Create the Dapr Sidecar resource for Apache APISIX",id:"step-4-create-the-dapr-sidecar-resource-for-apache-apisix",children:[],level:3},{value:"Step 5: Deploy the test sample project",id:"step-5-deploy-the-test-sample-project",children:[{value:"Path Matching Rewrites",id:"path-matching-rewrites",children:[],level:4}],level:3}],level:2},{value:"Additional Notes",id:"additional-notes",children:[{value:"Deleting Apache APISIX Controller",id:"deleting-apache-apisix-controller",children:[],level:3}],level:2}],c={toc:p};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This article will show you how to create an Apache APISIX controller by integrating Dapr, includes the concept of the project and the specific operation steps.")),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://blog.dapr.io/posts/2022/01/13/enable-dapr-with-apache-apisix-ingress-controller/"})),(0,r.kt)("p",null,"Essentially, the Apache APISIX controller will configure the same standard DAPR annotations to inject DAPRD sidecar. Exposing this sidecar allows external applications to communicate with applications in the cluster that have Dapr enabled."),(0,r.kt)("p",null,"The following diagram shows the architectural flow of the actual project:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1638855752235-121756ab-f5b7-489f-af42-0c3f962b3036.png",alt:"Overview"})),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("h3",{id:"apache-apisix-ingress"},"Apache APISIX Ingress"),(0,r.kt)("p",null,"In the K8s ecosystem, Ingress is a resource that represents the entry point for K8s traffic. To make it effective, an Ingress Controller is needed to listen to the Ingress resources in K8s, resolve the rules for those resources, and actually carry the traffic. The most widely used Ingress Controller implementations in today's trends are Kubernetes Ingress Nginx."),(0,r.kt)("p",null,"APISIX Ingress is another implementation of the Ingress Controller. The main difference from Kubernetes Ingress Nginx is that APISIX Ingress uses Apache APISIX as the actual data plane for hosting business traffic. As shown in the figure below, when a user requests a specific service/API/web page, the entire business traffic/user request is transferred to the K8s cluster through an external proxy and then processed by APISIX Ingress."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/09/30/6336a25db849f.png",alt:"APISIX Ingress"})),(0,r.kt)("p",null,"As you can see from the above diagram, APISIX Ingress is divided into two parts. One part is the APISIX Ingress Controller, which serves as the control plane for configuration management and distribution. The other part is the APISIX Proxy Pod, which is responsible for carrying business traffic and is implemented through CRD (Custom Resource Definitions). Apache APISIX Ingress supports not only custom resources but also native K8s Ingress resources."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.apiseven.com/zh/blog/apisix-ingress-details"},"Click here")," for more details."),(0,r.kt)("h3",{id:"dapr"},"Dapr"),(0,r.kt)("p",null,"Dapr is a portable, event-driven runtime. It makes it simple for developers to build elastic, stateless and stateful applications running on the cloud and edge, and includes multiple languages and developer frameworks."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1637119221120-15a5be20-17a2-4c18-a82e-91e1ff3709f0.png",alt:"Dapr"})),(0,r.kt)("p",null,"Today, we are experiencing a wave of cloud applications. Developers are familiar with web+ database application architectures (e.g., classic 3-tier designs), but not with what is essentially a distributed microservice application architecture. Developers want to focus on business logic while relying on the platform to infuse their applications with scalability, elasticity, maintainability, resiliency, and other attributes of native cloud architectures."),(0,r.kt)("p",null,"This is where Dapr comes in."),(0,r.kt)("p",null,"Dapr can codify best practices for building microservice applications into open, independent building blocks, enabling users to build portable applications using the language and framework of their choice. Each building block is completely independent and one or more of them can be used in an application."),(0,r.kt)("p",null,"In addition, Dapr is platform agnostic, which means users can run applications natively in any Kubernetes cluster and other hosting environments that integrate with Dapr."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.dapr.io/zh-hans/concepts/overview/"},"Click here")," for more details."),(0,r.kt)("h2",{id:"start-of-practice"},"Start of practice"),(0,r.kt)("h3",{id:"environment-preparation"},"Environment preparation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kubernetes 1.19+ cluster with Dapr already configured on the cluster"),(0,r.kt)("li",{parentName:"ul"},"Helm CLI 3x installed"),(0,r.kt)("li",{parentName:"ul"},"Kubectl CLI installed and configured to access the cluster"),(0,r.kt)("li",{parentName:"ul"},"Optional: OpenSSL for creating self-signed certificates"),(0,r.kt)("li",{parentName:"ul"},"The Helm Chart version for Apache APISIX is 0.7.2+")),(0,r.kt)("h3",{id:"step-1-apache-apisix-helm-configuration"},"Step 1: Apache APISIX Helm Configuration"),(0,r.kt)("p",null,"Add the latest helm chart repo for the Apache APISIX controller by running the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add apisix https://charts.apiseven.com\nhelm repo update\n")),(0,r.kt)("h3",{id:"step-2-create-the-apache-apisix-ingerss-namespace"},"Step 2: Create the Apache APISIX Ingerss namespace"),(0,r.kt)("p",null,"Ensure that the current kubectl context points to the correct Kubernetes cluster, and then run the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create namespace ingress-apisix\n")),(0,r.kt)("h3",{id:"step-3-install-the-apisix-controller-with-dapr-support"},"Step 3: Install the APISIX Controller with Dapr Support"),(0,r.kt)("p",null,"Use the following to create a file called dapr-annotations.yaml to set up annotations on the Apache APISIX Proxy Pod."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apisix:\n  podAnnotations:\n    dapr.io/enabled: "true"\n    dapr.io/app-id: " apisix-gateway"\ndapr.io/app-port: "9080"\ndapr.io/enable-metrics: "true"\ndapr.io/metrics-port: "9099"\ndapr.io/sidecar-listen-addresses: 0.0.0.0\ndapr.io/config: ingress-apisix-config\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: The app-port above is telling the daprd sidecar Proxy which port it is listening on. For a full list of supported annotations, see the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.dapr.io/operations/hosting/kubernetes/kubernetes-annotations/"},"Dapr Kubernetes pod annotation specification"),".")),(0,r.kt)("p",null,"Here is a sample dapr-annotations.yaml from my personal installation on AKS."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"}," apisix:\n  podAnnotations:\n    dapr.io/app-id: apisix-gateway\n    dapr.io/app-port: '9080'\n    dapr.io/enable-metrics: 'true'\n    dapr.io/enabled: 'true'\n    dapr.io/metrics-port: '9099'\ndapr.io/sidecar-listen-addresses: 0.0.0.0\ndapr.io/config: ingress-apisix-config\n\ngateway:\n  type: LoadBalancer\n\ningress-controller:\n  enabled: true\n\ndashboard:\n  enabled: true\n")),(0,r.kt)("p",null,"Next, run the following command (referencing the above file)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm install apisix apisix/apisix -f dapr-annotations.yaml -n ingress-apisix\n")),(0,r.kt)("p",null,"Expose the launched APISIX Dashboard Pod to the outside world for subsequent use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# You can get the dashboard-pod-name via kubectl get pods -n ingress-apisix\nkubectl port-forward ${dashboard-pod-name} 9000:9000\n")),(0,r.kt)("h3",{id:"step-4-create-the-dapr-sidecar-resource-for-apache-apisix"},"Step 4: Create the Dapr Sidecar resource for Apache APISIX"),(0,r.kt)("p",null,"First, access the APISIX Dashboard via ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:9000")," to configure Apache APISIX upstream-apisix-dapr."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1638855797186-a9b940e2-4d56-4a6d-a621-ea615ddba0dd.png",alt:"Create the Dapr Sidecar"})),(0,r.kt)("p",null,"Fill in the hostname here: apisix-gateway-dapr and the port number 3500."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "nodes": [\n    {\n      "host": "apisix-gateway-dapr",\n      "port": 3500,\n      "weight": 1\n    }\n  ],\n  "retries": 1,\n  "timeout": {\n    "connect": 6,\n    "read": 6,\n    "send": 6\n  },\n  "type": "roundrobin",\n  "scheme": "http",\n  "pass_host": "pass",\n  "name": "apisix-dapr"\n}\n')),(0,r.kt)("p",null,"Then configure the Apache APISIX service apisix-gateway-dapr, and select apisix-dapr for the upstream service."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1638855804018-094559fd-a1df-4184-becd-9bfbf0018339.png",alt:"Configuration service"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "apisix-gateway-dapr",\n  "upstream_id": "376187148778341098"\n}\n')),(0,r.kt)("h3",{id:"step-5-deploy-the-test-sample-project"},"Step 5: Deploy the test sample project"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://httpbin.org/"},"HTTPBin")," is a tool written in Python+Flask that covers various HTTP scenarios and returns to each interface. Next, we'll use kennethreitz/httpbin as a sample project for demonstration purposes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f 01.namespace.yaml\nkubectl apply -f 02.deployment.yaml\nkubectl apply -f 03.svc.yaml\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1638855818560-9ae75e39-9ed2-4796-a9eb-ebf66b07c1e5.png",alt:"Project configuration"})),(0,r.kt)("p",null,"The image above shows a hypothetical microservice running with the Dapr app-id kennethreitz-httpbin."),(0,r.kt)("h4",{id:"path-matching-rewrites"},"Path Matching Rewrites"),(0,r.kt)("p",null,"Here we add some settings related to path matching. For example, if the request gateway is /httpbin/, the backend receive path should be /, with httpbin acting as a service name identifier."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1638855827906-2aafa04c-a00c-4d41-aeb2-663c1f999dcd.png",alt:"Interpretation"})),(0,r.kt)("p",null,"On hosted platforms that support namespaces, the Dapr application ID is in a valid FQDN format, which includes the target namespace. For example, the following string contains the application ID (svc-kennethreitz-httpbin) and the namespace the application is running in (kind-test)."),(0,r.kt)("p",null,"Finally, you can see if the proxy was successful by visiting: ",(0,r.kt)("a",{parentName:"p",href:"http://20.195.90.43/httpbin/get"},"http://20.195.90.43/httpbin/get"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1637119221100-13997340-dfb6-45fb-abba-4215e0318238.png",alt:"Check proxy"})),(0,r.kt)("h2",{id:"additional-notes"},"Additional Notes"),(0,r.kt)("p",null,"Of course, you can also deploy Apache APISIX and APISIX Ingress Controller directly in Kubernetes using the official Apache APISIX Helm repository, which allows you to directly use Apache APISIX as a gateway to the APISIX Ingress Controller data plane to carry business traffic. This allows you to directly use Apache APISIX as a gateway to carry business traffic on the data plane of the APISIX Ingress Controller."),(0,r.kt)("p",null,"Finally, Dapr is injected into the Apache APISIX Proxy Pod via Sidecar annotations, and the microservices in the cluster are invoked through the service invocation module to achieve complete process deployment."),(0,r.kt)("h3",{id:"deleting-apache-apisix-controller"},"Deleting Apache APISIX Controller"),(0,r.kt)("p",null,"If you want to delete the Apache APISIX controller at the end of the project, you can follow the command below (remember not to forget to delete the namespace ingress-apisix created before)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm delete apisix -n ingress-apisix\n")))}h.isMDXComponent=!0}}]);