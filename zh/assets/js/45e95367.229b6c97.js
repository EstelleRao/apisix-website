"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[55827],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,g=u["".concat(i,".").concat(m)]||u[m]||c[m]||l;return t?r.createElement(g,p(p({ref:n},d),{},{components:t})):r.createElement(g,p({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,p=new Array(l);p[0]=u;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var s=2;s<l;s++)p[s]=t[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},14161:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var r=t(87462),a=(t(67294),t(3905));const l={title:"grpc-transcode",keywords:["APISIX","Plugin","gRPC Web","grpc-web"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `grpc-transcode` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},p=void 0,o={unversionedId:"plugins/grpc-transcode",id:"version-3.1/plugins/grpc-transcode",isDocsHomePage:!1,title:"grpc-transcode",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `grpc-transcode` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.1/plugins/grpc-transcode.md",sourceDirName:"plugins",slug:"/plugins/grpc-transcode",permalink:"/zh/docs/apisix/plugins/grpc-transcode",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.1/docs/zh/latest/plugins/grpc-transcode.md",tags:[],version:"3.1",frontMatter:{title:"grpc-transcode",keywords:["APISIX","Plugin","gRPC Web","grpc-web"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `grpc-transcode` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},sidebar:"version-3.1/docs",previous:{title:"proxy-rewrite",permalink:"/zh/docs/apisix/plugins/proxy-rewrite"},next:{title:"grpc-web",permalink:"/zh/docs/apisix/plugins/grpc-web"}},i=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[{value:"pb_option \u7684\u9009\u9879",id:"pb_option-\u7684\u9009\u9879",children:[]}]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u5728\u8fd4\u56de\u4f53\u4e2d\u5c55\u793a <code>grpc-status-details-bin</code>",id:"\u5728\u8fd4\u56de\u4f53\u4e2d\u5c55\u793a-grpc-status-details-bin",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],s={toc:i};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"grpc-transcode")," \u63d2\u4ef6\u53ef\u4ee5\u5728 HTTP \u548c gRPC \u8bf7\u6c42\u4e4b\u95f4\u8fdb\u884c\u8f6c\u6362\u3002"),(0,a.kt)("p",null,"APISIX \u63a5\u6536 HTTP \u8bf7\u6c42\u540e\uff0c\u9996\u5148\u5bf9\u8bf7\u6c42\u8fdb\u884c\u8f6c\u7801\uff0c\u5e76\u5c06\u8f6c\u7801\u540e\u7684\u8bf7\u6c42\u8f6c\u53d1\u5230 gRPC \u670d\u52a1\uff0c\u83b7\u53d6\u54cd\u5e94\u5e76\u4ee5 HTTP \u683c\u5f0f\u5c06\u5176\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u3002"),(0,a.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"proto_id"),(0,a.kt)("td",{parentName:"tr",align:null},"string/integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"service"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"method"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"deadline"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pb_option"),(0,a.kt)("td",{parentName:"tr",align:null},"array[string(",(0,a.kt)("a",{parentName:"td",href:"#pb_option-%E7%9A%84%E9%80%89%E9%A1%B9"},"pb_option_def"),")]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"show_status_in_body"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"status_detail_type"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h3",{id:"pb_option-\u7684\u9009\u9879"},"pb_option \u7684\u9009\u9879"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"enum as result"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"enum_as_name"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"enum_as_value"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"int64 as result"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"int64_as_number"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"int64_as_string"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"int64_as_hexstring"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"default values"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"auto_default_values"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"no_default_values"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"use_default_values"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"use_default_metatable"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"hooks"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"enable_hooks"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"disable_hooks"))))),(0,a.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,a.kt)("p",null,"\u5728\u542f\u7528\u63d2\u4ef6\u4e4b\u524d\uff0c\u4f60\u5fc5\u987b\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},".proto")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},".pb")," \u6587\u4ef6\u7684\u5185\u5bb9\u6dfb\u52a0\u5230 APISIX\u3002"),(0,a.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"/admin/protos/id")," \u63a5\u53e3\u5c06\u6587\u4ef6\u7684\u5185\u5bb9\u6dfb\u52a0\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"content")," \u5b57\u6bb5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/protos/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "content" : "syntax = \\"proto3\\";\n    package helloworld;\n    service Greeter {\n        rpc SayHello (HelloRequest) returns (HelloReply) {}\n    }\n    message HelloRequest {\n        string name = 1;\n    }\n    message HelloReply {\n        string message = 1;\n    }"\n}\'\n')),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},".proto")," \u6587\u4ef6\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"p"},"import"),"\uff0c\u6216\u8005\u60f3\u8981\u628a\u591a\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},".proto")," \u6587\u4ef6\u5408\u5e76\u6210\u4e00\u4e2a proto\uff0c\u4f60\u53ef\u4ee5\u751f\u6210\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},".pb")," \u6587\u4ef6\u5e76\u5728 APISIX \u4e2d\u4f7f\u7528\u5b83\u3002"),(0,a.kt)("p",null,"\u5047\u8bbe\u5df2\u7ecf\u6709\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},".proto")," \u6587\u4ef6\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"proto/helloworld.proto"),"\uff09\uff0c\u5b83\u5bfc\u5165\u4e86\u53e6\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"proto")," \u6587\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-proto"},'syntax = "proto3";\n\npackage helloworld;\nimport "proto/import.proto";\n...\n')),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u8ba9\u6211\u4eec\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},".proto")," \u6587\u4ef6\u521b\u5efa\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},".pb")," \u6587\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"protoc --include_imports --descriptor_set_out=proto.pb proto/helloworld.proto\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"proto.pb")," \u5c06\u540c\u65f6\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"p"},"helloworld.proto")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"import.proto"),"\u3002"),(0,a.kt)("p",null,"\u7136\u540e\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"proto.pb")," \u7684\u5185\u5bb9\u4f5c\u4e3a proto \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"content")," \u5b57\u6bb5\u63d0\u4ea4\u3002"),(0,a.kt)("p",null,"\u7531\u4e8e proto \u7684\u5185\u5bb9\u662f\u4e8c\u8fdb\u5236\u7684\uff0c\u6211\u4eec\u9700\u8981\u4f7f\u7528\u4ee5\u4e0b Python \u811a\u672c\u5c06\u5176\u8f6c\u6362\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"base64"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'#!/usr/bin/env python\n# coding: utf-8\n\nimport base64\nimport sys\n\n# sudo pip install requests\nimport requests\n\nif len(sys.argv) <= 1:\n    print("bad argument")\n    sys.exit(1)\nwith open(sys.argv[1], \'rb\') as f:\n    content = base64.b64encode(f.read())\nid = sys.argv[2]\napi_key = "edd1c9f034335f136f87ad84b625c8f1" # use your API key\n\nreqParam = {\n    "content": content,\n}\nresp = requests.put("http://127.0.0.1:9180/apisix/admin/protos/" + id, json=reqParam, headers={\n    "X-API-KEY": api_key,\n})\nprint(resp.status_code)\nprint(resp.text)\n')),(0,a.kt)("p",null,"\u8be5\u811a\u672c\u5c06\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},".pb")," \u6587\u4ef6\u548c\u8981\u521b\u5efa\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),"\uff0c\u5c06 proto \u7684\u5185\u5bb9\u8f6c\u6362\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"base64"),"\uff0c\u5e76\u4f7f\u7528\u8f6c\u6362\u540e\u7684\u5185\u5bb9\u8c03\u7528 Admin API\u3002"),(0,a.kt)("p",null,"\u8fd0\u884c\u811a\u672c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"chmod +x ./upload_pb.py\n./upload_pb.py proto.pb 1\n")),(0,a.kt)("p",null,"\u8fd4\u56de\u7ed3\u679c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# 200\n# {"node":{"value":{"create_time":1643879753,"update_time":1643883085,"content":"CmgKEnByb3RvL2ltcG9ydC5wcm90bxIDcGtnIhoKBFVzZXISEgoEbmFtZRgBIAEoCVIEbmFtZSIeCghSZXNwb25zZRISCgRib2R5GAEgASgJUgRib2R5QglaBy4vcHJvdG9iBnByb3RvMwq9AQoPcHJvdG8vc3JjLnByb3RvEgpoZWxsb3dvcmxkGhJwcm90by9pbXBvcnQucHJvdG8iPAoHUmVxdWVzdBIdCgR1c2VyGAEgASgLMgkucGtnLlVzZXJSBHVzZXISEgoEYm9keRgCIAEoCVIEYm9keTI5CgpUZXN0SW1wb3J0EisKA1J1bhITLmhlbGxvd29ybGQuUmVxdWVzdBoNLnBrZy5SZXNwb25zZSIAQglaBy4vcHJvdG9iBnByb3RvMw=="},"key":"\\/apisix\\/proto\\/1"}}\n')),(0,a.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u5728\u6307\u5b9a\u8def\u7531\u4e2d\u542f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"grpc-transcode")," \u63d2\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/grpctest",\n    "plugins": {\n        "grpc-transcode": {\n         "proto_id": "1",\n         "service": "helloworld.Greeter",\n         "method": "SayHello"\n        }\n    },\n    "upstream": {\n        "scheme": "grpc",\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:50051": 1\n        }\n    }\n}\'\n')),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u6b64\u5904\u4f7f\u7528\u7684 Upstream \u5e94\u8be5\u662f gRPC \u670d\u52a1\u3002\u8bf7\u6ce8\u610f\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"scheme")," \u9700\u8981\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"grpc"),"\u3002"),(0,a.kt)("p",{parentName:"div"},"\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/api7/grpc_server_example"},"grpc_server_example")," \u8fdb\u884c\u6d4b\u8bd5\u3002"))),(0,a.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,a.kt)("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u793a\u4f8b\u914d\u7f6e\u63d2\u4ef6\u540e\uff0c\u4f60\u53ef\u4ee5\u5411 APISIX \u53d1\u51fa\u8bf7\u6c42\u4ee5\u4ece gRPC \u670d\u52a1\uff08\u901a\u8fc7 APISIX\uff09\u83b7\u5f97\u54cd\u5e94\uff1a"),(0,a.kt)("p",null,"\u8bbf\u95ee\u4e0a\u9762\u914d\u7f6e\u7684 route\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/grpctest?name=world\n")),(0,a.kt)("p",null,"\u8fd4\u56de\u7ed3\u679c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Shell"},'HTTP/1.1 200 OK\nDate: Fri, 16 Aug 2019 11:55:36 GMT\nContent-Type: application/json\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX web server\nProxy-Connection: keep-alive\n\n{"message":"Hello world"}\n')),(0,a.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"pb_option"),"\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/23 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/zeebe/WorkflowInstanceCreate",\n    "plugins": {\n        "grpc-transcode": {\n            "proto_id": "1",\n            "service": "gateway_protocol.Gateway",\n            "method": "CreateWorkflowInstance",\n            "pb_option":["int64_as_string"]\n        }\n    },\n    "upstream": {\n        "scheme": "grpc",\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:26500": 1\n        }\n    }\n}\'\n')),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u68c0\u67e5\u521a\u521a\u914d\u7f6e\u7684\u8def\u7531\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i "http://127.0.0.1:9080/zeebe/WorkflowInstanceCreate?bpmnProcessId=order-process&version=1&variables=\\{\\"orderId\\":\\"7\\",\\"ordervalue\\":99\\}"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Shell"},'HTTP/1.1 200 OK\nDate: Wed, 13 Nov 2019 03:38:27 GMT\nContent-Type: application/json\nTransfer-Encoding: chunked\nConnection: keep-alive\ngrpc-encoding: identity\ngrpc-accept-encoding: gzip\nServer: APISIX web server\nTrailer: grpc-status\nTrailer: grpc-message\n\n{"workflowKey":"#2251799813685260","workflowInstanceKey":"#2251799813688013","bpmnProcessId":"order-process","version":1}\n')),(0,a.kt)("h2",{id:"\u5728\u8fd4\u56de\u4f53\u4e2d\u5c55\u793a-grpc-status-details-bin"},"\u5728\u8fd4\u56de\u4f53\u4e2d\u5c55\u793a ",(0,a.kt)("inlineCode",{parentName:"h2"},"grpc-status-details-bin")),(0,a.kt)("p",null,"\u5982\u679c gRPC \u670d\u52a1\u8fd4\u56de\u4e86\u9519\u8bef\uff0c\u8fd4\u56de\u5934\u4e2d\u53ef\u80fd\u5b58\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"grpc-status-details-bin")," \u5b57\u6bb5\u5bf9\u9519\u8bef\u8fdb\u884c\u63cf\u8ff0\uff0c\u4f60\u53ef\u4ee5\u89e3\u7801\u8be5\u5b57\u6bb5\uff0c\u5e76\u5c55\u793a\u5728\u8fd4\u56de\u4f53\u4e2d\u3002"),(0,a.kt)("p",null,"\u4e0a\u4f20 proto \u6587\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/proto/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "content" : "syntax = \\"proto3\\";\n    package helloworld;\n    service Greeter {\n        rpc GetErrResp (HelloRequest) returns (HelloReply) {}\n    }\n    message HelloRequest {\n        string name = 1;\n        repeated string items = 2;\n    }\n    message HelloReply {\n        string message = 1;\n        repeated string items = 2;\n    }"\n}\'\n')),(0,a.kt)("p",null,"\u542f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"grpc-transcode")," \u63d2\u4ef6\uff0c\u5e76\u8bbe\u7f6e\u9009\u9879 ",(0,a.kt)("inlineCode",{parentName:"p"},"show_status_in_body")," \u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/grpctest",\n    "plugins": {\n        "grpc-transcode": {\n         "proto_id": "1",\n         "service": "helloworld.Greeter",\n         "method": "GetErrResp",\n         "show_status_in_body": true\n        }\n    },\n    "upstream": {\n        "scheme": "grpc",\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:50051": 1\n        }\n    }\n}\'\n')),(0,a.kt)("p",null,"\u8bbf\u95ee\u4e0a\u9762\u914d\u7f6e\u7684 route\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/grpctest?name=world\n")),(0,a.kt)("p",null,"\u8fd4\u56de\u7ed3\u679c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Shell"},'HTTP/1.1 503 Service Temporarily Unavailable\nDate: Wed, 10 Aug 2022 08:59:46 GMT\nContent-Type: application/json\nTransfer-Encoding: chunked\nConnection: keep-alive\ngrpc-status: 14\ngrpc-message: Out of service\ngrpc-status-details-bin: CA4SDk91dCBvZiBzZXJ2aWNlGlcKKnR5cGUuZ29vZ2xlYXBpcy5jb20vaGVsbG93b3JsZC5FcnJvckRldGFpbBIpCAESHFRoZSBzZXJ2ZXIgaXMgb3V0IG9mIHNlcnZpY2UaB3NlcnZpY2U\nServer: APISIX web server\n\n{"error":{"details":[{"type_url":"type.googleapis.com\\/helloworld.ErrorDetail","value":"\\b\\u0001\\u0012\\u001cThe server is out of service\\u001a\\u0007service"}],"message":"Out of service","code":14}}\n')),(0,a.kt)("p",null,"\u6ce8\u610f\u8fd4\u56de\u4f53\u4e2d\u8fd8\u5b58\u5728\u672a\u89e3\u7801\u7684\u5b57\u6bb5\uff0c\u5982\u679c\u9700\u8981\u89e3\u7801\u8be5\u5b57\u6bb5\uff0c\u9700\u8981\u5728\u4e0a\u4f20\u7684 proto \u6587\u4ef6\u4e2d\u52a0\u4e0a\u8be5\u5b57\u6bb5\u5bf9\u5e94\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"message type"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/proto/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "content" : "syntax = \\"proto3\\";\n    package helloworld;\n    service Greeter {\n        rpc GetErrResp (HelloRequest) returns (HelloReply) {}\n    }\n    message HelloRequest {\n        string name = 1;\n        repeated string items = 2;\n    }\n    message HelloReply {\n        string message = 1;\n        repeated string items = 2;\n    }\n    message ErrorDetail {\n        int64 code = 1;\n        string message = 2;\n        string type = 3;\n    }"\n}\'\n')),(0,a.kt)("p",null,"\u540c\u65f6\u914d\u7f6e\u9009\u9879 ",(0,a.kt)("inlineCode",{parentName:"p"},"status_detail_type")," \u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"helloworld.ErrorDetail"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/grpctest",\n    "plugins": {\n        "grpc-transcode": {\n         "proto_id": "1",\n         "service": "helloworld.Greeter",\n         "method": "GetErrResp",\n         "show_status_in_body": true,\n         "status_detail_type": "helloworld.ErrorDetail"\n        }\n    },\n    "upstream": {\n        "scheme": "grpc",\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:50051": 1\n        }\n    }\n}\'\n')),(0,a.kt)("p",null,"\u6b64\u65f6\u5c31\u80fd\u8fd4\u56de\u5b8c\u5168\u89e3\u7801\u540e\u7684\u7ed3\u679c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Shell"},'HTTP/1.1 503 Service Temporarily Unavailable\nDate: Wed, 10 Aug 2022 09:02:46 GMT\nContent-Type: application/json\nTransfer-Encoding: chunked\nConnection: keep-alive\ngrpc-status: 14\ngrpc-message: Out of service\ngrpc-status-details-bin: CA4SDk91dCBvZiBzZXJ2aWNlGlcKKnR5cGUuZ29vZ2xlYXBpcy5jb20vaGVsbG93b3JsZC5FcnJvckRldGFpbBIpCAESHFRoZSBzZXJ2ZXIgaXMgb3V0IG9mIHNlcnZpY2UaB3NlcnZpY2U\nServer: APISIX web server\n\n{"error":{"details":[{"type":"service","message":"The server is out of service","code":1}],"message":"Out of service","code":14}}\n')),(0,a.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,a.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u7981\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"grpc-transcode")," \u63d2\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/111 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/grpctest",\n    "plugins": {},\n    "upstream": {\n        "scheme": "grpc",\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:50051": 1\n        }\n    }\n}\'\n')))}d.isMDXComponent=!0}}]);