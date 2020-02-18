/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error (65176), unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});/*!
  * Bootstrap v4.4.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function(global,factory){typeof exports==='object'&&typeof module!=='undefined'?factory(exports,require('jquery')):typeof define==='function'&&define.amd?define(['exports','jquery'],factory):(global=global||self,factory(global.bootstrap={},global.jQuery))}(this,(function(exports,$){'use strict';$=$&&$.hasOwnProperty('default')?$['default']:$;function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value" in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}
function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}
function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}
return obj}
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}
return keys}
function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}
return target}
function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass}/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.4.1): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  var TRANSITION_END = 'transitionend';
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined; // eslint-disable-line no-undefined
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    $.fn.emulateTransitionEnd = transitionEndEmulator;
    $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        var hrefAttr = element.getAttribute('href');
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (err) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      var transitionDuration = $(element).css('transition-duration');
      var transitionDelay = $(element).css('transition-delay');
      var floatTransitionDuration = parseFloat(transitionDuration);
      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(TRANSITION_END);
    },
    // TODO: Remove in v5
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document


      if (typeof element.getRootNode === 'function') {
        var root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }

      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root


      if (!element.parentNode) {
        return null;
      }

      return Util.findShadowRoot(element.parentNode);
    },
    jQueryDetection: function jQueryDetection() {
      if (typeof $ === 'undefined') {
        throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
      }

      var version = $.fn.jquery.split(' ')[0].split('.');
      var minMajor = 1;
      var ltMajor = 2;
      var minMinor = 9;
      var minPatch = 1;
      var maxMajor = 4;

      if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
        throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
      }
    }
  };
  Util.jQueryDetection();
  setTransitionEndSupport();

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'alert';
  var VERSION = '4.4.1';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var Selector = {
    DISMISS: '[data-dismiss="alert"]'
  };
  var Event = {
    CLOSE: "close" + EVENT_KEY,
    CLOSED: "closed" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    ALERT: 'alert',
    FADE: 'fade',
    SHOW: 'show'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Alert =
  /*#__PURE__*/
  function () {
    function Alert(element) {
      this._element = element;
    } // Getters


    var _proto = Alert.prototype;

    // Public
    _proto.close = function close(element) {
      var rootElement = this._element;

      if (element) {
        rootElement = this._getRootElement(element);
      }

      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    } // Private
    ;

    _proto._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = document.querySelector(selector);
      }

      if (!parent) {
        parent = $(element).closest("." + ClassName.ALERT)[0];
      }

      return parent;
    };

    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $.Event(Event.CLOSE);
      $(element).trigger(closeEvent);
      return closeEvent;
    };

    _proto._removeElement = function _removeElement(element) {
      var _this = this;

      $(element).removeClass(ClassName.SHOW);

      if (!$(element).hasClass(ClassName.FADE)) {
        this._destroyElement(element);

        return;
      }

      var transitionDuration = Util.getTransitionDurationFromElement(element);
      $(element).one(Util.TRANSITION_END, function (event) {
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(transitionDuration);
    };

    _proto._destroyElement = function _destroyElement(element) {
      $(element).detach().trigger(Event.CLOSED).remove();
    } // Static
    ;

    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Alert;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Alert._jQueryInterface;
  $.fn[NAME].Constructor = Alert;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$1 = 'button';
  var VERSION$1 = '4.4.1';
  var DATA_KEY$1 = 'bs.button';
  var EVENT_KEY$1 = "." + DATA_KEY$1;
  var DATA_API_KEY$1 = '.data-api';
  var JQUERY_NO_CONFLICT$1 = $.fn[NAME$1];
  var ClassName$1 = {
    ACTIVE: 'active',
    BUTTON: 'btn',
    FOCUS: 'focus'
  };
  var Selector$1 = {
    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
    DATA_TOGGLES: '[data-toggle="buttons"]',
    DATA_TOGGLE: '[data-toggle="button"]',
    DATA_TOGGLES_BUTTONS: '[data-toggle="buttons"] .btn',
    INPUT: 'input:not([type="hidden"])',
    ACTIVE: '.active',
    BUTTON: '.btn'
  };
  var Event$1 = {
    CLICK_DATA_API: "click" + EVENT_KEY$1 + DATA_API_KEY$1,
    FOCUS_BLUR_DATA_API: "focus" + EVENT_KEY$1 + DATA_API_KEY$1 + " " + ("blur" + EVENT_KEY$1 + DATA_API_KEY$1),
    LOAD_DATA_API: "load" + EVENT_KEY$1 + DATA_API_KEY$1
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Button =
  /*#__PURE__*/
  function () {
    function Button(element) {
      this._element = element;
    } // Getters


    var _proto = Button.prototype;

    // Public
    _proto.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $(this._element).closest(Selector$1.DATA_TOGGLES)[0];

      if (rootElement) {
        var input = this._element.querySelector(Selector$1.INPUT);

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && this._element.classList.contains(ClassName$1.ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = rootElement.querySelector(Selector$1.ACTIVE);

              if (activeElement) {
                $(activeElement).removeClass(ClassName$1.ACTIVE);
              }
            }
          } else if (input.type === 'checkbox') {
            if (this._element.tagName === 'LABEL' && input.checked === this._element.classList.contains(ClassName$1.ACTIVE)) {
              triggerChangeEvent = false;
            }
          } else {
            // if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
            triggerChangeEvent = false;
          }

          if (triggerChangeEvent) {
            input.checked = !this._element.classList.contains(ClassName$1.ACTIVE);
            $(input).trigger('change');
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (!(this._element.hasAttribute('disabled') || this._element.classList.contains('disabled'))) {
        if (addAriaPressed) {
          this._element.setAttribute('aria-pressed', !this._element.classList.contains(ClassName$1.ACTIVE));
        }

        if (triggerChangeEvent) {
          $(this._element).toggleClass(ClassName$1.ACTIVE);
        }
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$1);
      this._element = null;
    } // Static
    ;

    Button._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$1);

        if (!data) {
          data = new Button(this);
          $(this).data(DATA_KEY$1, data);
        }

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$1;
      }
    }]);

    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$1.CLICK_DATA_API, Selector$1.DATA_TOGGLE_CARROT, function (event) {
    var button = event.target;

    if (!$(button).hasClass(ClassName$1.BUTTON)) {
      button = $(button).closest(Selector$1.BUTTON)[0];
    }

    if (!button || button.hasAttribute('disabled') || button.classList.contains('disabled')) {
      event.preventDefault(); // work around Firefox bug #1540995
    } else {
      var inputBtn = button.querySelector(Selector$1.INPUT);

      if (inputBtn && (inputBtn.hasAttribute('disabled') || inputBtn.classList.contains('disabled'))) {
        event.preventDefault(); // work around Firefox bug #1540995

        return;
      }

      Button._jQueryInterface.call($(button), 'toggle');
    }
  }).on(Event$1.FOCUS_BLUR_DATA_API, Selector$1.DATA_TOGGLE_CARROT, function (event) {
    var button = $(event.target).closest(Selector$1.BUTTON)[0];
    $(button).toggleClass(ClassName$1.FOCUS, /^focus(in)?$/.test(event.type));
  });
  $(window).on(Event$1.LOAD_DATA_API, function () {
    // ensure correct active class is set to match the controls' actual values/states
    // find all checkboxes/readio buttons inside data-toggle groups
    var buttons = [].slice.call(document.querySelectorAll(Selector$1.DATA_TOGGLES_BUTTONS));

    for (var i = 0, len = buttons.length; i < len; i++) {
      var button = buttons[i];
      var input = button.querySelector(Selector$1.INPUT);

      if (input.checked || input.hasAttribute('checked')) {
        button.classList.add(ClassName$1.ACTIVE);
      } else {
        button.classList.remove(ClassName$1.ACTIVE);
      }
    } // find all button toggles


    buttons = [].slice.call(document.querySelectorAll(Selector$1.DATA_TOGGLE));

    for (var _i = 0, _len = buttons.length; _i < _len; _i++) {
      var _button = buttons[_i];

      if (_button.getAttribute('aria-pressed') === 'true') {
        _button.classList.add(ClassName$1.ACTIVE);
      } else {
        _button.classList.remove(ClassName$1.ACTIVE);
      }
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$1] = Button._jQueryInterface;
  $.fn[NAME$1].Constructor = Button;

  $.fn[NAME$1].noConflict = function () {
    $.fn[NAME$1] = JQUERY_NO_CONFLICT$1;
    return Button._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$2 = 'carousel';
  var VERSION$2 = '4.4.1';
  var DATA_KEY$2 = 'bs.carousel';
  var EVENT_KEY$2 = "." + DATA_KEY$2;
  var DATA_API_KEY$2 = '.data-api';
  var JQUERY_NO_CONFLICT$2 = $.fn[NAME$2];
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = 40;
  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var Direction = {
    NEXT: 'next',
    PREV: 'prev',
    LEFT: 'left',
    RIGHT: 'right'
  };
  var Event$2 = {
    SLIDE: "slide" + EVENT_KEY$2,
    SLID: "slid" + EVENT_KEY$2,
    KEYDOWN: "keydown" + EVENT_KEY$2,
    MOUSEENTER: "mouseenter" + EVENT_KEY$2,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$2,
    TOUCHSTART: "touchstart" + EVENT_KEY$2,
    TOUCHMOVE: "touchmove" + EVENT_KEY$2,
    TOUCHEND: "touchend" + EVENT_KEY$2,
    POINTERDOWN: "pointerdown" + EVENT_KEY$2,
    POINTERUP: "pointerup" + EVENT_KEY$2,
    DRAG_START: "dragstart" + EVENT_KEY$2,
    LOAD_DATA_API: "load" + EVENT_KEY$2 + DATA_API_KEY$2,
    CLICK_DATA_API: "click" + EVENT_KEY$2 + DATA_API_KEY$2
  };
  var ClassName$2 = {
    CAROUSEL: 'carousel',
    ACTIVE: 'active',
    SLIDE: 'slide',
    RIGHT: 'carousel-item-right',
    LEFT: 'carousel-item-left',
    NEXT: 'carousel-item-next',
    PREV: 'carousel-item-prev',
    ITEM: 'carousel-item',
    POINTER_EVENT: 'pointer-event'
  };
  var Selector$2 = {
    ACTIVE: '.active',
    ACTIVE_ITEM: '.active.carousel-item',
    ITEM: '.carousel-item',
    ITEM_IMG: '.carousel-item img',
    NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
    INDICATORS: '.carousel-indicators',
    DATA_SLIDE: '[data-slide], [data-slide-to]',
    DATA_RIDE: '[data-ride="carousel"]'
  };
  var PointerType = {
    TOUCH: 'touch',
    PEN: 'pen'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Carousel =
  /*#__PURE__*/
  function () {
    function Carousel(element, config) {
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this._config = this._getConfig(config);
      this._element = element;
      this._indicatorsElement = this._element.querySelector(Selector$2.INDICATORS);
      this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

      this._addEventListeners();
    } // Getters


    var _proto = Carousel.prototype;

    // Public
    _proto.next = function next() {
      if (!this._isSliding) {
        this._slide(Direction.NEXT);
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && $(this._element).is(':visible') && $(this._element).css('visibility') !== 'hidden') {
        this.next();
      }
    };

    _proto.prev = function prev() {
      if (!this._isSliding) {
        this._slide(Direction.PREV);
      }
    };

    _proto.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (this._element.querySelector(Selector$2.NEXT_PREV)) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      this._activeElement = this._element.querySelector(Selector$2.ACTIVE_ITEM);

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $(this._element).one(Event$2.SLID, function () {
          return _this.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? Direction.NEXT : Direction.PREV;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      $(this._element).off(EVENT_KEY$2);
      $.removeData(this._element, DATA_KEY$2);
      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default, {}, config);
      Util.typeCheckConfig(NAME$2, config, DefaultType);
      return config;
    };

    _proto._handleSwipe = function _handleSwipe() {
      var absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }

      var direction = absDeltax / this.touchDeltaX;
      this.touchDeltaX = 0; // swipe left

      if (direction > 0) {
        this.prev();
      } // swipe right


      if (direction < 0) {
        this.next();
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      if (this._config.keyboard) {
        $(this._element).on(Event$2.KEYDOWN, function (event) {
          return _this2._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        $(this._element).on(Event$2.MOUSEENTER, function (event) {
          return _this2.pause(event);
        }).on(Event$2.MOUSELEAVE, function (event) {
          return _this2.cycle(event);
        });
      }

      if (this._config.touch) {
        this._addTouchEventListeners();
      }
    };

    _proto._addTouchEventListeners = function _addTouchEventListeners() {
      var _this3 = this;

      if (!this._touchSupported) {
        return;
      }

      var start = function start(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchStartX = event.originalEvent.clientX;
        } else if (!_this3._pointerEvent) {
          _this3.touchStartX = event.originalEvent.touches[0].clientX;
        }
      };

      var move = function move(event) {
        // ensure swiping with one touch and not pinching
        if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {
          _this3.touchDeltaX = 0;
        } else {
          _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
        }
      };

      var end = function end(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
        }

        _this3._handleSwipe();

        if (_this3._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this3.pause();

          if (_this3.touchTimeout) {
            clearTimeout(_this3.touchTimeout);
          }

          _this3.touchTimeout = setTimeout(function (event) {
            return _this3.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
        }
      };

      $(this._element.querySelectorAll(Selector$2.ITEM_IMG)).on(Event$2.DRAG_START, function (e) {
        return e.preventDefault();
      });

      if (this._pointerEvent) {
        $(this._element).on(Event$2.POINTERDOWN, function (event) {
          return start(event);
        });
        $(this._element).on(Event$2.POINTERUP, function (event) {
          return end(event);
        });

        this._element.classList.add(ClassName$2.POINTER_EVENT);
      } else {
        $(this._element).on(Event$2.TOUCHSTART, function (event) {
          return start(event);
        });
        $(this._element).on(Event$2.TOUCHMOVE, function (event) {
          return move(event);
        });
        $(this._element).on(Event$2.TOUCHEND, function (event) {
          return end(event);
        });
      }
    };

    _proto._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;

        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(Selector$2.ITEM)) : [];
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === Direction.NEXT;
      var isPrevDirection = direction === Direction.PREV;

      var activeIndex = this._getItemIndex(activeElement);

      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === Direction.PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex(this._element.querySelector(Selector$2.ACTIVE_ITEM));

      var slideEvent = $.Event(Event$2.SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
      $(this._element).trigger(slideEvent);
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(Selector$2.ACTIVE));
        $(indicators).removeClass(ClassName$2.ACTIVE);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $(nextIndicator).addClass(ClassName$2.ACTIVE);
        }
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this4 = this;

      var activeElement = this._element.querySelector(Selector$2.ACTIVE_ITEM);

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;

      if (direction === Direction.NEXT) {
        directionalClassName = ClassName$2.LEFT;
        orderClassName = ClassName$2.NEXT;
        eventDirectionName = Direction.LEFT;
      } else {
        directionalClassName = ClassName$2.RIGHT;
        orderClassName = ClassName$2.PREV;
        eventDirectionName = Direction.RIGHT;
      }

      if (nextElement && $(nextElement).hasClass(ClassName$2.ACTIVE)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      var slidEvent = $.Event(Event$2.SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if ($(this._element).hasClass(ClassName$2.SLIDE)) {
        $(nextElement).addClass(orderClassName);
        Util.reflow(nextElement);
        $(activeElement).addClass(directionalClassName);
        $(nextElement).addClass(directionalClassName);
        var nextElementInterval = parseInt(nextElement.getAttribute('data-interval'), 10);

        if (nextElementInterval) {
          this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
          this._config.interval = nextElementInterval;
        } else {
          this._config.interval = this._config.defaultInterval || this._config.interval;
        }

        var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
        $(activeElement).one(Util.TRANSITION_END, function () {
          $(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(ClassName$2.ACTIVE);
          $(activeElement).removeClass(ClassName$2.ACTIVE + " " + orderClassName + " " + directionalClassName);
          _this4._isSliding = false;
          setTimeout(function () {
            return $(_this4._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        $(activeElement).removeClass(ClassName$2.ACTIVE);
        $(nextElement).addClass(ClassName$2.ACTIVE);
        this._isSliding = false;
        $(this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    } // Static
    ;

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$2);

        var _config = _objectSpread2({}, Default, {}, $(this).data());

        if (typeof config === 'object') {
          _config = _objectSpread2({}, _config, {}, config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $(this).data(DATA_KEY$2, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"" + action + "\"");
          }

          data[action]();
        } else if (_config.interval && _config.ride) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $(selector)[0];

      if (!target || !$(target).hasClass(ClassName$2.CAROUSEL)) {
        return;
      }

      var config = _objectSpread2({}, $(target).data(), {}, $(this).data());

      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($(target), config);

      if (slideIndex) {
        $(target).data(DATA_KEY$2).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$2;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Carousel;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$2.CLICK_DATA_API, Selector$2.DATA_SLIDE, Carousel._dataApiClickHandler);
  $(window).on(Event$2.LOAD_DATA_API, function () {
    var carousels = [].slice.call(document.querySelectorAll(Selector$2.DATA_RIDE));

    for (var i = 0, len = carousels.length; i < len; i++) {
      var $carousel = $(carousels[i]);

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$2] = Carousel._jQueryInterface;
  $.fn[NAME$2].Constructor = Carousel;

  $.fn[NAME$2].noConflict = function () {
    $.fn[NAME$2] = JQUERY_NO_CONFLICT$2;
    return Carousel._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$3 = 'collapse';
  var VERSION$3 = '4.4.1';
  var DATA_KEY$3 = 'bs.collapse';
  var EVENT_KEY$3 = "." + DATA_KEY$3;
  var DATA_API_KEY$3 = '.data-api';
  var JQUERY_NO_CONFLICT$3 = $.fn[NAME$3];
  var Default$1 = {
    toggle: true,
    parent: ''
  };
  var DefaultType$1 = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var Event$3 = {
    SHOW: "show" + EVENT_KEY$3,
    SHOWN: "shown" + EVENT_KEY$3,
    HIDE: "hide" + EVENT_KEY$3,
    HIDDEN: "hidden" + EVENT_KEY$3,
    CLICK_DATA_API: "click" + EVENT_KEY$3 + DATA_API_KEY$3
  };
  var ClassName$3 = {
    SHOW: 'show',
    COLLAPSE: 'collapse',
    COLLAPSING: 'collapsing',
    COLLAPSED: 'collapsed'
  };
  var Dimension = {
    WIDTH: 'width',
    HEIGHT: 'height'
  };
  var Selector$3 = {
    ACTIVES: '.show, .collapsing',
    DATA_TOGGLE: '[data-toggle="collapse"]'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse =
  /*#__PURE__*/
  function () {
    function Collapse(element, config) {
      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var toggleList = [].slice.call(document.querySelectorAll(Selector$3.DATA_TOGGLE));

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = Util.getSelectorFromElement(elem);
        var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
          return foundElem === element;
        });

        if (selector !== null && filterElement.length > 0) {
          this._selector = selector;

          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    var _proto = Collapse.prototype;

    // Public
    _proto.toggle = function toggle() {
      if ($(this._element).hasClass(ClassName$3.SHOW)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      var _this = this;

      if (this._isTransitioning || $(this._element).hasClass(ClassName$3.SHOW)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = [].slice.call(this._parent.querySelectorAll(Selector$3.ACTIVES)).filter(function (elem) {
          if (typeof _this._config.parent === 'string') {
            return elem.getAttribute('data-parent') === _this._config.parent;
          }

          return elem.classList.contains(ClassName$3.COLLAPSE);
        });

        if (actives.length === 0) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $(actives).not(this._selector).data(DATA_KEY$3);

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $.Event(Event$3.SHOW);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($(actives).not(this._selector), 'hide');

        if (!activesData) {
          $(actives).data(DATA_KEY$3, null);
        }
      }

      var dimension = this._getDimension();

      $(this._element).removeClass(ClassName$3.COLLAPSE).addClass(ClassName$3.COLLAPSING);
      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        $(this._triggerArray).removeClass(ClassName$3.COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $(_this._element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).addClass(ClassName$3.SHOW);
        _this._element.style[dimension] = '';

        _this.setTransitioning(false);

        $(_this._element).trigger(Event$3.SHOWN);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      if (this._isTransitioning || !$(this._element).hasClass(ClassName$3.SHOW)) {
        return;
      }

      var startEvent = $.Event(Event$3.HIDE);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      Util.reflow(this._element);
      $(this._element).addClass(ClassName$3.COLLAPSING).removeClass(ClassName$3.COLLAPSE).removeClass(ClassName$3.SHOW);
      var triggerArrayLength = this._triggerArray.length;

      if (triggerArrayLength > 0) {
        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);

          if (selector !== null) {
            var $elem = $([].slice.call(document.querySelectorAll(selector)));

            if (!$elem.hasClass(ClassName$3.SHOW)) {
              $(trigger).addClass(ClassName$3.COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2.setTransitioning(false);

        $(_this2._element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).trigger(Event$3.HIDDEN);
      };

      this._element.style[dimension] = '';
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$3);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default$1, {}, config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      Util.typeCheckConfig(NAME$3, config, DefaultType$1);
      return config;
    };

    _proto._getDimension = function _getDimension() {
      var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
      return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      var parent;

      if (Util.isElement(this._config.parent)) {
        parent = this._config.parent; // It's a jQuery object

        if (typeof this._config.parent.jquery !== 'undefined') {
          parent = this._config.parent[0];
        }
      } else {
        parent = document.querySelector(this._config.parent);
      }

      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
      var children = [].slice.call(parent.querySelectorAll(selector));
      $(children).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      var isOpen = $(element).hasClass(ClassName$3.SHOW);

      if (triggerArray.length) {
        $(triggerArray).toggleClass(ClassName$3.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
      }
    } // Static
    ;

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? document.querySelector(selector) : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$3);

        var _config = _objectSpread2({}, Default$1, {}, $this.data(), {}, typeof config === 'object' && config ? config : {});

        if (!data && _config.toggle && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $this.data(DATA_KEY$3, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$3;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$1;
      }
    }]);

    return Collapse;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$3.CLICK_DATA_API, Selector$3.DATA_TOGGLE, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      event.preventDefault();
    }

    var $trigger = $(this);
    var selector = Util.getSelectorFromElement(this);
    var selectors = [].slice.call(document.querySelectorAll(selector));
    $(selectors).each(function () {
      var $target = $(this);
      var data = $target.data(DATA_KEY$3);
      var config = data ? 'toggle' : $trigger.data();

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$3] = Collapse._jQueryInterface;
  $.fn[NAME$3].Constructor = Collapse;

  $.fn[NAME$3].noConflict = function () {
    $.fn[NAME$3] = JQUERY_NO_CONFLICT$3;
    return Collapse._jQueryInterface;
  };

  /**!
   * @fileOverview Kickass library to create and place poppers near their reference elements.
   * @version 1.16.0
   * @license
   * Copyright (c) 2016 Federico Zivolo and contributors
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */
var isBrowser=typeof window!=='undefined'&&typeof document!=='undefined'&&typeof navigator!=='undefined';var timeoutDuration=function(){var longerTimeoutBrowsers=['Edge','Trident','Firefox'];for(var i=0;i<longerTimeoutBrowsers.length;i+=1){if(isBrowser&&navigator.userAgent.indexOf(longerTimeoutBrowsers[i])>=0){return 1}}
return 0}();function microtaskDebounce(fn){var called=!1;return function(){if(called){return}
called=!0;window.Promise.resolve().then(function(){called=!1;fn()})}}
function taskDebounce(fn){var scheduled=!1;return function(){if(!scheduled){scheduled=!0;setTimeout(function(){scheduled=!1;fn()},timeoutDuration)}}}
var supportsMicroTasks=isBrowser&&window.Promise;var debounce=supportsMicroTasks?microtaskDebounce:taskDebounce;function isFunction(functionToCheck){var getType={};return functionToCheck&&getType.toString.call(functionToCheck)==='[object Function]'}
function getStyleComputedProperty(element,property){if(element.nodeType!==1){return[]}
var window=element.ownerDocument.defaultView;var css=window.getComputedStyle(element,null);return property?css[property]:css}
function getParentNode(element){if(element.nodeName==='HTML'){return element}
return element.parentNode||element.host}
function getScrollParent(element){if(!element){return document.body}
switch(element.nodeName){case 'HTML':case 'BODY':return element.ownerDocument.body;case '#document':return element.body}
var _getStyleComputedProp=getStyleComputedProperty(element),overflow=_getStyleComputedProp.overflow,overflowX=_getStyleComputedProp.overflowX,overflowY=_getStyleComputedProp.overflowY;if(/(auto|scroll|overlay)/.test(overflow+overflowY+overflowX)){return element}
return getScrollParent(getParentNode(element))}
function getReferenceNode(reference){return reference&&reference.referenceNode?reference.referenceNode:reference}
var isIE11=isBrowser&&!!(window.MSInputMethodContext&&document.documentMode);var isIE10=isBrowser&&/MSIE 10/.test(navigator.userAgent);function isIE(version){if(version===11){return isIE11}
if(version===10){return isIE10}
return isIE11||isIE10}
function getOffsetParent(element){if(!element){return document.documentElement}
var noOffsetParent=isIE(10)?document.body:null;var offsetParent=element.offsetParent||null;while(offsetParent===noOffsetParent&&element.nextElementSibling){offsetParent=(element=element.nextElementSibling).offsetParent}
var nodeName=offsetParent&&offsetParent.nodeName;if(!nodeName||nodeName==='BODY'||nodeName==='HTML'){return element?element.ownerDocument.documentElement:document.documentElement}
if(['TH','TD','TABLE'].indexOf(offsetParent.nodeName)!==-1&&getStyleComputedProperty(offsetParent,'position')==='static'){return getOffsetParent(offsetParent)}
return offsetParent}
function isOffsetContainer(element){var nodeName=element.nodeName;if(nodeName==='BODY'){return!1}
return nodeName==='HTML'||getOffsetParent(element.firstElementChild)===element}
function getRoot(node){if(node.parentNode!==null){return getRoot(node.parentNode)}
return node}
function findCommonOffsetParent(element1,element2){if(!element1||!element1.nodeType||!element2||!element2.nodeType){return document.documentElement}
var order=element1.compareDocumentPosition(element2)&Node.DOCUMENT_POSITION_FOLLOWING;var start=order?element1:element2;var end=order?element2:element1;var range=document.createRange();range.setStart(start,0);range.setEnd(end,0);var commonAncestorContainer=range.commonAncestorContainer;if(element1!==commonAncestorContainer&&element2!==commonAncestorContainer||start.contains(end)){if(isOffsetContainer(commonAncestorContainer)){return commonAncestorContainer}
return getOffsetParent(commonAncestorContainer)}
var element1root=getRoot(element1);if(element1root.host){return findCommonOffsetParent(element1root.host,element2)}else{return findCommonOffsetParent(element1,getRoot(element2).host)}}
function getScroll(element){var side=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'top';var upperSide=side==='top'?'scrollTop':'scrollLeft';var nodeName=element.nodeName;if(nodeName==='BODY'||nodeName==='HTML'){var html=element.ownerDocument.documentElement;var scrollingElement=element.ownerDocument.scrollingElement||html;return scrollingElement[upperSide]}
return element[upperSide]}
function includeScroll(rect,element){var subtract=arguments.length>2&&arguments[2]!==undefined?arguments[2]:!1;var scrollTop=getScroll(element,'top');var scrollLeft=getScroll(element,'left');var modifier=subtract?-1:1;rect.top+=scrollTop*modifier;rect.bottom+=scrollTop*modifier;rect.left+=scrollLeft*modifier;rect.right+=scrollLeft*modifier;return rect}
function getBordersSize(styles,axis){var sideA=axis==='x'?'Left':'Top';var sideB=sideA==='Left'?'Right':'Bottom';return parseFloat(styles['border'+sideA+'Width'],10)+parseFloat(styles['border'+sideB+'Width'],10)}
function getSize(axis,body,html,computedStyle){return Math.max(body['offset'+axis],body['scroll'+axis],html['client'+axis],html['offset'+axis],html['scroll'+axis],isIE(10)?parseInt(html['offset'+axis])+parseInt(computedStyle['margin'+(axis==='Height'?'Top':'Left')])+parseInt(computedStyle['margin'+(axis==='Height'?'Bottom':'Right')]):0)}
function getWindowSizes(document){var body=document.body;var html=document.documentElement;var computedStyle=isIE(10)&&getComputedStyle(html);return{height:getSize('Height',body,html,computedStyle),width:getSize('Width',body,html,computedStyle)}}
var classCallCheck=function(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}};var createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value" in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}
return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var defineProperty=function(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}
return obj};var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}
return target};function getClientRect(offsets){return _extends({},offsets,{right:offsets.left+offsets.width,bottom:offsets.top+offsets.height})}
function getBoundingClientRect(element){var rect={};try{if(isIE(10)){rect=element.getBoundingClientRect();var scrollTop=getScroll(element,'top');var scrollLeft=getScroll(element,'left');rect.top+=scrollTop;rect.left+=scrollLeft;rect.bottom+=scrollTop;rect.right+=scrollLeft}else{rect=element.getBoundingClientRect()}}catch(e){}
var result={left:rect.left,top:rect.top,width:rect.right-rect.left,height:rect.bottom-rect.top};var sizes=element.nodeName==='HTML'?getWindowSizes(element.ownerDocument):{};var width=sizes.width||element.clientWidth||result.width;var height=sizes.height||element.clientHeight||result.height;var horizScrollbar=element.offsetWidth-width;var vertScrollbar=element.offsetHeight-height;if(horizScrollbar||vertScrollbar){var styles=getStyleComputedProperty(element);horizScrollbar-=getBordersSize(styles,'x');vertScrollbar-=getBordersSize(styles,'y');result.width-=horizScrollbar;result.height-=vertScrollbar}
return getClientRect(result)}
function getOffsetRectRelativeToArbitraryNode(children,parent){var fixedPosition=arguments.length>2&&arguments[2]!==undefined?arguments[2]:!1;var isIE10=isIE(10);var isHTML=parent.nodeName==='HTML';var childrenRect=getBoundingClientRect(children);var parentRect=getBoundingClientRect(parent);var scrollParent=getScrollParent(children);var styles=getStyleComputedProperty(parent);var borderTopWidth=parseFloat(styles.borderTopWidth,10);var borderLeftWidth=parseFloat(styles.borderLeftWidth,10);if(fixedPosition&&isHTML){parentRect.top=Math.max(parentRect.top,0);parentRect.left=Math.max(parentRect.left,0)}
var offsets=getClientRect({top:childrenRect.top-parentRect.top-borderTopWidth,left:childrenRect.left-parentRect.left-borderLeftWidth,width:childrenRect.width,height:childrenRect.height});offsets.marginTop=0;offsets.marginLeft=0;if(!isIE10&&isHTML){var marginTop=parseFloat(styles.marginTop,10);var marginLeft=parseFloat(styles.marginLeft,10);offsets.top-=borderTopWidth-marginTop;offsets.bottom-=borderTopWidth-marginTop;offsets.left-=borderLeftWidth-marginLeft;offsets.right-=borderLeftWidth-marginLeft;offsets.marginTop=marginTop;offsets.marginLeft=marginLeft}
if(isIE10&&!fixedPosition?parent.contains(scrollParent):parent===scrollParent&&scrollParent.nodeName!=='BODY'){offsets=includeScroll(offsets,parent)}
return offsets}
function getViewportOffsetRectRelativeToArtbitraryNode(element){var excludeScroll=arguments.length>1&&arguments[1]!==undefined?arguments[1]:!1;var html=element.ownerDocument.documentElement;var relativeOffset=getOffsetRectRelativeToArbitraryNode(element,html);var width=Math.max(html.clientWidth,window.innerWidth||0);var height=Math.max(html.clientHeight,window.innerHeight||0);var scrollTop=!excludeScroll?getScroll(html):0;var scrollLeft=!excludeScroll?getScroll(html,'left'):0;var offset={top:scrollTop-relativeOffset.top+relativeOffset.marginTop,left:scrollLeft-relativeOffset.left+relativeOffset.marginLeft,width:width,height:height};return getClientRect(offset)}
function isFixed(element){var nodeName=element.nodeName;if(nodeName==='BODY'||nodeName==='HTML'){return!1}
if(getStyleComputedProperty(element,'position')==='fixed'){return!0}
var parentNode=getParentNode(element);if(!parentNode){return!1}
return isFixed(parentNode)}
function getFixedPositionOffsetParent(element){if(!element||!element.parentElement||isIE()){return document.documentElement}
var el=element.parentElement;while(el&&getStyleComputedProperty(el,'transform')==='none'){el=el.parentElement}
return el||document.documentElement}
function getBoundaries(popper,reference,padding,boundariesElement){var fixedPosition=arguments.length>4&&arguments[4]!==undefined?arguments[4]:!1;var boundaries={top:0,left:0};var offsetParent=fixedPosition?getFixedPositionOffsetParent(popper):findCommonOffsetParent(popper,getReferenceNode(reference));if(boundariesElement==='viewport'){boundaries=getViewportOffsetRectRelativeToArtbitraryNode(offsetParent,fixedPosition)}else{var boundariesNode=void 0;if(boundariesElement==='scrollParent'){boundariesNode=getScrollParent(getParentNode(reference));if(boundariesNode.nodeName==='BODY'){boundariesNode=popper.ownerDocument.documentElement}}else if(boundariesElement==='window'){boundariesNode=popper.ownerDocument.documentElement}else{boundariesNode=boundariesElement}
var offsets=getOffsetRectRelativeToArbitraryNode(boundariesNode,offsetParent,fixedPosition);if(boundariesNode.nodeName==='HTML'&&!isFixed(offsetParent)){var _getWindowSizes=getWindowSizes(popper.ownerDocument),height=_getWindowSizes.height,width=_getWindowSizes.width;boundaries.top+=offsets.top-offsets.marginTop;boundaries.bottom=height+offsets.top;boundaries.left+=offsets.left-offsets.marginLeft;boundaries.right=width+offsets.left}else{boundaries=offsets}}
padding=padding||0;var isPaddingNumber=typeof padding==='number';boundaries.left+=isPaddingNumber?padding:padding.left||0;boundaries.top+=isPaddingNumber?padding:padding.top||0;boundaries.right-=isPaddingNumber?padding:padding.right||0;boundaries.bottom-=isPaddingNumber?padding:padding.bottom||0;return boundaries}
function getArea(_ref){var width=_ref.width,height=_ref.height;return width*height}
function computeAutoPlacement(placement,refRect,popper,reference,boundariesElement){var padding=arguments.length>5&&arguments[5]!==undefined?arguments[5]:0;if(placement.indexOf('auto')===-1){return placement}
var boundaries=getBoundaries(popper,reference,padding,boundariesElement);var rects={top:{width:boundaries.width,height:refRect.top-boundaries.top},right:{width:boundaries.right-refRect.right,height:boundaries.height},bottom:{width:boundaries.width,height:boundaries.bottom-refRect.bottom},left:{width:refRect.left-boundaries.left,height:boundaries.height}};var sortedAreas=Object.keys(rects).map(function(key){return _extends({key:key},rects[key],{area:getArea(rects[key])})}).sort(function(a,b){return b.area-a.area});var filteredAreas=sortedAreas.filter(function(_ref2){var width=_ref2.width,height=_ref2.height;return width>=popper.clientWidth&&height>=popper.clientHeight});var computedPlacement=filteredAreas.length>0?filteredAreas[0].key:sortedAreas[0].key;var variation=placement.split('-')[1];return computedPlacement+(variation?'-'+variation:'')}
function getReferenceOffsets(state,popper,reference){var fixedPosition=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;var commonOffsetParent=fixedPosition?getFixedPositionOffsetParent(popper):findCommonOffsetParent(popper,getReferenceNode(reference));return getOffsetRectRelativeToArbitraryNode(reference,commonOffsetParent,fixedPosition)}
function getOuterSizes(element){var window=element.ownerDocument.defaultView;var styles=window.getComputedStyle(element);var x=parseFloat(styles.marginTop||0)+parseFloat(styles.marginBottom||0);var y=parseFloat(styles.marginLeft||0)+parseFloat(styles.marginRight||0);var result={width:element.offsetWidth+y,height:element.offsetHeight+x};return result}
function getOppositePlacement(placement){var hash={left:'right',right:'left',bottom:'top',top:'bottom'};return placement.replace(/left|right|bottom|top/g,function(matched){return hash[matched]})}
function getPopperOffsets(popper,referenceOffsets,placement){placement=placement.split('-')[0];var popperRect=getOuterSizes(popper);var popperOffsets={width:popperRect.width,height:popperRect.height};var isHoriz=['right','left'].indexOf(placement)!==-1;var mainSide=isHoriz?'top':'left';var secondarySide=isHoriz?'left':'top';var measurement=isHoriz?'height':'width';var secondaryMeasurement=!isHoriz?'height':'width';popperOffsets[mainSide]=referenceOffsets[mainSide]+referenceOffsets[measurement]/2-popperRect[measurement]/2;if(placement===secondarySide){popperOffsets[secondarySide]=referenceOffsets[secondarySide]-popperRect[secondaryMeasurement]}else{popperOffsets[secondarySide]=referenceOffsets[getOppositePlacement(secondarySide)]}
return popperOffsets}
function find(arr,check){if(Array.prototype.find){return arr.find(check)}
return arr.filter(check)[0]}
function findIndex(arr,prop,value){if(Array.prototype.findIndex){return arr.findIndex(function(cur){return cur[prop]===value})}
var match=find(arr,function(obj){return obj[prop]===value});return arr.indexOf(match)}
function runModifiers(modifiers,data,ends){var modifiersToRun=ends===undefined?modifiers:modifiers.slice(0,findIndex(modifiers,'name',ends));modifiersToRun.forEach(function(modifier){if(modifier['function']){console.warn('`modifier.function` is deprecated, use `modifier.fn`!')}
var fn=modifier['function']||modifier.fn;if(modifier.enabled&&isFunction(fn)){data.offsets.popper=getClientRect(data.offsets.popper);data.offsets.reference=getClientRect(data.offsets.reference);data=fn(data,modifier)}});return data}
function update(){if(this.state.isDestroyed){return}
var data={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};data.offsets.reference=getReferenceOffsets(this.state,this.popper,this.reference,this.options.positionFixed);data.placement=computeAutoPlacement(this.options.placement,data.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding);data.originalPlacement=data.placement;data.positionFixed=this.options.positionFixed;data.offsets.popper=getPopperOffsets(this.popper,data.offsets.reference,data.placement);data.offsets.popper.position=this.options.positionFixed?'fixed':'absolute';data=runModifiers(this.modifiers,data);if(!this.state.isCreated){this.state.isCreated=!0;this.options.onCreate(data)}else{this.options.onUpdate(data)}}
function isModifierEnabled(modifiers,modifierName){return modifiers.some(function(_ref){var name=_ref.name,enabled=_ref.enabled;return enabled&&name===modifierName})}
function getSupportedPropertyName(property){var prefixes=[!1,'ms','Webkit','Moz','O'];var upperProp=property.charAt(0).toUpperCase()+property.slice(1);for(var i=0;i<prefixes.length;i++){var prefix=prefixes[i];var toCheck=prefix?''+prefix+upperProp:property;if(typeof document.body.style[toCheck]!=='undefined'){return toCheck}}
return null}
function destroy(){this.state.isDestroyed=!0;if(isModifierEnabled(this.modifiers,'applyStyle')){this.popper.removeAttribute('x-placement');this.popper.style.position='';this.popper.style.top='';this.popper.style.left='';this.popper.style.right='';this.popper.style.bottom='';this.popper.style.willChange='';this.popper.style[getSupportedPropertyName('transform')]=''}
this.disableEventListeners();if(this.options.removeOnDestroy){this.popper.parentNode.removeChild(this.popper)}
return this}
function getWindow(element){var ownerDocument=element.ownerDocument;return ownerDocument?ownerDocument.defaultView:window}
function attachToScrollParents(scrollParent,event,callback,scrollParents){var isBody=scrollParent.nodeName==='BODY';var target=isBody?scrollParent.ownerDocument.defaultView:scrollParent;target.addEventListener(event,callback,{passive:!0});if(!isBody){attachToScrollParents(getScrollParent(target.parentNode),event,callback,scrollParents)}
scrollParents.push(target)}
function setupEventListeners(reference,options,state,updateBound){state.updateBound=updateBound;getWindow(reference).addEventListener('resize',state.updateBound,{passive:!0});var scrollElement=getScrollParent(reference);attachToScrollParents(scrollElement,'scroll',state.updateBound,state.scrollParents);state.scrollElement=scrollElement;state.eventsEnabled=!0;return state}
function enableEventListeners(){if(!this.state.eventsEnabled){this.state=setupEventListeners(this.reference,this.options,this.state,this.scheduleUpdate)}}
function removeEventListeners(reference,state){getWindow(reference).removeEventListener('resize',state.updateBound);state.scrollParents.forEach(function(target){target.removeEventListener('scroll',state.updateBound)});state.updateBound=null;state.scrollParents=[];state.scrollElement=null;state.eventsEnabled=!1;return state}
function disableEventListeners(){if(this.state.eventsEnabled){cancelAnimationFrame(this.scheduleUpdate);this.state=removeEventListeners(this.reference,this.state)}}
function isNumeric(n){return n!==''&&!isNaN(parseFloat(n))&&isFinite(n)}
function setStyles(element,styles){Object.keys(styles).forEach(function(prop){var unit='';if(['width','height','top','right','bottom','left'].indexOf(prop)!==-1&&isNumeric(styles[prop])){unit='px'}
element.style[prop]=styles[prop]+unit})}
function setAttributes(element,attributes){Object.keys(attributes).forEach(function(prop){var value=attributes[prop];if(value!==!1){element.setAttribute(prop,attributes[prop])}else{element.removeAttribute(prop)}})}
function applyStyle(data){setStyles(data.instance.popper,data.styles);setAttributes(data.instance.popper,data.attributes);if(data.arrowElement&&Object.keys(data.arrowStyles).length){setStyles(data.arrowElement,data.arrowStyles)}
return data}
function applyStyleOnLoad(reference,popper,options,modifierOptions,state){var referenceOffsets=getReferenceOffsets(state,popper,reference,options.positionFixed);var placement=computeAutoPlacement(options.placement,referenceOffsets,popper,reference,options.modifiers.flip.boundariesElement,options.modifiers.flip.padding);popper.setAttribute('x-placement',placement);setStyles(popper,{position:options.positionFixed?'fixed':'absolute'});return options}
function getRoundedOffsets(data,shouldRound){var _data$offsets=data.offsets,popper=_data$offsets.popper,reference=_data$offsets.reference;var round=Math.round,floor=Math.floor;var noRound=function noRound(v){return v};var referenceWidth=round(reference.width);var popperWidth=round(popper.width);var isVertical=['left','right'].indexOf(data.placement)!==-1;var isVariation=data.placement.indexOf('-')!==-1;var sameWidthParity=referenceWidth%2===popperWidth%2;var bothOddWidth=referenceWidth%2===1&&popperWidth%2===1;var horizontalToInteger=!shouldRound?noRound:isVertical||isVariation||sameWidthParity?round:floor;var verticalToInteger=!shouldRound?noRound:round;return{left:horizontalToInteger(bothOddWidth&&!isVariation&&shouldRound?popper.left-1:popper.left),top:verticalToInteger(popper.top),bottom:verticalToInteger(popper.bottom),right:horizontalToInteger(popper.right)}}
var isFirefox=isBrowser&&/Firefox/i.test(navigator.userAgent);function computeStyle(data,options){var x=options.x,y=options.y;var popper=data.offsets.popper;var legacyGpuAccelerationOption=find(data.instance.modifiers,function(modifier){return modifier.name==='applyStyle'}).gpuAcceleration;if(legacyGpuAccelerationOption!==undefined){console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!')}
var gpuAcceleration=legacyGpuAccelerationOption!==undefined?legacyGpuAccelerationOption:options.gpuAcceleration;var offsetParent=getOffsetParent(data.instance.popper);var offsetParentRect=getBoundingClientRect(offsetParent);var styles={position:popper.position};var offsets=getRoundedOffsets(data,window.devicePixelRatio<2||!isFirefox);var sideA=x==='bottom'?'top':'bottom';var sideB=y==='right'?'left':'right';var prefixedProperty=getSupportedPropertyName('transform');var left=void 0,top=void 0;if(sideA==='bottom'){if(offsetParent.nodeName==='HTML'){top=-offsetParent.clientHeight+offsets.bottom}else{top=-offsetParentRect.height+offsets.bottom}}else{top=offsets.top}
if(sideB==='right'){if(offsetParent.nodeName==='HTML'){left=-offsetParent.clientWidth+offsets.right}else{left=-offsetParentRect.width+offsets.right}}else{left=offsets.left}
if(gpuAcceleration&&prefixedProperty){styles[prefixedProperty]='translate3d('+left+'px, '+top+'px, 0)';styles[sideA]=0;styles[sideB]=0;styles.willChange='transform'}else{var invertTop=sideA==='bottom'?-1:1;var invertLeft=sideB==='right'?-1:1;styles[sideA]=top*invertTop;styles[sideB]=left*invertLeft;styles.willChange=sideA+', '+sideB}
var attributes={'x-placement':data.placement};data.attributes=_extends({},attributes,data.attributes);data.styles=_extends({},styles,data.styles);data.arrowStyles=_extends({},data.offsets.arrow,data.arrowStyles);return data}
function isModifierRequired(modifiers,requestingName,requestedName){var requesting=find(modifiers,function(_ref){var name=_ref.name;return name===requestingName});var isRequired=!!requesting&&modifiers.some(function(modifier){return modifier.name===requestedName&&modifier.enabled&&modifier.order<requesting.order});if(!isRequired){var _requesting='`'+requestingName+'`';var requested='`'+requestedName+'`';console.warn(requested+' modifier is required by '+_requesting+' modifier in order to work, be sure to include it before '+_requesting+'!')}
return isRequired}
function arrow(data,options){var _data$offsets$arrow;if(!isModifierRequired(data.instance.modifiers,'arrow','keepTogether')){return data}
var arrowElement=options.element;if(typeof arrowElement==='string'){arrowElement=data.instance.popper.querySelector(arrowElement);if(!arrowElement){return data}}else{if(!data.instance.popper.contains(arrowElement)){console.warn('WARNING: `arrow.element` must be child of its popper element!');return data}}
var placement=data.placement.split('-')[0];var _data$offsets=data.offsets,popper=_data$offsets.popper,reference=_data$offsets.reference;var isVertical=['left','right'].indexOf(placement)!==-1;var len=isVertical?'height':'width';var sideCapitalized=isVertical?'Top':'Left';var side=sideCapitalized.toLowerCase();var altSide=isVertical?'left':'top';var opSide=isVertical?'bottom':'right';var arrowElementSize=getOuterSizes(arrowElement)[len];if(reference[opSide]-arrowElementSize<popper[side]){data.offsets.popper[side]-=popper[side]-(reference[opSide]-arrowElementSize)}
if(reference[side]+arrowElementSize>popper[opSide]){data.offsets.popper[side]+=reference[side]+arrowElementSize-popper[opSide]}
data.offsets.popper=getClientRect(data.offsets.popper);var center=reference[side]+reference[len]/2-arrowElementSize/2;var css=getStyleComputedProperty(data.instance.popper);var popperMarginSide=parseFloat(css['margin'+sideCapitalized],10);var popperBorderSide=parseFloat(css['border'+sideCapitalized+'Width'],10);var sideValue=center-data.offsets.popper[side]-popperMarginSide-popperBorderSide;sideValue=Math.max(Math.min(popper[len]-arrowElementSize,sideValue),0);data.arrowElement=arrowElement;data.offsets.arrow=(_data$offsets$arrow={},defineProperty(_data$offsets$arrow,side,Math.round(sideValue)),defineProperty(_data$offsets$arrow,altSide,''),_data$offsets$arrow);return data}
function getOppositeVariation(variation){if(variation==='end'){return'start'}else if(variation==='start'){return'end'}
return variation}
var placements=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'];var validPlacements=placements.slice(3);function clockwise(placement){var counter=arguments.length>1&&arguments[1]!==undefined?arguments[1]:!1;var index=validPlacements.indexOf(placement);var arr=validPlacements.slice(index+1).concat(validPlacements.slice(0,index));return counter?arr.reverse():arr}
var BEHAVIORS={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'};function flip(data,options){if(isModifierEnabled(data.instance.modifiers,'inner')){return data}
if(data.flipped&&data.placement===data.originalPlacement){return data}
var boundaries=getBoundaries(data.instance.popper,data.instance.reference,options.padding,options.boundariesElement,data.positionFixed);var placement=data.placement.split('-')[0];var placementOpposite=getOppositePlacement(placement);var variation=data.placement.split('-')[1]||'';var flipOrder=[];switch(options.behavior){case BEHAVIORS.FLIP:flipOrder=[placement,placementOpposite];break;case BEHAVIORS.CLOCKWISE:flipOrder=clockwise(placement);break;case BEHAVIORS.COUNTERCLOCKWISE:flipOrder=clockwise(placement,!0);break;default:flipOrder=options.behavior}
flipOrder.forEach(function(step,index){if(placement!==step||flipOrder.length===index+1){return data}
placement=data.placement.split('-')[0];placementOpposite=getOppositePlacement(placement);var popperOffsets=data.offsets.popper;var refOffsets=data.offsets.reference;var floor=Math.floor;var overlapsRef=placement==='left'&&floor(popperOffsets.right)>floor(refOffsets.left)||placement==='right'&&floor(popperOffsets.left)<floor(refOffsets.right)||placement==='top'&&floor(popperOffsets.bottom)>floor(refOffsets.top)||placement==='bottom'&&floor(popperOffsets.top)<floor(refOffsets.bottom);var overflowsLeft=floor(popperOffsets.left)<floor(boundaries.left);var overflowsRight=floor(popperOffsets.right)>floor(boundaries.right);var overflowsTop=floor(popperOffsets.top)<floor(boundaries.top);var overflowsBottom=floor(popperOffsets.bottom)>floor(boundaries.bottom);var overflowsBoundaries=placement==='left'&&overflowsLeft||placement==='right'&&overflowsRight||placement==='top'&&overflowsTop||placement==='bottom'&&overflowsBottom;var isVertical=['top','bottom'].indexOf(placement)!==-1;var flippedVariationByRef=!!options.flipVariations&&(isVertical&&variation==='start'&&overflowsLeft||isVertical&&variation==='end'&&overflowsRight||!isVertical&&variation==='start'&&overflowsTop||!isVertical&&variation==='end'&&overflowsBottom);var flippedVariationByContent=!!options.flipVariationsByContent&&(isVertical&&variation==='start'&&overflowsRight||isVertical&&variation==='end'&&overflowsLeft||!isVertical&&variation==='start'&&overflowsBottom||!isVertical&&variation==='end'&&overflowsTop);var flippedVariation=flippedVariationByRef||flippedVariationByContent;if(overlapsRef||overflowsBoundaries||flippedVariation){data.flipped=!0;if(overlapsRef||overflowsBoundaries){placement=flipOrder[index+1]}
if(flippedVariation){variation=getOppositeVariation(variation)}
data.placement=placement+(variation?'-'+variation:'');data.offsets.popper=_extends({},data.offsets.popper,getPopperOffsets(data.instance.popper,data.offsets.reference,data.placement));data=runModifiers(data.instance.modifiers,data,'flip')}});return data}
function keepTogether(data){var _data$offsets=data.offsets,popper=_data$offsets.popper,reference=_data$offsets.reference;var placement=data.placement.split('-')[0];var floor=Math.floor;var isVertical=['top','bottom'].indexOf(placement)!==-1;var side=isVertical?'right':'bottom';var opSide=isVertical?'left':'top';var measurement=isVertical?'width':'height';if(popper[side]<floor(reference[opSide])){data.offsets.popper[opSide]=floor(reference[opSide])-popper[measurement]}
if(popper[opSide]>floor(reference[side])){data.offsets.popper[opSide]=floor(reference[side])}
return data}
function toValue(str,measurement,popperOffsets,referenceOffsets){var split=str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);var value=+split[1];var unit=split[2];if(!value){return str}
if(unit.indexOf('%')===0){var element=void 0;switch(unit){case '%p':element=popperOffsets;break;case '%':case '%r':default:element=referenceOffsets}
var rect=getClientRect(element);return rect[measurement]/100*value}else if(unit==='vh'||unit==='vw'){var size=void 0;if(unit==='vh'){size=Math.max(document.documentElement.clientHeight,window.innerHeight||0)}else{size=Math.max(document.documentElement.clientWidth,window.innerWidth||0)}
return size/100*value}else{return value}}
function parseOffset(offset,popperOffsets,referenceOffsets,basePlacement){var offsets=[0,0];var useHeight=['right','left'].indexOf(basePlacement)!==-1;var fragments=offset.split(/(\+|\-)/).map(function(frag){return frag.trim()});var divider=fragments.indexOf(find(fragments,function(frag){return frag.search(/,|\s/)!==-1}));if(fragments[divider]&&fragments[divider].indexOf(',')===-1){console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.')}
var splitRegex=/\s*,\s*|\s+/;var ops=divider!==-1?[fragments.slice(0,divider).concat([fragments[divider].split(splitRegex)[0]]),[fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider+1))]:[fragments];ops=ops.map(function(op,index){var measurement=(index===1?!useHeight:useHeight)?'height':'width';var mergeWithPrevious=!1;return op.reduce(function(a,b){if(a[a.length-1]===''&&['+','-'].indexOf(b)!==-1){a[a.length-1]=b;mergeWithPrevious=!0;return a}else if(mergeWithPrevious){a[a.length-1]+=b;mergeWithPrevious=!1;return a}else{return a.concat(b)}},[]).map(function(str){return toValue(str,measurement,popperOffsets,referenceOffsets)})});ops.forEach(function(op,index){op.forEach(function(frag,index2){if(isNumeric(frag)){offsets[index]+=frag*(op[index2-1]==='-'?-1:1)}})});return offsets}
function offset(data,_ref){var offset=_ref.offset;var placement=data.placement,_data$offsets=data.offsets,popper=_data$offsets.popper,reference=_data$offsets.reference;var basePlacement=placement.split('-')[0];var offsets=void 0;if(isNumeric(+offset)){offsets=[+offset,0]}else{offsets=parseOffset(offset,popper,reference,basePlacement)}
if(basePlacement==='left'){popper.top+=offsets[0];popper.left-=offsets[1]}else if(basePlacement==='right'){popper.top+=offsets[0];popper.left+=offsets[1]}else if(basePlacement==='top'){popper.left+=offsets[0];popper.top-=offsets[1]}else if(basePlacement==='bottom'){popper.left+=offsets[0];popper.top+=offsets[1]}
data.popper=popper;return data}
function preventOverflow(data,options){var boundariesElement=options.boundariesElement||getOffsetParent(data.instance.popper);if(data.instance.reference===boundariesElement){boundariesElement=getOffsetParent(boundariesElement)}
var transformProp=getSupportedPropertyName('transform');var popperStyles=data.instance.popper.style;var top=popperStyles.top,left=popperStyles.left,transform=popperStyles[transformProp];popperStyles.top='';popperStyles.left='';popperStyles[transformProp]='';var boundaries=getBoundaries(data.instance.popper,data.instance.reference,options.padding,boundariesElement,data.positionFixed);popperStyles.top=top;popperStyles.left=left;popperStyles[transformProp]=transform;options.boundaries=boundaries;var order=options.priority;var popper=data.offsets.popper;var check={primary:function primary(placement){var value=popper[placement];if(popper[placement]<boundaries[placement]&&!options.escapeWithReference){value=Math.max(popper[placement],boundaries[placement])}
return defineProperty({},placement,value)},secondary:function secondary(placement){var mainSide=placement==='right'?'left':'top';var value=popper[mainSide];if(popper[placement]>boundaries[placement]&&!options.escapeWithReference){value=Math.min(popper[mainSide],boundaries[placement]-(placement==='right'?popper.width:popper.height))}
return defineProperty({},mainSide,value)}};order.forEach(function(placement){var side=['left','top'].indexOf(placement)!==-1?'primary':'secondary';popper=_extends({},popper,check[side](placement))});data.offsets.popper=popper;return data}
function shift(data){var placement=data.placement;var basePlacement=placement.split('-')[0];var shiftvariation=placement.split('-')[1];if(shiftvariation){var _data$offsets=data.offsets,reference=_data$offsets.reference,popper=_data$offsets.popper;var isVertical=['bottom','top'].indexOf(basePlacement)!==-1;var side=isVertical?'left':'top';var measurement=isVertical?'width':'height';var shiftOffsets={start:defineProperty({},side,reference[side]),end:defineProperty({},side,reference[side]+reference[measurement]-popper[measurement])};data.offsets.popper=_extends({},popper,shiftOffsets[shiftvariation])}
return data}
function hide(data){if(!isModifierRequired(data.instance.modifiers,'hide','preventOverflow')){return data}
var refRect=data.offsets.reference;var bound=find(data.instance.modifiers,function(modifier){return modifier.name==='preventOverflow'}).boundaries;if(refRect.bottom<bound.top||refRect.left>bound.right||refRect.top>bound.bottom||refRect.right<bound.left){if(data.hide===!0){return data}
data.hide=!0;data.attributes['x-out-of-boundaries']=''}else{if(data.hide===!1){return data}
data.hide=!1;data.attributes['x-out-of-boundaries']=!1}
return data}
function inner(data){var placement=data.placement;var basePlacement=placement.split('-')[0];var _data$offsets=data.offsets,popper=_data$offsets.popper,reference=_data$offsets.reference;var isHoriz=['left','right'].indexOf(basePlacement)!==-1;var subtractLength=['top','left'].indexOf(basePlacement)===-1;popper[isHoriz?'left':'top']=reference[basePlacement]-(subtractLength?popper[isHoriz?'width':'height']:0);data.placement=getOppositePlacement(placement);data.offsets.popper=getClientRect(popper);return data}
var modifiers={shift:{order:100,enabled:!0,fn:shift},offset:{order:200,enabled:!0,fn:offset,offset:0},preventOverflow:{order:300,enabled:!0,fn:preventOverflow,priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:keepTogether},arrow:{order:500,enabled:!0,fn:arrow,element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:flip,behavior:'flip',padding:5,boundariesElement:'viewport',flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:inner},hide:{order:800,enabled:!0,fn:hide},computeStyle:{order:850,enabled:!0,fn:computeStyle,gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:applyStyle,onLoad:applyStyleOnLoad,gpuAcceleration:undefined}};var Defaults={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function onCreate(){},onUpdate:function onUpdate(){},modifiers:modifiers};var Popper=function(){function Popper(reference,popper){var _this=this;var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};classCallCheck(this,Popper);this.scheduleUpdate=function(){return requestAnimationFrame(_this.update)};this.update=debounce(this.update.bind(this));this.options=_extends({},Popper.Defaults,options);this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]};this.reference=reference&&reference.jquery?reference[0]:reference;this.popper=popper&&popper.jquery?popper[0]:popper;this.options.modifiers={};Object.keys(_extends({},Popper.Defaults.modifiers,options.modifiers)).forEach(function(name){_this.options.modifiers[name]=_extends({},Popper.Defaults.modifiers[name]||{},options.modifiers?options.modifiers[name]:{})});this.modifiers=Object.keys(this.options.modifiers).map(function(name){return _extends({name:name},_this.options.modifiers[name])}).sort(function(a,b){return a.order-b.order});this.modifiers.forEach(function(modifierOptions){if(modifierOptions.enabled&&isFunction(modifierOptions.onLoad)){modifierOptions.onLoad(_this.reference,_this.popper,_this.options,modifierOptions,_this.state)}});this.update();var eventsEnabled=this.options.eventsEnabled;if(eventsEnabled){this.enableEventListeners()}
this.state.eventsEnabled=eventsEnabled}
createClass(Popper,[{key:'update',value:function update$$1(){return update.call(this)}},{key:'destroy',value:function destroy$$1(){return destroy.call(this)}},{key:'enableEventListeners',value:function enableEventListeners$$1(){return enableEventListeners.call(this)}},{key:'disableEventListeners',value:function disableEventListeners$$1(){return disableEventListeners.call(this)}}]);return Popper}();Popper.Utils=(typeof window!=='undefined'?window:global).PopperUtils;Popper.placements=placements;Popper.Defaults=Defaults;var NAME$4='dropdown';var VERSION$4='4.4.1';var DATA_KEY$4='bs.dropdown';var EVENT_KEY$4="."+DATA_KEY$4;var DATA_API_KEY$4='.data-api';var JQUERY_NO_CONFLICT$4=$.fn[NAME$4];var ESCAPE_KEYCODE=27;var SPACE_KEYCODE=32;var TAB_KEYCODE=9;var ARROW_UP_KEYCODE=38;var ARROW_DOWN_KEYCODE=40;var RIGHT_MOUSE_BUTTON_WHICH=3;var REGEXP_KEYDOWN=new RegExp(ARROW_UP_KEYCODE+"|"+ARROW_DOWN_KEYCODE+"|"+ESCAPE_KEYCODE);var Event$4={HIDE:"hide"+EVENT_KEY$4,HIDDEN:"hidden"+EVENT_KEY$4,SHOW:"show"+EVENT_KEY$4,SHOWN:"shown"+EVENT_KEY$4,CLICK:"click"+EVENT_KEY$4,CLICK_DATA_API:"click"+EVENT_KEY$4+DATA_API_KEY$4,KEYDOWN_DATA_API:"keydown"+EVENT_KEY$4+DATA_API_KEY$4,KEYUP_DATA_API:"keyup"+EVENT_KEY$4+DATA_API_KEY$4};var ClassName$4={DISABLED:'disabled',SHOW:'show',DROPUP:'dropup',DROPRIGHT:'dropright',DROPLEFT:'dropleft',MENURIGHT:'dropdown-menu-right',MENULEFT:'dropdown-menu-left',POSITION_STATIC:'position-static'};var Selector$4={DATA_TOGGLE:'[data-toggle="dropdown"]',FORM_CHILD:'.dropdown form',MENU:'.dropdown-menu',NAVBAR_NAV:'.navbar-nav',VISIBLE_ITEMS:'.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'};var AttachmentMap={TOP:'top-start',TOPEND:'top-end',BOTTOM:'bottom-start',BOTTOMEND:'bottom-end',RIGHT:'right-start',RIGHTEND:'right-end',LEFT:'left-start',LEFTEND:'left-end'};var Default$2={offset:0,flip:!0,boundary:'scrollParent',reference:'toggle',display:'dynamic',popperConfig:null};var DefaultType$2={offset:'(number|string|function)',flip:'boolean',boundary:'(string|element)',reference:'(string|element)',display:'string',popperConfig:'(null|object)'};var Dropdown=function(){function Dropdown(element,config){this._element=element;this._popper=null;this._config=this._getConfig(config);this._menu=this._getMenuElement();this._inNavbar=this._detectNavbar();this._addEventListeners()}
var _proto=Dropdown.prototype;_proto.toggle=function toggle(){if(this._element.disabled||$(this._element).hasClass(ClassName$4.DISABLED)){return}
var isActive=$(this._menu).hasClass(ClassName$4.SHOW);Dropdown._clearMenus();if(isActive){return}
this.show(!0)};_proto.show=function show(usePopper){if(usePopper===void 0){usePopper=!1}
if(this._element.disabled||$(this._element).hasClass(ClassName$4.DISABLED)||$(this._menu).hasClass(ClassName$4.SHOW)){return}
var relatedTarget={relatedTarget:this._element};var showEvent=$.Event(Event$4.SHOW,relatedTarget);var parent=Dropdown._getParentFromElement(this._element);$(parent).trigger(showEvent);if(showEvent.isDefaultPrevented()){return}
if(!this._inNavbar&&usePopper){if(typeof Popper==='undefined'){throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)')}
var referenceElement=this._element;if(this._config.reference==='parent'){referenceElement=parent}else if(Util.isElement(this._config.reference)){referenceElement=this._config.reference;if(typeof this._config.reference.jquery!=='undefined'){referenceElement=this._config.reference[0]}}
if(this._config.boundary!=='scrollParent'){$(parent).addClass(ClassName$4.POSITION_STATIC)}
this._popper=new Popper(referenceElement,this._menu,this._getPopperConfig())}
if('ontouchstart' in document.documentElement&&$(parent).closest(Selector$4.NAVBAR_NAV).length===0){$(document.body).children().on('mouseover',null,$.noop)}
this._element.focus();this._element.setAttribute('aria-expanded',!0);$(this._menu).toggleClass(ClassName$4.SHOW);$(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.SHOWN,relatedTarget))};_proto.hide=function hide(){if(this._element.disabled||$(this._element).hasClass(ClassName$4.DISABLED)||!$(this._menu).hasClass(ClassName$4.SHOW)){return}
var relatedTarget={relatedTarget:this._element};var hideEvent=$.Event(Event$4.HIDE,relatedTarget);var parent=Dropdown._getParentFromElement(this._element);$(parent).trigger(hideEvent);if(hideEvent.isDefaultPrevented()){return}
if(this._popper){this._popper.destroy()}
$(this._menu).toggleClass(ClassName$4.SHOW);$(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN,relatedTarget))};_proto.dispose=function dispose(){$.removeData(this._element,DATA_KEY$4);$(this._element).off(EVENT_KEY$4);this._element=null;this._menu=null;if(this._popper!==null){this._popper.destroy();this._popper=null}};_proto.update=function update(){this._inNavbar=this._detectNavbar();if(this._popper!==null){this._popper.scheduleUpdate()}};_proto._addEventListeners=function _addEventListeners(){var _this=this;$(this._element).on(Event$4.CLICK,function(event){event.preventDefault();event.stopPropagation();_this.toggle()})};_proto._getConfig=function _getConfig(config){config=_objectSpread2({},this.constructor.Default,{},$(this._element).data(),{},config);Util.typeCheckConfig(NAME$4,config,this.constructor.DefaultType);return config};_proto._getMenuElement=function _getMenuElement(){if(!this._menu){var parent=Dropdown._getParentFromElement(this._element);if(parent){this._menu=parent.querySelector(Selector$4.MENU)}}
return this._menu};_proto._getPlacement=function _getPlacement(){var $parentDropdown=$(this._element.parentNode);var placement=AttachmentMap.BOTTOM;if($parentDropdown.hasClass(ClassName$4.DROPUP)){placement=AttachmentMap.TOP;if($(this._menu).hasClass(ClassName$4.MENURIGHT)){placement=AttachmentMap.TOPEND}}else if($parentDropdown.hasClass(ClassName$4.DROPRIGHT)){placement=AttachmentMap.RIGHT}else if($parentDropdown.hasClass(ClassName$4.DROPLEFT)){placement=AttachmentMap.LEFT}else if($(this._menu).hasClass(ClassName$4.MENURIGHT)){placement=AttachmentMap.BOTTOMEND}
return placement};_proto._detectNavbar=function _detectNavbar(){return $(this._element).closest('.navbar').length>0};_proto._getOffset=function _getOffset(){var _this2=this;var offset={};if(typeof this._config.offset==='function'){offset.fn=function(data){data.offsets=_objectSpread2({},data.offsets,{},_this2._config.offset(data.offsets,_this2._element)||{});return data}}else{offset.offset=this._config.offset}
return offset};_proto._getPopperConfig=function _getPopperConfig(){var popperConfig={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};if(this._config.display==='static'){popperConfig.modifiers.applyStyle={enabled:!1}}
return _objectSpread2({},popperConfig,{},this._config.popperConfig)};Dropdown._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var data=$(this).data(DATA_KEY$4);var _config=typeof config==='object'?config:null;if(!data){data=new Dropdown(this,_config);$(this).data(DATA_KEY$4,data)}
if(typeof config==='string'){if(typeof data[config]==='undefined'){throw new TypeError("No method named \""+config+"\"")}
data[config]()}})};Dropdown._clearMenus=function _clearMenus(event){if(event&&(event.which===RIGHT_MOUSE_BUTTON_WHICH||event.type==='keyup'&&event.which!==TAB_KEYCODE)){return}
var toggles=[].slice.call(document.querySelectorAll(Selector$4.DATA_TOGGLE));for(var i=0,len=toggles.length;i<len;i++){var parent=Dropdown._getParentFromElement(toggles[i]);var context=$(toggles[i]).data(DATA_KEY$4);var relatedTarget={relatedTarget:toggles[i]};if(event&&event.type==='click'){relatedTarget.clickEvent=event}
if(!context){continue}
var dropdownMenu=context._menu;if(!$(parent).hasClass(ClassName$4.SHOW)){continue}
if(event&&(event.type==='click'&&/input|textarea/i.test(event.target.tagName)||event.type==='keyup'&&event.which===TAB_KEYCODE)&&$.contains(parent,event.target)){continue}
var hideEvent=$.Event(Event$4.HIDE,relatedTarget);$(parent).trigger(hideEvent);if(hideEvent.isDefaultPrevented()){continue}
if('ontouchstart' in document.documentElement){$(document.body).children().off('mouseover',null,$.noop)}
toggles[i].setAttribute('aria-expanded','false');if(context._popper){context._popper.destroy()}
$(dropdownMenu).removeClass(ClassName$4.SHOW);$(parent).removeClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN,relatedTarget))}};Dropdown._getParentFromElement=function _getParentFromElement(element){var parent;var selector=Util.getSelectorFromElement(element);if(selector){parent=document.querySelector(selector)}
return parent||element.parentNode};Dropdown._dataApiKeydownHandler=function _dataApiKeydownHandler(event){if(/input|textarea/i.test(event.target.tagName)?event.which===SPACE_KEYCODE||event.which!==ESCAPE_KEYCODE&&(event.which!==ARROW_DOWN_KEYCODE&&event.which!==ARROW_UP_KEYCODE||$(event.target).closest(Selector$4.MENU).length):!REGEXP_KEYDOWN.test(event.which)){return}
event.preventDefault();event.stopPropagation();if(this.disabled||$(this).hasClass(ClassName$4.DISABLED)){return}
var parent=Dropdown._getParentFromElement(this);var isActive=$(parent).hasClass(ClassName$4.SHOW);if(!isActive&&event.which===ESCAPE_KEYCODE){return}
if(!isActive||isActive&&(event.which===ESCAPE_KEYCODE||event.which===SPACE_KEYCODE)){if(event.which===ESCAPE_KEYCODE){var toggle=parent.querySelector(Selector$4.DATA_TOGGLE);$(toggle).trigger('focus')}
$(this).trigger('click');return}
var items=[].slice.call(parent.querySelectorAll(Selector$4.VISIBLE_ITEMS)).filter(function(item){return $(item).is(':visible')});if(items.length===0){return}
var index=items.indexOf(event.target);if(event.which===ARROW_UP_KEYCODE&&index>0){index--}
if(event.which===ARROW_DOWN_KEYCODE&&index<items.length-1){index++}
if(index<0){index=0}
items[index].focus()};_createClass(Dropdown,null,[{key:"VERSION",get:function get(){return VERSION$4}},{key:"Default",get:function get(){return Default$2}},{key:"DefaultType",get:function get(){return DefaultType$2}}]);return Dropdown}();$(document).on(Event$4.KEYDOWN_DATA_API,Selector$4.DATA_TOGGLE,Dropdown._dataApiKeydownHandler).on(Event$4.KEYDOWN_DATA_API,Selector$4.MENU,Dropdown._dataApiKeydownHandler).on(Event$4.CLICK_DATA_API+" "+Event$4.KEYUP_DATA_API,Dropdown._clearMenus).on(Event$4.CLICK_DATA_API,Selector$4.DATA_TOGGLE,function(event){event.preventDefault();event.stopPropagation();Dropdown._jQueryInterface.call($(this),'toggle')}).on(Event$4.CLICK_DATA_API,Selector$4.FORM_CHILD,function(e){e.stopPropagation()});$.fn[NAME$4]=Dropdown._jQueryInterface;$.fn[NAME$4].Constructor=Dropdown;$.fn[NAME$4].noConflict=function(){$.fn[NAME$4]=JQUERY_NO_CONFLICT$4;return Dropdown._jQueryInterface};var NAME$5='modal';var VERSION$5='4.4.1';var DATA_KEY$5='bs.modal';var EVENT_KEY$5="."+DATA_KEY$5;var DATA_API_KEY$5='.data-api';var JQUERY_NO_CONFLICT$5=$.fn[NAME$5];var ESCAPE_KEYCODE$1=27;var Default$3={backdrop:!0,keyboard:!0,focus:!0,show:!0};var DefaultType$3={backdrop:'(boolean|string)',keyboard:'boolean',focus:'boolean',show:'boolean'};var Event$5={HIDE:"hide"+EVENT_KEY$5,HIDE_PREVENTED:"hidePrevented"+EVENT_KEY$5,HIDDEN:"hidden"+EVENT_KEY$5,SHOW:"show"+EVENT_KEY$5,SHOWN:"shown"+EVENT_KEY$5,FOCUSIN:"focusin"+EVENT_KEY$5,RESIZE:"resize"+EVENT_KEY$5,CLICK_DISMISS:"click.dismiss"+EVENT_KEY$5,KEYDOWN_DISMISS:"keydown.dismiss"+EVENT_KEY$5,MOUSEUP_DISMISS:"mouseup.dismiss"+EVENT_KEY$5,MOUSEDOWN_DISMISS:"mousedown.dismiss"+EVENT_KEY$5,CLICK_DATA_API:"click"+EVENT_KEY$5+DATA_API_KEY$5};var ClassName$5={SCROLLABLE:'modal-dialog-scrollable',SCROLLBAR_MEASURER:'modal-scrollbar-measure',BACKDROP:'modal-backdrop',OPEN:'modal-open',FADE:'fade',SHOW:'show',STATIC:'modal-static'};var Selector$5={DIALOG:'.modal-dialog',MODAL_BODY:'.modal-body',DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:'.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',STICKY_CONTENT:'.sticky-top'};var Modal=function(){function Modal(element,config){this._config=this._getConfig(config);this._element=element;this._dialog=element.querySelector(Selector$5.DIALOG);this._backdrop=null;this._isShown=!1;this._isBodyOverflowing=!1;this._ignoreBackdropClick=!1;this._isTransitioning=!1;this._scrollbarWidth=0}
var _proto=Modal.prototype;_proto.toggle=function toggle(relatedTarget){return this._isShown?this.hide():this.show(relatedTarget)};_proto.show=function show(relatedTarget){var _this=this;if(this._isShown||this._isTransitioning){return}
if($(this._element).hasClass(ClassName$5.FADE)){this._isTransitioning=!0}
var showEvent=$.Event(Event$5.SHOW,{relatedTarget:relatedTarget});$(this._element).trigger(showEvent);if(this._isShown||showEvent.isDefaultPrevented()){return}
this._isShown=!0;this._checkScrollbar();this._setScrollbar();this._adjustDialog();this._setEscapeEvent();this._setResizeEvent();$(this._element).on(Event$5.CLICK_DISMISS,Selector$5.DATA_DISMISS,function(event){return _this.hide(event)});$(this._dialog).on(Event$5.MOUSEDOWN_DISMISS,function(){$(_this._element).one(Event$5.MOUSEUP_DISMISS,function(event){if($(event.target).is(_this._element)){_this._ignoreBackdropClick=!0}})});this._showBackdrop(function(){return _this._showElement(relatedTarget)})};_proto.hide=function hide(event){var _this2=this;if(event){event.preventDefault()}
if(!this._isShown||this._isTransitioning){return}
var hideEvent=$.Event(Event$5.HIDE);$(this._element).trigger(hideEvent);if(!this._isShown||hideEvent.isDefaultPrevented()){return}
this._isShown=!1;var transition=$(this._element).hasClass(ClassName$5.FADE);if(transition){this._isTransitioning=!0}
this._setEscapeEvent();this._setResizeEvent();$(document).off(Event$5.FOCUSIN);$(this._element).removeClass(ClassName$5.SHOW);$(this._element).off(Event$5.CLICK_DISMISS);$(this._dialog).off(Event$5.MOUSEDOWN_DISMISS);if(transition){var transitionDuration=Util.getTransitionDurationFromElement(this._element);$(this._element).one(Util.TRANSITION_END,function(event){return _this2._hideModal(event)}).emulateTransitionEnd(transitionDuration)}else{this._hideModal()}};_proto.dispose=function dispose(){[window,this._element,this._dialog].forEach(function(htmlElement){return $(htmlElement).off(EVENT_KEY$5)});$(document).off(Event$5.FOCUSIN);$.removeData(this._element,DATA_KEY$5);this._config=null;this._element=null;this._dialog=null;this._backdrop=null;this._isShown=null;this._isBodyOverflowing=null;this._ignoreBackdropClick=null;this._isTransitioning=null;this._scrollbarWidth=null};_proto.handleUpdate=function handleUpdate(){this._adjustDialog()};_proto._getConfig=function _getConfig(config){config=_objectSpread2({},Default$3,{},config);Util.typeCheckConfig(NAME$5,config,DefaultType$3);return config};_proto._triggerBackdropTransition=function _triggerBackdropTransition(){var _this3=this;if(this._config.backdrop==='static'){var hideEventPrevented=$.Event(Event$5.HIDE_PREVENTED);$(this._element).trigger(hideEventPrevented);if(hideEventPrevented.defaultPrevented){return}
this._element.classList.add(ClassName$5.STATIC);var modalTransitionDuration=Util.getTransitionDurationFromElement(this._element);$(this._element).one(Util.TRANSITION_END,function(){_this3._element.classList.remove(ClassName$5.STATIC)}).emulateTransitionEnd(modalTransitionDuration);this._element.focus()}else{this.hide()}};_proto._showElement=function _showElement(relatedTarget){var _this4=this;var transition=$(this._element).hasClass(ClassName$5.FADE);var modalBody=this._dialog?this._dialog.querySelector(Selector$5.MODAL_BODY):null;if(!this._element.parentNode||this._element.parentNode.nodeType!==Node.ELEMENT_NODE){document.body.appendChild(this._element)}
this._element.style.display='block';this._element.removeAttribute('aria-hidden');this._element.setAttribute('aria-modal',!0);if($(this._dialog).hasClass(ClassName$5.SCROLLABLE)&&modalBody){modalBody.scrollTop=0}else{this._element.scrollTop=0}
if(transition){Util.reflow(this._element)}
$(this._element).addClass(ClassName$5.SHOW);if(this._config.focus){this._enforceFocus()}
var shownEvent=$.Event(Event$5.SHOWN,{relatedTarget:relatedTarget});var transitionComplete=function transitionComplete(){if(_this4._config.focus){_this4._element.focus()}
_this4._isTransitioning=!1;$(_this4._element).trigger(shownEvent)};if(transition){var transitionDuration=Util.getTransitionDurationFromElement(this._dialog);$(this._dialog).one(Util.TRANSITION_END,transitionComplete).emulateTransitionEnd(transitionDuration)}else{transitionComplete()}};_proto._enforceFocus=function _enforceFocus(){var _this5=this;$(document).off(Event$5.FOCUSIN).on(Event$5.FOCUSIN,function(event){if(document!==event.target&&_this5._element!==event.target&&$(_this5._element).has(event.target).length===0){_this5._element.focus()}})};_proto._setEscapeEvent=function _setEscapeEvent(){var _this6=this;if(this._isShown&&this._config.keyboard){$(this._element).on(Event$5.KEYDOWN_DISMISS,function(event){if(event.which===ESCAPE_KEYCODE$1){_this6._triggerBackdropTransition()}})}else if(!this._isShown){$(this._element).off(Event$5.KEYDOWN_DISMISS)}};_proto._setResizeEvent=function _setResizeEvent(){var _this7=this;if(this._isShown){$(window).on(Event$5.RESIZE,function(event){return _this7.handleUpdate(event)})}else{$(window).off(Event$5.RESIZE)}};_proto._hideModal=function _hideModal(){var _this8=this;this._element.style.display='none';this._element.setAttribute('aria-hidden',!0);this._element.removeAttribute('aria-modal');this._isTransitioning=!1;this._showBackdrop(function(){$(document.body).removeClass(ClassName$5.OPEN);_this8._resetAdjustments();_this8._resetScrollbar();$(_this8._element).trigger(Event$5.HIDDEN)})};_proto._removeBackdrop=function _removeBackdrop(){if(this._backdrop){$(this._backdrop).remove();this._backdrop=null}};_proto._showBackdrop=function _showBackdrop(callback){var _this9=this;var animate=$(this._element).hasClass(ClassName$5.FADE)?ClassName$5.FADE:'';if(this._isShown&&this._config.backdrop){this._backdrop=document.createElement('div');this._backdrop.className=ClassName$5.BACKDROP;if(animate){this._backdrop.classList.add(animate)}
$(this._backdrop).appendTo(document.body);$(this._element).on(Event$5.CLICK_DISMISS,function(event){if(_this9._ignoreBackdropClick){_this9._ignoreBackdropClick=!1;return}
if(event.target!==event.currentTarget){return}
_this9._triggerBackdropTransition()});if(animate){Util.reflow(this._backdrop)}
$(this._backdrop).addClass(ClassName$5.SHOW);if(!callback){return}
if(!animate){callback();return}
var backdropTransitionDuration=Util.getTransitionDurationFromElement(this._backdrop);$(this._backdrop).one(Util.TRANSITION_END,callback).emulateTransitionEnd(backdropTransitionDuration)}else if(!this._isShown&&this._backdrop){$(this._backdrop).removeClass(ClassName$5.SHOW);var callbackRemove=function callbackRemove(){_this9._removeBackdrop();if(callback){callback()}};if($(this._element).hasClass(ClassName$5.FADE)){var _backdropTransitionDuration=Util.getTransitionDurationFromElement(this._backdrop);$(this._backdrop).one(Util.TRANSITION_END,callbackRemove).emulateTransitionEnd(_backdropTransitionDuration)}else{callbackRemove()}}else if(callback){callback()}};_proto._adjustDialog=function _adjustDialog(){var isModalOverflowing=this._element.scrollHeight>document.documentElement.clientHeight;if(!this._isBodyOverflowing&&isModalOverflowing){this._element.style.paddingLeft=this._scrollbarWidth+"px"}
if(this._isBodyOverflowing&&!isModalOverflowing){this._element.style.paddingRight=this._scrollbarWidth+"px"}};_proto._resetAdjustments=function _resetAdjustments(){this._element.style.paddingLeft='';this._element.style.paddingRight=''};_proto._checkScrollbar=function _checkScrollbar(){var rect=document.body.getBoundingClientRect();this._isBodyOverflowing=rect.left+rect.right<window.innerWidth;this._scrollbarWidth=this._getScrollbarWidth()};_proto._setScrollbar=function _setScrollbar(){var _this10=this;if(this._isBodyOverflowing){var fixedContent=[].slice.call(document.querySelectorAll(Selector$5.FIXED_CONTENT));var stickyContent=[].slice.call(document.querySelectorAll(Selector$5.STICKY_CONTENT));$(fixedContent).each(function(index,element){var actualPadding=element.style.paddingRight;var calculatedPadding=$(element).css('padding-right');$(element).data('padding-right',actualPadding).css('padding-right',parseFloat(calculatedPadding)+_this10._scrollbarWidth+"px")});$(stickyContent).each(function(index,element){var actualMargin=element.style.marginRight;var calculatedMargin=$(element).css('margin-right');$(element).data('margin-right',actualMargin).css('margin-right',parseFloat(calculatedMargin)-_this10._scrollbarWidth+"px")});var actualPadding=document.body.style.paddingRight;var calculatedPadding=$(document.body).css('padding-right');$(document.body).data('padding-right',actualPadding).css('padding-right',parseFloat(calculatedPadding)+this._scrollbarWidth+"px")}
$(document.body).addClass(ClassName$5.OPEN)};_proto._resetScrollbar=function _resetScrollbar(){var fixedContent=[].slice.call(document.querySelectorAll(Selector$5.FIXED_CONTENT));$(fixedContent).each(function(index,element){var padding=$(element).data('padding-right');$(element).removeData('padding-right');element.style.paddingRight=padding?padding:''});var elements=[].slice.call(document.querySelectorAll(""+Selector$5.STICKY_CONTENT));$(elements).each(function(index,element){var margin=$(element).data('margin-right');if(typeof margin!=='undefined'){$(element).css('margin-right',margin).removeData('margin-right')}});var padding=$(document.body).data('padding-right');$(document.body).removeData('padding-right');document.body.style.paddingRight=padding?padding:''};_proto._getScrollbarWidth=function _getScrollbarWidth(){var scrollDiv=document.createElement('div');scrollDiv.className=ClassName$5.SCROLLBAR_MEASURER;document.body.appendChild(scrollDiv);var scrollbarWidth=scrollDiv.getBoundingClientRect().width-scrollDiv.clientWidth;document.body.removeChild(scrollDiv);return scrollbarWidth};Modal._jQueryInterface=function _jQueryInterface(config,relatedTarget){return this.each(function(){var data=$(this).data(DATA_KEY$5);var _config=_objectSpread2({},Default$3,{},$(this).data(),{},typeof config==='object'&&config?config:{});if(!data){data=new Modal(this,_config);$(this).data(DATA_KEY$5,data)}
if(typeof config==='string'){if(typeof data[config]==='undefined'){throw new TypeError("No method named \""+config+"\"")}
data[config](relatedTarget)}else if(_config.show){data.show(relatedTarget)}})};_createClass(Modal,null,[{key:"VERSION",get:function get(){return VERSION$5}},{key:"Default",get:function get(){return Default$3}}]);return Modal}();$(document).on(Event$5.CLICK_DATA_API,Selector$5.DATA_TOGGLE,function(event){var _this11=this;var target;var selector=Util.getSelectorFromElement(this);if(selector){target=document.querySelector(selector)}
var config=$(target).data(DATA_KEY$5)?'toggle':_objectSpread2({},$(target).data(),{},$(this).data());if(this.tagName==='A'||this.tagName==='AREA'){event.preventDefault()}
var $target=$(target).one(Event$5.SHOW,function(showEvent){if(showEvent.isDefaultPrevented()){return}
$target.one(Event$5.HIDDEN,function(){if($(_this11).is(':visible')){_this11.focus()}})});Modal._jQueryInterface.call($(target),config,this)});$.fn[NAME$5]=Modal._jQueryInterface;$.fn[NAME$5].Constructor=Modal;$.fn[NAME$5].noConflict=function(){$.fn[NAME$5]=JQUERY_NO_CONFLICT$5;return Modal._jQueryInterface};var uriAttrs=['background','cite','href','itemtype','longdesc','poster','src','xlink:href'];var ARIA_ATTRIBUTE_PATTERN=/^aria-[\w-]*$/i;var DefaultWhitelist={'*':['class','dir','id','lang','role',ARIA_ATTRIBUTE_PATTERN],a:['target','href','title','rel'],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:['src','alt','title','width','height'],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};var SAFE_URL_PATTERN=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;var DATA_URL_PATTERN=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function allowedAttribute(attr,allowedAttributeList){var attrName=attr.nodeName.toLowerCase();if(allowedAttributeList.indexOf(attrName)!==-1){if(uriAttrs.indexOf(attrName)!==-1){return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN)||attr.nodeValue.match(DATA_URL_PATTERN))}
return!0}
var regExp=allowedAttributeList.filter(function(attrRegex){return attrRegex instanceof RegExp});for(var i=0,l=regExp.length;i<l;i++){if(attrName.match(regExp[i])){return!0}}
return!1}
function sanitizeHtml(unsafeHtml,whiteList,sanitizeFn){if(unsafeHtml.length===0){return unsafeHtml}
if(sanitizeFn&&typeof sanitizeFn==='function'){return sanitizeFn(unsafeHtml)}
var domParser=new window.DOMParser();var createdDocument=domParser.parseFromString(unsafeHtml,'text/html');var whitelistKeys=Object.keys(whiteList);var elements=[].slice.call(createdDocument.body.querySelectorAll('*'));var _loop=function _loop(i,len){var el=elements[i];var elName=el.nodeName.toLowerCase();if(whitelistKeys.indexOf(el.nodeName.toLowerCase())===-1){el.parentNode.removeChild(el);return"continue"}
var attributeList=[].slice.call(el.attributes);var whitelistedAttributes=[].concat(whiteList['*']||[],whiteList[elName]||[]);attributeList.forEach(function(attr){if(!allowedAttribute(attr,whitelistedAttributes)){el.removeAttribute(attr.nodeName)}})};for(var i=0,len=elements.length;i<len;i++){var _ret=_loop(i);if(_ret==="continue")continue}
return createdDocument.body.innerHTML}
var NAME$6='tooltip';var VERSION$6='4.4.1';var DATA_KEY$6='bs.tooltip';var EVENT_KEY$6="."+DATA_KEY$6;var JQUERY_NO_CONFLICT$6=$.fn[NAME$6];var CLASS_PREFIX='bs-tooltip';var BSCLS_PREFIX_REGEX=new RegExp("(^|\\s)"+CLASS_PREFIX+"\\S+",'g');var DISALLOWED_ATTRIBUTES=['sanitize','whiteList','sanitizeFn'];var DefaultType$4={animation:'boolean',template:'string',title:'(string|element|function)',trigger:'string',delay:'(number|object)',html:'boolean',selector:'(string|boolean)',placement:'(string|function)',offset:'(number|string|function)',container:'(string|element|boolean)',fallbackPlacement:'(string|array)',boundary:'(string|element)',sanitize:'boolean',sanitizeFn:'(null|function)',whiteList:'object',popperConfig:'(null|object)'};var AttachmentMap$1={AUTO:'auto',TOP:'top',RIGHT:'right',BOTTOM:'bottom',LEFT:'left'};var Default$4={animation:!0,template:'<div class="tooltip" role="tooltip">'+'<div class="arrow"></div>'+'<div class="tooltip-inner"></div></div>',trigger:'hover focus',title:'',delay:0,html:!1,selector:!1,placement:'top',offset:0,container:!1,fallbackPlacement:'flip',boundary:'scrollParent',sanitize:!0,sanitizeFn:null,whiteList:DefaultWhitelist,popperConfig:null};var HoverState={SHOW:'show',OUT:'out'};var Event$6={HIDE:"hide"+EVENT_KEY$6,HIDDEN:"hidden"+EVENT_KEY$6,SHOW:"show"+EVENT_KEY$6,SHOWN:"shown"+EVENT_KEY$6,INSERTED:"inserted"+EVENT_KEY$6,CLICK:"click"+EVENT_KEY$6,FOCUSIN:"focusin"+EVENT_KEY$6,FOCUSOUT:"focusout"+EVENT_KEY$6,MOUSEENTER:"mouseenter"+EVENT_KEY$6,MOUSELEAVE:"mouseleave"+EVENT_KEY$6};var ClassName$6={FADE:'fade',SHOW:'show'};var Selector$6={TOOLTIP:'.tooltip',TOOLTIP_INNER:'.tooltip-inner',ARROW:'.arrow'};var Trigger={HOVER:'hover',FOCUS:'focus',CLICK:'click',MANUAL:'manual'};var Tooltip=function(){function Tooltip(element,config){if(typeof Popper==='undefined'){throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/)')}
this._isEnabled=!0;this._timeout=0;this._hoverState='';this._activeTrigger={};this._popper=null;this.element=element;this.config=this._getConfig(config);this.tip=null;this._setListeners()}
var _proto=Tooltip.prototype;_proto.enable=function enable(){this._isEnabled=!0};_proto.disable=function disable(){this._isEnabled=!1};_proto.toggleEnabled=function toggleEnabled(){this._isEnabled=!this._isEnabled};_proto.toggle=function toggle(event){if(!this._isEnabled){return}
if(event){var dataKey=this.constructor.DATA_KEY;var context=$(event.currentTarget).data(dataKey);if(!context){context=new this.constructor(event.currentTarget,this._getDelegateConfig());$(event.currentTarget).data(dataKey,context)}
context._activeTrigger.click=!context._activeTrigger.click;if(context._isWithActiveTrigger()){context._enter(null,context)}else{context._leave(null,context)}}else{if($(this.getTipElement()).hasClass(ClassName$6.SHOW)){this._leave(null,this);return}
this._enter(null,this)}};_proto.dispose=function dispose(){clearTimeout(this._timeout);$.removeData(this.element,this.constructor.DATA_KEY);$(this.element).off(this.constructor.EVENT_KEY);$(this.element).closest('.modal').off('hide.bs.modal',this._hideModalHandler);if(this.tip){$(this.tip).remove()}
this._isEnabled=null;this._timeout=null;this._hoverState=null;this._activeTrigger=null;if(this._popper){this._popper.destroy()}
this._popper=null;this.element=null;this.config=null;this.tip=null};_proto.show=function show(){var _this=this;if($(this.element).css('display')==='none'){throw new Error('Please use show on visible elements')}
var showEvent=$.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){$(this.element).trigger(showEvent);var shadowRoot=Util.findShadowRoot(this.element);var isInTheDom=$.contains(shadowRoot!==null?shadowRoot:this.element.ownerDocument.documentElement,this.element);if(showEvent.isDefaultPrevented()||!isInTheDom){return}
var tip=this.getTipElement();var tipId=Util.getUID(this.constructor.NAME);tip.setAttribute('id',tipId);this.element.setAttribute('aria-describedby',tipId);this.setContent();if(this.config.animation){$(tip).addClass(ClassName$6.FADE)}
var placement=typeof this.config.placement==='function'?this.config.placement.call(this,tip,this.element):this.config.placement;var attachment=this._getAttachment(placement);this.addAttachmentClass(attachment);var container=this._getContainer();$(tip).data(this.constructor.DATA_KEY,this);if(!$.contains(this.element.ownerDocument.documentElement,this.tip)){$(tip).appendTo(container)}
$(this.element).trigger(this.constructor.Event.INSERTED);this._popper=new Popper(this.element,tip,this._getPopperConfig(attachment));$(tip).addClass(ClassName$6.SHOW);if('ontouchstart' in document.documentElement){$(document.body).children().on('mouseover',null,$.noop)}
var complete=function complete(){if(_this.config.animation){_this._fixTransition()}
var prevHoverState=_this._hoverState;_this._hoverState=null;$(_this.element).trigger(_this.constructor.Event.SHOWN);if(prevHoverState===HoverState.OUT){_this._leave(null,_this)}};if($(this.tip).hasClass(ClassName$6.FADE)){var transitionDuration=Util.getTransitionDurationFromElement(this.tip);$(this.tip).one(Util.TRANSITION_END,complete).emulateTransitionEnd(transitionDuration)}else{complete()}}};_proto.hide=function hide(callback){var _this2=this;var tip=this.getTipElement();var hideEvent=$.Event(this.constructor.Event.HIDE);var complete=function complete(){if(_this2._hoverState!==HoverState.SHOW&&tip.parentNode){tip.parentNode.removeChild(tip)}
_this2._cleanTipClass();_this2.element.removeAttribute('aria-describedby');$(_this2.element).trigger(_this2.constructor.Event.HIDDEN);if(_this2._popper!==null){_this2._popper.destroy()}
if(callback){callback()}};$(this.element).trigger(hideEvent);if(hideEvent.isDefaultPrevented()){return}
$(tip).removeClass(ClassName$6.SHOW);if('ontouchstart' in document.documentElement){$(document.body).children().off('mouseover',null,$.noop)}
this._activeTrigger[Trigger.CLICK]=!1;this._activeTrigger[Trigger.FOCUS]=!1;this._activeTrigger[Trigger.HOVER]=!1;if($(this.tip).hasClass(ClassName$6.FADE)){var transitionDuration=Util.getTransitionDurationFromElement(tip);$(tip).one(Util.TRANSITION_END,complete).emulateTransitionEnd(transitionDuration)}else{complete()}
this._hoverState=''};_proto.update=function update(){if(this._popper!==null){this._popper.scheduleUpdate()}};_proto.isWithContent=function isWithContent(){return Boolean(this.getTitle())};_proto.addAttachmentClass=function addAttachmentClass(attachment){$(this.getTipElement()).addClass(CLASS_PREFIX+"-"+attachment)};_proto.getTipElement=function getTipElement(){this.tip=this.tip||$(this.config.template)[0];return this.tip};_proto.setContent=function setContent(){var tip=this.getTipElement();this.setElementContent($(tip.querySelectorAll(Selector$6.TOOLTIP_INNER)),this.getTitle());$(tip).removeClass(ClassName$6.FADE+" "+ClassName$6.SHOW)};_proto.setElementContent=function setElementContent($element,content){if(typeof content==='object'&&(content.nodeType||content.jquery)){if(this.config.html){if(!$(content).parent().is($element)){$element.empty().append(content)}}else{$element.text($(content).text())}
return}
if(this.config.html){if(this.config.sanitize){content=sanitizeHtml(content,this.config.whiteList,this.config.sanitizeFn)}
$element.html(content)}else{$element.text(content)}};_proto.getTitle=function getTitle(){var title=this.element.getAttribute('data-original-title');if(!title){title=typeof this.config.title==='function'?this.config.title.call(this.element):this.config.title}
return title};_proto._getPopperConfig=function _getPopperConfig(attachment){var _this3=this;var defaultBsConfig={placement:attachment,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:Selector$6.ARROW},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function onCreate(data){if(data.originalPlacement!==data.placement){_this3._handlePopperPlacementChange(data)}},onUpdate:function onUpdate(data){return _this3._handlePopperPlacementChange(data)}};return _objectSpread2({},defaultBsConfig,{},this.config.popperConfig)};_proto._getOffset=function _getOffset(){var _this4=this;var offset={};if(typeof this.config.offset==='function'){offset.fn=function(data){data.offsets=_objectSpread2({},data.offsets,{},_this4.config.offset(data.offsets,_this4.element)||{});return data}}else{offset.offset=this.config.offset}
return offset};_proto._getContainer=function _getContainer(){if(this.config.container===!1){return document.body}
if(Util.isElement(this.config.container)){return $(this.config.container)}
return $(document).find(this.config.container)};_proto._getAttachment=function _getAttachment(placement){return AttachmentMap$1[placement.toUpperCase()]};_proto._setListeners=function _setListeners(){var _this5=this;var triggers=this.config.trigger.split(' ');triggers.forEach(function(trigger){if(trigger==='click'){$(_this5.element).on(_this5.constructor.Event.CLICK,_this5.config.selector,function(event){return _this5.toggle(event)})}else if(trigger!==Trigger.MANUAL){var eventIn=trigger===Trigger.HOVER?_this5.constructor.Event.MOUSEENTER:_this5.constructor.Event.FOCUSIN;var eventOut=trigger===Trigger.HOVER?_this5.constructor.Event.MOUSELEAVE:_this5.constructor.Event.FOCUSOUT;$(_this5.element).on(eventIn,_this5.config.selector,function(event){return _this5._enter(event)}).on(eventOut,_this5.config.selector,function(event){return _this5._leave(event)})}});this._hideModalHandler=function(){if(_this5.element){_this5.hide()}};$(this.element).closest('.modal').on('hide.bs.modal',this._hideModalHandler);if(this.config.selector){this.config=_objectSpread2({},this.config,{trigger:'manual',selector:''})}else{this._fixTitle()}};_proto._fixTitle=function _fixTitle(){var titleType=typeof this.element.getAttribute('data-original-title');if(this.element.getAttribute('title')||titleType!=='string'){this.element.setAttribute('data-original-title',this.element.getAttribute('title')||'');this.element.setAttribute('title','')}};_proto._enter=function _enter(event,context){var dataKey=this.constructor.DATA_KEY;context=context||$(event.currentTarget).data(dataKey);if(!context){context=new this.constructor(event.currentTarget,this._getDelegateConfig());$(event.currentTarget).data(dataKey,context)}
if(event){context._activeTrigger[event.type==='focusin'?Trigger.FOCUS:Trigger.HOVER]=!0}
if($(context.getTipElement()).hasClass(ClassName$6.SHOW)||context._hoverState===HoverState.SHOW){context._hoverState=HoverState.SHOW;return}
clearTimeout(context._timeout);context._hoverState=HoverState.SHOW;if(!context.config.delay||!context.config.delay.show){context.show();return}
context._timeout=setTimeout(function(){if(context._hoverState===HoverState.SHOW){context.show()}},context.config.delay.show)};_proto._leave=function _leave(event,context){var dataKey=this.constructor.DATA_KEY;context=context||$(event.currentTarget).data(dataKey);if(!context){context=new this.constructor(event.currentTarget,this._getDelegateConfig());$(event.currentTarget).data(dataKey,context)}
if(event){context._activeTrigger[event.type==='focusout'?Trigger.FOCUS:Trigger.HOVER]=!1}
if(context._isWithActiveTrigger()){return}
clearTimeout(context._timeout);context._hoverState=HoverState.OUT;if(!context.config.delay||!context.config.delay.hide){context.hide();return}
context._timeout=setTimeout(function(){if(context._hoverState===HoverState.OUT){context.hide()}},context.config.delay.hide)};_proto._isWithActiveTrigger=function _isWithActiveTrigger(){for(var trigger in this._activeTrigger){if(this._activeTrigger[trigger]){return!0}}
return!1};_proto._getConfig=function _getConfig(config){var dataAttributes=$(this.element).data();Object.keys(dataAttributes).forEach(function(dataAttr){if(DISALLOWED_ATTRIBUTES.indexOf(dataAttr)!==-1){delete dataAttributes[dataAttr]}});config=_objectSpread2({},this.constructor.Default,{},dataAttributes,{},typeof config==='object'&&config?config:{});if(typeof config.delay==='number'){config.delay={show:config.delay,hide:config.delay}}
if(typeof config.title==='number'){config.title=config.title.toString()}
if(typeof config.content==='number'){config.content=config.content.toString()}
Util.typeCheckConfig(NAME$6,config,this.constructor.DefaultType);if(config.sanitize){config.template=sanitizeHtml(config.template,config.whiteList,config.sanitizeFn)}
return config};_proto._getDelegateConfig=function _getDelegateConfig(){var config={};if(this.config){for(var key in this.config){if(this.constructor.Default[key]!==this.config[key]){config[key]=this.config[key]}}}
return config};_proto._cleanTipClass=function _cleanTipClass(){var $tip=$(this.getTipElement());var tabClass=$tip.attr('class').match(BSCLS_PREFIX_REGEX);if(tabClass!==null&&tabClass.length){$tip.removeClass(tabClass.join(''))}};_proto._handlePopperPlacementChange=function _handlePopperPlacementChange(popperData){var popperInstance=popperData.instance;this.tip=popperInstance.popper;this._cleanTipClass();this.addAttachmentClass(this._getAttachment(popperData.placement))};_proto._fixTransition=function _fixTransition(){var tip=this.getTipElement();var initConfigAnimation=this.config.animation;if(tip.getAttribute('x-placement')!==null){return}
$(tip).removeClass(ClassName$6.FADE);this.config.animation=!1;this.hide();this.show();this.config.animation=initConfigAnimation};Tooltip._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var data=$(this).data(DATA_KEY$6);var _config=typeof config==='object'&&config;if(!data&&/dispose|hide/.test(config)){return}
if(!data){data=new Tooltip(this,_config);$(this).data(DATA_KEY$6,data)}
if(typeof config==='string'){if(typeof data[config]==='undefined'){throw new TypeError("No method named \""+config+"\"")}
data[config]()}})};_createClass(Tooltip,null,[{key:"VERSION",get:function get(){return VERSION$6}},{key:"Default",get:function get(){return Default$4}},{key:"NAME",get:function get(){return NAME$6}},{key:"DATA_KEY",get:function get(){return DATA_KEY$6}},{key:"Event",get:function get(){return Event$6}},{key:"EVENT_KEY",get:function get(){return EVENT_KEY$6}},{key:"DefaultType",get:function get(){return DefaultType$4}}]);return Tooltip}();$.fn[NAME$6]=Tooltip._jQueryInterface;$.fn[NAME$6].Constructor=Tooltip;$.fn[NAME$6].noConflict=function(){$.fn[NAME$6]=JQUERY_NO_CONFLICT$6;return Tooltip._jQueryInterface};var NAME$7='popover';var VERSION$7='4.4.1';var DATA_KEY$7='bs.popover';var EVENT_KEY$7="."+DATA_KEY$7;var JQUERY_NO_CONFLICT$7=$.fn[NAME$7];var CLASS_PREFIX$1='bs-popover';var BSCLS_PREFIX_REGEX$1=new RegExp("(^|\\s)"+CLASS_PREFIX$1+"\\S+",'g');var Default$5=_objectSpread2({},Tooltip.Default,{placement:'right',trigger:'click',content:'',template:'<div class="popover" role="tooltip">'+'<div class="arrow"></div>'+'<h3 class="popover-header"></h3>'+'<div class="popover-body"></div></div>'});var DefaultType$5=_objectSpread2({},Tooltip.DefaultType,{content:'(string|element|function)'});var ClassName$7={FADE:'fade',SHOW:'show'};var Selector$7={TITLE:'.popover-header',CONTENT:'.popover-body'};var Event$7={HIDE:"hide"+EVENT_KEY$7,HIDDEN:"hidden"+EVENT_KEY$7,SHOW:"show"+EVENT_KEY$7,SHOWN:"shown"+EVENT_KEY$7,INSERTED:"inserted"+EVENT_KEY$7,CLICK:"click"+EVENT_KEY$7,FOCUSIN:"focusin"+EVENT_KEY$7,FOCUSOUT:"focusout"+EVENT_KEY$7,MOUSEENTER:"mouseenter"+EVENT_KEY$7,MOUSELEAVE:"mouseleave"+EVENT_KEY$7};var Popover=function(_Tooltip){_inheritsLoose(Popover,_Tooltip);function Popover(){return _Tooltip.apply(this,arguments)||this}
var _proto=Popover.prototype;_proto.isWithContent=function isWithContent(){return this.getTitle()||this._getContent()};_proto.addAttachmentClass=function addAttachmentClass(attachment){$(this.getTipElement()).addClass(CLASS_PREFIX$1+"-"+attachment)};_proto.getTipElement=function getTipElement(){this.tip=this.tip||$(this.config.template)[0];return this.tip};_proto.setContent=function setContent(){var $tip=$(this.getTipElement());this.setElementContent($tip.find(Selector$7.TITLE),this.getTitle());var content=this._getContent();if(typeof content==='function'){content=content.call(this.element)}
this.setElementContent($tip.find(Selector$7.CONTENT),content);$tip.removeClass(ClassName$7.FADE+" "+ClassName$7.SHOW)};_proto._getContent=function _getContent(){return this.element.getAttribute('data-content')||this.config.content};_proto._cleanTipClass=function _cleanTipClass(){var $tip=$(this.getTipElement());var tabClass=$tip.attr('class').match(BSCLS_PREFIX_REGEX$1);if(tabClass!==null&&tabClass.length>0){$tip.removeClass(tabClass.join(''))}};Popover._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var data=$(this).data(DATA_KEY$7);var _config=typeof config==='object'?config:null;if(!data&&/dispose|hide/.test(config)){return}
if(!data){data=new Popover(this,_config);$(this).data(DATA_KEY$7,data)}
if(typeof config==='string'){if(typeof data[config]==='undefined'){throw new TypeError("No method named \""+config+"\"")}
data[config]()}})};_createClass(Popover,null,[{key:"VERSION",get:function get(){return VERSION$7}},{key:"Default",get:function get(){return Default$5}},{key:"NAME",get:function get(){return NAME$7}},{key:"DATA_KEY",get:function get(){return DATA_KEY$7}},{key:"Event",get:function get(){return Event$7}},{key:"EVENT_KEY",get:function get(){return EVENT_KEY$7}},{key:"DefaultType",get:function get(){return DefaultType$5}}]);return Popover}(Tooltip);$.fn[NAME$7]=Popover._jQueryInterface;$.fn[NAME$7].Constructor=Popover;$.fn[NAME$7].noConflict=function(){$.fn[NAME$7]=JQUERY_NO_CONFLICT$7;return Popover._jQueryInterface};var NAME$8='scrollspy';var VERSION$8='4.4.1';var DATA_KEY$8='bs.scrollspy';var EVENT_KEY$8="."+DATA_KEY$8;var DATA_API_KEY$6='.data-api';var JQUERY_NO_CONFLICT$8=$.fn[NAME$8];var Default$6={offset:10,method:'auto',target:''};var DefaultType$6={offset:'number',method:'string',target:'(string|element)'};var Event$8={ACTIVATE:"activate"+EVENT_KEY$8,SCROLL:"scroll"+EVENT_KEY$8,LOAD_DATA_API:"load"+EVENT_KEY$8+DATA_API_KEY$6};var ClassName$8={DROPDOWN_ITEM:'dropdown-item',DROPDOWN_MENU:'dropdown-menu',ACTIVE:'active'};var Selector$8={DATA_SPY:'[data-spy="scroll"]',ACTIVE:'.active',NAV_LIST_GROUP:'.nav, .list-group',NAV_LINKS:'.nav-link',NAV_ITEMS:'.nav-item',LIST_ITEMS:'.list-group-item',DROPDOWN:'.dropdown',DROPDOWN_ITEMS:'.dropdown-item',DROPDOWN_TOGGLE:'.dropdown-toggle'};var OffsetMethod={OFFSET:'offset',POSITION:'position'};var ScrollSpy=function(){function ScrollSpy(element,config){var _this=this;this._element=element;this._scrollElement=element.tagName==='BODY'?window:element;this._config=this._getConfig(config);this._selector=this._config.target+" "+Selector$8.NAV_LINKS+","+(this._config.target+" "+Selector$8.LIST_ITEMS+",")+(this._config.target+" "+Selector$8.DROPDOWN_ITEMS);this._offsets=[];this._targets=[];this._activeTarget=null;this._scrollHeight=0;$(this._scrollElement).on(Event$8.SCROLL,function(event){return _this._process(event)});this.refresh();this._process()}
var _proto=ScrollSpy.prototype;_proto.refresh=function refresh(){var _this2=this;var autoMethod=this._scrollElement===this._scrollElement.window?OffsetMethod.OFFSET:OffsetMethod.POSITION;var offsetMethod=this._config.method==='auto'?autoMethod:this._config.method;var offsetBase=offsetMethod===OffsetMethod.POSITION?this._getScrollTop():0;this._offsets=[];this._targets=[];this._scrollHeight=this._getScrollHeight();var targets=[].slice.call(document.querySelectorAll(this._selector));targets.map(function(element){var target;var targetSelector=Util.getSelectorFromElement(element);if(targetSelector){target=document.querySelector(targetSelector)}
if(target){var targetBCR=target.getBoundingClientRect();if(targetBCR.width||targetBCR.height){return[$(target)[offsetMethod]().top+offsetBase,targetSelector]}}
return null}).filter(function(item){return item}).sort(function(a,b){return a[0]-b[0]}).forEach(function(item){_this2._offsets.push(item[0]);_this2._targets.push(item[1])})};_proto.dispose=function dispose(){$.removeData(this._element,DATA_KEY$8);$(this._scrollElement).off(EVENT_KEY$8);this._element=null;this._scrollElement=null;this._config=null;this._selector=null;this._offsets=null;this._targets=null;this._activeTarget=null;this._scrollHeight=null};_proto._getConfig=function _getConfig(config){config=_objectSpread2({},Default$6,{},typeof config==='object'&&config?config:{});if(typeof config.target!=='string'){var id=$(config.target).attr('id');if(!id){id=Util.getUID(NAME$8);$(config.target).attr('id',id)}
config.target="#"+id}
Util.typeCheckConfig(NAME$8,config,DefaultType$6);return config};_proto._getScrollTop=function _getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop};_proto._getScrollHeight=function _getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)};_proto._getOffsetHeight=function _getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height};_proto._process=function _process(){var scrollTop=this._getScrollTop()+this._config.offset;var scrollHeight=this._getScrollHeight();var maxScroll=this._config.offset+scrollHeight-this._getOffsetHeight();if(this._scrollHeight!==scrollHeight){this.refresh()}
if(scrollTop>=maxScroll){var target=this._targets[this._targets.length-1];if(this._activeTarget!==target){this._activate(target)}
return}
if(this._activeTarget&&scrollTop<this._offsets[0]&&this._offsets[0]>0){this._activeTarget=null;this._clear();return}
var offsetLength=this._offsets.length;for(var i=offsetLength;i--;){var isActiveTarget=this._activeTarget!==this._targets[i]&&scrollTop>=this._offsets[i]&&(typeof this._offsets[i+1]==='undefined'||scrollTop<this._offsets[i+1]);if(isActiveTarget){this._activate(this._targets[i])}}};_proto._activate=function _activate(target){this._activeTarget=target;this._clear();var queries=this._selector.split(',').map(function(selector){return selector+"[data-target=\""+target+"\"],"+selector+"[href=\""+target+"\"]"});var $link=$([].slice.call(document.querySelectorAll(queries.join(','))));if($link.hasClass(ClassName$8.DROPDOWN_ITEM)){$link.closest(Selector$8.DROPDOWN).find(Selector$8.DROPDOWN_TOGGLE).addClass(ClassName$8.ACTIVE);$link.addClass(ClassName$8.ACTIVE)}else{$link.addClass(ClassName$8.ACTIVE);$link.parents(Selector$8.NAV_LIST_GROUP).prev(Selector$8.NAV_LINKS+", "+Selector$8.LIST_ITEMS).addClass(ClassName$8.ACTIVE);$link.parents(Selector$8.NAV_LIST_GROUP).prev(Selector$8.NAV_ITEMS).children(Selector$8.NAV_LINKS).addClass(ClassName$8.ACTIVE)}
$(this._scrollElement).trigger(Event$8.ACTIVATE,{relatedTarget:target})};_proto._clear=function _clear(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(node){return node.classList.contains(ClassName$8.ACTIVE)}).forEach(function(node){return node.classList.remove(ClassName$8.ACTIVE)})};ScrollSpy._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var data=$(this).data(DATA_KEY$8);var _config=typeof config==='object'&&config;if(!data){data=new ScrollSpy(this,_config);$(this).data(DATA_KEY$8,data)}
if(typeof config==='string'){if(typeof data[config]==='undefined'){throw new TypeError("No method named \""+config+"\"")}
data[config]()}})};_createClass(ScrollSpy,null,[{key:"VERSION",get:function get(){return VERSION$8}},{key:"Default",get:function get(){return Default$6}}]);return ScrollSpy}();$(window).on(Event$8.LOAD_DATA_API,function(){var scrollSpys=[].slice.call(document.querySelectorAll(Selector$8.DATA_SPY));var scrollSpysLength=scrollSpys.length;for(var i=scrollSpysLength;i--;){var $spy=$(scrollSpys[i]);ScrollSpy._jQueryInterface.call($spy,$spy.data())}});$.fn[NAME$8]=ScrollSpy._jQueryInterface;$.fn[NAME$8].Constructor=ScrollSpy;$.fn[NAME$8].noConflict=function(){$.fn[NAME$8]=JQUERY_NO_CONFLICT$8;return ScrollSpy._jQueryInterface};var NAME$9='tab';var VERSION$9='4.4.1';var DATA_KEY$9='bs.tab';var EVENT_KEY$9="."+DATA_KEY$9;var DATA_API_KEY$7='.data-api';var JQUERY_NO_CONFLICT$9=$.fn[NAME$9];var Event$9={HIDE:"hide"+EVENT_KEY$9,HIDDEN:"hidden"+EVENT_KEY$9,SHOW:"show"+EVENT_KEY$9,SHOWN:"shown"+EVENT_KEY$9,CLICK_DATA_API:"click"+EVENT_KEY$9+DATA_API_KEY$7};var ClassName$9={DROPDOWN_MENU:'dropdown-menu',ACTIVE:'active',DISABLED:'disabled',FADE:'fade',SHOW:'show'};var Selector$9={DROPDOWN:'.dropdown',NAV_LIST_GROUP:'.nav, .list-group',ACTIVE:'.active',ACTIVE_UL:'> li > .active',DATA_TOGGLE:'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',DROPDOWN_TOGGLE:'.dropdown-toggle',DROPDOWN_ACTIVE_CHILD:'> .dropdown-menu .active'};var Tab=function(){function Tab(element){this._element=element}
var _proto=Tab.prototype;_proto.show=function show(){var _this=this;if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&$(this._element).hasClass(ClassName$9.ACTIVE)||$(this._element).hasClass(ClassName$9.DISABLED)){return}
var target;var previous;var listElement=$(this._element).closest(Selector$9.NAV_LIST_GROUP)[0];var selector=Util.getSelectorFromElement(this._element);if(listElement){var itemSelector=listElement.nodeName==='UL'||listElement.nodeName==='OL'?Selector$9.ACTIVE_UL:Selector$9.ACTIVE;previous=$.makeArray($(listElement).find(itemSelector));previous=previous[previous.length-1]}
var hideEvent=$.Event(Event$9.HIDE,{relatedTarget:this._element});var showEvent=$.Event(Event$9.SHOW,{relatedTarget:previous});if(previous){$(previous).trigger(hideEvent)}
$(this._element).trigger(showEvent);if(showEvent.isDefaultPrevented()||hideEvent.isDefaultPrevented()){return}
if(selector){target=document.querySelector(selector)}
this._activate(this._element,listElement);var complete=function complete(){var hiddenEvent=$.Event(Event$9.HIDDEN,{relatedTarget:_this._element});var shownEvent=$.Event(Event$9.SHOWN,{relatedTarget:previous});$(previous).trigger(hiddenEvent);$(_this._element).trigger(shownEvent)};if(target){this._activate(target,target.parentNode,complete)}else{complete()}};_proto.dispose=function dispose(){$.removeData(this._element,DATA_KEY$9);this._element=null};_proto._activate=function _activate(element,container,callback){var _this2=this;var activeElements=container&&(container.nodeName==='UL'||container.nodeName==='OL')?$(container).find(Selector$9.ACTIVE_UL):$(container).children(Selector$9.ACTIVE);var active=activeElements[0];var isTransitioning=callback&&active&&$(active).hasClass(ClassName$9.FADE);var complete=function complete(){return _this2._transitionComplete(element,active,callback)};if(active&&isTransitioning){var transitionDuration=Util.getTransitionDurationFromElement(active);$(active).removeClass(ClassName$9.SHOW).one(Util.TRANSITION_END,complete).emulateTransitionEnd(transitionDuration)}else{complete()}};_proto._transitionComplete=function _transitionComplete(element,active,callback){if(active){$(active).removeClass(ClassName$9.ACTIVE);var dropdownChild=$(active.parentNode).find(Selector$9.DROPDOWN_ACTIVE_CHILD)[0];if(dropdownChild){$(dropdownChild).removeClass(ClassName$9.ACTIVE)}
if(active.getAttribute('role')==='tab'){active.setAttribute('aria-selected',!1)}}
$(element).addClass(ClassName$9.ACTIVE);if(element.getAttribute('role')==='tab'){element.setAttribute('aria-selected',!0)}
Util.reflow(element);if(element.classList.contains(ClassName$9.FADE)){element.classList.add(ClassName$9.SHOW)}
if(element.parentNode&&$(element.parentNode).hasClass(ClassName$9.DROPDOWN_MENU)){var dropdownElement=$(element).closest(Selector$9.DROPDOWN)[0];if(dropdownElement){var dropdownToggleList=[].slice.call(dropdownElement.querySelectorAll(Selector$9.DROPDOWN_TOGGLE));$(dropdownToggleList).addClass(ClassName$9.ACTIVE)}
element.setAttribute('aria-expanded',!0)}
if(callback){callback()}};Tab._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var $this=$(this);var data=$this.data(DATA_KEY$9);if(!data){data=new Tab(this);$this.data(DATA_KEY$9,data)}
if(typeof config==='string'){if(typeof data[config]==='undefined'){throw new TypeError("No method named \""+config+"\"")}
data[config]()}})};_createClass(Tab,null,[{key:"VERSION",get:function get(){return VERSION$9}}]);return Tab}();$(document).on(Event$9.CLICK_DATA_API,Selector$9.DATA_TOGGLE,function(event){event.preventDefault();Tab._jQueryInterface.call($(this),'show')});$.fn[NAME$9]=Tab._jQueryInterface;$.fn[NAME$9].Constructor=Tab;$.fn[NAME$9].noConflict=function(){$.fn[NAME$9]=JQUERY_NO_CONFLICT$9;return Tab._jQueryInterface};var NAME$a='toast';var VERSION$a='4.4.1';var DATA_KEY$a='bs.toast';var EVENT_KEY$a="."+DATA_KEY$a;var JQUERY_NO_CONFLICT$a=$.fn[NAME$a];var Event$a={CLICK_DISMISS:"click.dismiss"+EVENT_KEY$a,HIDE:"hide"+EVENT_KEY$a,HIDDEN:"hidden"+EVENT_KEY$a,SHOW:"show"+EVENT_KEY$a,SHOWN:"shown"+EVENT_KEY$a};var ClassName$a={FADE:'fade',HIDE:'hide',SHOW:'show',SHOWING:'showing'};var DefaultType$7={animation:'boolean',autohide:'boolean',delay:'number'};var Default$7={animation:!0,autohide:!0,delay:500};var Selector$a={DATA_DISMISS:'[data-dismiss="toast"]'};var Toast=function(){function Toast(element,config){this._element=element;this._config=this._getConfig(config);this._timeout=null;this._setListeners()}
var _proto=Toast.prototype;_proto.show=function show(){var _this=this;var showEvent=$.Event(Event$a.SHOW);$(this._element).trigger(showEvent);if(showEvent.isDefaultPrevented()){return}
if(this._config.animation){this._element.classList.add(ClassName$a.FADE)}
var complete=function complete(){_this._element.classList.remove(ClassName$a.SHOWING);_this._element.classList.add(ClassName$a.SHOW);$(_this._element).trigger(Event$a.SHOWN);if(_this._config.autohide){_this._timeout=setTimeout(function(){_this.hide()},_this._config.delay)}};this._element.classList.remove(ClassName$a.HIDE);Util.reflow(this._element);this._element.classList.add(ClassName$a.SHOWING);if(this._config.animation){var transitionDuration=Util.getTransitionDurationFromElement(this._element);$(this._element).one(Util.TRANSITION_END,complete).emulateTransitionEnd(transitionDuration)}else{complete()}};_proto.hide=function hide(){if(!this._element.classList.contains(ClassName$a.SHOW)){return}
var hideEvent=$.Event(Event$a.HIDE);$(this._element).trigger(hideEvent);if(hideEvent.isDefaultPrevented()){return}
this._close()};_proto.dispose=function dispose(){clearTimeout(this._timeout);this._timeout=null;if(this._element.classList.contains(ClassName$a.SHOW)){this._element.classList.remove(ClassName$a.SHOW)}
$(this._element).off(Event$a.CLICK_DISMISS);$.removeData(this._element,DATA_KEY$a);this._element=null;this._config=null};_proto._getConfig=function _getConfig(config){config=_objectSpread2({},Default$7,{},$(this._element).data(),{},typeof config==='object'&&config?config:{});Util.typeCheckConfig(NAME$a,config,this.constructor.DefaultType);return config};_proto._setListeners=function _setListeners(){var _this2=this;$(this._element).on(Event$a.CLICK_DISMISS,Selector$a.DATA_DISMISS,function(){return _this2.hide()})};_proto._close=function _close(){var _this3=this;var complete=function complete(){_this3._element.classList.add(ClassName$a.HIDE);$(_this3._element).trigger(Event$a.HIDDEN)};this._element.classList.remove(ClassName$a.SHOW);if(this._config.animation){var transitionDuration=Util.getTransitionDurationFromElement(this._element);$(this._element).one(Util.TRANSITION_END,complete).emulateTransitionEnd(transitionDuration)}else{complete()}};Toast._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var $element=$(this);var data=$element.data(DATA_KEY$a);var _config=typeof config==='object'&&config;if(!data){data=new Toast(this,_config);$element.data(DATA_KEY$a,data)}
if(typeof config==='string'){if(typeof data[config]==='undefined'){throw new TypeError("No method named \""+config+"\"")}
data[config](this)}})};_createClass(Toast,null,[{key:"VERSION",get:function get(){return VERSION$a}},{key:"DefaultType",get:function get(){return DefaultType$7}},{key:"Default",get:function get(){return Default$7}}]);return Toast}();$.fn[NAME$a]=Toast._jQueryInterface;$.fn[NAME$a].Constructor=Toast;$.fn[NAME$a].noConflict=function(){$.fn[NAME$a]=JQUERY_NO_CONFLICT$a;return Toast._jQueryInterface};exports.Alert=Alert;exports.Button=Button;exports.Carousel=Carousel;exports.Collapse=Collapse;exports.Dropdown=Dropdown;exports.Modal=Modal;exports.Popover=Popover;exports.Scrollspy=ScrollSpy;exports.Tab=Tab;exports.Toast=Toast;exports.Tooltip=Tooltip;exports.Util=Util;Object.defineProperty(exports,'__esModule',{value:!0})})));/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e("undefined"!=typeof jQuery?jQuery:window.Zepto)}(function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(t.target).ajaxSubmit(r))}function r(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0]}var i=this;if(i.clk=r,"image"==r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)}function a(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var n={};n.fileapi=void 0!==e("<input type='file'/>").get(0).files,n.formdata=void 0!==window.FormData;var i=!!e.fn.prop;e.fn.attr2=function(){if(!i)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t){function r(r){var a,n,i=e.param(r,t.traditional).split("&"),o=i.length,s=[];for(a=0;o>a;a++)i[a]=i[a].replace(/\+/g," "),n=i[a].split("="),s.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);return s}function o(a){for(var n=new FormData,i=0;i<a.length;i++)n.append(a[i].name,a[i].value);if(t.extraData){var o=r(t.extraData);for(i=0;i<o.length;i++)o[i]&&n.append(o[i][0],o[i][1])}t.data=null;var s=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:u||"POST"});t.uploadProgress&&(s.xhr=function(){var r=e.ajaxSettings.xhr();return r.upload&&r.upload.addEventListener("progress",function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(a/n*100)),t.uploadProgress(e,a,n,r)},!1),r}),s.data=null;var c=s.beforeSend;return s.beforeSend=function(e,r){r.data=t.formData?t.formData:n,c&&c.call(this,e,r)},e.ajax(s)}function s(r){function n(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(r){a("cannot get iframe.contentWindow document: "+r)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){a("cannot get iframe.contentDocument: "+r),t=e.document}return t}function o(){function t(){try{var e=n(g).readyState;a("state = "+e),e&&"uninitialized"==e.toLowerCase()&&setTimeout(t,50)}catch(r){a("Server abort: ",r," (",r.name,")"),s(k),j&&clearTimeout(j),j=void 0}}var r=f.attr2("target"),i=f.attr2("action"),o="multipart/form-data",c=f.attr("enctype")||f.attr("encoding")||o;w.setAttribute("target",p),(!u||/post/i.test(u))&&w.setAttribute("method","POST"),i!=m.url&&w.setAttribute("action",m.url),m.skipEncodingOverride||u&&!/post/i.test(u)||f.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),m.timeout&&(j=setTimeout(function(){T=!0,s(D)},m.timeout));var l=[];try{if(m.extraData)for(var d in m.extraData)m.extraData.hasOwnProperty(d)&&l.push(e.isPlainObject(m.extraData[d])&&m.extraData[d].hasOwnProperty("name")&&m.extraData[d].hasOwnProperty("value")?e('<input type="hidden" name="'+m.extraData[d].name+'">').val(m.extraData[d].value).appendTo(w)[0]:e('<input type="hidden" name="'+d+'">').val(m.extraData[d]).appendTo(w)[0]);m.iframeTarget||v.appendTo("body"),g.attachEvent?g.attachEvent("onload",s):g.addEventListener("load",s,!1),setTimeout(t,15);try{w.submit()}catch(h){var x=document.createElement("form").submit;x.apply(w)}}finally{w.setAttribute("action",i),w.setAttribute("enctype",c),r?w.setAttribute("target",r):f.removeAttr("target"),e(l).remove()}}function s(t){if(!x.aborted&&!F){if(M=n(g),M||(a("cannot access response document"),t=k),t===D&&x)return x.abort("timeout"),void S.reject(x,"timeout");if(t==k&&x)return x.abort("server abort"),void S.reject(x,"error","server abort");if(M&&M.location.href!=m.iframeSrc||T){g.detachEvent?g.detachEvent("onload",s):g.removeEventListener("load",s,!1);var r,i="success";try{if(T)throw"timeout";var o="xml"==m.dataType||M.XMLDocument||e.isXMLDoc(M);if(a("isXml="+o),!o&&window.opera&&(null===M.body||!M.body.innerHTML)&&--O)return a("requeing onLoad callback, DOM not available"),void setTimeout(s,250);var u=M.body?M.body:M.documentElement;x.responseText=u?u.innerHTML:null,x.responseXML=M.XMLDocument?M.XMLDocument:M,o&&(m.dataType="xml"),x.getResponseHeader=function(e){var t={"content-type":m.dataType};return t[e.toLowerCase()]},u&&(x.status=Number(u.getAttribute("status"))||x.status,x.statusText=u.getAttribute("statusText")||x.statusText);var c=(m.dataType||"").toLowerCase(),l=/(json|script|text)/.test(c);if(l||m.textarea){var f=M.getElementsByTagName("textarea")[0];if(f)x.responseText=f.value,x.status=Number(f.getAttribute("status"))||x.status,x.statusText=f.getAttribute("statusText")||x.statusText;else if(l){var p=M.getElementsByTagName("pre")[0],h=M.getElementsByTagName("body")[0];p?x.responseText=p.textContent?p.textContent:p.innerText:h&&(x.responseText=h.textContent?h.textContent:h.innerText)}}else"xml"==c&&!x.responseXML&&x.responseText&&(x.responseXML=X(x.responseText));try{E=_(x,c,m)}catch(y){i="parsererror",x.error=r=y||i}}catch(y){a("error caught: ",y),i="error",x.error=r=y||i}x.aborted&&(a("upload aborted"),i=null),x.status&&(i=x.status>=200&&x.status<300||304===x.status?"success":"error"),"success"===i?(m.success&&m.success.call(m.context,E,"success",x),S.resolve(x.responseText,"success",x),d&&e.event.trigger("ajaxSuccess",[x,m])):i&&(void 0===r&&(r=x.statusText),m.error&&m.error.call(m.context,x,i,r),S.reject(x,"error",r),d&&e.event.trigger("ajaxError",[x,m,r])),d&&e.event.trigger("ajaxComplete",[x,m]),d&&!--e.active&&e.event.trigger("ajaxStop"),m.complete&&m.complete.call(m.context,x,i),F=!0,m.timeout&&clearTimeout(j),setTimeout(function(){m.iframeTarget?v.attr("src",m.iframeSrc):v.remove(),x.responseXML=null},100)}}}var c,l,m,d,p,v,g,x,y,b,T,j,w=f[0],S=e.Deferred();if(S.abort=function(e){x.abort(e)},r)for(l=0;l<h.length;l++)c=e(h[l]),i?c.prop("disabled",!1):c.removeAttr("disabled");if(m=e.extend(!0,{},e.ajaxSettings,t),m.context=m.context||m,p="jqFormIO"+(new Date).getTime(),m.iframeTarget?(v=e(m.iframeTarget),b=v.attr2("name"),b?p=b:v.attr2("name",p)):(v=e('<iframe name="'+p+'" src="'+m.iframeSrc+'" />'),v.css({position:"absolute",top:"-1000px",left:"-1000px"})),g=v[0],x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";a("aborting upload... "+r),this.aborted=1;try{g.contentWindow.document.execCommand&&g.contentWindow.document.execCommand("Stop")}catch(n){}v.attr("src",m.iframeSrc),x.error=r,m.error&&m.error.call(m.context,x,r,t),d&&e.event.trigger("ajaxError",[x,m,r]),m.complete&&m.complete.call(m.context,x,r)}},d=m.global,d&&0===e.active++&&e.event.trigger("ajaxStart"),d&&e.event.trigger("ajaxSend",[x,m]),m.beforeSend&&m.beforeSend.call(m.context,x,m)===!1)return m.global&&e.active--,S.reject(),S;if(x.aborted)return S.reject(),S;y=w.clk,y&&(b=y.name,b&&!y.disabled&&(m.extraData=m.extraData||{},m.extraData[b]=y.value,"image"==y.type&&(m.extraData[b+".x"]=w.clk_x,m.extraData[b+".y"]=w.clk_y)));var D=1,k=2,A=e("meta[name=csrf-token]").attr("content"),L=e("meta[name=csrf-param]").attr("content");L&&A&&(m.extraData=m.extraData||{},m.extraData[L]=A),m.forceSync?o():setTimeout(o,10);var E,M,F,O=50,X=e.parseXML||function(e,t){return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!=t.documentElement.nodeName?t:null},C=e.parseJSON||function(e){return window.eval("("+e+")")},_=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i="xml"===r||!r&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&("json"===r||!r&&n.indexOf("json")>=0?o=C(o):("script"===r||!r&&n.indexOf("javascript")>=0)&&e.globalEval(o)),o};return S}if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),this;var u,c,l,f=this;"function"==typeof t?t={success:t}:void 0===t&&(t={}),u=t.type||this.attr2("method"),c=t.url||this.attr2("action"),l="string"==typeof c?e.trim(c):"",l=l||window.location.href||"",l&&(l=(l.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:l,success:e.ajaxSettings.success,type:u||e.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var m={};if(this.trigger("form-pre-serialize",[this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&t.beforeSerialize(this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var d=t.traditional;void 0===d&&(d=e.ajaxSettings.traditional);var p,h=[],v=this.formToArray(t.semantic,h);if(t.data&&(t.extraData=t.data,p=e.param(t.data,d)),t.beforeSubmit&&t.beforeSubmit(v,this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[v,this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var g=e.param(v,d);p&&(g=g?g+"&"+p:p),"GET"==t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+g,t.data=null):t.data=g;var x=[];if(t.resetForm&&x.push(function(){f.resetForm()}),t.clearForm&&x.push(function(){f.clearForm(t.includeHidden)}),!t.dataType&&t.target){var y=t.success||function(){};x.push(function(r){var a=t.replaceTarget?"replaceWith":"html";e(t.target)[a](r).each(y,arguments)})}else t.success&&x.push(t.success);if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=x.length;o>i;i++)x[i].apply(n,[e,r,a||f,f])},t.error){var b=t.error;t.error=function(e,r,a){var n=t.context||this;b.apply(n,[e,r,a,f])}}if(t.complete){var T=t.complete;t.complete=function(e,r){var a=t.context||this;T.apply(a,[e,r,f])}}var j=e("input[type=file]:enabled",this).filter(function(){return""!==e(this).val()}),w=j.length>0,S="multipart/form-data",D=f.attr("enctype")==S||f.attr("encoding")==S,k=n.fileapi&&n.formdata;a("fileAPI :"+k);var A,L=(w||D)&&!k;t.iframe!==!1&&(t.iframe||L)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){A=s(v)}):A=s(v):A=(w||D)&&k?o(v):e.ajax(t),f.removeData("jqxhr").data("jqxhr",A);for(var E=0;E<h.length;E++)h[E]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(n){if(n=n||{},n.delegation=n.delegation&&e.isFunction(e.fn.on),!n.delegation&&0===this.length){var i={s:this.selector,c:this.context};return!e.isReady&&i.s?(a("DOM not ready, queuing ajaxForm"),e(function(){e(i.s,i.c).ajaxForm(n)}),this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return n.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,n,t).on("click.form-plugin",this.selector,n,r),this):this.ajaxFormUnbind().bind("submit.form-plugin",n,t).bind("click.form-plugin",n,r)},e.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r){var a=[];if(0===this.length)return a;var i,o=this[0],s=this.attr("id"),u=t?o.getElementsByTagName("*"):o.elements;if(u&&!/MSIE [678]/.test(navigator.userAgent)&&(u=e(u).get()),s&&(i=e(':input[form="'+s+'"]').get(),i.length&&(u=(u||[]).concat(i))),!u||!u.length)return a;var c,l,f,m,d,p,h;for(c=0,p=u.length;p>c;c++)if(d=u[c],f=d.name,f&&!d.disabled)if(t&&o.clk&&"image"==d.type)o.clk==d&&(a.push({name:f,value:e(d).val(),type:d.type}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}));else if(m=e.fieldValue(d,!0),m&&m.constructor==Array)for(r&&r.push(d),l=0,h=m.length;h>l;l++)a.push({name:f,value:m[l]});else if(n.fileapi&&"file"==d.type){r&&r.push(d);var v=d.files;if(v.length)for(l=0;l<v.length;l++)a.push({name:f,value:v[l],type:d.type});else a.push({name:f,value:"",type:d.type})}else null!==m&&"undefined"!=typeof m&&(r&&r.push(d),a.push({name:f,value:m,type:d.type,required:d.required}));if(!t&&o.clk){var g=e(o.clk),x=g[0];f=x.name,f&&!x.disabled&&"image"==x.type&&(a.push({name:f,value:g.val()}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}))}return a},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor==Array)for(var i=0,o=n.length;o>i;i++)r.push({name:a,value:n[i]});else null!==n&&"undefined"!=typeof n&&r.push({name:this.name,value:n})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;n>a;a++){var i=this[a],o=e.fieldValue(i,t);null===o||"undefined"==typeof o||o.constructor==Array&&!o.length||(o.constructor==Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var a=t.name,n=t.type,i=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"==n||"button"==n||("checkbox"==n||"radio"==n)&&!t.checked||("submit"==n||"image"==n)&&t.form&&t.form.clk!=t||"select"==i&&-1==t.selectedIndex))return null;if("select"==i){var o=t.selectedIndex;if(0>o)return null;for(var s=[],u=t.options,c="select-one"==n,l=c?o+1:u.length,f=c?o:0;l>f;f++){var m=u[f];if(m.selected){var d=m.value;if(d||(d=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text:m.value),c)return d;s.push(d)}}return s}return e(t).val()},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"==n?this.value="":"checkbox"==a||"radio"==a?this.checked=!1:"select"==n?this.selectedIndex=-1:"file"==a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(t===!0&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"==r||"radio"==r)this.checked=t;else if("option"==this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"==a[0].type&&a.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1});/*! jQuery UI - v1.12.1 - 2018-09-06
* http://jqueryui.com
* Includes: effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{factory(jQuery)}}(function($){$.ui=$.ui||{};var version=$.ui.version="1.12.1";
/*!
 * jQuery UI Effects 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var dataSpace="ui-effects-",dataSpaceStyle="ui-effects-style",dataSpaceAnimated="ui-effects-animated",jQuery=$;$.effects={effect:{}};
/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
(function(jQuery,undefined){var stepHooks="backgroundColor borderBottomColor borderLeftColor borderRightColor "+"borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",rplusequals=/^([\-+])=\s*(\d+\.?\d*)/,stringParsers=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(execResult){return[execResult[1],execResult[2],execResult[3],execResult[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(execResult){return[execResult[1]*2.55,execResult[2]*2.55,execResult[3]*2.55,execResult[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(execResult){return[parseInt(execResult[1],16),parseInt(execResult[2],16),parseInt(execResult[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(execResult){return[parseInt(execResult[1]+execResult[1],16),parseInt(execResult[2]+execResult[2],16),parseInt(execResult[3]+execResult[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(execResult){return[execResult[1],execResult[2]/100,execResult[3]/100,execResult[4]]}}],color=jQuery.Color=function(color,green,blue,alpha){return new jQuery.Color.fn.parse(color,green,blue,alpha)},spaces={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},propTypes={"byte":{floor:!0,max:255},"percent":{max:1},"degrees":{mod:360,floor:!0}},support=color.support={},supportElem=jQuery("<p>")[0],colors,each=jQuery.each;supportElem.style.cssText="background-color:rgba(1,1,1,.5)";support.rgba=supportElem.style.backgroundColor.indexOf("rgba")>-1;each(spaces,function(spaceName,space){space.cache="_"+spaceName;space.props.alpha={idx:3,type:"percent",def:1}});function clamp(value,prop,allowEmpty){var type=propTypes[prop.type]||{};if(value==null){return(allowEmpty||!prop.def)?null:prop.def}
value=type.floor?~~value:parseFloat(value);if(isNaN(value)){return prop.def}
if(type.mod){return(value+type.mod)%type.mod}
return 0>value?0:type.max<value?type.max:value}
function stringParse(string){var inst=color(),rgba=inst._rgba=[];string=string.toLowerCase();each(stringParsers,function(i,parser){var parsed,match=parser.re.exec(string),values=match&&parser.parse(match),spaceName=parser.space||"rgba";if(values){parsed=inst[spaceName](values);inst[spaces[spaceName].cache]=parsed[spaces[spaceName].cache];rgba=inst._rgba=parsed._rgba;return!1}});if(rgba.length){if(rgba.join()==="0,0,0,0"){jQuery.extend(rgba,colors.transparent)}
return inst}
return colors[string]}
color.fn=jQuery.extend(color.prototype,{parse:function(red,green,blue,alpha){if(red===undefined){this._rgba=[null,null,null,null];return this}
if(red.jquery||red.nodeType){red=jQuery(red).css(green);green=undefined}
var inst=this,type=jQuery.type(red),rgba=this._rgba=[];if(green!==undefined){red=[red,green,blue,alpha];type="array"}
if(type==="string"){return this.parse(stringParse(red)||colors._default)}
if(type==="array"){each(spaces.rgba.props,function(key,prop){rgba[prop.idx]=clamp(red[prop.idx],prop)});return this}
if(type==="object"){if(red instanceof color){each(spaces,function(spaceName,space){if(red[space.cache]){inst[space.cache]=red[space.cache].slice()}})}else{each(spaces,function(spaceName,space){var cache=space.cache;each(space.props,function(key,prop){if(!inst[cache]&&space.to){if(key==="alpha"||red[key]==null){return}
inst[cache]=space.to(inst._rgba)}
inst[cache][prop.idx]=clamp(red[key],prop,!0)});if(inst[cache]&&jQuery.inArray(null,inst[cache].slice(0,3))<0){inst[cache][3]=1;if(space.from){inst._rgba=space.from(inst[cache])}}})}
return this}},is:function(compare){var is=color(compare),same=!0,inst=this;each(spaces,function(_,space){var localCache,isCache=is[space.cache];if(isCache){localCache=inst[space.cache]||space.to&&space.to(inst._rgba)||[];each(space.props,function(_,prop){if(isCache[prop.idx]!=null){same=(isCache[prop.idx]===localCache[prop.idx]);return same}})}
return same});return same},_space:function(){var used=[],inst=this;each(spaces,function(spaceName,space){if(inst[space.cache]){used.push(spaceName)}});return used.pop()},transition:function(other,distance){var end=color(other),spaceName=end._space(),space=spaces[spaceName],startColor=this.alpha()===0?color("transparent"):this,start=startColor[space.cache]||space.to(startColor._rgba),result=start.slice();end=end[space.cache];each(space.props,function(key,prop){var index=prop.idx,startValue=start[index],endValue=end[index],type=propTypes[prop.type]||{};if(endValue===null){return}
if(startValue===null){result[index]=endValue}else{if(type.mod){if(endValue-startValue>type.mod/2){startValue+=type.mod}else if(startValue-endValue>type.mod/2){startValue-=type.mod}}
result[index]=clamp((endValue-startValue)*distance+startValue,prop)}});return this[spaceName](result)},blend:function(opaque){if(this._rgba[3]===1){return this}
var rgb=this._rgba.slice(),a=rgb.pop(),blend=color(opaque)._rgba;return color(jQuery.map(rgb,function(v,i){return(1-a)*blend[i]+a*v}))},toRgbaString:function(){var prefix="rgba(",rgba=jQuery.map(this._rgba,function(v,i){return v==null?(i>2?1:0):v});if(rgba[3]===1){rgba.pop();prefix="rgb("}
return prefix+rgba.join()+")"},toHslaString:function(){var prefix="hsla(",hsla=jQuery.map(this.hsla(),function(v,i){if(v==null){v=i>2?1:0}
if(i&&i<3){v=Math.round(v*100)+"%"}
return v});if(hsla[3]===1){hsla.pop();prefix="hsl("}
return prefix+hsla.join()+")"},toHexString:function(includeAlpha){var rgba=this._rgba.slice(),alpha=rgba.pop();if(includeAlpha){rgba.push(~~(alpha*255))}
return"#"+jQuery.map(rgba,function(v){v=(v||0).toString(16);return v.length===1?"0"+v:v}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}});color.fn.parse.prototype=color.fn;function hue2rgb(p,q,h){h=(h+1)%1;if(h*6<1){return p+(q-p)*h*6}
if(h*2<1){return q}
if(h*3<2){return p+(q-p)*((2/3)-h)*6}
return p}
spaces.hsla.to=function(rgba){if(rgba[0]==null||rgba[1]==null||rgba[2]==null){return[null,null,null,rgba[3]]}
var r=rgba[0]/255,g=rgba[1]/255,b=rgba[2]/255,a=rgba[3],max=Math.max(r,g,b),min=Math.min(r,g,b),diff=max-min,add=max+min,l=add*0.5,h,s;if(min===max){h=0}else if(r===max){h=(60*(g-b)/diff)+360}else if(g===max){h=(60*(b-r)/diff)+120}else{h=(60*(r-g)/diff)+240}
if(diff===0){s=0}else if(l<=0.5){s=diff/add}else{s=diff/(2-add)}
return[Math.round(h)%360,s,l,a==null?1:a]};spaces.hsla.from=function(hsla){if(hsla[0]==null||hsla[1]==null||hsla[2]==null){return[null,null,null,hsla[3]]}
var h=hsla[0]/360,s=hsla[1],l=hsla[2],a=hsla[3],q=l<=0.5?l*(1+s):l+s-l*s,p=2*l-q;return[Math.round(hue2rgb(p,q,h+(1/3))*255),Math.round(hue2rgb(p,q,h)*255),Math.round(hue2rgb(p,q,h-(1/3))*255),a]};each(spaces,function(spaceName,space){var props=space.props,cache=space.cache,to=space.to,from=space.from;color.fn[spaceName]=function(value){if(to&&!this[cache]){this[cache]=to(this._rgba)}
if(value===undefined){return this[cache].slice()}
var ret,type=jQuery.type(value),arr=(type==="array"||type==="object")?value:arguments,local=this[cache].slice();each(props,function(key,prop){var val=arr[type==="object"?key:prop.idx];if(val==null){val=local[prop.idx]}
local[prop.idx]=clamp(val,prop)});if(from){ret=color(from(local));ret[cache]=local;return ret}else{return color(local)}};each(props,function(key,prop){if(color.fn[key]){return}
color.fn[key]=function(value){var vtype=jQuery.type(value),fn=(key==="alpha"?(this._hsla?"hsla":"rgba"):spaceName),local=this[fn](),cur=local[prop.idx],match;if(vtype==="undefined"){return cur}
if(vtype==="function"){value=value.call(this,cur);vtype=jQuery.type(value)}
if(value==null&&prop.empty){return this}
if(vtype==="string"){match=rplusequals.exec(value);if(match){value=cur+parseFloat(match[2])*(match[1]==="+"?1:-1)}}
local[prop.idx]=value;return this[fn](local)}})});color.hook=function(hook){var hooks=hook.split(" ");each(hooks,function(i,hook){jQuery.cssHooks[hook]={set:function(elem,value){var parsed,curElem,backgroundColor="";if(value!=="transparent"&&(jQuery.type(value)!=="string"||(parsed=stringParse(value)))){value=color(parsed||value);if(!support.rgba&&value._rgba[3]!==1){curElem=hook==="backgroundColor"?elem.parentNode:elem;while((backgroundColor===""||backgroundColor==="transparent")&&curElem&&curElem.style){try{backgroundColor=jQuery.css(curElem,"backgroundColor");curElem=curElem.parentNode}catch(e){}}
value=value.blend(backgroundColor&&backgroundColor!=="transparent"?backgroundColor:"_default")}
value=value.toRgbaString()}
try{elem.style[hook]=value}catch(e){}}};jQuery.fx.step[hook]=function(fx){if(!fx.colorInit){fx.start=color(fx.elem,hook);fx.end=color(fx.end);fx.colorInit=!0}
jQuery.cssHooks[hook].set(fx.elem,fx.start.transition(fx.end,fx.pos))}})};color.hook(stepHooks);jQuery.cssHooks.borderColor={expand:function(value){var expanded={};each(["Top","Right","Bottom","Left"],function(i,part){expanded["border"+part+"Color"]=value});return expanded}};colors=jQuery.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}})(jQuery);(function(){var classAnimationActions=["add","remove","toggle"],shorthandStyles={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};$.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(_,prop){$.fx.step[prop]=function(fx){if(fx.end!=="none"&&!fx.setAttr||fx.pos===1&&!fx.setAttr){jQuery.style(fx.elem,prop,fx.end);fx.setAttr=!0}}});function getElementStyles(elem){var key,len,style=elem.ownerDocument.defaultView?elem.ownerDocument.defaultView.getComputedStyle(elem,null):elem.currentStyle,styles={};if(style&&style.length&&style[0]&&style[style[0]]){len=style.length;while(len--){key=style[len];if(typeof style[key]==="string"){styles[$.camelCase(key)]=style[key]}}}else{for(key in style){if(typeof style[key]==="string"){styles[key]=style[key]}}}
return styles}
function styleDifference(oldStyle,newStyle){var diff={},name,value;for(name in newStyle){value=newStyle[name];if(oldStyle[name]!==value){if(!shorthandStyles[name]){if($.fx.step[name]||!isNaN(parseFloat(value))){diff[name]=value}}}}
return diff}
if(!$.fn.addBack){$.fn.addBack=function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector))}}
$.effects.animateClass=function(value,duration,easing,callback){var o=$.speed(duration,easing,callback);return this.queue(function(){var animated=$(this),baseClass=animated.attr("class")||"",applyClassChange,allAnimations=o.children?animated.find("*").addBack():animated;allAnimations=allAnimations.map(function(){var el=$(this);return{el:el,start:getElementStyles(this)}});applyClassChange=function(){$.each(classAnimationActions,function(i,action){if(value[action]){animated[action+"Class"](value[action])}})};applyClassChange();allAnimations=allAnimations.map(function(){this.end=getElementStyles(this.el[0]);this.diff=styleDifference(this.start,this.end);return this});animated.attr("class",baseClass);allAnimations=allAnimations.map(function(){var styleInfo=this,dfd=$.Deferred(),opts=$.extend({},o,{queue:!1,complete:function(){dfd.resolve(styleInfo)}});this.el.animate(this.diff,opts);return dfd.promise()});$.when.apply($,allAnimations.get()).done(function(){applyClassChange();$.each(arguments,function(){var el=this.el;$.each(this.diff,function(key){el.css(key,"")})});o.complete.call(animated[0])})})};$.fn.extend({addClass:(function(orig){return function(classNames,speed,easing,callback){return speed?$.effects.animateClass.call(this,{add:classNames},speed,easing,callback):orig.apply(this,arguments)}})($.fn.addClass),removeClass:(function(orig){return function(classNames,speed,easing,callback){return arguments.length>1?$.effects.animateClass.call(this,{remove:classNames},speed,easing,callback):orig.apply(this,arguments)}})($.fn.removeClass),toggleClass:(function(orig){return function(classNames,force,speed,easing,callback){if(typeof force==="boolean"||force===undefined){if(!speed){return orig.apply(this,arguments)}else{return $.effects.animateClass.call(this,(force?{add:classNames}:{remove:classNames}),speed,easing,callback)}}else{return $.effects.animateClass.call(this,{toggle:classNames},force,speed,easing)}}})($.fn.toggleClass),switchClass:function(remove,add,speed,easing,callback){return $.effects.animateClass.call(this,{add:add,remove:remove},speed,easing,callback)}})})();(function(){if($.expr&&$.expr.filters&&$.expr.filters.animated){$.expr.filters.animated=(function(orig){return function(elem){return!!$(elem).data(dataSpaceAnimated)||orig(elem)}})($.expr.filters.animated)}
if($.uiBackCompat!==!1){$.extend($.effects,{save:function(element,set){var i=0,length=set.length;for(;i<length;i++){if(set[i]!==null){element.data(dataSpace+set[i],element[0].style[set[i]])}}},restore:function(element,set){var val,i=0,length=set.length;for(;i<length;i++){if(set[i]!==null){val=element.data(dataSpace+set[i]);element.css(set[i],val)}}},setMode:function(el,mode){if(mode==="toggle"){mode=el.is(":hidden")?"show":"hide"}
return mode},createWrapper:function(element){if(element.parent().is(".ui-effects-wrapper")){return element.parent()}
var props={width:element.outerWidth(!0),height:element.outerHeight(!0),"float":element.css("float")},wrapper=$("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),size={width:element.width(),height:element.height()},active=document.activeElement;try{active.id}catch(e){active=document.body}
element.wrap(wrapper);if(element[0]===active||$.contains(element[0],active)){$(active).trigger("focus")}
wrapper=element.parent();if(element.css("position")==="static"){wrapper.css({position:"relative"});element.css({position:"relative"})}else{$.extend(props,{position:element.css("position"),zIndex:element.css("z-index")});$.each(["top","left","bottom","right"],function(i,pos){props[pos]=element.css(pos);if(isNaN(parseInt(props[pos],10))){props[pos]="auto"}});element.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}
element.css(size);return wrapper.css(props).show()},removeWrapper:function(element){var active=document.activeElement;if(element.parent().is(".ui-effects-wrapper")){element.parent().replaceWith(element);if(element[0]===active||$.contains(element[0],active)){$(active).trigger("focus")}}
return element}})}
$.extend($.effects,{version:"1.12.1",define:function(name,mode,effect){if(!effect){effect=mode;mode="effect"}
$.effects.effect[name]=effect;$.effects.effect[name].mode=mode;return effect},scaledDimensions:function(element,percent,direction){if(percent===0){return{height:0,width:0,outerHeight:0,outerWidth:0}}
var x=direction!=="horizontal"?((percent||100)/100):1,y=direction!=="vertical"?((percent||100)/100):1;return{height:element.height()*y,width:element.width()*x,outerHeight:element.outerHeight()*y,outerWidth:element.outerWidth()*x}},clipToBox:function(animation){return{width:animation.clip.right-animation.clip.left,height:animation.clip.bottom-animation.clip.top,left:animation.clip.left,top:animation.clip.top}},unshift:function(element,queueLength,count){var queue=element.queue();if(queueLength>1){queue.splice.apply(queue,[1,0].concat(queue.splice(queueLength,count)))}
element.dequeue()},saveStyle:function(element){element.data(dataSpaceStyle,element[0].style.cssText)},restoreStyle:function(element){element[0].style.cssText=element.data(dataSpaceStyle)||"";element.removeData(dataSpaceStyle)},mode:function(element,mode){var hidden=element.is(":hidden");if(mode==="toggle"){mode=hidden?"show":"hide"}
if(hidden?mode==="hide":mode==="show"){mode="none"}
return mode},getBaseline:function(origin,original){var y,x;switch(origin[0]){case "top":y=0;break;case "middle":y=0.5;break;case "bottom":y=1;break;default:y=origin[0]/original.height}
switch(origin[1]){case "left":x=0;break;case "center":x=0.5;break;case "right":x=1;break;default:x=origin[1]/original.width}
return{x:x,y:y}},createPlaceholder:function(element){var placeholder,cssPosition=element.css("position"),position=element.position();element.css({marginTop:element.css("marginTop"),marginBottom:element.css("marginBottom"),marginLeft:element.css("marginLeft"),marginRight:element.css("marginRight")}).outerWidth(element.outerWidth()).outerHeight(element.outerHeight());if(/^(static|relative)/.test(cssPosition)){cssPosition="absolute";placeholder=$("<"+element[0].nodeName+">").insertAfter(element).css({display:/^(inline|ruby)/.test(element.css("display"))?"inline-block":"block",visibility:"hidden",marginTop:element.css("marginTop"),marginBottom:element.css("marginBottom"),marginLeft:element.css("marginLeft"),marginRight:element.css("marginRight"),"float":element.css("float")}).outerWidth(element.outerWidth()).outerHeight(element.outerHeight()).addClass("ui-effects-placeholder");element.data(dataSpace+"placeholder",placeholder)}
element.css({position:cssPosition,left:position.left,top:position.top});return placeholder},removePlaceholder:function(element){var dataKey=dataSpace+"placeholder",placeholder=element.data(dataKey);if(placeholder){placeholder.remove();element.removeData(dataKey)}},cleanUp:function(element){$.effects.restoreStyle(element);$.effects.removePlaceholder(element)},setTransition:function(element,list,factor,value){value=value||{};$.each(list,function(i,x){var unit=element.cssUnit(x);if(unit[0]>0){value[x]=unit[0]*factor+unit[1]}});return value}});function _normalizeArguments(effect,options,speed,callback){if($.isPlainObject(effect)){options=effect;effect=effect.effect}
effect={effect:effect};if(options==null){options={}}
if($.isFunction(options)){callback=options;speed=null;options={}}
if(typeof options==="number"||$.fx.speeds[options]){callback=speed;speed=options;options={}}
if($.isFunction(speed)){callback=speed;speed=null}
if(options){$.extend(effect,options)}
speed=speed||options.duration;effect.duration=$.fx.off?0:typeof speed==="number"?speed:speed in $.fx.speeds?$.fx.speeds[speed]:$.fx.speeds._default;effect.complete=callback||options.complete;return effect}
function standardAnimationOption(option){if(!option||typeof option==="number"||$.fx.speeds[option]){return!0}
if(typeof option==="string"&&!$.effects.effect[option]){return!0}
if($.isFunction(option)){return!0}
if(typeof option==="object"&&!option.effect){return!0}
return!1}
$.fn.extend({effect:function(){var args=_normalizeArguments.apply(this,arguments),effectMethod=$.effects.effect[args.effect],defaultMode=effectMethod.mode,queue=args.queue,queueName=queue||"fx",complete=args.complete,mode=args.mode,modes=[],prefilter=function(next){var el=$(this),normalizedMode=$.effects.mode(el,mode)||defaultMode;el.data(dataSpaceAnimated,!0);modes.push(normalizedMode);if(defaultMode&&(normalizedMode==="show"||(normalizedMode===defaultMode&&normalizedMode==="hide"))){el.show()}
if(!defaultMode||normalizedMode!=="none"){$.effects.saveStyle(el)}
if($.isFunction(next)){next()}};if($.fx.off||!effectMethod){if(mode){return this[mode](args.duration,complete)}else{return this.each(function(){if(complete){complete.call(this)}})}}
function run(next){var elem=$(this);function cleanup(){elem.removeData(dataSpaceAnimated);$.effects.cleanUp(elem);if(args.mode==="hide"){elem.hide()}
done()}
function done(){if($.isFunction(complete)){complete.call(elem[0])}
if($.isFunction(next)){next()}}
args.mode=modes.shift();if($.uiBackCompat!==!1&&!defaultMode){if(elem.is(":hidden")?mode==="hide":mode==="show"){elem[mode]();done()}else{effectMethod.call(elem[0],args,done)}}else{if(args.mode==="none"){elem[mode]();done()}else{effectMethod.call(elem[0],args,cleanup)}}}
return queue===!1?this.each(prefilter).each(run):this.queue(queueName,prefilter).queue(queueName,run)},show:(function(orig){return function(option){if(standardAnimationOption(option)){return orig.apply(this,arguments)}else{var args=_normalizeArguments.apply(this,arguments);args.mode="show";return this.effect.call(this,args)}}})($.fn.show),hide:(function(orig){return function(option){if(standardAnimationOption(option)){return orig.apply(this,arguments)}else{var args=_normalizeArguments.apply(this,arguments);args.mode="hide";return this.effect.call(this,args)}}})($.fn.hide),toggle:(function(orig){return function(option){if(standardAnimationOption(option)||typeof option==="boolean"){return orig.apply(this,arguments)}else{var args=_normalizeArguments.apply(this,arguments);args.mode="toggle";return this.effect.call(this,args)}}})($.fn.toggle),cssUnit:function(key){var style=this.css(key),val=[];$.each(["em","px","%","pt"],function(i,unit){if(style.indexOf(unit)>0){val=[parseFloat(style),unit]}});return val},cssClip:function(clipObj){if(clipObj){return this.css("clip","rect("+clipObj.top+"px "+clipObj.right+"px "+clipObj.bottom+"px "+clipObj.left+"px)")}
return parseClip(this.css("clip"),this)},transfer:function(options,done){var element=$(this),target=$(options.to),targetFixed=target.css("position")==="fixed",body=$("body"),fixTop=targetFixed?body.scrollTop():0,fixLeft=targetFixed?body.scrollLeft():0,endPosition=target.offset(),animation={top:endPosition.top-fixTop,left:endPosition.left-fixLeft,height:target.innerHeight(),width:target.innerWidth()},startPosition=element.offset(),transfer=$("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(options.className).css({top:startPosition.top-fixTop,left:startPosition.left-fixLeft,height:element.innerHeight(),width:element.innerWidth(),position:targetFixed?"fixed":"absolute"}).animate(animation,options.duration,options.easing,function(){transfer.remove();if($.isFunction(done)){done()}})}});function parseClip(str,element){var outerWidth=element.outerWidth(),outerHeight=element.outerHeight(),clipRegex=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,values=clipRegex.exec(str)||["",0,outerWidth,outerHeight,0];return{top:parseFloat(values[1])||0,right:values[2]==="auto"?outerWidth:parseFloat(values[2]),bottom:values[3]==="auto"?outerHeight:parseFloat(values[3]),left:parseFloat(values[4])||0}}
$.fx.step.clip=function(fx){if(!fx.clipInit){fx.start=$(fx.elem).cssClip();if(typeof fx.end==="string"){fx.end=parseClip(fx.end,fx.elem)}
fx.clipInit=!0}
$(fx.elem).cssClip({top:fx.pos*(fx.end.top-fx.start.top)+fx.start.top,right:fx.pos*(fx.end.right-fx.start.right)+fx.start.right,bottom:fx.pos*(fx.end.bottom-fx.start.bottom)+fx.start.bottom,left:fx.pos*(fx.end.left-fx.start.left)+fx.start.left})}})();(function(){var baseEasings={};$.each(["Quad","Cubic","Quart","Quint","Expo"],function(i,name){baseEasings[name]=function(p){return Math.pow(p,i+2)}});$.extend(baseEasings,{Sine:function(p){return 1-Math.cos(p*Math.PI/2)},Circ:function(p){return 1-Math.sqrt(1-p*p)},Elastic:function(p){return p===0||p===1?p:-Math.pow(2,8*(p-1))*Math.sin(((p-1)*80-7.5)*Math.PI/15)},Back:function(p){return p*p*(3*p-2)},Bounce:function(p){var pow2,bounce=4;while(p<((pow2=Math.pow(2,--bounce))-1)/11){}
return 1/Math.pow(4,3-bounce)-7.5625*Math.pow((pow2*3-2)/22-p,2)}});$.each(baseEasings,function(name,easeIn){$.easing["easeIn"+name]=easeIn;$.easing["easeOut"+name]=function(p){return 1-easeIn(1-p)};$.easing["easeInOut"+name]=function(p){return p<0.5?easeIn(p*2)/2:1-easeIn(p*-2+2)/2}})})();var effect=$.effects;
/*!
 * jQuery UI Effects Blind 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var effectsEffectBlind=$.effects.define("blind","hide",function(options,done){var map={up:["bottom","top"],vertical:["bottom","top"],down:["top","bottom"],left:["right","left"],horizontal:["right","left"],right:["left","right"]},element=$(this),direction=options.direction||"up",start=element.cssClip(),animate={clip:$.extend({},start)},placeholder=$.effects.createPlaceholder(element);animate.clip[map[direction][0]]=animate.clip[map[direction][1]];if(options.mode==="show"){element.cssClip(animate.clip);if(placeholder){placeholder.css($.effects.clipToBox(animate))}
animate.clip=start}
if(placeholder){placeholder.animate($.effects.clipToBox(animate),options.duration,options.easing)}
element.animate(animate,{queue:!1,duration:options.duration,easing:options.easing,complete:done})});
/*!
 * jQuery UI Effects Bounce 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var effectsEffectBounce=$.effects.define("bounce",function(options,done){var upAnim,downAnim,refValue,element=$(this),mode=options.mode,hide=mode==="hide",show=mode==="show",direction=options.direction||"up",distance=options.distance,times=options.times||5,anims=times*2+(show||hide?1:0),speed=options.duration/anims,easing=options.easing,ref=(direction==="up"||direction==="down")?"top":"left",motion=(direction==="up"||direction==="left"),i=0,queuelen=element.queue().length;$.effects.createPlaceholder(element);refValue=element.css(ref);if(!distance){distance=element[ref==="top"?"outerHeight":"outerWidth"]()/3}
if(show){downAnim={opacity:1};downAnim[ref]=refValue;element.css("opacity",0).css(ref,motion?-distance*2:distance*2).animate(downAnim,speed,easing)}
if(hide){distance=distance/Math.pow(2,times-1)}
downAnim={};downAnim[ref]=refValue;for(;i<times;i++){upAnim={};upAnim[ref]=(motion?"-=":"+=")+distance;element.animate(upAnim,speed,easing).animate(downAnim,speed,easing);distance=hide?distance*2:distance/2}
if(hide){upAnim={opacity:0};upAnim[ref]=(motion?"-=":"+=")+distance;element.animate(upAnim,speed,easing)}
element.queue(done);$.effects.unshift(element,queuelen,anims+1)});
/*!
 * jQuery UI Effects Clip 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var effectsEffectClip=$.effects.define("clip","hide",function(options,done){var start,animate={},element=$(this),direction=options.direction||"vertical",both=direction==="both",horizontal=both||direction==="horizontal",vertical=both||direction==="vertical";start=element.cssClip();animate.clip={top:vertical?(start.bottom-start.top)/2:start.top,right:horizontal?(start.right-start.left)/2:start.right,bottom:vertical?(start.bottom-start.top)/2:start.bottom,left:horizontal?(start.right-start.left)/2:start.left};$.effects.createPlaceholder(element);if(options.mode==="show"){element.cssClip(animate.clip);animate.clip=start}
element.animate(animate,{queue:!1,duration:options.duration,easing:options.easing,complete:done})});
/*!
 * jQuery UI Effects Drop 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var effectsEffectDrop=$.effects.define("drop","hide",function(options,done){var distance,element=$(this),mode=options.mode,show=mode==="show",direction=options.direction||"left",ref=(direction==="up"||direction==="down")?"top":"left",motion=(direction==="up"||direction==="left")?"-=":"+=",oppositeMotion=(motion==="+=")?"-=":"+=",animation={opacity:0};$.effects.createPlaceholder(element);distance=options.distance||element[ref==="top"?"outerHeight":"outerWidth"](!0)/2;animation[ref]=motion+distance;if(show){element.css(animation);animation[ref]=oppositeMotion+distance;animation.opacity=1}
element.animate(animation,{queue:!1,duration:options.duration,easing:options.easing,complete:done})});
/*!
 * jQuery UI Effects Explode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var effectsEffectExplode=$.effects.define("explode","hide",function(options,done){var i,j,left,top,mx,my,rows=options.pieces?Math.round(Math.sqrt(options.pieces)):3,cells=rows,element=$(this),mode=options.mode,show=mode==="show",offset=element.show().css("visibility","hidden").offset(),width=Math.ceil(element.outerWidth()/cells),height=Math.ceil(element.outerHeight()/rows),pieces=[];function childComplete(){pieces.push(this);if(pieces.length===rows*cells){animComplete()}}
for(i=0;i<rows;i++){top=offset.top+i*height;my=i-(rows-1)/2;for(j=0;j<cells;j++){left=offset.left+j*width;mx=j-(cells-1)/2;element.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-j*width,top:-i*height}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:width,height:height,left:left+(show?mx*width:0),top:top+(show?my*height:0),opacity:show?0:1}).animate({left:left+(show?0:mx*width),top:top+(show?0:my*height),opacity:show?1:0},options.duration||500,options.easing,childComplete)}}
function animComplete(){element.css({visibility:"visible"});$(pieces).remove();done()}});
/*!
 * jQuery UI Effects Fade 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var effectsEffectFade=$.effects.define("fade","toggle",function(options,done){var show=options.mode==="show";$(this).css("opacity",show?0:1).animate({opacity:show?1:0},{queue:!1,duration:options.duration,easing:options.easing,complete:done})});
/*!
 * jQuery UI Effects Fold 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var effectsEffectFold=$.effects.define("fold","hide",function(options,done){var element=$(this),mode=options.mode,show=mode==="show",hide=mode==="hide",size=options.size||15,percent=/([0-9]+)%/.exec(size),horizFirst=!!options.horizFirst,ref=horizFirst?["right","bottom"]:["bottom","right"],duration=options.duration/2,placeholder=$.effects.createPlaceholder(element),start=element.cssClip(),animation1={clip:$.extend({},start)},animation2={clip:$.extend({},start)},distance=[start[ref[0]],start[ref[1]]],queuelen=element.queue().length;if(percent){size=parseInt(percent[1],10)/100*distance[hide?0:1]}
animation1.clip[ref[0]]=size;animation2.clip[ref[0]]=size;animation2.clip[ref[1]]=0;if(show){element.cssClip(animation2.clip);if(placeholder){placeholder.css($.effects.clipToBox(animation2))}
animation2.clip=start}
element.queue(function(next){if(placeholder){placeholder.animate($.effects.clipToBox(animation1),duration,options.easing).animate($.effects.clipToBox(animation2),duration,options.easing)}
next()}).animate(animation1,duration,options.easing).animate(animation2,duration,options.easing).queue(done);$.effects.unshift(element,queuelen,4)});
/*!
 * jQuery UI Effects Highlight 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var effectsEffectHighlight=$.effects.define("highlight","show",function(options,done){var element=$(this),animation={backgroundColor:element.css("backgroundColor")};if(options.mode==="hide"){animation.opacity=0}
$.effects.saveStyle(element);element.css({backgroundImage:"none",backgroundColor:options.color||"#ffff99"}).animate(animation,{queue:!1,duration:options.duration,easing:options.easing,complete:done})});
/*!
 * jQuery UI Effects Size 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var effectsEffectSize=$.effects.define("size",function(options,done){var baseline,factor,temp,element=$(this),cProps=["fontSize"],vProps=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],hProps=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],mode=options.mode,restore=mode!=="effect",scale=options.scale||"both",origin=options.origin||["middle","center"],position=element.css("position"),pos=element.position(),original=$.effects.scaledDimensions(element),from=options.from||original,to=options.to||$.effects.scaledDimensions(element,0);$.effects.createPlaceholder(element);if(mode==="show"){temp=from;from=to;to=temp}
factor={from:{y:from.height/original.height,x:from.width/original.width},to:{y:to.height/original.height,x:to.width/original.width}};if(scale==="box"||scale==="both"){if(factor.from.y!==factor.to.y){from=$.effects.setTransition(element,vProps,factor.from.y,from);to=$.effects.setTransition(element,vProps,factor.to.y,to)}
if(factor.from.x!==factor.to.x){from=$.effects.setTransition(element,hProps,factor.from.x,from);to=$.effects.setTransition(element,hProps,factor.to.x,to)}}
if(scale==="content"||scale==="both"){if(factor.from.y!==factor.to.y){from=$.effects.setTransition(element,cProps,factor.from.y,from);to=$.effects.setTransition(element,cProps,factor.to.y,to)}}
if(origin){baseline=$.effects.getBaseline(origin,original);from.top=(original.outerHeight-from.outerHeight)*baseline.y+pos.top;from.left=(original.outerWidth-from.outerWidth)*baseline.x+pos.left;to.top=(original.outerHeight-to.outerHeight)*baseline.y+pos.top;to.left=(original.outerWidth-to.outerWidth)*baseline.x+pos.left}
element.css(from);if(scale==="content"||scale==="both"){vProps=vProps.concat(["marginTop","marginBottom"]).concat(cProps);hProps=hProps.concat(["marginLeft","marginRight"]);element.find("*[width]").each(function(){var child=$(this),childOriginal=$.effects.scaledDimensions(child),childFrom={height:childOriginal.height*factor.from.y,width:childOriginal.width*factor.from.x,outerHeight:childOriginal.outerHeight*factor.from.y,outerWidth:childOriginal.outerWidth*factor.from.x},childTo={height:childOriginal.height*factor.to.y,width:childOriginal.width*factor.to.x,outerHeight:childOriginal.height*factor.to.y,outerWidth:childOriginal.width*factor.to.x};if(factor.from.y!==factor.to.y){childFrom=$.effects.setTransition(child,vProps,factor.from.y,childFrom);childTo=$.effects.setTransition(child,vProps,factor.to.y,childTo)}
if(factor.from.x!==factor.to.x){childFrom=$.effects.setTransition(child,hProps,factor.from.x,childFrom);childTo=$.effects.setTransition(child,hProps,factor.to.x,childTo)}
if(restore){$.effects.saveStyle(child)}
child.css(childFrom);child.animate(childTo,options.duration,options.easing,function(){if(restore){$.effects.restoreStyle(child)}})})}
element.animate(to,{queue:!1,duration:options.duration,easing:options.easing,complete:function(){var offset=element.offset();if(to.opacity===0){element.css("opacity",from.opacity)}
if(!restore){element.css("position",position==="static"?"relative":position).offset(offset);$.effects.saveStyle(element)}
done()}})});
/*!
 * jQuery UI Effects Scale 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var effectsEffectScale=$.effects.define("scale",function(options,done){var el=$(this),mode=options.mode,percent=parseInt(options.percent,10)||(parseInt(options.percent,10)===0?0:(mode!=="effect"?0:100)),newOptions=$.extend(!0,{from:$.effects.scaledDimensions(el),to:$.effects.scaledDimensions(el,percent,options.direction||"both"),origin:options.origin||["middle","center"]},options);if(options.fade){newOptions.from.opacity=1;newOptions.to.opacity=0}
$.effects.effect.size.call(this,newOptions,done)});
/*!
 * jQuery UI Effects Puff 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var effectsEffectPuff=$.effects.define("puff","hide",function(options,done){var newOptions=$.extend(!0,{},options,{fade:!0,percent:parseInt(options.percent,10)||150});$.effects.effect.scale.call(this,newOptions,done)});
/*!
 * jQuery UI Effects Pulsate 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var effectsEffectPulsate=$.effects.define("pulsate","show",function(options,done){var element=$(this),mode=options.mode,show=mode==="show",hide=mode==="hide",showhide=show||hide,anims=((options.times||5)*2)+(showhide?1:0),duration=options.duration/anims,animateTo=0,i=1,queuelen=element.queue().length;if(show||!element.is(":visible")){element.css("opacity",0).show();animateTo=1}
for(;i<anims;i++){element.animate({opacity:animateTo},duration,options.easing);animateTo=1-animateTo}
element.animate({opacity:animateTo},duration,options.easing);element.queue(done);$.effects.unshift(element,queuelen,anims+1)});
/*!
 * jQuery UI Effects Shake 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var effectsEffectShake=$.effects.define("shake",function(options,done){var i=1,element=$(this),direction=options.direction||"left",distance=options.distance||20,times=options.times||3,anims=times*2+1,speed=Math.round(options.duration/anims),ref=(direction==="up"||direction==="down")?"top":"left",positiveMotion=(direction==="up"||direction==="left"),animation={},animation1={},animation2={},queuelen=element.queue().length;$.effects.createPlaceholder(element);animation[ref]=(positiveMotion?"-=":"+=")+distance;animation1[ref]=(positiveMotion?"+=":"-=")+distance*2;animation2[ref]=(positiveMotion?"-=":"+=")+distance*2;element.animate(animation,speed,options.easing);for(;i<times;i++){element.animate(animation1,speed,options.easing).animate(animation2,speed,options.easing)}
element.animate(animation1,speed,options.easing).animate(animation,speed/2,options.easing).queue(done);$.effects.unshift(element,queuelen,anims+1)});
/*!
 * jQuery UI Effects Slide 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var effectsEffectSlide=$.effects.define("slide","show",function(options,done){var startClip,startRef,element=$(this),map={up:["bottom","top"],down:["top","bottom"],left:["right","left"],right:["left","right"]},mode=options.mode,direction=options.direction||"left",ref=(direction==="up"||direction==="down")?"top":"left",positiveMotion=(direction==="up"||direction==="left"),distance=options.distance||element[ref==="top"?"outerHeight":"outerWidth"](!0),animation={};$.effects.createPlaceholder(element);startClip=element.cssClip();startRef=element.position()[ref];animation[ref]=(positiveMotion?-1:1)*distance+startRef;animation.clip=element.cssClip();animation.clip[map[direction][1]]=animation.clip[map[direction][0]];if(mode==="show"){element.cssClip(animation.clip);element.css(ref,animation[ref]);animation.clip=startClip;animation[ref]=startRef}
element.animate(animation,{queue:!1,duration:options.duration,easing:options.easing,complete:done})});
/*!
 * jQuery UI Effects Transfer 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var effect;if($.uiBackCompat!==!1){effect=$.effects.define("transfer",function(options,done){$(this).transfer(options,done)})}
var effectsEffectTransfer=effect}));window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}
gtag('js',new Date());gtag('config','UA-53658515-18');gtag('config','AW-953362805');!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','207569866352882');fbq('track','PageView');$(function(){$(".j_menu_mobile_open").click(function(e){e.preventDefault();$(".j_menu_mobile_tab").css("left","auto").fadeIn(1).animate({"right":"0"},200)});$(".j_menu_mobile_close").click(function(e){e.preventDefault();$(".j_menu_mobile_tab").animate({"left":"100%"},200,function(){$(".j_menu_mobile_tab").css({"right":"auto","display":"none"})})});$("[data-go]").click(function(e){e.preventDefault();var goto=$($(this).data("go")).offset().top;$("html, body").animate({scrollTop:goto},goto/2,"easeOutBounce")});$("[data-modal]").click(function(e){e.preventDefault();var modal=$(this).data("modal");$(modal).fadeIn(200).css("display","flex")});$(".j_modal_close").click(function(e){e.preventDefault();if($(e.target).hasClass("j_modal_close")){$(".j_modal_close").fadeOut(200)}
var iframe=$(this).find("iframe");if(iframe){iframe.attr("src",iframe.attr("src"))}});$(".j_collapse").click(function(){var collapse=$(this);collapse.parents().find(".j_collapse_icon").removeClass("icon-minus").addClass("icon-plus");collapse.find(".j_collapse_icon").removeClass("icon-plus").addClass("icon-minus");if(collapse.find(".j_collapse_box").is(":visible")){collapse.find(".j_collapse_box").slideUp(200)}else{collapse.parent().find(".j_collapse_box").slideUp(200);collapse.find(".j_collapse_box").slideDown(200)}});$("form:not('.ajax_off')").submit(function(e){e.preventDefault();var form=$(this);var load=$(".ajax_load");var flashClass="ajax_response";var flash=$("."+flashClass);form.ajaxSubmit({url:form.attr("action"),type:"POST",dataType:"json",beforeSend:function(){load.fadeIn(200).css("display","flex")},success:function(response){if(response.redirect){window.location.href=response.redirect}else{load.fadeOut(200)}
if(response.message){if(flash.length){flash.html(response.message).fadeIn(100).effect("bounce",300)}else{form.prepend("<div class='"+flashClass+"'>"+response.message+"</div>").find("."+flashClass).effect("bounce",300)}}else{flash.fadeOut(100)}},complete:function(){if(form.data("reset")===!0){form.trigger("reset")}}})})})