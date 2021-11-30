(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[807],{48689:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(1413),o=t(67294),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},i=t(42135),c=function(e,n){return o.createElement(i.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:a}))};c.displayName="DeleteOutlined";var u=o.forwardRef(c)},75056:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/actions",function(){return t(16293)}])},16293:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return I}});var r=t(28520),o=t.n(r),a=t(85893),i=t(48689),c=t(44068),u=t(56516),l=t(69677),s=t(32808),d=t(26713),p=t(71577),h=t(88829),f=t(67294),v=t(78464),x=t(25964),y=t(83200),g=t(35159),m=t(19411);function w(e,n,t,r,o,a,i){try{var c=e[a](i),u=c.value}catch(l){return void t(l)}c.done?n(u):Promise.resolve(u).then(r,o)}function j(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function i(e){w(a,r,o,i,c,"next",e)}function c(e){w(a,r,o,i,c,"throw",e)}i(void 0)}))}}function k(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var b=c.Z.Title,C=c.Z.Paragraph,Z=null;function S(e){var n=e.onOk,t=e.onCancel,r=e.visible,o=(0,f.useState)(""),i=o[0],c=o[1],d=(0,f.useState)(""),p=d[0],h=d[1],v=(0,f.useState)(""),x=v[0],y=v[1],g=(0,f.useState)(""),w=g[0],j=g[1],k=(0,f.useState)(""),b=k[0],C=k[1],Z=(0,f.useState)(!1),S=Z[0],I=Z[1],E={disabled:!function(){try{if("https:"!==new URL(i).protocol)return!1}catch(e){return!1}return(0,m.Z)(i)&&""!==p}()};return(0,a.jsx)(u.Z,{title:"Create New Action",visible:r,onOk:function(){n(i,p,x,w,b,S),c(""),h(""),y(""),j(""),C(""),I(!1)},onCancel:t,okButtonProps:E,children:(0,a.jsxs)("div",{children:["Add the URL for the external action you want to present."," ",(0,a.jsx)("strong",{children:"Only HTTPS urls are supported."}),(0,a.jsx)("p",{children:(0,a.jsx)("a",{href:"https://owncast.online/docs",target:"_blank",rel:"noopener noreferrer",children:"Read more about external actions."})}),(0,a.jsx)("p",{children:(0,a.jsx)(l.Z,{value:i,required:!0,placeholder:"https://myserver.com/action (required)",onChange:function(e){return c(e.currentTarget.value.trim())},type:"url",pattern:m.a})}),(0,a.jsx)("p",{children:(0,a.jsx)(l.Z,{value:p,required:!0,placeholder:"Your action title (required)",onChange:function(e){return h(e.currentTarget.value)}})}),(0,a.jsx)("p",{children:(0,a.jsx)(l.Z,{value:x,placeholder:"Optional description",onChange:function(e){return y(e.currentTarget.value)}})}),(0,a.jsx)("p",{children:(0,a.jsx)(l.Z,{value:w,placeholder:"https://myserver.com/action/icon.png (optional)",onChange:function(e){return j(e.currentTarget.value)}})}),(0,a.jsxs)("p",{children:[(0,a.jsx)(l.Z,{type:"color",value:b,onChange:function(e){return C(e.currentTarget.value)}}),"Optional background color of the action button."]}),(0,a.jsx)(s.Z,{checked:S,defaultChecked:S,onChange:function(e){I(e.target.checked)},children:"Open in a new tab instead of within your page."})]})})}function I(){var e=(0,f.useContext)(g.aC)||{},n=e.serverConfig,t=e.setFieldInConfigState,r=n.externalActions,c=(0,f.useState)([]),u=c[0],l=c[1],s=(0,f.useState)(!1),m=s[0],w=s[1],I=(0,f.useState)(null),E=I[0],O=I[1],T=function(){O(null),Z=null,clearTimeout(Z)};function _(e){return A.apply(this,arguments)}function A(){return(A=j(o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,x.Si)({apiPath:x.os,data:{value:n},onSuccess:function(){t({fieldName:"externalActions",value:n,path:""}),O((0,y.kg)(y.zv,"Updated.")),Z=setTimeout(T,x.sI)},onError:function(e){console.log(e),O((0,y.kg)(y.Un,e)),Z=setTimeout(T,x.sI)}});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=j(o().mark((function e(n){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=k(u),r=u.findIndex((function(e){return e.url===n.url})),t.splice(r,1);try{l(t),_(t)}catch(o){console.error(o)}case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return(P=j(o().mark((function e(n,t,r,a,i,c){var s,d;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s=k(u),d=s.concat({url:n,title:t,description:r,icon:a,color:i,openExternally:c}),l(d),e.next=6,_(d);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}(0,f.useEffect)((function(){l(r||[])}),[r]);var R=[{title:"",key:"delete",render:function(e,n){return(0,a.jsx)(d.Z,{size:"middle",children:(0,a.jsx)(p.Z,{onClick:function(){return function(e){return N.apply(this,arguments)}(n)},icon:(0,a.jsx)(i.Z,{})})})}},{title:"Name",dataIndex:"title",key:"title"},{title:"Description",dataIndex:"description",key:"description"},{title:"URL",dataIndex:"url",key:"url"},{title:"Icon",dataIndex:"icon",key:"icon",render:function(e){return e?(0,a.jsx)("img",{style:{width:"2vw"},src:e,alt:""}):null}},{title:"Color",dataIndex:"color",key:"color",render:function(e){return e?(0,a.jsx)("div",{style:{backgroundColor:e,height:"30px"},children:e}):null}},{title:"Opens",dataIndex:"openExternally",key:"openExternally",render:function(e){return e?"In a new tab":"In a modal"}}];return(0,a.jsxs)("div",{children:[(0,a.jsx)(b,{children:"External Actions"}),(0,a.jsx)(C,{children:"External action URLs are 3rd party UI you can display, embedded, into your Owncast page when a user clicks on a button to launch your action."}),(0,a.jsxs)(C,{children:["Read more about how to use actions, with examples, at"," ",(0,a.jsx)("a",{href:"https://owncast.online/thirdparty/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"our documentation"}),"."]}),(0,a.jsx)(h.Z,{rowKey:function(e){return"".concat(e.title,"-").concat(e.url)},columns:R,dataSource:u,pagination:!1}),(0,a.jsx)("br",{}),(0,a.jsx)(p.Z,{type:"primary",onClick:function(){w(!0)},children:"Create New Action"}),(0,a.jsx)(v.Z,{status:E}),(0,a.jsx)(S,{visible:m,onOk:function(e,n,t,r,o,a){w(!1),function(e,n,t,r,o,a){P.apply(this,arguments)}(e,n,t,r,o,a)},onCancel:function(){w(!1)}})]})}}},function(e){e.O(0,[829,774,888,179],(function(){return n=75056,e(e.s=n);var n}));var n=e.O();_N_E=n}]);