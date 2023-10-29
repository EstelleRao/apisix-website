"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7775],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(27378);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(n),d=l,g=m["".concat(o,".").concat(d)]||m[d]||s[d]||r;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90973:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var a=n(25773),l=(n(27378),n(35318));const r={title:"Apache APISIX 2.13.0 \u6b63\u5f0f\u53d1\u5e03",authors:[{name:"\u7f57\u6cfd\u8f69",title:"Author",url:"https://github.com/spacewander",image_url:"https://avatars.githubusercontent.com/u/4161644?v=4"},{name:"\u66fe\u5955\u9716",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://github.com/yzeng25.png"}],keywords:["Apache APISIX","API \u7f51\u5173","\u670d\u52a1\u53d1\u73b0","\u53ef\u89c2\u6d4b\u6027","\u7248\u672c\u53d1\u5e03","LTS version"],description:"\u5168\u65b0\u7684 LTS \u7248\u672c Apache APISIX 2.13.0 \u6b63\u5f0f\u53d1\u5e03\u3002\u8be5 LTS \u7248\u672c\u4e0d\u4ec5\u6027\u80fd\u66f4\u52a0\u7a33\u5b9a\uff0c\u800c\u4e14\u652f\u6301\u4e86\u66f4\u591a\u7684\u53ef\u89c2\u6d4b\u6027\u3001\u670d\u52a1\u53d1\u73b0\u63d2\u4ef6\u548c\u66f4\u5b8c\u5584\u7684\u591a\u8bed\u8a00\u5f00\u53d1\u4f53\u7cfb\u3002",tags:["Community"]},i=void 0,p={permalink:"/zh/blog/2022/03/28/release-apache-apisix-2.13",source:"@site/blog/2022/03/28/release-apache-apisix-2.13.md",title:"Apache APISIX 2.13.0 \u6b63\u5f0f\u53d1\u5e03",description:"\u5168\u65b0\u7684 LTS \u7248\u672c Apache APISIX 2.13.0 \u6b63\u5f0f\u53d1\u5e03\u3002\u8be5 LTS \u7248\u672c\u4e0d\u4ec5\u6027\u80fd\u66f4\u52a0\u7a33\u5b9a\uff0c\u800c\u4e14\u652f\u6301\u4e86\u66f4\u591a\u7684\u53ef\u89c2\u6d4b\u6027\u3001\u670d\u52a1\u53d1\u73b0\u63d2\u4ef6\u548c\u66f4\u5b8c\u5584\u7684\u591a\u8bed\u8a00\u5f00\u53d1\u4f53\u7cfb\u3002",date:"2022-03-28T00:00:00.000Z",formattedDate:"2022\u5e743\u670828\u65e5",tags:[{label:"Community",permalink:"/zh/blog/tags/community"}],readingTime:6.94,truncated:!0,authors:[{name:"\u7f57\u6cfd\u8f69",title:"Author",url:"https://github.com/spacewander",image_url:"https://avatars.githubusercontent.com/u/4161644?v=4",imageURL:"https://avatars.githubusercontent.com/u/4161644?v=4"},{name:"\u66fe\u5955\u9716",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://github.com/yzeng25.png",imageURL:"https://github.com/yzeng25.png"}],prevItem:{title:"Apache APISIX Summit ASIA 2022 \u91cd\u78c5\u6765\u88ad",permalink:"/zh/blog/2022/04/12/apisix-summit-asia-2022"},nextItem:{title:"\u793e\u533a\u53cc\u5468\u62a5\uff083.1-3.14\uff09",permalink:"/zh/blog/2022/03/24/weekly-report-0314"}},o={authorsImageUrls:[void 0,void 0]},u=[{value:"\u529f\u80fd\u66f4\u65b0",id:"\u529f\u80fd\u66f4\u65b0",children:[{value:"\u65b0\u53d8\u5316\uff1a\u4e0d\u518d\u9ed8\u8ba4\u66b4\u9732 API",id:"\u65b0\u53d8\u5316\u4e0d\u518d\u9ed8\u8ba4\u66b4\u9732-api",children:[],level:3},{value:"\u65b0\u529f\u80fd\uff1a\u53ef\u89c2\u6d4b\u6027\u5c42\u9762\u5bf9\u63a5\u66f4\u591a\u7684\u76d1\u63a7\u4f53\u7cfb",id:"\u65b0\u529f\u80fd\u53ef\u89c2\u6d4b\u6027\u5c42\u9762\u5bf9\u63a5\u66f4\u591a\u7684\u76d1\u63a7\u4f53\u7cfb",children:[],level:3},{value:"\u66f4\u5b8c\u5584\u7684\u591a\u8bed\u8a00\u5f00\u53d1\u4f53\u7cfb",id:"\u66f4\u5b8c\u5584\u7684\u591a\u8bed\u8a00\u5f00\u53d1\u4f53\u7cfb",children:[],level:3}],level:2},{value:"Bug \u4fee\u590d",id:"bug-\u4fee\u590d",children:[],level:2},{value:"\u66f4\u591a\u7ec6\u8282",id:"\u66f4\u591a\u7ec6\u8282",children:[],level:2}],c={toc:u};function s(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5168\u65b0\u7684 LTS \u7248\u672c Apache APISIX 2.13.0 \u6b63\u5f0f\u53d1\u5e03\u3002\u8be5 LTS \u7248\u672c\u4e0d\u4ec5\u6027\u80fd\u66f4\u52a0\u7a33\u5b9a\uff0c\u800c\u4e14\u652f\u6301\u4e86\u66f4\u591a\u7684\u53ef\u89c2\u6d4b\u6027\u3001\u670d\u52a1\u53d1\u73b0\u63d2\u4ef6\u548c\u66f4\u5b8c\u5584\u7684\u591a\u8bed\u8a00\u5f00\u53d1\u4f53\u7cfb\u3002")),(0,l.kt)("p",null,"\u8ddd\u79bb Apache APISIX \u4e0a\u4e00\u6b21\u53d1\u5e03 LTS \u7248\u672c\u5df2\u7ecf\u8fc7\u53bb\u4e86\u5927\u534a\u5e74\u7684\u65f6\u95f4\uff0c\u4eca\u5929\uff0cApache APISIX \u793e\u533a\u5e26\u6765\u4e86\u4e00\u4e2a\u5168\u65b0\u7684 LTS \u7248\u672c\u2014\u20142.13.0\u3002\u8be5 LTS \u7248\u672c\u4e0d\u4ec5\u6027\u80fd\u66f4\u52a0\u7a33\u5b9a\uff0c\u800c\u4e14\u652f\u6301\u4e86\u66f4\u591a\u7684\u53ef\u89c2\u6d4b\u6027\u3001\u670d\u52a1\u53d1\u73b0\u63d2\u4ef6\u548c\u66f4\u5b8c\u5584\u7684\u591a\u8bed\u8a00\u5f00\u53d1\u4f53\u7cfb\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u5728\u8ffd\u6c42\u6574\u4f53\u7a33\u5b9a\u6027\u7684\u540c\u65f6\uff0c\u4e5f\u60f3\u5c1d\u8bd5\u4e00\u4e0b\u65b0\u529f\u80fd\uff0c\u4e0d\u59a8\u8003\u8651\u5c06\u73b0\u6709\u7684 Apache APISIX \u5347\u7ea7\u5230 2.13.0\u3002\u540e\u7eed\u793e\u533a\u4e5f\u4f1a\u5728 2.13.0 \u7248\u672c\u7684\u57fa\u7840\u4e0a\u53d1\u5e03\u4e00\u7cfb\u5217 patch \u7248\u672c\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1648439024629-e286bd1f-ce1d-424e-a4c0-7ded1ab3d17e.png",alt:"Apache APISIX 2.13.0 \u66f4\u65b0\u6982\u89c8"})),(0,l.kt)("h2",{id:"\u529f\u80fd\u66f4\u65b0"},"\u529f\u80fd\u66f4\u65b0"),(0,l.kt)("h3",{id:"\u65b0\u53d8\u5316\u4e0d\u518d\u9ed8\u8ba4\u66b4\u9732-api"},"\u65b0\u53d8\u5316\uff1a\u4e0d\u518d\u9ed8\u8ba4\u66b4\u9732 API"),(0,l.kt)("p",null,"\u5728 2.13.0 \u4e4b\u524d\u7684\u7248\u672c\u4e2d\uff0c\u6211\u4eec\u5141\u8bb8\u63d2\u4ef6\u6ce8\u518c\u53ef\u4f9b\u5ba2\u6237\u7aef\u8c03\u7528\u7684 API\u3002\u4f8b\u5982\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"jwt-auth")," \u63d2\u4ef6\u4f1a\u6ce8\u518c\u4e00\u4e2a JWT \u7b7e\u540d\u7684\u63a5\u53e3\uff0c\u5ba2\u6237\u7aef\u53ef\u4ee5\u8bbf\u95ee\u8be5\u63a5\u53e3\uff0c\u4ee5\u751f\u6210\u7528\u4e8e\u6821\u9a8c\u7684\u7b7e\u540d\u3002\u4f46\u8fd9\u4e2a\u8bbe\u8ba1\u6709\u4e00\u4e2a\u6f5c\u5728\u7684\u7f3a\u9677\u2014\u2014\u7531\u4e8e\u66b4\u9732\u51fa\u6765\u7684\u662f\u63a5\u53e3\u800c\u4e0d\u662f\u8def\u7531\uff0c\u56e0\u6b64\u65e0\u6cd5\u50cf\u5bf9\u5f85\u8def\u7531\u4e00\u6837\u4e3a\u5176\u52a0\u5f3a\u5b89\u5168\u9632\u62a4\u3002\u867d\u7136\u73b0\u6709\u7684\u673a\u5236\u5141\u8bb8\u7528\u6237\u901a\u8fc7\u7f16\u5199\u5bf9\u5e94\u7684 plugin interceptor \u6765\u62e6\u622a\u63a5\u53e3\u8bbf\u95ee\uff0c\u4f46\u8fd9\u79cd\u65b9\u5f0f\u4ecd\u7136\u5b58\u5728\u5b89\u5168\u9690\u60a3\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6240\u4ee5\u4ece 2.13.0 \u7248\u672c\u5f00\u59cb\uff0c\u6211\u4eec\u51b3\u5b9a\u505a\u51fa\u91cd\u5927\u53d8\u66f4\uff0c\u4e0d\u518d\u9ed8\u8ba4\u66b4\u9732 API\u3002"),"\u5982\u679c\u7528\u6237\u9700\u8981\u66b4\u9732\u63a5\u53e3\uff0c\u5219\u9700\u8981\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"public-api")," \u63d2\u4ef6\u5c06\u63a5\u53e3\u7ed1\u5b9a\u5230\u5bf9\u5e94\u7684\u8def\u7531\u4e0a\u3002\u8fd9\u79cd\u65b9\u5f0f\u4f1a\u5e26\u6765\u4e24\u4e2a\u597d\u5904\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6ce8\u518c\u7684 API \u4f1a\u6709\u66f4\u9ad8\u7684\u80fd\u89c1\u5ea6\uff0c\u76ee\u524d\u6ce8\u518c\u7684 API \u53ea\u6709\u901a\u8fc7\u663e\u793a\u914d\u7f6e\u624d\u4f1a\u751f\u6548\uff0c\u8bbf\u95ee\u65b9\u5f0f\u4e5f\u662f\u7531\u7528\u6237\u81ea\u5b9a\u4e49\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5141\u8bb8\u91c7\u7528\u66f4\u591a\u7684\u5b89\u5168\u9632\u62a4\u9009\u9879\uff0c\u6ce8\u518c\u7684 API \u548c\u8def\u7531\u62e5\u6709\u540c\u6837\u7684\u6743\u9650\u63a7\u5236\u3002")),(0,l.kt)("p",null,"\u5f53\u7136\uff0c2.13.0 \u7248\u672c\u8fd8\u6709\u5176\u4ed6\u7684\u65b0\u53d8\u5316\uff0c\u6bd4\u5982\u4fee\u590d\u4e86\u5386\u53f2\u7248\u672c\u7684\u4e0d\u5408\u7406\u884c\u4e3a\u3002\u5982\u9700\u4e86\u89e3\u5177\u4f53\u4f18\u5316\u4fe1\u606f\uff0c\u8bf7\u67e5\u9605 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/release/2.13/docs/zh/latest/CHANGELOG.md#2130"},"2.13.0 Changelog"),"\u3002"),(0,l.kt)("h3",{id:"\u65b0\u529f\u80fd\u53ef\u89c2\u6d4b\u6027\u5c42\u9762\u5bf9\u63a5\u66f4\u591a\u7684\u76d1\u63a7\u4f53\u7cfb"},"\u65b0\u529f\u80fd\uff1a\u53ef\u89c2\u6d4b\u6027\u5c42\u9762\u5bf9\u63a5\u66f4\u591a\u7684\u76d1\u63a7\u4f53\u7cfb"),(0,l.kt)("p",null,"\u4f5c\u4e3a API \u7f51\u5173\uff0cApache APISIX \u4e00\u76f4\u81f4\u529b\u4e8e\u8fde\u63a5\u66f4\u591a\u7684\u670d\u52a1\uff0c\u6253\u901a\u66f4\u591a\u7684\u53ef\u89c2\u6d4b\u6027\u4e0a\u4e0b\u6e38\u3002\u6211\u4eec\u5728\u6bcf\u4e2a\u7248\u672c\u90fd\u4f1a\u4e3a\u6b64\u6dfb\u7816\u52a0\u74e6\uff0c2.13.0 \u7248\u672c\u4e5f\u4e0d\u4f8b\u5916\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8fd9\u6b21\u6211\u4eec\u65b0\u589e\u4e86\u4e00\u4e2a tracing \u63d2\u4ef6\uff1a",(0,l.kt)("inlineCode",{parentName:"strong"},"opentelemetry"),"\uff0c\u5141\u8bb8\u53d1\u9001 OpenTelemetry tracing \u6570\u636e\u5230\u914d\u7f6e\u7684 collector\u3002"),"\u4e0b\u9762\u7b80\u5355\u901a\u8fc7\u4e00\u4e2a\u793a\u4f8b\u6765\u770b\u4e00\u4e0b\u3002"),(0,l.kt)("p",null,"\u5728\u9759\u6001\u914d\u7f6e\u91cc\u9762\u8bbe\u7f6e\u4e86 collector\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'plugin_attr:\n  opentelemetry:\n    resource:\n      service.name: APISIX\n      tenant.id: business_id\n    collector:\n      address: "127.0.0.1:4317"\n    batch_span_processor:\n      drop_on_queue_full: false\n      max_queue_size: 6\n      batch_timeout: 2\n      inactive_timeout: 1\n      max_export_batch_size: 2\n')),(0,l.kt)("p",null,"\u4e4b\u540e\u5c31\u53ef\u4ee5\u5728\u7279\u5b9a\u7684\u8def\u7531\u4e0a\u5f00\u542f tracing\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uris": [\n        "/uid/*"\n    ],\n    "plugins": {\n        "opentelemetry": {\n            "sampler": {\n                "name": "always_on"\n            }\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:8089": 1\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"\u547d\u4e2d\u8be5\u8def\u7531\u7684\u8bf7\u6c42\u5c06\u4f1a\u4e0a\u62a5 OpenTelemetry \u7684\u6570\u636e\u5230\u5bf9\u5e94\u7684 collector\u3002"),(0,l.kt)("p",null,"\u6b64\u5916\uff0c\u6211\u4eec\u8fd8\u65b0\u589e\u4e86\u4e24\u4e2a\u65e5\u5fd7\u63d2\u4ef6\uff0c\u652f\u6301\u628a\u65e5\u5fd7\u4e0a\u62a5\u5230 ClickHouse \u548c Loggly \u4e2d\u3002"),(0,l.kt)("p",null,"ClickHouse \u662f\u5730\u8868\u6700\u5feb\u7684 OLAP \u6570\u636e\u5e93\u4e4b\u4e00\u3002Apache APISIX \u652f\u6301\u53d1\u9001 access log \u548c error log \u5230 ClickHouse\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n      "plugins": {\n            "clickhouse-logger": {\n                "user": "default",\n                "password": "a",\n                "database": "default",\n                "logtable": "test",\n                "endpoint_addr": "http://127.0.0.1:8123"\n            }\n       },\n      "upstream": {\n           "type": "roundrobin",\n           "nodes": {\n               "127.0.0.1:1980": 1\n           }\n      },\n      "uri": "/hello"\n}\'\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/plugin_metadata/error-log-logger  \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "clickhouse": {\n      "user": "default",\n      "password": "a",\n      "database": "error_log",\n      "logtable": "t",\n      "endpoint_addr": "http://127.0.0.1:8123"\n  }\n}\'\n')),(0,l.kt)("p",null,"Loggly \u662f SolarWinds \u65d7\u4e0b\u7684\u65e5\u5fd7\u5904\u7406 SaaS \u5e73\u53f0\uff0c\u6211\u4eec\u652f\u6301\u901a\u8fc7 syslog \u6216 HTTP/HTTPS \u7684\u65b9\u5f0f\u53d1\u9001 access log\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,l.kt)("p",null,"\u914d\u7f6e\u4e0a\u62a5\u65b9\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/apisix/admin/plugin_metadata/loggly  \\\n-H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X PUT -d '\n{\n   \"protocol\": \"http\"\n}'\n")),(0,l.kt)("p",null,"\u914d\u7f6e\u9700\u8981\u4e0a\u62a5\u7684\u8def\u7531"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins":{\n        "loggly":{\n            "customer_token":"xxx",\n        }\n    },\n    "upstream":{\n        "type":"roundrobin",\n        "nodes":{\n            "127.0.0.1:80":1\n        }\n    },\n    "uri":"/index.html"\n}\'\n')),(0,l.kt)("h3",{id:"\u66f4\u5b8c\u5584\u7684\u591a\u8bed\u8a00\u5f00\u53d1\u4f53\u7cfb"},"\u66f4\u5b8c\u5584\u7684\u591a\u8bed\u8a00\u5f00\u53d1\u4f53\u7cfb"),(0,l.kt)("p",null,"Apache APISIX \u81ea 2.11 \u7248\u672c\u8d77\u5f00\u59cb\u652f\u6301 Wasm\uff08Proxy Wasm SDK\uff09\uff0c\u4f46 LTS \u7248\u672c\u4e00\u76f4\u6ca1\u6709\u63d0\u4f9b\u76f8\u5e94\u652f\u6301\u3002\u5728\u6b64\u6b21\u53d1\u5e03\u7684 Apache APISIX 2.13.0 \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u65b0\u589e\u5e76\u5b8c\u5584\u4e86\u8be5\u529f\u80fd\u3002"),(0,l.kt)("p",null,"\u5728\u7ecf\u8fc7\u534a\u5e74\u8d85\u8fc7 10000 \u884c\u4ee3\u7801\uff08\u5305\u62ec\u6d4b\u8bd5\u548c\u6587\u6863\uff09\u7684\u5f00\u53d1\u540e\uff0cAPISIX \u73b0\u5df2\u5168\u9762\u652f\u6301\u5728",(0,l.kt)("strong",{parentName:"p"},"\u5904\u7406\u8bf7\u6c42\u5934\u3001\u8bf7\u6c42\u4f53\u3001\u54cd\u5e94\u5934\u3001\u54cd\u5e94\u4f53\u56db\u4e2a\u9636\u6bb5\u8fd0\u884c Wasm \u4ee3\u7801"),"\u30022.13.0 \u7248\u672c\u662f\u7b2c\u4e00\u4e2a\u652f\u6301 Wasm \u7684 LTS \u7248\u672c\uff0c\u53ef\u4ee5\u8bf4\u662f\u4e00\u4e2a\u65b0\u7684\u91cc\u7a0b\u7891\u3002"),(0,l.kt)("p",null,"\u9664\u4e86 Wasm \u4e4b\u5916\uff0c\u6211\u4eec\u4e5f\u6b63\u5728\u5f00\u53d1\u4f20\u7edf\u7684\u3001\u57fa\u4e8e RPC \u7684\u591a\u8bed\u8a00\u63d2\u4ef6\u4f53\u7cfb\u3002\u4e0d\u4e45\u4e4b\u524d\uff0c\u6211\u4eec\u53d1\u5e03\u4e86 Python Runner 0.2.0 \u7248\u672c\u3002\u51e0\u5929\u540e\uff0c\u6211\u4eec\u4e5f\u4f1a\u53d1\u5e03 Go Runner 0.3.0 \u7248\u672c\u3002"),(0,l.kt)("h2",{id:"bug-\u4fee\u590d"},"Bug \u4fee\u590d"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"SkyWalking \u548c OpenTelemetry \u6ca1\u6709\u8ffd\u8e2a\u8ba4\u8bc1\u5931\u8d25\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"log-rotate")," \u5207\u5272\u65e5\u5fd7\u4e0d\u652f\u6301\u6309\u6574\u70b9\u5b8c\u6210\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"deepcopy")," \u6ca1\u6709\u590d\u5236 ",(0,l.kt)("inlineCode",{parentName:"li"},"metatable"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"request-validate")," \u5bf9 JSON \u91cc\u9762\u91cd\u590d\u952e\u7684\u5904\u7406 \u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"prometheus")," \u91cd\u590d\u8ba1\u7b97\u6307\u6807\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5f53 ",(0,l.kt)("inlineCode",{parentName:"li"},"conf.headers")," \u7f3a\u5931\u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"proxy-rewrite")," \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"conf.method")," \u4e0d\u751f\u6548 \u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"traffic-split")," \u9996\u6761\u89c4\u5219\u5931\u8d25\u65f6\u65e0\u6cd5\u5339\u914d\u3002"),(0,l.kt)("li",{parentName:"ul"},"etcd \u8d85\u65f6\u89e6\u53d1 ",(0,l.kt)("inlineCode",{parentName:"li"},"resync_delay")," \u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"proto")," \u5b9a\u4e49\u51b2\u7a81\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"limit-count")," \u914d\u7f6e\u4e0d\u53d8\uff0c\u91cd\u7f6e\u8ba1\u6570\u5668\u3002"),(0,l.kt)("li",{parentName:"ul"},"Admin API \u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"plugin-metadata")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"global-rule")," \u8ba1\u6570\u6709\u8bef\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5408\u5e76 route \u548c service \u65f6 labels \u4e22\u5931\u3002")),(0,l.kt)("h2",{id:"\u66f4\u591a\u7ec6\u8282"},"\u66f4\u591a\u7ec6\u8282"),(0,l.kt)("p",null,"\u9664\u4e86\u4e0a\u8ff0\u529f\u80fd\u548c\u7ec4\u4ef6\u5916\uff0cApache APISIX 2.13.0 \u7248\u672c\u8fd8\u66f4\u65b0\u4e86\u5982\u4e0b\u529f\u80fd\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"grpc-transcode \u652f\u6301\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"li"},".pb")," \u6587\u4ef6\u5904\u7406\u5e26 import \u7684 proto \u5b9a\u4e49\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u4ece K8s \u914d\u7f6e\u4e2d\u83b7\u53d6\u4e0a\u6e38\u8282\u70b9\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u65b0\u589e ",(0,l.kt)("inlineCode",{parentName:"li"},"csrf")," \u63d2\u4ef6\uff0c\u63d0\u4f9b\u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020\u9632\u62a4\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u65b0\u589e ",(0,l.kt)("inlineCode",{parentName:"li"},"mocking")," \u63d2\u4ef6\uff0c\u65b9\u4fbf\u751f\u6210\u6d4b\u8bd5\u6570\u636e\u3002")))}s.isMDXComponent=!0}}]);