"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9369],{35318:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(27378);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=l,u=m["".concat(o,".").concat(d)]||m[d]||k[d]||i;return n?a.createElement(u,r(r({ref:t},s),{},{components:n})):a.createElement(u,r({ref:t},s))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,r[1]=p;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70200:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=n(25773),l=(n(27378),n(35318));const i={title:"\u5982\u4f55\u5728 Apache APISIX \u4e2d\u96c6\u6210 Keycloak \u5b9e\u73b0\u8eab\u4efd\u8ba4\u8bc1",authors:[{name:"\u6731\u6b23\u6b23",title:"Author",url:"https://github.com/starsz",image_url:"https://avatars.githubusercontent.com/u/25628854?v=4"},{name:"\u82cf\u94b0",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4"}],keywords:["Apache APISIX","API \u7f51\u5173","Keycloak","\u8eab\u4efd\u8ba4\u8bc1","\u96c6\u6210"],description:"\u901a\u8fc7 API \u7f51\u5173 Apache APISIX \u7684 openid-connect \u63d2\u4ef6\u53ef\u4ee5\u4e0e Keycloak \u8fdb\u884c\u8eab\u4efd\u8ba4\u8bc1\u3002\u901a\u8fc7\u8be5\u63d2\u4ef6\uff0cAPISIX \u4ec5\u9700\u901a\u8fc7\u914d\u7f6e\u5373\u53ef\u5b9e\u73b0\u5bf9\u4f7f\u7528\u8005\u548c\u5e94\u7528\u670d\u52a1\u8fdb\u884c\u8ba4\u8bc1\u4e0e\u9274\u6743\u3002",tags:["Plugins","Authentication"],image:"https://static.apiseven.com/2022/blog/0818/plugins/keycloak.png"},r=void 0,p={permalink:"/zh/blog/2021/12/10/integrate-keycloak-auth-in-apisix",source:"@site/blog/2021/12/10/integrate-keycloak-auth-in-apisix.md",title:"\u5982\u4f55\u5728 Apache APISIX \u4e2d\u96c6\u6210 Keycloak \u5b9e\u73b0\u8eab\u4efd\u8ba4\u8bc1",description:"\u901a\u8fc7 API \u7f51\u5173 Apache APISIX \u7684 openid-connect \u63d2\u4ef6\u53ef\u4ee5\u4e0e Keycloak \u8fdb\u884c\u8eab\u4efd\u8ba4\u8bc1\u3002\u901a\u8fc7\u8be5\u63d2\u4ef6\uff0cAPISIX \u4ec5\u9700\u901a\u8fc7\u914d\u7f6e\u5373\u53ef\u5b9e\u73b0\u5bf9\u4f7f\u7528\u8005\u548c\u5e94\u7528\u670d\u52a1\u8fdb\u884c\u8ba4\u8bc1\u4e0e\u9274\u6743\u3002",date:"2021-12-10T00:00:00.000Z",formattedDate:"2021\u5e7412\u670810\u65e5",tags:[{label:"Plugins",permalink:"/zh/blog/tags/plugins"},{label:"Authentication",permalink:"/zh/blog/tags/authentication"}],readingTime:7.645,truncated:!0,authors:[{name:"\u6731\u6b23\u6b23",title:"Author",url:"https://github.com/starsz",image_url:"https://avatars.githubusercontent.com/u/25628854?v=4",imageURL:"https://avatars.githubusercontent.com/u/25628854?v=4"},{name:"\u82cf\u94b0",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4",imageURL:"https://avatars.githubusercontent.com/u/39793568?v=4"}],prevItem:{title:"\u4f7f\u7528 Prometheus \u76d1\u63a7 APISIX Ingress Controller",permalink:"/zh/blog/2021/12/13/monitor-apisix-ingress-controller-with-prometheus"},nextItem:{title:"API \u7f51\u5173 APISIX \u96c6\u6210 RocketMQ \u6269\u5c55\u65e5\u5fd7\u76d1\u63a7\u529f\u80fd",permalink:"/zh/blog/2021/12/08/apisix-integrate-rocketmq-logger-plugin"}},o={authorsImageUrls:[void 0,void 0]},c=[{value:"\u4ec0\u4e48\u662f Keycloak",id:"\u4ec0\u4e48\u662f-keycloak",children:[],level:2},{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",children:[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",children:[{value:"\u542f\u52a8 Keycloak",id:"\u542f\u52a8-keycloak",children:[],level:4},{value:"\u914d\u7f6e Keycloak",id:"\u914d\u7f6e-keycloak",children:[{value:"\u521b\u5efa realm",id:"\u521b\u5efa-realm",children:[],level:5},{value:"\u521b\u5efa Client",id:"\u521b\u5efa-client",children:[],level:5},{value:"\u914d\u7f6e Client",id:"\u914d\u7f6e-client",children:[],level:5},{value:"\u521b\u5efa User",id:"\u521b\u5efa-user",children:[],level:5}],level:4},{value:"\u521b\u5efa\u8def\u7531",id:"\u521b\u5efa\u8def\u7531",children:[],level:4},{value:"\u83b7\u53d6 client_id \u548c client_secret",id:"\u83b7\u53d6-client_id-\u548c-client_secret",children:[],level:4},{value:"\u83b7\u53d6 discovery \u914d\u7f6e\u9879",id:"\u83b7\u53d6-discovery-\u914d\u7f6e\u9879",children:[{value:"\u521b\u5efa\u8def\u7531\u5e76\u5f00\u542f\u63d2\u4ef6",id:"\u521b\u5efa\u8def\u7531\u5e76\u5f00\u542f\u63d2\u4ef6",children:[],level:5}],level:4}],level:3},{value:"\u8bbf\u95ee\u6d4b\u8bd5",id:"\u8bbf\u95ee\u6d4b\u8bd5",children:[{value:"\u8bbf\u95ee Apache APISIX",id:"\u8bbf\u95ee-apache-apisix",children:[],level:4},{value:"\u8bbf\u95ee\u6210\u529f",id:"\u8bbf\u95ee\u6210\u529f",children:[],level:4},{value:"\u767b\u51fa\u8d26\u53f7",id:"\u767b\u51fa\u8d26\u53f7",children:[],level:4}],level:3}],level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[],level:2}],s={toc:c};function k(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u901a\u8fc7\u8be6\u7ec6\u7684\u6b65\u9aa4\u4e3a\u5927\u5bb6\u5c55\u793a\u4e86\u5982\u4f55\u5728 Apache APISIX \u4f7f\u7528 OpenID-Connect \u534f\u8bae\u548c Keycloak \u8fdb\u884c\u8eab\u4efd\u8ba4\u8bc1\u3002\u901a\u8fc7\u5bf9\u63a5 Keycloak\uff0cApache APISIX \u4ec5\u9700\u901a\u8fc7\u914d\u7f6e\u5373\u53ef\u5b9e\u73b0\u5bf9\u4f7f\u7528\u8005\u548c\u5e94\u7528\u670d\u52a1\u8fdb\u884c\u8ba4\u8bc1\u4e0e\u9274\u6743\uff0c\u4ece\u800c\u5927\u5927\u51cf\u5c11\u4e86\u76f8\u5173\u5f00\u53d1\u5de5\u4f5c\u3002")),(0,l.kt)("head",null,(0,l.kt)("link",{rel:"canonical",href:"https://www.keycloak.org/2021/12/apisix"})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639129658486-393e8a3a-ccf2-496d-9b46-4db741bd6e55.png",alt:"Keycloak-APISIX \u96c6\u6210"})),(0,l.kt)("h2",{id:"\u4ec0\u4e48\u662f-keycloak"},"\u4ec0\u4e48\u662f Keycloak"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.keycloak.org/"},"Keycloak")," \u662f\u4e00\u4e2a\u9488\u5bf9\u73b0\u4ee3\u5e94\u7528\u7a0b\u5e8f\u548c\u670d\u52a1\u7684\u5f00\u6e90\u8eab\u4efd\u548c\u8bbf\u95ee\u7ba1\u7406\u89e3\u51b3\u65b9\u6848\u3002Keycloak \u652f\u6301\u5355\u70b9\u767b\u5f55\uff08Single-Sign On\uff09\uff0c\u56e0\u6b64\u670d\u52a1\u53ef\u4ee5\u901a\u8fc7 OpenID Connect\u3001OAuth 2.0 \u7b49\u534f\u8bae\u5bf9\u63a5 Keycloak\u3002\u540c\u65f6 Keycloak \u4e5f\u652f\u6301\u96c6\u6210\u4e0d\u540c\u7684\u8eab\u4efd\u8ba4\u8bc1\u670d\u52a1\uff0c\u4f8b\u5982 Github\u3001Google \u548c Facebook \u7b49\u3002"),(0,l.kt)("p",null,"\u53e6\u5916 Keycloak \u4e5f\u652f\u6301\u7528\u6237\u8054\u90a6\u529f\u80fd\uff0c\u53ef\u4ee5\u901a\u8fc7 LDAP \u6216 Kerberos \u6765\u5bfc\u5165\u7528\u6237\u3002\u66f4\u591a Keycloak \u5185\u5bb9\u53ef\u4ee5\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"https://www.keycloak.org/documentation"},"\u5b98\u65b9\u6587\u6863\u4ecb\u7ecd"),"\u3002"),(0,l.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"),(0,l.kt)("h3",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,l.kt)("p",null,"\u5728\u8fdb\u884c\u5982\u4e0b\u6b65\u9aa4\u524d\uff0c\u8bf7\u786e\u4fdd\u73af\u5883\u4e2d\u5df2\u542f\u52a8 Apache APISIX\u3002"),(0,l.kt)("h4",{id:"\u542f\u52a8-keycloak"},"\u542f\u52a8 Keycloak"),(0,l.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"docker-compose")," \u5c06 Keycloak \u4e0e\u5176\u6240\u4f9d\u8d56\u7684\u7684 PostgreSQL \u4e00\u5e76\u542f\u52a8\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3.7'\n\nservices:\n  postgres:\n      image: postgres:12.2\n      container_name: postgres\n      environment:\n        POSTGRES_DB: keycloak\n        POSTGRES_USER: keycloak\n        POSTGRES_PASSWORD: password\n\n  keycloak:\n      image: jboss/keycloak:9.0.2\n      container_name: keycloak\n      environment:\n        DB_VENDOR: POSTGRES\n        DB_ADDR: postgres\n        DB_DATABASE: keycloak\n        DB_USER: keycloak\n        DB_PASSWORD: password\n        KEYCLOAK_USER: admin\n        KEYCLOAK_PASSWORD: password\n        PROXY_ADDRESS_FORWARDING: \"true\"\n      ports:\n        - 8080:8080\n      depends_on:\n        - postgres\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose up\n")),(0,l.kt)("p",null,"\u6267\u884c\u5b8c\u6bd5\u540e\u9700\u8981\u786e\u8ba4 Keycloak \u548c PostgreSQL \u662f\u5426\u5df2\u6210\u529f\u542f\u52a8\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose ps\n")),(0,l.kt)("h4",{id:"\u914d\u7f6e-keycloak"},"\u914d\u7f6e Keycloak"),(0,l.kt)("p",null,'Keycloak \u542f\u52a8\u5b8c\u6210\u4e4b\u540e\uff0c\u4f7f\u7528\u6d4f\u89c8\u5668\u8bbf\u95ee "',(0,l.kt)("a",{parentName:"p",href:"http://127.0.0.1:8080/auth/admin/%22%EF%BC%8C%E5%B9%B6%E9%94%AE%E5%85%A5"},'http://127.0.0.1:8080/auth/admin/"\uff0c\u5e76\u952e\u5165')," ",(0,l.kt)("inlineCode",{parentName:"p"},"admin/password")," \u8d26\u53f7\u5bc6\u7801\u8fdb\u884c\u767b\u5f55\u7ba1\u7406\u5458\u63a7\u5236\u53f0\u3002"),(0,l.kt)("h5",{id:"\u521b\u5efa-realm"},"\u521b\u5efa realm"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u521b\u5efa\u4e00\u4e2a\u540d\u79f0\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"apisix_test_realm"),"\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"realm"),"\u3002\u5728 Keycloak \u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"realm")," \u662f\u4e00\u4e2a\u4e13\u95e8\u7528\u6765\u7ba1\u7406\u9879\u76ee\u7684\u5de5\u4f5c\u533a\uff0c\u4e0d\u540c ",(0,l.kt)("inlineCode",{parentName:"p"},"realm"),"\u4e4b\u95f4\u7684\u8d44\u6e90\u662f\u76f8\u4e92\u9694\u79bb\u7684\u3002"),(0,l.kt)("p",null,"Keycloak \u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"realm")," \u5206\u4e3a\u4e24\u7c7b\uff1a\u4e00\u7c7b\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"master realm"),"\uff0c\u7531 Keycloak \u521a\u542f\u52a8\u65f6\u521b\u5efa\uff0c\u7528\u4e8e\u7ba1\u7406 admin \u8d26\u53f7\u4ee5\u53ca\u521b\u5efa\u5176\u4ed6\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"realm"),"\u3002\u7b2c\u4e8c\u7c7b\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"other realm"),"\uff0c\u7531 ",(0,l.kt)("inlineCode",{parentName:"p"},"master realm")," \u4e2d\u7684 admin \u521b\u5efa\uff0c\u53ef\u4ee5\u5728\u8be5 ",(0,l.kt)("inlineCode",{parentName:"p"},"realm")," \u4e2d\u8fdb\u884c\u7528\u6237\u548c\u5e94\u7528\u7684\u521b\u5efa\u5e76\u8fdb\u884c\u7ba1\u7406\u548c\u4f7f\u7528\u3002\u66f4\u591a\u7ec6\u8282\u53ef\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/getting_started/index.html#realms-and-users"},"Keycloak \u4e2d realm \u548c users")," \u76f8\u5173\u5185\u5bb9\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639101202459-72803240-b358-4c69-a9ca-4b6751a8547d.png",alt:"\u521b\u5efa realm"})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639101243617-0498379f-392e-4837-8f37-eee558c21e3d.png",alt:"\u7f16\u8f91 realm \u540d\u79f0"})),(0,l.kt)("h5",{id:"\u521b\u5efa-client"},"\u521b\u5efa Client"),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\u9700\u8981\u521b\u5efa ",(0,l.kt)("inlineCode",{parentName:"p"},"OpenID Connect Client"),"\u3002\u5728 Keycloak \u4e2d\uff0cClient \u8868\u793a\u5141\u8bb8\u5411 Keycloak \u53d1\u8d77\u8eab\u4efd\u8ba4\u8bc1\u7684\u5ba2\u6237\u7aef\u3002"),(0,l.kt)("p",null,"\u5728\u672c\u793a\u4f8b\u573a\u666f\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Apache APISIX")," \u76f8\u5f53\u4e8e\u4e00\u4e2a\u5ba2\u6237\u7aef\uff0c\u8d1f\u8d23\u5411 Keycloak \u53d1\u8d77\u8eab\u4efd\u8ba4\u8bc1\u8bf7\u6c42\uff0c\u56e0\u6b64\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u540d\u79f0\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"apisix")," \u7684 Client\u3002\u5173\u4e8e Client \u66f4\u591a\u7ec6\u8282\u53ef\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_admin/#_oidc_clients"},"Keycloak OIDC Clients"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639101288379-9a46b92a-294e-4b40-ac7e-408284a3d0ad.png",alt:"\u521b\u5efa OpenID Client"})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639101327347-c8ab463a-1cb0-4eb0-a26f-17d7c0c54846.png",alt:"\u521b\u5efa Client \u540d\u79f0"})),(0,l.kt)("h5",{id:"\u914d\u7f6e-client"},"\u914d\u7f6e Client"),(0,l.kt)("p",null,"Client \u521b\u5efa\u5b8c\u6210\u540e\uff0c\u9700\u8981\u4e3a Client \u914d\u7f6e Apache APISIX \u7684\u8bbf\u95ee\u7c7b\u578b\u3002"),(0,l.kt)("p",null," \u5728 Keycloak \u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"Access Type")," \u5206\u4e3a\u4e09\u7c7b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"confidential"),"\u3002\u9002\u7528\u4e8e\u9700\u8981\u6267\u884c\u6d4f\u89c8\u5668\u767b\u5f55\u7684\u5e94\u7528\uff0c\u5ba2\u6237\u7aef\u4f1a\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"li"},"client secret")," \u6765\u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"li"},"access token")," , \u591a\u8fd0\u7528\u4e8e\u670d\u52a1\u7aef\u6e32\u67d3\u7684 web \u7cfb\u7edf\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"public"),"\u3002\u9002\u7528\u4e8e\u9700\u8981\u6267\u884c\u6d4f\u89c8\u5668\u767b\u5f55\u7684\u5e94\u7528\uff0c\u591a\u8fd0\u7528\u4e8e\u4f7f\u7528 vue \u548c react \u5b9e\u73b0\u7684\u524d\u7aef\u9879\u76ee\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"bearer-only"),"\u3002\u9002\u7528\u4e8e\u4e0d\u9700\u8981\u6267\u884c\u6d4f\u89c8\u5668\u767b\u5f55\u7684\u5e94\u7528\uff0c\u53ea\u5141\u8bb8\u643a\u5e26 ",(0,l.kt)("inlineCode",{parentName:"li"},"bearer token")," \u8bbf\u95ee\uff0c\u591a\u8fd0\u7528\u4e8e RESTful API \u7684\u4f7f\u7528\u573a\u666f\u3002")),(0,l.kt)("p",null,"\u66f4\u591a\u5173\u4e8e Client \u8bbe\u7f6e\u7ec6\u8282\u53ef\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_admin/#advanced-settings"},"Keycloak OIDC Clients \u9ad8\u7ea7\u8bbe\u7f6e"),"\u3002"),(0,l.kt)("p",null,"\u56e0\u4e3a\u6211\u4eec\u4f7f\u7528\u4e86 Apache APISIX \u4f5c\u4e3a\u670d\u52a1\u7aef\u7684 Client\uff0c \u56e0\u6b64\u53ef\u4ee5\u9009\u62e9\u7c7b\u578b\u4e00\u6216\u7c7b\u578b\u4e09\uff08\u8fd9\u91cc\u4ee5\u7c7b\u578b\u4e00\u4e3a\u4f8b\u8fdb\u884c\u6f14\u793a\uff09\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639101355171-e368730b-2a72-4c4d-9397-cf4a1c8f2806.png",alt:"\u914d\u7f6e Client \u7c7b\u578b"})),(0,l.kt)("h5",{id:"\u521b\u5efa-user"},"\u521b\u5efa User"),(0,l.kt)("p",null,"Keycloak \u652f\u6301\u5bf9\u63a5\u5176\u4ed6\u7b2c\u4e09\u65b9\u7684\u7528\u6237\u7cfb\u7edf\uff0c\u4f8b\u5982 Google \u548c Facebook\u3002\u6216\u8005\u4f7f\u7528 LDAP \u7684\u65b9\u5f0f\u8fdb\u884c\u5bfc\u5165\u6216\u624b\u52a8\u521b\u5efa\u7528\u6237\uff0c\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528\u300c\u624b\u52a8\u521b\u5efa\u7528\u6237\u300d\u6765\u8fdb\u884c\u6f14\u793a\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639101385277-b2f578c0-e68a-4945-83ac-7a77145bb056.png",alt:"\u521b\u5efa\u7528\u6237"})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639101406281-724bbb50-96fc-4aa8-aec1-9414f83c199d.png",alt:"\u6dfb\u52a0\u7528\u6237\u76f8\u5173\u4fe1\u606f"})),(0,l.kt)("p",null,"\u5728 Credentials \u9875\u9762\u8bbe\u7f6e\u7528\u6237\u7684\u5bc6\u7801\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639101430209-d289459a-5014-4a2d-864f-7917b84b1c0c.png",alt:"\u8bbe\u7f6e\u7528\u6237\u5bc6\u7801"})),(0,l.kt)("h4",{id:"\u521b\u5efa\u8def\u7531"},"\u521b\u5efa\u8def\u7531"),(0,l.kt)("p",null,"Keycloak \u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u9700\u8981\u5728 Apache APISIX \u4e2d\u521b\u5efa\u8def\u7531\u5e76\u5f00\u542f ",(0,l.kt)("inlineCode",{parentName:"p"},"Openid-Connect")," \u63d2\u4ef6\uff0c\u5177\u4f53\u5173\u4e8e\u8be5\u63d2\u4ef6\u7684\u914d\u7f6e\u6587\u6863\u53ef\u4ee5\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/openid-connect"},"Apache APISIX OpenID-Connect \u63d2\u4ef6"),"\u3002"),(0,l.kt)("h4",{id:"\u83b7\u53d6-client_id-\u548c-client_secret"},"\u83b7\u53d6 client_id \u548c client_secret"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639101454807-ff8c8b77-bdac-4ac6-966e-a2f5e2418b7a.png",alt:"\u83b7\u53d6 Client \u76f8\u5173\u4fe1\u606f"})),(0,l.kt)("p",null,"\u4e0a\u56fe\u914d\u7f6e\u4e2d\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"client_id")," \u4e3a\u4e4b\u524d\u521b\u5efa Client \u65f6\u4f7f\u7528\u7684\u540d\u79f0\uff0c\u5373 ",(0,l.kt)("inlineCode",{parentName:"li"},"apisix"),"\uff1b"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"client_secret")," \u5219\u9700\u8981\u8fdb\u5165 Clients-apisix-Credentials \u4e2d\u83b7\u53d6\uff0c\u4f8b\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"d5c42c50-3e71-4bbe-aa9e-31083ab29da4"),"\u3002")),(0,l.kt)("h4",{id:"\u83b7\u53d6-discovery-\u914d\u7f6e\u9879"},"\u83b7\u53d6 discovery \u914d\u7f6e\u9879"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639101585273-7eb31728-fe4c-4af3-84d1-76c1a97e7e35.png",alt:"\u83b7\u53d6\u914d\u7f6e"})),(0,l.kt)("p",null,"\u8fdb\u5165 Realm Settings-General-Endpoints \u4e2d\uff0c\u9009\u62e9 ",(0,l.kt)("inlineCode",{parentName:"p"},"OpenID Endpoint Configuration")," \u94fe\u63a5\uff0c\u590d\u5236\u8be5\u94fe\u63a5\u6307\u5411\u7684\u5730\u5740\u3002\u4f8b\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8080/auth/realms/apisix_test_realm/.well-known/openid-configuration"),"\u3002"),(0,l.kt)("h5",{id:"\u521b\u5efa\u8def\u7531\u5e76\u5f00\u542f\u63d2\u4ef6"},"\u521b\u5efa\u8def\u7531\u5e76\u5f00\u542f\u63d2\u4ef6"),(0,l.kt)("p",null,"\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u8bbf\u95ee Apache APISIX Admin \u63a5\u53e3\u6765\u521b\u5efa\u4e00\u6761\u8def\u7531\uff0c\u8bbe\u7f6e\u4e0a\u6e38\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"httpbin.org"),"\uff0c\u5e76\u5f00\u542f\u63d2\u4ef6 OpenID Connect \u7528\u4e8e\u8eab\u4efd\u8ba4\u8bc1\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5982\u679c\u521b\u5efa Client \u65f6\uff0c\u9009\u62e9 ",(0,l.kt)("inlineCode",{parentName:"p"},"bearer-only")," \u4f5c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"Access Type"),"\uff0c\u5728\u914d\u7f6e\u8def\u7531\u662f\u9700\u8981\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"bearer_only")," \u8bbe\u7f6e\u4e3a true\uff0c\u6b64\u65f6\u8bbf\u95ee Apache APISIX \u5c06\u4e0d\u4f1a\u8df3\u8f6c\u5230 Keycloak \u767b\u5f55\u754c\u9762\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl  -XPOST 127.0.0.1:9080/apisix/admin/routes -H "X-Api-Key: edd1c9f034335f136f87ad84b625c8f1" -d \'{\n    "uri":"/*",\n    "plugins":{\n        "openid-connect":{\n            "client_id":"apisix",\n            "client_secret":"d5c42c50-3e71-4bbe-aa9e-31083ab29da4",\n            "discovery":"http://127.0.0.1:8080/auth/realms/apisix_test_realm/.well-known/openid-configuration",\n            "scope":"openid profile",\n            "bearer_only":false,\n            "realm":"apisix_test_realm",\n            "introspection_endpoint_auth_method":"client_secret_post",\n            "redirect_uri":"http://127.0.0.1:9080/"\n        }\n    },\n    "upstream":{\n        "type":"roundrobin",\n        "nodes":{\n            "httpbin.org:80":1\n        }\n    }\n}\'\n')),(0,l.kt)("h3",{id:"\u8bbf\u95ee\u6d4b\u8bd5"},"\u8bbf\u95ee\u6d4b\u8bd5"),(0,l.kt)("p",null,"\u4e0a\u8ff0\u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5728 Apache APISIX \u4e2d\u8fdb\u884c\u76f8\u5173\u7684\u6d4b\u8bd5\u8bbf\u95ee\u4e86\u3002"),(0,l.kt)("h4",{id:"\u8bbf\u95ee-apache-apisix"},"\u8bbf\u95ee Apache APISIX"),(0,l.kt)("p",null,"\u4f7f\u7528\u6d4f\u89c8\u5668\u8bbf\u95ee ",(0,l.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:9080/image/png"),"\u3002"),(0,l.kt)("p",null,"\u7531\u4e8e\u5f00\u542f\u4e86 OpenID-Connect \u63d2\u4ef6\uff0c\u5e76\u4e14\u8bbe\u7f6e\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"bearer-only")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," \u3002\u56e0\u6b64\u7b2c\u4e00\u6b21\u8bbf\u95ee\u8be5\u8def\u5f84\u65f6\uff0c Apache APISIX \u5c06\u91cd\u5b9a\u5411\u5230 Keycloak \u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"apisix_test_realm")," \u4e2d\u914d\u7f6e\u7684\u767b\u5f55\u754c\u9762\uff0c\u8fdb\u884c\u7528\u6237\u767b\u5f55\u8bf7\u6c42\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639101623370-cc668e0f-0c2c-469c-9a3e-3118c271d63f.png",alt:"\u767b\u5f55\u9875\u9762"})),(0,l.kt)("p",null,"\u8f93\u5165\u4e4b\u524d\u914d\u7f6e Keycloak \u65f6\u521b\u5efa\u7684 User peter\uff0c\u5373\u53ef\u5b8c\u6210\u7528\u6237\u767b\u5f55\u3002"),(0,l.kt)("h4",{id:"\u8bbf\u95ee\u6210\u529f"},"\u8bbf\u95ee\u6210\u529f"),(0,l.kt)("p",null,'\u767b\u5f55\u6210\u529f\u540e\uff0c\u6d4f\u89c8\u5668\u53c8\u4f1a\u5c06\u94fe\u63a5\u91cd\u5b9a\u5411\u5230 "',(0,l.kt)("a",{parentName:"p",href:"http://127.0.0.1:9080/image/png"},"http://127.0.0.1:9080/image/png"),'"\u3002\u5e76\u6210\u529f\u8bbf\u95ee\u5230\u8be5\u56fe\u7247\u5185\u5bb9\uff0c\u8be5\u5185\u5bb9\u4e0e\u4e0a\u6e38 "',(0,l.kt)("a",{parentName:"p",href:"http://httpbin.org/image/png"},"http://httpbin.org/image/png"),'" \u4e00\u81f4\u3002'),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639101644015-6d541202-dfff-4de3-ad47-f49dd65911a6.png",alt:"\u8bbf\u95ee\u6210\u529f"})),(0,l.kt)("h4",{id:"\u767b\u51fa\u8d26\u53f7"},"\u767b\u51fa\u8d26\u53f7"),(0,l.kt)("p",null,'\u6d4b\u8bd5\u5b8c\u6bd5\u540e\uff0c\u4f7f\u7528\u6d4f\u89c8\u5668\u8bbf\u95ee "http:/127.0.0.1:9080/logout" \u8fdb\u884c\u8d26\u53f7\u767b\u51fa\u3002'),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u767b\u51fa\u8def\u5f84\u53ef\u901a\u8fc7 OpenID-Connect \u63d2\u4ef6\u914d\u7f6e\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"logout_path")," \u6307\u5b9a\uff0c\u9ed8\u8ba4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"logout"),"\u3002")),(0,l.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,l.kt)("p",null,"\u672c\u6587\u901a\u8fc7\u8be6\u7ec6\u7684\u6b65\u9aa4\u4e3a\u5927\u5bb6\u5c55\u793a\u4e86\u5982\u4f55\u5728 Apache APISIX \u4f7f\u7528 OpenID-Connect \u534f\u8bae\u548c Keycloak \u8fdb\u884c\u8eab\u4efd\u8ba4\u8bc1\u3002\u901a\u8fc7\u5bf9\u63a5 Keycloak\uff0cApache APISIX \u4ec5\u9700\u901a\u8fc7\u914d\u7f6e\u5373\u53ef\u5b9e\u73b0\u5bf9\u4f7f\u7528\u8005\u548c\u5e94\u7528\u670d\u52a1\u8fdb\u884c\u8ba4\u8bc1\u4e0e\u9274\u6743\uff0c\u4ece\u800c\u5927\u5927\u51cf\u5c11\u4e86\u76f8\u5173\u5f00\u53d1\u5de5\u4f5c\u3002"),(0,l.kt)("p",null,"\u66f4\u591a\u5173\u4e8e Apache APISIX \u4e2d\u7684\u8eab\u4efd\u8ba4\u8bc1\u529f\u80fd\u5b9e\u73b0\u4e5f\u53ef\u53c2\u8003\u6587\u7ae0",(0,l.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2021/08/16/Using-the-Apache-APISIX-OpenID-Connect-Plugin-for-Centralized-Authentication"},"\u300a\u4f7f\u7528 Apache APISIX \u548c Okta \u6765\u5b9e\u73b0\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1\u300b"),"\u3002"))}k.isMDXComponent=!0}}]);