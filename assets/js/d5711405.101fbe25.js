"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[38256],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=i.createContext({}),c=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(o,".").concat(m)]||u[m]||d[m]||a;return n?i.createElement(h,s(s({ref:t},p),{},{components:n})):i.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<a;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},18441:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var i=n(87462),r=(n(67294),n(3905));const a={title:"Mutual TLS Authentication"},s=void 0,l={unversionedId:"mtls",id:"version-3.1/mtls",isDocsHomePage:!1,title:"Mutual TLS Authentication",description:"Mutual TLS authentication provides a better way to prevent unauthorized access to APISIX.",source:"@site/docs-apisix_versioned_docs/version-3.1/mtls.md",sourceDirName:".",slug:"/mtls",permalink:"/docs/apisix/mtls",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.1/docs/en/latest/mtls.md",tags:[],version:"3.1",frontMatter:{title:"Mutual TLS Authentication"},sidebar:"version-3.1/docs",previous:{title:"Running APISIX in AWS with AWS CDK",permalink:"/docs/apisix/aws"},next:{title:"Debug Function",permalink:"/docs/apisix/debug-function"}},o=[{value:"Protect Admin API",id:"protect-admin-api",children:[{value:"Why use it",id:"why-use-it",children:[]},{value:"How to configure",id:"how-to-configure",children:[]},{value:"How client calls",id:"how-client-calls",children:[]}]},{value:"etcd with mTLS",id:"etcd-with-mtls",children:[{value:"How to configure",id:"how-to-configure-1",children:[]}]},{value:"Protect Route",id:"protect-route",children:[{value:"Why use it",id:"why-use-it-1",children:[]},{value:"How to configure",id:"how-to-configure-2",children:[]}]},{value:"mTLS Between APISIX and Upstream",id:"mtls-between-apisix-and-upstream",children:[{value:"Why use it",id:"why-use-it-2",children:[]},{value:"How to configure",id:"how-to-configure-3",children:[]}]}],c={toc:o};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"protect-admin-api"},"Protect Admin API"),(0,r.kt)("h3",{id:"why-use-it"},"Why use it"),(0,r.kt)("p",null,"Mutual TLS authentication provides a better way to prevent unauthorized access to APISIX."),(0,r.kt)("p",null,"The clients will provide their certificates to the server and the server will check whether the cert is signed by the supplied CA and decide whether to serve the request."),(0,r.kt)("h3",{id:"how-to-configure"},"How to configure"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Generate self-signed key pairs, including ca, server, client key pairs.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Modify configuration items in ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),":"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'  admin_listen:\n    ip: 127.0.0.1\n    port: 9180\n  https_admin: true\n\n  admin_api_mtls:\n    admin_ssl_ca_cert: "/data/certs/mtls_ca.crt"              # Path of your self-signed ca cert.\n    admin_ssl_cert: "/data/certs/mtls_server.crt"             # Path of your self-signed server side cert.\n    admin_ssl_cert_key: "/data/certs/mtls_server.key"         # Path of your self-signed server side key.\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Run command:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"apisix init\napisix reload\n")),(0,r.kt)("h3",{id:"how-client-calls"},"How client calls"),(0,r.kt)("p",null,"Please replace the following certificate paths and domain name with your real ones."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Note: The same CA certificate as the server needs to be used *")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --cacert /data/certs/mtls_ca.crt --key /data/certs/mtls_client.key --cert /data/certs/mtls_client.crt  https://admin.apisix.dev:9180/apisix/admin/routes -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1'\n")),(0,r.kt)("h2",{id:"etcd-with-mtls"},"etcd with mTLS"),(0,r.kt)("h3",{id:"how-to-configure-1"},"How to configure"),(0,r.kt)("p",null,"You need to build ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/FAQ#how-do-i-build-the-apisix-base-environment"},"APISIX-Base")," and configure ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd.tls")," section if you want APISIX to work on an etcd cluster with mTLS enabled."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"deployment:\n  role: traditional\n  role_traditional:\n    config_provider: etcd\n  etcd:\n    tls:\n      cert: /data/certs/etcd_client.pem       # path of certificate used by the etcd client\n      key: /data/certs/etcd_client.key        # path of key used by the etcd client\n")),(0,r.kt)("p",null,"If APISIX does not trust the CA certificate that used by etcd server, we need to set up the CA certificate."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apisix:\n  ssl:\n    ssl_trusted_certificate: /path/to/certs/ca-certificates.crt       # path of CA certificate used by the etcd server\n")),(0,r.kt)("h2",{id:"protect-route"},"Protect Route"),(0,r.kt)("h3",{id:"why-use-it-1"},"Why use it"),(0,r.kt)("p",null,"Using mTLS is a way to verify clients cryptographically. It is useful and important in cases where you want to have encrypted and secure traffic in both directions."),(0,r.kt)("h3",{id:"how-to-configure-2"},"How to configure"),(0,r.kt)("p",null,"We provide a ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/tutorials/client-to-apisix-mtls"},"tutorial")," that explains in detail how to configure mTLS between the client and APISIX."),(0,r.kt)("p",null,"When configuring ",(0,r.kt)("inlineCode",{parentName:"p"},"ssl"),", use parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"client.ca")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"client.depth")," to configure the root CA that signing client certificates and the max length of certificate chain. Please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/admin-api#ssl"},"Admin API")," for details."),(0,r.kt)("p",null,"Here is an example Python script to create SSL with mTLS (id is ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),", changes admin API url if needed):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'#!/usr/bin/env python\n# coding: utf-8\n# save this file as ssl.py\nimport sys\n# sudo pip install requests\nimport requests\n\nif len(sys.argv) < 4:\n    print("bad argument")\n    sys.exit(1)\nwith open(sys.argv[1]) as f:\n    cert = f.read()\nwith open(sys.argv[2]) as f:\n    key = f.read()\nsni = sys.argv[3]\napi_key = "edd1c9f034335f136f87ad84b625c8f1" # Change it\n\nreqParam = {\n    "cert": cert,\n    "key": key,\n    "snis": [sni],\n}\nif len(sys.argv) >= 5:\n    print("Setting mTLS")\n    reqParam["client"] = {}\n    with open(sys.argv[4]) as f:\n        clientCert = f.read()\n        reqParam["client"]["ca"] = clientCert\n    if len(sys.argv) >= 6:\n        reqParam["client"]["depth"] = int(sys.argv[5])\nresp = requests.put("http://127.0.0.1:9180/apisix/admin/ssls/1", json=reqParam, headers={\n    "X-API-KEY": api_key,\n})\nprint(resp.status_code)\nprint(resp.text)\n')),(0,r.kt)("p",null,"Create SSL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./ssl.py ./server.pem ./server.key 'mtls.test.com' ./client_ca.pem 10\n\n# test it\ncurl --resolve 'mtls.test.com:<APISIX_HTTPS_PORT>:<APISIX_URL>' \"https://<APISIX_URL>:<APISIX_HTTPS_PORT>/hello\" -k --cert ./client.pem --key ./client.key\n")),(0,r.kt)("p",null,"Please make sure that the SNI fits the certificate domain."),(0,r.kt)("h2",{id:"mtls-between-apisix-and-upstream"},"mTLS Between APISIX and Upstream"),(0,r.kt)("h3",{id:"why-use-it-2"},"Why use it"),(0,r.kt)("p",null,"Sometimes the upstream requires mTLS. In this situation, the APISIX acts as the client, it needs to provide client certificate to communicate with upstream."),(0,r.kt)("h3",{id:"how-to-configure-3"},"How to configure"),(0,r.kt)("p",null,"When configuring ",(0,r.kt)("inlineCode",{parentName:"p"},"upstreams"),", we could use parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"tls.client_cert")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"tls.client_key")," to configure the client certificate APISIX used to communicate with upstreams. Please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/admin-api#upstream"},"Admin API")," for details."),(0,r.kt)("p",null,"This feature requires APISIX to run on ",(0,r.kt)("a",{parentName:"p",href:"./FAQ/#how-do-i-build-the-apisix-base-environment"},"APISIX-Base"),"."),(0,r.kt)("p",null,"Here is a similar Python script to patch a existed upstream with mTLS (changes admin API url if needed):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'#!/usr/bin/env python\n# coding: utf-8\n# save this file as patch_upstream_mtls.py\nimport sys\n# sudo pip install requests\nimport requests\n\nif len(sys.argv) < 4:\n    print("bad argument")\n    sys.exit(1)\nwith open(sys.argv[2]) as f:\n    cert = f.read()\nwith open(sys.argv[3]) as f:\n    key = f.read()\nid = sys.argv[1]\napi_key = "edd1c9f034335f136f87ad84b625c8f1" # Change it\n\nreqParam = {\n    "tls": {\n        "client_cert": cert,\n        "client_key": key,\n    },\n}\n\nresp = requests.patch("http://127.0.0.1:9180/apisix/admin/upstreams/"+id, json=reqParam, headers={\n    "X-API-KEY": api_key,\n})\nprint(resp.status_code)\nprint(resp.text)\n')),(0,r.kt)("p",null,"Patch existed upstream with id ",(0,r.kt)("inlineCode",{parentName:"p"},"testmtls"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./patch_upstream_mtls.py testmtls ./client.pem ./client.key\n")))}p.isMDXComponent=!0}}]);