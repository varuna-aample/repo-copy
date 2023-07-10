"use strict";(self.webpackChunkslim_bp_doc_website=self.webpackChunkslim_bp_doc_website||[]).push([[324],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6689:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={title:"Info",description:"Fetch information about web server",sidebar_position:1},i=void 0,c={unversionedId:"General/info",id:"General/info",title:"Info",description:"Fetch information about web server",source:"@site/docs/General/info.md",sourceDirName:"General",slug:"/General/info",permalink:"/repo/General/info",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Info",description:"Fetch information about web server",sidebar_position:1},sidebar:"APISidebar",previous:{title:"General",permalink:"/repo/category/general"},next:{title:"Mongo Ping",permalink:"/repo/General/mongoPing"}},l={},s=[],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"general-notes"},"General Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Latest git commit date must be in Indian time zone")),(0,o.kt)("h1",{id:"flow"},"Flow"),(0,o.kt)("mermaid",{value:"sequenceDiagram\nautonumber\nparticipant c as Client\nparticipant a as API\n\nc->>a: Get info\na->>c: 200"}),(0,o.kt)("h1",{id:"method--url"},"Method & URL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET v1/general/info\n")),(0,o.kt)("h1",{id:"request"},"Request"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Headers\n{\n x-aample-api-key: <string>, // 15-char-random-alphanumeric,\n}\n")),(0,o.kt)("h1",{id:"response"},"Response"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2xx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "success": true,\n  "message": <string>,\n  "data": {\n    "serviceName": <string>,\n    "serviceVersion": <string>,\n    "git": {\n      "currentBranch": <string>,\n      "latestHashShort": <string>,\n      "latestCommitDate": <string>,\n    },\n    "environment": <string>\n  }\n}\n')))}m.isMDXComponent=!0}}]);