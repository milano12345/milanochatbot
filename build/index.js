module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=12)}([function(t,e){t.exports=require("react")},function(t,e,r){t.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e){t.exports=r(0)},function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var l=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,s(e).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(e,n.Component),function(t,e,r){e&&i(t.prototype,e)}(e,[{key:"render",value:function(){var t=this.props,e=t.ifTrue,r=t.show,n=t.elseShow;return o.a.createElement(o.a.Fragment,null,e&&r,n&&!e&&n)}}]),e}();function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function m(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var y=function(t){function e(t){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),h(m(m(r=function(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?m(t):e}(this,d(e).call(this,t)))),"toggleDropdown",(function(){r.setState((function(t){return{dropdownOpen:!t.dropdownOpen}}))})),h(m(m(r)),"openDropdown",(function(){r.setState({dropdownOpen:!0})})),h(m(m(r)),"closeDropdown",(function(){r.setState({dropdownOpen:!1})})),r.state={dropdownOpen:!1},r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(e,n.Component),function(t,e,r){e&&p(t.prototype,e)}(e,[{key:"render",value:function(){var t=this.state.dropdownOpen;return o.a.createElement(n.Fragment,null,this.props.render(t,this.toggleDropdown,this.openDropdown,this.closeDropdown))}}]),e}();r.d(e,"ConditionallyRender",(function(){return l})),r.d(e,"Dropdown",(function(){return y}));var g={ConditionallyRender:l,Dropdown:y};e.default=g}])},function(t,e,r){"use strict";var n,o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},a=function(){var t={};return function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}t[e]=r}return t[e]}}(),i=[];function c(t){for(var e=-1,r=0;r<i.length;r++)if(i[r].identifier===t){e=r;break}return e}function s(t,e){for(var r={},n=[],o=0;o<t.length;o++){var a=t[o],s=e.base?a[0]+e.base:a[0],u=r[s]||0,l="".concat(s," ").concat(u);r[s]=u+1;var f=c(l),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==f?(i[f].references++,i[f].updater(p)):i.push({identifier:l,updater:h(p,e),references:1}),n.push(l)}return n}function u(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var o=r.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var i=a(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var l,f=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function p(t,e,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=f(e,o);else{var a=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}function d(t,e,r){var n=r.css,o=r.media,a=r.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),a&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var b=null,m=0;function h(t,e){var r,n,o;if(e.singleton){var a=m++;r=b||(b=u(e)),n=p.bind(null,r,a,!1),o=p.bind(null,r,a,!0)}else r=u(e),n=d.bind(null,r,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(r)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var r=s(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<r.length;n++){var o=c(r[n]);i[o].references--}for(var a=s(t,e),u=0;u<r.length;u++){var l=c(r[u]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}r=a}}}},function(t,e,r){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=function(t,e){var r=t[1]||"",n=t[3];if(!n)return r;if(e&&"function"==typeof btoa){var o=(i=n,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),a=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(t," */")}));return[r].concat(a).concat([o]).join("\n")}var i,c,s;return[r].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(t,r,n){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(n)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<t.length;c++){var s=[].concat(t[c]);n&&o[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),e.push(s))}},e}},function(t,e,r){var n=r(2),o=r(5);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var a={insert:"head",singleton:!1},i=(n(o,a),o.locals?o.locals:{});t.exports=i},function(t,e,r){(e=r(3)(!1)).push([t.i,".react-chatbot-kit-user-chat-message-container {\r\n  display: flex;\r\n  margin: 15px 0;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.react-chatbot-kit-user-avatar-container {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 50%;\r\n  margin-left: 12.5px;\r\n  background-color: #3d4e8d;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.react-chatbot-kit-user-avatar-icon {\r\n  fill: #fff;\r\n  width: 15px;\r\n  height: 15px;\r\n}\r\n\r\n.react-chatbot-kit-user-chat-message {\r\n  background-color: #f1f1f1;\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  font-size: 0.9rem;\r\n  color: #585858;\r\n  font-weight: medium;\r\n  position: relative;\r\n  text-align: left;\r\n}\r\n\r\n.react-chatbot-kit-user-chat-message-arrow {\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 8px solid transparent;\r\n  border-bottom: 8px solid transparent;\r\n  border-left: 8px solid #f1f1f1;\r\n  position: absolute;\r\n  right: -7px;\r\n  top: 13px;\r\n}\r\n",""]),t.exports=e},function(t,e,r){var n=r(2),o=r(7);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var a={insert:"head",singleton:!1},i=(n(o,a),o.locals?o.locals:{});t.exports=i},function(t,e,r){(e=r(3)(!1)).push([t.i,".react-chatbot-kit-chat-bot-message-container {\r\n  display: flex;\r\n  margin: 15px 0;\r\n  justify-content: flex-start;\r\n}\r\n\r\n.react-chatbot-kit-chat-bot-avatar-container {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 50%;\r\n  font-size: 1.2rem;\r\n  margin-right: 12.5px;\r\n  background-color: #d8d8d8;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.react-chatbot-kit-chat-bot-avatar-icon {\r\n  fill: #494646;\r\n  width: 22.5px;\r\n  height: 22.5px;\r\n}\r\n\r\n.react-chatbot-kit-chat-bot-avatar-letter {\r\n  color: #1d1d1d;\r\n}\r\n\r\n.react-chatbot-kit-chat-bot-message {\r\n  background-color: #2898ec;\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  font-size: 0.9rem;\r\n  color: #fff;\r\n  font-weight: medium;\r\n  position: relative;\r\n  width: 184.5px;\r\n  margin-left: auto;\r\n  text-align: left;\r\n}\r\n\r\n.react-chatbot-kit-chat-bot-message-arrow {\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 8px solid transparent;\r\n  border-bottom: 8px solid transparent;\r\n  border-right: 8px solid #2898ec;\r\n  position: absolute;\r\n  left: -7px;\r\n  top: 13px;\r\n}\r\n\r\n.react-chatbot-kit-chat-bot-loading-icon-container {\r\n  height: 17px;\r\n  width: 25px;\r\n}\r\n\r\n.chatbot-loader-container {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: center;\r\n}\r\n\r\n#chatbot-loader #chatbot-loader-dot1 {\r\n  animation: load 1s infinite;\r\n}\r\n\r\n#chatbot-loader #chatbot-loader-dot2 {\r\n  animation: load 1s infinite;\r\n  animation-delay: 0.2s;\r\n}\r\n\r\n#chatbot-loader #chatbot-loader-dot3 {\r\n  animation: load 1s infinite;\r\n  animation-delay: 0.4s;\r\n}\r\n\r\n@keyframes load {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  50% {\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n",""]),t.exports=e},function(t,e,r){var n=r(2),o=r(9);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var a={insert:"head",singleton:!1},i=(n(o,a),o.locals?o.locals:{});t.exports=i},function(t,e,r){(e=r(3)(!1)).push([t.i,".react-chatbot-kit-chat-container {\r\n  position: relative;\r\n  width: 275px;\r\n}\r\n\r\n.react-chatbot-kit-chat-inner-container {\r\n  height: 500px;\r\n  background-color: #fff;\r\n  border-radius: 3px;\r\n  margin-bottom: 15px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.react-chatbot-kit-chat-header {\r\n  border-top-right-radius: 5px;\r\n  border-top-left-radius: 5px;\r\n  background-color: #efefef;\r\n  font-family: Arial;\r\n  display: flex;\r\n  align-items: center;\r\n  font-size: 0.85rem;\r\n  color: #514f4f;\r\n  padding: 12.5px;\r\n  font-weight: bold;\r\n}\r\n\r\n.react-chatbot-kit-chat-input-container {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  display: flex;\r\n}\r\n\r\n.react-chatbot-kit-chat-message-container {\r\n  padding: 0 17.5px 10px 17.5px;\r\n  overflow: scroll;\r\n  height: 424px;\r\n}\r\n\r\n.react-chatbot-kit-chat-input {\r\n  width: 100%;\r\n  padding: 12.5px;\r\n  border: none;\r\n  font-size: 0.85rem;\r\n  border-top: 1px solid #d8d8d8;\r\n  border-bottom-left-radius: 5px;\r\n}\r\n\r\n.react-chatbot-kit-chat-input-form {\r\n  width: 100%;\r\n  display: flex;\r\n}\r\n\r\n.react-chatbot-kit-chat-input::placeholder {\r\n  color: #585858;\r\n}\r\n\r\n.react-chatbot-kit-chat-btn-send {\r\n  background-color: #2898ec;\r\n  width: 100px;\r\n  border: none;\r\n  color: #fff;\r\n  border-bottom-right-radius: 5px;\r\n}\r\n\r\n.react-chatbot-kit-chat-btn-send-icon {\r\n  fill: #fff;\r\n  width: 15px;\r\n}\r\n",""]),t.exports=e},function(t,e,r){var n=r(2),o=r(11);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var a={insert:"head",singleton:!1},i=(n(o,a),o.locals?o.locals:{});t.exports=i},function(t,e,r){(e=r(3)(!1)).push([t.i,".react-chatbot-kit-error {\r\n  background-color: #fff;\r\n  border-radius: 3px;\r\n  padding: 15px;\r\n}\r\n\r\n.react-chatbot-kit-error-container {\r\n  width: 260px;\r\n}\r\n\r\n.react-chatbot-kit-error-header {\r\n  font-size: 1.3rem;\r\n  color: #1d1d1d;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.react-chatbot-kit-error-docs {\r\n  display: block;\r\n  margin: 25px auto;\r\n  color: rgb(56, 104, 139);\r\n  padding: 8px;\r\n  border: 1px solid rgb(40, 152, 236);\r\n  width: 130px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  font-size: 1rem;\r\n}\r\n",""]),t.exports=e},function(t,e,r){"use strict";r.r(e),r.d(e,"Chatbot",(function(){return Q})),r.d(e,"createChatBotMessage",(function(){return u})),r.d(e,"createClientMessage",(function(){return l}));var n=r(0),o=r.n(n),a=r(1);function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var s=function(t,e){return{message:t,type:e,id:Date.now()*Math.random()}},u=function(t,e){return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},s(t,"bot"),{},e,{loading:!0})},l=function(t){return s(t,"user")},f=function(t){if(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];return t.apply(void 0,r)}};function p(){return(p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var d=({styles:t={},...e})=>o.a.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},e),o.a.createElement("path",{d:"M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"})),b=(r(4),function(t){var e=t.message,r=t.customComponents;return o.a.createElement("div",{className:"react-chatbot-kit-user-chat-message-container"},o.a.createElement(a.ConditionallyRender,{ifTrue:r.userChatMessage,show:f(r.userChatMessage,{message:e}),elseShow:o.a.createElement("div",{className:"react-chatbot-kit-user-chat-message"},e,o.a.createElement("div",{className:"react-chatbot-kit-user-chat-message-arrow"}))}),o.a.createElement(a.ConditionallyRender,{ifTrue:r.userAvatar,show:f(r.userAvatar),elseShow:o.a.createElement("div",{className:"react-chatbot-kit-user-avatar"},o.a.createElement("div",{className:"react-chatbot-kit-user-avatar-container"},o.a.createElement(d,{className:"react-chatbot-kit-user-avatar-icon"})))}))}),m=function(){return o.a.createElement("div",{className:"react-chatbot-kit-chat-bot-avatar"},o.a.createElement("div",{className:"react-chatbot-kit-chat-bot-avatar-container"},o.a.createElement("p",{className:"react-chatbot-kit-chat-bot-avatar-letter"},"B")))},h=function(){return o.a.createElement("div",{className:"chatbot-loader-container"},o.a.createElement("svg",{id:"dots",width:"50px",height:"21px",viewBox:"0 0 132 58",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("g",{stroke:"none",fill:"none"},o.a.createElement("g",{id:"chatbot-loader",fill:"#fff"},o.a.createElement("circle",{id:"chatbot-loader-dot1",cx:"25",cy:"30",r:"13"}),o.a.createElement("circle",{id:"chatbot-loader-dot2",cx:"65",cy:"30",r:"13"}),o.a.createElement("circle",{id:"chatbot-loader-dot3",cx:"105",cy:"30",r:"13"})))))};r(6);function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function g(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function v(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,a=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return w(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var O=function(t){var e=t.message,r=t.withAvatar,i=t.loading,c=t.messages,s=t.customComponents,u=t.setState,l=t.customStyles,p=t.delay,d=t.id,b=v(Object(n.useState)(!1),2),w=b[0],O=b[1];Object(n.useEffect)((function(){!function(t,e){var r=750;p&&(r+=p),setTimeout((function(){var r=t.find((function(t){return t.id===d}));r&&(r.loading=!1,r.delay=void 0,e((function(e){return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(Object(r),!0).forEach((function(e){g(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},e,{messages:t})})))}),r)}(c,u)}),[p,d,u]),Object(n.useEffect)((function(){p?setTimeout((function(){return O(!0)}),p):O(!0)}),[p]);var j={},x={};return l&&(j.backgroundColor=l.backgroundColor,x.borderRightColor=l.backgroundColor),o.a.createElement(a.ConditionallyRender,{ifTrue:w,show:o.a.createElement("div",{className:"react-chatbot-kit-chat-bot-message-container"},o.a.createElement(a.ConditionallyRender,{ifTrue:r,show:o.a.createElement(a.ConditionallyRender,{ifTrue:s.botAvatar,show:f(s.botAvatar),elseShow:o.a.createElement(m,null)})}),o.a.createElement(a.ConditionallyRender,{ifTrue:s.botChatMessage,show:f(s.botChatMessage,{message:e,loader:o.a.createElement(h,null)}),elseShow:o.a.createElement("div",{className:"react-chatbot-kit-chat-bot-message",style:j},o.a.createElement(a.ConditionallyRender,{ifTrue:i,show:o.a.createElement(h,null),elseShow:o.a.createElement("span",null,e)}),o.a.createElement(a.ConditionallyRender,{ifTrue:r,show:o.a.createElement("div",{className:"react-chatbot-kit-chat-bot-message-arrow",style:x})}))}))})};function j(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function x(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?j(Object(r),!0).forEach((function(e){S(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function S(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function E(){return(E=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var P=function(t){var e=t.passDownProps,r=t.messages,i=t.setState,c=t.scrollIntoView,s=t.state,u=t.customComponents,l=t.customStyles,f=t.widgetRegistry,p=t.withAvatar;return o.a.createElement(n.Fragment,null,o.a.createElement(O,E({},e,{customStyles:l.botMessageBox,messages:r,withAvatar:p,setState:i,customComponents:u})),o.a.createElement(a.ConditionallyRender,{ifTrue:!e.loading,show:f.getWidget(e.widget,x({},s,{scrollIntoView:c}))}))};function k(){return(k=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var C=({styles:t={},...e})=>o.a.createElement("svg",k({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},e),o.a.createElement("path",{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"}));r(8);function T(t){return function(t){if(Array.isArray(t))return I(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||R(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(){return(A=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function M(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function D(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?M(Object(r),!0).forEach((function(e){N(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function N(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function _(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,a=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}(t,e)||R(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(t,e){if(t){if("string"==typeof t)return I(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?I(t,e):void 0}}function I(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var B=function(t){var e=t.state,r=t.setState,i=t.widgetRegistry,c=t.messageParser,u=t.customComponents,l=t.botName,f=t.customStyles,p=t.headerText,d=t.placeholderText,m=e.messages,h=Object(n.useRef)(null),y=_(Object(n.useState)(""),2),g=y[0],v=y[1],w=function(){setTimeout((function(){h.current.scrollTop=h.current.scrollHeight}),50)};Object(n.useEffect)((function(){w()}));var j={};f&&f.chatButton&&(j.backgroundColor=f.chatButton.backgroundColor);var x="Conversation with ".concat(l);p&&(x=p);var S="Write your message here";return d&&(S=d),o.a.createElement("div",{className:"react-chatbot-kit-chat-container"},o.a.createElement("div",{className:"react-chatbot-kit-chat-inner-container"},o.a.createElement(a.ConditionallyRender,{ifTrue:u.header,show:u.header&&u.header(),elseShow:o.a.createElement("div",{className:"react-chatbot-kit-chat-header"},x)}),o.a.createElement("div",{className:"react-chatbot-kit-chat-message-container",ref:h},m.map((function(t,n){if("bot"!==t.type)return o.a.createElement(b,{message:t.message,key:t.id,customComponents:u});var a;a=t.withAvatar?t.withAvatar:function(t,e){if(0===e)return!0;var r=t[e-1];return!("bot"===r.type&&!r.widget)}(m,n,t.withAvatar);var c={passDownProps:D({},t),setState:r,state:e,customComponents:u,widgetRegistry:i,messages:m};return t.widget?o.a.createElement(P,A({customStyles:f,scrollIntoView:w,withAvatar:a},c,{key:t.id})):o.a.createElement(O,A({customStyles:f.botMessageBox,key:t.id,withAvatar:a},c.passDownProps,{customComponents:u,messages:m,setState:r}))})),o.a.createElement("div",{style:{paddingBottom:"15px"}})),o.a.createElement("div",{className:"react-chatbot-kit-chat-input-container"},o.a.createElement("form",{className:"react-chatbot-kit-chat-input-form",onSubmit:function(t){t.preventDefault(),r((function(t){return D({},t,{messages:[].concat(T(t.messages),[s(g,"user")])})})),c.parse(g),w(),v("")}},o.a.createElement("input",{className:"react-chatbot-kit-chat-input",placeholder:S,value:g,onChange:function(t){return v(t.target.value)}}),o.a.createElement("button",{className:"react-chatbot-kit-chat-btn-send",style:j},o.a.createElement(C,{className:"react-chatbot-kit-chat-btn-send-icon"}))))))};function z(t){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function L(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function U(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var F=function t(e,r){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),U(this,"addWidget",(function(t){var e=t.widgetName,r=t.widgetFunc,o=t.mapStateToProps,a=t.props;n[e]={widget:r,props:a,mapStateToProps:o}})),U(this,"getWidget",(function(t,e){var r=n[t];if(r){var o,a=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?L(Object(r),!0).forEach((function(e){U(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({scrollIntoView:e.scrollIntoView},"object"===z(o=r.props)?o:{},{},n.mapStateToProps(r.mapStateToProps,e),{setState:n.setState,actionProvider:n.actionProvider});return r.widget(a)}})),U(this,"mapStateToProps",(function(t,e){if(t)return t.reduce((function(t,r){return t[r]=e[r],t}),{})})),this.setState=e,this.actionProvider=r},V=(r(10),function(t){var e=t.message;return o.a.createElement("div",{className:"react-chatbot-kit-error"},o.a.createElement("h1",{className:"react-chatbot-kit-error-header"},"Ooops. Something is missing."),o.a.createElement("div",{className:"react-chatbot-kit-error-container"},o.a.createElement(O,{message:e,withAvatar:!0,loading:!1,id:1,customComponents:{},messages:[]})),o.a.createElement("a",{href:"https://fredrikoseberg.github.io/react-chatbot-kit-docs/",rel:"noopener norefferer",target:"_blank",className:"react-chatbot-kit-error-docs"},"View the docs"))});function H(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function W(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?H(Object(r),!0).forEach((function(e){$(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function $(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function q(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,a=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}(t,e)||G(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(t){return function(t){if(Array.isArray(t))return K(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||G(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(t,e){if(t){if("string"==typeof t)return K(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?K(t,e):void 0}}function K(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var Q=function(t){var e=t.actionProvider,r=t.messageParser,a=t.config,i=t.headerText,c=t.placeholderText,s=t.saveMessages,f=t.messageHistory;if(!a||!e||!r)return o.a.createElement(V,{message:"I think you forgot to feed me some props. Did you remember to pass a config, a messageparser and an actionprovider?"});var p=function(t,e){var r=[];return t.initialMessages||r.push("Config must contain property 'initialMessages', and it expects it to be an array of chatbotmessages."),(new e).parse||r.push("Messageparser must implement the method 'parse', please add this method to your object. The signature is parse(message: string)."),r}(a,r);if(p.length){var d=p.reduce((function(t,e){return t+=e}),"");return o.a.createElement(V,{message:d})}var b=function(t){return t.state?t.state:{}}(a);f&&Array.isArray(f)&&(a.initialMessages=J(f));var m=q(Object(n.useState)(W({messages:J(a.initialMessages)},b)),2),h=m[0],y=m[1],g=Object(n.useRef)(h.messages);Object(n.useEffect)((function(){g.current=h.messages})),Object(n.useEffect)((function(){return f&&Array.isArray(f)&&y((function(t){return W({},t,{messages:f})})),function(){s&&"function"==typeof s&&s(g.current)}}),[]);var v=function(t){return t.customStyles?t.customStyles:{}}(a),w=function(t){return t.customComponents?t.customComponents:{botMessageBox:{},chatButton:{}}}(a),O=function(t){return t.botName?t.botName:"Bot"}(a),j=new e(u,y,l),x=new F(y,j),S=new r(j,h);return function(t){return t.widgets?t.widgets:[]}(a).forEach((function(t){return x.addWidget(t)})),o.a.createElement(B,{state:h,setState:y,widgetRegistry:x,messageParser:S,customComponents:W({},w),botName:O,customStyles:W({},v),headerText:i,placeholderText:c})};e.default=Q}]);