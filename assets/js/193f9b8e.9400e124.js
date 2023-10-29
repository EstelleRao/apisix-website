"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5061],{85855:(e,t,a)=>{a.d(t,{Z:()=>f});var l=a(25773),n=a(27378),r=a(9559),o=a(31142),s=a(98374),c=a(5423),i=a(5565),u=a(45519),h=a(77645),m=a(39861);const p={container:"container_N-4m",linksRow:"linksRow_U0oR",linksCol:"linksCol_R6VE",copyright:"copyright_Bdi1"},g={links:[{title:"ASF",items:[{label:"Foundation",to:"https://www.apache.org/"},{label:"License",to:"https://www.apache.org/licenses/"},{label:"Events",to:"https://www.apache.org/events/"},{label:"Security",to:"https://www.apache.org/security/"},{label:"Sponsorship",to:"https://www.apache.org/foundation/sponsorship.html"},{label:"Thanks",to:"https://www.apache.org/foundation/thanks.html"}]},{title:"Community",items:[{icon:c.Z,label:"GitHub",to:"https://github.com/apache/apisix/issues"},{icon:u.Z,label:"Slack",to:"/docs/general/join/#join-the-slack-channel",target:"_parent"},{icon:i.Z,label:"Twitter",to:"https://twitter.com/ApacheAPISIX"},{icon:h.Z,label:"YouTube",to:"https://www.youtube.com/channel/UCgPD18cMhOg5rmPVnQhAC8g"}]},{title:"More",items:[{label:"Blog",to:"/blog/",target:"_parent"},{label:"Showcase",to:"/showcase",target:"_parent"},{label:"Plugin Hub",to:"/plugins",target:"_parent"}]}],logo:{alt:"Apache Software Foundation",src:"https://static.apiseven.com/202202/asf_logo_wide_small.png",href:"https://www.apache.org/"},copyright:"Copyright \xa9 2019-"+(new Date).getFullYear()+" The Apache Software Foundation. Apache APISIX, APISIX\xae, Apache, the Apache feather logo, and the Apache APISIX project logo are either registered trademarks or trademarks of the Apache Software Foundation."},d=e=>{let{to:t,icon:a,href:c,label:i,prependBaseUrlToHref:u,...h}=e;const m=(0,o.Z)(t),p=(0,o.Z)(c,{forcePrependBaseUrl:!0}),g=c?{href:u?p:c}:{to:m};return n.createElement(r.Z,(0,l.Z)({},g,h),n.createElement(s.JO,{icon:a}),n.createElement("span",null,i))},f=()=>{const{copyright:e,links:t,logo:a}=g;return g?n.createElement("footer",{className:p.container},t&&t.length>0&&n.createElement("div",{className:p.linksRow},t.map((e=>{let{title:t,items:a}=e;return n.createElement("div",{key:t,className:p.linksCol},n.createElement("div",null,t),n.createElement("ul",null,a.map((e=>n.createElement("li",{key:e.to,className:"footer__item"},n.createElement(d,e))))))}))),n.createElement("div",{className:p.copyright},n.createElement(r.Z,{href:a.href},n.createElement(m.LazyLoadImage,{alt:a.alt,src:a.src,height:"40px",width:"231.25px"})),n.createElement("div",{className:p.text},e))):null}},57365:(e,t,a)=>{a.d(t,{Z:()=>u});var l=a(25773),n=a(27378),r=a(9559),o=a(69300),s=a(31142),c=a(15638),i=a(1957);const u=e=>{const{siteConfig:{title:t}}=(0,c.Z)(),{navbar:{title:a,logo:u={src:""}}}=(0,i.LU)(),{imageClassName:h,titleClassName:m,...p}=e,g=(0,s.Z)(u.href||"/"),d={light:(0,s.Z)(u.src),dark:(0,s.Z)(u.srcDark||u.src)};return n.createElement(r.Z,(0,l.Z)({target:"_parent",to:g},p),u.src&&n.createElement(o.Z,{className:h,sources:d,alt:u.alt||a||t}),null!=a&&n.createElement("b",{className:m},a))}},6324:(e,t,a)=>{a.d(t,{Z:()=>g});var l=a(25773),n=a(27378),r=a(98886),o=a(76952),s=a(15638),c=a(1957),i=a(69635),u=a(546),h=a(9559);const m="iconLanguage_5RFn",p="localizedBlogLink_W2zh",g=e=>{const{mobile:t,dropdownItemsBefore:a,dropdownItemsAfter:g,...d}=e,{i18n:{currentLocale:f,locales:b,localeConfigs:w}}=(0,s.Z)(),E=(0,c.l5)(),{pathname:k}=(0,i.TH)();if("mobile"!==(0,u.Z)()){if(k.startsWith("/zh/blog"))return n.createElement(h.Z,{className:p,autoAddBaseUrl:!1,to:"pathname:///blog",target:"_parent"},"English Blog");if(k.startsWith("/blog"))return n.createElement(h.Z,{className:p,autoAddBaseUrl:!1,to:"pathname:///zh/blog",target:"_parent"},"\u4e2d\u6587\u535a\u5ba2")}function Z(e){return w[e].label}const C=[...a,...b.map((e=>{const t="pathname://"+E.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:Z(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===f?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...g],v=t?"Languages":Z(f);return n.createElement(r.Z,(0,l.Z)({},d,{href:"#",mobile:t,label:n.createElement("span",null,n.createElement(o.Z,{className:m}),n.createElement("span",null,v)),items:C}))}},53927:(e,t,a)=>{a.d(t,{Z:()=>k});var l=a(25773),n=a(27378),r=a(31542),o=a(15638),s=a(31142),c=a(9559),i=a(94142),u=a(69744),h=a(59495),m=a(62492),p=a(10183),g=a(40639);const d="searchBox_SGhp";let f=null;function b(e){let{hit:t,children:a}=e;return n.createElement("a",{href:t.url,target:"_parent"},a)}function w(e){let{state:t,onClose:a}=e;const{generateSearchPageLink:l}=(0,u.Z)();return n.createElement(c.Z,{to:l(t.query),onClick:a,target:"_blank"},"See all ",t.context.nbHits," results")}function E(e){var t,c;let{contextualSearch:u,...E}=e;const{siteMetadata:k}=(0,o.Z)(),Z=(0,p.Z)(),C=null!=(t=null==(c=E.searchParameters)?void 0:c.facetFilters)?t:[],v=u?[...Z,...C]:C,S={...E.searchParameters,facetFilters:v},{withBaseUrl:_}=(0,s.C)(),A=(0,n.useRef)(null),y=(0,n.useRef)(null),[N,P]=(0,n.useState)(!1),[I,B]=(0,n.useState)(null),F=(0,n.useCallback)((()=>f?Promise.resolve():Promise.all([a.e(6295).then(a.bind(a,96295)),Promise.all([a.e(532),a.e(9127)]).then(a.bind(a,89127)),Promise.all([a.e(532),a.e(7246)]).then(a.bind(a,67246))]).then((e=>{let[{DocSearchModal:t}]=e;f=t}))),[]),R=(0,n.useCallback)((()=>{F().then((()=>{A.current=document.createElement("div"),document.body.insertBefore(A.current,document.body.firstChild),P(!0)}))}),[F,P]),L=(0,n.useCallback)((()=>{P(!1),A.current.remove()}),[P]),U=(0,n.useCallback)((e=>{F().then((()=>{P(!0),B(e.key)}))}),[F,P,B]),T=(0,n.useRef)({navigate(e){let{itemUrl:t}=e;location.assign(t)}}).current,x=(0,n.useRef)((e=>e.map((e=>{const t=document.createElement("a");return t.href=e.url,{...e,url:_(""+t.pathname+t.hash)}})))).current,z=(0,n.useMemo)((()=>e=>n.createElement(w,(0,l.Z)({},e,{onClose:L}))),[L]),M=(0,n.useCallback)((e=>(e.addAlgoliaAgent("docusaurus",k.docusaurusVersion),e)),[k.docusaurusVersion]);(0,h.D)({isOpen:N,onOpen:R,onClose:L,onInput:U,searchButtonRef:y});const O=(0,g.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return n.createElement(n.Fragment,null,n.createElement(i.Z,null,n.createElement("link",{rel:"preconnect",href:"https://"+E.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),n.createElement("div",{className:d},n.createElement(m.a,{onTouchStart:F,onFocus:F,onMouseOver:F,onClick:R,ref:y,translations:{buttonText:O,buttonAriaLabel:O}})),N&&(0,r.createPortal)(n.createElement(f,(0,l.Z)({onClose:L,initialScrollY:window.scrollY,initialQuery:I,navigator:T,transformItems:x,hitComponent:b,resultsFooterComponent:z,transformSearchClient:M},E,{searchParameters:S})),A.current))}const k=function(){const{siteConfig:e}=(0,o.Z)();return n.createElement(E,e.themeConfig.algolia)}}}]);