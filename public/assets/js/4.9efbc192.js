(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{217:function(t,e,n){},218:function(t,e,n){},219:function(t,e,n){},220:function(t,e,n){},221:function(t,e,n){},222:function(t,e,n){},227:function(t,e,n){},228:function(t,e,n){},229:function(t,e,n){},230:function(t,e,n){},231:function(t,e,n){},232:function(t,e,n){},233:function(t,e,n){},234:function(t,e,n){},236:function(t,e,n){},247:function(t,e,n){"use strict";var i=n(217);n.n(i).a},250:function(t,e,n){"use strict";var i=n(218);n.n(i).a},251:function(t,e,n){"use strict";var i=n(219);n.n(i).a},257:function(t,e,n){"use strict";var i=n(220);n.n(i).a},261:function(t,e,n){"use strict";var i=n(221);n.n(i).a},262:function(t,e,n){"use strict";var i=n(222);n.n(i).a},265:function(t,e,n){"use strict";var i=n(227);n.n(i).a},266:function(t,e,n){"use strict";var i=n(228);n.n(i).a},267:function(t,e,n){"use strict";var i=n(229);n.n(i).a},268:function(t,e,n){"use strict";var i=n(230);n.n(i).a},269:function(t,e,n){"use strict";var i=n(231);n.n(i).a},270:function(t,e,n){"use strict";var i=n(232);n.n(i).a},271:function(t,e,n){"use strict";var i=n(233);n.n(i).a},272:function(t,e,n){"use strict";var i=n(234);n.n(i).a},274:function(t,e,n){"use strict";var i=n(236);n.n(i).a},284:function(t,e,n){"use strict";n.r(e);n(88);var i=n(0),a=n(246),s=n.n(a),r=n(39),o=(n(35),n(215),n(86)),l=n.n(o),u=(n(213),n(18)),c=n.n(u),p=(n(244),/#.*$/),h=/\.(md|html)$/,d=/\/$/,f=/^(https?:|mailto:|tel:)/,v=/(\.xml)/;function g(t){return decodeURI(t).replace(p,"").replace(h,"")}function m(t){return f.test(t)}function _(t){return v.test(t)}function b(t){if(m(t))return t;var e=t.match(p),n=e?e[0]:"",i=g(t);return d.test(i)||_(i)?t:i+".html"+n}function k(t,e){var n=t.hash,i=function(t){var e=t.match(p);if(e)return e[0]}(e);return(!i||n===i)&&g(t.path)===g(e)}function $(t,e,n){n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var a=e.split("/");n&&a[a.length-1]||a.pop();for(var s=t.replace(/^\//,"").split("/"),r=0;r<s.length;r++){var o=s[r];".."===o?a.pop():"."!==o&&a.push(o)}""!==a[0]&&a.unshift("");return a.join("/")}(e,n));for(var i=g(e),a=0;a<t.length;a++)if(g(t[a].path)===i)return c()({},t[a],{type:"page",path:b(e)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function C(t,e,n,i){var a=n.pages,s=n.themeConfig,r=i&&s.locales&&s.locales[i]||s;if("auto"===(t.frontmatter.sidebar||r.sidebar||s.sidebar))return function(t){var e=x(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:e.map(function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}})}]}(t);var o=r.sidebar||s.sidebar;if(o){var u=function(t,e){if(l()(e))return{base:"/",config:e};for(var n in e)if(0===(i=t.path,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(n))return{base:n,config:e[n]};var i;return{}}(e,o),p=u.base,h=u.config;return h?h.map(function(t){return function t(e,n,i,a){if("string"==typeof e)return $(n,e,i);if(l()(e))return c()($(n,e[0],i),{title:e[1]});a&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");var s=e.children||[];return{type:"group",title:e.title,children:s.map(function(e){return t(e,n,i,!0)}),collapsable:!1!==e.collapsable}}(t,a,p)}):[]}return[]}function x(t){var e;return(t=t.map(function(t){return c()({},t)})).forEach(function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(function(t){return 2===t.level})}function L(t){return c()(t,{type:t.items&&t.items.length?"links":"link"})}function w(t,e,n){var i=[];e.forEach(function(t){"group"===t.type?i.push.apply(i,Object(r.a)(t.children||[])):i.push(t)});for(var a=0;a<i.length;a++){var s=i[a];if("page"===s.type&&s.path===t.path)return i[a+n]}}var S={name:"Blog",props:["sidebarItems"],computed:{lastUpdated:function(){if(this.$page.lastUpdated){var t=new Date(this.$page.lastUpdated);return"".concat(t.toLocaleDateString(this.$lang,{year:"numeric",month:"long",day:"numeric"}),", ").concat(t.toLocaleTimeString(this.$lang))}},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,n=this.$page.frontmatter.prev;return!1===n?void 0:n?$(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,w(t,e,-1))},next:function(){var t,e,n=this.$page.frontmatter.next;return!1===n?void 0:n?$(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,w(t,e,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,i=t.docsDir,a=void 0===i?"":i,s=t.docsBranch,r=void 0===s?"master":s,o=t.docsRepo,l=void 0===o?e:o,u=g(this.$page.path);return d.test(u)?u+="README.md":u+=".md",l&&n?this.createEditLink(e,l,a,r,u):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"},publishDate:function(){return new Date(this.$frontmatter.date).toLocaleDateString(this.$lang,{year:"numeric",month:"long",day:"numeric"})}},methods:{createEditLink:function(t,e,n,i,a){return/bitbucket.org/.test(t)?(f.test(e)?e:t).replace(d,"")+"/".concat(i)+(n?"/"+n.replace(d,""):"")+a+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default"):(f.test(e)?e:"https://github.com/".concat(e)).replace(d,"")+"/edit/".concat(i)+(n?"/"+n.replace(d,""):"")+a}}},y=(n(247),n(33)),E=Object(y.a)(S,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog"},[n("div",{staticClass:"blog__header"},[n("p",{staticClass:"publish-date"},[n("time",{attrs:{datetime:t.$frontmatter.date}},[t._v(t._s(t.publishDate))])]),t._v(" "),t.$page.readingTime?n("p",[t._v("Time to read: "+t._s(t.$page.readingTime.text))]):t._e(),t._v(" "),n("h1",{staticClass:"blog__title"},[t._v(t._s(t.$page.title))])]),t._v(" "),n("Content",{staticClass:"custom"}),t._v(" "),n("div",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),n("time",{staticClass:"time",attrs:{datetime:t.$page.lastUpdated}},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,"1a5b78d0",null);E.options.__file="Blog.vue";var T=E.exports,U=n(30),O=n.n(U),I=(n(248),{props:{item:{required:!0}},computed:{link:function(){return b(this.item.link)},exact:function(){var t=this;return this.$site.locales?O()(this.$site.locales).some(function(e){return e===t.link}):"/"===this.link}},methods:{isExternal:m,isMailto:function(t){return/^mailto:/.test(t)},isTel:function(t){return/^tel:/.test(t)},isXml:_}}),N=Object(y.a)(I,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)||t.isXml(t.link)?t.isXml(t.link)?n("a",{staticClass:"nav-link",attrs:{href:t.link}},[t._v("\n  "+t._s(t.item.text)+"\n")]):n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])},[],!1,null,null,null);N.options.__file="NavLink.vue";var D=N.exports,j={components:{NavLink:D},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},P=(n(250),Object(y.a)(j,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:"hero"}}):t._e(),t._v(" "),n("h1",[t._v(t._s(t.data.heroText||t.$title||"Hello"))]),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,function(e,i){return n("div",{key:i,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])}),0):t._e(),t._v(" "),n("Content",{attrs:{custom:""}}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)},[],!1,null,null,null));P.options.__file="Home.vue";var B=P.exports;function W(t,e,n){var i=[];e.forEach(function(t){"group"===t.type?i.push.apply(i,Object(r.a)(t.children||[])):i.push(t)});for(var a=0;a<i.length;a++){var s=i[a];if("page"===s.type&&s.path===t.path)return i[a+n]}}var H={props:["sidebarItems"],computed:{lastUpdated:function(){if(this.$page.lastUpdated)return new Date(this.$page.lastUpdated).toLocaleString(this.$lang)},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,n=this.$page.frontmatter.prev;return!1===n?void 0:n?$(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,W(t,e,-1))},next:function(){var t,e,n=this.$page.frontmatter.next;return!1===n?void 0:n?$(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,W(t,e,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,i=t.docsDir,a=void 0===i?"":i,s=t.docsBranch,r=void 0===s?"master":s,o=t.docsRepo,l=void 0===o?e:o,u=g(this.$page.path);return d.test(u)?u+="README.md":u+=".md",l&&n?this.createEditLink(e,l,a,r,u):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,i,a){return/bitbucket.org/.test(t)?(f.test(e)?e:t).replace(d,"")+"/".concat(i)+(n?"/"+n.replace(d,""):"")+a+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default"):(f.test(e)?e:"https://github.com/".concat(e)).replace(d,"")+"/edit/".concat(i)+(n?"/"+n.replace(d,""):"")+a}}},M=(n(251),Object(y.a)(H,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{attrs:{custom:!1}}),t._v(" "),n("div",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null));M.options.__file="Page.vue";var A=M.exports,G=n(252),R=n.n(G),q=(n(257),Object(y.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])},[],!1,null,null,null));q.options.__file="SidebarButton.vue";var z=q.exports,X=n(281),V=n(31),F=n.n(V),J=(n(131),{props:["options"],mounted:function(){this.initialize(this.options,this.$lang)},methods:{initialize:function(t,e){F.a.all([Promise.all([n.e(0),n.e(2)]).then(n.t.bind(null,282,7)),Promise.all([n.e(0),n.e(2)]).then(n.t.bind(null,283,7))]).then(function(n){var i=Object(X.a)(n,1)[0];i=i.default;var a=t.algoliaOptions,s=void 0===a?{}:a;i(c()({},t,{inputSelector:"#algolia-search-input",algoliaOptions:c()({facetFilters:["lang:".concat(e)].concat(s.facetFilters||[])},s)}))})},update:function(t,e){this.$el.innerHTML='<input id="algolia-search-input" class="search-query">',this.initialize(t,e)}},watch:{$lang:function(t){this.update(this.options,t)},options:function(t){this.update(t,this.$lang)}}}),Y=(n(261),Object(y.a)(J,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("form",{staticClass:"algolia-search-wrapper search-box",attrs:{id:"search-form"}},[e("input",{staticClass:"search-query",attrs:{id:"algolia-search-input"}})])}],!1,null,null,null));Y.options.__file="AlgoliaSearchBox.vue";var K=Y.exports,Q={data:function(){return{query:"",focused:!1,focusIndex:0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site,n=e.pages,i=e.themeConfig.searchMaxSuggestions||5,a=this.$localePath,s=function(e){return e.title&&e.title.toLowerCase().indexOf(t)>-1},r=[],o=0;o<n.length&&!(r.length>=i);o++){var l=n[o];if(this.getPageLocalePath(l)===a)if(s(l))r.push(l);else if(l.headers)for(var u=0;u<l.headers.length&&!(r.length>=i);u++){var p=l.headers[u];s(p)&&r.push(c()({},l,{path:l.path+"#"+p.slug,header:p}))}}return r}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}},Z=(n(262),Object(y.a)(Q,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{class:{focused:t.focused},attrs:{"aria-label":"Search",autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.go(t.focusIndex)},function(e){return"button"in e||!t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?t.onUp(e):null},function(e){return"button"in e||!t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?t.onDown(e):null}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,function(e,i){return n("li",{staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){t.go(i)},mouseenter:function(e){t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])}),0):t._e()])},[],!1,null,null,null));Z.options.__file="SearchBox.vue";var tt=Z.exports,et=(n(263),{name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}}),nt=(n(265),Object(y.a)(et,function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)},[],!1,null,null,null));nt.options.__file="DropdownTransition.vue";var it=nt.exports,at={components:{NavLink:D,DropdownTransition:it},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}},st=(n(266),Object(y.a)(at,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)}),0):n("NavLink",{attrs:{item:e}})],1)}),0)])],1)},[],!1,null,null,null));st.options.__file="DropdownLink.vue";var rt={components:{NavLink:D,DropdownLink:st.exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&O()(e).length>1){var n=this.$page.path,i=this.$router.options.routes,a=this.$site.themeConfig.locales||{},s={text:this.$themeLocaleConfig.selectText||"Languages",items:O()(e).map(function(s){var r,o=e[s],l=a[s]&&a[s].label||o.lang;return o.lang===t.$lang?r=n:(r=n.replace(t.$localeConfig.path,s),i.some(function(t){return t.path===r})||(r=s)),{text:l,link:r}})};return[].concat(Object(r.a)(this.userNav),[s])}return this.userNav},userLinks:function(){return(this.nav||[]).map(function(t){return c()(L(t),{items:(t.items||[]).map(L)})})},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^\/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}},ot=(n(267),Object(y.a)(rt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)}),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()},[],!1,null,null,null));ot.options.__file="NavLinks.vue";var lt=ot.exports;function ut(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var ct={components:{SidebarButton:z,NavLinks:lt,SearchBox:tt,AlgoliaSearchBox:K},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=R()(ut(this.$el,"paddingLeft"))+R()(ut(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},pt=(n(268),Object(y.a)(ct,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:{"max-width":t.linksWrapMaxWidth+"px"}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)},[],!1,null,null,null));pt.options.__file="Navbar.vue";var ht=pt.exports;function dt(t,e,n,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n)}function ft(t,e,n,i,a){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||s>a?null:t("ul",{class:"sidebar-sub-headers"},e.map(function(e){var r=k(i,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[dt(t,n+"#"+e.slug,e.title,r),ft(t,e.children,n,i,a,s+1)])}))}var vt={functional:!0,props:["item"],render:function(t,e){var n=e.parent,i=n.$page,a=n.$site,s=n.$route,r=e.props.item,o=k(s,r.path),l="auto"===r.type?o||r.children.some(function(t){return k(s,r.basePath+"#"+t.slug)}):o,u=dt(t,r.path,r.title||r.path,l),c=null!=i.frontmatter.sidebarDepth?i.frontmatter.sidebarDepth:a.themeConfig.sidebarDepth,h=null==c?1:c,d=!!a.themeConfig.displayAllHeaders;return"auto"===r.type?[u,ft(t,r.children,r.basePath,s,h)]:(l||d)&&r.headers&&!p.test(r.path)?[u,ft(t,x(r.headers),r.path,s,h)]:u}},gt=(n(269),Object(y.a)(vt,void 0,void 0,!1,null,null,null));gt.options.__file="SidebarLink.vue";var mt=gt.exports,_t={name:"SidebarGroup",props:["item","first","open","collapsable"],components:{SidebarLink:mt,DropdownTransition:it}},bt=(n(270),Object(y.a)(_t,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-group",class:{first:t.first,collapsable:t.collapsable}},[n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("ul",{ref:"items",staticClass:"sidebar-group-items"},t._l(t.item.children,function(t){return n("li",[n("SidebarLink",{attrs:{item:t}})],1)}),0):t._e()])],1)},[],!1,null,null,null));bt.options.__file="SidebarGroup.vue";var kt={components:{SidebarGroup:bt.exports,SidebarLink:mt,NavLinks:lt},props:["items"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if("group"===i.type&&i.children.some(function(e){return k(t,e.path)}))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return k(this.$route,t.path)}}},$t=(n(271),Object(y.a)(kt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},[n("NavLinks"),t._v(" "),t._t("top"),t._v(" "),t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,first:0===i,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible},on:{toggle:function(e){t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{item:e}})],1)}),0):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null));$t.options.__file="Sidebar.vue";var Ct=$t.exports,xt=n(48),Lt={props:{updateEvent:{type:Object,default:null}},computed:{popupConfig:function(){for(var t=[this.$themeLocaleConfig,this.$site.themeConfig],e=0;e<t.length;e++){var n=t[e].serviceWorker;if(n&&n.updatePopup)return"object"===Object(xt.a)(n.updatePopup)?n.updatePopup:{}}return null},enabled:function(){return Boolean(this.popupConfig&&this.updateEvent)},message:function(){var t=this.popupConfig;return t&&t.message||"New content is available."},buttonText:function(){var t=this.popupConfig;return t&&t.buttonText||"Refresh"}},methods:{reload:function(){this.updateEvent&&(this.updateEvent.skipWaiting().then(function(){location.reload(!0)}),this.updateEvent=null)}}},wt=(n(272),Object(y.a)(Lt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"sw-update-popup"}},[t.enabled?n("div",{staticClass:"sw-update-popup"},[t._v("\n    "+t._s(t.message)),n("br"),t._v(" "),n("button",{on:{click:t.reload}},[t._v(t._s(t.buttonText))])]):t._e()])},[],!1,null,null,null));wt.options.__file="SWUpdatePopup.vue";var St={components:{Blog:T,Home:B,Page:A,Sidebar:Ct,Navbar:ht,SWUpdatePopup:wt.exports},data:function(){return{isSidebarOpen:!1,swUpdateEvent:null}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.layout&&!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return C(this.$page,this.$route,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;window.addEventListener("scroll",this.onScroll),s.a.configure({showSpinner:!1}),this.$router.beforeEach(function(t,e,n){t.path===e.path||i.a.component(t.name)||s.a.start(),n()}),this.$router.afterEach(function(){s.a.done(),t.isSidebarOpen=!1}),this.$on("sw-updated",this.onSWUpdated)},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))},onSWUpdated:function(t){this.swUpdateEvent=t}}},yt=(n(273),n(274),Object(y.a)(St,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.blog?n("Blog",{attrs:{"sidebar-items":t.sidebarItems}}):t.$page.frontmatter.layout?n("div",{staticClass:"custom-layout"},[n(t.$page.frontmatter.layout,{tag:"component"})],1):t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2),t._v(" "),n("SWUpdatePopup",{attrs:{updateEvent:t.swUpdateEvent}})],1)},[],!1,null,null,null));yt.options.__file="Layout.vue";e.default=yt.exports}}]);