(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[547],{6337:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/works",function(){return a(4330)}])},638:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(6856).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=i.default,r={loading:function(e){return e.error,e.isLoading,e.pastDelay,null}};if(n(e,Promise)?r.loader=function(){return e}:"function"==typeof e?r.loader=e:"object"==typeof e&&(r=s({},r,e)),(r=s({},r,t)).loadableGenerated&&delete(r=s({},r,r.loadableGenerated)).loadableGenerated,"boolean"==typeof r.ssr&&!r.suspense){if(!r.ssr)return delete r.ssr,l(a,r);delete r.ssr}return a(r)},t.noSSR=l;var s=a(6495).Z,r=a(2648).Z,i=(r(a(7294)),r(a(4302)));function l(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6319:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var n=(0,a(2648).Z)(a(7294)).default.createContext(null);t.LoadableContext=n},4302:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(9658).Z,s=a(7222).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(6495).Z,i=(0,a(2648).Z)(a(7294)),l=a(6319),o=a(7294).useSyncExternalStore,u=[],d=[],c=!1;function f(e){var t=e(),a={loading:!0,loaded:null,error:null};return a.promise=t.then(function(e){return a.loading=!1,a.loaded=e,e}).catch(function(e){throw a.loading=!1,a.error=e,e}),a}var $=function(){function e(t,a){n(this,e),this._loadFn=t,this._opts=a,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return s(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,a=this._opts;t.loading&&("number"==typeof a.delay&&(0===a.delay?this._state.pastDelay=!0:this._delay=setTimeout(function(){e._update({pastDelay:!0})},a.delay)),"number"==typeof a.timeout&&(this._timeout=setTimeout(function(){e._update({timedOut:!0})},a.timeout))),this._res.promise.then(function(){e._update({}),e._clearTimeouts()}).catch(function(t){e._update({}),e._clearTimeouts()}),this._update({})}},{key:"_update",value:function(e){this._state=r({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(function(e){return e()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function p(e){return function(e,t){var a=function(){if(!p){var t=new $(e,f);p={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return p.promise()},n=function(){a();var e=i.default.useContext(l.LoadableContext);e&&Array.isArray(f.modules)&&f.modules.forEach(function(t){e(t)})},s=function(e,t){n();var a=o(p.subscribe,p.getCurrentValue,p.getCurrentValue);return i.default.useImperativeHandle(t,function(){return{retry:p.retry}},[]),i.default.useMemo(function(){var t;return a.loading||a.error?i.default.createElement(f.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:p.retry}):a.loaded?i.default.createElement((t=a.loaded)&&t.__esModule?t.default:t,e):null},[e,a])},u=function(e,t){return n(),i.default.createElement(f.lazy,r({},e,{ref:t}))},f=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);f.suspense&&(f.lazy=i.default.lazy(f.loader));var p=null;if(!c){var m=f.webpack?f.webpack():f.modules;m&&d.push(function(e){var t=!0,n=!1,s=void 0;try{for(var r,i=m[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){var l=r.value;if(-1!==e.indexOf(l))return a()}}catch(o){n=!0,s=o}finally{try{t||null==i.return||i.return()}finally{if(n)throw s}}})}var v=f.suspense?u:s;return v.preload=function(){return a()},v.displayName="LoadableComponent",i.default.forwardRef(v)}(f,e)}function m(e,t){for(var a=[];e.length;){var n=e.pop();a.push(n(t))}return Promise.all(a).then(function(){if(e.length)return m(e,t)})}p.preloadAll=function(){return new Promise(function(e,t){m(u).then(e,t)})},p.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(function(t){var a=function(){return c=!0,t()};m(d,e).then(a,a)})},window.__NEXT_PRELOADREADY=p.preloadReady,t.default=p},4330:function(e,t,a){"use strict";a.r(t);var n=a(5893),s=a(2745),r=a(4423),i=a(5152),l=a.n(i)()(function(){return Promise.all([a.e(391),a.e(141)]).then(a.bind(a,2141))},{loadableGenerated:{webpack:function(){return[2141]}},ssr:!1}),o=function(){return(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(s.bK,{pageName:"Works",typingData:["<span class='typed-bread'><a href='#'>Home</a> / Works</span>",]}),(0,n.jsx)("div",{className:"section works",id:"next_section",children:(0,n.jsxs)("div",{className:"content",children:[(0,n.jsx)(l,{}),(0,n.jsx)("div",{className:"clear"})]})})]})};t.default=o},2745:function(e,t,a){"use strict";a.d(t,{HN:function(){return c},Y0:function(){return f},bK:function(){return u},kU:function(){return d}});var n=a(5893),s=a(7294),r=a(3614),i=a.n(r),l=function(e){var t=e.typingData,a=e.extraClass,r=(0,s.useRef)(null);return(0,s.useEffect)(function(){setTimeout(function(){var e=new(i())(r.current,{strings:t||["I code cool <strong>websites</strong>","I develop <strong>mobile apps</strong>","I love <strong>wordpress</strong>",],typeSpeed:100,backSpeed:100,backDelay:100,smartBackspace:!0,loop:!1,showCursor:!1});return function(){e.destroy()}},2e3)},[]),(0,n.jsx)("div",{className:"h-subtitles ready",children:(0,n.jsx)("span",{className:a,ref:r})})},o=function(e){var t=e.pageName,a=e.pageTitle,r=e.typingData,i=e.extraClass;return(0,n.jsxs)(s.Fragment,{children:[(0,n.jsx)("div",{className:"centrize full-width",children:(0,n.jsx)("div",{className:"vertical-center",children:(0,n.jsxs)("div",{className:"started-content",children:[(0,n.jsx)("h1",{className:"h-title",children:a||t}),(0,n.jsx)(l,{typingData:r,extraClass:i})]})})}),(0,n.jsx)("a",{href:"#next_section",className:"mouse_btn",children:(0,n.jsx)("span",{className:"icon fas fa-chevron-down"})})]})},u=function(e){var t=e.pageName,a=e.pageTitle,s=e.typingData;return e.extraClass,(0,n.jsxs)("div",{className:"section started section-title",id:"section-started",children:[(0,n.jsxs)("div",{className:"video-bg",children:[(0,n.jsx)("div",{className:"video-bg-mask"}),(0,n.jsx)("div",{className:"video-bg-texture",id:"grained_container"})]}),(0,n.jsx)(o,{typingData:s,pageName:t,pageTitle:a})]})},d=function(e){var t=e.pageName,r=e.pageTitle,i=e.typingData,l=e.extraClass,u=e.bannerImg;return(0,s.useEffect)(function(){var e=a(1014),t=e.jarallax;(0,e.jarallaxVideo)(),t(document.querySelectorAll(".jarallax"),{speed:.5,keepImg:!0,automaticResize:!0,videoVolume:0})},[]),(0,n.jsxs)("div",{className:"section started section-title",id:"section-started",children:[(0,n.jsxs)("div",{className:"video-bg jarallax",style:{backgroundImage:"url(".concat(u||"images/resume_bg.jpg",")")},children:[(0,n.jsx)("div",{className:"video-bg-mask"}),(0,n.jsx)("div",{className:"video-bg-texture",id:"grained_container"})]}),(0,n.jsx)(o,{typingData:i,pageName:t,pageTitle:r,extraClass:l})]})},c=function(e){var t=e.pageName,a=e.pageTitle,s=e.typingData,r=e.extraClass;return(0,n.jsxs)("div",{className:"section started layout-creative",id:"section-started",children:[(0,n.jsxs)("div",{className:"video-bg",children:[(0,n.jsx)("div",{className:"video-bg-mask"}),(0,n.jsx)("div",{className:"video-bg-texture",id:"grained_container"})]}),(0,n.jsx)(o,{typingData:s,pageName:t,pageTitle:a,extraClass:r})]})},f=function(e){var t=e.typingData,a=e.extraClass;return(0,n.jsxs)("div",{className:"section started section-title",id:"section-started",children:[(0,n.jsxs)("div",{className:"video-bg",children:[(0,n.jsx)("div",{className:"map",children:(0,n.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d136834.1519573059!2d-74.0154445224086!3d40.7260256534837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1639991650837!5m2!1sen!2sbd",style:{border:0,width:"100%",height:"100%"},allowFullScreen:"",loading:"lazy"})}),(0,n.jsx)("div",{className:"video-bg-mask"}),(0,n.jsx)("div",{className:"video-bg-texture",id:"grained_container"})]}),(0,n.jsx)("div",{className:"centrize full-width",children:(0,n.jsx)("div",{className:"vertical-center",children:(0,n.jsxs)("div",{className:"started-content",children:[(0,n.jsx)("h1",{className:"h-title",children:"Contacts"}),(0,n.jsx)(l,{typingData:t,extraClass:a})]})})}),(0,n.jsx)("a",{href:"#next_section",className:"mouse_btn",children:(0,n.jsx)("span",{className:"icon fas fa-chevron-down"})})]})}},5152:function(e,t,a){e.exports=a(638)}},function(e){e.O(0,[3,14,423,774,888,179],function(){return e(e.s=6337)}),_N_E=e.O()}]);