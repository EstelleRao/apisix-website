(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[13751,10926],{49200:e=>{e.exports={versions:["2.12","2.13","2.14","2.15","3.0","3.1"],LTSVersions:["2.15"],versionMap:{2.99:"3.0.0-beta"},archivedVersions:[{label:"2.11",href:"https://625a9090d04b9a6953165811--2-11-old-docs-apache-apisix.netlify.app/docs/apisix/getting-started/"},{label:"2.10",href:"https://625a9090d04b9a6953165811--2-11-old-docs-apache-apisix.netlify.app/docs/apisix/2.10/getting-started/"},{label:"2.9",href:"https://625a57e513f19e48ae3a4468--old-docs-apache-apisix.netlify.app/docs/apisix/getting-started/"},{label:"2.8",href:"https://625a57e513f19e48ae3a4468--old-docs-apache-apisix.netlify.app/docs/apisix/2.8/getting-started/"},{label:"2.7",href:"https://625a57e513f19e48ae3a4468--old-docs-apache-apisix.netlify.app/docs/apisix/2.7/getting-started/"},{label:"2.6",href:"https://625a57e513f19e48ae3a4468--old-docs-apache-apisix.netlify.app/docs/apisix/2.6/getting-started/"},{label:"2.5",href:"https://625a57e513f19e48ae3a4468--old-docs-apache-apisix.netlify.app/docs/apisix/2.5/getting-started/"},{label:"2.4",href:"https://625a57e513f19e48ae3a4468--old-docs-apache-apisix.netlify.app/docs/apisix/2.4/getting-started/"}]}},83316:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>m});var l=a(67294),n=a(34328),r=a(941),s=a(37211);const o="tag_7kA+";function c(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:o},l.createElement(s.Z,e))))),l.createElement("hr",null))}const i=function(e){let{tags:t}=e;const a=(0,r.PZ)(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(c,{key:e.letter,letterEntry:e}))))};const m=function(e){let{tags:t}=e;const a=(0,r.MA)();return l.createElement(n.Z,{title:a,wrapperClassName:r.kM.wrapper.docsPages,pageClassName:r.kM.page.docsTagsListPage,searchMetadatas:{tag:"doc_tags_list"}},l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("main",{className:"col col--8 col--offset-2"},l.createElement("h1",null,a),l.createElement(i,{tags:t})))))}},37211:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var l=a(67294),n=a(86010),r=a(36742);const s="tag_WK-t",o="tagRegular_LXbV",c="tagWithCount_S5Zl";const i=function(e){const{permalink:t,name:a,count:i}=e;return l.createElement(r.Z,{href:t,className:(0,n.Z)(s,{[o]:!i,[c]:i})},a,i&&l.createElement("span",null,i))}},47409:(e,t,a)=>{"use strict";a.d(t,{Z:()=>f});var l=a(87462),n=a(67294),r=a(36742),s=a(44996),o=a(98374),c=a(5423),i=a(5565),m=a(45519),p=a(77645),u=a(39861);const d={container:"container_MP5Z",linksRow:"linksRow_iwpv",linksCol:"linksCol_a1ec",copyright:"copyright_ZfFh"},h={links:[{title:"ASF",items:[{label:"Foundation",to:"https://www.apache.org/"},{label:"License",to:"https://www.apache.org/licenses/"},{label:"Events",to:"https://www.apache.org/events/"},{label:"Security",to:"https://www.apache.org/security/"},{label:"Sponsorship",to:"https://www.apache.org/foundation/sponsorship.html"},{label:"Thanks",to:"https://www.apache.org/foundation/thanks.html"}]},{title:"Community",items:[{icon:c.Z,label:"GitHub",to:"https://github.com/apache/apisix/issues"},{icon:m.Z,label:"Slack",to:"/docs/general/join/#join-the-slack-channel",target:"_parent"},{icon:i.Z,label:"Twitter",to:"https://twitter.com/ApacheAPISIX"},{icon:p.Z,label:"YouTube",to:"https://www.youtube.com/channel/UCgPD18cMhOg5rmPVnQhAC8g"}]},{title:"More",items:[{label:"Blog",to:"/blog/",target:"_parent"},{label:"Showcase",to:"/showcase",target:"_parent"},{label:"Plugin Hub",to:"/plugins",target:"_parent"}]}],logo:{alt:"Apache Software Foundation",src:"https://static.apiseven.com/202202/asf_logo_wide_small.png",href:"https://www.apache.org/"},copyright:"Copyright \xa9 2019-"+(new Date).getFullYear()+" The Apache Software Foundation. Apache APISIX, APISIX\xae, Apache, the Apache feather logo, and the Apache APISIX project logo are either registered trademarks or trademarks of the Apache Software Foundation."},g=e=>{let{to:t,icon:a,href:c,label:i,prependBaseUrlToHref:m,...p}=e;const u=(0,s.Z)(t),d=(0,s.Z)(c,{forcePrependBaseUrl:!0}),h=c?{href:m?d:c}:{to:u};return n.createElement(r.Z,(0,l.Z)({},h,p),n.createElement(o.JO,{icon:a}),n.createElement("span",null,i))},f=()=>{const{copyright:e,links:t,logo:a}=h;return h?n.createElement("footer",{className:d.container},t&&t.length>0&&n.createElement("div",{className:d.linksRow},t.map((e=>{let{title:t,items:a}=e;return n.createElement("div",{key:t,className:d.linksCol},n.createElement("div",null,t),n.createElement("ul",null,a.map((e=>n.createElement("li",{key:e.to,className:"footer__item"},n.createElement(g,e))))))}))),n.createElement("div",{className:d.copyright},n.createElement(r.Z,{href:a.href},n.createElement(u.LazyLoadImage,{alt:a.alt,src:a.src,height:"40px",width:"231.25px"})),n.createElement("div",{className:d.text},e))):null}},19103:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var l=a(87462),n=a(67294),r=a(36742),s=a(98465),o=a(44996),c=a(52263),i=a(941);const m=e=>{const{siteConfig:{title:t}}=(0,c.Z)(),{navbar:{title:a,logo:m={src:""}}}=(0,i.LU)(),{imageClassName:p,titleClassName:u,...d}=e,h=(0,o.Z)(m.href||"/"),g={light:(0,o.Z)(m.src),dark:(0,o.Z)(m.srcDark||m.src)};return n.createElement(r.Z,(0,l.Z)({target:"_parent",to:h},d),m.src&&n.createElement(s.Z,{className:p,sources:g,alt:m.alt||a||t}),null!=a&&n.createElement("b",{className:u},a))}},74653:(e,t,a)=>{"use strict";a.d(t,{Z:()=>v});var l=a(87462),n=a(67294),r=a(5525),s=a(23154),o=a(96730),c=a(941),i=a(24973),m=a(86010),p=a(49200);const u="badge_6FVu",d="LTS_DFZo",h="Latest_oyqS",g=e=>e.docs.find((t=>t.id===e.mainDocId)),f={LTS:n.createElement("div",{className:(0,m.Z)(u,d)},"LTS"),Latest:n.createElement("div",{className:(0,m.Z)(u,h)},"Latest")},b=e=>{const{version:t,isApisx:a}=e;return n.createElement("div",null,t.label,t.isLast&&f.Latest,a&&p.LTSVersions.includes(t.label)&&f.LTS)},v=e=>{var t,a;let{mobile:m,docsPluginId:p,dropdownActiveClassDisabled:u,dropdownItemsBefore:d,dropdownItemsAfter:h,...f}=e;const v=(0,o.useActiveDocContext)(p),E=(0,o.useVersions)(p),w=(0,o.useLatestVersion)(p),Z="docs-apisix"===p,{preferredVersion:k,savePreferredVersionName:C}=(0,c.J)(p);const y=function(){const e=E.map((e=>{const t=(null==v?void 0:v.alternateDocVersions[e.name])||g(e);return{isNavLink:!0,label:n.createElement(b,{version:e,isApisx:Z}),to:t.path,isActive:()=>e===(null==v?void 0:v.activeVersion),onClick:()=>{C(e.name)}}}));return[...d,...e,...h]}(),A=null!=(t=null!=(a=v.activeVersion)?a:k)?t:w,N=m&&y?(0,i.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):A.label,_=m&&y?void 0:g(A).path;return y.length<=1?n.createElement(r.Z,(0,l.Z)({},f,{mobile:m,label:N,to:_,isActive:u?()=>!1:void 0})):n.createElement(s.Z,(0,l.Z)({},f,{mobile:m,label:N,to:_,items:y,isActive:u?()=>!1:void 0}))}},29542:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var l=a(87462),n=a(67294),r=a(23154),s=a(23264),o=a(52263),c=a(941),i=a(5977),m=a(36742);const p="iconLanguage_zID8",u="localizedBlogLink_cE-3",d=e=>{const{mobile:t,dropdownItemsBefore:a,dropdownItemsAfter:d,...h}=e,{i18n:{currentLocale:g,locales:f,localeConfigs:b}}=(0,o.Z)(),v=(0,c.l5)(),{pathname:E}=(0,i.TH)();if(E.startsWith("/zh/blog"))return n.createElement(m.Z,{className:u,isNavLink:!0,autoAddBaseUrl:!1,to:"pathname:///blog",target:"_self"},"English Blog");if(E.startsWith("/blog"))return n.createElement(m.Z,{className:u,isNavLink:!0,autoAddBaseUrl:!1,to:"pathname:///zh/blog",target:"_self"},"\u4e2d\u6587\u535a\u5ba2");function w(e){return b[e].label}const Z=[...a,...f.map((e=>{const t="pathname://"+v.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:w(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===g?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...d],k=t?"Languages":w(g);return n.createElement(r.Z,(0,l.Z)({},h,{href:"#",mobile:t,label:n.createElement("span",null,n.createElement(s.Z,{className:p}),n.createElement("span",null,k)),items:Z}))}},88749:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var l=a(67294),n=a(5525),r=a(23154),s=a(29542),o=a(51093);const c={default:()=>n.Z,localeDropdown:()=>s.Z,search:()=>o.Z,dropdown:()=>r.Z,docsVersion:()=>a(47250).Z,docsVersionDropdown:()=>a(74653).Z,doc:()=>a(76400).Z};const i=e=>{let{type:t,...a}=e;const n=function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==a.items),r=(e=>{const t=c[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()})(n);return l.createElement(r,a)}},13507:(e,t,a)=>{"use strict";a.d(t,{Z:()=>w});var l=a(87462),n=a(67294),r=a(73935),s=a(52263),o=a(44996),c=a(36742),i=a(99105),m=a(6397),p=a(57052),u=a(16747),d=a(95613),h=a(24973);const g="searchBox_fBfG";let f=null;function b(e){let{hit:t,children:a}=e;return n.createElement("a",{href:t.url,target:"_parent"},a)}function v(e){let{state:t,onClose:a}=e;const{generateSearchPageLink:l}=(0,m.Z)();return n.createElement(c.Z,{to:l(t.query),onClick:a,target:"_blank"},"See all ",t.context.nbHits," results")}function E(e){var t,c;let{contextualSearch:m,...E}=e;const{siteMetadata:w}=(0,s.Z)(),Z=(0,d.Z)(),k=null!=(t=null==(c=E.searchParameters)?void 0:c.facetFilters)?t:[],C=m?[...Z,...k]:k,y={...E.searchParameters,facetFilters:C},{withBaseUrl:A}=(0,o.C)(),N=(0,n.useRef)(null),_=(0,n.useRef)(null),[S,x]=(0,n.useState)(!1),[L,I]=(0,n.useState)(null),P=(0,n.useCallback)((()=>f?Promise.resolve():Promise.all([a.e(12431).then(a.bind(a,12431)),Promise.all([a.e(40532),a.e(46945)]).then(a.bind(a,46945)),Promise.all([a.e(40532),a.e(9846)]).then(a.bind(a,9846))]).then((e=>{let[{DocSearchModal:t}]=e;f=t}))),[]),V=(0,n.useCallback)((()=>{P().then((()=>{N.current=document.createElement("div"),document.body.insertBefore(N.current,document.body.firstChild),x(!0)}))}),[P,x]),T=(0,n.useCallback)((()=>{x(!1),N.current.remove()}),[x]),B=(0,n.useCallback)((e=>{P().then((()=>{x(!0),I(e.key)}))}),[P,x,I]),D=(0,n.useRef)({navigate(e){let{itemUrl:t}=e;location.assign(t)}}).current,F=(0,n.useRef)((e=>e.map((e=>{const t=document.createElement("a");return t.href=e.url,{...e,url:A(""+t.pathname+t.hash)}})))).current,M=(0,n.useMemo)((()=>e=>n.createElement(v,(0,l.Z)({},e,{onClose:T}))),[T]),R=(0,n.useCallback)((e=>(e.addAlgoliaAgent("docusaurus",w.docusaurusVersion),e)),[w.docusaurusVersion]);(0,p.D)({isOpen:S,onOpen:V,onClose:T,onInput:B,searchButtonRef:_});const U=(0,h.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return n.createElement(n.Fragment,null,n.createElement(i.Z,null,n.createElement("link",{rel:"preconnect",href:"https://"+E.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),n.createElement("div",{className:g},n.createElement(u.a,{onTouchStart:P,onFocus:P,onMouseOver:P,onClick:V,ref:_,translations:{buttonText:U,buttonAriaLabel:U}})),S&&(0,r.createPortal)(n.createElement(f,(0,l.Z)({onClose:T,initialScrollY:window.scrollY,initialQuery:L,navigator:D,transformItems:F,hitComponent:b,resultsFooterComponent:M,transformSearchClient:R},E,{searchParameters:y})),N.current))}const w=function(){const{siteConfig:e}=(0,s.Z)();return n.createElement(E,e.themeConfig.algolia)}}}]);