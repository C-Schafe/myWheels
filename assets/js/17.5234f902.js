(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{160:function(t,e,n){"use strict";function o(t,e,n,o,s,i,a,r){var d,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=d):s&&(d=r?function(){s.call(this,this.$root.$options.shadowRoot)}:s),d)if(c.functional){c._injectStyles=d;var u=c.render;c.render=function(t,e){return d.call(e),u(t,e)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,d):[d]}return{exports:t,options:c}}n.d(e,"a",function(){return o})},196:function(t,e,n){},197:function(t,e,n){"use strict";var o=n(198),s=n.n(o);e.default=s.a},198:function(t,e){},199:function(t,e,n){},200:function(t,e,n){},201:function(t,e,n){"use strict";var o=n(202),s=n.n(o);e.default=s.a},202:function(t,e){},203:function(t,e,n){},204:function(t,e,n){"use strict";var o=n(205),s=n.n(o);e.default=s.a},205:function(t,e){},206:function(t,e,n){},207:function(t,e,n){},261:function(t,e,n){"use strict";var o=n(196);n.n(o).a},263:function(t,e,n){"use strict";var o=n(308),s=n(197),i=(n(264),n(160)),a=Object(i.a)(s.default,o.a,o.b,!1,null,"17db0ce9",null);a.options.__file="header.vue",e.default=a.exports},264:function(t,e,n){"use strict";var o=n(199);n.n(o).a},266:function(t,e,n){"use strict";var o=n(200);n.n(o).a},268:function(t,e,n){"use strict";var o=n(306),s=n(201),i=(n(269),n(160)),a=Object(i.a)(s.default,o.a,o.b,!1,null,"2a3e4ac8",null);a.options.__file="content.vue",e.default=a.exports},269:function(t,e,n){"use strict";var o=n(203);n.n(o).a},271:function(t,e,n){"use strict";var o=n(307),s=n(204),i=(n(272),n(160)),a=Object(i.a)(s.default,o.a,o.b,!1,null,"08993a5b",null);a.options.__file="footer.vue",e.default=a.exports},272:function(t,e,n){"use strict";var o=n(206);n.n(o).a},274:function(t,e,n){"use strict";var o=n(207);n.n(o).a},306:function(t,e,n){"use strict";var o=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"w-content"},[this._t("default")],2)},s=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return s})},307:function(t,e,n){"use strict";var o=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)},s=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return s})},308:function(t,e,n){"use strict";var o=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)},s=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return s})},311:function(t,e,n){"use strict";n.r(e);n(23),n(90),n(53),n(14),n(24);var o={data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;this.$children.forEach(function(e){"wheelsSider"===e.$options.name&&(t.layoutClass.hasSider=!0)})}},s=(n(261),n(160)),i=Object(s.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)},[],!1,null,"7cfe8c07",null);i.options.__file="layout.vue";var a=i.exports,r=n(263),d={name:"wheelsSider"},c=(n(266),Object(s.a)(d,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"sider"},[this._t("default")],2)},[],!1,null,"39e1668c",null));c.options.__file="sider.vue";var u=c.exports,l=n(268),f=n(271),v={components:{"w-layout":a,"w-header":r.default,"w-sider":u,"w-content":l.default,"w-footer":f.default},data:function(){return{content:'\n\n                <w-layout>\n                  <w-header><div class="header-demo demo">header</div></w-header>\n                  <w-content><div class="content-demo demo">content</div></w-content>\n                  <w-footer><div class="footer-demo demo">footer</div></w-footer>\n                </w-layout>\n\n                <w-layout>\n                  <w-header><div class="header-demo demo">header</div></w-header>\n                  <w-layout>\n                      <w-sider><div class="sider-demo demo">sider</div></w-sider>\n                      <w-content><div class="content-demo demo">content</div></w-content>\n                  </w-layout>\n                  <w-footer><div class="footer-demo demo">footer</div></w-footer>\n                </w-layout>\n\n                <w-layout>\n                  <w-sider><div class="sider-demo2 demo">sider</div></w-sider>\n                  <w-layout>\n                    <w-header><div class="header-demo demo">header</div></w-header>\n                    <w-layout>\n                      <w-sider><div class="sider-demo demo">sider</div></w-sider>\n                      <w-content><div class="content-demo demo">content</div></w-content>\n                    </w-layout>\n                      <w-footer><div class="footer-demo demo">footer</div></w-footer>\n                  </w-layout>\n                </w-layout>\n            '.replace(/ {8}/gm,"").trim()}}},_=(n(274),Object(s.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("w-layout",[n("w-header",[n("div",{staticClass:"header-demo demo"},[t._v("header")])]),t._v(" "),n("w-content",[n("div",{staticClass:"content-demo demo"},[t._v("content")])]),t._v(" "),n("w-footer",[n("div",{staticClass:"footer-demo demo"},[t._v("footer")])])],1),t._v(" "),n("p"),t._v(" "),n("w-layout",[n("w-header",[n("div",{staticClass:"header-demo demo"},[t._v("header")])]),t._v(" "),n("w-layout",[n("w-sider",[n("div",{staticClass:"sider-demo demo"},[t._v("sider")])]),t._v(" "),n("w-content",[n("div",{staticClass:"content-demo demo"},[t._v("content")])])],1),t._v(" "),n("w-footer",[n("div",{staticClass:"footer-demo demo"},[t._v("footer")])])],1),t._v(" "),n("p"),t._v(" "),n("w-layout",[n("w-sider",[n("div",{staticClass:"sider-demo2 demo"},[t._v("sider")])]),t._v(" "),n("w-layout",[n("w-header",[n("div",{staticClass:"header-demo demo"},[t._v("header")])]),t._v(" "),n("w-layout",[n("w-sider",[n("div",{staticClass:"sider-demo demo"},[t._v("sider")])]),t._v(" "),n("w-content",[n("div",{staticClass:"content-demo demo"},[t._v("content")])])],1),t._v(" "),n("w-footer",[n("div",{staticClass:"footer-demo demo"},[t._v("footer")])])],1)],1),t._v(" "),t._m(1),t._v(" "),n("pre",[n("code",[t._v(t._s(t.content))])])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("预览")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("代码")])])}],!1,null,"0383a0fc",null));_.options.__file="layout-demo.vue";e.default=_.exports}}]);