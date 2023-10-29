"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[15081],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78285:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const l={title:"serverless"},i=void 0,s={unversionedId:"plugins/serverless",id:"version-2.12/plugins/serverless",isDocsHomePage:!1,title:"serverless",description:"Name",source:"@site/docs-apisix_versioned_docs/version-2.12/plugins/serverless.md",sourceDirName:"plugins",slug:"/plugins/serverless",permalink:"/docs/apisix/2.12/plugins/serverless",editUrl:"/edit#https://github.com/apache/apisix/edit/release/2.12/docs/en/latest/plugins/serverless.md",tags:[],version:"2.12",frontMatter:{title:"serverless"},sidebar:"version-2.12/docs",previous:{title:"splunk-hec-logging",permalink:"/docs/apisix/2.12/plugins/splunk-hec-logging"},next:{title:"azure-functions",permalink:"/docs/apisix/2.12/plugins/azure-functions"}},o=[{value:"Summary",id:"summary",children:[]},{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],u={toc:o};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#name"},(0,a.kt)("strong",{parentName:"a"},"Name"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#attributes"},(0,a.kt)("strong",{parentName:"a"},"Attributes"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#how-to-enable"},(0,a.kt)("strong",{parentName:"a"},"How To Enable"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#test-plugin"},(0,a.kt)("strong",{parentName:"a"},"Test Plugin"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#disable-plugin"},(0,a.kt)("strong",{parentName:"a"},"Disable Plugin")))),(0,a.kt)("h2",{id:"name"},"Name"),(0,a.kt)("p",null,"There are two plug-ins for serverless, namely ",(0,a.kt)("inlineCode",{parentName:"p"},"serverless-pre-function")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"serverless-post-function"),"."),(0,a.kt)("p",null,"The former runs at the beginning of the specified phase, while the latter runs at the end of the specified phase."),(0,a.kt)("p",null,"Both plug-ins receive the same parameters."),(0,a.kt)("h2",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Valid"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"phase"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"optional"),(0,a.kt)("td",{parentName:"tr",align:null},'["access"]'),(0,a.kt)("td",{parentName:"tr",align:null},'["rewrite", "access", "header_filter", "body_filter", "log", "before_proxy"]'),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"functions"),(0,a.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,a.kt)("td",{parentName:"tr",align:null},"required"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"A list of functions that are specified to run is an array type, which can contain either one function or multiple functions, executed sequentially.")))),(0,a.kt)("p",null,"Note that only function is accepted here, not other types of Lua code. For example, anonymous functions are legal:",(0,a.kt)("br",null)),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"return function()\n    ngx.log(ngx.ERR, 'one')\nend\n")),(0,a.kt)("p",null,"Closure is also legal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local count = 1\nreturn function()\n    count = count + 1\n    ngx.say(count)\nend\n")),(0,a.kt)("p",null,"But code that is not a function type is illegal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local count = 1\nngx.say(count)\n")),(0,a.kt)("p",null,"Since ",(0,a.kt)("inlineCode",{parentName:"p"},"v2.6"),", we pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"conf")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx")," as the first two arguments to the servelss function, like a regular plugin."),(0,a.kt)("p",null,"Prior to ",(0,a.kt)("inlineCode",{parentName:"p"},"v2.12.0"),", the phase ",(0,a.kt)("inlineCode",{parentName:"p"},"before_proxy")," used to be called ",(0,a.kt)("inlineCode",{parentName:"p"},"balancer"),". Considering that this method actually runs after ",(0,a.kt)("inlineCode",{parentName:"p"},"access")," and before the request goes upstream, and has nothing to do with ",(0,a.kt)("inlineCode",{parentName:"p"},"balancer"),", the new naming would be more appropriate."),(0,a.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,a.kt)("p",null,"Here's an example, enable the serverless plugin on the specified route:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "serverless-pre-function": {\n            "phase": "rewrite",\n            "functions" : ["return function() ngx.log(ngx.ERR, \\"serverless pre function\\"); end"]\n        },\n        "serverless-post-function": {\n            "phase": "rewrite",\n            "functions" : ["return function(conf, ctx) ngx.log(ngx.ERR, \\"match uri \\", ctx.curr_req_matched and ctx.curr_req_matched._path); end"]\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,a.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,a.kt)("p",null,"Use curl to access:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/index.html\n")),(0,a.kt)("p",null,"Then you will find the message 'serverless pre-function' and 'match uri /index.html' in the error.log,\nwhich indicates that the specified function is in effect."),(0,a.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,a.kt)("p",null,"When you want to disable the serverless plugin, it is very simple,\nyou can delete the corresponding json configuration in the plugin configuration,\nno need to restart the service, it will take effect immediately:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,a.kt)("p",null,"The serverless plugin has been disabled now. It works for other plugins."))}p.isMDXComponent=!0}}]);