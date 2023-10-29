"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9069],{35318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(27378);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(a),d=o,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||r;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},99291:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(25773),o=(a(27378),a(35318));const r={title:"Deploy and Run Apache APISIX on Scaleway Cloud",authors:[{name:"Bobur Umurzokov",title:"Author",url:"https://github.com/Boburmirzo",image_url:"https://avatars.githubusercontent.com/u/14247607"}],keywords:["API Gateway","Apache APISIX","API","Scaleway","Cloud","Deployment"],description:"In this post, you will learn how easily deploy and run both Apache APISIX API Gateway and Ingress Controller on Scaleway Cloud Managed Kubernetes to efficiently manage, protect and observe your APIs in the cloud.",tags:["Case Studies"],image:"https://static.apiseven.com/2022/10/25/6357addcaa23e.png"},s=void 0,i={permalink:"/blog/2022/10/19/deploy-apisix-on-scaleway-cloud",source:"@site/blog/2022/10/19/deploy-apisix-on-scaleway-cloud.md",title:"Deploy and Run Apache APISIX on Scaleway Cloud",description:"In this post, you will learn how easily deploy and run both Apache APISIX API Gateway and Ingress Controller on Scaleway Cloud Managed Kubernetes to efficiently manage, protect and observe your APIs in the cloud.",date:"2022-10-19T00:00:00.000Z",formattedDate:"October 19, 2022",tags:[{label:"Case Studies",permalink:"/blog/tags/case-studies"}],readingTime:8.825,truncated:!0,authors:[{name:"Bobur Umurzokov",title:"Author",url:"https://github.com/Boburmirzo",image_url:"https://avatars.githubusercontent.com/u/14247607",imageURL:"https://avatars.githubusercontent.com/u/14247607"}],prevItem:{title:"10 most common use cases of an API Gateway",permalink:"/blog/2022/10/27/ten-use-cases-api-gateway"},nextItem:{title:"Rewriting the Apache APISIX response-rewrite plugin in Rust",permalink:"/blog/2022/10/05/rust-apisix"}},l={authorsImageUrls:[void 0]},p=[{value:"What\u2019s Apache APISIX?",id:"whats-apache-apisix",children:[],level:2},{value:"What is Scaleway?",id:"what-is-scaleway",children:[],level:2},{value:"Apache APISIX as an API Management solution in the Scaleway Cloud",id:"apache-apisix-as-an-api-management-solution-in-the-scaleway-cloud",children:[],level:2},{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Deploy Apache APISIX and Ingress Controller",id:"deploy-apache-apisix-and-ingress-controller",children:[{value:"Connect to a cluster with kubectl",id:"connect-to-a-cluster-with-kubectl",children:[],level:3},{value:"Deploy and run APISIX",id:"deploy-and-run-apisix",children:[],level:3},{value:"Deploy and run APISIX Ingress Controller",id:"deploy-and-run-apisix-ingress-controller",children:[],level:3}],level:2},{value:"What\u2019s next",id:"whats-next",children:[{value:"Recommended content",id:"recommended-content",children:[],level:3},{value:"Community\u2935\ufe0f",id:"community\ufe0f",children:[],level:3}],level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In this post, you will learn how easily deploy and run both ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/getting-started/"},"Apache APISIX API Gateway")," and ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/ingress-controller/getting-started/"},"Ingress Controller")," on ",(0,o.kt)("a",{parentName:"p",href:"https://www.scaleway.com/en/docs/"},"Scaleway Cloud Managed Kubernetes")," to efficiently manage, protect and observe your APIs in the cloud.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/10/19/634f92af0e74b.png",alt:"Apache APISIX as an API Management solution on Scaleway Cloud"})),(0,o.kt)("p",null,"Today, more and more developers are looking at how they can bring their existing applications to the cloud\u2014or at how to build new cloud-native applications. Many organizations have significant investments in the migration of mission-critical applications running on-premises to fully supported environments to run these apps in the cloud. This post explains how to deploy and run both ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/getting-started/"},"Apache APISIX API Gateway")," and ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/ingress-controller/getting-started/"},"Ingress Controller")," on ",(0,o.kt)("a",{parentName:"p",href:"https://www.scaleway.com/en/docs/"},"Scaleway Cloud Managed Kubernetes")),(0,o.kt)("p",null,"Firstly, let\u2019s understand what is Apache APISIX and Scaleway, how you can leverage both solutions to serve your needs. Or you can just skip the intro sections and start with the tutorial."),(0,o.kt)("h2",{id:"whats-apache-apisix"},"What\u2019s Apache APISIX?"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/"},"Apache APISIX")," is an open-source\xa0 ",(0,o.kt)("strong",{parentName:"p"},"API Gateway")," under ",(0,o.kt)("a",{parentName:"p",href:"https://www.apache.org/"},"Apache Software Foundation")," that is lightweight, independently deployable, and scalable that can run anywhere that allows developers to manage API endpoints. You can also leverage APISIX as ",(0,o.kt)("a",{parentName:"p",href:"url"},"Kubernetes Ingress Controller")," to deliver high performance and get the benefits of stateful load balancing, traffic split, hot reloading, and expansion capabilities by means of its offered diverse plug-ins to satisfy your specific needs.\xa0 You can read more about the use cases and features offered by Apache APISIX in the ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/getting-started/"},"documentation"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/10/17/634d545743b1a.jpg",alt:"Apache APISIX"})),(0,o.kt)("p",null,"It is also possible to install Apache APISIX by\xa0",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/installation-guide/"},"different methods")," (",(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker"),", ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm"),", or ",(0,o.kt)("a",{parentName:"p",href:"https://rpm.org/"},"RPM"),") and run it in the various public cloud providers because of its ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/architecture/cloud-native/definition"},"cloud-native")," behavior."),(0,o.kt)("h2",{id:"what-is-scaleway"},"What is Scaleway?"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.scaleway.com/en/"},"Scaleway")," is a cloud provider with a variety of services. The public cloud Scaleway elements offer all the important components of a general cloud provider such as ",(0,o.kt)("a",{parentName:"p",href:"https://www.scaleway.com/en/serverless-functions/"},"serverless"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.scaleway.com/en/kubernetes-kapsule/"},"containers"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.scaleway.com/en/database/"},"storage & database"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.scaleway.com/en/virtual-instances/"},"virtual machines"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.scaleway.com/en/all-products/#:~:text=Learn%20more-,Network,-Private%20Networks"},"networking"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.scaleway.com/en/iot-hub/"},"IoT hub"),", and many more. You can easily build, deploy and scale your applications in the flexible price model and cost-efficiently."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/10/17/634d534a9c60e.webp",alt:"scaleway-og.webp"})),(0,o.kt)("p",null,"Scaleway is the most complete cloud ecosystem trusted by 25000+ businesses in the EU market. It is also playing an active role in improving the open-source ecosystem which already includes many well-known open-source projects such as ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"NodeJS"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.centos.org/"},"CentOS"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.opensuse.org/"},"OpenSuse"),", and others. You might also want to learn about ",(0,o.kt)("a",{parentName:"p",href:"https://www.scaleway.com/en/about-us/open-source-program/"},"the Scaleway Open Source Program here"),"."),(0,o.kt)("h2",{id:"apache-apisix-as-an-api-management-solution-in-the-scaleway-cloud"},"Apache APISIX as an API Management solution in the Scaleway Cloud"),(0,o.kt)("p",null,"Apache APISIX is also a part of this cloud computing partnership program as it is a community project. The main purpose of being a part of the program is to give customers of Scaleway prospect to accelerate their business with an API-first approach by ready-to-use open-source API management solution for building, managing, securing, and observing all internal and external APIs."),(0,o.kt)("p",null,"We found out that currently, Scaleway does not provide any API management and analysis software in their cloud. As a result, we decided to become partners to connect with thousands of developers from all over the world to get answers and share knowledge, invest in our communities, and give them full control of services with the cloud tools to do what they love. For example, similar to well-known cloud vendors offering API Management solutions like ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/api-gateway/"},"AWS API Gateway"),", ",(0,o.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/products/api-management/#overview"},"Azure API Management"),", or ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/apigee"},"Google Cloud Apigee"),", you can effortlessly get the benefit of APISIX to manage the full API life cycle."),(0,o.kt)("p",null,"With a small background knowledge of Apache APISIX and Scaleway Cloud, we can jump in to get started guide to bring APISIX and run it with Scaleway\u2019s Kubernetes ",(0,o.kt)("a",{parentName:"p",href:"https://www.scaleway.com/en/docs/compute/kubernetes/concepts/#kubernetes-kapsule"},"Kapsule")," or ",(0,o.kt)("a",{parentName:"p",href:"https://www.scaleway.com/en/docs/compute/kubernetes/concepts/#kubernetes-kosmos"},"Kosmos"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," ",(0,o.kt)("em",{parentName:"p"},"Kubernetes Kapsule and Kosmos"),"  are two different cluster types that provide a managed environment to create, configure and run a cluster of preconfigured machines for containerized applications. This allows you to create Kubernetes clusters without the complexity of managing the infrastructure.")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For local host environment, you might need to install ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/"},"Kubectl")," and ",(0,o.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/#from-the-helm-project"},"Helm"),". It is required to connect to the Kubernetes's cluster."),(0,o.kt)("li",{parentName:"ul"},"You have an account and are logged into the ",(0,o.kt)("a",{parentName:"li",href:"https://console.scaleway.com/"},"Scaleway console"),"."),(0,o.kt)("li",{parentName:"ul"},"You need create a Kubernetes cluster using the Scaleway Cloud by simply following the ",(0,o.kt)("a",{parentName:"li",href:"https://www.scaleway.com/en/docs/compute/kubernetes/quickstart/"},"Scaleway\u2019s Kubernetes Quickstart")," guide. You can use the ",(0,o.kt)("a",{parentName:"li",href:"https://www.scaleway.com/en/docs/"},"comprehensive documentation")," to help you go with console.")),(0,o.kt)("h2",{id:"deploy-apache-apisix-and-ingress-controller"},"Deploy Apache APISIX and Ingress Controller"),(0,o.kt)("p",null,"At this point, I can assume that you created a Kubernetes cluster type of ",(0,o.kt)("strong",{parentName:"p"},"Kapsule"),". Then, you need to open the ",(0,o.kt)("strong",{parentName:"p"},"Scaleway console"),", navigate to the ",(0,o.kt)("strong",{parentName:"p"},"Kubernetes cluster")," you created and download the cluster configuration file ",(0,o.kt)("inlineCode",{parentName:"p"},"kubeconfig")," from the ",(0,o.kt)("strong",{parentName:"p"},"Kubernetes cluster")," and copy it to the local computer's ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.kube/config")," (the default path of kubectl)."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: If you have configured the KUBECONFIG environment variable before, ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," will load the KUBECONFIG environment variable first instead of ~/.kube/config. Please note when using.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/10/17/634d374f73b2d.png",alt:"Scaleway Kubernetes Cluster.PNG"})),(0,o.kt)("h3",{id:"connect-to-a-cluster-with-kubectl"},"Connect to a cluster with kubectl"),(0,o.kt)("p",null,"Once your cluster is created and the ",(0,o.kt)("inlineCode",{parentName:"p"},".kubeconfig")," file is  downloaded, you can use this with ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl"),", the Kubernetes command line tool, allowing you to run commands against your Kubernetes clusters. You can use kubectl from a terminal on your local computer to deploy applications, inspect and manage cluster resources, and view logs. See how to ",(0,o.kt)("a",{parentName:"p",href:"https://www.scaleway.com/en/docs/compute/kubernetes/how-to/connect-cluster-kubectl/"},"connect to a cluster with kubectl")," for more info."),(0,o.kt)("p",null,"Below you can find two kinds of deployment command examples, one for deploying APISIX and another for Ingress Controller."),(0,o.kt)("h3",{id:"deploy-and-run-apisix"},"Deploy and run APISIX"),(0,o.kt)("p",null,"To install APISIX via Helm, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ helm repo add apisix https://charts.apiseven.com\n$ helm repo add bitnami https://charts.bitnami.com/bitnami\n$ helm repo update\n$ helm install apisix apisix/apisix --create-namespace --namespace apisix --set gateway.type=LoadBalancer\n")),(0,o.kt)("p",null,"As an output, you will get the following with the notes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"NAME: apisix\nLAST DEPLOYED: Thu Sep 15 01:14:12 2022\nNAMESPACE: apisix\nSTATUS: deployed\nREVISION: 1\nTEST SUITE: None\nNOTES:\n1. Get the application URL by running these commands:\n     NOTE: It may take a few minutes for the LoadBalancer IP to be available.\n           You can watch the status of by running 'kubectl get --namespace apisix svc -w apisix-gateway'\n  export SERVICE_IP=$(kubectl get svc --namespace apisix apisix-gateway --template \"{{ range (index .status.loadBalancer.ingress 0) }}{{.}}{{ end }}\")\n  echo http://$SERVICE_IP:80\n")),(0,o.kt)("p",null,"As it is mentioned in the notes, you should run the blow commands to get application IP/URL address:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ export SERVICE_IP=$(kubectl get svc --namespace apisix apisix-gateway --template "{{ range (index .status.loadBalancer.ingress 0) }}{{.}}{{ end }}")\n$ echo http://$SERVICE_IP:80\n\nhttp://51.159.10.6:80\n')),(0,o.kt)("p",null,"You can check anytime the deployment status of APISIX:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get pods -n apisix # All resources are ready\n\nNAME                      READY   STATUS    RESTARTS   AGE\napisix-656ff547f4-vvcdg   1/1     Running   0          3m9s\napisix-etcd-0             1/1     Running   0          3m9s\napisix-etcd-1             1/1     Running   0          3m9s\napisix-etcd-2             1/1     Running   0          3m9s\n\n$ kubectl get service -n apisix\n\nNAME                   TYPE           CLUSTER-IP      EXTERNAL-IP   PORT(S)             AGE\napisix-admin           ClusterIP      10.33.189.212   <none>        9180/TCP            3m29s\napisix-etcd            ClusterIP      10.43.213.105   <none>        2379/TCP,2380/TCP   3m29s\napisix-etcd-headless   ClusterIP      None            <none>        2379/TCP,2380/TCP   3m29s\napisix-gateway         LoadBalancer   10.35.46.143    51.159.10.6   80:30345/TCP        3m29s\n\n")),(0,o.kt)("p",null,"After we make sure that APISIX is upon and running, we can verify it by creating a sample ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/terminology/upstream/"},"Upstream")," (which targets an external mock service such as ",(0,o.kt)("inlineCode",{parentName:"p"},"httpbin.org"),") and a ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/terminology/route/"},"Route"),"."),(0,o.kt)("p",null,"First, let's apply some changes to our Kubernetes manifest file to have APISIX pod access to the external service (",(0,o.kt)("inlineCode",{parentName:"p"},"httpbin.org"),"). To do so, you can run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl apply -f - <<EOF\nkind: Service\napiVersion: v1\nmetadata:\n  name: httpbin-external\nspec:\n  type: ExternalName\n  externalName: httpbin.org\nEOF\n")),(0,o.kt)("p",null,"Next, we can create our first test route with an upstream (backend service that is pointing to ",(0,o.kt)("inlineCode",{parentName:"p"},"httpbin.org"),")."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You need to replace ",(0,o.kt)("inlineCode",{parentName:"p"},"APISIX_POD")," with the name of APISIX's pod.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl exec -it ${APISIX_POD} -n apisix -- curl "http://127.0.0.1:9180/apisix/admin/routes/1" -H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -X PUT -d \'\n{\n  "host": "httpbin.org",\n  "uri": "/*",\n  "upstream": {\n    "type": "roundrobin",\n    "nodes": {\n      "httpbin-external.default.svc.cluster.local:80": 1\n    }\n  }\n}\'\n')),(0,o.kt)("p",null,"Then, we can verify access and if the newly created route is functioning correctly by running another final command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://51.159.10.6:80/get -H \'Host: httpbin.org\'\n{\n  "headers": {\n    "Accept": "*/*",\n    "Host": "httpbin.org",\n    "User-Agent": "curl/7.68.0",\n    "X-Amzn-Trace-Id": "Root=1-63228c4e-0388e1b61255180620195210",\n    "X-Forwarded-Host": "httpbin.org"\n  }\n}\n')),(0,o.kt)("p",null,"Here we go, APISIX Admin API is responding to our requests in the Scaleway Cloud and the request is forwarded to the external service.  "),(0,o.kt)("h3",{id:"deploy-and-run-apisix-ingress-controller"},"Deploy and run APISIX Ingress Controller"),(0,o.kt)("p",null,"Next, we will try to install and verify ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/ingress-controller/getting-started/"},"Apache APISIX Ingress Controller")," is running in the Scaleway Cloud and we do very similar steps as we did for APISIX."),(0,o.kt)("p",null,"To install APISIX Ingress with helm:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ helm repo add apisix https://charts.apiseven.com\n$ helm repo add bitnami https://charts.bitnami.com/bitnami\n$ helm repo update\n\n$ kubectl create ns ingress-apisix\n$ helm install apisix apisix/apisix \\\n  --set gateway.type=LoadBalancer \\\n  --set ingress-controller.enabled=true \\\n  --namespace ingress-apisix \\\n  --set ingress-controller.config.apisix.serviceNamespace=ingress-apisix\n\n")),(0,o.kt)("p",null,"Then, check the deployment status:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get pods -n ingress-apisix\n\nNAME                                         READY   STATUS    RESTARTS   AGE\napisix-5bcf68b548-qrsqb                      1/1     Running   0          1m\napisix-etcd-0                                1/1     Running   0          1m\napisix-etcd-1                                1/1     Running   0          1m\napisix-etcd-2                                1/1     Running   0          1m\napisix-ingress-controller-75bd4d9b9b-7xfn5   1/1     Running   0          1m\n\n$ kubectl get svc -n ingress-apisix\n\napisix-admin                ClusterIP      10.36.120.143   <none>          9180/TCP            82m\napisix-etcd                 ClusterIP      10.47.39.201    <none>          2379/TCP,2380/TCP   82m\napisix-etcd-headless        ClusterIP      None            <none>          2379/TCP,2380/TCP   82m\napisix-gateway              LoadBalancer   10.45.241.11    51.159.206.46   80:30197/TCP        82m\napisix-ingress-controller   ClusterIP      10.47.236.40    <none>          80/TCP              82m\n")),(0,o.kt)("p",null,"Afterward, we can deploy mock server ",(0,o.kt)("inlineCode",{parentName:"p"},"htttbin")," to the default namespace in order to test the ingress controller:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl run httpbin --image kennethreitz/httpbin --port 80\nkubectl expose pod httpbin --port 80\n")),(0,o.kt)("p",null,"Now we are ready to test ingress by creating a new route the same as below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl apply -f - <<EOF\napiVersion: apisix.apache.org/v2\nkind: ApisixRoute\nmetadata:\n  name: httpbin-route\nspec:\n  http:\n    - name: rule1\n      match:\n        hosts:\n          - httpbin.org\n        paths:\n          - "/*"\n      backends:\n        - serviceName: httpbin\n          servicePort: 80\nEOF\n')),(0,o.kt)("p",null,"Finally, we can verify the route is working correctly by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://51.159.206.46:80/get -H \'Host: httpbin.org\'\n{\n  "headers": {\n    "Accept": "*/*",\n    "Host": "httpbin.org",\n    "User-Agent": "curl/7.68.0",\n    "X-Forwarded-Host": "httpbin.org"\n  }\n}\n')),(0,o.kt)("h2",{id:"whats-next"},"What\u2019s next"),(0,o.kt)("p",null,"Up to now, we learnt how to deploy its Apache APISIX and Ingress Controller to Scaleway Cloud by using Kubernetes Kapsule. From this stage, you can create a route, upstream and manage the traffic to your backend services with the available built-in plugins if you want to take advantage of more APISIX's features."),(0,o.kt)("h3",{id:"recommended-content"},"Recommended content"),(0,o.kt)("p",null,"\u2794 Watch Video Tutorial:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/dUOjJkb61so"},"Getting Started with Apache APISIX"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/hMFjhwLMtQ8"},"APIs security with Apache APISIX"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/aWzo0ysH__c"},"Implementing resilient applications with API Gateway (Circuit breaker)"),"."))),(0,o.kt)("p",null,"\u2794 Read the blog posts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://dev.to/apisix/implementing-resilient-applications-with-api-gateway-health-check-338c"},"Implementing resilient applications with API Gateway (Health Check)"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://dev.to/apisix/overview-of-apache-apisix-api-gateway-plugins-2m8o"},"Overview of Apache APISIX API Gateway Plugins"),"."))),(0,o.kt)("h3",{id:"community\ufe0f"},"Community\u2935\ufe0f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\ud83d\ude4b ",(0,o.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/general/join/"},"Join the Apache APISIX Community")),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udc26 ",(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/ApacheAPISIX"},"Follow us on Twitter")),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udcdd ",(0,o.kt)("a",{parentName:"li",href:"https://join.slack.com/t/the-asf/shared_invite/zt-vlfbf7ch-HkbNHiU_uDlcH_RvaHv9gQ"},"Find us on Slack")),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,o.kt)("a",{parentName:"li",href:"dev@apisix.apache.org"},"Mail to us")," with your questions.")))}u.isMDXComponent=!0}}]);