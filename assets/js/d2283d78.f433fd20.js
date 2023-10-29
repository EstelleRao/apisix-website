"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[60389],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,l(l({ref:t},s),{},{components:n})):a.createElement(h,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64071:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={title:"openfunction",keywords:["APISIX","Plugin","OpenFunction","openfunction"],description:"This document contains information about the Apache APISIX openfunction Plugin."},l=void 0,o={unversionedId:"plugins/openfunction",id:"version-3.1/plugins/openfunction",isDocsHomePage:!1,title:"openfunction",description:"This document contains information about the Apache APISIX openfunction Plugin.",source:"@site/docs-apisix_versioned_docs/version-3.1/plugins/openfunction.md",sourceDirName:"plugins",slug:"/plugins/openfunction",permalink:"/docs/apisix/plugins/openfunction",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.1/docs/en/latest/plugins/openfunction.md",tags:[],version:"3.1",frontMatter:{title:"openfunction",keywords:["APISIX","Plugin","OpenFunction","openfunction"],description:"This document contains information about the Apache APISIX openfunction Plugin."},sidebar:"version-3.1/docs",previous:{title:"workflow",permalink:"/docs/apisix/plugins/workflow"},next:{title:"dubbo-proxy",permalink:"/docs/apisix/plugins/dubbo-proxy"}},u=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Prerequisites",id:"prerequisites",children:[{value:"Create and Push a Function",id:"create-and-push-a-function",children:[]}]},{value:"Enable the Plugin",id:"enable-the-plugin",children:[]},{value:"Example usage",id:"example-usage",children:[{value:"Configure Path Transforming",id:"configure-path-transforming",children:[]}]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],p={toc:u};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"openfunction")," Plugin is used to integrate APISIX with ",(0,r.kt)("a",{parentName:"p",href:"https://openfunction.dev/"},"CNCF OpenFunction")," serverless platform."),(0,r.kt)("p",null,"This Plugin can be configured on a Route and requests will be sent to the configured OpenFunction API endpoint as the upstream."),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Valid values"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"function_uri"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"function uri. For example, ",(0,r.kt)("inlineCode",{parentName:"td"},"https://localhost:30858/default/function-sample"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ssl_verify"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," verifies the SSL certificate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"authorization"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Authorization credentials to access functions of OpenFunction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"authorization.service_token"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The token format is 'xx:xx' which supports basic auth for function entry points.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"3000 ms"),(0,r.kt)("td",{parentName:"tr",align:null},"[100, ...]"," ms"),(0,r.kt)("td",{parentName:"tr",align:null},"OpenFunction action and HTTP call timeout in ms.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keepalive"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," keeps the connection alive for reuse.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keepalive_timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"60000 ms"),(0,r.kt)("td",{parentName:"tr",align:null},"[1000,...]"," ms"),(0,r.kt)("td",{parentName:"tr",align:null},"Time is ms for connection to remain idle without closing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keepalive_pool"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum number of requests that can be sent on this connection before closing it.")))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"timeout")," attribute sets the time taken by the OpenFunction to execute, and the timeout for the HTTP client in APISIX. OpenFunction calls may take time to pull the runtime image and start the container. So, if the value is set too small, it may cause a large number of requests to fail."))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before configuring the plugin, you need to have OpenFunction running.\nInstallation of OpenFunction requires a certain version Kubernetes cluster.\nFor details, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://openfunction.dev/docs/getting-started/installation/"},"Installation"),"."),(0,r.kt)("h3",{id:"create-and-push-a-function"},"Create and Push a Function"),(0,r.kt)("p",null,"You can then create a function following the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFunction/samples"},"sample")),(0,r.kt)("p",null,"You'll need to push your function container image to a container registry like Docker Hub or Quay.io when building a function. To do that, you'll need to generate a secret for your container registry first."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"REGISTRY_SERVER=https://index.docker.io/v1/ REGISTRY_USER= ${your_registry_user} REGISTRY_PASSWORD= ${your_registry_password}\nkubectl create secret docker-registry push-secret \\\n    --docker-server=$REGISTRY_SERVER \\\n    --docker-username=$REGISTRY_USER \\\n    --docker-password=$REGISTRY_PASSWORD\n")),(0,r.kt)("h2",{id:"enable-the-plugin"},"Enable the Plugin"),(0,r.kt)("p",null,"You can now configure the Plugin on a specific Route and point to this running OpenFunction service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {\n        "openfunction": {\n            "function_uri": "http://localhost:3233/default/function-sample/test",\n            "authorization": {\n                "service_token": "test:test"\n            }\n        }\n    }\n}\'\n')),(0,r.kt)("h2",{id:"example-usage"},"Example usage"),(0,r.kt)("p",null,"Once you have configured the plugin, you can send a request to the Route and it will invoke the configured function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/hello\n")),(0,r.kt)("p",null,"This will give back the response from the function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hello, test!\n")),(0,r.kt)("h3",{id:"configure-path-transforming"},"Configure Path Transforming"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenFunction")," Plugin also supports transforming the URL path while proxying requests to the OpenFunction API endpoints. Extensions to the base request path get appended to the ",(0,r.kt)("inlineCode",{parentName:"p"},"function_uri")," specified in the Plugin configuration."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANT")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"uri")," configured on a Route must end with ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," for this feature to work properly. APISIX Routes are matched strictly and the ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," implies that any subpath to this URI would be matched to the same Route."))),(0,r.kt)("p",null,"The example below configures this feature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello/*",\n    "plugins": {\n        "openfunction": {\n            "function_uri": "http://localhost:3233/default/function-sample",\n            "authorization": {\n                "service_token": "test:test"\n            }\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"Now, any requests to the path ",(0,r.kt)("inlineCode",{parentName:"p"},"hello/123")," will invoke the OpenFunction, and the added path is forwarded:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl  http://127.0.0.1:9080/hello/123\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Hello, 123!\n")),(0,r.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,r.kt)("p",null,"To disable the ",(0,r.kt)("inlineCode",{parentName:"p"},"openfunction")," Plugin, you can delete the corresponding JSON configuration from the Plugin configuration. APISIX will automatically reload and you do not have to restart for this to take effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}s.isMDXComponent=!0}}]);