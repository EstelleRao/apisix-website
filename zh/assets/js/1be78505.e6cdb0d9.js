(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[29514,10926],{49200:e=>{e.exports={versions:["2.12","2.13","2.14","2.15","3.0","3.1"],LTSVersions:["2.15"],versionMap:{2.99:"3.0.0-beta"},archivedVersions:[{label:"2.11",href:"https://625a9090d04b9a6953165811--2-11-old-docs-apache-apisix.netlify.app/docs/apisix/getting-started/"},{label:"2.10",href:"https://625a9090d04b9a6953165811--2-11-old-docs-apache-apisix.netlify.app/docs/apisix/2.10/getting-started/"},{label:"2.9",href:"https://625a57e513f19e48ae3a4468--old-docs-apache-apisix.netlify.app/docs/apisix/getting-started/"},{label:"2.8",href:"https://625a57e513f19e48ae3a4468--old-docs-apache-apisix.netlify.app/docs/apisix/2.8/getting-started/"},{label:"2.7",href:"https://625a57e513f19e48ae3a4468--old-docs-apache-apisix.netlify.app/docs/apisix/2.7/getting-started/"},{label:"2.6",href:"https://625a57e513f19e48ae3a4468--old-docs-apache-apisix.netlify.app/docs/apisix/2.6/getting-started/"},{label:"2.5",href:"https://625a57e513f19e48ae3a4468--old-docs-apache-apisix.netlify.app/docs/apisix/2.5/getting-started/"},{label:"2.4",href:"https://625a57e513f19e48ae3a4468--old-docs-apache-apisix.netlify.app/docs/apisix/2.4/getting-started/"}]}},64787:(e,t,a)=>{"use strict";a.d(t,{Z:()=>C});var n=a(87462),r=a(67294),l=a(86010),o=a(24544),s=a(10195),c=a(87594),i=a.n(c),d=a(83583),u=a(24973),m=a(941);const p="codeBlockContainer_EiTO",h="codeBlockContent_X2I6",b="codeBlockTitle_PQMO",g="codeBlock_UxnK",f="copyButton_V-PD",E="codeBlockLines_W6UD",v=/{([\d,-]+)}/,Z=["js","jsBlock","jsx","python","html"],k={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},w=["highlight-next-line","highlight-start","highlight-end"],I=function(e){void 0===e&&(e=Z);const t=e.map((e=>{const{start:t,end:a}=k[e];return"(?:"+t+"\\s*("+w.join("|")+")\\s*"+a+")"})).join("|");return new RegExp("^\\s*(?:"+t+")\\s*$")},C=e=>{let{children:t,className:a,metastring:c,title:Z}=e;const{prism:k}=(0,m.LU)(),[w,C]=(0,r.useState)(!1),[y,S]=(0,r.useState)(!1);(0,r.useEffect)((()=>{S(!0)}),[]);const A=(0,m.bc)(c)||Z,N=(0,r.useRef)(null);let _=[];const x=(0,d.Z)(),P=Array.isArray(t)?t.join(""):t;if(c&&v.test(c)){const e=c.match(v)[1];_=i()(e).filter((e=>e>0))}let B=null==a?void 0:a.replace(/language-/,"");!B&&k.defaultLanguage&&(B=k.defaultLanguage);let L=P.replace(/\n$/,"");if(0===_.length&&void 0!==B){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return I(["js","jsBlock"]);case"jsx":case"tsx":return I(["js","jsBlock","jsx"]);case"html":return I(["js","jsBlock","html"]);case"python":case"py":return I(["python"]);default:return I()}})(B),a=P.replace(/\n$/,"").split("\n");let n;for(let r=0;r<a.length;){const l=r+1,o=a[r].match(t);if(null!==o){switch(o.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=l+",";break;case"highlight-start":n=l;break;case"highlight-end":e+=n+"-"+(l-1)+","}a.splice(r,1)}else r+=1}_=i()(e),L=a.join("\n")}const T=()=>{(0,s.Z)(L),C(!0),setTimeout((()=>C(!1)),2e3)};return r.createElement(o.ZP,(0,n.Z)({},o.lG,{key:String(y),theme:x,code:L,language:B}),(e=>{let{className:t,style:a,tokens:o,getLineProps:s,getTokenProps:c}=e;return r.createElement("div",{className:p},A&&r.createElement("div",{style:a,className:b},A),r.createElement("div",{className:(0,l.Z)(h,B)},r.createElement("pre",{tabIndex:0,className:(0,l.Z)(t,g,"thin-scrollbar"),style:a},r.createElement("code",{className:E},o.map(((e,t)=>{1===e.length&&"\n"===e[0].content&&(e[0].content="");const a=s({line:e,key:t});return _.includes(t+1)&&(a.className+=" docusaurus-highlight-code-line"),r.createElement("span",(0,n.Z)({key:t},a),e.map(((e,t)=>r.createElement("span",(0,n.Z)({key:t},c({token:e,key:t}))))),r.createElement("br",null))})))),r.createElement("button",{ref:N,type:"button","aria-label":(0,u.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,l.Z)(f,"clean-btn"),onClick:T},w?r.createElement(u.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(u.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},33152:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>Q});var n=a(87462),r=a(67294),l=a(3905),o=a(46291),s=a(34328),c=a(86010),i=a(941),d=a(93783),u=a(77898),m=a(19103),p=a(34096),h=a(24973),b=a(12296),g=a(74653),f=a(49200);const E="sidebar_LIo8",v="sidebarWithHideableNavbar_CMI-",Z="sidebarHidden_4BoQ",k="sidebarLogo_P87M",w="menu_oAhv",I="menuWithAnnouncementBar_IVfW",C="collapseSidebarButton_EBxv",y="collapseSidebarButtonIcon_AF9Q",S="sidebarVersionSwitch_0QIZ";const A=e=>{let{onClick:t}=e;return r.createElement("button",{type:"button",title:(0,h.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,h.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",C),onClick:t},r.createElement(p.Z,{className:y}))},N=e=>{const{docsPluginId:t}=e;return r.createElement("div",{className:S},"Version:",r.createElement(g.Z,{docsPluginId:t,dropdownItemsBefore:[],dropdownItemsAfter:"docs-apisix"===t?f.archivedVersions:[],items:[]}))},_=r.memo(N),x=e=>{let{toggleSidebar:t,sidebar:a,path:n,docsPluginId:l}=e;return r.createElement(r.Fragment,null,r.createElement(_,{docsPluginId:l}),r.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},r.createElement(b.O,{items:a,activePath:n,onItemClick:()=>t()})))},P=e=>r.createElement(i.Cv,{component:x,props:e}),B=e=>{let{path:t,sidebar:a,onCollapse:n,isHidden:l,docsPluginId:o}=e;const s=function(){const{isClosed:e}=(0,i.nT)(),[t,a]=(0,r.useState)(!e);return(0,u.Z)((t=>{let{scrollY:n}=t;e||a(0===n)})),t}(),{navbar:{hideOnScroll:d},hideableSidebar:p}=(0,i.LU)(),{isClosed:h}=(0,i.nT)();return r.createElement("div",{className:(0,c.Z)(E,{[v]:d,[Z]:l})},d&&r.createElement(m.Z,{tabIndex:-1,className:k}),r.createElement(_,{docsPluginId:o}),r.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",w,{[I]:!h&&s})},r.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},r.createElement(b.O,{items:a,activePath:t}))),p&&r.createElement(A,{onClick:n}))},L=r.memo(P),T=r.memo(B),M=e=>{const t=(0,d.Z)(),a="desktop"===t||"ssr"===t,n="mobile"===t;return r.createElement(r.Fragment,null,a&&r.createElement(T,e),n&&r.createElement(L,e))};var D=a(82238),j=a(44401),F=a(5977),R=a(99105),V=a(39861),U=a(36742),X=a(24550);const H={docPage:"docPage_GMj9",docMainContainer:"docMainContainer_Q970",docSidebarContainer:"docSidebarContainer_k0Pq",docMainContainerEnhanced:"docMainContainerEnhanced_ipQ4",docSidebarContainerHidden:"docSidebarContainerHidden_05py",collapsedDocSidebar:"collapsedDocSidebar_3Col",expandSidebarButtonIcon:"expandSidebarButtonIcon_Dhhx",docItemWrapperEnhanced:"docItemWrapperEnhanced_JuqB"},O={general:"General",apisix:"Apache APISIX\xae",dashboard:"Apache APISIX\xae Dashboard","ingress-controller":"Apache APISIX\xae Ingress Controller","helm-chart":"Apache APISIX\xae Helm Chart",docker:"Apache APISIX\xae Docker","java-plugin-runner":"Apache APISIX\xae Java Plugin Runner","go-plugin-runner":"Apache APISIX\xae Go Plugin Runner","python-plugin-runner":"Apache APISIX\xae Python Plugin Runner"},W=Object.keys(O),z=e=>{let{currentDocRoute:t,versionMetadata:a,children:o}=e;const{pluginId:d,version:u}=a,m=t.sidebar,b=m?a.docsSidebars[m]:void 0,[g,f]=(0,r.useState)(!1),[E,v]=(0,r.useState)(!1),Z=t.path.split("/").slice(2,4).reduce(((e,t)=>W.includes(t)?t:e),"");(0,r.useEffect)((()=>{const e=document.querySelector(".navbar__items--right").childElementCount,t=document.querySelector(".navbar__items--right").childNodes[e-2];t.style.display=window.innerWidth>745?"block":"none";return document.querySelectorAll(".navbar__link")[0].innerText=O[Z],()=>{t.style.display="none"}}),[]);const k=(0,r.useCallback)((()=>{E&&v(!1),f(!g)}),[E]);return r.createElement(s.Z,{wrapperClassName:i.kM.wrapper.docsPages,pageClassName:i.kM.page.docsDocPage,searchMetadatas:{version:u,tag:(0,i.os)(d,u)}},r.createElement("div",{className:H.docPage},r.createElement(j.Z,null),b&&r.createElement("aside",{className:(0,c.Z)(H.docSidebarContainer,{[H.docSidebarContainerHidden]:g}),onTransitionEnd:e=>{e.currentTarget.classList.contains(H.docSidebarContainer)&&g&&v(!0)}},r.createElement(M,{key:m,sidebar:b,path:t.path,onCollapse:k,isHidden:E,docsPluginId:d}),E&&r.createElement("div",{className:H.collapsedDocSidebar,title:(0,h.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,h.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:k,onClick:k},r.createElement(p.Z,{className:H.expandSidebarButtonIcon}))),r.createElement("main",{className:(0,c.Z)(H.docMainContainer,{[H.docMainContainerEnhanced]:g||!b})},r.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",H.docItemWrapper,{[H.docItemWrapperEnhanced]:g})},r.createElement(l.Zo,{components:()=>(e=>({...D.Z,a:t=>{var a,l;const{children:o,...s}=t,c=(null==(a=t.href)?void 0:a.includes(e))||(null==(l=t.href)?void 0:l.startsWith("#"));return r.createElement(U.Z,(0,n.Z)({},s,{target:c?null:"_blank"}),o)},img:e=>r.createElement(V.LazyLoadImage,(0,n.Z)({effect:"blur",placeholder:r.createElement("div",null,r.createElement("noscript",null,r.createElement("img",(0,n.Z)({alt:"placeholder"},e))),r.createElement("div",{style:{width:500,height:300,borderRadius:"1rem",backgroundColor:"#d2d2d7"}}))},e))}))(Z)},o)))))},Q=e=>{const{route:{routes:t},versionMetadata:a,location:n}=e,l=t.find((e=>(0,F.LX)(n.pathname,e)));return l?r.createElement(r.Fragment,null,r.createElement(R.Z,null,r.createElement("html",{className:a.className})),r.createElement(z,{currentDocRoute:l,versionMetadata:a},(0,o.Z)(t,{versionMetadata:a}))):r.createElement(X.default,e)}},47409:(e,t,a)=>{"use strict";a.d(t,{Z:()=>g});var n=a(87462),r=a(67294),l=a(36742),o=a(44996),s=a(98374),c=a(5423),i=a(5565),d=a(45519),u=a(77645),m=a(39861);const p={container:"container_MP5Z",linksRow:"linksRow_iwpv",linksCol:"linksCol_a1ec",copyright:"copyright_ZfFh"},h={links:[{title:"ASF",items:[{label:"Foundation",to:"https://www.apache.org/"},{label:"License",to:"https://www.apache.org/licenses/"},{label:"Events",to:"https://www.apache.org/events/"},{label:"Security",to:"https://www.apache.org/security/"},{label:"Sponsorship",to:"https://www.apache.org/foundation/sponsorship.html"},{label:"Thanks",to:"https://www.apache.org/foundation/thanks.html"}]},{title:"Community",items:[{icon:c.Z,label:"GitHub",to:"https://github.com/apache/apisix/issues"},{icon:d.Z,label:"Slack",to:"/docs/general/join/#join-the-slack-channel",target:"_parent"},{icon:i.Z,label:"Twitter",to:"https://twitter.com/ApacheAPISIX"},{icon:u.Z,label:"YouTube",to:"https://www.youtube.com/channel/UCgPD18cMhOg5rmPVnQhAC8g"}]},{title:"More",items:[{label:"Blog",to:"/blog/",target:"_parent"},{label:"Showcase",to:"/showcase",target:"_parent"},{label:"Plugin Hub",to:"/plugins",target:"_parent"}]}],logo:{alt:"Apache Software Foundation",src:"https://static.apiseven.com/202202/asf_logo_wide_small.png",href:"https://www.apache.org/"},copyright:"Copyright \xa9 2019-"+(new Date).getFullYear()+" The Apache Software Foundation. Apache APISIX, APISIX\xae, Apache, the Apache feather logo, and the Apache APISIX project logo are either registered trademarks or trademarks of the Apache Software Foundation."},b=e=>{let{to:t,icon:a,href:c,label:i,prependBaseUrlToHref:d,...u}=e;const m=(0,o.Z)(t),p=(0,o.Z)(c,{forcePrependBaseUrl:!0}),h=c?{href:d?p:c}:{to:m};return r.createElement(l.Z,(0,n.Z)({},h,u),r.createElement(s.JO,{icon:a}),r.createElement("span",null,i))},g=()=>{const{copyright:e,links:t,logo:a}=h;return h?r.createElement("footer",{className:p.container},t&&t.length>0&&r.createElement("div",{className:p.linksRow},t.map((e=>{let{title:t,items:a}=e;return r.createElement("div",{key:t,className:p.linksCol},r.createElement("div",null,t),r.createElement("ul",null,a.map((e=>r.createElement("li",{key:e.to,className:"footer__item"},r.createElement(b,e))))))}))),r.createElement("div",{className:p.copyright},r.createElement(l.Z,{href:a.href},r.createElement(m.LazyLoadImage,{alt:a.alt,src:a.src,height:"40px",width:"231.25px"})),r.createElement("div",{className:p.text},e))):null}},19103:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var n=a(87462),r=a(67294),l=a(36742),o=a(98465),s=a(44996),c=a(52263),i=a(941);const d=e=>{const{siteConfig:{title:t}}=(0,c.Z)(),{navbar:{title:a,logo:d={src:""}}}=(0,i.LU)(),{imageClassName:u,titleClassName:m,...p}=e,h=(0,s.Z)(d.href||"/"),b={light:(0,s.Z)(d.src),dark:(0,s.Z)(d.srcDark||d.src)};return r.createElement(l.Z,(0,n.Z)({target:"_parent",to:h},p),d.src&&r.createElement(o.Z,{className:u,sources:b,alt:d.alt||a||t}),null!=a&&r.createElement("b",{className:m},a))}},74653:(e,t,a)=>{"use strict";a.d(t,{Z:()=>E});var n=a(87462),r=a(67294),l=a(5525),o=a(23154),s=a(96730),c=a(941),i=a(24973),d=a(86010),u=a(49200);const m="badge_6FVu",p="LTS_DFZo",h="Latest_oyqS",b=e=>e.docs.find((t=>t.id===e.mainDocId)),g={LTS:r.createElement("div",{className:(0,d.Z)(m,p)},"LTS"),Latest:r.createElement("div",{className:(0,d.Z)(m,h)},"Latest")},f=e=>{const{version:t,isApisx:a}=e;return r.createElement("div",null,t.label,t.isLast&&g.Latest,a&&u.LTSVersions.includes(t.label)&&g.LTS)},E=e=>{var t,a;let{mobile:d,docsPluginId:u,dropdownActiveClassDisabled:m,dropdownItemsBefore:p,dropdownItemsAfter:h,...g}=e;const E=(0,s.useActiveDocContext)(u),v=(0,s.useVersions)(u),Z=(0,s.useLatestVersion)(u),k="docs-apisix"===u,{preferredVersion:w,savePreferredVersionName:I}=(0,c.J)(u);const C=function(){const e=v.map((e=>{const t=(null==E?void 0:E.alternateDocVersions[e.name])||b(e);return{isNavLink:!0,label:r.createElement(f,{version:e,isApisx:k}),to:t.path,isActive:()=>e===(null==E?void 0:E.activeVersion),onClick:()=>{I(e.name)}}}));return[...p,...e,...h]}(),y=null!=(t=null!=(a=E.activeVersion)?a:w)?t:Z,S=d&&C?(0,i.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):y.label,A=d&&C?void 0:b(y).path;return C.length<=1?r.createElement(l.Z,(0,n.Z)({},g,{mobile:d,label:S,to:A,isActive:m?()=>!1:void 0})):r.createElement(o.Z,(0,n.Z)({},g,{mobile:d,label:S,to:A,items:C,isActive:m?()=>!1:void 0}))}},29542:(e,t,a)=>{"use strict";a.d(t,{Z:()=>p});var n=a(87462),r=a(67294),l=a(23154),o=a(23264),s=a(52263),c=a(941),i=a(5977),d=a(36742);const u="iconLanguage_zID8",m="localizedBlogLink_cE-3",p=e=>{const{mobile:t,dropdownItemsBefore:a,dropdownItemsAfter:p,...h}=e,{i18n:{currentLocale:b,locales:g,localeConfigs:f}}=(0,s.Z)(),E=(0,c.l5)(),{pathname:v}=(0,i.TH)();if(v.startsWith("/zh/blog"))return r.createElement(d.Z,{className:m,isNavLink:!0,autoAddBaseUrl:!1,to:"pathname:///blog",target:"_self"},"English Blog");if(v.startsWith("/blog"))return r.createElement(d.Z,{className:m,isNavLink:!0,autoAddBaseUrl:!1,to:"pathname:///zh/blog",target:"_self"},"\u4e2d\u6587\u535a\u5ba2");function Z(e){return f[e].label}const k=[...a,...g.map((e=>{const t="pathname://"+E.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:Z(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===b?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...p],w=t?"Languages":Z(b);return r.createElement(l.Z,(0,n.Z)({},h,{href:"#",mobile:t,label:r.createElement("span",null,r.createElement(o.Z,{className:u}),r.createElement("span",null,w)),items:k}))}},88749:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var n=a(67294),r=a(5525),l=a(23154),o=a(29542),s=a(51093);const c={default:()=>r.Z,localeDropdown:()=>o.Z,search:()=>s.Z,dropdown:()=>l.Z,docsVersion:()=>a(47250).Z,docsVersionDropdown:()=>a(74653).Z,doc:()=>a(76400).Z};const i=e=>{let{type:t,...a}=e;const r=function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==a.items),l=(e=>{const t=c[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()})(r);return n.createElement(l,a)}},24550:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>p});var n=a(67294),r=a(34328),l=a(24973),o=a(36742);const s="container_RGNa";var c=a(87462),i=a(98055),d=a(86010);const u=(e,t)=>{const{tagName:a,children:r,wrapText:l=!1,className:o,...s}=e,u=a,m=n.useRef(null),p=t||m;return n.useLayoutEffect((()=>{const e=t||m,a=(0,i.Z)(null==e?void 0:e.current,{minSize:10,maxSize:512,multiLine:l,observeMutations:{subtree:!0,childList:!0,characterData:!0,attributeFilter:["class"]}});return requestAnimationFrame((()=>{a.fit()})),()=>{(0,i.Z)(e.current).unsubscribe()}}),[]),n.createElement(u,{className:(0,d.Z)("fit-wrapper",o)},n.createElement("span",(0,c.Z)({className:"fit",ref:p},s),r))},m=(0,n.forwardRef)(u),p=()=>n.createElement(r.Z,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:s},n.createElement("section",null,n.createElement(m,{tagName:"h1",contentEditable:!0},"404"),n.createElement(m,{tagName:"h2"},"Page Not Found")),n.createElement("p",null,"We could not find what you were looking for."),n.createElement("p",null,"If you think this link should not be broken, please"," ",n.createElement(o.Z,{href:"https://github.com/apache/apisix-website/issues/new/choose",target:"_blank",rel:"noreferrer"},"submit an Issue"),"."),n.createElement("p",null,"You can also return to"," ",n.createElement(o.Z,{href:"/"},"the home page"),". Or, return to"," ",n.createElement("a",{role:"button",href:"#",onClick:()=>{var e;null==(e=window)||e.history.back()}},"the source page"),".")))},13507:(e,t,a)=>{"use strict";a.d(t,{Z:()=>Z});var n=a(87462),r=a(67294),l=a(73935),o=a(52263),s=a(44996),c=a(36742),i=a(99105),d=a(6397),u=a(57052),m=a(16747),p=a(95613),h=a(24973);const b="searchBox_fBfG";let g=null;function f(e){let{hit:t,children:a}=e;return r.createElement("a",{href:t.url,target:"_parent"},a)}function E(e){let{state:t,onClose:a}=e;const{generateSearchPageLink:n}=(0,d.Z)();return r.createElement(c.Z,{to:n(t.query),onClick:a,target:"_blank"},"See all ",t.context.nbHits," results")}function v(e){var t,c;let{contextualSearch:d,...v}=e;const{siteMetadata:Z}=(0,o.Z)(),k=(0,p.Z)(),w=null!=(t=null==(c=v.searchParameters)?void 0:c.facetFilters)?t:[],I=d?[...k,...w]:w,C={...v.searchParameters,facetFilters:I},{withBaseUrl:y}=(0,s.C)(),S=(0,r.useRef)(null),A=(0,r.useRef)(null),[N,_]=(0,r.useState)(!1),[x,P]=(0,r.useState)(null),B=(0,r.useCallback)((()=>g?Promise.resolve():Promise.all([a.e(30477).then(a.bind(a,12431)),Promise.all([a.e(40532),a.e(46945)]).then(a.bind(a,46945)),Promise.all([a.e(40532),a.e(9846)]).then(a.bind(a,9846))]).then((e=>{let[{DocSearchModal:t}]=e;g=t}))),[]),L=(0,r.useCallback)((()=>{B().then((()=>{S.current=document.createElement("div"),document.body.insertBefore(S.current,document.body.firstChild),_(!0)}))}),[B,_]),T=(0,r.useCallback)((()=>{_(!1),S.current.remove()}),[_]),M=(0,r.useCallback)((e=>{B().then((()=>{_(!0),P(e.key)}))}),[B,_,P]),D=(0,r.useRef)({navigate(e){let{itemUrl:t}=e;location.assign(t)}}).current,j=(0,r.useRef)((e=>e.map((e=>{const t=document.createElement("a");return t.href=e.url,{...e,url:y(""+t.pathname+t.hash)}})))).current,F=(0,r.useMemo)((()=>e=>r.createElement(E,(0,n.Z)({},e,{onClose:T}))),[T]),R=(0,r.useCallback)((e=>(e.addAlgoliaAgent("docusaurus",Z.docusaurusVersion),e)),[Z.docusaurusVersion]);(0,u.D)({isOpen:N,onOpen:L,onClose:T,onInput:M,searchButtonRef:A});const V=(0,h.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return r.createElement(r.Fragment,null,r.createElement(i.Z,null,r.createElement("link",{rel:"preconnect",href:"https://"+v.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),r.createElement("div",{className:b},r.createElement(m.a,{onTouchStart:B,onFocus:B,onMouseOver:B,onClick:L,ref:A,translations:{buttonText:V,buttonAriaLabel:V}})),N&&(0,l.createPortal)(r.createElement(g,(0,n.Z)({onClose:T,initialScrollY:window.scrollY,initialQuery:x,navigator:D,transformItems:j,hitComponent:f,resultsFooterComponent:F,transformSearchClient:R},v,{searchParameters:C})),S.current))}const Z=function(){const{siteConfig:e}=(0,o.Z)();return r.createElement(v,e.themeConfig.algolia)}}}]);