"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9845],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),u=r,m=h["".concat(s,".").concat(u)]||h[u]||d[u]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},54706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(25773),r=(n(27378),n(35318));const o={title:"APISIX integrates with Ory Hydra",authors:[{name:"Fei Han",title:"Technical Writer",url:"https://github.com/hf400159",image_url:"https://github.com/hf400159.png"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4"}],keywords:["Apache APISIX","API Gateway","Authentication","Hydra","OpenID Connect","OIDC"],description:"This article describes the API gateway Apache APISIX for centralized authentication via the OpenID Connect plugin Hydra integration.",tags:["Authentication","Plugins"],image:"https://static.apiseven.com/2022/blog/0818/plugins/ory.png"},i=void 0,l={permalink:"/blog/2022/07/04/apisix-integrates-with-hydra",source:"@site/blog/2022/07/04/apisix-integrates-with-hydra.md",title:"APISIX integrates with Ory Hydra",description:"This article describes the API gateway Apache APISIX for centralized authentication via the OpenID Connect plugin Hydra integration.",date:"2022-07-04T00:00:00.000Z",formattedDate:"July 4, 2022",tags:[{label:"Authentication",permalink:"/blog/tags/authentication"},{label:"Plugins",permalink:"/blog/tags/plugins"}],readingTime:8.25,truncated:!0,authors:[{name:"Fei Han",title:"Technical Writer",url:"https://github.com/hf400159",image_url:"https://github.com/hf400159.png",imageURL:"https://github.com/hf400159.png"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4",imageURL:"https://avatars.githubusercontent.com/u/39793568?v=4"}],prevItem:{title:"How to monitor Apache APISIX with DataAnt",permalink:"/blog/2022/07/05/use-dataant-to-monitor-apisix"},nextItem:{title:"Getting Started with APISIX Test Cases",permalink:"/blog/2022/06/27/getting-start-with-apisix-test-cases"}},s={authorsImageUrls:[void 0,void 0]},p=[{value:"Background Information",id:"background-information",children:[{value:"Apache APISIX",id:"apache-apisix",children:[],level:3},{value:"ORY Hydra",id:"ory-hydra",children:[],level:3}],level:2},{value:"Introduction",id:"introduction",children:[],level:2},{value:"Operation steps",id:"operation-steps",children:[{value:"Step 1: Create and deploy the database",id:"step-1-create-and-deploy-the-database",children:[],level:3},{value:"Step 2: Deploy Hydra",id:"step-2-deploy-hydra",children:[],level:3},{value:"Step 3: Deploy login and authentication programs",id:"step-3-deploy-login-and-authentication-programs",children:[],level:3},{value:"Step 4: Execute the OAuth 2.0 Authorization Code Flow",id:"step-4-execute-the-oauth-20-authorization-code-flow",children:[],level:3},{value:"Step 5: Start APISIX and configure routing",id:"step-5-start-apisix-and-configure-routing",children:[],level:3},{value:"Step 6: Visit the webpage",id:"step-6-visit-the-webpage",children:[],level:3}],level:2},{value:"Summary",id:"summary",children:[],level:2},{value:"Related reading",id:"related-reading",children:[],level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This article describes how Apache APISIX integrates with Ory Hydra to implement centralized authentication.")),(0,r.kt)("h2",{id:"background-information"},"Background Information"),(0,r.kt)("h3",{id:"apache-apisix"},"Apache APISIX"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix"},"Apache APISIX")," is an open source cloud native API gateway. As an API gateway, it has the characteristics of dynamic, real-time, and high performance. It provides rich traffic management functions such as load balancing, dynamic upstream, gray-scale publishing, service fusing, identity authentication and observability. You can use APISIX to handle the traditional north-south traffic and the east-west traffic between services. It can also be used as a K8s ingress controller. Thanks to the full dynamic design of APISIX, configuration changes can be made at any time without restarting the service."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"openid-connect")," plugin of APISIX supports the OpenID Connect protocol. Users can use this plugin to allow Apache APISIX to connect with many authentication service providers and deploy it in enterprises as a centralized authentication gateway."),(0,r.kt)("h3",{id:"ory-hydra"},"ORY Hydra"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ory/hydra"},"Ory Hydra")," is one of the identity providers that supports the OAuth 2.0 and OpenID Connect protocols, based on the OAuth 2.0 authorization framework and the Open ID Connect Core 1.0 framework, with both open source and cloud native features. It can be integrated with any login system, and through OAuth 2.0 Access, Refresh, and ID Tokens, third parties can easily access your API, enabling users to interact with any application anytime, anywhere."),(0,r.kt)("p",null,"Ory Hydra is written in Go language and provides SDKs for almost all languages, including Dart, .NET, Go, Java, PHP, Python, Ruby, Rust, and Typescript. It works with any login system, and the login experience can be easily customized."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"OpenID is a centralized authentication mode, and it is a decentralized identity authentication system. The advantage of using OpenID is that users only need to register and log in on one OpenID identity provider's website and use one account and password information to access different applications."),(0,r.kt)("p",null,"With the ",(0,r.kt)("inlineCode",{parentName:"p"},"openid-connect")," plugin supported by APISIX, we can integrate with authenticators supporting the OpenID Connect protocol. For example: Ory Hydra. For more information, please refer to: ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2021/08/25/using-the-apache-apisix-openid-connect-plugin-for-centralized-authentication/#what-is-authentication"},"Centralized Identity Authentication"),"."),(0,r.kt)("p",null,'One of the biggest advantages of Ory Hydra is that it implements the OAuth and OpenID Connect standards instead of forcing you to use "Hydra user management" (login, logout, profile management, registration), a specific template engine, or a predefined front end.'),(0,r.kt)("p",null,"It allows to use the authentication mechanisms required by your program (token-based 2FA, SMS 2FA, etc.) and implement user management and login in your technology stack. Of course, you can also use existing solutions, such as ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/go-authboss/authboss"},"authboss"),". It gives you all the great features of OAuth 2.0 and OpenID Connect while being minimally intrusive to your business logic and technology stack."),(0,r.kt)("p",null,"OAuth 2.0 can be used in many environments for various purposes. The following information may help you decide whether OAuth 2.0 and Hydra are suitable for a certain scenario:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"enable third-party solutions to access your APIs."),(0,r.kt)("li",{parentName:"ol"},"be an Identity Provider like Google, Facebook, or Microsoft."),(0,r.kt)("li",{parentName:"ol"},"enable your browser, mobile, or wearable applications to access your APIs: Running an OAuth2 Provider can work great for this. You don't have to store passwords on the device and can revoke access tokens at any time."),(0,r.kt)("li",{parentName:"ol"},"you want to limit what type of information your backend services can read from each other. For example, the comment service should only be allowed to fetch user profile updates but shouldn't be able to read user passwords.")),(0,r.kt)("h2",{id:"operation-steps"},"Operation steps"),(0,r.kt)("p",null,"Next, I will show you how APISIX integrates with Hydra using a real example. In this example, Docker will be used to running the required environment. Please install ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"Docker")," before doing this."),(0,r.kt)("h3",{id:"step-1-create-and-deploy-the-database"},"Step 1: Create and deploy the database"),(0,r.kt)("p",null,"For quick deployment of the test environment, we will use Docker to run PostgreSQL as Hydra's database. It's not recommended to use Docker to run the database in production."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker network create hydraguide && \\\ndocker run \\\n  --network hydraguide \\\n  --name ory-hydra-example--postgres \\\n  -e POSTGRES_USER=hydra \\\n  -e POSTGRES_PASSWORD=secret \\\n  -e POSTGRES_DB=hydra \\\n  -d postgres:9.6\n")),(0,r.kt)("p",null,"The above command will create a network named ",(0,r.kt)("inlineCode",{parentName:"p"},"hydraguide")," and start a Postgres instance named ",(0,r.kt)("inlineCode",{parentName:"p"},"ory-hydra-example--postgres")," which creates the database ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra"),", the user ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra"),", and the user password ",(0,r.kt)("inlineCode",{parentName:"p"},"secret"),"."),(0,r.kt)("h3",{id:"step-2-deploy-hydra"},"Step 2: Deploy Hydra"),(0,r.kt)("p",null,"This step will map ",(0,r.kt)("inlineCode",{parentName:"p"},"4444")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"5444")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"4445")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"5445")," ports, please make sure that these ports are not used."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The system key can only be set for the new database, and does not support key rotation. This key is used to encrypt the database and needs to be set to the same value each time the process restarts. You can use ",(0,r.kt)("inlineCode",{parentName:"li"},"/dev/urandom")," to generate keys. But make sure that the key must be the same when you define it. For example, you can store the value somewhere:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"export SECRETS_SYSTEM=$(export LC_CTYPE=C; cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)\n")),(0,r.kt)("p",null,"Set Hydra's database URL to point to your Postgres instance by configuring an environment variable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"export DSN=postgres://hydra:secret@ory-hydra-example--postgres:5432/hydra?sslmode=disable\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Ory Hydra does not migrate SQL automatically, so you need to manually perform the database migration.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull oryd/hydra:v1.10.6 && \\\ndocker run -it --rm \\\n  --network hydraguide \\\n  oryd/hydra:v1.10.6 \\\n  migrate sql --yes $DSN\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Run the Hydra server with the following command. For more information, please refer to ",(0,r.kt)("a",{parentName:"li",href:"https://www.ory.sh/docs/hydra/configure-deploy#deploy-ory-hydra"},"deploy-ory-hydra"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d \\\n  --name ory-hydra-example--hydra \\\n  --network hydraguide \\\n  -p 5444:4444 \\\n  -p 5445:4445 \\\n  -e SECRETS_SYSTEM=$SECRETS_SYSTEM \\\n  -e DSN=$DSN \\\n  -e URLS_SELF_ISSUER=https://localhost:5444/ \\\n  -e URLS_CONSENT=http://localhost:9020/consent \\\n  -e URLS_LOGIN=http://localhost:9020/login \\\n  oryd/hydra:v1.10.6 serve all\n")),(0,r.kt)("p",null,"You can view Hydra logs using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker logs ory-hydra-example--hydra\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If the Hydra password is not specified, you can find the password information in the log. If you forget your password, you will not be able to restart Hydra."))),(0,r.kt)("p",null,"You can also use the following commands to view Hydra related introductions and operation commands."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -it --rm --entrypoint hydra oryd/hydra:v1.10.6 help serve\n")),(0,r.kt)("h3",{id:"step-3-deploy-login-and-authentication-programs"},"Step 3: Deploy login and authentication programs"),(0,r.kt)("p",null,"Login Provider and Consent Provider can be two separate web services. Hydra provides sample programs that combine both functions in one application. Next, we'll deploy the application using Docker."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull oryd/hydra-login-consent-node:v1.10.6 && \\\ndocker run -d \\\n  --name ory-hydra-example--consent \\\n  -p 9020:3000 \\\n  --network hydraguide \\\n  -e HYDRA_ADMIN_URL=https://ory-hydra-example--hydra:4445 \\\n  -e NODE_TLS_REJECT_UNAUTHORIZED=0 \\\n  oryd/hydra-login-consent-node:v1.10.6\n")),(0,r.kt)("p",null,"You can use the following command to check whether the program runs normally:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker logs ory-hydra-example--consent\n")),(0,r.kt)("p",null,"Returns the result normally:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"> hydra-login-consent-logout@0.0.0 serve /usr/src/app\n> node lib/app.js\n\nListening on http://0.0.0.0:3000\n")),(0,r.kt)("h3",{id:"step-4-execute-the-oauth-20-authorization-code-flow"},"Step 4: Execute the OAuth 2.0 Authorization Code Flow"),(0,r.kt)("p",null,"Hydra supports the ability to set an OAuth 2.0 consumer and OAuth 2.0 callback URL via the CLI, and is a third-party application that requests access to user resources on the server."),(0,r.kt)("p",null,"This information is required when configuring the APISIX ",(0,r.kt)("inlineCode",{parentName:"p"},"openid-connect")," plugin:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")," corresponds to the ",(0,r.kt)("inlineCode",{parentName:"li"},"client_id")," configure by the plugin in the following route."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"secret")," corresponds to the ",(0,r.kt)("inlineCode",{parentName:"li"},"client_secret")," configured by the plugin in the following route."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scope")," corresponds to the ",(0,r.kt)("inlineCode",{parentName:"li"},"scope")," configured by the plugin in the following route.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --rm -it \\\n  -e HYDRA_ADMIN_URL=https://ory-hydra-example--hydra:4445 \\\n  -- network hydraguide \\\n  oryd/hydra:v1.10.6 \\\n  clients create --skip-tls-verify \\\n    --id facebook-photo-backup \\\n    --secret some-secret \\\n    --grant-types authorization_code,refresh_token,client_credentials,implicit \\\n    --response-types token,code,id_token \\\n    --scope openid,offline,photos.read \\\n    --callbacks http://127.0.0.1:9010/callback\n")),(0,r.kt)("p",null,"The following example will perform an OAuth 2.0 authorization flow. To simplify this, the Hydra CLI provides a helper command called ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra token user"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"}," docker run --rm -it \\\n  --network hydraguide \\\n  -p 9010:9010 \\\n  oryd/hydra:v1.10.6 \\\n  token user --skip-tls-verify \\\n    --port 9010 \\\n    --auth-url https://localhost:5444/oauth2/auth \\\n    --token-url https://localhost:5444/oauth2/token \\\n    --client-id facebook-photo-backup \\\n    --client-secret some-secret \\\n    --scope openid,offline,photos.read\n")),(0,r.kt)("p",null,"If the returned result is as follows, the configuration is normal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Setting up home route on http://127.0.0.1:9010/\nSetting up callback listener on http://127.0.0.1:9010/callback\nPress ctrl + c on Linux / Windows or cmd + c on OSX to end the process.\nIf your browser doesn't open automatically, navigate to:\n\n        http://127.0.0.1:9010/\n")),(0,r.kt)("p",null,"This step will start a user login program, we will use this program in the next step."),(0,r.kt)("h3",{id:"step-5-start-apisix-and-configure-routing"},"Step 5: Start APISIX and configure routing"),(0,r.kt)("p",null,"If you do not have APISIX installed, please refer to: ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/next/installation-guide"},"Installation"),"."),(0,r.kt)("p",null,"Once installed, just create routes and configure ",(0,r.kt)("inlineCode",{parentName:"p"},"openid-connect")," plugin. In order to verify the effect more intuitively, we also need to start an NGINX service as upstream, you can also use existing upstream services."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"APISIX in this example is installed on the host. If it is started with Docker, there may be network problems."))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First create an NGINX upstream using Docker.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d --name test-nginx -p 8081:80 nginx\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Create a route and configure the ",(0,r.kt)("inlineCode",{parentName:"li"},"openid-connect")," plugin with the following commands.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"client_id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"client_secret")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"scope")," are the IDs set in step four. You can refer to Preparing for ",(0,r.kt)("a",{parentName:"p",href:"https://www.ory.sh/docs/hydra/production#exposing-administrative-and-public-api-endpoints"},"Production for additional")," information. From the above link, we can see that the address of ",(0,r.kt)("inlineCode",{parentName:"p"},"discovery")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"https://{IP:Port}/.well-known/openid-configuration"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri":"/*",\n    "plugins":{\n        "openid-connect":{\n            "client_id":"facebook-photo-backup",\n            "client_secret":"some-secret",\n            "discovery":"https://127.0.0.1:5444/.well-known/openid-configuration",\n            "scope":"openid",\n            "token_endpoint_auth_method": "client_secret_basic",\n            "bearer_only": false,\n            "redirect_uri":"http://127.0.0.1:9080/callback"\n        }\n    },\n    "upstream":{\n        "type":"roundrobin",\n        "nodes":{\n            "127.0.0.1:8081":1\n        }\n    }\n}\'\n')),(0,r.kt)("h3",{id:"step-6-visit-the-webpage"},"Step 6: Visit the webpage"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter ",(0,r.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:9080/index.html")," in the browser. Since the ",(0,r.kt)("inlineCode",{parentName:"p"},"openid-connect")," plugin has been enabled, the page is redirected to the login page, enter the default account password into the user authentication program."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0704/1.png",alt:"network-error/Authentication page"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the authentication protocol and click ",(0,r.kt)("inlineCode",{parentName:"p"},"Allow Access"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0704/2.png",alt:"network-error/select page"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After successful verification, you can access the upstream service page."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0704/3.png",alt:"network-error/upstream page"})))),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"This article mainly introduces how Hydra integrates with APISIX and the application scenarios of Hydra. You only need to install Hydra related programs on the server, and you can use it directly as your authentication program."),(0,r.kt)("h2",{id:"related-reading"},"Related reading"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://apisix.apache.org/blog/2021/08/16/using-the-apache-apisix-openid-connect-plugin-for-centralized-authentication"},"Using the Apache APISIX OpenID Connect Plugin for Okta Centralized Authentication")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://apisix.apache.org/blog/2021/08/25/using-the-apache-apisix-openid-connect-plugin-for-centralized-authentication"},"Centralized authentication using the OpenID Connect plug-in for Apache APISIX"))))}d.isMDXComponent=!0}}]);