"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[89844],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),h=a,d=m["".concat(l,".").concat(h)]||m[h]||c[h]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40891:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={title:"Secret"},o=void 0,s={unversionedId:"terminology/secret",id:"version-3.1/terminology/secret",isDocsHomePage:!1,title:"Secret",description:"Secrets refer to any sensitive information required during the running process of APISIX, which may be part of the core configuration (such as the etcd's password) or some sensitive information in the plugin. Common types of Secrets in APISIX include:",source:"@site/docs-apisix_versioned_docs/version-3.1/terminology/secret.md",sourceDirName:"terminology",slug:"/terminology/secret",permalink:"/docs/apisix/terminology/secret",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.1/docs/en/latest/terminology/secret.md",tags:[],version:"3.1",frontMatter:{title:"Secret"},sidebar:"version-3.1/docs",previous:{title:"Upstream",permalink:"/docs/apisix/terminology/upstream"},next:{title:"batch-requests",permalink:"/docs/apisix/plugins/batch-requests"}},l=[{value:"Description",id:"description",children:[]},{value:"Use environment variables to manage secrets",id:"use-environment-variables-to-manage-secrets",children:[{value:"Usage",id:"usage",children:[]},{value:"Example: use in key-auth plugin",id:"example-use-in-key-auth-plugin",children:[]}]},{value:"Use Vault to manage secrets",id:"use-vault-to-manage-secrets",children:[{value:"Usage",id:"usage-1",children:[]},{value:"Example: use in key-auth plugin",id:"example-use-in-key-auth-plugin-1",children:[]}]}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Secrets refer to any sensitive information required during the running process of APISIX, which may be part of the core configuration (such as the etcd's password) or some sensitive information in the plugin. Common types of Secrets in APISIX include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"username, the password for some components (etcd, Redis, Kafka, etc.)"),(0,a.kt)("li",{parentName:"ul"},"the private key of the certificate"),(0,a.kt)("li",{parentName:"ul"},"API key"),(0,a.kt)("li",{parentName:"ul"},"Sensitive plugin configuration fields, typically used for authentication, hashing, signing, or encryption")),(0,a.kt)("p",null,"APISIX Secret allows users to store secrets through some secrets management services (Vault, etc.) in APISIX, and read them according to the key when using them to ensure that ",(0,a.kt)("strong",{parentName:"p"},"Secrets do not exist in plain text throughout the platform"),"."),(0,a.kt)("p",null,"Its working principle is shown in the figure:\n",(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/3.1/docs/assets/images/secret.png",alt:"secret"})),(0,a.kt)("p",null,"APISIX currently supports storing secrets in the following ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#use-environment-variables-to-manage-secrets"},"Environment Variables")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#use-vault-to-manage-secrets"},"HashiCorp Vault"))),(0,a.kt)("p",null,"You can use APISIX Secret functions by specifying format variables in the consumer configuration of the following plugins, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"key-auth"),"."),(0,a.kt)("p",null,"::: note"),(0,a.kt)("p",null,"If a configuration item is: ",(0,a.kt)("inlineCode",{parentName:"p"},'key: "$ENV://ABC"'),', when the actual value corresponding to $ENV://ABC is not retrieved in APISIX Secret, the value of the key will be "$ENV://ABC" instead of ',(0,a.kt)("inlineCode",{parentName:"p"},"nil"),"."),(0,a.kt)("p",null,":::"),(0,a.kt)("h2",{id:"use-environment-variables-to-manage-secrets"},"Use environment variables to manage secrets"),(0,a.kt)("p",null,"Using environment variables to manage secrets means that you can save key information in environment variables, and refer to environment variables through variables in a specific format when configuring plugins. APISIX supports referencing system environment variables and environment variables configured through the Nginx ",(0,a.kt)("inlineCode",{parentName:"p"},"env")," directive."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ENV://$env_name/$sub_key\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"env_name: environment variable name")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"sub_key: get the value of a property when the value of the environment variable is a JSON string"),(0,a.kt)("p",{parentName:"li"},"If the value of the environment variable is of type string, such as:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"export JACK_AUTH_KEY=abc\n")),(0,a.kt)("p",null,"It can be referenced as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ENV://JACK_AUTH_KEY\n")),(0,a.kt)("p",null,"If the value of the environment variable is a JSON string like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'export JACK={"auth-key":"abc","openid-key": "def"}\n')),(0,a.kt)("p",null,"It can be referenced as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Get the auth-key of the environment variable JACK\n$ENV://JACK/auth-key\n\n# Get the openid-key of the environment variable JACK\n$ENV://JACK/openid-key\n")),(0,a.kt)("h3",{id:"example-use-in-key-auth-plugin"},"Example: use in key-auth plugin"),(0,a.kt)("p",null,"Step 1: Create environment variables before the APISIX instance starts"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"export JACK_AUTH_KEY=abc\n")),(0,a.kt)("p",null,"Step 2: Reference the environment variable in the ",(0,a.kt)("inlineCode",{parentName:"p"},"key-auth")," plugin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/consumers \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "jack",\n    "plugins": {\n        "key-auth": {\n            "key": "$ENV://JACK_AUTH_KEY"\n        }\n    }\n}\'\n')),(0,a.kt)("p",null,"Through the above steps, the ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," configuration in the ",(0,a.kt)("inlineCode",{parentName:"p"},"key-auth")," plugin can be saved in the environment variable instead of being displayed in plain text when configuring the plugin."),(0,a.kt)("h2",{id:"use-vault-to-manage-secrets"},"Use Vault to manage secrets"),(0,a.kt)("p",null,"Using Vault to manage secrets means that you can store secrets information in the Vault service and refer to it through variables in a specific format when configuring plugins. APISIX currently supports ",(0,a.kt)("a",{parentName:"p",href:"https://developer.hashicorp.com/vault/docs/secrets/kv/kv-v1"},"Vault KV engine version V1"),"."),(0,a.kt)("h3",{id:"usage-1"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$secret://$manager/$id/$secret_name/$key\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"manager: secrets management service, could be the Vault, AWS, etc."),(0,a.kt)("li",{parentName:"ul"},"id: APISIX Secrets resource ID, which needs to be consistent with the one specified when adding the APISIX Secrets resource"),(0,a.kt)("li",{parentName:"ul"},"secret_name: the secret name in the secrets management service"),(0,a.kt)("li",{parentName:"ul"},"key: the key corresponding to the secret in the secrets management service")),(0,a.kt)("h3",{id:"example-use-in-key-auth-plugin-1"},"Example: use in key-auth plugin"),(0,a.kt)("p",null,"Step 1: Create the corresponding key in the Vault, you can use the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"vault kv put apisix/jack auth-key=value\n")),(0,a.kt)("p",null,"Step 2: Add APISIX Secrets resources through the Admin API, configure the Vault address and other connection information:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/secrets/vault/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "https://127.0.0.1:8200"\uff0c\n    "prefix": "apisix",\n    "token": "root"\n}\'\n')),(0,a.kt)("p",null,"If you use APISIX Standalone mode, you can add the following configuration in ",(0,a.kt)("inlineCode",{parentName:"p"},"apisix.yaml")," configuration file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"secrets:\n  - id: vault/1\n    prefix: apisix\n    token: root\n    uri: 127.0.0.1:8200\n")),(0,a.kt)("p",null,"Step 3: Reference the APISIX Secrets resource in the ",(0,a.kt)("inlineCode",{parentName:"p"},"key-auth")," plugin and fill in the key information:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/consumers \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "jack",\n    "plugins": {\n        "key-auth": {\n            "key": "$secret://vault/1/jack/auth-key"\n        }\n    }\n}\'\n')),(0,a.kt)("p",null,"Through the above two steps, when the user request hits the ",(0,a.kt)("inlineCode",{parentName:"p"},"key-auth")," plugin, the real value of the key in the Vault will be obtained through the APISIX Secret component."))}p.isMDXComponent=!0}}]);