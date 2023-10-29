"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[8274],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=o.createContext({}),u=function(e){var t=o.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(g.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,g=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,m=c["".concat(g,".").concat(d)]||c[d]||s[d]||l;return n?o.createElement(m,r(r({ref:t},p),{},{components:n})):o.createElement(m,r({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=c;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var u=2;u<l;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},30930:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>g});var o=n(87462),a=(n(67294),n(3905));const l={title:"google-cloud-logging",keywords:["APISIX","API Gateway","Plugin","Google Cloud logging"],description:"This document contains information about the Apache APISIX google-cloud-logging Plugin."},r=void 0,i={unversionedId:"plugins/google-cloud-logging",id:"version-3.1/plugins/google-cloud-logging",isDocsHomePage:!1,title:"google-cloud-logging",description:"This document contains information about the Apache APISIX google-cloud-logging Plugin.",source:"@site/docs-apisix_versioned_docs/version-3.1/plugins/google-cloud-logging.md",sourceDirName:"plugins",slug:"/plugins/google-cloud-logging",permalink:"/docs/apisix/plugins/google-cloud-logging",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.1/docs/en/latest/plugins/google-cloud-logging.md",tags:[],version:"3.1",frontMatter:{title:"google-cloud-logging",keywords:["APISIX","API Gateway","Plugin","Google Cloud logging"],description:"This document contains information about the Apache APISIX google-cloud-logging Plugin."},sidebar:"version-3.1/docs",previous:{title:"sls-logger",permalink:"/docs/apisix/plugins/sls-logger"},next:{title:"splunk-hec-logging",permalink:"/docs/apisix/plugins/splunk-hec-logging"}},g=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Enabling the Plugin",id:"enabling-the-plugin",children:[{value:"Full configuration",id:"full-configuration",children:[]},{value:"Minimal configuration",id:"minimal-configuration",children:[]}]},{value:"Example usage",id:"example-usage",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],u={toc:g};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"google-cloud-logging")," Plugin is used to send APISIX access logs to ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/logging/"},"Google Cloud Logging Service"),"."),(0,a.kt)("p",null,"This plugin also allows to push logs as a batch to your Google Cloud Logging Service. It might take some time to receive the log data. It will be automatically sent after the timer function in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/batch-processor"},"batch processor")," expires."),(0,a.kt)("h2",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"auth_config"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Either ",(0,a.kt)("inlineCode",{parentName:"td"},"auth_config")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"auth_file")," must be provided.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"auth_config.private_key"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Private key of the Google Cloud service account.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"auth_config.project_id"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Project ID in the Google Cloud service account.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"auth_config.token_uri"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://oauth2.googleapis.com/token"},"https://oauth2.googleapis.com/token")),(0,a.kt)("td",{parentName:"tr",align:null},"Token URI of the Google Cloud service account.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"auth_config.entries_uri"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://logging.googleapis.com/v2/entries:write"},"https://logging.googleapis.com/v2/entries:write")),(0,a.kt)("td",{parentName:"tr",align:null},"Google Cloud Logging Service API.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"auth_config.scopes"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},'["https://www.googleapis.com/auth/logging.read", "https://www.googleapis.com/auth/logging.write", "https://www.googleapis.com/auth/logging.admin", "https://www.googleapis.com/auth/cloud-platform"]'),(0,a.kt)("td",{parentName:"tr",align:null},"Access scopes of the Google Cloud service account. See ",(0,a.kt)("a",{parentName:"td",href:"https://developers.google.com/identity/protocols/oauth2/scopes#logging"},"OAuth 2.0 Scopes for Google APIs"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"auth_file"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Path to the Google Cloud service account authentication JSON file. Either ",(0,a.kt)("inlineCode",{parentName:"td"},"auth_config")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"auth_file")," must be provided.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ssl_verify"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"true"),(0,a.kt)("td",{parentName:"tr",align:null},"When set to ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),", enables SSL verification as mentioned in ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/openresty/lua-nginx-module#tcpsocksslhandshake"},"OpenResty docs"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"resource"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},'{"type": "global"}'),(0,a.kt)("td",{parentName:"tr",align:null},"Google monitor resource. See ",(0,a.kt)("a",{parentName:"td",href:"https://cloud.google.com/logging/docs/reference/v2/rest/v2/MonitoredResource"},"MonitoredResource")," for more details.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"log_id"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"apisix.apache.org%2Flogs"),(0,a.kt)("td",{parentName:"tr",align:null},"Google Cloud logging ID. See ",(0,a.kt)("a",{parentName:"td",href:"https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry"},"LogEntry")," for details.")))),(0,a.kt)("p",null,"NOTE: ",(0,a.kt)("inlineCode",{parentName:"p"},'encrypt_fields = {"auth_config.private_key"}')," is also defined in the schema, which means that the field will be stored encrypted in etcd. See ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/plugin-develop#encrypted-storage-fields"},"encrypted storage fields"),"."),(0,a.kt)("p",null,"This Plugin supports using batch processors to aggregate and process entries (logs/data) in a batch. This avoids the need for frequently submitting the data. The batch processor submits data every ",(0,a.kt)("inlineCode",{parentName:"p"},"5")," seconds or when the data in the queue reaches ",(0,a.kt)("inlineCode",{parentName:"p"},"1000"),". See ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/batch-processor#configuration"},"Batch Processor")," for more information or setting your custom configuration."),(0,a.kt)("h2",{id:"enabling-the-plugin"},"Enabling the Plugin"),(0,a.kt)("h3",{id:"full-configuration"},"Full configuration"),(0,a.kt)("p",null,"The example below shows a complete configuration of the Plugin on a specific Route:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "google-cloud-logging": {\n            "auth_config":{\n                "project_id":"apisix",\n                "private_key":"-----BEGIN RSA PRIVATE KEY-----your private key-----END RSA PRIVATE KEY-----",\n                "token_uri":"https://oauth2.googleapis.com/token",\n                "scopes":[\n                    "https://www.googleapis.com/auth/logging.admin"\n                ],\n                "entries_uri":"https://logging.googleapis.com/v2/entries:write"\n            },\n            "resource":{\n                "type":"global"\n            },\n            "log_id":"apisix.apache.org%2Flogs",\n            "inactive_timeout":10,\n            "max_retry_count":0,\n            "buffer_duration":60,\n            "retry_delay":1,\n            "batch_max_size":1\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "uri": "/hello"\n}\'\n')),(0,a.kt)("h3",{id:"minimal-configuration"},"Minimal configuration"),(0,a.kt)("p",null,"The example below shows a bare minimum configuration of the Plugin on a Route:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "google-cloud-logging": {\n            "auth_config":{\n                "project_id":"apisix",\n                "private_key":"-----BEGIN RSA PRIVATE KEY-----your private key-----END RSA PRIVATE KEY-----"\n            }\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "uri": "/hello"\n}\'\n')),(0,a.kt)("h2",{id:"example-usage"},"Example usage"),(0,a.kt)("p",null,"Now, if you make a request to APISIX, it will be logged in your Google Cloud Logging Service."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/hello\n")),(0,a.kt)("p",null,"You can then login and view the logs in ",(0,a.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/logs/viewer"},"Google Cloud Logging Service"),"."),(0,a.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,a.kt)("p",null,"To disable the ",(0,a.kt)("inlineCode",{parentName:"p"},"google-cloud-logging")," Plugin, you can delete the corresponding JSON configuration from the Plugin configuration. APISIX will automatically reload and you do not have to restart for this to take effect."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}p.isMDXComponent=!0}}]);