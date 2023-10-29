"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[93100],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7781:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"Development",keywords:["APISIX ingress","Apache APISIX","Kubernetes ingress","Development","Contribute"],description:"Setting up development environment for APISIX Ingress controller."},i=void 0,l={unversionedId:"contribute",id:"contribute",isDocsHomePage:!1,title:"Development",description:"Setting up development environment for APISIX Ingress controller.",source:"@site/docs/apisix-ingress-controller/contribute.md",sourceDirName:".",slug:"/contribute",permalink:"/zh/docs/ingress-controller/next/contribute",editUrl:"/zh/edit#https://github.com/apache/apisix-ingress-controller/edit/master/docs/zh/latest/contribute.md",tags:[],version:"current",frontMatter:{title:"Development",keywords:["APISIX ingress","Apache APISIX","Kubernetes ingress","Development","Contribute"],description:"Setting up development environment for APISIX Ingress controller."},sidebar:"docs",previous:{title:"Composite Architecture",permalink:"/zh/docs/ingress-controller/next/composite"},next:{title:"FAQ",permalink:"/zh/docs/ingress-controller/next/FAQ"}},s=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Fork and clone",id:"fork-and-clone",children:[]},{value:"Build from source",id:"build-from-source",children:[]},{value:"Making changes",id:"making-changes",children:[]},{value:"Running tests",id:"running-tests",children:[]},{value:"Running locally",id:"running-locally",children:[]}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document walks through how you can set up your development environment to contribute to APISIX Ingress controller."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before you get started make sure you have:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installed ",(0,r.kt)("a",{parentName:"li",href:"https://golang.org/dl/"},"Go 1.20")," or later"),(0,r.kt)("li",{parentName:"ol"},"A Kubernetes cluster available. We recommend using ",(0,r.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/"},"kind"),"."),(0,r.kt)("li",{parentName:"ol"},"Installed APISIX in Kubernetes using ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-helm-chart"},"Helm"),".")),(0,r.kt)("h2",{id:"fork-and-clone"},"Fork and clone"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Fork the repository ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller"},"apache/apisix-ingress-controller")," to your GitHub account"),(0,r.kt)("li",{parentName:"ol"},"Clone the fork to your workstation."),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"go mod download")," to download the required modules.")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you are in China, you can speed up the downloads by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"GOPROXY")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"https://goproxy.cn"),"."))),(0,r.kt)("h2",{id:"build-from-source"},"Build from source"),(0,r.kt)("p",null,"To build APISIX Ingress controller, run the command below on the root of the project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"make build\n")),(0,r.kt)("p",null,"Now you can run it by:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./apisix-ingress-controller version\n")),(0,r.kt)("h2",{id:"making-changes"},"Making changes"),(0,r.kt)("p",null,"Prior to opening a pull request with changes or new features, please ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/issues"},"open an issue"),"."),(0,r.kt)("p",null,"Make sure that the license, code style, and document format are consistent with the project specification. You can do this by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"make update-all\n")),(0,r.kt)("p",null,"Your pull requests will more likely to be accepted if:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"All tests are passing and tests are included for new functionalities"),(0,r.kt)("li",{parentName:"ol"},"README and documentation is updated with the chages"),(0,r.kt)("li",{parentName:"ol"},'PR is linked to the issue with semantic keywords ("fixes #145")'),(0,r.kt)("li",{parentName:"ol"},"Has detailed PR descriptions and good ",(0,r.kt)("a",{parentName:"li",href:"http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html"},"commit messages"))),(0,r.kt)("h2",{id:"running-tests"},"Running tests"),(0,r.kt)("p",null,"To run unit tests:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"make unit-test\n")),(0,r.kt)("p",null,"To run end-to-end tests, you need to install ",(0,r.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/"},"kind"),"."),(0,r.kt)("p",null,"Currently, we use Kind version ",(0,r.kt)("inlineCode",{parentName:"p"},"0.11.1")," and Kubernetes version ",(0,r.kt)("inlineCode",{parentName:"p"},"1.21.1")," for running the tests."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"make e2e-test-local\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"End-to-end tests are comprehensive and takes time to run."),(0,r.kt)("p",{parentName:"div"},"See ",(0,r.kt)("a",{parentName:"p",href:"https://onsi.github.io/ginkgo/#focused-specs"},"focused specs")," to learn how you can run partial tests."))),(0,r.kt)("p",null,"To run e2e tests on any changes, you can build a Docker image and push it to a registry that the Kubernetes cluster can access:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"make build-image IMAGE_TAG=a.b.c\nmake push-images IMAGE_TAG=a.b.c\n")),(0,r.kt)("h2",{id:"running-locally"},"Running locally"),(0,r.kt)("p",null,"Make sure to expose both the APISIX proxy and the Admin API to outside the Kubernetes cluster. You can use ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/#nodeport"},"NodePort service")," or use ",(0,r.kt)("inlineCode",{parentName:"p"},"port-forward")," as shown below:"),(0,r.kt)("p",null,"Also, we can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"port-forward")," to expose the Admin API port of Apache APISIX Pod. The default port of Apache APISIX Admin API is 9180, next I'll expose the local port ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1:9180"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -n ${namespace of Apache APISIX} ${Pod name of Apache APISIX} 9180:9180\n")),(0,r.kt)("p",null,"This will expose the default ",(0,r.kt)("inlineCode",{parentName:"p"},"9180")," port of the Admin API to outside the cluster."),(0,r.kt)("p",null,"You can now run APISIX Ingress controller by:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd /path/to/apisix-ingress-controller\n./apisix-ingress-controller ingress \\\n    --kubeconfig /path/to/kubeconfig \\\n    --http-listen :8080 \\\n    --log-output stderr \\\n    --default-apisix-cluster-base-url http://127.0.0.1:9180/apisix/admin \\\n    --default-apisix-cluster-admin-key edd1c9f034335f136f87ad84b625c8f1\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"If you are using minikube, the path to kubeconfig should be ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.kube/config"),"."),(0,r.kt)("li",{parentName:"ol"},"If you have changed the default Admin API key, you have to pass it in the ",(0,r.kt)("inlineCode",{parentName:"li"},"--default-apisix-cluster-admin-key")," flag. You can remove the flag if you have disabled authentication.")))))}p.isMDXComponent=!0}}]);