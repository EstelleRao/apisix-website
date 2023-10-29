"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[82312],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>N});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),d=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=d(t.components);return a.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),m=d(n),N=r,c=m["".concat(o,".").concat(N)]||m[N]||k[N]||l;return n?a.createElement(c,i(i({ref:e},u),{},{components:n})):a.createElement(c,i({ref:e},u))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33306:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const l={title:"openid-connect",keywords:["APISIX","API Gateway","OpenID Connect","OIDC"],description:"OpenID Connect\uff08OIDC\uff09\u662f\u57fa\u4e8e OAuth 2.0 \u7684\u8eab\u4efd\u8ba4\u8bc1\u534f\u8bae\uff0cAPISIX \u53ef\u4ee5\u4e0e\u652f\u6301\u8be5\u534f\u8bae\u7684\u8eab\u4efd\u8ba4\u8bc1\u670d\u52a1\u5bf9\u63a5\uff0c\u5982 Okta\u3001Keycloak\u3001Ory Hydra\u3001Authing \u7b49\uff0c\u5b9e\u73b0\u5bf9\u5ba2\u6237\u7aef\u8bf7\u6c42\u7684\u8eab\u4efd\u8ba4\u8bc1\u3002"},i=void 0,p={unversionedId:"plugins/openid-connect",id:"version-2.15/plugins/openid-connect",isDocsHomePage:!1,title:"openid-connect",description:"OpenID Connect\uff08OIDC\uff09\u662f\u57fa\u4e8e OAuth 2.0 \u7684\u8eab\u4efd\u8ba4\u8bc1\u534f\u8bae\uff0cAPISIX \u53ef\u4ee5\u4e0e\u652f\u6301\u8be5\u534f\u8bae\u7684\u8eab\u4efd\u8ba4\u8bc1\u670d\u52a1\u5bf9\u63a5\uff0c\u5982 Okta\u3001Keycloak\u3001Ory Hydra\u3001Authing \u7b49\uff0c\u5b9e\u73b0\u5bf9\u5ba2\u6237\u7aef\u8bf7\u6c42\u7684\u8eab\u4efd\u8ba4\u8bc1\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.15/plugins/openid-connect.md",sourceDirName:"plugins",slug:"/plugins/openid-connect",permalink:"/zh/docs/apisix/2.15/plugins/openid-connect",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/2.15/docs/zh/latest/plugins/openid-connect.md",tags:[],version:"2.15",frontMatter:{title:"openid-connect",keywords:["APISIX","API Gateway","OpenID Connect","OIDC"],description:"OpenID Connect\uff08OIDC\uff09\u662f\u57fa\u4e8e OAuth 2.0 \u7684\u8eab\u4efd\u8ba4\u8bc1\u534f\u8bae\uff0cAPISIX \u53ef\u4ee5\u4e0e\u652f\u6301\u8be5\u534f\u8bae\u7684\u8eab\u4efd\u8ba4\u8bc1\u670d\u52a1\u5bf9\u63a5\uff0c\u5982 Okta\u3001Keycloak\u3001Ory Hydra\u3001Authing \u7b49\uff0c\u5b9e\u73b0\u5bf9\u5ba2\u6237\u7aef\u8bf7\u6c42\u7684\u8eab\u4efd\u8ba4\u8bc1\u3002"},sidebar:"version-2.15/docs",previous:{title:"wolf-rbac",permalink:"/zh/docs/apisix/2.15/plugins/wolf-rbac"},next:{title:"hmac-auth",permalink:"/zh/docs/apisix/2.15/plugins/hmac-auth"}},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",children:[{value:"\u4ee4\u724c\u5185\u7701",id:"\u4ee4\u724c\u5185\u7701",children:[]},{value:"\u516c\u94a5\u5185\u7701",id:"\u516c\u94a5\u5185\u7701",children:[]}]},{value:"\u6545\u969c\u6392\u9664",id:"\u6545\u969c\u6392\u9664",children:[]}],d={toc:o};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://openid.net/connect/"},"OpenID Connect"),"\uff08OIDC\uff09\u662f\u57fa\u4e8e OAuth 2.0 \u7684\u8eab\u4efd\u8ba4\u8bc1\u534f\u8bae\uff0cAPISIX \u53ef\u4ee5\u4e0e\u652f\u6301\u8be5\u534f\u8bae\u7684\u8eab\u4efd\u8ba4\u8bc1\u670d\u52a1\u5bf9\u63a5\uff0c\u5982 Okta\u3001Keycloak\u3001Ory Hydra\u3001Authing \u7b49\uff0c\u5b9e\u73b0\u5bf9\u5ba2\u6237\u7aef\u8bf7\u6c42\u7684\u8eab\u4efd\u8ba4\u8bc1\u3002"),(0,r.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"client_id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"OAuth \u5ba2\u6237\u7aef ID\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"client_secret"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"OAuth \u5ba2\u6237\u7aef secret\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"discovery"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u8eab\u4efd\u8ba4\u8bc1\u670d\u52a1\u66b4\u9732\u7684\u670d\u52a1\u53d1\u73b0\u7aef\u70b9\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scope"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},'"openid"'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u8ba4\u8bc1\u7684\u8303\u56f4\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"realm"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},'"apisix"'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0e\u79df\u6237\u6982\u5ff5\u7c7b\u4f3c\uff0c\u4e0d\u540c Realm \u4e4b\u95f4\u662f\u76f8\u4e92\u9694\u79bb\u7684\uff0c\u53ea\u80fd\u7ba1\u7406\u548c\u9a8c\u8bc1\u5b83\u4eec\u6240\u5177\u6709\u7684\u7528\u6237\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bearer_only"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u5c06\u4ec5\u68c0\u67e5\u8bf7\u6c42\u5934\u4e2d\u7684\u4ee4\u724c\uff08Token\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"logout_path"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},'"/logout"'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u767b\u51fa\u8def\u5f84\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"post_logout_redirect_uri"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u767b\u51fa\u63a5\u53e3\u540e\u60f3\u8981\u8df3\u8f6c\u7684 URL\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"redirect_uri"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},'"ngx.var.request_uri"'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u8eab\u4efd\u63d0\u4f9b\u8005\u91cd\u5b9a\u5411\u8fd4\u56de\u7684 URI\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u79d2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ssl_verify"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"[true, false]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u9a8c\u8bc1\u8eab\u4efd\u63d0\u4f9b\u8005\u7684 SSL \u8bc1\u4e66\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"introspection_endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u8eab\u4efd\u670d\u52a1\u5668\u7684\u4ee4\u724c\u8ba4\u8bc1\u7aef\u70b9\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"introspection_endpoint_auth_method"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},'"client_secret_basic"'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee4\u724c\u5185\u7701\u7684\u8ba4\u8bc1\u65b9\u6cd5\u540d\u79f0\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"token_endpoint_auth_method"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee4\u724c\u7aef\u70b9\u7684\u8eab\u4efd\u9a8c\u8bc1\u65b9\u6cd5\u540d\u79f0\u3002\u9ed8\u8ba4\u60c5\u51b5\u5c06\u83b7\u53d6 OP \u6307\u5b9a\u7684\u7b2c\u4e00\u4e2a\u652f\u6301\u7684\u65b9\u6cd5\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"public_key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u9a8c\u8bc1\u4ee4\u724c\u7684\u516c\u94a5\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"use_jwks"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u5219\u4f1a\u4f7f\u7528\u8eab\u4efd\u8ba4\u8bc1\u670d\u52a1\u5668\u7684 JWKS \u7aef\u70b9\u6765\u9a8c\u8bc1\u4ee4\u724c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"use_pkce"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"[true, false]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u5219\u4f7f\u7528 PKEC\uff08Proof Key for Code Exchange\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"token_signing_alg_values_expected"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u5bf9\u4ee4\u724c\u8fdb\u884c\u7b7e\u540d\u7684\u7b97\u6cd5\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"set_access_token_header"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"[true, false]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728\u8bf7\u6c42\u5934\u8bbe\u7f6e\u8bbf\u95ee\u4ee4\u724c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"access_token_in_authorization_header"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"[true, false]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u5c06\u8bbf\u95ee\u4ee4\u724c\u8bbe\u7f6e\u5728\u8bf7\u6c42\u5934\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"td"},"Authorization"),"\uff0c\u5426\u5219\u5c06\u4f7f\u7528\u8bf7\u6c42\u5934\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"td"},"X-Access-Token"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"set_id_token_header"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"[true, false]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5c06 ID \u4ee4\u724c\u8bbe\u7f6e\u5230\u8bf7\u6c42\u5934\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"td"},"X-ID-Token"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"set_userinfo_header"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"[true, false]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5c06\u7528\u6237\u4fe1\u606f\u5bf9\u8c61\u8bbe\u7f6e\u5230\u8bf7\u6c42\u5934\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"td"},"X-Userinfo"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"set_refresh_token_header"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u5e76\u4e14\u5237\u65b0\u4ee4\u724c\u53ef\u7528\u65f6\uff0c\u5219\u4f1a\u5c06\u8be5\u5c5e\u6027\u8bbe\u7f6e\u5728",(0,r.kt)("inlineCode",{parentName:"td"},"X-Refresh-Token"),"\u8bf7\u6c42\u5934\u4e2d\u3002")))),(0,r.kt)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u6559\u7a0b\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2022/07/06/use-keycloak-with-api-gateway-to-secure-apis/"},"\u4f7f\u7528 Keycloak \u4e0e API \u7f51\u5173\u4fdd\u62a4\u4f60\u7684 API")))),(0,r.kt)("p",null,"\u8be5\u63d2\u4ef6\u63d0\u4f9b\u4e24\u79cd\u4f7f\u7528\u573a\u666f\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5e94\u7528\u4e4b\u95f4\u8ba4\u8bc1\u6388\u6743\uff1a\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"bearer_only")," \u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5e76\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"introspection_endpoint")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"public_key")," \u5c5e\u6027\u3002\u8be5\u573a\u666f\u4e0b\uff0c\u8bf7\u6c42\u5934\uff08Header\uff09\u4e2d\u6ca1\u6709\u4ee4\u724c\u6216\u65e0\u6548\u4ee4\u724c\u7684\u8bf7\u6c42\u5c06\u88ab\u62d2\u7edd\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6d4f\u89c8\u5668\u4e2d\u8ba4\u8bc1\u6388\u6743\uff1a\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"bearer_only")," \u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"\u3002\u8ba4\u8bc1\u6210\u529f\u540e\uff0c\u8be5\u63d2\u4ef6\u53ef\u83b7\u5f97\u5e76\u7ba1\u7406 Cookie \u4e2d\u7684\u4ee4\u724c\uff0c\u540e\u7eed\u8bf7\u6c42\u5c06\u4f7f\u7528\u8be5\u4ee4\u724c\u3002"))),(0,r.kt)("h3",{id:"\u4ee4\u724c\u5185\u7701"},"\u4ee4\u724c\u5185\u7701"),(0,r.kt)("p",null,"\u4ee4\u724c\u5185\u7701\u662f\u901a\u8fc7\u9488\u5bf9 OAuth 2.0 \u6388\u6743\u7684\u670d\u52a1\u5668\u6765\u9a8c\u8bc1\u4ee4\u724c\u53ca\u76f8\u5173\u8bf7\u6c42\uff0c\u8be6\u60c5\u8bf7\u9605\u8bfb ",(0,r.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/token-introspection-endpoint/"},"Token Introspection"),"\u3002"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u9700\u8981\u5728\u8eab\u4efd\u8ba4\u8bc1\u670d\u52a1\u5668\u4e2d\u521b\u5efa\u53d7\u4fe1\u4efb\u7684\u5ba2\u6237\u7aef\uff0c\u5e76\u751f\u6210\u7528\u4e8e\u5185\u7701\u7684\u6709\u6548\u4ee4\u724c\uff08JWT\uff09\u3002\u4e0b\u56fe\u662f\u901a\u8fc7\u7f51\u5173\u8fdb\u884c\u4ee4\u724c\u5185\u7701\u7684\u6210\u529f\u793a\u4f8b\u6d41\u7a0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/oauth-1.png",alt:"token introspection"})),(0,r.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u662f\u5728\u8def\u7531\u4e0a\u542f\u7528\u63d2\u4ef6\u3002\u8be5\u8def\u7531\u5c06\u901a\u8fc7\u5185\u7701\u8bf7\u6c42\u5934\u4e2d\u63d0\u4f9b\u7684\u4ee4\u724c\u6765\u4fdd\u62a4\u4e0a\u6e38\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "uri": "/get",\n  "plugins":{\n    "openid-connect":{\n      "client_id": "${CLIENT_ID}",\n      "client_secret": "${CLIENT_SECRET}",\n      "discovery": "${DISCOVERY_ENDPOINT}",\n      "introspection_endpoint": "${INTROSPECTION_ENDPOINT}",\n      "bearer_only": true,\n      "realm": "master",\n      "introspection_endpoint_auth_method": "client_secret_basic"\n    }\n  },\n  "upstream":{\n    "type": "roundrobin",\n    "nodes":{\n      "httpbin.org:443":1\n    }\n  }\n}\'\n')),(0,r.kt)("p",null,"\u4ee5\u4e0b\u547d\u4ee4\u53ef\u7528\u4e8e\u8bbf\u95ee\u65b0\u8def\u7531\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i -X GET http://127.0.0.1:9080/get -H "Authorization: Bearer {JWT_TOKEN}"\n')),(0,r.kt)("p",null,"\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u63d2\u4ef6\u5f3a\u5236\u5728\u8bf7\u6c42\u5934\u4e2d\u8bbe\u7f6e\u8bbf\u95ee\u4ee4\u724c\u548c Userinfo \u5bf9\u8c61\u3002"),(0,r.kt)("p",null,"\u5f53 OAuth 2.0 \u6388\u6743\u670d\u52a1\u5668\u8fd4\u56de\u7ed3\u679c\u91cc\u9664\u4e86\u4ee4\u724c\u4e4b\u5916\u8fd8\u6709\u8fc7\u671f\u65f6\u95f4\uff0c\u5176\u4e2d\u4ee4\u724c\u5c06\u5728 APISIX \u4e2d\u7f13\u5b58\u76f4\u81f3\u8fc7\u671f\u3002\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u8003\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/zmartzone/lua-resty-openidc"},"lua-resty-openidc")," \u7684\u6587\u6863\u548c\u6e90\u4ee3\u7801\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"exp")," \u5b57\u6bb5\u7684\u5b9a\u4e49\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc7662#section-2.2"},"Introspection Response"),"\u3002")),(0,r.kt)("h3",{id:"\u516c\u94a5\u5185\u7701"},"\u516c\u94a5\u5185\u7701"),(0,r.kt)("p",null,"\u9664\u4e86\u4ee4\u724c\u5185\u7701\u5916\uff0c\u8fd8\u53ef\u4ee5\u4f7f\u7528 JWT \u4ee4\u724c\u7684\u516c\u94a5\u8fdb\u884c\u9a8c\u8bc1\u3002\u5982\u679c\u4f7f\u7528\u4e86\u516c\u5171\u5bc6\u94a5\u548c\u4ee4\u724c\u5185\u7701\u7aef\u70b9\uff0c\u5c31\u4f1a\u6267\u884c\u516c\u5171\u5bc6\u94a5\u5de5\u4f5c\u6d41\uff0c\u800c\u4e0d\u662f\u901a\u8fc7\u8eab\u4efd\u670d\u52a1\u5668\u8fdb\u884c\u9a8c\u8bc1\u3002\u8be5\u65b9\u5f0f\u9002\u53ef\u7528\u4e8e\u51cf\u5c11\u989d\u5916\u7684\u7f51\u7edc\u8c03\u7528\u5e76\u52a0\u5feb\u8ba4\u8bc1\u8fc7\u7a0b\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u5c06\u516c\u94a5\u6dfb\u52a0\u5230\u8def\u7531\u4e2d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "uri": "/get",\n  "plugins":{\n    "openid-connect":{\n      "client_id": "${CLIENT_ID}",\n      "client_secret": "${CLIENT_SECRET}",\n      "discovery": "${DISCOVERY_ENDPOINT}",\n      "bearer_only": true,\n      "realm": "master",\n      "token_signing_alg_values_expected": "RS256",\n      "public_key": "-----BEGIN PUBLIC KEY-----\n      {public_key}\n      -----END PUBLIC KEY-----"\n    }\n  },\n  "upstream":{\n    "type": "roundrobin",\n    "nodes":{\n      "httpbin.org:443":1\n    }\n  }\n}\'\n')),(0,r.kt)("h4",{id:"\u901a\u8fc7-oidc-\u4f9d\u8d56\u65b9\u8ba4\u8bc1\u6d41\u7a0b\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1"},"\u901a\u8fc7 OIDC \u4f9d\u8d56\u65b9\u8ba4\u8bc1\u6d41\u7a0b\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1"),(0,r.kt)("p",null,"\u5f53\u4e00\u4e2a\u8bf7\u6c42\u5728\u8bf7\u6c42\u5934\u6216\u4f1a\u8bdd Cookie \u4e2d\u4e0d\u5305\u542b\u8bbf\u95ee\u4ee4\u724c\u65f6\uff0c\u8be5\u63d2\u4ef6\u53ef\u4ee5\u5145\u5f53 OIDC \u4f9d\u8d56\u65b9\u5e76\u91cd\u5b9a\u5411\u5230\u8eab\u4efd\u63d0\u4f9b\u8005\u7684\u6388\u6743\u7aef\u70b9\u4ee5\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-core-1_0.html#CodeFlowAuth"},"OIDC authorization code flow"),"\u3002"),(0,r.kt)("p",null,"\u4e00\u65e6\u7528\u6237\u901a\u8fc7\u8eab\u4efd\u63d0\u4f9b\u8005\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\uff0c\u63d2\u4ef6\u5c06\u4ee3\u8868\u7528\u6237\u4ece\u8eab\u4efd\u63d0\u4f9b\u8005\u83b7\u53d6\u548c\u7ba1\u7406\u8bbf\u95ee\u4ee4\u724c\u548c\u66f4\u591a\u4fe1\u606f\u3002\u8be5\u4fe1\u606f\u5f53\u524d\u5b58\u50a8\u5728\u4f1a\u8bdd Cookie \u4e2d\uff0c\u8be5\u63d2\u4ef6\u5c06\u4f1a\u8bc6\u522b Cookie \u5e76\u4f7f\u7528\u5176\u4e2d\u7684\u4fe1\u606f\uff0c\u4ee5\u907f\u514d\u518d\u6b21\u6267\u884c\u8ba4\u8bc1\u6d41\u7a0b\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u662f\u5c06\u6b64\u64cd\u4f5c\u6a21\u5f0f\u6dfb\u52a0\u5230 Route\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "uri": "/get",\n  "plugins": {\n    "openid-connect": {\n      "client_id": "${CLIENT_ID}",\n      "client_secret": "${CLIENT_SECRET}",\n      "discovery": "${DISCOVERY_ENDPOINT}",\n      "bearer_only": false,\n      "realm": "master"\n    }\n  },\n  "upstream": {\n    "type": "roundrobin",\n    "nodes": {\n      "httpbin.org:443": 1\n    }\n  }\n}\'\n')),(0,r.kt)("p",null,"\u5728\u4ee5\u4e0a\u793a\u4f8b\u4e2d\uff0c\u8be5\u63d2\u4ef6\u53ef\u4ee5\u5f3a\u5236\u5728\u914d\u7f6e\u7684\u8bf7\u6c42\u5934\u4e2d\u8bbe\u7f6e\u8bbf\u95ee\u4ee4\u724c\u3001ID \u4ee4\u724c\u548c UserInfo \u5bf9\u8c61\u3002"),(0,r.kt)("h2",{id:"\u6545\u969c\u6392\u9664"},"\u6545\u969c\u6392\u9664"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c APISIX \u65e0\u6cd5\u89e3\u6790\u6216\u8005\u8fde\u63a5\u5230\u8eab\u4efd\u8ba4\u8bc1\u670d\u52a1\uff08\u5982 Okta\u3001Keycloak\u3001Authing \u7b49\uff09\uff0c\u8bf7\u68c0\u67e5\u6216\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"./conf/config.yaml"),"\uff09\u4e2d\u7684 DNS \u8bbe\u7f6e\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u9047\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"the error request to the redirect_uri path, but there's no session state found")," \u7684\u9519\u8bef\uff0c\u8bf7\u68c0\u67e5 ",(0,r.kt)("inlineCode",{parentName:"p"},"redirect_uri")," \u53c2\u6570\u914d\u7f6e\uff1aAPISIX \u4f1a\u5411\u8eab\u4efd\u8ba4\u8bc1\u670d\u52a1\u53d1\u8d77\u8eab\u4efd\u8ba4\u8bc1\u8bf7\u6c42\uff0c\u8ba4\u8bc1\u670d\u52a1\u5b8c\u6210\u8ba4\u8bc1\u3001\u6388\u6743\u540e\uff0c\u4f1a\u643a\u5e26 ID Token \u548c AccessToken \u91cd\u5b9a\u5411\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"redirect_uri")," \u6240\u914d\u7f6e\u7684\u5730\u5740\uff08\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:9080/callback"),"\uff09\uff0c\u63a5\u7740\u518d\u6b21\u8fdb\u5165 APISIX \u5e76\u5728 OIDC \u903b\u8f91\u4e2d\u5b8c\u6210 Token \u4ea4\u6362\u7684\u529f\u80fd\u3002\u56e0\u6b64 ",(0,r.kt)("inlineCode",{parentName:"p"},"redirect_uri")," \u9700\u8981\u6ee1\u8db3\u4ee5\u4e0b\u6761\u4ef6\uff1a"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"redirect_uri")," \u9700\u8981\u80fd\u88ab\u5f53\u524d APISIX \u6240\u5728\u8def\u7531\u6355\u83b7\uff0c\u6bd4\u5982\u5f53\u524d\u8def\u7531\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"uri")," \u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"/api/v1/*"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"redirect_uri")," \u53ef\u4ee5\u586b\u5199\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"/api/v1/callback"),"\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"redirect_uri"),"\uff08",(0,r.kt)("inlineCode",{parentName:"li"},"scheme:host"),"\uff09\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"scheme")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"host")," \u662f\u8eab\u4efd\u8ba4\u8bc1\u670d\u52a1\u89c6\u89d2\u4e0b\u8bbf\u95ee APISIX \u6240\u9700\u7684\u503c\u3002")))}u.isMDXComponent=!0}}]);