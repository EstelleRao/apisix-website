"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5406],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var i=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),g=a,h=d["".concat(l,".").concat(g)]||d[g]||p[g]||r;return n?i.createElement(h,o(o({ref:t},c),{},{components:n})):i.createElement(h,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var i=n(25773),a=(n(27378),n(35318));const r={title:"Release Apache APISIX 3.1.0",authors:[{name:"Zexuan Luo",title:"Author",url:"https://github.com/spacewander",image_url:"https://github.com/spacewander.png"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4"}],keywords:["Apache APISIX","security","Custom plugin","gRPC","Consul"],description:"Apache APISIX 3.1.0 is officially released! This version brings a lot of functional support on the security level and adds a built-in debugging plugin, to optimize the experience of using APISIX.",tags:["Community"]},o=void 0,s={permalink:"/blog/2022/12/30/release-apache-apisix-3.1.0",source:"@site/blog/2022/12/30/release-apache-apisix-3.1.0.md",title:"Release Apache APISIX 3.1.0",description:"Apache APISIX 3.1.0 is officially released! This version brings a lot of functional support on the security level and adds a built-in debugging plugin, to optimize the experience of using APISIX.",date:"2022-12-30T00:00:00.000Z",formattedDate:"December 30, 2022",tags:[{label:"Community",permalink:"/blog/tags/community"}],readingTime:5.945,truncated:!0,authors:[{name:"Zexuan Luo",title:"Author",url:"https://github.com/spacewander",image_url:"https://github.com/spacewander.png",imageURL:"https://github.com/spacewander.png"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4",imageURL:"https://avatars.githubusercontent.com/u/39793568?v=4"}],prevItem:{title:"Accessing APISIX-Dashboard from Everywhere with Keycloak Authentication",permalink:"/blog/2023/01/02/accessing_apisix-dashboard_from_everywhere_with_keycloak_authentication"},nextItem:{title:"Web resource caching: Server-Side",permalink:"/blog/2022/12/14/web-caching-server"}},l={authorsImageUrls:[void 0,void 0]},u=[{value:"New feature: encrypted storage of plugin configuration",id:"new-feature-encrypted-storage-of-plugin-configuration",children:[],level:2},{value:"New feature: storing sensitive information in an external security service",id:"new-feature-storing-sensitive-information-in-an-external-security-service",children:[{value:"Related examples",id:"related-examples",children:[{value:"Environment variable-based sensitive information storage",id:"environment-variable-based-sensitive-information-storage",children:[],level:4},{value:"Vault-based storage of sensitive information",id:"vault-based-storage-of-sensitive-information",children:[],level:4}],level:3}],level:2},{value:"New Feature: Experimental gRPC-based etcd Configuration Synchronization",id:"new-feature-experimental-grpc-based-etcd-configuration-synchronization",children:[],level:2},{value:"New Feature: Consul-based Service Discovery",id:"new-feature-consul-based-service-discovery",children:[],level:2},{value:"New feature: built-in debugging plugins",id:"new-feature-built-in-debugging-plugins",children:[],level:2},{value:"New features: optimizations and more small features",id:"new-features-optimizations-and-more-small-features",children:[],level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Apache APISIX 3.1.0 is officially released! This version brings a lot of functional support on the security level and adds a built-in debugging plugin, to optimize the experience of using APISIX.")),(0,a.kt)("p",null,"After a month, a new version is here. This time APISIX 3.1.0 is the first new version since the big 3.0 release. As always, in the new era of 3.x, we present you with more new features in each version."),(0,a.kt)("p",null,"This release, 3.1.0, adds support for encrypted storage of plugin configurations and storage on external security services, focusing on enabling users to use their configurations more securely and with greater confidence. On top of this, we have also introduced several new features designed to optimize your experience with APISIX."),(0,a.kt)("h2",{id:"new-feature-encrypted-storage-of-plugin-configuration"},"New feature: encrypted storage of plugin configuration"),(0,a.kt)("p",null,"The new version supports encrypted storage of plugin-specific fields in etcd."),(0,a.kt)("p",null,"In previous versions, APISIX provided a ",(0,a.kt)("inlineCode",{parentName:"p"},"key_encrypt_salt")," configuration item to support encryption of SSL keys stored inside etcd to avoid storing private key data in plaintext."),(0,a.kt)("p",null,"After all, for sensitive data such as private keys, one less place to store plaintext can provide more peace of mind. So for other equally sensitive configurations, such as the secret in the ",(0,a.kt)("inlineCode",{parentName:"p"},"jwt-auth")," plugin, can we also encrypt it to avoid storing it in plaintext in etcd?"),(0,a.kt)("p",null,"Version 3.1 extends the encrypted storage feature to other fields. With this feature, we can specify the fields that need to be encrypted on a particular plugin and then turn on encryption in the config.yaml file to avoid storing plaintext."),(0,a.kt)("p",null,"As an example, we add the following token to the ",(0,a.kt)("inlineCode",{parentName:"p"},"jwt-auth")," plugin."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'     encrypt_fields = {"secret", "private_key"},\n')),(0,a.kt)("p",null,"When we enable encryption of fields in ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apisix:\n    data_encryption:\n        enable: true\n        keyring:\n            - edd1c9f0985e76a2\n")),(0,a.kt)("p",null,"Then the secret and private_key in the configuration of the ",(0,a.kt)("inlineCode",{parentName:"p"},"jwt-auth")," plugin written to etcd will be stored encrypted. The configuration seen via ",(0,a.kt)("inlineCode",{parentName:"p"},"etcdctl get --prefix /"),' will be something like ""secret": "77+NmbYqNfN+oL..."" Instead of the original configuration information, this is the data.'),(0,a.kt)("h2",{id:"new-feature-storing-sensitive-information-in-an-external-security-service"},"New feature: storing sensitive information in an external security service"),(0,a.kt)("p",null,"In addition to storing sensitive information encrypted in etcd, there is also the option to dynamically retrieve sensitive information from another system instead of requiring it to be stored in APISIX's configuration store (e.g. etcd)."),(0,a.kt)("p",null,"In version 3.1, we introduced a feature called APISIX Secret, which allows users to store secret in APISIX through some key management services (Vault, etc.) and read it according to the key at the time of use, ensuring that the secret does not exist in plaintext throughout the platform."),(0,a.kt)("p",null,"APISIX currently supports storing secret through the following methods."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Environment variables"),(0,a.kt)("li",{parentName:"ul"},"HashiCorp Vault")),(0,a.kt)("h3",{id:"related-examples"},"Related examples"),(0,a.kt)("p",null,"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"key-auth")," plugin as an example, let's demonstrate how to use the feature."),(0,a.kt)("h4",{id:"environment-variable-based-sensitive-information-storage"},"Environment variable-based sensitive information storage"),(0,a.kt)("p",null,"Step 1: Create environment variables before starting the APISIX instance"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"export JACK_AUTH_KEY=abc\n")),(0,a.kt)("p",null,"Step 2: Reference the environment variables in the ",(0,a.kt)("inlineCode",{parentName:"p"},"key-auth")," plugin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/consumers \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "jack",\n    "plugins": {\n        "key-auth": {\n            "key": "$ENV://JACK_AUTH_KEY"\n        }\n    }\n}\'\n')),(0,a.kt)("p",null,"The above steps allow you to save the key configuration in the ",(0,a.kt)("inlineCode",{parentName:"p"},"key-auth")," plugin in an environment variable instead of explicitly displaying it when configuring it."),(0,a.kt)("h4",{id:"vault-based-storage-of-sensitive-information"},"Vault-based storage of sensitive information"),(0,a.kt)("p",null,"Step 1: Create the corresponding configuration in Vault, which can be done with the following command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"vault kv put apisix/jack auth-key=value\n")),(0,a.kt)("p",null,"Step 2: Add the Secret resource via the Admin API and configure the Vault's address and other connection information."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/secrets/vault/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "https://127.0.0.1:8200"\uff0c\n    "prefix": "apisix",\n    "token": "root"\n}\'\n')),(0,a.kt)("p",null,"Step 3: Refer to the APISIX Secret resource in the ",(0,a.kt)("inlineCode",{parentName:"p"},"key-auth")," plugin and populate the location in the Vault with the following configuration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/consumers \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "jack",\n    "plugins": {\n        "key-auth": {\n            "key": "$secret://vault/1/jack/auth-key"\n        }\n    }\n}\'\n')),(0,a.kt)("p",null,"With the above steps, you can save the key configuration in the ",(0,a.kt)("inlineCode",{parentName:"p"},"key-auth")," plugin in the Vault instead of explicitly displaying it when configuring it."),(0,a.kt)("h2",{id:"new-feature-experimental-grpc-based-etcd-configuration-synchronization"},"New Feature: Experimental gRPC-based etcd Configuration Synchronization"),(0,a.kt)("p",null,"In this new release, we have also introduced experimental gRPC-based etcd configuration synchronization. The current APISIX configuration for synchronizing etcd is based on HTTP long pulling, which requires etcd to have gRPC-gateway enabled (fortunately, it is enabled by default)."),(0,a.kt)("p",null,"In practice, we encountered problems with etcd's HTTP API, perhaps because synchronizing the configuration via HTTP is not the mainstream way of using etcd, so it is more likely to encounter bugs."),(0,a.kt)("p",null,"In addition, since gRPC itself provides multiplexing support, switching to gRPC synchronization can significantly reduce the number of APISIX connections to etcd."),(0,a.kt)("p",null,"Currently, APISIX synchronization requires a separate HTTP connection for each type of configuration. Switching to gRPC results in only one connection per process for configuration synchronization (two if the L4 proxy is enabled)."),(0,a.kt)("p",null,"To enable experimental gRPC-based configuration synchronization, set ",(0,a.kt)("inlineCode",{parentName:"p"},"use_grpc: true")," in the configuration file ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'  etcd:\n    use_grpc: true\n    timeout: 3600\n    host:\n      - "http://127.0.0.1:2379"\n    prefix: "/apisix"\n')),(0,a.kt)("h2",{id:"new-feature-consul-based-service-discovery"},"New Feature: Consul-based Service Discovery"),(0,a.kt)("p",null,"In previous versions of APISIX, enthusiastic contributors provided a Consul KV-based service discovery implementation. However, Consul KV is a bit different from Consul's own service discovery, which supports additional features such as health checks for registered services, so it is more widely used."),(0,a.kt)("p",null,"In this 3.1 release, another enthusiastic contributor has provided Consul-based service discovery to fill this gap."),(0,a.kt)("p",null,"Consul-based service discovery has a similar configuration to Consul KV-based service discovery in previous versions. First, the service discovery needs to be enabled in the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'discovery:\n  consul:\n    servers:\n      - "http://127.0.0.1:8500"\n\n')),(0,a.kt)("p",null,"Then, configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"service_name")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"discovery_type")," in the specific upstream."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/upstreams/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "service_name": "service_a",\n    "discovery_type": "consul"\n}\'\n')),(0,a.kt)("p",null,"The corresponding upstream is used to get the real upstream node based on the values configured in Consul."),(0,a.kt)("h2",{id:"new-feature-built-in-debugging-plugins"},"New feature: built-in debugging plugins"),(0,a.kt)("p",null,"Debugging is a part of programmers' daily work. As a gateway focusing on debugging experience, APISIX has a built-in Lua debugger plugin in the form of a plug-in in version 3.1, which supports dynamically setting breakpoints, adding callbacks, and so on."),(0,a.kt)("p",null,"The default configuration is as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'plugins:\n    ...\n    - inspect\n    ...\n\nplugin_attr:\n  inspect:\n    delay: 3\n    hooks_file: "/usr/local/apisix/plugin_inspect_hooks.lua"\n')),(0,a.kt)("p",null,"APISIX periodically looks at the configured hooks_file (in this case is ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/apisix/plugin_inspect_hooks.lua")," file) after startup. If there is the content inside the file, it sets breakpoints and callbacks based on the content inside. For example, the following will set a breakpoint on line 88 of ",(0,a.kt)("inlineCode",{parentName:"p"},"limit-req.lua")," file and register the callback function ",(0,a.kt)("inlineCode",{parentName:"p"},"function(info) ... end"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local dbg = require "apisix.inspect.dbg"\n\ndbg.set_hook("limit-req.lua", 88, require("apisix.plugins.limit-req").access, function(info)\n    ngx.log(ngx.INFO, debug.traceback("foo traceback", 3))\n    return true\nend)\n')),(0,a.kt)("h2",{id:"new-features-optimizations-and-more-small-features"},"New features: optimizations and more small features"),(0,a.kt)("p",null,"In addition to the big features mentioned above, this release contains several changes worth mentioning."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Optimization of resource usage for Prometheus metrics collection"),(0,a.kt)("li",{parentName:"ul"},"Support for configuring domain names as upstream in L4 proxies")),(0,a.kt)("p",null,"If you are interested in the full update details of the new release, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/CHANGELOG.md#310"},"CHANGELOG")," of the 3.1.0 release."))}p.isMDXComponent=!0}}]);