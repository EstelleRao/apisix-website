"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[64046],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),h=s,d=m["".concat(c,".").concat(h)]||m[h]||l[h]||r;return n?i.createElement(d,a(a({ref:t},u),{},{components:n})):i.createElement(d,a({ref:t},u))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,a=new Array(r);a[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var p=2;p<r;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39649:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=n(87462),s=(n(67294),n(3905));const r={title:"Exporting Prometheus metrics from APISIX",keywords:["APISIX Ingress","Apache APISIX","Kubernetes Ingress","Prometheus"],description:"A tutorial on exporting Prometheus metrics from Apache APISIX Ingress."},a=void 0,o={unversionedId:"tutorials/how-to-access-Apache-APISIX-Prometheus-Metrics-on-k8s",id:"tutorials/how-to-access-Apache-APISIX-Prometheus-Metrics-on-k8s",isDocsHomePage:!1,title:"Exporting Prometheus metrics from APISIX",description:"A tutorial on exporting Prometheus metrics from Apache APISIX Ingress.",source:"@site/docs/apisix-ingress-controller/tutorials/how-to-access-Apache-APISIX-Prometheus-Metrics-on-k8s.md",sourceDirName:"tutorials",slug:"/tutorials/how-to-access-Apache-APISIX-Prometheus-Metrics-on-k8s",permalink:"/docs/ingress-controller/next/tutorials/how-to-access-Apache-APISIX-Prometheus-Metrics-on-k8s",editUrl:"/edit#https://github.com/apache/apisix-ingress-controller/edit/master/docs/en/latest/tutorials/how-to-access-Apache-APISIX-Prometheus-Metrics-on-k8s.md",tags:[],version:"current",frontMatter:{title:"Exporting Prometheus metrics from APISIX",keywords:["APISIX Ingress","Apache APISIX","Kubernetes Ingress","Prometheus"],description:"A tutorial on exporting Prometheus metrics from Apache APISIX Ingress."},sidebar:"docs",previous:{title:"Enable authentication and restriction",permalink:"/docs/ingress-controller/next/tutorials/enable-authentication-and-restriction"},next:{title:"Using custom Plugins in APISIX Ingress",permalink:"/docs/ingress-controller/next/tutorials/using-custom-plugins"}},c=[{value:"Enable the prometheus Plugin",id:"enable-the-prometheus-plugin",children:[]},{value:"Expose metrics with the public-api Plugin",id:"expose-metrics-with-the-public-api-plugin",children:[]},{value:"Check the exported metrics",id:"check-the-exported-metrics",children:[]}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This tutorial explains how you can export APISIX metrics in Prometheus format."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"This tutorial requires APISIX version > 2.13."))),(0,s.kt)("h2",{id:"enable-the-prometheus-plugin"},"Enable the prometheus Plugin"),(0,s.kt)("p",null,"First, you have to enable the ",(0,s.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/prometheus"},"prometheus")," Plugin. You can do this by adding to your ",(0,s.kt)("inlineCode",{parentName:"p"},"values.yaml")," file while you install APISIX Ingress via Helm. You can also enable the ",(0,s.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/public-api"},"public-api")," Plugin to expose these metrics."),(0,s.kt)("p",null,"A sample ",(0,s.kt)("inlineCode",{parentName:"p"},"values.yaml")," file is shown below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="values.yaml"',title:'"values.yaml"'},"gateway:\n  type: NodePort\n\ningress-controller:\n  enabled: true\n  config:\n    apisix:\n      serviceNamespace: ingress-apisix\n\npluginAttrs:\n  prometheus:\n    enable_export_server: false\n\nplugins:\n  - api-breaker\n  - authz-keycloak\n  - basic-auth\n  - batch-requests\n  - consumer-restriction\n  - cors\n  - echo\n  - fault-injection\n  - file-logger\n  - grpc-transcode\n  - hmac-auth\n  - http-logger\n  - ip-restriction\n  - ua-restriction\n  - jwt-auth\n  - kafka-logger\n  - key-auth\n  - limit-conn\n  - limit-count\n  - limit-req\n  - node-status\n  - openid-connect\n  - authz-casbin\n  - proxy-cache\n  - proxy-mirror\n  - proxy-rewrite\n  - redirect\n  - referer-restriction\n  - request-id\n  - request-validation\n  - response-rewrite\n  - serverless-post-function\n  - serverless-pre-function\n  - sls-logger\n  - syslog\n  - tcp-logger\n  - udp-logger\n  - uri-blocker\n  - wolf-rbac\n  - zipkin\n  - traffic-split\n  - gzip\n  - real-ip\n  - ext-plugin-pre-req\n  - ext-plugin-post-req\n  - prometheus # enable prometheus Plugin\n  - public-api # enable public-api Plugin\n")),(0,s.kt)("p",null,"You can install APISIX Ingress with Helm and pass this ",(0,s.kt)("inlineCode",{parentName:"p"},"values.yaml")," file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add apisix https://charts.apiseven.com\nhelm repo update\nhelm install apisix apisix/apisix -f values.yaml --create-namespace -n ingress-apisix\n")),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"APISIX also supports exporting HTTP request-related metrics like http_status, http_latency, and bandwidth. You can enable this by updating your configuration file as shown ",(0,s.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/prometheus/#specifying-metrics"},"here"),"."))),(0,s.kt)("p",null,"You should also configure APISIX Ingress with the prometheus Plugin by creating an ",(0,s.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/ingress-controller/concepts/apisix_cluster_config"},"ApisixClusterConfig")," resource as shown:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="apisix-config.yaml"',title:'"apisix-config.yaml"'},"apiVersion: apisix.apache.org/v2\nkind: ApisixClusterConfig\nmetadata:\n  name: default\nspec:\n  monitoring:\n    prometheus:\n      enable: true\n")),(0,s.kt)("h2",{id:"expose-metrics-with-the-public-api-plugin"},"Expose metrics with the public-api Plugin"),(0,s.kt)("p",null,"You can use the ",(0,s.kt)("inlineCode",{parentName:"p"},"public-api")," Plugin to expose the Prometheus metrics exported by APISIX. To do this, you can create a Route and enable the Plugin on it as shown below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="public-api.yaml"',title:'"public-api.yaml"'},"apiVersion: apisix.apache.org/v2\nkind: ApisixRoute\nmetadata:\n  name: prometheus-route\n  namespace: ingress-apisix\nspec:\n  http:\n  - name: public-api\n    match:\n      hosts:\n      - test.prometheus.org\n      paths:\n      - /apisix/prometheus/metrics\n    backends:\n    # replace this with your backend service\n    - serviceName: apisix-admin\n      servicePort: 9180\n    plugins:\n    - name: public-api\n      enable: true\n")),(0,s.kt)("p",null,"This will export the metrics to the ",(0,s.kt)("inlineCode",{parentName:"p"},"/apisix/prometheus/metrics")," path."),(0,s.kt)("h2",{id:"check-the-exported-metrics"},"Check the exported metrics"),(0,s.kt)("p",null,"You can configure Prometheus to pull APISIX's metrics from the ",(0,s.kt)("inlineCode",{parentName:"p"},"/apisix/prometheus/metrics")," path. For testing, we will expose this path and check the exported metrics:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"# forward to 127.0.0.1:9080\nkubectl port-forward service/apisix-gateway 9080:80 -n ingress-apisix\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"curl http://127.0.0.1:9080/apisix/prometheus/metrics -H 'Host: test.prometheus.org'\n")),(0,s.kt)("p",null,"This will show the metrics exported by APISIX:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="output"',title:'"output"'},'Defaulted container "apisix" out of: apisix, wait-etcd (init)\n# HELP apisix_bandwidth Total bandwidth in bytes consumed per service in APISIX\n# TYPE apisix_bandwidth counter\napisix_bandwidth{type="egress",route="",service="",consumer="",node=""} 1130\napisix_bandwidth{type="ingress",route="",service="",consumer="",node=""} 517\n# HELP apisix_etcd_modify_indexes Etcd modify index for APISIX keys\n# TYPE apisix_etcd_modify_indexes gauge\napisix_etcd_modify_indexes{key="consumers"} 0\napisix_etcd_modify_indexes{key="global_rules"} 13\napisix_etcd_modify_indexes{key="max_modify_index"} 13\napisix_etcd_modify_indexes{key="prev_index"} 13\napisix_etcd_modify_indexes{key="protos"} 0\napisix_etcd_modify_indexes{key="routes"} 0\napisix_etcd_modify_indexes{key="services"} 0\napisix_etcd_modify_indexes{key="ssls"} 0\napisix_etcd_modify_indexes{key="stream_routes"} 0\napisix_etcd_modify_indexes{key="upstreams"} 0\napisix_etcd_modify_indexes{key="x_etcd_index"} 13\n# HELP apisix_etcd_reachable Config server etcd reachable from APISIX, 0 is unreachable\n# TYPE apisix_etcd_reachable gauge\napisix_etcd_reachable 1\n# HELP apisix_http_latency HTTP request latency in milliseconds per service in APISIX\n# TYPE apisix_http_latency histogram\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="1"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="2"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="5"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="10"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="20"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="50"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="100"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="200"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="500"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="1000"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="2000"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="5000"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="10000"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="30000"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="60000"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="+Inf"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="1"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="2"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="5"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="10"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="20"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="50"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="100"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="200"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="500"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="1000"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="2000"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="5000"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="10000"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="30000"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="60000"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="+Inf"} 5\napisix_http_latency_count{type="apisix",route="",service="",consumer="",node=""} 5\napisix_http_latency_count{type="request",route="",service="",consumer="",node=""} 5\napisix_http_latency_sum{type="apisix",route="",service="",consumer="",node=""} 0\napisix_http_latency_sum{type="request",route="",service="",consumer="",node=""} 0\n# HELP apisix_http_requests_total The total number of client requests since APISIX started\n# TYPE apisix_http_requests_total gauge\napisix_http_requests_total 82\n# HELP apisix_http_status HTTP status codes per service in APISIX\n# TYPE apisix_http_status counter\napisix_http_status{code="404",route="",matched_uri="",matched_host="",service="",consumer="",node=""} 5\n# HELP apisix_nginx_http_current_connections Number of HTTP connections\n# TYPE apisix_nginx_http_current_connections gauge\napisix_nginx_http_current_connections{state="accepted"} 2346\napisix_nginx_http_current_connections{state="active"} 1\napisix_nginx_http_current_connections{state="handled"} 2346\napisix_nginx_http_current_connections{state="reading"} 0\napisix_nginx_http_current_connections{state="waiting"} 0\napisix_nginx_http_current_connections{state="writing"} 1\n# HELP apisix_nginx_metric_errors_total Number of nginx-lua-prometheus errors\n# TYPE apisix_nginx_metric_errors_total counter\napisix_nginx_metric_errors_total 0\n# HELP apisix_node_info Info of APISIX node\n# TYPE apisix_node_info gauge\napisix_node_info{hostname="apisix-7d6b8577b6-rqhq9"} 1\n')))}u.isMDXComponent=!0}}]);