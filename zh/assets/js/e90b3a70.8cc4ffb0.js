"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9725],{35318:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>g});var t=a(27378);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=t.createContext({}),s=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=s(e.components);return t.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(a),g=r,u=m["".concat(i,".").concat(g)]||m[g]||d[g]||l;return a?t.createElement(u,o(o({ref:n},c),{},{components:a})):t.createElement(u,o({ref:n},c))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<l;s++)o[s]=a[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9682:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var t=a(25773),r=(a(27378),a(35318));const l={title:"APISIX Ingress + Flagger \u5b9e\u73b0\u987a\u6ed1\u7684\u91d1\u4e1d\u96c0\u53d1\u5e03",author:"\u8c2d\u6052\u4eae",authorURL:"https://github.com/Gallardot",authorImageURL:"https://github.com/Gallardot.png",keywords:["Apache APISIX","Ingress","Ingress controller","\u91d1\u4e1d\u96c0","Flagger"],description:"\u901a\u8fc7 Apache APISIX \u548c Flagger \u7684\u6574\u5408\uff0c\u5b9e\u73b0\u4e86\u975e\u5e38\u987a\u6ed1\u7684\u91d1\u4e1d\u96c0\u53d1\u5e03\u3002",tags:["Ecosystem"]},o=void 0,p={permalink:"/zh/blog/2022/12/27/apisix-ingress-with-Flagger",source:"@site/blog/2022/12/27/apisix-ingress-with-Flagger.md",title:"APISIX Ingress + Flagger \u5b9e\u73b0\u987a\u6ed1\u7684\u91d1\u4e1d\u96c0\u53d1\u5e03",description:"\u901a\u8fc7 Apache APISIX \u548c Flagger \u7684\u6574\u5408\uff0c\u5b9e\u73b0\u4e86\u975e\u5e38\u987a\u6ed1\u7684\u91d1\u4e1d\u96c0\u53d1\u5e03\u3002",date:"2022-12-27T00:00:00.000Z",formattedDate:"2022\u5e7412\u670827\u65e5",tags:[{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"}],readingTime:14.9,truncated:!0,authors:[{name:"\u8c2d\u6052\u4eae",url:"https://github.com/Gallardot",imageURL:"https://github.com/Gallardot.png"}],prevItem:{title:"Apache APISIX 3.1.0 \u6b63\u5f0f\u53d1\u5e03",permalink:"/zh/blog/2022/12/30/release-apache-apisix-3.1.0"},nextItem:{title:"APISIX Ingress \u5bf9 Gateway API \u7684\u652f\u6301\u548c\u5e94\u7528",permalink:"/zh/blog/2022/12/27/apisix-ingress-with-gatewayapi"}},i={authorsImageUrls:[void 0]},s=[{value:"\u9879\u76ee\u4ecb\u7ecd",id:"\u9879\u76ee\u4ecb\u7ecd",children:[{value:"Apache APISIX Ingress",id:"apache-apisix-ingress",children:[],level:3},{value:"Flagger",id:"flagger",children:[],level:3}],level:2},{value:"\u91d1\u4e1d\u96c0\u53d1\u5e03\u51c6\u5907\u73af\u8282",id:"\u91d1\u4e1d\u96c0\u53d1\u5e03\u51c6\u5907\u73af\u8282",children:[{value:"\u73af\u5883\u4e0e\u7ec4\u4ef6\u51c6\u5907",id:"\u73af\u5883\u4e0e\u7ec4\u4ef6\u51c6\u5907",children:[],level:3},{value:"\u521d\u59cb\u5316\u5e94\u7528",id:"\u521d\u59cb\u5316\u5e94\u7528",children:[],level:3}],level:2},{value:"\u5177\u4f53\u529f\u80fd\u5b9e\u8df5",id:"\u5177\u4f53\u529f\u80fd\u5b9e\u8df5",children:[{value:"\u81ea\u52a8\u91d1\u4e1d\u96c0\u53d1\u5e03",id:"\u81ea\u52a8\u91d1\u4e1d\u96c0\u53d1\u5e03",children:[],level:3},{value:"\u81ea\u52a8\u56de\u6eda",id:"\u81ea\u52a8\u56de\u6eda",children:[],level:3},{value:"\u81ea\u5b9a\u4e49\u6307\u6807\u91d1\u4e1d\u96c0\u5206\u6790",id:"\u81ea\u5b9a\u4e49\u6307\u6807\u91d1\u4e1d\u96c0\u5206\u6790",children:[],level:3}],level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[],level:2}],c={toc:s};function d(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7 Apache APISIX \u548c Flagger \u7684\u6574\u5408\uff0c\u5b9e\u73b0\u4e86\u975e\u5e38\u987a\u6ed1\u7684\u91d1\u4e1d\u96c0\u53d1\u5e03\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4f5c\u8005\uff1a\u8c2d\u6052\u4eae\uff0cGithub ID: Gallardot\u3002\u5f00\u6e90\u9879\u76ee\u7231\u597d\u8005\uff0cCNCF Chaos Mesh \u9879\u76ee Maintainer\uff0cCNCF KubeVela\u3001Apache APISIX\u3001CNCF Flagger\u3001CNCF Argo Rollouts \u7b49\u9879\u76ee Contributor\u3002\u76ee\u524d\u5728\u5c0f\u9e4f\u6c7d\u8f66\u4efb\u804c\u57fa\u7840\u67b6\u6784\u7814\u53d1\u4e13\u5bb6\u3002")),(0,r.kt)("p",null,"\u5728\u65e5\u5e38\u7684\u9879\u76ee\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u65f6\uff0c\u6211\u4eec\u65f6\u5e38\u4f1a\u9762\u4e34\u670d\u52a1\u53d8\u66f4\u7684\u6311\u6218\uff0c\u4e3a\u4e86\u4e0d\u5f71\u54cd\u7528\u6237\u4f53\u9a8c\uff0c\u6211\u4eec\u5f80\u5f80\u5c3d\u53ef\u80fd\u9700\u8981\u89c4\u907f\u670d\u52a1\u4e0d\u53ef\u7528\u7684\u98ce\u9669\u3002\u56e0\u6b64\uff0c\u6301\u7eed\u4ea4\u4ed8\u4fbf\u5e94\u8fd0\u800c\u751f\uff0c\u5176\u88ab\u63a5\u53d7\u4e3a\u4e00\u79cd\u4f01\u4e1a\u8f6f\u4ef6\u5b9e\u8df5\uff0c\u5e76\u4e14\u662f\u5b8c\u5584\u7684\u6301\u7eed\u96c6\u6210\u539f\u5219\u7684\u81ea\u7136\u6f14\u53d8\u3002"),(0,r.kt)("p",null,"\u7136\u800c\uff0c\u6301\u7eed\u90e8\u7f72\u4ecd\u7136\u975e\u5e38\u7f55\u89c1\uff0c\u8fd9\u53ef\u80fd\u662f\u7531\u4e8e\u7ba1\u7406\u7684\u590d\u6742\u6027\u4ee5\u53ca\u62c5\u5fc3\u90e8\u7f72\u5931\u8d25\u4f1a\u5f71\u54cd\u7cfb\u7edf\u53ef\u7528\u6027\u3002\u5728\u6574\u4e2a\u6301\u7eed\u4ea4\u4ed8\u4f53\u7cfb\u4e2d\uff0c\u91d1\u4e1d\u96c0\u53d1\u5e03\u6216\u8bb8\u662f\u6700\u4e3a\u7ecf\u5178\u7684\u4e00\u4e2a\u573a\u666f\u3002\u57fa\u4e8e\u6b64\uff0c\u6211\u4eec\u80fd\u591f\u5f88\u5feb\u53d1\u73b0\u201c\u4e0d\u5065\u5eb7\u201d\u548c\u201c\u6709\u95ee\u9898\u201d\u7684\u670d\u52a1\uff0c\u5e76\u4e14\u53ef\u4ee5\u6beb\u4e0d\u8d39\u529b\u5730\u56de\u6eda\u5230\u4e0a\u4e00\u4e2a\u7248\u672c\u3002"),(0,r.kt)("p",null,"\u91d1\u4e1d\u96c0\u53d1\u5e03\u4e5f\u79f0\u201c\u7070\u5ea6\u53d1\u5e03\u201d\u3002\u901a\u5e38\u6765\u8bb2\uff0c\u5728\u539f\u6709\u7248\u672c\u53ef\u7528\u7684\u60c5\u51b5\u4e0b\uff0c\u540c\u65f6\u53d1\u5e03\u90e8\u7f72\u4e00\u4e2a\u65b0\u7248\u672c\u5e94\u7528\u4f5c\u4e3a\u201c\u91d1\u4e1d\u96c0\u201d\uff0c\u5176\u76ee\u7684\u662f\u4e3a\u4e86\u6d4b\u8bd5\u65b0\u7248\u672c\u7684\u6027\u80fd\u548c\u8868\u73b0\uff0c\u5728\u4fdd\u969c\u6574\u4f53\u7cfb\u7edf\u7a33\u5b9a\u7684\u524d\u63d0\u4e0b\uff0c\u5c3d\u65e9\u53d1\u73b0\u548c\u53ca\u65f6\u8c03\u6574\u3002"),(0,r.kt)("p",null,"\u91d1\u4e1d\u96c0\u53d1\u5e03\u5e76\u975e\u9ed1\u5373\u767d\u7684\u53d1\u5e03\u65b9\u5f0f\uff0c\u5b83\u80fd\u591f\u7f13\u6162\u5730\u5c06\u7279\u5b9a\u767e\u5206\u6bd4\u7684\u6d41\u91cf\u5f15\u5bfc\u81f3\u4e00\u5c0f\u90e8\u5206\u7528\u6237\u3002\u82e5\u9a8c\u8bc1\u6ca1\u6709\u95ee\u9898\uff0c\u518d\u63a8\u5e7f\u5230\u5168\u90e8\u7528\u6237\uff0c\u5e76\u9010\u6b65\u6dd8\u6c70\u65e7\u7248\u672c\uff0c\u4ee5\u964d\u4f4e\u751f\u4ea7\u73af\u5883\u5f15\u5165\u65b0\u529f\u80fd\u5e26\u6765\u7684\u98ce\u9669\u3002"),(0,r.kt)("p",null,"\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7 Apache APISIX Ingress \u548c Flagger \u5b9e\u73b0\u987a\u6ed1\u7684\u91d1\u4e1d\u96c0\u53d1\u5e03\uff0c\u4ece\u800c\u63d0\u9ad8\u53d1\u5e03\u6548\u7387\uff0c\u964d\u4f4e\u53d1\u5e03\u98ce\u9669\u3002"),(0,r.kt)("h2",{id:"\u9879\u76ee\u4ecb\u7ecd"},"\u9879\u76ee\u4ecb\u7ecd"),(0,r.kt)("h3",{id:"apache-apisix-ingress"},"Apache APISIX Ingress"),(0,r.kt)("p",null,"Apache APISIX Ingress \u4f7f\u7528 Apache APISIX \u4f5c\u4e3a\u6570\u636e\u9762\u4ee3\u7406\u7684 Kubernetes Ingress controller \u5b9e\u73b0\uff0c\u63d0\u4f9b\u4e86\u8d1f\u8f7d\u5747\u8861\u3001\u52a8\u6001\u4e0a\u6e38\u3001\u91d1\u4e1d\u96c0\u53d1\u5e03\u3001\u7cbe\u7ec6\u5316\u8def\u7531\u3001\u9650\u6d41\u9650\u901f\u3001\u670d\u52a1\u964d\u7ea7\u3001\u670d\u52a1\u7194\u65ad\u3001\u8eab\u4efd\u8ba4\u8bc1\u3001\u53ef\u89c2\u6d4b\u6027\u7b49\u6570\u767e\u9879\u529f\u80fd\u3002\u76ee\u524d\u5df2\u88ab\u5305\u62ec Zoom\u3001\u817e\u8baf\u4e91\u3001\u9a7e\u8003\u5b9d\u5178\u3001\u5730\u5e73\u7ebf\u3001\u6b27\u6d32\u54e5\u767d\u5c3c\u53c2\u8003\u7cfb\u7edf\u7b49\u56fd\u5185\u5916\u516c\u53f8\u548c\u7ec4\u7ec7\u91c7\u7528\u3002"),(0,r.kt)("h3",{id:"flagger"},"Flagger"),(0,r.kt)("p",null,"Flagger \u662f\u4e00\u4e2a CNCF \u4e91\u539f\u751f\u8ba1\u7b97\u57fa\u91d1\u4f1a\u9879\u76ee\uff0c\u662f GitOps \u5de5\u5177 Flux \u7cfb\u5217\u7684\u4e00\u90e8\u5206\u3002\u6700\u8fd1 CNCF \u4e91\u539f\u751f\u8ba1\u7b97\u57fa\u91d1\u4f1a\u4e5f\u5ba3\u5e03\u4e86 Flux \u6b63\u5f0f\u6bd5\u4e1a\uff0c\u5f88\u597d\u5730\u8868\u660e\u4e86\u4e91\u539f\u751f\u6280\u672f\u5f53\u524d\u7684\u6210\u529f\u4e0e\u5149\u660e\u524d\u666f\u3002\u4f5c\u4e3a\u4e00\u79cd\u6e10\u8fdb\u5f0f\u4ea4\u4ed8\u5de5\u5177\uff0cFlagger \u53ef\u81ea\u52a8\u6267\u884c\u5728 Kubernetes \u4e0a\u8fd0\u884c\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u53d1\u5e03\u8fc7\u7a0b\u3002\u5b83\u901a\u8fc7\u5728\u8861\u91cf\u5206\u6790\u6307\u6807\u548c\u8fd0\u884c\u4e00\u81f4\u6027\u6d4b\u8bd5\u7684\u540c\u65f6\u9010\u6e10\u5c06\u6d41\u91cf\u8f6c\u79fb\u5230\u65b0\u7248\u672c\u6765\u964d\u4f4e\u5728\u751f\u4ea7\u4e2d\u5f15\u5165\u65b0\u8f6f\u4ef6\u7248\u672c\u7684\u98ce\u9669\u3002"),(0,r.kt)("p",null,"\u7ecf\u8fc7 Apache APISIX \u548c Flux \u4e24\u4e2a\u793e\u533a\u7684\u5408\u4f5c\u4e0e\u52aa\u529b\uff0cFlagger \u5728\u8fd1\u671f\u4e5f\u53d1\u5e03\u4e86 v1.27.0 \u7248\u672c\uff0c\u652f\u6301\u4f7f\u7528 Apache APISIX Ingress \u548c Flagger \u8fdb\u884c\u81ea\u52a8\u5316\u7684\u91d1\u4e1d\u96c0\u53d1\u5e03\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/12/26/63a9a47945eda.png",alt:"\u91d1\u4e1d\u96c0\u53d1\u5e03\u6d41\u7a0b"})),(0,r.kt)("p",null,"\u4e0b\u6587\u5c06\u901a\u8fc7\u5b9e\u8df5\uff0c\u4e00\u6b65\u6b65\u4e3a\u5927\u5bb6\u5c55\u793a\u4e0b\u8fd9\u4e2a\u987a\u6ed1\u7684\u91d1\u4e1d\u96c0\u53d1\u5e03\u8fc7\u7a0b\u3002"),(0,r.kt)("h2",{id:"\u91d1\u4e1d\u96c0\u53d1\u5e03\u51c6\u5907\u73af\u8282"},"\u91d1\u4e1d\u96c0\u53d1\u5e03\u51c6\u5907\u73af\u8282"),(0,r.kt)("h3",{id:"\u73af\u5883\u4e0e\u7ec4\u4ef6\u51c6\u5907"},"\u73af\u5883\u4e0e\u7ec4\u4ef6\u51c6\u5907"),(0,r.kt)("p",null,"\u9996\u5148\u9700\u8981\u4e00\u4e2a v1.19 \u6216\u66f4\u65b0\u7248\u672c\u7684 Kubernetes \u96c6\u7fa4\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/"},"kind")," \u8fdb\u884c\u5b89\u88c5\u3002"),(0,r.kt)("p",null,"\u7136\u540e\u4f7f\u7528 Helm V3 \u6765\u5b89\u88c5 Apache APISIX \u548c Apache APISIX Ingress Controller\uff0c\u5177\u4f53\u64cd\u4f5c\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'helm repo add apisix https://charts.apiseven.com\nkubectl create ns apisix\n\n\n\nhelm upgrade -i apisix apisix/apisix --version=0.11.3 \\\n--namespace apisix \\\n--set apisix.podAnnotations."prometheus\\.io/scrape"=true \\\n--set apisix.podAnnotations."prometheus\\.io/port"=9091 \\\n--set apisix.podAnnotations."prometheus\\.io/path"=/apisix/prometheus/metrics \\\n--set pluginAttrs.prometheus.export_addr.ip=0.0.0.0 \\\n--set pluginAttrs.prometheus.export_addr.port=9091 \\\n--set pluginAttrs.prometheus.export_uri=/apisix/prometheus/metrics \\\n--set pluginAttrs.prometheus.metric_prefix=apisix_ \\\n--set ingress-controller.enabled=true \\\n--set ingress-controller.config.apisix.serviceNamespace=apisix\n')),(0,r.kt)("p",null,"\u5b8c\u6210\u540e\uff0c\u5728 apisix namespace \u4e2d\u5b89\u88c5 Flagger \u548c Prometheus \u9644\u52a0\u7ec4\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add flagger https://flagger.app\n\n\n\nhelm upgrade -i flagger flagger/flagger \\\n--namespace apisix \\\n--set prometheus.install=true \\\n--set meshProvider=apisix\n")),(0,r.kt)("p",null,"\u6ce8\u610f\uff0c\u5982\u9700\u4f7f\u7528\u81ea\u5efa prometheus \u6216\u8005 prometheus operator\uff0c\u53ef\u4ee5\u81ea\u884c\u641c\u7d22\u76f8\u5173\u6587\u7ae0\u8fdb\u884c\u4fee\u6539\u3002"),(0,r.kt)("h3",{id:"\u521d\u59cb\u5316\u5e94\u7528"},"\u521d\u59cb\u5316\u5e94\u7528"),(0,r.kt)("p",null,"Flagger \u53ef\u4ee5\u4f5c\u7528\u4e8e Kubernetes \u7684 deployment \u4ee5\u53ca\u5176\u4ed6\u7684 workload\uff0c\u4e5f\u53ef\u4ee5\u548c HPA \u7ed3\u5408\u5728\u4e00\u8d77\u5de5\u4f5c\u3002\u5b83\u5c06\u4f1a\u521b\u5efa\u4e00\u7cfb\u5217\u7684\u5bf9\u8c61\uff08\u6bd4\u5982 Kubernetes deployments\u3001ClusterIP services \u548c ApisixRoute\uff09\u3002\u8fd9\u4e9b\u5bf9\u8c61\u53ef\u4ee5\u5c06\u5e94\u7528\u66b4\u9732\u5230\u96c6\u7fa4\u5916\u63d0\u4f9b\u670d\u52a1\uff0c\u5e76\u7528\u4e8e\u91d1\u4e1d\u96c0\u53d1\u5e03\u8fc7\u7a0b\u7684\u5206\u6790\u548c\u53d1\u5e03\u3002"),(0,r.kt)("p",null,"\u9996\u5148\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl create ns test")," \u547d\u4ee4\u6765\u65b0\u5efa\u4e00\u4e2a namespace\uff0c\u8fd9\u91cc\u6211\u4eec\u5c06\u5176\u547d\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"test"),"\u3002\u7136\u540e\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl apply -k https://github.com/fluxcd/flagger//kustomize/podinfo?ref=main")," \u547d\u4ee4\uff0c\u65b0\u5efa\u4e00\u4e2a deployment \u548c HPA\uff0c\u8fd9\u91cc\u4f7f\u7528 Flagger \u5b98\u65b9\u793a\u4f8b\u7a0b\u5e8f\u3002"),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u53ef\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"helm upgrade -i flagger-loadtester flagger/loadtester \\")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--namespace=test")," \u6307\u4ee4\u6765\u90e8\u7f72 Flagger \u7684\u8d1f\u8f7d\u6d4b\u8bd5\u670d\u52a1\uff0c\u7528\u4e8e\u5728\u91d1\u4e1d\u96c0\u53d1\u5e03\u671f\u95f4\u4ea7\u751f\u6d41\u91cf\u65f6\uff0c\u65b9\u4fbf\u5bf9\u5176\u8fdb\u884c\u5206\u6790\u3002"),(0,r.kt)("p",null,"\u6b64\u65f6\uff0c\u521b\u5efa Apache APISIX \u7684",(0,r.kt)("inlineCode",{parentName:"p"},"ApisixRoute"),"\uff0cFlagger \u5c06\u4f1a\u5f15\u7528\u8be5\u8d44\u6e90\uff0c\u5e76\u4e14\u751f\u6210\u91d1\u4e1d\u96c0\u7248\u672c\u7684 Apache APISIX Ingress \u7684",(0,r.kt)("inlineCode",{parentName:"p"},"ApisixRoute"),"\uff0c\u5177\u4f53\u53ef\u53c2\u8003\u4e0b\u65b9\u793a\u4f8b\uff08\u793a\u4f8b\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"app.example.com"),"\u53ef\u4ee5\u66ff\u6362\u6210\u4f60\u7684\u5b9e\u9645\u57df\u540d\uff09\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v2\nkind: ApisixRoute\nmetadata:\n  name: podinfo\n  namespace: test\nspec:\n  http:\n    - backends:\n        - serviceName: podinfo\n          servicePort: 80\n      match:\n        hosts:\n          - app.example.com\n        methods:\n          - GET\n        paths:\n          - /*\n      name: method\n      plugins:\n        - name: prometheus\n          enable: true\n          config:\n            disable: false\n            prefer_name: true\n")),(0,r.kt)("p",null,"\u5c06\u4e0a\u65b9\u4ee3\u7801\u4fdd\u5b58\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"podinfo-apisixroute.yaml")," \u6587\u4ef6\u5e76\u4e14\u63d0\u4ea4\u5230\u96c6\u7fa4\u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f ./podinfo-apisixroute.yaml\n")),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u53ef\u4ee5\u521b\u5efa Flagger \u7684\u81ea\u5b9a\u4e49\u8d44\u6e90 Canary\uff0c\u5982\u4e0b\u6240\u793a\uff08\u793a\u4f8b\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"app.example.com")," \u53ef\u4ee5\u66ff\u6362\u6210\u4f60\u7684\u5b9e\u9645\u57df\u540d\uff09\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: flagger.app/v1beta1\nkind: Canary\nmetadata:\n  name: podinfo\n  namespace: test\nspec:\n  provider: apisix\n  targetRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: podinfo\n  # \u5f15\u7528 apisix route\n  routeRef:\n    apiVersion: apisix.apache.org/v2\n    kind: ApisixRoute\n    name: podinfo\n  progressDeadlineSeconds: 60\n  service:\n    port: 80\n    targetPort: 9898\n  analysis:\n    # \u8c03\u5ea6\u95f4\u9694 (\u9ed8\u8ba4 60s)\n    interval: 10s\n    # \u6700\u5927\u7684metric\u68c0\u6d4b\u5931\u8d25\u6b21\u6570\uff0c\u8d85\u8fc7\u5c06\u4f1a\u81ea\u52a8\u56de\u6eda\n    threshold: 10\n    # \u6d41\u91cf\u8def\u7531\u5230canary\u5e94\u7528\u7684\u6700\u5927\u767e\u5206\u6bd4\n    # (0-100)\n    maxWeight: 50\n    # \u91d1\u4e1d\u96c0\u5206\u6790\u6e10\u8fdb\u7684\u6b65\u957f\n    # (0-100)\n    stepWeight: 10\n    # \u901a\u8fc7Prometheus\u68c0\u67e5APISIX\u4e0a\u7684\u6d41\u91cf\u72b6\u51b5\n    metrics:\n      - name: request-success-rate\n        # \u6700\u5c0f\u7684\u8bf7\u6c42\u6210\u529f\u7387 (\u975e 5xx \u54cd\u5e94)\n        # (0-100)\n        thresholdRange:\n          min: 99\n        interval: 1m\n      - name: request-duration\n        # P99 \u6700\u5927\u7684\u8bf7\u6c42\u5ef6\u8fdf\n        # \u5355\u4f4d\u662f\u6beb\u79d2\n        thresholdRange:\n          max: 500\n        interval: 30s\n    webhooks:\n        # \u81ea\u52a8\u4ea7\u751f\u6d41\u91cf\u4ee5\u4fbf\u8fdb\u884c\u91d1\u4e1d\u96c0\u5206\u6790\uff0c\u6839\u636e\u5b9e\u9645\u4e1a\u52a1\u573a\u666f\u4fee\u6539\n      - name: load-test\n        url: http://flagger-loadtester.test/\n        timeout: 5s\n        type: rollout\n        metadata:\n          cmd: |-\n            hey -z 1m -q 10 -c 2 -h2 -host app.example.com http://apisix-gateway.apisix/api/info\n")),(0,r.kt)("p",null,"\u5c06\u4e0a\u8ff0\u4ee3\u7801\u4fdd\u5b58\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"podinfo-canary.yaml")," \u6587\u4ef6\uff0c\u5e76\u63d0\u4ea4\u5230\u96c6\u7fa4\u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f ./podinfo-canary.yaml\n")),(0,r.kt)("p",null,"\u7a0d\u7b49\u4e00\u4e0b Flagger \u5c31\u4f1a\u81ea\u52a8\u751f\u6210\u76f8\u5173\u7684\u8d44\u6e90\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4e3b\u52a8\u63d0\u4ea4\u7684\ndeployment.apps/podinfo\nhorizontalpodautoscaler.autoscaling/podinfo\napisixroute/podinfo\ncanary.flagger.app/podinfo\n\n# \u81ea\u52a8\u751f\u6210\u7684\ndeployment.apps/podinfo-primary\nhorizontalpodautoscaler.autoscaling/podinfo-primary\nservice/podinfo\nservice/podinfo-canary\nservice/podinfo-primary\napisixroute/podinfo-podinfo-canary\n")),(0,r.kt)("p",null,"\u6b64\u65f6\u4f60\u901a\u8fc7\u57df\u540d app.example.com \u8bbf\u95ee\u5e94\u7528\uff08\u793a\u4f8b\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"app.example.com")," \u53ef\u4ee5\u66ff\u6362\u6210\u4f60\u7684\u5b9e\u9645\u57df\u540d\uff09\uff0c\u4f60\u5c06\u4f1a\u770b\u5230\u5f53\u524d\u7248\u672c\u7684\u5e94\u7528\u7ec6\u8282\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/12/26/63a9a4798e616.png",alt:"\u7248\u672c 1"})),(0,r.kt)("h2",{id:"\u5177\u4f53\u529f\u80fd\u5b9e\u8df5"},"\u5177\u4f53\u529f\u80fd\u5b9e\u8df5"),(0,r.kt)("h3",{id:"\u81ea\u52a8\u91d1\u4e1d\u96c0\u53d1\u5e03"},"\u81ea\u52a8\u91d1\u4e1d\u96c0\u53d1\u5e03"),(0,r.kt)("p",null,"Flagger \u5b9e\u73b0\u4e86\u4e00\u4e2a\u63a7\u5236\u5faa\u73af\uff0c\u5728\u6301\u7eed\u6d4b\u91cf HTTP \u8bf7\u6c42\u6210\u529f\u7387\u3001\u8bf7\u6c42\u5e73\u5747\u6301\u7eed\u65f6\u95f4\u548c Pod \u5065\u5eb7\u72b6\u51b5\u7b49\u5173\u952e\u6027\u80fd\u6307\u6807\u7684\u540c\u65f6\uff0c\u9010\u6e10\u5c06\u6d41\u91cf\u8f6c\u79fb\u81f3\u91d1\u4e1d\u96c0\u8282\u70b9\u3002\u6839\u636e\u5bf9\u76f8\u5173\u6307\u6807\u7684\u5206\u6790\uff0c\u53d1\u5e03\u6216\u4e2d\u6b62\u91d1\u4e1d\u96c0\u90e8\u7f72\uff0c\u5e76\u5c06\u5206\u6790\u7ed3\u679c\u53d1\u5e03\u5230\u76f8\u5173\u5e73\u53f0\u4f8b\u5982 Slack\u3001MS Teams \u6216\u8005 Prometheus Alert Manager \u7b49\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/12/26/63a9a47bb7a3d.png",alt:"Flagger \u63a7\u5236\u5faa\u73af"})),(0,r.kt)("p",null,"\u5177\u4f53\u53ef\u901a\u8fc7\u66f4\u65b0\u5bb9\u5668\u955c\u50cf\u7248\u672c\uff0c\u6765\u89e6\u53d1\u91d1\u4e1d\u96c0\u53d1\u5e03\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n test set image deployment/podinfo \\\npodinfod=stefanprodan/podinfo:6.0.1\n")),(0,r.kt)("p",null,"\u5f53 Flagger \u68c0\u6d4b\u5230 deployment \u6709\u65b0\u7248\u53d8\u66f4\u65f6\uff0c\u5c31\u4f1a\u5f00\u59cb\u8bd5\u8fd0\u884c\u91d1\u4e1d\u96c0\u5206\u6790\u53d1\u5e03\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n test describe canary/podinfo\n\nStatus:\n  Canary Weight:  0\n  Conditions:\n    Message:               Canary analysis completed successfully, promotion finished.\n    Reason:                Succeeded\n    Status:                True\n    Type:                  Promoted\n  Failed Checks:           1\n  Iterations:              0\n  Phase:                   Succeeded\n\nEvents:\n  Type     Reason  Age                    From     Message\n  ----     ------  ----                   ----     -------\n  Warning  Synced  2m59s                  flagger  podinfo-primary.test not ready: waiting for rollout to finish: observed deployment generation less than desired generation\n  Warning  Synced  2m50s                  flagger  podinfo-primary.test not ready: waiting for rollout to finish: 0 of 1 (readyThreshold 100%) updated replicas are available\n  Normal   Synced  2m40s (x3 over 2m59s)  flagger  all the metrics providers are available!\n  Normal   Synced  2m39s                  flagger  Initialization done! podinfo.test\n  Normal   Synced  2m20s                  flagger  New revision detected! Scaling up podinfo.test\n  Warning  Synced  2m (x2 over 2m10s)     flagger  canary deployment podinfo.test not ready: waiting for rollout to finish: 0 of 1 (readyThreshold 100%) updated replicas are available\n  Normal   Synced  110s                   flagger  Starting canary analysis for podinfo.test\n  Normal   Synced  109s                   flagger  Advance podinfo.test canary weight 10\n  Warning  Synced  100s                   flagger  Halt advancement no values found for apisix metric request-success-rate probably podinfo.test is not receiving traffic: running query failed: no values found\n  Normal   Synced  90s                    flagger  Advance podinfo.test canary weight 20\n  Normal   Synced  80s                    flagger  Advance podinfo.test canary weight 30\n  Normal   Synced  69s                    flagger  Advance podinfo.test canary weight 40\n  Normal   Synced  59s                    flagger  Advance podinfo.test canary weight 50\n  Warning  Synced  30s (x2 over 40s)      flagger  podinfo-primary.test not ready: waiting for rollout to finish: 1 old replicas are pending termination\n  Normal   Synced  9s (x3 over 50s)       flagger  (combined from similar events): Promotion completed! Scaling down podinfo.test\n")),(0,r.kt)("p",null,"\u5728\u65b0\u7248\u672c\u91d1\u4e1d\u96c0\u53d1\u5e03\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u57df\u540d app.example.com \u8bbf\u95ee\u5e94\u7528\uff08\u793a\u4f8b\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"app.example.com")," \u53ef\u4ee5\u66ff\u6362\u6210\u4f60\u7684\u5b9e\u9645\u57df\u540d\uff09\uff0c\u8fd9\u91cc\u5c06\u4f1a\u51fa\u73b0\u4e0d\u540c\u7248\u672c\u7684\u54cd\u5e94\u5207\u6362\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/12/26/63a9a47b281b0.png",alt:"\u7248\u672c 2"})),(0,r.kt)("p",null,"\u901a\u8fc7\u67e5\u770b\u7531 Flagger \u81ea\u52a8\u521b\u5efa\u51fa\u6765\u7684 Apache APISIX \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"ApisixRoute")," \u8d44\u6e90 ",(0,r.kt)("inlineCode",{parentName:"p"},"podinfo-podinfo-canary"),"\uff0c\u4f1a\u53d1\u73b0 service ",(0,r.kt)("inlineCode",{parentName:"p"},"podinfo-primary")," \u548c service ",(0,r.kt)("inlineCode",{parentName:"p"},"podinfo-canary")," \u7684\u6743\u91cd\u8ddf\u968f\u7740\u53d1\u5e03\u8fc7\u7a0b\u4e00\u8d77\u53d8\u5316\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  http:\n    - backends:\n        - serviceName: podinfo-primary\n          servicePort: 80\n          # Flagger\u81ea\u52a8\u8c03\u6574\n          weight: 80\n        - serviceName: podinfo-canary\n          servicePort: 80\n          # Flagger\u81ea\u52a8\u8c03\u6574\n          weight: 20\n")),(0,r.kt)("p",null,"\u5f53\u6700\u7ec8\u53d1\u5e03\u5b8c\u6210\u540e\uff0c\u5c06\u4f1a\u770b\u5230\u7a33\u5b9a\u7684\u6700\u65b0\u7248\u672c\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/12/26/63a9a479d5bbe.png",alt:"\u7248\u672c 3"})),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5982\u82e5\u5728\u91d1\u4e1d\u96c0\u53d1\u5e03\u671f\u95f4\u518d\u6b21\u53d8\u66f4\u4e86 deployment\uff0cFlagger \u5c06\u4f1a\u91cd\u65b0\u8fdb\u884c\u91d1\u4e1d\u96c0\u5206\u6790\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u6765\u89c2\u5bdf\u5230\u6240\u6709\u7684\u91d1\u4e1d\u96c0\u53d1\u5e03\u7ec6\u8282\u3002"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"watch kubectl get canaries --all-namespaces\n\nNAMESPACE   NAME      STATUS      WEIGHT   LASTTRANSITIONTIME\ntest        podinfo-2   Progressing   10       2022-11-23T05:00:54Z\ntest        podinfo     Succeeded     0        2022-11-23T06:00:54Z\n")),(0,r.kt)("h3",{id:"\u81ea\u52a8\u56de\u6eda"},"\u81ea\u52a8\u56de\u6eda"),(0,r.kt)("p",null,"\u5728\u91d1\u4e1d\u96c0\u53d1\u5e03\u5206\u6790\u671f\u95f4\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u751f\u6210 HTTP ",(0,r.kt)("inlineCode",{parentName:"p"},"500")," \u9519\u8bef\u8bf7\u6c42\uff0c\u6d4b\u8bd5 Flagger \u6682\u505c\u91d1\u4e1d\u96c0\u53d1\u5e03\u5e76\u56de\u6eda\u5230\u65e7\u7248\u672c\u3002"),(0,r.kt)("p",null,"\u9996\u5148\u9700\u8981\u89e6\u53d1\u53e6\u4e00\u4e2a\u91d1\u4e1d\u96c0\u53d1\u5e03\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n test set image deployment/podinfo \\\npodinfod=stefanprodan/podinfo:6.0.2\n")),(0,r.kt)("p",null,"\u7136\u540e\u8fdb\u5165\u5230 load tester \u5bb9\u5668\u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n test exec -it deploy/flagger-loadtester bash\n")),(0,r.kt)("p",null,"\u63a5\u7740\u53bb\u751f\u6210 HTTP ",(0,r.kt)("inlineCode",{parentName:"p"},"500")," \u9519\u8bef\uff0c\u5e76\u6a21\u62df\u670d\u52a1\u5ef6\u8fdf\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'hey -z 1m -c 5 -q 5 -host app.example.com http://apisix-gateway.apisix/status/500\n\nwatch -n 1 curl -H \\"host: app.example.com\\" http://apisix-gateway.apisix/delay/1\n')),(0,r.kt)("p",null,"\u5f53\u5931\u8d25\u6307\u6807\u7684\u68c0\u6d4b\u6b21\u6570\u8fbe\u5230\u91d1\u4e1d\u96c0\u5206\u6790\u7684\u9608\u503c\u65f6\uff0c\u6d41\u91cf\u5c06\u88ab\u81ea\u52a8\u8def\u7531\u5230\u4e3b\u8282\u70b9\u3002\u91d1\u4e1d\u96c0\u8282\u70b9\u88ab\u7f29\u5c0f\u5230\u96f6\uff0c\u8be5\u91d1\u4e1d\u96c0\u53d1\u5e03\u8fc7\u7a0b\u88ab\u6807\u8bb0\u4e3a\u5931\u8d25\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl -n apisix logs deploy/flagger -f | jq .msg\n\n"New revision detected! Scaling up podinfo.test"\n"canary deployment podinfo.test not ready: waiting for rollout to finish: 0 of 1 (readyThreshold 100%) updated replicas are available"\n"Starting canary analysis for podinfo.test"\n"Advance podinfo.test canary weight 10"\n"Halt podinfo.test advancement success rate 0.00% < 99%"\n"Halt podinfo.test advancement success rate 26.76% < 99%"\n"Halt podinfo.test advancement success rate 34.19% < 99%"\n"Halt podinfo.test advancement success rate 37.32% < 99%"\n"Halt podinfo.test advancement success rate 39.04% < 99%"\n"Halt podinfo.test advancement success rate 40.13% < 99%"\n"Halt podinfo.test advancement success rate 48.28% < 99%"\n"Halt podinfo.test advancement success rate 50.35% < 99%"\n"Halt podinfo.test advancement success rate 56.92% < 99%"\n"Halt podinfo.test advancement success rate 67.70% < 99%"\n"Rolling back podinfo.test failed checks threshold reached 10"\n"Canary failed! Scaling down podinfo.test"\n')),(0,r.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u6307\u6807\u91d1\u4e1d\u96c0\u5206\u6790"},"\u81ea\u5b9a\u4e49\u6307\u6807\u91d1\u4e1d\u96c0\u5206\u6790"),(0,r.kt)("p",null,"\u91d1\u4e1d\u96c0\u5206\u6790\u53ef\u4ee5\u901a\u8fc7\u67e5\u8be2 Prometheus \u7684\u6307\u6807\u8fdb\u884c\u6269\u5c55\uff0c\u5177\u4f53\u53ef\u6839\u636e\u5b9e\u9645\u4e1a\u52a1\u573a\u666f\u8fdb\u884c\u8c03\u6574\u3002\u4e3b\u8981\u64cd\u4f5c\u662f\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u6307\u6807\u6a21\u677f\uff0c\u5e76\u63d0\u4ea4\u5230\u96c6\u7fa4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: flagger.app/v1beta1\nkind: MetricTemplate\nmetadata:\n  name: not-found-percentage\n  namespace: test\nspec:\n  provider:\n    type: prometheus\n    address: http://flagger-prometheus.apisix:9090\n  query: |\n    sum(\n      rate(\n        apisix_http_status{\n          route=~"{{ namespace }}_{{ route }}-{{ target }}-canary_.+",\n          code!~"4.."\n        }[{{ interval }}]\n      )\n    )\n    /\n    sum(\n      rate(\n        apisix_http_status{\n          route=~"{{ namespace }}_{{ route }}-{{ target }}-canary_.+"\n        }[{{ interval }}]\n      )\n    ) * 100\n# \u4fee\u6539\u91d1\u4e1d\u96c0\u53d1\u5e03\u4e2d\u7684 analysis\uff0c\u6dfb\u52a0\u4e0a\u9762\u521b\u5efa\u7684\u6307\u6807\u6a21\u7248\u3002\n  analysis:\n    metrics:\n      - name: "404s percentage"\n        templateRef:\n          name: not-found-percentage\n        thresholdRange:\n          max: 5\n        interval: 1m\n')),(0,r.kt)("p",null,"\u4e0a\u8ff0\u914d\u7f6e\u5185\u5bb9\u4e3b\u8981\u662f\u901a\u8fc7\u68c0\u67e5 HTTP ",(0,r.kt)("inlineCode",{parentName:"p"},"404")," \u8bf7\u6c42\u7684 QPS \u662f\u5426\u9ad8\u4e8e\u603b\u6d41\u91cf\u7684 5% \u6765\u9a8c\u8bc1\u91d1\u4e1d\u96c0\u3002\u5982\u679c HTTP ",(0,r.kt)("inlineCode",{parentName:"p"},"404")," \u8bf7\u6c42\u8d85\u8fc7 5% \u7684\u9608\u503c\uff0c\u90a3\u4e48\u91d1\u4e1d\u96c0\u53d1\u5e03\u5c31\u5931\u8d25\u4e86\u3002"),(0,r.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.kt)("p",null,"\u5f53\u7136\uff0c\u4ee5\u4e0a\u8fc7\u7a0b\u8fd8\u53ef\u4ee5\u901a\u8fc7\u66f4\u591a\u7684\u81ea\u5b9a\u4e49\u6307\u6807\u68c0\u67e5\u3001Webhook\u3001\u624b\u52a8\u5ba1\u6279\u548c Slack \u6216 MS Teams \u901a\u77e5\u7b49\u8fdb\u884c\u6269\u5c55\u3002"),(0,r.kt)("p",null,"\u901a\u8fc7 Apache APISIX \u548c Flagger \u7684\u6574\u5408\uff0c\u5b9e\u73b0\u4e86\u975e\u5e38\u987a\u6ed1\u7684\u91d1\u4e1d\u96c0\u53d1\u5e03\u3002\u5728\u4e1a\u52a1\u5b9e\u8df5\u7684\u8fc7\u7a0b\u4e2d\uff0c\u63d0\u9ad8\u4e86\u53d1\u5e03\u6548\u7387\uff0c\u964d\u4f4e\u4e86\u53d1\u5e03\u98ce\u9669\u3002\u540e\u7eed\u4e24\u4e2a\u793e\u533a\u4e5f\u4f1a\u901a\u8fc7\u66f4\u7d27\u5bc6\u7684\u5408\u4f5c\uff0c\u53bb\u5b9e\u73b0 Blue/Green Mirroring \u548c A/B Testing \u7b49\u66f4\u591a\u7684\u53d1\u5e03\u80fd\u529b\u7279\u6027\u3002"))}d.isMDXComponent=!0}}]);