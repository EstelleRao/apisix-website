"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1151],{5318:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7378);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(a),k=i,d=c["".concat(o,".").concat(k)]||c[k]||u[k]||r;return a?n.createElement(d,l(l({ref:t},m),{},{components:a})):n.createElement(d,l({ref:t},m))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5580:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var n=a(5773),i=(a(7378),a(5318));const r={id:"blog",title:"\u535a\u5ba2\u8d21\u732e\u6307\u5357",keywords:["API \u7f51\u5173","APISIX","Apache APISIX","\u535a\u5ba2"],description:"\u5982\u4f55\u5728 Apache APISIX \u5b98\u7f51\u63d0\u4ea4\u6216\u66f4\u65b0\u535a\u5ba2\uff1f"},l=void 0,p={unversionedId:"blog",id:"blog",isDocsHomePage:!1,title:"\u535a\u5ba2\u8d21\u732e\u6307\u5357",description:"\u5982\u4f55\u5728 Apache APISIX \u5b98\u7f51\u63d0\u4ea4\u6216\u66f4\u65b0\u535a\u5ba2\uff1f",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/blog-contributing-guide.md",sourceDirName:".",slug:"/blog",permalink:"/zh/docs/general/blog",editUrl:"https://github.com/apache/apisix-website/edit/master/website/docs/general/blog-contributing-guide.md",tags:[],version:"current",frontMatter:{id:"blog",title:"\u535a\u5ba2\u8d21\u732e\u6307\u5357",keywords:["API \u7f51\u5173","APISIX","Apache APISIX","\u535a\u5ba2"],description:"\u5982\u4f55\u5728 Apache APISIX \u5b98\u7f51\u63d0\u4ea4\u6216\u66f4\u65b0\u535a\u5ba2\uff1f"},sidebar:"docs",previous:{title:"\u8d21\u732e\u6307\u5357",permalink:"/zh/docs/general/contributor-guide"},next:{title:"\u62a5\u544a\u5b89\u5168\u6f0f\u6d1e",permalink:"/zh/docs/general/security"}},o=[{value:"\u535a\u5ba2\u7c7b\u578b",id:"\u535a\u5ba2\u7c7b\u578b",children:[]},{value:"\u63d0\u4ea4\u535a\u5ba2\u6d41\u7a0b",id:"\u63d0\u4ea4\u535a\u5ba2\u6d41\u7a0b",children:[{value:"\u914d\u7f6e\u535a\u5ba2\u5143\u6570\u636e",id:"\u914d\u7f6e\u535a\u5ba2\u5143\u6570\u636e",children:[]},{value:"\u6458\u8981",id:"\u6458\u8981",children:[]}]},{value:"\u4fdd\u6301\u6587\u7ae0\u66f4\u65b0",id:"\u4fdd\u6301\u6587\u7ae0\u66f4\u65b0",children:[]}],s={toc:o};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5982\u9700\u5728 Apache APISIX \u7f51\u7ad9\u4e0a\u8fdb\u884c\u64b0\u5199\u6216\u66f4\u65b0",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/"},"\u535a\u5ba2"),"\uff0c\u8bf7\u9075\u5faa\u672c\u7bc7\u6307\u5357\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u5bf9\u5df2\u7ecf\u53d1\u5e03\u7684\u535a\u5ba2\u5185\u5bb9\u5b58\u6709\u7591\u95ee\uff0c\u6b22\u8fce\u63d0\u4ea4 ",(0,i.kt)("a",{parentName:"p",href:"/docs/general/submit-issue"},"issue")," \u8fdb\u884c\u53cd\u9988\u3002\u5982\u679c\u4f60\u6709\u610f\u613f\uff0c\u4e5f\u53ef\u81ea\u5df1\u521b\u5efa\u4e00\u4e2a ",(0,i.kt)("a",{parentName:"p",href:"/docs/general/contributor-guide/#open-a-pull-request"},"PR")," \u5bf9\u8be5\u95ee\u9898\u8fdb\u884c\u4fee\u590d\u3002"),(0,i.kt)("p",null,"\u5f53\u524d\u535a\u5ba2\u652f\u6301",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/"},"\u4e2d\u6587"),"\u548c",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/"},"\u82f1\u6587"),"\u4e24\u79cd\u8bed\u8a00\uff0c\u4f60\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u719f\u6089\u7684\u8bed\u8a00\u63d0\u4ea4\u535a\u5ba2\u3002\u76ee\u524d\u4e2d\u6587\u548c\u82f1\u6587\u535a\u5ba2\u9700\u8981\u540c\u65f6\u63d0\u4ea4\uff0c\u5426\u5219\u5728\u5b98\u7f51\u4f1a\u51fa\u73b0\u672a\u77e5\u9519\u8bef\uff0c\u4f46\u662f\u4f60\u4e0d\u5fc5\u62c5\u5fc3\uff0c\u793e\u533a\u8d21\u732e\u8005\u4f1a\u5728\u4f60\u63d0\u4ea4\u535a\u5ba2\u4e4b\u540e\u7ffb\u8bd1\u6587\u7ae0\uff0c\u5c4a\u65f6\u4f60\u53ef\u4ee5 Review \u76f8\u5e94 PR\u3002"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"/apisix-website/blog/en/blog")," \u76ee\u5f55\u4e0b\u6839\u636e\u5e74/\u6708/\u65e5\u521b\u5efa\u4e00\u4e2a\u76ee\u5f55\uff0c\u5e76\u63d0\u4ea4\u82f1\u6587\u535a\u5ba2\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"/apisix-website/blog/en/blog/2022/03/01/apisix-integration-public-api-plugin.md")," \u8be5\u76ee\u5f55\u91ca\u4e49\u5982\u4e0b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"apisix-integration-public-api-plugin.md")," \u662f\u8fd9\u7bc7\u535a\u5ba2\u7684\u6587\u4ef6\u540d\uff0c\u8fd9\u7bc7\u535a\u5ba2\u7684\u53d1\u5e03\u65e5\u671f\u662f 2022 \u5e74 3 \u6708 1 \u65e5\uff0c")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"website/blog/2022/03/01")," \u662f\u8be5\u535a\u5ba2\u6240\u5728\u7684\u76ee\u5f55\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"https://apisix.apache.org/blog/2022/03/01/apisix-integration-public-api-plugin")," \u662f\u8be5\u535a\u5ba2 PR \u5408\u5e76\u540e\u7684 URL\u3002"),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u540c\u6837\u7684\uff0c\u4f60\u53ef\u4ee5\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"/apisix-website/blog/zh/blog")," \u76ee\u5f55\u4e0b\u63d0\u4ea4\u4e2d\u6587\u535a\u5ba2\u3002"))))),(0,i.kt)("h2",{id:"\u535a\u5ba2\u7c7b\u578b"},"\u535a\u5ba2\u7c7b\u578b"),(0,i.kt)("p",null,"\u4f60\u4e0d\u4f46\u53ef\u4ee5\u63d0\u4ea4\u5982\u4f55\u4f7f\u7528 Apache APISIX \u7684\u535a\u5ba2\uff0c\u800c\u4e14\u4e5f\u53ef\u4ee5\u63d0\u4ea4\u5982\u4f55\u4e3a Apache APISIX \u505a\u8d21\u732e\u7684\u535a\u5ba2\u3002"),(0,i.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u66f4\u65b0\u5df2\u7ecf\u53d1\u5e03\u7684\u535a\u5ba2\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u66f4\u65b0\u535a\u5ba2\u5185\u5bb9\uff0c\u4fee\u590d issues \u4e2d\u63d0\u5230\u7684\u94fe\u63a5\u9519\u8bef\u3001\u7528\u8bcd\u9519\u8bef\u4ee5\u53ca\u8868\u8ff0\u4e0d\u6e05\u6670\u7b49\u95ee\u9898\u3002"),(0,i.kt)("h2",{id:"\u63d0\u4ea4\u535a\u5ba2\u6d41\u7a0b"},"\u63d0\u4ea4\u535a\u5ba2\u6d41\u7a0b"),(0,i.kt)("p",null,"\u63d0\u4ea4\u4e00\u7bc7\u65b0\u535a\u5ba2\u662f\u4e3a Apache APISIX \u505a\u8d21\u732e\u7684\u6700\u597d\u65b9\u5f0f\u4e4b\u4e00\u3002Apache APISIX \u9879\u76ee\u7684\u4f7f\u7528\u8005\u548c\u8d21\u732e\u8005\u90fd\u53ef\u4ee5\u4ece\u4f60\u7684\u535a\u5ba2\u4e2d\u5b66\u4e60\u7ecf\u9a8c\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u9996\u5148\u4f60\u9700\u8981\u5728\u6b63\u786e\u7684\u8def\u5f84\u4e2d\u5b58\u653e\u65b0\u7684\u535a\u5ba2\u6587\u6863\u3002"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f60\u7528",(0,i.kt)("strong",{parentName:"li"},"\u82f1\u6587"),"\u64b0\u5199\u535a\u5ba2\uff0c\u8bf7\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"/apisix-website/blog/en/blog")," \u76ee\u5f55\u4e0b\u65b0\u5efa\u4e00\u4e2a Markdown \u6587\u4ef6\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f60\u7528",(0,i.kt)("strong",{parentName:"li"},"\u4e2d\u6587"),"\u64b0\u5199\u535a\u5ba2\uff0c\u8bf7\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"/apisix-website/blog/zh/blog")," \u76ee\u5f55\u4e0b\u65b0\u5efa\u4e00\u4e2a Markdown \u6587\u4ef6\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f60\u672a\u80fd\u627e\u5230\u4e00\u4e2a\u5408\u9002\u7684\u76ee\u5f55\u5339\u914d\u5e74\u6708\u65e5\uff0c\u4f60\u53ef\u4ee5\u65b0\u5efa\u4e00\u4e2a\u6587\u4ef6\u5939\u6765\u5b58\u653e\u535a\u5ba2\u3002"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5f53\u4f60\u627e\u5230\u4e86\u4e00\u4e2a\u5b58\u653e\u4f60\u7684\u535a\u5ba2\u7684\u76ee\u5f55\uff0c\u4f60\u5c31\u53ef\u4ee5\u5728\u8be5\u76ee\u5f55\u4e2d\u521b\u5efa\u4e00\u4e2a Markdown \u6587\u4ef6\u3002\u8bf7\u6ce8\u610f\uff0c\u6587\u4ef6\u540d\u8bf7\u4f7f\u7528\u82f1\u6587\uff0c\u5e76\u4e14\u907f\u514d\u5927\u5199\u5b57\u6bcd\u3002Reviewers \u53ef\u80fd\u4f1a\u5efa\u8bae\u4f60\u6539\u53d8\u6587\u4ef6\u540d\u4ee5\u63d0\u5347 SEO\uff08\u90e8\u5206\u6587\u4ef6\u540d\u542b\u6709\u5927\u5199\u5b57\u6bcd\uff0c\u5df2\u7ecf\u5728 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-website/issues/713"},"#713")," \u4e2d\u88ab\u4fee\u590d\uff09\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4f60\u53ef\u4ee5\u901a\u8fc7\u7f16\u8f91 Markdown \u6587\u4ef6\u628a\u6587\u5b57\u3001\u56fe\u7247\u3001\u56fe\u8868\u6dfb\u52a0\u5230\u4f60\u7684\u535a\u5ba2\u4e2d\u3002\u4f60\u53ef\u4ee5\u4ece ",(0,i.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/"},"Markdown \u6307\u5357"),"\u4e86\u89e3\u66f4\u591a\u5173\u4e8e Markdown \u683c\u5f0f\u7684\u4fe1\u606f\u3002"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u56fe\u7247\u524d\uff0c\u4f60\u53ef\u4ee5\u5728 Github \u4e0a\uff0c\u5148\u521b\u5efa\u4e00\u4e2a ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-website/issues/new?assignees=&labels=documentation&template=documentation.yaml&title=%5BDocs%5D%3A+"},"issue \u7684\u8349\u7a3f"),"\uff0c\u7136\u540e\u5c06\u56fe\u7247\u4e0a\u4f20\u5230 Current State\uff0c\u8bf7\u5148\u5c06\u56fe\u7247\u4e0a\u4f20\u5230 Github \u7684 issue \u4e2d\uff0c\u7136\u540e\u5728 Markdown \u6587\u4ef6\u4e2d\u6dfb\u52a0\u56fe\u7247\u94fe\u63a5\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8868\u683c\u53ca\u56fe\u7247\u8574\u6db5\u4e86\u5927\u91cf\u4fe1\u606f\uff0c\u6211\u4eec\u5f88\u4e50\u610f\u770b\u5230\u5b83\u4eec\u3002\u4ece\u7ecf\u9a8c\u6765\u770b\u5c0f\u4e8e\u7b49\u4e8e 4 \u5217\u7684\u8868\u683c\u5728\u7f51\u9875\u4e0a\u663e\u5f97\u66f4\u52a0\u7f8e\u89c2\u3002"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u6839\u636e\u4f60\u65b0\u5efa\u7684\u535a\u5ba2",(0,i.kt)("a",{parentName:"p",href:"/docs/general/contributor-guide/#%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA-pr"},"\u521b\u5efa\u4e00\u4e2a PR"),"\u3002"),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728\u672c\u5730\u6784\u5efa\u7f51\u9875\u73af\u5883\u68c0\u67e5\u4f60\u7684\u4fee\u6539\u3002\u8fd9\u53ef\u4ee5\u786e\u4fdd\u5728\u4f60\u63d0\u4ea4 PR \u4e4b\u524d\u6ca1\u6709\u4efb\u4f55\u9519\u522b\u5b57\u6216\u9057\u7559\u95ee\u9898\u3002\u867d\u7136 Apache APISIX Website \u4f1a\u8fd0\u884c CI \u6765\u68c0\u67e5\u5e76\u53cd\u9988\u8fd9\u4e9b\u9519\u8bef\uff0c\u4f46\u66f4\u63a8\u8350\u4f18\u5148\u5728\u672c\u5730\u73af\u5883\u8fdb\u884c\u6d4b\u8bd5\u3002\u5177\u4f53\u6784\u5efa\u6d41\u7a0b\u8bf7\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-website/blob/master/README.md"},"\u6784\u5efa\u7f51\u9875\u73af\u5883"),"\u3002"))))),(0,i.kt)("h3",{id:"\u914d\u7f6e\u535a\u5ba2\u5143\u6570\u636e"},"\u914d\u7f6e\u535a\u5ba2\u5143\u6570\u636e"),(0,i.kt)("p",null,"\u6bcf\u4e00\u4e2a\u535a\u5ba2\u6e90\u6587\u4ef6\u90fd\u5305\u542b\u4e86\u4e00\u4e2a YAML \u524d\u8a00\u6216\u6807\u9898\uff0c\u5e76\u4f7f\u7528\u4e24\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"---")," \u4e0e\u6b63\u6587\u5206\u5206\u9694\u3002"),(0,i.kt)("p",null,"\u5143\u6570\u636e\u4e2d\u5305\u542b\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"title"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"description"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"authors"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"tags")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"keywords")," \u7b49\u5b57\u6bb5\uff0c\u90e8\u5206\u5185\u5bb9\u53ef\u4ee5\u53c2\u8003\u7684\u6a21\u677f\u5982\u4e0b\uff1a"),(0,i.kt)("h4",{id:"\u5355\u4f5c\u8005\u6a21\u677f"},"\u5355\u4f5c\u8005\u6a21\u677f"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u7684\u535a\u5ba2\u53ea\u6709\u4e00\u4e2a\u4f5c\u8005\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u6a21\u677f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},'title: "Blog\'s Title"\nauthors:\n  - name: "Author\'s Name"\n    title: "Author"\n    url: "Author\'s GitHub"\n    image_url: "Author\'s Image URL"\nkeywords:\n- keywords 1\n- keywords 2\n- keywords 3\n- keywords 4\n- keywords 5\ndescription: Description of the post\ntags: [tag1,tag2,...,tagn]\n')),(0,i.kt)("h4",{id:"\u5171\u540c\u4f5c\u8005\u6a21\u677f"},"\u5171\u540c\u4f5c\u8005\u6a21\u677f"),(0,i.kt)("p",null,"\u7ffb\u8bd1\u548c\u4fee\u6539\u6587\u7ae0\u9700\u8981\u82b1\u8d39\u5f88\u591a\u65f6\u95f4\u548c\u7cbe\u529b\uff0c\u56e0\u6b64\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u5171\u540c\u4f5c\u8005\u6a21\u677f\u4e3a\u535a\u5ba2\u6dfb\u52a0\u591a\u4e2a\u4f5c\u8005\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},'title: "Blog\'s Title"\nauthors:\n  - name: "Author\'s Name"\n    title: "Author\'s title"\n    url: "Author\'s GitHub"\n    image_url: "Author\'s Image URL"\n  - name: "Translator/Technical Writer\'s name"\n    title: "Translator or Technical Writer"\n    url: "Translator/Technical Writer\'s GitHub"\n    image_url: "Translator/Technical Writer\'s Image URL"\nkeywords:\n- keywords 1\n- keywords 2\n- keywords 3\n- keywords 4\n- keywords 5\ndescription: Description of the post\ntags: [tag1,tag2,...,tagn]\n')),(0,i.kt)("p",null,"\u4e0b\u9762\u5c06\u8be6\u7ec6\u4ecb\u7ecd\u8fd9\u4e9b\u5b57\u6bb5\u4e2d\u7684\u6bcf\u4e00\u4e2a\uff1a"),(0,i.kt)("h4",{id:"authors"},(0,i.kt)("inlineCode",{parentName:"h4"},"authors")),(0,i.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u5fc5\u586b\u5b57\u6bb5\uff0c\u5f53\u535a\u5ba2\u662f\u7531\u591a\u4eba\u5171\u540c\u64b0\u5199\u65f6\uff0c\u5fc5\u987b\u4f7f\u7528\u8fd9\u4e2a\u5b57\u6bb5\u4ee5\u4fbf\u8868\u5f70\u4f5c\u8005\u3002 ",(0,i.kt)("inlineCode",{parentName:"p"},"authors")," \u5b57\u6bb5\u7531\u4ee5\u4e0b\u51e0\u90e8\u5206\u6784\u6210\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"authors.name"),"\uff1a\u4f5c\u8005\u7684\u59d3\u540d\uff0c\u4f8b\u5982\u5f20\u4e09\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},'name: "\u5f20\u4e09"'),"\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"authors.title"),"\uff1a\u4f5c\u8005\u7684\u804c\u4f4d\uff0c\u4f8b\u5982\u6587\u6863\u5de5\u7a0b\u5e08\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},'title: "Technical Writer"'),"\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"authors.url"),"\uff1a\u4f5c\u8005\u7684 GitHub \u4e3b\u9875\uff0c\u4f8b\u5982\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},'url: "https://github.com/yzeng25"'),"\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"authors.image_url"),"\uff1a\u4f5c\u8005\u7684 GitHub \u5934\u50cf\uff0c\u4f8b\u5982\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},'authors.image_url: "https://avatars.githubusercontent.com/u/36651058?v=4"'),"\u3002")),(0,i.kt)("h4",{id:"keywords"},(0,i.kt)("inlineCode",{parentName:"h4"},"keywords")),(0,i.kt)("p",null,"\u5173\u952e\u5b57\u662f\u63d0\u5347 SEO \u4f18\u5316\u6587\u7ae0\u6392\u540d\u7684\u5fc5\u9700\u5b57\u6bb5\u3002"),(0,i.kt)("p",null,"\u5728\u4e2d\u6587\u535a\u5ba2\u4e2d\uff0c\u524d\u4e09\u4e2a\u5173\u952e\u5b57\u901a\u5e38\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"API \u7f51\u5173"),"\uff08\u82f1\u6587\u535a\u5ba2\u4e2d\u8bf7\u4f7f\u7528 API Getway\uff09\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"APISIX")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"Apache APISIX"),"\uff0c\u540e\u4e24\u4e2a\u5173\u952e\u5b57\u4e0e\u535a\u5ba2\u4e3b\u9898\u76f8\u5173\u3002"),(0,i.kt)("h4",{id:"description"},(0,i.kt)("inlineCode",{parentName:"h4"},"description")),(0,i.kt)("p",null,"\u77ed\u63cf\u8ff0\u662f\u53e6\u5916\u4e00\u4e2a\u63d0\u5347 SEO \u4f18\u5316\u7f51\u7ad9\u6392\u540d\u7684\u5fc5\u9700\u5b57\u6bb5\uff0c\u9700\u8981\u5305\u62ec\u7528\u6237\u9700\u8981\u8fd9\u7bc7\u6587\u7ae0\u65f6\uff0c\u53ef\u80fd\u4f1a\u4f7f\u7528\u7684\u641c\u7d22\u5173\u952e\u5b57\u3002"),(0,i.kt)("p",null,"\u5bf9\u535a\u5ba2\u7b80\u77ed\u7684\u6982\u8ff0\u5c31\u662f\u4e00\u4e2a\u597d\u63cf\u8ff0\uff0c\u901a\u5e38\u63cf\u8ff0\u7684\u5b57\u7b26\u6570\u5728 150 \u5230 160 \u4e4b\u95f4\u5373\u53ef\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7",(0,i.kt)("a",{parentName:"p",href:"https://www.eteste.com/"},"\u5b57\u7b26\u7edf\u8ba1\u8f6f\u4ef6"),"\u8fdb\u884c\u8ba1\u7b97\u3002"),(0,i.kt)("h4",{id:"tags"},(0,i.kt)("inlineCode",{parentName:"h4"},"tags")),(0,i.kt)("p",null,"\u6807\u7b7e\u901a\u5e38\u88ab\u7528\u4e8e\u6587\u7ae0\u7684\u5206\u7c7b\u3002"),(0,i.kt)("p",null,"\u6bcf\u7bc7\u535a\u5ba2\u53ef\u4ee5\u6709\u591a\u4e2a\u6807\u7b7e\u3002\u4e0b\u9762\u5217\u4e3e\u4e86\u4e00\u4e9b\u5e38\u7528\u7684\u6807\u7b7e\u548c\u76f8\u5e94\u89e3\u91ca\uff0c\u4e00\u7bc7\u535a\u5ba2\u901a\u5e38\u4f1a\u6db5\u76d6\u5176\u4e2d\u90e8\u5206\u6807\u7b7e\u3002\u5982\u679c\u65e0\u6cd5\u627e\u5230\u9002\u5408\u7684\u6807\u7b7e\uff0c\u8bf7\u5728\u63d0\u4ea4 PR \u65f6\u7559\u4e0b\u8bc4\u8bba\uff0c\u6211\u4eec\u5c06\u4e00\u8d77\u5904\u7406\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Community"),'\uff1a\u793e\u533a\u3001\u793e\u533a\u6d3b\u52a8\u6709\u5173\u7684\u5185\u5bb9\u4ee5\u53ca\u7248\u672c\u53d1\u5e03\u7684\u6807\u7b7e\uff0c\u6bd4\u5982\u8bf4\uff1a"\u5982\u4f55\u4ee5\u4ee3\u7801\u4e4b\u5916\u5f62\u5f0f\u7ed9\u793e\u533a\u505a\u8d21\u732e\uff1f"\uff0c\u76f4\u64ad\u9884\u544a\u3001\u6d3b\u52a8\u9884\u544a\u3001\u4f1a\u8bae\u5185\u5bb9\u548c\u9879\u76ee\u4f1a\u8bae\u5185\u5bb9\u3002'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Security"),"\uff1a\u5b89\u5168\u6f0f\u6d1e\u901a\u77e5\u548c\u89e3\u51b3\u5b89\u5168\u6f0f\u6d1e\u7684\u65b9\u6cd5\u3002\u76ee\u524d\u6709",(0,i.kt)("a",{parentName:"li",href:"/blog/tags/security/"},"\u516d\u7bc7\u6587\u7ae0"),"\uff0c\u4ed6\u4eec\u90fd\u540c\u6837\u6709\u5f62\u5982 CVE-xxxxxxx \u7684\u6807\u9898\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Case Studies"),"\uff1a\u5173\u4e8e\u5728\u4f01\u4e1a\u5185\u4f7f\u7528 Apache APISIX \u7684\u535a\u5ba2\uff0c\u8ba9\u6211\u4eec\u77e5\u9053\u4f60\u662f\u5982\u4f55\u4f7f\u7528 Apache APISIX \u7684\uff01"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Plugins"),"\uff1a\u4e0e Apache APISIX \u63d2\u4ef6\u76f8\u5173\u7684\u535a\u5ba2\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ecosystem"),"\uff1a\u4e0e Apache APISIX \u5468\u8fb9\u751f\u6001\u76f8\u5173\u7684\u5185\u5bb9\u3002")),(0,i.kt)("p",null,"Reviewers \u5c06\u5728 Review \u4f60\u7684 PR \u65f6\u5e2e\u52a9\u4f60\u9009\u62e9\u5408\u9002\u7684\u6807\u7b7e\u3002"),(0,i.kt)("h4",{id:"\u83b7\u53d6\u4f5c\u8005\u5934\u50cf-url"},"\u83b7\u53d6\u4f5c\u8005\u5934\u50cf URL"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u6253\u5f00\u4f60\u7684\u6d4f\u89c8\u5668\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u8f93\u5165\u4f5c\u8005\u7684 GitHub \u9875\u9762\u7684 URL\uff0c\u5728 URL \u7ed3\u5c3e\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},".png"),"\uff0c\u4f8b\u5982\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\n\u4f5c\u8005 Github URL\uff1ahttps://github.com/hf400159\n\n\u4f5c\u8005\u5934\u50cf URL\uff1ahttps://github.com/hf400159.png\n\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u8fd9\u65f6\u5c06\u4f1a\u6253\u5f00\u4f5c\u8005\u7684\u5934\u50cf\u56fe\u7247\uff0c\u8bf7\u590d\u5236\u8be5\u56fe\u7247\u7684 URL\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u590d\u5236\u56fe\u7247 URL \u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"authors.image_url")," \u5b57\u6bb5\u3002"))),(0,i.kt)("h3",{id:"\u6458\u8981"},"\u6458\u8981"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},'title: "Blog\'s Title"\n---\nThis is the summary.\n\nAnd this is also part of the summary.\n\n\x3c!--truncate--\x3e\n\nBut this is not part of the summary.\n')),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u4f60\u7684\u6587\u7ae0\u4e2d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"\x3c!--truncate--\x3e")," \u6807\u5fd7\u6765\u51b3\u5b9a\u54ea\u90e8\u5206\u5185\u5bb9\u4ee5\u6458\u8981\u5f62\u5f0f\u663e\u793a\u5728\u535a\u5ba2\u5217\u8868\u4e0a\u3002"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"\x3c!--truncate--\x3e")," \u4ee5\u4e0a\u7684\u5185\u5bb9\u7ec4\u6210\u6458\u8981\u3002"),(0,i.kt)("p",null,"\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/blog#blog-list"},"Docusaurus \u6587\u6863"),"\u3002"),(0,i.kt)("h4",{id:"\u63cf\u8ff0\u548c\u6458\u8981\u7684\u533a\u522b"},"\u63cf\u8ff0\u548c\u6458\u8981\u7684\u533a\u522b"),(0,i.kt)("p",null,"\u63cf\u8ff0\u548c\u6458\u8981\u7684\u5185\u5bb9\u53ef\u80fd\u662f\u4e00\u6837\u7684\uff0c\u90a3\u4e3a\u4ec0\u4e48\u6211\u4eec\u8981\u5728\u4e24\u4e2a\u5b57\u6bb5\u4e0a\u91cd\u590d\u4f7f\u7528\u5b83\u4eec\u5462\uff1f"),(0,i.kt)("p",null,"\u63cf\u8ff0\u4e3b\u8981\u76ee\u7684\u662f\u4e3a\u4e86\u63d0\u9ad8 SEO\uff0c\u5e76\u4e14\u4e3b\u8981\u7531\u8ba1\u7b97\u673a\u9605\u8bfb\uff0c\u800c\u6458\u8981\u5219\u662f\u8ba9\u8bfb\u8005\u4e86\u89e3\u8fd9\u7bc7\u535a\u5ba2\u7684\u5185\u5bb9\u3002"),(0,i.kt)("h2",{id:"\u4fdd\u6301\u6587\u7ae0\u66f4\u65b0"},"\u4fdd\u6301\u6587\u7ae0\u66f4\u65b0"),(0,i.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u6216\u8005\u66f4\u65b0\u73b0\u6709\u7684\u535a\u5ba2\u6587\u7ae0\u4e3a Apache APISIX \u793e\u533a\u505a\u51fa\u8d21\u732e\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u9996\u5148\u4f60\u9700\u8981\u627e\u5230\u5bf9\u5e94\u7684\u535a\u5ba2\u6587\u4ef6\u3002"),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4e2d\u6587\u535a\u5ba2\u5b58\u653e\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"/apisix-website/blog/zh/blog")," \u76ee\u5f55\u4e0b\uff0c\u800c\u82f1\u6587\u535a\u5ba2\u5219\u5b58\u653e\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"/apisix-website/blog/en/blog")," \u76ee\u5f55\u4e0b\u3002")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5f53\u4f60\u627e\u5230\u535a\u5ba2\u6587\u4ef6\u540e\uff0c\u5c31\u53ef\u4ee5\u4fee\u6539\u5bf9\u5e94\u7684\u5185\u5bb9\u4e86\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u4e00\u4e2a\u5e26\u6709\u66f4\u65b0\u4fe1\u606f\u7684 ",(0,i.kt)("a",{parentName:"p",href:"/docs/general/contributor-guide#%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA-pr"},"PR"),"\u3002"))))}m.isMDXComponent=!0}}]);