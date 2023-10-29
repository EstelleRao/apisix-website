"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[27673],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var g=a.createContext({}),p=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(g.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,g=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),c=l,m=d["".concat(g,".").concat(c)]||d[c]||s[c]||r;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47949:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>g});var a=n(87462),l=(n(67294),n(3905));const r={title:"google-cloud-logging"},o=void 0,i={unversionedId:"plugins/google-cloud-logging",id:"version-2.12/plugins/google-cloud-logging",isDocsHomePage:!1,title:"google-cloud-logging",description:"Name",source:"@site/docs-apisix_versioned_docs/version-2.12/plugins/google-cloud-logging.md",sourceDirName:"plugins",slug:"/plugins/google-cloud-logging",permalink:"/docs/apisix/2.12/plugins/google-cloud-logging",editUrl:"/edit#https://github.com/apache/apisix/edit/release/2.12/docs/en/latest/plugins/google-cloud-logging.md",tags:[],version:"2.12",frontMatter:{title:"google-cloud-logging"},sidebar:"version-2.12/docs",previous:{title:"sls-logger",permalink:"/docs/apisix/2.12/plugins/sls-logger"},next:{title:"splunk-hec-logging",permalink:"/docs/apisix/2.12/plugins/splunk-hec-logging"}},g=[{value:"Summary",id:"summary",children:[]},{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"How To Enable",id:"how-to-enable",children:[{value:"Full configuration",id:"full-configuration",children:[]},{value:"Minimize configuration",id:"minimize-configuration",children:[]}]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],p={toc:g};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"summary"},"Summary"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#name"},(0,l.kt)("strong",{parentName:"a"},"Name"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#attributes"},(0,l.kt)("strong",{parentName:"a"},"Attributes"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#how-to-enable"},(0,l.kt)("strong",{parentName:"a"},"How To Enable"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#test-plugin"},(0,l.kt)("strong",{parentName:"a"},"Test Plugin"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#disable-plugin"},(0,l.kt)("strong",{parentName:"a"},"Disable Plugin")))),(0,l.kt)("h2",{id:"name"},"Name"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"google-cloud-logging")," plugin is used to send the access log of ",(0,l.kt)("inlineCode",{parentName:"p"},"Apache APISIX")," to the ",(0,l.kt)("a",{parentName:"p",href:"https://cloud.google.com/logging/"},"Google Cloud Logging Service"),"."),(0,l.kt)("p",null,"This plugin provides the ability to push log data as a batch to Google Cloud logging Service."),(0,l.kt)("p",null,"For more info on Batch-Processor in Apache APISIX please refer:\n",(0,l.kt)("a",{parentName:"p",href:"/docs/apisix/2.12/batch-processor"},"Batch-Processor")),(0,l.kt)("h2",{id:"attributes"},"Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auth_config"),(0,l.kt)("td",{parentName:"tr",align:null},"Semi-optional"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"one of ",(0,l.kt)("inlineCode",{parentName:"td"},"auth_config")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"auth_file")," must be configured")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auth_config.private_key"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"the private key parameters of the Google service account")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auth_config.project_id"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"the project id parameters of the Google service account")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auth_config.token_uri"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://oauth2.googleapis.com/token"},"https://oauth2.googleapis.com/token")),(0,l.kt)("td",{parentName:"tr",align:null},"the token uri parameters of the Google service account")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auth_config.entries_uri"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://logging.googleapis.com/v2/entries:write"},"https://logging.googleapis.com/v2/entries:write")),(0,l.kt)("td",{parentName:"tr",align:null},"google cloud logging service API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auth_config.scopes"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},'["https://www.googleapis.com/auth/logging.read","https://www.googleapis.com/auth/logging.write","https://www.googleapis.com/auth/logging.admin","https://www.googleapis.com/auth/cloud-platform"]'),(0,l.kt)("td",{parentName:"tr",align:null},"the access scopes parameters of the Google service account, refer to: ",(0,l.kt)("a",{parentName:"td",href:"https://developers.google.com/identity/protocols/oauth2/scopes#logging"},"OAuth 2.0 Scopes for Google APIs"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auth_file"),(0,l.kt)("td",{parentName:"tr",align:null},"semi-optional"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"path to the google service account json file\uff08Semi-optional, one of auth_config or auth_file must be configured\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ssl_verify"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"enable ",(0,l.kt)("inlineCode",{parentName:"td"},"SSL")," verification, option as per ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/openresty/lua-nginx-module#tcpsocksslhandshake"},"OpenResty docs"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"resource"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},'{"type": "global"}'),(0,l.kt)("td",{parentName:"tr",align:null},"the Google monitor resource, refer to: ",(0,l.kt)("a",{parentName:"td",href:"https://cloud.google.com/logging/docs/reference/v2/rest/v2/MonitoredResource"},"MonitoredResource"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"log_id"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"apisix.apache.org%2Flogs"),(0,l.kt)("td",{parentName:"tr",align:null},"google cloud logging id, refer to: ",(0,l.kt)("a",{parentName:"td",href:"https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry"},"LogEntry"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_retry_count"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"max number of retries before removing from the processing pipe line")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"retry_delay"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"number of seconds the process execution should be delayed if the execution fails")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"buffer_duration"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"60"),(0,l.kt)("td",{parentName:"tr",align:null},"max age in seconds of the oldest entry in a batch before the batch must be processed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inactive_timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"max age in seconds when the buffer will be flushed if inactive")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch_max_size"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"1000"),(0,l.kt)("td",{parentName:"tr",align:null},"max size of each batch")))),(0,l.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,l.kt)("p",null,"The following is an example of how to enable the ",(0,l.kt)("inlineCode",{parentName:"p"},"google-cloud-logging")," for a specific route."),(0,l.kt)("h3",{id:"full-configuration"},"Full configuration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "google-cloud-logging": {\n            "auth_config":{\n                "project_id":"apisix",\n                "private_key":"-----BEGIN RSA PRIVATE KEY-----your private key-----END RSA PRIVATE KEY-----",\n                "token_uri":"https://oauth2.googleapis.com/token",\n                "scopes":[\n                    "https://www.googleapis.com/auth/logging.admin"\n                ],\n                "entries_uri":"https://logging.googleapis.com/v2/entries:write"\n            },\n            "resource":{\n                "type":"global"\n            },\n            "log_id":"apisix.apache.org%2Flogs",\n            "inactive_timeout":10,\n            "max_retry_count":0,\n            "buffer_duration":60,\n            "retry_delay":1,\n            "batch_max_size":1\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "uri": "/hello"\n}\'\n')),(0,l.kt)("h3",{id:"minimize-configuration"},"Minimize configuration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "google-cloud-logging": {\n            "auth_config":{\n                "project_id":"apisix",\n                "private_key":"-----BEGIN RSA PRIVATE KEY-----your private key-----END RSA PRIVATE KEY-----"\n            }\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "uri": "/hello"\n}\'\n')),(0,l.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Send request to route configured with the ",(0,l.kt)("inlineCode",{parentName:"li"},"google-cloud-logging")," plugin")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -i http://127.0.0.1:9080/hello\nHTTP/1.1 200 OK\n...\nhello, world\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Login to Google Cloud to view logging service")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/logs/viewer"},"Google Cloud Logging Service")),(0,l.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,l.kt)("p",null,"Disabling the ",(0,l.kt)("inlineCode",{parentName:"p"},"google-cloud-logging")," plugin is very simple, just remove the ",(0,l.kt)("inlineCode",{parentName:"p"},"JSON")," configuration corresponding to ",(0,l.kt)("inlineCode",{parentName:"p"},"google-cloud-logging"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}u.isMDXComponent=!0}}]);