/*! For license information please see Pokemon-header.js.LICENSE.txt */
System.register(["react","react-dom"],(function(e,n){var t={},r={};return Object.defineProperty(t,"__esModule",{value:!0}),{setters:[function(e){Object.keys(e).forEach((function(n){t[n]=e[n]}))},function(e){r.default=e.default}],execute:function(){e((()=>{var e={107:(e,n,t)=>{"use strict";t.d(n,{Z:()=>s});var r=t(799),o=t.n(r),a=t(609),i=t.n(a)()(o());i.push([e.id,".header {\n    padding: 1rem;\n    color: var(--white);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 3;\n}\n\n.header__sectionImg-img {\n    height: 50px;\n}\n\n.header__changeLanguage-button {\n    background: transparent;\n    font-size: 1.5rem;\n    color: var(--white);\n    display: flex;\n    gap: 10px;\n    cursor: pointer;\n}\n\n.header__changeLanguage-arrow {\n    transition: .3s;\n    transform: rotate(0deg);\n}\n\n.header__changeLanguage-arrow.active {\n    transition: .3s;\n    transform: rotate(180deg);\n}\n\n.header__containerSelect {\n    transition: .3s;\n    right: 0;\n    top: 28px;\n    width: 70px;\n    z-index: -1;\n    opacity: 0;\n}\n\n.header__containerSelect.active {\n    top: 38px;\n    opacity: 1;\n    z-index: 2;\n}","",{version:3,sources:["webpack://./src/components/Header/header.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe;IACf,MAAM;IACN,OAAO;IACP,QAAQ;IACR,UAAU;AACd;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,iBAAiB;IACjB,mBAAmB;IACnB,aAAa;IACb,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,QAAQ;IACR,SAAS;IACT,WAAW;IACX,WAAW;IACX,UAAU;AACd;;AAEA;IACI,SAAS;IACT,UAAU;IACV,UAAU;AACd",sourcesContent:[".header {\n    padding: 1rem;\n    color: var(--white);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 3;\n}\n\n.header__sectionImg-img {\n    height: 50px;\n}\n\n.header__changeLanguage-button {\n    background: transparent;\n    font-size: 1.5rem;\n    color: var(--white);\n    display: flex;\n    gap: 10px;\n    cursor: pointer;\n}\n\n.header__changeLanguage-arrow {\n    transition: .3s;\n    transform: rotate(0deg);\n}\n\n.header__changeLanguage-arrow.active {\n    transition: .3s;\n    transform: rotate(180deg);\n}\n\n.header__containerSelect {\n    transition: .3s;\n    right: 0;\n    top: 28px;\n    width: 70px;\n    z-index: -1;\n    opacity: 0;\n}\n\n.header__containerSelect.active {\n    top: 38px;\n    opacity: 1;\n    z-index: 2;\n}"],sourceRoot:""}]);const s=i},917:(e,n,t)=>{"use strict";t.d(n,{Z:()=>s});var r=t(799),o=t.n(r),a=t(609),i=t.n(a)()(o());i.push([e.id,".select__ul {\n    list-style: none;\n    background: rgb(255 255 255 / 37%);\n    border-radius: .5rem;\n    overflow: hidden;\n}\n\n.select__ul-list {\n    transition: .3s;\n    background: transparent;\n}\n\n.select__ul-list:hover {\n    transition: .3s;\n    background: rgb(255 255 255 / 37%);\n}\n\n.select__ul-button {\n    display: flex;\n    padding: .3rem .5rem .3rem 0;\n    background: transparent;\n    width: 100%;\n    color: var(--white);\n    cursor: pointer;\n    align-items: center;\n}\n\n.select__ul-button span {\n    flex-basis: 30px;\n    font-size: .6rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}","",{version:3,sources:["webpack://./src/components/Select/select.css"],names:[],mappings:"AAAA;IACI,gBAAgB;IAChB,kCAAkC;IAClC,oBAAoB;IACpB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,4BAA4B;IAC5B,uBAAuB;IACvB,WAAW;IACX,mBAAmB;IACnB,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B",sourcesContent:[".select__ul {\n    list-style: none;\n    background: rgb(255 255 255 / 37%);\n    border-radius: .5rem;\n    overflow: hidden;\n}\n\n.select__ul-list {\n    transition: .3s;\n    background: transparent;\n}\n\n.select__ul-list:hover {\n    transition: .3s;\n    background: rgb(255 255 255 / 37%);\n}\n\n.select__ul-button {\n    display: flex;\n    padding: .3rem .5rem .3rem 0;\n    background: transparent;\n    width: 100%;\n    color: var(--white);\n    cursor: pointer;\n    align-items: center;\n}\n\n.select__ul-button span {\n    flex-basis: 30px;\n    font-size: .6rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}"],sourceRoot:""}]);const s=i},609:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},799:e=>{"use strict";function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}e.exports=function(e){var t,r,o=(r=4,function(e){if(Array.isArray(e))return e}(t=e)||function(e,n){var t=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=t){var r,o,a=[],i=!0,s=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(e){s=!0,o=e}finally{try{i||null==t.return||t.return()}finally{if(s)throw o}}return a}}(t,r)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[1],i=o[3];if(!i)return a;if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),u="/*# ".concat(c," */"),l=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[a].concat(l).concat([u]).join("\n")}return[a].join("\n")}},320:e=>{"use strict";var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var a,i,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var u in a=Object(arguments[c]))t.call(a,u)&&(s[u]=a[u]);if(n){i=n(a);for(var l=0;l<i.length;l++)r.call(a,i[l])&&(s[i[l]]=a[i[l]])}}return s}},837:(e,n,t)=>{"use strict";t(320);var r=t(954),o=60103;if("function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),a("react.fragment")}var i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,n,t){var r,a={},u=null,l=null;for(r in void 0!==t&&(u=""+t),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,r)&&!c.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===a[r]&&(a[r]=n[r]);return{$$typeof:o,type:e,key:u,ref:l,props:a,_owner:i.current}}n.jsx=u,n.jsxs=u},322:(e,n,t)=>{"use strict";e.exports=t(837)},62:e=>{"use strict";var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],u=r.base?c[0]+r.base:c[0],l=a[u]||0,p="".concat(u," ").concat(l);a[u]=l+1;var d=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)n[d].references++,n[d].updater(f);else{var m=o(f,r);r.byIndex=s,n.splice(s,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=r(e,o),u=0;u<a.length;u++){var l=t(a[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=c}}},793:e=>{"use strict";var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},173:e=>{"use strict";e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},892:(e,n,t)=>{"use strict";e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},36:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},464:e=>{"use strict";e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},907:(e,n,t)=>{const r=t(541).R;n.s=function(e){if(e||(e=1),!t.y.meta||!t.y.meta.url)throw console.error("__system_context__",t.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");t.p=r(t.y.meta.url,e)}},541:(e,n,t)=>{n.R=function(e,n){var t=document.createElement("a");t.href=e;for(var r="/"===t.pathname[0]?t.pathname:"/"+t.pathname,o=0,a=r.length;o!==n&&a>=0;)"/"===r[--a]&&o++;if(o!==n)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+n+") is greater than the number of directories ("+o+") in the URL path "+e);var i=r.slice(0,a+1);return t.protocol+"//"+t.host+i};Number.isInteger},954:e=>{"use strict";e.exports=t},493:e=>{"use strict";e.exports=r}},o={};function a(n){var t=o[n];if(void 0!==t)return t.exports;var r=o[n]={id:n,exports:{}};return e[n](r,r.exports,a),r.exports}a.y=n,a.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return a.d(n,{a:n}),n},a.d=(e,n)=>{for(var t in n)a.o(n,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},a.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="",a.nc=void 0;var i={};return(0,a(907).s)(1),(()=>{"use strict";a.r(i),a.d(i,{bootstrap:()=>z,mount:()=>W,unmount:()=>Z});var e=a(954),n=a(493);function t(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function r(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,n){var t;if("function"!=typeof(t=n.domElement?function(){return n.domElement}:n.domElementGetter?n.domElementGetter:e.domElementGetter?e.domElementGetter:function(e){var n=e.appName||e.name;if(!n)throw Error("single-spa's dom-element-getter-helpers was not given an application name as a prop, so it can't make a unique dom element container for the react application");var t="single-spa-application:".concat(n);return function(){var e=document.getElementById(t);return e||((e=document.createElement("div")).id=t,document.body.appendChild(e)),e}}(n)))throw Error("single-spa's dom-element-getter-helpers was given an invalid domElementGetter for application or parcel '".concat(n.name,"'. Expected a function, received ").concat(c(t)));return function(){var e=t(n);if(!(e instanceof HTMLElement))throw Error("single-spa's dom-element-getter-helpers: domElementGetter returned an invalid dom element for application or parcel '".concat(n.name,"'. Expected HTMLElement, received ").concat(c(e)));return e}}var l=null;try{l=require("react").createContext()}catch(t){}var p={React:null,ReactDOM:null,rootComponent:null,loadRootComponent:null,renderType:null,errorBoundary:null,errorBoundaryClass:null,domElementGetter:null,parcelCanUpdate:!0,suppressComponentDidCatchWarning:!1,domElements:{},renderResults:{},updateResolves:{}};function d(e,n){return e.rootComponent?Promise.resolve():e.loadRootComponent(n).then((function(n){e.rootComponent=n}))}function f(e,n){return new Promise((function(t,r){e.suppressComponentDidCatchWarning||!function(e){if(!(e&&"string"==typeof e.version&&e.version.indexOf(".")>=0))return!1;var n=e.version.slice(0,e.version.indexOf("."));try{return Number(n)>=16}catch(e){return!1}}(e.React)||e.errorBoundary||(e.rootComponent.prototype?e.rootComponent.prototype.componentDidCatch||console.warn("single-spa-react: ".concat(n.name||n.appName||n.childAppName,"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")):console.warn("single-spa-react: ".concat(n.name||n.appName||n.childAppName,"'s rootComponent does not implement an error boundary.  If using a functional component, consider providing an opts.errorBoundary to singleSpaReact(opts).")));var o=y(e,n,(function(){t(this)})),a=u(e,n)(),i=function(e){var n=e.opts,t=e.elementToRender,r=e.domElement,o="function"==typeof n.renderType?n.renderType():n.renderType;if(["createRoot","unstable_createRoot","createBlockingRoot","unstable_createBlockingRoot"].indexOf(o)>=0){var a=n.ReactDOM[o](r);return a.render(t),a}return"hydrate"===o?n.ReactDOM.hydrate(t,r):n.ReactDOM.render(t,r),null}({elementToRender:o,domElement:a,opts:e});e.domElements[n.name]=a,e.renderResults[n.name]=i}))}function m(e,n){return new Promise((function(t){e.unmountFinished=t;var r=e.renderResults[n.name];r&&r.unmount?r.unmount():e.ReactDOM.unmountComponentAtNode(e.domElements[n.name]),delete e.domElements[n.name],delete e.renderResults[n.name]}))}function A(e,n){return new Promise((function(t){e.updateResolves[n.name]||(e.updateResolves[n.name]=[]),e.updateResolves[n.name].push(t);var r=y(e,n,null),o=e.renderResults[n.name];if(o&&o.render)o.render(r);else{var a=u(e,n)();e.ReactDOM.render(r,a)}}))}function y(e,n,t){var o=e.React.createElement(e.rootComponent,n),a=l?e.React.createElement(l.Provider,{value:n},o):o;return(e.errorBoundary||n.errorBoundary||e.errorBoundaryClass||n.errorBoundaryClass)&&(e.errorBoundaryClass=e.errorBoundaryClass||n.errorBoundaryClass||function(e,n){function t(n){e.React.Component.apply(this,arguments),this.state={caughtError:null,caughtErrorInfo:null},t.displayName="SingleSpaReactErrorBoundary(".concat(n.name,")")}return t.prototype=Object.create(e.React.Component.prototype),t.prototype.render=function(){return this.state.caughtError?(e.errorBoundary||n.errorBoundary)(this.state.caughtError,this.state.caughtErrorInfo,this.props):this.props.children},t.prototype.componentDidCatch=function(e,n){this.setState({caughtError:e,caughtErrorInfo:n})},t}(e,n),a=e.React.createElement(e.errorBoundaryClass,n,a)),e.React.createElement(e.SingleSpaRoot,r(r({},n),{},{mountFinished:t,updateFinished:function(){e.updateResolves[n.name]&&(e.updateResolves[n.name].forEach((function(e){return e()})),delete e.updateResolves[n.name])},unmountFinished:function(){setTimeout(e.unmountFinished)}}),a)}function h(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var g=a(62),b=a.n(g),v=a(36),C=a.n(v),I=a(793),_=a.n(I),B=a(892),w=a.n(B),x=a(173),E=a.n(x),j=a(464),O=a.n(j),S=a(107),R={};R.styleTagTransform=O(),R.setAttributes=w(),R.insert=_().bind(null,"head"),R.domAPI=C(),R.insertStyleElement=E(),b()(S.Z,R),S.Z&&S.Z.locals&&S.Z.locals;const k=a.p+"65546e03fd3b5bd408ca.png";var T=a(917),N={};N.styleTagTransform=O(),N.setAttributes=w(),N.insert=_().bind(null,"head"),N.domAPI=C(),N.insertStyleElement=E(),b()(T.Z,N),T.Z&&T.Z.locals&&T.Z.locals;var P=a(322),M=function(e){var n=e.languages,t=e.active,r=e.handle;return(0,P.jsx)("ul",{className:"select__ul",children:n.map((function(e){return(0,P.jsx)("li",{className:"select__ul-list",children:(0,P.jsxs)("button",{className:"select__ul-button",onClick:function(){return r(e)},children:[(0,P.jsx)("span",{children:t===e&&(0,P.jsx)("i",{className:"icon-checkmark"})}),e]})},e)}))})},D=function(e){return e.es="es",e.en="en",e}({}),U=[D.es,D.en],L=function(){var n=function(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a,i,s=[],c=!0,u=!1;try{if(a=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=a.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(u)throw o}}return s}}(e,n)||function(e,n){if(e){if("string"==typeof e)return h(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?h(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,e.useState)(!1),2),t=n[0],r=n[1];return(0,P.jsxs)("header",{className:"header",children:[(0,P.jsx)("section",{children:(0,P.jsx)("img",{src:k,className:"header__sectionImg-img",alt:"Pokémon"})}),(0,P.jsxs)("aside",{className:"relative",children:[(0,P.jsxs)("button",{className:"header__changeLanguage-button",onClick:function(){return r((function(e){return!e}))},children:[(0,P.jsx)("i",{className:"icon-translate"}),(0,P.jsx)("i",{className:"icon-arrow-down header__changeLanguage-arrow ".concat(t?"active":"")})]}),(0,P.jsx)("div",{className:"absolute header__containerSelect ".concat(t?"active":""),children:(0,P.jsx)(M,{languages:U,active:D.es,handle:function(){}})})]})]})},F=function(e){if("object"!==o(e))throw new Error("single-spa-react requires a configuration object");var n=r(r({},p),e);if(!n.React)throw new Error("single-spa-react must be passed opts.React");if(!n.ReactDOM)throw new Error("single-spa-react must be passed opts.ReactDOM");if(!n.rootComponent&&!n.loadRootComponent)throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");if(n.errorBoundary&&"function"!=typeof n.errorBoundary)throw Error("The errorBoundary opt for single-spa-react must either be omitted or be a function that returns React elements");!l&&n.React.createContext&&(l=n.React.createContext()),n.SingleSpaRoot=function(e){function n(e){n.displayName="SingleSpaRoot(".concat(e.name,")")}return n.prototype=Object.create(e.React.Component.prototype),n.prototype.componentDidMount=function(){setTimeout(this.props.mountFinished)},n.prototype.componentWillUnmount=function(){setTimeout(this.props.unmountFinished)},n.prototype.render=function(){return setTimeout(this.props.updateFinished),this.props.children},n}(n);var t={bootstrap:d.bind(null,n),mount:f.bind(null,n),unmount:m.bind(null,n)};return n.parcelCanUpdate&&(t.update=A.bind(null,n)),t}({React:e.default,ReactDOM:n.default,rootComponent:function(e){return(0,P.jsx)(L,{})},errorBoundary:function(e,n,t){return null}}),z=F.bootstrap,W=F.mount,Z=F.unmount})(),i})())}}}));
//# sourceMappingURL=Pokemon-header.js.map