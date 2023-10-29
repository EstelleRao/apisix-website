"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4860],{35318:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>m});var l=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=l.createContext({}),i=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},o=function(e){var t=i(e.components);return l.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),d=i(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?l.createElement(k,p(p({ref:t},o),{},{components:n})):l.createElement(k,p({ref:t},o))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,p[1]=u;for(var i=2;i<a;i++)p[i]=n[i];return l.createElement.apply(null,p)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36453:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>u,toc:()=>i});var l=n(25773),r=(n(27378),n(35318));const a={title:"Apache APISIX \u5728 Azure Ddsv5 \u548c Dpdsv5 \u4e0a\u7684\u6027\u80fd\u6d4b\u8bd5",authors:[{name:"\u8d75\u58eb\u745e",title:"Author",url:"https://github.com/soulbird",image_url:"https://github.com/soulbird.png"},{name:"\u97e9\u98de",title:"Technical Writer",url:"https://github.com/hf400159",image_url:"https://github.com/hf400159.png"}],keywords:["API \u7f51\u5173","Azure","\u5fae\u8f6f\u4e91","ARM","Apache APISIX"],description:"\u672c\u6587\u4f7f\u7528 API \u7f51\u5173 Apache APISIX \u6765\u5bf9\u6bd4 Azure Ddsv5 \u548c Azure Dpdsv5 \u5728\u7f51\u7edc IO \u5bc6\u96c6\u578b\u573a\u666f\u4e0b\u7684\u6027\u80fd\u3002",tags:["Ecosystem"]},p=void 0,u={permalink:"/zh/blog/2022/08/08/apache-apisix-performance-test-in-azure",source:"@site/blog/2022/08/08/apache-apisix-performance-test-in-azure.md",title:"Apache APISIX \u5728 Azure Ddsv5 \u548c Dpdsv5 \u4e0a\u7684\u6027\u80fd\u6d4b\u8bd5",description:"\u672c\u6587\u4f7f\u7528 API \u7f51\u5173 Apache APISIX \u6765\u5bf9\u6bd4 Azure Ddsv5 \u548c Azure Dpdsv5 \u5728\u7f51\u7edc IO \u5bc6\u96c6\u578b\u573a\u666f\u4e0b\u7684\u6027\u80fd\u3002",date:"2022-08-08T00:00:00.000Z",formattedDate:"2022\u5e748\u67088\u65e5",tags:[{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"}],readingTime:5.805,truncated:!0,authors:[{name:"\u8d75\u58eb\u745e",title:"Author",url:"https://github.com/soulbird",image_url:"https://github.com/soulbird.png",imageURL:"https://github.com/soulbird.png"},{name:"\u97e9\u98de",title:"Technical Writer",url:"https://github.com/hf400159",image_url:"https://github.com/hf400159.png",imageURL:"https://github.com/hf400159.png"}],prevItem:{title:"\u793e\u533a\u53cc\u5468\u62a5 (7.16 - 7.31)",permalink:"/zh/blog/2022/08/09/weekly-report-0731"},nextItem:{title:"Apache APISIX Ingress v1.5-rc1 \u6b63\u5f0f\u53d1\u5e03",permalink:"/zh/blog/2022/08/05/apisix-ingress-1.5rc1-release"}},s={authorsImageUrls:[void 0,void 0]},i=[{value:"\u80cc\u666f",id:"\u80cc\u666f",children:[],level:2},{value:"\u524d\u671f\u51c6\u5907",id:"\u524d\u671f\u51c6\u5907",children:[],level:2},{value:"\u90e8\u7f72 Apache APISIX",id:"\u90e8\u7f72-apache-apisix",children:[],level:2},{value:"Azure Ddsv5 vs Azure Dpdsv5",id:"azure-ddsv5-vs-azure-dpdsv5",children:[{value:"\u573a\u666f\u4e00\uff1a\u5355\u4e0a\u6e38",id:"\u573a\u666f\u4e00\u5355\u4e0a\u6e38",children:[],level:3},{value:"\u573a\u666f 2\uff1a\u5355\u4e2a\u4e0a\u6e38 + \u4e24\u4e2a\u63d2\u4ef6",id:"\u573a\u666f-2\u5355\u4e2a\u4e0a\u6e38--\u4e24\u4e2a\u63d2\u4ef6",children:[],level:3},{value:"\u6570\u636e\u6bd4\u8f83",id:"\u6570\u636e\u6bd4\u8f83",children:[],level:3}],level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[],level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",children:[],level:2}],o={toc:i};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4f7f\u7528 API \u7f51\u5173 Apache APISIX \u6765\u5bf9\u6bd4 Azure Ddsv5 \u548c Azure Dpdsv5 \u5728\u7f51\u7edc IO \u5bc6\u96c6\u578b\u573a\u666f\u4e0b\u7684\u6027\u80fd\u3002")),(0,r.kt)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,r.kt)("p",null,"\u4eca\u5e74 4 \u6708\uff0c\u5fae\u8f6f\u5ba3\u5e03\u63a8\u51fa\u57fa\u4e8e Ampere\xae Altra\xae Arm \u5904\u7406\u5668\u7684 Azure \u865a\u62df\u673a\u7cfb\u5217\u9884\u89c8\u7248\u3002\u65b0\u7684 VM \u7cfb\u5217\u5305\u62ec\u901a\u7528 Dpsv5 \u548c\u5185\u5b58\u4f18\u5316\u7684 Epsv5 VM\uff0c\u5177\u4f53\u4fe1\u606f\u53c2\u8003\u4e0b\u56fe\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0808/1.png",alt:"VM \u7cfb\u5217"})),(0,r.kt)("p",null,"\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0cAmpere\xae Altra\xae Arm \u662f\u4e00\u6b3e\u4e91\u539f\u751f\u5904\u7406\u5668\uff0c\u57fa\u4e8e Ampere\xae Altra\xae Arm \u5904\u7406\u5668\u7684 Azure \u865a\u62df\u673a\u4e5f\u56e0\u6b64\u80fd\u4ee5\u9ad8\u6548\u7684\u65b9\u5f0f\u8fd0\u884c\u6a2a\u5411\u6269\u5c55\u7684\u4e91\u539f\u751f\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,r.kt)("p",null,"\u90a3\u4e48\u5b9e\u9645\u4f53\u9a8c\u548c\u6027\u80fd\u5982\u4f55\u5462\uff1f\u63a5\u4e0b\u6765\u6211\u4eec\u5c06\u4ee5\u4e00\u4e2a\u4e91\u539f\u751f\u7684 API \u7f51\u5173\u4e3a\u4f8b\uff0c\u5e26\u5927\u5bb6\u4e00\u8d77\u770b\u770b\u57fa\u4e8e ARM \u67b6\u6784\u7684 Azure \u865a\u62df\u673a\u7684\u8868\u73b0\u3002\u8fd9\u91cc\uff0c\u6211\u4eec\u9009\u62e9\u4e86 Apache APISIX \u5728\u901a\u7528\u578b Dpdsv5 \u7cfb\u5217\u865a\u62df\u673a\u4e0a\u8fdb\u884c\u5b89\u88c5\u6d4b\u8bd5\u3002"),(0,r.kt)("p",null,"Apache APISIX \u662f\u4e00\u4e2a\u4e91\u539f\u751f\u3001\u9ad8\u6027\u80fd\u3001\u53ef\u6269\u5c55\u7684 API \u7f51\u5173\u3002\u57fa\u4e8e NGNIX + LuaJIT \u548c etcd\uff0cAPISIX \u4e0e\u4f20\u7edf API \u7f51\u5173\u76f8\u6bd4\uff0c\u5177\u6709\u52a8\u6001\u8def\u7531\u548c\u63d2\u4ef6\u70ed\u52a0\u8f7d\u7279\u6027\uff0c\u7279\u522b\u9002\u5408\u4e91\u539f\u751f\u67b6\u6784\u4e0b\u7684 API \u7ba1\u7406\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0808/2.png",alt:"Apache APISIX"})),(0,r.kt)("h2",{id:"\u524d\u671f\u51c6\u5907"},"\u524d\u671f\u51c6\u5907"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u5728 Azure \u4e0a\u542f\u52a8\u4e00\u4e2a Dpdsv5 \u7cfb\u5217\u7684\u5b9e\u4f8b\uff0c\u64cd\u4f5c\u7cfb\u7edf\u9009\u62e9 Ubuntu 20.04\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0808/3.jpeg",alt:"Dpdsv5"})),(0,r.kt)("p",null,"\u7136\u540e\u5b89\u88c5 Docker\uff0c\u65b9\u4fbf\u540e\u7eed\u4f7f\u7528\u5bb9\u5668\u5316\u7684\u65b9\u5f0f\u6765\u90e8\u7f72 Apache APISIX\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get update && sudo apt-get install docker.io\n")),(0,r.kt)("h2",{id:"\u90e8\u7f72-apache-apisix"},"\u90e8\u7f72 Apache APISIX"),(0,r.kt)("p",null,"Apache APISIX \u4f7f\u7528 etcd \u4f5c\u4e3a\u914d\u7f6e\u4e2d\u5fc3\uff0c\u56e0\u6b64\u9700\u8981\u5148\u542f\u52a8\u4e00\u4e2a etcd \u5b9e\u4f8b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker run -d --name etcd \\\n    -p 2379:2379 \\\n    -e ETCD_UNSUPPORTED_ARCH=arm64 \\\n    -e ETCD_LISTEN_CLIENT_URLS=http://0.0.0.0:2379 \\\n    -e ETCD_ADVERTISE_CLIENT_URLS=http://0.0.0.0:2379 \\\n    rancher/coreos-etcd:v3.4.16-arm64\n")),(0,r.kt)("p",null,"\u542f\u52a8 Apache APISIX \u5b9e\u4f8b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker run --net=host -d apache/apisix:2.14.1-alpine\n")),(0,r.kt)("p",null,"\u521b\u5efa\u8def\u7531\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl "http://127.0.0.1:9080/apisix/admin/routes/1" \\\n-H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -X PUT -d \'\n{  \n    "uri": "/anything/*",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n              "httpbin.org:80": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"\u8fdb\u884c\u8bbf\u95ee\u6d4b\u8bd5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/anything/das\n")),(0,r.kt)("p",null,"\u8fd4\u56de\u4ee5\u4e0b\u7ed3\u679c\u5219\u8868\u793a\u5b89\u88c5\u6210\u529f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n.....\n")),(0,r.kt)("h2",{id:"azure-ddsv5-vs-azure-dpdsv5"},"Azure Ddsv5 vs Azure Dpdsv5"),(0,r.kt)("p",null,"\u4ece\u4e0a\u8ff0\u64cd\u4f5c\u6765\u770b\uff0cApache APISIX \u5728 Azure Dpdsv5 \u4e0a\u7684\u5b89\u88c5\u548c\u517c\u5bb9\u6027\u6d4b\u8bd5\u90fd\u80fd\u987a\u5229\u5b8c\u6210\u3002\u90a3\u4e48 Azure Dpdsv5 \u7684\u5b9e\u9645\u6027\u80fd\u5230\u5e95\u5982\u4f55\u5462\uff1f\u63a5\u4e0b\u6765\u6211\u4eec\u5c06\u4f7f\u7528 Apache APISIX \u5206\u522b\u5728 Azure Dpdsv5 \u548c  Azure Ddsv5 \u4e0a\u505a\u6027\u80fd\u6d4b\u8bd5\u5bf9\u6bd4\uff0c\u770b\u770b\u5b9e\u9645\u8868\u73b0\u3002"),(0,r.kt)("p",null,"Azure Ddsv5 \u662f Azure D \u7cfb\u5217\u7684\u53e6\u4e00\u6b3e\u673a\u578b\uff0c\u662f\u57fa\u4e8e Intel\xae x86 \u67b6\u6784\u7684\uff0c \u6240\u4ee5\u4e0a\u8ff0 etcd \u5b89\u88c5\u6b65\u9aa4\u7565\u6709\u4e0d\u540c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker run -d --name etcd \\\n    -p 2379:2379 \\\n    -e ETCD_LISTEN_CLIENT_URLS=http://0.0.0.0:2379 \\\n    -e ALLOW_NONE_AUTHENTICATION=yes \\\n    -e ETCD_ADVERTISE_CLIENT_URLS=http://0.0.0.0:2379 \\\n    bitnami/etcd:3.4.16\n")),(0,r.kt)("p",null,"\u4e3a\u7b80\u5355\u8d77\u89c1\uff0c\u672c\u6b21\u6d4b\u8bd5 APISIX \u4e2d\u53ea\u542f\u7528\u4e86\u4e00\u4e2a Worker\uff0c\u4ee5\u4e0b\u6027\u80fd\u6d4b\u8bd5\u6570\u636e\u5747\u5728\u5355\u6838 CPU \u4e0a\u8fd0\u884c\u3002"),(0,r.kt)("h3",{id:"\u573a\u666f\u4e00\u5355\u4e0a\u6e38"},"\u573a\u666f\u4e00\uff1a\u5355\u4e0a\u6e38"),(0,r.kt)("p",null,"\u8be5\u573a\u666f\u4e0b\u5c06\u4f7f\u7528\u5355\u4e2a\u4e0a\u6e38\uff08\u4e0d\u5305\u542b\u4efb\u4f55\u63d2\u4ef6\uff09\uff0c\u4e3b\u8981\u6d4b\u8bd5 APISIX \u5728\u7eaf\u4ee3\u7406\u56de\u6e90\u6a21\u5f0f\u4e0b\u7684\u6027\u80fd\u8868\u73b0\u3002\u5728\u672c\u5730\u73af\u5883\u4e2d\u8fdb\u884c\u6d4b\u8bd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# apisix: 1 worker + 1 upstream + no plugin\n\n# \u6ce8\u518c\u8def\u7531\ncurl http://127.0.0.1:9080/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980":1\n        }\n    }\n}\'\n')),(0,r.kt)("h3",{id:"\u573a\u666f-2\u5355\u4e2a\u4e0a\u6e38--\u4e24\u4e2a\u63d2\u4ef6"},"\u573a\u666f 2\uff1a\u5355\u4e2a\u4e0a\u6e38 + \u4e24\u4e2a\u63d2\u4ef6"),(0,r.kt)("p",null,"\u8be5\u573a\u666f\u4e0b\u5c06\u4f7f\u7528\u5355\u4e2a\u4e0a\u6e38\u4e0e\u4e24\u4e2a\u63d2\u4ef6\u8fdb\u884c\uff0c\u4e3b\u8981\u6d4b\u8bd5 APISIX \u5728\u5f00\u542f ",(0,r.kt)("inlineCode",{parentName:"p"},"limit-count")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus")," \u4e24\u4e2a\u6838\u5fc3\u6027\u80fd\u6d88\u8017\u63d2\u4ef6\u65f6\u7684\u8868\u73b0\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# apisix: 1 worker + 1 upstream + 2 plugins (limit-count + prometheus)\n\n# \u6ce8\u518c\u8def\u7531\ncurl http://127.0.0.1:9080/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {\n        "limit-count": {\n            "count": 2000000000000,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        },\n        "prometheus": {}\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980":1\n        }\n    }\n}\'\n')),(0,r.kt)("h3",{id:"\u6570\u636e\u6bd4\u8f83"},"\u6570\u636e\u6bd4\u8f83"),(0,r.kt)("p",null,"\u4e0a\u8ff0\u4e24\u4e2a\u573a\u666f\u4e2d\uff0c\u5206\u522b\u4ece\u8bf7\u6c42 QPS\uff08\u6bcf\u79d2\u67e5\u8be2\u6570\uff09 \u548c\u5ef6\u8fdf\u65f6\u95f4\u4e24\u4e2a\u5c42\u9762\u8fdb\u884c\u4e86\u76f8\u5173\u7684\u6d4b\u8bd5\u5bf9\u6bd4\u3002\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"QPS \u6bd4\u8f83"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0808/4.png",alt:"QPS"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8bf7\u6c42\u5ef6\u8fdf\u6bd4\u8f83"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0808/5.png",alt:"Latency"})))),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"  ")),(0,r.kt)("td",{colspan:"2"},"\u5355\u4e2a\u4e0a\u6e38"),(0,r.kt)("td",{colspan:"2"},"\u5355\u4e2a\u4e0a\u6e38+\u4e24\u4e2a\u63d2\u4ef6")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"  ")),(0,r.kt)("td",null,(0,r.kt)("b",null,"Azure Ddsv5")),(0,r.kt)("td",null,(0,r.kt)("b",null,"Azure Dpdsv5")),(0,r.kt)("td",null,(0,r.kt)("b",null,"Azure Ddsv5")),(0,r.kt)("td",null,(0,r.kt)("b",null,"Azure Dpdsv5"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"QPS(request/s)")),(0,r.kt)("td",null,(0,r.kt)("b",null,"14900")),(0,r.kt)("td",null,(0,r.kt)("b",null,"13400")),(0,r.kt)("td",null,(0,r.kt)("b",null,"13100")),(0,r.kt)("td",null,(0,r.kt)("b",null,"11000"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Latency(ms)")),(0,r.kt)("td",null,(0,r.kt)("b",null,"1.07")),(0,r.kt)("td",null,(0,r.kt)("b",null,"1.21")),(0,r.kt)("td",null,(0,r.kt)("b",null,"1.21")),(0,r.kt)("td",null,(0,r.kt)("b",null,"1.43")))),(0,r.kt)("p",null,"\u4ece\u4ee5\u4e0a\u6570\u636e\u4e5f\u53ef\u4ee5\u770b\u51fa\uff0c\u5728 API \u7f51\u5173\u7b49\u7f51\u7edc IO \u5bc6\u96c6\u8ba1\u7b97\u573a\u666f\u4e0b\uff0cDpdsv5 \u76f8\u6bd4\u540c\u7cfb\u5217 Ddsv5 \u5728\u6027\u80fd\u4e0a\u4ecd\u7136\u6709\u5dee\u8ddd\u3002\u4e0d\u8fc7\u53e6\u4e00\u4e2a\u597d\u6d88\u606f\u662f\uff0c\u5728\u540c\u7b49\u914d\u7f6e\u7684\u60c5\u51b5\u4e0b\uff0cDpdsv5 \u7684\u4ef7\u683c\u8981\u6bd4 Ddsv5 \u4fbf\u5b9c 20% \u5de6\u53f3\u3002\u5728\u5b9e\u9645\u673a\u5668\u9009\u578b\u65f6\uff0c\u7528\u6237\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u4e1a\u52a1\u4f53\u91cf\u6765\u7075\u6d3b\u51b3\u7b56\u3002"),(0,r.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4f7f\u7528 Apache APISIX \u6765\u5bf9\u6bd4 Azure Ddsv5 \u548c Azure Dpdsv5 \u7684\u6027\u80fd\u3002\u4ece\u7ed3\u679c\u53ef\u4ee5\u770b\u51fa Azure Dpdsv5 \u76f8\u6bd4 Ddsv5\uff0c\u8868\u73b0\u867d\u7136\u4e0d\u662f\u90a3\u4e48\u4eae\u773c\uff0c\u4f46\u662f\u7531\u4e8e\u8be5\u7cfb\u5217\u7684\u673a\u578b\u5c1a\u5904\u4e8e\u9884\u89c8\u7248\uff0c\u5fae\u8f6f\u6b63\u5728\u8fdb\u884c\u6301\u7eed\u7684\u6539\u8fdb\u548c\u4f18\u5316\uff0c\u6211\u4eec\u4e5f\u975e\u5e38\u671f\u5f85\u5b83\u7684\u540e\u7eed\u8868\u73b0\u3002"),(0,r.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/blog/now-in-preview-azure-virtual-machines-with-ampere-altra-armbased-processors/"},"Now in preview: Azure Virtual Machines with Ampere Altra Arm-based processors")))}c.isMDXComponent=!0}}]);