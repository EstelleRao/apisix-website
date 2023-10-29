"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[58382],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},49772:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={title:"Upgrade Guide"},o=void 0,l={unversionedId:"upgrade",id:"upgrade",isDocsHomePage:!1,title:"Upgrade Guide",description:"APISIX 3.x.x has changed the Admin API. To make APISIX Ingress compatible with these changes, you need to select the corresponding chart version. Please refer 1.5 to 1.6.",source:"@site/docs/apisix-ingress-controller/upgrade.md",sourceDirName:".",slug:"/upgrade",permalink:"/zh/docs/ingress-controller/next/upgrade",editUrl:"/zh/edit#https://github.com/apache/apisix-ingress-controller/edit/master/docs/zh/latest/upgrade.md",tags:[],version:"current",frontMatter:{title:"Upgrade Guide"},sidebar:"docs",previous:{title:"Monitoring APISIX with Helm Chart",permalink:"/zh/docs/ingress-controller/next/monitoring"}},p=[{value:"Version change",id:"version-change",children:[{value:"<strong><em>1.6.0</em></strong>",id:"160",children:[]},{value:"<strong><em>1.5.0</em></strong>",id:"150",children:[]},{value:"<strong><em>1.4.0</em></strong>",id:"140",children:[]}]},{value:"Upgrade using Helm chart",id:"upgrade-using-helm-chart",children:[{value:"Operating Step",id:"operating-step",children:[]},{value:"Compatible upgrade",id:"compatible-upgrade",children:[]},{value:"Incompatible upgrade",id:"incompatible-upgrade",children:[]}]},{value:"Validate Compatibility",id:"validate-compatibility",children:[]}],s={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"version-change"},"Version change"),(0,r.kt)("h3",{id:"160"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("em",{parentName:"strong"},"1.6.0"))),(0,r.kt)("p",null,"APISIX 3.x.x has changed the Admin API. To make APISIX Ingress compatible with these changes, you need to select the corresponding chart version. Please refer ",(0,r.kt)("a",{parentName:"p",href:"#15-to-16"},"1.5 to 1.6"),"."),(0,r.kt)("h3",{id:"150"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("em",{parentName:"strong"},"1.5.0"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CRD has been upgraded to the V2 version, and V2beta3 has been marked as deprecated."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app_namespace")," is deprecated. you can use ",(0,r.kt)("inlineCode",{parentName:"li"},"namespace_selector")," instead.")),(0,r.kt)("h3",{id:"140"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("em",{parentName:"strong"},"1.4.0"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CRD unified upgrade to V2beta3, delete resource v2alpha1 and v1 versions")),(0,r.kt)("h2",{id:"upgrade-using-helm-chart"},"Upgrade using Helm chart"),(0,r.kt)("p",null,"Before upgrading APISIX Ingress, you need to update the corresponding CRD resource first, k8s will automatically replace it with the default CRD resource version, incompatible items will be discarded, and its configuration needs to be updated to the current version."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"It is recommended not to upgrade across versions."))),(0,r.kt)("h3",{id:"operating-step"},"Operating Step"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Update Helm repo")),(0,r.kt)("p",null,"Before upgrading, you need to update the helm repo to ensure that the resources in the repo are up to date."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"helm repo update\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Upgrade CRDs")),(0,r.kt)("p",null,"When the CRD exists, Helm Chart will not automatically update the CRD when upgrading or installing, so you need to update the CRD resource yourself"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using Helm (Helm version >= 3.7.0)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"helm show crds apisix/apisix-ingress-controller | kubectl apply -f -\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If the Helm version does not support it, you need to obtain it from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-helm-chart"},"apisix-helm-chart")," repository.\nCRDs directory: ",(0,r.kt)("inlineCode",{parentName:"p"},"charts/apisix-ingress-controller/crds/customresourcedefinitions.yaml")),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl apply -f  https://raw.githubusercontent.com/apache/apisix-helm-chart/apisix-1.1.0/charts/apisix-ingress-controller/crds/customresourcedefinitions.yaml\n"))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Upgrade APISIX Ingress")),(0,r.kt)("p",null,"Just as an example, the specific configuration needs to be modified by yourself. If you want to upgrade to a specific chart version, please add this flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--version x.x.x"),", Please refer ",(0,r.kt)("a",{parentName:"p",href:"#compatible-upgrade"},"compatible-upgrade")," or ",(0,r.kt)("a",{parentName:"p",href:"#incompatible-upgrade"},"incompatible-upgrade"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"helm upgrade apisix apisix/apisix \\\n  --set gateway.type=NodePort \\\n  --set ingress-controller.enabled=true \\\n  --namespace ingress-apisix \\\n  --set ingress-controller.config.apisix.serviceNamespace=ingress-apisix\n")),(0,r.kt)("h3",{id:"compatible-upgrade"},"Compatible upgrade"),(0,r.kt)("p",null,"Compatible upgrades can be made without changing any resources."),(0,r.kt)("h4",{id:"15-to-16"},(0,r.kt)("strong",{parentName:"h4"},(0,r.kt)("em",{parentName:"strong"},"1.5 to 1.6"))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-helm-chart#compatibility-matrix"},"Relevant version information and compatibility of apisix-helm-chart"),"."),(0,r.kt)("p",{parentName:"div"},"If you use the ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix-ingress-controller")," chart, you need to focus on the configuration item  ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-helm-chart/blob/apisix-ingress-controller-0.11.3/charts/apisix-ingress-controller/values.yaml#L134"},"adminAPIVersion"),"."))),(0,r.kt)("p",null,"You need to select the corresponding chart version according to the APISIX version as shown to install or upgrade:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Chart version"),(0,r.kt)("th",{parentName:"tr",align:null},"APISIX version"),(0,r.kt)("th",{parentName:"tr",align:null},"Values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"apisix-1.1.0"),(0,r.kt)("td",{parentName:"tr",align:null},">= 3.0.0"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"apisix-0.13.0"),(0,r.kt)("td",{parentName:"tr",align:null},"<= 2.15.x"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"apisix-ingress-controller-0.11.3"),(0,r.kt)("td",{parentName:"tr",align:null},">= 3.0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"adminAPIVersion=v3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"apisix-ingress-controller-0.11.3"),(0,r.kt)("td",{parentName:"tr",align:null},"<= 2.15.x"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"APISIX:3.x.x"),", Use ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix")," chart to upgrade:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"helm upgrade apisix apisix/apisix --version 1.1.0 ***  # omit some configuration\n")),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"APISIX:3.x.x"),", use ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix-ingress-controller")," chart to upgrade:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"helm upgrade apisix apisix/apisix-ingress-controller \\\n  --version 0.11.3 \\\n  --set config.apisix.adminAPIVersion=v3 # omit some configuration\n")),(0,r.kt)("h4",{id:"14-to-15"},(0,r.kt)("strong",{parentName:"h4"},(0,r.kt)("em",{parentName:"strong"},"1.4 to 1.5"))),(0,r.kt)("p",null,"The chart version corresponding to ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix-ingress-controller:1.5"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"apisix-0.11.3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller-0.10.1"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"helm upgrade apisix apisix/apisix --version 0.11.3 ***  # omit some configuration\n")),(0,r.kt)("h3",{id:"incompatible-upgrade"},"Incompatible upgrade"),(0,r.kt)("h4",{id:"13-to-14"},(0,r.kt)("strong",{parentName:"h4"},(0,r.kt)("em",{parentName:"strong"},"1.3 to 1.4"))),(0,r.kt)("p",null,"The chart version corresponding to ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix-ingress-controller:1.4"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"apisix-0.10.2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller-0.9.3"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"helm upgrade apisix apisix/apisix --version 0.10.2 ***  # omit some configuration\n")),(0,r.kt)("p",null,"Incompatible upgrade, need to change resources.\nApisixRoute ",(0,r.kt)("inlineCode",{parentName:"p"},"object(http[].backend)")," has been removed in V2beta3 and needs to be converted to ",(0,r.kt)("inlineCode",{parentName:"p"},"array(http[].backends)"),". It is recommended not to upgrade across major versions."),(0,r.kt)("h2",{id:"validate-compatibility"},"Validate Compatibility"),(0,r.kt)("p",null,"Apache APISIX Ingress project is a continuously actively developed project.\nIn order to make it better, some broken changes will be added when the new version is released.\nFor users, how to upgrade safely becomes very important."),(0,r.kt)("p",null,"The policy directory of this project contains these compatibility check strategies,\nyou can use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/conftest"},(0,r.kt)("inlineCode",{parentName:"a"},"conftest"))," tool to check the compatibility."),(0,r.kt)("p",null,"Here's a quick example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v2\nkind: ApisixRoute\nmetadata:\n name: httpbin-route\nspec:\n http:\n - name: rule1\n   match:\n     hosts:\n     - httpbin.org\n     paths:\n       - /ip\n     exprs:\n     - subject:\n         scope: Header\n         name: X-Foo\n       op: Equal\n       value: bar\n   backends:\n   - serviceName: httpbin\n     servicePort: 80\n")),(0,r.kt)("p",null,"It uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.http.backend")," field that has been removed.\nSave as httpbin-route.yaml."),(0,r.kt)("p",null,"Use conftest for compatibility check."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ conftest test httpbin-route.yaml\nFAIL - httpbin-route.yaml - main - ApisixRoute/httpbin-route: rule1 field http.backend has been removed, use http.backends instead.\n\n2 tests, 1 passed, 0 warnings, 1 failure, 0 exceptions\n")),(0,r.kt)("p",null,"Incompatible parts will generate errors."))}c.isMDXComponent=!0}}]);