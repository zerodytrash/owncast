(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[69],{20014:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/upgrade",function(){return r(9103)}])},9103:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return w}});var t=r(35666),a=r.n(t),o=r(85893),u=r(67294),c=r(18357),i=r(17256),s=r(44206),l=r(58827);function f(e,n,r,t,a,o,u){try{var c=e[o](u),i=c.value}catch(s){return void r(s)}c.done?n(i):Promise.resolve(i).then(t,a)}function d(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function h(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){d(e,n,r[n])}))}return e}var v=i.Z.Title;function p(e){var n=Object.values(e),r=[{title:"Name",dataIndex:"name",key:"name",render:function(e,n){return(0,o.jsx)("a",{href:n.browser_download_url,children:e})}},{title:"Size",dataIndex:"size",key:"size",render:function(e){return"".concat((e/1024/1024).toFixed(2)," MB")}}];return(0,o.jsx)(s.Z,{dataSource:n,columns:r,rowKey:function(e){return e.id},size:"large",pagination:!1})}function w(){var e,n=(0,u.useState)({html_url:"",name:"",created_at:null,body:"",assets:[]}),r=n[0],t=n[1],i=(e=a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.Kt)();case 3:n=e.sent,t(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("==== error",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})),function(){var n=this,r=arguments;return new Promise((function(t,a){var o=e.apply(n,r);function u(e){f(o,t,a,u,c,"next",e)}function c(e){f(o,t,a,u,c,"throw",e)}u(void 0)}))});return(0,u.useEffect)((function(){i()}),[]),r?(0,o.jsxs)("div",{className:"upgrade-page",children:[(0,o.jsx)(v,{level:2,children:(0,o.jsx)("a",{href:r.html_url,children:r.name})}),(0,o.jsx)(v,{level:5,children:new Date(r.created_at).toDateString()}),(0,o.jsx)(c.Z,{children:r.body}),(0,o.jsx)("h3",{children:"Downloads"}),(0,o.jsx)(p,h({},r.assets))]}):null}}},function(e){e.O(0,[206,357,774,888,179],(function(){return n=20014,e(e.s=n);var n}));var n=e.O();_N_E=n}]);