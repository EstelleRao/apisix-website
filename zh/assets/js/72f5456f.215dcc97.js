"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3487,2139],{7956:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Z});var a=n(7378),r=n(2609),l=n(8539),o=n(1787),i=n(353),s=n(5361);const c=e=>{(0,a.useEffect)((()=>{e()}),[])},m=(e,t)=>getComputedStyle(e)[t],p=function(e){if(void 0===e&&(e=0),"number"==typeof e)return e;const t=e,n=/[0-9]+/;if(!n.test(t[0])){const[e=0]=t.match(n)||[];return Number(e)}return e.includes("%")?parseFloat(e)/100:parseFloat(e)},d=r.ZP.div.withConfig({displayName:"Affix__AffixContent",componentId:"sc-1rslgfc-0"})([""]),u=e=>{const{style:t,children:n}=e,{top:r=0}=t||{},l=p(r),[o,i]=(0,a.useState)(!0),[s,u]=(0,a.useState)(t),[g,h]=(0,a.useState)(0),[f,w]=(0,a.useState)(0),[b,x]=(0,a.useState)(0),E=()=>{x((()=>window.scrollY))};c((()=>{const e=CSS.supports("position","sticky");return i(e),u(function(e,t){void 0===t&&(t={});const{width:n=0}=t;return{...e?{position:"sticky",marginLeft:"-"+p(n)+"px",display:"inline-block",float:"left"}:{position:"absolute"},...t}}(e,t)),e||window.addEventListener("scroll",E),()=>{window.removeEventListener("scroll",E)}}));return a.createElement(d,{ref:e=>{if(e){var t;const n=null!=(t=e.parentElement)?t:document.body,a=p(m(n,"padding-bottom"));h(e.clientHeight),w(n.clientHeight+n.offsetTop-a)}},style:o?s:f>b+window.innerHeight?{...s,top:b+l}:{...s,top:f-g}},n)},g=r.ZP.h1.withConfig({displayName:"plugins__PageTitle",componentId:"sc-1a0oxlj-0"})(["text-align:center;margin-top:1rem;font-size:3rem;font-weight:700;text-transform:uppercase;"]),h=r.ZP.div.withConfig({displayName:"plugins__PageSubtitle",componentId:"sc-1a0oxlj-1"})(["text-align:center;font-size:1rem;margin-bottom:2rem;font-weight:400;"]),f=r.ZP.div.withConfig({displayName:"plugins__SidebarItem",componentId:"sc-1a0oxlj-2"})(["padding-top:3px;padding-bottom:3px;padding-right:3px;text-align:right;font-size:1rem;font-weight:400;text-transform:capitalize;color:#d0312d;"]),w=r.ZP.div.withConfig({displayName:"plugins__Page",componentId:"sc-1a0oxlj-3"})(["max-width:var(--ifm-container-width);margin:0 auto;padding:2rem var(--ifm-spacing-horizontal);width:100%;flex-wrap:wrap;gridTemplateAreas :\"'SidebarContainer' 'PluginsContainer'\";"]),b=r.ZP.div.withConfig({displayName:"plugins__PluginsContainer",componentId:"sc-1a0oxlj-4"})(["display:grid;margin-left:200px;grid-template-columns:repeat(3,1fr);grid-gap:5px;@media (max-width:1200px){margin-left:0;}@media (max-width:812px){grid-template-columns:repeat(2,1fr);}@media (max-width:576px){grid-template-columns:repeat(1,1fr);}"]),x=r.ZP.div.withConfig({displayName:"plugins__SidebarContainer",componentId:"sc-1a0oxlj-5"})(["display:grid;width:100%;overflow-x:hidden;padding-right:10px;border-style:solid;border-color:#ffffff #efeff5 #ffffff #ffffff;@media (max-width:1200px){display:none;}"]),E=r.ZP.a.withConfig({displayName:"plugins__PluginCard",componentId:"sc-1a0oxlj-6"})(["border-radius:0.75rem;border:1px solid #eee;box-shadow:0 1px 2px 0 rgba(0,0,0,0.05);display:flex;flex-direction:column;align-items:left;text-align:left;padding:1rem;min-width:calc(180px + 5rem);cursor:pointer;height:100%;&:hover{color:inherit;text-decoration:none;}"]),v=r.ZP.div.withConfig({displayName:"plugins__PluginIcon",componentId:"sc-1a0oxlj-7"})(["padding:1rem;display:flex;min-height:200px;align-items:center;justify-content:center;"]),y=r.ZP.div.withConfig({displayName:"plugins__PluginName",componentId:"sc-1a0oxlj-8"})(["display:flex;align-items:center;font-size:1rem;font-weight:600;margin-top:12px;margin-bottom:-4px;line-height:1rem;text-align:left;text-transform:capitalize;"]),C=r.ZP.div.withConfig({displayName:"plugins__PluginDescription",componentId:"sc-1a0oxlj-9"})(["font-size:0.8rem;font-weight:500;margin-top:10px;color :#7e7c7c;text-align:left;"]),_=r.ZP.h2.withConfig({displayName:"plugins__SectionTitle",componentId:"sc-1a0oxlj-10"})(["margin-left:200px;margin-bottom:24px;margin-top:84px;text-transform:uppercase;@media (max-width:1200px){margin-left:0;}"]),P=r.ZP.div.withConfig({displayName:"plugins__SBeta",componentId:"sc-1a0oxlj-11"})(['padding:0.1rem 0.5rem 0.1rem 0.3rem;margin:0 0.5rem;font-size:90%;font-weight:300;border:1px solid #dadde1;border-right:0;position:relative;transition:all 0.2s;::before{content:"";left:100%;transform:translate(-50%,-50%) rotate(45deg);border-left:0 !important;border-bottom:0 !important;width:0.9rem;height:0.9rem;border:1px solid var(--docusaurus-tag-list-border);position:absolute;top:50%;transition:inherit;}::after{content:\'\';right:0;border-radius:50%;height:0.4rem;width:0.4rem;left:90%;transform:translateY(-50%);border:1px solid var(--docusaurus-tag-list-border);content:"";position:absolute;top:50%;transition:inherit;}:hover{color:#e8433e;border-color:#e8433e;::before,::after{border-color:#e8433e;}}']),Z=()=>{const{siteConfig:e}=(0,i.Z)(),{plugins:t=[]}=e.customFields,n=t.map((e=>a.createElement(f,{key:e.groupName},a.createElement("a",{className:"sidebar-link",href:"#"+e.groupName},e.groupName)))),r=t.map((e=>{const t=e.plugins.map((e=>{const t=-1!==e.name.indexOf("serverless")?"serverless":e.name;return a.createElement("div",{key:e.name},a.createElement(E,{href:e.beta?"/docs/apisix/next/plugins/"+t:"/docs/apisix/plugins/"+t,target:"_blank"},a.createElement(v,null,e.useDefaultIcon?a.createElement("img",{className:"plugin-logo shadow default",src:"/img/plugin/default-icon.png",alt:e.name}):a.createElement("svg",{className:"plugin-logo shadow","aria-hidden":"true"},a.createElement("use",{xlinkHref:"#icon"+e.name}))),a.createElement(y,null,e.name,e.beta&&a.createElement(P,{title:"This plugin will be supported in the next version of Apache APISIX"},"Beta")),a.createElement(C,null,e.description),a.createElement("span",{className:"read-more-link"},"Read more >")))}));return a.createElement("div",{key:e.groupName},a.createElement(_,{id:e.groupName},e.groupName),a.createElement(b,null,t))}));return a.createElement(l.Z,{title:(0,o.I)({message:"Plugin Hub"})},a.createElement(s.Z,null,a.createElement("script",{src:"/js/plugin-icon.js",defer:!0})),a.createElement(w,null,a.createElement(g,null,a.createElement(o.Z,{id:"plugins.website.title"},"Apache APISIX\xae\ufe0f Plugin Hub")),a.createElement(h,null,a.createElement(o.Z,{id:"plugins.website.subtitle"},"Powerful Plugins and Easy Integrations")),a.createElement(u,{style:{width:250,top:300,left:0,zIndex:1}},a.createElement(x,null,n)),r))}},6459:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(5773),r=n(7378),l=n(4142),o=n(8948),i=n(8374),s=n(5423),c=n(5565),m=n(5519),p=n(7645),d=n(9861);const u={container:"container_MP5Z",linksRow:"linksRow_iwpv",linksCol:"linksCol_a1ec",copyright:"copyright_ZfFh"},g={links:[{title:"ASF",items:[{label:"Foundation",to:"https://www.apache.org/"},{label:"License",to:"https://www.apache.org/licenses/"},{label:"Events",to:"https://www.apache.org/events/"},{label:"Security",to:"https://www.apache.org/security/"},{label:"Sponsorship",to:"https://www.apache.org/foundation/sponsorship.html"},{label:"Thanks",to:"https://www.apache.org/foundation/thanks.html"}]},{title:"Community",items:[{icon:s.Z,label:"GitHub",to:"https://github.com/apache/apisix/issues"},{icon:m.Z,label:"Slack",to:"/docs/general/join"},{icon:c.Z,label:"Twitter",to:"https://twitter.com/ApacheAPISIX"},{icon:p.Z,label:"YouTube",to:"https://www.youtube.com/channel/UCgPD18cMhOg5rmPVnQhAC8g"}]},{title:"More",items:[{label:"Blog",to:"/blog/",target:"_parent"},{label:"Showcase",to:"/showcase",target:"_parent"},{label:"Plugin Hub",to:"/plugins",target:"_parent"}]}],logo:{alt:"Apache Software Foundation",src:"https://static.apiseven.com/202202/asf_logo_wide_small.png",href:"https://www.apache.org/"},copyright:"Copyright \xa9 2019-"+(new Date).getFullYear()+" The Apache Software Foundation. Apache APISIX, APISIX\xae, Apache, the Apache feather logo, and the Apache APISIX project logo are either registered trademarks or trademarks of the Apache Software Foundation."},h=e=>{let{to:t,icon:n,href:s,label:c,prependBaseUrlToHref:m,...p}=e;const d=(0,o.Z)(t),u=(0,o.Z)(s,{forcePrependBaseUrl:!0}),g=s?{href:m?u:s}:{to:d};return r.createElement(l.Z,(0,a.Z)({},g,p),r.createElement(i.JO,{icon:n}),r.createElement("span",null,c))},f=()=>{const{copyright:e,links:t,logo:n}=g;return g?r.createElement("footer",{className:u.container},t&&t.length>0&&r.createElement("div",{className:u.linksRow},t.map((e=>{let{title:t,items:n}=e;return r.createElement("div",{key:t,className:u.linksCol},r.createElement("div",null,t),r.createElement("ul",null,n.map((e=>r.createElement("li",{key:e.to,className:"footer__item"},r.createElement(h,e))))))}))),r.createElement("div",{className:u.copyright},r.createElement(l.Z,{href:n.href},r.createElement(d.LazyLoadImage,{alt:n.alt,src:n.src,height:"40px",width:"231.25px"})),r.createElement("div",{className:u.text},e))):null}},4867:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(5773),r=n(7378),l=n(3727),o=n(6281),i=n(353),s=n(5013),c=n(9635),m=n(4142);const p="iconLanguage_zID8",d="localizedBlogLink_cE-3",u=e=>{const{mobile:t,dropdownItemsBefore:n,dropdownItemsAfter:u,...g}=e,{i18n:{currentLocale:h,locales:f,localeConfigs:w}}=(0,i.Z)(),b=(0,s.l5)(),{pathname:x}=(0,c.TH)();if(x.startsWith("/zh/blog"))return r.createElement(m.Z,{className:d,isNavLink:!0,autoAddBaseUrl:!1,to:"pathname:///blog",target:"_self"},"English Blog");if(x.startsWith("/blog"))return r.createElement(m.Z,{className:d,isNavLink:!0,autoAddBaseUrl:!1,to:"pathname:///zh/blog",target:"_self"},"\u4e2d\u6587\u535a\u5ba2");function E(e){return w[e].label}const v=[...n,...f.map((e=>{const t="pathname://"+b.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:E(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===h?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...u],y=t?"Languages":E(h);return r.createElement(l.Z,(0,a.Z)({},g,{href:"#",mobile:t,label:r.createElement("span",null,r.createElement(o.Z,{className:p}),r.createElement("span",null,y)),items:v}))}},5403:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(5773),r=n(7378),l=n(1542),o=n(353),i=n(8948),s=n(4142),c=n(5361),m=n(9033),p=n(9495),d=n(2492),u=n(7489),g=n(1787);const h="searchBox_fBfG";let f=null;function w(e){let{hit:t,children:n}=e;return r.createElement("a",{href:t.url,target:"_parent"},n)}function b(e){let{state:t,onClose:n}=e;const{generateSearchPageLink:a}=(0,m.Z)();return r.createElement(s.Z,{to:a(t.query),onClick:n,target:"_blank"},"See all ",t.context.nbHits," results")}function x(e){var t,s;let{contextualSearch:m,...x}=e;const{siteMetadata:E}=(0,o.Z)(),v=(0,u.Z)(),y=null!=(t=null==(s=x.searchParameters)?void 0:s.facetFilters)?t:[],C=m?[...v,...y]:y,_={...x.searchParameters,facetFilters:C},{withBaseUrl:P}=(0,i.C)(),Z=(0,r.useRef)(null),k=(0,r.useRef)(null),[I,N]=(0,r.useState)(!1),[S,A]=(0,r.useState)(null),j=(0,r.useCallback)((()=>f?Promise.resolve():Promise.all([n.e(6295).then(n.bind(n,6295)),Promise.all([n.e(532),n.e(9127)]).then(n.bind(n,9127)),Promise.all([n.e(532),n.e(160)]).then(n.bind(n,160))]).then((e=>{let[{DocSearchModal:t}]=e;f=t}))),[]),B=(0,r.useCallback)((()=>{j().then((()=>{Z.current=document.createElement("div"),document.body.insertBefore(Z.current,document.body.firstChild),N(!0)}))}),[j,N]),z=(0,r.useCallback)((()=>{N(!1),Z.current.remove()}),[N]),F=(0,r.useCallback)((e=>{j().then((()=>{N(!0),A(e.key)}))}),[j,N,A]),L=(0,r.useRef)({navigate(e){let{itemUrl:t}=e;location.assign(t)}}).current,T=(0,r.useRef)((e=>e.map((e=>{const t=document.createElement("a");return t.href=e.url,{...e,url:P(""+t.pathname+t.hash)}})))).current,H=(0,r.useMemo)((()=>e=>r.createElement(b,(0,a.Z)({},e,{onClose:z}))),[z]),R=(0,r.useCallback)((e=>(e.addAlgoliaAgent("docusaurus",E.docusaurusVersion),e)),[E.docusaurusVersion]);(0,p.D)({isOpen:I,onOpen:B,onClose:z,onInput:F,searchButtonRef:k});const U=(0,g.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return r.createElement(r.Fragment,null,r.createElement(c.Z,null,r.createElement("link",{rel:"preconnect",href:"https://"+x.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),r.createElement("div",{className:h},r.createElement(d.a,{onTouchStart:j,onFocus:j,onMouseOver:j,onClick:B,ref:k,translations:{buttonText:U,buttonAriaLabel:U}})),I&&(0,l.createPortal)(r.createElement(f,(0,a.Z)({onClose:z,initialScrollY:window.scrollY,initialQuery:S,navigator:L,transformItems:T,hitComponent:w,resultsFooterComponent:H,transformSearchClient:R},x,{searchParameters:_})),Z.current))}const E=function(){const{siteConfig:e}=(0,o.Z)();return r.createElement(x,e.themeConfig.algolia)}}}]);