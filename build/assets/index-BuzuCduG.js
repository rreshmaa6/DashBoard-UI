import{f as Y,c as bt,g as nt,a as st,s as g,P as mt,b as S,_ as s,r as f,u as z,d as D,j as v,e as k,h as T,i as M,k as Ct,B as yt,l as _t,m as R,L as G,n as It,o as kt,p as $t,q as Ot,t as W,v as L,w as $,x as O,I as Bt,y as d,z as a,R as Rt,T as lt,A as P,C as Z,M as Mt,D as tt,F as A,E as wt,G as Lt,H as zt,J as C,K as et,N as Dt,O as Tt}from"./index-DHNHZu9S.js";import{T as At,L as jt}from"./Tooltip-DeSGVJ1G.js";import{D as St}from"./Drawer-DwY8rp7y.js";function Pt(t,e=0,r=1){return bt(t,e,r)}function Vt(t){t=t.slice(1);const e=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let r=t.match(e);return r&&r[0].length===1&&(r=r.map(o=>o+o)),r?`rgb${r.length===4?"a":""}(${r.map((o,i)=>i<3?parseInt(o,16):Math.round(parseInt(o,16)/255*1e3)/1e3).join(", ")})`:""}function ct(t){if(t.type)return t;if(t.charAt(0)==="#")return ct(Vt(t));const e=t.indexOf("("),r=t.substring(0,e);if(["rgb","rgba","hsl","hsla","color"].indexOf(r)===-1)throw new Error(Y(9,t));let o=t.substring(e+1,t.length-1),i;if(r==="color"){if(o=o.split(" "),i=o.shift(),o.length===4&&o[3].charAt(0)==="/"&&(o[3]=o[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(i)===-1)throw new Error(Y(10,i))}else o=o.split(",");return o=o.map(n=>parseFloat(n)),{type:r,values:o,colorSpace:i}}function Nt(t){const{type:e,colorSpace:r}=t;let{values:o}=t;return e.indexOf("rgb")!==-1?o=o.map((i,n)=>n<3?parseInt(i,10):i):e.indexOf("hsl")!==-1&&(o[1]=`${o[1]}%`,o[2]=`${o[2]}%`),e.indexOf("color")!==-1?o=`${r} ${o.join(" ")}`:o=`${o.join(", ")}`,`${e}(${o})`}function w(t,e){return t=ct(t),e=Pt(e),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${e}`:t.values[3]=e,Nt(t)}function Ht(t){return nt("MuiAppBar",t)}st("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent","colorError","colorInfo","colorSuccess","colorWarning"]);const Ft=["className","color","enableColorOnDark","position"],Gt=t=>{const{color:e,position:r,classes:o}=t,i={root:["root",`color${S(e)}`,`position${S(r)}`]};return T(i,Ht,o)},j=(t,e)=>t?`${t==null?void 0:t.replace(")","")}, ${e})`:e,Wt=g(mt,{name:"MuiAppBar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,e[`position${S(r.position)}`],e[`color${S(r.color)}`]]}})(({theme:t,ownerState:e})=>{const r=t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[900];return s({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},e.position==="fixed"&&{position:"fixed",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},e.position==="absolute"&&{position:"absolute",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0},e.position==="sticky"&&{position:"sticky",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0},e.position==="static"&&{position:"static"},e.position==="relative"&&{position:"relative"},!t.vars&&s({},e.color==="default"&&{backgroundColor:r,color:t.palette.getContrastText(r)},e.color&&e.color!=="default"&&e.color!=="inherit"&&e.color!=="transparent"&&{backgroundColor:t.palette[e.color].main,color:t.palette[e.color].contrastText},e.color==="inherit"&&{color:"inherit"},t.palette.mode==="dark"&&!e.enableColorOnDark&&{backgroundColor:null,color:null},e.color==="transparent"&&s({backgroundColor:"transparent",color:"inherit"},t.palette.mode==="dark"&&{backgroundImage:"none"})),t.vars&&s({},e.color==="default"&&{"--AppBar-background":e.enableColorOnDark?t.vars.palette.AppBar.defaultBg:j(t.vars.palette.AppBar.darkBg,t.vars.palette.AppBar.defaultBg),"--AppBar-color":e.enableColorOnDark?t.vars.palette.text.primary:j(t.vars.palette.AppBar.darkColor,t.vars.palette.text.primary)},e.color&&!e.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":e.enableColorOnDark?t.vars.palette[e.color].main:j(t.vars.palette.AppBar.darkBg,t.vars.palette[e.color].main),"--AppBar-color":e.enableColorOnDark?t.vars.palette[e.color].contrastText:j(t.vars.palette.AppBar.darkColor,t.vars.palette[e.color].contrastText)},!["inherit","transparent"].includes(e.color)&&{backgroundColor:"var(--AppBar-background)"},{color:e.color==="inherit"?"inherit":"var(--AppBar-color)"},e.color==="transparent"&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))}),Et=f.forwardRef(function(e,r){const o=z({props:e,name:"MuiAppBar"}),{className:i,color:n="primary",enableColorOnDark:l=!1,position:c="fixed"}=o,p=D(o,Ft),u=s({},o,{color:n,position:c,enableColorOnDark:l}),h=Gt(u);return v.jsx(Wt,s({square:!0,component:"header",ownerState:u,elevation:4,className:k(h.root,i,c==="fixed"&&"mui-fixed"),ref:r},p))}),Ut=Et,qt=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],Xt=t=>{const{absolute:e,children:r,classes:o,flexItem:i,light:n,orientation:l,textAlign:c,variant:p}=t;return T({root:["root",e&&"absolute",p,n&&"light",l==="vertical"&&"vertical",i&&"flexItem",r&&"withChildren",r&&l==="vertical"&&"withChildrenVertical",c==="right"&&l!=="vertical"&&"textAlignRight",c==="left"&&l!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",l==="vertical"&&"wrapperVertical"]},Ct,o)},Jt=g("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.absolute&&e.absolute,e[r.variant],r.light&&e.light,r.orientation==="vertical"&&e.vertical,r.flexItem&&e.flexItem,r.children&&e.withChildren,r.children&&r.orientation==="vertical"&&e.withChildrenVertical,r.textAlign==="right"&&r.orientation!=="vertical"&&e.textAlignRight,r.textAlign==="left"&&r.orientation!=="vertical"&&e.textAlignLeft]}})(({theme:t,ownerState:e})=>s({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},e.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},e.light&&{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:M(t.palette.divider,.08)},e.variant==="inset"&&{marginLeft:72},e.variant==="middle"&&e.orientation==="horizontal"&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},e.variant==="middle"&&e.orientation==="vertical"&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},e.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},e.flexItem&&{alignSelf:"stretch",height:"auto"}),({ownerState:t})=>s({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,borderTopStyle:"solid",borderLeftStyle:"solid","&::before, &::after":{content:'""',alignSelf:"center"}}),({theme:t,ownerState:e})=>s({},e.children&&e.orientation!=="vertical"&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`,borderTopStyle:"inherit"}}),({theme:t,ownerState:e})=>s({},e.children&&e.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(t.vars||t).palette.divider}`,borderLeftStyle:"inherit"}}),({ownerState:t})=>s({},t.textAlign==="right"&&t.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},t.textAlign==="left"&&t.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),Kt=g("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.wrapper,r.orientation==="vertical"&&e.wrapperVertical]}})(({theme:t,ownerState:e})=>s({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`},e.orientation==="vertical"&&{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`})),dt=f.forwardRef(function(e,r){const o=z({props:e,name:"MuiDivider"}),{absolute:i=!1,children:n,className:l,component:c=n?"div":"hr",flexItem:p=!1,light:u=!1,orientation:h="horizontal",role:b=c!=="hr"?"separator":void 0,textAlign:V="center",variant:N="fullWidth"}=o,x=D(o,qt),m=s({},o,{absolute:i,component:c,flexItem:p,light:u,orientation:h,role:b,textAlign:V,variant:N}),B=Xt(m);return v.jsx(Jt,s({as:c,className:k(B.root,l),role:b,ref:r,ownerState:m},x,{children:n?v.jsx(Kt,{className:B.wrapper,ownerState:m,children:n}):null}))});dt.muiSkipListHighlight=!0;const Qt=dt,Yt=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],Zt=(t,e)=>{const{ownerState:r}=t;return[e.root,r.dense&&e.dense,r.alignItems==="flex-start"&&e.alignItemsFlexStart,r.divider&&e.divider,!r.disableGutters&&e.gutters]},te=t=>{const{alignItems:e,classes:r,dense:o,disabled:i,disableGutters:n,divider:l,selected:c}=t,u=T({root:["root",o&&"dense",!n&&"gutters",l&&"divider",i&&"disabled",e==="flex-start"&&"alignItemsFlexStart",c&&"selected"]},$t,r);return s({},r,u)},ee=g(yt,{shouldForwardProp:t=>_t(t)||t==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:Zt})(({theme:t,ownerState:e})=>s({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${R.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:M(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${R.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:M(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${R.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:M(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:M(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${R.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${R.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},e.alignItems==="flex-start"&&{alignItems:"flex-start"},!e.disableGutters&&{paddingLeft:16,paddingRight:16},e.dense&&{paddingTop:4,paddingBottom:4})),re=f.forwardRef(function(e,r){const o=z({props:e,name:"MuiListItemButton"}),{alignItems:i="center",autoFocus:n=!1,component:l="div",children:c,dense:p=!1,disableGutters:u=!1,divider:h=!1,focusVisibleClassName:b,selected:V=!1,className:N}=o,x=D(o,Yt),m=f.useContext(G),B=f.useMemo(()=>({dense:p||m.dense||!1,alignItems:i,disableGutters:u}),[i,m.dense,p,u]),H=f.useRef(null);It(()=>{n&&H.current&&H.current.focus()},[n]);const Q=s({},o,{alignItems:i,dense:B.dense,disableGutters:u,divider:h,selected:V}),F=te(Q),xt=kt(H,r);return v.jsx(G.Provider,{value:B,children:v.jsx(ee,s({ref:xt,href:x.href||x.to,component:(x.href||x.to)&&l==="div"?"button":l,focusVisibleClassName:k(F.focusVisible,b),ownerState:Q,className:k(F.root,N)},x,{classes:F,children:c}))})}),y=re,oe=["className"],ae=t=>{const{alignItems:e,classes:r}=t;return T({root:["root",e==="flex-start"&&"alignItemsFlexStart"]},Ot,r)},ie=g("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.alignItems==="flex-start"&&e.alignItemsFlexStart]}})(({theme:t,ownerState:e})=>s({minWidth:56,color:(t.vars||t).palette.action.active,flexShrink:0,display:"inline-flex"},e.alignItems==="flex-start"&&{marginTop:8})),ne=f.forwardRef(function(e,r){const o=z({props:e,name:"MuiListItemIcon"}),{className:i}=o,n=D(o,oe),l=f.useContext(G),c=s({},o,{alignItems:l.alignItems}),p=ae(c);return v.jsx(ie,s({className:k(p.root,i),ownerState:c,ref:r},n))}),_=ne;function se(t){return nt("MuiToolbar",t)}st("MuiToolbar",["root","gutters","regular","dense"]);const le=["className","component","disableGutters","variant"],ce=t=>{const{classes:e,disableGutters:r,variant:o}=t;return T({root:["root",!r&&"gutters",o]},se,e)},de=g("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,!r.disableGutters&&e.gutters,e[r.variant]]}})(({theme:t,ownerState:e})=>s({position:"relative",display:"flex",alignItems:"center"},!e.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}},e.variant==="dense"&&{minHeight:48}),({theme:t,ownerState:e})=>e.variant==="regular"&&t.mixins.toolbar),pe=f.forwardRef(function(e,r){const o=z({props:e,name:"MuiToolbar"}),{className:i,component:n="div",disableGutters:l=!1,variant:c="regular"}=o,p=D(o,le),u=s({},o,{component:n,disableGutters:l,variant:c}),h=ce(u);return v.jsx(de,s({as:n,className:k(h.root,i),ref:r,ownerState:u},p))}),ue=pe,ve=W(v.jsx("path",{d:"M22 9V7h-2v2h-2v2h2v2h2v-2h2V9zM8 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4m6 5H2v-.99C2.2 16.29 5.3 15 8 15s5.8 1.29 6 2zM12.51 4.05C13.43 5.11 14 6.49 14 8s-.57 2.89-1.49 3.95C14.47 11.7 16 10.04 16 8s-1.53-3.7-3.49-3.95m4.02 9.78C17.42 14.66 18 15.7 18 17v3h2v-3c0-1.45-1.59-2.51-3.47-3.17"}),"GroupAddOutlined"),ge=W(v.jsx("path",{d:"m17 8-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5z"}),"LogoutOutlined"),fe=W(v.jsx("path",{d:"M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"}),"SettingsOutlined"),rt=g(L)({display:"flex"});var E={},he=O;Object.defineProperty(E,"__esModule",{value:!0});var pt=E.default=void 0,xe=he($()),be=v;pt=E.default=(0,xe.default)((0,be.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search");const me=g("div")(({theme:t})=>({position:"relative",borderRadius:t.shape.borderRadius,border:`1px solid ${w(t.palette.common.black,.1)}`,backgroundColor:w(t.palette.common.white,.15),"&:hover":{backgroundColor:w(t.palette.common.white,.25)},marginRight:t.spacing(2),marginLeft:0,width:"100%",[t.breakpoints.up("sm")]:{marginLeft:t.spacing(3),width:"auto"}})),Ce=g("div")(({theme:t})=>({padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"})),ye=g(Bt)(({theme:t})=>({color:"inherit","& .MuiInputBase-input":{padding:t.spacing(1,1,1,0),paddingLeft:`calc(1em + ${t.spacing(4)})`,transition:t.transitions.create("width"),width:"100%",[t.breakpoints.up("md")]:{width:"20ch"}},"& input":{color:"inherit"},"& .MuiInputBase-input:focus":{backgroundColor:w(t.palette.common.white,.25)}})),_e=()=>d(me,{children:[a(Ce,{children:a(pt,{})}),a(ye,{placeholder:"Search…",inputProps:{"aria-label":"search"}})]});var U={},Ie=O;Object.defineProperty(U,"__esModule",{value:!0});var ut=U.default=void 0,ke=Ie($()),$e=v;ut=U.default=(0,ke.default)((0,$e.jsx)("path",{d:"M9.37 5.51c-.18.64-.27 1.31-.27 1.99 0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27C17.45 17.19 14.93 19 12 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1"}),"DarkModeOutlined");const Oe=()=>{const{theme:t,switchTheme:e}=Rt.useContext(lt);return a(At,{title:"Switch to Dark Mode",children:a(P,{onClick:()=>{e("dark")},color:"inherit",children:a(ut,{})})})},Be=t=>{const[e,r]=f.useState(null),o=!!e,i=p=>{r(p.currentTarget)},n=()=>r(null),l={mr:1,color:"var(--text-secondary)"},c=(p,u,h,b=!0)=>a(wt,{onClick:()=>{window.open(u,b?"_blank":"_self"),n()},children:p});return d(A,{children:[a(P,{onClick:i,size:"small",sx:{ml:2},"aria-controls":o?"account-menu":void 0,"aria-haspopup":"true","aria-expanded":o?"true":void 0,children:a(Z,{sx:{width:32,height:32},children:"Resh"})}),d(Mt,{anchorEl:e,id:"account-menu",open:o,onClose:n,transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:[d(L,{display:"flex",alignItems:"center",sx:{padding:"6px 16px"},children:[a(Z,{children:"Resh"}),d(L,{style:{marginLeft:"8px"},children:[a(tt,{variant:"subtitle1",children:"Reshma"}),a(tt,{variant:"body2",color:"textSecondary",children:"Resh@24"})]})]}),a(Qt,{sx:{my:1}}),c(d(A,{children:[a(fe,{sx:l}),"Settings"]}),"/settings","Settings",!1),c(d(A,{children:[a(ve,{sx:l}),"Refer participants"]}),"/refer_and_earn?s=nd"),c(d(A,{children:[a(ge,{sx:l}),"Logout"]}),"/logout","Logout",!1)]})]})},Re=240,Me=g(Ut,{shouldForwardProp:t=>t!=="open"})(({theme:t,open:e})=>({transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),backgroundColor:"transparent",borderBottom:`1px solid ${w(t.palette.common.black,.1)}`,boxShadow:"none",paddingTop:t.spacing(0),paddingBottom:t.spacing(0),...e&&{width:`calc(100% - ${Re}px)`,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})},...!e&&{width:"calc(100% - 60px)"}})),we=t=>a(Me,{color:"default",open:t.open,children:d(ue,{sx:{justifyContent:"space-between"},children:[a(rt,{alignItems:"center",children:a(_e,{})}),d(rt,{children:[a(Oe,{}),a(Be,{})]})]})});var q={},Le=O;Object.defineProperty(q,"__esModule",{value:!0});var vt=q.default=void 0,ze=Le($()),De=v;vt=q.default=(0,ze.default)((0,De.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft");var X={},Te=O;Object.defineProperty(X,"__esModule",{value:!0});var I=X.default=void 0,Ae=Te($()),je=v;I=X.default=(0,Ae.default)((0,je.jsx)("path",{d:"M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2m0 16H2V5h20zM21 6h-7v5h7zm-1 2-2.5 1.75L15 8V7l2.5 1.75L20 7zM9 12c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m6 8.59c0-2.5-3.97-3.58-6-3.58s-6 1.08-6 3.58V18h12zM5.48 16c.74-.5 2.22-1 3.52-1s2.77.49 3.52 1z"}),"ContactMailOutlined");var J={},Se=O;Object.defineProperty(J,"__esModule",{value:!0});var gt=J.default=void 0,Pe=Se($()),Ve=v;gt=J.default=(0,Pe.default)((0,Ve.jsx)("path",{d:"M3 3v8h8V3zm6 6H5V5h4zm-6 4v8h8v-8zm6 6H5v-4h4zm4-16v8h8V3zm6 6h-4V5h4zm-6 4v8h8v-8zm6 6h-4v-4h4z"}),"GridViewOutlined");var K={},Ne=O;Object.defineProperty(K,"__esModule",{value:!0});var ft=K.default=void 0,He=Ne($()),Fe=v;ft=K.default=(0,He.default)((0,Fe.jsx)("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}),"Menu");const ht=240,ot=t=>({width:ht,transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen}),overflowX:"hidden"}),at=t=>({transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),overflowX:"hidden",width:`calc(${t.spacing(7)} + 1px)`,[t.breakpoints.up("sm")]:{width:`calc(${t.spacing(8)} + 1px)`}}),Ge=g("div")(({theme:t})=>({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:t.spacing(0,1),...t.mixins.toolbar})),We=g(St,{shouldForwardProp:t=>t!=="open"})(({theme:t,open:e})=>({width:ht,flexShrink:0,whiteSpace:"nowrap",boxSizing:"border-box",...e&&{...ot(t),"& .MuiDrawer-paper":ot(t)},...!e&&{...at(t),"& .MuiDrawer-paper":at(t)}})),Ee=t=>(f.useContext(lt),Lt(),f.useState(null),d(We,{variant:"permanent",open:t.drawerOpen,children:[d(Ge,{children:[a(P,{onClick:t.handleDrawerClose,children:t.drawerOpen&&a(vt,{})}),!t.drawerOpen&&a(P,{color:"inherit","aria-label":"open drawer",onClick:t.handleDrawerOpen,edge:"start",children:a(ft,{})})]}),a(et,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},component:"nav","aria-labelledby":"nested-list-subheader",subheader:t.drawerOpen&&a(jt,{component:"div",children:"Dashboard"}),children:d(y,{component:zt,to:"/",children:[a(_,{children:a(gt,{})}),a(C,{primary:"Dashboard"})]})}),d(et,{children:[d(y,{children:[a(_,{children:a(I,{})}),a(C,{primary:"",primaryTypographyProps:{style:{color:""}}})]}),d(y,{children:[a(_,{children:a(I,{})}),a(C,{primary:"",primaryTypographyProps:{style:{color:""}}})]}),d(y,{children:[a(_,{children:a(I,{})}),a(C,{primary:"",primaryTypographyProps:{style:{color:""}}})]}),d(y,{children:[a(_,{children:a(I,{})}),a(C,{primary:"",primaryTypographyProps:{style:{color:""}}})]}),d(y,{children:[a(_,{children:a(I,{})}),a(C,{primary:"",primaryTypographyProps:{style:{color:""}}})]})]})]})),Ue="_container_5ktvz_1",qe="_linkTag_5ktvz_7",Xe="_highlightedOption_5ktvz_11",Je="_hoveredOption_5ktvz_12",Ke="_selectedOption_5ktvz_16",Qe="_selectedSubOption_5ktvz_32",Ye="_main_5ktvz_36",Ze="_iconsList_5ktvz_43",tr="_listItem_5ktvz_46",er="_listIcon_5ktvz_52",rr="_listOptionText_5ktvz_61",or="_offset_5ktvz_68",ar="_menuBarContainer_5ktvz_76",ir="_popoverPaper_5ktvz_88",nr="_popoverRoot_5ktvz_99",sr="_drawerHeaderIcon_5ktvz_103",it={container:Ue,linkTag:qe,highlightedOption:Xe,hoveredOption:Je,selectedOption:Ke,selectedSubOption:Qe,main:Ye,iconsList:Ze,listItem:tr,listIcon:er,listOptionText:rr,offset:or,menuBarContainer:ar,popoverPaper:ir,popoverRoot:nr,drawerHeaderIcon:sr},lr=g("div")(({theme:t})=>t.mixins.toolbar);function cr(){const[t,e]=f.useState(!0);return d(L,{sx:{display:"flex"},children:[a(Dt,{}),a(we,{open:t}),a(Ee,{drawerOpen:t,handleDrawerClose:()=>{e(!1)},handleDrawerOpen:()=>{e(!0)}}),d("main",{className:it.main,children:[a(lr,{className:it.offset}),a(L,{display:"flex",width:"100%",overflow:"auto",children:a(Tt,{})})]})]})}const dr=()=>a(cr,{}),gr=dr;export{gr as default};
