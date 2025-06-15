import{r as m,j as u,h as Nw,p as Ye,i as ol,P as se,f as xt,d as ge,q as Ze,e as yn,g as z,n as et,D as js,s as kw,t as Dw,c as oe,b as Fs,v as Yf,R as Mw,L as ja,a as Ow,w as Lw,l as al,x as Co,y as Vw,z as So,A as Qf,C as jw,o as Xf,B as Fw,E as Uw,F as $w,G as Bw,V as Hw,H as zw,I as qw,m as Ww}from"./index-CF_moJuI.js";import{M as Gw,j as Jf,P as Kw,k as Yw,l as Qw,n as Xw,c as ae,h as Jw,S as Zw,B as Ee,a as Rh,m as Zf,I as Mi,u as eE,C as tE,L as Fa}from"./index-DTGwnuui.js";class nE extends m.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function rE({children:n,isPresent:e}){const t=m.useId(),r=m.useRef(null),s=m.useRef({width:0,height:0,top:0,left:0}),{nonce:i}=m.useContext(Gw);return m.useInsertionEffect(()=>{const{width:o,height:c,top:l,left:h}=s.current;if(e||!r.current||!o||!c)return;r.current.dataset.motionPopId=t;const f=document.createElement("style");return i&&(f.nonce=i),document.head.appendChild(f),f.sheet&&f.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${c}px !important;
            top: ${l}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(f)}},[e]),u.jsx(nE,{isPresent:e,childRef:r,sizeRef:s,children:m.cloneElement(n,{ref:r})})}const sE=({children:n,initial:e,isPresent:t,onExitComplete:r,custom:s,presenceAffectsLayout:i,mode:o})=>{const c=Jf(iE),l=m.useId(),h=m.useCallback(p=>{c.set(p,!0);for(const v of c.values())if(!v)return;r&&r()},[c,r]),f=m.useMemo(()=>({id:l,initial:e,isPresent:t,custom:s,onExitComplete:h,register:p=>(c.set(p,!1),()=>c.delete(p))}),i?[Math.random(),h]:[t,h]);return m.useMemo(()=>{c.forEach((p,v)=>c.set(v,!1))},[t]),m.useEffect(()=>{!t&&!c.size&&r&&r()},[t]),o==="popLayout"&&(n=u.jsx(rE,{isPresent:t,children:n})),u.jsx(Kw.Provider,{value:f,children:n})};function iE(){return new Map}const wi=n=>n.key||"";function Ph(n){const e=[];return m.Children.forEach(n,t=>{m.isValidElement(t)&&e.push(t)}),e}const ep=({children:n,custom:e,initial:t=!0,onExitComplete:r,presenceAffectsLayout:s=!0,mode:i="sync",propagate:o=!1})=>{const[c,l]=Yw(o),h=m.useMemo(()=>Ph(n),[n]),f=o&&!c?[]:h.map(wi),p=m.useRef(!0),v=m.useRef(h),y=Jf(()=>new Map),[x,_]=m.useState(h),[b,R]=m.useState(h);Qw(()=>{p.current=!1,v.current=h;for(let O=0;O<b.length;O++){const M=wi(b[O]);f.includes(M)?y.delete(M):y.get(M)!==!0&&y.set(M,!1)}},[b,f.length,f.join("-")]);const P=[];if(h!==x){let O=[...h];for(let M=0;M<b.length;M++){const V=b[M],I=wi(V);f.includes(I)||(O.splice(M,0,V),P.push(V))}i==="wait"&&P.length&&(O=P),R(Ph(O)),_(h);return}const{forceRender:k}=m.useContext(Xw);return u.jsx(u.Fragment,{children:b.map(O=>{const M=wi(O),V=o&&!c?!1:h===b||f.includes(M),I=()=>{if(y.has(M))y.set(M,!0);else return;let E=!0;y.forEach(T=>{T||(E=!1)}),E&&(k==null||k(),R(v.current),o&&(l==null||l()),r&&r())};return u.jsx(sE,{isPresent:V,initial:!p.current||t?void 0:!1,custom:V?void 0:e,presenceAffectsLayout:s,mode:i,onExitComplete:V?void 0:I,children:O},M)})})};/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ua=ae("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oE=ae("BarChart2",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=ae("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=ae("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aE=ae("CheckCheck",[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=ae("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=ae("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=ae("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=ae("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=ae("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cE=ae("Cog",[["path",{d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",key:"sobvz5"}],["path",{d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",key:"11i496"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 22v-2",key:"1osdcq"}],["path",{d:"m17 20.66-1-1.73",key:"eq3orb"}],["path",{d:"M11 10.27 7 3.34",key:"16pf9h"}],["path",{d:"m20.66 17-1.73-1",key:"sg0v6f"}],["path",{d:"m3.34 7 1.73 1",key:"1ulond"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"m20.66 7-1.73 1",key:"1ow05n"}],["path",{d:"m3.34 17 1.73-1",key:"nuk764"}],["path",{d:"m17 3.34-1 1.73",key:"2wel8s"}],["path",{d:"m11 13.73-4 6.93",key:"794ttg"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lE=ae("EllipsisVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ei=ae("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=ae("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uE=ae("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=ae("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hE=ae("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dE=ae("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=ae("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=ae("Map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fE=ae("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=ae("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pE=ae("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mE=ae("Paperclip",[["path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",key:"1u3ebp"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gE=ae("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vE=ae("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yE=ae("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=ae("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _E=ae("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wE=ae("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EE=ae("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TE=ae("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bE=ae("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=ae("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=ae("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oi=ae("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=ae("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IE=ae("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CE=ae("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SE=ae("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AE=ae("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);var RE=Nw[" useId ".trim().toString()]||(()=>{}),PE=0;function ct(n){const[e,t]=m.useState(RE());return Ye(()=>{t(r=>r??String(PE++))},[n]),n||(e?`radix-${e}`:"")}const NE=["top","right","bottom","left"],_n=Math.min,st=Math.max,Yi=Math.round,Ti=Math.floor,Rt=n=>({x:n,y:n}),kE={left:"right",right:"left",bottom:"top",top:"bottom"},DE={start:"end",end:"start"};function vc(n,e,t){return st(n,_n(e,t))}function Kt(n,e){return typeof n=="function"?n(e):n}function Yt(n){return n.split("-")[0]}function Br(n){return n.split("-")[1]}function cl(n){return n==="x"?"y":"x"}function ll(n){return n==="y"?"height":"width"}function Gt(n){return["top","bottom"].includes(Yt(n))?"y":"x"}function ul(n){return cl(Gt(n))}function ME(n,e,t){t===void 0&&(t=!1);const r=Br(n),s=ul(n),i=ll(s);let o=s==="x"?r===(t?"end":"start")?"right":"left":r==="start"?"bottom":"top";return e.reference[i]>e.floating[i]&&(o=Qi(o)),[o,Qi(o)]}function OE(n){const e=Qi(n);return[yc(n),e,yc(e)]}function yc(n){return n.replace(/start|end/g,e=>DE[e])}function LE(n,e,t){const r=["left","right"],s=["right","left"],i=["top","bottom"],o=["bottom","top"];switch(n){case"top":case"bottom":return t?e?s:r:e?r:s;case"left":case"right":return e?i:o;default:return[]}}function VE(n,e,t,r){const s=Br(n);let i=LE(Yt(n),t==="start",r);return s&&(i=i.map(o=>o+"-"+s),e&&(i=i.concat(i.map(yc)))),i}function Qi(n){return n.replace(/left|right|bottom|top/g,e=>kE[e])}function jE(n){return{top:0,right:0,bottom:0,left:0,...n}}function ip(n){return typeof n!="number"?jE(n):{top:n,right:n,bottom:n,left:n}}function Xi(n){const{x:e,y:t,width:r,height:s}=n;return{width:r,height:s,top:t,left:e,right:e+r,bottom:t+s,x:e,y:t}}function Vh(n,e,t){let{reference:r,floating:s}=n;const i=Gt(e),o=ul(e),c=ll(o),l=Yt(e),h=i==="y",f=r.x+r.width/2-s.width/2,p=r.y+r.height/2-s.height/2,v=r[c]/2-s[c]/2;let y;switch(l){case"top":y={x:f,y:r.y-s.height};break;case"bottom":y={x:f,y:r.y+r.height};break;case"right":y={x:r.x+r.width,y:p};break;case"left":y={x:r.x-s.width,y:p};break;default:y={x:r.x,y:r.y}}switch(Br(e)){case"start":y[o]-=v*(t&&h?-1:1);break;case"end":y[o]+=v*(t&&h?-1:1);break}return y}const FE=async(n,e,t)=>{const{placement:r="bottom",strategy:s="absolute",middleware:i=[],platform:o}=t,c=i.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(e));let h=await o.getElementRects({reference:n,floating:e,strategy:s}),{x:f,y:p}=Vh(h,r,l),v=r,y={},x=0;for(let _=0;_<c.length;_++){const{name:b,fn:R}=c[_],{x:P,y:k,data:O,reset:M}=await R({x:f,y:p,initialPlacement:r,placement:v,strategy:s,middlewareData:y,rects:h,platform:o,elements:{reference:n,floating:e}});f=P??f,p=k??p,y={...y,[b]:{...y[b],...O}},M&&x<=50&&(x++,typeof M=="object"&&(M.placement&&(v=M.placement),M.rects&&(h=M.rects===!0?await o.getElementRects({reference:n,floating:e,strategy:s}):M.rects),{x:f,y:p}=Vh(h,v,l)),_=-1)}return{x:f,y:p,placement:v,strategy:s,middlewareData:y}};async function Cs(n,e){var t;e===void 0&&(e={});const{x:r,y:s,platform:i,rects:o,elements:c,strategy:l}=n,{boundary:h="clippingAncestors",rootBoundary:f="viewport",elementContext:p="floating",altBoundary:v=!1,padding:y=0}=Kt(e,n),x=ip(y),b=c[v?p==="floating"?"reference":"floating":p],R=Xi(await i.getClippingRect({element:(t=await(i.isElement==null?void 0:i.isElement(b)))==null||t?b:b.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(c.floating)),boundary:h,rootBoundary:f,strategy:l})),P=p==="floating"?{x:r,y:s,width:o.floating.width,height:o.floating.height}:o.reference,k=await(i.getOffsetParent==null?void 0:i.getOffsetParent(c.floating)),O=await(i.isElement==null?void 0:i.isElement(k))?await(i.getScale==null?void 0:i.getScale(k))||{x:1,y:1}:{x:1,y:1},M=Xi(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:P,offsetParent:k,strategy:l}):P);return{top:(R.top-M.top+x.top)/O.y,bottom:(M.bottom-R.bottom+x.bottom)/O.y,left:(R.left-M.left+x.left)/O.x,right:(M.right-R.right+x.right)/O.x}}const UE=n=>({name:"arrow",options:n,async fn(e){const{x:t,y:r,placement:s,rects:i,platform:o,elements:c,middlewareData:l}=e,{element:h,padding:f=0}=Kt(n,e)||{};if(h==null)return{};const p=ip(f),v={x:t,y:r},y=ul(s),x=ll(y),_=await o.getDimensions(h),b=y==="y",R=b?"top":"left",P=b?"bottom":"right",k=b?"clientHeight":"clientWidth",O=i.reference[x]+i.reference[y]-v[y]-i.floating[x],M=v[y]-i.reference[y],V=await(o.getOffsetParent==null?void 0:o.getOffsetParent(h));let I=V?V[k]:0;(!I||!await(o.isElement==null?void 0:o.isElement(V)))&&(I=c.floating[k]||i.floating[x]);const E=O/2-M/2,T=I/2-_[x]/2-1,S=_n(p[R],T),A=_n(p[P],T),N=S,C=I-_[x]-A,te=I/2-_[x]/2+E,ce=vc(N,te,C),Z=!l.arrow&&Br(s)!=null&&te!==ce&&i.reference[x]/2-(te<N?S:A)-_[x]/2<0,ue=Z?te<N?te-N:te-C:0;return{[y]:v[y]+ue,data:{[y]:ce,centerOffset:te-ce-ue,...Z&&{alignmentOffset:ue}},reset:Z}}}),$E=function(n){return n===void 0&&(n={}),{name:"flip",options:n,async fn(e){var t,r;const{placement:s,middlewareData:i,rects:o,initialPlacement:c,platform:l,elements:h}=e,{mainAxis:f=!0,crossAxis:p=!0,fallbackPlacements:v,fallbackStrategy:y="bestFit",fallbackAxisSideDirection:x="none",flipAlignment:_=!0,...b}=Kt(n,e);if((t=i.arrow)!=null&&t.alignmentOffset)return{};const R=Yt(s),P=Gt(c),k=Yt(c)===c,O=await(l.isRTL==null?void 0:l.isRTL(h.floating)),M=v||(k||!_?[Qi(c)]:OE(c)),V=x!=="none";!v&&V&&M.push(...VE(c,_,x,O));const I=[c,...M],E=await Cs(e,b),T=[];let S=((r=i.flip)==null?void 0:r.overflows)||[];if(f&&T.push(E[R]),p){const ce=ME(s,o,O);T.push(E[ce[0]],E[ce[1]])}if(S=[...S,{placement:s,overflows:T}],!T.every(ce=>ce<=0)){var A,N;const ce=(((A=i.flip)==null?void 0:A.index)||0)+1,Z=I[ce];if(Z){var C;const K=p==="alignment"?P!==Gt(Z):!1,H=((C=S[0])==null?void 0:C.overflows[0])>0;if(!K||H)return{data:{index:ce,overflows:S},reset:{placement:Z}}}let ue=(N=S.filter(K=>K.overflows[0]<=0).sort((K,H)=>K.overflows[1]-H.overflows[1])[0])==null?void 0:N.placement;if(!ue)switch(y){case"bestFit":{var te;const K=(te=S.filter(H=>{if(V){const le=Gt(H.placement);return le===P||le==="y"}return!0}).map(H=>[H.placement,H.overflows.filter(le=>le>0).reduce((le,ye)=>le+ye,0)]).sort((H,le)=>H[1]-le[1])[0])==null?void 0:te[0];K&&(ue=K);break}case"initialPlacement":ue=c;break}if(s!==ue)return{reset:{placement:ue}}}return{}}}};function jh(n,e){return{top:n.top-e.height,right:n.right-e.width,bottom:n.bottom-e.height,left:n.left-e.width}}function Fh(n){return NE.some(e=>n[e]>=0)}const BE=function(n){return n===void 0&&(n={}),{name:"hide",options:n,async fn(e){const{rects:t}=e,{strategy:r="referenceHidden",...s}=Kt(n,e);switch(r){case"referenceHidden":{const i=await Cs(e,{...s,elementContext:"reference"}),o=jh(i,t.reference);return{data:{referenceHiddenOffsets:o,referenceHidden:Fh(o)}}}case"escaped":{const i=await Cs(e,{...s,altBoundary:!0}),o=jh(i,t.floating);return{data:{escapedOffsets:o,escaped:Fh(o)}}}default:return{}}}}};async function HE(n,e){const{placement:t,platform:r,elements:s}=n,i=await(r.isRTL==null?void 0:r.isRTL(s.floating)),o=Yt(t),c=Br(t),l=Gt(t)==="y",h=["left","top"].includes(o)?-1:1,f=i&&l?-1:1,p=Kt(e,n);let{mainAxis:v,crossAxis:y,alignmentAxis:x}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return c&&typeof x=="number"&&(y=c==="end"?x*-1:x),l?{x:y*f,y:v*h}:{x:v*h,y:y*f}}const zE=function(n){return n===void 0&&(n=0),{name:"offset",options:n,async fn(e){var t,r;const{x:s,y:i,placement:o,middlewareData:c}=e,l=await HE(e,n);return o===((t=c.offset)==null?void 0:t.placement)&&(r=c.arrow)!=null&&r.alignmentOffset?{}:{x:s+l.x,y:i+l.y,data:{...l,placement:o}}}}},qE=function(n){return n===void 0&&(n={}),{name:"shift",options:n,async fn(e){const{x:t,y:r,placement:s}=e,{mainAxis:i=!0,crossAxis:o=!1,limiter:c={fn:b=>{let{x:R,y:P}=b;return{x:R,y:P}}},...l}=Kt(n,e),h={x:t,y:r},f=await Cs(e,l),p=Gt(Yt(s)),v=cl(p);let y=h[v],x=h[p];if(i){const b=v==="y"?"top":"left",R=v==="y"?"bottom":"right",P=y+f[b],k=y-f[R];y=vc(P,y,k)}if(o){const b=p==="y"?"top":"left",R=p==="y"?"bottom":"right",P=x+f[b],k=x-f[R];x=vc(P,x,k)}const _=c.fn({...e,[v]:y,[p]:x});return{..._,data:{x:_.x-t,y:_.y-r,enabled:{[v]:i,[p]:o}}}}}},WE=function(n){return n===void 0&&(n={}),{options:n,fn(e){const{x:t,y:r,placement:s,rects:i,middlewareData:o}=e,{offset:c=0,mainAxis:l=!0,crossAxis:h=!0}=Kt(n,e),f={x:t,y:r},p=Gt(s),v=cl(p);let y=f[v],x=f[p];const _=Kt(c,e),b=typeof _=="number"?{mainAxis:_,crossAxis:0}:{mainAxis:0,crossAxis:0,..._};if(l){const k=v==="y"?"height":"width",O=i.reference[v]-i.floating[k]+b.mainAxis,M=i.reference[v]+i.reference[k]-b.mainAxis;y<O?y=O:y>M&&(y=M)}if(h){var R,P;const k=v==="y"?"width":"height",O=["top","left"].includes(Yt(s)),M=i.reference[p]-i.floating[k]+(O&&((R=o.offset)==null?void 0:R[p])||0)+(O?0:b.crossAxis),V=i.reference[p]+i.reference[k]+(O?0:((P=o.offset)==null?void 0:P[p])||0)-(O?b.crossAxis:0);x<M?x=M:x>V&&(x=V)}return{[v]:y,[p]:x}}}},GE=function(n){return n===void 0&&(n={}),{name:"size",options:n,async fn(e){var t,r;const{placement:s,rects:i,platform:o,elements:c}=e,{apply:l=()=>{},...h}=Kt(n,e),f=await Cs(e,h),p=Yt(s),v=Br(s),y=Gt(s)==="y",{width:x,height:_}=i.floating;let b,R;p==="top"||p==="bottom"?(b=p,R=v===(await(o.isRTL==null?void 0:o.isRTL(c.floating))?"start":"end")?"left":"right"):(R=p,b=v==="end"?"top":"bottom");const P=_-f.top-f.bottom,k=x-f.left-f.right,O=_n(_-f[b],P),M=_n(x-f[R],k),V=!e.middlewareData.shift;let I=O,E=M;if((t=e.middlewareData.shift)!=null&&t.enabled.x&&(E=k),(r=e.middlewareData.shift)!=null&&r.enabled.y&&(I=P),V&&!v){const S=st(f.left,0),A=st(f.right,0),N=st(f.top,0),C=st(f.bottom,0);y?E=x-2*(S!==0||A!==0?S+A:st(f.left,f.right)):I=_-2*(N!==0||C!==0?N+C:st(f.top,f.bottom))}await l({...e,availableWidth:E,availableHeight:I});const T=await o.getDimensions(c.floating);return x!==T.width||_!==T.height?{reset:{rects:!0}}:{}}}};function Ro(){return typeof window<"u"}function Hr(n){return op(n)?(n.nodeName||"").toLowerCase():"#document"}function it(n){var e;return(n==null||(e=n.ownerDocument)==null?void 0:e.defaultView)||window}function Vt(n){var e;return(e=(op(n)?n.ownerDocument:n.document)||window.document)==null?void 0:e.documentElement}function op(n){return Ro()?n instanceof Node||n instanceof it(n).Node:!1}function Et(n){return Ro()?n instanceof Element||n instanceof it(n).Element:!1}function Mt(n){return Ro()?n instanceof HTMLElement||n instanceof it(n).HTMLElement:!1}function Uh(n){return!Ro()||typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof it(n).ShadowRoot}function Us(n){const{overflow:e,overflowX:t,overflowY:r,display:s}=Tt(n);return/auto|scroll|overlay|hidden|clip/.test(e+r+t)&&!["inline","contents"].includes(s)}function KE(n){return["table","td","th"].includes(Hr(n))}function Po(n){return[":popover-open",":modal"].some(e=>{try{return n.matches(e)}catch{return!1}})}function hl(n){const e=dl(),t=Et(n)?Tt(n):n;return["transform","translate","scale","rotate","perspective"].some(r=>t[r]?t[r]!=="none":!1)||(t.containerType?t.containerType!=="normal":!1)||!e&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!e&&(t.filter?t.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(r=>(t.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(t.contain||"").includes(r))}function YE(n){let e=wn(n);for(;Mt(e)&&!Rr(e);){if(hl(e))return e;if(Po(e))return null;e=wn(e)}return null}function dl(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Rr(n){return["html","body","#document"].includes(Hr(n))}function Tt(n){return it(n).getComputedStyle(n)}function No(n){return Et(n)?{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}:{scrollLeft:n.scrollX,scrollTop:n.scrollY}}function wn(n){if(Hr(n)==="html")return n;const e=n.assignedSlot||n.parentNode||Uh(n)&&n.host||Vt(n);return Uh(e)?e.host:e}function ap(n){const e=wn(n);return Rr(e)?n.ownerDocument?n.ownerDocument.body:n.body:Mt(e)&&Us(e)?e:ap(e)}function Ss(n,e,t){var r;e===void 0&&(e=[]),t===void 0&&(t=!0);const s=ap(n),i=s===((r=n.ownerDocument)==null?void 0:r.body),o=it(s);if(i){const c=_c(o);return e.concat(o,o.visualViewport||[],Us(s)?s:[],c&&t?Ss(c):[])}return e.concat(s,Ss(s,[],t))}function _c(n){return n.parent&&Object.getPrototypeOf(n.parent)?n.frameElement:null}function cp(n){const e=Tt(n);let t=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const s=Mt(n),i=s?n.offsetWidth:t,o=s?n.offsetHeight:r,c=Yi(t)!==i||Yi(r)!==o;return c&&(t=i,r=o),{width:t,height:r,$:c}}function fl(n){return Et(n)?n:n.contextElement}function wr(n){const e=fl(n);if(!Mt(e))return Rt(1);const t=e.getBoundingClientRect(),{width:r,height:s,$:i}=cp(e);let o=(i?Yi(t.width):t.width)/r,c=(i?Yi(t.height):t.height)/s;return(!o||!Number.isFinite(o))&&(o=1),(!c||!Number.isFinite(c))&&(c=1),{x:o,y:c}}const QE=Rt(0);function lp(n){const e=it(n);return!dl()||!e.visualViewport?QE:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function XE(n,e,t){return e===void 0&&(e=!1),!t||e&&t!==it(n)?!1:e}function Wn(n,e,t,r){e===void 0&&(e=!1),t===void 0&&(t=!1);const s=n.getBoundingClientRect(),i=fl(n);let o=Rt(1);e&&(r?Et(r)&&(o=wr(r)):o=wr(n));const c=XE(i,t,r)?lp(i):Rt(0);let l=(s.left+c.x)/o.x,h=(s.top+c.y)/o.y,f=s.width/o.x,p=s.height/o.y;if(i){const v=it(i),y=r&&Et(r)?it(r):r;let x=v,_=_c(x);for(;_&&r&&y!==x;){const b=wr(_),R=_.getBoundingClientRect(),P=Tt(_),k=R.left+(_.clientLeft+parseFloat(P.paddingLeft))*b.x,O=R.top+(_.clientTop+parseFloat(P.paddingTop))*b.y;l*=b.x,h*=b.y,f*=b.x,p*=b.y,l+=k,h+=O,x=it(_),_=_c(x)}}return Xi({width:f,height:p,x:l,y:h})}function pl(n,e){const t=No(n).scrollLeft;return e?e.left+t:Wn(Vt(n)).left+t}function up(n,e,t){t===void 0&&(t=!1);const r=n.getBoundingClientRect(),s=r.left+e.scrollLeft-(t?0:pl(n,r)),i=r.top+e.scrollTop;return{x:s,y:i}}function JE(n){let{elements:e,rect:t,offsetParent:r,strategy:s}=n;const i=s==="fixed",o=Vt(r),c=e?Po(e.floating):!1;if(r===o||c&&i)return t;let l={scrollLeft:0,scrollTop:0},h=Rt(1);const f=Rt(0),p=Mt(r);if((p||!p&&!i)&&((Hr(r)!=="body"||Us(o))&&(l=No(r)),Mt(r))){const y=Wn(r);h=wr(r),f.x=y.x+r.clientLeft,f.y=y.y+r.clientTop}const v=o&&!p&&!i?up(o,l,!0):Rt(0);return{width:t.width*h.x,height:t.height*h.y,x:t.x*h.x-l.scrollLeft*h.x+f.x+v.x,y:t.y*h.y-l.scrollTop*h.y+f.y+v.y}}function ZE(n){return Array.from(n.getClientRects())}function eT(n){const e=Vt(n),t=No(n),r=n.ownerDocument.body,s=st(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),i=st(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let o=-t.scrollLeft+pl(n);const c=-t.scrollTop;return Tt(r).direction==="rtl"&&(o+=st(e.clientWidth,r.clientWidth)-s),{width:s,height:i,x:o,y:c}}function tT(n,e){const t=it(n),r=Vt(n),s=t.visualViewport;let i=r.clientWidth,o=r.clientHeight,c=0,l=0;if(s){i=s.width,o=s.height;const h=dl();(!h||h&&e==="fixed")&&(c=s.offsetLeft,l=s.offsetTop)}return{width:i,height:o,x:c,y:l}}function nT(n,e){const t=Wn(n,!0,e==="fixed"),r=t.top+n.clientTop,s=t.left+n.clientLeft,i=Mt(n)?wr(n):Rt(1),o=n.clientWidth*i.x,c=n.clientHeight*i.y,l=s*i.x,h=r*i.y;return{width:o,height:c,x:l,y:h}}function $h(n,e,t){let r;if(e==="viewport")r=tT(n,t);else if(e==="document")r=eT(Vt(n));else if(Et(e))r=nT(e,t);else{const s=lp(n);r={x:e.x-s.x,y:e.y-s.y,width:e.width,height:e.height}}return Xi(r)}function hp(n,e){const t=wn(n);return t===e||!Et(t)||Rr(t)?!1:Tt(t).position==="fixed"||hp(t,e)}function rT(n,e){const t=e.get(n);if(t)return t;let r=Ss(n,[],!1).filter(c=>Et(c)&&Hr(c)!=="body"),s=null;const i=Tt(n).position==="fixed";let o=i?wn(n):n;for(;Et(o)&&!Rr(o);){const c=Tt(o),l=hl(o);!l&&c.position==="fixed"&&(s=null),(i?!l&&!s:!l&&c.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||Us(o)&&!l&&hp(n,o))?r=r.filter(f=>f!==o):s=c,o=wn(o)}return e.set(n,r),r}function sT(n){let{element:e,boundary:t,rootBoundary:r,strategy:s}=n;const o=[...t==="clippingAncestors"?Po(e)?[]:rT(e,this._c):[].concat(t),r],c=o[0],l=o.reduce((h,f)=>{const p=$h(e,f,s);return h.top=st(p.top,h.top),h.right=_n(p.right,h.right),h.bottom=_n(p.bottom,h.bottom),h.left=st(p.left,h.left),h},$h(e,c,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function iT(n){const{width:e,height:t}=cp(n);return{width:e,height:t}}function oT(n,e,t){const r=Mt(e),s=Vt(e),i=t==="fixed",o=Wn(n,!0,i,e);let c={scrollLeft:0,scrollTop:0};const l=Rt(0);function h(){l.x=pl(s)}if(r||!r&&!i)if((Hr(e)!=="body"||Us(s))&&(c=No(e)),r){const y=Wn(e,!0,i,e);l.x=y.x+e.clientLeft,l.y=y.y+e.clientTop}else s&&h();i&&!r&&s&&h();const f=s&&!r&&!i?up(s,c):Rt(0),p=o.left+c.scrollLeft-l.x-f.x,v=o.top+c.scrollTop-l.y-f.y;return{x:p,y:v,width:o.width,height:o.height}}function Ba(n){return Tt(n).position==="static"}function Bh(n,e){if(!Mt(n)||Tt(n).position==="fixed")return null;if(e)return e(n);let t=n.offsetParent;return Vt(n)===t&&(t=t.ownerDocument.body),t}function dp(n,e){const t=it(n);if(Po(n))return t;if(!Mt(n)){let s=wn(n);for(;s&&!Rr(s);){if(Et(s)&&!Ba(s))return s;s=wn(s)}return t}let r=Bh(n,e);for(;r&&KE(r)&&Ba(r);)r=Bh(r,e);return r&&Rr(r)&&Ba(r)&&!hl(r)?t:r||YE(n)||t}const aT=async function(n){const e=this.getOffsetParent||dp,t=this.getDimensions,r=await t(n.floating);return{reference:oT(n.reference,await e(n.floating),n.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function cT(n){return Tt(n).direction==="rtl"}const lT={convertOffsetParentRelativeRectToViewportRelativeRect:JE,getDocumentElement:Vt,getClippingRect:sT,getOffsetParent:dp,getElementRects:aT,getClientRects:ZE,getDimensions:iT,getScale:wr,isElement:Et,isRTL:cT};function fp(n,e){return n.x===e.x&&n.y===e.y&&n.width===e.width&&n.height===e.height}function uT(n,e){let t=null,r;const s=Vt(n);function i(){var c;clearTimeout(r),(c=t)==null||c.disconnect(),t=null}function o(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),i();const h=n.getBoundingClientRect(),{left:f,top:p,width:v,height:y}=h;if(c||e(),!v||!y)return;const x=Ti(p),_=Ti(s.clientWidth-(f+v)),b=Ti(s.clientHeight-(p+y)),R=Ti(f),k={rootMargin:-x+"px "+-_+"px "+-b+"px "+-R+"px",threshold:st(0,_n(1,l))||1};let O=!0;function M(V){const I=V[0].intersectionRatio;if(I!==l){if(!O)return o();I?o(!1,I):r=setTimeout(()=>{o(!1,1e-7)},1e3)}I===1&&!fp(h,n.getBoundingClientRect())&&o(),O=!1}try{t=new IntersectionObserver(M,{...k,root:s.ownerDocument})}catch{t=new IntersectionObserver(M,k)}t.observe(n)}return o(!0),i}function hT(n,e,t,r){r===void 0&&(r={});const{ancestorScroll:s=!0,ancestorResize:i=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,h=fl(n),f=s||i?[...h?Ss(h):[],...Ss(e)]:[];f.forEach(R=>{s&&R.addEventListener("scroll",t,{passive:!0}),i&&R.addEventListener("resize",t)});const p=h&&c?uT(h,t):null;let v=-1,y=null;o&&(y=new ResizeObserver(R=>{let[P]=R;P&&P.target===h&&y&&(y.unobserve(e),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{var k;(k=y)==null||k.observe(e)})),t()}),h&&!l&&y.observe(h),y.observe(e));let x,_=l?Wn(n):null;l&&b();function b(){const R=Wn(n);_&&!fp(_,R)&&t(),_=R,x=requestAnimationFrame(b)}return t(),()=>{var R;f.forEach(P=>{s&&P.removeEventListener("scroll",t),i&&P.removeEventListener("resize",t)}),p==null||p(),(R=y)==null||R.disconnect(),y=null,l&&cancelAnimationFrame(x)}}const dT=zE,fT=qE,pT=$E,mT=GE,gT=BE,Hh=UE,vT=WE,yT=(n,e,t)=>{const r=new Map,s={platform:lT,...t},i={...s.platform,_c:r};return FE(n,e,{...s,platform:i})};var Li=typeof document<"u"?m.useLayoutEffect:m.useEffect;function Ji(n,e){if(n===e)return!0;if(typeof n!=typeof e)return!1;if(typeof n=="function"&&n.toString()===e.toString())return!0;let t,r,s;if(n&&e&&typeof n=="object"){if(Array.isArray(n)){if(t=n.length,t!==e.length)return!1;for(r=t;r--!==0;)if(!Ji(n[r],e[r]))return!1;return!0}if(s=Object.keys(n),t=s.length,t!==Object.keys(e).length)return!1;for(r=t;r--!==0;)if(!{}.hasOwnProperty.call(e,s[r]))return!1;for(r=t;r--!==0;){const i=s[r];if(!(i==="_owner"&&n.$$typeof)&&!Ji(n[i],e[i]))return!1}return!0}return n!==n&&e!==e}function pp(n){return typeof window>"u"?1:(n.ownerDocument.defaultView||window).devicePixelRatio||1}function zh(n,e){const t=pp(n);return Math.round(e*t)/t}function Ha(n){const e=m.useRef(n);return Li(()=>{e.current=n}),e}function _T(n){n===void 0&&(n={});const{placement:e="bottom",strategy:t="absolute",middleware:r=[],platform:s,elements:{reference:i,floating:o}={},transform:c=!0,whileElementsMounted:l,open:h}=n,[f,p]=m.useState({x:0,y:0,strategy:t,placement:e,middlewareData:{},isPositioned:!1}),[v,y]=m.useState(r);Ji(v,r)||y(r);const[x,_]=m.useState(null),[b,R]=m.useState(null),P=m.useCallback(K=>{K!==V.current&&(V.current=K,_(K))},[]),k=m.useCallback(K=>{K!==I.current&&(I.current=K,R(K))},[]),O=i||x,M=o||b,V=m.useRef(null),I=m.useRef(null),E=m.useRef(f),T=l!=null,S=Ha(l),A=Ha(s),N=Ha(h),C=m.useCallback(()=>{if(!V.current||!I.current)return;const K={placement:e,strategy:t,middleware:v};A.current&&(K.platform=A.current),yT(V.current,I.current,K).then(H=>{const le={...H,isPositioned:N.current!==!1};te.current&&!Ji(E.current,le)&&(E.current=le,ol.flushSync(()=>{p(le)}))})},[v,e,t,A,N]);Li(()=>{h===!1&&E.current.isPositioned&&(E.current.isPositioned=!1,p(K=>({...K,isPositioned:!1})))},[h]);const te=m.useRef(!1);Li(()=>(te.current=!0,()=>{te.current=!1}),[]),Li(()=>{if(O&&(V.current=O),M&&(I.current=M),O&&M){if(S.current)return S.current(O,M,C);C()}},[O,M,C,S,T]);const ce=m.useMemo(()=>({reference:V,floating:I,setReference:P,setFloating:k}),[P,k]),Z=m.useMemo(()=>({reference:O,floating:M}),[O,M]),ue=m.useMemo(()=>{const K={position:t,left:0,top:0};if(!Z.floating)return K;const H=zh(Z.floating,f.x),le=zh(Z.floating,f.y);return c?{...K,transform:"translate("+H+"px, "+le+"px)",...pp(Z.floating)>=1.5&&{willChange:"transform"}}:{position:t,left:H,top:le}},[t,c,Z.floating,f.x,f.y]);return m.useMemo(()=>({...f,update:C,refs:ce,elements:Z,floatingStyles:ue}),[f,C,ce,Z,ue])}const wT=n=>{function e(t){return{}.hasOwnProperty.call(t,"current")}return{name:"arrow",options:n,fn(t){const{element:r,padding:s}=typeof n=="function"?n(t):n;return r&&e(r)?r.current!=null?Hh({element:r.current,padding:s}).fn(t):{}:r?Hh({element:r,padding:s}).fn(t):{}}}},ET=(n,e)=>({...dT(n),options:[n,e]}),TT=(n,e)=>({...fT(n),options:[n,e]}),bT=(n,e)=>({...vT(n),options:[n,e]}),xT=(n,e)=>({...pT(n),options:[n,e]}),IT=(n,e)=>({...mT(n),options:[n,e]}),CT=(n,e)=>({...gT(n),options:[n,e]}),ST=(n,e)=>({...wT(n),options:[n,e]});var AT="Arrow",mp=m.forwardRef((n,e)=>{const{children:t,width:r=10,height:s=5,...i}=n;return u.jsx(se.svg,{...i,ref:e,width:r,height:s,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:n.asChild?t:u.jsx("polygon",{points:"0,0 30,0 15,10"})})});mp.displayName=AT;var RT=mp,ml="Popper",[gp,An]=xt(ml),[PT,vp]=gp(ml),yp=n=>{const{__scopePopper:e,children:t}=n,[r,s]=m.useState(null);return u.jsx(PT,{scope:e,anchor:r,onAnchorChange:s,children:t})};yp.displayName=ml;var _p="PopperAnchor",wp=m.forwardRef((n,e)=>{const{__scopePopper:t,virtualRef:r,...s}=n,i=vp(_p,t),o=m.useRef(null),c=ge(e,o);return m.useEffect(()=>{i.onAnchorChange((r==null?void 0:r.current)||o.current)}),r?null:u.jsx(se.div,{...s,ref:c})});wp.displayName=_p;var gl="PopperContent",[NT,kT]=gp(gl),Ep=m.forwardRef((n,e)=>{var F,Y,X,ee,G,ie;const{__scopePopper:t,side:r="bottom",sideOffset:s=0,align:i="center",alignOffset:o=0,arrowPadding:c=0,avoidCollisions:l=!0,collisionBoundary:h=[],collisionPadding:f=0,sticky:p="partial",hideWhenDetached:v=!1,updatePositionStrategy:y="optimized",onPlaced:x,..._}=n,b=vp(gl,t),[R,P]=m.useState(null),k=ge(e,Te=>P(Te)),[O,M]=m.useState(null),V=Jw(O),I=(V==null?void 0:V.width)??0,E=(V==null?void 0:V.height)??0,T=r+(i!=="center"?"-"+i:""),S=typeof f=="number"?f:{top:0,right:0,bottom:0,left:0,...f},A=Array.isArray(h)?h:[h],N=A.length>0,C={padding:S,boundary:A.filter(MT),altBoundary:N},{refs:te,floatingStyles:ce,placement:Z,isPositioned:ue,middlewareData:K}=_T({strategy:"fixed",placement:T,whileElementsMounted:(...Te)=>hT(...Te,{animationFrame:y==="always"}),elements:{reference:b.anchor},middleware:[ET({mainAxis:s+E,alignmentAxis:o}),l&&TT({mainAxis:!0,crossAxis:!1,limiter:p==="partial"?bT():void 0,...C}),l&&xT({...C}),IT({...C,apply:({elements:Te,rects:je,availableWidth:ot,availableHeight:tn})=>{const{width:kn,height:ya}=je.reference,Dn=Te.floating.style;Dn.setProperty("--radix-popper-available-width",`${ot}px`),Dn.setProperty("--radix-popper-available-height",`${tn}px`),Dn.setProperty("--radix-popper-anchor-width",`${kn}px`),Dn.setProperty("--radix-popper-anchor-height",`${ya}px`)}}),O&&ST({element:O,padding:c}),OT({arrowWidth:I,arrowHeight:E}),v&&CT({strategy:"referenceHidden",...C})]}),[H,le]=xp(Z),ye=Ze(x);Ye(()=>{ue&&(ye==null||ye())},[ue,ye]);const xe=(F=K.arrow)==null?void 0:F.x,we=(Y=K.arrow)==null?void 0:Y.y,Ve=((X=K.arrow)==null?void 0:X.centerOffset)!==0,[Me,B]=m.useState();return Ye(()=>{R&&B(window.getComputedStyle(R).zIndex)},[R]),u.jsx("div",{ref:te.setFloating,"data-radix-popper-content-wrapper":"",style:{...ce,transform:ue?ce.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:Me,"--radix-popper-transform-origin":[(ee=K.transformOrigin)==null?void 0:ee.x,(G=K.transformOrigin)==null?void 0:G.y].join(" "),...((ie=K.hide)==null?void 0:ie.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:n.dir,children:u.jsx(NT,{scope:t,placedSide:H,onArrowChange:M,arrowX:xe,arrowY:we,shouldHideArrow:Ve,children:u.jsx(se.div,{"data-side":H,"data-align":le,..._,ref:k,style:{..._.style,animation:ue?void 0:"none"}})})})});Ep.displayName=gl;var Tp="PopperArrow",DT={top:"bottom",right:"left",bottom:"top",left:"right"},bp=m.forwardRef(function(e,t){const{__scopePopper:r,...s}=e,i=kT(Tp,r),o=DT[i.placedSide];return u.jsx("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[o]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0},children:u.jsx(RT,{...s,ref:t,style:{...s.style,display:"block"}})})});bp.displayName=Tp;function MT(n){return n!==null}var OT=n=>({name:"transformOrigin",options:n,fn(e){var b,R,P;const{placement:t,rects:r,middlewareData:s}=e,o=((b=s.arrow)==null?void 0:b.centerOffset)!==0,c=o?0:n.arrowWidth,l=o?0:n.arrowHeight,[h,f]=xp(t),p={start:"0%",center:"50%",end:"100%"}[f],v=(((R=s.arrow)==null?void 0:R.x)??0)+c/2,y=(((P=s.arrow)==null?void 0:P.y)??0)+l/2;let x="",_="";return h==="bottom"?(x=o?p:`${v}px`,_=`${-l}px`):h==="top"?(x=o?p:`${v}px`,_=`${r.floating.height+l}px`):h==="right"?(x=`${-l}px`,_=o?p:`${y}px`):h==="left"&&(x=`${r.floating.width+l}px`,_=o?p:`${y}px`),{data:{x,y:_}}}});function xp(n){const[e,t="center"]=n.split("-");return[e,t]}var ko=yp,$s=wp,Do=Ep,Mo=bp,[Oo,GD]=xt("Tooltip",[An]),Lo=An(),Ip="TooltipProvider",LT=700,wc="tooltip.open",[VT,vl]=Oo(Ip),Cp=n=>{const{__scopeTooltip:e,delayDuration:t=LT,skipDelayDuration:r=300,disableHoverableContent:s=!1,children:i}=n,o=m.useRef(!0),c=m.useRef(!1),l=m.useRef(0);return m.useEffect(()=>{const h=l.current;return()=>window.clearTimeout(h)},[]),u.jsx(VT,{scope:e,isOpenDelayedRef:o,delayDuration:t,onOpen:m.useCallback(()=>{window.clearTimeout(l.current),o.current=!1},[]),onClose:m.useCallback(()=>{window.clearTimeout(l.current),l.current=window.setTimeout(()=>o.current=!0,r)},[r]),isPointerInTransitRef:c,onPointerInTransitChange:m.useCallback(h=>{c.current=h},[]),disableHoverableContent:s,children:i})};Cp.displayName=Ip;var As="Tooltip",[jT,Vo]=Oo(As),Sp=n=>{const{__scopeTooltip:e,children:t,open:r,defaultOpen:s,onOpenChange:i,disableHoverableContent:o,delayDuration:c}=n,l=vl(As,n.__scopeTooltip),h=Lo(e),[f,p]=m.useState(null),v=ct(),y=m.useRef(0),x=o??l.disableHoverableContent,_=c??l.delayDuration,b=m.useRef(!1),[R,P]=yn({prop:r,defaultProp:s??!1,onChange:I=>{I?(l.onOpen(),document.dispatchEvent(new CustomEvent(wc))):l.onClose(),i==null||i(I)},caller:As}),k=m.useMemo(()=>R?b.current?"delayed-open":"instant-open":"closed",[R]),O=m.useCallback(()=>{window.clearTimeout(y.current),y.current=0,b.current=!1,P(!0)},[P]),M=m.useCallback(()=>{window.clearTimeout(y.current),y.current=0,P(!1)},[P]),V=m.useCallback(()=>{window.clearTimeout(y.current),y.current=window.setTimeout(()=>{b.current=!0,P(!0),y.current=0},_)},[_,P]);return m.useEffect(()=>()=>{y.current&&(window.clearTimeout(y.current),y.current=0)},[]),u.jsx(ko,{...h,children:u.jsx(jT,{scope:e,contentId:v,open:R,stateAttribute:k,trigger:f,onTriggerChange:p,onTriggerEnter:m.useCallback(()=>{l.isOpenDelayedRef.current?V():O()},[l.isOpenDelayedRef,V,O]),onTriggerLeave:m.useCallback(()=>{x?M():(window.clearTimeout(y.current),y.current=0)},[M,x]),onOpen:O,onClose:M,disableHoverableContent:x,children:t})})};Sp.displayName=As;var Ec="TooltipTrigger",Ap=m.forwardRef((n,e)=>{const{__scopeTooltip:t,...r}=n,s=Vo(Ec,t),i=vl(Ec,t),o=Lo(t),c=m.useRef(null),l=ge(e,c,s.onTriggerChange),h=m.useRef(!1),f=m.useRef(!1),p=m.useCallback(()=>h.current=!1,[]);return m.useEffect(()=>()=>document.removeEventListener("pointerup",p),[p]),u.jsx($s,{asChild:!0,...o,children:u.jsx(se.button,{"aria-describedby":s.open?s.contentId:void 0,"data-state":s.stateAttribute,...r,ref:l,onPointerMove:z(n.onPointerMove,v=>{v.pointerType!=="touch"&&!f.current&&!i.isPointerInTransitRef.current&&(s.onTriggerEnter(),f.current=!0)}),onPointerLeave:z(n.onPointerLeave,()=>{s.onTriggerLeave(),f.current=!1}),onPointerDown:z(n.onPointerDown,()=>{s.open&&s.onClose(),h.current=!0,document.addEventListener("pointerup",p,{once:!0})}),onFocus:z(n.onFocus,()=>{h.current||s.onOpen()}),onBlur:z(n.onBlur,s.onClose),onClick:z(n.onClick,s.onClose)})})});Ap.displayName=Ec;var FT="TooltipPortal",[KD,UT]=Oo(FT,{forceMount:void 0}),Pr="TooltipContent",Rp=m.forwardRef((n,e)=>{const t=UT(Pr,n.__scopeTooltip),{forceMount:r=t.forceMount,side:s="top",...i}=n,o=Vo(Pr,n.__scopeTooltip);return u.jsx(et,{present:r||o.open,children:o.disableHoverableContent?u.jsx(Pp,{side:s,...i,ref:e}):u.jsx($T,{side:s,...i,ref:e})})}),$T=m.forwardRef((n,e)=>{const t=Vo(Pr,n.__scopeTooltip),r=vl(Pr,n.__scopeTooltip),s=m.useRef(null),i=ge(e,s),[o,c]=m.useState(null),{trigger:l,onClose:h}=t,f=s.current,{onPointerInTransitChange:p}=r,v=m.useCallback(()=>{c(null),p(!1)},[p]),y=m.useCallback((x,_)=>{const b=x.currentTarget,R={x:x.clientX,y:x.clientY},P=WT(R,b.getBoundingClientRect()),k=GT(R,P),O=KT(_.getBoundingClientRect()),M=QT([...k,...O]);c(M),p(!0)},[p]);return m.useEffect(()=>()=>v(),[v]),m.useEffect(()=>{if(l&&f){const x=b=>y(b,f),_=b=>y(b,l);return l.addEventListener("pointerleave",x),f.addEventListener("pointerleave",_),()=>{l.removeEventListener("pointerleave",x),f.removeEventListener("pointerleave",_)}}},[l,f,y,v]),m.useEffect(()=>{if(o){const x=_=>{const b=_.target,R={x:_.clientX,y:_.clientY},P=(l==null?void 0:l.contains(b))||(f==null?void 0:f.contains(b)),k=!YT(R,o);P?v():k&&(v(),h())};return document.addEventListener("pointermove",x),()=>document.removeEventListener("pointermove",x)}},[l,f,o,h,v]),u.jsx(Pp,{...n,ref:i})}),[BT,HT]=Oo(As,{isInside:!1}),zT=kw("TooltipContent"),Pp=m.forwardRef((n,e)=>{const{__scopeTooltip:t,children:r,"aria-label":s,onEscapeKeyDown:i,onPointerDownOutside:o,...c}=n,l=Vo(Pr,t),h=Lo(t),{onClose:f}=l;return m.useEffect(()=>(document.addEventListener(wc,f),()=>document.removeEventListener(wc,f)),[f]),m.useEffect(()=>{if(l.trigger){const p=v=>{const y=v.target;y!=null&&y.contains(l.trigger)&&f()};return window.addEventListener("scroll",p,{capture:!0}),()=>window.removeEventListener("scroll",p,{capture:!0})}},[l.trigger,f]),u.jsx(js,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:i,onPointerDownOutside:o,onFocusOutside:p=>p.preventDefault(),onDismiss:f,children:u.jsxs(Do,{"data-state":l.stateAttribute,...h,...c,ref:e,style:{...c.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[u.jsx(zT,{children:r}),u.jsx(BT,{scope:t,isInside:!0,children:u.jsx(Dw,{id:l.contentId,role:"tooltip",children:s||r})})]})})});Rp.displayName=Pr;var Np="TooltipArrow",qT=m.forwardRef((n,e)=>{const{__scopeTooltip:t,...r}=n,s=Lo(t);return HT(Np,t).isInside?null:u.jsx(Mo,{...s,...r,ref:e})});qT.displayName=Np;function WT(n,e){const t=Math.abs(e.top-n.y),r=Math.abs(e.bottom-n.y),s=Math.abs(e.right-n.x),i=Math.abs(e.left-n.x);switch(Math.min(t,r,s,i)){case i:return"left";case s:return"right";case t:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function GT(n,e,t=5){const r=[];switch(e){case"top":r.push({x:n.x-t,y:n.y+t},{x:n.x+t,y:n.y+t});break;case"bottom":r.push({x:n.x-t,y:n.y-t},{x:n.x+t,y:n.y-t});break;case"left":r.push({x:n.x+t,y:n.y-t},{x:n.x+t,y:n.y+t});break;case"right":r.push({x:n.x-t,y:n.y-t},{x:n.x-t,y:n.y+t});break}return r}function KT(n){const{top:e,right:t,bottom:r,left:s}=n;return[{x:s,y:e},{x:t,y:e},{x:t,y:r},{x:s,y:r}]}function YT(n,e){const{x:t,y:r}=n;let s=!1;for(let i=0,o=e.length-1;i<e.length;o=i++){const c=e[i],l=e[o],h=c.x,f=c.y,p=l.x,v=l.y;f>r!=v>r&&t<(p-h)*(r-f)/(v-f)+h&&(s=!s)}return s}function QT(n){const e=n.slice();return e.sort((t,r)=>t.x<r.x?-1:t.x>r.x?1:t.y<r.y?-1:t.y>r.y?1:0),XT(e)}function XT(n){if(n.length<=1)return n.slice();const e=[];for(let r=0;r<n.length;r++){const s=n[r];for(;e.length>=2;){const i=e[e.length-1],o=e[e.length-2];if((i.x-o.x)*(s.y-o.y)>=(i.y-o.y)*(s.x-o.x))e.pop();else break}e.push(s)}e.pop();const t=[];for(let r=n.length-1;r>=0;r--){const s=n[r];for(;t.length>=2;){const i=t[t.length-1],o=t[t.length-2];if((i.x-o.x)*(s.y-o.y)>=(i.y-o.y)*(s.x-o.x))t.pop();else break}t.push(s)}return t.pop(),e.length===1&&t.length===1&&e[0].x===t[0].x&&e[0].y===t[0].y?e:e.concat(t)}var JT=Cp,ZT=Sp,e0=Ap,kp=Rp;const mt=JT,gt=ZT,vt=e0,at=m.forwardRef(({className:n,sideOffset:e=4,...t},r)=>u.jsx(kp,{ref:r,sideOffset:e,className:oe("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...t}));at.displayName=kp.displayName;var t0=m.createContext(void 0);function jo(n){const e=m.useContext(t0);return n||e||"ltr"}function Tc(n,[e,t]){return Math.min(t,Math.max(e,n))}function n0(n,e){return m.useReducer((t,r)=>e[t][r]??t,n)}var yl="ScrollArea",[Dp,YD]=xt(yl),[r0,ht]=Dp(yl),Mp=m.forwardRef((n,e)=>{const{__scopeScrollArea:t,type:r="hover",dir:s,scrollHideDelay:i=600,...o}=n,[c,l]=m.useState(null),[h,f]=m.useState(null),[p,v]=m.useState(null),[y,x]=m.useState(null),[_,b]=m.useState(null),[R,P]=m.useState(0),[k,O]=m.useState(0),[M,V]=m.useState(!1),[I,E]=m.useState(!1),T=ge(e,A=>l(A)),S=jo(s);return u.jsx(r0,{scope:t,type:r,dir:S,scrollHideDelay:i,scrollArea:c,viewport:h,onViewportChange:f,content:p,onContentChange:v,scrollbarX:y,onScrollbarXChange:x,scrollbarXEnabled:M,onScrollbarXEnabledChange:V,scrollbarY:_,onScrollbarYChange:b,scrollbarYEnabled:I,onScrollbarYEnabledChange:E,onCornerWidthChange:P,onCornerHeightChange:O,children:u.jsx(se.div,{dir:S,...o,ref:T,style:{position:"relative","--radix-scroll-area-corner-width":R+"px","--radix-scroll-area-corner-height":k+"px",...n.style}})})});Mp.displayName=yl;var Op="ScrollAreaViewport",Lp=m.forwardRef((n,e)=>{const{__scopeScrollArea:t,children:r,nonce:s,...i}=n,o=ht(Op,t),c=m.useRef(null),l=ge(e,c,o.onViewportChange);return u.jsxs(u.Fragment,{children:[u.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:s}),u.jsx(se.div,{"data-radix-scroll-area-viewport":"",...i,ref:l,style:{overflowX:o.scrollbarXEnabled?"scroll":"hidden",overflowY:o.scrollbarYEnabled?"scroll":"hidden",...n.style},children:u.jsx("div",{ref:o.onContentChange,style:{minWidth:"100%",display:"table"},children:r})})]})});Lp.displayName=Op;var jt="ScrollAreaScrollbar",_l=m.forwardRef((n,e)=>{const{forceMount:t,...r}=n,s=ht(jt,n.__scopeScrollArea),{onScrollbarXEnabledChange:i,onScrollbarYEnabledChange:o}=s,c=n.orientation==="horizontal";return m.useEffect(()=>(c?i(!0):o(!0),()=>{c?i(!1):o(!1)}),[c,i,o]),s.type==="hover"?u.jsx(s0,{...r,ref:e,forceMount:t}):s.type==="scroll"?u.jsx(i0,{...r,ref:e,forceMount:t}):s.type==="auto"?u.jsx(Vp,{...r,ref:e,forceMount:t}):s.type==="always"?u.jsx(wl,{...r,ref:e}):null});_l.displayName=jt;var s0=m.forwardRef((n,e)=>{const{forceMount:t,...r}=n,s=ht(jt,n.__scopeScrollArea),[i,o]=m.useState(!1);return m.useEffect(()=>{const c=s.scrollArea;let l=0;if(c){const h=()=>{window.clearTimeout(l),o(!0)},f=()=>{l=window.setTimeout(()=>o(!1),s.scrollHideDelay)};return c.addEventListener("pointerenter",h),c.addEventListener("pointerleave",f),()=>{window.clearTimeout(l),c.removeEventListener("pointerenter",h),c.removeEventListener("pointerleave",f)}}},[s.scrollArea,s.scrollHideDelay]),u.jsx(et,{present:t||i,children:u.jsx(Vp,{"data-state":i?"visible":"hidden",...r,ref:e})})}),i0=m.forwardRef((n,e)=>{const{forceMount:t,...r}=n,s=ht(jt,n.__scopeScrollArea),i=n.orientation==="horizontal",o=Uo(()=>l("SCROLL_END"),100),[c,l]=n0("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return m.useEffect(()=>{if(c==="idle"){const h=window.setTimeout(()=>l("HIDE"),s.scrollHideDelay);return()=>window.clearTimeout(h)}},[c,s.scrollHideDelay,l]),m.useEffect(()=>{const h=s.viewport,f=i?"scrollLeft":"scrollTop";if(h){let p=h[f];const v=()=>{const y=h[f];p!==y&&(l("SCROLL"),o()),p=y};return h.addEventListener("scroll",v),()=>h.removeEventListener("scroll",v)}},[s.viewport,i,l,o]),u.jsx(et,{present:t||c!=="hidden",children:u.jsx(wl,{"data-state":c==="hidden"?"hidden":"visible",...r,ref:e,onPointerEnter:z(n.onPointerEnter,()=>l("POINTER_ENTER")),onPointerLeave:z(n.onPointerLeave,()=>l("POINTER_LEAVE"))})})}),Vp=m.forwardRef((n,e)=>{const t=ht(jt,n.__scopeScrollArea),{forceMount:r,...s}=n,[i,o]=m.useState(!1),c=n.orientation==="horizontal",l=Uo(()=>{if(t.viewport){const h=t.viewport.offsetWidth<t.viewport.scrollWidth,f=t.viewport.offsetHeight<t.viewport.scrollHeight;o(c?h:f)}},10);return Nr(t.viewport,l),Nr(t.content,l),u.jsx(et,{present:r||i,children:u.jsx(wl,{"data-state":i?"visible":"hidden",...s,ref:e})})}),wl=m.forwardRef((n,e)=>{const{orientation:t="vertical",...r}=n,s=ht(jt,n.__scopeScrollArea),i=m.useRef(null),o=m.useRef(0),[c,l]=m.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),h=Bp(c.viewport,c.content),f={...r,sizes:c,onSizesChange:l,hasThumb:h>0&&h<1,onThumbChange:v=>i.current=v,onThumbPointerUp:()=>o.current=0,onThumbPointerDown:v=>o.current=v};function p(v,y){return h0(v,o.current,c,y)}return t==="horizontal"?u.jsx(o0,{...f,ref:e,onThumbPositionChange:()=>{if(s.viewport&&i.current){const v=s.viewport.scrollLeft,y=qh(v,c,s.dir);i.current.style.transform=`translate3d(${y}px, 0, 0)`}},onWheelScroll:v=>{s.viewport&&(s.viewport.scrollLeft=v)},onDragScroll:v=>{s.viewport&&(s.viewport.scrollLeft=p(v,s.dir))}}):t==="vertical"?u.jsx(a0,{...f,ref:e,onThumbPositionChange:()=>{if(s.viewport&&i.current){const v=s.viewport.scrollTop,y=qh(v,c);i.current.style.transform=`translate3d(0, ${y}px, 0)`}},onWheelScroll:v=>{s.viewport&&(s.viewport.scrollTop=v)},onDragScroll:v=>{s.viewport&&(s.viewport.scrollTop=p(v))}}):null}),o0=m.forwardRef((n,e)=>{const{sizes:t,onSizesChange:r,...s}=n,i=ht(jt,n.__scopeScrollArea),[o,c]=m.useState(),l=m.useRef(null),h=ge(e,l,i.onScrollbarXChange);return m.useEffect(()=>{l.current&&c(getComputedStyle(l.current))},[l]),u.jsx(Fp,{"data-orientation":"horizontal",...s,ref:h,sizes:t,style:{bottom:0,left:i.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:i.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":Fo(t)+"px",...n.style},onThumbPointerDown:f=>n.onThumbPointerDown(f.x),onDragScroll:f=>n.onDragScroll(f.x),onWheelScroll:(f,p)=>{if(i.viewport){const v=i.viewport.scrollLeft+f.deltaX;n.onWheelScroll(v),zp(v,p)&&f.preventDefault()}},onResize:()=>{l.current&&i.viewport&&o&&r({content:i.viewport.scrollWidth,viewport:i.viewport.offsetWidth,scrollbar:{size:l.current.clientWidth,paddingStart:eo(o.paddingLeft),paddingEnd:eo(o.paddingRight)}})}})}),a0=m.forwardRef((n,e)=>{const{sizes:t,onSizesChange:r,...s}=n,i=ht(jt,n.__scopeScrollArea),[o,c]=m.useState(),l=m.useRef(null),h=ge(e,l,i.onScrollbarYChange);return m.useEffect(()=>{l.current&&c(getComputedStyle(l.current))},[l]),u.jsx(Fp,{"data-orientation":"vertical",...s,ref:h,sizes:t,style:{top:0,right:i.dir==="ltr"?0:void 0,left:i.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":Fo(t)+"px",...n.style},onThumbPointerDown:f=>n.onThumbPointerDown(f.y),onDragScroll:f=>n.onDragScroll(f.y),onWheelScroll:(f,p)=>{if(i.viewport){const v=i.viewport.scrollTop+f.deltaY;n.onWheelScroll(v),zp(v,p)&&f.preventDefault()}},onResize:()=>{l.current&&i.viewport&&o&&r({content:i.viewport.scrollHeight,viewport:i.viewport.offsetHeight,scrollbar:{size:l.current.clientHeight,paddingStart:eo(o.paddingTop),paddingEnd:eo(o.paddingBottom)}})}})}),[c0,jp]=Dp(jt),Fp=m.forwardRef((n,e)=>{const{__scopeScrollArea:t,sizes:r,hasThumb:s,onThumbChange:i,onThumbPointerUp:o,onThumbPointerDown:c,onThumbPositionChange:l,onDragScroll:h,onWheelScroll:f,onResize:p,...v}=n,y=ht(jt,t),[x,_]=m.useState(null),b=ge(e,T=>_(T)),R=m.useRef(null),P=m.useRef(""),k=y.viewport,O=r.content-r.viewport,M=Ze(f),V=Ze(l),I=Uo(p,10);function E(T){if(R.current){const S=T.clientX-R.current.left,A=T.clientY-R.current.top;h({x:S,y:A})}}return m.useEffect(()=>{const T=S=>{const A=S.target;(x==null?void 0:x.contains(A))&&M(S,O)};return document.addEventListener("wheel",T,{passive:!1}),()=>document.removeEventListener("wheel",T,{passive:!1})},[k,x,O,M]),m.useEffect(V,[r,V]),Nr(x,I),Nr(y.content,I),u.jsx(c0,{scope:t,scrollbar:x,hasThumb:s,onThumbChange:Ze(i),onThumbPointerUp:Ze(o),onThumbPositionChange:V,onThumbPointerDown:Ze(c),children:u.jsx(se.div,{...v,ref:b,style:{position:"absolute",...v.style},onPointerDown:z(n.onPointerDown,T=>{T.button===0&&(T.target.setPointerCapture(T.pointerId),R.current=x.getBoundingClientRect(),P.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",y.viewport&&(y.viewport.style.scrollBehavior="auto"),E(T))}),onPointerMove:z(n.onPointerMove,E),onPointerUp:z(n.onPointerUp,T=>{const S=T.target;S.hasPointerCapture(T.pointerId)&&S.releasePointerCapture(T.pointerId),document.body.style.webkitUserSelect=P.current,y.viewport&&(y.viewport.style.scrollBehavior=""),R.current=null})})})}),Zi="ScrollAreaThumb",Up=m.forwardRef((n,e)=>{const{forceMount:t,...r}=n,s=jp(Zi,n.__scopeScrollArea);return u.jsx(et,{present:t||s.hasThumb,children:u.jsx(l0,{ref:e,...r})})}),l0=m.forwardRef((n,e)=>{const{__scopeScrollArea:t,style:r,...s}=n,i=ht(Zi,t),o=jp(Zi,t),{onThumbPositionChange:c}=o,l=ge(e,p=>o.onThumbChange(p)),h=m.useRef(void 0),f=Uo(()=>{h.current&&(h.current(),h.current=void 0)},100);return m.useEffect(()=>{const p=i.viewport;if(p){const v=()=>{if(f(),!h.current){const y=d0(p,c);h.current=y,c()}};return c(),p.addEventListener("scroll",v),()=>p.removeEventListener("scroll",v)}},[i.viewport,f,c]),u.jsx(se.div,{"data-state":o.hasThumb?"visible":"hidden",...s,ref:l,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...r},onPointerDownCapture:z(n.onPointerDownCapture,p=>{const y=p.target.getBoundingClientRect(),x=p.clientX-y.left,_=p.clientY-y.top;o.onThumbPointerDown({x,y:_})}),onPointerUp:z(n.onPointerUp,o.onThumbPointerUp)})});Up.displayName=Zi;var El="ScrollAreaCorner",$p=m.forwardRef((n,e)=>{const t=ht(El,n.__scopeScrollArea),r=!!(t.scrollbarX&&t.scrollbarY);return t.type!=="scroll"&&r?u.jsx(u0,{...n,ref:e}):null});$p.displayName=El;var u0=m.forwardRef((n,e)=>{const{__scopeScrollArea:t,...r}=n,s=ht(El,t),[i,o]=m.useState(0),[c,l]=m.useState(0),h=!!(i&&c);return Nr(s.scrollbarX,()=>{var p;const f=((p=s.scrollbarX)==null?void 0:p.offsetHeight)||0;s.onCornerHeightChange(f),l(f)}),Nr(s.scrollbarY,()=>{var p;const f=((p=s.scrollbarY)==null?void 0:p.offsetWidth)||0;s.onCornerWidthChange(f),o(f)}),h?u.jsx(se.div,{...r,ref:e,style:{width:i,height:c,position:"absolute",right:s.dir==="ltr"?0:void 0,left:s.dir==="rtl"?0:void 0,bottom:0,...n.style}}):null});function eo(n){return n?parseInt(n,10):0}function Bp(n,e){const t=n/e;return isNaN(t)?0:t}function Fo(n){const e=Bp(n.viewport,n.content),t=n.scrollbar.paddingStart+n.scrollbar.paddingEnd,r=(n.scrollbar.size-t)*e;return Math.max(r,18)}function h0(n,e,t,r="ltr"){const s=Fo(t),i=s/2,o=e||i,c=s-o,l=t.scrollbar.paddingStart+o,h=t.scrollbar.size-t.scrollbar.paddingEnd-c,f=t.content-t.viewport,p=r==="ltr"?[0,f]:[f*-1,0];return Hp([l,h],p)(n)}function qh(n,e,t="ltr"){const r=Fo(e),s=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,i=e.scrollbar.size-s,o=e.content-e.viewport,c=i-r,l=t==="ltr"?[0,o]:[o*-1,0],h=Tc(n,l);return Hp([0,o],[0,c])(h)}function Hp(n,e){return t=>{if(n[0]===n[1]||e[0]===e[1])return e[0];const r=(e[1]-e[0])/(n[1]-n[0]);return e[0]+r*(t-n[0])}}function zp(n,e){return n>0&&n<e}var d0=(n,e=()=>{})=>{let t={left:n.scrollLeft,top:n.scrollTop},r=0;return function s(){const i={left:n.scrollLeft,top:n.scrollTop},o=t.left!==i.left,c=t.top!==i.top;(o||c)&&e(),t=i,r=window.requestAnimationFrame(s)}(),()=>window.cancelAnimationFrame(r)};function Uo(n,e){const t=Ze(n),r=m.useRef(0);return m.useEffect(()=>()=>window.clearTimeout(r.current),[]),m.useCallback(()=>{window.clearTimeout(r.current),r.current=window.setTimeout(t,e)},[t,e])}function Nr(n,e){const t=Ze(e);Ye(()=>{let r=0;if(n){const s=new ResizeObserver(()=>{cancelAnimationFrame(r),r=window.requestAnimationFrame(t)});return s.observe(n),()=>{window.cancelAnimationFrame(r),s.unobserve(n)}}},[n,t])}var qp=Mp,f0=Lp,p0=$p;const ws=m.forwardRef(({className:n,children:e,...t},r)=>u.jsxs(qp,{ref:r,className:oe("relative overflow-hidden",n),...t,children:[u.jsx(f0,{className:"h-full w-full rounded-[inherit]",children:e}),u.jsx(Wp,{}),u.jsx(p0,{})]}));ws.displayName=qp.displayName;const Wp=m.forwardRef(({className:n,orientation:e="vertical",...t},r)=>u.jsx(_l,{ref:r,orientation:e,className:oe("flex touch-none select-none transition-colors",e==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-[1px]",e==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",n),...t,children:u.jsx(Up,{className:"relative flex-1 rounded-full bg-border"})}));Wp.displayName=_l.displayName;var $o="Collapsible",[m0,QD]=xt($o),[g0,Tl]=m0($o),Gp=m.forwardRef((n,e)=>{const{__scopeCollapsible:t,open:r,defaultOpen:s,disabled:i,onOpenChange:o,...c}=n,[l,h]=yn({prop:r,defaultProp:s??!1,onChange:o,caller:$o});return u.jsx(g0,{scope:t,disabled:i,contentId:ct(),open:l,onOpenToggle:m.useCallback(()=>h(f=>!f),[h]),children:u.jsx(se.div,{"data-state":Cl(l),"data-disabled":i?"":void 0,...c,ref:e})})});Gp.displayName=$o;var Kp="CollapsibleTrigger",bl=m.forwardRef((n,e)=>{const{__scopeCollapsible:t,...r}=n,s=Tl(Kp,t);return u.jsx(se.button,{type:"button","aria-controls":s.contentId,"aria-expanded":s.open||!1,"data-state":Cl(s.open),"data-disabled":s.disabled?"":void 0,disabled:s.disabled,...r,ref:e,onClick:z(n.onClick,s.onOpenToggle)})});bl.displayName=Kp;var xl="CollapsibleContent",Il=m.forwardRef((n,e)=>{const{forceMount:t,...r}=n,s=Tl(xl,n.__scopeCollapsible);return u.jsx(et,{present:t||s.open,children:({present:i})=>u.jsx(v0,{...r,ref:e,present:i})})});Il.displayName=xl;var v0=m.forwardRef((n,e)=>{const{__scopeCollapsible:t,present:r,children:s,...i}=n,o=Tl(xl,t),[c,l]=m.useState(r),h=m.useRef(null),f=ge(e,h),p=m.useRef(0),v=p.current,y=m.useRef(0),x=y.current,_=o.open||c,b=m.useRef(_),R=m.useRef(void 0);return m.useEffect(()=>{const P=requestAnimationFrame(()=>b.current=!1);return()=>cancelAnimationFrame(P)},[]),Ye(()=>{const P=h.current;if(P){R.current=R.current||{transitionDuration:P.style.transitionDuration,animationName:P.style.animationName},P.style.transitionDuration="0s",P.style.animationName="none";const k=P.getBoundingClientRect();p.current=k.height,y.current=k.width,b.current||(P.style.transitionDuration=R.current.transitionDuration,P.style.animationName=R.current.animationName),l(r)}},[o.open,r]),u.jsx(se.div,{"data-state":Cl(o.open),"data-disabled":o.disabled?"":void 0,id:o.contentId,hidden:!_,...i,ref:f,style:{"--radix-collapsible-content-height":v?`${v}px`:void 0,"--radix-collapsible-content-width":x?`${x}px`:void 0,...n.style},children:_&&s})});function Cl(n){return n?"open":"closed"}var y0=Gp,XD=bl,JD=Il;const _0=y0,w0=bl,E0=Il,T0=({user:n,collapsed:e=!1,onToggleCollapse:t=()=>{}})=>{const[r,s]=m.useState(e),[i,o]=m.useState({}),[c,l]=m.useState(""),{logout:h}=Fs(),f=Yf();m.useEffect(()=>{const _=f.pathname;l(_),y().forEach(R=>{R.subItems&&R.subItems.some(k=>_.startsWith(k.href))&&o(k=>({...k,[R.title]:!0}))})},[f.pathname]);const p=m.useCallback(()=>{s(_=>!_),t()},[t]),v=m.useCallback(_=>{o(b=>({...b,[_]:!b[_]}))},[]),y=()=>{const _={admin:[{title:"Dashboard",icon:u.jsx(dE,{className:"h-5 w-5"}),href:"/dashboard"},{title:"Trucks",icon:u.jsx($a,{className:"h-5 w-5"}),href:"/dispatcher/trucks"},{title:"Auction",icon:u.jsx(Mh,{className:"h-5 w-5"}),href:"/dispatcher/auction"},{title:"Loads",icon:u.jsx(us,{className:"h-5 w-5"}),href:"/dispatcher/loads"},{title:"Trip Monitor",icon:u.jsx(Ua,{className:"h-5 w-5"}),href:"/dispatcher/trip-monitor"},{title:"Owners",icon:u.jsx(yr,{className:"h-5 w-5"}),href:"/dispatcher/owners"},{title:"Drivers",icon:u.jsx(Oi,{className:"h-5 w-5"}),href:"/dispatcher/drivers"},{title:"Users",icon:u.jsx(yr,{className:"h-5 w-5"}),href:"/dispatcher/users"},{title:"Contragents",icon:u.jsx(Nh,{className:"h-5 w-5"}),href:"/dispatcher/contragents"},{title:"Reports",icon:u.jsx(Ei,{className:"h-5 w-5"}),href:"/dispatcher/reports"},{title:"Live Map",icon:u.jsx(Lh,{className:"h-5 w-5"}),href:"/dispatcher/map"},{title:"Task Management",icon:u.jsx(Dh,{className:"h-5 w-5"}),href:"/dispatcher/tasks"}],Dispatcher:[{title:"Trucks",icon:u.jsx($a,{className:"h-5 w-5"}),href:"/dispatcher/trucks"},{title:"Auction",icon:u.jsx(Mh,{className:"h-5 w-5"}),href:"/dispatcher/auction"},{title:"Loads",icon:u.jsx(us,{className:"h-5 w-5"}),href:"/dispatcher/loads"},{title:"Trip Monitor",icon:u.jsx(Ua,{className:"h-5 w-5"}),href:"/dispatcher/trip-monitor"},{title:"Owners",icon:u.jsx(yr,{className:"h-5 w-5"}),href:"/dispatcher/owners"},{title:"Drivers",icon:u.jsx(Oi,{className:"h-5 w-5"}),href:"/dispatcher/drivers"},{title:"Users",icon:u.jsx(yr,{className:"h-5 w-5"}),href:"/dispatcher/users"},{title:"Contragents",icon:u.jsx(Nh,{className:"h-5 w-5"}),href:"/dispatcher/contragents"},{title:"Reports",icon:u.jsx(Ei,{className:"h-5 w-5"}),href:"/dispatcher/reports"},{title:"Live Map",icon:u.jsx(Lh,{className:"h-5 w-5"}),href:"/dispatcher/map"},{title:"Task Management",icon:u.jsx(Dh,{className:"h-5 w-5"}),href:"/dispatcher/tasks"}],Officer:[{title:"Current Tasks",icon:u.jsx(us,{className:"h-5 w-5"}),href:"/officer/tasks"},{title:"Task History",icon:u.jsx(Oh,{className:"h-5 w-5"}),href:"/officer/history"},{title:"Personal Logs",icon:u.jsx(Ei,{className:"h-5 w-5"}),href:"/officer/logs"},{title:"Support",icon:u.jsx(rp,{className:"h-5 w-5"}),href:"/officer/support"}],Reviewer:[{title:"Overview",icon:u.jsx(Ua,{className:"h-5 w-5"}),href:"/reviewer/overview"},{title:"Dispatch Logs",icon:u.jsx(us,{className:"h-5 w-5"}),href:"/reviewer/dispatches"},{title:"Audit Trails",icon:u.jsx(Ei,{className:"h-5 w-5"}),href:"/reviewer/audit"},{title:"Reports",icon:u.jsx(oE,{className:"h-5 w-5"}),href:"/reviewer/reports"}],Connect:[{title:"Device Management",icon:u.jsx(uE,{className:"h-5 w-5"}),href:"/connect/devices"},{title:"Integration Settings",icon:u.jsx(AE,{className:"h-5 w-5"}),href:"/connect/integrations"},{title:"Rule Configuration",icon:u.jsx(cE,{className:"h-5 w-5"}),href:"/connect/rules"},{title:"Connectivity Logs",icon:u.jsx(CE,{className:"h-5 w-5"}),href:"/connect/logs"}],Driver:[{title:"My Tasks",icon:u.jsx(us,{className:"h-5 w-5"}),href:"/driver/tasks"},{title:"Vehicle Status",icon:u.jsx($a,{className:"h-5 w-5"}),href:"/driver/vehicle"},{title:"Navigation",icon:u.jsx(yE,{className:"h-5 w-5"}),href:"/driver/navigation"},{title:"History",icon:u.jsx(Oh,{className:"h-5 w-5"}),href:"/driver/history"},{title:"Communication",icon:u.jsx(Ao,{className:"h-5 w-5"}),href:"/driver/messages"}]};console.log("role is",n.role);const b=_[n==null?void 0:n.role]?n.role:"Dispatcher";return console.log("returning this",_[b]),_[b]},x=y();return u.jsxs("div",{className:oe("flex h-full flex-col bg-gradient-to-b from-slate-900 to-slate-950 dark:from-slate-950 dark:to-slate-900 text-white transition-all duration-300",r?"w-[70px]":"w-[280px]"),children:[u.jsxs("div",{className:"flex h-16 items-center justify-between px-4 bg-slate-900/50 backdrop-blur-sm",children:[u.jsxs("div",{className:"flex items-center",children:[u.jsx(Zw,{className:"h-8 w-8 text-teal-400 drop-shadow-md"}),!r&&u.jsx("span",{className:"ml-2 text-xl font-bold tracking-tight bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent",children:"TMS"})]}),u.jsx(Ee,{variant:"ghost",size:"icon",onClick:p,className:"text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all duration-200",children:r?u.jsx(kh,{className:"h-5 w-5"}):u.jsx(np,{className:"h-5 w-5"})})]}),u.jsx(Rh,{className:"bg-slate-700"}),u.jsx(ws,{className:"flex-1 px-2 py-4",children:u.jsx("nav",{className:"flex flex-col gap-1",children:x.map((_,b)=>u.jsx(Mw.Fragment,{children:_.subItems?u.jsxs(_0,{className:"w-full",open:i[_.title],onOpenChange:()=>v(_.title),children:[u.jsx(mt,{delayDuration:300,children:u.jsxs(gt,{children:[u.jsx(vt,{asChild:!0,children:u.jsx(w0,{asChild:!0,children:u.jsxs(Ee,{variant:"ghost",className:oe("flex h-10 w-full items-center justify-start gap-3 rounded-md px-3 text-slate-300 hover:bg-slate-800/70 hover:text-white transition-all duration-200",r&&"justify-center px-2",_.subItems.some(R=>c.startsWith(R.href))&&"bg-slate-800/50 text-white font-medium border-l-2 border-teal-500"),children:[u.jsx("div",{className:oe("flex items-center justify-center transition-transform duration-200",_.subItems.some(R=>c.startsWith(R.href))&&"text-teal-400"),children:_.icon}),!r&&u.jsx("span",{className:"flex-1",children:_.title}),!r&&u.jsx(kh,{className:oe("h-4 w-4 transition-transform duration-200",i[_.title]&&"rotate-90")})]})})}),r&&u.jsx(at,{side:"right",children:u.jsx("p",{children:_.title})})]})}),!r&&u.jsx(E0,{className:"pl-10 pr-2",children:u.jsx("div",{className:"flex flex-col gap-1 py-1",children:_.subItems.map((R,P)=>u.jsx(Ee,{variant:"ghost",className:oe("flex h-8 w-full items-center justify-start gap-2 rounded-md px-2 text-sm text-slate-300 hover:bg-slate-800/70 hover:text-white transition-all duration-200",c.startsWith(R.href)&&"bg-slate-800/50 text-white font-medium border-l-2 border-teal-500"),asChild:!0,children:u.jsx(ja,{to:R.href,children:u.jsx("span",{children:R.title})})},P))})})]}):u.jsx(mt,{delayDuration:300,children:u.jsxs(gt,{children:[u.jsx(vt,{asChild:!0,children:u.jsx(Ee,{variant:"ghost",className:oe("flex h-10 w-full items-center justify-start gap-3 rounded-md px-3 text-slate-300 hover:bg-slate-800/70 hover:text-white transition-all duration-200",r&&"justify-center px-2",c.startsWith(_.href)&&"bg-slate-800/50 text-white font-medium border-l-2 border-teal-500"),asChild:!0,children:u.jsxs(ja,{to:_.href,children:[u.jsx("div",{className:oe("flex items-center justify-center transition-transform duration-200",c.startsWith(_.href)&&"text-teal-400"),children:_.icon}),!r&&u.jsx("span",{className:"transition-colors duration-200",children:_.title})]})})}),r&&u.jsx(at,{side:"right",children:u.jsx("p",{children:_.title})})]})})},b))})}),u.jsx(Rh,{className:"bg-slate-700"}),u.jsx("div",{className:"p-2 space-y-2",children:u.jsxs("div",{className:"px-3 py-2",children:[!r&&u.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[u.jsx("div",{className:"h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden",children:u.jsx(Oi,{size:16,className:"text-primary"})}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsx("p",{className:"text-sm font-medium text-white truncate",children:n.name}),u.jsx("p",{className:"text-xs text-slate-400 truncate",children:n.role})]})]}),u.jsx(mt,{delayDuration:300,children:u.jsxs(gt,{children:[u.jsx(vt,{asChild:!0,children:u.jsx(ja,{to:"/",onClick:()=>{localStorage.clear(),h()},children:u.jsxs(Ee,{variant:"ghost",className:oe("flex h-10 w-full items-center justify-start gap-3 rounded-md px-3 text-slate-300 hover:bg-slate-800/70 hover:text-white transition-all duration-200",r&&"justify-center px-2"),children:[u.jsx(sp,{className:"h-5 w-5 text-red-400"}),!r&&u.jsx("span",{children:"Logout"})]})})}),r&&u.jsx(at,{side:"right",children:u.jsx("p",{children:"Logout"})})]})})]})})]})},b0=m.memo(T0),x0=n=>u.jsx(b0,{...n}),I0=m.memo(x0);function C0(n,e=300){const[t,r]=m.useState(n);return m.useEffect(()=>{const s=setTimeout(()=>{r(n)},e);return()=>{clearTimeout(s)}},[n,e]),t}const S0=async n=>{try{return{conversations:[]}}catch(e){console.error(e)}},A0=async(n,e)=>{try{const t=[n,e].sort(),r=`direct_${t[0]}_${t[1]}`,{data:s,error:i}={data:{},error:null};i&&i.code;const{data:o,error:c}={data:[],error:null},l=o.map(h=>{var f,p;return{id:h.user_id,name:((f=h.users)==null?void 0:f.full_name)||"Unknown User",avatar:(p=h.users)==null?void 0:p.avatar_url}});return{conversation:{...s,participants:l}}}catch(t){console.error(t)}},R0=async(n,e,t)=>{try{const r=`group_${Date.now()}`,{data:s,error:i}={data:{id:r,name:n,created_by:e,is_group:!0},error:null},o=t.map(l=>({conversation_id:r,user_id:l})),{error:c}={error:null};return{conversation:s}}catch(r){console.error(r)}},Wh=async(n,e=50,t)=>{try{return{messages:[].map(i=>{var o,c;return{id:i.id,senderId:i.sender_id,senderName:(o=i.sender)==null?void 0:o.full_name,senderAvatar:(c=i.sender)==null?void 0:c.avatar_url,recipientId:i.recipient_id,conversationId:i.conversation_id,content:i.content,read:i.read,createdAt:i.created_at,updatedAt:i.updated_at}})}}catch(r){console.error(r)}},P0=async(n,e,t,r)=>{try{const s={id:1,senderId:n,content:e,conversationId:t,recipientId:r};return{message:{id:s.id,senderId:s.senderId,recipientId:s.recipientId,conversationId:s.conversationId,content:s.content}}}catch(s){console.error(s)}},Gh=async(n,e)=>{try{return{success:!0}}catch(t){console.error(t)}},Yp=async n=>{try{return{count:0||0}}catch(e){console.error(e)}},N0=Ow("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function Qp({className:n,variant:e,...t}){return u.jsx("div",{className:oe(N0({variant:e}),n),...t})}const Xp=({className:n=""})=>{const{user:e}=Fs(),[t,r]=m.useState(0),s=async()=>{if(e!=null&&e.id)try{const i=await Yp(e.id);if("error"in i){console.error("Error loading unread count:",i.error);return}r(i.count)}catch(i){console.error("Error loading unread count:",i)}};return m.useEffect(()=>{e!=null&&e.id&&s()},[e==null?void 0:e.id]),m.useEffect(()=>{e!=null&&e.id},[e==null?void 0:e.id]),t===0?null:u.jsx(ep,{children:u.jsx(Zf.div,{initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.5,opacity:0},className:n,children:u.jsx(Qp,{className:"bg-teal-600 hover:bg-teal-700 transition-colors shadow-sm",variant:"secondary",children:t>99?"99+":t})})})};var za={exports:{}},qa={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kh;function k0(){if(Kh)return qa;Kh=1;var n=Lw();function e(p,v){return p===v&&(p!==0||1/p===1/v)||p!==p&&v!==v}var t=typeof Object.is=="function"?Object.is:e,r=n.useState,s=n.useEffect,i=n.useLayoutEffect,o=n.useDebugValue;function c(p,v){var y=v(),x=r({inst:{value:y,getSnapshot:v}}),_=x[0].inst,b=x[1];return i(function(){_.value=y,_.getSnapshot=v,l(_)&&b({inst:_})},[p,y,v]),s(function(){return l(_)&&b({inst:_}),p(function(){l(_)&&b({inst:_})})},[p]),o(y),y}function l(p){var v=p.getSnapshot;p=p.value;try{var y=v();return!t(p,y)}catch{return!0}}function h(p,v){return v()}var f=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?h:c;return qa.useSyncExternalStore=n.useSyncExternalStore!==void 0?n.useSyncExternalStore:f,qa}var Yh;function D0(){return Yh||(Yh=1,za.exports=k0()),za.exports}var M0=D0();function O0(){return M0.useSyncExternalStore(L0,()=>!0,()=>!1)}function L0(){return()=>{}}var Sl="Avatar",[V0,ZD]=xt(Sl),[j0,Jp]=V0(Sl),Zp=m.forwardRef((n,e)=>{const{__scopeAvatar:t,...r}=n,[s,i]=m.useState("idle");return u.jsx(j0,{scope:t,imageLoadingStatus:s,onImageLoadingStatusChange:i,children:u.jsx(se.span,{...r,ref:e})})});Zp.displayName=Sl;var em="AvatarImage",tm=m.forwardRef((n,e)=>{const{__scopeAvatar:t,src:r,onLoadingStatusChange:s=()=>{},...i}=n,o=Jp(em,t),c=F0(r,i),l=Ze(h=>{s(h),o.onImageLoadingStatusChange(h)});return Ye(()=>{c!=="idle"&&l(c)},[c,l]),c==="loaded"?u.jsx(se.img,{...i,ref:e,src:r}):null});tm.displayName=em;var nm="AvatarFallback",rm=m.forwardRef((n,e)=>{const{__scopeAvatar:t,delayMs:r,...s}=n,i=Jp(nm,t),[o,c]=m.useState(r===void 0);return m.useEffect(()=>{if(r!==void 0){const l=window.setTimeout(()=>c(!0),r);return()=>window.clearTimeout(l)}},[r]),o&&i.imageLoadingStatus!=="loaded"?u.jsx(se.span,{...s,ref:e}):null});rm.displayName=nm;function Qh(n,e){return n?e?(n.src!==e&&(n.src=e),n.complete&&n.naturalWidth>0?"loaded":"loading"):"error":"idle"}function F0(n,{referrerPolicy:e,crossOrigin:t}){const r=O0(),s=m.useRef(null),i=r?(s.current||(s.current=new window.Image),s.current):null,[o,c]=m.useState(()=>Qh(i,n));return Ye(()=>{c(Qh(i,n))},[i,n]),Ye(()=>{const l=p=>()=>{c(p)};if(!i)return;const h=l("loaded"),f=l("error");return i.addEventListener("load",h),i.addEventListener("error",f),e&&(i.referrerPolicy=e),typeof t=="string"&&(i.crossOrigin=t),()=>{i.removeEventListener("load",h),i.removeEventListener("error",f)}},[i,t,e]),o}var sm=Zp,im=tm,om=rm;const Un=m.forwardRef(({className:n,...e},t)=>u.jsx(sm,{ref:t,className:oe("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",n),...e}));Un.displayName=sm.displayName;const $n=m.forwardRef(({className:n,...e},t)=>u.jsx(im,{ref:t,className:oe("aspect-square h-full w-full",n),...e}));$n.displayName=im.displayName;const Bn=m.forwardRef(({className:n,...e},t)=>u.jsx(om,{ref:t,className:oe("flex h-full w-full items-center justify-center rounded-full bg-muted",n),...e}));Bn.displayName=om.displayName;var Wa=0;function Bo(){m.useEffect(()=>{const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",n[0]??Xh()),document.body.insertAdjacentElement("beforeend",n[1]??Xh()),Wa++,()=>{Wa===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),Wa--}},[])}function Xh(){const n=document.createElement("span");return n.setAttribute("data-radix-focus-guard",""),n.tabIndex=0,n.style.outline="none",n.style.opacity="0",n.style.position="fixed",n.style.pointerEvents="none",n}var Ga="focusScope.autoFocusOnMount",Ka="focusScope.autoFocusOnUnmount",Jh={bubbles:!1,cancelable:!0},U0="FocusScope",Bs=m.forwardRef((n,e)=>{const{loop:t=!1,trapped:r=!1,onMountAutoFocus:s,onUnmountAutoFocus:i,...o}=n,[c,l]=m.useState(null),h=Ze(s),f=Ze(i),p=m.useRef(null),v=ge(e,_=>l(_)),y=m.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;m.useEffect(()=>{if(r){let _=function(k){if(y.paused||!c)return;const O=k.target;c.contains(O)?p.current=O:cn(p.current,{select:!0})},b=function(k){if(y.paused||!c)return;const O=k.relatedTarget;O!==null&&(c.contains(O)||cn(p.current,{select:!0}))},R=function(k){if(document.activeElement===document.body)for(const M of k)M.removedNodes.length>0&&cn(c)};document.addEventListener("focusin",_),document.addEventListener("focusout",b);const P=new MutationObserver(R);return c&&P.observe(c,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",_),document.removeEventListener("focusout",b),P.disconnect()}}},[r,c,y.paused]),m.useEffect(()=>{if(c){ed.add(y);const _=document.activeElement;if(!c.contains(_)){const R=new CustomEvent(Ga,Jh);c.addEventListener(Ga,h),c.dispatchEvent(R),R.defaultPrevented||($0(W0(am(c)),{select:!0}),document.activeElement===_&&cn(c))}return()=>{c.removeEventListener(Ga,h),setTimeout(()=>{const R=new CustomEvent(Ka,Jh);c.addEventListener(Ka,f),c.dispatchEvent(R),R.defaultPrevented||cn(_??document.body,{select:!0}),c.removeEventListener(Ka,f),ed.remove(y)},0)}}},[c,h,f,y]);const x=m.useCallback(_=>{if(!t&&!r||y.paused)return;const b=_.key==="Tab"&&!_.altKey&&!_.ctrlKey&&!_.metaKey,R=document.activeElement;if(b&&R){const P=_.currentTarget,[k,O]=B0(P);k&&O?!_.shiftKey&&R===O?(_.preventDefault(),t&&cn(k,{select:!0})):_.shiftKey&&R===k&&(_.preventDefault(),t&&cn(O,{select:!0})):R===P&&_.preventDefault()}},[t,r,y.paused]);return u.jsx(se.div,{tabIndex:-1,...o,ref:v,onKeyDown:x})});Bs.displayName=U0;function $0(n,{select:e=!1}={}){const t=document.activeElement;for(const r of n)if(cn(r,{select:e}),document.activeElement!==t)return}function B0(n){const e=am(n),t=Zh(e,n),r=Zh(e.reverse(),n);return[t,r]}function am(n){const e=[],t=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const s=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||s?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;t.nextNode();)e.push(t.currentNode);return e}function Zh(n,e){for(const t of n)if(!H0(t,{upTo:e}))return t}function H0(n,{upTo:e}){if(getComputedStyle(n).visibility==="hidden")return!0;for(;n;){if(e!==void 0&&n===e)return!1;if(getComputedStyle(n).display==="none")return!0;n=n.parentElement}return!1}function z0(n){return n instanceof HTMLInputElement&&"select"in n}function cn(n,{select:e=!1}={}){if(n&&n.focus){const t=document.activeElement;n.focus({preventScroll:!0}),n!==t&&z0(n)&&e&&n.select()}}var ed=q0();function q0(){let n=[];return{add(e){const t=n[0];e!==t&&(t==null||t.pause()),n=td(n,e),n.unshift(e)},remove(e){var t;n=td(n,e),(t=n[0])==null||t.resume()}}}function td(n,e){const t=[...n],r=t.indexOf(e);return r!==-1&&t.splice(r,1),t}function W0(n){return n.filter(e=>e.tagName!=="A")}var Ya="rovingFocusGroup.onEntryFocus",G0={bubbles:!1,cancelable:!0},Hs="RovingFocusGroup",[bc,cm,K0]=al(Hs),[Y0,lm]=xt(Hs,[K0]),[Q0,X0]=Y0(Hs),um=m.forwardRef((n,e)=>u.jsx(bc.Provider,{scope:n.__scopeRovingFocusGroup,children:u.jsx(bc.Slot,{scope:n.__scopeRovingFocusGroup,children:u.jsx(J0,{...n,ref:e})})}));um.displayName=Hs;var J0=m.forwardRef((n,e)=>{const{__scopeRovingFocusGroup:t,orientation:r,loop:s=!1,dir:i,currentTabStopId:o,defaultCurrentTabStopId:c,onCurrentTabStopIdChange:l,onEntryFocus:h,preventScrollOnEntryFocus:f=!1,...p}=n,v=m.useRef(null),y=ge(e,v),x=jo(i),[_,b]=yn({prop:o,defaultProp:c??null,onChange:l,caller:Hs}),[R,P]=m.useState(!1),k=Ze(h),O=cm(t),M=m.useRef(!1),[V,I]=m.useState(0);return m.useEffect(()=>{const E=v.current;if(E)return E.addEventListener(Ya,k),()=>E.removeEventListener(Ya,k)},[k]),u.jsx(Q0,{scope:t,orientation:r,dir:x,loop:s,currentTabStopId:_,onItemFocus:m.useCallback(E=>b(E),[b]),onItemShiftTab:m.useCallback(()=>P(!0),[]),onFocusableItemAdd:m.useCallback(()=>I(E=>E+1),[]),onFocusableItemRemove:m.useCallback(()=>I(E=>E-1),[]),children:u.jsx(se.div,{tabIndex:R||V===0?-1:0,"data-orientation":r,...p,ref:y,style:{outline:"none",...n.style},onMouseDown:z(n.onMouseDown,()=>{M.current=!0}),onFocus:z(n.onFocus,E=>{const T=!M.current;if(E.target===E.currentTarget&&T&&!R){const S=new CustomEvent(Ya,G0);if(E.currentTarget.dispatchEvent(S),!S.defaultPrevented){const A=O().filter(Z=>Z.focusable),N=A.find(Z=>Z.active),C=A.find(Z=>Z.id===_),ce=[N,C,...A].filter(Boolean).map(Z=>Z.ref.current);fm(ce,f)}}M.current=!1}),onBlur:z(n.onBlur,()=>P(!1))})})}),hm="RovingFocusGroupItem",dm=m.forwardRef((n,e)=>{const{__scopeRovingFocusGroup:t,focusable:r=!0,active:s=!1,tabStopId:i,children:o,...c}=n,l=ct(),h=i||l,f=X0(hm,t),p=f.currentTabStopId===h,v=cm(t),{onFocusableItemAdd:y,onFocusableItemRemove:x,currentTabStopId:_}=f;return m.useEffect(()=>{if(r)return y(),()=>x()},[r,y,x]),u.jsx(bc.ItemSlot,{scope:t,id:h,focusable:r,active:s,children:u.jsx(se.span,{tabIndex:p?0:-1,"data-orientation":f.orientation,...c,ref:e,onMouseDown:z(n.onMouseDown,b=>{r?f.onItemFocus(h):b.preventDefault()}),onFocus:z(n.onFocus,()=>f.onItemFocus(h)),onKeyDown:z(n.onKeyDown,b=>{if(b.key==="Tab"&&b.shiftKey){f.onItemShiftTab();return}if(b.target!==b.currentTarget)return;const R=tb(b,f.orientation,f.dir);if(R!==void 0){if(b.metaKey||b.ctrlKey||b.altKey||b.shiftKey)return;b.preventDefault();let k=v().filter(O=>O.focusable).map(O=>O.ref.current);if(R==="last")k.reverse();else if(R==="prev"||R==="next"){R==="prev"&&k.reverse();const O=k.indexOf(b.currentTarget);k=f.loop?nb(k,O+1):k.slice(O+1)}setTimeout(()=>fm(k))}}),children:typeof o=="function"?o({isCurrentTabStop:p,hasTabStop:_!=null}):o})})});dm.displayName=hm;var Z0={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function eb(n,e){return e!=="rtl"?n:n==="ArrowLeft"?"ArrowRight":n==="ArrowRight"?"ArrowLeft":n}function tb(n,e,t){const r=eb(n.key,t);if(!(e==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(e==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return Z0[r]}function fm(n,e=!1){const t=document.activeElement;for(const r of n)if(r===t||(r.focus({preventScroll:e}),document.activeElement!==t))return}function nb(n,e){return n.map((t,r)=>n[(e+r)%n.length])}var rb=um,sb=dm,ib=function(n){if(typeof document>"u")return null;var e=Array.isArray(n)?n[0]:n;return e.ownerDocument.body},ur=new WeakMap,bi=new WeakMap,xi={},Qa=0,pm=function(n){return n&&(n.host||pm(n.parentNode))},ob=function(n,e){return e.map(function(t){if(n.contains(t))return t;var r=pm(t);return r&&n.contains(r)?r:(console.error("aria-hidden",t,"in not contained inside",n,". Doing nothing"),null)}).filter(function(t){return!!t})},ab=function(n,e,t,r){var s=ob(e,Array.isArray(n)?n:[n]);xi[t]||(xi[t]=new WeakMap);var i=xi[t],o=[],c=new Set,l=new Set(s),h=function(p){!p||c.has(p)||(c.add(p),h(p.parentNode))};s.forEach(h);var f=function(p){!p||l.has(p)||Array.prototype.forEach.call(p.children,function(v){if(c.has(v))f(v);else try{var y=v.getAttribute(r),x=y!==null&&y!=="false",_=(ur.get(v)||0)+1,b=(i.get(v)||0)+1;ur.set(v,_),i.set(v,b),o.push(v),_===1&&x&&bi.set(v,!0),b===1&&v.setAttribute(t,"true"),x||v.setAttribute(r,"true")}catch(R){console.error("aria-hidden: cannot operate on ",v,R)}})};return f(e),c.clear(),Qa++,function(){o.forEach(function(p){var v=ur.get(p)-1,y=i.get(p)-1;ur.set(p,v),i.set(p,y),v||(bi.has(p)||p.removeAttribute(r),bi.delete(p)),y||p.removeAttribute(t)}),Qa--,Qa||(ur=new WeakMap,ur=new WeakMap,bi=new WeakMap,xi={})}},Ho=function(n,e,t){t===void 0&&(t="data-aria-hidden");var r=Array.from(Array.isArray(n)?n:[n]),s=ib(n);return s?(r.push.apply(r,Array.from(s.querySelectorAll("[aria-live]"))),ab(r,s,t,"aria-hidden")):function(){return null}},St=function(){return St=Object.assign||function(e){for(var t,r=1,s=arguments.length;r<s;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},St.apply(this,arguments)};function zs(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function cb(n,e,t){if(t||arguments.length===2)for(var r=0,s=e.length,i;r<s;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return n.concat(i||Array.prototype.slice.call(e))}var Vi="right-scroll-bar-position",ji="width-before-scroll-bar",lb="with-scroll-bars-hidden",ub="--removed-body-scroll-bar-size";function Xa(n,e){return typeof n=="function"?n(e):n&&(n.current=e),n}function hb(n,e){var t=m.useState(function(){return{value:n,callback:e,facade:{get current(){return t.value},set current(r){var s=t.value;s!==r&&(t.value=r,t.callback(r,s))}}}})[0];return t.callback=e,t.facade}var db=typeof window<"u"?m.useLayoutEffect:m.useEffect,nd=new WeakMap;function fb(n,e){var t=hb(null,function(r){return n.forEach(function(s){return Xa(s,r)})});return db(function(){var r=nd.get(t);if(r){var s=new Set(r),i=new Set(n),o=t.current;s.forEach(function(c){i.has(c)||Xa(c,null)}),i.forEach(function(c){s.has(c)||Xa(c,o)})}nd.set(t,n)},[n]),t}function pb(n){return n}function mb(n,e){e===void 0&&(e=pb);var t=[],r=!1,s={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return t.length?t[t.length-1]:n},useMedium:function(i){var o=e(i,r);return t.push(o),function(){t=t.filter(function(c){return c!==o})}},assignSyncMedium:function(i){for(r=!0;t.length;){var o=t;t=[],o.forEach(i)}t={push:function(c){return i(c)},filter:function(){return t}}},assignMedium:function(i){r=!0;var o=[];if(t.length){var c=t;t=[],c.forEach(i),o=t}var l=function(){var f=o;o=[],f.forEach(i)},h=function(){return Promise.resolve().then(l)};h(),t={push:function(f){o.push(f),h()},filter:function(f){return o=o.filter(f),t}}}};return s}function gb(n){n===void 0&&(n={});var e=mb(null);return e.options=St({async:!0,ssr:!1},n),e}var mm=function(n){var e=n.sideCar,t=zs(n,["sideCar"]);if(!e)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=e.read();if(!r)throw new Error("Sidecar medium not found");return m.createElement(r,St({},t))};mm.isSideCarExport=!0;function vb(n,e){return n.useMedium(e),mm}var gm=gb(),Ja=function(){},zo=m.forwardRef(function(n,e){var t=m.useRef(null),r=m.useState({onScrollCapture:Ja,onWheelCapture:Ja,onTouchMoveCapture:Ja}),s=r[0],i=r[1],o=n.forwardProps,c=n.children,l=n.className,h=n.removeScrollBar,f=n.enabled,p=n.shards,v=n.sideCar,y=n.noIsolation,x=n.inert,_=n.allowPinchZoom,b=n.as,R=b===void 0?"div":b,P=n.gapMode,k=zs(n,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),O=v,M=fb([t,e]),V=St(St({},k),s);return m.createElement(m.Fragment,null,f&&m.createElement(O,{sideCar:gm,removeScrollBar:h,shards:p,noIsolation:y,inert:x,setCallbacks:i,allowPinchZoom:!!_,lockRef:t,gapMode:P}),o?m.cloneElement(m.Children.only(c),St(St({},V),{ref:M})):m.createElement(R,St({},V,{className:l,ref:M}),c))});zo.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};zo.classNames={fullWidth:ji,zeroRight:Vi};var yb=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function _b(){if(!document)return null;var n=document.createElement("style");n.type="text/css";var e=yb();return e&&n.setAttribute("nonce",e),n}function wb(n,e){n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}function Eb(n){var e=document.head||document.getElementsByTagName("head")[0];e.appendChild(n)}var Tb=function(){var n=0,e=null;return{add:function(t){n==0&&(e=_b())&&(wb(e,t),Eb(e)),n++},remove:function(){n--,!n&&e&&(e.parentNode&&e.parentNode.removeChild(e),e=null)}}},bb=function(){var n=Tb();return function(e,t){m.useEffect(function(){return n.add(e),function(){n.remove()}},[e&&t])}},vm=function(){var n=bb(),e=function(t){var r=t.styles,s=t.dynamic;return n(r,s),null};return e},xb={left:0,top:0,right:0,gap:0},Za=function(n){return parseInt(n||"",10)||0},Ib=function(n){var e=window.getComputedStyle(document.body),t=e[n==="padding"?"paddingLeft":"marginLeft"],r=e[n==="padding"?"paddingTop":"marginTop"],s=e[n==="padding"?"paddingRight":"marginRight"];return[Za(t),Za(r),Za(s)]},Cb=function(n){if(n===void 0&&(n="margin"),typeof window>"u")return xb;var e=Ib(n),t=document.documentElement.clientWidth,r=window.innerWidth;return{left:e[0],top:e[1],right:e[2],gap:Math.max(0,r-t+e[2]-e[0])}},Sb=vm(),Er="data-scroll-locked",Ab=function(n,e,t,r){var s=n.left,i=n.top,o=n.right,c=n.gap;return t===void 0&&(t="margin"),`
  .`.concat(lb,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(c,"px ").concat(r,`;
  }
  body[`).concat(Er,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([e&&"position: relative ".concat(r,";"),t==="margin"&&`
    padding-left: `.concat(s,`px;
    padding-top: `).concat(i,`px;
    padding-right: `).concat(o,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c,"px ").concat(r,`;
    `),t==="padding"&&"padding-right: ".concat(c,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(Vi,` {
    right: `).concat(c,"px ").concat(r,`;
  }
  
  .`).concat(ji,` {
    margin-right: `).concat(c,"px ").concat(r,`;
  }
  
  .`).concat(Vi," .").concat(Vi,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(ji," .").concat(ji,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(Er,`] {
    `).concat(ub,": ").concat(c,`px;
  }
`)},rd=function(){var n=parseInt(document.body.getAttribute(Er)||"0",10);return isFinite(n)?n:0},Rb=function(){m.useEffect(function(){return document.body.setAttribute(Er,(rd()+1).toString()),function(){var n=rd()-1;n<=0?document.body.removeAttribute(Er):document.body.setAttribute(Er,n.toString())}},[])},Pb=function(n){var e=n.noRelative,t=n.noImportant,r=n.gapMode,s=r===void 0?"margin":r;Rb();var i=m.useMemo(function(){return Cb(s)},[s]);return m.createElement(Sb,{styles:Ab(i,!e,s,t?"":"!important")})},xc=!1;if(typeof window<"u")try{var Ii=Object.defineProperty({},"passive",{get:function(){return xc=!0,!0}});window.addEventListener("test",Ii,Ii),window.removeEventListener("test",Ii,Ii)}catch{xc=!1}var hr=xc?{passive:!1}:!1,Nb=function(n){return n.tagName==="TEXTAREA"},ym=function(n,e){if(!(n instanceof Element))return!1;var t=window.getComputedStyle(n);return t[e]!=="hidden"&&!(t.overflowY===t.overflowX&&!Nb(n)&&t[e]==="visible")},kb=function(n){return ym(n,"overflowY")},Db=function(n){return ym(n,"overflowX")},sd=function(n,e){var t=e.ownerDocument,r=e;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var s=_m(n,r);if(s){var i=wm(n,r),o=i[1],c=i[2];if(o>c)return!0}r=r.parentNode}while(r&&r!==t.body);return!1},Mb=function(n){var e=n.scrollTop,t=n.scrollHeight,r=n.clientHeight;return[e,t,r]},Ob=function(n){var e=n.scrollLeft,t=n.scrollWidth,r=n.clientWidth;return[e,t,r]},_m=function(n,e){return n==="v"?kb(e):Db(e)},wm=function(n,e){return n==="v"?Mb(e):Ob(e)},Lb=function(n,e){return n==="h"&&e==="rtl"?-1:1},Vb=function(n,e,t,r,s){var i=Lb(n,window.getComputedStyle(e).direction),o=i*r,c=t.target,l=e.contains(c),h=!1,f=o>0,p=0,v=0;do{var y=wm(n,c),x=y[0],_=y[1],b=y[2],R=_-b-i*x;(x||R)&&_m(n,c)&&(p+=R,v+=x),c instanceof ShadowRoot?c=c.host:c=c.parentNode}while(!l&&c!==document.body||l&&(e.contains(c)||e===c));return(f&&Math.abs(p)<1||!f&&Math.abs(v)<1)&&(h=!0),h},Ci=function(n){return"changedTouches"in n?[n.changedTouches[0].clientX,n.changedTouches[0].clientY]:[0,0]},id=function(n){return[n.deltaX,n.deltaY]},od=function(n){return n&&"current"in n?n.current:n},jb=function(n,e){return n[0]===e[0]&&n[1]===e[1]},Fb=function(n){return`
  .block-interactivity-`.concat(n,` {pointer-events: none;}
  .allow-interactivity-`).concat(n,` {pointer-events: all;}
`)},Ub=0,dr=[];function $b(n){var e=m.useRef([]),t=m.useRef([0,0]),r=m.useRef(),s=m.useState(Ub++)[0],i=m.useState(vm)[0],o=m.useRef(n);m.useEffect(function(){o.current=n},[n]),m.useEffect(function(){if(n.inert){document.body.classList.add("block-interactivity-".concat(s));var _=cb([n.lockRef.current],(n.shards||[]).map(od),!0).filter(Boolean);return _.forEach(function(b){return b.classList.add("allow-interactivity-".concat(s))}),function(){document.body.classList.remove("block-interactivity-".concat(s)),_.forEach(function(b){return b.classList.remove("allow-interactivity-".concat(s))})}}},[n.inert,n.lockRef.current,n.shards]);var c=m.useCallback(function(_,b){if("touches"in _&&_.touches.length===2||_.type==="wheel"&&_.ctrlKey)return!o.current.allowPinchZoom;var R=Ci(_),P=t.current,k="deltaX"in _?_.deltaX:P[0]-R[0],O="deltaY"in _?_.deltaY:P[1]-R[1],M,V=_.target,I=Math.abs(k)>Math.abs(O)?"h":"v";if("touches"in _&&I==="h"&&V.type==="range")return!1;var E=sd(I,V);if(!E)return!0;if(E?M=I:(M=I==="v"?"h":"v",E=sd(I,V)),!E)return!1;if(!r.current&&"changedTouches"in _&&(k||O)&&(r.current=M),!M)return!0;var T=r.current||M;return Vb(T,b,_,T==="h"?k:O)},[]),l=m.useCallback(function(_){var b=_;if(!(!dr.length||dr[dr.length-1]!==i)){var R="deltaY"in b?id(b):Ci(b),P=e.current.filter(function(M){return M.name===b.type&&(M.target===b.target||b.target===M.shadowParent)&&jb(M.delta,R)})[0];if(P&&P.should){b.cancelable&&b.preventDefault();return}if(!P){var k=(o.current.shards||[]).map(od).filter(Boolean).filter(function(M){return M.contains(b.target)}),O=k.length>0?c(b,k[0]):!o.current.noIsolation;O&&b.cancelable&&b.preventDefault()}}},[]),h=m.useCallback(function(_,b,R,P){var k={name:_,delta:b,target:R,should:P,shadowParent:Bb(R)};e.current.push(k),setTimeout(function(){e.current=e.current.filter(function(O){return O!==k})},1)},[]),f=m.useCallback(function(_){t.current=Ci(_),r.current=void 0},[]),p=m.useCallback(function(_){h(_.type,id(_),_.target,c(_,n.lockRef.current))},[]),v=m.useCallback(function(_){h(_.type,Ci(_),_.target,c(_,n.lockRef.current))},[]);m.useEffect(function(){return dr.push(i),n.setCallbacks({onScrollCapture:p,onWheelCapture:p,onTouchMoveCapture:v}),document.addEventListener("wheel",l,hr),document.addEventListener("touchmove",l,hr),document.addEventListener("touchstart",f,hr),function(){dr=dr.filter(function(_){return _!==i}),document.removeEventListener("wheel",l,hr),document.removeEventListener("touchmove",l,hr),document.removeEventListener("touchstart",f,hr)}},[]);var y=n.removeScrollBar,x=n.inert;return m.createElement(m.Fragment,null,x?m.createElement(i,{styles:Fb(s)}):null,y?m.createElement(Pb,{gapMode:n.gapMode}):null)}function Bb(n){for(var e=null;n!==null;)n instanceof ShadowRoot&&(e=n.host,n=n.host),n=n.parentNode;return e}const Hb=vb(gm,$b);var qs=m.forwardRef(function(n,e){return m.createElement(zo,St({},n,{ref:e,sideCar:Hb}))});qs.classNames=zo.classNames;var Ic=["Enter"," "],zb=["ArrowDown","PageUp","Home"],Em=["ArrowUp","PageDown","End"],qb=[...zb,...Em],Wb={ltr:[...Ic,"ArrowRight"],rtl:[...Ic,"ArrowLeft"]},Gb={ltr:["ArrowLeft"],rtl:["ArrowRight"]},Ws="Menu",[Rs,Kb,Yb]=al(Ws),[tr,Tm]=xt(Ws,[Yb,An,lm]),qo=An(),bm=lm(),[Qb,nr]=tr(Ws),[Xb,Gs]=tr(Ws),xm=n=>{const{__scopeMenu:e,open:t=!1,children:r,dir:s,onOpenChange:i,modal:o=!0}=n,c=qo(e),[l,h]=m.useState(null),f=m.useRef(!1),p=Ze(i),v=jo(s);return m.useEffect(()=>{const y=()=>{f.current=!0,document.addEventListener("pointerdown",x,{capture:!0,once:!0}),document.addEventListener("pointermove",x,{capture:!0,once:!0})},x=()=>f.current=!1;return document.addEventListener("keydown",y,{capture:!0}),()=>{document.removeEventListener("keydown",y,{capture:!0}),document.removeEventListener("pointerdown",x,{capture:!0}),document.removeEventListener("pointermove",x,{capture:!0})}},[]),u.jsx(ko,{...c,children:u.jsx(Qb,{scope:e,open:t,onOpenChange:p,content:l,onContentChange:h,children:u.jsx(Xb,{scope:e,onClose:m.useCallback(()=>p(!1),[p]),isUsingKeyboardRef:f,dir:v,modal:o,children:r})})})};xm.displayName=Ws;var Jb="MenuAnchor",Al=m.forwardRef((n,e)=>{const{__scopeMenu:t,...r}=n,s=qo(t);return u.jsx($s,{...s,...r,ref:e})});Al.displayName=Jb;var Rl="MenuPortal",[Zb,Im]=tr(Rl,{forceMount:void 0}),Cm=n=>{const{__scopeMenu:e,forceMount:t,children:r,container:s}=n,i=nr(Rl,e);return u.jsx(Zb,{scope:e,forceMount:t,children:u.jsx(et,{present:t||i.open,children:u.jsx(Co,{asChild:!0,container:s,children:r})})})};Cm.displayName=Rl;var lt="MenuContent",[ex,Pl]=tr(lt),Sm=m.forwardRef((n,e)=>{const t=Im(lt,n.__scopeMenu),{forceMount:r=t.forceMount,...s}=n,i=nr(lt,n.__scopeMenu),o=Gs(lt,n.__scopeMenu);return u.jsx(Rs.Provider,{scope:n.__scopeMenu,children:u.jsx(et,{present:r||i.open,children:u.jsx(Rs.Slot,{scope:n.__scopeMenu,children:o.modal?u.jsx(tx,{...s,ref:e}):u.jsx(nx,{...s,ref:e})})})})}),tx=m.forwardRef((n,e)=>{const t=nr(lt,n.__scopeMenu),r=m.useRef(null),s=ge(e,r);return m.useEffect(()=>{const i=r.current;if(i)return Ho(i)},[]),u.jsx(Nl,{...n,ref:s,trapFocus:t.open,disableOutsidePointerEvents:t.open,disableOutsideScroll:!0,onFocusOutside:z(n.onFocusOutside,i=>i.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>t.onOpenChange(!1)})}),nx=m.forwardRef((n,e)=>{const t=nr(lt,n.__scopeMenu);return u.jsx(Nl,{...n,ref:e,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>t.onOpenChange(!1)})}),rx=So("MenuContent.ScrollLock"),Nl=m.forwardRef((n,e)=>{const{__scopeMenu:t,loop:r=!1,trapFocus:s,onOpenAutoFocus:i,onCloseAutoFocus:o,disableOutsidePointerEvents:c,onEntryFocus:l,onEscapeKeyDown:h,onPointerDownOutside:f,onFocusOutside:p,onInteractOutside:v,onDismiss:y,disableOutsideScroll:x,..._}=n,b=nr(lt,t),R=Gs(lt,t),P=qo(t),k=bm(t),O=Kb(t),[M,V]=m.useState(null),I=m.useRef(null),E=ge(e,I,b.onContentChange),T=m.useRef(0),S=m.useRef(""),A=m.useRef(0),N=m.useRef(null),C=m.useRef("right"),te=m.useRef(0),ce=x?qs:m.Fragment,Z=x?{as:rx,allowPinchZoom:!0}:void 0,ue=H=>{var F,Y;const le=S.current+H,ye=O().filter(X=>!X.disabled),xe=document.activeElement,we=(F=ye.find(X=>X.ref.current===xe))==null?void 0:F.textValue,Ve=ye.map(X=>X.textValue),Me=mx(Ve,le,we),B=(Y=ye.find(X=>X.textValue===Me))==null?void 0:Y.ref.current;(function X(ee){S.current=ee,window.clearTimeout(T.current),ee!==""&&(T.current=window.setTimeout(()=>X(""),1e3))})(le),B&&setTimeout(()=>B.focus())};m.useEffect(()=>()=>window.clearTimeout(T.current),[]),Bo();const K=m.useCallback(H=>{var ye,xe;return C.current===((ye=N.current)==null?void 0:ye.side)&&vx(H,(xe=N.current)==null?void 0:xe.area)},[]);return u.jsx(ex,{scope:t,searchRef:S,onItemEnter:m.useCallback(H=>{K(H)&&H.preventDefault()},[K]),onItemLeave:m.useCallback(H=>{var le;K(H)||((le=I.current)==null||le.focus(),V(null))},[K]),onTriggerLeave:m.useCallback(H=>{K(H)&&H.preventDefault()},[K]),pointerGraceTimerRef:A,onPointerGraceIntentChange:m.useCallback(H=>{N.current=H},[]),children:u.jsx(ce,{...Z,children:u.jsx(Bs,{asChild:!0,trapped:s,onMountAutoFocus:z(i,H=>{var le;H.preventDefault(),(le=I.current)==null||le.focus({preventScroll:!0})}),onUnmountAutoFocus:o,children:u.jsx(js,{asChild:!0,disableOutsidePointerEvents:c,onEscapeKeyDown:h,onPointerDownOutside:f,onFocusOutside:p,onInteractOutside:v,onDismiss:y,children:u.jsx(rb,{asChild:!0,...k,dir:R.dir,orientation:"vertical",loop:r,currentTabStopId:M,onCurrentTabStopIdChange:V,onEntryFocus:z(l,H=>{R.isUsingKeyboardRef.current||H.preventDefault()}),preventScrollOnEntryFocus:!0,children:u.jsx(Do,{role:"menu","aria-orientation":"vertical","data-state":Hm(b.open),"data-radix-menu-content":"",dir:R.dir,...P,..._,ref:E,style:{outline:"none",..._.style},onKeyDown:z(_.onKeyDown,H=>{const ye=H.target.closest("[data-radix-menu-content]")===H.currentTarget,xe=H.ctrlKey||H.altKey||H.metaKey,we=H.key.length===1;ye&&(H.key==="Tab"&&H.preventDefault(),!xe&&we&&ue(H.key));const Ve=I.current;if(H.target!==Ve||!qb.includes(H.key))return;H.preventDefault();const B=O().filter(F=>!F.disabled).map(F=>F.ref.current);Em.includes(H.key)&&B.reverse(),fx(B)}),onBlur:z(n.onBlur,H=>{H.currentTarget.contains(H.target)||(window.clearTimeout(T.current),S.current="")}),onPointerMove:z(n.onPointerMove,Ps(H=>{const le=H.target,ye=te.current!==H.clientX;if(H.currentTarget.contains(le)&&ye){const xe=H.clientX>te.current?"right":"left";C.current=xe,te.current=H.clientX}}))})})})})})})});Sm.displayName=lt;var sx="MenuGroup",kl=m.forwardRef((n,e)=>{const{__scopeMenu:t,...r}=n;return u.jsx(se.div,{role:"group",...r,ref:e})});kl.displayName=sx;var ix="MenuLabel",Am=m.forwardRef((n,e)=>{const{__scopeMenu:t,...r}=n;return u.jsx(se.div,{...r,ref:e})});Am.displayName=ix;var to="MenuItem",ad="menu.itemSelect",Wo=m.forwardRef((n,e)=>{const{disabled:t=!1,onSelect:r,...s}=n,i=m.useRef(null),o=Gs(to,n.__scopeMenu),c=Pl(to,n.__scopeMenu),l=ge(e,i),h=m.useRef(!1),f=()=>{const p=i.current;if(!t&&p){const v=new CustomEvent(ad,{bubbles:!0,cancelable:!0});p.addEventListener(ad,y=>r==null?void 0:r(y),{once:!0}),Vw(p,v),v.defaultPrevented?h.current=!1:o.onClose()}};return u.jsx(Rm,{...s,ref:l,disabled:t,onClick:z(n.onClick,f),onPointerDown:p=>{var v;(v=n.onPointerDown)==null||v.call(n,p),h.current=!0},onPointerUp:z(n.onPointerUp,p=>{var v;h.current||(v=p.currentTarget)==null||v.click()}),onKeyDown:z(n.onKeyDown,p=>{const v=c.searchRef.current!=="";t||v&&p.key===" "||Ic.includes(p.key)&&(p.currentTarget.click(),p.preventDefault())})})});Wo.displayName=to;var Rm=m.forwardRef((n,e)=>{const{__scopeMenu:t,disabled:r=!1,textValue:s,...i}=n,o=Pl(to,t),c=bm(t),l=m.useRef(null),h=ge(e,l),[f,p]=m.useState(!1),[v,y]=m.useState("");return m.useEffect(()=>{const x=l.current;x&&y((x.textContent??"").trim())},[i.children]),u.jsx(Rs.ItemSlot,{scope:t,disabled:r,textValue:s??v,children:u.jsx(sb,{asChild:!0,...c,focusable:!r,children:u.jsx(se.div,{role:"menuitem","data-highlighted":f?"":void 0,"aria-disabled":r||void 0,"data-disabled":r?"":void 0,...i,ref:h,onPointerMove:z(n.onPointerMove,Ps(x=>{r?o.onItemLeave(x):(o.onItemEnter(x),x.defaultPrevented||x.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:z(n.onPointerLeave,Ps(x=>o.onItemLeave(x))),onFocus:z(n.onFocus,()=>p(!0)),onBlur:z(n.onBlur,()=>p(!1))})})})}),ox="MenuCheckboxItem",Pm=m.forwardRef((n,e)=>{const{checked:t=!1,onCheckedChange:r,...s}=n;return u.jsx(Om,{scope:n.__scopeMenu,checked:t,children:u.jsx(Wo,{role:"menuitemcheckbox","aria-checked":no(t)?"mixed":t,...s,ref:e,"data-state":Ml(t),onSelect:z(s.onSelect,()=>r==null?void 0:r(no(t)?!0:!t),{checkForDefaultPrevented:!1})})})});Pm.displayName=ox;var Nm="MenuRadioGroup",[ax,cx]=tr(Nm,{value:void 0,onValueChange:()=>{}}),km=m.forwardRef((n,e)=>{const{value:t,onValueChange:r,...s}=n,i=Ze(r);return u.jsx(ax,{scope:n.__scopeMenu,value:t,onValueChange:i,children:u.jsx(kl,{...s,ref:e})})});km.displayName=Nm;var Dm="MenuRadioItem",Mm=m.forwardRef((n,e)=>{const{value:t,...r}=n,s=cx(Dm,n.__scopeMenu),i=t===s.value;return u.jsx(Om,{scope:n.__scopeMenu,checked:i,children:u.jsx(Wo,{role:"menuitemradio","aria-checked":i,...r,ref:e,"data-state":Ml(i),onSelect:z(r.onSelect,()=>{var o;return(o=s.onValueChange)==null?void 0:o.call(s,t)},{checkForDefaultPrevented:!1})})})});Mm.displayName=Dm;var Dl="MenuItemIndicator",[Om,lx]=tr(Dl,{checked:!1}),Lm=m.forwardRef((n,e)=>{const{__scopeMenu:t,forceMount:r,...s}=n,i=lx(Dl,t);return u.jsx(et,{present:r||no(i.checked)||i.checked===!0,children:u.jsx(se.span,{...s,ref:e,"data-state":Ml(i.checked)})})});Lm.displayName=Dl;var ux="MenuSeparator",Vm=m.forwardRef((n,e)=>{const{__scopeMenu:t,...r}=n;return u.jsx(se.div,{role:"separator","aria-orientation":"horizontal",...r,ref:e})});Vm.displayName=ux;var hx="MenuArrow",jm=m.forwardRef((n,e)=>{const{__scopeMenu:t,...r}=n,s=qo(t);return u.jsx(Mo,{...s,...r,ref:e})});jm.displayName=hx;var dx="MenuSub",[eM,Fm]=tr(dx),ps="MenuSubTrigger",Um=m.forwardRef((n,e)=>{const t=nr(ps,n.__scopeMenu),r=Gs(ps,n.__scopeMenu),s=Fm(ps,n.__scopeMenu),i=Pl(ps,n.__scopeMenu),o=m.useRef(null),{pointerGraceTimerRef:c,onPointerGraceIntentChange:l}=i,h={__scopeMenu:n.__scopeMenu},f=m.useCallback(()=>{o.current&&window.clearTimeout(o.current),o.current=null},[]);return m.useEffect(()=>f,[f]),m.useEffect(()=>{const p=c.current;return()=>{window.clearTimeout(p),l(null)}},[c,l]),u.jsx(Al,{asChild:!0,...h,children:u.jsx(Rm,{id:s.triggerId,"aria-haspopup":"menu","aria-expanded":t.open,"aria-controls":s.contentId,"data-state":Hm(t.open),...n,ref:Qf(e,s.onTriggerChange),onClick:p=>{var v;(v=n.onClick)==null||v.call(n,p),!(n.disabled||p.defaultPrevented)&&(p.currentTarget.focus(),t.open||t.onOpenChange(!0))},onPointerMove:z(n.onPointerMove,Ps(p=>{i.onItemEnter(p),!p.defaultPrevented&&!n.disabled&&!t.open&&!o.current&&(i.onPointerGraceIntentChange(null),o.current=window.setTimeout(()=>{t.onOpenChange(!0),f()},100))})),onPointerLeave:z(n.onPointerLeave,Ps(p=>{var y,x;f();const v=(y=t.content)==null?void 0:y.getBoundingClientRect();if(v){const _=(x=t.content)==null?void 0:x.dataset.side,b=_==="right",R=b?-5:5,P=v[b?"left":"right"],k=v[b?"right":"left"];i.onPointerGraceIntentChange({area:[{x:p.clientX+R,y:p.clientY},{x:P,y:v.top},{x:k,y:v.top},{x:k,y:v.bottom},{x:P,y:v.bottom}],side:_}),window.clearTimeout(c.current),c.current=window.setTimeout(()=>i.onPointerGraceIntentChange(null),300)}else{if(i.onTriggerLeave(p),p.defaultPrevented)return;i.onPointerGraceIntentChange(null)}})),onKeyDown:z(n.onKeyDown,p=>{var y;const v=i.searchRef.current!=="";n.disabled||v&&p.key===" "||Wb[r.dir].includes(p.key)&&(t.onOpenChange(!0),(y=t.content)==null||y.focus(),p.preventDefault())})})})});Um.displayName=ps;var $m="MenuSubContent",Bm=m.forwardRef((n,e)=>{const t=Im(lt,n.__scopeMenu),{forceMount:r=t.forceMount,...s}=n,i=nr(lt,n.__scopeMenu),o=Gs(lt,n.__scopeMenu),c=Fm($m,n.__scopeMenu),l=m.useRef(null),h=ge(e,l);return u.jsx(Rs.Provider,{scope:n.__scopeMenu,children:u.jsx(et,{present:r||i.open,children:u.jsx(Rs.Slot,{scope:n.__scopeMenu,children:u.jsx(Nl,{id:c.contentId,"aria-labelledby":c.triggerId,...s,ref:h,align:"start",side:o.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:f=>{var p;o.isUsingKeyboardRef.current&&((p=l.current)==null||p.focus()),f.preventDefault()},onCloseAutoFocus:f=>f.preventDefault(),onFocusOutside:z(n.onFocusOutside,f=>{f.target!==c.trigger&&i.onOpenChange(!1)}),onEscapeKeyDown:z(n.onEscapeKeyDown,f=>{o.onClose(),f.preventDefault()}),onKeyDown:z(n.onKeyDown,f=>{var y;const p=f.currentTarget.contains(f.target),v=Gb[o.dir].includes(f.key);p&&v&&(i.onOpenChange(!1),(y=c.trigger)==null||y.focus(),f.preventDefault())})})})})})});Bm.displayName=$m;function Hm(n){return n?"open":"closed"}function no(n){return n==="indeterminate"}function Ml(n){return no(n)?"indeterminate":n?"checked":"unchecked"}function fx(n){const e=document.activeElement;for(const t of n)if(t===e||(t.focus(),document.activeElement!==e))return}function px(n,e){return n.map((t,r)=>n[(e+r)%n.length])}function mx(n,e,t){const s=e.length>1&&Array.from(e).every(h=>h===e[0])?e[0]:e,i=t?n.indexOf(t):-1;let o=px(n,Math.max(i,0));s.length===1&&(o=o.filter(h=>h!==t));const l=o.find(h=>h.toLowerCase().startsWith(s.toLowerCase()));return l!==t?l:void 0}function gx(n,e){const{x:t,y:r}=n;let s=!1;for(let i=0,o=e.length-1;i<e.length;o=i++){const c=e[i],l=e[o],h=c.x,f=c.y,p=l.x,v=l.y;f>r!=v>r&&t<(p-h)*(r-f)/(v-f)+h&&(s=!s)}return s}function vx(n,e){if(!e)return!1;const t={x:n.clientX,y:n.clientY};return gx(t,e)}function Ps(n){return e=>e.pointerType==="mouse"?n(e):void 0}var yx=xm,_x=Al,wx=Cm,Ex=Sm,Tx=kl,bx=Am,xx=Wo,Ix=Pm,Cx=km,Sx=Mm,Ax=Lm,Rx=Vm,Px=jm,Nx=Um,kx=Bm,Go="DropdownMenu",[Dx,tM]=xt(Go,[Tm]),tt=Tm(),[Mx,zm]=Dx(Go),qm=n=>{const{__scopeDropdownMenu:e,children:t,dir:r,open:s,defaultOpen:i,onOpenChange:o,modal:c=!0}=n,l=tt(e),h=m.useRef(null),[f,p]=yn({prop:s,defaultProp:i??!1,onChange:o,caller:Go});return u.jsx(Mx,{scope:e,triggerId:ct(),triggerRef:h,contentId:ct(),open:f,onOpenChange:p,onOpenToggle:m.useCallback(()=>p(v=>!v),[p]),modal:c,children:u.jsx(yx,{...l,open:f,onOpenChange:p,dir:r,modal:c,children:t})})};qm.displayName=Go;var Wm="DropdownMenuTrigger",Gm=m.forwardRef((n,e)=>{const{__scopeDropdownMenu:t,disabled:r=!1,...s}=n,i=zm(Wm,t),o=tt(t);return u.jsx(_x,{asChild:!0,...o,children:u.jsx(se.button,{type:"button",id:i.triggerId,"aria-haspopup":"menu","aria-expanded":i.open,"aria-controls":i.open?i.contentId:void 0,"data-state":i.open?"open":"closed","data-disabled":r?"":void 0,disabled:r,...s,ref:Qf(e,i.triggerRef),onPointerDown:z(n.onPointerDown,c=>{!r&&c.button===0&&c.ctrlKey===!1&&(i.onOpenToggle(),i.open||c.preventDefault())}),onKeyDown:z(n.onKeyDown,c=>{r||(["Enter"," "].includes(c.key)&&i.onOpenToggle(),c.key==="ArrowDown"&&i.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(c.key)&&c.preventDefault())})})})});Gm.displayName=Wm;var Ox="DropdownMenuPortal",Km=n=>{const{__scopeDropdownMenu:e,...t}=n,r=tt(e);return u.jsx(wx,{...r,...t})};Km.displayName=Ox;var Ym="DropdownMenuContent",Qm=m.forwardRef((n,e)=>{const{__scopeDropdownMenu:t,...r}=n,s=zm(Ym,t),i=tt(t),o=m.useRef(!1);return u.jsx(Ex,{id:s.contentId,"aria-labelledby":s.triggerId,...i,...r,ref:e,onCloseAutoFocus:z(n.onCloseAutoFocus,c=>{var l;o.current||(l=s.triggerRef.current)==null||l.focus(),o.current=!1,c.preventDefault()}),onInteractOutside:z(n.onInteractOutside,c=>{const l=c.detail.originalEvent,h=l.button===0&&l.ctrlKey===!0,f=l.button===2||h;(!s.modal||f)&&(o.current=!0)}),style:{...n.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});Qm.displayName=Ym;var Lx="DropdownMenuGroup",Vx=m.forwardRef((n,e)=>{const{__scopeDropdownMenu:t,...r}=n,s=tt(t);return u.jsx(Tx,{...s,...r,ref:e})});Vx.displayName=Lx;var jx="DropdownMenuLabel",Xm=m.forwardRef((n,e)=>{const{__scopeDropdownMenu:t,...r}=n,s=tt(t);return u.jsx(bx,{...s,...r,ref:e})});Xm.displayName=jx;var Fx="DropdownMenuItem",Jm=m.forwardRef((n,e)=>{const{__scopeDropdownMenu:t,...r}=n,s=tt(t);return u.jsx(xx,{...s,...r,ref:e})});Jm.displayName=Fx;var Ux="DropdownMenuCheckboxItem",Zm=m.forwardRef((n,e)=>{const{__scopeDropdownMenu:t,...r}=n,s=tt(t);return u.jsx(Ix,{...s,...r,ref:e})});Zm.displayName=Ux;var $x="DropdownMenuRadioGroup",Bx=m.forwardRef((n,e)=>{const{__scopeDropdownMenu:t,...r}=n,s=tt(t);return u.jsx(Cx,{...s,...r,ref:e})});Bx.displayName=$x;var Hx="DropdownMenuRadioItem",eg=m.forwardRef((n,e)=>{const{__scopeDropdownMenu:t,...r}=n,s=tt(t);return u.jsx(Sx,{...s,...r,ref:e})});eg.displayName=Hx;var zx="DropdownMenuItemIndicator",tg=m.forwardRef((n,e)=>{const{__scopeDropdownMenu:t,...r}=n,s=tt(t);return u.jsx(Ax,{...s,...r,ref:e})});tg.displayName=zx;var qx="DropdownMenuSeparator",ng=m.forwardRef((n,e)=>{const{__scopeDropdownMenu:t,...r}=n,s=tt(t);return u.jsx(Rx,{...s,...r,ref:e})});ng.displayName=qx;var Wx="DropdownMenuArrow",Gx=m.forwardRef((n,e)=>{const{__scopeDropdownMenu:t,...r}=n,s=tt(t);return u.jsx(Px,{...s,...r,ref:e})});Gx.displayName=Wx;var Kx="DropdownMenuSubTrigger",rg=m.forwardRef((n,e)=>{const{__scopeDropdownMenu:t,...r}=n,s=tt(t);return u.jsx(Nx,{...s,...r,ref:e})});rg.displayName=Kx;var Yx="DropdownMenuSubContent",sg=m.forwardRef((n,e)=>{const{__scopeDropdownMenu:t,...r}=n,s=tt(t);return u.jsx(kx,{...s,...r,ref:e,style:{...n.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});sg.displayName=Yx;var Qx=qm,Xx=Gm,Jx=Km,ig=Qm,og=Xm,ag=Jm,cg=Zm,lg=eg,ug=tg,hg=ng,dg=rg,fg=sg;const pg=Qx,mg=Xx,Zx=m.forwardRef(({className:n,inset:e,children:t,...r},s)=>u.jsxs(dg,{ref:s,className:oe("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",e&&"pl-8",n),...r,children:[t,u.jsx(jw,{className:"ml-auto h-4 w-4"})]}));Zx.displayName=dg.displayName;const eI=m.forwardRef(({className:n,...e},t)=>u.jsx(fg,{ref:t,className:oe("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...e}));eI.displayName=fg.displayName;const Ol=m.forwardRef(({className:n,sideOffset:e=4,...t},r)=>u.jsx(Jx,{children:u.jsx(ig,{ref:r,sideOffset:e,className:oe("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...t})}));Ol.displayName=ig.displayName;const zt=m.forwardRef(({className:n,inset:e,...t},r)=>u.jsx(ag,{ref:r,className:oe("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e&&"pl-8",n),...t}));zt.displayName=ag.displayName;const tI=m.forwardRef(({className:n,children:e,checked:t,...r},s)=>u.jsxs(cg,{ref:s,className:oe("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n),checked:t,...r,children:[u.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:u.jsx(ug,{children:u.jsx(Xf,{className:"h-4 w-4"})})}),e]}));tI.displayName=cg.displayName;const nI=m.forwardRef(({className:n,children:e,...t},r)=>u.jsxs(lg,{ref:r,className:oe("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n),...t,children:[u.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:u.jsx(ug,{children:u.jsx(Fw,{className:"h-4 w-4 fill-current"})})}),e]}));nI.displayName=lg.displayName;const gg=m.forwardRef(({className:n,inset:e,...t},r)=>u.jsx(og,{ref:r,className:oe("px-2 py-1.5 text-sm font-semibold",e&&"pl-8",n),...t}));gg.displayName=og.displayName;const Cc=m.forwardRef(({className:n,...e},t)=>u.jsx(hg,{ref:t,className:oe("-mx-1 my-1 h-px bg-muted",n),...e}));Cc.displayName=hg.displayName;var Ko="Popover",[vg,nM]=xt(Ko,[An]),Ks=An(),[rI,Rn]=vg(Ko),yg=n=>{const{__scopePopover:e,children:t,open:r,defaultOpen:s,onOpenChange:i,modal:o=!1}=n,c=Ks(e),l=m.useRef(null),[h,f]=m.useState(!1),[p,v]=yn({prop:r,defaultProp:s??!1,onChange:i,caller:Ko});return u.jsx(ko,{...c,children:u.jsx(rI,{scope:e,contentId:ct(),triggerRef:l,open:p,onOpenChange:v,onOpenToggle:m.useCallback(()=>v(y=>!y),[v]),hasCustomAnchor:h,onCustomAnchorAdd:m.useCallback(()=>f(!0),[]),onCustomAnchorRemove:m.useCallback(()=>f(!1),[]),modal:o,children:t})})};yg.displayName=Ko;var _g="PopoverAnchor",sI=m.forwardRef((n,e)=>{const{__scopePopover:t,...r}=n,s=Rn(_g,t),i=Ks(t),{onCustomAnchorAdd:o,onCustomAnchorRemove:c}=s;return m.useEffect(()=>(o(),()=>c()),[o,c]),u.jsx($s,{...i,...r,ref:e})});sI.displayName=_g;var wg="PopoverTrigger",Eg=m.forwardRef((n,e)=>{const{__scopePopover:t,...r}=n,s=Rn(wg,t),i=Ks(t),o=ge(e,s.triggerRef),c=u.jsx(se.button,{type:"button","aria-haspopup":"dialog","aria-expanded":s.open,"aria-controls":s.contentId,"data-state":Cg(s.open),...r,ref:o,onClick:z(n.onClick,s.onOpenToggle)});return s.hasCustomAnchor?c:u.jsx($s,{asChild:!0,...i,children:c})});Eg.displayName=wg;var Ll="PopoverPortal",[iI,oI]=vg(Ll,{forceMount:void 0}),Tg=n=>{const{__scopePopover:e,forceMount:t,children:r,container:s}=n,i=Rn(Ll,e);return u.jsx(iI,{scope:e,forceMount:t,children:u.jsx(et,{present:t||i.open,children:u.jsx(Co,{asChild:!0,container:s,children:r})})})};Tg.displayName=Ll;var kr="PopoverContent",bg=m.forwardRef((n,e)=>{const t=oI(kr,n.__scopePopover),{forceMount:r=t.forceMount,...s}=n,i=Rn(kr,n.__scopePopover);return u.jsx(et,{present:r||i.open,children:i.modal?u.jsx(cI,{...s,ref:e}):u.jsx(lI,{...s,ref:e})})});bg.displayName=kr;var aI=So("PopoverContent.RemoveScroll"),cI=m.forwardRef((n,e)=>{const t=Rn(kr,n.__scopePopover),r=m.useRef(null),s=ge(e,r),i=m.useRef(!1);return m.useEffect(()=>{const o=r.current;if(o)return Ho(o)},[]),u.jsx(qs,{as:aI,allowPinchZoom:!0,children:u.jsx(xg,{...n,ref:s,trapFocus:t.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:z(n.onCloseAutoFocus,o=>{var c;o.preventDefault(),i.current||(c=t.triggerRef.current)==null||c.focus()}),onPointerDownOutside:z(n.onPointerDownOutside,o=>{const c=o.detail.originalEvent,l=c.button===0&&c.ctrlKey===!0,h=c.button===2||l;i.current=h},{checkForDefaultPrevented:!1}),onFocusOutside:z(n.onFocusOutside,o=>o.preventDefault(),{checkForDefaultPrevented:!1})})})}),lI=m.forwardRef((n,e)=>{const t=Rn(kr,n.__scopePopover),r=m.useRef(!1),s=m.useRef(!1);return u.jsx(xg,{...n,ref:e,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:i=>{var o,c;(o=n.onCloseAutoFocus)==null||o.call(n,i),i.defaultPrevented||(r.current||(c=t.triggerRef.current)==null||c.focus(),i.preventDefault()),r.current=!1,s.current=!1},onInteractOutside:i=>{var l,h;(l=n.onInteractOutside)==null||l.call(n,i),i.defaultPrevented||(r.current=!0,i.detail.originalEvent.type==="pointerdown"&&(s.current=!0));const o=i.target;((h=t.triggerRef.current)==null?void 0:h.contains(o))&&i.preventDefault(),i.detail.originalEvent.type==="focusin"&&s.current&&i.preventDefault()}})}),xg=m.forwardRef((n,e)=>{const{__scopePopover:t,trapFocus:r,onOpenAutoFocus:s,onCloseAutoFocus:i,disableOutsidePointerEvents:o,onEscapeKeyDown:c,onPointerDownOutside:l,onFocusOutside:h,onInteractOutside:f,...p}=n,v=Rn(kr,t),y=Ks(t);return Bo(),u.jsx(Bs,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:s,onUnmountAutoFocus:i,children:u.jsx(js,{asChild:!0,disableOutsidePointerEvents:o,onInteractOutside:f,onEscapeKeyDown:c,onPointerDownOutside:l,onFocusOutside:h,onDismiss:()=>v.onOpenChange(!1),children:u.jsx(Do,{"data-state":Cg(v.open),role:"dialog",id:v.contentId,...y,...p,ref:e,style:{...p.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),Ig="PopoverClose",uI=m.forwardRef((n,e)=>{const{__scopePopover:t,...r}=n,s=Rn(Ig,t);return u.jsx(se.button,{type:"button",...r,ref:e,onClick:z(n.onClick,()=>s.onOpenChange(!1))})});uI.displayName=Ig;var hI="PopoverArrow",dI=m.forwardRef((n,e)=>{const{__scopePopover:t,...r}=n,s=Ks(t);return u.jsx(Mo,{...s,...r,ref:e})});dI.displayName=hI;function Cg(n){return n?"open":"closed"}var fI=yg,pI=Eg,mI=Tg,Sg=bg;const gI=fI,vI=pI,Ag=m.forwardRef(({className:n,align:e="center",sideOffset:t=4,...r},s)=>u.jsx(mI,{children:u.jsx(Sg,{ref:s,align:e,sideOffset:t,className:oe("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...r})}));Ag.displayName=Sg.displayName;const yI=({title:n="Dashboard",onMenuToggle:e=()=>{},userRole:t="Dispatcher",userName:r="Jane Doe",userAvatar:s="",onToggleMessaging:i=()=>{},messagingPanelOpen:o=!1})=>{const[c,l]=m.useState("");C0(c,300);const{logout:h}=Fs(),f=m.useCallback(b=>{l(b.target.value)},[]),{theme:p,setTheme:v}=Uw(),y=b=>b.split(" ").map(R=>R[0]).join("").toUpperCase(),x=()=>u.jsx(mt,{children:u.jsxs(gt,{children:[u.jsx(vt,{asChild:!0,children:u.jsx(Ee,{variant:"ghost",size:"icon",onClick:()=>v(p==="dark"?"light":"dark"),"aria-label":"Toggle theme",children:p==="dark"?u.jsx(bE,{className:"h-5 w-5"}):u.jsx(pE,{className:"h-5 w-5"})})}),u.jsx(at,{side:"bottom",children:p==="dark"?"Light mode":"Dark mode"})]})}),_=()=>{const b=[{id:1,title:"New dispatch assigned",message:"You have been assigned to a new dispatch #1234",time:"5 minutes ago",read:!1},{id:2,title:"Task status updated",message:"Officer Smith has completed task #5678",time:"1 hour ago",read:!0},{id:3,title:"System maintenance",message:"Scheduled maintenance in 2 hours",time:"2 hours ago",read:!0}];return u.jsxs(gI,{children:[u.jsx(vI,{asChild:!0,children:u.jsxs(Ee,{variant:"ghost",size:"icon",className:"relative","aria-label":"Notifications",children:[u.jsx(tp,{className:"h-5 w-5"}),u.jsx("span",{className:"absolute right-1 top-1 h-2 w-2 rounded-full bg-teal-500"})]})}),u.jsxs(Ag,{className:"w-80 p-0",align:"end",children:[u.jsx("div",{className:"border-b p-3",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("h4",{className:"font-semibold",children:"Notifications"}),u.jsx(Ee,{variant:"ghost",size:"sm",className:"text-xs",children:"Mark all as read"})]})}),u.jsx("div",{className:"max-h-80 overflow-auto",children:b.map(R=>u.jsxs("div",{className:`border-b p-4 ${R.read?"":"bg-muted/50"}`,children:[u.jsxs("div",{className:"mb-1 flex items-center justify-between",children:[u.jsx("h5",{className:"font-medium",children:R.title}),u.jsx("span",{className:"text-xs text-muted-foreground",children:R.time})]}),u.jsx("p",{className:"text-sm text-muted-foreground",children:R.message})]},R.id))}),u.jsx("div",{className:"p-3 text-center",children:u.jsx(Ee,{variant:"ghost",size:"sm",className:"w-full text-sm",children:"View all notifications"})})]})]})};return u.jsxs("header",{className:"sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b bg-background/95 backdrop-blur-sm px-4 lg:px-6 shadow-sm",children:[u.jsx("div",{className:"flex items-center gap-4",children:u.jsxs(Ee,{variant:"ghost",size:"icon",onClick:e,className:"md:hidden hover:bg-muted/80 transition-colors",children:[u.jsx(fE,{className:"h-5 w-5"}),u.jsx("span",{className:"sr-only",children:"Toggle menu"})]})}),u.jsxs("div",{className:"flex flex-1 items-center justify-end gap-4 md:justify-between",children:[u.jsx("div",{className:"hidden md:flex md:w-full md:max-w-sm",children:u.jsxs("div",{className:"relative w-full",children:[u.jsx(gc,{className:"absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"}),u.jsx(Mi,{type:"search",placeholder:"Search...",className:"w-full pl-8 transition-all focus-visible:ring-teal-500 border-muted/60",value:c,onChange:f})]})}),u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx(mt,{children:u.jsxs(gt,{children:[u.jsx(vt,{asChild:!0,children:u.jsx(Ee,{variant:"ghost",size:"icon",className:"relative","aria-label":"Search",children:u.jsx(gc,{className:"h-5 w-5 md:hidden"})})}),u.jsx(at,{side:"bottom",children:"Search"})]})}),u.jsx(_,{}),u.jsx(mt,{children:u.jsxs(gt,{children:[u.jsx(vt,{asChild:!0,children:u.jsxs(Ee,{variant:"ghost",size:"icon",className:oe("relative",o&&"bg-muted text-primary"),"aria-label":"Messages",onClick:i,children:[u.jsx(Ao,{className:"h-5 w-5"}),u.jsx(Xp,{className:"absolute -top-1 -right-1"})]})}),u.jsx(at,{side:"bottom",children:o?"Close Messages":"Open Messages"})]})}),u.jsx(x,{}),u.jsxs(pg,{children:[u.jsx(mg,{asChild:!0,children:u.jsx(Ee,{variant:"ghost",size:"icon",className:"relative h-8 w-8 rounded-full",children:u.jsx(Un,{className:"h-8 w-8",children:s?u.jsx($n,{src:s,alt:r}):u.jsx(Bn,{children:y(r)})})})}),u.jsxs(Ol,{align:"end",children:[u.jsx(gg,{children:u.jsxs("div",{className:"flex flex-col space-y-1",children:[u.jsx("p",{className:"text-sm font-medium leading-none",children:r}),u.jsx("p",{className:"text-xs leading-none text-muted-foreground",children:t})]})}),u.jsx(Cc,{}),u.jsxs(zt,{children:[u.jsx(Oi,{className:"mr-2 h-4 w-4"}),u.jsx("span",{children:"Profile"})]}),u.jsxs(zt,{children:[u.jsx(wE,{className:"mr-2 h-4 w-4"}),u.jsx("span",{children:"Settings"})]}),u.jsxs(zt,{children:[u.jsx(rp,{className:"mr-2 h-4 w-4"}),u.jsx("span",{children:"Help"})]}),u.jsx(Cc,{}),u.jsxs(zt,{className:"text-destructive",onClick:()=>{localStorage.clear(),h(),window.location.href="/"},children:[u.jsx(sp,{className:"mr-2 h-4 w-4"}),u.jsx("span",{children:"Log out"})]})]})]})]})]})]})},_I=m.memo(yI),wI=n=>u.jsx(_I,{...n}),EI=m.memo(wI),TI=()=>{};var cd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},bI=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Pg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,c=o?n[s+1]:0,l=s+2<n.length,h=l?n[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let v=(c&15)<<2|h>>6,y=h&63;l||(y=64,o||(v=64)),r.push(t[f],t[p],t[v],t[y])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Rg(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):bI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new xI;const v=i<<2|c>>4;if(r.push(v),h!==64){const y=c<<4&240|h>>2;if(r.push(y),p!==64){const x=h<<6&192|p;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class xI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const II=function(n){const e=Rg(n);return Pg.encodeByteArray(e,!0)},ro=function(n){return II(n).replace(/\./g,"")},Ng=function(n){try{return Pg.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=()=>CI().__FIREBASE_DEFAULTS__,AI=()=>{if(typeof process>"u"||typeof cd>"u")return;const n=cd.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},RI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ng(n[1]);return e&&JSON.parse(e)},Yo=()=>{try{return TI()||SI()||AI()||RI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},kg=n=>{var e,t;return(t=(e=Yo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Dg=n=>{const e=kg(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Mg=()=>{var n;return(n=Yo())===null||n===void 0?void 0:n.config},Og=n=>{var e;return(e=Yo())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ro(JSON.stringify(t)),ro(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function NI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qe())}function kI(){var n;const e=(n=Yo())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function DI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function MI(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function OI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function LI(){const n=Qe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function VI(){return!kI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function jI(){try{return typeof indexedDB=="object"}catch{return!1}}function FI(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI="FirebaseError";class Ft extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=UI,Object.setPrototypeOf(this,Ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ys.prototype.create)}}class Ys{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?$I(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Ft(s,c,r)}}function $I(n,e){return n.replace(BI,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const BI=/\{\$([^}]+)}/g;function HI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Gn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(ld(i)&&ld(o)){if(!Gn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function ld(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zI(n,e){const t=new qI(n,e);return t.subscribe.bind(t)}class qI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");WI(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=ec),s.error===void 0&&(s.error=ec),s.complete===void 0&&(s.complete=ec);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function WI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ec(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(n){return n.endsWith(".cloudworkstations.dev")}async function Vl(n){return(await fetch(n,{credentials:"include"})).ok}class En{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new PI;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(YI(e))try{this.getOrInitializeService({instanceIdentifier:jn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=jn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jn){return this.instances.has(e)}getOptions(e=jn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:KI(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=jn){return this.component?this.component.multipleInstances?e:jn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KI(n){return n===jn?void 0:n}function YI(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new GI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(de||(de={}));const XI={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},JI=de.INFO,ZI={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},eC=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=ZI[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jl{constructor(e){this.name=e,this._logLevel=JI,this._logHandler=eC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?XI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const tC=(n,e)=>e.some(t=>n instanceof t);let ud,hd;function nC(){return ud||(ud=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rC(){return hd||(hd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vg=new WeakMap,Sc=new WeakMap,jg=new WeakMap,tc=new WeakMap,Fl=new WeakMap;function sC(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(mn(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Vg.set(t,n)}).catch(()=>{}),Fl.set(e,n),e}function iC(n){if(Sc.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Sc.set(n,e)}let Ac={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Sc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||jg.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return mn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function oC(n){Ac=n(Ac)}function aC(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(nc(this),e,...t);return jg.set(r,e.sort?e.sort():[e]),mn(r)}:rC().includes(n)?function(...e){return n.apply(nc(this),e),mn(Vg.get(this))}:function(...e){return mn(n.apply(nc(this),e))}}function cC(n){return typeof n=="function"?aC(n):(n instanceof IDBTransaction&&iC(n),tC(n,nC())?new Proxy(n,Ac):n)}function mn(n){if(n instanceof IDBRequest)return sC(n);if(tc.has(n))return tc.get(n);const e=cC(n);return e!==n&&(tc.set(n,e),Fl.set(e,n)),e}const nc=n=>Fl.get(n);function lC(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),c=mn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(mn(o.result),l.oldVersion,l.newVersion,mn(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const uC=["get","getKey","getAll","getAllKeys","count"],hC=["put","add","delete","clear"],rc=new Map;function dd(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(rc.get(e))return rc.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=hC.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||uC.includes(t)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&l.done]))[0]};return rc.set(e,i),i}oC(n=>({...n,get:(e,t,r)=>dd(e,t)||n.get(e,t,r),has:(e,t)=>!!dd(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(fC(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function fC(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rc="@firebase/app",fd="0.12.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=new jl("@firebase/app"),pC="@firebase/app-compat",mC="@firebase/analytics-compat",gC="@firebase/analytics",vC="@firebase/app-check-compat",yC="@firebase/app-check",_C="@firebase/auth",wC="@firebase/auth-compat",EC="@firebase/database",TC="@firebase/data-connect",bC="@firebase/database-compat",xC="@firebase/functions",IC="@firebase/functions-compat",CC="@firebase/installations",SC="@firebase/installations-compat",AC="@firebase/messaging",RC="@firebase/messaging-compat",PC="@firebase/performance",NC="@firebase/performance-compat",kC="@firebase/remote-config",DC="@firebase/remote-config-compat",MC="@firebase/storage",OC="@firebase/storage-compat",LC="@firebase/firestore",VC="@firebase/vertexai",jC="@firebase/firestore-compat",FC="firebase",UC="11.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc="[DEFAULT]",$C={[Rc]:"fire-core",[pC]:"fire-core-compat",[gC]:"fire-analytics",[mC]:"fire-analytics-compat",[yC]:"fire-app-check",[vC]:"fire-app-check-compat",[_C]:"fire-auth",[wC]:"fire-auth-compat",[EC]:"fire-rtdb",[TC]:"fire-data-connect",[bC]:"fire-rtdb-compat",[xC]:"fire-fn",[IC]:"fire-fn-compat",[CC]:"fire-iid",[SC]:"fire-iid-compat",[AC]:"fire-fcm",[RC]:"fire-fcm-compat",[PC]:"fire-perf",[NC]:"fire-perf-compat",[kC]:"fire-rc",[DC]:"fire-rc-compat",[MC]:"fire-gcs",[OC]:"fire-gcs-compat",[LC]:"fire-fst",[jC]:"fire-fst-compat",[VC]:"fire-vertex","fire-js":"fire-js",[FC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so=new Map,BC=new Map,Nc=new Map;function pd(n,e){try{n.container.addComponent(e)}catch(t){Qt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Kn(n){const e=n.name;if(Nc.has(e))return Qt.debug(`There were multiple attempts to register component ${e}.`),!1;Nc.set(e,n);for(const t of so.values())pd(t,n);for(const t of BC.values())pd(t,n);return!0}function Qo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function yt(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gn=new Ys("app","Firebase",HC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new En("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=UC;function Fg(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Pc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw gn.create("bad-app-name",{appName:String(s)});if(t||(t=Mg()),!t)throw gn.create("no-options");const i=so.get(s);if(i){if(Gn(t,i.options)&&Gn(r,i.config))return i;throw gn.create("duplicate-app",{appName:s})}const o=new QI(s);for(const l of Nc.values())o.addComponent(l);const c=new zC(t,r,o);return so.set(s,c),c}function Ul(n=Pc){const e=so.get(n);if(!e&&n===Pc&&Mg())return Fg();if(!e)throw gn.create("no-app",{appName:n});return e}function Pt(n,e,t){var r;let s=(r=$C[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qt.warn(c.join(" "));return}Kn(new En(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qC="firebase-heartbeat-database",WC=1,Ns="firebase-heartbeat-store";let sc=null;function Ug(){return sc||(sc=lC(qC,WC,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ns)}catch(t){console.warn(t)}}}}).catch(n=>{throw gn.create("idb-open",{originalErrorMessage:n.message})})),sc}async function GC(n){try{const t=(await Ug()).transaction(Ns),r=await t.objectStore(Ns).get($g(n));return await t.done,r}catch(e){if(e instanceof Ft)Qt.warn(e.message);else{const t=gn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qt.warn(t.message)}}}async function md(n,e){try{const r=(await Ug()).transaction(Ns,"readwrite");await r.objectStore(Ns).put(e,$g(n)),await r.done}catch(t){if(t instanceof Ft)Qt.warn(t.message);else{const r=gn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Qt.warn(r.message)}}}function $g(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC=1024,YC=30;class QC{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new JC(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=gd();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>YC){const o=ZC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Qt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=gd(),{heartbeatsToSend:r,unsentEntries:s}=XC(this._heartbeatsCache.heartbeats),i=ro(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Qt.warn(t),""}}}function gd(){return new Date().toISOString().substring(0,10)}function XC(n,e=KC){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),vd(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),vd(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class JC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jI()?FI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await GC(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return md(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return md(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function vd(n){return ro(JSON.stringify({version:2,heartbeats:n})).length}function ZC(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eS(n){Kn(new En("platform-logger",e=>new dC(e),"PRIVATE")),Kn(new En("heartbeat",e=>new QC(e),"PRIVATE")),Pt(Rc,fd,n),Pt(Rc,fd,"esm2017"),Pt("fire-js","")}eS("");var tS="firebase",nS="11.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pt(tS,nS,"app");function Bg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rS=Bg,Hg=new Ys("auth","Firebase",Bg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io=new jl("@firebase/auth");function sS(n,...e){io.logLevel<=de.WARN&&io.warn(`Auth (${rr}): ${n}`,...e)}function Fi(n,...e){io.logLevel<=de.ERROR&&io.error(`Auth (${rr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(n,...e){throw $l(n,...e)}function Nt(n,...e){return $l(n,...e)}function zg(n,e,t){const r=Object.assign(Object.assign({},rS()),{[e]:t});return new Ys("auth","Firebase",r).create(e,{appName:n.name})}function zn(n){return zg(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $l(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Hg.create(n,...e)}function J(n,e,...t){if(!n)throw $l(e,...t)}function qt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Fi(e),new Error(e)}function Jt(n,e){n||qt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function iS(){return yd()==="http:"||yd()==="https:"}function yd(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iS()||MI()||"connection"in navigator)?navigator.onLine:!0}function aS(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,t){this.shortDelay=e,this.longDelay=t,Jt(t>e,"Short delay should be less than long delay!"),this.isMobile=NI()||OI()}get(){return oS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(n,e){Jt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],uS=new Js(3e4,6e4);function Hl(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function zr(n,e,t,r,s={}){return Wg(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Qs(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:l},i);return DI()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&Xs(n.emulatorConfig.host)&&(h.credentials="include"),qg.fetch()(await Gg(n,n.config.apiHost,t,c),h)})}async function Wg(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},cS),e);try{const s=new dS(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Si(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Si(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Si(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Si(n,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw zg(n,f,h);Xt(n,f)}}catch(s){if(s instanceof Ft)throw s;Xt(n,"network-request-failed",{message:String(s)})}}async function hS(n,e,t,r,s={}){const i=await zr(n,e,t,r,s);return"mfaPendingCredential"in i&&Xt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Gg(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?Bl(n.config,s):`${n.config.apiScheme}://${s}`;return lS.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class dS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Nt(this.auth,"network-request-failed")),uS.get())})}}function Si(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Nt(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fS(n,e){return zr(n,"POST","/v1/accounts:delete",e)}async function oo(n,e){return zr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pS(n,e=!1){const t=ut(n),r=await t.getIdToken(e),s=zl(r);J(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Es(ic(s.auth_time)),issuedAtTime:Es(ic(s.iat)),expirationTime:Es(ic(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ic(n){return Number(n)*1e3}function zl(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Fi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ng(t);return s?JSON.parse(s):(Fi("Failed to decode base64 JWT payload"),null)}catch(s){return Fi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function _d(n){const e=zl(n);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ks(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ft&&mS(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function mS({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Es(this.lastLoginAt),this.creationTime=Es(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ao(n){var e;const t=n.auth,r=await n.getIdToken(),s=await ks(n,oo(t,{idToken:r}));J(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Kg(i.providerUserInfo):[],c=yS(n.providerData,o),l=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Dc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,p)}async function vS(n){const e=ut(n);await ao(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yS(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Kg(n){return n.map(e=>{var{providerId:t}=e,r=zs(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _S(n,e){const t=await Wg(n,{},async()=>{const r=Qs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await Gg(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",qg.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function wS(n,e){return zr(n,"POST","/v2/accounts:revokeToken",Hl(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_d(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){J(e.length!==0,"internal-error");const t=_d(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await _S(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new Tr;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(J(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(J(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Tr,this.toJSON())}_performRefresh(){return qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(n,e){J(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class _t{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=zs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Dc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ks(this,this.stsTokenManager.getToken(this.auth,e));return J(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return pS(this,e)}reload(){return vS(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new _t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ao(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yt(this.auth.app))return Promise.reject(zn(this.auth));const e=await this.getIdToken();return await ks(this,fS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,c,l,h,f;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,v=(s=t.email)!==null&&s!==void 0?s:void 0,y=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,x=(o=t.photoURL)!==null&&o!==void 0?o:void 0,_=(c=t.tenantId)!==null&&c!==void 0?c:void 0,b=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,R=(h=t.createdAt)!==null&&h!==void 0?h:void 0,P=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:k,emailVerified:O,isAnonymous:M,providerData:V,stsTokenManager:I}=t;J(k&&I,e,"internal-error");const E=Tr.fromJSON(this.name,I);J(typeof k=="string",e,"internal-error"),on(p,e.name),on(v,e.name),J(typeof O=="boolean",e,"internal-error"),J(typeof M=="boolean",e,"internal-error"),on(y,e.name),on(x,e.name),on(_,e.name),on(b,e.name),on(R,e.name),on(P,e.name);const T=new _t({uid:k,auth:e,email:v,emailVerified:O,displayName:p,isAnonymous:M,photoURL:x,phoneNumber:y,tenantId:_,stsTokenManager:E,createdAt:R,lastLoginAt:P});return V&&Array.isArray(V)&&(T.providerData=V.map(S=>Object.assign({},S))),b&&(T._redirectEventId=b),T}static async _fromIdTokenResponse(e,t,r=!1){const s=new Tr;s.updateFromServerResponse(t);const i=new _t({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ao(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];J(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Kg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Tr;c.updateFromIdToken(r);const l=new _t({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Dc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd=new Map;function Wt(n){Jt(n instanceof Function,"Expected a class definition");let e=wd.get(n);return e?(Jt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,wd.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Yg.type="NONE";const Ed=Yg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(n,e,t){return`firebase:${n}:${e}:${t}`}class br{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ui(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ui("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await oo(this.auth,{idToken:e}).catch(()=>{});return t?_t._fromGetAccountInfoResponse(this.auth,t,e):null}return _t._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new br(Wt(Ed),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Wt(Ed);const o=Ui(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const v=await oo(e,{idToken:f}).catch(()=>{});if(!v)break;p=await _t._fromGetAccountInfoResponse(e,v,f)}else p=_t._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new br(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new br(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tv(e))return"Blackberry";if(nv(e))return"Webos";if(Xg(e))return"Safari";if((e.includes("chrome/")||Jg(e))&&!e.includes("edge/"))return"Chrome";if(ev(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Qg(n=Qe()){return/firefox\//i.test(n)}function Xg(n=Qe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jg(n=Qe()){return/crios\//i.test(n)}function Zg(n=Qe()){return/iemobile/i.test(n)}function ev(n=Qe()){return/android/i.test(n)}function tv(n=Qe()){return/blackberry/i.test(n)}function nv(n=Qe()){return/webos/i.test(n)}function ql(n=Qe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ES(n=Qe()){var e;return ql(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function TS(){return LI()&&document.documentMode===10}function rv(n=Qe()){return ql(n)||ev(n)||nv(n)||tv(n)||/windows phone/i.test(n)||Zg(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sv(n,e=[]){let t;switch(n){case"Browser":t=Td(Qe());break;case"Worker":t=`${Td(Qe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${rr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xS(n,e={}){return zr(n,"GET","/v2/passwordPolicy",Hl(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS=6;class CS{constructor(e){var t,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:IS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bd(this),this.idTokenSubscription=new bd(this),this.beforeStateQueue=new bS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Wt(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await br.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await oo(this,{idToken:e}),r=await _t._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(yt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ao(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(yt(this.app))return Promise.reject(zn(this));const t=e?ut(e):null;return t&&J(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return yt(this.app)?Promise.reject(zn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return yt(this.app)?Promise.reject(zn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Wt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xS(this),t=new CS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ys("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await wS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Wt(e)||this._popupRedirectResolver;J(t,this,"argument-error"),this.redirectPersistenceManager=await br.create(this,[Wt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(yt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&sS(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Wl(n){return ut(n)}class bd{constructor(e){this.auth=e,this.observer=null,this.addObserver=zI(t=>this.observer=t)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function AS(n){Gl=n}function RS(n){return Gl.loadJS(n)}function PS(){return Gl.gapiScript}function NS(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kS(n,e){const t=Qo(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Gn(i,e??{}))return s;Xt(s,"already-initialized")}return t.initialize({options:e})}function DS(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Wt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function MS(n,e,t){const r=Wl(n);J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=iv(e),{host:o,port:c}=OS(e),l=c===null?"":`:${c}`,h={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){J(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),J(Gn(h,r.config.emulator)&&Gn(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,LS(),Xs(o)&&Vl(`${i}//${o}${l}`)}function iv(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function OS(n){const e=iv(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:xd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:xd(o)}}}function xd(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function LS(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return qt("not implemented")}_getIdTokenResponse(e){return qt("not implemented")}_linkToIdToken(e,t){return qt("not implemented")}_getReauthenticationResolver(e){return qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xr(n,e){return hS(n,"POST","/v1/accounts:signInWithIdp",Hl(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS="http://localhost";class Yn extends ov{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Yn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Xt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=zs(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Yn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return xr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,xr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,xr(e,t)}buildRequest(){const e={requestUri:VS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Qs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs extends av{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends Zs{constructor(){super("facebook.com")}static credential(e){return Yn._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ln.credential(e.oauthAccessToken)}catch{return null}}}ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";ln.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends Zs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Yn._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return un.credential(t,r)}catch{return null}}}un.GOOGLE_SIGN_IN_METHOD="google.com";un.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends Zs{constructor(){super("github.com")}static credential(e){return Yn._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hn.credential(e.oauthAccessToken)}catch{return null}}}hn.GITHUB_SIGN_IN_METHOD="github.com";hn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends Zs{constructor(){super("twitter.com")}static credential(e,t){return Yn._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return dn.credential(t,r)}catch{return null}}}dn.TWITTER_SIGN_IN_METHOD="twitter.com";dn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await _t._fromIdTokenResponse(e,r,s),o=Id(r);return new Dr({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Id(r);return new Dr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Id(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co extends Ft{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,co.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new co(e,t,r,s)}}function cv(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?co._fromErrorAndOperation(n,i,e,r):i})}async function jS(n,e,t=!1){const r=await ks(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Dr._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FS(n,e,t=!1){const{auth:r}=n;if(yt(r.app))return Promise.reject(zn(r));const s="reauthenticate";try{const i=await ks(n,cv(r,s,e,n),t);J(i.idToken,r,"internal-error");const o=zl(i.idToken);J(o,r,"internal-error");const{sub:c}=o;return J(n.uid===c,r,"user-mismatch"),Dr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Xt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function US(n,e,t=!1){if(yt(n.app))return Promise.reject(zn(n));const r="signIn",s=await cv(n,r,e),i=await Dr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function $S(n,e,t,r){return ut(n).onIdTokenChanged(e,t,r)}function BS(n,e,t){return ut(n).beforeAuthStateChanged(e,t)}const lo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(lo,"1"),this.storage.removeItem(lo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS=1e3,zS=10;class uv extends lv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=rv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);TS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,zS):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},HS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}uv.type="LOCAL";const qS=uv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv extends lv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}hv.type="SESSION";const dv=hv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WS(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Xo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(t.origin,i)),l=await WS(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=Kl("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const v=p;if(v.data.eventId===h)switch(v.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(v.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(){return window}function KS(n){kt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fv(){return typeof kt().WorkerGlobalScope<"u"&&typeof kt().importScripts=="function"}async function YS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function QS(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function XS(){return fv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv="firebaseLocalStorageDb",JS=1,uo="firebaseLocalStorage",mv="fbase_key";class ei{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Jo(n,e){return n.transaction([uo],e?"readwrite":"readonly").objectStore(uo)}function ZS(){const n=indexedDB.deleteDatabase(pv);return new ei(n).toPromise()}function Mc(){const n=indexedDB.open(pv,JS);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(uo,{keyPath:mv})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(uo)?e(r):(r.close(),await ZS(),e(await Mc()))})})}async function Cd(n,e,t){const r=Jo(n,!0).put({[mv]:e,value:t});return new ei(r).toPromise()}async function eA(n,e){const t=Jo(n,!1).get(e),r=await new ei(t).toPromise();return r===void 0?null:r.value}function Sd(n,e){const t=Jo(n,!0).delete(e);return new ei(t).toPromise()}const tA=800,nA=3;class gv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>nA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xo._getInstance(XS()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await YS(),!this.activeServiceWorker)return;this.sender=new GS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||QS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mc();return await Cd(e,lo,"1"),await Sd(e,lo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Cd(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>eA(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Sd(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Jo(s,!1).getAll();return new ei(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gv.type="LOCAL";const rA=gv;new Js(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sA(n,e){return e?Wt(e):(J(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl extends ov{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return xr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return xr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function iA(n){return US(n.auth,new Yl(n),n.bypassAuthState)}function oA(n){const{auth:e,user:t}=n;return J(t,e,"internal-error"),FS(t,new Yl(n),n.bypassAuthState)}async function aA(n){const{auth:e,user:t}=n;return J(t,e,"internal-error"),jS(t,new Yl(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iA;case"linkViaPopup":case"linkViaRedirect":return aA;case"reauthViaPopup":case"reauthViaRedirect":return oA;default:Xt(this.auth,"internal-error")}}resolve(e){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA=new Js(2e3,1e4);class _r extends vv{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,_r.currentPopupAction&&_r.currentPopupAction.cancel(),_r.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){Jt(this.filter.length===1,"Popup operations only handle one event");const e=Kl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_r.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cA.get())};e()}}_r.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA="pendingRedirect",$i=new Map;class uA extends vv{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=$i.get(this.auth._key());if(!e){try{const r=await hA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}$i.set(this.auth._key(),e)}return this.bypassAuthState||$i.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hA(n,e){const t=pA(e),r=fA(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function dA(n,e){$i.set(n._key(),e)}function fA(n){return Wt(n._redirectPersistence)}function pA(n){return Ui(lA,n.config.apiKey,n.name)}async function mA(n,e,t=!1){if(yt(n.app))return Promise.reject(zn(n));const r=Wl(n),s=sA(r,e),o=await new uA(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA=10*60*1e3;class vA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!yv(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Nt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ad(e))}saveEventToCache(e){this.cachedEventUids.add(Ad(e)),this.lastProcessedEventTime=Date.now()}}function Ad(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function yv({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function yA(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yv(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _A(n,e={}){return zr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,EA=/^https?/;async function TA(n){if(n.config.emulator)return;const{authorizedDomains:e}=await _A(n);for(const t of e)try{if(bA(t))return}catch{}Xt(n,"unauthorized-domain")}function bA(n){const e=kc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!EA.test(t))return!1;if(wA.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA=new Js(3e4,6e4);function Rd(){const n=kt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function IA(n){return new Promise((e,t)=>{var r,s,i;function o(){Rd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Rd(),t(Nt(n,"network-request-failed"))},timeout:xA.get()})}if(!((s=(r=kt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=kt().gapi)===null||i===void 0)&&i.load)o();else{const c=NS("iframefcb");return kt()[c]=()=>{gapi.load?o():t(Nt(n,"network-request-failed"))},RS(`${PS()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Bi=null,e})}let Bi=null;function CA(n){return Bi=Bi||IA(n),Bi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA=new Js(5e3,15e3),AA="__/auth/iframe",RA="emulator/auth/iframe",PA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},NA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kA(n){const e=n.config;J(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Bl(e,RA):`https://${n.config.authDomain}/${AA}`,r={apiKey:e.apiKey,appName:n.name,v:rr},s=NA.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Qs(r).slice(1)}`}async function DA(n){const e=await CA(n),t=kt().gapi;return J(t,n,"internal-error"),e.open({where:document.body,url:kA(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:PA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Nt(n,"network-request-failed"),c=kt().setTimeout(()=>{i(o)},SA.get());function l(){kt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},OA=500,LA=600,VA="_blank",jA="http://localhost";class Pd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function FA(n,e,t,r=OA,s=LA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},MA),{width:r.toString(),height:s.toString(),top:i,left:o}),h=Qe().toLowerCase();t&&(c=Jg(h)?VA:t),Qg(h)&&(e=e||jA,l.scrollbars="yes");const f=Object.entries(l).reduce((v,[y,x])=>`${v}${y}=${x},`,"");if(ES(h)&&c!=="_self")return UA(e||"",c),new Pd(null);const p=window.open(e||"",c,f);J(p,n,"popup-blocked");try{p.focus()}catch{}return new Pd(p)}function UA(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A="__/auth/handler",BA="emulator/auth/handler",HA=encodeURIComponent("fac");async function Nd(n,e,t,r,s,i){J(n.config.authDomain,n,"auth-domain-config-required"),J(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:rr,eventId:s};if(e instanceof av){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",HI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Zs){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await n._getAppCheckToken(),h=l?`#${HA}=${encodeURIComponent(l)}`:"";return`${zA(n)}?${Qs(c).slice(1)}${h}`}function zA({config:n}){return n.emulator?Bl(n,BA):`https://${n.authDomain}/${$A}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc="webStorageSupport";class qA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dv,this._completeRedirectFn=mA,this._overrideRedirectResult=dA}async _openPopup(e,t,r,s){var i;Jt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Nd(e,t,r,kc(),s);return FA(e,o,Kl())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Nd(e,t,r,kc(),s);return KS(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Jt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await DA(e),r=new vA(e);return t.register("authEvent",s=>(J(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(oc,{type:oc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[oc];o!==void 0&&t(!!o),Xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=TA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return rv()||Xg()||ql()}}const WA=qA;var kd="@firebase/auth",Dd="1.10.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KA(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function YA(n){Kn(new En("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sv(n)},h=new SS(r,s,i,l);return DS(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Kn(new En("auth-internal",e=>{const t=Wl(e.getProvider("auth").getImmediate());return(r=>new GA(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pt(kd,Dd,KA(n)),Pt(kd,Dd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA=5*60,XA=Og("authIdTokenMaxAge")||QA;let Md=null;const JA=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>XA)return;const s=t==null?void 0:t.token;Md!==s&&(Md=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ZA(n=Ul()){const e=Qo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=kS(n,{popupRedirectResolver:WA,persistence:[rA,qS,dv]}),r=Og("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=JA(i.toString());BS(t,o,()=>o(t.currentUser)),$S(t,c=>o(c))}}const s=kg("auth");return s&&MS(t,`http://${s}`),t}function eR(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}AS({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Nt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",eR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});YA("Browser");var Od=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vn,_v;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,E){function T(){}T.prototype=E.prototype,I.D=E.prototype,I.prototype=new T,I.prototype.constructor=I,I.C=function(S,A,N){for(var C=Array(arguments.length-2),te=2;te<arguments.length;te++)C[te-2]=arguments[te];return E.prototype[A].apply(S,C)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,E,T){T||(T=0);var S=Array(16);if(typeof E=="string")for(var A=0;16>A;++A)S[A]=E.charCodeAt(T++)|E.charCodeAt(T++)<<8|E.charCodeAt(T++)<<16|E.charCodeAt(T++)<<24;else for(A=0;16>A;++A)S[A]=E[T++]|E[T++]<<8|E[T++]<<16|E[T++]<<24;E=I.g[0],T=I.g[1],A=I.g[2];var N=I.g[3],C=E+(N^T&(A^N))+S[0]+3614090360&4294967295;E=T+(C<<7&4294967295|C>>>25),C=N+(A^E&(T^A))+S[1]+3905402710&4294967295,N=E+(C<<12&4294967295|C>>>20),C=A+(T^N&(E^T))+S[2]+606105819&4294967295,A=N+(C<<17&4294967295|C>>>15),C=T+(E^A&(N^E))+S[3]+3250441966&4294967295,T=A+(C<<22&4294967295|C>>>10),C=E+(N^T&(A^N))+S[4]+4118548399&4294967295,E=T+(C<<7&4294967295|C>>>25),C=N+(A^E&(T^A))+S[5]+1200080426&4294967295,N=E+(C<<12&4294967295|C>>>20),C=A+(T^N&(E^T))+S[6]+2821735955&4294967295,A=N+(C<<17&4294967295|C>>>15),C=T+(E^A&(N^E))+S[7]+4249261313&4294967295,T=A+(C<<22&4294967295|C>>>10),C=E+(N^T&(A^N))+S[8]+1770035416&4294967295,E=T+(C<<7&4294967295|C>>>25),C=N+(A^E&(T^A))+S[9]+2336552879&4294967295,N=E+(C<<12&4294967295|C>>>20),C=A+(T^N&(E^T))+S[10]+4294925233&4294967295,A=N+(C<<17&4294967295|C>>>15),C=T+(E^A&(N^E))+S[11]+2304563134&4294967295,T=A+(C<<22&4294967295|C>>>10),C=E+(N^T&(A^N))+S[12]+1804603682&4294967295,E=T+(C<<7&4294967295|C>>>25),C=N+(A^E&(T^A))+S[13]+4254626195&4294967295,N=E+(C<<12&4294967295|C>>>20),C=A+(T^N&(E^T))+S[14]+2792965006&4294967295,A=N+(C<<17&4294967295|C>>>15),C=T+(E^A&(N^E))+S[15]+1236535329&4294967295,T=A+(C<<22&4294967295|C>>>10),C=E+(A^N&(T^A))+S[1]+4129170786&4294967295,E=T+(C<<5&4294967295|C>>>27),C=N+(T^A&(E^T))+S[6]+3225465664&4294967295,N=E+(C<<9&4294967295|C>>>23),C=A+(E^T&(N^E))+S[11]+643717713&4294967295,A=N+(C<<14&4294967295|C>>>18),C=T+(N^E&(A^N))+S[0]+3921069994&4294967295,T=A+(C<<20&4294967295|C>>>12),C=E+(A^N&(T^A))+S[5]+3593408605&4294967295,E=T+(C<<5&4294967295|C>>>27),C=N+(T^A&(E^T))+S[10]+38016083&4294967295,N=E+(C<<9&4294967295|C>>>23),C=A+(E^T&(N^E))+S[15]+3634488961&4294967295,A=N+(C<<14&4294967295|C>>>18),C=T+(N^E&(A^N))+S[4]+3889429448&4294967295,T=A+(C<<20&4294967295|C>>>12),C=E+(A^N&(T^A))+S[9]+568446438&4294967295,E=T+(C<<5&4294967295|C>>>27),C=N+(T^A&(E^T))+S[14]+3275163606&4294967295,N=E+(C<<9&4294967295|C>>>23),C=A+(E^T&(N^E))+S[3]+4107603335&4294967295,A=N+(C<<14&4294967295|C>>>18),C=T+(N^E&(A^N))+S[8]+1163531501&4294967295,T=A+(C<<20&4294967295|C>>>12),C=E+(A^N&(T^A))+S[13]+2850285829&4294967295,E=T+(C<<5&4294967295|C>>>27),C=N+(T^A&(E^T))+S[2]+4243563512&4294967295,N=E+(C<<9&4294967295|C>>>23),C=A+(E^T&(N^E))+S[7]+1735328473&4294967295,A=N+(C<<14&4294967295|C>>>18),C=T+(N^E&(A^N))+S[12]+2368359562&4294967295,T=A+(C<<20&4294967295|C>>>12),C=E+(T^A^N)+S[5]+4294588738&4294967295,E=T+(C<<4&4294967295|C>>>28),C=N+(E^T^A)+S[8]+2272392833&4294967295,N=E+(C<<11&4294967295|C>>>21),C=A+(N^E^T)+S[11]+1839030562&4294967295,A=N+(C<<16&4294967295|C>>>16),C=T+(A^N^E)+S[14]+4259657740&4294967295,T=A+(C<<23&4294967295|C>>>9),C=E+(T^A^N)+S[1]+2763975236&4294967295,E=T+(C<<4&4294967295|C>>>28),C=N+(E^T^A)+S[4]+1272893353&4294967295,N=E+(C<<11&4294967295|C>>>21),C=A+(N^E^T)+S[7]+4139469664&4294967295,A=N+(C<<16&4294967295|C>>>16),C=T+(A^N^E)+S[10]+3200236656&4294967295,T=A+(C<<23&4294967295|C>>>9),C=E+(T^A^N)+S[13]+681279174&4294967295,E=T+(C<<4&4294967295|C>>>28),C=N+(E^T^A)+S[0]+3936430074&4294967295,N=E+(C<<11&4294967295|C>>>21),C=A+(N^E^T)+S[3]+3572445317&4294967295,A=N+(C<<16&4294967295|C>>>16),C=T+(A^N^E)+S[6]+76029189&4294967295,T=A+(C<<23&4294967295|C>>>9),C=E+(T^A^N)+S[9]+3654602809&4294967295,E=T+(C<<4&4294967295|C>>>28),C=N+(E^T^A)+S[12]+3873151461&4294967295,N=E+(C<<11&4294967295|C>>>21),C=A+(N^E^T)+S[15]+530742520&4294967295,A=N+(C<<16&4294967295|C>>>16),C=T+(A^N^E)+S[2]+3299628645&4294967295,T=A+(C<<23&4294967295|C>>>9),C=E+(A^(T|~N))+S[0]+4096336452&4294967295,E=T+(C<<6&4294967295|C>>>26),C=N+(T^(E|~A))+S[7]+1126891415&4294967295,N=E+(C<<10&4294967295|C>>>22),C=A+(E^(N|~T))+S[14]+2878612391&4294967295,A=N+(C<<15&4294967295|C>>>17),C=T+(N^(A|~E))+S[5]+4237533241&4294967295,T=A+(C<<21&4294967295|C>>>11),C=E+(A^(T|~N))+S[12]+1700485571&4294967295,E=T+(C<<6&4294967295|C>>>26),C=N+(T^(E|~A))+S[3]+2399980690&4294967295,N=E+(C<<10&4294967295|C>>>22),C=A+(E^(N|~T))+S[10]+4293915773&4294967295,A=N+(C<<15&4294967295|C>>>17),C=T+(N^(A|~E))+S[1]+2240044497&4294967295,T=A+(C<<21&4294967295|C>>>11),C=E+(A^(T|~N))+S[8]+1873313359&4294967295,E=T+(C<<6&4294967295|C>>>26),C=N+(T^(E|~A))+S[15]+4264355552&4294967295,N=E+(C<<10&4294967295|C>>>22),C=A+(E^(N|~T))+S[6]+2734768916&4294967295,A=N+(C<<15&4294967295|C>>>17),C=T+(N^(A|~E))+S[13]+1309151649&4294967295,T=A+(C<<21&4294967295|C>>>11),C=E+(A^(T|~N))+S[4]+4149444226&4294967295,E=T+(C<<6&4294967295|C>>>26),C=N+(T^(E|~A))+S[11]+3174756917&4294967295,N=E+(C<<10&4294967295|C>>>22),C=A+(E^(N|~T))+S[2]+718787259&4294967295,A=N+(C<<15&4294967295|C>>>17),C=T+(N^(A|~E))+S[9]+3951481745&4294967295,I.g[0]=I.g[0]+E&4294967295,I.g[1]=I.g[1]+(A+(C<<21&4294967295|C>>>11))&4294967295,I.g[2]=I.g[2]+A&4294967295,I.g[3]=I.g[3]+N&4294967295}r.prototype.u=function(I,E){E===void 0&&(E=I.length);for(var T=E-this.blockSize,S=this.B,A=this.h,N=0;N<E;){if(A==0)for(;N<=T;)s(this,I,N),N+=this.blockSize;if(typeof I=="string"){for(;N<E;)if(S[A++]=I.charCodeAt(N++),A==this.blockSize){s(this,S),A=0;break}}else for(;N<E;)if(S[A++]=I[N++],A==this.blockSize){s(this,S),A=0;break}}this.h=A,this.o+=E},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var E=1;E<I.length-8;++E)I[E]=0;var T=8*this.o;for(E=I.length-8;E<I.length;++E)I[E]=T&255,T/=256;for(this.u(I),I=Array(16),E=T=0;4>E;++E)for(var S=0;32>S;S+=8)I[T++]=this.g[E]>>>S&255;return I};function i(I,E){var T=c;return Object.prototype.hasOwnProperty.call(T,I)?T[I]:T[I]=E(I)}function o(I,E){this.h=E;for(var T=[],S=!0,A=I.length-1;0<=A;A--){var N=I[A]|0;S&&N==E||(T[A]=N,S=!1)}this.g=T}var c={};function l(I){return-128<=I&&128>I?i(I,function(E){return new o([E|0],0>E?-1:0)}):new o([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return b(h(-I));for(var E=[],T=1,S=0;I>=T;S++)E[S]=I/T|0,T*=4294967296;return new o(E,0)}function f(I,E){if(I.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(I.charAt(0)=="-")return b(f(I.substring(1),E));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=h(Math.pow(E,8)),S=p,A=0;A<I.length;A+=8){var N=Math.min(8,I.length-A),C=parseInt(I.substring(A,A+N),E);8>N?(N=h(Math.pow(E,N)),S=S.j(N).add(h(C))):(S=S.j(T),S=S.add(h(C)))}return S}var p=l(0),v=l(1),y=l(16777216);n=o.prototype,n.m=function(){if(_(this))return-b(this).m();for(var I=0,E=1,T=0;T<this.g.length;T++){var S=this.i(T);I+=(0<=S?S:4294967296+S)*E,E*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(x(this))return"0";if(_(this))return"-"+b(this).toString(I);for(var E=h(Math.pow(I,6)),T=this,S="";;){var A=O(T,E).g;T=R(T,A.j(E));var N=((0<T.g.length?T.g[0]:T.h)>>>0).toString(I);if(T=A,x(T))return N+S;for(;6>N.length;)N="0"+N;S=N+S}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function x(I){if(I.h!=0)return!1;for(var E=0;E<I.g.length;E++)if(I.g[E]!=0)return!1;return!0}function _(I){return I.h==-1}n.l=function(I){return I=R(this,I),_(I)?-1:x(I)?0:1};function b(I){for(var E=I.g.length,T=[],S=0;S<E;S++)T[S]=~I.g[S];return new o(T,~I.h).add(v)}n.abs=function(){return _(this)?b(this):this},n.add=function(I){for(var E=Math.max(this.g.length,I.g.length),T=[],S=0,A=0;A<=E;A++){var N=S+(this.i(A)&65535)+(I.i(A)&65535),C=(N>>>16)+(this.i(A)>>>16)+(I.i(A)>>>16);S=C>>>16,N&=65535,C&=65535,T[A]=C<<16|N}return new o(T,T[T.length-1]&-2147483648?-1:0)};function R(I,E){return I.add(b(E))}n.j=function(I){if(x(this)||x(I))return p;if(_(this))return _(I)?b(this).j(b(I)):b(b(this).j(I));if(_(I))return b(this.j(b(I)));if(0>this.l(y)&&0>I.l(y))return h(this.m()*I.m());for(var E=this.g.length+I.g.length,T=[],S=0;S<2*E;S++)T[S]=0;for(S=0;S<this.g.length;S++)for(var A=0;A<I.g.length;A++){var N=this.i(S)>>>16,C=this.i(S)&65535,te=I.i(A)>>>16,ce=I.i(A)&65535;T[2*S+2*A]+=C*ce,P(T,2*S+2*A),T[2*S+2*A+1]+=N*ce,P(T,2*S+2*A+1),T[2*S+2*A+1]+=C*te,P(T,2*S+2*A+1),T[2*S+2*A+2]+=N*te,P(T,2*S+2*A+2)}for(S=0;S<E;S++)T[S]=T[2*S+1]<<16|T[2*S];for(S=E;S<2*E;S++)T[S]=0;return new o(T,0)};function P(I,E){for(;(I[E]&65535)!=I[E];)I[E+1]+=I[E]>>>16,I[E]&=65535,E++}function k(I,E){this.g=I,this.h=E}function O(I,E){if(x(E))throw Error("division by zero");if(x(I))return new k(p,p);if(_(I))return E=O(b(I),E),new k(b(E.g),b(E.h));if(_(E))return E=O(I,b(E)),new k(b(E.g),E.h);if(30<I.g.length){if(_(I)||_(E))throw Error("slowDivide_ only works with positive integers.");for(var T=v,S=E;0>=S.l(I);)T=M(T),S=M(S);var A=V(T,1),N=V(S,1);for(S=V(S,2),T=V(T,2);!x(S);){var C=N.add(S);0>=C.l(I)&&(A=A.add(T),N=C),S=V(S,1),T=V(T,1)}return E=R(I,A.j(E)),new k(A,E)}for(A=p;0<=I.l(E);){for(T=Math.max(1,Math.floor(I.m()/E.m())),S=Math.ceil(Math.log(T)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),N=h(T),C=N.j(E);_(C)||0<C.l(I);)T-=S,N=h(T),C=N.j(E);x(N)&&(N=v),A=A.add(N),I=R(I,C)}return new k(A,I)}n.A=function(I){return O(this,I).h},n.and=function(I){for(var E=Math.max(this.g.length,I.g.length),T=[],S=0;S<E;S++)T[S]=this.i(S)&I.i(S);return new o(T,this.h&I.h)},n.or=function(I){for(var E=Math.max(this.g.length,I.g.length),T=[],S=0;S<E;S++)T[S]=this.i(S)|I.i(S);return new o(T,this.h|I.h)},n.xor=function(I){for(var E=Math.max(this.g.length,I.g.length),T=[],S=0;S<E;S++)T[S]=this.i(S)^I.i(S);return new o(T,this.h^I.h)};function M(I){for(var E=I.g.length+1,T=[],S=0;S<E;S++)T[S]=I.i(S)<<1|I.i(S-1)>>>31;return new o(T,I.h)}function V(I,E){var T=E>>5;E%=32;for(var S=I.g.length-T,A=[],N=0;N<S;N++)A[N]=0<E?I.i(N+T)>>>E|I.i(N+T+1)<<32-E:I.i(N+T);return new o(A,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,_v=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,vn=o}).apply(typeof Od<"u"?Od:typeof self<"u"?self:typeof window<"u"?window:{});var Ai=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wv,ms,Ev,Hi,Oc,Tv,bv,xv;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,g){return a==Array.prototype||a==Object.prototype||(a[d]=g.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ai=="object"&&Ai];for(var d=0;d<a.length;++d){var g=a[d];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=t(this);function s(a,d){if(d)e:{var g=r;a=a.split(".");for(var w=0;w<a.length-1;w++){var D=a[w];if(!(D in g))break e;g=g[D]}a=a[a.length-1],w=g[a],d=d(w),d!=w&&d!=null&&e(g,a,{configurable:!0,writable:!0,value:d})}}function i(a,d){a instanceof String&&(a+="");var g=0,w=!1,D={next:function(){if(!w&&g<a.length){var L=g++;return{value:d(L,a[L]),done:!1}}return w=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}s("Array.prototype.values",function(a){return a||function(){return i(this,function(d,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function h(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function f(a,d,g){return a.call.apply(a.bind,arguments)}function p(a,d,g){if(!a)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,w),a.apply(d,D)}}return function(){return a.apply(d,arguments)}}function v(a,d,g){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,v.apply(null,arguments)}function y(a,d){var g=Array.prototype.slice.call(arguments,1);return function(){var w=g.slice();return w.push.apply(w,arguments),a.apply(this,w)}}function x(a,d){function g(){}g.prototype=d.prototype,a.aa=d.prototype,a.prototype=new g,a.prototype.constructor=a,a.Qb=function(w,D,L){for(var $=Array(arguments.length-2),be=2;be<arguments.length;be++)$[be-2]=arguments[be];return d.prototype[D].apply(w,$)}}function _(a){const d=a.length;if(0<d){const g=Array(d);for(let w=0;w<d;w++)g[w]=a[w];return g}return[]}function b(a,d){for(let g=1;g<arguments.length;g++){const w=arguments[g];if(l(w)){const D=a.length||0,L=w.length||0;a.length=D+L;for(let $=0;$<L;$++)a[D+$]=w[$]}else a.push(w)}}class R{constructor(d,g){this.i=d,this.j=g,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function P(a){return/^[\s\xa0]*$/.test(a)}function k(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var M=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function V(a,d,g){for(const w in a)d.call(g,a[w],w,a)}function I(a,d){for(const g in a)d.call(void 0,a[g],g,a)}function E(a){const d={};for(const g in a)d[g]=a[g];return d}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,d){let g,w;for(let D=1;D<arguments.length;D++){w=arguments[D];for(g in w)a[g]=w[g];for(let L=0;L<T.length;L++)g=T[L],Object.prototype.hasOwnProperty.call(w,g)&&(a[g]=w[g])}}function A(a){var d=1;a=a.split(":");const g=[];for(;0<d&&a.length;)g.push(a.shift()),d--;return a.length&&g.push(a.join(":")),g}function N(a){c.setTimeout(()=>{throw a},0)}function C(){var a=H;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class te{constructor(){this.h=this.g=null}add(d,g){const w=ce.get();w.set(d,g),this.h?this.h.next=w:this.g=w,this.h=w}}var ce=new R(()=>new Z,a=>a.reset());class Z{constructor(){this.next=this.g=this.h=null}set(d,g){this.h=d,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let ue,K=!1,H=new te,le=()=>{const a=c.Promise.resolve(void 0);ue=()=>{a.then(ye)}};var ye=()=>{for(var a;a=C();){try{a.h.call(a.g)}catch(g){N(g)}var d=ce;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}K=!1};function xe(){this.s=this.s,this.C=this.C}xe.prototype.s=!1,xe.prototype.ma=function(){this.s||(this.s=!0,this.N())},xe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function we(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}we.prototype.h=function(){this.defaultPrevented=!0};var Ve=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const g=()=>{};c.addEventListener("test",g,d),c.removeEventListener("test",g,d)}catch{}return a}();function Me(a,d){if(we.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var g=this.type=a.type,w=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(M){e:{try{O(d.nodeName);var D=!0;break e}catch{}D=!1}D||(d=null)}}else g=="mouseover"?d=a.fromElement:g=="mouseout"&&(d=a.toElement);this.relatedTarget=d,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:B[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Me.aa.h.call(this)}}x(Me,we);var B={2:"touch",3:"pen",4:"mouse"};Me.prototype.h=function(){Me.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var F="closure_listenable_"+(1e6*Math.random()|0),Y=0;function X(a,d,g,w,D){this.listener=a,this.proxy=null,this.src=d,this.type=g,this.capture=!!w,this.ha=D,this.key=++Y,this.da=this.fa=!1}function ee(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function G(a){this.src=a,this.g={},this.h=0}G.prototype.add=function(a,d,g,w,D){var L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);var $=Te(a,d,w,D);return-1<$?(d=a[$],g||(d.fa=!1)):(d=new X(d,this.src,L,!!w,D),d.fa=g,a.push(d)),d};function ie(a,d){var g=d.type;if(g in a.g){var w=a.g[g],D=Array.prototype.indexOf.call(w,d,void 0),L;(L=0<=D)&&Array.prototype.splice.call(w,D,1),L&&(ee(d),a.g[g].length==0&&(delete a.g[g],a.h--))}}function Te(a,d,g,w){for(var D=0;D<a.length;++D){var L=a[D];if(!L.da&&L.listener==d&&L.capture==!!g&&L.ha==w)return D}return-1}var je="closure_lm_"+(1e6*Math.random()|0),ot={};function tn(a,d,g,w,D){if(Array.isArray(d)){for(var L=0;L<d.length;L++)tn(a,d[L],g,w,D);return null}return g=Du(g),a&&a[F]?a.K(d,g,h(w)?!!w.capture:!1,D):kn(a,d,g,!1,w,D)}function kn(a,d,g,w,D,L){if(!d)throw Error("Invalid event type");var $=h(D)?!!D.capture:!!D,be=wa(a);if(be||(a[je]=be=new G(a)),g=be.add(d,g,w,$,L),g.proxy)return g;if(w=ya(),g.proxy=w,w.src=a,w.listener=g,a.addEventListener)Ve||(D=$),D===void 0&&(D=!1),a.addEventListener(d.toString(),w,D);else if(a.attachEvent)a.attachEvent(ku(d.toString()),w);else if(a.addListener&&a.removeListener)a.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return g}function ya(){function a(g){return d.call(a.src,a.listener,g)}const d=sw;return a}function Dn(a,d,g,w,D){if(Array.isArray(d))for(var L=0;L<d.length;L++)Dn(a,d[L],g,w,D);else w=h(w)?!!w.capture:!!w,g=Du(g),a&&a[F]?(a=a.i,d=String(d).toString(),d in a.g&&(L=a.g[d],g=Te(L,g,w,D),-1<g&&(ee(L[g]),Array.prototype.splice.call(L,g,1),L.length==0&&(delete a.g[d],a.h--)))):a&&(a=wa(a))&&(d=a.g[d.toString()],a=-1,d&&(a=Te(d,g,w,D)),(g=-1<a?d[a]:null)&&_a(g))}function _a(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[F])ie(d.i,a);else{var g=a.type,w=a.proxy;d.removeEventListener?d.removeEventListener(g,w,a.capture):d.detachEvent?d.detachEvent(ku(g),w):d.addListener&&d.removeListener&&d.removeListener(w),(g=wa(d))?(ie(g,a),g.h==0&&(g.src=null,d[je]=null)):ee(a)}}}function ku(a){return a in ot?ot[a]:ot[a]="on"+a}function sw(a,d){if(a.da)a=!0;else{d=new Me(d,this);var g=a.listener,w=a.ha||a.src;a.fa&&_a(a),a=g.call(w,d)}return a}function wa(a){return a=a[je],a instanceof G?a:null}var Ea="__closure_events_fn_"+(1e9*Math.random()>>>0);function Du(a){return typeof a=="function"?a:(a[Ea]||(a[Ea]=function(d){return a.handleEvent(d)}),a[Ea])}function Be(){xe.call(this),this.i=new G(this),this.M=this,this.F=null}x(Be,xe),Be.prototype[F]=!0,Be.prototype.removeEventListener=function(a,d,g,w){Dn(this,a,d,g,w)};function Xe(a,d){var g,w=a.F;if(w)for(g=[];w;w=w.F)g.push(w);if(a=a.M,w=d.type||d,typeof d=="string")d=new we(d,a);else if(d instanceof we)d.target=d.target||a;else{var D=d;d=new we(w,a),S(d,D)}if(D=!0,g)for(var L=g.length-1;0<=L;L--){var $=d.g=g[L];D=si($,w,!0,d)&&D}if($=d.g=a,D=si($,w,!0,d)&&D,D=si($,w,!1,d)&&D,g)for(L=0;L<g.length;L++)$=d.g=g[L],D=si($,w,!1,d)&&D}Be.prototype.N=function(){if(Be.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var g=a.g[d],w=0;w<g.length;w++)ee(g[w]);delete a.g[d],a.h--}}this.F=null},Be.prototype.K=function(a,d,g,w){return this.i.add(String(a),d,!1,g,w)},Be.prototype.L=function(a,d,g,w){return this.i.add(String(a),d,!0,g,w)};function si(a,d,g,w){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var D=!0,L=0;L<d.length;++L){var $=d[L];if($&&!$.da&&$.capture==g){var be=$.listener,Fe=$.ha||$.src;$.fa&&ie(a.i,$),D=be.call(Fe,w)!==!1&&D}}return D&&!w.defaultPrevented}function Mu(a,d,g){if(typeof a=="function")g&&(a=v(a,g));else if(a&&typeof a.handleEvent=="function")a=v(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:c.setTimeout(a,d||0)}function Ou(a){a.g=Mu(()=>{a.g=null,a.i&&(a.i=!1,Ou(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class iw extends xe{constructor(d,g){super(),this.m=d,this.l=g,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Ou(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xr(a){xe.call(this),this.h=a,this.g={}}x(Xr,xe);var Lu=[];function Vu(a){V(a.g,function(d,g){this.g.hasOwnProperty(g)&&_a(d)},a),a.g={}}Xr.prototype.N=function(){Xr.aa.N.call(this),Vu(this)},Xr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ta=c.JSON.stringify,ow=c.JSON.parse,aw=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function ba(){}ba.prototype.h=null;function ju(a){return a.h||(a.h=a.i())}function Fu(){}var Jr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function xa(){we.call(this,"d")}x(xa,we);function Ia(){we.call(this,"c")}x(Ia,we);var Mn={},Uu=null;function ii(){return Uu=Uu||new Be}Mn.La="serverreachability";function $u(a){we.call(this,Mn.La,a)}x($u,we);function Zr(a){const d=ii();Xe(d,new $u(d))}Mn.STAT_EVENT="statevent";function Bu(a,d){we.call(this,Mn.STAT_EVENT,a),this.stat=d}x(Bu,we);function Je(a){const d=ii();Xe(d,new Bu(d,a))}Mn.Ma="timingevent";function Hu(a,d){we.call(this,Mn.Ma,a),this.size=d}x(Hu,we);function es(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},d)}function ts(){this.g=!0}ts.prototype.xa=function(){this.g=!1};function cw(a,d,g,w,D,L){a.info(function(){if(a.g)if(L)for(var $="",be=L.split("&"),Fe=0;Fe<be.length;Fe++){var ve=be[Fe].split("=");if(1<ve.length){var He=ve[0];ve=ve[1];var ze=He.split("_");$=2<=ze.length&&ze[1]=="type"?$+(He+"="+ve+"&"):$+(He+"=redacted&")}}else $=null;else $=L;return"XMLHTTP REQ ("+w+") [attempt "+D+"]: "+d+`
`+g+`
`+$})}function lw(a,d,g,w,D,L,$){a.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+D+"]: "+d+`
`+g+`
`+L+" "+$})}function or(a,d,g,w){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+hw(a,g)+(w?" "+w:"")})}function uw(a,d){a.info(function(){return"TIMEOUT: "+d})}ts.prototype.info=function(){};function hw(a,d){if(!a.g)return d;if(!d)return null;try{var g=JSON.parse(d);if(g){for(a=0;a<g.length;a++)if(Array.isArray(g[a])){var w=g[a];if(!(2>w.length)){var D=w[1];if(Array.isArray(D)&&!(1>D.length)){var L=D[0];if(L!="noop"&&L!="stop"&&L!="close")for(var $=1;$<D.length;$++)D[$]=""}}}}return Ta(g)}catch{return d}}var oi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},zu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ca;function ai(){}x(ai,ba),ai.prototype.g=function(){return new XMLHttpRequest},ai.prototype.i=function(){return{}},Ca=new ai;function nn(a,d,g,w){this.j=a,this.i=d,this.l=g,this.R=w||1,this.U=new Xr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new qu}function qu(){this.i=null,this.g="",this.h=!1}var Wu={},Sa={};function Aa(a,d,g){a.L=1,a.v=hi(Bt(d)),a.m=g,a.P=!0,Gu(a,null)}function Gu(a,d){a.F=Date.now(),ci(a),a.A=Bt(a.v);var g=a.A,w=a.R;Array.isArray(w)||(w=[String(w)]),ah(g.i,"t",w),a.C=0,g=a.j.J,a.h=new qu,a.g=Ih(a.j,g?d:null,!a.m),0<a.O&&(a.M=new iw(v(a.Y,a,a.g),a.O)),d=a.U,g=a.g,w=a.ca;var D="readystatechange";Array.isArray(D)||(D&&(Lu[0]=D.toString()),D=Lu);for(var L=0;L<D.length;L++){var $=tn(g,D[L],w||d.handleEvent,!1,d.h||d);if(!$)break;d.g[$.key]=$}d=a.H?E(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),Zr(),cw(a.i,a.u,a.A,a.l,a.R,a.m)}nn.prototype.ca=function(a){a=a.target;const d=this.M;d&&Ht(a)==3?d.j():this.Y(a)},nn.prototype.Y=function(a){try{if(a==this.g)e:{const ze=Ht(this.g);var d=this.g.Ba();const lr=this.g.Z();if(!(3>ze)&&(ze!=3||this.g&&(this.h.h||this.g.oa()||ph(this.g)))){this.J||ze!=4||d==7||(d==8||0>=lr?Zr(3):Zr(2)),Ra(this);var g=this.g.Z();this.X=g;t:if(Ku(this)){var w=ph(this.g);a="";var D=w.length,L=Ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){On(this),ns(this);var $="";break t}this.h.i=new c.TextDecoder}for(d=0;d<D;d++)this.h.h=!0,a+=this.h.i.decode(w[d],{stream:!(L&&d==D-1)});w.length=0,this.h.g+=a,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=g==200,lw(this.i,this.u,this.A,this.l,this.R,ze,g),this.o){if(this.T&&!this.K){t:{if(this.g){var be,Fe=this.g;if((be=Fe.g?Fe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!P(be)){var ve=be;break t}}ve=null}if(g=ve)or(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Pa(this,g);else{this.o=!1,this.s=3,Je(12),On(this),ns(this);break e}}if(this.P){g=!0;let ft;for(;!this.J&&this.C<$.length;)if(ft=dw(this,$),ft==Sa){ze==4&&(this.s=4,Je(14),g=!1),or(this.i,this.l,null,"[Incomplete Response]");break}else if(ft==Wu){this.s=4,Je(15),or(this.i,this.l,$,"[Invalid Chunk]"),g=!1;break}else or(this.i,this.l,ft,null),Pa(this,ft);if(Ku(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ze!=4||$.length!=0||this.h.h||(this.s=1,Je(16),g=!1),this.o=this.o&&g,!g)or(this.i,this.l,$,"[Invalid Chunked Response]"),On(this),ns(this);else if(0<$.length&&!this.W){this.W=!0;var He=this.j;He.g==this&&He.ba&&!He.M&&(He.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),La(He),He.M=!0,Je(11))}}else or(this.i,this.l,$,null),Pa(this,$);ze==4&&On(this),this.o&&!this.J&&(ze==4?Eh(this.j,this):(this.o=!1,ci(this)))}else Rw(this.g),g==400&&0<$.indexOf("Unknown SID")?(this.s=3,Je(12)):(this.s=0,Je(13)),On(this),ns(this)}}}catch{}finally{}};function Ku(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function dw(a,d){var g=a.C,w=d.indexOf(`
`,g);return w==-1?Sa:(g=Number(d.substring(g,w)),isNaN(g)?Wu:(w+=1,w+g>d.length?Sa:(d=d.slice(w,w+g),a.C=w+g,d)))}nn.prototype.cancel=function(){this.J=!0,On(this)};function ci(a){a.S=Date.now()+a.I,Yu(a,a.I)}function Yu(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=es(v(a.ba,a),d)}function Ra(a){a.B&&(c.clearTimeout(a.B),a.B=null)}nn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(uw(this.i,this.A),this.L!=2&&(Zr(),Je(17)),On(this),this.s=2,ns(this)):Yu(this,this.S-a)};function ns(a){a.j.G==0||a.J||Eh(a.j,a)}function On(a){Ra(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,Vu(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function Pa(a,d){try{var g=a.j;if(g.G!=0&&(g.g==a||Na(g.h,a))){if(!a.K&&Na(g.h,a)&&g.G==3){try{var w=g.Da.g.parse(d)}catch{w=null}if(Array.isArray(w)&&w.length==3){var D=w;if(D[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<a.F)vi(g),mi(g);else break e;Oa(g),Je(18)}}else g.za=D[1],0<g.za-g.T&&37500>D[2]&&g.F&&g.v==0&&!g.C&&(g.C=es(v(g.Za,g),6e3));if(1>=Ju(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else Vn(g,11)}else if((a.K||g.g==a)&&vi(g),!P(d))for(D=g.Da.g.parse(d),d=0;d<D.length;d++){let ve=D[d];if(g.T=ve[0],ve=ve[1],g.G==2)if(ve[0]=="c"){g.K=ve[1],g.ia=ve[2];const He=ve[3];He!=null&&(g.la=He,g.j.info("VER="+g.la));const ze=ve[4];ze!=null&&(g.Aa=ze,g.j.info("SVER="+g.Aa));const lr=ve[5];lr!=null&&typeof lr=="number"&&0<lr&&(w=1.5*lr,g.L=w,g.j.info("backChannelRequestTimeoutMs_="+w)),w=g;const ft=a.g;if(ft){const _i=ft.g?ft.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_i){var L=w.h;L.g||_i.indexOf("spdy")==-1&&_i.indexOf("quic")==-1&&_i.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(ka(L,L.h),L.h=null))}if(w.D){const Va=ft.g?ft.g.getResponseHeader("X-HTTP-Session-Id"):null;Va&&(w.ya=Va,Ie(w.I,w.D,Va))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-a.F,g.j.info("Handshake RTT: "+g.R+"ms")),w=g;var $=a;if(w.qa=xh(w,w.J?w.ia:null,w.W),$.K){Zu(w.h,$);var be=$,Fe=w.L;Fe&&(be.I=Fe),be.B&&(Ra(be),ci(be)),w.g=$}else _h(w);0<g.i.length&&gi(g)}else ve[0]!="stop"&&ve[0]!="close"||Vn(g,7);else g.G==3&&(ve[0]=="stop"||ve[0]=="close"?ve[0]=="stop"?Vn(g,7):Ma(g):ve[0]!="noop"&&g.l&&g.l.ta(ve),g.v=0)}}Zr(4)}catch{}}var fw=class{constructor(a,d){this.g=a,this.map=d}};function Qu(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Xu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ju(a){return a.h?1:a.g?a.g.size:0}function Na(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function ka(a,d){a.g?a.g.add(d):a.h=d}function Zu(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}Qu.prototype.cancel=function(){if(this.i=eh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function eh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const g of a.g.values())d=d.concat(g.D);return d}return _(a.i)}function pw(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var d=[],g=a.length,w=0;w<g;w++)d.push(a[w]);return d}d=[],g=0;for(w in a)d[g++]=a[w];return d}function mw(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var d=[];a=a.length;for(var g=0;g<a;g++)d.push(g);return d}d=[],g=0;for(const w in a)d[g++]=w;return d}}}function th(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var g=mw(a),w=pw(a),D=w.length,L=0;L<D;L++)d.call(void 0,w[L],g&&g[L],a)}var nh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gw(a,d){if(a){a=a.split("&");for(var g=0;g<a.length;g++){var w=a[g].indexOf("="),D=null;if(0<=w){var L=a[g].substring(0,w);D=a[g].substring(w+1)}else L=a[g];d(L,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Ln(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Ln){this.h=a.h,li(this,a.j),this.o=a.o,this.g=a.g,ui(this,a.s),this.l=a.l;var d=a.i,g=new is;g.i=d.i,d.g&&(g.g=new Map(d.g),g.h=d.h),rh(this,g),this.m=a.m}else a&&(d=String(a).match(nh))?(this.h=!1,li(this,d[1]||"",!0),this.o=rs(d[2]||""),this.g=rs(d[3]||"",!0),ui(this,d[4]),this.l=rs(d[5]||"",!0),rh(this,d[6]||"",!0),this.m=rs(d[7]||"")):(this.h=!1,this.i=new is(null,this.h))}Ln.prototype.toString=function(){var a=[],d=this.j;d&&a.push(ss(d,sh,!0),":");var g=this.g;return(g||d=="file")&&(a.push("//"),(d=this.o)&&a.push(ss(d,sh,!0),"@"),a.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&a.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&a.push("/"),a.push(ss(g,g.charAt(0)=="/"?_w:yw,!0))),(g=this.i.toString())&&a.push("?",g),(g=this.m)&&a.push("#",ss(g,Ew)),a.join("")};function Bt(a){return new Ln(a)}function li(a,d,g){a.j=g?rs(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function ui(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function rh(a,d,g){d instanceof is?(a.i=d,Tw(a.i,a.h)):(g||(d=ss(d,ww)),a.i=new is(d,a.h))}function Ie(a,d,g){a.i.set(d,g)}function hi(a){return Ie(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function rs(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ss(a,d,g){return typeof a=="string"?(a=encodeURI(a).replace(d,vw),g&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function vw(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var sh=/[#\/\?@]/g,yw=/[#\?:]/g,_w=/[#\?]/g,ww=/[#\?@]/g,Ew=/#/g;function is(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function rn(a){a.g||(a.g=new Map,a.h=0,a.i&&gw(a.i,function(d,g){a.add(decodeURIComponent(d.replace(/\+/g," ")),g)}))}n=is.prototype,n.add=function(a,d){rn(this),this.i=null,a=ar(this,a);var g=this.g.get(a);return g||this.g.set(a,g=[]),g.push(d),this.h+=1,this};function ih(a,d){rn(a),d=ar(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function oh(a,d){return rn(a),d=ar(a,d),a.g.has(d)}n.forEach=function(a,d){rn(this),this.g.forEach(function(g,w){g.forEach(function(D){a.call(d,D,w,this)},this)},this)},n.na=function(){rn(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),g=[];for(let w=0;w<d.length;w++){const D=a[w];for(let L=0;L<D.length;L++)g.push(d[w])}return g},n.V=function(a){rn(this);let d=[];if(typeof a=="string")oh(this,a)&&(d=d.concat(this.g.get(ar(this,a))));else{a=Array.from(this.g.values());for(let g=0;g<a.length;g++)d=d.concat(a[g])}return d},n.set=function(a,d){return rn(this),this.i=null,a=ar(this,a),oh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},n.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function ah(a,d,g){ih(a,d),0<g.length&&(a.i=null,a.g.set(ar(a,d),_(g)),a.h+=g.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var g=0;g<d.length;g++){var w=d[g];const L=encodeURIComponent(String(w)),$=this.V(w);for(w=0;w<$.length;w++){var D=L;$[w]!==""&&(D+="="+encodeURIComponent(String($[w]))),a.push(D)}}return this.i=a.join("&")};function ar(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function Tw(a,d){d&&!a.j&&(rn(a),a.i=null,a.g.forEach(function(g,w){var D=w.toLowerCase();w!=D&&(ih(this,w),ah(this,D,g))},a)),a.j=d}function bw(a,d){const g=new ts;if(c.Image){const w=new Image;w.onload=y(sn,g,"TestLoadImage: loaded",!0,d,w),w.onerror=y(sn,g,"TestLoadImage: error",!1,d,w),w.onabort=y(sn,g,"TestLoadImage: abort",!1,d,w),w.ontimeout=y(sn,g,"TestLoadImage: timeout",!1,d,w),c.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=a}else d(!1)}function xw(a,d){const g=new ts,w=new AbortController,D=setTimeout(()=>{w.abort(),sn(g,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:w.signal}).then(L=>{clearTimeout(D),L.ok?sn(g,"TestPingServer: ok",!0,d):sn(g,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(D),sn(g,"TestPingServer: error",!1,d)})}function sn(a,d,g,w,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),w(g)}catch{}}function Iw(){this.g=new aw}function Cw(a,d,g){const w=g||"";try{th(a,function(D,L){let $=D;h(D)&&($=Ta(D)),d.push(w+L+"="+encodeURIComponent($))})}catch(D){throw d.push(w+"type="+encodeURIComponent("_badmap")),D}}function di(a){this.l=a.Ub||null,this.j=a.eb||!1}x(di,ba),di.prototype.g=function(){return new fi(this.l,this.j)},di.prototype.i=function(a){return function(){return a}}({});function fi(a,d){Be.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(fi,Be),n=fi.prototype,n.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,as(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||c).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,os(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,as(this)),this.g&&(this.readyState=3,as(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ch(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function ch(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?os(this):as(this),this.readyState==3&&ch(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,os(this))},n.Qa=function(a){this.g&&(this.response=a,os(this))},n.ga=function(){this.g&&os(this)};function os(a){a.readyState=4,a.l=null,a.j=null,a.v=null,as(a)}n.setRequestHeader=function(a,d){this.u.append(a,d)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var g=d.next();!g.done;)g=g.value,a.push(g[0]+": "+g[1]),g=d.next();return a.join(`\r
`)};function as(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(fi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function lh(a){let d="";return V(a,function(g,w){d+=w,d+=":",d+=g,d+=`\r
`}),d}function Da(a,d,g){e:{for(w in g){var w=!1;break e}w=!0}w||(g=lh(g),typeof a=="string"?g!=null&&encodeURIComponent(String(g)):Ie(a,d,g))}function Ae(a){Be.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Ae,Be);var Sw=/^https?$/i,Aw=["POST","PUT"];n=Ae.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,d,g,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ca.g(),this.v=this.o?ju(this.o):ju(Ca),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(L){uh(this,L);return}if(a=g||"",g=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var D in w)g.set(D,w[D]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const L of w.keys())g.set(L,w.get(L));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(g.keys()).find(L=>L.toLowerCase()=="content-type"),D=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Aw,d,void 0))||w||D||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,$]of g)this.g.setRequestHeader(L,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{fh(this),this.u=!0,this.g.send(a),this.u=!1}catch(L){uh(this,L)}};function uh(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,hh(a),pi(a)}function hh(a){a.A||(a.A=!0,Xe(a,"complete"),Xe(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Xe(this,"complete"),Xe(this,"abort"),pi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),pi(this,!0)),Ae.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?dh(this):this.bb())},n.bb=function(){dh(this)};function dh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Ht(a)!=4||a.Z()!=2)){if(a.u&&Ht(a)==4)Mu(a.Ea,0,a);else if(Xe(a,"readystatechange"),Ht(a)==4){a.h=!1;try{const $=a.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var g;if(!(g=d)){var w;if(w=$===0){var D=String(a.D).match(nh)[1]||null;!D&&c.self&&c.self.location&&(D=c.self.location.protocol.slice(0,-1)),w=!Sw.test(D?D.toLowerCase():"")}g=w}if(g)Xe(a,"complete"),Xe(a,"success");else{a.m=6;try{var L=2<Ht(a)?a.g.statusText:""}catch{L=""}a.l=L+" ["+a.Z()+"]",hh(a)}}finally{pi(a)}}}}function pi(a,d){if(a.g){fh(a);const g=a.g,w=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||Xe(a,"ready");try{g.onreadystatechange=w}catch{}}}function fh(a){a.I&&(c.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function Ht(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<Ht(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),ow(d)}};function ph(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Rw(a){const d={};a=(a.g&&2<=Ht(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<a.length;w++){if(P(a[w]))continue;var g=A(a[w]);const D=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const L=d[D]||[];d[D]=L,L.push(g)}I(d,function(w){return w.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function cs(a,d,g){return g&&g.internalChannelParams&&g.internalChannelParams[a]||d}function mh(a){this.Aa=0,this.i=[],this.j=new ts,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=cs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=cs("baseRetryDelayMs",5e3,a),this.cb=cs("retryDelaySeedMs",1e4,a),this.Wa=cs("forwardChannelMaxRetries",2,a),this.wa=cs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Qu(a&&a.concurrentRequestLimit),this.Da=new Iw,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=mh.prototype,n.la=8,n.G=1,n.connect=function(a,d,g,w){Je(0),this.W=a,this.H=d||{},g&&w!==void 0&&(this.H.OSID=g,this.H.OAID=w),this.F=this.X,this.I=xh(this,null,this.W),gi(this)};function Ma(a){if(gh(a),a.G==3){var d=a.U++,g=Bt(a.I);if(Ie(g,"SID",a.K),Ie(g,"RID",d),Ie(g,"TYPE","terminate"),ls(a,g),d=new nn(a,a.j,d),d.L=2,d.v=hi(Bt(g)),g=!1,c.navigator&&c.navigator.sendBeacon)try{g=c.navigator.sendBeacon(d.v.toString(),"")}catch{}!g&&c.Image&&(new Image().src=d.v,g=!0),g||(d.g=Ih(d.j,null),d.g.ea(d.v)),d.F=Date.now(),ci(d)}bh(a)}function mi(a){a.g&&(La(a),a.g.cancel(),a.g=null)}function gh(a){mi(a),a.u&&(c.clearTimeout(a.u),a.u=null),vi(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function gi(a){if(!Xu(a.h)&&!a.s){a.s=!0;var d=a.Ga;ue||le(),K||(ue(),K=!0),H.add(d,a),a.B=0}}function Pw(a,d){return Ju(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=es(v(a.Ga,a,d),Th(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const D=new nn(this,this.j,a);let L=this.o;if(this.S&&(L?(L=E(L),S(L,this.S)):L=this.S),this.m!==null||this.O||(D.H=L,L=null),this.P)e:{for(var d=0,g=0;g<this.i.length;g++){t:{var w=this.i[g];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(d+=w,4096<d){d=g;break e}if(d===4096||g===this.i.length-1){d=g+1;break e}}d=1e3}else d=1e3;d=yh(this,D,d),g=Bt(this.I),Ie(g,"RID",a),Ie(g,"CVER",22),this.D&&Ie(g,"X-HTTP-Session-Id",this.D),ls(this,g),L&&(this.O?d="headers="+encodeURIComponent(String(lh(L)))+"&"+d:this.m&&Da(g,this.m,L)),ka(this.h,D),this.Ua&&Ie(g,"TYPE","init"),this.P?(Ie(g,"$req",d),Ie(g,"SID","null"),D.T=!0,Aa(D,g,null)):Aa(D,g,d),this.G=2}}else this.G==3&&(a?vh(this,a):this.i.length==0||Xu(this.h)||vh(this))};function vh(a,d){var g;d?g=d.l:g=a.U++;const w=Bt(a.I);Ie(w,"SID",a.K),Ie(w,"RID",g),Ie(w,"AID",a.T),ls(a,w),a.m&&a.o&&Da(w,a.m,a.o),g=new nn(a,a.j,g,a.B+1),a.m===null&&(g.H=a.o),d&&(a.i=d.D.concat(a.i)),d=yh(a,g,1e3),g.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ka(a.h,g),Aa(g,w,d)}function ls(a,d){a.H&&V(a.H,function(g,w){Ie(d,w,g)}),a.l&&th({},function(g,w){Ie(d,w,g)})}function yh(a,d,g){g=Math.min(a.i.length,g);var w=a.l?v(a.l.Na,a.l,a):null;e:{var D=a.i;let L=-1;for(;;){const $=["count="+g];L==-1?0<g?(L=D[0].g,$.push("ofs="+L)):L=0:$.push("ofs="+L);let be=!0;for(let Fe=0;Fe<g;Fe++){let ve=D[Fe].g;const He=D[Fe].map;if(ve-=L,0>ve)L=Math.max(0,D[Fe].g-100),be=!1;else try{Cw(He,$,"req"+ve+"_")}catch{w&&w(He)}}if(be){w=$.join("&");break e}}}return a=a.i.splice(0,g),d.D=a,w}function _h(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;ue||le(),K||(ue(),K=!0),H.add(d,a),a.v=0}}function Oa(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=es(v(a.Fa,a),Th(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,wh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=es(v(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Je(10),mi(this),wh(this))};function La(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function wh(a){a.g=new nn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=Bt(a.qa);Ie(d,"RID","rpc"),Ie(d,"SID",a.K),Ie(d,"AID",a.T),Ie(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ie(d,"TO",a.ja),Ie(d,"TYPE","xmlhttp"),ls(a,d),a.m&&a.o&&Da(d,a.m,a.o),a.L&&(a.g.I=a.L);var g=a.g;a=a.ia,g.L=1,g.v=hi(Bt(d)),g.m=null,g.P=!0,Gu(g,a)}n.Za=function(){this.C!=null&&(this.C=null,mi(this),Oa(this),Je(19))};function vi(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Eh(a,d){var g=null;if(a.g==d){vi(a),La(a),a.g=null;var w=2}else if(Na(a.h,d))g=d.D,Zu(a.h,d),w=1;else return;if(a.G!=0){if(d.o)if(w==1){g=d.m?d.m.length:0,d=Date.now()-d.F;var D=a.B;w=ii(),Xe(w,new Hu(w,g)),gi(a)}else _h(a);else if(D=d.s,D==3||D==0&&0<d.X||!(w==1&&Pw(a,d)||w==2&&Oa(a)))switch(g&&0<g.length&&(d=a.h,d.i=d.i.concat(g)),D){case 1:Vn(a,5);break;case 4:Vn(a,10);break;case 3:Vn(a,6);break;default:Vn(a,2)}}}function Th(a,d){let g=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(g*=2),g*d}function Vn(a,d){if(a.j.info("Error code "+d),d==2){var g=v(a.fb,a),w=a.Xa;const D=!w;w=new Ln(w||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||li(w,"https"),hi(w),D?bw(w.toString(),g):xw(w.toString(),g)}else Je(2);a.G=0,a.l&&a.l.sa(d),bh(a),gh(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Je(2)):(this.j.info("Failed to ping google.com"),Je(1))};function bh(a){if(a.G=0,a.ka=[],a.l){const d=eh(a.h);(d.length!=0||a.i.length!=0)&&(b(a.ka,d),b(a.ka,a.i),a.h.i.length=0,_(a.i),a.i.length=0),a.l.ra()}}function xh(a,d,g){var w=g instanceof Ln?Bt(g):new Ln(g);if(w.g!="")d&&(w.g=d+"."+w.g),ui(w,w.s);else{var D=c.location;w=D.protocol,d=d?d+"."+D.hostname:D.hostname,D=+D.port;var L=new Ln(null);w&&li(L,w),d&&(L.g=d),D&&ui(L,D),g&&(L.l=g),w=L}return g=a.D,d=a.ya,g&&d&&Ie(w,g,d),Ie(w,"VER",a.la),ls(a,w),w}function Ih(a,d,g){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new Ae(new di({eb:g})):new Ae(a.pa),d.Ha(a.J),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ch(){}n=Ch.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function yi(){}yi.prototype.g=function(a,d){return new rt(a,d)};function rt(a,d){Be.call(this),this.g=new mh(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!P(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!P(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new cr(this)}x(rt,Be),rt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},rt.prototype.close=function(){Ma(this.g)},rt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var g={};g.__data__=a,a=g}else this.u&&(g={},g.__data__=Ta(a),a=g);d.i.push(new fw(d.Ya++,a)),d.G==3&&gi(d)},rt.prototype.N=function(){this.g.l=null,delete this.j,Ma(this.g),delete this.g,rt.aa.N.call(this)};function Sh(a){xa.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const g in d){a=g;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}x(Sh,xa);function Ah(){Ia.call(this),this.status=1}x(Ah,Ia);function cr(a){this.g=a}x(cr,Ch),cr.prototype.ua=function(){Xe(this.g,"a")},cr.prototype.ta=function(a){Xe(this.g,new Sh(a))},cr.prototype.sa=function(a){Xe(this.g,new Ah)},cr.prototype.ra=function(){Xe(this.g,"b")},yi.prototype.createWebChannel=yi.prototype.g,rt.prototype.send=rt.prototype.o,rt.prototype.open=rt.prototype.m,rt.prototype.close=rt.prototype.close,xv=function(){return new yi},bv=function(){return ii()},Tv=Mn,Oc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},oi.NO_ERROR=0,oi.TIMEOUT=8,oi.HTTP_ERROR=6,Hi=oi,zu.COMPLETE="complete",Ev=zu,Fu.EventType=Jr,Jr.OPEN="a",Jr.CLOSE="b",Jr.ERROR="c",Jr.MESSAGE="d",Be.prototype.listen=Be.prototype.K,ms=Fu,Ae.prototype.listenOnce=Ae.prototype.L,Ae.prototype.getLastError=Ae.prototype.Ka,Ae.prototype.getLastErrorCode=Ae.prototype.Ba,Ae.prototype.getStatus=Ae.prototype.Z,Ae.prototype.getResponseJson=Ae.prototype.Oa,Ae.prototype.getResponseText=Ae.prototype.oa,Ae.prototype.send=Ae.prototype.ea,Ae.prototype.setWithCredentials=Ae.prototype.Ha,wv=Ae}).apply(typeof Ai<"u"?Ai:typeof self<"u"?self:typeof window<"u"?window:{});const Ld="@firebase/firestore",Vd="4.7.12";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}We.UNAUTHENTICATED=new We(null),We.GOOGLE_CREDENTIALS=new We("google-credentials-uid"),We.FIRST_PARTY=new We("first-party-uid"),We.MOCK_USER=new We("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qr="11.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn=new jl("@firebase/firestore");function pr(){return Qn.logLevel}function q(n,...e){if(Qn.logLevel<=de.DEBUG){const t=e.map(Ql);Qn.debug(`Firestore (${qr}): ${n}`,...t)}}function Zt(n,...e){if(Qn.logLevel<=de.ERROR){const t=e.map(Ql);Qn.error(`Firestore (${qr}): ${n}`,...t)}}function Mr(n,...e){if(Qn.logLevel<=de.WARN){const t=e.map(Ql);Qn.warn(`Firestore (${qr}): ${n}`,...t)}}function Ql(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Iv(n,r,t)}function Iv(n,e,t){let r=`FIRESTORE (${qr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Zt(r),new Error(r)}function Se(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Iv(e,s,r)}function pe(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Ft{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(We.UNAUTHENTICATED))}shutdown(){}}class nR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class rR{constructor(e){this.t=e,this.currentUser=We.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Se(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new Ir;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ir,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ir)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string",31837,{l:r}),new Cv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string",2055,{h:e}),new We(e)}}class sR{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=We.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class iR{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new sR(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(We.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oR{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,yt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Se(this.o===void 0,3512);const r=i=>{i.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new jd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Se(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new jd(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aR(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=aR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function he(n,e){return n<e?-1:n>e?1:0}function Lc(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return he(r,s);{const i=Sv(),o=lR(i.encode(Fd(n,t)),i.encode(Fd(e,t)));return o!==0?o:he(r,s)}}t+=r>65535?2:1}return he(n.length,e.length)}function Fd(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function lR(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return he(n[t],e[t]);return he(n.length,e.length)}function Or(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud=-62135596800,$d=1e6;class Le{static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*$d);return new Le(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new W(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new W(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ud)throw new W(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/$d}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Ud;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{static fromTimestamp(e){return new ne(e)}static min(){return new ne(new Le(0,0))}static max(){return new ne(new Le(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd="__name__";class Ct{constructor(e,t,r){t===void 0?t=0:t>e.length&&re(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&re(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ct.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ct?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Ct.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return he(e.length,t.length)}static compareSegments(e,t){const r=Ct.isNumericId(e),s=Ct.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Ct.extractNumericId(e).compare(Ct.extractNumericId(t)):Lc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return vn.fromString(e.substring(4,e.length-2))}}class Ce extends Ct{construct(e,t,r){return new Ce(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Ce(t)}static emptyPath(){return new Ce([])}}const uR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ke extends Ct{construct(e,t,r){return new Ke(e,t,r)}static isValidIdentifier(e){return uR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ke.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Bd}static keyField(){return new Ke([Bd])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new W(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new W(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new W(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new W(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ke(t)}static emptyPath(){return new Ke([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(Ce.fromString(e))}static fromName(e){return new Q(Ce.fromString(e).popFirst(5))}static empty(){return new Q(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ce.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new Ce(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=-1;function hR(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=ne.fromTimestamp(r===1e9?new Le(t+1,0):new Le(t,r));return new Tn(s,Q.empty(),e)}function dR(n){return new Tn(n.readTime,n.key,Ds)}class Tn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Tn(ne.min(),Q.empty(),Ds)}static max(){return new Tn(ne.max(),Q.empty(),Ds)}}function fR(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Q.comparator(n.documentKey,e.documentKey),t!==0?t:he(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class mR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zo(n){if(n.code!==U.FAILED_PRECONDITION||n.message!==pR)throw n;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&re(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new j((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof j?t:j.resolve(t)}catch(t){return j.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):j.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):j.reject(t)}static resolve(e){return new j((t,r)=>{t(e)})}static reject(e){return new j((t,r)=>{r(e)})}static waitFor(e){return new j((t,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&t()},l=>r(l))}),o=!0,i===s&&t()})}static or(e){let t=j.resolve(!1);for(const r of e)t=t.next(s=>s?j.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new j((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next(f=>{o[h]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,t){return new j((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function gR(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Wr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>t.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}ea.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vR=-1;function ta(n){return n==null}function ho(n){return n===0&&1/n==-1/0}function yR(n){return typeof n=="number"&&Number.isInteger(n)&&!ho(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av="";function _R(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Hd(e)),e=wR(n.get(t),e);return Hd(e)}function wR(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Av:t+="";break;default:t+=i}}return t}function Hd(n){return n+Av+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Gr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Rv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,t){this.comparator=e,this.root=t||Ue.EMPTY}insert(e,t){return new Pe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ri(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ri(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ri(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ri(this.root,e,this.comparator,!0)}}class Ri{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ue{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ue.RED,this.left=s??Ue.EMPTY,this.right=i??Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ue(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ue.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw re(43730,{key:this.key,value:this.value});if(this.right.isRed())throw re(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw re(27949);return e+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw re(57766)}get value(){throw re(16141)}get color(){throw re(16727)}get left(){throw re(29726)}get right(){throw re(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ue(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new qd(this.data.getIterator())}getIteratorFrom(e){return new qd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof De)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new De(this.comparator);return t.data=e,t}}class qd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.fields=e,e.sort(Ke.comparator)}static empty(){return new fn([])}unionWith(e){let t=new De(Ke.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new fn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Or(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Pv("Invalid base64 string: "+i):i}}(e);return new $e(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new $e(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}$e.EMPTY_BYTE_STRING=new $e("");const ER=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bn(n){if(Se(!!n,39018),typeof n=="string"){let e=0;const t=ER.exec(n);if(Se(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Re(n.seconds),nanos:Re(n.nanos)}}function Re(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function xn(n){return typeof n=="string"?$e.fromBase64String(n):$e.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv="server_timestamp",kv="__type__",Dv="__previous_value__",Mv="__local_write_time__";function Xl(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[kv])===null||t===void 0?void 0:t.stringValue)===Nv}function na(n){const e=n.mapValue.fields[Dv];return Xl(e)?na(e):e}function Ms(n){const e=bn(n.mapValue.fields[Mv].timestampValue);return new Le(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e,t,r,s,i,o,c,l,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=f}}const fo="(default)";class Os{constructor(e,t){this.projectId=e,this.database=t||fo}static empty(){return new Os("","")}get isDefaultDatabase(){return this.database===fo}isEqual(e){return e instanceof Os&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov="__type__",bR="__max__",Pi={mapValue:{}},Lv="__vector__",po="value";function In(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Xl(n)?4:IR(n)?9007199254740991:xR(n)?10:11:re(28295,{value:n})}function Ot(n,e){if(n===e)return!0;const t=In(n);if(t!==In(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ms(n).isEqual(Ms(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=bn(s.timestampValue),c=bn(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return xn(s.bytesValue).isEqual(xn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Re(s.geoPointValue.latitude)===Re(i.geoPointValue.latitude)&&Re(s.geoPointValue.longitude)===Re(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Re(s.integerValue)===Re(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Re(s.doubleValue),c=Re(i.doubleValue);return o===c?ho(o)===ho(c):isNaN(o)&&isNaN(c)}return!1}(n,e);case 9:return Or(n.arrayValue.values||[],e.arrayValue.values||[],Ot);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(zd(o)!==zd(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!Ot(o[l],c[l])))return!1;return!0}(n,e);default:return re(52216,{left:n})}}function Ls(n,e){return(n.values||[]).find(t=>Ot(t,e))!==void 0}function Lr(n,e){if(n===e)return 0;const t=In(n),r=In(e);if(t!==r)return he(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return he(n.booleanValue,e.booleanValue);case 2:return function(i,o){const c=Re(i.integerValue||i.doubleValue),l=Re(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return Wd(n.timestampValue,e.timestampValue);case 4:return Wd(Ms(n),Ms(e));case 5:return Lc(n.stringValue,e.stringValue);case 6:return function(i,o){const c=xn(i),l=xn(o);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=he(c[h],l[h]);if(f!==0)return f}return he(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const c=he(Re(i.latitude),Re(o.latitude));return c!==0?c:he(Re(i.longitude),Re(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Gd(n.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,h,f;const p=i.fields||{},v=o.fields||{},y=(c=p[po])===null||c===void 0?void 0:c.arrayValue,x=(l=v[po])===null||l===void 0?void 0:l.arrayValue,_=he(((h=y==null?void 0:y.values)===null||h===void 0?void 0:h.length)||0,((f=x==null?void 0:x.values)===null||f===void 0?void 0:f.length)||0);return _!==0?_:Gd(y,x)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===Pi.mapValue&&o===Pi.mapValue)return 0;if(i===Pi.mapValue)return 1;if(o===Pi.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const v=Lc(l[p],f[p]);if(v!==0)return v;const y=Lr(c[l[p]],h[f[p]]);if(y!==0)return y}return he(l.length,f.length)}(n.mapValue,e.mapValue);default:throw re(23264,{Pe:t})}}function Wd(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return he(n,e);const t=bn(n),r=bn(e),s=he(t.seconds,r.seconds);return s!==0?s:he(t.nanos,r.nanos)}function Gd(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Lr(t[s],r[s]);if(i)return i}return he(t.length,r.length)}function Vr(n){return Vc(n)}function Vc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=bn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return xn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Q.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Vc(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Vc(t.fields[o])}`;return s+"}"}(n.mapValue):re(61005,{value:n})}function zi(n){switch(In(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=na(n);return e?16+zi(e):16;case 5:return 2*n.stringValue.length;case 6:return xn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+zi(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Gr(r.fields,(i,o)=>{s+=i.length+zi(o)}),s}(n.mapValue);default:throw re(13486,{value:n})}}function Kd(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function jc(n){return!!n&&"integerValue"in n}function Jl(n){return!!n&&"arrayValue"in n}function Yd(n){return!!n&&"nullValue"in n}function Qd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ac(n){return!!n&&"mapValue"in n}function xR(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Ov])===null||t===void 0?void 0:t.stringValue)===Lv}function Ts(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Gr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ts(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ts(n.arrayValue.values[t]);return e}return Object.assign({},n)}function IR(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===bR}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ac(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ts(t)}setAll(e){let t=Ke.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}o?r[c.lastSegment()]=Ts(o):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());ac(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ot(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];ac(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Gr(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new At(Ts(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,t,r,s,i,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Ge(e,0,ne.min(),ne.min(),ne.min(),At.empty(),0)}static newFoundDocument(e,t,r,s){return new Ge(e,1,t,ne.min(),r,s,0)}static newNoDocument(e,t){return new Ge(e,2,t,ne.min(),ne.min(),At.empty(),0)}static newUnknownDocument(e,t){return new Ge(e,3,t,ne.min(),ne.min(),At.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ge&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ge(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,t){this.position=e,this.inclusive=t}}function Xd(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),t.key):r=Lr(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Jd(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ot(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,t="asc"){this.field=e,this.dir=t}}function CR(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{}class ke extends Vv{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new AR(e,t,r):t==="array-contains"?new NR(e,r):t==="in"?new kR(e,r):t==="not-in"?new DR(e,r):t==="array-contains-any"?new MR(e,r):new ke(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new RR(e,r):new PR(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Lr(t,this.value)):t!==null&&In(this.value)===In(t)&&this.matchesComparison(Lr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class bt extends Vv{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new bt(e,t)}matches(e){return jv(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function jv(n){return n.op==="and"}function Fv(n){return SR(n)&&jv(n)}function SR(n){for(const e of n.filters)if(e instanceof bt)return!1;return!0}function Fc(n){if(n instanceof ke)return n.field.canonicalString()+n.op.toString()+Vr(n.value);if(Fv(n))return n.filters.map(e=>Fc(e)).join(",");{const e=n.filters.map(t=>Fc(t)).join(",");return`${n.op}(${e})`}}function Uv(n,e){return n instanceof ke?function(r,s){return s instanceof ke&&r.op===s.op&&r.field.isEqual(s.field)&&Ot(r.value,s.value)}(n,e):n instanceof bt?function(r,s){return s instanceof bt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&Uv(o,s.filters[c]),!0):!1}(n,e):void re(19439)}function $v(n){return n instanceof ke?function(t){return`${t.field.canonicalString()} ${t.op} ${Vr(t.value)}`}(n):n instanceof bt?function(t){return t.op.toString()+" {"+t.getFilters().map($v).join(" ,")+"}"}(n):"Filter"}class AR extends ke{constructor(e,t,r){super(e,t,r),this.key=Q.fromName(r.referenceValue)}matches(e){const t=Q.comparator(e.key,this.key);return this.matchesComparison(t)}}class RR extends ke{constructor(e,t){super(e,"in",t),this.keys=Bv("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class PR extends ke{constructor(e,t){super(e,"not-in",t),this.keys=Bv("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Bv(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>Q.fromName(r.referenceValue))}class NR extends ke{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Jl(t)&&Ls(t.arrayValue,this.value)}}class kR extends ke{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ls(this.value.arrayValue,t)}}class DR extends ke{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ls(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ls(this.value.arrayValue,t)}}class MR extends ke{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Jl(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ls(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(e,t=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Ie=null}}function Zd(n,e=null,t=[],r=[],s=null,i=null,o=null){return new OR(n,e,t,r,s,i,o)}function Zl(n){const e=pe(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Fc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ta(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Vr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Vr(r)).join(",")),e.Ie=t}return e.Ie}function eu(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!CR(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Uv(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Jd(n.startAt,e.startAt)&&Jd(n.endAt,e.endAt)}function Uc(n){return Q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,t=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function LR(n,e,t,r,s,i,o,c){return new Kr(n,e,t,r,s,i,o,c)}function tu(n){return new Kr(n)}function ef(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Hv(n){return n.collectionGroup!==null}function bs(n){const e=pe(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new De(Ke.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new Vs(i,r))}),t.has(Ke.keyField().canonicalString())||e.Ee.push(new Vs(Ke.keyField(),r))}return e.Ee}function Dt(n){const e=pe(n);return e.de||(e.de=VR(e,bs(n))),e.de}function VR(n,e){if(n.limitType==="F")return Zd(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Vs(s.field,i)});const t=n.endAt?new mo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new mo(n.startAt.position,n.startAt.inclusive):null;return Zd(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function $c(n,e){const t=n.filters.concat([e]);return new Kr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Bc(n,e,t){return new Kr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ra(n,e){return eu(Dt(n),Dt(e))&&n.limitType===e.limitType}function zv(n){return`${Zl(Dt(n))}|lt:${n.limitType}`}function mr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>$v(s)).join(", ")}]`),ta(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Vr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Vr(s)).join(",")),`Target(${r})`}(Dt(n))}; limitType=${n.limitType})`}function sa(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of bs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const h=Xd(o,c,l);return o.inclusive?h<=0:h<0}(r.startAt,bs(r),s)||r.endAt&&!function(o,c,l){const h=Xd(o,c,l);return o.inclusive?h>=0:h>0}(r.endAt,bs(r),s))}(n,e)}function jR(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function qv(n){return(e,t)=>{let r=!1;for(const s of bs(n)){const i=FR(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function FR(n,e,t){const r=n.field.isKeyField()?Q.comparator(e.key,t.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?Lr(l,h):re(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return re(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Gr(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Rv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR=new Pe(Q.comparator);function Cn(){return UR}const Wv=new Pe(Q.comparator);function gs(...n){let e=Wv;for(const t of n)e=e.insert(t.key,t);return e}function $R(n){let e=Wv;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Hn(){return xs()}function Gv(){return xs()}function xs(){return new sr(n=>n.toString(),(n,e)=>n.isEqual(e))}const BR=new De(Q.comparator);function me(...n){let e=BR;for(const t of n)e=e.add(t);return e}const HR=new De(he);function zR(){return HR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ho(e)?"-0":e}}function Kv(n){return{integerValue:""+n}}function qR(n,e){return yR(e)?Kv(e):nu(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(){this._=void 0}}function WR(n,e,t){return n instanceof Hc?function(s,i){const o={fields:{[kv]:{stringValue:Nv},[Mv]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Xl(i)&&(i=na(i)),i&&(o.fields[Dv]=i),{mapValue:o}}(t,e):n instanceof go?Yv(n,e):n instanceof vo?Qv(n,e):function(s,i){const o=KR(s,i),c=tf(o)+tf(s.Re);return jc(o)&&jc(s.Re)?Kv(c):nu(s.serializer,c)}(n,e)}function GR(n,e,t){return n instanceof go?Yv(n,e):n instanceof vo?Qv(n,e):t}function KR(n,e){return n instanceof zc?function(r){return jc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Hc extends ia{}class go extends ia{constructor(e){super(),this.elements=e}}function Yv(n,e){const t=Xv(e);for(const r of n.elements)t.some(s=>Ot(s,r))||t.push(r);return{arrayValue:{values:t}}}class vo extends ia{constructor(e){super(),this.elements=e}}function Qv(n,e){let t=Xv(e);for(const r of n.elements)t=t.filter(s=>!Ot(s,r));return{arrayValue:{values:t}}}class zc extends ia{constructor(e,t){super(),this.serializer=e,this.Re=t}}function tf(n){return Re(n.integerValue||n.doubleValue)}function Xv(n){return Jl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function YR(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof go&&s instanceof go||r instanceof vo&&s instanceof vo?Or(r.elements,s.elements,Ot):r instanceof zc&&s instanceof zc?Ot(r.Re,s.Re):r instanceof Hc&&s instanceof Hc}(n.transform,e.transform)}class qn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new qn}static exists(e){return new qn(void 0,e)}static updateTime(e){return new qn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ru{}function Jv(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new XR(n.key,qn.none()):new su(n.key,n.data,qn.none());{const t=n.data,r=At.empty();let s=new De(Ke.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new oa(n.key,r,new fn(s.toArray()),qn.none())}}function QR(n,e,t){n instanceof su?function(s,i,o){const c=s.value.clone(),l=rf(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):n instanceof oa?function(s,i,o){if(!qi(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=rf(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Zv(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Is(n,e,t,r){return n instanceof su?function(i,o,c,l){if(!qi(i.precondition,o))return c;const h=i.value.clone(),f=sf(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof oa?function(i,o,c,l){if(!qi(i.precondition,o))return c;const h=sf(i.fieldTransforms,l,o),f=o.data;return f.setAll(Zv(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,o,c){return qi(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(n,e,t)}function nf(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Or(r,s,(i,o)=>YR(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class su extends ru{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class oa extends ru{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Zv(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function rf(n,e,t){const r=new Map;Se(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,GR(o,c,t[s]))}return r}function sf(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,WR(i,o,e))}return r}class XR extends ru{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&QR(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Is(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Is(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Gv();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const l=Jv(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ne.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),me())}isEqual(e){return this.batchId===e.batchId&&Or(this.mutations,e.mutations,(t,r)=>nf(t,r))&&Or(this.baseMutations,e.baseMutations,(t,r)=>nf(t,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ZR=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne,fe;function ey(n){if(n===void 0)return Zt("GRPC error has no .code"),U.UNKNOWN;switch(n){case Ne.OK:return U.OK;case Ne.CANCELLED:return U.CANCELLED;case Ne.UNKNOWN:return U.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return U.INTERNAL;case Ne.UNAVAILABLE:return U.UNAVAILABLE;case Ne.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Ne.NOT_FOUND:return U.NOT_FOUND;case Ne.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Ne.ABORTED:return U.ABORTED;case Ne.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Ne.DATA_LOSS:return U.DATA_LOSS;default:return re(39323,{code:n})}}(fe=Ne||(Ne={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tP=new vn([4294967295,4294967295],0);function of(n){const e=Sv().encode(n),t=new _v;return t.update(e),new Uint8Array(t.digest())}function af(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new vn([t,r],0),new vn([s,i],0)]}class iu{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new vs(`Invalid padding: ${t}`);if(r<0)throw new vs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new vs(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new vs(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=vn.fromNumber(this.pe)}we(e,t,r){let s=e.add(t.multiply(vn.fromNumber(r)));return s.compare(tP)===1&&(s=new vn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=of(e),[r,s]=af(t);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);if(!this.be(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new iu(i,s,t);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.pe===0)return;const t=of(e),[r,s]=af(t);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);this.Se(o)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class vs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,ti.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new aa(ne.min(),s,new Pe(he),Cn(),me())}}class ti{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ti(r,t,me(),me(),me())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,t,r,s){this.De=e,this.removedTargetIds=t,this.key=r,this.ve=s}}class ty{constructor(e,t){this.targetId=e,this.Ce=t}}class ny{constructor(e,t,r=$e.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class cf{constructor(){this.Fe=0,this.Me=lf(),this.xe=$e.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=me(),t=me(),r=me();return this.Me.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:re(38017,{changeType:i})}}),new ti(this.xe,this.Oe,e,t,r)}Qe(){this.Ne=!1,this.Me=lf()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Se(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class nP{constructor(e){this.ze=e,this.je=new Map,this.He=Cn(),this.Je=Ni(),this.Ye=Ni(),this.Ze=new Pe(he)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const r=this.rt(t);switch(e.state){case 0:this.it(t)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.ke(e.resumeToken));break;default:re(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((r,s)=>{this.it(s)&&t(s)})}ot(e){const t=e.targetId,r=e.Ce.count,s=this._t(t);if(s){const i=s.target;if(Uc(i))if(r===0){const o=new Q(i.path);this.tt(t,o,Ge.newNoDocument(o,ne.min()))}else Se(r===1,20013,{expectedCount:r});else{const o=this.ut(t);if(o!==r){const c=this.ct(e),l=c?this.lt(c,e,o):1;if(l!==0){this.st(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=xn(r).toUint8Array()}catch(l){if(l instanceof Pv)return Mr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new iu(o,s,i)}catch(l){return Mr(l instanceof vs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.pe===0?null:c}lt(e,t,r){return t.Ce.count===r-this.Tt(e,t.targetId)?0:2}Tt(e,t){const r=this.ze.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.ze.Pt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.tt(t,i,null),s++)}),s}It(e){const t=new Map;this.je.forEach((i,o)=>{const c=this._t(o);if(c){if(i.current&&Uc(c.target)){const l=new Q(c.target.path);this.Et(l).has(o)||this.dt(o,l)||this.tt(o,l,Ge.newNoDocument(l,e))}i.Le&&(t.set(o,i.qe()),i.Qe())}});let r=me();this.Ye.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this._t(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.He.forEach((i,o)=>o.setReadTime(e));const s=new aa(e,t,this.Ze,this.He,r);return this.He=Cn(),this.Je=Ni(),this.Ye=Ni(),this.Ze=new Pe(he),s}et(e,t){if(!this.it(e))return;const r=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,r),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,r){if(!this.it(e))return;const s=this.rt(e);this.dt(e,t)?s.$e(t,1):s.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),r&&(this.He=this.He.insert(t,r))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new cf,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new De(he),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new De(he),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||q("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new cf),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function Ni(){return new Pe(Q.comparator)}function lf(){return new Pe(Q.comparator)}const rP={asc:"ASCENDING",desc:"DESCENDING"},sP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},iP={and:"AND",or:"OR"};class oP{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function qc(n,e){return n.useProto3Json||ta(e)?e:{value:e}}function Wc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ry(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Cr(n){return Se(!!n,49232),ne.fromTimestamp(function(t){const r=bn(t);return new Le(r.seconds,r.nanos)}(n))}function sy(n,e){return Gc(n,e).canonicalString()}function Gc(n,e){const t=function(s){return new Ce(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function iy(n){const e=Ce.fromString(n);return Se(uy(e),10190,{key:e.toString()}),e}function cc(n,e){const t=iy(e);if(t.get(1)!==n.databaseId.projectId)throw new W(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new W(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Q(ay(t))}function oy(n,e){return sy(n.databaseId,e)}function aP(n){const e=iy(n);return e.length===4?Ce.emptyPath():ay(e)}function uf(n){return new Ce(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ay(n){return Se(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function cP(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:re(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Se(f===void 0||typeof f=="string",58123),$e.fromBase64String(f||"")):(Se(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),$e.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?U.UNKNOWN:ey(h.code);return new W(f,h.message||"")}(o);t=new ny(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=cc(n,r.document.name),i=Cr(r.document.updateTime),o=r.document.createTime?Cr(r.document.createTime):ne.min(),c=new At({mapValue:{fields:r.document.fields}}),l=Ge.newFoundDocument(s,i,o,c),h=r.targetIds||[],f=r.removedTargetIds||[];t=new Wi(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=cc(n,r.document),i=r.readTime?Cr(r.readTime):ne.min(),o=Ge.newNoDocument(s,i),c=r.removedTargetIds||[];t=new Wi([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=cc(n,r.document),i=r.removedTargetIds||[];t=new Wi([],i,s,null)}else{if(!("filter"in e))return re(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new eP(s,i),c=r.targetId;t=new ty(c,o)}}return t}function lP(n,e){return{documents:[oy(n,e.path)]}}function uP(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=oy(n,s);const i=function(h){if(h.length!==0)return ly(bt.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(v){return{field:gr(v.field),direction:fP(v.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=qc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{gt:t,parent:s}}function hP(n){let e=aP(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Se(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(p){const v=cy(p);return v instanceof bt&&Fv(v)?v.getFilters():[v]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(v=>function(x){return new Vs(vr(x.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(v))}(t.orderBy));let c=null;t.limit&&(c=function(p){let v;return v=typeof p=="object"?p.value:p,ta(v)?null:v}(t.limit));let l=null;t.startAt&&(l=function(p){const v=!!p.before,y=p.values||[];return new mo(y,v)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const v=!p.before,y=p.values||[];return new mo(y,v)}(t.endAt)),LR(e,s,o,i,c,"F",l,h)}function dP(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function cy(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=vr(t.unaryFilter.field);return ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=vr(t.unaryFilter.field);return ke.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=vr(t.unaryFilter.field);return ke.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=vr(t.unaryFilter.field);return ke.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return re(61313);default:return re(60726)}}(n):n.fieldFilter!==void 0?function(t){return ke.create(vr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return re(58110);default:return re(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return bt.create(t.compositeFilter.filters.map(r=>cy(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return re(1026)}}(t.compositeFilter.op))}(n):re(30097,{filter:n})}function fP(n){return rP[n]}function pP(n){return sP[n]}function mP(n){return iP[n]}function gr(n){return{fieldPath:n.canonicalString()}}function vr(n){return Ke.fromServerFormat(n.fieldPath)}function ly(n){return n instanceof ke?function(t){if(t.op==="=="){if(Qd(t.value))return{unaryFilter:{field:gr(t.field),op:"IS_NAN"}};if(Yd(t.value))return{unaryFilter:{field:gr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Qd(t.value))return{unaryFilter:{field:gr(t.field),op:"IS_NOT_NAN"}};if(Yd(t.value))return{unaryFilter:{field:gr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gr(t.field),op:pP(t.op),value:t.value}}}(n):n instanceof bt?function(t){const r=t.getFilters().map(s=>ly(s));return r.length===1?r[0]:{compositeFilter:{op:mP(t.op),filters:r}}}(n):re(54877,{filter:n})}function uy(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,t,r,s,i=ne.min(),o=ne.min(),c=$e.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new pn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new pn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new pn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new pn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{constructor(e){this.wt=e}}function vP(n){const e=hP({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Bc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(){this.yn=new _P}addToCollectionParentIndex(e,t){return this.yn.add(t),j.resolve()}getCollectionParents(e,t){return j.resolve(this.yn.getEntries(t))}addFieldIndex(e,t){return j.resolve()}deleteFieldIndex(e,t){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,t){return j.resolve()}getDocumentsMatchingTarget(e,t){return j.resolve(null)}getIndexType(e,t){return j.resolve(0)}getFieldIndexes(e,t){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,t){return j.resolve(Tn.min())}getMinOffsetFromCollectionGroup(e,t){return j.resolve(Tn.min())}updateCollectionGroup(e,t,r){return j.resolve()}updateIndexEntries(e,t){return j.resolve()}}class _P{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new De(Ce.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new De(Ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},hy=41943040;class nt{static withCacheSize(e){return new nt(e,nt.DEFAULT_COLLECTION_PERCENTILE,nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nt.DEFAULT_COLLECTION_PERCENTILE=10,nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nt.DEFAULT=new nt(hy,nt.DEFAULT_COLLECTION_PERCENTILE,nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nt.DISABLED=new nt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e){this.nr=e}next(){return this.nr+=2,this.nr}static rr(){return new jr(0)}static ir(){return new jr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df="LruGarbageCollector",wP=1048576;function ff([n,e],[t,r]){const s=he(n,t);return s===0?he(e,r):s}class EP{constructor(e){this.cr=e,this.buffer=new De(ff),this.lr=0}hr(){return++this.lr}Pr(e){const t=[e,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();ff(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class TP{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(e){q(df,`Garbage collection scheduled in ${e}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Wr(t)?q(df,"Ignoring IndexedDB error during garbage collection: ",t):await Zo(t)}await this.Ir(3e5)})}}class bP{constructor(e,t){this.Er=e,this.params=t}calculateTargetCount(e,t){return this.Er.dr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return j.resolve(ea.le);const r=new EP(t);return this.Er.forEachTarget(e,s=>r.Pr(s.sequenceNumber)).next(()=>this.Er.Ar(e,s=>r.Pr(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Er.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Er.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(hf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),hf):this.Rr(e,t))}getCacheSize(e){return this.Er.getCacheSize(e)}Rr(e,t){let r,s,i,o,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,t))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),pr()<=de.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function xP(n,e){return new bP(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(){this.changes=new sr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ge.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?j.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SP{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Is(r.mutation,s,fn.empty(),Le.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,me()).next(()=>r))}getLocalViewOfDocuments(e,t,r=me()){const s=Hn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=gs();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Hn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,me()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,r,s){let i=Cn();const o=xs(),c=function(){return xs()}();return t.forEach((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof oa)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Is(f.mutation,h,f.mutation.getFieldMask(),Le.now())):o.set(h.key,fn.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>{var p;return c.set(h,new CP(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,t){const r=xs();let s=new Pe((o,c)=>o-c),i=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=t.get(l);if(h===null)return;let f=r.get(l)||fn.empty();f=c.applyToLocalView(h,f),r.set(l,f);const p=(s.get(c.batchId)||me()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=Gv();f.forEach(v=>{if(!i.has(v)){const y=Jv(t.get(v),r.get(v));y!==null&&p.set(v,y),i=i.add(v)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Hv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):j.resolve(Hn());let c=Ds,l=i;return o.next(h=>j.forEach(h,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?j.resolve():this.remoteDocumentCache.getEntry(e,f).next(v=>{l=l.insert(f,v)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,me())).next(f=>({batchId:c,changes:$R(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Q(t)).next(r=>{let s=gs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=gs();return this.indexManager.getCollectionParents(e,i).next(c=>j.forEach(c,l=>{const h=function(p,v){return new Kr(v,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,v)=>{o=o.insert(p,v)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>{i.forEach((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Ge.newInvalidDocument(f)))});let c=gs();return o.forEach((l,h)=>{const f=i.get(l);f!==void 0&&Is(f.mutation,h,fn.empty(),Le.now()),sa(t,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(e){this.serializer=e,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(e,t){return j.resolve(this.Fr.get(t))}saveBundleMetadata(e,t){return this.Fr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Cr(s.createTime)}}(t)),j.resolve()}getNamedQuery(e,t){return j.resolve(this.Mr.get(t))}saveNamedQuery(e,t){return this.Mr.set(t.name,function(s){return{name:s.name,query:vP(s.bundledQuery),readTime:Cr(s.readTime)}}(t)),j.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(){this.overlays=new Pe(Q.comparator),this.Or=new Map}getOverlay(e,t){return j.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Hn();return j.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.St(e,t,i)}),j.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Or.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Or.delete(r)),j.resolve()}getOverlaysForCollection(e,t,r){const s=Hn(),i=t.length+1,o=new Q(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return j.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Pe((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=Hn(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=Hn(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return j.resolve(c)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Or.get(s.largestBatchId).delete(r.key);this.Or.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ZR(t,r));let i=this.Or.get(t);i===void 0&&(i=me(),this.Or.set(t,i)),this.Or.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(){this.sessionToken=$e.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(){this.Nr=new De(Oe.Br),this.Lr=new De(Oe.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(e,t){const r=new Oe(e,t);this.Nr=this.Nr.add(r),this.Lr=this.Lr.add(r)}qr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Qr(new Oe(e,t))}$r(e,t){e.forEach(r=>this.removeReference(r,t))}Ur(e){const t=new Q(new Ce([])),r=new Oe(t,e),s=new Oe(t,e+1),i=[];return this.Lr.forEachInRange([r,s],o=>{this.Qr(o),i.push(o.key)}),i}Kr(){this.Nr.forEach(e=>this.Qr(e))}Qr(e){this.Nr=this.Nr.delete(e),this.Lr=this.Lr.delete(e)}Wr(e){const t=new Q(new Ce([])),r=new Oe(t,e),s=new Oe(t,e+1);let i=me();return this.Lr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Oe(e,0),r=this.Nr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Oe{constructor(e,t){this.key=e,this.Gr=t}static Br(e,t){return Q.comparator(e.key,t.key)||he(e.Gr,t.Gr)}static kr(e,t){return he(e.Gr,t.Gr)||Q.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Jn=1,this.zr=new De(Oe.Br)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new JR(i,t,r,s);this.mutationQueue.push(o);for(const c of s)this.zr=this.zr.add(new Oe(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,t){return j.resolve(this.jr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Hr(r),i=s<0?0:s;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?vR:this.Jn-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Oe(t,0),s=new Oe(t,Number.POSITIVE_INFINITY),i=[];return this.zr.forEachInRange([r,s],o=>{const c=this.jr(o.Gr);i.push(c)}),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new De(he);return t.forEach(s=>{const i=new Oe(s,0),o=new Oe(s,Number.POSITIVE_INFINITY);this.zr.forEachInRange([i,o],c=>{r=r.add(c.Gr)})}),j.resolve(this.Jr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;Q.isDocumentKey(i)||(i=i.child(""));const o=new Oe(new Q(i),0);let c=new De(he);return this.zr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Gr)),!0)},o),j.resolve(this.Jr(c))}Jr(e){const t=[];return e.forEach(r=>{const s=this.jr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Se(this.Yr(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.zr;return j.forEach(t.mutations,s=>{const i=new Oe(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.zr=r})}Xn(e){}containsKey(e,t){const r=new Oe(t,0),s=this.zr.firstAfterOrEqual(r);return j.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Yr(e,t){return this.Hr(e)}Hr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}jr(e){const t=this.Hr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(e){this.Zr=e,this.docs=function(){return new Pe(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.Zr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return j.resolve(r?r.document.mutableCopy():Ge.newInvalidDocument(t))}getEntries(e,t){let r=Cn();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ge.newInvalidDocument(s))}),j.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Cn();const o=t.path,c=new Q(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||fR(dR(f),r)<=0||(s.has(f.key)||sa(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,t,r,s){re(9500)}Xr(e,t){return j.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new DP(this)}getSize(e){return j.resolve(this.size)}}class DP extends IP{constructor(e){super(),this.vr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.vr.addEntry(e,s)):this.vr.removeEntry(r)}),j.waitFor(t)}getFromCache(e,t){return this.vr.getEntry(e,t)}getAllFromCache(e,t){return this.vr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{constructor(e){this.persistence=e,this.ei=new sr(t=>Zl(t),eu),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.ti=0,this.ni=new ou,this.targetCount=0,this.ri=jr.rr()}forEachTarget(e,t){return this.ei.forEach((r,s)=>t(s)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.ti)}allocateTargetId(e){return this.highestTargetId=this.ri.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ti&&(this.ti=t),j.resolve()}ar(e){this.ei.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ri=new jr(t),this.highestTargetId=t),e.sequenceNumber>this.ti&&(this.ti=e.sequenceNumber)}addTargetData(e,t){return this.ar(t),this.targetCount+=1,j.resolve()}updateTargetData(e,t){return this.ar(t),j.resolve()}removeTargetData(e,t){return this.ei.delete(t.target),this.ni.Ur(t.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ei.forEach((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ei.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),j.waitFor(i).next(()=>s)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,t){const r=this.ei.get(t)||null;return j.resolve(r)}addMatchingKeys(e,t,r){return this.ni.qr(t,r),j.resolve()}removeMatchingKeys(e,t,r){this.ni.$r(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),j.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ni.Ur(t),j.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ni.Wr(t);return j.resolve(r)}containsKey(e,t){return j.resolve(this.ni.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e,t){this.ii={},this.overlays={},this.si=new ea(0),this.oi=!1,this.oi=!0,this._i=new PP,this.referenceDelegate=e(this),this.ai=new MP(this),this.indexManager=new yP,this.remoteDocumentCache=function(s){return new kP(s)}(r=>this.referenceDelegate.ui(r)),this.serializer=new gP(t),this.ci=new AP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new RP,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ii[e.toKey()];return r||(r=new NP(t,this.referenceDelegate),this.ii[e.toKey()]=r),r}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(e,t,r){q("MemoryPersistence","Starting transaction:",e);const s=new OP(this.si.next());return this.referenceDelegate.li(),r(s).next(i=>this.referenceDelegate.hi(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Pi(e,t){return j.or(Object.values(this.ii).map(r=>()=>r.containsKey(e,t)))}}class OP extends mR{constructor(e){super(),this.currentSequenceNumber=e}}class au{constructor(e){this.persistence=e,this.Ti=new ou,this.Ii=null}static Ei(e){return new au(e)}get di(){if(this.Ii)return this.Ii;throw re(60996)}addReference(e,t,r){return this.Ti.addReference(r,t),this.di.delete(r.toString()),j.resolve()}removeReference(e,t,r){return this.Ti.removeReference(r,t),this.di.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),j.resolve()}removeTarget(e,t){this.Ti.Ur(t.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}li(){this.Ii=new Set}hi(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.di,r=>{const s=Q.fromPath(r);return this.Ai(e,s).next(i=>{i||t.removeEntry(s,ne.min())})}).next(()=>(this.Ii=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ai(e,t).next(r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())})}ui(e){return 0}Ai(e,t){return j.or([()=>j.resolve(this.Ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Pi(e,t)])}}class yo{constructor(e,t){this.persistence=e,this.Ri=new sr(r=>_R(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=xP(this,t)}static Ei(e,t){return new yo(e,t)}li(){}hi(e){return j.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.Vr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}Vr(e){let t=0;return this.Ar(e,r=>{t++}).next(()=>t)}Ar(e,t){return j.forEach(this.Ri,(r,s)=>this.gr(e,r,s).next(i=>i?j.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Xr(e,o=>this.gr(e,o,t).next(c=>{c||(r++,i.removeEntry(o,ne.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.Ri.set(t,e.currentSequenceNumber),j.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.Ri.set(r,e.currentSequenceNumber),j.resolve()}removeReference(e,t,r){return this.Ri.set(r,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,t){return this.Ri.set(t,e.currentSequenceNumber),j.resolve()}ui(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=zi(e.data.value)),t}gr(e,t,r){return j.or([()=>this.persistence.Pi(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.Ri.get(t);return j.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.ls=r,this.hs=s}static Ps(e,t){let r=me(),s=me();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new cu(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return VI()?8:gR(Qe())>0?6:4}()}initialize(e,t){this.As=e,this.indexManager=t,this.Ts=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Rs(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Vs(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new LP;return this.fs(e,t,o).next(c=>{if(i.result=c,this.Is)return this.gs(e,t,o,c.size)})}).next(()=>i.result)}gs(e,t,r,s){return r.documentReadCount<this.Es?(pr()<=de.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",mr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),j.resolve()):(pr()<=de.DEBUG&&q("QueryEngine","Query:",mr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(pr()<=de.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",mr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Dt(t))):j.resolve())}Rs(e,t){if(ef(t))return j.resolve(null);let r=Dt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Bc(t,null,"F"),r=Dt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=me(...i);return this.As.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.ps(t,c);return this.ys(t,h,o,l.readTime)?this.Rs(e,Bc(t,null,"F")):this.ws(e,h,t,l)}))})))}Vs(e,t,r,s){return ef(t)||s.isEqual(ne.min())?j.resolve(null):this.As.getDocuments(e,r).next(i=>{const o=this.ps(t,i);return this.ys(t,o,r,s)?j.resolve(null):(pr()<=de.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),mr(t)),this.ws(e,o,t,hR(s,Ds)).next(c=>c))})}ps(e,t){let r=new De(qv(e));return t.forEach((s,i)=>{sa(e,i)&&(r=r.add(i))}),r}ys(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}fs(e,t,r){return pr()<=de.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",mr(t)),this.As.getDocumentsMatchingQuery(e,t,Tn.min(),r)}ws(e,t,r,s){return this.As.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu="LocalStore",jP=3e8;class FP{constructor(e,t,r,s){this.persistence=e,this.bs=t,this.serializer=s,this.Ss=new Pe(he),this.Ds=new sr(i=>Zl(i),eu),this.vs=new Map,this.Cs=e.getRemoteDocumentCache(),this.ai=e.getTargetCache(),this.ci=e.getBundleCache(),this.Fs(r)}Fs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new SP(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ss))}}function UP(n,e,t,r){return new FP(n,e,t,r)}async function fy(n,e){const t=pe(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Fs(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=me();for(const h of s){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(r,l).next(h=>({Ms:h,removedBatchIds:o,addedBatchIds:c}))})})}function py(n){const e=pe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ai.getLastRemoteSnapshotVersion(t))}function $P(n,e){const t=pe(n),r=e.snapshotVersion;let s=t.Ss;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Cs.newChangeBuffer({trackRemovals:!0});s=t.Ss;const c=[];e.targetChanges.forEach((f,p)=>{const v=s.get(p);if(!v)return;c.push(t.ai.removeMatchingKeys(i,f.removedDocuments,p).next(()=>t.ai.addMatchingKeys(i,f.addedDocuments,p)));let y=v.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken($e.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):f.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(f.resumeToken,r)),s=s.insert(p,y),function(_,b,R){return _.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=jP?!0:R.addedDocuments.size+R.modifiedDocuments.size+R.removedDocuments.size>0}(v,y,f)&&c.push(t.ai.updateTargetData(i,y))});let l=Cn(),h=me();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(BP(i,o,e.documentUpdates).next(f=>{l=f.xs,h=f.Os})),!r.isEqual(ne.min())){const f=t.ai.getLastRemoteSnapshotVersion(i).next(p=>t.ai.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return j.waitFor(c).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(t.Ss=s,i))}function BP(n,e,t){let r=me(),s=me();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=Cn();return t.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ne.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):q(lu,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{xs:o,Os:s}})}function HP(n,e){const t=pe(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.ai.getTargetData(r,e).next(i=>i?(s=i,j.resolve(s)):t.ai.allocateTargetId(r).next(o=>(s=new pn(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.ai.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ss.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ss=t.Ss.insert(r.targetId,r),t.Ds.set(e,r.targetId)),r})}async function Kc(n,e,t){const r=pe(n),s=r.Ss.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Wr(o))throw o;q(lu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ss=r.Ss.remove(e),r.Ds.delete(s.target)}function pf(n,e,t){const r=pe(n);let s=ne.min(),i=me();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,f){const p=pe(l),v=p.Ds.get(f);return v!==void 0?j.resolve(p.Ss.get(v)):p.ai.getTargetData(h,f)}(r,o,Dt(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.ai.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.bs.getDocumentsMatchingQuery(o,e,t?s:ne.min(),t?i:me())).next(c=>(zP(r,jR(e),c),{documents:c,Ns:i})))}function zP(n,e,t){let r=n.vs.get(e)||ne.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.vs.set(e,r)}class mf{constructor(){this.activeTargetIds=zR()}$s(e){this.activeTargetIds=this.activeTargetIds.add(e)}Us(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Qs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qP{constructor(){this.So=new mf,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.So.$s(e),this.Do[e]||"not-current"}updateQueryState(e,t,r){this.Do[e]=t}removeLocalQueryTarget(e){this.So.Us(e)}isLocalQueryTarget(e){return this.So.activeTargetIds.has(e)}clearQueryState(e){delete this.Do[e]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(e){return this.So.activeTargetIds.has(e)}start(){return this.So=new mf,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{vo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf="ConnectivityMonitor";class vf{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(e){this.Oo.push(e)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){q(gf,"Network connectivity changed: AVAILABLE");for(const e of this.Oo)e(0)}xo(){q(gf,"Network connectivity changed: UNAVAILABLE");for(const e of this.Oo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ki=null;function Yc(){return ki===null?ki=function(){return 268435456+Math.round(2147483648*Math.random())}():ki++,"0x"+ki.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc="RestConnection",GP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class KP{get Bo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Lo=t+"://"+e.host,this.ko=`projects/${r}/databases/${s}`,this.qo=this.databaseId.database===fo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Qo(e,t,r,s,i){const o=Yc(),c=this.$o(e,t.toUriEncodedString());q(lc,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};this.Uo(l,s,i);const{host:h}=new URL(c),f=Xs(h);return this.Ko(e,c,l,r,f).then(p=>(q(lc,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Mr(lc,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p})}Wo(e,t,r,s,i,o){return this.Qo(e,t,r,s,i)}Uo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}$o(e,t){const r=GP[e];return`${this.Lo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP{constructor(e){this.Go=e.Go,this.zo=e.zo}jo(e){this.Ho=e}Jo(e){this.Yo=e}Zo(e){this.Xo=e}onMessage(e){this.e_=e}close(){this.zo()}send(e){this.Go(e)}t_(){this.Ho()}n_(){this.Yo()}r_(e){this.Xo(e)}i_(e){this.e_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe="WebChannelConnection";class QP extends KP{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ko(e,t,r,s,i){const o=Yc();return new Promise((c,l)=>{const h=new wv;h.setWithCredentials(!0),h.listenOnce(Ev.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Hi.NO_ERROR:const p=h.getResponseJson();q(qe,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case Hi.TIMEOUT:q(qe,`RPC '${e}' ${o} timed out`),l(new W(U.DEADLINE_EXCEEDED,"Request time out"));break;case Hi.HTTP_ERROR:const v=h.getStatus();if(q(qe,`RPC '${e}' ${o} failed with status:`,v,"response text:",h.getResponseText()),v>0){let y=h.getResponseJson();Array.isArray(y)&&(y=y[0]);const x=y==null?void 0:y.error;if(x&&x.status&&x.message){const _=function(R){const P=R.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(P)>=0?P:U.UNKNOWN}(x.status);l(new W(_,x.message))}else l(new W(U.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new W(U.UNAVAILABLE,"Connection failed."));break;default:re(9055,{s_:e,streamId:o,o_:h.getLastErrorCode(),__:h.getLastError()})}}finally{q(qe,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);q(qe,`RPC '${e}' ${o} sending request:`,s),h.send(t,"POST",f,r,15)})}a_(e,t,r){const s=Yc(),i=[this.Lo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=xv(),c=bv(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Uo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const f=i.join("");q(qe,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);let v=!1,y=!1;const x=new YP({Go:b=>{y?q(qe,`Not sending because RPC '${e}' stream ${s} is closed:`,b):(v||(q(qe,`Opening RPC '${e}' stream ${s} transport.`),p.open(),v=!0),q(qe,`RPC '${e}' stream ${s} sending:`,b),p.send(b))},zo:()=>p.close()}),_=(b,R,P)=>{b.listen(R,k=>{try{P(k)}catch(O){setTimeout(()=>{throw O},0)}})};return _(p,ms.EventType.OPEN,()=>{y||(q(qe,`RPC '${e}' stream ${s} transport opened.`),x.t_())}),_(p,ms.EventType.CLOSE,()=>{y||(y=!0,q(qe,`RPC '${e}' stream ${s} transport closed`),x.r_())}),_(p,ms.EventType.ERROR,b=>{y||(y=!0,Mr(qe,`RPC '${e}' stream ${s} transport errored. Name:`,b.name,"Message:",b.message),x.r_(new W(U.UNAVAILABLE,"The operation could not be completed")))}),_(p,ms.EventType.MESSAGE,b=>{var R;if(!y){const P=b.data[0];Se(!!P,16349);const k=P,O=(k==null?void 0:k.error)||((R=k[0])===null||R===void 0?void 0:R.error);if(O){q(qe,`RPC '${e}' stream ${s} received error:`,O);const M=O.status;let V=function(T){const S=Ne[T];if(S!==void 0)return ey(S)}(M),I=O.message;V===void 0&&(V=U.INTERNAL,I="Unknown error status: "+M+" with message "+O.message),y=!0,x.r_(new W(V,I)),p.close()}else q(qe,`RPC '${e}' stream ${s} received:`,P),x.i_(P)}}),_(c,Tv.STAT_EVENT,b=>{b.stat===Oc.PROXY?q(qe,`RPC '${e}' stream ${s} detected buffering proxy`):b.stat===Oc.NOPROXY&&q(qe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{x.n_()},0),x}}function uc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(n){return new oP(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e,t,r=1e3,s=1.5,i=6e4){this.bi=e,this.timerId=t,this.u_=r,this.c_=s,this.l_=i,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(e){this.cancel();const t=Math.floor(this.h_+this.d_()),r=Math.max(0,Date.now()-this.T_),s=Math.max(0,t-r);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.h_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,s,()=>(this.T_=Date.now(),e())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf="PersistentStream";class XP{constructor(e,t,r,s,i,o,c,l){this.bi=e,this.R_=r,this.V_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new my(e,t)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(e){this.M_(),this.stream.send(e)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(e,t){this.M_(),this.x_(),this.y_.cancel(),this.m_++,e!==4?this.y_.reset():t&&t.code===U.RESOURCE_EXHAUSTED?(Zt(t.toString()),Zt("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):t&&t.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zo(t)}O_(){}auth(){this.state=1;const e=this.N_(this.m_),t=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.m_===t&&this.B_(r,s)},r=>{e(()=>{const s=new W(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.L_(s)})})}B_(e,t){const r=this.N_(this.m_);this.stream=this.k_(e,t),this.stream.jo(()=>{r(()=>this.listener.jo())}),this.stream.Jo(()=>{r(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(s=>{r(()=>this.L_(s))}),this.stream.onMessage(s=>{r(()=>++this.p_==1?this.q_(s):this.onNext(s))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(e){return q(yf,`close with error: ${e}`),this.stream=null,this.close(4,e)}N_(e){return t=>{this.bi.enqueueAndForget(()=>this.m_===e?t():(q(yf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class JP extends XP{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}k_(e,t){return this.connection.a_("Listen",e,t)}q_(e){return this.onNext(e)}onNext(e){this.y_.reset();const t=cP(this.serializer,e),r=function(i){if(!("targetChange"in i))return ne.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ne.min():o.readTime?Cr(o.readTime):ne.min()}(e);return this.listener.Q_(t,r)}U_(e){const t={};t.database=uf(this.serializer),t.addTarget=function(i,o){let c;const l=o.target;if(c=Uc(l)?{documents:lP(i,l)}:{query:uP(i,l).gt},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=ry(i,o.resumeToken);const h=qc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(ne.min())>0){c.readTime=Wc(i,o.snapshotVersion.toTimestamp());const h=qc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=dP(this.serializer,e);r&&(t.labels=r),this.F_(t)}K_(e){const t={};t.database=uf(this.serializer),t.removeTarget=e,this.F_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{}class e1 extends ZP{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.J_=!1}Y_(){if(this.J_)throw new W(U.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(e,t,r,s){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Qo(e,Gc(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(U.UNKNOWN,i.toString())})}Wo(e,t,r,s,i){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Wo(e,Gc(t,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(U.UNKNOWN,o.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class t1{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(e){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.na("Offline")))}set(e){this.sa(),this.Z_=0,e==="Online"&&(this.ea=!1),this.na(e)}na(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ra(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ea?(Zt(t),this.ea=!1):q("OnlineStateTracker",t)}sa(){this.X_!==null&&(this.X_.cancel(),this.X_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr="RemoteStore";class n1{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=i,this.ca.vo(o=>{r.enqueueAndForget(async()=>{ri(this)&&(q(Fr,"Restarting streams for network reachability change."),await async function(l){const h=pe(l);h.aa.add(4),await ni(h),h.la.set("Unknown"),h.aa.delete(4),await la(h)}(this))})}),this.la=new t1(r,s)}}async function la(n){if(ri(n))for(const e of n.ua)await e(!0)}async function ni(n){for(const e of n.ua)await e(!1)}function gy(n,e){const t=pe(n);t._a.has(e.targetId)||(t._a.set(e.targetId,e),fu(t)?du(t):Yr(t).b_()&&hu(t,e))}function uu(n,e){const t=pe(n),r=Yr(t);t._a.delete(e),r.b_()&&vy(t,e),t._a.size===0&&(r.b_()?r.v_():ri(t)&&t.la.set("Unknown"))}function hu(n,e){if(n.ha.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Yr(n).U_(e)}function vy(n,e){n.ha.Ke(e),Yr(n).K_(e)}function du(n){n.ha=new nP({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n._a.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),Yr(n).start(),n.la.ta()}function fu(n){return ri(n)&&!Yr(n).w_()&&n._a.size>0}function ri(n){return pe(n).aa.size===0}function yy(n){n.ha=void 0}async function r1(n){n.la.set("Online")}async function s1(n){n._a.forEach((e,t)=>{hu(n,e)})}async function i1(n,e){yy(n),fu(n)?(n.la.ia(e),du(n)):n.la.set("Unknown")}async function o1(n,e,t){if(n.la.set("Online"),e instanceof ny&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s._a.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s._a.delete(c),s.ha.removeTarget(c))}(n,e)}catch(r){q(Fr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await _f(n,r)}else if(e instanceof Wi?n.ha.Xe(e):e instanceof ty?n.ha.ot(e):n.ha.nt(e),!t.isEqual(ne.min()))try{const r=await py(n.localStore);t.compareTo(r)>=0&&await function(i,o){const c=i.ha.It(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i._a.get(h);f&&i._a.set(h,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const f=i._a.get(l);if(!f)return;i._a.set(l,f.withResumeToken($e.EMPTY_BYTE_STRING,f.snapshotVersion)),vy(i,l);const p=new pn(f.target,l,h,f.sequenceNumber);hu(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){q(Fr,"Failed to raise snapshot:",r),await _f(n,r)}}async function _f(n,e,t){if(!Wr(e))throw e;n.aa.add(1),await ni(n),n.la.set("Offline"),t||(t=()=>py(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{q(Fr,"Retrying IndexedDB access"),await t(),n.aa.delete(1),await la(n)})}async function wf(n,e){const t=pe(n);t.asyncQueue.verifyOperationInProgress(),q(Fr,"RemoteStore received new credentials");const r=ri(t);t.aa.add(3),await ni(t),r&&t.la.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.aa.delete(3),await la(t)}async function a1(n,e){const t=pe(n);e?(t.aa.delete(2),await la(t)):e||(t.aa.add(2),await ni(t),t.la.set("Unknown"))}function Yr(n){return n.Pa||(n.Pa=function(t,r,s){const i=pe(t);return i.Y_(),new JP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{jo:r1.bind(null,n),Jo:s1.bind(null,n),Zo:i1.bind(null,n),Q_:o1.bind(null,n)}),n.ua.push(async e=>{e?(n.Pa.D_(),fu(n)?du(n):n.la.set("Unknown")):(await n.Pa.stop(),yy(n))})),n.Pa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ir,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,c=new pu(e,t,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _y(n,e){if(Zt("AsyncQueue",`${e}: ${n}`),Wr(n))return new W(U.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{static emptySet(e){return new Sr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Q.comparator(t.key,r.key):(t,r)=>Q.comparator(t.key,r.key),this.keyedMap=gs(),this.sortedSet=new Pe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Sr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Sr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(){this.Ia=new Pe(Q.comparator)}track(e){const t=e.doc.key,r=this.Ia.get(t);r?e.type!==0&&r.type===3?this.Ia=this.Ia.insert(t,e):e.type===3&&r.type!==1?this.Ia=this.Ia.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Ia=this.Ia.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Ia=this.Ia.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Ia=this.Ia.remove(t):e.type===1&&r.type===2?this.Ia=this.Ia.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Ia=this.Ia.insert(t,{type:2,doc:e.doc}):re(63341,{Vt:e,Ea:r}):this.Ia=this.Ia.insert(t,e)}da(){const e=[];return this.Ia.inorderTraversal((t,r)=>{e.push(r)}),e}}class Ur{constructor(e,t,r,s,i,o,c,l,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new Ur(e,t,Sr.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ra(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(){this.Aa=void 0,this.Ra=[]}Va(){return this.Ra.some(e=>e.ma())}}class l1{constructor(){this.queries=Tf(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(t,r){const s=pe(t),i=s.queries;s.queries=Tf(),i.forEach((o,c)=>{for(const l of c.Ra)l.onError(r)})})(this,new W(U.ABORTED,"Firestore shutting down"))}}function Tf(){return new sr(n=>zv(n),ra)}async function u1(n,e){const t=pe(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Va()&&e.ma()&&(r=2):(i=new c1,r=e.ma()?0:1);try{switch(r){case 0:i.Aa=await t.onListen(s,!0);break;case 1:i.Aa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=_y(o,`Initialization of query '${mr(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.Ra.push(e),e.ga(t.onlineState),i.Aa&&e.pa(i.Aa)&&mu(t)}async function h1(n,e){const t=pe(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.Ra.indexOf(e);o>=0&&(i.Ra.splice(o,1),i.Ra.length===0?s=e.ma()?0:1:!i.Va()&&e.ma()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function d1(n,e){const t=pe(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.Ra)c.pa(s)&&(r=!0);o.Aa=s}}r&&mu(t)}function f1(n,e,t){const r=pe(n),s=r.queries.get(e);if(s)for(const i of s.Ra)i.onError(t);r.queries.delete(e)}function mu(n){n.fa.forEach(e=>{e.next()})}var Qc,bf;(bf=Qc||(Qc={})).ya="default",bf.Cache="cache";class p1{constructor(e,t,r){this.query=e,this.wa=t,this.ba=!1,this.Sa=null,this.onlineState="Unknown",this.options=r||{}}pa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ur(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ba?this.Da(e)&&(this.wa.next(e),t=!0):this.va(e,this.onlineState)&&(this.Ca(e),t=!0),this.Sa=e,t}onError(e){this.wa.error(e)}ga(e){this.onlineState=e;let t=!1;return this.Sa&&!this.ba&&this.va(this.Sa,e)&&(this.Ca(this.Sa),t=!0),t}va(e,t){if(!e.fromCache||!this.ma())return!0;const r=t!=="Offline";return(!this.options.Fa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Da(e){if(e.docChanges.length>0)return!0;const t=this.Sa&&this.Sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ca(e){e=Ur.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ba=!0,this.wa.next(e)}ma(){return this.options.source!==Qc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e){this.key=e}}class Ey{constructor(e){this.key=e}}class m1{constructor(e,t){this.query=e,this.qa=t,this.Qa=null,this.hasCachedResults=!1,this.current=!1,this.$a=me(),this.mutatedKeys=me(),this.Ua=qv(e),this.Ka=new Sr(this.Ua)}get Wa(){return this.qa}Ga(e,t){const r=t?t.za:new Ef,s=t?t.Ka:this.Ka;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const v=s.get(f),y=sa(this.query,p)?p:null,x=!!v&&this.mutatedKeys.has(v.key),_=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let b=!1;v&&y?v.data.isEqual(y.data)?x!==_&&(r.track({type:3,doc:y}),b=!0):this.ja(v,y)||(r.track({type:2,doc:y}),b=!0,(l&&this.Ua(y,l)>0||h&&this.Ua(y,h)<0)&&(c=!0)):!v&&y?(r.track({type:0,doc:y}),b=!0):v&&!y&&(r.track({type:1,doc:v}),b=!0,(l||h)&&(c=!0)),b&&(y?(o=o.add(y),i=_?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ka:o,za:r,ys:c,mutatedKeys:i}}ja(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ka;this.Ka=e.Ka,this.mutatedKeys=e.mutatedKeys;const o=e.za.da();o.sort((f,p)=>function(y,x){const _=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re(20277,{Vt:b})}};return _(y)-_(x)}(f.type,p.type)||this.Ua(f.doc,p.doc)),this.Ha(r),s=s!=null&&s;const c=t&&!s?this.Ja():[],l=this.$a.size===0&&this.current&&!s?1:0,h=l!==this.Qa;return this.Qa=l,o.length!==0||h?{snapshot:new Ur(this.query,e.Ka,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ya:c}:{Ya:c}}ga(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ka:this.Ka,za:new Ef,mutatedKeys:this.mutatedKeys,ys:!1},!1)):{Ya:[]}}Za(e){return!this.qa.has(e)&&!!this.Ka.has(e)&&!this.Ka.get(e).hasLocalMutations}Ha(e){e&&(e.addedDocuments.forEach(t=>this.qa=this.qa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.qa=this.qa.delete(t)),this.current=e.current)}Ja(){if(!this.current)return[];const e=this.$a;this.$a=me(),this.Ka.forEach(r=>{this.Za(r.key)&&(this.$a=this.$a.add(r.key))});const t=[];return e.forEach(r=>{this.$a.has(r)||t.push(new Ey(r))}),this.$a.forEach(r=>{e.has(r)||t.push(new wy(r))}),t}Xa(e){this.qa=e.Ns,this.$a=me();const t=this.Ga(e.documents);return this.applyChanges(t,!0)}eu(){return Ur.fromInitialDocuments(this.query,this.Ka,this.mutatedKeys,this.Qa===0,this.hasCachedResults)}}const gu="SyncEngine";class g1{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class v1{constructor(e){this.key=e,this.tu=!1}}class y1{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nu={},this.ru=new sr(c=>zv(c),ra),this.iu=new Map,this.su=new Set,this.ou=new Pe(Q.comparator),this._u=new Map,this.au=new ou,this.uu={},this.cu=new Map,this.lu=jr.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function _1(n,e,t=!0){const r=Cy(n);let s;const i=r.ru.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.eu()):s=await Ty(r,e,t,!0),s}async function w1(n,e){const t=Cy(n);await Ty(t,e,!0,!1)}async function Ty(n,e,t,r){const s=await HP(n.localStore,Dt(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await E1(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&gy(n.remoteStore,s),c}async function E1(n,e,t,r,s){n.Pu=(p,v,y)=>async function(_,b,R,P){let k=b.view.Ga(R);k.ys&&(k=await pf(_.localStore,b.query,!1).then(({documents:I})=>b.view.Ga(I,k)));const O=P&&P.targetChanges.get(b.targetId),M=P&&P.targetMismatches.get(b.targetId)!=null,V=b.view.applyChanges(k,_.isPrimaryClient,O,M);return If(_,b.targetId,V.Ya),V.snapshot}(n,p,v,y);const i=await pf(n.localStore,e,!0),o=new m1(e,i.Ns),c=o.Ga(i.documents),l=ti.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=o.applyChanges(c,n.isPrimaryClient,l);If(n,t,h.Ya);const f=new g1(e,t,o);return n.ru.set(e,f),n.iu.has(t)?n.iu.get(t).push(e):n.iu.set(t,[e]),h.snapshot}async function T1(n,e,t){const r=pe(n),s=r.ru.get(e),i=r.iu.get(s.targetId);if(i.length>1)return r.iu.set(s.targetId,i.filter(o=>!ra(o,e))),void r.ru.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Kc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&uu(r.remoteStore,s.targetId),Xc(r,s.targetId)}).catch(Zo)):(Xc(r,s.targetId),await Kc(r.localStore,s.targetId,!0))}async function b1(n,e){const t=pe(n),r=t.ru.get(e),s=t.iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),uu(t.remoteStore,r.targetId))}async function by(n,e){const t=pe(n);try{const r=await $P(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t._u.get(i);o&&(Se(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.tu=!0:s.modifiedDocuments.size>0?Se(o.tu,14607):s.removedDocuments.size>0&&(Se(o.tu,42227),o.tu=!1))}),await Iy(t,r,e)}catch(r){await Zo(r)}}function xf(n,e,t){const r=pe(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.ru.forEach((i,o)=>{const c=o.view.ga(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=pe(o);l.onlineState=c;let h=!1;l.queries.forEach((f,p)=>{for(const v of p.Ra)v.ga(c)&&(h=!0)}),h&&mu(l)}(r.eventManager,e),s.length&&r.nu.Q_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function x1(n,e,t){const r=pe(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r._u.get(e),i=s&&s.key;if(i){let o=new Pe(Q.comparator);o=o.insert(i,Ge.newNoDocument(i,ne.min()));const c=me().add(i),l=new aa(ne.min(),new Map,new Pe(he),o,c);await by(r,l),r.ou=r.ou.remove(i),r._u.delete(e),vu(r)}else await Kc(r.localStore,e,!1).then(()=>Xc(r,e,t)).catch(Zo)}function Xc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.iu.get(e))n.ru.delete(r),t&&n.nu.Tu(r,t);n.iu.delete(e),n.isPrimaryClient&&n.au.Ur(e).forEach(r=>{n.au.containsKey(r)||xy(n,r)})}function xy(n,e){n.su.delete(e.path.canonicalString());const t=n.ou.get(e);t!==null&&(uu(n.remoteStore,t),n.ou=n.ou.remove(e),n._u.delete(t),vu(n))}function If(n,e,t){for(const r of t)r instanceof wy?(n.au.addReference(r.key,e),I1(n,r)):r instanceof Ey?(q(gu,"Document no longer in limbo: "+r.key),n.au.removeReference(r.key,e),n.au.containsKey(r.key)||xy(n,r.key)):re(19791,{Iu:r})}function I1(n,e){const t=e.key,r=t.path.canonicalString();n.ou.get(t)||n.su.has(r)||(q(gu,"New document in limbo: "+t),n.su.add(r),vu(n))}function vu(n){for(;n.su.size>0&&n.ou.size<n.maxConcurrentLimboResolutions;){const e=n.su.values().next().value;n.su.delete(e);const t=new Q(Ce.fromString(e)),r=n.lu.next();n._u.set(r,new v1(t)),n.ou=n.ou.insert(t,r),gy(n.remoteStore,new pn(Dt(tu(t.path)),r,"TargetPurposeLimboResolution",ea.le))}}async function Iy(n,e,t){const r=pe(n),s=[],i=[],o=[];r.ru.isEmpty()||(r.ru.forEach((c,l)=>{o.push(r.Pu(l,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=cu.Ps(l.targetId,h);i.push(p)}}))}),await Promise.all(o),r.nu.Q_(s),await async function(l,h){const f=pe(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>j.forEach(h,v=>j.forEach(v.ls,y=>f.persistence.referenceDelegate.addReference(p,v.targetId,y)).next(()=>j.forEach(v.hs,y=>f.persistence.referenceDelegate.removeReference(p,v.targetId,y)))))}catch(p){if(!Wr(p))throw p;q(lu,"Failed to update sequence numbers: "+p)}for(const p of h){const v=p.targetId;if(!p.fromCache){const y=f.Ss.get(v),x=y.snapshotVersion,_=y.withLastLimboFreeSnapshotVersion(x);f.Ss=f.Ss.insert(v,_)}}}(r.localStore,i))}async function C1(n,e){const t=pe(n);if(!t.currentUser.isEqual(e)){q(gu,"User change. New user:",e.toKey());const r=await fy(t.localStore,e);t.currentUser=e,function(i,o){i.cu.forEach(c=>{c.forEach(l=>{l.reject(new W(U.CANCELLED,o))})}),i.cu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Iy(t,r.Ms)}}function S1(n,e){const t=pe(n),r=t._u.get(e);if(r&&r.tu)return me().add(r.key);{let s=me();const i=t.iu.get(e);if(!i)return s;for(const o of i){const c=t.ru.get(o);s=s.unionWith(c.view.Wa)}return s}}function Cy(n){const e=pe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=by.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=S1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=x1.bind(null,e),e.nu.Q_=d1.bind(null,e.eventManager),e.nu.Tu=f1.bind(null,e.eventManager),e}class _o{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ca(e.databaseInfo.databaseId),this.sharedClientState=this.Au(e),this.persistence=this.Ru(e),await this.persistence.start(),this.localStore=this.Vu(e),this.gcScheduler=this.mu(e,this.localStore),this.indexBackfillerScheduler=this.fu(e,this.localStore)}mu(e,t){return null}fu(e,t){return null}Vu(e){return UP(this.persistence,new VP,e.initialUser,this.serializer)}Ru(e){return new dy(au.Ei,this.serializer)}Au(e){return new qP}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_o.provider={build:()=>new _o};class A1 extends _o{constructor(e){super(),this.cacheSizeBytes=e}mu(e,t){Se(this.persistence.referenceDelegate instanceof yo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new TP(r,e.asyncQueue,t)}Ru(e){const t=this.cacheSizeBytes!==void 0?nt.withCacheSize(this.cacheSizeBytes):nt.DEFAULT;return new dy(r=>yo.Ei(r,t),this.serializer)}}class Jc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>xf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=C1.bind(null,this.syncEngine),await a1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new l1}()}createDatastore(e){const t=ca(e.databaseInfo.databaseId),r=function(i){return new QP(i)}(e.databaseInfo);return function(i,o,c,l){return new e1(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,c){return new n1(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>xf(this.syncEngine,t,0),function(){return vf.C()?new vf:new WP}())}createSyncEngine(e,t){return function(s,i,o,c,l,h,f){const p=new y1(s,i,o,c,l,h);return f&&(p.hu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=pe(s);q(Fr,"RemoteStore shutting down."),i.aa.add(5),await ni(i),i.ca.shutdown(),i.la.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Jc.provider={build:()=>new Jc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.pu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.pu(this.observer.error,e):Zt("Uncaught Error in snapshot listener:",e.toString()))}yu(){this.muted=!0}pu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn="FirestoreClient";class P1{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=We.UNAUTHENTICATED,this.clientId=cR.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{q(Sn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q(Sn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ir;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=_y(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function hc(n,e){n.asyncQueue.verifyOperationInProgress(),q(Sn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await fy(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Cf(n,e){n.asyncQueue.verifyOperationInProgress();const t=await N1(n);q(Sn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>wf(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>wf(e.remoteStore,s)),n._onlineComponents=e}async function N1(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){q(Sn,"Using user provided OfflineComponentProvider");try{await hc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Mr("Error using user provided cache. Falling back to memory cache: "+t),await hc(n,new _o)}}else q(Sn,"Using default OfflineComponentProvider"),await hc(n,new A1(void 0));return n._offlineComponents}async function k1(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(q(Sn,"Using user provided OnlineComponentProvider"),await Cf(n,n._uninitializedComponentsProvider._online)):(q(Sn,"Using default OnlineComponentProvider"),await Cf(n,new Jc))),n._onlineComponents}async function Sf(n){const e=await k1(n),t=e.eventManager;return t.onListen=_1.bind(null,e.syncEngine),t.onUnlisten=T1.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=w1.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=b1.bind(null,e.syncEngine),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af=new Map;function D1(n,e,t,r){if(e===!0&&r===!0)throw new W(U.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Rf(n){if(Q.isDocumentKey(n))throw new W(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ua(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":re(12329,{type:typeof n})}function Gi(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new W(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ua(n);throw new W(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay="firestore.googleapis.com",Pf=!0;class Nf{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ay,this.ssl=Pf}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Pf;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=hy;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<wP)throw new W(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}D1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Sy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new W(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new W(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new W(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class yu{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new tR;switch(r.type){case"firstParty":return new iR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Af.get(t);r&&(q("ComponentProvider","Removing Datastore"),Af.delete(t),r.terminate())}(this),Promise.resolve()}}function M1(n,e,t,r={}){var s;n=Gi(n,yu);const i=Xs(e),o=n._getSettings(),c=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),l=`${e}:${t}`;i&&Vl(`https://${l}`),o.host!==Ay&&o.host!==l&&Mr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:l,ssl:i,emulatorOptions:r});if(!Gn(h,c)&&(n._setSettings(h),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=We.MOCK_USER;else{f=Lg(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const v=r.mockUserToken.sub||r.mockUserToken.user_id;if(!v)throw new W(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new We(v)}n._authCredentials=new nR(new Cv(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ir(this.firestore,e,this._query)}}class Ut{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ar(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ut(this.firestore,e,this._key)}}class Ar extends ir{constructor(e,t,r){super(e,t,tu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ut(this.firestore,null,new Q(e))}withConverter(e){return new Ar(this.firestore,e,this._path)}}function O1(n,e,...t){if(n=ut(n),n instanceof yu){const r=Ce.fromString(e,...t);return Rf(r),new Ar(n,null,r)}{if(!(n instanceof Ut||n instanceof Ar))throw new W(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ce.fromString(e,...t));return Rf(r),new Ar(n.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf="AsyncQueue";class Df{constructor(e=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new my(this,"async_queue_retry"),this.ju=()=>{const r=uc();r&&q(kf,"Visibility state changed to "+r.visibilityState),this.y_.A_()},this.Hu=e;const t=uc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ju(),this.Yu(e)}enterRestrictedMode(e){if(!this.$u){this.$u=!0,this.Gu=e||!1;const t=uc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ju)}}enqueue(e){if(this.Ju(),this.$u)return new Promise(()=>{});const t=new Ir;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qu.push(e),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(e){if(!Wr(e))throw e;q(kf,"Operation failed with retryable error: "+e)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(e){const t=this.Hu.then(()=>(this.Wu=!0,e().catch(r=>{throw this.Ku=r,this.Wu=!1,Zt("INTERNAL UNHANDLED ERROR: ",Mf(r)),r}).then(r=>(this.Wu=!1,r))));return this.Hu=t,t}enqueueAfterDelay(e,t,r){this.Ju(),this.zu.indexOf(e)>-1&&(t=0);const s=pu.createAndSchedule(this,e,t,r,i=>this.Xu(i));return this.Uu.push(s),s}Ju(){this.Ku&&re(47125,{ec:Mf(this.Ku)})}verifyOperationInProgress(){}async tc(){let e;do e=this.Hu,await e;while(e!==this.Hu)}nc(e){for(const t of this.Uu)if(t.timerId===e)return!0;return!1}rc(e){return this.tc().then(()=>{this.Uu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Uu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.tc()})}sc(e){this.zu.push(e)}Xu(e){const t=this.Uu.indexOf(e);this.Uu.splice(t,1)}}function Mf(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class Zc extends yu{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Df,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Df(e),this._firestoreClient=void 0,await e}}}function L1(n,e){const t=typeof n=="object"?n:Ul(),r=typeof n=="string"?n:fo,s=Qo(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Dg("firestore");i&&M1(s,...i)}return s}function V1(n){if(n._terminated)throw new W(U.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||j1(n),n._firestoreClient}function j1(n){var e,t,r;const s=n._freezeSettings(),i=function(c,l,h,f){return new TR(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Sy(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new P1(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $r($e.fromBase64String(e))}catch(t){throw new W(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new $r($e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new W(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new W(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new W(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1=/^__.*__$/;function Ny(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re(40011,{oc:n})}}class Eu{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this._c(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get oc(){return this.settings.oc}ac(e){return new Eu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}uc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ac({path:r,cc:!1});return s.lc(e),s}hc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ac({path:r,cc:!1});return s._c(),s}Pc(e){return this.ac({path:void 0,cc:!0})}Tc(e){return el(e,this.settings.methodName,this.settings.Ic||!1,this.path,this.settings.Ec)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}_c(){if(this.path)for(let e=0;e<this.path.length;e++)this.lc(this.path.get(e))}lc(e){if(e.length===0)throw this.Tc("Document fields must not be empty");if(Ny(this.oc)&&F1.test(e))throw this.Tc('Document fields cannot begin and end with "__"')}}class U1{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ca(e)}dc(e,t,r,s=!1){return new Eu({oc:e,methodName:t,Ec:r,path:Ke.emptyPath(),cc:!1,Ic:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $1(n){const e=n._freezeSettings(),t=ca(n._databaseId);return new U1(n._databaseId,!!e.ignoreUndefinedProperties,t)}function B1(n,e,t,r=!1){return Tu(t,n.dc(r?4:3,e))}function Tu(n,e){if(ky(n=ut(n)))return z1("Unsupported field value:",e,n),H1(n,e);if(n instanceof Py)return function(r,s){if(!Ny(s.oc))throw s.Tc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Tc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.cc&&e.oc!==4)throw e.Tc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=Tu(c,s.Pc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=ut(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return qR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Le.fromDate(r);return{timestampValue:Wc(s.serializer,i)}}if(r instanceof Le){const i=new Le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Wc(s.serializer,i)}}if(r instanceof _u)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof $r)return{bytesValue:ry(s.serializer,r._byteString)};if(r instanceof Ut){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Tc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:sy(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof wu)return function(o,c){return{mapValue:{fields:{[Ov]:{stringValue:Lv},[po]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw c.Tc("VectorValues must only contain numeric values.");return nu(c.serializer,h)})}}}}}}(r,s);throw s.Tc(`Unsupported field value: ${ua(r)}`)}(n,e)}function H1(n,e){const t={};return Rv(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gr(n,(r,s)=>{const i=Tu(s,e.uc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function ky(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Le||n instanceof _u||n instanceof $r||n instanceof Ut||n instanceof Py||n instanceof wu)}function z1(n,e,t){if(!ky(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=ua(t);throw r==="an object"?e.Tc(n+" a custom object"):e.Tc(n+" "+r)}}const q1=new RegExp("[~\\*/\\[\\]]");function W1(n,e,t){if(e.search(q1)>=0)throw el(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ry(...e.split("."))._internalPath}catch{throw el(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function el(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new W(U.INVALID_ARGUMENT,c+n+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new G1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ha("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class G1 extends Dy{data(){return super.data()}}function ha(n,e){return typeof e=="string"?W1(n,e):e instanceof Ry?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K1(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new W(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bu{}class My extends bu{}function Y1(n,e,...t){let r=[];e instanceof bu&&r.push(e),r=r.concat(t),function(i){const o=i.filter(l=>l instanceof xu).length,c=i.filter(l=>l instanceof da).length;if(o>1||o>0&&c>0)throw new W(U.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class da extends My{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new da(e,t,r)}_apply(e){const t=this._parse(e);return Oy(e._query,t),new ir(e.firestore,e.converter,$c(e._query,t))}_parse(e){const t=$1(e.firestore);return function(i,o,c,l,h,f,p){let v;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new W(U.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Vf(p,f);const x=[];for(const _ of p)x.push(Lf(l,i,_));v={arrayValue:{values:x}}}else v=Lf(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Vf(p,f),v=B1(c,o,p,f==="in"||f==="not-in");return ke.create(h,f,v)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Q1(n,e,t){const r=e,s=ha("where",n);return da._create(s,r,t)}class xu extends bu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new xu(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:bt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)Oy(o,l),o=$c(o,l)}(e._query,t),new ir(e.firestore,e.converter,$c(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Iu extends My{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Iu(e,t)}_apply(e){const t=function(s,i,o){if(s.startAt!==null)throw new W(U.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new W(U.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Vs(i,o)}(e._query,this._field,this._direction);return new ir(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Kr(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function X1(n,e="asc"){const t=e,r=ha("orderBy",n);return Iu._create(r,t)}function Lf(n,e,t){if(typeof(t=ut(t))=="string"){if(t==="")throw new W(U.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Hv(e)&&t.indexOf("/")!==-1)throw new W(U.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Ce.fromString(t));if(!Q.isDocumentKey(r))throw new W(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Kd(n,new Q(r))}if(t instanceof Ut)return Kd(n,t._key);throw new W(U.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ua(t)}.`)}function Vf(n,e){if(!Array.isArray(n)||n.length===0)throw new W(U.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Oy(n,e){const t=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new W(U.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(U.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class J1{convertValue(e,t="none"){switch(In(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(xn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw re(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Gr(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[po].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Re(o.doubleValue));return new wu(i)}convertGeoPoint(e){return new _u(Re(e.latitude),Re(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=na(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ms(e));default:return null}}convertTimestamp(e){const t=bn(e);return new Le(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Ce.fromString(e);Se(uy(r),9688,{name:e});const s=new Os(r.get(1),r.get(3)),i=new Q(r.popFirst(5));return s.isEqual(t)||Zt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ly extends Dy{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ki(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ha("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Ki extends Ly{data(e={}){return super.data(e)}}class Z1{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new ys(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ki(this._firestore,this._userDataWriter,r.key,r,new ys(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new W(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Ki(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ys(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Ki(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ys(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:eN(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function eN(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re(61501,{type:n})}}class Vy extends J1{constructor(e){super(),this.firestore=e}convertBytes(e){return new $r(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ut(this.firestore,null,t)}}function tN(n,...e){var t,r,s;n=ut(n);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Of(e[o])||(i=e[o],o++);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Of(e[o])){const p=e[o];e[o]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let l,h,f;if(n instanceof Ut)h=Gi(n.firestore,Zc),f=tu(n._key.path),l={next:p=>{e[o]&&e[o](nN(h,n,p))},error:e[o+1],complete:e[o+2]};else{const p=Gi(n,ir);h=Gi(p.firestore,Zc),f=p._query;const v=new Vy(h);l={next:y=>{e[o]&&e[o](new Z1(h,v,p,y))},error:e[o+1],complete:e[o+2]},K1(n._query)}return function(v,y,x,_){const b=new R1(_),R=new p1(y,b,x);return v.asyncQueue.enqueueAndForget(async()=>u1(await Sf(v),R)),()=>{b.yu(),v.asyncQueue.enqueueAndForget(async()=>h1(await Sf(v),R))}}(V1(h),f,c,l)}function nN(n,e,t){const r=t.docs.get(e._key),s=new Vy(n);return new Ly(n,s,e._key,r,new ys(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){qr=s})(rr),Kn(new En("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Zc(new rR(r.getProvider("auth-internal")),new oR(o,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new W(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Os(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Pt(Ld,Vd,e),Pt(Ld,Vd,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy="firebasestorage.googleapis.com",rN="storageBucket",sN=2*60*1e3,iN=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends Ft{constructor(e,t,r=0){super(dc(e),`Firebase Storage: ${t} (${dc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,$t.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return dc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Lt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Lt||(Lt={}));function dc(n){return"storage/"+n}function oN(){const n="An unknown error occurred, please check the error payload for server response.";return new $t(Lt.UNKNOWN,n)}function aN(){return new $t(Lt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function cN(){return new $t(Lt.CANCELED,"User canceled the upload/download.")}function lN(n){return new $t(Lt.INVALID_URL,"Invalid URL '"+n+"'.")}function uN(n){return new $t(Lt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function jf(n){return new $t(Lt.INVALID_ARGUMENT,n)}function Fy(){return new $t(Lt.APP_DELETED,"The Firebase app was deleted.")}function hN(n){return new $t(Lt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=wt.makeFromUrl(e,t)}catch{return new wt(e,"")}if(r.path==="")return r;throw uN(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function h(O){O.path_=decodeURIComponent(O.path)}const f="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),v="(/([^?#]*).*)?$",y=new RegExp(`^https?://${p}/${f}/b/${s}/o${v}`,"i"),x={bucket:1,path:3},_=t===jy?"(?:storage.googleapis.com|storage.cloud.google.com)":t,b="([^?#]*)",R=new RegExp(`^https?://${_}/${s}/${b}`,"i"),k=[{regex:c,indices:l,postModify:i},{regex:y,indices:x,postModify:h},{regex:R,indices:{bucket:1,path:2},postModify:h}];for(let O=0;O<k.length;O++){const M=k[O],V=M.regex.exec(e);if(V){const I=V[M.indices.bucket];let E=V[M.indices.path];E||(E=""),r=new wt(I,E),M.postModify(r);break}}if(r==null)throw lN(e);return r}}class dN{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fN(n,e,t){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let h=!1;function f(...b){h||(h=!0,e.apply(null,b))}function p(b){s=setTimeout(()=>{s=null,n(y,l())},b)}function v(){i&&clearTimeout(i)}function y(b,...R){if(h){v();return}if(b){v(),f.call(null,b,...R);return}if(l()||o){v(),f.call(null,b,...R);return}r<64&&(r*=2);let k;c===1?(c=2,k=0):k=(r+Math.random())*1e3,p(k)}let x=!1;function _(b){x||(x=!0,v(),!h&&(s!==null?(b||(c=2),clearTimeout(s),p(0)):b||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,_(!0)},t),_}function pN(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mN(n){return n!==void 0}function Ff(n,e,t,r){if(r<e)throw jf(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw jf(`Invalid value for '${n}'. Expected ${t} or less.`)}function gN(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var wo;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(wo||(wo={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vN(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e,t,r,s,i,o,c,l,h,f,p,v=!0,y=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=p,this.retry=v,this.isUsingEmulator=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((x,_)=>{this.resolve_=x,this.reject_=_,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Di(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===wo.NO_ERROR,l=i.getStatus();if(!c||vN(l,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===wo.ABORT;r(!1,new Di(!1,null,f));return}const h=this.successCodes_.indexOf(l)!==-1;r(!0,new Di(h,i))})},t=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());mN(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=oN();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Fy():cN();o(l)}else{const l=aN();o(l)}};this.canceled_?t(!1,new Di(!1,null,!0)):this.backoffId_=fN(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&pN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Di{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function _N(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function wN(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function EN(n,e){e&&(n["X-Firebase-GMPID"]=e)}function TN(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function bN(n,e,t,r,s,i,o=!0,c=!1){const l=gN(n.urlParams),h=n.url+l,f=Object.assign({},n.headers);return EN(f,e),_N(f,t),wN(f,i),TN(f,r),new yN(h,n.method,f,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xN(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function IN(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,t){this._service=e,t instanceof wt?this._location=t:this._location=wt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Eo(e,t)}get root(){const e=new wt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return IN(this._location.path)}get storage(){return this._service}get parent(){const e=xN(this._location.path);if(e===null)return null;const t=new wt(this._location.bucket,e);return new Eo(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw hN(e)}}function Uf(n,e){const t=e==null?void 0:e[rN];return t==null?null:wt.makeFromBucketSpec(t,n)}function CN(n,e,t,r={}){n.host=`${e}:${t}`;const s=Xs(e);s&&Vl(`https://${n.host}`),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:Lg(i,n.app.options.projectId))}class SN{constructor(e,t,r,s,i,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=jy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=sN,this._maxUploadRetryTime=iN,this._requests=new Set,s!=null?this._bucket=wt.makeFromBucketSpec(s,this._host):this._bucket=Uf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=wt.makeFromBucketSpec(this._url,e):this._bucket=Uf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ff("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ff("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(yt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Eo(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new dN(Fy());{const o=bN(e,this._appId,r,s,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const $f="@firebase/storage",Bf="0.13.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy="storage";function AN(n=Ul(),e){n=ut(n);const r=Qo(n,Uy).getImmediate({identifier:e}),s=Dg("storage");return s&&RN(r,...s),r}function RN(n,e,t,r={}){CN(n,e,t,r)}function PN(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new SN(t,r,s,e,rr)}function NN(){Kn(new En(Uy,PN,"PUBLIC").setMultipleInstances(!0)),Pt($f,Bf,""),Pt($f,Bf,"esm2017")}NN();const kN={apiKey:"AIzaSyDummyKeyForTemporaryUse123456789",authDomain:"dispatch-management-app.firebaseapp.com",projectId:"dispatch-management-app",storageBucket:"dispatch-management-app.appspot.com",messagingSenderId:"123456789012",appId:"1:123456789012:web:abcdef1234567890"},Cu=Fg(kN);ZA(Cu);const DN=L1(Cu);AN(Cu);function MN(n){const[e,t]=m.useState([]),[r,s]=m.useState(null),[i,o]=m.useState([]),[c,l]=m.useState(!0),[h,f]=m.useState(null),[p,v]=m.useState(0),y=m.useCallback(async()=>{if(n){l(!0),f(null);try{const M=await S0(n);if("error"in M)throw new Error(M.error.message);t(M.conversations)}catch(M){console.error("Error loading conversations:",M),f(M.message||"Failed to load conversations")}finally{l(!1)}}},[n]),x=m.useCallback(async()=>{if(n)try{const M=await Yp(n);if("error"in M)throw new Error(M.error.message);v(M.count)}catch(M){console.error("Error loading unread count:",M)}},[n]);m.useEffect(()=>{n&&(y(),x())},[n,y,x]),m.useEffect(()=>{if(!n||!r)return;const M=Y1(O1(DN,"messages"),Q1("conversationId","==",r.id),X1("createdAt","desc")),V=tN(M,I=>{I.docChanges().forEach(E=>{if(E.type==="added"){const T=E.doc.data();!i.some(A=>A.id===T.id)&&(o(A=>[T,...A]),T.senderId!==n&&Gh(r.id))}}),x(),y()});return()=>{V()}},[n,r,i,y,x]);const _=m.useCallback(async M=>{l(!0),f(null);try{const V=await Wh(M);if("error"in V)throw new Error(V.error.message);o(V.messages),await Gh(M,n),x()}catch(V){console.error("Error loading messages:",V),f(V.message||"Failed to load messages")}finally{l(!1)}},[n,x]),b=m.useCallback(async M=>{if(i.length!==0){l(!0),f(null);try{const V=i[i.length-1],I=await Wh(M,50,V.createdAt);if("error"in I)throw new Error(I.error.message);o(E=>[...E,...I.messages])}catch(V){console.error("Error loading more messages:",V),f(V.message||"Failed to load more messages")}finally{l(!1)}}},[i]),R=m.useCallback(async M=>{l(!0),f(null);try{const V=await A0(n,M);if("error"in V)throw new Error(V.error.message);return s(V.conversation),await _(V.conversation.id),V.conversation}catch(V){return console.error("Error starting conversation:",V),f(V.message||"Failed to start conversation"),null}finally{l(!1)}},[n,_]),P=m.useCallback(async(M,V)=>{l(!0),f(null);try{V.includes(n)||V.push(n);const I=await R0(M,n,V);if("error"in I)throw new Error(I.error.message);return await y(),I.conversation}catch(I){return console.error("Error creating group:",I),f(I.message||"Failed to create group"),null}finally{l(!1)}},[n,y]),k=m.useCallback(async(M,V,I)=>{f(null);try{const E=await P0(n,M,V,I);if("error"in E)throw new Error(E.error.message);return{success:!0,message:E.message}}catch(E){return console.error("Error sending message:",E),f(E.message||"Failed to send message"),{success:!1,error:E.message}}},[n]),O=m.useCallback(async M=>{s(M),await _(M.id)},[_]);return{conversations:e,currentConversation:r,messages:i,loading:c,error:h,unreadCount:p,loadConversations:y,loadMessages:_,loadMoreMessages:b,startDirectConversation:R,createGroup:P,sendMessage:k,selectConversation:O}}var fa="Dialog",[$y,iM]=xt(fa),[ON,It]=$y(fa),By=n=>{const{__scopeDialog:e,children:t,open:r,defaultOpen:s,onOpenChange:i,modal:o=!0}=n,c=m.useRef(null),l=m.useRef(null),[h,f]=yn({prop:r,defaultProp:s??!1,onChange:i,caller:fa});return u.jsx(ON,{scope:e,triggerRef:c,contentRef:l,contentId:ct(),titleId:ct(),descriptionId:ct(),open:h,onOpenChange:f,onOpenToggle:m.useCallback(()=>f(p=>!p),[f]),modal:o,children:t})};By.displayName=fa;var Hy="DialogTrigger",zy=m.forwardRef((n,e)=>{const{__scopeDialog:t,...r}=n,s=It(Hy,t),i=ge(e,s.triggerRef);return u.jsx(se.button,{type:"button","aria-haspopup":"dialog","aria-expanded":s.open,"aria-controls":s.contentId,"data-state":Ru(s.open),...r,ref:i,onClick:z(n.onClick,s.onOpenToggle)})});zy.displayName=Hy;var Su="DialogPortal",[LN,qy]=$y(Su,{forceMount:void 0}),Wy=n=>{const{__scopeDialog:e,forceMount:t,children:r,container:s}=n,i=It(Su,e);return u.jsx(LN,{scope:e,forceMount:t,children:m.Children.map(r,o=>u.jsx(et,{present:t||i.open,children:u.jsx(Co,{asChild:!0,container:s,children:o})}))})};Wy.displayName=Su;var To="DialogOverlay",Gy=m.forwardRef((n,e)=>{const t=qy(To,n.__scopeDialog),{forceMount:r=t.forceMount,...s}=n,i=It(To,n.__scopeDialog);return i.modal?u.jsx(et,{present:r||i.open,children:u.jsx(jN,{...s,ref:e})}):null});Gy.displayName=To;var VN=So("DialogOverlay.RemoveScroll"),jN=m.forwardRef((n,e)=>{const{__scopeDialog:t,...r}=n,s=It(To,t);return u.jsx(qs,{as:VN,allowPinchZoom:!0,shards:[s.contentRef],children:u.jsx(se.div,{"data-state":Ru(s.open),...r,ref:e,style:{pointerEvents:"auto",...r.style}})})}),Xn="DialogContent",Ky=m.forwardRef((n,e)=>{const t=qy(Xn,n.__scopeDialog),{forceMount:r=t.forceMount,...s}=n,i=It(Xn,n.__scopeDialog);return u.jsx(et,{present:r||i.open,children:i.modal?u.jsx(FN,{...s,ref:e}):u.jsx(UN,{...s,ref:e})})});Ky.displayName=Xn;var FN=m.forwardRef((n,e)=>{const t=It(Xn,n.__scopeDialog),r=m.useRef(null),s=ge(e,t.contentRef,r);return m.useEffect(()=>{const i=r.current;if(i)return Ho(i)},[]),u.jsx(Yy,{...n,ref:s,trapFocus:t.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:z(n.onCloseAutoFocus,i=>{var o;i.preventDefault(),(o=t.triggerRef.current)==null||o.focus()}),onPointerDownOutside:z(n.onPointerDownOutside,i=>{const o=i.detail.originalEvent,c=o.button===0&&o.ctrlKey===!0;(o.button===2||c)&&i.preventDefault()}),onFocusOutside:z(n.onFocusOutside,i=>i.preventDefault())})}),UN=m.forwardRef((n,e)=>{const t=It(Xn,n.__scopeDialog),r=m.useRef(!1),s=m.useRef(!1);return u.jsx(Yy,{...n,ref:e,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:i=>{var o,c;(o=n.onCloseAutoFocus)==null||o.call(n,i),i.defaultPrevented||(r.current||(c=t.triggerRef.current)==null||c.focus(),i.preventDefault()),r.current=!1,s.current=!1},onInteractOutside:i=>{var l,h;(l=n.onInteractOutside)==null||l.call(n,i),i.defaultPrevented||(r.current=!0,i.detail.originalEvent.type==="pointerdown"&&(s.current=!0));const o=i.target;((h=t.triggerRef.current)==null?void 0:h.contains(o))&&i.preventDefault(),i.detail.originalEvent.type==="focusin"&&s.current&&i.preventDefault()}})}),Yy=m.forwardRef((n,e)=>{const{__scopeDialog:t,trapFocus:r,onOpenAutoFocus:s,onCloseAutoFocus:i,...o}=n,c=It(Xn,t),l=m.useRef(null),h=ge(e,l);return Bo(),u.jsxs(u.Fragment,{children:[u.jsx(Bs,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:s,onUnmountAutoFocus:i,children:u.jsx(js,{role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":Ru(c.open),...o,ref:h,onDismiss:()=>c.onOpenChange(!1)})}),u.jsxs(u.Fragment,{children:[u.jsx($N,{titleId:c.titleId}),u.jsx(HN,{contentRef:l,descriptionId:c.descriptionId})]})]})}),Au="DialogTitle",Qy=m.forwardRef((n,e)=>{const{__scopeDialog:t,...r}=n,s=It(Au,t);return u.jsx(se.h2,{id:s.titleId,...r,ref:e})});Qy.displayName=Au;var Xy="DialogDescription",Jy=m.forwardRef((n,e)=>{const{__scopeDialog:t,...r}=n,s=It(Xy,t);return u.jsx(se.p,{id:s.descriptionId,...r,ref:e})});Jy.displayName=Xy;var Zy="DialogClose",e_=m.forwardRef((n,e)=>{const{__scopeDialog:t,...r}=n,s=It(Zy,t);return u.jsx(se.button,{type:"button",...r,ref:e,onClick:z(n.onClick,()=>s.onOpenChange(!1))})});e_.displayName=Zy;function Ru(n){return n?"open":"closed"}var t_="DialogTitleWarning",[oM,n_]=$w(t_,{contentName:Xn,titleName:Au,docsSlug:"dialog"}),$N=({titleId:n})=>{const e=n_(t_),t=`\`${e.contentName}\` requires a \`${e.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${e.docsSlug}`;return m.useEffect(()=>{n&&(document.getElementById(n)||console.error(t))},[t,n]),null},BN="DialogDescriptionWarning",HN=({contentRef:n,descriptionId:e})=>{const r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${n_(BN).contentName}}.`;return m.useEffect(()=>{var i;const s=(i=n.current)==null?void 0:i.getAttribute("aria-describedby");e&&s&&(document.getElementById(e)||console.warn(r))},[r,n,e]),null},zN=By,qN=zy,WN=Wy,r_=Gy,s_=Ky,i_=Qy,o_=Jy,GN=e_;const KN=zN,YN=qN,QN=WN,a_=m.forwardRef(({className:n,...e},t)=>u.jsx(r_,{ref:t,className:oe("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",n),...e}));a_.displayName=r_.displayName;const c_=m.forwardRef(({className:n,children:e,...t},r)=>u.jsxs(QN,{children:[u.jsx(a_,{}),u.jsxs(s_,{ref:r,className:oe("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",n),...t,children:[e,u.jsxs(GN,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[u.jsx(Bw,{className:"h-4 w-4"}),u.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));c_.displayName=s_.displayName;const l_=({className:n,...e})=>u.jsx("div",{className:oe("flex flex-col space-y-1.5 text-center sm:text-left",n),...e});l_.displayName="DialogHeader";const u_=({className:n,...e})=>u.jsx("div",{className:oe("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",n),...e});u_.displayName="DialogFooter";const h_=m.forwardRef(({className:n,...e},t)=>u.jsx(i_,{ref:t,className:oe("text-lg font-semibold leading-none tracking-tight",n),...e}));h_.displayName=i_.displayName;const XN=m.forwardRef(({className:n,...e},t)=>u.jsx(o_,{ref:t,className:oe("text-sm text-muted-foreground",n),...e}));XN.displayName=o_.displayName;var JN=[" ","Enter","ArrowUp","ArrowDown"],ZN=[" ","Enter"],Jn="Select",[pa,ma,ek]=al(Jn),[Qr,aM]=xt(Jn,[ek,An]),ga=An(),[tk,Pn]=Qr(Jn),[nk,rk]=Qr(Jn),d_=n=>{const{__scopeSelect:e,children:t,open:r,defaultOpen:s,onOpenChange:i,value:o,defaultValue:c,onValueChange:l,dir:h,name:f,autoComplete:p,disabled:v,required:y,form:x}=n,_=ga(e),[b,R]=m.useState(null),[P,k]=m.useState(null),[O,M]=m.useState(!1),V=jo(h),[I,E]=yn({prop:r,defaultProp:s??!1,onChange:i,caller:Jn}),[T,S]=yn({prop:o,defaultProp:c,onChange:l,caller:Jn}),A=m.useRef(null),N=b?x||!!b.closest("form"):!0,[C,te]=m.useState(new Set),ce=Array.from(C).map(Z=>Z.props.value).join(";");return u.jsx(ko,{..._,children:u.jsxs(tk,{required:y,scope:e,trigger:b,onTriggerChange:R,valueNode:P,onValueNodeChange:k,valueNodeHasChildren:O,onValueNodeHasChildrenChange:M,contentId:ct(),value:T,onValueChange:S,open:I,onOpenChange:E,dir:V,triggerPointerDownPosRef:A,disabled:v,children:[u.jsx(pa.Provider,{scope:e,children:u.jsx(nk,{scope:n.__scopeSelect,onNativeOptionAdd:m.useCallback(Z=>{te(ue=>new Set(ue).add(Z))},[]),onNativeOptionRemove:m.useCallback(Z=>{te(ue=>{const K=new Set(ue);return K.delete(Z),K})},[]),children:t})}),N?u.jsxs(L_,{"aria-hidden":!0,required:y,tabIndex:-1,name:f,autoComplete:p,value:T,onChange:Z=>S(Z.target.value),disabled:v,form:x,children:[T===void 0?u.jsx("option",{value:""}):null,Array.from(C)]},ce):null]})})};d_.displayName=Jn;var f_="SelectTrigger",p_=m.forwardRef((n,e)=>{const{__scopeSelect:t,disabled:r=!1,...s}=n,i=ga(t),o=Pn(f_,t),c=o.disabled||r,l=ge(e,o.onTriggerChange),h=ma(t),f=m.useRef("touch"),[p,v,y]=j_(_=>{const b=h().filter(k=>!k.disabled),R=b.find(k=>k.value===o.value),P=F_(b,_,R);P!==void 0&&o.onValueChange(P.value)}),x=_=>{c||(o.onOpenChange(!0),y()),_&&(o.triggerPointerDownPosRef.current={x:Math.round(_.pageX),y:Math.round(_.pageY)})};return u.jsx($s,{asChild:!0,...i,children:u.jsx(se.button,{type:"button",role:"combobox","aria-controls":o.contentId,"aria-expanded":o.open,"aria-required":o.required,"aria-autocomplete":"none",dir:o.dir,"data-state":o.open?"open":"closed",disabled:c,"data-disabled":c?"":void 0,"data-placeholder":V_(o.value)?"":void 0,...s,ref:l,onClick:z(s.onClick,_=>{_.currentTarget.focus(),f.current!=="mouse"&&x(_)}),onPointerDown:z(s.onPointerDown,_=>{f.current=_.pointerType;const b=_.target;b.hasPointerCapture(_.pointerId)&&b.releasePointerCapture(_.pointerId),_.button===0&&_.ctrlKey===!1&&_.pointerType==="mouse"&&(x(_),_.preventDefault())}),onKeyDown:z(s.onKeyDown,_=>{const b=p.current!=="";!(_.ctrlKey||_.altKey||_.metaKey)&&_.key.length===1&&v(_.key),!(b&&_.key===" ")&&JN.includes(_.key)&&(x(),_.preventDefault())})})})});p_.displayName=f_;var m_="SelectValue",g_=m.forwardRef((n,e)=>{const{__scopeSelect:t,className:r,style:s,children:i,placeholder:o="",...c}=n,l=Pn(m_,t),{onValueNodeHasChildrenChange:h}=l,f=i!==void 0,p=ge(e,l.onValueNodeChange);return Ye(()=>{h(f)},[h,f]),u.jsx(se.span,{...c,ref:p,style:{pointerEvents:"none"},children:V_(l.value)?u.jsx(u.Fragment,{children:o}):i})});g_.displayName=m_;var sk="SelectIcon",v_=m.forwardRef((n,e)=>{const{__scopeSelect:t,children:r,...s}=n;return u.jsx(se.span,{"aria-hidden":!0,...s,ref:e,children:r||"▼"})});v_.displayName=sk;var ik="SelectPortal",y_=n=>u.jsx(Co,{asChild:!0,...n});y_.displayName=ik;var Zn="SelectContent",__=m.forwardRef((n,e)=>{const t=Pn(Zn,n.__scopeSelect),[r,s]=m.useState();if(Ye(()=>{s(new DocumentFragment)},[]),!t.open){const i=r;return i?ol.createPortal(u.jsx(w_,{scope:n.__scopeSelect,children:u.jsx(pa.Slot,{scope:n.__scopeSelect,children:u.jsx("div",{children:n.children})})}),i):null}return u.jsx(E_,{...n,ref:e})});__.displayName=Zn;var pt=10,[w_,Nn]=Qr(Zn),ok="SelectContentImpl",ak=So("SelectContent.RemoveScroll"),E_=m.forwardRef((n,e)=>{const{__scopeSelect:t,position:r="item-aligned",onCloseAutoFocus:s,onEscapeKeyDown:i,onPointerDownOutside:o,side:c,sideOffset:l,align:h,alignOffset:f,arrowPadding:p,collisionBoundary:v,collisionPadding:y,sticky:x,hideWhenDetached:_,avoidCollisions:b,...R}=n,P=Pn(Zn,t),[k,O]=m.useState(null),[M,V]=m.useState(null),I=ge(e,F=>O(F)),[E,T]=m.useState(null),[S,A]=m.useState(null),N=ma(t),[C,te]=m.useState(!1),ce=m.useRef(!1);m.useEffect(()=>{if(k)return Ho(k)},[k]),Bo();const Z=m.useCallback(F=>{const[Y,...X]=N().map(ie=>ie.ref.current),[ee]=X.slice(-1),G=document.activeElement;for(const ie of F)if(ie===G||(ie==null||ie.scrollIntoView({block:"nearest"}),ie===Y&&M&&(M.scrollTop=0),ie===ee&&M&&(M.scrollTop=M.scrollHeight),ie==null||ie.focus(),document.activeElement!==G))return},[N,M]),ue=m.useCallback(()=>Z([E,k]),[Z,E,k]);m.useEffect(()=>{C&&ue()},[C,ue]);const{onOpenChange:K,triggerPointerDownPosRef:H}=P;m.useEffect(()=>{if(k){let F={x:0,y:0};const Y=ee=>{var G,ie;F={x:Math.abs(Math.round(ee.pageX)-(((G=H.current)==null?void 0:G.x)??0)),y:Math.abs(Math.round(ee.pageY)-(((ie=H.current)==null?void 0:ie.y)??0))}},X=ee=>{F.x<=10&&F.y<=10?ee.preventDefault():k.contains(ee.target)||K(!1),document.removeEventListener("pointermove",Y),H.current=null};return H.current!==null&&(document.addEventListener("pointermove",Y),document.addEventListener("pointerup",X,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",Y),document.removeEventListener("pointerup",X,{capture:!0})}}},[k,K,H]),m.useEffect(()=>{const F=()=>K(!1);return window.addEventListener("blur",F),window.addEventListener("resize",F),()=>{window.removeEventListener("blur",F),window.removeEventListener("resize",F)}},[K]);const[le,ye]=j_(F=>{const Y=N().filter(G=>!G.disabled),X=Y.find(G=>G.ref.current===document.activeElement),ee=F_(Y,F,X);ee&&setTimeout(()=>ee.ref.current.focus())}),xe=m.useCallback((F,Y,X)=>{const ee=!ce.current&&!X;(P.value!==void 0&&P.value===Y||ee)&&(T(F),ee&&(ce.current=!0))},[P.value]),we=m.useCallback(()=>k==null?void 0:k.focus(),[k]),Ve=m.useCallback((F,Y,X)=>{const ee=!ce.current&&!X;(P.value!==void 0&&P.value===Y||ee)&&A(F)},[P.value]),Me=r==="popper"?tl:T_,B=Me===tl?{side:c,sideOffset:l,align:h,alignOffset:f,arrowPadding:p,collisionBoundary:v,collisionPadding:y,sticky:x,hideWhenDetached:_,avoidCollisions:b}:{};return u.jsx(w_,{scope:t,content:k,viewport:M,onViewportChange:V,itemRefCallback:xe,selectedItem:E,onItemLeave:we,itemTextRefCallback:Ve,focusSelectedItem:ue,selectedItemText:S,position:r,isPositioned:C,searchRef:le,children:u.jsx(qs,{as:ak,allowPinchZoom:!0,children:u.jsx(Bs,{asChild:!0,trapped:P.open,onMountAutoFocus:F=>{F.preventDefault()},onUnmountAutoFocus:z(s,F=>{var Y;(Y=P.trigger)==null||Y.focus({preventScroll:!0}),F.preventDefault()}),children:u.jsx(js,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:i,onPointerDownOutside:o,onFocusOutside:F=>F.preventDefault(),onDismiss:()=>P.onOpenChange(!1),children:u.jsx(Me,{role:"listbox",id:P.contentId,"data-state":P.open?"open":"closed",dir:P.dir,onContextMenu:F=>F.preventDefault(),...R,...B,onPlaced:()=>te(!0),ref:I,style:{display:"flex",flexDirection:"column",outline:"none",...R.style},onKeyDown:z(R.onKeyDown,F=>{const Y=F.ctrlKey||F.altKey||F.metaKey;if(F.key==="Tab"&&F.preventDefault(),!Y&&F.key.length===1&&ye(F.key),["ArrowUp","ArrowDown","Home","End"].includes(F.key)){let ee=N().filter(G=>!G.disabled).map(G=>G.ref.current);if(["ArrowUp","End"].includes(F.key)&&(ee=ee.slice().reverse()),["ArrowUp","ArrowDown"].includes(F.key)){const G=F.target,ie=ee.indexOf(G);ee=ee.slice(ie+1)}setTimeout(()=>Z(ee)),F.preventDefault()}})})})})})})});E_.displayName=ok;var ck="SelectItemAlignedPosition",T_=m.forwardRef((n,e)=>{const{__scopeSelect:t,onPlaced:r,...s}=n,i=Pn(Zn,t),o=Nn(Zn,t),[c,l]=m.useState(null),[h,f]=m.useState(null),p=ge(e,I=>f(I)),v=ma(t),y=m.useRef(!1),x=m.useRef(!0),{viewport:_,selectedItem:b,selectedItemText:R,focusSelectedItem:P}=o,k=m.useCallback(()=>{if(i.trigger&&i.valueNode&&c&&h&&_&&b&&R){const I=i.trigger.getBoundingClientRect(),E=h.getBoundingClientRect(),T=i.valueNode.getBoundingClientRect(),S=R.getBoundingClientRect();if(i.dir!=="rtl"){const G=S.left-E.left,ie=T.left-G,Te=I.left-ie,je=I.width+Te,ot=Math.max(je,E.width),tn=window.innerWidth-pt,kn=Tc(ie,[pt,Math.max(pt,tn-ot)]);c.style.minWidth=je+"px",c.style.left=kn+"px"}else{const G=E.right-S.right,ie=window.innerWidth-T.right-G,Te=window.innerWidth-I.right-ie,je=I.width+Te,ot=Math.max(je,E.width),tn=window.innerWidth-pt,kn=Tc(ie,[pt,Math.max(pt,tn-ot)]);c.style.minWidth=je+"px",c.style.right=kn+"px"}const A=v(),N=window.innerHeight-pt*2,C=_.scrollHeight,te=window.getComputedStyle(h),ce=parseInt(te.borderTopWidth,10),Z=parseInt(te.paddingTop,10),ue=parseInt(te.borderBottomWidth,10),K=parseInt(te.paddingBottom,10),H=ce+Z+C+K+ue,le=Math.min(b.offsetHeight*5,H),ye=window.getComputedStyle(_),xe=parseInt(ye.paddingTop,10),we=parseInt(ye.paddingBottom,10),Ve=I.top+I.height/2-pt,Me=N-Ve,B=b.offsetHeight/2,F=b.offsetTop+B,Y=ce+Z+F,X=H-Y;if(Y<=Ve){const G=A.length>0&&b===A[A.length-1].ref.current;c.style.bottom="0px";const ie=h.clientHeight-_.offsetTop-_.offsetHeight,Te=Math.max(Me,B+(G?we:0)+ie+ue),je=Y+Te;c.style.height=je+"px"}else{const G=A.length>0&&b===A[0].ref.current;c.style.top="0px";const Te=Math.max(Ve,ce+_.offsetTop+(G?xe:0)+B)+X;c.style.height=Te+"px",_.scrollTop=Y-Ve+_.offsetTop}c.style.margin=`${pt}px 0`,c.style.minHeight=le+"px",c.style.maxHeight=N+"px",r==null||r(),requestAnimationFrame(()=>y.current=!0)}},[v,i.trigger,i.valueNode,c,h,_,b,R,i.dir,r]);Ye(()=>k(),[k]);const[O,M]=m.useState();Ye(()=>{h&&M(window.getComputedStyle(h).zIndex)},[h]);const V=m.useCallback(I=>{I&&x.current===!0&&(k(),P==null||P(),x.current=!1)},[k,P]);return u.jsx(uk,{scope:t,contentWrapper:c,shouldExpandOnScrollRef:y,onScrollButtonChange:V,children:u.jsx("div",{ref:l,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:O},children:u.jsx(se.div,{...s,ref:p,style:{boxSizing:"border-box",maxHeight:"100%",...s.style}})})})});T_.displayName=ck;var lk="SelectPopperPosition",tl=m.forwardRef((n,e)=>{const{__scopeSelect:t,align:r="start",collisionPadding:s=pt,...i}=n,o=ga(t);return u.jsx(Do,{...o,...i,ref:e,align:r,collisionPadding:s,style:{boxSizing:"border-box",...i.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});tl.displayName=lk;var[uk,Pu]=Qr(Zn,{}),nl="SelectViewport",b_=m.forwardRef((n,e)=>{const{__scopeSelect:t,nonce:r,...s}=n,i=Nn(nl,t),o=Pu(nl,t),c=ge(e,i.onViewportChange),l=m.useRef(0);return u.jsxs(u.Fragment,{children:[u.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:r}),u.jsx(pa.Slot,{scope:t,children:u.jsx(se.div,{"data-radix-select-viewport":"",role:"presentation",...s,ref:c,style:{position:"relative",flex:1,overflow:"hidden auto",...s.style},onScroll:z(s.onScroll,h=>{const f=h.currentTarget,{contentWrapper:p,shouldExpandOnScrollRef:v}=o;if(v!=null&&v.current&&p){const y=Math.abs(l.current-f.scrollTop);if(y>0){const x=window.innerHeight-pt*2,_=parseFloat(p.style.minHeight),b=parseFloat(p.style.height),R=Math.max(_,b);if(R<x){const P=R+y,k=Math.min(x,P),O=P-k;p.style.height=k+"px",p.style.bottom==="0px"&&(f.scrollTop=O>0?O:0,p.style.justifyContent="flex-end")}}}l.current=f.scrollTop})})})]})});b_.displayName=nl;var x_="SelectGroup",[hk,dk]=Qr(x_),fk=m.forwardRef((n,e)=>{const{__scopeSelect:t,...r}=n,s=ct();return u.jsx(hk,{scope:t,id:s,children:u.jsx(se.div,{role:"group","aria-labelledby":s,...r,ref:e})})});fk.displayName=x_;var I_="SelectLabel",C_=m.forwardRef((n,e)=>{const{__scopeSelect:t,...r}=n,s=dk(I_,t);return u.jsx(se.div,{id:s.id,...r,ref:e})});C_.displayName=I_;var bo="SelectItem",[pk,S_]=Qr(bo),A_=m.forwardRef((n,e)=>{const{__scopeSelect:t,value:r,disabled:s=!1,textValue:i,...o}=n,c=Pn(bo,t),l=Nn(bo,t),h=c.value===r,[f,p]=m.useState(i??""),[v,y]=m.useState(!1),x=ge(e,P=>{var k;return(k=l.itemRefCallback)==null?void 0:k.call(l,P,r,s)}),_=ct(),b=m.useRef("touch"),R=()=>{s||(c.onValueChange(r),c.onOpenChange(!1))};if(r==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return u.jsx(pk,{scope:t,value:r,disabled:s,textId:_,isSelected:h,onItemTextChange:m.useCallback(P=>{p(k=>k||((P==null?void 0:P.textContent)??"").trim())},[]),children:u.jsx(pa.ItemSlot,{scope:t,value:r,disabled:s,textValue:f,children:u.jsx(se.div,{role:"option","aria-labelledby":_,"data-highlighted":v?"":void 0,"aria-selected":h&&v,"data-state":h?"checked":"unchecked","aria-disabled":s||void 0,"data-disabled":s?"":void 0,tabIndex:s?void 0:-1,...o,ref:x,onFocus:z(o.onFocus,()=>y(!0)),onBlur:z(o.onBlur,()=>y(!1)),onClick:z(o.onClick,()=>{b.current!=="mouse"&&R()}),onPointerUp:z(o.onPointerUp,()=>{b.current==="mouse"&&R()}),onPointerDown:z(o.onPointerDown,P=>{b.current=P.pointerType}),onPointerMove:z(o.onPointerMove,P=>{var k;b.current=P.pointerType,s?(k=l.onItemLeave)==null||k.call(l):b.current==="mouse"&&P.currentTarget.focus({preventScroll:!0})}),onPointerLeave:z(o.onPointerLeave,P=>{var k;P.currentTarget===document.activeElement&&((k=l.onItemLeave)==null||k.call(l))}),onKeyDown:z(o.onKeyDown,P=>{var O;((O=l.searchRef)==null?void 0:O.current)!==""&&P.key===" "||(ZN.includes(P.key)&&R(),P.key===" "&&P.preventDefault())})})})})});A_.displayName=bo;var _s="SelectItemText",R_=m.forwardRef((n,e)=>{const{__scopeSelect:t,className:r,style:s,...i}=n,o=Pn(_s,t),c=Nn(_s,t),l=S_(_s,t),h=rk(_s,t),[f,p]=m.useState(null),v=ge(e,R=>p(R),l.onItemTextChange,R=>{var P;return(P=c.itemTextRefCallback)==null?void 0:P.call(c,R,l.value,l.disabled)}),y=f==null?void 0:f.textContent,x=m.useMemo(()=>u.jsx("option",{value:l.value,disabled:l.disabled,children:y},l.value),[l.disabled,l.value,y]),{onNativeOptionAdd:_,onNativeOptionRemove:b}=h;return Ye(()=>(_(x),()=>b(x)),[_,b,x]),u.jsxs(u.Fragment,{children:[u.jsx(se.span,{id:l.textId,...i,ref:v}),l.isSelected&&o.valueNode&&!o.valueNodeHasChildren?ol.createPortal(i.children,o.valueNode):null]})});R_.displayName=_s;var P_="SelectItemIndicator",N_=m.forwardRef((n,e)=>{const{__scopeSelect:t,...r}=n;return S_(P_,t).isSelected?u.jsx(se.span,{"aria-hidden":!0,...r,ref:e}):null});N_.displayName=P_;var rl="SelectScrollUpButton",k_=m.forwardRef((n,e)=>{const t=Nn(rl,n.__scopeSelect),r=Pu(rl,n.__scopeSelect),[s,i]=m.useState(!1),o=ge(e,r.onScrollButtonChange);return Ye(()=>{if(t.viewport&&t.isPositioned){let c=function(){const h=l.scrollTop>0;i(h)};const l=t.viewport;return c(),l.addEventListener("scroll",c),()=>l.removeEventListener("scroll",c)}},[t.viewport,t.isPositioned]),s?u.jsx(M_,{...n,ref:o,onAutoScroll:()=>{const{viewport:c,selectedItem:l}=t;c&&l&&(c.scrollTop=c.scrollTop-l.offsetHeight)}}):null});k_.displayName=rl;var sl="SelectScrollDownButton",D_=m.forwardRef((n,e)=>{const t=Nn(sl,n.__scopeSelect),r=Pu(sl,n.__scopeSelect),[s,i]=m.useState(!1),o=ge(e,r.onScrollButtonChange);return Ye(()=>{if(t.viewport&&t.isPositioned){let c=function(){const h=l.scrollHeight-l.clientHeight,f=Math.ceil(l.scrollTop)<h;i(f)};const l=t.viewport;return c(),l.addEventListener("scroll",c),()=>l.removeEventListener("scroll",c)}},[t.viewport,t.isPositioned]),s?u.jsx(M_,{...n,ref:o,onAutoScroll:()=>{const{viewport:c,selectedItem:l}=t;c&&l&&(c.scrollTop=c.scrollTop+l.offsetHeight)}}):null});D_.displayName=sl;var M_=m.forwardRef((n,e)=>{const{__scopeSelect:t,onAutoScroll:r,...s}=n,i=Nn("SelectScrollButton",t),o=m.useRef(null),c=ma(t),l=m.useCallback(()=>{o.current!==null&&(window.clearInterval(o.current),o.current=null)},[]);return m.useEffect(()=>()=>l(),[l]),Ye(()=>{var f;const h=c().find(p=>p.ref.current===document.activeElement);(f=h==null?void 0:h.ref.current)==null||f.scrollIntoView({block:"nearest"})},[c]),u.jsx(se.div,{"aria-hidden":!0,...s,ref:e,style:{flexShrink:0,...s.style},onPointerDown:z(s.onPointerDown,()=>{o.current===null&&(o.current=window.setInterval(r,50))}),onPointerMove:z(s.onPointerMove,()=>{var h;(h=i.onItemLeave)==null||h.call(i),o.current===null&&(o.current=window.setInterval(r,50))}),onPointerLeave:z(s.onPointerLeave,()=>{l()})})}),mk="SelectSeparator",O_=m.forwardRef((n,e)=>{const{__scopeSelect:t,...r}=n;return u.jsx(se.div,{"aria-hidden":!0,...r,ref:e})});O_.displayName=mk;var il="SelectArrow",gk=m.forwardRef((n,e)=>{const{__scopeSelect:t,...r}=n,s=ga(t),i=Pn(il,t),o=Nn(il,t);return i.open&&o.position==="popper"?u.jsx(Mo,{...s,...r,ref:e}):null});gk.displayName=il;var vk="SelectBubbleInput",L_=m.forwardRef(({__scopeSelect:n,value:e,...t},r)=>{const s=m.useRef(null),i=ge(r,s),o=eE(e);return m.useEffect(()=>{const c=s.current;if(!c)return;const l=window.HTMLSelectElement.prototype,f=Object.getOwnPropertyDescriptor(l,"value").set;if(o!==e&&f){const p=new Event("change",{bubbles:!0});f.call(c,e),c.dispatchEvent(p)}},[o,e]),u.jsx(se.select,{...t,style:{...Hw,...t.style},ref:i,defaultValue:e})});L_.displayName=vk;function V_(n){return n===""||n===void 0}function j_(n){const e=Ze(n),t=m.useRef(""),r=m.useRef(0),s=m.useCallback(o=>{const c=t.current+o;e(c),function l(h){t.current=h,window.clearTimeout(r.current),h!==""&&(r.current=window.setTimeout(()=>l(""),1e3))}(c)},[e]),i=m.useCallback(()=>{t.current="",window.clearTimeout(r.current)},[]);return m.useEffect(()=>()=>window.clearTimeout(r.current),[]),[t,s,i]}function F_(n,e,t){const s=e.length>1&&Array.from(e).every(h=>h===e[0])?e[0]:e,i=t?n.indexOf(t):-1;let o=yk(n,Math.max(i,0));s.length===1&&(o=o.filter(h=>h!==t));const l=o.find(h=>h.textValue.toLowerCase().startsWith(s.toLowerCase()));return l!==t?l:void 0}function yk(n,e){return n.map((t,r)=>n[(e+r)%n.length])}var _k=d_,U_=p_,wk=g_,Ek=v_,Tk=y_,$_=__,bk=b_,B_=C_,H_=A_,xk=R_,Ik=N_,z_=k_,q_=D_,W_=O_;const Ck=_k,Sk=wk,G_=m.forwardRef(({className:n,children:e,...t},r)=>u.jsxs(U_,{ref:r,className:oe("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",n),...t,children:[e,u.jsx(Ek,{asChild:!0,children:u.jsx(zw,{className:"h-4 w-4 opacity-50"})})]}));G_.displayName=U_.displayName;const K_=m.forwardRef(({className:n,...e},t)=>u.jsx(z_,{ref:t,className:oe("flex cursor-default items-center justify-center py-1",n),...e,children:u.jsx(qw,{})}));K_.displayName=z_.displayName;const Y_=m.forwardRef(({className:n,...e},t)=>u.jsx(q_,{ref:t,className:oe("flex cursor-default items-center justify-center py-1",n),...e,children:u.jsx(Ww,{})}));Y_.displayName=q_.displayName;const Q_=m.forwardRef(({className:n,children:e,position:t="popper",...r},s)=>u.jsx(Tk,{children:u.jsxs($_,{ref:s,className:oe("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",n),position:t,...r,children:[u.jsx(K_,{}),u.jsx(bk,{className:oe("p-1",t==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:e}),u.jsx(Y_,{})]})}));Q_.displayName=$_.displayName;const Ak=m.forwardRef(({className:n,...e},t)=>u.jsx(B_,{ref:t,className:oe("px-2 py-1.5 text-sm font-semibold",n),...e}));Ak.displayName=B_.displayName;const X_=m.forwardRef(({className:n,children:e,...t},r)=>u.jsxs(H_,{ref:r,className:oe("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n),...t,children:[u.jsx("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:u.jsx(Ik,{children:u.jsx(Xf,{className:"h-4 w-4"})})}),u.jsx(xk,{children:e})]}));X_.displayName=H_.displayName;const Rk=m.forwardRef(({className:n,...e},t)=>u.jsx(W_,{ref:t,className:oe("-mx-1 my-1 h-px bg-muted",n),...e}));Rk.displayName=W_.displayName;function dt(n){const e=Object.prototype.toString.call(n);return n instanceof Date||typeof n=="object"&&e==="[object Date]"?new n.constructor(+n):typeof n=="number"||e==="[object Number]"||typeof n=="string"||e==="[object String]"?new Date(n):new Date(NaN)}function en(n,e){return n instanceof Date?new n.constructor(e):new Date(e)}function Pk(n,e){const t=dt(n);return isNaN(e)?en(n,NaN):(e&&t.setDate(t.getDate()+e),t)}const J_=6048e5,Nk=864e5;let kk={};function va(){return kk}function er(n,e){var c,l,h,f;const t=va(),r=(e==null?void 0:e.weekStartsOn)??((l=(c=e==null?void 0:e.locale)==null?void 0:c.options)==null?void 0:l.weekStartsOn)??t.weekStartsOn??((f=(h=t.locale)==null?void 0:h.options)==null?void 0:f.weekStartsOn)??0,s=dt(n),i=s.getDay(),o=(i<r?7:0)+i-r;return s.setDate(s.getDate()-o),s.setHours(0,0,0,0),s}function xo(n){return er(n,{weekStartsOn:1})}function Z_(n){const e=dt(n),t=e.getFullYear(),r=en(n,0);r.setFullYear(t+1,0,4),r.setHours(0,0,0,0);const s=xo(r),i=en(n,0);i.setFullYear(t,0,4),i.setHours(0,0,0,0);const o=xo(i);return e.getTime()>=s.getTime()?t+1:e.getTime()>=o.getTime()?t:t-1}function Io(n){const e=dt(n);return e.setHours(0,0,0,0),e}function Hf(n){const e=dt(n),t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+n-+t}function Dk(n,e){const t=Io(n),r=Io(e),s=+t-Hf(t),i=+r-Hf(r);return Math.round((s-i)/Nk)}function Mk(n){const e=Z_(n),t=en(n,0);return t.setFullYear(e,0,4),t.setHours(0,0,0,0),xo(t)}function Nu(n){return en(n,Date.now())}function ew(n,e){const t=Io(n),r=Io(e);return+t==+r}function Ok(n){return n instanceof Date||typeof n=="object"&&Object.prototype.toString.call(n)==="[object Date]"}function Lk(n){if(!Ok(n)&&typeof n!="number")return!1;const e=dt(n);return!isNaN(Number(e))}function Vk(n){const e=dt(n),t=en(n,0);return t.setFullYear(e.getFullYear(),0,1),t.setHours(0,0,0,0),t}const jk={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Fk=(n,e,t)=>{let r;const s=jk[n];return typeof s=="string"?r=s:e===1?r=s.one:r=s.other.replace("{{count}}",e.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+r:r+" ago":r};function fc(n){return(e={})=>{const t=e.width?String(e.width):n.defaultWidth;return n.formats[t]||n.formats[n.defaultWidth]}}const Uk={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},$k={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Bk={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Hk={date:fc({formats:Uk,defaultWidth:"full"}),time:fc({formats:$k,defaultWidth:"full"}),dateTime:fc({formats:Bk,defaultWidth:"full"})},zk={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},qk=(n,e,t,r)=>zk[n];function hs(n){return(e,t)=>{const r=t!=null&&t.context?String(t.context):"standalone";let s;if(r==="formatting"&&n.formattingValues){const o=n.defaultFormattingWidth||n.defaultWidth,c=t!=null&&t.width?String(t.width):o;s=n.formattingValues[c]||n.formattingValues[o]}else{const o=n.defaultWidth,c=t!=null&&t.width?String(t.width):n.defaultWidth;s=n.values[c]||n.values[o]}const i=n.argumentCallback?n.argumentCallback(e):e;return s[i]}}const Wk={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Gk={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Kk={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Yk={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Qk={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Xk={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Jk=(n,e)=>{const t=Number(n),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},Zk={ordinalNumber:Jk,era:hs({values:Wk,defaultWidth:"wide"}),quarter:hs({values:Gk,defaultWidth:"wide",argumentCallback:n=>n-1}),month:hs({values:Kk,defaultWidth:"wide"}),day:hs({values:Yk,defaultWidth:"wide"}),dayPeriod:hs({values:Qk,defaultWidth:"wide",formattingValues:Xk,defaultFormattingWidth:"wide"})};function ds(n){return(e,t={})=>{const r=t.width,s=r&&n.matchPatterns[r]||n.matchPatterns[n.defaultMatchWidth],i=e.match(s);if(!i)return null;const o=i[0],c=r&&n.parsePatterns[r]||n.parsePatterns[n.defaultParseWidth],l=Array.isArray(c)?tD(c,p=>p.test(o)):eD(c,p=>p.test(o));let h;h=n.valueCallback?n.valueCallback(l):l,h=t.valueCallback?t.valueCallback(h):h;const f=e.slice(o.length);return{value:h,rest:f}}}function eD(n,e){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)&&e(n[t]))return t}function tD(n,e){for(let t=0;t<n.length;t++)if(e(n[t]))return t}function nD(n){return(e,t={})=>{const r=e.match(n.matchPattern);if(!r)return null;const s=r[0],i=e.match(n.parsePattern);if(!i)return null;let o=n.valueCallback?n.valueCallback(i[0]):i[0];o=t.valueCallback?t.valueCallback(o):o;const c=e.slice(s.length);return{value:o,rest:c}}}const rD=/^(\d+)(th|st|nd|rd)?/i,sD=/\d+/i,iD={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},oD={any:[/^b/i,/^(a|c)/i]},aD={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},cD={any:[/1/i,/2/i,/3/i,/4/i]},lD={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},uD={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},hD={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},dD={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},fD={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},pD={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},mD={ordinalNumber:nD({matchPattern:rD,parsePattern:sD,valueCallback:n=>parseInt(n,10)}),era:ds({matchPatterns:iD,defaultMatchWidth:"wide",parsePatterns:oD,defaultParseWidth:"any"}),quarter:ds({matchPatterns:aD,defaultMatchWidth:"wide",parsePatterns:cD,defaultParseWidth:"any",valueCallback:n=>n+1}),month:ds({matchPatterns:lD,defaultMatchWidth:"wide",parsePatterns:uD,defaultParseWidth:"any"}),day:ds({matchPatterns:hD,defaultMatchWidth:"wide",parsePatterns:dD,defaultParseWidth:"any"}),dayPeriod:ds({matchPatterns:fD,defaultMatchWidth:"any",parsePatterns:pD,defaultParseWidth:"any"})},gD={code:"en-US",formatDistance:Fk,formatLong:Hk,formatRelative:qk,localize:Zk,match:mD,options:{weekStartsOn:0,firstWeekContainsDate:1}};function vD(n){const e=dt(n);return Dk(e,Vk(e))+1}function yD(n){const e=dt(n),t=+xo(e)-+Mk(e);return Math.round(t/J_)+1}function tw(n,e){var f,p,v,y;const t=dt(n),r=t.getFullYear(),s=va(),i=(e==null?void 0:e.firstWeekContainsDate)??((p=(f=e==null?void 0:e.locale)==null?void 0:f.options)==null?void 0:p.firstWeekContainsDate)??s.firstWeekContainsDate??((y=(v=s.locale)==null?void 0:v.options)==null?void 0:y.firstWeekContainsDate)??1,o=en(n,0);o.setFullYear(r+1,0,i),o.setHours(0,0,0,0);const c=er(o,e),l=en(n,0);l.setFullYear(r,0,i),l.setHours(0,0,0,0);const h=er(l,e);return t.getTime()>=c.getTime()?r+1:t.getTime()>=h.getTime()?r:r-1}function _D(n,e){var c,l,h,f;const t=va(),r=(e==null?void 0:e.firstWeekContainsDate)??((l=(c=e==null?void 0:e.locale)==null?void 0:c.options)==null?void 0:l.firstWeekContainsDate)??t.firstWeekContainsDate??((f=(h=t.locale)==null?void 0:h.options)==null?void 0:f.firstWeekContainsDate)??1,s=tw(n,e),i=en(n,0);return i.setFullYear(s,0,r),i.setHours(0,0,0,0),er(i,e)}function wD(n,e){const t=dt(n),r=+er(t,e)-+_D(t,e);return Math.round(r/J_)+1}function _e(n,e){const t=n<0?"-":"",r=Math.abs(n).toString().padStart(e,"0");return t+r}const an={y(n,e){const t=n.getFullYear(),r=t>0?t:1-t;return _e(e==="yy"?r%100:r,e.length)},M(n,e){const t=n.getMonth();return e==="M"?String(t+1):_e(t+1,2)},d(n,e){return _e(n.getDate(),e.length)},a(n,e){const t=n.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(n,e){return _e(n.getHours()%12||12,e.length)},H(n,e){return _e(n.getHours(),e.length)},m(n,e){return _e(n.getMinutes(),e.length)},s(n,e){return _e(n.getSeconds(),e.length)},S(n,e){const t=e.length,r=n.getMilliseconds(),s=Math.trunc(r*Math.pow(10,t-3));return _e(s,e.length)}},fr={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},zf={G:function(n,e,t){const r=n.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(r,{width:"abbreviated"});case"GGGGG":return t.era(r,{width:"narrow"});case"GGGG":default:return t.era(r,{width:"wide"})}},y:function(n,e,t){if(e==="yo"){const r=n.getFullYear(),s=r>0?r:1-r;return t.ordinalNumber(s,{unit:"year"})}return an.y(n,e)},Y:function(n,e,t,r){const s=tw(n,r),i=s>0?s:1-s;if(e==="YY"){const o=i%100;return _e(o,2)}return e==="Yo"?t.ordinalNumber(i,{unit:"year"}):_e(i,e.length)},R:function(n,e){const t=Z_(n);return _e(t,e.length)},u:function(n,e){const t=n.getFullYear();return _e(t,e.length)},Q:function(n,e,t){const r=Math.ceil((n.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return _e(r,2);case"Qo":return t.ordinalNumber(r,{unit:"quarter"});case"QQQ":return t.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(r,{width:"wide",context:"formatting"})}},q:function(n,e,t){const r=Math.ceil((n.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return _e(r,2);case"qo":return t.ordinalNumber(r,{unit:"quarter"});case"qqq":return t.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(r,{width:"wide",context:"standalone"})}},M:function(n,e,t){const r=n.getMonth();switch(e){case"M":case"MM":return an.M(n,e);case"Mo":return t.ordinalNumber(r+1,{unit:"month"});case"MMM":return t.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(r,{width:"wide",context:"formatting"})}},L:function(n,e,t){const r=n.getMonth();switch(e){case"L":return String(r+1);case"LL":return _e(r+1,2);case"Lo":return t.ordinalNumber(r+1,{unit:"month"});case"LLL":return t.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(r,{width:"wide",context:"standalone"})}},w:function(n,e,t,r){const s=wD(n,r);return e==="wo"?t.ordinalNumber(s,{unit:"week"}):_e(s,e.length)},I:function(n,e,t){const r=yD(n);return e==="Io"?t.ordinalNumber(r,{unit:"week"}):_e(r,e.length)},d:function(n,e,t){return e==="do"?t.ordinalNumber(n.getDate(),{unit:"date"}):an.d(n,e)},D:function(n,e,t){const r=vD(n);return e==="Do"?t.ordinalNumber(r,{unit:"dayOfYear"}):_e(r,e.length)},E:function(n,e,t){const r=n.getDay();switch(e){case"E":case"EE":case"EEE":return t.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(r,{width:"short",context:"formatting"});case"EEEE":default:return t.day(r,{width:"wide",context:"formatting"})}},e:function(n,e,t,r){const s=n.getDay(),i=(s-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return _e(i,2);case"eo":return t.ordinalNumber(i,{unit:"day"});case"eee":return t.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(s,{width:"short",context:"formatting"});case"eeee":default:return t.day(s,{width:"wide",context:"formatting"})}},c:function(n,e,t,r){const s=n.getDay(),i=(s-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return _e(i,e.length);case"co":return t.ordinalNumber(i,{unit:"day"});case"ccc":return t.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(s,{width:"narrow",context:"standalone"});case"cccccc":return t.day(s,{width:"short",context:"standalone"});case"cccc":default:return t.day(s,{width:"wide",context:"standalone"})}},i:function(n,e,t){const r=n.getDay(),s=r===0?7:r;switch(e){case"i":return String(s);case"ii":return _e(s,e.length);case"io":return t.ordinalNumber(s,{unit:"day"});case"iii":return t.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(r,{width:"short",context:"formatting"});case"iiii":default:return t.day(r,{width:"wide",context:"formatting"})}},a:function(n,e,t){const s=n.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(n,e,t){const r=n.getHours();let s;switch(r===12?s=fr.noon:r===0?s=fr.midnight:s=r/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(n,e,t){const r=n.getHours();let s;switch(r>=17?s=fr.evening:r>=12?s=fr.afternoon:r>=4?s=fr.morning:s=fr.night,e){case"B":case"BB":case"BBB":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(n,e,t){if(e==="ho"){let r=n.getHours()%12;return r===0&&(r=12),t.ordinalNumber(r,{unit:"hour"})}return an.h(n,e)},H:function(n,e,t){return e==="Ho"?t.ordinalNumber(n.getHours(),{unit:"hour"}):an.H(n,e)},K:function(n,e,t){const r=n.getHours()%12;return e==="Ko"?t.ordinalNumber(r,{unit:"hour"}):_e(r,e.length)},k:function(n,e,t){let r=n.getHours();return r===0&&(r=24),e==="ko"?t.ordinalNumber(r,{unit:"hour"}):_e(r,e.length)},m:function(n,e,t){return e==="mo"?t.ordinalNumber(n.getMinutes(),{unit:"minute"}):an.m(n,e)},s:function(n,e,t){return e==="so"?t.ordinalNumber(n.getSeconds(),{unit:"second"}):an.s(n,e)},S:function(n,e){return an.S(n,e)},X:function(n,e,t){const r=n.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return Wf(r);case"XXXX":case"XX":return Fn(r);case"XXXXX":case"XXX":default:return Fn(r,":")}},x:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"x":return Wf(r);case"xxxx":case"xx":return Fn(r);case"xxxxx":case"xxx":default:return Fn(r,":")}},O:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+qf(r,":");case"OOOO":default:return"GMT"+Fn(r,":")}},z:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+qf(r,":");case"zzzz":default:return"GMT"+Fn(r,":")}},t:function(n,e,t){const r=Math.trunc(n.getTime()/1e3);return _e(r,e.length)},T:function(n,e,t){const r=n.getTime();return _e(r,e.length)}};function qf(n,e=""){const t=n>0?"-":"+",r=Math.abs(n),s=Math.trunc(r/60),i=r%60;return i===0?t+String(s):t+String(s)+e+_e(i,2)}function Wf(n,e){return n%60===0?(n>0?"-":"+")+_e(Math.abs(n)/60,2):Fn(n,e)}function Fn(n,e=""){const t=n>0?"-":"+",r=Math.abs(n),s=_e(Math.trunc(r/60),2),i=_e(r%60,2);return t+s+e+i}const Gf=(n,e)=>{switch(n){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},nw=(n,e)=>{switch(n){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},ED=(n,e)=>{const t=n.match(/(P+)(p+)?/)||[],r=t[1],s=t[2];if(!s)return Gf(n,e);let i;switch(r){case"P":i=e.dateTime({width:"short"});break;case"PP":i=e.dateTime({width:"medium"});break;case"PPP":i=e.dateTime({width:"long"});break;case"PPPP":default:i=e.dateTime({width:"full"});break}return i.replace("{{date}}",Gf(r,e)).replace("{{time}}",nw(s,e))},TD={p:nw,P:ED},bD=/^D+$/,xD=/^Y+$/,ID=["D","DD","YY","YYYY"];function CD(n){return bD.test(n)}function SD(n){return xD.test(n)}function AD(n,e,t){const r=RD(n,e,t);if(console.warn(r),ID.includes(n))throw new RangeError(r)}function RD(n,e,t){const r=n[0]==="Y"?"years":"days of the month";return`Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${e}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const PD=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ND=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,kD=/^'([^]*?)'?$/,DD=/''/g,MD=/[a-zA-Z]/;function fs(n,e,t){var f,p,v,y,x,_,b,R;const r=va(),s=(t==null?void 0:t.locale)??r.locale??gD,i=(t==null?void 0:t.firstWeekContainsDate)??((p=(f=t==null?void 0:t.locale)==null?void 0:f.options)==null?void 0:p.firstWeekContainsDate)??r.firstWeekContainsDate??((y=(v=r.locale)==null?void 0:v.options)==null?void 0:y.firstWeekContainsDate)??1,o=(t==null?void 0:t.weekStartsOn)??((_=(x=t==null?void 0:t.locale)==null?void 0:x.options)==null?void 0:_.weekStartsOn)??r.weekStartsOn??((R=(b=r.locale)==null?void 0:b.options)==null?void 0:R.weekStartsOn)??0,c=dt(n);if(!Lk(c))throw new RangeError("Invalid time value");let l=e.match(ND).map(P=>{const k=P[0];if(k==="p"||k==="P"){const O=TD[k];return O(P,s.formatLong)}return P}).join("").match(PD).map(P=>{if(P==="''")return{isToken:!1,value:"'"};const k=P[0];if(k==="'")return{isToken:!1,value:OD(P)};if(zf[k])return{isToken:!0,value:P};if(k.match(MD))throw new RangeError("Format string contains an unescaped latin alphabet character `"+k+"`");return{isToken:!1,value:P}});s.localize.preprocessor&&(l=s.localize.preprocessor(c,l));const h={firstWeekContainsDate:i,weekStartsOn:o,locale:s};return l.map(P=>{if(!P.isToken)return P.value;const k=P.value;(!(t!=null&&t.useAdditionalWeekYearTokens)&&SD(k)||!(t!=null&&t.useAdditionalDayOfYearTokens)&&CD(k))&&AD(k,e,String(n));const O=zf[k[0]];return O(c,k,s.localize,h)}).join("")}function OD(n){const e=n.match(kD);return e?e[1].replace(DD,"'"):n}function LD(n,e,t){const r=er(n,t),s=er(e,t);return+r==+s}function Kf(n,e){return LD(n,Nu(n),e)}function pc(n){return ew(n,Nu(n))}function VD(n,e){return Pk(n,-e)}function mc(n){return ew(n,VD(Nu(n),1))}const jD=async()=>{try{const{data:n,error:e}={data:[],error:null};return{users:n.map(r=>({id:r.id,email:r.email,name:r.name,role:r.role,created_at:r.created_at,updated_at:r.updated_at,is_active:r.is_active}))}}catch(n){console.error(n)}},FD=async n=>{try{const{data:e,error:t}={data:[],error:null};return{users:e.map(s=>({id:s.id,email:s.email,name:s.name,role:s.role,created_at:s.created_at,updated_at:s.updated_at,is_active:s.is_active}))}}catch(e){console.error(e)}},UD=async(n,e)=>{try{const t={};e.fullName!==void 0&&(t.full_name=e.fullName),e.avatarUrl!==void 0&&(t.avatar_url=e.avatarUrl),e.role!==void 0&&(t.role=e.role);const{data:r,error:s}={data:t,error:null};return{user:{id:r.id,email:r.email,fullName:r.full_name,avatarUrl:r.avatar_url,role:r.role,createdAt:r.created_at,updatedAt:r.updated_at}}}catch(t){console.error(t)}},$D=async n=>{try{const{error:e}={error:null},{error:t}={error:null};return{success:!0}}catch(e){console.error(e)}};function BD(n){const[e,t]=m.useState([]),[r,s]=m.useState(!0),[i,o]=m.useState(null),[c,l]=m.useState(n),h=m.useCallback(async()=>{s(!0),o(null);try{let y;if(c?y=await FD(c):y=await jD(),"error"in y)throw new Error(y.error.message);t(y.users)}catch(y){console.error("Error loading users:",y),o(y.message||"Failed to load users")}finally{s(!1)}},[c]);m.useEffect(()=>{h()},[h]);const f=m.useCallback(async(y,x)=>{s(!0),o(null);try{const _=await UD(y,x);if("error"in _)throw new Error(_.error.message);return t(b=>b.map(R=>R.id===y?_.user:R)),{success:!0,user:_.user}}catch(_){return o(_.message||"Failed to update user"),{success:!1,error:_.message}}finally{s(!1)}},[]),p=m.useCallback(async y=>{s(!0),o(null);try{const x=await $D(y);if("error"in x)throw new Error(x.error.message);return t(_=>_.filter(b=>b.id!==y)),{success:!0}}catch(x){return o(x.message||"Failed to delete user"),{success:!1,error:x.message}}finally{s(!1)}},[]),v=m.useCallback(y=>{l(y)},[]);return{users:e,loading:r,error:i,loadUsers:h,updateUser:f,deleteUser:p,changeRole:v,currentRole:c}}const rw=({className:n="",onClose:e,initialConversation:t,standalone:r=!1})=>{const{user:s}=Fs(),i=(s==null?void 0:s.id)||"",{conversations:o,currentConversation:c,messages:l,unreadCount:h,loadConversations:f,startDirectConversation:p,createGroup:v,sendMessage:y,selectConversation:x}=MN(i),[_,b]=m.useState(""),[R,P]=m.useState(""),[k,O]=m.useState(!1),[M,V]=m.useState(""),[I,E]=m.useState([]),[T,S]=m.useState(!0),[A,N]=m.useState(null),C=m.useRef(null),{users:te}=BD();m.useEffect(()=>{t&&(x(t),S(!1))},[t,x]),m.useEffect(()=>{var B;(B=C.current)==null||B.scrollIntoView({behavior:"smooth"})},[l]);const ce=o.filter(B=>{var F;if(R)if(B.isGroup){if(!((F=B.name)!=null&&F.toLowerCase().includes(R.toLowerCase())))return!1}else{const Y=B.participants.find(X=>X.id!==i);if(!(Y!=null&&Y.name.toLowerCase().includes(R.toLowerCase())))return!1}return A==="unread"?!1:A==="groups"?B.isGroup:A==="direct"?!B.isGroup:!0}),Z=ce.reduce((B,F)=>{if(!F.lastMessage){const G=B["No messages"]||[];return{...B,"No messages":[...G,F]}}const Y=new Date(F.lastMessage.createdAt);let X;pc(Y)?X="Today":mc(Y)?X="Yesterday":Kf(Y)?X="This Week":X="Older";const ee=B[X]||[];return{...B,[X]:[...ee,F]}},{}),ue=async B=>{B.preventDefault(),!(!_.trim()||!c)&&(await y(_,c.id),b(""))},K=async()=>{if(!M.trim()||I.length===0)return;await v(M,I)&&(O(!1),V(""),E([]),await f())},H=B=>{if(B.isGroup)return B.name||"Group Chat";const F=B.participants.find(Y=>Y.id!==i);return(F==null?void 0:F.name)||"Chat"},le=B=>{if(B.isGroup)return null;const F=B.participants.find(Y=>Y.id!==i);return F==null?void 0:F.avatar},ye=B=>B.split(" ").map(F=>F[0]).join("").toUpperCase(),xe=B=>{const F=new Date(B);return pc(F)?fs(F,"h:mm a"):mc(F)?"Yesterday":Kf(F)?fs(F,"EEEE"):fs(F,"MMM d")},we=B=>{const F=new Date(B);return fs(F,"h:mm a")},Ve=()=>u.jsxs("div",{className:"flex flex-col h-full bg-background",children:[u.jsxs("div",{className:"p-4 border-b",children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsx("h2",{className:"text-xl font-bold tracking-tight",children:"Messages"}),h>0&&u.jsx(Qp,{className:"bg-teal-600 hover:bg-teal-700 transition-colors shadow-sm",children:h})]}),u.jsxs("div",{className:"relative",children:[u.jsx(gc,{className:"absolute left-2 top-3 h-4 w-4 text-muted-foreground"}),u.jsx(Mi,{placeholder:"Search conversations...",className:"pl-8 transition-all focus-visible:ring-teal-500",value:R,onChange:B=>P(B.target.value)})]})]}),u.jsxs("div",{className:"flex items-center justify-between p-2 border-b",children:[u.jsxs("div",{className:"flex space-x-1 overflow-x-auto pb-1 scrollbar-hide",children:[u.jsx(Ee,{variant:A===null?"default":"outline",size:"sm",className:"text-xs rounded-full",onClick:()=>N(null),children:"All"}),u.jsx(Ee,{variant:A==="unread"?"default":"outline",size:"sm",className:"text-xs rounded-full",onClick:()=>N("unread"),children:"Unread"}),u.jsx(Ee,{variant:A==="groups"?"default":"outline",size:"sm",className:"text-xs rounded-full",onClick:()=>N("groups"),children:"Groups"}),u.jsx(Ee,{variant:A==="direct"?"default":"outline",size:"sm",className:"text-xs rounded-full",onClick:()=>N("direct"),children:"Direct"})]}),u.jsxs(KN,{open:k,onOpenChange:O,children:[u.jsx(YN,{asChild:!0,children:u.jsx(mt,{children:u.jsxs(gt,{children:[u.jsx(vt,{asChild:!0,children:u.jsx(Ee,{variant:"ghost",size:"icon",className:"rounded-full",children:u.jsx(vE,{className:"h-5 w-5"})})}),u.jsx(at,{children:"New conversation"})]})})}),u.jsxs(c_,{children:[u.jsx(l_,{children:u.jsx(h_,{children:"Create New Group"})}),u.jsxs("div",{className:"grid gap-4 py-4",children:[u.jsxs("div",{className:"grid gap-2",children:[u.jsx(Fa,{htmlFor:"group-name",children:"Group Name"}),u.jsx(Mi,{id:"group-name",placeholder:"Enter group name",value:M,onChange:B=>V(B.target.value)})]}),u.jsxs("div",{className:"grid gap-2",children:[u.jsx(Fa,{children:"Select Participants"}),u.jsx(ws,{className:"h-[200px] border rounded-md p-2",children:te.filter(B=>B.id!==i).map(B=>u.jsxs("div",{className:"flex items-center space-x-2 p-2 hover:bg-muted rounded-md",children:[u.jsx("input",{type:"checkbox",id:`user-${B.id}`,checked:I.includes(B.id),onChange:F=>{F.target.checked?E([...I,B.id]):E(I.filter(Y=>Y!==B.id))},className:"rounded text-primary"}),u.jsx(Un,{className:"h-8 w-8",children:B.avatarUrl?u.jsx($n,{src:B.avatarUrl}):u.jsx(Bn,{children:ye(B.fullName||"User")})}),u.jsx(Fa,{htmlFor:`user-${B.id}`,className:"cursor-pointer",children:B.fullName})]},B.id))})]})]}),u.jsxs(u_,{children:[u.jsx(Ee,{variant:"outline",onClick:()=>O(!1),children:"Cancel"}),u.jsx(Ee,{onClick:K,children:"Create Group"})]})]})]})]}),u.jsx(ws,{className:"flex-1",children:ce.length===0?u.jsx("div",{className:"p-4 text-center text-muted-foreground",children:R?"No conversations found":"No conversations yet. Start a new chat!"}):Object.entries(Z).map(([B,F])=>u.jsxs("div",{className:"mb-2",children:[u.jsx("div",{className:"px-4 py-2 text-xs font-medium text-muted-foreground",children:B}),F.map(Y=>{const X=H(Y),ee=le(Y),G=Y.lastMessage;return u.jsx("div",{className:`p-3 hover:bg-muted/50 cursor-pointer transition-colors ${(c==null?void 0:c.id)===Y.id?"bg-muted":""}`,onClick:()=>{x(Y),r||S(!1)},children:u.jsxs("div",{className:"flex items-center space-x-3",children:[Y.isGroup?u.jsx("div",{className:"h-10 w-10 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center",children:u.jsx(yr,{className:"h-5 w-5 text-teal-600 dark:text-teal-400"})}):u.jsx(Un,{className:"h-10 w-10 border",children:ee?u.jsx($n,{src:ee}):u.jsx(Bn,{className:"bg-gradient-to-br from-teal-400 to-blue-500 text-white",children:ye(X)})}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("p",{className:"font-medium truncate",children:X}),G&&u.jsx("span",{className:"text-xs text-muted-foreground ml-2",children:xe(G.createdAt)})]}),G&&u.jsx("p",{className:"text-sm text-muted-foreground truncate",children:G.senderId===i?u.jsxs("span",{className:"flex items-center",children:[u.jsx("span",{className:"mr-1",children:"You:"}),u.jsx("span",{className:"truncate",children:G.content})]}):u.jsx("span",{className:"truncate",children:G.content})})]}),!1]})},Y.id)})]},B))}),u.jsxs("div",{className:"p-4 border-t",children:[u.jsx("h3",{className:"text-sm font-medium mb-2",children:"Start a new conversation"}),u.jsxs(Ck,{onValueChange:B=>{B&&(p(B),r||S(!1))},children:[u.jsx(G_,{className:"w-full",children:u.jsx(Sk,{placeholder:"Select a user"})}),u.jsx(Q_,{children:te.filter(B=>B.id!==i).map(B=>u.jsx(X_,{value:B.id,children:u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx(Un,{className:"h-6 w-6",children:B.avatarUrl?u.jsx($n,{src:B.avatarUrl}):u.jsx(Bn,{className:"text-xs",children:ye(B.fullName||"User")})}),u.jsx("span",{children:B.fullName})]})},B.id))})]})]})]}),Me=()=>{if(!c)return u.jsxs("div",{className:"flex flex-col items-center justify-center h-full p-4 text-center text-muted-foreground",children:[u.jsx(Ao,{className:"h-12 w-12 mb-4 text-muted-foreground/50"}),u.jsx("h3",{className:"text-lg font-medium",children:"No conversation selected"}),u.jsx("p",{children:"Select a conversation or start a new one"})]});const B=H(c),F=le(c),Y=l.reduce((X,ee)=>{const G=new Date(ee.createdAt);let ie;pc(G)?ie="Today":mc(G)?ie="Yesterday":ie=fs(G,"MMMM d, yyyy");const Te=X[ie]||[];return{...X,[ie]:[...Te,ee]}},{});return u.jsxs("div",{className:"flex flex-col h-full bg-background",children:[u.jsxs("div",{className:"p-3 border-b flex items-center justify-between bg-background/95 backdrop-blur-sm sticky top-0 z-10",children:[u.jsxs("div",{className:"flex items-center space-x-3",children:[!r&&u.jsx(Ee,{variant:"ghost",size:"icon",onClick:()=>S(!0),className:"md:hidden",children:u.jsx(np,{className:"h-5 w-5"})}),c.isGroup?u.jsx("div",{className:"h-10 w-10 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center",children:u.jsx(yr,{className:"h-5 w-5 text-teal-600 dark:text-teal-400"})}):u.jsx(Un,{className:"h-10 w-10 border",children:F?u.jsx($n,{src:F}):u.jsx(Bn,{className:"bg-gradient-to-br from-teal-400 to-blue-500 text-white",children:ye(B)})}),u.jsxs("div",{children:[u.jsx("h3",{className:"font-medium",children:B}),c.isGroup?u.jsxs("p",{className:"text-xs text-muted-foreground",children:[c.participants.length," members"]}):u.jsx("p",{className:"text-xs text-muted-foreground",children:"Online"})]})]}),u.jsxs("div",{className:"flex items-center space-x-1",children:[u.jsx(mt,{children:u.jsxs(gt,{children:[u.jsx(vt,{asChild:!0,children:u.jsx(Ee,{variant:"ghost",size:"icon",className:"rounded-full",children:u.jsx(gE,{className:"h-4 w-4"})})}),u.jsx(at,{children:"Call"})]})}),u.jsx(mt,{children:u.jsxs(gt,{children:[u.jsx(vt,{asChild:!0,children:u.jsx(Ee,{variant:"ghost",size:"icon",className:"rounded-full",children:u.jsx(IE,{className:"h-4 w-4"})})}),u.jsx(at,{children:"Video call"})]})}),u.jsxs(pg,{children:[u.jsx(mg,{asChild:!0,children:u.jsx(Ee,{variant:"ghost",size:"icon",className:"rounded-full",children:u.jsx(lE,{className:"h-4 w-4"})})}),u.jsxs(Ol,{align:"end",children:[u.jsxs(zt,{children:[u.jsx(hE,{className:"h-4 w-4 mr-2"}),u.jsx("span",{children:"View info"})]}),u.jsxs(zt,{children:[u.jsx(TE,{className:"h-4 w-4 mr-2"}),u.jsx("span",{children:"Add to favorites"})]}),u.jsxs(zt,{children:[u.jsx(tp,{className:"h-4 w-4 mr-2"}),u.jsx("span",{children:"Mute notifications"})]}),u.jsxs(zt,{className:"text-destructive",children:[u.jsx(xE,{className:"h-4 w-4 mr-2"}),u.jsx("span",{children:"Delete conversation"})]})]})]})]})]}),u.jsx(ws,{className:"flex-1 p-4 bg-gradient-to-b from-background to-muted/20",children:u.jsxs("div",{className:"space-y-6",children:[l.length===0?u.jsxs("div",{className:"text-center text-muted-foreground py-8",children:[u.jsx("p",{children:"No messages yet"}),u.jsx("p",{className:"text-sm",children:"Start the conversation!"})]}):Object.entries(Y).map(([X,ee])=>u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{className:"relative",children:[u.jsx("div",{className:"absolute inset-0 flex items-center",children:u.jsx("span",{className:"w-full border-t"})}),u.jsx("div",{className:"relative flex justify-center text-xs",children:u.jsx("span",{className:"bg-background px-2 text-muted-foreground",children:X})})]}),ee.map((G,ie)=>{var ot;const Te=G.senderId===i,je=!Te&&(ie===0||((ot=ee[ie-1])==null?void 0:ot.senderId)!==G.senderId);return u.jsxs("div",{className:`flex ${Te?"justify-end":"justify-start"}`,children:[!Te&&u.jsx("div",{className:"w-8 mr-2 flex-shrink-0",children:je&&u.jsx(Un,{className:"h-8 w-8",children:G.senderAvatar?u.jsx($n,{src:G.senderAvatar}):u.jsx(Bn,{className:"bg-blue-500 text-white text-xs",children:ye(G.senderName||"User")})})}),u.jsxs("div",{className:`max-w-[75%] ${Te?"bg-teal-600 text-white":"bg-muted"} ${Te?"rounded-tl-2xl rounded-tr-sm rounded-br-sm rounded-bl-2xl":"rounded-tl-sm rounded-tr-2xl rounded-br-2xl rounded-bl-sm"} p-3 shadow-sm`,children:[!Te&&c.isGroup&&je&&u.jsx("p",{className:"text-xs font-medium mb-1 text-teal-600 dark:text-teal-400",children:G.senderName||"Unknown User"}),u.jsx("p",{className:"whitespace-pre-wrap break-words",children:G.content}),u.jsxs("div",{className:"flex items-center justify-end mt-1 space-x-1",children:[u.jsx("p",{className:"text-xs opacity-70",children:we(G.createdAt)}),Te&&G.read&&u.jsx(aE,{className:"h-3 w-3 text-teal-300"})]})]})]},G.id)})]},X)),u.jsx("div",{ref:C})]})}),u.jsx("div",{className:"p-3 border-t bg-background",children:u.jsxs("form",{onSubmit:ue,className:"flex items-end space-x-2",children:[u.jsxs("div",{className:"flex-1 relative",children:[u.jsx(Mi,{placeholder:"Type a message...",value:_,onChange:X=>b(X.target.value),className:"pr-10 min-h-[2.5rem] py-4",multiline:!0}),u.jsx("div",{className:"absolute right-2 bottom-2",children:u.jsx(mt,{children:u.jsxs(gt,{children:[u.jsx(vt,{asChild:!0,children:u.jsx(Ee,{type:"button",variant:"ghost",size:"icon",className:"h-6 w-6 rounded-full",children:u.jsx(EE,{className:"h-4 w-4 text-muted-foreground"})})}),u.jsx(at,{children:"Add emoji"})]})})})]}),u.jsxs("div",{className:"flex space-x-1",children:[u.jsx(mt,{children:u.jsxs(gt,{children:[u.jsx(vt,{asChild:!0,children:u.jsx(Ee,{type:"button",variant:"ghost",size:"icon",className:"rounded-full",children:u.jsx(mE,{className:"h-5 w-5 text-muted-foreground"})})}),u.jsx(at,{children:"Attach file"})]})}),u.jsx(Ee,{type:"submit",size:"icon",className:"rounded-full",disabled:!_.trim(),children:u.jsx(_E,{className:"h-5 w-5"})})]})]})})]})};return u.jsx(tE,{className:`${n} ${r?"h-full":"h-[600px] w-[350px] md:w-[450px] shadow-xl border-0"} overflow-hidden rounded-lg transition-all`,children:r?u.jsxs("div",{className:"grid md:grid-cols-3 h-full",children:[u.jsx("div",{className:`${T?"block":"hidden"} md:block border-r`,children:Ve()}),u.jsx("div",{className:`${T?"hidden":"block"} md:col-span-2`,children:Me()})]}):u.jsx("div",{className:"h-full",children:T?Ve():Me()})})},HD=({className:n=""})=>{const[e,t]=m.useState(!1);return u.jsxs("div",{className:`relative ${n}`,children:[u.jsx(Ee,{variant:e?"default":"outline",size:"icon",className:"relative rounded-full h-12 w-12 bg-background shadow-md hover:shadow-lg transition-all",onClick:()=>t(!e),children:e?u.jsx(SE,{className:"h-5 w-5"}):u.jsxs(u.Fragment,{children:[u.jsx(Ao,{className:"h-5 w-5"}),u.jsx(Xp,{className:"absolute -top-1 -right-1"})]})}),u.jsx(ep,{children:e&&u.jsx(Zf.div,{className:"absolute bottom-16 right-0 z-50",initial:{opacity:0,y:10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.95},transition:{duration:.2},children:u.jsx(rw,{onClose:()=>t(!1)})})})]})},zD=({children:n,userAvatar:e="",pageTitle:t="Dashboard"})=>{const[r,s]=m.useState(!1),[i,o]=m.useState(!1),[c,l]=m.useState(!1),h=Yf(),{user:f}=Fs();m.useEffect(()=>{o(!1)},[h.pathname]);const p=m.useCallback(()=>{s(x=>!x)},[]),v=m.useCallback(()=>{o(x=>!x)},[]),y=m.useCallback(()=>{l(x=>!x)},[]);return u.jsx(u.Fragment,{children:u.jsxs("div",{className:"flex h-screen w-full overflow-hidden bg-background",children:[i&&u.jsx("div",{className:"fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden",onClick:()=>o(!1)}),u.jsx("div",{className:oe("fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 shadow-lg",i?"translate-x-0":"-translate-x-full"),children:u.jsx(I0,{user:f,collapsed:r,onToggleCollapse:p})}),u.jsxs("div",{className:oe("flex flex-1 flex-col overflow-hidden transition-all duration-300 pr-[70px] pl-[50px]"),children:[u.jsx(EI,{title:t,onMenuToggle:v,userRole:f.role,userName:f.name,userAvatar:e,onToggleMessaging:y,messagingPanelOpen:c}),u.jsxs("div",{className:"flex flex-1 overflow-hidden grow flex-col-reverse w-full",children:[u.jsx("main",{className:"flex-1 overflow-auto p-4 md:p-6 bg-background/50 w-full",children:u.jsx("div",{className:"w-full h-full",children:n})}),c&&u.jsx("div",{className:"hidden md:block w-[450px] border-l overflow-hidden shadow-inner transition-all animate-slide-in-right h-full",children:u.jsx(rw,{standalone:!0,onClose:()=>l(!1)})})]}),u.jsx("footer",{className:"border-t py-4 text-center text-sm text-muted-foreground bg-background/90 backdrop-blur-sm",children:u.jsxs("p",{children:["© ",new Date().getFullYear()," TMS. All rights reserved."]})}),u.jsx("div",{className:"md:hidden fixed bottom-6 right-6",children:u.jsx(HD,{})})]})]})})},cM=m.memo(zD);export{lE as $,Ua as A,Qp as B,ew as C,cM as D,VD as E,Ei as F,Dk as G,Vk as H,xo as I,yD as J,wD as K,Ok as L,rw as M,QD as N,ct as O,gI as P,XD as Q,y0 as R,wE as S,$a as T,yr as U,JD as V,jo as W,SE as X,u_ as Y,pg as Z,mg as _,Oi as a,Ol as a0,zt as a1,mt as a2,gt as a3,vt as a4,at as a5,Dh as a6,Lh as a7,Un as a8,Bn as a9,gc as aa,Ao as ab,yE as ac,Nh as ad,gE as ae,lm as af,rb as ag,sb as ah,vI as b,Ag as c,Ck as d,G_ as e,fs as f,Sk as g,Q_ as h,X_ as i,oE as j,hT as k,KN as l,c_ as m,l_ as n,h_ as o,XN as p,vE as q,en as r,Pk as s,dt as t,er as u,Hf as v,J_ as w,va as x,Io as y,gD as z};
