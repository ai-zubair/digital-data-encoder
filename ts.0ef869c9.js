!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?o(t):e}function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t){var e="function"==typeof Map?new Map:void 0;return(i=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return a(t,arguments,s(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),l(r,t)})(t)}function a(t,e,n){return(a=c()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&l(o,n.prototype),o}).apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(function(t){for(var n=Object.keys(t),r=0;r<n.length;r++)e[n[r]]=t[n[r]]})(JSON.parse('{"8537f4241bc18fc3":"ts.0ef869c9.js"}'));var u=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(a,t);var e,n,i=(e=a,n=c(),function(){var t,o=s(e);if(n){var i=s(this).constructor;t=Reflect.construct(o,arguments,i)}else t=o.apply(this,arguments);return r(this,t)});function a(t){var e,n,r,c;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),e=i.call(this),n=o(e),c=function(){var t=document.createElement("template");t.innerHTML=e.domContent,e.attachShadow({mode:"open"}).appendChild(t.content.cloneNode(!0))},(r="bindDomContent")in n?Object.defineProperty(n,r,{value:c,enumerable:!0,configurable:!0,writable:!0}):n[r]=c,e.domContent=t,e.bindDomContent(),e}return a}(i(HTMLElement));var d,p,f,b,m,h,g,v=t(":host{display:block;max-width:1440px;position:relative;margin:auto}:host,:host .app{width:100%;height:100%}:host .app{display:flex;align-items:center;justify-content:center}:host ::slotted([slot=bread-crumb]){position:absolute;top:0;left:0}:host .notification-wrapper{position:absolute;bottom:0;width:100%;display:flex;align-items:center;justify-content:center;padding:10px;transform:scale(0)}:host .notification-wrapper.show{transform:scale(1)}:host .notification-wrapper .notification{background:linear-gradient(315deg,#194d5c,#15414d);box-shadow:5px 5px 10px #10333d,-5px -5px 10px #1e5d6f;border-radius:5px;color:#fff;padding:10px;display:flex;position:relative;overflow:hidden}:host .notification-wrapper .notification .notification-timer{height:30px;width:30px;box-sizing:border-box;display:inline-block;border-radius:50%;border:4px solid #fff;margin-right:10px;display:flex;align-items:center;justify-content:center}:host .notification-wrapper .notification .notification-timer:hover{cursor:pointer}:host .notification-wrapper .notification .notification-text{margin:0;align-self:center}:host .notification-wrapper .notification .progress-bar{display:inline-block;height:2px;width:100%;position:absolute;background-color:#fff;top:0;left:0}:host .notification-wrapper .notification .progress-bar.animate{transition:transform 2s linear;transform-origin:left;transform:scaleX(0)}:host([isHidden=true]){display:none}"),y="\n  <style>\n    ".concat(v,'\n  </style>\n  <div id="app" class="app">\n    <slot name="bread-crumb" id="bread-crumb-slot"></slot>\n    <slot name="app-component" id="component-slot"></slot>\n    <div class="notification-wrapper" id="notification">\n      <div class="notification">\n        <span class="notification-timer">x</span>\n        <p class="notification-text">Dummy notification text is shown here</p>\n        <span class="progress-bar"></span>\n      </div>\n    </div>\n  </div>\n');function x(t){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function S(t,e){return(S=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function E(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=C(t);if(e){var o=C(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return L(this,n)}}function L(t,e){return!e||"object"!==x(e)&&"function"!=typeof e?O(t):e}function O(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function C(t){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function R(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}(p=d||(d={})).ActiveComponentChange="active-component-change",p.LandingBannerShown="landing-banner-shown",p.StreamLengthChange="stream-length-change",p.ErrorNotification="error-notification",p.NotifcationClose="notification-close",(b=f||(f={})).ComponentId="component-id",b.ActiveCrumb="active-crumb",b.ErrorMessage="error-msg",b.DataStreamLength="data-stream-length",(h=m||(m={})).LandingBanner="LandingBanner",h.StreamLengthForm="StreamLengthForm",h.StreamBitForm="StreamBitForm",h.EncoderScreen="EncoderScreen",(g||(g={})).StreamLengthError="Data Stream Length Must Be Greater Or Equal To 2";var j,_=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&S(t,e)}(i,t);var e,n,r,o=E(i);function i(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),R(O(t=o.call(this,y)),"activeComponentID",m.LandingBanner),R(O(t),"breadCrumb",null),R(O(t),"componentMap",{}),R(O(t),"appState",{}),R(O(t),"bindAppEventListeners",(function(){t.addEventListener(d.ActiveComponentChange,(function(e){var n=e.detail[f.ComponentId];t.setActiveComponent(n)})),t.addEventListener(d.LandingBannerShown,(function(e){var n,r,o,i;null===(n=O(t))||void 0===n||null===(r=n.breadCrumb)||void 0===r||r.removeAttribute("isHidden"),null===(o=O(t))||void 0===o||null===(i=o.breadCrumb)||void 0===i||i.setAttribute(f.ActiveCrumb,t.activeComponentID)})),t.addEventListener(d.ErrorNotification,(function(e){var n=e.detail[f.ErrorMessage];t.showNotification(n)})),t.addEventListener(d.StreamLengthChange,(function(e){var n=e.detail[f.DataStreamLength];t.componentMap[m.StreamBitForm].setAttribute(f.DataStreamLength,n)}))})),R(O(t),"bindListeners",(function(){var e,n,r=null===(e=t.shadowRoot)||void 0===e?void 0:e.querySelector(".notification-timer"),o=null===(n=t.shadowRoot)||void 0===n?void 0:n.getElementById("notification"),i=o.querySelector(".progress-bar");r.addEventListener("click",(function(t){i.classList.remove("animate"),o.classList.remove("show")}))})),R(O(t),"createComponentMap",(function(){var e,n,r=null===(e=t.shadowRoot)||void 0===e?void 0:e.getElementById("component-slot"),o=null===(n=t.shadowRoot)||void 0===n?void 0:n.getElementById("bread-crumb-slot"),i=r.assignedElements({flatten:!0});t.breadCrumb=o.assignedElements({flatten:!0})[0];var a=0;for(var c in m){var l=i[a];l.setAttribute(f.ComponentId,c),t.activeComponentID===c&&l.setAttribute("active","true"),t.componentMap[c]=l,a++}})),R(O(t),"setActiveComponent",(function(e){var n,r;t.componentMap[t.activeComponentID].removeAttribute("active"),t.componentMap[e].setAttribute("active","true"),null===(n=O(t))||void 0===n||null===(r=n.breadCrumb)||void 0===r||r.setAttribute(f.ActiveCrumb,e),t.activeComponentID=e})),R(O(t),"showNotification",(function(e){var n,r=null===(n=t.shadowRoot)||void 0===n?void 0:n.getElementById("notification"),o=r.querySelector(".notification-text"),i=r.querySelector(".progress-bar");o.innerText=e;var a=0;requestAnimationFrame((function t(e){0===a&&(r.classList.add("show"),i.classList.add("animate"),a=e),e-a>=2e3?(i.classList.remove("animate"),r.classList.remove("show")):requestAnimationFrame(t)}))})),t.bindAppEventListeners(),t.bindListeners(),t}return e=i,(n=[{key:"connectedCallback",value:function(){this.createComponentMap()}}])&&w(e.prototype,n),r&&w(e,r),i}(u);function A(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var k=(A(j={},m.LandingBanner,{id:m.LandingBanner,index:"1",title:"Welcome",description:"An illustrative digital data encoder."}),A(j,m.StreamLengthForm,{id:m.StreamLengthForm,index:"2",title:"Length",description:"Enter the length of data stream."}),A(j,m.StreamBitForm,{id:m.StreamBitForm,index:"3",title:"Stream",description:"Enter the bits in the data stream."}),A(j,m.EncoderScreen,{id:m.EncoderScreen,index:"4",title:"Encodings",description:"Line Encodings of the data stream"}),j),P=k[m.LandingBanner],D=k[m.StreamLengthForm],B=k[m.StreamBitForm],T=k[m.EncoderScreen],F=t(':host{width:96%;margin:2%;transition:transform .4s ease .2s;transform:scale(1);transform-origin:left}:host .crumb-wrapper{display:flex;box-sizing:border-box}:host .crumb-wrapper .crumb-item{flex-basis:25%;padding:10px;background:linear-gradient(315deg,#194d5c,#15414d);border-radius:5px;margin-right:20px;position:relative;border:1px solid hsla(0,0%,100%,.1);color:hsla(0,0%,100%,.2);display:grid;grid-template-columns:1fr 7fr;grid-template-areas:"crumb-item-index crumb-item-title" "crumb-item-index crumb-item-desc"}:host .crumb-wrapper .crumb-item .crumb-item-desc,:host .crumb-wrapper .crumb-item .crumb-item-index,:host .crumb-wrapper .crumb-item .crumb-item-title{align-self:center}:host .crumb-wrapper .crumb-item .crumb-item-index{grid-area:crumb-item-index;margin-right:5px;font-size:52px;align-self:center;justify-self:center;font-weight:100}:host .crumb-wrapper .crumb-item .crumb-item-title{grid-area:crumb-item-title;font-weight:400;font-size:20px}:host .crumb-wrapper .crumb-item .crumb-item-desc{grid-area:crumb-item-desc;font-weight:100;font-size:16px}:host .crumb-wrapper .crumb-item[active]{color:#fff;border:none;box-shadow:5px 5px 10px #10333d,-5px -5px 10px #1e5d6f}:host .crumb-wrapper .crumb-item:last-child{margin-right:0}:host([isHidden=true]){transform:scaleX(0)}'),I="\n  <style>\n    ".concat(F,'\n  </style>\n  <div class="crumb-wrapper">\n    <div class="crumb-item" id=').concat(P.id,'>\n      <div class="crumb-item-index"> ').concat(P.index,' </div>\n      <div class="crumb-item-title"> ').concat(P.title,'</div>\n      <div class="crumb-item-desc"> ').concat(P.description,'</div>\n    </div>\n    <div class="crumb-item" id=').concat(D.id,' >\n      <div class="crumb-item-index"> ').concat(D.index,' </div>\n      <div class="crumb-item-title"> ').concat(D.title,'</div>\n      <div class="crumb-item-desc"> ').concat(D.description,'</div>\n    </div>\n    <div class="crumb-item" id=').concat(B.id,' >\n      <div class="crumb-item-index"> ').concat(B.index,' </div>\n      <div class="crumb-item-title"> ').concat(B.title,'</div>\n      <div class="crumb-item-desc"> ').concat(B.description,'</div>\n    </div>\n    <div class="crumb-item" id=').concat(T.id,' >\n      <div class="crumb-item-index"> ').concat(T.index,' </div>\n      <div class="crumb-item-title"> ').concat(T.title,'</div>\n      <div class="crumb-item-desc"> ').concat(T.description,"</div>\n    </div>\n\n  </div>\n");function M(t){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function q(t,e){return(q=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function N(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=X(t);if(e){var o=X(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return H(this,n)}}function H(t,e){return!e||"object"!==M(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function X(t){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var G=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&q(t,e)}(i,t);var e,n,r,o=N(i);function i(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),o.call(this,I)}return e=i,r=[{key:"observedAttributes",get:function(){return[f.ActiveCrumb]}}],(n=[{key:"attributeChangedCallback",value:function(t,e,n){if(e!==n){var r,o,i=null===(r=this.shadowRoot)||void 0===r?void 0:r.getElementById(e),a=null===(o=this.shadowRoot)||void 0===o?void 0:o.getElementById(n);null==i||i.removeAttribute("active"),null==a||a.setAttribute("active","true")}}}])&&z(e.prototype,n),r&&z(e,r),i}(u);var V=t(':host{display:block}:host .landing-wrapper{box-sizing:border-box;text-align:center;font-size:40px;font-family:Monoton,sans-serif;box-shadow:5px 5px 10px #10333d,-5px -5px 10px #1e5d6f;padding:20px;border-radius:5px;background:linear-gradient(315deg,#194d5c,#15414d);color:#fff;position:relative;width:645px}:host .landing-wrapper .landing-text{box-sizing:inherit;margin:0;display:flex}:host .landing-wrapper .landing-text .landing-text-word{box-sizing:inherit;position:relative;display:inline-block;padding:10px}:host .landing-wrapper .landing-text .landing-text-word:nth-child(2),:host .landing-wrapper .landing-text .landing-text-word:nth-child(3){margin-left:-2px}:host .landing-wrapper .landing-text .landing-text-word:first-child{width:204px}:host .landing-wrapper .landing-text .landing-text-word:nth-child(2){width:152px}:host .landing-wrapper .landing-text .landing-text-word:nth-child(3){width:252px}:host .landing-wrapper .landing-text .landing-text-word:first-child:before,:host .landing-wrapper .landing-text .landing-text-word:nth-child(2):after,:host .landing-wrapper .landing-text .landing-text-word:nth-child(3):before{position:absolute;width:0;height:0%;content:"";border:2px solid transparent;box-sizing:inherit}:host .landing-wrapper .landing-text .landing-text-word:before{top:0;left:0}:host .landing-wrapper .landing-text .landing-text-word:after{bottom:0;left:0}:host .landing-wrapper .landing-text .landing-text-word.draw-borders:after,:host .landing-wrapper .landing-text .landing-text-word.draw-borders:before{height:100%;width:100%}:host .landing-wrapper .landing-text .landing-text-word.draw-borders:first-child:before{border-top-color:#fff;border-right-color:#fff;transition:width .25s linear,height .25s linear .25s}:host .landing-wrapper .landing-text .landing-text-word.draw-borders:nth-child(2):after{border-bottom-color:#fff;border-left-color:#fff;border-right-color:#fff;transition:border-color 0s linear .5s,width .25s linear .5s,height .25s linear .75s}:host .landing-wrapper .landing-text .landing-text-word.draw-borders:nth-child(3):before{border-top-color:#fff;border-right-color:#fff;border-left-color:#fff;transition:border-color 0s linear 1s,width .25s linear 1s,height .25s linear 1.25s}:host .landing-wrapper .next-button{position:absolute;contain:content;top:100%;left:0;height:100%;width:100%;display:flex;align-items:center;justify-content:center;transition:all .5s ease;transform:scale(0)}:host .landing-wrapper .next-button .button-text{background:linear-gradient(315deg,#194d5c,#15414d);padding:10px;font-size:20px;font-family:Roboto;box-shadow:5px 5px 10px #10333d,-5px -5px 10px #1e5d6f;border-radius:5px;font-weight:100;transition:all .2s ease}:host .landing-wrapper .next-button .button-text:hover{cursor:pointer;box-shadow:none;background:linear-gradient(145deg,#194d5c,#15414d)}:host .landing-wrapper .next-button.pop-out{transform:scale(1)}:host(:not([active])){display:none}'),J="\n  <style>\n    ".concat(V,'\n  </style>\n  <div class="landing-wrapper">\n    <p class="landing-text" id="landing-text">\n      <span class="landing-text-word" id="digital">0100110</span>\n      <span class="landing-text-word" id="data">0010</span>\n      <span class="landing-text-word" id="encoder">110100100</span> \n    </p>\n    <div class="next-button hide" id="next-button">\n      <span class="button-text">NEXT</span>\n    </div>\n  </div>\n');function W(t){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function K(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Q(t,e){return(Q=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function U(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=$(t);if(e){var o=$(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Y(this,n)}}function Y(t,e){return!e||"object"!==W(e)&&"function"!=typeof e?Z(t):e}function Z(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function $(t){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function tt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var et=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Q(t,e)}(i,t);var e,n,r,o=U(i);function i(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),tt(Z(t=o.call(this,J)),"bannerTextDecrypted",!1),tt(Z(t),"bindListeners",(function(){var e;(null===(e=t.shadowRoot)||void 0===e?void 0:e.querySelector(".button-text")).addEventListener("click",(function(){var e,n=new CustomEvent(d.ActiveComponentChange,{detail:tt({},f.ComponentId,m.StreamLengthForm)});null===(e=t.parentElement)||void 0===e||e.dispatchEvent(n)}))})),tt(Z(t),"showDecryptingText",(function(){var e,n,r=null===(e=t.shadowRoot)||void 0===e?void 0:e.querySelectorAll(".landing-text-word"),o=["DIGITAL","DATA","ENCODER"],i=o.join(""),a=i.length,c=0,l=0;!function e(){var s=++l%4==0;if(c>=a)t.bannerTextDecrypted=!0,cancelAnimationFrame(n);else{if(s){var u=c,d=i.substring(0,u+1);c++;var p=d+function(t){for(var e="",n=0;n<t;n++){e+=Math.floor(2*Math.random())}return e}(a-c);null==r||r.forEach((function(t,e){var n=i.indexOf(o[e]),r=n+o[e].length;t.innerHTML=p.substring(n,r)}))}n=requestAnimationFrame(e)}}()})),tt(Z(t),"drawSignaLikeBorders",(function(){var e=t.shadowRoot,n=null==e?void 0:e.querySelectorAll(".landing-text-word");requestAnimationFrame((function(){for(var t=0;t<n.length;t++)n[t].classList.add("draw-borders")}))})),tt(Z(t),"showNextButton",(function(){if(t.bannerTextDecrypted){var e,n;(null===(e=t.shadowRoot)||void 0===e?void 0:e.getElementById("next-button")).classList.add("pop-out");var r=new CustomEvent(d.LandingBannerShown);null===(n=t.parentElement)||void 0===n||n.dispatchEvent(r)}else requestAnimationFrame(t.showNextButton)})),tt(Z(t),"render",(function(){t.showDecryptingText(),t.drawSignaLikeBorders(),t.showNextButton()})),t.bindListeners(),t}return e=i,(n=[{key:"connectedCallback",value:function(){this.render()}}])&&K(e.prototype,n),r&&K(e,r),i}(u);var nt=t(":host{display:block}:host .form-wrapper{background:linear-gradient(315deg,#194d5c,#15414d);box-shadow:5px 5px 10px #10333d,-5px -5px 10px #1e5d6f;border-radius:5px;width:250px;height:100%;padding:20px;display:flex;flex-direction:column}:host .form-wrapper .input-label{color:#fff;font-weight:300;margin-bottom:25px;font-size:20px}:host .form-wrapper .length-input{background:linear-gradient(315deg,#194d5c,#15414d);box-shadow:5px 5px 10px #10333d,-5px -5px 10px #1e5d6f;border-radius:5px;border:none;outline:none;padding:10px;margin-bottom:25px;color:#fff;font-family:Roboto,sans-serif;font-size:20px;font-weight:100}:host .form-wrapper .length-input::-webkit-inner-spin-button,:host .form-wrapper .length-input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}:host .form-wrapper .length-input[type=number]{-moz-appearance:textfield}:host .form-wrapper .next-button{background:linear-gradient(315deg,#194d5c,#15414d);box-shadow:5px 5px 10px #10333d,-5px -5px 10px #1e5d6f;border-radius:5px;padding:10px;font-size:20px;color:#fff;font-family:Roboto;font-weight:100;transition:all .2s ease;border:none;outline:none}:host .form-wrapper .next-button:hover{cursor:pointer;box-shadow:none;background:linear-gradient(145deg,#194d5c,#15414d)}:host(:not([active])){display:none}"),rt="\n  <style>\n  ".concat(nt,'\n  </style>\n  <div class="form-wrapper">\n    <label for="length-input" class="input-label">Stream Length(in bits)</label>\n    <input id="length-input" class="length-input" type="number" min="2" max="16" placeholder="0"/>\n    <button class="next-button" id="next-button">NEXT</button>\n  </div>\n');function ot(t){return(ot="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function it(t,e){return(it=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function at(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=st(t);if(e){var o=st(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return ct(this,n)}}function ct(t,e){return!e||"object"!==ot(e)&&"function"!=typeof e?lt(t):e}function lt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function st(t){return(st=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function ut(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var dt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&it(t,e)}(n,t);var e=at(n);function n(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),ut(lt(t=e.call(this,rt)),"streamLength",0),ut(lt(t),"bindEventListeners",(function(){var e,n=null===(e=t.shadowRoot)||void 0===e?void 0:e.getElementById("next-button");null==n||n.addEventListener("click",(function(){if(t.isStreamLengthValid()){var e,n,r,o=null===(e=t.shadowRoot)||void 0===e?void 0:e.querySelector("#length-input");t.setAttribute(f.DataStreamLength,o.value);var i=new CustomEvent(d.StreamLengthChange,{detail:ut({},f.DataStreamLength,o.value)});null===(n=t.parentElement)||void 0===n||n.dispatchEvent(i);var a=new CustomEvent(d.ActiveComponentChange,{detail:ut({},f.ComponentId,m.StreamBitForm)});null===(r=t.parentElement)||void 0===r||r.dispatchEvent(a)}else{var c,l=new CustomEvent(d.ErrorNotification,{detail:ut({},f.ErrorMessage,g.StreamLengthError)});null===(c=t.parentElement)||void 0===c||c.dispatchEvent(l)}}))})),ut(lt(t),"isStreamLengthValid",(function(){var e,n=null===(e=t.shadowRoot)||void 0===e?void 0:e.getElementById("length-input");return parseInt(n.value)>=2})),t.bindEventListeners(),t}return n}(u);customElements.define("app-wrapper",_),customElements.define("bread-crumb",G),customElements.define("landing-banner",et),customElements.define("stream-length-form",dt)}();