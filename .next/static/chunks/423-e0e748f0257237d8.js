"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[423],{4423:function(e,s,n){n.d(s,{Z:function(){return y}});var a=n(5893),r=n(7294),c=function(e){var s=(0,r.useRef)();return(0,r.useEffect)(function(){var n=function(n){s.current.contains(n.target)||e()};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),s},l=function(e){var s=e.content,n=e.close,l=c(function(){n(!1)});return(0,a.jsxs)(r.Fragment,{children:[(0,a.jsx)("div",{className:"mfp-bg mfp-fade popup-box-inline mfp-ready"}),(0,a.jsx)("div",{className:"mfp-wrap content_popup_warp mfp-close-btn-in mfp-auto-cursor mfp-fade popup-box-inline mfp-ready",tabIndex:-1,style:{overflow:"hidden auto"},children:(0,a.jsxs)("div",{className:"mfp-container mfp-s-ready mfp-inline-holder",children:[(0,a.jsx)("div",{className:"mfp-content",ref:l,children:(0,a.jsxs)("div",{id:"popup-2",className:"popup-box mfp-fade",children:[(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:s.outerHTML}}),(0,a.jsx)("button",{onClick:function(){return n()},title:"Close (Esc)",type:"button",className:"mfp-close",children:"\xd7"})]})}),(0,a.jsx)("div",{className:"mfp-preloader",children:"Loading..."})]})})]})},t=function(){var e=(0,r.useState)(!1),s=e[0],n=e[1],c=(0,r.useState)(null),t=c[0],i=c[1];return(0,r.useEffect)(function(){setTimeout(function(){for(var e=document.querySelectorAll(".has-popup-media"),s=0;s<e.length;s++)!function(s){var a=e[s];a.addEventListener("click",function(){n(!0),i(a.closest(".box-item").getElementsByClassName("mfp-hide")[0].getElementsByClassName("content")[0])})}(s)},500)},[]),(0,a.jsx)(r.Fragment,{children:s&&(0,a.jsx)(l,{content:t,close:function(){i(null),n(!1)}})})},i=function(e){var s=e.close,n=e.imgs,c=n.length>0?n:["images/works/work6.jpg","images/works/work1.jpg","images/works/work5.jpg",],l=(0,r.useState)(0),t=l[0],i=l[1];return(0,a.jsxs)("div",{className:"postion-realtive",children:[(0,a.jsx)("div",{className:"mfp-bg mfp-fade mfp-ready",onClick:function(){return s()}}),(0,a.jsx)("div",{tabIndex:-1,style:{overflow:"hidden auto"},className:"mfp-wrap mfp-gallery mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready",children:(0,a.jsxs)("div",{className:"mfp-container mfp-s-ready mfp-image-holder",children:[(0,a.jsxs)("div",{className:"mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container",children:[(0,a.jsx)("div",{className:"mfp-content imgGallery_popup",children:(0,a.jsx)("div",{className:"mfp-iframe-scaler",children:(0,a.jsx)("div",{className:"img-container",children:(0,a.jsx)("img",{style:{width:"100%"},className:"mfp-img",src:c[t]})})})}),(0,a.jsx)("div",{className:"mfp-preloader",children:"Loading..."})]}),(0,a.jsx)("button",{title:"Previous (Left arrow key)",type:"button",className:"mfp-arrow mfp-arrow-left mfp-prevent-close",onClick:function(){return i((t+c.length-1)%c.length)}}),(0,a.jsx)("button",{title:"Next (Right arrow key)",type:"button",className:"mfp-arrow mfp-arrow-right mfp-prevent-close",onClick:function(){i((t+1)%c.length)}})]})})]})},o=function(){var e=(0,r.useState)([]),s=e[0],n=e[1],c=(0,r.useState)(!1),l=c[0],t=c[1],o=(0,r.useState)([]);return o[0],o[1],(0,r.useEffect)(function(){setTimeout(function(){for(var e=document.querySelectorAll(".has-popup-gallery"),s=0;s<e.length;s++)!function(s){var a=e[s];a.addEventListener("click",function(){t(!0);for(var e=[],s=a.closest(".image").getElementsByClassName("mfp-hide")[0].getElementsByTagName("a"),r=0;r<s.length;r++){var c=s[r].getAttribute("href");e.push(c)}n(e)})}(s)},1e3),console.log(s)},[l]),(0,a.jsx)(r.Fragment,{children:l&&(0,a.jsx)(i,{imgs:s,close:function(){t(!1),n([])}})})},d=function(e){var s=e.close,n=e.src,l=c(function(){s(!1)});return(0,a.jsxs)(r.Fragment,{children:[(0,a.jsx)("div",{className:"mfp-bg mfp-ready",onClick:function(){return s(!1)}}),(0,a.jsx)("div",{className:"mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",tabIndex:-1,style:{overflow:"hidden auto"},children:(0,a.jsxs)("div",{className:" popup-container mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container",children:[(0,a.jsx)("div",{className:"mfp-content",ref:l,children:(0,a.jsx)("div",{className:"mfp-iframe-scaler",children:(0,a.jsx)("img",{className:"mfp-img",src:n})})}),(0,a.jsx)("div",{className:"mfp-preloader",children:"Loading..."})]})})]})},m=function(){var e=(0,r.useState)(!1),s=e[0],n=e[1],c=(0,r.useState)(null),l=c[0],t=c[1];return(0,r.useEffect)(function(){setTimeout(function(){document.querySelectorAll("a").forEach(function(e){e.href.includes("/images")&&null===e.getAttribute("download")&&e.addEventListener("click",function(s){s.preventDefault(),t(e.href),n(!0)})})},1500)},[]),(0,a.jsx)(r.Fragment,{children:s&&(0,a.jsx)(d,{close:function(){return n(!1)},src:l})})},u=function(e){var s=e.close,n=e.videoID,l=c(function(){s(!1)});return(0,a.jsxs)(r.Fragment,{children:[(0,a.jsx)("div",{className:"mfp-bg mfp-ready",onClick:function(){return s(!1)}}),(0,a.jsx)("div",{className:"mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",tabIndex:-1,style:{overflow:"hidden auto"},children:(0,a.jsxs)("div",{className:"mfp-container popup-container mfp-s-ready mfp-iframe-holder",children:[(0,a.jsx)("div",{className:"mfp-content",ref:l,children:(0,a.jsxs)("div",{className:"mfp-iframe-scaler",children:[(0,a.jsx)("button",{title:"Close (Esc)",type:"button",className:"mfp-close",onClick:function(){return s()},children:"\xd7"}),(0,a.jsx)("iframe",{src:n,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]})}),(0,a.jsx)("div",{className:"mfp-preloader",children:"Loading..."})]})})]})},f=function(){var e=(0,r.useState)(!1),s=e[0],n=e[1],c=(0,r.useState)(null),l=c[0],t=c[1];return(0,r.useEffect)(function(){setTimeout(function(){document.querySelectorAll("a").forEach(function(e){(e.href.includes("www.youtube.com")||e.href.includes("vimeo.com")||e.href.includes("soundcloud.com"))&&e.addEventListener("click",function(s){s.preventDefault(),t(e.href),n(!0)})})},1500)},[]),(0,a.jsx)(r.Fragment,{children:s&&(0,a.jsx)(u,{close:function(){return n(!1)},videoID:l})})},p=n(0),$=function(){return(0,a.jsxs)("footer",{className:"footer",children:[(0,a.jsxs)("div",{className:"copy",children:[(0,a.jsx)("p",{children:"E: farhanchowdhury1999@gmail.com"}),(0,a.jsx)("p",{children:"T: +8801796549213"})]}),(0,a.jsxs)("div",{className:"soc-box",children:[(0,a.jsx)("div",{className:"follow-label",children:"Follow Me"}),(0,a.jsxs)("div",{className:"soc",children:[(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.facebook.com/itsfarhanchy99/",children:(0,a.jsx)("span",{className:"icon fab fa-facebook"})}),(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.instagram.com/itsfarhanchy99/",children:(0,a.jsx)("span",{className:"icon fab fa-instagram"})}),(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/farhanchy99/",children:(0,a.jsx)("span",{className:"icon fab fa-linkedin"})})]})]}),(0,a.jsx)("div",{className:"clear"})]})},h=n(1664),x=n.n(h),j=function(){return(0,a.jsxs)(r.Fragment,{children:[(0,a.jsx)("div",{className:"logo hover-masks-logo",children:(0,a.jsxs)("a",{href:"assets/Farhan Anjum Chowdhury.pdf",download:"assets/Farhan Anjum Chowdhury.pdf",children:[(0,a.jsx)("span",{className:"mask-lnk",children:(0,a.jsx)("img",{style:{width:"32px"},src:"assets/logo.png",alt:""})}),(0,a.jsxs)("span",{className:"mask-lnk mask-lnk-hover",children:["Download ",(0,a.jsx)("strong",{children:"CV"})]})]})}),(0,a.jsx)("div",{className:"top-menu hover-masks",children:(0,a.jsx)("div",{className:"top-menu-nav",children:(0,a.jsx)("div",{className:"menu-topmenu-container",children:(0,a.jsxs)("ul",{className:"menu",children:[(0,a.jsx)("li",{className:"menu-item",children:(0,a.jsx)(x(),{href:"/",children:(0,a.jsxs)("a",{children:[(0,a.jsx)("span",{className:"mask-lnk",children:"Home"}),(0,a.jsx)("span",{className:"mask-lnk mask-lnk-hover",children:"Home"})]})})}),(0,a.jsx)("li",{className:"menu-item menu-item-has-children",children:(0,a.jsx)(x(),{href:"/resume",children:(0,a.jsxs)("a",{children:[(0,a.jsx)("span",{className:"mask-lnk",children:"Resume"}),(0,a.jsx)("span",{className:"mask-lnk mask-lnk-hover",children:"Resume"})]})})}),(0,a.jsx)("li",{className:"menu-item menu-item-has-children",children:(0,a.jsx)(x(),{href:"/works",children:(0,a.jsxs)("a",{children:[(0,a.jsx)("span",{className:"mask-lnk",children:"Works"}),(0,a.jsx)("span",{className:"mask-lnk mask-lnk-hover",children:"Works"})]})})}),(0,a.jsx)("li",{className:"menu-item menu-item-has-children",children:(0,a.jsx)(x(),{href:"/blog",children:(0,a.jsxs)("a",{children:[(0,a.jsx)("span",{className:"mask-lnk",children:"Blog"}),(0,a.jsx)("span",{className:"mask-lnk mask-lnk-hover",children:"Blog"})]})})}),(0,a.jsx)("li",{className:"menu-item menu-item-has-children",children:(0,a.jsx)(x(),{href:"/contacts",children:(0,a.jsxs)("a",{children:[(0,a.jsx)("span",{className:"mask-lnk",children:"Contact"}),(0,a.jsx)("span",{className:"mask-lnk mask-lnk-hover",children:"Contact"})]})})})]})})})})]})},v=function(){return(0,a.jsxs)(r.Fragment,{children:[(0,a.jsx)(g,{}),(0,a.jsx)(N,{})]})},N=function(){return(0,a.jsx)("header",{className:"header desktopHeader",children:(0,a.jsx)("div",{className:"head-top",children:(0,a.jsx)(j,{})})})},g=function(){var e=(0,r.useState)(!1),s=e[0],n=e[1];return(0,a.jsx)("header",{className:"header mobileHeader ".concat(s?"active":""),children:(0,a.jsxs)("div",{className:"head-top",children:[(0,a.jsx)("a",{href:"#",className:"menu-btn",onClick:function(){return n(!s)},children:(0,a.jsx)("span",{})}),(0,a.jsx)(j,{})]})})},k=function(){var e=(0,r.useState)(!0),s=e[0],n=e[1];return(0,r.useEffect)(function(){setTimeout(function(){document.querySelector(".lines").classList.add("ready")},3e3),setTimeout(function(){n(!1),document.querySelector(".lines").classList.add("finish")},1e3)},[]),(0,a.jsx)(r.Fragment,{children:(0,a.jsx)("div",{className:"preloader",style:{display:s?"block":"none"},children:(0,a.jsx)("div",{className:"centrize full-width",children:(0,a.jsx)("div",{className:"vertical-center",children:(0,a.jsxs)("div",{className:"spinner",children:[(0,a.jsx)("div",{className:"double-bounce1"}),(0,a.jsx)("div",{className:"double-bounce2"})]})})})})})},y=function(e){var s=e.children,n=e.noHeader;return(0,r.useEffect)(function(){(0,p.oc)()},[]),(0,r.useEffect)(function(){window.addEventListener("scroll",p.h4)},[]),(0,a.jsxs)(r.Fragment,{children:[(0,a.jsx)(f,{}),(0,a.jsx)(m,{}),(0,a.jsx)(o,{}),(0,a.jsx)(t,{}),(0,a.jsx)(k,{}),(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("div",{className:"cursor-follower"}),!n&&(0,a.jsx)(v,{}),(0,a.jsx)("div",{className:"wrapper",children:s}),(0,a.jsx)($,{}),(0,a.jsx)("div",{className:"lines",children:(0,a.jsxs)("div",{className:"content",children:[(0,a.jsx)("div",{className:"line-col"}),(0,a.jsx)("div",{className:"line-col"}),(0,a.jsx)("div",{className:"line-col"}),(0,a.jsx)("div",{className:"line-col"}),(0,a.jsx)("div",{className:"line-col"})]})})]})]})}},0:function(e,s,n){n.d(s,{Tk:function(){return r},av:function(){return t},bR:function(){return l},h4:function(){return c},oc:function(){return a}});var a=function(){document.addEventListener("mousemove",function(e){var s=e.pageX,n=e.pageY,a=document.querySelector(".cursor-follower");a.style.transform="translate3d(".concat(s,"px,").concat(n,"px,0px)"),document.querySelectorAll("a").forEach(function(e){e.addEventListener("mouseenter",function(){a.classList.add("cursor-hover")}),e.addEventListener("mouseleave",function(){a.classList.remove("cursor-hover")})})})},r=function(){var e=n(4102),s=document.getElementsByClassName("wp-post-image");new e(s)},c=function(){var e=window.scrollY;document.querySelectorAll(".header").forEach(function(s){s&&(e>100?(s.classList.add("fixed"),document.querySelector("body").classList.remove("background-enabled")):(s.classList.remove("fixed"),document.querySelector("body").classList.add("background-enabled")))})},l=function(){document.querySelectorAll(".skills .progress").forEach(function(e){e.insertAdjacentHTML("beforeend",'<span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');var s=e.getElementsByClassName("percentage")[0];s.insertAdjacentHTML("beforeend",'<span class="da"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');var n=e.clientWidth;s.getElementsByClassName("da")[0].style.width="".concat(n,"px")})},t=function(){window.addEventListener("resize",function(){document.querySelectorAll(".skills-list.dotted .progress").forEach(function(e){var s=e.clientWidth;e.getElementsByClassName("da")[0].style.width="".concat(s+1,"px")})})}}}]);