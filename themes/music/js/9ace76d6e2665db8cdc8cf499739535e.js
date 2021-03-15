/*!
 * jQuery JavaScript Library v1.4.2
 * http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Sat Feb 13 22:33:48 2010 -0500
 */
(function(A,w){function ma(){if(!c.isReady){try{s.documentElement.doScroll("left")}catch(a){setTimeout(ma,1);return}c.ready()}}function Qa(a,b){b.src?c.ajax({url:b.src,async:false,dataType:"script"}):c.globalEval(b.text||b.textContent||b.innerHTML||"");b.parentNode&&b.parentNode.removeChild(b)}function X(a,b,d,f,e,j){var i=a.length;if(typeof b==="object"){for(var o in b)X(a,o,b[o],f,e,d);return a}if(d!==w){f=!j&&f&&c.isFunction(d);for(o=0;o<i;o++)e(a[o],b,f?d.call(a[o],o,e(a[o],b)):d,j);return a}return i?
e(a[0],b):w}function J(){return(new Date).getTime()}function Y(){return false}function Z(){return true}function na(a,b,d){d[0].type=a;return c.event.handle.apply(b,d)}function oa(a){var b,d=[],f=[],e=arguments,j,i,o,k,n,r;i=c.data(this,"events");if(!(a.liveFired===this||!i||!i.live||a.button&&a.type==="click")){a.liveFired=this;var u=i.live.slice(0);for(k=0;k<u.length;k++){i=u[k];i.origType.replace(O,"")===a.type?f.push(i.selector):u.splice(k--,1)}j=c(a.target).closest(f,a.currentTarget);n=0;for(r=
j.length;n<r;n++)for(k=0;k<u.length;k++){i=u[k];if(j[n].selector===i.selector){o=j[n].elem;f=null;if(i.preType==="mouseenter"||i.preType==="mouseleave")f=c(a.relatedTarget).closest(i.selector)[0];if(!f||f!==o)d.push({elem:o,handleObj:i})}}n=0;for(r=d.length;n<r;n++){j=d[n];a.currentTarget=j.elem;a.data=j.handleObj.data;a.handleObj=j.handleObj;if(j.handleObj.origHandler.apply(j.elem,e)===false){b=false;break}}return b}}function pa(a,b){return"live."+(a&&a!=="*"?a+".":"")+b.replace(/\./g,"`").replace(/ /g,
"&")}function qa(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function ra(a,b){var d=0;b.each(function(){if(this.nodeName===(a[d]&&a[d].nodeName)){var f=c.data(a[d++]),e=c.data(this,f);if(f=f&&f.events){delete e.handle;e.events={};for(var j in f)for(var i in f[j])c.event.add(this,j,f[j][i],f[j][i].data)}}})}function sa(a,b,d){var f,e,j;b=b&&b[0]?b[0].ownerDocument||b[0]:s;if(a.length===1&&typeof a[0]==="string"&&a[0].length<512&&b===s&&!ta.test(a[0])&&(c.support.checkClone||!ua.test(a[0]))){e=
true;if(j=c.fragments[a[0]])if(j!==1)f=j}if(!f){f=b.createDocumentFragment();c.clean(a,b,f,d)}if(e)c.fragments[a[0]]=j?f:1;return{fragment:f,cacheable:e}}function K(a,b){var d={};c.each(va.concat.apply([],va.slice(0,b)),function(){d[this]=a});return d}function wa(a){return"scrollTo"in a&&a.document?a:a.nodeType===9?a.defaultView||a.parentWindow:false}var c=function(a,b){return new c.fn.init(a,b)},Ra=A.jQuery,Sa=A.$,s=A.document,T,Ta=/^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,Ua=/^.[^:#\[\.,]*$/,Va=/\S/,
Wa=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,Xa=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,P=navigator.userAgent,xa=false,Q=[],L,$=Object.prototype.toString,aa=Object.prototype.hasOwnProperty,ba=Array.prototype.push,R=Array.prototype.slice,ya=Array.prototype.indexOf;c.fn=c.prototype={init:function(a,b){var d,f;if(!a)return this;if(a.nodeType){this.context=this[0]=a;this.length=1;return this}if(a==="body"&&!b){this.context=s;this[0]=s.body;this.selector="body";this.length=1;return this}if(typeof a==="string")if((d=Ta.exec(a))&&
(d[1]||!b))if(d[1]){f=b?b.ownerDocument||b:s;if(a=Xa.exec(a))if(c.isPlainObject(b)){a=[s.createElement(a[1])];c.fn.attr.call(a,b,true)}else a=[f.createElement(a[1])];else{a=sa([d[1]],[f]);a=(a.cacheable?a.fragment.cloneNode(true):a.fragment).childNodes}return c.merge(this,a)}else{if(b=s.getElementById(d[2])){if(b.id!==d[2])return T.find(a);this.length=1;this[0]=b}this.context=s;this.selector=a;return this}else if(!b&&/^\w+$/.test(a)){this.selector=a;this.context=s;a=s.getElementsByTagName(a);return c.merge(this,
a)}else return!b||b.jquery?(b||T).find(a):c(b).find(a);else if(c.isFunction(a))return T.ready(a);if(a.selector!==w){this.selector=a.selector;this.context=a.context}return c.makeArray(a,this)},selector:"",jquery:"1.4.2",length:0,size:function(){return this.length},toArray:function(){return R.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this.slice(a)[0]:this[a]},pushStack:function(a,b,d){var f=c();c.isArray(a)?ba.apply(f,a):c.merge(f,a);f.prevObject=this;f.context=this.context;if(b===
"find")f.selector=this.selector+(this.selector?" ":"")+d;else if(b)f.selector=this.selector+"."+b+"("+d+")";return f},each:function(a,b){return c.each(this,a,b)},ready:function(a){c.bindReady();if(c.isReady)a.call(s,c);else Q&&Q.push(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(R.apply(this,arguments),"slice",R.call(arguments).join(","))},map:function(a){return this.pushStack(c.map(this,
function(b,d){return a.call(b,d,b)}))},end:function(){return this.prevObject||c(null)},push:ba,sort:[].sort,splice:[].splice};c.fn.init.prototype=c.fn;c.extend=c.fn.extend=function(){var a=arguments[0]||{},b=1,d=arguments.length,f=false,e,j,i,o;if(typeof a==="boolean"){f=a;a=arguments[1]||{};b=2}if(typeof a!=="object"&&!c.isFunction(a))a={};if(d===b){a=this;--b}for(;b<d;b++)if((e=arguments[b])!=null)for(j in e){i=a[j];o=e[j];if(a!==o)if(f&&o&&(c.isPlainObject(o)||c.isArray(o))){i=i&&(c.isPlainObject(i)||
c.isArray(i))?i:c.isArray(o)?[]:{};a[j]=c.extend(f,i,o)}else if(o!==w)a[j]=o}return a};c.extend({noConflict:function(a){A.$=Sa;if(a)A.jQuery=Ra;return c},isReady:false,ready:function(){if(!c.isReady){if(!s.body)return setTimeout(c.ready,13);c.isReady=true;if(Q){for(var a,b=0;a=Q[b++];)a.call(s,c);Q=null}c.fn.triggerHandler&&c(s).triggerHandler("ready")}},bindReady:function(){if(!xa){xa=true;if(s.readyState==="complete")return c.ready();if(s.addEventListener){s.addEventListener("DOMContentLoaded",
L,false);A.addEventListener("load",c.ready,false)}else if(s.attachEvent){s.attachEvent("onreadystatechange",L);A.attachEvent("onload",c.ready);var a=false;try{a=A.frameElement==null}catch(b){}s.documentElement.doScroll&&a&&ma()}}},isFunction:function(a){return $.call(a)==="[object Function]"},isArray:function(a){return $.call(a)==="[object Array]"},isPlainObject:function(a){if(!a||$.call(a)!=="[object Object]"||a.nodeType||a.setInterval)return false;if(a.constructor&&!aa.call(a,"constructor")&&!aa.call(a.constructor.prototype,
"isPrototypeOf"))return false;var b;for(b in a);return b===w||aa.call(a,b)},isEmptyObject:function(a){for(var b in a)return false;return true},error:function(a){throw a;},parseJSON:function(a){if(typeof a!=="string"||!a)return null;a=c.trim(a);if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return A.JSON&&A.JSON.parse?A.JSON.parse(a):(new Function("return "+
a))();else c.error("Invalid JSON: "+a)},noop:function(){},globalEval:function(a){if(a&&Va.test(a)){var b=s.getElementsByTagName("head")[0]||s.documentElement,d=s.createElement("script");d.type="text/javascript";if(c.support.scriptEval)d.appendChild(s.createTextNode(a));else d.text=a;b.insertBefore(d,b.firstChild);b.removeChild(d)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,b,d){var f,e=0,j=a.length,i=j===w||c.isFunction(a);if(d)if(i)for(f in a){if(b.apply(a[f],
d)===false)break}else for(;e<j;){if(b.apply(a[e++],d)===false)break}else if(i)for(f in a){if(b.call(a[f],f,a[f])===false)break}else for(d=a[0];e<j&&b.call(d,e,d)!==false;d=a[++e]);return a},trim:function(a){return(a||"").replace(Wa,"")},makeArray:function(a,b){b=b||[];if(a!=null)a.length==null||typeof a==="string"||c.isFunction(a)||typeof a!=="function"&&a.setInterval?ba.call(b,a):c.merge(b,a);return b},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var d=0,f=b.length;d<f;d++)if(b[d]===
a)return d;return-1},merge:function(a,b){var d=a.length,f=0;if(typeof b.length==="number")for(var e=b.length;f<e;f++)a[d++]=b[f];else for(;b[f]!==w;)a[d++]=b[f++];a.length=d;return a},grep:function(a,b,d){for(var f=[],e=0,j=a.length;e<j;e++)!d!==!b(a[e],e)&&f.push(a[e]);return f},map:function(a,b,d){for(var f=[],e,j=0,i=a.length;j<i;j++){e=b(a[j],j,d);if(e!=null)f[f.length]=e}return f.concat.apply([],f)},guid:1,proxy:function(a,b,d){if(arguments.length===2)if(typeof b==="string"){d=a;a=d[b];b=w}else if(b&&
!c.isFunction(b)){d=b;b=w}if(!b&&a)b=function(){return a.apply(d||this,arguments)};if(a)b.guid=a.guid=a.guid||b.guid||c.guid++;return b},uaMatch:function(a){a=a.toLowerCase();a=/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||!/compatible/.test(a)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}},browser:{}});P=c.uaMatch(P);if(P.browser){c.browser[P.browser]=true;c.browser.version=P.version}if(c.browser.webkit)c.browser.safari=
true;if(ya)c.inArray=function(a,b){return ya.call(b,a)};T=c(s);if(s.addEventListener)L=function(){s.removeEventListener("DOMContentLoaded",L,false);c.ready()};else if(s.attachEvent)L=function(){if(s.readyState==="complete"){s.detachEvent("onreadystatechange",L);c.ready()}};(function(){c.support={};var a=s.documentElement,b=s.createElement("script"),d=s.createElement("div"),f="script"+J();d.style.display="none";d.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var e=d.getElementsByTagName("*"),j=d.getElementsByTagName("a")[0];if(!(!e||!e.length||!j)){c.support={leadingWhitespace:d.firstChild.nodeType===3,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/red/.test(j.getAttribute("style")),hrefNormalized:j.getAttribute("href")==="/a",opacity:/^0.55$/.test(j.style.opacity),cssFloat:!!j.style.cssFloat,checkOn:d.getElementsByTagName("input")[0].value==="on",optSelected:s.createElement("select").appendChild(s.createElement("option")).selected,
parentNode:d.removeChild(d.appendChild(s.createElement("div"))).parentNode===null,deleteExpando:true,checkClone:false,scriptEval:false,noCloneEvent:true,boxModel:null};b.type="text/javascript";try{b.appendChild(s.createTextNode("window."+f+"=1;"))}catch(i){}a.insertBefore(b,a.firstChild);if(A[f]){c.support.scriptEval=true;delete A[f]}try{delete b.test}catch(o){c.support.deleteExpando=false}a.removeChild(b);if(d.attachEvent&&d.fireEvent){d.attachEvent("onclick",function k(){c.support.noCloneEvent=
false;d.detachEvent("onclick",k)});d.cloneNode(true).fireEvent("onclick")}d=s.createElement("div");d.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";a=s.createDocumentFragment();a.appendChild(d.firstChild);c.support.checkClone=a.cloneNode(true).cloneNode(true).lastChild.checked;c(function(){var k=s.createElement("div");k.style.width=k.style.paddingLeft="1px";s.body.appendChild(k);c.boxModel=c.support.boxModel=k.offsetWidth===2;s.body.removeChild(k).style.display="none"});a=function(k){var n=
s.createElement("div");k="on"+k;var r=k in n;if(!r){n.setAttribute(k,"return;");r=typeof n[k]==="function"}return r};c.support.submitBubbles=a("submit");c.support.changeBubbles=a("change");a=b=d=e=j=null}})();c.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};var G="jQuery"+J(),Ya=0,za={};c.extend({cache:{},expando:G,noData:{embed:true,object:true,
applet:true},data:function(a,b,d){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var f=a[G],e=c.cache;if(!f&&typeof b==="string"&&d===w)return null;f||(f=++Ya);if(typeof b==="object"){a[G]=f;e[f]=c.extend(true,{},b)}else if(!e[f]){a[G]=f;e[f]={}}a=e[f];if(d!==w)a[b]=d;return typeof b==="string"?a[b]:a}},removeData:function(a,b){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var d=a[G],f=c.cache,e=f[d];if(b){if(e){delete e[b];c.isEmptyObject(e)&&c.removeData(a)}}else{if(c.support.deleteExpando)delete a[c.expando];
else a.removeAttribute&&a.removeAttribute(c.expando);delete f[d]}}}});c.fn.extend({data:function(a,b){if(typeof a==="undefined"&&this.length)return c.data(this[0]);else if(typeof a==="object")return this.each(function(){c.data(this,a)});var d=a.split(".");d[1]=d[1]?"."+d[1]:"";if(b===w){var f=this.triggerHandler("getData"+d[1]+"!",[d[0]]);if(f===w&&this.length)f=c.data(this[0],a);return f===w&&d[1]?this.data(d[0]):f}else return this.trigger("setData"+d[1]+"!",[d[0],b]).each(function(){c.data(this,
a,b)})},removeData:function(a){return this.each(function(){c.removeData(this,a)})}});c.extend({queue:function(a,b,d){if(a){b=(b||"fx")+"queue";var f=c.data(a,b);if(!d)return f||[];if(!f||c.isArray(d))f=c.data(a,b,c.makeArray(d));else f.push(d);return f}},dequeue:function(a,b){b=b||"fx";var d=c.queue(a,b),f=d.shift();if(f==="inprogress")f=d.shift();if(f){b==="fx"&&d.unshift("inprogress");f.call(a,function(){c.dequeue(a,b)})}}});c.fn.extend({queue:function(a,b){if(typeof a!=="string"){b=a;a="fx"}if(b===
w)return c.queue(this[0],a);return this.each(function(){var d=c.queue(this,a,b);a==="fx"&&d[0]!=="inprogress"&&c.dequeue(this,a)})},dequeue:function(a){return this.each(function(){c.dequeue(this,a)})},delay:function(a,b){a=c.fx?c.fx.speeds[a]||a:a;b=b||"fx";return this.queue(b,function(){var d=this;setTimeout(function(){c.dequeue(d,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var Aa=/[\n\t]/g,ca=/\s+/,Za=/\r/g,$a=/href|src|style/,ab=/(button|input)/i,bb=/(button|input|object|select|textarea)/i,
cb=/^(a|area)$/i,Ba=/radio|checkbox/;c.fn.extend({attr:function(a,b){return X(this,a,b,true,c.attr)},removeAttr:function(a){return this.each(function(){c.attr(this,a,"");this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(c.isFunction(a))return this.each(function(n){var r=c(this);r.addClass(a.call(this,n,r.attr("class")))});if(a&&typeof a==="string")for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1)if(e.className){for(var j=" "+e.className+" ",
i=e.className,o=0,k=b.length;o<k;o++)if(j.indexOf(" "+b[o]+" ")<0)i+=" "+b[o];e.className=c.trim(i)}else e.className=a}return this},removeClass:function(a){if(c.isFunction(a))return this.each(function(k){var n=c(this);n.removeClass(a.call(this,k,n.attr("class")))});if(a&&typeof a==="string"||a===w)for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1&&e.className)if(a){for(var j=(" "+e.className+" ").replace(Aa," "),i=0,o=b.length;i<o;i++)j=j.replace(" "+b[i]+" ",
" ");e.className=c.trim(j)}else e.className=""}return this},toggleClass:function(a,b){var d=typeof a,f=typeof b==="boolean";if(c.isFunction(a))return this.each(function(e){var j=c(this);j.toggleClass(a.call(this,e,j.attr("class"),b),b)});return this.each(function(){if(d==="string")for(var e,j=0,i=c(this),o=b,k=a.split(ca);e=k[j++];){o=f?o:!i.hasClass(e);i[o?"addClass":"removeClass"](e)}else if(d==="undefined"||d==="boolean"){this.className&&c.data(this,"__className__",this.className);this.className=
this.className||a===false?"":c.data(this,"__className__")||""}})},hasClass:function(a){a=" "+a+" ";for(var b=0,d=this.length;b<d;b++)if((" "+this[b].className+" ").replace(Aa," ").indexOf(a)>-1)return true;return false},val:function(a){if(a===w){var b=this[0];if(b){if(c.nodeName(b,"option"))return(b.attributes.value||{}).specified?b.value:b.text;if(c.nodeName(b,"select")){var d=b.selectedIndex,f=[],e=b.options;b=b.type==="select-one";if(d<0)return null;var j=b?d:0;for(d=b?d+1:e.length;j<d;j++){var i=
e[j];if(i.selected){a=c(i).val();if(b)return a;f.push(a)}}return f}if(Ba.test(b.type)&&!c.support.checkOn)return b.getAttribute("value")===null?"on":b.value;return(b.value||"").replace(Za,"")}return w}var o=c.isFunction(a);return this.each(function(k){var n=c(this),r=a;if(this.nodeType===1){if(o)r=a.call(this,k,n.val());if(typeof r==="number")r+="";if(c.isArray(r)&&Ba.test(this.type))this.checked=c.inArray(n.val(),r)>=0;else if(c.nodeName(this,"select")){var u=c.makeArray(r);c("option",this).each(function(){this.selected=
c.inArray(c(this).val(),u)>=0});if(!u.length)this.selectedIndex=-1}else this.value=r}})}});c.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(a,b,d,f){if(!a||a.nodeType===3||a.nodeType===8)return w;if(f&&b in c.attrFn)return c(a)[b](d);f=a.nodeType!==1||!c.isXMLDoc(a);var e=d!==w;b=f&&c.props[b]||b;if(a.nodeType===1){var j=$a.test(b);if(b in a&&f&&!j){if(e){b==="type"&&ab.test(a.nodeName)&&a.parentNode&&c.error("type property can't be changed");
a[b]=d}if(c.nodeName(a,"form")&&a.getAttributeNode(b))return a.getAttributeNode(b).nodeValue;if(b==="tabIndex")return(b=a.getAttributeNode("tabIndex"))&&b.specified?b.value:bb.test(a.nodeName)||cb.test(a.nodeName)&&a.href?0:w;return a[b]}if(!c.support.style&&f&&b==="style"){if(e)a.style.cssText=""+d;return a.style.cssText}e&&a.setAttribute(b,""+d);a=!c.support.hrefNormalized&&f&&j?a.getAttribute(b,2):a.getAttribute(b);return a===null?w:a}return c.style(a,b,d)}});var O=/\.(.*)$/,db=function(a){return a.replace(/[^\w\s\.\|`]/g,
function(b){return"\\"+b})};c.event={add:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){if(a.setInterval&&a!==A&&!a.frameElement)a=A;var e,j;if(d.handler){e=d;d=e.handler}if(!d.guid)d.guid=c.guid++;if(j=c.data(a)){var i=j.events=j.events||{},o=j.handle;if(!o)j.handle=o=function(){return typeof c!=="undefined"&&!c.event.triggered?c.event.handle.apply(o.elem,arguments):w};o.elem=a;b=b.split(" ");for(var k,n=0,r;k=b[n++];){j=e?c.extend({},e):{handler:d,data:f};if(k.indexOf(".")>-1){r=k.split(".");
k=r.shift();j.namespace=r.slice(0).sort().join(".")}else{r=[];j.namespace=""}j.type=k;j.guid=d.guid;var u=i[k],z=c.event.special[k]||{};if(!u){u=i[k]=[];if(!z.setup||z.setup.call(a,f,r,o)===false)if(a.addEventListener)a.addEventListener(k,o,false);else a.attachEvent&&a.attachEvent("on"+k,o)}if(z.add){z.add.call(a,j);if(!j.handler.guid)j.handler.guid=d.guid}u.push(j);c.event.global[k]=true}a=null}}},global:{},remove:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){var e,j=0,i,o,k,n,r,u,z=c.data(a),
C=z&&z.events;if(z&&C){if(b&&b.type){d=b.handler;b=b.type}if(!b||typeof b==="string"&&b.charAt(0)==="."){b=b||"";for(e in C)c.event.remove(a,e+b)}else{for(b=b.split(" ");e=b[j++];){n=e;i=e.indexOf(".")<0;o=[];if(!i){o=e.split(".");e=o.shift();k=new RegExp("(^|\\.)"+c.map(o.slice(0).sort(),db).join("\\.(?:.*\\.)?")+"(\\.|$)")}if(r=C[e])if(d){n=c.event.special[e]||{};for(B=f||0;B<r.length;B++){u=r[B];if(d.guid===u.guid){if(i||k.test(u.namespace)){f==null&&r.splice(B--,1);n.remove&&n.remove.call(a,u)}if(f!=
null)break}}if(r.length===0||f!=null&&r.length===1){if(!n.teardown||n.teardown.call(a,o)===false)Ca(a,e,z.handle);delete C[e]}}else for(var B=0;B<r.length;B++){u=r[B];if(i||k.test(u.namespace)){c.event.remove(a,n,u.handler,B);r.splice(B--,1)}}}if(c.isEmptyObject(C)){if(b=z.handle)b.elem=null;delete z.events;delete z.handle;c.isEmptyObject(z)&&c.removeData(a)}}}}},trigger:function(a,b,d,f){var e=a.type||a;if(!f){a=typeof a==="object"?a[G]?a:c.extend(c.Event(e),a):c.Event(e);if(e.indexOf("!")>=0){a.type=
e=e.slice(0,-1);a.exclusive=true}if(!d){a.stopPropagation();c.event.global[e]&&c.each(c.cache,function(){this.events&&this.events[e]&&c.event.trigger(a,b,this.handle.elem)})}if(!d||d.nodeType===3||d.nodeType===8)return w;a.result=w;a.target=d;b=c.makeArray(b);b.unshift(a)}a.currentTarget=d;(f=c.data(d,"handle"))&&f.apply(d,b);f=d.parentNode||d.ownerDocument;try{if(!(d&&d.nodeName&&c.noData[d.nodeName.toLowerCase()]))if(d["on"+e]&&d["on"+e].apply(d,b)===false)a.result=false}catch(j){}if(!a.isPropagationStopped()&&
f)c.event.trigger(a,b,f,true);else if(!a.isDefaultPrevented()){f=a.target;var i,o=c.nodeName(f,"a")&&e==="click",k=c.event.special[e]||{};if((!k._default||k._default.call(d,a)===false)&&!o&&!(f&&f.nodeName&&c.noData[f.nodeName.toLowerCase()])){try{if(f[e]){if(i=f["on"+e])f["on"+e]=null;c.event.triggered=true;f[e]()}}catch(n){}if(i)f["on"+e]=i;c.event.triggered=false}}},handle:function(a){var b,d,f,e;a=arguments[0]=c.event.fix(a||A.event);a.currentTarget=this;b=a.type.indexOf(".")<0&&!a.exclusive;
if(!b){d=a.type.split(".");a.type=d.shift();f=new RegExp("(^|\\.)"+d.slice(0).sort().join("\\.(?:.*\\.)?")+"(\\.|$)")}e=c.data(this,"events");d=e[a.type];if(e&&d){d=d.slice(0);e=0;for(var j=d.length;e<j;e++){var i=d[e];if(b||f.test(i.namespace)){a.handler=i.handler;a.data=i.data;a.handleObj=i;i=i.handler.apply(this,arguments);if(i!==w){a.result=i;if(i===false){a.preventDefault();a.stopPropagation()}}if(a.isImmediatePropagationStopped())break}}}return a.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
fix:function(a){if(a[G])return a;var b=a;a=c.Event(b);for(var d=this.props.length,f;d;){f=this.props[--d];a[f]=b[f]}if(!a.target)a.target=a.srcElement||s;if(a.target.nodeType===3)a.target=a.target.parentNode;if(!a.relatedTarget&&a.fromElement)a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;if(a.pageX==null&&a.clientX!=null){b=s.documentElement;d=s.body;a.pageX=a.clientX+(b&&b.scrollLeft||d&&d.scrollLeft||0)-(b&&b.clientLeft||d&&d.clientLeft||0);a.pageY=a.clientY+(b&&b.scrollTop||
d&&d.scrollTop||0)-(b&&b.clientTop||d&&d.clientTop||0)}if(!a.which&&(a.charCode||a.charCode===0?a.charCode:a.keyCode))a.which=a.charCode||a.keyCode;if(!a.metaKey&&a.ctrlKey)a.metaKey=a.ctrlKey;if(!a.which&&a.button!==w)a.which=a.button&1?1:a.button&2?3:a.button&4?2:0;return a},guid:1E8,proxy:c.proxy,special:{ready:{setup:c.bindReady,teardown:c.noop},live:{add:function(a){c.event.add(this,a.origType,c.extend({},a,{handler:oa}))},remove:function(a){var b=true,d=a.origType.replace(O,"");c.each(c.data(this,
"events").live||[],function(){if(d===this.origType.replace(O,""))return b=false});b&&c.event.remove(this,a.origType,oa)}},beforeunload:{setup:function(a,b,d){if(this.setInterval)this.onbeforeunload=d;return false},teardown:function(a,b){if(this.onbeforeunload===b)this.onbeforeunload=null}}}};var Ca=s.removeEventListener?function(a,b,d){a.removeEventListener(b,d,false)}:function(a,b,d){a.detachEvent("on"+b,d)};c.Event=function(a){if(!this.preventDefault)return new c.Event(a);if(a&&a.type){this.originalEvent=
a;this.type=a.type}else this.type=a;this.timeStamp=J();this[G]=true};c.Event.prototype={preventDefault:function(){this.isDefaultPrevented=Z;var a=this.originalEvent;if(a){a.preventDefault&&a.preventDefault();a.returnValue=false}},stopPropagation:function(){this.isPropagationStopped=Z;var a=this.originalEvent;if(a){a.stopPropagation&&a.stopPropagation();a.cancelBubble=true}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z;this.stopPropagation()},isDefaultPrevented:Y,isPropagationStopped:Y,
isImmediatePropagationStopped:Y};var Da=function(a){var b=a.relatedTarget;try{for(;b&&b!==this;)b=b.parentNode;if(b!==this){a.type=a.data;c.event.handle.apply(this,arguments)}}catch(d){}},Ea=function(a){a.type=a.data;c.event.handle.apply(this,arguments)};c.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){c.event.special[a]={setup:function(d){c.event.add(this,b,d&&d.selector?Ea:Da,a)},teardown:function(d){c.event.remove(this,b,d&&d.selector?Ea:Da)}}});if(!c.support.submitBubbles)c.event.special.submit=
{setup:function(){if(this.nodeName.toLowerCase()!=="form"){c.event.add(this,"click.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="submit"||d==="image")&&c(b).closest("form").length)return na("submit",this,arguments)});c.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="text"||d==="password")&&c(b).closest("form").length&&a.keyCode===13)return na("submit",this,arguments)})}else return false},teardown:function(){c.event.remove(this,".specialSubmit")}};
if(!c.support.changeBubbles){var da=/textarea|input|select/i,ea,Fa=function(a){var b=a.type,d=a.value;if(b==="radio"||b==="checkbox")d=a.checked;else if(b==="select-multiple")d=a.selectedIndex>-1?c.map(a.options,function(f){return f.selected}).join("-"):"";else if(a.nodeName.toLowerCase()==="select")d=a.selectedIndex;return d},fa=function(a,b){var d=a.target,f,e;if(!(!da.test(d.nodeName)||d.readOnly)){f=c.data(d,"_change_data");e=Fa(d);if(a.type!=="focusout"||d.type!=="radio")c.data(d,"_change_data",
e);if(!(f===w||e===f))if(f!=null||e){a.type="change";return c.event.trigger(a,b,d)}}};c.event.special.change={filters:{focusout:fa,click:function(a){var b=a.target,d=b.type;if(d==="radio"||d==="checkbox"||b.nodeName.toLowerCase()==="select")return fa.call(this,a)},keydown:function(a){var b=a.target,d=b.type;if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(d==="checkbox"||d==="radio")||d==="select-multiple")return fa.call(this,a)},beforeactivate:function(a){a=a.target;c.data(a,
"_change_data",Fa(a))}},setup:function(){if(this.type==="file")return false;for(var a in ea)c.event.add(this,a+".specialChange",ea[a]);return da.test(this.nodeName)},teardown:function(){c.event.remove(this,".specialChange");return da.test(this.nodeName)}};ea=c.event.special.change.filters}s.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(f){f=c.event.fix(f);f.type=b;return c.event.handle.call(this,f)}c.event.special[b]={setup:function(){this.addEventListener(a,
d,true)},teardown:function(){this.removeEventListener(a,d,true)}}});c.each(["bind","one"],function(a,b){c.fn[b]=function(d,f,e){if(typeof d==="object"){for(var j in d)this[b](j,f,d[j],e);return this}if(c.isFunction(f)){e=f;f=w}var i=b==="one"?c.proxy(e,function(k){c(this).unbind(k,i);return e.apply(this,arguments)}):e;if(d==="unload"&&b!=="one")this.one(d,f,e);else{j=0;for(var o=this.length;j<o;j++)c.event.add(this[j],d,i,f)}return this}});c.fn.extend({unbind:function(a,b){if(typeof a==="object"&&
!a.preventDefault)for(var d in a)this.unbind(d,a[d]);else{d=0;for(var f=this.length;d<f;d++)c.event.remove(this[d],a,b)}return this},delegate:function(a,b,d,f){return this.live(b,d,f,a)},undelegate:function(a,b,d){return arguments.length===0?this.unbind("live"):this.die(b,null,d,a)},trigger:function(a,b){return this.each(function(){c.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){a=c.Event(a);a.preventDefault();a.stopPropagation();c.event.trigger(a,b,this[0]);return a.result}},
toggle:function(a){for(var b=arguments,d=1;d<b.length;)c.proxy(a,b[d++]);return this.click(c.proxy(a,function(f){var e=(c.data(this,"lastToggle"+a.guid)||0)%d;c.data(this,"lastToggle"+a.guid,e+1);f.preventDefault();return b[e].apply(this,arguments)||false}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Ga={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};c.each(["live","die"],function(a,b){c.fn[b]=function(d,f,e,j){var i,o=0,k,n,r=j||this.selector,
u=j?this:c(this.context);if(c.isFunction(f)){e=f;f=w}for(d=(d||"").split(" ");(i=d[o++])!=null;){j=O.exec(i);k="";if(j){k=j[0];i=i.replace(O,"")}if(i==="hover")d.push("mouseenter"+k,"mouseleave"+k);else{n=i;if(i==="focus"||i==="blur"){d.push(Ga[i]+k);i+=k}else i=(Ga[i]||i)+k;b==="live"?u.each(function(){c.event.add(this,pa(i,r),{data:f,selector:r,handler:e,origType:i,origHandler:e,preType:n})}):u.unbind(pa(i,r),e)}}return this}});c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),
function(a,b){c.fn[b]=function(d){return d?this.bind(b,d):this.trigger(b)};if(c.attrFn)c.attrFn[b]=true});A.attachEvent&&!A.addEventListener&&A.attachEvent("onunload",function(){for(var a in c.cache)if(c.cache[a].handle)try{c.event.remove(c.cache[a].handle.elem)}catch(b){}});(function(){function a(g){for(var h="",l,m=0;g[m];m++){l=g[m];if(l.nodeType===3||l.nodeType===4)h+=l.nodeValue;else if(l.nodeType!==8)h+=a(l.childNodes)}return h}function b(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];
if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1&&!p){t.sizcache=l;t.sizset=q}if(t.nodeName.toLowerCase()===h){y=t;break}t=t[g]}m[q]=y}}}function d(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1){if(!p){t.sizcache=l;t.sizset=q}if(typeof h!=="string"){if(t===h){y=true;break}}else if(k.filter(h,[t]).length>0){y=t;break}}t=t[g]}m[q]=y}}}var f=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
e=0,j=Object.prototype.toString,i=false,o=true;[0,0].sort(function(){o=false;return 0});var k=function(g,h,l,m){l=l||[];var q=h=h||s;if(h.nodeType!==1&&h.nodeType!==9)return[];if(!g||typeof g!=="string")return l;for(var p=[],v,t,y,S,H=true,M=x(h),I=g;(f.exec(""),v=f.exec(I))!==null;){I=v[3];p.push(v[1]);if(v[2]){S=v[3];break}}if(p.length>1&&r.exec(g))if(p.length===2&&n.relative[p[0]])t=ga(p[0]+p[1],h);else for(t=n.relative[p[0]]?[h]:k(p.shift(),h);p.length;){g=p.shift();if(n.relative[g])g+=p.shift();
t=ga(g,t)}else{if(!m&&p.length>1&&h.nodeType===9&&!M&&n.match.ID.test(p[0])&&!n.match.ID.test(p[p.length-1])){v=k.find(p.shift(),h,M);h=v.expr?k.filter(v.expr,v.set)[0]:v.set[0]}if(h){v=m?{expr:p.pop(),set:z(m)}:k.find(p.pop(),p.length===1&&(p[0]==="~"||p[0]==="+")&&h.parentNode?h.parentNode:h,M);t=v.expr?k.filter(v.expr,v.set):v.set;if(p.length>0)y=z(t);else H=false;for(;p.length;){var D=p.pop();v=D;if(n.relative[D])v=p.pop();else D="";if(v==null)v=h;n.relative[D](y,v,M)}}else y=[]}y||(y=t);y||k.error(D||
g);if(j.call(y)==="[object Array]")if(H)if(h&&h.nodeType===1)for(g=0;y[g]!=null;g++){if(y[g]&&(y[g]===true||y[g].nodeType===1&&E(h,y[g])))l.push(t[g])}else for(g=0;y[g]!=null;g++)y[g]&&y[g].nodeType===1&&l.push(t[g]);else l.push.apply(l,y);else z(y,l);if(S){k(S,q,l,m);k.uniqueSort(l)}return l};k.uniqueSort=function(g){if(B){i=o;g.sort(B);if(i)for(var h=1;h<g.length;h++)g[h]===g[h-1]&&g.splice(h--,1)}return g};k.matches=function(g,h){return k(g,null,null,h)};k.find=function(g,h,l){var m,q;if(!g)return[];
for(var p=0,v=n.order.length;p<v;p++){var t=n.order[p];if(q=n.leftMatch[t].exec(g)){var y=q[1];q.splice(1,1);if(y.substr(y.length-1)!=="\\"){q[1]=(q[1]||"").replace(/\\/g,"");m=n.find[t](q,h,l);if(m!=null){g=g.replace(n.match[t],"");break}}}}m||(m=h.getElementsByTagName("*"));return{set:m,expr:g}};k.filter=function(g,h,l,m){for(var q=g,p=[],v=h,t,y,S=h&&h[0]&&x(h[0]);g&&h.length;){for(var H in n.filter)if((t=n.leftMatch[H].exec(g))!=null&&t[2]){var M=n.filter[H],I,D;D=t[1];y=false;t.splice(1,1);if(D.substr(D.length-
1)!=="\\"){if(v===p)p=[];if(n.preFilter[H])if(t=n.preFilter[H](t,v,l,p,m,S)){if(t===true)continue}else y=I=true;if(t)for(var U=0;(D=v[U])!=null;U++)if(D){I=M(D,t,U,v);var Ha=m^!!I;if(l&&I!=null)if(Ha)y=true;else v[U]=false;else if(Ha){p.push(D);y=true}}if(I!==w){l||(v=p);g=g.replace(n.match[H],"");if(!y)return[];break}}}if(g===q)if(y==null)k.error(g);else break;q=g}return v};k.error=function(g){throw"Syntax error, unrecognized expression: "+g;};var n=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(g){return g.getAttribute("href")}},
relative:{"+":function(g,h){var l=typeof h==="string",m=l&&!/\W/.test(h);l=l&&!m;if(m)h=h.toLowerCase();m=0;for(var q=g.length,p;m<q;m++)if(p=g[m]){for(;(p=p.previousSibling)&&p.nodeType!==1;);g[m]=l||p&&p.nodeName.toLowerCase()===h?p||false:p===h}l&&k.filter(h,g,true)},">":function(g,h){var l=typeof h==="string";if(l&&!/\W/.test(h)){h=h.toLowerCase();for(var m=0,q=g.length;m<q;m++){var p=g[m];if(p){l=p.parentNode;g[m]=l.nodeName.toLowerCase()===h?l:false}}}else{m=0;for(q=g.length;m<q;m++)if(p=g[m])g[m]=
l?p.parentNode:p.parentNode===h;l&&k.filter(h,g,true)}},"":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("parentNode",h,m,g,p,l)},"~":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("previousSibling",h,m,g,p,l)}},find:{ID:function(g,h,l){if(typeof h.getElementById!=="undefined"&&!l)return(g=h.getElementById(g[1]))?[g]:[]},NAME:function(g,h){if(typeof h.getElementsByName!=="undefined"){var l=[];
h=h.getElementsByName(g[1]);for(var m=0,q=h.length;m<q;m++)h[m].getAttribute("name")===g[1]&&l.push(h[m]);return l.length===0?null:l}},TAG:function(g,h){return h.getElementsByTagName(g[1])}},preFilter:{CLASS:function(g,h,l,m,q,p){g=" "+g[1].replace(/\\/g,"")+" ";if(p)return g;p=0;for(var v;(v=h[p])!=null;p++)if(v)if(q^(v.className&&(" "+v.className+" ").replace(/[\t\n]/g," ").indexOf(g)>=0))l||m.push(v);else if(l)h[p]=false;return false},ID:function(g){return g[1].replace(/\\/g,"")},TAG:function(g){return g[1].toLowerCase()},
CHILD:function(g){if(g[1]==="nth"){var h=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2]==="even"&&"2n"||g[2]==="odd"&&"2n+1"||!/\D/.test(g[2])&&"0n+"+g[2]||g[2]);g[2]=h[1]+(h[2]||1)-0;g[3]=h[3]-0}g[0]=e++;return g},ATTR:function(g,h,l,m,q,p){h=g[1].replace(/\\/g,"");if(!p&&n.attrMap[h])g[1]=n.attrMap[h];if(g[2]==="~=")g[4]=" "+g[4]+" ";return g},PSEUDO:function(g,h,l,m,q){if(g[1]==="not")if((f.exec(g[3])||"").length>1||/^\w/.test(g[3]))g[3]=k(g[3],null,null,h);else{g=k.filter(g[3],h,l,true^q);l||m.push.apply(m,
g);return false}else if(n.match.POS.test(g[0])||n.match.CHILD.test(g[0]))return true;return g},POS:function(g){g.unshift(true);return g}},filters:{enabled:function(g){return g.disabled===false&&g.type!=="hidden"},disabled:function(g){return g.disabled===true},checked:function(g){return g.checked===true},selected:function(g){return g.selected===true},parent:function(g){return!!g.firstChild},empty:function(g){return!g.firstChild},has:function(g,h,l){return!!k(l[3],g).length},header:function(g){return/h\d/i.test(g.nodeName)},
text:function(g){return"text"===g.type},radio:function(g){return"radio"===g.type},checkbox:function(g){return"checkbox"===g.type},file:function(g){return"file"===g.type},password:function(g){return"password"===g.type},submit:function(g){return"submit"===g.type},image:function(g){return"image"===g.type},reset:function(g){return"reset"===g.type},button:function(g){return"button"===g.type||g.nodeName.toLowerCase()==="button"},input:function(g){return/input|select|textarea|button/i.test(g.nodeName)}},
setFilters:{first:function(g,h){return h===0},last:function(g,h,l,m){return h===m.length-1},even:function(g,h){return h%2===0},odd:function(g,h){return h%2===1},lt:function(g,h,l){return h<l[3]-0},gt:function(g,h,l){return h>l[3]-0},nth:function(g,h,l){return l[3]-0===h},eq:function(g,h,l){return l[3]-0===h}},filter:{PSEUDO:function(g,h,l,m){var q=h[1],p=n.filters[q];if(p)return p(g,l,h,m);else if(q==="contains")return(g.textContent||g.innerText||a([g])||"").indexOf(h[3])>=0;else if(q==="not"){h=
h[3];l=0;for(m=h.length;l<m;l++)if(h[l]===g)return false;return true}else k.error("Syntax error, unrecognized expression: "+q)},CHILD:function(g,h){var l=h[1],m=g;switch(l){case "only":case "first":for(;m=m.previousSibling;)if(m.nodeType===1)return false;if(l==="first")return true;m=g;case "last":for(;m=m.nextSibling;)if(m.nodeType===1)return false;return true;case "nth":l=h[2];var q=h[3];if(l===1&&q===0)return true;h=h[0];var p=g.parentNode;if(p&&(p.sizcache!==h||!g.nodeIndex)){var v=0;for(m=p.firstChild;m;m=
m.nextSibling)if(m.nodeType===1)m.nodeIndex=++v;p.sizcache=h}g=g.nodeIndex-q;return l===0?g===0:g%l===0&&g/l>=0}},ID:function(g,h){return g.nodeType===1&&g.getAttribute("id")===h},TAG:function(g,h){return h==="*"&&g.nodeType===1||g.nodeName.toLowerCase()===h},CLASS:function(g,h){return(" "+(g.className||g.getAttribute("class"))+" ").indexOf(h)>-1},ATTR:function(g,h){var l=h[1];g=n.attrHandle[l]?n.attrHandle[l](g):g[l]!=null?g[l]:g.getAttribute(l);l=g+"";var m=h[2];h=h[4];return g==null?m==="!=":m===
"="?l===h:m==="*="?l.indexOf(h)>=0:m==="~="?(" "+l+" ").indexOf(h)>=0:!h?l&&g!==false:m==="!="?l!==h:m==="^="?l.indexOf(h)===0:m==="$="?l.substr(l.length-h.length)===h:m==="|="?l===h||l.substr(0,h.length+1)===h+"-":false},POS:function(g,h,l,m){var q=n.setFilters[h[2]];if(q)return q(g,l,h,m)}}},r=n.match.POS;for(var u in n.match){n.match[u]=new RegExp(n.match[u].source+/(?![^\[]*\])(?![^\(]*\))/.source);n.leftMatch[u]=new RegExp(/(^(?:.|\r|\n)*?)/.source+n.match[u].source.replace(/\\(\d+)/g,function(g,
h){return"\\"+(h-0+1)}))}var z=function(g,h){g=Array.prototype.slice.call(g,0);if(h){h.push.apply(h,g);return h}return g};try{Array.prototype.slice.call(s.documentElement.childNodes,0)}catch(C){z=function(g,h){h=h||[];if(j.call(g)==="[object Array]")Array.prototype.push.apply(h,g);else if(typeof g.length==="number")for(var l=0,m=g.length;l<m;l++)h.push(g[l]);else for(l=0;g[l];l++)h.push(g[l]);return h}}var B;if(s.documentElement.compareDocumentPosition)B=function(g,h){if(!g.compareDocumentPosition||
!h.compareDocumentPosition){if(g==h)i=true;return g.compareDocumentPosition?-1:1}g=g.compareDocumentPosition(h)&4?-1:g===h?0:1;if(g===0)i=true;return g};else if("sourceIndex"in s.documentElement)B=function(g,h){if(!g.sourceIndex||!h.sourceIndex){if(g==h)i=true;return g.sourceIndex?-1:1}g=g.sourceIndex-h.sourceIndex;if(g===0)i=true;return g};else if(s.createRange)B=function(g,h){if(!g.ownerDocument||!h.ownerDocument){if(g==h)i=true;return g.ownerDocument?-1:1}var l=g.ownerDocument.createRange(),m=
h.ownerDocument.createRange();l.setStart(g,0);l.setEnd(g,0);m.setStart(h,0);m.setEnd(h,0);g=l.compareBoundaryPoints(Range.START_TO_END,m);if(g===0)i=true;return g};(function(){var g=s.createElement("div"),h="script"+(new Date).getTime();g.innerHTML="<a name='"+h+"'/>";var l=s.documentElement;l.insertBefore(g,l.firstChild);if(s.getElementById(h)){n.find.ID=function(m,q,p){if(typeof q.getElementById!=="undefined"&&!p)return(q=q.getElementById(m[1]))?q.id===m[1]||typeof q.getAttributeNode!=="undefined"&&
q.getAttributeNode("id").nodeValue===m[1]?[q]:w:[]};n.filter.ID=function(m,q){var p=typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id");return m.nodeType===1&&p&&p.nodeValue===q}}l.removeChild(g);l=g=null})();(function(){var g=s.createElement("div");g.appendChild(s.createComment(""));if(g.getElementsByTagName("*").length>0)n.find.TAG=function(h,l){l=l.getElementsByTagName(h[1]);if(h[1]==="*"){h=[];for(var m=0;l[m];m++)l[m].nodeType===1&&h.push(l[m]);l=h}return l};g.innerHTML="<a href='#'></a>";
if(g.firstChild&&typeof g.firstChild.getAttribute!=="undefined"&&g.firstChild.getAttribute("href")!=="#")n.attrHandle.href=function(h){return h.getAttribute("href",2)};g=null})();s.querySelectorAll&&function(){var g=k,h=s.createElement("div");h.innerHTML="<p class='TEST'></p>";if(!(h.querySelectorAll&&h.querySelectorAll(".TEST").length===0)){k=function(m,q,p,v){q=q||s;if(!v&&q.nodeType===9&&!x(q))try{return z(q.querySelectorAll(m),p)}catch(t){}return g(m,q,p,v)};for(var l in g)k[l]=g[l];h=null}}();
(function(){var g=s.createElement("div");g.innerHTML="<div class='test e'></div><div class='test'></div>";if(!(!g.getElementsByClassName||g.getElementsByClassName("e").length===0)){g.lastChild.className="e";if(g.getElementsByClassName("e").length!==1){n.order.splice(1,0,"CLASS");n.find.CLASS=function(h,l,m){if(typeof l.getElementsByClassName!=="undefined"&&!m)return l.getElementsByClassName(h[1])};g=null}}})();var E=s.compareDocumentPosition?function(g,h){return!!(g.compareDocumentPosition(h)&16)}:
function(g,h){return g!==h&&(g.contains?g.contains(h):true)},x=function(g){return(g=(g?g.ownerDocument||g:0).documentElement)?g.nodeName!=="HTML":false},ga=function(g,h){var l=[],m="",q;for(h=h.nodeType?[h]:h;q=n.match.PSEUDO.exec(g);){m+=q[0];g=g.replace(n.match.PSEUDO,"")}g=n.relative[g]?g+"*":g;q=0;for(var p=h.length;q<p;q++)k(g,h[q],l);return k.filter(m,l)};c.find=k;c.expr=k.selectors;c.expr[":"]=c.expr.filters;c.unique=k.uniqueSort;c.text=a;c.isXMLDoc=x;c.contains=E})();var eb=/Until$/,fb=/^(?:parents|prevUntil|prevAll)/,
gb=/,/;R=Array.prototype.slice;var Ia=function(a,b,d){if(c.isFunction(b))return c.grep(a,function(e,j){return!!b.call(e,j,e)===d});else if(b.nodeType)return c.grep(a,function(e){return e===b===d});else if(typeof b==="string"){var f=c.grep(a,function(e){return e.nodeType===1});if(Ua.test(b))return c.filter(b,f,!d);else b=c.filter(b,f)}return c.grep(a,function(e){return c.inArray(e,b)>=0===d})};c.fn.extend({find:function(a){for(var b=this.pushStack("","find",a),d=0,f=0,e=this.length;f<e;f++){d=b.length;
c.find(a,this[f],b);if(f>0)for(var j=d;j<b.length;j++)for(var i=0;i<d;i++)if(b[i]===b[j]){b.splice(j--,1);break}}return b},has:function(a){var b=c(a);return this.filter(function(){for(var d=0,f=b.length;d<f;d++)if(c.contains(this,b[d]))return true})},not:function(a){return this.pushStack(Ia(this,a,false),"not",a)},filter:function(a){return this.pushStack(Ia(this,a,true),"filter",a)},is:function(a){return!!a&&c.filter(a,this).length>0},closest:function(a,b){if(c.isArray(a)){var d=[],f=this[0],e,j=
{},i;if(f&&a.length){e=0;for(var o=a.length;e<o;e++){i=a[e];j[i]||(j[i]=c.expr.match.POS.test(i)?c(i,b||this.context):i)}for(;f&&f.ownerDocument&&f!==b;){for(i in j){e=j[i];if(e.jquery?e.index(f)>-1:c(f).is(e)){d.push({selector:i,elem:f});delete j[i]}}f=f.parentNode}}return d}var k=c.expr.match.POS.test(a)?c(a,b||this.context):null;return this.map(function(n,r){for(;r&&r.ownerDocument&&r!==b;){if(k?k.index(r)>-1:c(r).is(a))return r;r=r.parentNode}return null})},index:function(a){if(!a||typeof a===
"string")return c.inArray(this[0],a?c(a):this.parent().children());return c.inArray(a.jquery?a[0]:a,this)},add:function(a,b){a=typeof a==="string"?c(a,b||this.context):c.makeArray(a);b=c.merge(this.get(),a);return this.pushStack(qa(a[0])||qa(b[0])?b:c.unique(b))},andSelf:function(){return this.add(this.prevObject)}});c.each({parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},parents:function(a){return c.dir(a,"parentNode")},parentsUntil:function(a,b,d){return c.dir(a,"parentNode",
d)},next:function(a){return c.nth(a,2,"nextSibling")},prev:function(a){return c.nth(a,2,"previousSibling")},nextAll:function(a){return c.dir(a,"nextSibling")},prevAll:function(a){return c.dir(a,"previousSibling")},nextUntil:function(a,b,d){return c.dir(a,"nextSibling",d)},prevUntil:function(a,b,d){return c.dir(a,"previousSibling",d)},siblings:function(a){return c.sibling(a.parentNode.firstChild,a)},children:function(a){return c.sibling(a.firstChild)},contents:function(a){return c.nodeName(a,"iframe")?
a.contentDocument||a.contentWindow.document:c.makeArray(a.childNodes)}},function(a,b){c.fn[a]=function(d,f){var e=c.map(this,b,d);eb.test(a)||(f=d);if(f&&typeof f==="string")e=c.filter(f,e);e=this.length>1?c.unique(e):e;if((this.length>1||gb.test(f))&&fb.test(a))e=e.reverse();return this.pushStack(e,a,R.call(arguments).join(","))}});c.extend({filter:function(a,b,d){if(d)a=":not("+a+")";return c.find.matches(a,b)},dir:function(a,b,d){var f=[];for(a=a[b];a&&a.nodeType!==9&&(d===w||a.nodeType!==1||!c(a).is(d));){a.nodeType===
1&&f.push(a);a=a[b]}return f},nth:function(a,b,d){b=b||1;for(var f=0;a;a=a[d])if(a.nodeType===1&&++f===b)break;return a},sibling:function(a,b){for(var d=[];a;a=a.nextSibling)a.nodeType===1&&a!==b&&d.push(a);return d}});var Ja=/ jQuery\d+="(?:\d+|null)"/g,V=/^\s+/,Ka=/(<([\w:]+)[^>]*?)\/>/g,hb=/^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,La=/<([\w:]+)/,ib=/<tbody/i,jb=/<|&#?\w+;/,ta=/<script|<object|<embed|<option|<style/i,ua=/checked\s*(?:[^=]|=\s*.checked.)/i,Ma=function(a,b,d){return hb.test(d)?
a:b+"></"+d+">"},F={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};F.optgroup=F.option;F.tbody=F.tfoot=F.colgroup=F.caption=F.thead;F.th=F.td;if(!c.support.htmlSerialize)F._default=[1,"div<div>","</div>"];c.fn.extend({text:function(a){if(c.isFunction(a))return this.each(function(b){var d=
c(this);d.text(a.call(this,b,d.text()))});if(typeof a!=="object"&&a!==w)return this.empty().append((this[0]&&this[0].ownerDocument||s).createTextNode(a));return c.text(this)},wrapAll:function(a){if(c.isFunction(a))return this.each(function(d){c(this).wrapAll(a.call(this,d))});if(this[0]){var b=c(a,this[0].ownerDocument).eq(0).clone(true);this[0].parentNode&&b.insertBefore(this[0]);b.map(function(){for(var d=this;d.firstChild&&d.firstChild.nodeType===1;)d=d.firstChild;return d}).append(this)}return this},
wrapInner:function(a){if(c.isFunction(a))return this.each(function(b){c(this).wrapInner(a.call(this,b))});return this.each(function(){var b=c(this),d=b.contents();d.length?d.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){c(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){c.nodeName(this,"body")||c(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.appendChild(a)})},
prepend:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,this)});else if(arguments.length){var a=c(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,
this.nextSibling)});else if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,c(arguments[0]).toArray());return a}},remove:function(a,b){for(var d=0,f;(f=this[d])!=null;d++)if(!a||c.filter(a,[f]).length){if(!b&&f.nodeType===1){c.cleanData(f.getElementsByTagName("*"));c.cleanData([f])}f.parentNode&&f.parentNode.removeChild(f)}return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++)for(b.nodeType===1&&c.cleanData(b.getElementsByTagName("*"));b.firstChild;)b.removeChild(b.firstChild);
return this},clone:function(a){var b=this.map(function(){if(!c.support.noCloneEvent&&!c.isXMLDoc(this)){var d=this.outerHTML,f=this.ownerDocument;if(!d){d=f.createElement("div");d.appendChild(this.cloneNode(true));d=d.innerHTML}return c.clean([d.replace(Ja,"").replace(/=([^="'>\s]+\/)>/g,'="$1">').replace(V,"")],f)[0]}else return this.cloneNode(true)});if(a===true){ra(this,b);ra(this.find("*"),b.find("*"))}return b},html:function(a){if(a===w)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Ja,
""):null;else if(typeof a==="string"&&!ta.test(a)&&(c.support.leadingWhitespace||!V.test(a))&&!F[(La.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Ka,Ma);try{for(var b=0,d=this.length;b<d;b++)if(this[b].nodeType===1){c.cleanData(this[b].getElementsByTagName("*"));this[b].innerHTML=a}}catch(f){this.empty().append(a)}}else c.isFunction(a)?this.each(function(e){var j=c(this),i=j.html();j.empty().append(function(){return a.call(this,e,i)})}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&
this[0].parentNode){if(c.isFunction(a))return this.each(function(b){var d=c(this),f=d.html();d.replaceWith(a.call(this,b,f))});if(typeof a!=="string")a=c(a).detach();return this.each(function(){var b=this.nextSibling,d=this.parentNode;c(this).remove();b?c(b).before(a):c(d).append(a)})}else return this.pushStack(c(c.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,true)},domManip:function(a,b,d){function f(u){return c.nodeName(u,"table")?u.getElementsByTagName("tbody")[0]||
u.appendChild(u.ownerDocument.createElement("tbody")):u}var e,j,i=a[0],o=[],k;if(!c.support.checkClone&&arguments.length===3&&typeof i==="string"&&ua.test(i))return this.each(function(){c(this).domManip(a,b,d,true)});if(c.isFunction(i))return this.each(function(u){var z=c(this);a[0]=i.call(this,u,b?z.html():w);z.domManip(a,b,d)});if(this[0]){e=i&&i.parentNode;e=c.support.parentNode&&e&&e.nodeType===11&&e.childNodes.length===this.length?{fragment:e}:sa(a,this,o);k=e.fragment;if(j=k.childNodes.length===
1?(k=k.firstChild):k.firstChild){b=b&&c.nodeName(j,"tr");for(var n=0,r=this.length;n<r;n++)d.call(b?f(this[n],j):this[n],n>0||e.cacheable||this.length>1?k.cloneNode(true):k)}o.length&&c.each(o,Qa)}return this}});c.fragments={};c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){c.fn[a]=function(d){var f=[];d=c(d);var e=this.length===1&&this[0].parentNode;if(e&&e.nodeType===11&&e.childNodes.length===1&&d.length===1){d[b](this[0]);
return this}else{e=0;for(var j=d.length;e<j;e++){var i=(e>0?this.clone(true):this).get();c.fn[b].apply(c(d[e]),i);f=f.concat(i)}return this.pushStack(f,a,d.selector)}}});c.extend({clean:function(a,b,d,f){b=b||s;if(typeof b.createElement==="undefined")b=b.ownerDocument||b[0]&&b[0].ownerDocument||s;for(var e=[],j=0,i;(i=a[j])!=null;j++){if(typeof i==="number")i+="";if(i){if(typeof i==="string"&&!jb.test(i))i=b.createTextNode(i);else if(typeof i==="string"){i=i.replace(Ka,Ma);var o=(La.exec(i)||["",
""])[1].toLowerCase(),k=F[o]||F._default,n=k[0],r=b.createElement("div");for(r.innerHTML=k[1]+i+k[2];n--;)r=r.lastChild;if(!c.support.tbody){n=ib.test(i);o=o==="table"&&!n?r.firstChild&&r.firstChild.childNodes:k[1]==="<table>"&&!n?r.childNodes:[];for(k=o.length-1;k>=0;--k)c.nodeName(o[k],"tbody")&&!o[k].childNodes.length&&o[k].parentNode.removeChild(o[k])}!c.support.leadingWhitespace&&V.test(i)&&r.insertBefore(b.createTextNode(V.exec(i)[0]),r.firstChild);i=r.childNodes}if(i.nodeType)e.push(i);else e=
c.merge(e,i)}}if(d)for(j=0;e[j];j++)if(f&&c.nodeName(e[j],"script")&&(!e[j].type||e[j].type.toLowerCase()==="text/javascript"))f.push(e[j].parentNode?e[j].parentNode.removeChild(e[j]):e[j]);else{e[j].nodeType===1&&e.splice.apply(e,[j+1,0].concat(c.makeArray(e[j].getElementsByTagName("script"))));d.appendChild(e[j])}return e},cleanData:function(a){for(var b,d,f=c.cache,e=c.event.special,j=c.support.deleteExpando,i=0,o;(o=a[i])!=null;i++)if(d=o[c.expando]){b=f[d];if(b.events)for(var k in b.events)e[k]?
c.event.remove(o,k):Ca(o,k,b.handle);if(j)delete o[c.expando];else o.removeAttribute&&o.removeAttribute(c.expando);delete f[d]}}});var kb=/z-?index|font-?weight|opacity|zoom|line-?height/i,Na=/alpha\([^)]*\)/,Oa=/opacity=([^)]*)/,ha=/float/i,ia=/-([a-z])/ig,lb=/([A-Z])/g,mb=/^-?\d+(?:px)?$/i,nb=/^-?\d/,ob={position:"absolute",visibility:"hidden",display:"block"},pb=["Left","Right"],qb=["Top","Bottom"],rb=s.defaultView&&s.defaultView.getComputedStyle,Pa=c.support.cssFloat?"cssFloat":"styleFloat",ja=
function(a,b){return b.toUpperCase()};c.fn.css=function(a,b){return X(this,a,b,true,function(d,f,e){if(e===w)return c.curCSS(d,f);if(typeof e==="number"&&!kb.test(f))e+="px";c.style(d,f,e)})};c.extend({style:function(a,b,d){if(!a||a.nodeType===3||a.nodeType===8)return w;if((b==="width"||b==="height")&&parseFloat(d)<0)d=w;var f=a.style||a,e=d!==w;if(!c.support.opacity&&b==="opacity"){if(e){f.zoom=1;b=parseInt(d,10)+""==="NaN"?"":"alpha(opacity="+d*100+")";a=f.filter||c.curCSS(a,"filter")||"";f.filter=
Na.test(a)?a.replace(Na,b):b}return f.filter&&f.filter.indexOf("opacity=")>=0?parseFloat(Oa.exec(f.filter)[1])/100+"":""}if(ha.test(b))b=Pa;b=b.replace(ia,ja);if(e)f[b]=d;return f[b]},css:function(a,b,d,f){if(b==="width"||b==="height"){var e,j=b==="width"?pb:qb;function i(){e=b==="width"?a.offsetWidth:a.offsetHeight;f!=="border"&&c.each(j,function(){f||(e-=parseFloat(c.curCSS(a,"padding"+this,true))||0);if(f==="margin")e+=parseFloat(c.curCSS(a,"margin"+this,true))||0;else e-=parseFloat(c.curCSS(a,
"border"+this+"Width",true))||0})}a.offsetWidth!==0?i():c.swap(a,ob,i);return Math.max(0,Math.round(e))}return c.curCSS(a,b,d)},curCSS:function(a,b,d){var f,e=a.style;if(!c.support.opacity&&b==="opacity"&&a.currentStyle){f=Oa.test(a.currentStyle.filter||"")?parseFloat(RegExp.$1)/100+"":"";return f===""?"1":f}if(ha.test(b))b=Pa;if(!d&&e&&e[b])f=e[b];else if(rb){if(ha.test(b))b="float";b=b.replace(lb,"-$1").toLowerCase();e=a.ownerDocument.defaultView;if(!e)return null;if(a=e.getComputedStyle(a,null))f=
a.getPropertyValue(b);if(b==="opacity"&&f==="")f="1"}else if(a.currentStyle){d=b.replace(ia,ja);f=a.currentStyle[b]||a.currentStyle[d];if(!mb.test(f)&&nb.test(f)){b=e.left;var j=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;e.left=d==="fontSize"?"1em":f||0;f=e.pixelLeft+"px";e.left=b;a.runtimeStyle.left=j}}return f},swap:function(a,b,d){var f={};for(var e in b){f[e]=a.style[e];a.style[e]=b[e]}d.call(a);for(e in b)a.style[e]=f[e]}});if(c.expr&&c.expr.filters){c.expr.filters.hidden=function(a){var b=
a.offsetWidth,d=a.offsetHeight,f=a.nodeName.toLowerCase()==="tr";return b===0&&d===0&&!f?true:b>0&&d>0&&!f?false:c.curCSS(a,"display")==="none"};c.expr.filters.visible=function(a){return!c.expr.filters.hidden(a)}}var sb=J(),tb=/<script(.|\s)*?\/script>/gi,ub=/select|textarea/i,vb=/color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,N=/=\?(&|$)/,ka=/\?/,wb=/(\?|&)_=.*?(&|$)/,xb=/^(\w+:)?\/\/([^\/?#]+)/,yb=/%20/g,zb=c.fn.load;c.fn.extend({load:function(a,b,d){if(typeof a!==
"string")return zb.call(this,a);else if(!this.length)return this;var f=a.indexOf(" ");if(f>=0){var e=a.slice(f,a.length);a=a.slice(0,f)}f="GET";if(b)if(c.isFunction(b)){d=b;b=null}else if(typeof b==="object"){b=c.param(b,c.ajaxSettings.traditional);f="POST"}var j=this;c.ajax({url:a,type:f,dataType:"html",data:b,complete:function(i,o){if(o==="success"||o==="notmodified")j.html(e?c("<div />").append(i.responseText.replace(tb,"")).find(e):i.responseText);d&&j.each(d,[i.responseText,o,i])}});return this},
serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?c.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ub.test(this.nodeName)||vb.test(this.type))}).map(function(a,b){a=c(this).val();return a==null?null:c.isArray(a)?c.map(a,function(d){return{name:b.name,value:d}}):{name:b.name,value:a}}).get()}});c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
function(a,b){c.fn[b]=function(d){return this.bind(b,d)}});c.extend({get:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b=null}return c.ajax({type:"GET",url:a,data:b,success:d,dataType:f})},getScript:function(a,b){return c.get(a,null,b,"script")},getJSON:function(a,b,d){return c.get(a,b,d,"json")},post:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b={}}return c.ajax({type:"POST",url:a,data:b,success:d,dataType:f})},ajaxSetup:function(a){c.extend(c.ajaxSettings,a)},ajaxSettings:{url:location.href,
global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:A.XMLHttpRequest&&(A.location.protocol!=="file:"||!A.ActiveXObject)?function(){return new A.XMLHttpRequest}:function(){try{return new A.ActiveXObject("Microsoft.XMLHTTP")}catch(a){}},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},etag:{},ajax:function(a){function b(){e.success&&
e.success.call(k,o,i,x);e.global&&f("ajaxSuccess",[x,e])}function d(){e.complete&&e.complete.call(k,x,i);e.global&&f("ajaxComplete",[x,e]);e.global&&!--c.active&&c.event.trigger("ajaxStop")}function f(q,p){(e.context?c(e.context):c.event).trigger(q,p)}var e=c.extend(true,{},c.ajaxSettings,a),j,i,o,k=a&&a.context||e,n=e.type.toUpperCase();if(e.data&&e.processData&&typeof e.data!=="string")e.data=c.param(e.data,e.traditional);if(e.dataType==="jsonp"){if(n==="GET")N.test(e.url)||(e.url+=(ka.test(e.url)?
"&":"?")+(e.jsonp||"callback")+"=?");else if(!e.data||!N.test(e.data))e.data=(e.data?e.data+"&":"")+(e.jsonp||"callback")+"=?";e.dataType="json"}if(e.dataType==="json"&&(e.data&&N.test(e.data)||N.test(e.url))){j=e.jsonpCallback||"jsonp"+sb++;if(e.data)e.data=(e.data+"").replace(N,"="+j+"$1");e.url=e.url.replace(N,"="+j+"$1");e.dataType="script";A[j]=A[j]||function(q){o=q;b();d();A[j]=w;try{delete A[j]}catch(p){}z&&z.removeChild(C)}}if(e.dataType==="script"&&e.cache===null)e.cache=false;if(e.cache===
false&&n==="GET"){var r=J(),u=e.url.replace(wb,"$1_="+r+"$2");e.url=u+(u===e.url?(ka.test(e.url)?"&":"?")+"_="+r:"")}if(e.data&&n==="GET")e.url+=(ka.test(e.url)?"&":"?")+e.data;e.global&&!c.active++&&c.event.trigger("ajaxStart");r=(r=xb.exec(e.url))&&(r[1]&&r[1]!==location.protocol||r[2]!==location.host);if(e.dataType==="script"&&n==="GET"&&r){var z=s.getElementsByTagName("head")[0]||s.documentElement,C=s.createElement("script");C.src=e.url;if(e.scriptCharset)C.charset=e.scriptCharset;if(!j){var B=
false;C.onload=C.onreadystatechange=function(){if(!B&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){B=true;b();d();C.onload=C.onreadystatechange=null;z&&C.parentNode&&z.removeChild(C)}}}z.insertBefore(C,z.firstChild);return w}var E=false,x=e.xhr();if(x){e.username?x.open(n,e.url,e.async,e.username,e.password):x.open(n,e.url,e.async);try{if(e.data||a&&a.contentType)x.setRequestHeader("Content-Type",e.contentType);if(e.ifModified){c.lastModified[e.url]&&x.setRequestHeader("If-Modified-Since",
c.lastModified[e.url]);c.etag[e.url]&&x.setRequestHeader("If-None-Match",c.etag[e.url])}r||x.setRequestHeader("X-Requested-With","XMLHttpRequest");x.setRequestHeader("Accept",e.dataType&&e.accepts[e.dataType]?e.accepts[e.dataType]+", */*":e.accepts._default)}catch(ga){}if(e.beforeSend&&e.beforeSend.call(k,x,e)===false){e.global&&!--c.active&&c.event.trigger("ajaxStop");x.abort();return false}e.global&&f("ajaxSend",[x,e]);var g=x.onreadystatechange=function(q){if(!x||x.readyState===0||q==="abort"){E||
d();E=true;if(x)x.onreadystatechange=c.noop}else if(!E&&x&&(x.readyState===4||q==="timeout")){E=true;x.onreadystatechange=c.noop;i=q==="timeout"?"timeout":!c.httpSuccess(x)?"error":e.ifModified&&c.httpNotModified(x,e.url)?"notmodified":"success";var p;if(i==="success")try{o=c.httpData(x,e.dataType,e)}catch(v){i="parsererror";p=v}if(i==="success"||i==="notmodified")j||b();else c.handleError(e,x,i,p);d();q==="timeout"&&x.abort();if(e.async)x=null}};try{var h=x.abort;x.abort=function(){x&&h.call(x);
g("abort")}}catch(l){}e.async&&e.timeout>0&&setTimeout(function(){x&&!E&&g("timeout")},e.timeout);try{x.send(n==="POST"||n==="PUT"||n==="DELETE"?e.data:null)}catch(m){c.handleError(e,x,null,m);d()}e.async||g();return x}},handleError:function(a,b,d,f){if(a.error)a.error.call(a.context||a,b,d,f);if(a.global)(a.context?c(a.context):c.event).trigger("ajaxError",[b,a,f])},active:0,httpSuccess:function(a){try{return!a.status&&location.protocol==="file:"||a.status>=200&&a.status<300||a.status===304||a.status===
1223||a.status===0}catch(b){}return false},httpNotModified:function(a,b){var d=a.getResponseHeader("Last-Modified"),f=a.getResponseHeader("Etag");if(d)c.lastModified[b]=d;if(f)c.etag[b]=f;return a.status===304||a.status===0},httpData:function(a,b,d){var f=a.getResponseHeader("content-type")||"",e=b==="xml"||!b&&f.indexOf("xml")>=0;a=e?a.responseXML:a.responseText;e&&a.documentElement.nodeName==="parsererror"&&c.error("parsererror");if(d&&d.dataFilter)a=d.dataFilter(a,b);if(typeof a==="string")if(b===
"json"||!b&&f.indexOf("json")>=0)a=c.parseJSON(a);else if(b==="script"||!b&&f.indexOf("javascript")>=0)c.globalEval(a);return a},param:function(a,b){function d(i,o){if(c.isArray(o))c.each(o,function(k,n){b||/\[\]$/.test(i)?f(i,n):d(i+"["+(typeof n==="object"||c.isArray(n)?k:"")+"]",n)});else!b&&o!=null&&typeof o==="object"?c.each(o,function(k,n){d(i+"["+k+"]",n)}):f(i,o)}function f(i,o){o=c.isFunction(o)?o():o;e[e.length]=encodeURIComponent(i)+"="+encodeURIComponent(o)}var e=[];if(b===w)b=c.ajaxSettings.traditional;
if(c.isArray(a)||a.jquery)c.each(a,function(){f(this.name,this.value)});else for(var j in a)d(j,a[j]);return e.join("&").replace(yb,"+")}});var la={},Ab=/toggle|show|hide/,Bb=/^([+-]=)?([\d+-.]+)(.*)$/,W,va=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];c.fn.extend({show:function(a,b){if(a||a===0)return this.animate(K("show",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");
this[a].style.display=d||"";if(c.css(this[a],"display")==="none"){d=this[a].nodeName;var f;if(la[d])f=la[d];else{var e=c("<"+d+" />").appendTo("body");f=e.css("display");if(f==="none")f="block";e.remove();la[d]=f}c.data(this[a],"olddisplay",f)}}a=0;for(b=this.length;a<b;a++)this[a].style.display=c.data(this[a],"olddisplay")||"";return this}},hide:function(a,b){if(a||a===0)return this.animate(K("hide",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");!d&&d!=="none"&&c.data(this[a],
"olddisplay",c.css(this[a],"display"))}a=0;for(b=this.length;a<b;a++)this[a].style.display="none";return this}},_toggle:c.fn.toggle,toggle:function(a,b){var d=typeof a==="boolean";if(c.isFunction(a)&&c.isFunction(b))this._toggle.apply(this,arguments);else a==null||d?this.each(function(){var f=d?a:c(this).is(":hidden");c(this)[f?"show":"hide"]()}):this.animate(K("toggle",3),a,b);return this},fadeTo:function(a,b,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,d)},
animate:function(a,b,d,f){var e=c.speed(b,d,f);if(c.isEmptyObject(a))return this.each(e.complete);return this[e.queue===false?"each":"queue"](function(){var j=c.extend({},e),i,o=this.nodeType===1&&c(this).is(":hidden"),k=this;for(i in a){var n=i.replace(ia,ja);if(i!==n){a[n]=a[i];delete a[i];i=n}if(a[i]==="hide"&&o||a[i]==="show"&&!o)return j.complete.call(this);if((i==="height"||i==="width")&&this.style){j.display=c.css(this,"display");j.overflow=this.style.overflow}if(c.isArray(a[i])){(j.specialEasing=
j.specialEasing||{})[i]=a[i][1];a[i]=a[i][0]}}if(j.overflow!=null)this.style.overflow="hidden";j.curAnim=c.extend({},a);c.each(a,function(r,u){var z=new c.fx(k,j,r);if(Ab.test(u))z[u==="toggle"?o?"show":"hide":u](a);else{var C=Bb.exec(u),B=z.cur(true)||0;if(C){u=parseFloat(C[2]);var E=C[3]||"px";if(E!=="px"){k.style[r]=(u||1)+E;B=(u||1)/z.cur(true)*B;k.style[r]=B+E}if(C[1])u=(C[1]==="-="?-1:1)*u+B;z.custom(B,u,E)}else z.custom(B,u,"")}});return true})},stop:function(a,b){var d=c.timers;a&&this.queue([]);
this.each(function(){for(var f=d.length-1;f>=0;f--)if(d[f].elem===this){b&&d[f](true);d.splice(f,1)}});b||this.dequeue();return this}});c.each({slideDown:K("show",1),slideUp:K("hide",1),slideToggle:K("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(a,b){c.fn[a]=function(d,f){return this.animate(b,d,f)}});c.extend({speed:function(a,b,d){var f=a&&typeof a==="object"?a:{complete:d||!d&&b||c.isFunction(a)&&a,duration:a,easing:d&&b||b&&!c.isFunction(b)&&b};f.duration=c.fx.off?0:typeof f.duration===
"number"?f.duration:c.fx.speeds[f.duration]||c.fx.speeds._default;f.old=f.complete;f.complete=function(){f.queue!==false&&c(this).dequeue();c.isFunction(f.old)&&f.old.call(this)};return f},easing:{linear:function(a,b,d,f){return d+f*a},swing:function(a,b,d,f){return(-Math.cos(a*Math.PI)/2+0.5)*f+d}},timers:[],fx:function(a,b,d){this.options=b;this.elem=a;this.prop=d;if(!b.orig)b.orig={}}});c.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(c.fx.step[this.prop]||
c.fx.step._default)(this);if((this.prop==="height"||this.prop==="width")&&this.elem.style)this.elem.style.display="block"},cur:function(a){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];return(a=parseFloat(c.css(this.elem,this.prop,a)))&&a>-10000?a:parseFloat(c.curCSS(this.elem,this.prop))||0},custom:function(a,b,d){function f(j){return e.step(j)}this.startTime=J();this.start=a;this.end=b;this.unit=d||this.unit||"px";this.now=this.start;
this.pos=this.state=0;var e=this;f.elem=this.elem;if(f()&&c.timers.push(f)&&!W)W=setInterval(c.fx.tick,13)},show:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());c(this.elem).show()},hide:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(a){var b=J(),d=true;if(a||b>=this.options.duration+this.startTime){this.now=
this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var f in this.options.curAnim)if(this.options.curAnim[f]!==true)d=false;if(d){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;a=c.data(this.elem,"olddisplay");this.elem.style.display=a?a:this.options.display;if(c.css(this.elem,"display")==="none")this.elem.style.display="block"}this.options.hide&&c(this.elem).hide();if(this.options.hide||this.options.show)for(var e in this.options.curAnim)c.style(this.elem,
e,this.options.orig[e]);this.options.complete.call(this.elem)}return false}else{e=b-this.startTime;this.state=e/this.options.duration;a=this.options.easing||(c.easing.swing?"swing":"linear");this.pos=c.easing[this.options.specialEasing&&this.options.specialEasing[this.prop]||a](this.state,e,0,1,this.options.duration);this.now=this.start+(this.end-this.start)*this.pos;this.update()}return true}};c.extend(c.fx,{tick:function(){for(var a=c.timers,b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||
c.fx.stop()},stop:function(){clearInterval(W);W=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){c.style(a.elem,"opacity",a.now)},_default:function(a){if(a.elem.style&&a.elem.style[a.prop]!=null)a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit;else a.elem[a.prop]=a.now}}});if(c.expr&&c.expr.filters)c.expr.filters.animated=function(a){return c.grep(c.timers,function(b){return a===b.elem}).length};c.fn.offset="getBoundingClientRect"in s.documentElement?
function(a){var b=this[0];if(a)return this.each(function(e){c.offset.setOffset(this,a,e)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);var d=b.getBoundingClientRect(),f=b.ownerDocument;b=f.body;f=f.documentElement;return{top:d.top+(self.pageYOffset||c.support.boxModel&&f.scrollTop||b.scrollTop)-(f.clientTop||b.clientTop||0),left:d.left+(self.pageXOffset||c.support.boxModel&&f.scrollLeft||b.scrollLeft)-(f.clientLeft||b.clientLeft||0)}}:function(a){var b=
this[0];if(a)return this.each(function(r){c.offset.setOffset(this,a,r)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);c.offset.initialize();var d=b.offsetParent,f=b,e=b.ownerDocument,j,i=e.documentElement,o=e.body;f=(e=e.defaultView)?e.getComputedStyle(b,null):b.currentStyle;for(var k=b.offsetTop,n=b.offsetLeft;(b=b.parentNode)&&b!==o&&b!==i;){if(c.offset.supportsFixedPosition&&f.position==="fixed")break;j=e?e.getComputedStyle(b,null):b.currentStyle;
k-=b.scrollTop;n-=b.scrollLeft;if(b===d){k+=b.offsetTop;n+=b.offsetLeft;if(c.offset.doesNotAddBorder&&!(c.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(b.nodeName))){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=d;d=b.offsetParent}if(c.offset.subtractsBorderForOverflowNotVisible&&j.overflow!=="visible"){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=j}if(f.position==="relative"||f.position==="static"){k+=o.offsetTop;n+=o.offsetLeft}if(c.offset.supportsFixedPosition&&
f.position==="fixed"){k+=Math.max(i.scrollTop,o.scrollTop);n+=Math.max(i.scrollLeft,o.scrollLeft)}return{top:k,left:n}};c.offset={initialize:function(){var a=s.body,b=s.createElement("div"),d,f,e,j=parseFloat(c.curCSS(a,"marginTop",true))||0;c.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});b.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
a.insertBefore(b,a.firstChild);d=b.firstChild;f=d.firstChild;e=d.nextSibling.firstChild.firstChild;this.doesNotAddBorder=f.offsetTop!==5;this.doesAddBorderForTableAndCells=e.offsetTop===5;f.style.position="fixed";f.style.top="20px";this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15;f.style.position=f.style.top="";d.style.overflow="hidden";d.style.position="relative";this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5;this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==j;a.removeChild(b);
c.offset.initialize=c.noop},bodyOffset:function(a){var b=a.offsetTop,d=a.offsetLeft;c.offset.initialize();if(c.offset.doesNotIncludeMarginInBodyOffset){b+=parseFloat(c.curCSS(a,"marginTop",true))||0;d+=parseFloat(c.curCSS(a,"marginLeft",true))||0}return{top:b,left:d}},setOffset:function(a,b,d){if(/static/.test(c.curCSS(a,"position")))a.style.position="relative";var f=c(a),e=f.offset(),j=parseInt(c.curCSS(a,"top",true),10)||0,i=parseInt(c.curCSS(a,"left",true),10)||0;if(c.isFunction(b))b=b.call(a,
d,e);d={top:b.top-e.top+j,left:b.left-e.left+i};"using"in b?b.using.call(a,d):f.css(d)}};c.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),d=this.offset(),f=/^body|html$/i.test(b[0].nodeName)?{top:0,left:0}:b.offset();d.top-=parseFloat(c.curCSS(a,"marginTop",true))||0;d.left-=parseFloat(c.curCSS(a,"marginLeft",true))||0;f.top+=parseFloat(c.curCSS(b[0],"borderTopWidth",true))||0;f.left+=parseFloat(c.curCSS(b[0],"borderLeftWidth",true))||0;return{top:d.top-
f.top,left:d.left-f.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||s.body;a&&!/^body|html$/i.test(a.nodeName)&&c.css(a,"position")==="static";)a=a.offsetParent;return a})}});c.each(["Left","Top"],function(a,b){var d="scroll"+b;c.fn[d]=function(f){var e=this[0],j;if(!e)return null;if(f!==w)return this.each(function(){if(j=wa(this))j.scrollTo(!a?f:c(j).scrollLeft(),a?f:c(j).scrollTop());else this[d]=f});else return(j=wa(e))?"pageXOffset"in j?j[a?"pageYOffset":
"pageXOffset"]:c.support.boxModel&&j.document.documentElement[d]||j.document.body[d]:e[d]}});c.each(["Height","Width"],function(a,b){var d=b.toLowerCase();c.fn["inner"+b]=function(){return this[0]?c.css(this[0],d,false,"padding"):null};c.fn["outer"+b]=function(f){return this[0]?c.css(this[0],d,false,f?"margin":"border"):null};c.fn[d]=function(f){var e=this[0];if(!e)return f==null?null:this;if(c.isFunction(f))return this.each(function(j){var i=c(this);i[d](f.call(this,j,i[d]()))});return"scrollTo"in
e&&e.document?e.document.compatMode==="CSS1Compat"&&e.document.documentElement["client"+b]||e.document.body["client"+b]:e.nodeType===9?Math.max(e.documentElement["client"+b],e.body["scroll"+b],e.documentElement["scroll"+b],e.body["offset"+b],e.documentElement["offset"+b]):f===w?c.css(e,d):this.css(d,typeof f==="string"?f:f+"px")}});A.jQuery=A.$=c})(window);
;(function(e){e.extend({metadata:{defaults:{type:"class",name:"metadata",cre:/({.*})/,single:"metadata"},setType:function(b,a){this.defaults.type=b;this.defaults.name=a},get:function(b,a){a=e.extend({},this.defaults,a);if(!a.single.length)a.single="metadata";var c=e.data(b,a.single);if(c)return c;c="{}";var h=function(d){if(typeof d!="string")return d;return d=eval("("+d+")")};if(a.type=="html5"){var g={};e(b.attributes).each(function(){var d=this.nodeName;if(d.match(/^data-/))d=d.replace(/^data-/, "");else return true;g[d]=h(this.nodeValue)})}else{if(a.type=="class"){var f=a.cre.exec(b.className);if(f)c=f[1]}else if(a.type=="elem"){if(!b.getElementsByTagName)return;f=b.getElementsByTagName(a.name);if(f.length)c=e.trim(f[0].innerHTML)}else if(b.getAttribute!=undefined)if(f=b.getAttribute(a.name))c=f;g=h(c.indexOf("{")<0?"{"+c+"}":c)}e.data(b,a.single,g);return g}}});e.fn.metadata=function(b){return e.metadata.get(this[0],b)}})(jQuery);;
(function($){$.dm={defaults:{ajaxData:{dm_cpi:dm_configuration.page_id||0,dm_xhr:1}},base:{}};$.ajaxSetup({global:false,timeout:false,type:"GET",cache:false,data:$.dm.defaults.ajaxData});if($.datepicker)
{$.datepicker.setDefaults($.datepicker.regional[dm_configuration.culture]);}
if($.blockUI)
{$.blockUI.defaults=$.extend($.blockUI.defaults,{css:{},overlayCSS:{},message:' ',fadeIn:0,fadeOut:0});}
if($.fn.tipsy)
{$.fn.tipsy.elementOptions=function(elem,options){return options;};$.fn.tipsy.defaults.delayIn=500;$.fn.tipsy.autoNorth=function(){return $(this).offset().left>100?($(this).offset().left<($(window).width()-100)?'n':'e'):'w';};$.fn.tipsy.autoSouth=function(){return $(this).offset().left>100?($(this).offset().left<($(window).width()-100)?'s':'e'):'w';};}})(jQuery);;
(function($)
{$.dbg=function()
{if(typeof console!=='object'||($.dm.ctrl&&$.dm.ctrl.options&&!$.dm.ctrl.options.debug))
{return;}
try
{console.debug(arguments);}
catch(e)
{}};$.loadStylesheets=function(stylesheets)
{$.each(stylesheets,function()
{if(!$('link[rel=stylesheet][href='+this+']').length)
{$("head").append('<link rel="stylesheet" href="'+this+'">');}});};$.fn.extend({orNot:function()
{return this.length==0?false:this;},rebind:function(type,data,fn)
{return this.unbind(type,fn).bind(type,data,fn);},bindKey:function(key,fn)
{if(!window.hotkeys)
{return this;}
return this.bind('keydown',key,function(e)
{e.stopPropagation();return fn(e);});},unbindKey:function(key)
{if(!window.hotkeys)
{return this;}
return this.unbind('keydown',key);}});})(jQuery);;
(function($)
{$.dm.coreCtrl={getHref:function(action)
{return this.options.script_name+action;}};$(function()
{$.dm.ctrl.options=$.extend($.dm.defaults,dm_configuration);$.dm.ctrl.init();});})(jQuery);;
(function($)
{$.dm.ctrl=$.extend($.dm.coreCtrl,{init:function()
{$('#dm_page div.dm_widget').trigger('dmWidgetLaunch');}});})(jQuery);;
jQuery.cookie=function(name,value,options){if(typeof value!='undefined'){options=options||{};if(value===null){value='';options.expires=-1;}
var expires='';if(options.expires&&(typeof options.expires=='number'||options.expires.toUTCString)){var date;if(typeof options.expires=='number'){date=new Date();date.setTime(date.getTime()+(options.expires*24*60*60*1000));}else{date=options.expires;}
expires='; expires='+date.toUTCString();}
var path=options.path?'; path='+(options.path):'';var domain=options.domain?'; domain='+(options.domain):'';var secure=options.secure?'; secure':'';document.cookie=[name,'=',encodeURIComponent(value),expires,path,domain,secure].join('');}else{var cookieValue=null;if(document.cookie&&document.cookie!=''){var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;i++){var cookie=jQuery.trim(cookies[i]);if(cookie.substring(0,name.length+1)==(name+'=')){cookieValue=decodeURIComponent(cookie.substring(name.length+1));break;}}}
return cookieValue;}};;/**
 * BxSlider v4.1 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2012, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
 */

;(function($){

    var plugin = {};

    var defaults = {

        // GENERAL
        mode: 'horizontal',
        slideSelector: '',
        infiniteLoop: true,
        hideControlOnEnd: false,
        speed: 500,
        easing: null,
        slideMargin: 0,
        startSlide: 0,
        randomStart: false,
        captions: false,
        ticker: false,
        tickerHover: false,
        adaptiveHeight: false,
        adaptiveHeightSpeed: 500,
        video: false,
        useCSS: true,
        preloadImages: 'visible',

        // TOUCH
        touchEnabled: true,
        swipeThreshold: 50,
        oneToOneTouch: true,
        preventDefaultSwipeX: true,
        preventDefaultSwipeY: false,

        // PAGER
        pager: true,
        pagerType: 'full',
        pagerShortSeparator: ' / ',
        pagerSelector: null,
        buildPager: null,
        pagerCustom: null,

        // CONTROLS
        controls: true,
        nextText: 'Next',
        prevText: 'Prev',
        nextSelector: null,
        prevSelector: null,
        autoControls: false,
        startText: 'Start',
        stopText: 'Stop',
        autoControlsCombine: false,
        autoControlsSelector: null,

        // AUTO
        auto: false,
        pause: 4000,
        autoStart: true,
        autoDirection: 'next',
        autoHover: false,
        autoDelay: 0,

        // CAROUSEL
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 0,
        slideWidth: 0,

        // CALLBACKS
        onSliderLoad: function() {},
        onSlideBefore: function() {},
        onSlideAfter: function() {},
        onSlideNext: function() {},
        onSlidePrev: function() {}
    }

    $.fn.bxSlider = function(options){

        if(this.length == 0) return;

        // support mutltiple elements
        if(this.length > 1){
            this.each(function(){$(this).bxSlider(options)});
            return this;
        }

        // create a namespace to be used throughout the plugin
        var slider = {};
        // set a reference to our slider element
        var el = this;
        plugin.el = this;

        /**
         * Makes slideshow responsive
         */
        // first get the original window dimens (thanks alot IE)
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();



        /**
         * ===================================================================================
         * = PRIVATE FUNCTIONS
         * ===================================================================================
         */

        /**
         * Initializes namespace settings to be used throughout plugin
         */
        var init = function(){
            // merge user-supplied options with the defaults
            slider.settings = $.extend({}, defaults, options);
            // parse slideWidth setting
            slider.settings.slideWidth = parseInt(slider.settings.slideWidth);
            // store the original children
            slider.children = el.children(slider.settings.slideSelector);
            // check if actual number of slides is less than minSlides / maxSlides
            if(slider.children.length < slider.settings.minSlides) slider.settings.minSlides = slider.children.length;
            if(slider.children.length < slider.settings.maxSlides) slider.settings.maxSlides = slider.children.length;
            // if random start, set the startSlide setting to random number
            if(slider.settings.randomStart) slider.settings.startSlide = Math.floor(Math.random() * slider.children.length);
            // store active slide information
            slider.active = { index: slider.settings.startSlide }
            // store if the slider is in carousel mode (displaying / moving multiple slides)
            slider.carousel = slider.settings.minSlides > 1 || slider.settings.maxSlides > 1;
            // if carousel, force preloadImages = 'all'
            if(slider.carousel) slider.settings.preloadImages = 'all';
            // calculate the min / max width thresholds based on min / max number of slides
            // used to setup and update carousel slides dimensions
            slider.minThreshold = (slider.settings.minSlides * slider.settings.slideWidth) + ((slider.settings.minSlides - 1) * slider.settings.slideMargin);
            slider.maxThreshold = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
            // store the current state of the slider (if currently animating, working is true)
            slider.working = false;
            // initialize the controls object
            slider.controls = {};
            // initialize an auto interval
            slider.interval = null;
            // determine which property to use for transitions
            slider.animProp = slider.settings.mode == 'vertical' ? 'top' : 'left';
            // determine if hardware acceleration can be used
            slider.usingCSS = slider.settings.useCSS && slider.settings.mode != 'fade' && (function(){
                // create our test div element
                var div = document.createElement('div');
                // css transition properties
                var props = ['WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
                // test for each property
                for(var i in props){
                    if(div.style[props[i]] !== undefined){
                        slider.cssPrefix = props[i].replace('Perspective', '').toLowerCase();
                        slider.animProp = '-' + slider.cssPrefix + '-transform';
                        return true;
                    }
                }
                return false;
            }());
            // if vertical mode always make maxSlides and minSlides equal
            if(slider.settings.mode == 'vertical') slider.settings.maxSlides = slider.settings.minSlides;
            // perform all DOM / CSS modifications
            setup();
        }

        /**
         * Performs all DOM and CSS modifications
         */
        var setup = function(){
            // wrap el in a wrapper
            el.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>');
            // store a namspace reference to .bx-viewport
            slider.viewport = el.parent();
            // add a loading div to display while images are loading
            slider.loader = $('<div class="bx-loading" />');
            slider.viewport.prepend(slider.loader);
            // set el to a massive width, to hold any needed slides
            // also strip any margin and padding from el
            el.css({
                width: slider.settings.mode == 'horizontal' ? slider.children.length * 215 + '%' : 'auto',
                position: 'relative'
            });
            // if using CSS, add the easing property
            if(slider.usingCSS && slider.settings.easing){
                el.css('-' + slider.cssPrefix + '-transition-timing-function', slider.settings.easing);
                // if not using CSS and no easing value was supplied, use the default JS animation easing (swing)
            }else if(!slider.settings.easing){
                slider.settings.easing = 'swing';
            }
            var slidesShowing = getNumberSlidesShowing();
            // make modifications to the viewport (.bx-viewport)
            slider.viewport.css({
                width: '100%',
                overflow: 'hidden',
                position: 'relative'
            });
            slider.viewport.parent().css({
                maxWidth: getViewportMaxWidth()
            });
            // apply css to all slider children
            slider.children.css({
                'float': slider.settings.mode == 'horizontal' ? 'left' : 'none',
                listStyle: 'none',
                position: 'relative'
            });
            // apply the calculated width after the float is applied to prevent scrollbar interference
            slider.children.width(getSlideWidth());
            // if slideMargin is supplied, add the css
            if(slider.settings.mode == 'horizontal' && slider.settings.slideMargin > 0) slider.children.css('marginRight', slider.settings.slideMargin);
            if(slider.settings.mode == 'vertical' && slider.settings.slideMargin > 0) slider.children.css('marginBottom', slider.settings.slideMargin);
            // if "fade" mode, add positioning and z-index CSS
            if(slider.settings.mode == 'fade'){
                slider.children.css({
                    position: 'absolute',
                    zIndex: 0,
                    display: 'none'
                });
                // prepare the z-index on the showing element
                slider.children.eq(slider.settings.startSlide).css({zIndex: 50, display: 'block'});
            }
            // create an element to contain all slider controls (pager, start / stop, etc)
            slider.controls.el = $('<div class="bx-controls" />');
            // if captions are requested, add them
            if(slider.settings.captions) appendCaptions();
            // if infinite loop, prepare additional slides
            if(slider.settings.infiniteLoop && slider.settings.mode != 'fade' && !slider.settings.ticker){
                var slice = slider.settings.mode == 'vertical' ? slider.settings.minSlides : slider.settings.maxSlides;
                var sliceAppend = slider.children.slice(0, slice).clone().addClass('bx-clone');
                var slicePrepend = slider.children.slice(-slice).clone().addClass('bx-clone');
                el.append(sliceAppend).prepend(slicePrepend);
            }
            // check if startSlide is last slide
            slider.active.last = slider.settings.startSlide == getPagerQty() - 1;
            // if video is true, set up the fitVids plugin
            if(slider.settings.video) el.fitVids();
            // set the default preload selector (visible)
            var preloadSelector = slider.children.eq(slider.settings.startSlide);
            if (slider.settings.preloadImages == "all") preloadSelector = el.children();
            // only check for control addition if not in "ticker" mode
            if(!slider.settings.ticker){
                // if pager is requested, add it
                if(slider.settings.pager) appendPager();
                // if controls are requested, add them
                if(slider.settings.controls) appendControls();
                // if auto is true, and auto controls are requested, add them
                if(slider.settings.auto && slider.settings.autoControls) appendControlsAuto();
                // if any control option is requested, add the controls wrapper
                if(slider.settings.controls || slider.settings.autoControls || slider.settings.pager) slider.viewport.after(slider.controls.el);
            }
            // preload all images, then perform final DOM / CSS modifications that depend on images being loaded
            preloadSelector.imagesLoaded(start);
        }

        /**
         * Start the slider
         */
        var start = function(){
            // remove the loading DOM element
            slider.loader.remove();
            // set the left / top position of "el"
            setSlidePosition();
            // if "vertical" mode, always use adaptiveHeight to prevent odd behavior
            if (slider.settings.mode == 'vertical') slider.settings.adaptiveHeight = true;
            // set the viewport height
            slider.viewport.height(getViewportHeight());
            // make sure everything is positioned just right (same as a window resize)
            el.updateDimensions();
            // onSliderLoad callback
            slider.settings.onSliderLoad(slider.active.index);
            // slider has been fully initialized
            slider.initialized = true;
            // bind the resize call to the window
            $(window).bind('resize', resizeWindow);
            // if auto is true, start the show
            if (slider.settings.auto && slider.settings.autoStart) initAuto();
            // if ticker is true, start the ticker
            if (slider.settings.ticker) initTicker();
            // if pager is requested, make the appropriate pager link active
            if (slider.settings.pager) updatePagerActive(slider.settings.startSlide);
            // check for any updates to the controls (like hideControlOnEnd updates)
            if (slider.settings.controls) updateDirectionControls();
            // if touchEnabled is true, setup the touch events
            if (slider.settings.touchEnabled && !slider.settings.ticker) initTouch();
        }

        /**
         * Returns the calculated height of the viewport, used to determine either adaptiveHeight or the maxHeight value
         */
        var getViewportHeight = function(){
            var height = 0;
            // first determine which children (slides) should be used in our height calculation
            var children = $();
            // if mode is not "vertical" and adaptiveHeight is false, include all children
            if(slider.settings.mode != 'vertical' && !slider.settings.adaptiveHeight){
                children = slider.children;
            }else{
                // if not carousel, return the single active child
                if(!slider.carousel){
                    children = slider.children.eq(slider.active.index);
                    // if carousel, return a slice of children
                }else{
                    // get the individual slide index
                    var currentIndex = slider.settings.moveSlides == 1 ? slider.active.index : slider.active.index * getMoveBy();
                    // add the current slide to the children
                    children = slider.children.eq(currentIndex);
                    // cycle through the remaining "showing" slides
                    for (i = 1; i <= slider.settings.maxSlides - 1; i++){
                        // if looped back to the start
                        if(currentIndex + i >= slider.children.length){
                            children = children.add(slider.children.eq(i - 1));
                        }else{
                            children = children.add(slider.children.eq(currentIndex + i));
                        }
                    }
                }
            }
            // if "vertical" mode, calculate the sum of the heights of the children
            if(slider.settings.mode == 'vertical'){
                children.each(function(index) {
                    height += $(this).outerHeight();
                });
                // add user-supplied margins
                if(slider.settings.slideMargin > 0){
                    height += slider.settings.slideMargin * (slider.settings.minSlides - 1);
                }
                // if not "vertical" mode, calculate the max height of the children
            }else{
                height = Math.max.apply(Math, children.map(function(){
                    return $(this).outerHeight(false);
                }).get());
            }
            return height;
        }

        /**
         * Returns the calculated width to be used for the outer wrapper / viewport
         */
        var getViewportMaxWidth = function(){
            var width = '100%';
            if(slider.settings.slideWidth > 0){
                if(slider.settings.mode == 'horizontal'){
                    width = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
                }else{
                    width = slider.settings.slideWidth;
                }
            }
            return width;
        }

        /**
         * Returns the calculated width to be applied to each slide
         */
        var getSlideWidth = function(){
            // start with any user-supplied slide width
            var newElWidth = slider.settings.slideWidth;
            // get the current viewport width
            var wrapWidth = slider.viewport.width();
            // if slide width was not supplied, or is larger than the viewport use the viewport width
            if(slider.settings.slideWidth == 0 ||
                (slider.settings.slideWidth > wrapWidth && !slider.carousel) ||
                slider.settings.mode == 'vertical'){
                newElWidth = wrapWidth;
                // if carousel, use the thresholds to determine the width
            }else if(slider.settings.maxSlides > 1 && slider.settings.mode == 'horizontal'){
                if(wrapWidth > slider.maxThreshold){
                    // newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.maxSlides - 1))) / slider.settings.maxSlides;
                }else if(wrapWidth < slider.minThreshold){
                    newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.minSlides - 1))) / slider.settings.minSlides;
                }
            }
            return newElWidth;
        }

        /**
         * Returns the number of slides currently visible in the viewport (includes partially visible slides)
         */
        var getNumberSlidesShowing = function(){
            var slidesShowing = 1;
            if(slider.settings.mode == 'horizontal' && slider.settings.slideWidth > 0){
                // if viewport is smaller than minThreshold, return minSlides
                if(slider.viewport.width() < slider.minThreshold){
                    slidesShowing = slider.settings.minSlides;
                    // if viewport is larger than minThreshold, return maxSlides
                }else if(slider.viewport.width() > slider.maxThreshold){
                    slidesShowing = slider.settings.maxSlides;
                    // if viewport is between min / max thresholds, divide viewport width by first child width
                }else{
                    var childWidth = slider.children.first().width();
                    slidesShowing = Math.floor(slider.viewport.width() / childWidth);
                }
                // if "vertical" mode, slides showing will always be minSlides
            }else if(slider.settings.mode == 'vertical'){
                slidesShowing = slider.settings.minSlides;
            }
            return slidesShowing;
        }

        /**
         * Returns the number of pages (one full viewport of slides is one "page")
         */
        var getPagerQty = function(){
            var pagerQty = 0;
            // if moveSlides is specified by the user
            if(slider.settings.moveSlides > 0){
                if(slider.settings.infiniteLoop){
                    pagerQty = slider.children.length / getMoveBy();
                }else{
                    // use a while loop to determine pages
                    var breakPoint = 0;
                    var counter = 0
                    // when breakpoint goes above children length, counter is the number of pages
                    while (breakPoint < slider.children.length){
                        ++pagerQty;
                        breakPoint = counter + getNumberSlidesShowing();
                        counter += slider.settings.moveSlides <= getNumberSlidesShowing() ? slider.settings.moveSlides : getNumberSlidesShowing();
                    }
                }
                // if moveSlides is 0 (auto) divide children length by sides showing, then round up
            }else{
                pagerQty = Math.ceil(slider.children.length / getNumberSlidesShowing());
            }
            return pagerQty;
        }

        /**
         * Returns the number of indivual slides by which to shift the slider
         */
        var getMoveBy = function(){
            // if moveSlides was set by the user and moveSlides is less than number of slides showing
            if(slider.settings.moveSlides > 0 && slider.settings.moveSlides <= getNumberSlidesShowing()){
                return slider.settings.moveSlides;
            }
            // if moveSlides is 0 (auto)
            return getNumberSlidesShowing();
        }

        /**
         * Sets the slider's (el) left or top position
         */
        var setSlidePosition = function(){
            // if last slide, not infinite loop, and number of children is larger than specified maxSlides
            if(slider.children.length > slider.settings.maxSlides && slider.active.last && !slider.settings.infiniteLoop){
                if (slider.settings.mode == 'horizontal'){
                    // get the last child's position
                    var lastChild = slider.children.last();
                    var position = lastChild.position();
                    // set the left position
                    setPositionProperty(-(position.left - (slider.viewport.width() - lastChild.width())), 'reset', 0);
                }else if(slider.settings.mode == 'vertical'){
                    // get the last showing index's position
                    var lastShowingIndex = slider.children.length - slider.settings.minSlides;
                    var position = slider.children.eq(lastShowingIndex).position();
                    // set the top position
                    setPositionProperty(-position.top, 'reset', 0);
                }
                // if not last slide
            }else{
                // get the position of the first showing slide
                var position = slider.children.eq(slider.active.index * getMoveBy()).position();
                // check for last slide
                if (slider.active.index == getPagerQty() - 1) slider.active.last = true;
                // set the repective position
                if (position != undefined){
                    if (slider.settings.mode == 'horizontal') setPositionProperty(-position.left, 'reset', 0);
                    else if (slider.settings.mode == 'vertical') setPositionProperty(-position.top, 'reset', 0);
                }
            }
        }

        /**
         * Sets the el's animating property position (which in turn will sometimes animate el).
         * If using CSS, sets the transform property. If not using CSS, sets the top / left property.
         *
         * @param value (int)
         *  - the animating property's value
         *
         * @param type (string) 'slider', 'reset', 'ticker'
         *  - the type of instance for which the function is being
         *
         * @param duration (int)
         *  - the amount of time (in ms) the transition should occupy
         *
         * @param params (array) optional
         *  - an optional parameter containing any variables that need to be passed in
         */
        var setPositionProperty = function(value, type, duration, params){
            // use CSS transform
            if(slider.usingCSS){
                // determine the translate3d value
                var propValue = slider.settings.mode == 'vertical' ? 'translate3d(0, ' + value + 'px, 0)' : 'translate3d(' + value + 'px, 0, 0)';
                // add the CSS transition-duration
                el.css('-' + slider.cssPrefix + '-transition-duration', duration / 1000 + 's');
                if(type == 'slide'){
                    // set the property value
                    el.css(slider.animProp, propValue);
                    // bind a callback method - executes when CSS transition completes
                    el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(){
                        // unbind the callback
                        el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
                        updateAfterSlideTransition();
                    });
                }else if(type == 'reset'){
                    el.css(slider.animProp, propValue);
                }else if(type == 'ticker'){
                    // make the transition use 'linear'
                    el.css('-' + slider.cssPrefix + '-transition-timing-function', 'linear');
                    el.css(slider.animProp, propValue);
                    // bind a callback method - executes when CSS transition completes
                    el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(){
                        // unbind the callback
                        el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
                        // reset the position
                        setPositionProperty(params['resetValue'], 'reset', 0);
                        // start the loop again
                        tickerLoop();
                    });
                }
                // use JS animate
            }else{
                var animateObj = {};
                animateObj[slider.animProp] = value;
                if(type == 'slide'){
                    el.animate(animateObj, duration, slider.settings.easing, function(){
                        updateAfterSlideTransition();
                    });
                }else if(type == 'reset'){
                    el.css(slider.animProp, value)
                }else if(type == 'ticker'){
                    el.animate(animateObj, speed, 'linear', function(){
                        setPositionProperty(params['resetValue'], 'reset', 0);
                        // run the recursive loop after animation
                        tickerLoop();
                    });
                }
            }
        }

        /**
         * Populates the pager with proper amount of pages
         */
        var populatePager = function(){
            var pagerHtml = '';
            pagerQty = getPagerQty();
            // loop through each pager item
            for(var i=0; i < pagerQty; i++){
                var linkContent = '';
                // if a buildPager function is supplied, use it to get pager link value, else use index + 1
                if(slider.settings.buildPager && $.isFunction(slider.settings.buildPager)){
                    linkContent = slider.settings.buildPager(i);
                    slider.pagerEl.addClass('bx-custom-pager');
                }else{
                    linkContent = i + 1;
                    slider.pagerEl.addClass('bx-default-pager');
                }
                // var linkContent = slider.settings.buildPager && $.isFunction(slider.settings.buildPager) ? slider.settings.buildPager(i) : i + 1;
                // add the markup to the string
                pagerHtml += '<div class="bx-pager-item"><a href="" data-slide-index="' + i + '" class="bx-pager-link">' + linkContent + '</a></div>';
            };
            // populate the pager element with pager links
            slider.pagerEl.html(pagerHtml);
        }

        /**
         * Appends the pager to the controls element
         */
        var appendPager = function(){
            if(!slider.settings.pagerCustom){
                // create the pager DOM element
                slider.pagerEl = $('<div class="bx-pager" />');
                // if a pager selector was supplied, populate it with the pager
                if(slider.settings.pagerSelector){
                    $(slider.settings.pagerSelector).html(slider.pagerEl);
                    // if no pager selector was supplied, add it after the wrapper
                }else{
                    slider.controls.el.addClass('bx-has-pager').append(slider.pagerEl);
                }
                // populate the pager
                populatePager();
            }else{
                slider.pagerEl = $(slider.settings.pagerCustom);
            }
            // assign the pager click binding
            slider.pagerEl.delegate('a', '', clickPagerBind);
        }

        /**
         * Appends prev / next controls to the controls element
         */
        var appendControls = function(){
            slider.controls.next = $('<a class="bx-next" href="">' + slider.settings.nextText + '</a>');
            slider.controls.prev = $('<a class="bx-prev" href="">' + slider.settings.prevText + '</a>');
            // bind click actions to the controls
            slider.controls.next.bind('click', clickNextBind);
            slider.controls.prev.bind('click', clickPrevBind);
            // if nextSlector was supplied, populate it
            if(slider.settings.nextSelector){
                $(slider.settings.nextSelector).append(slider.controls.next);
            }
            // if prevSlector was supplied, populate it
            if(slider.settings.prevSelector){
                $(slider.settings.prevSelector).append(slider.controls.prev);
            }
            // if no custom selectors were supplied
            if(!slider.settings.nextSelector && !slider.settings.prevSelector){
                // add the controls to the DOM
                slider.controls.directionEl = $('<div class="bx-controls-direction" />');
                // add the control elements to the directionEl
                slider.controls.directionEl.append(slider.controls.prev).append(slider.controls.next);
                // slider.viewport.append(slider.controls.directionEl);
                slider.controls.el.addClass('bx-has-controls-direction').append(slider.controls.directionEl);
            }
        }

        /**
         * Appends start / stop auto controls to the controls element
         */
        var appendControlsAuto = function(){
            slider.controls.start = $('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + slider.settings.startText + '</a></div>');
            slider.controls.stop = $('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + slider.settings.stopText + '</a></div>');
            // add the controls to the DOM
            slider.controls.autoEl = $('<div class="bx-controls-auto" />');
            // bind click actions to the controls
            slider.controls.autoEl.delegate('.bx-start', 'click', clickStartBind);
            slider.controls.autoEl.delegate('.bx-stop', 'click', clickStopBind);
            // if autoControlsCombine, insert only the "start" control
            if(slider.settings.autoControlsCombine){
                slider.controls.autoEl.append(slider.controls.start);
                // if autoControlsCombine is false, insert both controls
            }else{
                slider.controls.autoEl.append(slider.controls.start).append(slider.controls.stop);
            }
            // if auto controls selector was supplied, populate it with the controls
            if(slider.settings.autoControlsSelector){
                $(slider.settings.autoControlsSelector).html(slider.controls.autoEl);
                // if auto controls selector was not supplied, add it after the wrapper
            }else{
                slider.controls.el.addClass('bx-has-controls-auto').append(slider.controls.autoEl);
            }
            // update the auto controls
            updateAutoControls(slider.settings.autoStart ? 'stop' : 'start');
        }

        /**
         * Appends image captions to the DOM
         */
        var appendCaptions = function(){
            // cycle through each child
            slider.children.each(function(index){
                // get the image title attribute
                var title = $(this).find('img:first').attr('title');
                // append the caption
                if (title != undefined) $(this).append('<div class="bx-caption"><span>' + title + '</span></div>');
            });
        }

        /**
         * Click next binding
         *
         * @param e (event)
         *  - DOM event object
         */
        var clickNextBind = function(e){
            // if auto show is running, stop it
            if (slider.settings.auto) el.stopAuto();
            el.goToNextSlide();
            e.preventDefault();
        }

        /**
         * Click prev binding
         *
         * @param e (event)
         *  - DOM event object
         */
        var clickPrevBind = function(e){
            // if auto show is running, stop it
            if (slider.settings.auto) el.stopAuto();
            el.goToPrevSlide();
            e.preventDefault();
        }

        /**
         * Click start binding
         *
         * @param e (event)
         *  - DOM event object
         */
        var clickStartBind = function(e){
            el.startAuto();
            e.preventDefault();
        }

        /**
         * Click stop binding
         *
         * @param e (event)
         *  - DOM event object
         */
        var clickStopBind = function(e){
            el.stopAuto();
            e.preventDefault();
        }

        /**
         * Click pager binding
         *
         * @param e (event)
         *  - DOM event object
         */
        var clickPagerBind = function(e){
            // if auto show is running, stop it
            if (slider.settings.auto) el.stopAuto();
            var pagerLink = $(e.currentTarget);
            var pagerIndex = parseInt(pagerLink.attr('data-slide-index'));
            // if clicked pager link is not active, continue with the goToSlide call
            if(pagerIndex != slider.active.index) el.goToSlide(pagerIndex);
            e.preventDefault();
        }

        /**
         * Updates the pager links with an active class
         *
         * @param slideIndex (int)
         *  - index of slide to make active
         */
        var updatePagerActive = function(slideIndex){
            // if "short" pager type
            if(slider.settings.pagerType == 'short'){
                slider.pagerEl.html((slideIndex + 1) + slider.settings.pagerShortSeparator + slider.children.length);
                return;
            }
            // remove all pager active classes
            slider.pagerEl.find('a').removeClass('active');
            // apply the active class for all pagers
            slider.pagerEl.each(function(i, el) { $(el).find('a').eq(slideIndex).addClass('active'); });
        }

        /**
         * Performs needed actions after a slide transition
         */
        var updateAfterSlideTransition = function(){
            // if infinte loop is true
            if(slider.settings.infiniteLoop){
                var position = '';
                // first slide
                if(slider.active.index == 0){
                    // set the new position
                    position = slider.children.eq(0).position();
                    // carousel, last slide
                }else if(slider.active.index == getPagerQty() - 1 && slider.carousel){
                    position = slider.children.eq((getPagerQty() - 1) * getMoveBy()).position();
                    // last slide
                }else if(slider.active.index == slider.children.length - 1){
                    position = slider.children.eq(slider.children.length - 1).position();
                }
                if (slider.settings.mode == 'horizontal') { setPositionProperty(-position.left, 'reset', 0);; }
                else if (slider.settings.mode == 'vertical') { setPositionProperty(-position.top, 'reset', 0);; }
            }
            // declare that the transition is complete
            slider.working = false;
            // onSlideAfter callback
            slider.settings.onSlideAfter(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
        }

        /**
         * Updates the auto controls state (either active, or combined switch)
         *
         * @param state (string) "start", "stop"
         *  - the new state of the auto show
         */
        var updateAutoControls = function(state){
            // if autoControlsCombine is true, replace the current control with the new state
            if(slider.settings.autoControlsCombine){
                slider.controls.autoEl.html(slider.controls[state]);
                // if autoControlsCombine is false, apply the "active" class to the appropriate control
            }else{
                slider.controls.autoEl.find('a').removeClass('active');
                slider.controls.autoEl.find('a:not(.bx-' + state + ')').addClass('active');
            }
        }

        /**
         * Updates the direction controls (checks if either should be hidden)
         */
        var updateDirectionControls = function(){
            // if infiniteLoop is false and hideControlOnEnd is true
            if(!slider.settings.infiniteLoop && slider.settings.hideControlOnEnd){
                // if first slide
                if (slider.active.index == 0){
                    slider.controls.prev.addClass('disabled');
                    slider.controls.next.removeClass('disabled');
                    // if last slide
                }else if(slider.active.index == getPagerQty() - 1){
                    slider.controls.next.addClass('disabled');
                    slider.controls.prev.removeClass('disabled');
                    // if any slide in the middle
                }else{
                    slider.controls.prev.removeClass('disabled');
                    slider.controls.next.removeClass('disabled');
                }
            }
        }

        /**
         * Initialzes the auto process
         */
        var initAuto = function(){
            // if autoDelay was supplied, launch the auto show using a setTimeout() call
            if(slider.settings.autoDelay > 0){
                var timeout = setTimeout(el.startAuto, slider.settings.autoDelay);
                // if autoDelay was not supplied, start the auto show normally
            }else{
                el.startAuto();
            }
            // if autoHover is requested
            if(slider.settings.autoHover){
                // on el hover
                el.hover(function(){
                    // if the auto show is currently playing (has an active interval)
                    if(slider.interval){
                        // stop the auto show and pass true agument which will prevent control update
                        el.stopAuto(true);
                        // create a new autoPaused value which will be used by the relative "mouseout" event
                        slider.autoPaused = true;
                    }
                }, function(){
                    // if the autoPaused value was created be the prior "mouseover" event
                    if(slider.autoPaused){
                        // start the auto show and pass true agument which will prevent control update
                        el.startAuto(true);
                        // reset the autoPaused value
                        slider.autoPaused = null;
                    }
                });
            }
        }

        /**
         * Initialzes the ticker process
         */
        var initTicker = function(){
            var startPosition = 0;
            // if autoDirection is "next", append a clone of the entire slider
            if(slider.settings.autoDirection == 'next'){
                el.append(slider.children.clone().addClass('bx-clone'));
                // if autoDirection is "prev", prepend a clone of the entire slider, and set the left position
            }else{
                el.prepend(slider.children.clone().addClass('bx-clone'));
                var position = slider.children.first().position();
                startPosition = slider.settings.mode == 'horizontal' ? -position.left : -position.top;
            }
            setPositionProperty(startPosition, 'reset', 0);
            // do not allow controls in ticker mode
            slider.settings.pager = false;
            slider.settings.controls = false;
            slider.settings.autoControls = false;
            // if autoHover is requested
            if(slider.settings.tickerHover && !slider.usingCSS){
                // on el hover
                slider.viewport.hover(function(){
                    el.stop();
                }, function(){
                    // calculate the total width of children (used to calculate the speed ratio)
                    var totalDimens = 0;
                    slider.children.each(function(index){
                        totalDimens += slider.settings.mode == 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
                    });
                    // calculate the speed ratio (used to determine the new speed to finish the paused animation)
                    var ratio = slider.settings.speed / totalDimens;
                    // determine which property to use
                    var property = slider.settings.mode == 'horizontal' ? 'left' : 'top';
                    // calculate the new speed
                    var newSpeed = ratio * (totalDimens - (Math.abs(parseInt(el.css(property)))));
                    tickerLoop(newSpeed);
                });
            }
            // start the ticker loop
            tickerLoop();
        }

        /**
         * Runs a continuous loop, news ticker-style
         */
        var tickerLoop = function(resumeSpeed){
            speed = resumeSpeed ? resumeSpeed : slider.settings.speed;
            var position = {left: 0, top: 0};
            var reset = {left: 0, top: 0};
            // if "next" animate left position to last child, then reset left to 0
            if(slider.settings.autoDirection == 'next'){
                position = el.find('.bx-clone').first().position();
                // if "prev" animate left position to 0, then reset left to first non-clone child
            }else{
                reset = slider.children.first().position();
            }
            var animateProperty = slider.settings.mode == 'horizontal' ? -position.left : -position.top;
            var resetValue = slider.settings.mode == 'horizontal' ? -reset.left : -reset.top;
            var params = {resetValue: resetValue};
            setPositionProperty(animateProperty, 'ticker', speed, params);
        }

        /**
         * Initializes touch events
         */
        var initTouch = function(){
            // initialize object to contain all touch values
            slider.touch = {
                start: {x: 0, y: 0},
                end: {x: 0, y: 0}
            }
            slider.viewport.bind('touchstart', onTouchStart);
        }

        /**
         * Event handler for "touchstart"
         *
         * @param e (event)
         *  - DOM event object
         */
        var onTouchStart = function(e){
            if(slider.working){
                e.preventDefault();
            }else{
                // record the original position when touch starts
                slider.touch.originalPos = el.position();
                var orig = e.originalEvent;
                // record the starting touch x, y coordinates
                slider.touch.start.x = orig.changedTouches[0].pageX;
                slider.touch.start.y = orig.changedTouches[0].pageY;
                // bind a "touchmove" event to the viewport
                slider.viewport.bind('touchmove', onTouchMove);
                // bind a "touchend" event to the viewport
                slider.viewport.bind('touchend', onTouchEnd);
            }
        }

        /**
         * Event handler for "touchmove"
         *
         * @param e (event)
         *  - DOM event object
         */
        var onTouchMove = function(e){
            var orig = e.originalEvent;
            // if scrolling on y axis, do not prevent default
            var xMovement = Math.abs(orig.changedTouches[0].pageX - slider.touch.start.x);
            var yMovement = Math.abs(orig.changedTouches[0].pageY - slider.touch.start.y);
            // x axis swipe
            if((xMovement * 3) > yMovement && slider.settings.preventDefaultSwipeX){
                e.preventDefault();
                // y axis swipe
            }else if((yMovement * 3) > xMovement && slider.settings.preventDefaultSwipeY){
                e.preventDefault();
            }
            if(slider.settings.mode != 'fade' && slider.settings.oneToOneTouch){
                var value = 0;
                // if horizontal, drag along x axis
                if(slider.settings.mode == 'horizontal'){
                    var change = orig.changedTouches[0].pageX - slider.touch.start.x;
                    value = slider.touch.originalPos.left + change;
                    // if vertical, drag along y axis
                }else{
                    var change = orig.changedTouches[0].pageY - slider.touch.start.y;
                    value = slider.touch.originalPos.top + change;
                }
                setPositionProperty(value, 'reset', 0);
            }
        }

        /**
         * Event handler for "touchend"
         *
         * @param e (event)
         *  - DOM event object
         */
        var onTouchEnd = function(e){
            slider.viewport.unbind('touchmove', onTouchMove);
            var orig = e.originalEvent;
            var value = 0;
            // record end x, y positions
            slider.touch.end.x = orig.changedTouches[0].pageX;
            slider.touch.end.y = orig.changedTouches[0].pageY;
            // if fade mode, check if absolute x distance clears the threshold
            if(slider.settings.mode == 'fade'){
                var distance = Math.abs(slider.touch.start.x - slider.touch.end.x);
                if(distance >= slider.settings.swipeThreshold){
                    slider.touch.start.x > slider.touch.end.x ? el.goToNextSlide() : el.goToPrevSlide();
                    el.stopAuto();
                }
                // not fade mode
            }else{
                var distance = 0;
                // calculate distance and el's animate property
                if(slider.settings.mode == 'horizontal'){
                    distance = slider.touch.end.x - slider.touch.start.x;
                    value = slider.touch.originalPos.left;
                }else{
                    distance = slider.touch.end.y - slider.touch.start.y;
                    value = slider.touch.originalPos.top;
                }
                // if not infinite loop and first / last slide, do not attempt a slide transition
                if(!slider.settings.infiniteLoop && ((slider.active.index == 0 && distance > 0) || (slider.active.last && distance < 0))){
                    setPositionProperty(value, 'reset', 200);
                }else{
                    // check if distance clears threshold
                    if(Math.abs(distance) >= slider.settings.swipeThreshold){
                        distance < 0 ? el.goToNextSlide() : el.goToPrevSlide();
                        el.stopAuto();
                    }else{
                        // el.animate(property, 200);
                        setPositionProperty(value, 'reset', 200);
                    }
                }
            }
            slider.viewport.unbind('touchend', onTouchEnd);
        }

        var resizeWindow = function(e){
            // get the new window dimens (again, thank you IE)
            var windowWidthNew = $(window).width();
            var windowHeightNew = $(window).height();
            // make sure that it is a true window resize
            // *we must check this because our dinosaur friend IE fires a window resize event when certain DOM elements
            // are resized. Can you just die already?*
            if(windowWidth != windowWidthNew || windowHeight != windowHeightNew){
                // set the new window dimens
                windowWidth = windowWidthNew;
                windowHeight = windowHeightNew;

                el.updateDimensions();

                // // resize all children in ratio to new screen size
                // slider.children.add(el.find('.bx-clone')).width(getSlideWidth());
                // // adjust the height
                // slider.viewport.css('height', getViewportHeight());

                // if active.last was true before the screen resize, we want
                // to keep it last no matter what screen size we end on
                if (slider.active.last) slider.active.index = getPagerQty() - 1;
                // if the active index (page) no longer exists due to the resize, simply set the index as last
                if (slider.active.index >= getPagerQty()) slider.active.last = true;
                // if a pager is being displayed and a custom pager is not being used, update it
                if(slider.settings.pager && !slider.settings.pagerCustom){
                    populatePager();
                    updatePagerActive(slider.active.index);
                }
            }
        }

        /**
         * ===================================================================================
         * = PUBLIC FUNCTIONS
         * ===================================================================================
         */

        /**
         * Performs slide transition to the specified slide
         *
         * @param slideIndex (int)
         *  - the destination slide's index (zero-based)
         *
         * @param direction (string)
         *  - INTERNAL USE ONLY - the direction of travel ("prev" / "next")
         */
        el.goToSlide = function(slideIndex, direction){
            // if plugin is currently in motion, ignore request
            if(slider.working || slider.active.index == slideIndex) return;
            // declare that plugin is in motion
            slider.working = true;
            // store the old index
            slider.oldIndex = slider.active.index;
            // if slideIndex is less than zero, set active index to last child (this happens during infinite loop)
            if(slideIndex < 0){
                slider.active.index = getPagerQty() - 1;
                // if slideIndex is greater than children length, set active index to 0 (this happens during infinite loop)
            }else if(slideIndex >= getPagerQty()){
                slider.active.index = 0;
                // set active index to requested slide
            }else{
                slider.active.index = slideIndex;
            }
            // onSlideBefore, onSlideNext, onSlidePrev callbacks
            slider.settings.onSlideBefore(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
            if(direction == 'next'){
                slider.settings.onSlideNext(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
            }else if(direction == 'prev'){
                slider.settings.onSlidePrev(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
            }
            // check if last slide
            slider.active.last = slider.active.index >= getPagerQty() - 1;
            // update the pager with active class
            if(slider.settings.pager) updatePagerActive(slider.active.index);
            // // check for direction control update
            if(slider.settings.controls) updateDirectionControls();
            // if slider is set to mode: "fade"
            if(slider.settings.mode == 'fade'){
                // if adaptiveHeight is true and next height is different from current height, animate to the new height
                if(slider.settings.adaptiveHeight && slider.viewport.height() != getViewportHeight()){
                    slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
                }
                // fade out the visible child and reset its z-index value
                slider.children.filter(':visible').fadeOut(slider.settings.speed).css({zIndex: 0});
                // fade in the newly requested slide
                slider.children.eq(slider.active.index).css('zIndex', 51).fadeIn(slider.settings.speed, function(){
                    $(this).css('zIndex', 50);
                    updateAfterSlideTransition();
                });
                // slider mode is not "fade"
            }else{
                // if adaptiveHeight is true and next height is different from current height, animate to the new height
                if(slider.settings.adaptiveHeight && slider.viewport.height() != getViewportHeight()){
                    slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
                }
                var moveBy = 0;
                var position = {left: 0, top: 0};
                // if carousel and not infinite loop
                if(!slider.settings.infiniteLoop && slider.carousel && slider.active.last){
                    if(slider.settings.mode == 'horizontal'){
                        // get the last child position
                        var lastChild = slider.children.eq(slider.children.length - 1);
                        position = lastChild.position();
                        // calculate the position of the last slide
                        moveBy = slider.viewport.width() - lastChild.width();
                    }else{
                        // get last showing index position
                        var lastShowingIndex = slider.children.length - slider.settings.minSlides;
                        position = slider.children.eq(lastShowingIndex).position();
                    }
                    // horizontal carousel, going previous while on first slide (infiniteLoop mode)
                }else if(slider.carousel && slider.active.last && direction == 'prev'){
                    // get the last child position
                    var eq = slider.settings.moveSlides == 1 ? slider.settings.maxSlides - getMoveBy() : ((getPagerQty() - 1) * getMoveBy()) - (slider.children.length - slider.settings.maxSlides);
                    var lastChild = el.children('.bx-clone').eq(eq);
                    position = lastChild.position();
                    // if infinite loop and "Next" is clicked on the last slide
                }else if(direction == 'next' && slider.active.index == 0){
                    // get the last clone position
                    position = el.find('.bx-clone').eq(slider.settings.maxSlides).position();
                    slider.active.last = false;
                    // normal non-zero requests
                }else if(slideIndex >= 0){
                    var requestEl = slideIndex * getMoveBy();
                    position = slider.children.eq(requestEl).position();
                }
                // plugin values to be animated
                var value = slider.settings.mode == 'horizontal' ? -(position.left - moveBy) : -position.top;
                setPositionProperty(value, 'slide', slider.settings.speed);
            }
        }

        /**
         * Transitions to the next slide in the show
         */
        el.goToNextSlide = function(){
            // if infiniteLoop is false and last page is showing, disregard call
            if (!slider.settings.infiniteLoop && slider.active.last) return;
            var pagerIndex = parseInt(slider.active.index) + 1;
            el.goToSlide(pagerIndex, 'next');
        }

        /**
         * Transitions to the prev slide in the show
         */
        el.goToPrevSlide = function(){
            // if infiniteLoop is false and last page is showing, disregard call
            if (!slider.settings.infiniteLoop && slider.active.index == 0) return;
            var pagerIndex = parseInt(slider.active.index) - 1;
            el.goToSlide(pagerIndex, 'prev');
        }

        /**
         * Starts the auto show
         *
         * @param preventControlUpdate (boolean)
         *  - if true, auto controls state will not be updated
         */
        el.startAuto = function(preventControlUpdate){
            // if an interval already exists, disregard call
            if(slider.interval) return;
            // create an interval
            slider.interval = setInterval(function(){
                slider.settings.autoDirection == 'next' ? el.goToNextSlide() : el.goToPrevSlide();
            }, slider.settings.pause);
            // if auto controls are displayed and preventControlUpdate is not true
            if (slider.settings.autoControls && preventControlUpdate != true) updateAutoControls('stop');
        }

        /**
         * Stops the auto show
         *
         * @param preventControlUpdate (boolean)
         *  - if true, auto controls state will not be updated
         */
        el.stopAuto = function(preventControlUpdate){
            // if no interval exists, disregard call
            if(!slider.interval) return;
            // clear the interval
            clearInterval(slider.interval);
            slider.interval = null;
            // if auto controls are displayed and preventControlUpdate is not true
            if (slider.settings.autoControls && preventControlUpdate != true) updateAutoControls('start');
        }

        /**
         * Returns current slide index (zero-based)
         */
        el.getCurrentSlide = function(){
            return slider.active.index;
        }

        /**
         * Returns number of slides in show
         */
        el.getSlideCount = function(){
            return slider.children.length;
        }

        el.updateDimensions = function(){
            // resize all children in ratio to new screen size
            slider.children.add(el.find('.bx-clone')).width(getSlideWidth());
            // adjust the height
            slider.viewport.css('height', getViewportHeight());
            // update the slide position
            if(!slider.settings.ticker) setSlidePosition();
        }

        /**
         * Destroy the current instance of the slider (revert everything back to original state)
         */
        el.destroySlider = function(){
            // don't do anything if slider has already been destroyed
            if(!slider.initialized) return;
            slider.initialized = false;
            $('.bx-clone', this).remove();
            slider.children.removeAttr('style');
            this.removeAttr('style').unwrap().unwrap();
            if(slider.controls.el) slider.controls.el.remove();
            if(slider.controls.next) slider.controls.next.remove();
            if(slider.controls.prev) slider.controls.prev.remove();
            if(slider.pagerEl) slider.pagerEl.remove();
            $('.bx-caption', this).remove();
            if(slider.controls.autoEl) slider.controls.autoEl.remove();
            clearInterval(slider.interval);
            $(window).unbind('resize', resizeWindow);
        }

        /**
         * Reload the slider (revert all DOM changes, and re-initialize)
         */
        el.reloadSlider = function(settings){
            if (settings != undefined) options = settings;
            el.destroySlider();
            init();
        }

        init();

        // returns the current jQuery object
        return this;
    }

})(jQuery);

/*!
 * jQuery imagesLoaded plugin v2.1.0
 * http://github.com/desandro/imagesloaded
 *
 * MIT License. by Paul Irish et al.
 */

/*jshint curly: true, eqeqeq: true, noempty: true, strict: true, undef: true, browser: true */
/*global jQuery: false */

(function(c,n){var l="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";c.fn.imagesLoaded=function(f){function m(){var b=c(i),a=c(h);d&&(h.length?d.reject(e,b,a):d.resolve(e));c.isFunction(f)&&f.call(g,e,b,a)}function j(b,a){b.src===l||-1!==c.inArray(b,k)||(k.push(b),a?h.push(b):i.push(b),c.data(b,"imagesLoaded",{isBroken:a,src:b.src}),o&&d.notifyWith(c(b),[a,e,c(i),c(h)]),e.length===k.length&&(setTimeout(m),e.unbind(".imagesLoaded")))}var g=this,d=c.isFunction(c.Deferred)?c.Deferred():
    0,o=c.isFunction(d.notify),e=g.find("img").add(g.filter("img")),k=[],i=[],h=[];c.isPlainObject(f)&&c.each(f,function(b,a){if("callback"===b)f=a;else if(d)d[b](a)});e.length?e.bind("load.imagesLoaded error.imagesLoaded",function(b){j(b.target,"error"===b.type)}).each(function(b,a){var d=a.src,e=c.data(a,"imagesLoaded");if(e&&e.src===d)j(a,e.isBroken);else if(a.complete&&a.naturalWidth!==n)j(a,0===a.naturalWidth||0===a.naturalHeight);else if(a.readyState||a.complete)a.src=l,a.src=d}):m();return d?d.promise(g):
    g}})(jQuery);;	/**
	 * jQuery BASE64 functions
	 * 
	 * 	<code>
	 * 		Encodes the given data with base64. 
	 * 		String $.base64Encode ( String str )
	 *		<br />
	 * 		Decodes a base64 encoded data.
	 * 		String $.base64Decode ( String str )
	 * 	</code>
	 * 
	 * Encodes and Decodes the given data in base64.
	 * This encoding is designed to make binary data survive transport through transport layers that are not 8-bit clean, such as mail bodies.
	 * Base64-encoded data takes about 33% more space than the original data. 
	 * This javascript code is used to encode / decode data using base64 (this encoding is designed to make binary data survive transport through transport layers that are not 8-bit clean). Script is fully compatible with UTF-8 encoding. You can use base64 encoded data as simple encryption mechanism.
	 * If you plan using UTF-8 encoding in your project don't forget to set the page encoding to UTF-8 (Content-Type meta tag). 
	 * This function orginally get from the WebToolkit and rewrite for using as the jQuery plugin.
	 * 
	 * Example
	 * 	Code
	 * 		<code>
	 * 			$.base64Encode("I'm Persian."); 
	 * 		</code>
	 * 	Result
	 * 		<code>
	 * 			"SSdtIFBlcnNpYW4u"
	 * 		</code>
	 * 	Code
	 * 		<code>
	 * 			$.base64Decode("SSdtIFBlcnNpYW4u");
	 * 		</code>
	 * 	Result
	 * 		<code>
	 * 			"I'm Persian."
	 * 		</code>
	 * 
	 * @alias Muhammad Hussein Fattahizadeh < muhammad [AT] semnanweb [DOT] com >
	 * @link http://www.semnanweb.com/jquery-plugin/base64.html
	 * @see http://www.webtoolkit.info/
	 * @license http://www.gnu.org/licenses/gpl.html [GNU General Public License]
	 * @param {jQuery} {base64Encode:function(input))
	 * @param {jQuery} {base64Decode:function(input))
	 * @return string
	 */
	
	(function($){
		
		var keyString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
		
		var uTF8Encode = function(string) {
			string = string.replace(/\x0d\x0a/g, "\x0a");
			var output = "";
			for (var n = 0; n < string.length; n++) {
				var c = string.charCodeAt(n);
				if (c < 128) {
					output += String.fromCharCode(c);
				} else if ((c > 127) && (c < 2048)) {
					output += String.fromCharCode((c >> 6) | 192);
					output += String.fromCharCode((c & 63) | 128);
				} else {
					output += String.fromCharCode((c >> 12) | 224);
					output += String.fromCharCode(((c >> 6) & 63) | 128);
					output += String.fromCharCode((c & 63) | 128);
				}
			}
			return output;
		};
		
		var uTF8Decode = function(input) {
			var string = "";
			var i = 0;
			var c = c1 = c2 = 0;
			while ( i < input.length ) {
				c = input.charCodeAt(i);
				if (c < 128) {
					string += String.fromCharCode(c);
					i++;
				} else if ((c > 191) && (c < 224)) {
					c2 = input.charCodeAt(i+1);
					string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
					i += 2;
				} else {
					c2 = input.charCodeAt(i+1);
					c3 = input.charCodeAt(i+2);
					string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
					i += 3;
				}
			}
			return string;
		}
		
		$.extend({
			base64Encode: function(input) {
				var output = "";
				var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
				var i = 0;
				input = uTF8Encode(input);
				while (i < input.length) {
					chr1 = input.charCodeAt(i++);
					chr2 = input.charCodeAt(i++);
					chr3 = input.charCodeAt(i++);
					enc1 = chr1 >> 2;
					enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
					enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
					enc4 = chr3 & 63;
					if (isNaN(chr2)) {
						enc3 = enc4 = 64;
					} else if (isNaN(chr3)) {
						enc4 = 64;
					}
					output = output + keyString.charAt(enc1) + keyString.charAt(enc2) + keyString.charAt(enc3) + keyString.charAt(enc4);
				}
				return output;
			},
			base64Decode: function(input) {
				var output = "";
				var chr1, chr2, chr3;
				var enc1, enc2, enc3, enc4;
				var i = 0;
				input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
				while (i < input.length) {
					enc1 = keyString.indexOf(input.charAt(i++));
					enc2 = keyString.indexOf(input.charAt(i++));
					enc3 = keyString.indexOf(input.charAt(i++));
					enc4 = keyString.indexOf(input.charAt(i++));
					chr1 = (enc1 << 2) | (enc2 >> 4);
					chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
					chr3 = ((enc3 & 3) << 6) | enc4;
					output = output + String.fromCharCode(chr1);
					if (enc3 != 64) {
						output = output + String.fromCharCode(chr2);
					}
					if (enc4 != 64) {
						output = output + String.fromCharCode(chr3);
					}
				}
				output = uTF8Decode(output);
				return output;
			}
		});
	})(jQuery);;
(function($){$.organicTabs=function(el,options){var base=this;base.$el=$(el);base.$nav=base.$el.find(".nav");base.init=function(){base.options=$.extend({},$.organicTabs.defaultOptions,options);$(".hide").css({"position":"relative","top":0,"left":0,"display":"none"});base.$nav.delegate("a","click",function(){var curList=base.$el.find("a.current").attr("href").substring(1),$newList=$(this),listID=$newList.attr("href").substring(1),$allListWrap=base.$el.find(".list-wrap"),curListHeight=$allListWrap.height();$allListWrap.height(curListHeight);if((listID!=curList)&&(base.$el.find(":animated").length==0)){base.$el.find("#"+curList).fadeOut(base.options.speed,function(){base.$el.find("#"+listID).fadeIn(base.options.speed);var newHeight=base.$el.find("#"+listID).height();$allListWrap.animate({height:newHeight});base.$el.find(".nav a").removeClass("current");$newList.addClass("current");});}
return false;});};base.init();};$.organicTabs.defaultOptions={"speed":300};$.fn.organicTabs=function(options){return this.each(function(){(new $.organicTabs(this,options));});};$(function(){$("#box-single").organicTabs({"speed":200});});$(function(){$("#tab_rank_nominate").organicTabs({"speed":300});$('#scrollbar2').tinyscrollbar();$('#scrollbar3').tinyscrollbar();$('#nominate').hide();});})(jQuery);;
if(typeof jwplayer=="undefined"){var jwplayer=function(a){if(jwplayer.api){return jwplayer.api.selectPlayer(a)}};var $jw=jwplayer;jwplayer.version="5.8.2011";jwplayer.vid=document.createElement("video");jwplayer.audio=document.createElement("audio");jwplayer.source=document.createElement("source");(function(b){b.utils=function(){};b.utils.typeOf=function(d){var c=typeof d;if(c==="object"){if(d){if(d instanceof Array){c="array"}}else{c="null"}}return c};b.utils.extend=function(){var c=b.utils.extend["arguments"];if(c.length>1){for(var e=1;e<c.length;e++){for(var d in c[e]){c[0][d]=c[e][d]}}return c[0]}return null};b.utils.clone=function(f){var c;var d=b.utils.clone["arguments"];if(d.length==1){switch(b.utils.typeOf(d[0])){case"object":c={};for(var e in d[0]){c[e]=b.utils.clone(d[0][e])}break;case"array":c=[];for(var e in d[0]){c[e]=b.utils.clone(d[0][e])}break;default:return d[0];break}}return c};b.utils.extension=function(c){if(!c){return""}c=c.substring(c.lastIndexOf("/")+1,c.length);c=c.split("?")[0];if(c.lastIndexOf(".")>-1){return c.substr(c.lastIndexOf(".")+1,c.length).toLowerCase()}return};b.utils.html=function(c,d){c.innerHTML=d};b.utils.wrap=function(c,d){if(c.parentNode){c.parentNode.replaceChild(d,c)}d.appendChild(c)};b.utils.ajax=function(g,f,c){var e;if(window.XMLHttpRequest){e=new XMLHttpRequest()}else{e=new ActiveXObject("Microsoft.XMLHTTP")}e.onreadystatechange=function(){if(e.readyState===4){if(e.status===200){if(f){if(!b.utils.exists(e.responseXML)){try{if(window.DOMParser){var h=(new DOMParser()).parseFromString(e.responseText,"text/xml");if(h){e=b.utils.extend({},e,{responseXML:h})}}else{h=new ActiveXObject("Microsoft.XMLDOM");h.async="false";h.loadXML(e.responseText);e=b.utils.extend({},e,{responseXML:h})}}catch(j){if(c){c(g)}}}f(e)}}else{if(c){c(g)}}}};try{e.open("GET",g,true);e.send(null)}catch(d){if(c){c(g)}}return e};b.utils.load=function(d,e,c){d.onreadystatechange=function(){if(d.readyState===4){if(d.status===200){if(e){e()}}else{if(c){c()}}}}};b.utils.find=function(d,c){return d.getElementsByTagName(c)};b.utils.append=function(c,d){c.appendChild(d)};b.utils.isIE=function(){return((!+"\v1")||(typeof window.ActiveXObject!="undefined"))};b.utils.userAgentMatch=function(d){var c=navigator.userAgent.toLowerCase();return(c.match(d)!==null)};b.utils.isIOS=function(){return b.utils.userAgentMatch(/iP(hone|ad|od)/i)};b.utils.isIPad=function(){return b.utils.userAgentMatch(/iPad/i)};b.utils.isIPod=function(){return b.utils.userAgentMatch(/iP(hone|od)/i)};b.utils.isAndroid=function(){return b.utils.userAgentMatch(/android/i)};b.utils.isLegacyAndroid=function(){return b.utils.userAgentMatch(/android 2.[012]/i)};b.utils.isBlackberry=function(){return b.utils.userAgentMatch(/blackberry/i)};b.utils.isMobile=function(){return b.utils.isIOS()};b.utils.getFirstPlaylistItemFromConfig=function(c){var d={};var e;if(c.playlist&&c.playlist.length){e=c.playlist[0]}else{e=c}d.file=e.file;d.levels=e.levels;d.streamer=e.streamer;d.playlistfile=e.playlistfile;d.provider=e.provider;if(!d.provider){if(d.file&&(d.file.toLowerCase().indexOf("youtube.com")>-1||d.file.toLowerCase().indexOf("youtu.be")>-1)){d.provider="youtube"}if(d.streamer&&d.streamer.toLowerCase().indexOf("rtmp://")==0){d.provider="rtmp"}if(e.type){d.provider=e.type.toLowerCase()}}if(d.provider=="audio"){d.provider="sound"}return d};b.utils.getOuterHTML=function(c){if(c.outerHTML){return c.outerHTML}else{try{return new XMLSerializer().serializeToString(c)}catch(d){return""}}};b.utils.setOuterHTML=function(f,e){if(f.outerHTML){f.outerHTML=e}else{var g=document.createElement("div");g.innerHTML=e;var c=document.createRange();c.selectNodeContents(g);var d=c.extractContents();f.parentNode.insertBefore(d,f);f.parentNode.removeChild(f)}};b.utils.hasFlash=function(){if(typeof navigator.plugins!="undefined"&&typeof navigator.plugins["Shockwave Flash"]!="undefined"){return true}if(typeof window.ActiveXObject!="undefined"){try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash");return true}catch(c){}}return false};b.utils.getPluginName=function(c){if(c.lastIndexOf("/")>=0){c=c.substring(c.lastIndexOf("/")+1,c.length)}if(c.lastIndexOf("-")>=0){c=c.substring(0,c.lastIndexOf("-"))}if(c.lastIndexOf(".swf")>=0){c=c.substring(0,c.lastIndexOf(".swf"))}if(c.lastIndexOf(".js")>=0){c=c.substring(0,c.lastIndexOf(".js"))}return c};b.utils.getPluginVersion=function(c){if(c.lastIndexOf("-")>=0){if(c.lastIndexOf(".js")>=0){return c.substring(c.lastIndexOf("-")+1,c.lastIndexOf(".js"))}else{if(c.lastIndexOf(".swf")>=0){return c.substring(c.lastIndexOf("-")+1,c.lastIndexOf(".swf"))}else{return c.substring(c.lastIndexOf("-")+1)}}}return""};b.utils.getAbsolutePath=function(j,h){if(!b.utils.exists(h)){h=document.location.href}if(!b.utils.exists(j)){return undefined}if(a(j)){return j}var k=h.substring(0,h.indexOf("://")+3);var g=h.substring(k.length,h.indexOf("/",k.length+1));var d;if(j.indexOf("/")===0){d=j.split("/")}else{var e=h.split("?")[0];e=e.substring(k.length+g.length+1,e.lastIndexOf("/"));d=e.split("/").concat(j.split("/"))}var c=[];for(var f=0;f<d.length;f++){if(!d[f]||!b.utils.exists(d[f])||d[f]=="."){continue}else{if(d[f]==".."){c.pop()}else{c.push(d[f])}}}return k+g+"/"+c.join("/")};function a(d){if(!b.utils.exists(d)){return}var e=d.indexOf("://");var c=d.indexOf("?");return(e>0&&(c<0||(c>e)))}b.utils.pluginPathType={ABSOLUTE:"ABSOLUTE",RELATIVE:"RELATIVE",CDN:"CDN"};b.utils.getPluginPathType=function(d){if(typeof d!="string"){return}d=d.split("?")[0];var e=d.indexOf("://");if(e>0){return b.utils.pluginPathType.ABSOLUTE}var c=d.indexOf("/");var f=b.utils.extension(d);if(e<0&&c<0&&(!f||!isNaN(f))){return b.utils.pluginPathType.CDN}return b.utils.pluginPathType.RELATIVE};b.utils.mapEmpty=function(c){for(var d in c){return false}return true};b.utils.mapLength=function(d){var c=0;for(var e in d){c++}return c};b.utils.log=function(d,c){if(typeof console!="undefined"&&typeof console.log!="undefined"){if(c){console.log(d,c)}else{console.log(d)}}};b.utils.css=function(d,g,c){if(b.utils.exists(d)){for(var e in g){try{if(typeof g[e]==="undefined"){continue}else{if(typeof g[e]=="number"&&!(e=="zIndex"||e=="opacity")){if(isNaN(g[e])){continue}if(e.match(/color/i)){g[e]="#"+b.utils.strings.pad(g[e].toString(16),6)}else{g[e]=Math.ceil(g[e])+"px"}}}d.style[e]=g[e]}catch(f){}}}};b.utils.isYouTube=function(c){return(c.indexOf("youtube.com")>-1||c.indexOf("youtu.be")>-1)};b.utils.transform=function(e,d,c,g,h){if(!b.utils.exists(d)){d=1}if(!b.utils.exists(c)){c=1}if(!b.utils.exists(g)){g=0}if(!b.utils.exists(h)){h=0}if(d==1&&c==1&&g==0&&h==0){e.style.webkitTransform="";e.style.MozTransform="";e.style.OTransform=""}else{var f="scale("+d+","+c+") translate("+g+"px,"+h+"px)";e.style.webkitTransform=f;e.style.MozTransform=f;e.style.OTransform=f}};b.utils.stretch=function(j,p,o,f,m,g){if(typeof o=="undefined"||typeof f=="undefined"||typeof m=="undefined"||typeof g=="undefined"){return}var d=o/m;var e=f/g;var l=0;var k=0;var c={};if(p.parentElement){p.parentElement.style.overflow="hidden"}b.utils.transform(p);switch(j.toUpperCase()){case b.utils.stretching.NONE:c.width=m;c.height=g;c.top=(f-c.height)/2;c.left=(o-c.width)/2;break;case b.utils.stretching.UNIFORM:if(d>e){c.width=m*e;c.height=g*e}else{c.width=m*d;c.height=g*d}c.top=(f-c.height)/2;c.left=(o-c.width)/2;break;case b.utils.stretching.FILL:if(d>e){c.width=m*d;c.height=g*d}else{c.width=m*e;c.height=g*e}c.top=(f-c.height)/2;c.left=(o-c.width)/2;break;case b.utils.stretching.EXACTFIT:c.width=m;c.height=g;var n=Math.round((m/2)*(1-1/d));var h=Math.round((g/2)*(1-1/e));b.utils.transform(p,d,e,n,h);c.top=c.left=0;break;default:break}b.utils.css(p,c)};b.utils.stretching={NONE:"NONE",FILL:"FILL",UNIFORM:"UNIFORM",EXACTFIT:"EXACTFIT"};b.utils.deepReplaceKeyName=function(h,e,c){switch(b.utils.typeOf(h)){case"array":for(var g=0;g<h.length;g++){h[g]=b.utils.deepReplaceKeyName(h[g],e,c)}break;case"object":for(var f in h){var d=f.replace(new RegExp(e,"g"),c);h[d]=b.utils.deepReplaceKeyName(h[f],e,c);if(f!=d){delete h[f]}}break}return h};b.utils.isInArray=function(e,d){if(!(e)||!(e instanceof Array)){return false}for(var c=0;c<e.length;c++){if(d===e[c]){return true}}return false};b.utils.exists=function(c){switch(typeof(c)){case"string":return(c.length>0);break;case"object":return(c!==null);case"undefined":return false}return true};b.utils.empty=function(c){if(typeof c.hasChildNodes=="function"){while(c.hasChildNodes()){c.removeChild(c.firstChild)}}};b.utils.parseDimension=function(c){if(typeof c=="string"){if(c===""){return 0}else{if(c.lastIndexOf("%")>-1){return c}else{return parseInt(c.replace("px",""),10)}}}return c};b.utils.getDimensions=function(c){if(c&&c.style){return{x:b.utils.parseDimension(c.style.left),y:b.utils.parseDimension(c.style.top),width:b.utils.parseDimension(c.style.width),height:b.utils.parseDimension(c.style.height)}}else{return{}}};b.utils.getElementWidth=function(c){if(!c){return null}else{if(c==document.body){return b.utils.parentNode(c).clientWidth}else{if(c.clientWidth>0){return c.clientWidth}else{if(c.style){return b.utils.parseDimension(c.style.width)}else{return null}}}}};b.utils.getElementHeight=function(c){if(!c){return null}else{if(c==document.body){return b.utils.parentNode(c).clientHeight}else{if(c.clientHeight>0){return c.clientHeight}else{if(c.style){return b.utils.parseDimension(c.style.height)}else{return null}}}}};b.utils.timeFormat=function(c){str="00:00";if(c>0){str=Math.floor(c/60)<10?"0"+Math.floor(c/60)+":":Math.floor(c/60)+":";str+=Math.floor(c%60)<10?"0"+Math.floor(c%60):Math.floor(c%60)}return str};b.utils.useNativeFullscreen=function(){return(navigator&&navigator.vendor&&navigator.vendor.indexOf("Apple")==0)};b.utils.parentNode=function(c){if(!c){return docuemnt.body}else{if(c.parentNode){return c.parentNode}else{if(c.parentElement){return c.parentElement}else{return c}}}};b.utils.getBoundingClientRect=function(c){if(typeof c.getBoundingClientRect=="function"){return c.getBoundingClientRect()}else{return{left:c.offsetLeft+document.body.scrollLeft,top:c.offsetTop+document.body.scrollTop,width:c.offsetWidth,height:c.offsetHeight}}}})(jwplayer);(function(a){a.events=function(){};a.events.COMPLETE="COMPLETE";a.events.ERROR="ERROR"})(jwplayer);(function(jwplayer){jwplayer.events.eventdispatcher=function(debug){var _debug=debug;var _listeners;var _globallisteners;this.resetEventListeners=function(){_listeners={};_globallisteners=[]};this.resetEventListeners();this.addEventListener=function(type,listener,count){try{if(!jwplayer.utils.exists(_listeners[type])){_listeners[type]=[]}if(typeof(listener)=="string"){eval("listener = "+listener)}_listeners[type].push({listener:listener,count:count})}catch(err){jwplayer.utils.log("error",err)}return false};this.removeEventListener=function(type,listener){if(!_listeners[type]){return}try{for(var listenerIndex=0;listenerIndex<_listeners[type].length;listenerIndex++){if(_listeners[type][listenerIndex].listener.toString()==listener.toString()){_listeners[type].splice(listenerIndex,1);break}}}catch(err){jwplayer.utils.log("error",err)}return false};this.addGlobalListener=function(listener,count){try{if(typeof(listener)=="string"){eval("listener = "+listener)}_globallisteners.push({listener:listener,count:count})}catch(err){jwplayer.utils.log("error",err)}return false};this.removeGlobalListener=function(listener){if(!_globallisteners[type]){return}try{for(var globalListenerIndex=0;globalListenerIndex<_globallisteners.length;globalListenerIndex++){if(_globallisteners[globalListenerIndex].listener.toString()==listener.toString()){_globallisteners.splice(globalListenerIndex,1);break}}}catch(err){jwplayer.utils.log("error",err)}return false};this.sendEvent=function(type,data){if(!jwplayer.utils.exists(data)){data={}}if(_debug){jwplayer.utils.log(type,data)}if(typeof _listeners[type]!="undefined"){for(var listenerIndex=0;listenerIndex<_listeners[type].length;listenerIndex++){try{_listeners[type][listenerIndex].listener(data)}catch(err){jwplayer.utils.log("There was an error while handling a listener: "+err.toString(),_listeners[type][listenerIndex].listener)}if(_listeners[type][listenerIndex]){if(_listeners[type][listenerIndex].count===1){delete _listeners[type][listenerIndex]}else{if(_listeners[type][listenerIndex].count>0){_listeners[type][listenerIndex].count=_listeners[type][listenerIndex].count-1}}}}}for(var globalListenerIndex=0;globalListenerIndex<_globallisteners.length;globalListenerIndex++){try{_globallisteners[globalListenerIndex].listener(data)}catch(err){jwplayer.utils.log("There was an error while handling a listener: "+err.toString(),_globallisteners[globalListenerIndex].listener)}if(_globallisteners[globalListenerIndex]){if(_globallisteners[globalListenerIndex].count===1){delete _globallisteners[globalListenerIndex]}else{if(_globallisteners[globalListenerIndex].count>0){_globallisteners[globalListenerIndex].count=_globallisteners[globalListenerIndex].count-1}}}}}}})(jwplayer);(function(a){var b={};a.utils.animations=function(){};a.utils.animations.transform=function(c,d){c.style.webkitTransform=d;c.style.MozTransform=d;c.style.OTransform=d;c.style.msTransform=d};a.utils.animations.transformOrigin=function(c,d){c.style.webkitTransformOrigin=d;c.style.MozTransformOrigin=d;c.style.OTransformOrigin=d;c.style.msTransformOrigin=d};a.utils.animations.rotate=function(c,d){a.utils.animations.transform(c,["rotate(",d,"deg)"].join(""))};a.utils.cancelAnimation=function(c){delete b[c.id]};a.utils.fadeTo=function(m,f,e,j,h,d){if(b[m.id]!=d&&a.utils.exists(d)){return}if(m.style.opacity==f){return}var c=new Date().getTime();if(d>c){setTimeout(function(){a.utils.fadeTo(m,f,e,j,0,d)},d-c)}if(m.style.display=="none"){m.style.display="block"}if(!a.utils.exists(j)){j=m.style.opacity===""?1:m.style.opacity}if(m.style.opacity==f&&m.style.opacity!==""&&a.utils.exists(d)){if(f===0){m.style.display="none"}return}if(!a.utils.exists(d)){d=c;b[m.id]=d}if(!a.utils.exists(h)){h=0}var k=(e>0)?((c-d)/(e*1000)):0;k=k>1?1:k;var l=f-j;var g=j+(k*l);if(g>1){g=1}else{if(g<0){g=0}}m.style.opacity=g;if(h>0){b[m.id]=d+h*1000;a.utils.fadeTo(m,f,e,j,0,b[m.id]);return}setTimeout(function(){a.utils.fadeTo(m,f,e,j,0,d)},10)}})(jwplayer);(function(a){a.utils.arrays=function(){};a.utils.arrays.indexOf=function(c,d){for(var b=0;b<c.length;b++){if(c[b]==d){return b}}return-1};a.utils.arrays.remove=function(c,d){var b=a.utils.arrays.indexOf(c,d);if(b>-1){c.splice(b,1)}}})(jwplayer);(function(a){a.utils.extensionmap={"3gp":{html5:"video/3gpp",flash:"video"},"3gpp":{html5:"video/3gpp"},"3g2":{html5:"video/3gpp2",flash:"video"},"3gpp2":{html5:"video/3gpp2"},flv:{flash:"video"},f4a:{html5:"audio/mp4"},f4b:{html5:"audio/mp4",flash:"video"},f4v:{html5:"video/mp4",flash:"video"},mov:{html5:"video/quicktime",flash:"video"},m4a:{html5:"audio/mp4",flash:"video"},m4b:{html5:"audio/mp4"},m4p:{html5:"audio/mp4"},m4v:{html5:"video/mp4",flash:"video"},mp4:{html5:"video/mp4",flash:"video"},rbs:{flash:"sound"},aac:{html5:"audio/aac",flash:"video"},mp3:{html5:"audio/mp3",flash:"sound"},ogg:{html5:"audio/ogg"},oga:{html5:"audio/ogg"},ogv:{html5:"video/ogg"},webm:{html5:"video/webm"},m3u8:{html5:"audio/x-mpegurl"},gif:{flash:"image"},jpeg:{flash:"image"},jpg:{flash:"image"},swf:{flash:"image"},png:{flash:"image"},wav:{html5:"audio/x-wav"}}})(jwplayer);(function(e){e.utils.mediaparser=function(){};var g={element:{width:"width",height:"height",id:"id","class":"className",name:"name"},media:{src:"file",preload:"preload",autoplay:"autostart",loop:"repeat",controls:"controls"},source:{src:"file",type:"type",media:"media","data-jw-width":"width","data-jw-bitrate":"bitrate"},video:{poster:"image"}};var f={};e.utils.mediaparser.parseMedia=function(j){return d(j)};function c(k,j){if(!e.utils.exists(j)){j=g[k]}else{e.utils.extend(j,g[k])}return j}function d(n,j){if(f[n.tagName.toLowerCase()]&&!e.utils.exists(j)){return f[n.tagName.toLowerCase()](n)}else{j=c("element",j);var o={};for(var k in j){if(k!="length"){var m=n.getAttribute(k);if(e.utils.exists(m)){o[j[k]]=m}}}var l=n.style["#background-color"];if(l&&!(l=="transparent"||l=="rgba(0, 0, 0, 0)")){o.screencolor=l}return o}}function h(n,k){k=c("media",k);var l=[];var j=e.utils.selectors("source",n);for(var m in j){if(!isNaN(m)){l.push(a(j[m]))}}var o=d(n,k);if(e.utils.exists(o.file)){l[0]={file:o.file}}o.levels=l;return o}function a(l,k){k=c("source",k);var j=d(l,k);j.width=j.width?j.width:0;j.bitrate=j.bitrate?j.bitrate:0;return j}function b(l,k){k=c("video",k);var j=h(l,k);return j}f.media=h;f.audio=h;f.source=a;f.video=b})(jwplayer);(function(a){a.utils.loaderstatus={NEW:"NEW",LOADING:"LOADING",ERROR:"ERROR",COMPLETE:"COMPLETE"};a.utils.scriptloader=function(c){var d=a.utils.loaderstatus.NEW;var b=new a.events.eventdispatcher();a.utils.extend(this,b);this.load=function(){if(d==a.utils.loaderstatus.NEW){d=a.utils.loaderstatus.LOADING;var e=document.createElement("script");e.onload=function(f){d=a.utils.loaderstatus.COMPLETE;b.sendEvent(a.events.COMPLETE)};e.onerror=function(f){d=a.utils.loaderstatus.ERROR;b.sendEvent(a.events.ERROR)};e.onreadystatechange=function(){if(e.readyState=="loaded"||e.readyState=="complete"){d=a.utils.loaderstatus.COMPLETE;b.sendEvent(a.events.COMPLETE)}};document.getElementsByTagName("head")[0].appendChild(e);e.src=c}};this.getStatus=function(){return d}}})(jwplayer);(function(a){a.utils.selectors=function(b,e){if(!a.utils.exists(e)){e=document}b=a.utils.strings.trim(b);var c=b.charAt(0);if(c=="#"){return e.getElementById(b.substr(1))}else{if(c=="."){if(e.getElementsByClassName){return e.getElementsByClassName(b.substr(1))}else{return a.utils.selectors.getElementsByTagAndClass("*",b.substr(1))}}else{if(b.indexOf(".")>0){var d=b.split(".");return a.utils.selectors.getElementsByTagAndClass(d[0],d[1])}else{return e.getElementsByTagName(b)}}}return null};a.utils.selectors.getElementsByTagAndClass=function(e,h,g){var j=[];if(!a.utils.exists(g)){g=document}var f=g.getElementsByTagName(e);for(var d=0;d<f.length;d++){if(a.utils.exists(f[d].className)){var c=f[d].className.split(" ");for(var b=0;b<c.length;b++){if(c[b]==h){j.push(f[d])}}}}return j}})(jwplayer);(function(a){a.utils.strings=function(){};a.utils.strings.trim=function(b){return b.replace(/^\s*/,"").replace(/\s*$/,"")};a.utils.strings.pad=function(c,d,b){if(!b){b="0"}while(c.length<d){c=b+c}return c};a.utils.strings.serialize=function(b){if(b==null){return null}else{if(b=="true"){return true}else{if(b=="false"){return false}else{if(isNaN(Number(b))||b.length>5||b.length==0){return b}else{return Number(b)}}}}};a.utils.strings.seconds=function(d){d=d.replace(",",".");var b=d.split(":");var c=0;if(d.substr(-1)=="s"){c=Number(d.substr(0,d.length-1))}else{if(d.substr(-1)=="m"){c=Number(d.substr(0,d.length-1))*60}else{if(d.substr(-1)=="h"){c=Number(d.substr(0,d.length-1))*3600}else{if(b.length>1){c=Number(b[b.length-1]);c+=Number(b[b.length-2])*60;if(b.length==3){c+=Number(b[b.length-3])*3600}}else{c=Number(d)}}}}return c};a.utils.strings.xmlAttribute=function(b,c){for(var d=0;d<b.attributes.length;d++){if(b.attributes[d].name&&b.attributes[d].name.toLowerCase()==c.toLowerCase()){return b.attributes[d].value.toString()}}return""};a.utils.strings.jsonToString=function(f){var h=h||{};if(h&&h.stringify){return h.stringify(f)}var c=typeof(f);if(c!="object"||f===null){if(c=="string"){f='"'+f.replace(/"/g,'\\"')+'"'}else{return String(f)}}else{var g=[],b=(f&&f.constructor==Array);for(var d in f){var e=f[d];switch(typeof(e)){case"string":e='"'+e.replace(/"/g,'\\"')+'"';break;case"object":if(a.utils.exists(e)){e=a.utils.strings.jsonToString(e)}break}if(b){if(typeof(e)!="function"){g.push(String(e))}}else{if(typeof(e)!="function"){g.push('"'+d+'":'+String(e))}}}if(b){return"["+String(g)+"]"}else{return"{"+String(g)+"}"}}}})(jwplayer);(function(c){var d=new RegExp(/^(#|0x)[0-9a-fA-F]{3,6}/);c.utils.typechecker=function(g,f){f=!c.utils.exists(f)?b(g):f;return e(g,f)};function b(f){var g=["true","false","t","f"];if(g.toString().indexOf(f.toLowerCase().replace(" ",""))>=0){return"boolean"}else{if(d.test(f)){return"color"}else{if(!isNaN(parseInt(f,10))&&parseInt(f,10).toString().length==f.length){return"integer"}else{if(!isNaN(parseFloat(f))&&parseFloat(f).toString().length==f.length){return"float"}}}}return"string"}function e(g,f){if(!c.utils.exists(f)){return g}switch(f){case"color":if(g.length>0){return a(g)}return null;case"integer":return parseInt(g,10);case"float":return parseFloat(g);case"boolean":if(g.toLowerCase()=="true"){return true}else{if(g=="1"){return true}}return false}return g}function a(f){switch(f.toLowerCase()){case"blue":return parseInt("0000FF",16);case"green":return parseInt("00FF00",16);case"red":return parseInt("FF0000",16);case"cyan":return parseInt("00FFFF",16);case"magenta":return parseInt("FF00FF",16);case"yellow":return parseInt("FFFF00",16);case"black":return parseInt("000000",16);case"white":return parseInt("FFFFFF",16);default:f=f.replace(/(#|0x)?([0-9A-F]{3,6})$/gi,"$2");if(f.length==3){f=f.charAt(0)+f.charAt(0)+f.charAt(1)+f.charAt(1)+f.charAt(2)+f.charAt(2)}return parseInt(f,16)}return parseInt("000000",16)}})(jwplayer);(function(a){a.utils.parsers=function(){};a.utils.parsers.localName=function(b){if(!b){return""}else{if(b.localName){return b.localName}else{if(b.baseName){return b.baseName}else{return""}}}};a.utils.parsers.textContent=function(b){if(!b){return""}else{if(b.textContent){return b.textContent}else{if(b.text){return b.text}else{return""}}}}})(jwplayer);(function(a){a.utils.parsers.jwparser=function(){};a.utils.parsers.jwparser.PREFIX="jwplayer";a.utils.parsers.jwparser.parseEntry=function(c,d){for(var b=0;b<c.childNodes.length;b++){if(c.childNodes[b].prefix==a.utils.parsers.jwparser.PREFIX){d[a.utils.parsers.localName(c.childNodes[b])]=a.utils.strings.serialize(a.utils.parsers.textContent(c.childNodes[b]))}if(!d.file&&String(d.link).toLowerCase().indexOf("youtube")>-1){d.file=d.link}}return d};a.utils.parsers.jwparser.getProvider=function(c){if(c.type){return c.type}else{if(c.file.indexOf("youtube.com/w")>-1||c.file.indexOf("youtube.com/v")>-1||c.file.indexOf("youtu.be/")>-1){return"youtube"}else{if(c.streamer&&c.streamer.indexOf("rtmp")==0){return"rtmp"}else{if(c.streamer&&c.streamer.indexOf("http")==0){return"http"}else{var b=a.utils.strings.extension(c.file);if(extensions.hasOwnProperty(b)){return extensions[b]}}}}}return""}})(jwplayer);(function(a){a.utils.parsers.mediaparser=function(){};a.utils.parsers.mediaparser.PREFIX="media";a.utils.parsers.mediaparser.parseGroup=function(d,f){var e=false;for(var c=0;c<d.childNodes.length;c++){if(d.childNodes[c].prefix==a.utils.parsers.mediaparser.PREFIX){if(!a.utils.parsers.localName(d.childNodes[c])){continue}switch(a.utils.parsers.localName(d.childNodes[c]).toLowerCase()){case"content":if(!e){f.file=a.utils.strings.xmlAttribute(d.childNodes[c],"url")}if(a.utils.strings.xmlAttribute(d.childNodes[c],"duration")){f.duration=a.utils.strings.seconds(a.utils.strings.xmlAttribute(d.childNodes[c],"duration"))}if(a.utils.strings.xmlAttribute(d.childNodes[c],"start")){f.start=a.utils.strings.seconds(a.utils.strings.xmlAttribute(d.childNodes[c],"start"))}if(d.childNodes[c].childNodes&&d.childNodes[c].childNodes.length>0){f=a.utils.parsers.mediaparser.parseGroup(d.childNodes[c],f)}if(a.utils.strings.xmlAttribute(d.childNodes[c],"width")||a.utils.strings.xmlAttribute(d.childNodes[c],"bitrate")||a.utils.strings.xmlAttribute(d.childNodes[c],"url")){if(!f.levels){f.levels=[]}f.levels.push({width:a.utils.strings.xmlAttribute(d.childNodes[c],"width"),bitrate:a.utils.strings.xmlAttribute(d.childNodes[c],"bitrate"),file:a.utils.strings.xmlAttribute(d.childNodes[c],"url")})}break;case"title":f.title=a.utils.parsers.textContent(d.childNodes[c]);break;case"description":f.description=a.utils.parsers.textContent(d.childNodes[c]);break;case"keywords":f.tags=a.utils.parsers.textContent(d.childNodes[c]);break;case"thumbnail":f.image=a.utils.strings.xmlAttribute(d.childNodes[c],"url");break;case"credit":f.author=a.utils.parsers.textContent(d.childNodes[c]);break;case"player":var b=d.childNodes[c].url;if(b.indexOf("youtube.com")>=0||b.indexOf("youtu.be")>=0){e=true;f.file=a.utils.strings.xmlAttribute(d.childNodes[c],"url")}break;case"group":a.utils.parsers.mediaparser.parseGroup(d.childNodes[c],f);break}}}return f}})(jwplayer);(function(b){b.utils.parsers.rssparser=function(){};b.utils.parsers.rssparser.parse=function(f){var c=[];for(var e=0;e<f.childNodes.length;e++){if(b.utils.parsers.localName(f.childNodes[e]).toLowerCase()=="channel"){for(var d=0;d<f.childNodes[e].childNodes.length;d++){if(b.utils.parsers.localName(f.childNodes[e].childNodes[d]).toLowerCase()=="item"){c.push(a(f.childNodes[e].childNodes[d]))}}}}return c};function a(d){var e={};for(var c=0;c<d.childNodes.length;c++){if(!b.utils.parsers.localName(d.childNodes[c])){continue}switch(b.utils.parsers.localName(d.childNodes[c]).toLowerCase()){case"enclosure":e.file=b.utils.strings.xmlAttribute(d.childNodes[c],"url");break;case"title":e.title=b.utils.parsers.textContent(d.childNodes[c]);break;case"pubdate":e.date=b.utils.parsers.textContent(d.childNodes[c]);break;case"description":e.description=b.utils.parsers.textContent(d.childNodes[c]);break;case"link":e.link=b.utils.parsers.textContent(d.childNodes[c]);break;case"category":if(e.tags){e.tags+=b.utils.parsers.textContent(d.childNodes[c])}else{e.tags=b.utils.parsers.textContent(d.childNodes[c])}break}}e=b.utils.parsers.mediaparser.parseGroup(d,e);e=b.utils.parsers.jwparser.parseEntry(d,e);return new b.html5.playlistitem(e)}})(jwplayer);(function(a){var c={};var b={};a.plugins=function(){};a.plugins.loadPlugins=function(e,d){b[e]=new a.plugins.pluginloader(new a.plugins.model(c),d);return b[e]};a.plugins.registerPlugin=function(h,f,e){var d=a.utils.getPluginName(h);if(c[d]){c[d].registerPlugin(h,f,e)}else{a.utils.log("A plugin ("+h+") was registered with the player that was not loaded. Please check your configuration.");for(var g in b){b[g].pluginFailed()}}}})(jwplayer);(function(a){a.plugins.model=function(b){this.addPlugin=function(c){var d=a.utils.getPluginName(c);if(!b[d]){b[d]=new a.plugins.plugin(c)}return b[d]}}})(jwplayer);(function(a){a.plugins.pluginmodes={FLASH:"FLASH",JAVASCRIPT:"JAVASCRIPT",HYBRID:"HYBRID"};a.plugins.plugin=function(b){var d="http://plugins.longtailvideo.com";var j=a.utils.loaderstatus.NEW;var k;var h;var l;var c=new a.events.eventdispatcher();a.utils.extend(this,c);function e(){switch(a.utils.getPluginPathType(b)){case a.utils.pluginPathType.ABSOLUTE:return b;case a.utils.pluginPathType.RELATIVE:return a.utils.getAbsolutePath(b,window.location.href);case a.utils.pluginPathType.CDN:var o=a.utils.getPluginName(b);var n=a.utils.getPluginVersion(b);var m=(window.location.href.indexOf("https://")==0)?d.replace("http://","https://secure"):d;return m+"/"+a.version.split(".")[0]+"/"+o+"/"+o+(n!==""?("-"+n):"")+".js"}}function g(m){l=setTimeout(function(){j=a.utils.loaderstatus.COMPLETE;c.sendEvent(a.events.COMPLETE)},1000)}function f(m){j=a.utils.loaderstatus.ERROR;c.sendEvent(a.events.ERROR)}this.load=function(){if(j==a.utils.loaderstatus.NEW){if(b.lastIndexOf(".swf")>0){k=b;j=a.utils.loaderstatus.COMPLETE;c.sendEvent(a.events.COMPLETE);return}j=a.utils.loaderstatus.LOADING;var m=new a.utils.scriptloader(e());m.addEventListener(a.events.COMPLETE,g);m.addEventListener(a.events.ERROR,f);m.load()}};this.registerPlugin=function(o,n,m){if(l){clearTimeout(l);l=undefined}if(n&&m){k=m;h=n}else{if(typeof n=="string"){k=n}else{if(typeof n=="function"){h=n}else{if(!n&&!m){k=o}}}}j=a.utils.loaderstatus.COMPLETE;c.sendEvent(a.events.COMPLETE)};this.getStatus=function(){return j};this.getPluginName=function(){return a.utils.getPluginName(b)};this.getFlashPath=function(){if(k){switch(a.utils.getPluginPathType(k)){case a.utils.pluginPathType.ABSOLUTE:return k;case a.utils.pluginPathType.RELATIVE:if(b.lastIndexOf(".swf")>0){return a.utils.getAbsolutePath(k,window.location.href)}return a.utils.getAbsolutePath(k,e());case a.utils.pluginPathType.CDN:if(k.indexOf("-")>-1){return k+"h"}return k+"-h"}}return null};this.getJS=function(){return h};this.getPluginmode=function(){if(typeof k!="undefined"&&typeof h!="undefined"){return a.plugins.pluginmodes.HYBRID}else{if(typeof k!="undefined"){return a.plugins.pluginmodes.FLASH}else{if(typeof h!="undefined"){return a.plugins.pluginmodes.JAVASCRIPT}}}};this.getNewInstance=function(n,m,o){return new h(n,m,o)};this.getURL=function(){return b}}})(jwplayer);(function(a){a.plugins.pluginloader=function(h,e){var g={};var k=a.utils.loaderstatus.NEW;var d=false;var b=false;var c=new a.events.eventdispatcher();a.utils.extend(this,c);function f(){if(!b){b=true;k=a.utils.loaderstatus.COMPLETE;c.sendEvent(a.events.COMPLETE)}}function j(){if(!b){var m=0;for(plugin in g){var l=g[plugin].getStatus();if(l==a.utils.loaderstatus.LOADING||l==a.utils.loaderstatus.NEW){m++}}if(m==0){f()}}}this.setupPlugins=function(n,l,s){var m={length:0,plugins:{}};var p={length:0,plugins:{}};for(var o in g){var q=g[o].getPluginName();if(g[o].getFlashPath()){m.plugins[g[o].getFlashPath()]=l.plugins[o];m.plugins[g[o].getFlashPath()].pluginmode=g[o].getPluginmode();m.length++}if(g[o].getJS()){var r=document.createElement("div");r.id=n.id+"_"+q;r.style.position="absolute";r.style.zIndex=p.length+10;p.plugins[q]=g[o].getNewInstance(n,l.plugins[o],r);p.length++;if(typeof p.plugins[q].resize!="undefined"){n.onReady(s(p.plugins[q],r,true));n.onResize(s(p.plugins[q],r))}}}n.plugins=p.plugins;return m};this.load=function(){k=a.utils.loaderstatus.LOADING;d=true;for(var l in e){if(a.utils.exists(l)){g[l]=h.addPlugin(l);g[l].addEventListener(a.events.COMPLETE,j);g[l].addEventListener(a.events.ERROR,j)}}for(l in g){g[l].load()}d=false;j()};this.pluginFailed=function(){f()};this.getStatus=function(){return k}}})(jwplayer);(function(b){var a=[];b.api=function(d){this.container=d;this.id=d.id;var n={};var s={};var q={};var c=[];var h=undefined;var l=false;var j=[];var p=b.utils.getOuterHTML(d);var r={};var k={};this.getBuffer=function(){return this.callInternal("jwGetBuffer")};this.getContainer=function(){return this.container};function e(u,t){return function(z,v,w,x){if(u.renderingMode=="flash"||u.renderingMode=="html5"){var y;if(v){k[z]=v;y="jwplayer('"+u.id+"').callback('"+z+"')"}else{if(!v&&k[z]){delete k[z]}}h.jwDockSetButton(z,y,w,x)}return t}}this.getPlugin=function(t){var v=this;var u={};if(t=="dock"){return b.utils.extend(u,{setButton:e(v,u),show:function(){v.callInternal("jwDockShow");return u},hide:function(){v.callInternal("jwDockHide");return u},onShow:function(w){v.componentListener("dock",b.api.events.JWPLAYER_COMPONENT_SHOW,w);return u},onHide:function(w){v.componentListener("dock",b.api.events.JWPLAYER_COMPONENT_HIDE,w);return u}})}else{if(t=="controlbar"){return b.utils.extend(u,{show:function(){v.callInternal("jwControlbarShow");return u},hide:function(){v.callInternal("jwControlbarHide");return u},onShow:function(w){v.componentListener("controlbar",b.api.events.JWPLAYER_COMPONENT_SHOW,w);return u},onHide:function(w){v.componentListener("controlbar",b.api.events.JWPLAYER_COMPONENT_HIDE,w);return u}})}else{if(t=="display"){return b.utils.extend(u,{show:function(){v.callInternal("jwDisplayShow");return u},hide:function(){v.callInternal("jwDisplayHide");return u},onShow:function(w){v.componentListener("display",b.api.events.JWPLAYER_COMPONENT_SHOW,w);return u},onHide:function(w){v.componentListener("display",b.api.events.JWPLAYER_COMPONENT_HIDE,w);return u}})}else{return this.plugins[t]}}}};this.callback=function(t){if(k[t]){return k[t]()}};this.getDuration=function(){return this.callInternal("jwGetDuration")};this.getFullscreen=function(){return this.callInternal("jwGetFullscreen")};this.getHeight=function(){return this.callInternal("jwGetHeight")};this.getLockState=function(){return this.callInternal("jwGetLockState")};this.getMeta=function(){return this.getItemMeta()};this.getMute=function(){return this.callInternal("jwGetMute")};this.getPlaylist=function(){var u=this.callInternal("jwGetPlaylist");if(this.renderingMode=="flash"){b.utils.deepReplaceKeyName(u,"__dot__",".")}for(var t=0;t<u.length;t++){if(!b.utils.exists(u[t].index)){u[t].index=t}}return u};this.getPlaylistItem=function(t){if(!b.utils.exists(t)){t=this.getCurrentItem()}return this.getPlaylist()[t]};this.getPosition=function(){return this.callInternal("jwGetPosition")};this.getRenderingMode=function(){return this.renderingMode};this.getState=function(){return this.callInternal("jwGetState")};this.getVolume=function(){return this.callInternal("jwGetVolume")};this.getWidth=function(){return this.callInternal("jwGetWidth")};this.setFullscreen=function(t){if(!b.utils.exists(t)){this.callInternal("jwSetFullscreen",!this.callInternal("jwGetFullscreen"))}else{this.callInternal("jwSetFullscreen",t)}return this};this.setMute=function(t){if(!b.utils.exists(t)){this.callInternal("jwSetMute",!this.callInternal("jwGetMute"))}else{this.callInternal("jwSetMute",t)}return this};this.lock=function(){return this};this.unlock=function(){return this};this.load=function(t){this.callInternal("jwLoad",t);return this};this.playlistItem=function(t){this.callInternal("jwPlaylistItem",t);return this};this.playlistPrev=function(){this.callInternal("jwPlaylistPrev");return this};this.playlistNext=function(){this.callInternal("jwPlaylistNext");return this};this.resize=function(u,t){if(this.renderingMode=="html5"){h.jwResize(u,t)}else{this.container.width=u;this.container.height=t;var v=document.getElementById(this.id+"_wrapper");if(v){v.style.width=u+"px";v.style.height=t+"px"}}return this};this.play=function(t){if(typeof t=="undefined"){t=this.getState();if(t==b.api.events.state.PLAYING||t==b.api.events.state.BUFFERING){this.callInternal("jwPause")}else{this.callInternal("jwPlay")}}else{this.callInternal("jwPlay",t)}return this};this.pause=function(t){if(typeof t=="undefined"){t=this.getState();if(t==b.api.events.state.PLAYING||t==b.api.events.state.BUFFERING){this.callInternal("jwPause")}else{this.callInternal("jwPlay")}}else{this.callInternal("jwPause",t)}return this};this.stop=function(){this.callInternal("jwStop");return this};this.seek=function(t){this.callInternal("jwSeek",t);return this};this.setVolume=function(t){this.callInternal("jwSetVolume",t);return this};this.onBufferChange=function(t){return this.eventListener(b.api.events.JWPLAYER_MEDIA_BUFFER,t)};this.onBufferFull=function(t){return this.eventListener(b.api.events.JWPLAYER_MEDIA_BUFFER_FULL,t)};this.onError=function(t){return this.eventListener(b.api.events.JWPLAYER_ERROR,t)};this.onFullscreen=function(t){return this.eventListener(b.api.events.JWPLAYER_FULLSCREEN,t)};this.onMeta=function(t){return this.eventListener(b.api.events.JWPLAYER_MEDIA_META,t)};this.onMute=function(t){return this.eventListener(b.api.events.JWPLAYER_MEDIA_MUTE,t)};this.onPlaylist=function(t){return this.eventListener(b.api.events.JWPLAYER_PLAYLIST_LOADED,t)};this.onPlaylistItem=function(t){return this.eventListener(b.api.events.JWPLAYER_PLAYLIST_ITEM,t)};this.onReady=function(t){return this.eventListener(b.api.events.API_READY,t)};this.onResize=function(t){return this.eventListener(b.api.events.JWPLAYER_RESIZE,t)};this.onComplete=function(t){return this.eventListener(b.api.events.JWPLAYER_MEDIA_COMPLETE,t)};this.onSeek=function(t){return this.eventListener(b.api.events.JWPLAYER_MEDIA_SEEK,t)};this.onTime=function(t){return this.eventListener(b.api.events.JWPLAYER_MEDIA_TIME,t)};this.onVolume=function(t){return this.eventListener(b.api.events.JWPLAYER_MEDIA_VOLUME,t)};this.onBuffer=function(t){return this.stateListener(b.api.events.state.BUFFERING,t)};this.onPause=function(t){return this.stateListener(b.api.events.state.PAUSED,t)};this.onPlay=function(t){return this.stateListener(b.api.events.state.PLAYING,t)};this.onIdle=function(t){return this.stateListener(b.api.events.state.IDLE,t)};this.remove=function(){n={};j=[];if(b.utils.getOuterHTML(this.container)!=p){b.api.destroyPlayer(this.id,p)}};this.setup=function(u){if(b.embed){var t=this.id;this.remove();var v=b(t);v.config=u;return new b.embed(v)}return this};this.registerPlugin=function(v,u,t){b.plugins.registerPlugin(v,u,t)};this.setPlayer=function(t,u){h=t;this.renderingMode=u};this.stateListener=function(t,u){if(!s[t]){s[t]=[];this.eventListener(b.api.events.JWPLAYER_PLAYER_STATE,g(t))}s[t].push(u);return this};this.detachMedia=function(){if(this.renderingMode=="html5"){return this.callInternal("jwDetachMedia")}};this.attachMedia=function(){if(this.renderingMode=="html5"){return this.callInternal("jwAttachMedia")}};function g(t){return function(v){var u=v.newstate,x=v.oldstate;if(u==t){var w=s[u];if(w){for(var y=0;y<w.length;y++){if(typeof w[y]=="function"){w[y].call(this,{oldstate:x,newstate:u})}}}}}}this.componentListener=function(t,u,v){if(!q[t]){q[t]={}}if(!q[t][u]){q[t][u]=[];this.eventListener(u,m(t,u))}q[t][u].push(v);return this};function m(t,u){return function(w){if(t==w.component){var v=q[t][u];if(v){for(var x=0;x<v.length;x++){if(typeof v[x]=="function"){v[x].call(this,w)}}}}}}this.addInternalListener=function(t,u){t.jwAddEventListener(u,'function(dat) { jwplayer("'+this.id+'").dispatchEvent("'+u+'", dat); }')};this.eventListener=function(t,u){if(!n[t]){n[t]=[];if(h&&l){this.addInternalListener(h,t)}}n[t].push(u);return this};this.dispatchEvent=function(v){if(n[v]){var u=f(v,arguments[1]);for(var t=0;t<n[v].length;t++){if(typeof n[v][t]=="function"){n[v][t].call(this,u)}}}};function f(v,t){var x=b.utils.extend({},t);if(v==b.api.events.JWPLAYER_FULLSCREEN&&!x.fullscreen){x.fullscreen=x.message=="true"?true:false;delete x.message}else{if(typeof x.data=="object"){x=b.utils.extend(x,x.data);delete x.data}}var u=["position","duration","offset"];for(var w in u){if(x[u[w]]){x[u[w]]=Math.round(x[u[w]]*1000)/1000}}return x}this.callInternal=function(u,t){if(l){if(typeof h!="undefined"&&typeof h[u]=="function"){if(b.utils.exists(t)){return(h[u])(t)}else{return(h[u])()}}return null}else{j.push({method:u,parameters:t})}};this.playerReady=function(v){l=true;if(!h){this.setPlayer(document.getElementById(v.id))}this.container=document.getElementById(this.id);for(var t in n){this.addInternalListener(h,t)}this.eventListener(b.api.events.JWPLAYER_PLAYLIST_ITEM,function(w){r={}});this.eventListener(b.api.events.JWPLAYER_MEDIA_META,function(w){b.utils.extend(r,w.metadata)});this.dispatchEvent(b.api.events.API_READY);while(j.length>0){var u=j.shift();this.callInternal(u.method,u.parameters)}};this.getItemMeta=function(){return r};this.getCurrentItem=function(){return this.callInternal("jwGetPlaylistIndex")};function o(v,x,w){var t=[];if(!x){x=0}if(!w){w=v.length-1}for(var u=x;u<=w;u++){t.push(v[u])}return t}return this};b.api.selectPlayer=function(d){var c;if(!b.utils.exists(d)){d=0}if(d.nodeType){c=d}else{if(typeof d=="string"){c=document.getElementById(d)}}if(c){var e=b.api.playerById(c.id);if(e){return e}else{return b.api.addPlayer(new b.api(c))}}else{if(typeof d=="number"){return b.getPlayers()[d]}}return null};b.api.events={API_READY:"jwplayerAPIReady",JWPLAYER_READY:"jwplayerReady",JWPLAYER_FULLSCREEN:"jwplayerFullscreen",JWPLAYER_RESIZE:"jwplayerResize",JWPLAYER_ERROR:"jwplayerError",JWPLAYER_COMPONENT_SHOW:"jwplayerComponentShow",JWPLAYER_COMPONENT_HIDE:"jwplayerComponentHide",JWPLAYER_MEDIA_BUFFER:"jwplayerMediaBuffer",JWPLAYER_MEDIA_BUFFER_FULL:"jwplayerMediaBufferFull",JWPLAYER_MEDIA_ERROR:"jwplayerMediaError",JWPLAYER_MEDIA_LOADED:"jwplayerMediaLoaded",JWPLAYER_MEDIA_COMPLETE:"jwplayerMediaComplete",JWPLAYER_MEDIA_SEEK:"jwplayerMediaSeek",JWPLAYER_MEDIA_TIME:"jwplayerMediaTime",JWPLAYER_MEDIA_VOLUME:"jwplayerMediaVolume",JWPLAYER_MEDIA_META:"jwplayerMediaMeta",JWPLAYER_MEDIA_MUTE:"jwplayerMediaMute",JWPLAYER_PLAYER_STATE:"jwplayerPlayerState",JWPLAYER_PLAYLIST_LOADED:"jwplayerPlaylistLoaded",JWPLAYER_PLAYLIST_ITEM:"jwplayerPlaylistItem"};b.api.events.state={BUFFERING:"BUFFERING",IDLE:"IDLE",PAUSED:"PAUSED",PLAYING:"PLAYING"};b.api.playerById=function(d){for(var c=0;c<a.length;c++){if(a[c].id==d){return a[c]}}return null};b.api.addPlayer=function(c){for(var d=0;d<a.length;d++){if(a[d]==c){return c}}a.push(c);return c};b.api.destroyPlayer=function(g,d){var f=-1;for(var j=0;j<a.length;j++){if(a[j].id==g){f=j;continue}}if(f>=0){var c=document.getElementById(a[f].id);if(document.getElementById(a[f].id+"_wrapper")){c=document.getElementById(a[f].id+"_wrapper")}if(c){if(d){b.utils.setOuterHTML(c,d)}else{var h=document.createElement("div");var e=c.id;if(c.id.indexOf("_wrapper")==c.id.length-8){newID=c.id.substring(0,c.id.length-8)}h.setAttribute("id",e);c.parentNode.replaceChild(h,c)}}a.splice(f,1)}return null};b.getPlayers=function(){return a.slice(0)}})(jwplayer);var _userPlayerReady=(typeof playerReady=="function")?playerReady:undefined;playerReady=function(b){var a=jwplayer.api.playerById(b.id);if(a){a.playerReady(b)}else{jwplayer.api.selectPlayer(b.id).playerReady(b)}if(_userPlayerReady){_userPlayerReady.call(this,b)}};(function(a){var c=a.utils;a.embed=function(h){var k={width:400,height:300,components:{controlbar:{position:"over"}}};var g=c.mediaparser.parseMedia(h.container);var f=new a.embed.config(c.extend(k,g,h.config),this);var j=a.plugins.loadPlugins(h.id,f.plugins);function d(n,m){for(var l in m){if(typeof n[l]=="function"){(n[l]).call(n,m[l])}}}function e(){if(j.getStatus()==c.loaderstatus.COMPLETE){for(var n=0;n<f.modes.length;n++){if(f.modes[n].type&&a.embed[f.modes[n].type]){var p=f.modes[n].config;var t=f;if(p){t=c.extend(c.clone(f),p);var s=["file","levels","playlist"];for(var m=0;m<s.length;m++){var q=s[m];if(c.exists(p[q])){for(var l=0;l<s.length;l++){if(l!=m){var o=s[l];if(c.exists(t[o])&&!c.exists(p[o])){delete t[o]}}}}}}var r=new a.embed[f.modes[n].type](document.getElementById(h.id),f.modes[n],t,j,h);if(r.supportsConfig()){r.embed();d(h,f.events);return h}}}c.log("No suitable players found");new a.embed.logo(c.extend({hide:true},f.components.logo),"none",h.id)}}j.addEventListener(a.events.COMPLETE,e);j.addEventListener(a.events.ERROR,e);j.load();return h};function b(){if(!document.body){return setTimeout(b,15)}var d=c.selectors.getElementsByTagAndClass("video","jwplayer");for(var e=0;e<d.length;e++){var f=d[e];if(f.id==""){f.id="jwplayer_"+Math.round(Math.random()*100000)}a(f.id).setup({})}}b()})(jwplayer);(function(e){function h(){return[{type:"flash",src:"/jwplayer/player.swf"},{type:"html5"},{type:"download"}]}var a={players:"modes",autoplay:"autostart"};function b(n){var m=n.toLowerCase();var l=["left","right","top","bottom"];for(var k=0;k<l.length;k++){if(m==l[k]){return true}}return false}function c(l){var k=false;k=(l instanceof Array)||(typeof l=="object"&&!l.position&&!l.size);return k}function j(k){if(typeof k=="string"){if(parseInt(k).toString()==k||k.toLowerCase().indexOf("px")>-1){return parseInt(k)}}return k}var g=["playlist","dock","controlbar","logo","display"];function f(k){var n={};switch(e.utils.typeOf(k.plugins)){case"object":for(var m in k.plugins){n[e.utils.getPluginName(m)]=m}break;case"string":var o=k.plugins.split(",");for(var l=0;l<o.length;l++){n[e.utils.getPluginName(o[l])]=o[l]}break}return n}function d(o,n,m,k){if(e.utils.typeOf(o[n])!="object"){o[n]={}}var l=o[n][m];if(e.utils.typeOf(l)!="object"){o[n][m]=l={}}if(k){if(n=="plugins"){var p=e.utils.getPluginName(m);l[k]=o[p+"."+k];delete o[p+"."+k]}else{l[k]=o[m+"."+k];delete o[m+"."+k]}}}e.embed.deserialize=function(l){var m=f(l);for(var k in m){d(l,"plugins",m[k])}for(var p in l){if(p.indexOf(".")>-1){var o=p.split(".");var n=o[0];var p=o[1];if(e.utils.isInArray(g,n)){d(l,"components",n,p)}else{if(m[n]){d(l,"plugins",m[n],p)}}}}return l};e.embed.config=function(k,u){var t=e.utils.extend({},k);var r;if(c(t.playlist)){r=t.playlist;delete t.playlist}t=e.embed.deserialize(t);t.height=j(t.height);t.width=j(t.width);if(typeof t.plugins=="string"){var l=t.plugins.split(",");if(typeof t.plugins!="object"){t.plugins={}}for(var p=0;p<l.length;p++){var q=e.utils.getPluginName(l[p]);if(typeof t[q]=="object"){t.plugins[l[p]]=t[q];delete t[q]}else{t.plugins[l[p]]={}}}}for(var s=0;s<g.length;s++){var o=g[s];if(e.utils.exists(t[o])){if(typeof t[o]!="object"){if(!t.components[o]){t.components[o]={}}if(o=="logo"){t.components[o].file=t[o]}else{t.components[o].position=t[o]}delete t[o]}else{if(!t.components[o]){t.components[o]={}}e.utils.extend(t.components[o],t[o]);delete t[o]}}if(typeof t[o+"size"]!="undefined"){if(!t.components[o]){t.components[o]={}}t.components[o].size=t[o+"size"];delete t[o+"size"]}}if(typeof t.icons!="undefined"){if(!t.components.display){t.components.display={}}t.components.display.icons=t.icons;delete t.icons}for(var n in a){if(t[n]){if(!t[a[n]]){t[a[n]]=t[n]}delete t[n]}}var m;if(t.flashplayer&&!t.modes){m=h();m[0].src=t.flashplayer;delete t.flashplayer}else{if(t.modes){if(typeof t.modes=="string"){m=h();m[0].src=t.modes}else{if(t.modes instanceof Array){m=t.modes}else{if(typeof t.modes=="object"&&t.modes.type){m=[t.modes]}}}delete t.modes}else{m=h()}}t.modes=m;if(r){t.playlist=r}return t}})(jwplayer);(function(a){a.embed.download=function(c,g,b,d,f){this.embed=function(){var k=a.utils.extend({},b);var q={};var j=b.width?b.width:480;if(typeof j!="number"){j=parseInt(j,10)}var m=b.height?b.height:320;if(typeof m!="number"){m=parseInt(m,10)}var u,o,n;var s={};if(b.playlist&&b.playlist.length){s.file=b.playlist[0].file;o=b.playlist[0].image;s.levels=b.playlist[0].levels}else{s.file=b.file;o=b.image;s.levels=b.levels}if(s.file){u=s.file}else{if(s.levels&&s.levels.length){u=s.levels[0].file}}n=u?"pointer":"auto";var l={display:{style:{cursor:n,width:j,height:m,backgroundColor:"#000",position:"relative",textDecoration:"none",border:"none",display:"block"}},display_icon:{style:{cursor:n,position:"absolute",display:u?"block":"none",top:0,left:0,border:0,margin:0,padding:0,zIndex:3,width:50,height:50,backgroundImage:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALdJREFUeNrs18ENgjAYhmFouDOCcQJGcARHgE10BDcgTOIosAGwQOuPwaQeuFRi2p/3Sb6EC5L3QCxZBgAAAOCorLW1zMn65TrlkH4NcV7QNcUQt7Gn7KIhxA+qNIR81spOGkL8oFJDyLJRdosqKDDkK+iX5+d7huzwM40xptMQMkjIOeRGo+VkEVvIPfTGIpKASfYIfT9iCHkHrBEzf4gcUQ56aEzuGK/mw0rHpy4AAACAf3kJMACBxjAQNRckhwAAAABJRU5ErkJggg==)"}},display_iconBackground:{style:{cursor:n,position:"absolute",display:u?"block":"none",top:((m-50)/2),left:((j-50)/2),border:0,width:50,height:50,margin:0,padding:0,zIndex:2,backgroundImage:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEpJREFUeNrszwENADAIA7DhX8ENoBMZ5KR10EryckCJiIiIiIiIiIiIiIiIiIiIiIh8GmkRERERERERERERERERERERERGRHSPAAPlXH1phYpYaAAAAAElFTkSuQmCC)"}},display_image:{style:{width:j,height:m,display:o?"block":"none",position:"absolute",cursor:n,left:0,top:0,margin:0,padding:0,textDecoration:"none",zIndex:1,border:"none"}}};var h=function(v,x,y){var w=document.createElement(v);if(y){w.id=y}else{w.id=c.id+"_jwplayer_"+x}a.utils.css(w,l[x].style);return w};q.display=h("a","display",c.id);if(u){q.display.setAttribute("href",a.utils.getAbsolutePath(u))}q.display_image=h("img","display_image");q.display_image.setAttribute("alt","Click to download...");if(o){q.display_image.setAttribute("src",a.utils.getAbsolutePath(o))}if(true){q.display_icon=h("div","display_icon");q.display_iconBackground=h("div","display_iconBackground");q.display.appendChild(q.display_image);q.display_iconBackground.appendChild(q.display_icon);q.display.appendChild(q.display_iconBackground)}_css=a.utils.css;_hide=function(v){_css(v,{display:"none"})};function r(v){_imageWidth=q.display_image.naturalWidth;_imageHeight=q.display_image.naturalHeight;t()}function t(){a.utils.stretch(a.utils.stretching.UNIFORM,q.display_image,j,m,_imageWidth,_imageHeight)}q.display_image.onerror=function(v){_hide(q.display_image)};q.display_image.onload=r;c.parentNode.replaceChild(q.display,c);var p=(b.plugins&&b.plugins.logo)?b.plugins.logo:{};q.display.appendChild(new a.embed.logo(b.components.logo,"download",c.id));f.container=document.getElementById(f.id);f.setPlayer(q.display,"download")};this.supportsConfig=function(){if(b){var j=a.utils.getFirstPlaylistItemFromConfig(b);if(typeof j.file=="undefined"&&typeof j.levels=="undefined"){return true}else{if(j.file){return e(j.file,j.provider,j.playlistfile)}else{if(j.levels&&j.levels.length){for(var h=0;h<j.levels.length;h++){if(j.levels[h].file&&e(j.levels[h].file,j.provider,j.playlistfile)){return true}}}}}}else{return true}};function e(j,l,h){if(h){return false}var k=["image","sound","youtube","http"];if(l&&(k.toString().indexOf(l)>-1)){return true}if(!l||(l&&l=="video")){var m=a.utils.extension(j);if(m&&a.utils.extensionmap[m]){return true}}return false}}})(jwplayer);(function(a){a.embed.flash=function(f,g,l,e,j){function m(o,n,p){var q=document.createElement("param");q.setAttribute("name",n);q.setAttribute("value",p);o.appendChild(q)}function k(o,p,n){return function(q){if(n){document.getElementById(j.id+"_wrapper").appendChild(p)}var s=document.getElementById(j.id).getPluginConfig("display");o.resize(s.width,s.height);var r={left:s.x,top:s.y};a.utils.css(p,r)}}function d(p){if(!p){return{}}var r={};for(var o in p){var n=p[o];for(var q in n){r[o+"."+q]=n[q]}}return r}function h(q,p){if(q[p]){var s=q[p];for(var o in s){var n=s[o];if(typeof n=="string"){if(!q[o]){q[o]=n}}else{for(var r in n){if(!q[o+"."+r]){q[o+"."+r]=n[r]}}}}delete q[p]}}function b(q){if(!q){return{}}var t={},s=[];for(var n in q){var p=a.utils.getPluginName(n);var o=q[n];s.push(n);for(var r in o){t[p+"."+r]=o[r]}}t.plugins=s.join(",");return t}function c(p){var n=p.netstreambasepath?"":"netstreambasepath="+encodeURIComponent(window.location.href.split("#")[0])+"&";for(var o in p){if(typeof(p[o])=="object"){n+=o+"="+encodeURIComponent("[[JSON]]"+a.utils.strings.jsonToString(p[o]))+"&"}else{n+=o+"="+encodeURIComponent(p[o])+"&"}}return n.substring(0,n.length-1)}this.embed=function(){l.id=j.id;var y;var q=a.utils.extend({},l);var n=q.width;var w=q.height;if(f.id+"_wrapper"==f.parentNode.id){y=document.getElementById(f.id+"_wrapper")}else{y=document.createElement("div");y.id=f.id+"_wrapper";a.utils.wrap(f,y);a.utils.css(y,{position:"relative",width:n,height:w})}var o=e.setupPlugins(j,q,k);if(o.length>0){a.utils.extend(q,b(o.plugins))}else{delete q.plugins}var r=["height","width","modes","events"];for(var u=0;u<r.length;u++){delete q[r[u]]}var p="opaque";if(q.wmode){p=q.wmode}h(q,"components");h(q,"providers");if(typeof q["dock.position"]!="undefined"){if(q["dock.position"].toString().toLowerCase()=="false"){q.dock=q["dock.position"];delete q["dock.position"]}}var x="#000000";var t;if(a.utils.isIE()){var v='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" bgcolor="'+x+'" width="100%" height="100%" id="'+f.id+'" name="'+f.id+'" tabindex=0"">';v+='<param name="movie" value="'+g.src+'">';v+='<param name="allowfullscreen" value="true">';v+='<param name="allowscriptaccess" value="always">';v+='<param name="seamlesstabbing" value="true">';v+='<param name="wmode" value="'+p+'">';v+='<param name="flashvars" value="'+c(q)+'">';v+="</object>";a.utils.setOuterHTML(f,v);t=document.getElementById(f.id)}else{var s=document.createElement("object");s.setAttribute("type","application/x-shockwave-flash");s.setAttribute("data",g.src);s.setAttribute("width","100%");s.setAttribute("height","100%");s.setAttribute("bgcolor","#000000");s.setAttribute("id",f.id);s.setAttribute("name",f.id);s.setAttribute("tabindex",0);m(s,"allowfullscreen","true");m(s,"allowscriptaccess","always");m(s,"seamlesstabbing","true");m(s,"wmode",p);m(s,"flashvars",c(q));f.parentNode.replaceChild(s,f);t=s}j.container=t;j.setPlayer(t,"flash")};this.supportsConfig=function(){if(a.utils.hasFlash()){if(l){var o=a.utils.getFirstPlaylistItemFromConfig(l);if(typeof o.file=="undefined"&&typeof o.levels=="undefined"){return true}else{if(o.file){return flashCanPlay(o.file,o.provider)}else{if(o.levels&&o.levels.length){for(var n=0;n<o.levels.length;n++){if(o.levels[n].file&&flashCanPlay(o.levels[n].file,o.provider)){return true}}}}}}else{return true}}return false};flashCanPlay=function(n,p){var o=["video","http","sound","image"];if(p&&(o.toString().indexOf(p<0))){return true}var q=a.utils.extension(n);if(!q){return true}if(a.utils.exists(a.utils.extensionmap[q])&&!a.utils.exists(a.utils.extensionmap[q].flash)){return false}return true}}})(jwplayer);(function(a){a.embed.html5=function(c,g,b,d,f){function e(j,k,h){return function(l){var m=document.getElementById(c.id+"_displayarea");if(h){m.appendChild(k)}j.resize(m.clientWidth,m.clientHeight);k.left=m.style.left;k.top=m.style.top}}this.embed=function(){if(a.html5){d.setupPlugins(f,b,e);c.innerHTML="";var j=a.utils.extend({screencolor:"0x000000"},b);var h=["plugins","modes","events"];for(var k=0;k<h.length;k++){delete j[h[k]]}if(j.levels&&!j.sources){j.sources=b.levels}if(j.skin&&j.skin.toLowerCase().indexOf(".zip")>0){j.skin=j.skin.replace(/\.zip/i,".xml")}var l=new(a.html5(c)).setup(j);f.container=document.getElementById(f.id);f.setPlayer(l,"html5")}else{return null}};this.supportsConfig=function(){if(!!a.vid.canPlayType){if(b){var j=a.utils.getFirstPlaylistItemFromConfig(b);if(typeof j.file=="undefined"&&typeof j.levels=="undefined"){return true}else{if(j.file){return html5CanPlay(a.vid,j.file,j.provider,j.playlistfile)}else{if(j.levels&&j.levels.length){for(var h=0;h<j.levels.length;h++){if(j.levels[h].file&&html5CanPlay(a.vid,j.levels[h].file,j.provider,j.playlistfile)){return true}}}}}}else{return true}}return false};html5CanPlay=function(k,j,l,h){if(h){return false}if(l&&l=="youtube"){return true}if(l&&l!="video"&&l!="http"&&l!="sound"){return false}var m=a.utils.extension(j);if(!a.utils.exists(m)||!a.utils.exists(a.utils.extensionmap[m])){return true}if(!a.utils.exists(a.utils.extensionmap[m].html5)){return false}if(a.utils.isLegacyAndroid()&&m.match(/m4v|mp4/)){return true}return browserCanPlay(k,a.utils.extensionmap[m].html5)};browserCanPlay=function(j,h){if(!h){return true}if(j.canPlayType(h)){return true}else{if(h=="audio/mp3"&&navigator.userAgent.match(/safari/i)){return j.canPlayType("audio/mpeg")}else{return false}}}}})(jwplayer);(function(a){a.embed.logo=function(m,l,d){var j={prefix:"http://l.longtailvideo.com/"+l+"/",file:"logo.png",link:"http://www.longtailvideo.com/players/jw-flv-player/",margin:8,out:0.5,over:1,timeout:5,hide:false,position:"bottom-left"};_css=a.utils.css;var b;var h;k();function k(){o();c();f()}function o(){if(j.prefix){var q=a.version.split(/\W/).splice(0,2).join("/");if(j.prefix.indexOf(q)<0){j.prefix+=q+"/"}}h=a.utils.extend({},j)}function p(){var s={border:"none",textDecoration:"none",position:"absolute",cursor:"pointer",zIndex:10};s.display=h.hide?"none":"block";var r=h.position.toLowerCase().split("-");for(var q in r){s[r[q]]=h.margin}return s}function c(){b=document.createElement("img");b.id=d+"_jwplayer_logo";b.style.display="none";b.onload=function(q){_css(b,p());e()};if(!h.file){return}if(h.file.indexOf("http://")===0){b.src=h.file}else{b.src=h.prefix+h.file}}if(!h.file){return}function f(){if(h.link){b.onmouseover=g;b.onmouseout=e;b.onclick=n}else{this.mouseEnabled=false}}function n(q){if(typeof q!="undefined"){q.preventDefault();q.stopPropagation()}if(h.link){window.open(h.link,"_blank")}return}function e(q){if(h.link){b.style.opacity=h.out}return}function g(q){if(h.hide){b.style.opacity=h.over}return}return b}})(jwplayer);(function(a){a.html5=function(b){var c=b;this.setup=function(d){a.utils.extend(this,new a.html5.api(c,d));return this};return this}})(jwplayer);(function(a){var c=a.utils;var b=c.css;a.html5.view=function(s,r,e){var w=s;var m=r;var y=e;var x;var f;var G;var t;var H;var p;var E;var q=false;var B,o;function A(){x=document.createElement("div");x.id=m.id;x.className=m.className;_videowrapper=document.createElement("div");_videowrapper.id=x.id+"_video_wrapper";m.id=x.id+"_video";b(x,{position:"relative",height:y.height,width:y.width,padding:0,backgroundColor:I(),zIndex:0});function I(){if(w.skin.getComponentSettings("display")&&w.skin.getComponentSettings("display").backgroundcolor){return w.skin.getComponentSettings("display").backgroundcolor}return parseInt("000000",16)}b(m,{width:"100%",height:"100%",top:0,left:0,zIndex:1,margin:"auto",display:"block"});b(_videowrapper,{overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0});c.wrap(m,x);c.wrap(m,_videowrapper);t=document.createElement("div");t.id=x.id+"_displayarea";x.appendChild(t)}function j(){for(var I=0;I<y.plugins.order.length;I++){var J=y.plugins.order[I];if(c.exists(y.plugins.object[J].getDisplayElement)){y.plugins.object[J].height=c.parseDimension(y.plugins.object[J].getDisplayElement().style.height);y.plugins.object[J].width=c.parseDimension(y.plugins.object[J].getDisplayElement().style.width);y.plugins.config[J].currentPosition=y.plugins.config[J].position}}v()}function l(I){b(t,{display:(y.getMedia()&&y.getMedia().hasChrome()&&I.newstate!=a.api.events.state.IDLE)?"none":"block"})}function v(J){var L=y.getMedia()?y.getMedia().getDisplayElement():null;if(c.exists(L)){if(E!=L){if(E&&E.parentNode){E.parentNode.replaceChild(L,E)}E=L}for(var I=0;I<y.plugins.order.length;I++){var K=y.plugins.order[I];if(c.exists(y.plugins.object[K].getDisplayElement)){y.plugins.config[K].currentPosition=y.plugins.config[K].position}}}h(y.width,y.height)}this.setup=function(){if(y&&y.getMedia()){m=y.getMedia().getDisplayElement()}A();j();w.jwAddEventListener(a.api.events.JWPLAYER_PLAYER_STATE,l);w.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_LOADED,v);w.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_META,function(){z()});var I;if(c.exists(window.onresize)){I=window.onresize}window.onresize=function(J){if(c.exists(I)){try{I(J)}catch(L){}}if(w.jwGetFullscreen()){if(!C()){var K=c.getBoundingClientRect(document.body);y.width=Math.abs(K.left)+Math.abs(K.right);y.height=window.innerHeight;h(y.width,y.height)}}else{h(y.width,y.height)}}};function g(I){switch(I.keyCode){case 27:if(w.jwGetFullscreen()){w.jwSetFullscreen(false)}break;case 32:if(w.jwGetState()!=a.api.events.state.IDLE&&w.jwGetState()!=a.api.events.state.PAUSED){w.jwPause()}else{w.jwPlay()}break}}function h(L,I){if(x.style.display=="none"){return}var K=[].concat(y.plugins.order);K.reverse();H=K.length+2;if(C()){try{if(y.fullscreen&&!y.getMedia().getDisplayElement().webkitDisplayingFullscreen){y.fullscreen=false}}catch(N){}}if(!y.fullscreen){f=L;G=I;if(typeof L=="string"&&L.indexOf("%")>0){f=c.getElementWidth(c.parentNode(x))*parseInt(L.replace("%"),"")/100}else{f=L}if(typeof I=="string"&&I.indexOf("%")>0){G=c.getElementHeight(c.parentNode(x))*parseInt(I.replace("%"),"")/100}else{G=I}b(t,{top:0,bottom:0,left:0,right:0,width:f,height:G,position:"absolute"});b(x,{height:G,width:f});var J=n(u,K);if(J.length>0){H+=J.length;var O=J.indexOf("playlist"),M=J.indexOf("controlbar");if(O>=0&&M>=0){J[O]=J.splice(M,1,J[O])[0]}n(k,J,true)}B=c.getElementWidth(t);o=c.getElementHeight(t)}else{if(!C()){n(F,K,true)}}z()}function n(P,L,M){var N=[];for(var K=0;K<L.length;K++){var O=L[K];if(c.exists(y.plugins.object[O].getDisplayElement)){if(y.plugins.config[O].currentPosition!=a.html5.view.positions.NONE){var I=P(O,H--);if(!I){N.push(O)}else{var J=I.width;var Q=I.height;if(M){delete I.width;delete I.height}b(y.plugins.object[O].getDisplayElement(),I);y.plugins.object[O].resize(J,Q)}}else{b(y.plugins.object[O].getDisplayElement(),{display:"none"})}}}return N}function u(J,K){if(c.exists(y.plugins.object[J].getDisplayElement)){if(y.plugins.config[J].position&&D(y.plugins.config[J].position)){if(!c.exists(y.plugins.object[J].getDisplayElement().parentNode)){x.appendChild(y.plugins.object[J].getDisplayElement())}var I=d(J);I.zIndex=K;return I}}return false}function k(I,J){if(!c.exists(y.plugins.object[I].getDisplayElement().parentNode)){t.appendChild(y.plugins.object[I].getDisplayElement())}return{position:"absolute",width:(c.getElementWidth(t)-c.parseDimension(t.style.left)-c.parseDimension(t.style.right)),height:(c.getElementHeight(t)-c.parseDimension(t.style.top)-c.parseDimension(t.style.bottom)),zIndex:J}}function F(I,J){return{position:"fixed",width:y.width,height:y.height,zIndex:J}}function z(){if(!c.exists(y.getMedia())){return}t.style.position="absolute";var K=y.getMedia().getDisplayElement();if(K&&K.tagName.toLowerCase()=="video"){K.style.position="absolute";if(K.parentNode){K.parentNode.style.left=t.style.left;K.parentNode.style.top=t.style.top}if(y.fullscreen&&w.jwGetStretching()==a.utils.stretching.EXACTFIT&&!c.isMobile()){var I=document.createElement("div");c.stretch(a.utils.stretching.UNIFORM,I,c.getElementWidth(t),c.getElementHeight(t),B,o);c.stretch(a.utils.stretching.EXACTFIT,K,c.parseDimension(I.style.width),c.parseDimension(I.style.height),K.videoWidth?K.videoWidth:400,K.videoHeight?K.videoHeight:300);b(K,{left:I.style.left,top:I.style.top})}else{c.stretch(w.jwGetStretching(),K,c.getElementWidth(t),c.getElementHeight(t),K.videoWidth?K.videoWidth:400,K.videoHeight?K.videoHeight:300)}}else{var J=y.plugins.object.display.getDisplayElement();if(J){y.getMedia().resize(c.parseDimension(J.style.width),c.parseDimension(J.style.height))}else{y.getMedia().resize(c.parseDimension(t.style.width),c.parseDimension(t.style.height))}}}function d(J){var K={position:"absolute",margin:0,padding:0,top:null};var I=y.plugins.config[J].currentPosition.toLowerCase();switch(I.toUpperCase()){case a.html5.view.positions.TOP:K.top=c.parseDimension(t.style.top);K.left=c.parseDimension(t.style.left);K.width=c.getElementWidth(t)-c.parseDimension(t.style.left)-c.parseDimension(t.style.right);K.height=y.plugins.object[J].height;t.style[I]=c.parseDimension(t.style[I])+y.plugins.object[J].height+"px";t.style.height=c.getElementHeight(t)-K.height+"px";break;case a.html5.view.positions.RIGHT:K.top=c.parseDimension(t.style.top);K.right=c.parseDimension(t.style.right);K.width=y.plugins.object[J].width;K.height=c.getElementHeight(t)-c.parseDimension(t.style.top)-c.parseDimension(t.style.bottom);t.style.width=c.getElementWidth(t)-K.width+"px";break;case a.html5.view.positions.BOTTOM:K.bottom=c.parseDimension(t.style.bottom);K.left=c.parseDimension(t.style.left);K.width=c.getElementWidth(t)-c.parseDimension(t.style.left)-c.parseDimension(t.style.right);K.height=y.plugins.object[J].height;t.style.height=c.getElementHeight(t)-K.height+"px";break;case a.html5.view.positions.LEFT:K.top=c.parseDimension(t.style.top);K.left=c.parseDimension(t.style.left);K.width=y.plugins.object[J].width;K.height=c.getElementHeight(t)-c.parseDimension(t.style.top)-c.parseDimension(t.style.bottom);t.style[I]=c.parseDimension(t.style[I])+y.plugins.object[J].width+"px";t.style.width=c.getElementWidth(t)-K.width+"px";break;default:break}return K}this.resize=h;this.fullscreen=function(L){var N;try{N=y.getMedia().getDisplayElement()}catch(M){}if(C()&&N&&N.webkitSupportsFullscreen){if(L&&!N.webkitDisplayingFullscreen){try{c.transform(N);N.webkitEnterFullscreen()}catch(K){}}else{if(!L){z();if(N.webkitDisplayingFullscreen){try{N.webkitExitFullscreen()}catch(K){}}}}q=false}else{if(L){document.onkeydown=g;clearInterval(p);var J=c.getBoundingClientRect(document.body);y.width=Math.abs(J.left)+Math.abs(J.right);y.height=window.innerHeight;var I={position:"fixed",width:"100%",height:"100%",top:0,left:0,zIndex:2147483000};b(x,I);I.zIndex=1;if(y.getMedia()&&y.getMedia().getDisplayElement()){b(y.getMedia().getDisplayElement(),I)}I.zIndex=2;b(t,I);q=true}else{document.onkeydown="";y.width=f;y.height=G;b(x,{position:"relative",height:y.height,width:y.width,zIndex:0});q=false}h(y.width,y.height)}};function D(I){return([a.html5.view.positions.TOP,a.html5.view.positions.RIGHT,a.html5.view.positions.BOTTOM,a.html5.view.positions.LEFT].toString().indexOf(I.toUpperCase())>-1)}function C(){if(w.jwGetState()!=a.api.events.state.IDLE&&!q&&(y.getMedia()&&y.getMedia().getDisplayElement()&&y.getMedia().getDisplayElement().webkitSupportsFullscreen)&&c.useNativeFullscreen()){return true}return false}};a.html5.view.positions={TOP:"TOP",RIGHT:"RIGHT",BOTTOM:"BOTTOM",LEFT:"LEFT",OVER:"OVER",NONE:"NONE"}})(jwplayer);(function(a){var b={backgroundcolor:"",margin:10,font:"Arial,sans-serif",fontsize:10,fontcolor:parseInt("000000",16),fontstyle:"normal",fontweight:"bold",buttoncolor:parseInt("ffffff",16),position:a.html5.view.positions.BOTTOM,idlehide:false,hideplaylistcontrols:false,layout:{left:{position:"left",elements:[{name:"play",type:"button"},{name:"divider",type:"divider"},{name:"prev",type:"button"},{name:"divider",type:"divider"},{name:"next",type:"button"},{name:"divider",type:"divider"},{name:"elapsed",type:"text"}]},center:{position:"center",elements:[{name:"time",type:"slider"}]},right:{position:"right",elements:[{name:"duration",type:"text"},{name:"blank",type:"button"},{name:"divider",type:"divider"},{name:"mute",type:"button"},{name:"volume",type:"slider"},{name:"divider",type:"divider"},{name:"fullscreen",type:"button"}]}}};_utils=a.utils;_css=_utils.css;_hide=function(c){_css(c,{display:"none"})};_show=function(c){_css(c,{display:"block"})};a.html5.controlbar=function(m,X){window.controlbar=this;var l=m;var D=_utils.extend({},b,l.skin.getComponentSettings("controlbar"),X);if(D.position==a.html5.view.positions.NONE||typeof a.html5.view.positions[D.position]=="undefined"){return}if(_utils.mapLength(l.skin.getComponentLayout("controlbar"))>0){D.layout=l.skin.getComponentLayout("controlbar")}var af;var Q;var ae;var E;var w="none";var h;var k;var ag;var g;var f;var z;var R={};var q=false;var c={};var ab;var j=false;var p;var d;var U=false;var G=false;var H;var Z=new a.html5.eventdispatcher();_utils.extend(this,Z);function K(){if(!ab){ab=l.skin.getSkinElement("controlbar","background");if(!ab){ab={width:0,height:0,src:null}}}return ab}function O(){ae=0;E=0;Q=0;if(!q){var ao={height:K().height,backgroundColor:D.backgroundcolor};af=document.createElement("div");af.id=l.id+"_jwplayer_controlbar";_css(af,ao)}var an=(l.skin.getSkinElement("controlbar","capLeft"));var am=(l.skin.getSkinElement("controlbar","capRight"));if(an){y("capLeft","left",false,af)}ac("background",af,{position:"absolute",height:K().height,left:(an?an.width:0),zIndex:0},"img");if(K().src){R.background.src=K().src}ac("elements",af,{position:"relative",height:K().height,zIndex:1});if(am){y("capRight","right",false,af)}}this.getDisplayElement=function(){return af};this.resize=function(ao,am){S();_utils.cancelAnimation(af);f=ao;z=am;if(G!=l.jwGetFullscreen()){G=l.jwGetFullscreen();d=undefined}var an=x();J({id:l.id,duration:ag,position:k});v({id:l.id,bufferPercent:g});return an};this.show=function(){if(j){j=false;_show(af);V()}};this.hide=function(){if(!j){j=true;_hide(af);ad()}};function r(){var an=["timeSlider","volumeSlider","timeSliderRail","volumeSliderRail"];for(var ao in an){var am=an[ao];if(typeof R[am]!="undefined"){c[am]=_utils.getBoundingClientRect(R[am])}}}var e;function Y(am){if(j){return}clearTimeout(p);if(D.position==a.html5.view.positions.OVER||l.jwGetFullscreen()){switch(l.jwGetState()){case a.api.events.state.PAUSED:case a.api.events.state.IDLE:if(af&&af.style.opacity<1&&(!D.idlehide||_utils.exists(am))){e=false;setTimeout(function(){if(!e){W()}},100)}if(D.idlehide){p=setTimeout(function(){A()},2000)}break;default:e=true;if(am){W()}p=setTimeout(function(){A()},2000);break}}else{W()}}function A(){if(!j){ad();if(af.style.opacity==1){_utils.cancelAnimation(af);_utils.fadeTo(af,0,0.1,1,0)}}}function W(){if(!j){V();if(af.style.opacity==0){_utils.cancelAnimation(af);_utils.fadeTo(af,1,0.1,0,0)}}}function I(am){return function(){if(U&&d!=am){d=am;Z.sendEvent(am,{component:"controlbar",boundingRect:P()})}}}var V=I(a.api.events.JWPLAYER_COMPONENT_SHOW);var ad=I(a.api.events.JWPLAYER_COMPONENT_HIDE);function P(){if(D.position==a.html5.view.positions.OVER||l.jwGetFullscreen()){return _utils.getDimensions(af)}else{return{x:0,y:0,width:0,height:0}}}function ac(aq,ap,ao,am){var an;if(!q){if(!am){am="div"}an=document.createElement(am);R[aq]=an;an.id=af.id+"_"+aq;ap.appendChild(an)}else{an=document.getElementById(af.id+"_"+aq)}if(_utils.exists(ao)){_css(an,ao)}return an}function N(){if(l.jwGetHeight()<=40){D.layout=_utils.clone(D.layout);for(var am=0;am<D.layout.left.elements.length;am++){if(D.layout.left.elements[am].name=="fullscreen"){D.layout.left.elements.splice(am,1)}}for(am=0;am<D.layout.right.elements.length;am++){if(D.layout.right.elements[am].name=="fullscreen"){D.layout.right.elements.splice(am,1)}}o()}al(D.layout.left);al(D.layout.center);al(D.layout.right)}function al(ap,am){var aq=ap.position=="right"?"right":"left";var ao=_utils.extend([],ap.elements);if(_utils.exists(am)){ao.reverse()}var ap=ac(ap.position+"Group",R.elements,{"float":"left",styleFloat:"left",cssFloat:"left",height:"100%"});for(var an=0;an<ao.length;an++){C(ao[an],aq,ap)}}function L(){return Q++}function C(aq,at,av){var ap,an,ao,am,aw;if(!av){av=R.elements}if(aq.type=="divider"){y("divider"+L(),at,true,av,undefined,aq.width,aq.element);return}switch(aq.name){case"play":y("playButton",at,false,av);y("pauseButton",at,true,av);T("playButton","jwPlay");T("pauseButton","jwPause");break;case"prev":y("prevButton",at,true,av);T("prevButton","jwPlaylistPrev");break;case"stop":y("stopButton",at,true,av);T("stopButton","jwStop");break;case"next":y("nextButton",at,true,av);T("nextButton","jwPlaylistNext");break;case"elapsed":y("elapsedText",at,true,av);break;case"time":an=!_utils.exists(l.skin.getSkinElement("controlbar","timeSliderCapLeft"))?0:l.skin.getSkinElement("controlbar","timeSliderCapLeft").width;ao=!_utils.exists(l.skin.getSkinElement("controlbar","timeSliderCapRight"))?0:l.skin.getSkinElement("controlbar","timeSliderCapRight").width;ap=at=="left"?an:ao;aw={height:K().height,position:"relative","float":"left",styleFloat:"left",cssFloat:"left"};var ar=ac("timeSlider",av,aw);y("timeSliderCapLeft",at,true,ar,"relative");y("timeSliderRail",at,false,ar,"relative");y("timeSliderBuffer",at,false,ar,"absolute");y("timeSliderProgress",at,false,ar,"absolute");y("timeSliderThumb",at,false,ar,"absolute");y("timeSliderCapRight",at,true,ar,"relative");aa("time");break;case"fullscreen":y("fullscreenButton",at,false,av);y("normalscreenButton",at,true,av);T("fullscreenButton","jwSetFullscreen",true);T("normalscreenButton","jwSetFullscreen",false);break;case"volume":an=!_utils.exists(l.skin.getSkinElement("controlbar","volumeSliderCapLeft"))?0:l.skin.getSkinElement("controlbar","volumeSliderCapLeft").width;ao=!_utils.exists(l.skin.getSkinElement("controlbar","volumeSliderCapRight"))?0:l.skin.getSkinElement("controlbar","volumeSliderCapRight").width;ap=at=="left"?an:ao;am=l.skin.getSkinElement("controlbar","volumeSliderRail").width+an+ao;aw={height:K().height,position:"relative",width:am,"float":"left",styleFloat:"left",cssFloat:"left"};var au=ac("volumeSlider",av,aw);y("volumeSliderCapLeft",at,false,au,"relative");y("volumeSliderRail",at,false,au,"relative");y("volumeSliderProgress",at,false,au,"absolute");y("volumeSliderThumb",at,false,au,"absolute");y("volumeSliderCapRight",at,false,au,"relative");aa("volume");break;case"mute":y("muteButton",at,false,av);y("unmuteButton",at,true,av);T("muteButton","jwSetMute",true);T("unmuteButton","jwSetMute",false);break;case"duration":y("durationText",at,true,av);break}}function y(ap,at,an,aw,aq,am,ao){if(_utils.exists(l.skin.getSkinElement("controlbar",ap))||ap.indexOf("Text")>0||ap.indexOf("divider")===0){var ar={height:"100%",position:aq?aq:"relative",display:"block","float":"left",styleFloat:"left",cssFloat:"left"};if((ap.indexOf("next")===0||ap.indexOf("prev")===0)&&(l.jwGetPlaylist().length<2||D.hideplaylistcontrols)){an=false;ar.display="none"}var ax;if(ap.indexOf("Text")>0){ap.innerhtml="00:00";ar.font=D.fontsize+"px/"+(K().height+1)+"px "+D.font;ar.color=D.fontcolor;ar.textAlign="center";ar.fontWeight=D.fontweight;ar.fontStyle=D.fontstyle;ar.cursor="default";ax=14+3*D.fontsize}else{if(ap.indexOf("divider")===0){if(am){if(!isNaN(parseInt(am))){ax=parseInt(am)}}else{if(ao){var au=l.skin.getSkinElement("controlbar",ao);if(au){ar.background="url("+au.src+") repeat-x center left";ax=au.width}}else{ar.background="url("+l.skin.getSkinElement("controlbar","divider").src+") repeat-x center left";ax=l.skin.getSkinElement("controlbar","divider").width}}}else{ar.background="url("+l.skin.getSkinElement("controlbar",ap).src+") repeat-x center left";ax=l.skin.getSkinElement("controlbar",ap).width}}if(at=="left"){if(an){ae+=ax}}else{if(at=="right"){if(an){E+=ax}}}if(_utils.typeOf(aw)=="undefined"){aw=R.elements}ar.width=ax;if(q){_css(R[ap],ar)}else{var av=ac(ap,aw,ar);if(_utils.exists(l.skin.getSkinElement("controlbar",ap+"Over"))){av.onmouseover=function(ay){av.style.backgroundImage=["url(",l.skin.getSkinElement("controlbar",ap+"Over").src,")"].join("")};av.onmouseout=function(ay){av.style.backgroundImage=["url(",l.skin.getSkinElement("controlbar",ap).src,")"].join("")}}if(ap.indexOf("divider")==0){av.setAttribute("class","divider")}}}}function F(){l.jwAddEventListener(a.api.events.JWPLAYER_PLAYLIST_LOADED,B);l.jwAddEventListener(a.api.events.JWPLAYER_PLAYLIST_ITEM,t);l.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_BUFFER,v);l.jwAddEventListener(a.api.events.JWPLAYER_PLAYER_STATE,s);l.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_TIME,J);l.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_MUTE,ak);l.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_VOLUME,n);l.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_COMPLETE,M)}function B(){if(!D.hideplaylistcontrols){if(l.jwGetPlaylist().length>1){_show(R.nextButton);_show(R.prevButton)}else{_hide(R.nextButton);_hide(R.prevButton)}x();ah()}}function t(am){ag=l.jwGetPlaylist()[am.index].duration;J({id:l.id,duration:ag,position:0});v({id:l.id,bufferProgress:0})}function ah(){J({id:l.id,duration:l.jwGetDuration(),position:0});v({id:l.id,bufferProgress:0});ak({id:l.id,mute:l.jwGetMute()});s({id:l.id,newstate:a.api.events.state.IDLE});n({id:l.id,volume:l.jwGetVolume()})}function T(ao,ap,an){if(q){return}if(_utils.exists(l.skin.getSkinElement("controlbar",ao))){var am=R[ao];if(_utils.exists(am)){_css(am,{cursor:"pointer"});if(ap=="fullscreen"){am.onmouseup=function(aq){aq.stopPropagation();l.jwSetFullscreen(!l.jwGetFullscreen())}}else{am.onmouseup=function(aq){aq.stopPropagation();if(_utils.exists(an)){l[ap](an)}else{l[ap]()}}}}}}function aa(am){if(q){return}var an=R[am+"Slider"];_css(R.elements,{cursor:"pointer"});_css(an,{cursor:"pointer"});an.onmousedown=function(ao){w=am};an.onmouseup=function(ao){ao.stopPropagation();aj(ao.pageX)};an.onmousemove=function(ao){if(w=="time"){h=true;var ap=ao.pageX-c[am+"Slider"].left-window.pageXOffset;_css(R[w+"SliderThumb"],{left:ap})}}}function aj(an){h=false;var am;if(w=="time"){am=an-c.timeSliderRail.left+window.pageXOffset;var ap=am/c.timeSliderRail.width*ag;if(ap<0){ap=0}else{if(ap>ag){ap=ag-3}}if(l.jwGetState()==a.api.events.state.PAUSED||l.jwGetState()==a.api.events.state.IDLE){l.jwPlay()}l.jwSeek(ap)}else{if(w=="volume"){am=an-c.volumeSliderRail.left-window.pageXOffset;var ao=Math.round(am/c.volumeSliderRail.width*100);if(ao<0){ao=0}else{if(ao>100){ao=100}}if(l.jwGetMute()){l.jwSetMute(false)}l.jwSetVolume(ao)}}w="none"}function v(an){if(_utils.exists(an.bufferPercent)){g=an.bufferPercent}if(c.timeSliderRail){var ap=l.skin.getSkinElement("controlbar","timeSliderCapLeft");var ao=c.timeSliderRail.width;var am=isNaN(Math.round(ao*g/100))?0:Math.round(ao*g/100);_css(R.timeSliderBuffer,{width:am,left:ap?ap.width:0})}}function ak(am){if(am.mute){_hide(R.muteButton);_show(R.unmuteButton);_hide(R.volumeSliderProgress)}else{_show(R.muteButton);_hide(R.unmuteButton);_show(R.volumeSliderProgress)}}function s(am){if(am.newstate==a.api.events.state.BUFFERING||am.newstate==a.api.events.state.PLAYING){_show(R.pauseButton);_hide(R.playButton)}else{_hide(R.pauseButton);_show(R.playButton)}Y();if(am.newstate==a.api.events.state.IDLE){_hide(R.timeSliderBuffer);_hide(R.timeSliderProgress);_hide(R.timeSliderThumb);J({id:l.id,duration:l.jwGetDuration(),position:0})}else{_show(R.timeSliderBuffer);if(am.newstate!=a.api.events.state.BUFFERING){_show(R.timeSliderProgress);_show(R.timeSliderThumb)}}}function M(am){v({bufferPercent:0});J(_utils.extend(am,{position:0,duration:ag}))}function J(ap){if(_utils.exists(ap.position)){k=ap.position}if(_utils.exists(ap.duration)){ag=ap.duration}var an=(k===ag===0)?0:k/ag;var ar=c.timeSliderRail;if(ar){var am=isNaN(Math.round(ar.width*an))?0:Math.round(ar.width*an);var aq=l.skin.getSkinElement("controlbar","timeSliderCapLeft");var ao=am+(aq?aq.width:0);if(R.timeSliderProgress){_css(R.timeSliderProgress,{width:am,left:aq?aq.width:0});if(!h){if(R.timeSliderThumb){R.timeSliderThumb.style.left=ao+"px"}}}}if(R.durationText){R.durationText.innerHTML=_utils.timeFormat(ag)}if(R.elapsedText){R.elapsedText.innerHTML=_utils.timeFormat(k)}}function o(){var am=R.elements.childNodes;var ar,ap;for(var ao=0;ao<am.length;ao++){var aq=am[ao].childNodes;for(var an in aq){if(isNaN(parseInt(an,10))){continue}if(aq[an].id.indexOf(af.id+"_divider")===0&&ap&&ap.id.indexOf(af.id+"_divider")===0&&aq[an].style.backgroundImage==ap.style.backgroundImage){aq[an].style.display="none"}else{if(aq[an].id.indexOf(af.id+"_divider")===0&&ar&&ar.style.display!="none"){aq[an].style.display="block"}}if(aq[an].style.display!="none"){ap=aq[an]}ar=aq[an]}}}function ai(){if(l.jwGetFullscreen()){_show(R.normalscreenButton);_hide(R.fullscreenButton)}else{_hide(R.normalscreenButton);_show(R.fullscreenButton)}if(l.jwGetState()==a.api.events.state.BUFFERING||l.jwGetState()==a.api.events.state.PLAYING){_show(R.pauseButton);_hide(R.playButton)}else{_hide(R.pauseButton);_show(R.playButton)}if(l.jwGetMute()==true){_hide(R.muteButton);_show(R.unmuteButton)}else{_show(R.muteButton);_hide(R.unmuteButton)}}function x(){o();ai();var ao={width:f};var aw={"float":"left",styleFloat:"left",cssFloat:"left"};if(D.position==a.html5.view.positions.OVER||l.jwGetFullscreen()){ao.left=D.margin;ao.width-=2*D.margin;ao.top=z-K().height-D.margin;ao.height=K().height}var aq=l.skin.getSkinElement("controlbar","capLeft");var au=l.skin.getSkinElement("controlbar","capRight");aw.width=ao.width-(aq?aq.width:0)-(au?au.width:0);var ap=_utils.getBoundingClientRect(R.leftGroup).width;var at=_utils.getBoundingClientRect(R.rightGroup).width;var ar=aw.width-ap-at;var an=ar;var am=l.skin.getSkinElement("controlbar","timeSliderCapLeft");var av=l.skin.getSkinElement("controlbar","timeSliderCapRight");if(_utils.exists(am)){an-=am.width}if(_utils.exists(av)){an-=av.width}R.timeSlider.style.width=ar+"px";R.timeSliderRail.style.width=an+"px";_css(af,ao);_css(R.elements,aw);_css(R.background,aw);r();return ao}function n(ar){if(_utils.exists(R.volumeSliderRail)){var ao=isNaN(ar.volume/100)?1:ar.volume/100;var ap=_utils.parseDimension(R.volumeSliderRail.style.width);var am=isNaN(Math.round(ap*ao))?0:Math.round(ap*ao);var at=_utils.parseDimension(R.volumeSliderRail.style.right);var an=(!_utils.exists(l.skin.getSkinElement("controlbar","volumeSliderCapLeft")))?0:l.skin.getSkinElement("controlbar","volumeSliderCapLeft").width;_css(R.volumeSliderProgress,{width:am,left:an});if(R.volumeSliderThumb){var aq=(am-Math.round(_utils.parseDimension(R.volumeSliderThumb.style.width)/2));aq=Math.min(Math.max(aq,0),ap-_utils.parseDimension(R.volumeSliderThumb.style.width));_css(R.volumeSliderThumb,{left:aq})}if(_utils.exists(R.volumeSliderCapLeft)){_css(R.volumeSliderCapLeft,{left:0})}}}function S(){H=document.getElementById(l.id);H.addEventListener("mousemove",Y)}function u(){O();N();r();q=true;F();D.idlehide=(D.idlehide.toString().toLowerCase()=="true");if(D.position==a.html5.view.positions.OVER&&D.idlehide){af.style.opacity=0;U=true}else{af.style.opacity=1;setTimeout((function(){U=true;V()}),1)}S();ah()}u();return this}})(jwplayer);(function(b){var a=["width","height","state","playlist","item","position","buffer","duration","volume","mute","fullscreen"];var c=b.utils;b.html5.controller=function(n,I,e,g){var m=n;var k=e;var h=g;var x=I;var K=true;var E=-1;var z=c.exists(k.config.debug)&&(k.config.debug.toString().toLowerCase()=="console");var L=new b.html5.eventdispatcher(x.id,z);c.extend(this,L);var B=[];var p=false;function J(Q){if(p){L.sendEvent(Q.type,Q)}else{B.push(Q)}}function r(Q){if(!p){p=true;L.sendEvent(b.api.events.JWPLAYER_READY,Q);if(b.utils.exists(window.playerReady)){playerReady(Q)}if(b.utils.exists(window[e.config.playerReady])){window[e.config.playerReady](Q)}while(B.length>0){var S=B.shift();L.sendEvent(S.type,S)}if(e.config.autostart&&!b.utils.isIOS()){M()}while(w.length>0){var R=w.shift();A(R.method,R.arguments)}}}k.addGlobalListener(J);k.addEventListener(b.api.events.JWPLAYER_MEDIA_BUFFER_FULL,function(){k.getMedia().play()});k.addEventListener(b.api.events.JWPLAYER_MEDIA_TIME,function(Q){if(Q.position>=k.playlist[k.item].start&&E>=0){k.playlist[k.item].start=E;E=-1}});k.addEventListener(b.api.events.JWPLAYER_MEDIA_COMPLETE,function(Q){setTimeout(C,25)});k.addEventListener(b.api.events.JWPLAYER_PLAYLIST_LOADED,M);k.addEventListener(b.api.events.JWPLAYER_FULLSCREEN,o);function D(){try{u(k.item);if(k.playlist[k.item].levels[0].file.length>0){if(K||k.state==b.api.events.state.IDLE){k.getMedia().load(k.playlist[k.item]);K=false}else{if(k.state==b.api.events.state.PAUSED){k.getMedia().play()}}}return true}catch(Q){L.sendEvent(b.api.events.JWPLAYER_ERROR,Q)}return false}function d(){try{if(k.playlist[k.item].levels[0].file.length>0){switch(k.state){case b.api.events.state.PLAYING:case b.api.events.state.BUFFERING:if(k.getMedia()){k.getMedia().pause()}break}}return true}catch(Q){L.sendEvent(b.api.events.JWPLAYER_ERROR,Q)}return false}function y(Q){try{if(k.playlist[k.item].levels[0].file.length>0){if(typeof Q!="number"){Q=parseFloat(Q)}switch(k.state){case b.api.events.state.IDLE:if(E<0){E=k.playlist[k.item].start;k.playlist[k.item].start=Q}D();break;case b.api.events.state.PLAYING:case b.api.events.state.PAUSED:case b.api.events.state.BUFFERING:k.seek(Q);break}}return true}catch(R){L.sendEvent(b.api.events.JWPLAYER_ERROR,R)}return false}function v(Q){if(!c.exists(Q)){Q=true}try{if(k.getMedia()){k.getMedia().stop(Q)}return true}catch(R){L.sendEvent(b.api.events.JWPLAYER_ERROR,R)}return false}function j(){try{if(k.playlist[k.item].levels[0].file.length>0){if(k.config.shuffle){u(P())}else{if(k.item+1==k.playlist.length){u(0)}else{u(k.item+1)}}}if(k.state!=b.api.events.state.IDLE){var R=k.state;k.state=b.api.events.state.IDLE;L.sendEvent(b.api.events.JWPLAYER_PLAYER_STATE,{oldstate:R,newstate:b.api.events.state.IDLE})}D();return true}catch(Q){L.sendEvent(b.api.events.JWPLAYER_ERROR,Q)}return false}function G(){try{if(k.playlist[k.item].levels[0].file.length>0){if(k.config.shuffle){u(P())}else{if(k.item===0){u(k.playlist.length-1)}else{u(k.item-1)}}}if(k.state!=b.api.events.state.IDLE){var R=k.state;k.state=b.api.events.state.IDLE;L.sendEvent(b.api.events.JWPLAYER_PLAYER_STATE,{oldstate:R,newstate:b.api.events.state.IDLE})}D();return true}catch(Q){L.sendEvent(b.api.events.JWPLAYER_ERROR,Q)}return false}function P(){var Q=null;if(k.playlist.length>1){while(!c.exists(Q)){Q=Math.floor(Math.random()*k.playlist.length);if(Q==k.item){Q=null}}}else{Q=0}return Q}function F(R){if(!k.playlist||!k.playlist[R]){return false}try{if(k.playlist[R].levels[0].file.length>0){var S=k.state;if(S!==b.api.events.state.IDLE){if(k.playlist[k.item].provider==k.playlist[R].provider){v(false)}else{v()}}u(R);D()}return true}catch(Q){L.sendEvent(b.api.events.JWPLAYER_ERROR,Q)}return false}function u(Q){if(!k.playlist[Q]){return}k.setActiveMediaProvider(k.playlist[Q]);if(k.item!=Q){k.item=Q;K=true;L.sendEvent(b.api.events.JWPLAYER_PLAYLIST_ITEM,{index:Q})}}function f(R){try{u(k.item);var S=k.getMedia();switch(typeof(R)){case"number":S.volume(R);break;case"string":S.volume(parseInt(R,10));break}return true}catch(Q){L.sendEvent(b.api.events.JWPLAYER_ERROR,Q)}return false}function q(R){try{u(k.item);var S=k.getMedia();if(typeof R=="undefined"){S.mute(!k.mute)}else{if(R.toString().toLowerCase()=="true"){S.mute(true)}else{S.mute(false)}}return true}catch(Q){L.sendEvent(b.api.events.JWPLAYER_ERROR,Q)}return false}function H(R,Q){try{k.width=R;k.height=Q;h.resize(R,Q);L.sendEvent(b.api.events.JWPLAYER_RESIZE,{width:k.width,height:k.height});return true}catch(S){L.sendEvent(b.api.events.JWPLAYER_ERROR,S)}return false}function t(R){try{if(typeof R=="undefined"){R=!k.fullscreen}if(R!=k.fullscreen){if(R.toString().toLowerCase()=="true"){k.fullscreen=true;h.fullscreen(true);L.sendEvent(b.api.events.JWPLAYER_FULLSCREEN,{fullscreen:true})}else{k.fullscreen=false;h.fullscreen(false);L.sendEvent(b.api.events.JWPLAYER_FULLSCREEN,{fullscreen:false})}L.sendEvent(b.api.events.JWPLAYER_RESIZE,{width:k.width,height:k.height})}return true}catch(Q){L.sendEvent(b.api.events.JWPLAYER_ERROR,Q)}return false}function O(Q){try{v();k.loadPlaylist(Q);if(k.playlist[k.item].provider){u(k.item);if(k.config.autostart.toString().toLowerCase()=="true"){D()}return true}else{return false}}catch(R){L.sendEvent(b.api.events.JWPLAYER_ERROR,R)}return false}function M(Q){u(k.playlist[k.item]);if(k.config.autostart.toString().toLowerCase()=="true"){D()}}function o(Q){t(Q.fullscreen)}function s(){try{return k.getMedia().detachMedia()}catch(Q){return null}}function l(){try{return k.getMedia().attachMedia()}catch(Q){return null}}b.html5.controller.repeatoptions={LIST:"LIST",ALWAYS:"ALWAYS",SINGLE:"SINGLE",NONE:"NONE"};function C(){switch(k.config.repeat.toUpperCase()){case b.html5.controller.repeatoptions.SINGLE:D();break;case b.html5.controller.repeatoptions.ALWAYS:if(k.item==k.playlist.length-1&&!k.config.shuffle){F(0)}else{j()}break;case b.html5.controller.repeatoptions.LIST:if(k.item==k.playlist.length-1&&!k.config.shuffle){v();u(0)}else{j()}break;default:v();break}}var w=[];function N(Q){return function(){if(p){A(Q,arguments)}else{w.push({method:Q,arguments:arguments})}}}function A(S,R){var Q=[];for(i=0;i<R.length;i++){Q.push(R[i])}S.apply(this,Q)}this.play=N(D);this.pause=N(d);this.seek=N(y);this.stop=N(v);this.next=N(j);this.prev=N(G);this.item=N(F);this.setVolume=N(f);this.setMute=N(q);this.resize=N(H);this.setFullscreen=N(t);this.load=N(O);this.playerReady=r;this.detachMedia=s;this.attachMedia=l}})(jwplayer);(function(a){a.html5.defaultSkin=function(){this.text='<?xml version="1.0" ?><skin author="LongTail Video" name="Five" version="1.1"><components><component name="controlbar"><settings><setting name="margin" value="20"/><setting name="fontsize" value="11"/><setting name="fontcolor" value="0x000000"/></settings><layout><group position="left"><button name="play"/><divider name="divider"/><button name="prev"/><divider name="divider"/><button name="next"/><divider name="divider"/><text name="elapsed"/></group><group position="center"><slider name="time"/></group><group position="right"><text name="duration"/><divider name="divider"/><button name="blank"/><divider name="divider"/><button name="mute"/><slider name="volume"/><divider name="divider"/><button name="fullscreen"/></group></layout><elements><element name="background" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAIAAABvFaqvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAElJREFUOI3t1LERACAMQlFgGvcfxNIhHMK4gsUvUviOmgtNsiAZkBSEKxKEnCYkkQrJn/YwbUNiSDDYRZaQRDaShv+oX9GBZEIuK+8hXVLs+/YAAAAASUVORK5CYII="/><element name="blankButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAYCAYAAAAyJzegAAAAFElEQVQYV2P8//8/AzpgHBUc7oIAGZdH0RjKN8EAAAAASUVORK5CYII="/><element name="capLeft" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAYCAYAAAA7zJfaAAAAQElEQVQIWz3LsRGAMADDQJ0XB5bMINABZ9GENGrszxhjT2WLSqxEJG2JQrTMdV2q5LpOAvyRaVmsi7WdeZ/7+AAaOTq7BVrfOQAAAABJRU5ErkJggg=="/><element name="capRight" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAYCAYAAAA7zJfaAAAAQElEQVQIWz3LsRGAMADDQJ0XB5bMINABZ9GENGrszxhjT2WLSqxEJG2JQrTMdV2q5LpOAvyRaVmsi7WdeZ/7+AAaOTq7BVrfOQAAAABJRU5ErkJggg=="/><element name="divider" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAYCAIAAAC0rgCNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADhJREFUCB0FwcENgEAAw7Aq+893g8APUILNOQcbFRktVGqUVFRkWNz3xTa2sUaLNUosKlRUvvf5AdbWOTtzmzyWAAAAAElFTkSuQmCC"/><element name="playButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAANUlEQVR42u2RsQkAAAjD/NTTPaW6dXLrINJA1kBpGPMAjDWmOgp1HFQXx+b1KOefO4oxY57R73YnVYCQUCQAAAAASUVORK5CYII="/><element name="pauseButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAAIUlEQVQ4jWNgGAWjYOiD/0gYG3/U0FFDB4Oho2AUDAYAAEwiL9HrpdMVAAAAAElFTkSuQmCC"/><element name="prevButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAAQklEQVQ4y2NgGAWjYOiD/1AMA/JAfB5NjCJD/YH4PRaLyDa0H4lNNUP/DxlD59PCUBCIp3ZEwYA+NZLUKBgFgwEAAN+HLX9sB8u8AAAAAElFTkSuQmCC"/><element name="nextButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAAQElEQVQ4y2NgGAWjYOiD/0B8Hojl0cT+U2ooCL8HYn9qGwrD/bQw9P+QMXQ+tSMqnpoRBUpS+tRMUqNgFAwGAADxZy1/mHvFnAAAAABJRU5ErkJggg=="/><element name="timeSliderRail" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAOElEQVRIDe3BwQkAIRADwAhhw/nU/kWwUK+KPITMABFh19Y+F0acY8CJvX9wYpXgRElwolSIiMf9ZWEDhtwurFsAAAAASUVORK5CYII="/><element name="timeSliderBuffer" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAN0lEQVRIDe3BwQkAMQwDMBcc55mRe9zi7RR+FCwBEWG39vcfGHFm4MTuhhMlwYlVBSdKhYh43AW/LQMKm1spzwAAAABJRU5ErkJggg=="/><element name="timeSliderProgress" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAIElEQVRIiWNgGAWjYBTQBfynMR61YCRYMApGwSigMQAAiVWPcbq6UkIAAAAASUVORK5CYII="/><element name="timeSliderThumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAYCAYAAAA/OUfnAAAAO0lEQVQYlWP4//8/Awwz0JgDBP/BeN6Cxf/hnI2btiI4u/fsQ3AOHjqK4Jw4eQbBOX/hEoKDYjSd/AMA4cS4mfLsorgAAAAASUVORK5CYII="/><element name="muteButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAYCAYAAADKx8xXAAAAJklEQVQ4y2NgGAUjDcwH4v/kaPxPikZkxcNVI9mBQ5XoGAWDFwAAsKAXKQQmfbUAAAAASUVORK5CYII="/><element name="unmuteButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAYCAYAAADKx8xXAAAAMklEQVQ4y2NgGAWDHPyntub5xBr6Hwv/Pzk2/yfVG/8psRFE25Oq8T+tQnsIaB4FVAcAi2YVysVY52AAAAAASUVORK5CYII="/><element name="volumeSliderRail" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYAgMAAACdGdVrAAAACVBMVEUAAACmpqampqbBXAu8AAAAAnRSTlMAgJsrThgAAAArSURBVAhbY2AgErBAyA4I2QEhOyBkB4TsYOhAoaCCUCUwDTDtMMNgRuMHAFB5FoGH5T0UAAAAAElFTkSuQmCC"/><element name="volumeSliderProgress" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYAgMAAACdGdVrAAAACVBMVEUAAAAAAAAAAACDY+nAAAAAAnRSTlMAgJsrThgAAAArSURBVAhbY2AgErBAyA4I2QEhOyBkB4TsYOhAoaCCUCUwDTDtMMNgRuMHAFB5FoGH5T0UAAAAAElFTkSuQmCC"/><element name="volumeSliderCapRight" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAYCAYAAAAyJzegAAAAFElEQVQYV2P8//8/AzpgHBUc7oIAGZdH0RjKN8EAAAAASUVORK5CYII="/><element name="fullscreenButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAQklEQVRIiWNgGAWjYMiD/0iYFDmSLbDHImdPLQtgBpEiR7Zl2NijAA5oEkT/0Whi5UiyAJ8BVMsHNMtoo2AUDAIAAGdcIN3IDNXoAAAAAElFTkSuQmCC"/><element name="normalscreenButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAP0lEQVRIx2NgGAWjYMiD/1RSQ5QB/wmIUWzJfzx8qhj+n4DYCAY0DyJ7PBbYU8sHMEvwiZFtODXUjIJRMJgBACpWIN2ZxdPTAAAAAElFTkSuQmCC"/></elements></component><component name="display"><elements><element name="background" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAQMAAAAk8RryAAAABlBMVEUAAAAAAAClZ7nPAAAAAnRSTlOZpuml+rYAAAASSURBVBhXY2AYJuA/GBwY6jQAyDyoK8QcL4QAAAAASUVORK5CYII="/><element name="playIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAiUlEQVR42u3XSw2AMBREURwgAQlIQAISKgUpSEFKJeCg5b0E0kWBTVcD9ySTsL0Jn9IBAAAA+K2UUrBlW/Rr5ZDoIeeuoFkxJD9ss03aIXXQqB9SttoG7ZA6qNcOKdttiwcJh9RB+iFl4SshkRBuLR72+9cvH0SOKI2HRo7x/Fi1/uoCAAAAwLsD8ki99IlO2dQAAAAASUVORK5CYII="/><element name="muteIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAVUlEQVR42u3WMQrAIAxAUW/g/SdvGmvpoOBeSHgPsjj5QTANAACARCJilIhYM0tEvJM+Ik3Id9E957kQIb+F3OdCPC0hPkQriqWx9hp/x/QGAABQyAPLB22VGrpLDgAAAABJRU5ErkJggg=="/><element name="errorIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAA/0lEQVR42u2U0QmEMBAF7cASLMESUoIlpARLSCkpwRJSgiWkhOvAXD4WsgRkyaG5DbyB+Yvg8KITAAAAAAAYk+u61mwk15EjPtlEfihmqIiZR1Qx80ghjgdUuiHXGHSVsoag0x6x8DUoyjD5KovmEJ9NTDMRPIT0mtdIUkjlonuNohO+Ha99DTmkuGgKCTcvebAzx82ZoCWC3/3aIMWSRucaxcjORSFY4xpFdjYJGp1rFGcyCYZ/RVh6AUnfcNZ2zih3/mGj1jVCdiNDwyrq1rA/xMdeEXvDVdnYc1vDc3uPkDObXrlaxbNHSOohQhr/WOeLEWfWTgAAAAAAADzNF9sHJ7PJ57MlAAAAAElFTkSuQmCC"/><element name="bufferIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACBklEQVR42u3Zv0sCYRzH8USTzOsHHEWGkC1HgaDgkktGDjUYtDQ01RDSljQ1BLU02+rk1NTm2NLq4Nx/0L/h9fnCd3j4cnZe1/U8xiO8h3uurufF0/3COd/3/0UWYiEWYiEWYiGJQ+J8xuPxKhXjEMZANinjIZhkGuVRNioE4wVURo4JkHm0xKWmhRAc1bh1EyCUw5BcBIjHiApKa4CErko6DEJwuRo6IRKzyJD8FJAyI3Zp2zRImiBcRhlfo5RtlxCcE3CcDNpGrhYIT2IhAJKilO0VRmzJ32fAMTpBTS0QMfGwlcuKMRftE0DJ0wCJdcOsCkBdXP3Mh9CEFUBTPS9mDZJBG6io4aqVzMdCokCw9H3kT6j/C/9iDdSeUMNC7DkyyxAs/Rk6Qss8FPWRZgdVtUH4DjxEn1zxh+/zj1wHlf4MQhNGrwqA6sY40U8JonRJwEQh+AO3AvCG6gHv4U7IY4krxkroWoAOkoQMGfCBrgIm+YBGqPENpIJ66CJg3x66Y0gnSUidAEEnNr9jjLiWMn5DiWP0OC/oAsCgkq43xBdGDMQr7YASP/vEkHvdl1+JOCcEV5sC4hGEOzTlPuKgd0b0xD4JkRcOgnRRTjdErkYhAsQVq6IdUuPJtmk7BCL3t/h88cx91pKQkI/pkDx6pmYTIjEoxiHsN1YWYiEWYiEWknhflZ5IErA5nr8AAAAASUVORK5CYII="/></elements></component><component name="dock"><settings><setting name="fontcolor" value="0xffffff"/></settings><elements><element name="button" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAQMAAAAk8RryAAAABlBMVEUAAAAAAAClZ7nPAAAAAnRSTlOZpuml+rYAAAASSURBVBhXY2AYJuA/GBwY6jQAyDyoK8QcL4QAAAAASUVORK5CYII="/></elements></component><component name="playlist"><settings><setting name="backgroundcolor" value="0xe8e8e8"/></settings><elements><element name="item" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAIAAAC1nk4lAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHBJREFUaN7t2MENwCAMBEEe9N8wSKYC/D8YV7CyJoRkVtVImxkZPQInMxoP0XiIxkM0HsGbjjSNBx544IEHHnjggUe/6UQeey0PIh7XTftGxKPj4eXCtLsHHh+ZxkO0Iw8PR55Ni8ZD9Hu/EAoP0dc5RRg9qeRjVF8AAAAASUVORK5CYII="/><element name="sliderCapTop" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAHCAYAAADnCQYGAAAAFUlEQVQokWP8//8/A7UB46ihI9hQAKt6FPPXhVGHAAAAAElFTkSuQmCC"/><element name="sliderRail" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAAKElEQVQ4y2P4//8/Az68bNmy/+iYkB6GUUNHDR01dNTQUUNHDaXcUABUDOKhcxnsSwAAAABJRU5ErkJggg=="/><element name="sliderThumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAAJUlEQVQ4T2P4//8/Ay4MBP9xYbz6Rg0dNXTU0FFDRw0dNZRyQwHH4NBa7GJsXAAAAABJRU5ErkJggg=="/><element name="sliderCapBottom" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAHCAYAAADnCQYGAAAAFUlEQVQokWP8//8/A7UB46ihI9hQAKt6FPPXhVGHAAAAAElFTkSuQmCC"/></elements></component></components></skin>';this.xml=null;if(window.DOMParser){parser=new DOMParser();this.xml=parser.parseFromString(this.text,"text/xml")}else{this.xml=new ActiveXObject("Microsoft.XMLDOM");this.xml.async="false";this.xml.loadXML(this.text)}return this}})(jwplayer);(function(a){_utils=a.utils;_css=_utils.css;_hide=function(b){_css(b,{display:"none"})};_show=function(b){_css(b,{display:"block"})};a.html5.display=function(k,H){var j={icons:true,showmute:false};var S=_utils.extend({},j,H);var h=k;var R={};var e;var u;var x;var P;var s;var J;var B;var K=!_utils.exists(h.skin.getComponentSettings("display").bufferrotation)?15:parseInt(h.skin.getComponentSettings("display").bufferrotation,10);var q=!_utils.exists(h.skin.getComponentSettings("display").bufferinterval)?100:parseInt(h.skin.getComponentSettings("display").bufferinterval,10);var A=-1;var t="";var L=true;var d;var g=false;var n=false;var w,N;var I=new a.html5.eventdispatcher();_utils.extend(this,I);var E={display:{style:{cursor:"pointer",top:0,left:0,overflow:"hidden"},click:m},display_icon:{style:{cursor:"pointer",position:"absolute",top:((h.skin.getSkinElement("display","background").height-h.skin.getSkinElement("display","playIcon").height)/2),left:((h.skin.getSkinElement("display","background").width-h.skin.getSkinElement("display","playIcon").width)/2),border:0,margin:0,padding:0,zIndex:3,display:"none"}},display_iconBackground:{style:{cursor:"pointer",position:"absolute",top:((u-h.skin.getSkinElement("display","background").height)/2),left:((e-h.skin.getSkinElement("display","background").width)/2),border:0,backgroundImage:(["url(",h.skin.getSkinElement("display","background").src,")"]).join(""),width:h.skin.getSkinElement("display","background").width,height:h.skin.getSkinElement("display","background").height,margin:0,padding:0,zIndex:2,display:"none"}},display_image:{style:{display:"none",width:e,height:u,position:"absolute",cursor:"pointer",left:0,top:0,margin:0,padding:0,textDecoration:"none",zIndex:1}},display_text:{style:{zIndex:4,position:"relative",opacity:0.8,backgroundColor:parseInt("000000",16),color:parseInt("ffffff",16),textAlign:"center",fontFamily:"Arial,sans-serif",padding:"0 5px",fontSize:14}}};h.jwAddEventListener(a.api.events.JWPLAYER_PLAYER_STATE,o);h.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_MUTE,o);h.jwAddEventListener(a.api.events.JWPLAYER_PLAYLIST_ITEM,o);h.jwAddEventListener(a.api.events.JWPLAYER_ERROR,p);M();function M(){R.display=D("div","display");R.display_text=D("div","display_text");R.display.appendChild(R.display_text);R.display_image=D("img","display_image");R.display_image.onerror=function(T){_hide(R.display_image)};R.display_image.onload=z;R.display_icon=D("div","display_icon");R.display_iconBackground=D("div","display_iconBackground");R.display.appendChild(R.display_image);R.display_iconBackground.appendChild(R.display_icon);R.display.appendChild(R.display_iconBackground);f();setTimeout((function(){n=true;if(S.icons.toString()=="true"){G()}}),1)}this.getDisplayElement=function(){return R.display};this.resize=function(U,T){_css(R.display,{width:U,height:T});_css(R.display_text,{width:(U-10),top:((T-_utils.getBoundingClientRect(R.display_text).height)/2)});_css(R.display_iconBackground,{top:((T-h.skin.getSkinElement("display","background").height)/2),left:((U-h.skin.getSkinElement("display","background").width)/2)});if(e!=U||u!=T){e=U;u=T;d=undefined;G()}if(!h.jwGetFullscreen()){w=U;N=T}c();o({})};this.show=function(){if(g){g=false;r(h.jwGetState())}};this.hide=function(){if(!g){C();g=true}};function z(T){x=R.display_image.naturalWidth;P=R.display_image.naturalHeight;c()}function c(){if(h.jwGetFullscreen()&&h.jwGetStretching()==a.utils.stretching.EXACTFIT){var T=document.createElement("div");_utils.stretch(a.utils.stretching.UNIFORM,T,e,u,w,N);_utils.stretch(a.utils.stretching.EXACTFIT,R.display_image,_utils.parseDimension(T.style.width),_utils.parseDimension(T.style.height),x,P);_css(R.display_image,{left:T.style.left,top:T.style.top})}else{_utils.stretch(h.jwGetStretching(),R.display_image,e,u,x,P)}}function D(T,V){var U=document.createElement(T);U.id=h.id+"_jwplayer_"+V;_css(U,E[V].style);return U}function f(){for(var T in R){if(_utils.exists(E[T].click)){R[T].onclick=E[T].click}}}function m(T){if(typeof T.preventDefault!="undefined"){T.preventDefault()}else{T.returnValue=false}if(h.jwGetState()!=a.api.events.state.PLAYING){h.jwPlay()}else{h.jwPause()}}function Q(T){if(B){C();return}R.display_icon.style.backgroundImage=(["url(",h.skin.getSkinElement("display",T).src,")"]).join("");_css(R.display_icon,{width:h.skin.getSkinElement("display",T).width,height:h.skin.getSkinElement("display",T).height,top:(h.skin.getSkinElement("display","background").height-h.skin.getSkinElement("display",T).height)/2,left:(h.skin.getSkinElement("display","background").width-h.skin.getSkinElement("display",T).width)/2});b();if(_utils.exists(h.skin.getSkinElement("display",T+"Over"))){R.display_icon.onmouseover=function(U){R.display_icon.style.backgroundImage=["url(",h.skin.getSkinElement("display",T+"Over").src,")"].join("")};R.display_icon.onmouseout=function(U){R.display_icon.style.backgroundImage=["url(",h.skin.getSkinElement("display",T).src,")"].join("")}}else{R.display_icon.onmouseover=null;R.display_icon.onmouseout=null}}function C(){if(S.icons.toString()=="true"){_hide(R.display_icon);_hide(R.display_iconBackground);O()}}function b(){if(!g&&S.icons.toString()=="true"){_show(R.display_icon);_show(R.display_iconBackground);G()}}function p(T){B=true;C();R.display_text.innerHTML=T.message;_show(R.display_text);R.display_text.style.top=((u-_utils.getBoundingClientRect(R.display_text).height)/2)+"px"}function F(){R.display_image.style.display="none"}function o(T){if((T.type==a.api.events.JWPLAYER_PLAYER_STATE||T.type==a.api.events.JWPLAYER_PLAYLIST_ITEM)&&B){B=false;_hide(R.display_text)}var U=h.jwGetState();if(U==t){return}t=U;if(A>=0){clearTimeout(A)}if(L||h.jwGetState()==a.api.events.state.PLAYING||h.jwGetState()==a.api.events.state.PAUSED){r(h.jwGetState())}else{A=setTimeout(l(h.jwGetState()),500)}}function l(T){return(function(){r(T)})}function r(T){if(_utils.exists(J)){clearInterval(J);J=null;_utils.animations.rotate(R.display_icon,0)}switch(T){case a.api.events.state.BUFFERING:if(_utils.isMobile()){F();C()}else{if(h.jwGetPlaylist()[h.jwGetItem()].provider=="sound"){v()}s=0;J=setInterval(function(){s+=K;_utils.animations.rotate(R.display_icon,s%360)},q);Q("bufferIcon");L=true}break;case a.api.events.state.PAUSED:if(!_utils.isMobile()){if(h.jwGetPlaylist()[h.jwGetItem()].provider!="sound"){_css(R.display_image,{background:"transparent no-repeat center center"})}Q("playIcon");L=true}break;case a.api.events.state.IDLE:if(h.jwGetPlaylist()[h.jwGetItem()]&&h.jwGetPlaylist()[h.jwGetItem()].image){v()}else{F()}Q("playIcon");L=true;break;default:if(h.jwGetPlaylist()[h.jwGetItem()]&&h.jwGetPlaylist()[h.jwGetItem()].provider=="sound"){if(_utils.isMobile()){F();L=false}else{v()}}else{F();L=false}if(h.jwGetMute()&&S.showmute){Q("muteIcon")}else{C()}break}A=-1}function v(){if(h.jwGetPlaylist()[h.jwGetItem()]&&h.jwGetPlaylist()[h.jwGetItem()].image){_css(R.display_image,{display:"block"});R.display_image.src=_utils.getAbsolutePath(h.jwGetPlaylist()[h.jwGetItem()].image)}}function y(T){return function(){if(!n){return}if(!g&&d!=T){d=T;I.sendEvent(T,{component:"display",boundingRect:_utils.getDimensions(R.display_iconBackground)})}}}var G=y(a.api.events.JWPLAYER_COMPONENT_SHOW);var O=y(a.api.events.JWPLAYER_COMPONENT_HIDE);return this}})(jwplayer);(function(a){var c=a.utils;var b=c.css;a.html5.dock=function(v,C){function w(){return{align:a.html5.view.positions.RIGHT}}var m=c.extend({},w(),C);if(m.align=="FALSE"){return}var h={};var z=[];var j;var E;var f=false;var B=false;var g={x:0,y:0,width:0,height:0};var y;var n;var x;var l=new a.html5.eventdispatcher();c.extend(this,l);var q=document.createElement("div");q.id=v.id+"_jwplayer_dock";q.style.opacity=1;o();v.jwAddEventListener(a.api.events.JWPLAYER_PLAYER_STATE,p);this.getDisplayElement=function(){return q};this.setButton=function(J,G,H,I){if(!G&&h[J]){c.arrays.remove(z,J);q.removeChild(h[J].div);delete h[J]}else{if(G){if(!h[J]){h[J]={}}h[J].handler=G;h[J].outGraphic=H;h[J].overGraphic=I;if(!h[J].div){z.push(J);h[J].div=document.createElement("div");h[J].div.style.position="relative";q.appendChild(h[J].div);h[J].div.appendChild(document.createElement("img"));h[J].div.childNodes[0].style.position="absolute";h[J].div.childNodes[0].style.left=0;h[J].div.childNodes[0].style.top=0;h[J].div.childNodes[0].style.zIndex=10;h[J].div.childNodes[0].style.cursor="pointer";h[J].div.appendChild(document.createElement("img"));h[J].div.childNodes[1].style.position="absolute";h[J].div.childNodes[1].style.left=0;h[J].div.childNodes[1].style.top=0;if(v.skin.getSkinElement("dock","button")){h[J].div.childNodes[1].src=v.skin.getSkinElement("dock","button").src}h[J].div.childNodes[1].style.zIndex=9;h[J].div.childNodes[1].style.cursor="pointer";h[J].div.onmouseover=function(){if(h[J].overGraphic){h[J].div.childNodes[0].src=h[J].overGraphic}if(v.skin.getSkinElement("dock","buttonOver")){h[J].div.childNodes[1].src=v.skin.getSkinElement("dock","buttonOver").src}};h[J].div.onmouseout=function(){if(h[J].outGraphic){h[J].div.childNodes[0].src=h[J].outGraphic}if(v.skin.getSkinElement("dock","button")){h[J].div.childNodes[1].src=v.skin.getSkinElement("dock","button").src}};if(v.skin.getSkinElement("dock","button")){h[J].div.childNodes[1].src=v.skin.getSkinElement("dock","button").src}}if(h[J].outGraphic){h[J].div.childNodes[0].src=h[J].outGraphic}else{if(h[J].overGraphic){h[J].div.childNodes[0].src=h[J].overGraphic}}if(G){h[J].div.onclick=function(K){K.preventDefault();a(v.id).callback(J);if(h[J].overGraphic){h[J].div.childNodes[0].src=h[J].overGraphic}if(v.skin.getSkinElement("dock","button")){h[J].div.childNodes[1].src=v.skin.getSkinElement("dock","button").src}}}}}k(j,E)};function s(G){}function k(G,S){o();if(z.length>0){var H=10;var R=H;var O=-1;var P=v.skin.getSkinElement("dock","button").height;var N=v.skin.getSkinElement("dock","button").width;var L=G-N-H;var Q,K;if(m.align==a.html5.view.positions.LEFT){O=1;L=H}for(var I=0;I<z.length;I++){var T=Math.floor(R/S);if((R+P+H)>((T+1)*S)){R=((T+1)*S)+H;T=Math.floor(R/S)}var J=h[z[I]].div;J.style.top=(R%S)+"px";J.style.left=(L+(v.skin.getSkinElement("dock","button").width+H)*T*O)+"px";var M={x:c.parseDimension(J.style.left),y:c.parseDimension(J.style.top),width:N,height:P};if(!Q||(M.x<=Q.x&&M.y<=Q.y)){Q=M}if(!K||(M.x>=K.x&&M.y>=K.y)){K=M}R+=v.skin.getSkinElement("dock","button").height+H}g={x:Q.x,y:Q.y,width:K.x-Q.x+K.width,height:Q.y-K.y+K.height}}if(B!=v.jwGetFullscreen()||j!=G||E!=S){j=G;E=S;B=v.jwGetFullscreen();y=undefined;setTimeout(r,1)}}function d(G){return function(){if(!f&&y!=G&&z.length>0){y=G;l.sendEvent(G,{component:"dock",boundingRect:g})}}}function p(G){if(c.isMobile()){if(G.newstate==a.api.events.state.IDLE){u()}else{e()}}else{A()}}function A(G){if(f){return}clearTimeout(x);if(C.position==a.html5.view.positions.OVER||v.jwGetFullscreen()){switch(v.jwGetState()){case a.api.events.state.PAUSED:case a.api.events.state.IDLE:if(q&&q.style.opacity<1&&(!C.idlehide||c.exists(G))){D()}if(C.idlehide){x=setTimeout(function(){t()},2000)}break;default:if(c.exists(G)){D()}x=setTimeout(function(){t()},2000);break}}else{D()}}var r=d(a.api.events.JWPLAYER_COMPONENT_SHOW);var F=d(a.api.events.JWPLAYER_COMPONENT_HIDE);this.resize=k;var u=function(){b(q,{display:"block"});if(f){f=false;r()}};var e=function(){b(q,{display:"none"});if(!f){F();f=true}};function t(){if(!f){F();if(q.style.opacity==1){c.cancelAnimation(q);c.fadeTo(q,0,0.1,1,0)}}}function D(){if(!f){r();if(q.style.opacity==0){c.cancelAnimation(q);c.fadeTo(q,1,0.1,0,0)}}}function o(){n=document.getElementById(v.id);n.addEventListener("mousemove",A)}this.hide=e;this.show=u;return this}})(jwplayer);(function(a){a.html5.eventdispatcher=function(d,b){var c=new a.events.eventdispatcher(b);a.utils.extend(this,c);this.sendEvent=function(e,f){if(!a.utils.exists(f)){f={}}a.utils.extend(f,{id:d,version:a.version,type:e});c.sendEvent(e,f)}}})(jwplayer);(function(a){var b={prefix:"http://l.longtailvideo.com/html5/",file:"logo.png",link:"http://www.longtailvideo.com/players/jw-flv-player/",margin:8,out:0.5,over:1,timeout:5,hide:true,position:"bottom-left"};_css=a.utils.css;a.html5.logo=function(n,r){var q=n;var u;var d;var t;var h=false;g();function g(){o();q.jwAddEventListener(a.api.events.JWPLAYER_PLAYER_STATE,j);c();l()}function o(){if(b.prefix){var v=n.version.split(/\W/).splice(0,2).join("/");if(b.prefix.indexOf(v)<0){b.prefix+=v+"/"}}if(r.position==a.html5.view.positions.OVER){r.position=b.position}try{if(window.location.href.indexOf("https")==0){b.prefix=b.prefix.replace("http://l.longtailvideo.com","https://securel.longtailvideo.com")}}catch(w){}d=a.utils.extend({},b)}function c(){t=document.createElement("img");t.id=q.id+"_jwplayer_logo";t.style.display="none";t.onload=function(v){_css(t,k());p()};if(!d.file){return}if(d.file.indexOf("/")>=0){t.src=d.file}else{t.src=d.prefix+d.file}}if(!d.file){return}this.resize=function(w,v){};this.getDisplayElement=function(){return t};function l(){if(d.link){t.onmouseover=f;t.onmouseout=p;t.onclick=s}else{this.mouseEnabled=false}}function s(v){if(typeof v!="undefined"){v.stopPropagation()}if(!h){return}q.jwPause();q.jwSetFullscreen(false);if(d.link){window.open(d.link,"_top")}return}function p(v){if(d.link&&h){t.style.opacity=d.out}return}function f(v){if(h){t.style.opacity=d.over}return}function k(){var x={textDecoration:"none",position:"absolute",cursor:"pointer"};x.display=(d.hide.toString()=="true"&&!h)?"none":"block";var w=d.position.toLowerCase().split("-");for(var v in w){x[w[v]]=d.margin}return x}function m(){if(d.hide.toString()=="true"){t.style.display="block";t.style.opacity=0;a.utils.fadeTo(t,d.out,0.1,parseFloat(t.style.opacity));u=setTimeout(function(){e()},d.timeout*1000)}h=true}function e(){h=false;if(d.hide.toString()=="true"){a.utils.fadeTo(t,0,0.1,parseFloat(t.style.opacity))}}function j(v){if(v.newstate==a.api.events.state.BUFFERING){clearTimeout(u);m()}}return this}})(jwplayer);(function(b){var d={ended:b.api.events.state.IDLE,playing:b.api.events.state.PLAYING,pause:b.api.events.state.PAUSED,buffering:b.api.events.state.BUFFERING};var e=b.utils;var c=e.css;var a=e.isMobile();b.html5.mediavideo=function(j,v){var u={abort:p,canplay:m,canplaythrough:m,durationchange:L,emptied:p,ended:m,error:x,loadeddata:L,loadedmetadata:L,loadstart:m,pause:m,play:p,playing:m,progress:y,ratechange:p,seeked:m,seeking:m,stalled:m,suspend:m,timeupdate:I,volumechange:E,waiting:m,canshowcurrentframe:p,dataunavailable:p,empty:p,load:D,loadedfirstframe:p,webkitfullscreenchange:k};var l=new b.html5.eventdispatcher();e.extend(this,l);var B=j,n=v,o,G,F,A,g,M=false,C=false,H,r,s;q();this.load=function(O,P){if(typeof P=="undefined"){P=true}if(!C){return}A=O;e.empty(o);s=0;if(O.levels&&O.levels.length>0){if(O.levels.length==1){o.src=O.levels[0].file}else{f(O.levels);if(o.src){o.removeAttribute("src")}for(var N=0;N<O.levels.length;N++){var Q=o.ownerDocument.createElement("source");Q.src=O.levels[N].file;o.appendChild(Q);s++}}}else{o.src=O.file}if(a){if(O.image){o.poster=O.image}o.style.display="block";setTimeout(function(){o.setAttribute("controls","controls")},100)}H=r=F=false;B.buffer=0;if(!e.exists(O.start)){O.start=0}B.duration=O.duration;l.sendEvent(b.api.events.JWPLAYER_MEDIA_LOADED);if((!a&&O.levels.length==1)||!M){o.load()}M=false;if(P){J(b.api.events.state.BUFFERING);l.sendEvent(b.api.events.JWPLAYER_MEDIA_BUFFER,{bufferPercent:0});this.play()}};this.play=function(){if(!C){return}if(G!=b.api.events.state.PLAYING){w();if(r){J(b.api.events.state.PLAYING)}else{J(b.api.events.state.BUFFERING)}o.play()}};this.pause=function(){if(!C){return}o.pause();J(b.api.events.state.PAUSED)};this.seek=function(N){if(!C){return}if(!(B.duration<=0||isNaN(B.duration))&&!(B.position<=0||isNaN(B.position))){o.currentTime=N;o.play()}};_stop=this.stop=function(N){if(!C){return}if(!e.exists(N)){N=true}h();if(N){o.style.display="none";r=false;var O=navigator.userAgent;if(O.match(/chrome/i)){o.src=undefined}else{if(O.match(/safari/i)||O.match(/firefox/i)){o.removeAttribute("src")}else{o.src=""}}o.removeAttribute("controls");o.removeAttribute("poster");e.empty(o);o.load();M=true;if(o.webkitSupportsFullscreen){try{o.webkitExitFullscreen()}catch(P){}}}J(b.api.events.state.IDLE)};this.fullscreen=function(N){if(N===true){this.resize("100%","100%")}else{this.resize(B.config.width,B.config.height)}};this.resize=function(O,N){};this.volume=function(N){if(!a){o.volume=N/100}};this.mute=function(N){if(!a){o.muted=N}};this.getDisplayElement=function(){return o};this.hasChrome=function(){return a};this.detachMedia=function(){C=false;return this.getDisplayElement()};this.attachMedia=function(){C=true};function t(O,N){return function(P){if(C&&e.exists(P.target.parentNode)){N(P)}}}function q(){o=document.createElement("video");G=b.api.events.state.IDLE;for(var N in u){o.addEventListener(N,t(N,u[N]),true)}C=true;o.setAttribute("x-webkit-airplay","allow");if(n.parentNode){n.parentNode.replaceChild(o,n)}if(!o.id){o.id=n.id}o.volume=B.volume/100}function J(N){if(N==b.api.events.state.PAUSED&&G==b.api.events.state.IDLE){return}if(G!=N){var O=G;B.state=G=N;l.sendEvent(b.api.events.JWPLAYER_PLAYER_STATE,{oldstate:O,newstate:N})}}function p(N){}function E(N){var O=Math.round(o.volume*100);if(O!=B.volume){B.volume=O;l.sendEvent(b.api.events.JWPLAYER_MEDIA_VOLUME,{volume:B.volume})}if(o.muted!=B.mute){B.mute=o.muted;l.sendEvent(b.api.events.JWPLAYER_MEDIA_MUTE,{mute:B.mute})}}function y(P){var O;if(e.exists(P)&&P.lengthComputable&&P.total){O=P.loaded/P.total*100}else{if(e.exists(o.buffered)&&(o.buffered.length>0)){var N=o.buffered.length-1;if(N>=0){O=o.buffered.end(N)/o.duration*100}}}if(r===false&&G==b.api.events.state.BUFFERING){l.sendEvent(b.api.events.JWPLAYER_MEDIA_BUFFER_FULL);r=true}if(!H){if(O==100){H=true}if(e.exists(O)&&(O>B.buffer)){B.buffer=Math.round(O);l.sendEvent(b.api.events.JWPLAYER_MEDIA_BUFFER,{bufferPercent:Math.round(O)})}}}function I(O){if(e.exists(O)&&e.exists(O.target)){if(!isNaN(O.target.duration)&&(isNaN(B.duration)||B.duration<1)){if(O.target.duration==Infinity){B.duration=0}else{B.duration=Math.round(O.target.duration*10)/10}}if(!F&&o.readyState>0){o.style.display="block";J(b.api.events.state.PLAYING)}if(G==b.api.events.state.PLAYING){if(!F&&o.readyState>0){F=true;try{if(o.currentTime<A.start){o.currentTime=A.start}}catch(N){}o.volume=B.volume/100;o.muted=B.mute}B.position=B.duration>0?(Math.round(O.target.currentTime*10)/10):0;l.sendEvent(b.api.events.JWPLAYER_MEDIA_TIME,{position:B.position,duration:B.duration});if(B.position>=B.duration&&(B.position>0||B.duration>0)){z()}}}y(O)}function D(N){}function m(N){if(d[N.type]){if(N.type=="ended"){z()}else{J(d[N.type])}}}function L(O){var N=Math.round(O.target.duration*10)/10;var P={height:O.target.videoHeight,width:O.target.videoWidth,duration:N};if((B.duration<N||isNaN(B.duration))&&O.target.duration!=Infinity){B.duration=N}l.sendEvent(b.api.events.JWPLAYER_MEDIA_META,{metadata:P})}function x(P){if(G==b.api.events.state.IDLE){return}var O="There was an error: ";if((P.target.error&&P.target.tagName.toLowerCase()=="video")||P.target.parentNode.error&&P.target.parentNode.tagName.toLowerCase()=="video"){var N=!e.exists(P.target.error)?P.target.parentNode.error:P.target.error;switch(N.code){case N.MEDIA_ERR_ABORTED:O="You aborted the video playback: ";break;case N.MEDIA_ERR_NETWORK:O="A network error caused the video download to fail part-way: ";break;case N.MEDIA_ERR_DECODE:O="The video playback was aborted due to a corruption problem or because the video used features your browser did not support: ";break;case N.MEDIA_ERR_SRC_NOT_SUPPORTED:O="The video could not be loaded, either because the server or network failed or because the format is not supported: ";break;default:O="An unknown error occurred: ";break}}else{if(P.target.tagName.toLowerCase()=="source"){s--;if(s>0){return}O="The video could not be loaded, either because the server or network failed or because the format is not supported: "}else{e.log("An unknown error occurred.  Continuing...");return}}_stop(false);O+=K();_error=true;l.sendEvent(b.api.events.JWPLAYER_ERROR,{message:O});return}function K(){var P="";for(var O in A.levels){var N=A.levels[O];var Q=n.ownerDocument.createElement("source");P+=b.utils.getAbsolutePath(N.file);if(O<(A.levels.length-1)){P+=", "}}return P}function w(){if(!e.exists(g)){g=setInterval(function(){y()},100)}}function h(){clearInterval(g);g=null}function z(){if(G!=b.api.events.state.IDLE){_stop(false);l.sendEvent(b.api.events.JWPLAYER_MEDIA_COMPLETE)}}function k(N){if(e.exists(o.webkitDisplayingFullscreen)){if(B.fullscreen&&!o.webkitDisplayingFullscreen){l.sendEvent(b.api.events.JWPLAYER_FULLSCREEN,{fullscreen:false})}}}function f(P){if(P.length>0&&e.isIOS()){if(e.extension(P[0].file)!="mp4"){var N=-1;for(var O=1;O<P.length;O++){if(e.extension(P[O].file)=="mp4"){N=O;break}}if(N>-1){var Q=P.splice(N,1)[0];P.unshift(Q)}}}}}})(jwplayer);(function(a){var c={ended:a.api.events.state.IDLE,playing:a.api.events.state.PLAYING,pause:a.api.events.state.PAUSED,buffering:a.api.events.state.BUFFERING};var b=a.utils.css;a.html5.mediayoutube=function(j,e){var f=new a.html5.eventdispatcher();a.utils.extend(this,f);var l=j;var h=document.getElementById(e.id);var g=a.api.events.state.IDLE;var n,m;function k(p){if(g!=p){var q=g;l.state=p;g=p;f.sendEvent(a.api.events.JWPLAYER_PLAYER_STATE,{oldstate:q,newstate:p})}}this.getDisplayElement=this.detachMedia=function(){return h};this.attachMedia=function(){};this.play=function(){if(g==a.api.events.state.IDLE){f.sendEvent(a.api.events.JWPLAYER_MEDIA_BUFFER,{bufferPercent:100});f.sendEvent(a.api.events.JWPLAYER_MEDIA_BUFFER_FULL);k(a.api.events.state.PLAYING)}else{if(g==a.api.events.state.PAUSED){k(a.api.events.state.PLAYING)}}};this.pause=function(){k(a.api.events.state.PAUSED)};this.seek=function(p){};this.stop=function(p){if(!_utils.exists(p)){p=true}l.position=0;k(a.api.events.state.IDLE);if(p){b(h,{display:"none"})}};this.volume=function(p){l.volume=p;f.sendEvent(a.api.events.JWPLAYER_MEDIA_VOLUME,{volume:Math.round(p)})};this.mute=function(p){h.muted=p;l.mute=p;f.sendEvent(a.api.events.JWPLAYER_MEDIA_MUTE,{mute:p})};this.resize=function(q,p){if(q*p>0&&n){n.width=m.width=q;n.height=m.height=p}};this.fullscreen=function(p){if(p===true){this.resize("100%","100%")}else{this.resize(l.config.width,l.config.height)}};this.load=function(p){o(p);b(n,{display:"block"});k(a.api.events.state.BUFFERING);f.sendEvent(a.api.events.JWPLAYER_MEDIA_BUFFER,{bufferPercent:0});f.sendEvent(a.api.events.JWPLAYER_MEDIA_LOADED);this.play()};this.hasChrome=function(){return(g!=a.api.events.state.IDLE)};function o(v){var s=v.levels[0].file;s=["http://www.youtube.com/v/",d(s),"&amp;hl=en_US&amp;fs=1&autoplay=1"].join("");n=document.createElement("object");n.id=h.id;n.style.position="absolute";var u={movie:s,allowfullscreen:"true",allowscriptaccess:"always"};for(var p in u){var t=document.createElement("param");t.name=p;t.value=u[p];n.appendChild(t)}m=document.createElement("embed");n.appendChild(m);var q={src:s,type:"application/x-shockwave-flash",allowfullscreen:"true",allowscriptaccess:"always",width:n.width,height:n.height};for(var r in q){m.setAttribute(r,q[r])}n.appendChild(m);n.style.zIndex=2147483000;if(h!=n&&h.parentNode){h.parentNode.replaceChild(n,h)}h=n}function d(q){var p=q.split(/\?|\#\!/);var s="";for(var r=0;r<p.length;r++){if(p[r].substr(0,2)=="v="){s=p[r].substr(2)}}if(s==""){if(q.indexOf("/v/")>=0){s=q.substr(q.indexOf("/v/")+3)}else{if(q.indexOf("youtu.be")>=0){s=q.substr(q.indexOf("youtu.be/")+9)}else{s=q}}}if(s.indexOf("?")>-1){s=s.substr(0,s.indexOf("?"))}if(s.indexOf("&")>-1){s=s.substr(0,s.indexOf("&"))}return s}this.embed=m;return this}})(jwplayer);(function(jwplayer){var _configurableStateVariables=["width","height","start","duration","volume","mute","fullscreen","item","plugins","stretching"];jwplayer.html5.model=function(api,container,options){var _api=api;var _container=container;var _model={id:_container.id,playlist:[],state:jwplayer.api.events.state.IDLE,position:0,buffer:0,config:{width:480,height:320,item:-1,skin:undefined,file:undefined,image:undefined,start:0,duration:0,bufferlength:5,volume:90,mute:false,fullscreen:false,repeat:"",stretching:jwplayer.utils.stretching.UNIFORM,autostart:false,debug:undefined,screencolor:undefined}};var _media;var _eventDispatcher=new jwplayer.html5.eventdispatcher();var _components=["display","logo","controlbar","playlist","dock"];jwplayer.utils.extend(_model,_eventDispatcher);for(var option in options){if(typeof options[option]=="string"){var type=/color$/.test(option)?"color":null;options[option]=jwplayer.utils.typechecker(options[option],type)}var config=_model.config;var path=option.split(".");for(var edge in path){if(edge==path.length-1){config[path[edge]]=options[option]}else{if(!jwplayer.utils.exists(config[path[edge]])){config[path[edge]]={}}config=config[path[edge]]}}}for(var index in _configurableStateVariables){var configurableStateVariable=_configurableStateVariables[index];_model[configurableStateVariable]=_model.config[configurableStateVariable]}var pluginorder=_components.concat([]);if(jwplayer.utils.exists(_model.plugins)){if(typeof _model.plugins=="string"){var userplugins=_model.plugins.split(",");for(var userplugin in userplugins){if(typeof userplugins[userplugin]=="string"){pluginorder.push(userplugins[userplugin].replace(/^\s+|\s+$/g,""))}}}}if(jwplayer.utils.isMobile()){pluginorder=["display","logo","dock","playlist"];if(!jwplayer.utils.exists(_model.config.repeat)){_model.config.repeat="list"}}else{if(_model.config.chromeless){pluginorder=["logo","dock","playlist"];if(!jwplayer.utils.exists(_model.config.repeat)){_model.config.repeat="list"}}}_model.plugins={order:pluginorder,config:{},object:{}};if(typeof _model.config.components!="undefined"){for(var component in _model.config.components){_model.plugins.config[component]=_model.config.components[component]}}var playlistVisible=false;for(var pluginIndex in _model.plugins.order){var pluginName=_model.plugins.order[pluginIndex];var pluginConfig=!jwplayer.utils.exists(_model.plugins.config[pluginName])?{}:_model.plugins.config[pluginName];_model.plugins.config[pluginName]=!jwplayer.utils.exists(_model.plugins.config[pluginName])?pluginConfig:jwplayer.utils.extend(_model.plugins.config[pluginName],pluginConfig);if(!jwplayer.utils.exists(_model.plugins.config[pluginName].position)){if(pluginName=="playlist"){_model.plugins.config[pluginName].position=jwplayer.html5.view.positions.NONE}else{_model.plugins.config[pluginName].position=jwplayer.html5.view.positions.OVER}}else{if(pluginName=="playlist"){playlistVisible=true}_model.plugins.config[pluginName].position=_model.plugins.config[pluginName].position.toString().toUpperCase()}}if(_model.plugins.config.controlbar&&playlistVisible){_model.plugins.config.controlbar.hideplaylistcontrols=true}if(typeof _model.plugins.config.dock!="undefined"){if(typeof _model.plugins.config.dock!="object"){var position=_model.plugins.config.dock.toString().toUpperCase();_model.plugins.config.dock={position:position}}if(typeof _model.plugins.config.dock.position!="undefined"){_model.plugins.config.dock.align=_model.plugins.config.dock.position;_model.plugins.config.dock.position=jwplayer.html5.view.positions.OVER}if(typeof _model.plugins.config.dock.idlehide=="undefined"){try{_model.plugins.config.dock.idlehide=_model.plugins.config.controlbar.idlehide}catch(e){}}}function _loadExternal(playlistfile){var loader=new jwplayer.html5.playlistloader();loader.addEventListener(jwplayer.api.events.JWPLAYER_PLAYLIST_LOADED,function(evt){_model.playlist=new jwplayer.html5.playlist(evt);_loadComplete(true)});loader.addEventListener(jwplayer.api.events.JWPLAYER_ERROR,function(evt){_model.playlist=new jwplayer.html5.playlist({playlist:[]});_loadComplete(false)});loader.load(playlistfile)}function _loadComplete(){if(_model.config.shuffle){_model.item=_getShuffleItem()}else{if(_model.config.item>=_model.playlist.length){_model.config.item=_model.playlist.length-1}else{if(_model.config.item<0){_model.config.item=0}}_model.item=_model.config.item}_model.position=0;_model.duration=_model.playlist.length>0?_model.playlist[_model.item].duration:0;_eventDispatcher.sendEvent(jwplayer.api.events.JWPLAYER_PLAYLIST_LOADED,{playlist:_model.playlist});_eventDispatcher.sendEvent(jwplayer.api.events.JWPLAYER_PLAYLIST_ITEM,{index:_model.item})}_model.loadPlaylist=function(arg){var input;if(typeof arg=="string"){if(arg.indexOf("[")==0||arg.indexOf("{")=="0"){try{input=eval(arg)}catch(err){input=arg}}else{input=arg}}else{input=arg}var config;switch(jwplayer.utils.typeOf(input)){case"object":config=input;break;case"array":config={playlist:input};break;default:config={file:input};break}_model.playlist=new jwplayer.html5.playlist(config);_model.item=_model.config.item>=0?_model.config.item:0;if(!_model.playlist[_model.item].provider){_loadExternal(_model.playlist[_model.item].file)}else{_loadComplete()}};function _getShuffleItem(){var result=null;if(_model.playlist.length>1){while(!jwplayer.utils.exists(result)){result=Math.floor(Math.random()*_model.playlist.length);if(result==_model.item){result=null}}}else{result=0}return result}function forward(evt){if(evt.type==jwplayer.api.events.JWPLAYER_MEDIA_LOADED){_container=_media.getDisplayElement()}_eventDispatcher.sendEvent(evt.type,evt)}var _mediaProviders={};_model.setActiveMediaProvider=function(playlistItem){if(playlistItem.provider=="audio"){playlistItem.provider="sound"}var provider=playlistItem.provider;var current=_media?_media.getDisplayElement():null;if(provider=="sound"||provider=="http"||provider==""){provider="video"}if(!jwplayer.utils.exists(_mediaProviders[provider])){switch(provider){case"video":_media=new jwplayer.html5.mediavideo(_model,current?current:_container);break;case"youtube":_media=new jwplayer.html5.mediayoutube(_model,current?current:_container);break}if(!jwplayer.utils.exists(_media)){return false}_media.addGlobalListener(forward);_mediaProviders[provider]=_media}else{if(_media!=_mediaProviders[provider]){if(_media){_media.stop()}_media=_mediaProviders[provider]}}return true};_model.getMedia=function(){return _media};_model.seek=function(pos){_eventDispatcher.sendEvent(jwplayer.api.events.JWPLAYER_MEDIA_SEEK,{position:_model.position,offset:pos});return _media.seek(pos)};_model.setupPlugins=function(){if(!jwplayer.utils.exists(_model.plugins)||!jwplayer.utils.exists(_model.plugins.order)||_model.plugins.order.length==0){jwplayer.utils.log("No plugins to set up");return _model}for(var i=0;i<_model.plugins.order.length;i++){try{var pluginName=_model.plugins.order[i];if(jwplayer.utils.exists(jwplayer.html5[pluginName])){if(pluginName=="playlist"){_model.plugins.object[pluginName]=new jwplayer.html5.playlistcomponent(_api,_model.plugins.config[pluginName])}else{_model.plugins.object[pluginName]=new jwplayer.html5[pluginName](_api,_model.plugins.config[pluginName])}}else{_model.plugins.order.splice(plugin,plugin+1)}if(typeof _model.plugins.object[pluginName].addGlobalListener=="function"){_model.plugins.object[pluginName].addGlobalListener(forward)}}catch(err){jwplayer.utils.log("Could not setup "+pluginName)}}};return _model}})(jwplayer);(function(a){a.html5.playlist=function(b){var d=[];if(b.playlist&&b.playlist instanceof Array&&b.playlist.length>0){for(var c in b.playlist){if(!isNaN(parseInt(c))){d.push(new a.html5.playlistitem(b.playlist[c]))}}}else{d.push(new a.html5.playlistitem(b))}return d}})(jwplayer);(function(a){var c={size:180,position:a.html5.view.positions.NONE,itemheight:60,thumbs:true,fontcolor:"#000000",overcolor:"",activecolor:"",backgroundcolor:"#f8f8f8",font:"_sans",fontsize:"",fontstyle:"",fontweight:""};var b={_sans:"Arial, Helvetica, sans-serif",_serif:"Times, Times New Roman, serif",_typewriter:"Courier New, Courier, monospace"};_utils=a.utils;_css=_utils.css;_hide=function(d){_css(d,{display:"none"})};_show=function(d){_css(d,{display:"block"})};a.html5.playlistcomponent=function(r,B){var w=r;var e=a.utils.extend({},c,w.skin.getComponentSettings("playlist"),B);if(e.position==a.html5.view.positions.NONE||typeof a.html5.view.positions[e.position]=="undefined"){return}var x;var l;var C;var d;var g;var f;var k=-1;var h={background:undefined,item:undefined,itemOver:undefined,itemImage:undefined,itemActive:undefined};this.getDisplayElement=function(){return x};this.resize=function(F,D){l=F;C=D;if(w.jwGetFullscreen()){_hide(x)}else{var E={display:"block",width:l,height:C};_css(x,E)}};this.show=function(){_show(x)};this.hide=function(){_hide(x)};function j(){x=document.createElement("div");x.id=w.id+"_jwplayer_playlistcomponent";x.style.overflow="hidden";switch(e.position){case a.html5.view.positions.RIGHT:case a.html5.view.positions.LEFT:x.style.width=e.size+"px";break;case a.html5.view.positions.TOP:case a.html5.view.positions.BOTTOM:x.style.height=e.size+"px";break}A();if(h.item){e.itemheight=h.item.height}x.style.backgroundColor="#C6C6C6";w.jwAddEventListener(a.api.events.JWPLAYER_PLAYLIST_LOADED,s);w.jwAddEventListener(a.api.events.JWPLAYER_PLAYLIST_ITEM,u);w.jwAddEventListener(a.api.events.JWPLAYER_PLAYER_STATE,m)}function p(){var D=document.createElement("ul");_css(D,{width:x.style.width,minWidth:x.style.width,height:x.style.height,backgroundColor:e.backgroundcolor,backgroundImage:h.background?"url("+h.background.src+")":"",color:e.fontcolor,listStyle:"none",margin:0,padding:0,fontFamily:b[e.font]?b[e.font]:b._sans,fontSize:(e.fontsize?e.fontsize:11)+"px",fontStyle:e.fontstyle,fontWeight:e.fontweight,overflowY:"auto"});return D}function y(D){return function(){var E=f.getElementsByClassName("item")[D];var F=e.fontcolor;var G=h.item?"url("+h.item.src+")":"";if(D==w.jwGetPlaylistIndex()){if(e.activecolor!==""){F=e.activecolor}if(h.itemActive){G="url("+h.itemActive.src+")"}}_css(E,{color:e.overcolor!==""?e.overcolor:F,backgroundImage:h.itemOver?"url("+h.itemOver.src+")":G})}}function o(D){return function(){var E=f.getElementsByClassName("item")[D];var F=e.fontcolor;var G=h.item?"url("+h.item.src+")":"";if(D==w.jwGetPlaylistIndex()){if(e.activecolor!==""){F=e.activecolor}if(h.itemActive){G="url("+h.itemActive.src+")"}}_css(E,{color:F,backgroundImage:G})}}function q(I){var P=d[I];var O=document.createElement("li");O.className="item";_css(O,{height:e.itemheight,display:"block",cursor:"pointer",backgroundImage:h.item?"url("+h.item.src+")":"",backgroundSize:"100% "+e.itemheight+"px"});O.onmouseover=y(I);O.onmouseout=o(I);var J=document.createElement("div");var F=new Image();var K=0;var L=0;var M=0;if(v()&&(P.image||P["playlist.image"]||h.itemImage)){F.className="image";if(h.itemImage){K=(e.itemheight-h.itemImage.height)/2;L=h.itemImage.width;M=h.itemImage.height}else{L=e.itemheight*4/3;M=e.itemheight}_css(J,{height:M,width:L,"float":"left",styleFloat:"left",cssFloat:"left",margin:"0 5px 0 0",background:"black",overflow:"hidden",margin:K+"px",position:"relative"});_css(F,{position:"relative"});J.appendChild(F);F.onload=function(){a.utils.stretch(a.utils.stretching.FILL,F,L,M,this.naturalWidth,this.naturalHeight)};if(P["playlist.image"]){F.src=P["playlist.image"]}else{if(P.image){F.src=P.image}else{if(h.itemImage){F.src=h.itemImage.src}}}O.appendChild(J)}var E=l-L-K*2;if(C<e.itemheight*d.length){E-=15}var D=document.createElement("div");_css(D,{position:"relative",height:"100%",overflow:"hidden"});var G=document.createElement("span");if(P.duration>0){G.className="duration";_css(G,{fontSize:(e.fontsize?e.fontsize:11)+"px",fontWeight:(e.fontweight?e.fontweight:"bold"),width:"40px",height:e.fontsize?e.fontsize+10:20,lineHeight:24,"float":"right",styleFloat:"right",cssFloat:"right"});G.innerHTML=_utils.timeFormat(P.duration);D.appendChild(G)}var N=document.createElement("span");N.className="title";_css(N,{padding:"5px 5px 0 "+(K?0:"5px"),height:e.fontsize?e.fontsize+10:20,lineHeight:e.fontsize?e.fontsize+10:20,overflow:"hidden","float":"left",styleFloat:"left",cssFloat:"left",width:((P.duration>0)?E-50:E)-10+"px",fontSize:(e.fontsize?e.fontsize:13)+"px",fontWeight:(e.fontweight?e.fontweight:"bold")});N.innerHTML=P?P.title:"";D.appendChild(N);if(P.description){var H=document.createElement("span");H.className="description";_css(H,{display:"block","float":"left",styleFloat:"left",cssFloat:"left",margin:0,paddingLeft:N.style.paddingLeft,paddingRight:N.style.paddingRight,lineHeight:(e.fontsize?e.fontsize+4:16)+"px",overflow:"hidden",position:"relative"});H.innerHTML=P.description;D.appendChild(H)}O.appendChild(D);return O}function s(E){x.innerHTML="";d=w.jwGetPlaylist();if(!d){return}items=[];f=p();for(var F=0;F<d.length;F++){var D=q(F);D.onclick=z(F);f.appendChild(D);items.push(D)}k=w.jwGetPlaylistIndex();o(k)();x.appendChild(f);if(_utils.isIOS()&&window.iScroll){f.style.height=e.itemheight*d.length+"px";var G=new iScroll(x.id)}}function z(D){return function(){w.jwPlaylistItem(D);w.jwPlay(true)}}function n(){f.scrollTop=w.jwGetPlaylistIndex()*e.itemheight}function v(){return e.thumbs.toString().toLowerCase()=="true"}function u(D){if(k>=0){o(k)();k=D.index}o(D.index)();n()}function m(){if(e.position==a.html5.view.positions.OVER){switch(w.jwGetState()){case a.api.events.state.IDLE:_show(x);break;default:_hide(x);break}}}function A(){for(var D in h){h[D]=t(D)}}function t(D){return w.skin.getSkinElement("playlist",D)}j();return this}})(jwplayer);(function(b){b.html5.playlistitem=function(d){var e={author:"",date:"",description:"",image:"",link:"",mediaid:"",tags:"",title:"",provider:"",file:"",streamer:"",duration:-1,start:0,currentLevel:-1,levels:[]};var c=b.utils.extend({},e,d);if(c.type){c.provider=c.type;delete c.type}if(c.levels.length===0){c.levels[0]=new b.html5.playlistitemlevel(c)}if(!c.provider){c.provider=a(c.levels[0])}else{c.provider=c.provider.toLowerCase()}return c};function a(e){if(b.utils.isYouTube(e.file)){return"youtube"}else{var f=b.utils.extension(e.file);var c;if(f&&b.utils.extensionmap[f]){if(f=="m3u8"){return"video"}c=b.utils.extensionmap[f].html5}else{if(e.type){c=e.type}}if(c){var d=c.split("/")[0];if(d=="audio"){return"sound"}else{if(d=="video"){return d}}}}return""}})(jwplayer);(function(a){a.html5.playlistitemlevel=function(b){var d={file:"",streamer:"",bitrate:0,width:0};for(var c in d){if(a.utils.exists(b[c])){d[c]=b[c]}}return d}})(jwplayer);(function(a){a.html5.playlistloader=function(){var c=new a.html5.eventdispatcher();a.utils.extend(this,c);this.load=function(e){a.utils.ajax(e,d,b)};function d(g){var f=[];try{var f=a.utils.parsers.rssparser.parse(g.responseXML.firstChild);c.sendEvent(a.api.events.JWPLAYER_PLAYLIST_LOADED,{playlist:new a.html5.playlist({playlist:f})})}catch(h){b("Could not parse the playlist")}}function b(e){c.sendEvent(a.api.events.JWPLAYER_ERROR,{message:e?e:"Could not load playlist an unknown reason."})}}})(jwplayer);(function(a){a.html5.skin=function(){var b={};var c=false;this.load=function(d,e){new a.html5.skinloader(d,function(f){c=true;b=f;e()},function(){new a.html5.skinloader("",function(f){c=true;b=f;e()})})};this.getSkinElement=function(d,e){if(c){try{return b[d].elements[e]}catch(f){a.utils.log("No such skin component / element: ",[d,e])}}return null};this.getComponentSettings=function(d){if(c){return b[d].settings}return null};this.getComponentLayout=function(d){if(c){return b[d].layout}return null}}})(jwplayer);(function(a){a.html5.skinloader=function(f,p,k){var o={};var c=p;var l=k;var e=true;var j;var n=f;var s=false;function m(){if(typeof n!="string"||n===""){d(a.html5.defaultSkin().xml)}else{a.utils.ajax(a.utils.getAbsolutePath(n),function(t){try{if(a.utils.exists(t.responseXML)){d(t.responseXML);return}}catch(u){h()}d(a.html5.defaultSkin().xml)},function(t){d(a.html5.defaultSkin().xml)})}}function d(y){var E=y.getElementsByTagName("component");if(E.length===0){return}for(var H=0;H<E.length;H++){var C=E[H].getAttribute("name");var B={settings:{},elements:{},layout:{}};o[C]=B;var G=E[H].getElementsByTagName("elements")[0].getElementsByTagName("element");for(var F=0;F<G.length;F++){b(G[F],C)}var z=E[H].getElementsByTagName("settings")[0];if(z&&z.childNodes.length>0){var K=z.getElementsByTagName("setting");for(var P=0;P<K.length;P++){var Q=K[P].getAttribute("name");var I=K[P].getAttribute("value");var x=/color$/.test(Q)?"color":null;o[C].settings[Q]=a.utils.typechecker(I,x)}}var L=E[H].getElementsByTagName("layout")[0];if(L&&L.childNodes.length>0){var M=L.getElementsByTagName("group");for(var w=0;w<M.length;w++){var A=M[w];o[C].layout[A.getAttribute("position")]={elements:[]};for(var O=0;O<A.attributes.length;O++){var D=A.attributes[O];o[C].layout[A.getAttribute("position")][D.name]=D.value}var N=A.getElementsByTagName("*");for(var v=0;v<N.length;v++){var t=N[v];o[C].layout[A.getAttribute("position")].elements.push({type:t.tagName});for(var u=0;u<t.attributes.length;u++){var J=t.attributes[u];o[C].layout[A.getAttribute("position")].elements[v][J.name]=J.value}if(!a.utils.exists(o[C].layout[A.getAttribute("position")].elements[v].name)){o[C].layout[A.getAttribute("position")].elements[v].name=t.tagName}}}}e=false;r()}}function r(){clearInterval(j);if(!s){j=setInterval(function(){q()},100)}}function b(y,x){var w=new Image();var t=y.getAttribute("name");var v=y.getAttribute("src");var A;if(v.indexOf("data:image/png;base64,")===0){A=v}else{var u=a.utils.getAbsolutePath(n);var z=u.substr(0,u.lastIndexOf("/"));A=[z,x,v].join("/")}o[x].elements[t]={height:0,width:0,src:"",ready:false,image:w};w.onload=function(B){g(w,t,x)};w.onerror=function(B){s=true;r();l()};w.src=A}function h(){for(var u in o){var w=o[u];for(var t in w.elements){var x=w.elements[t];var v=x.image;v.onload=null;v.onerror=null;delete x.image;delete w.elements[t]}delete o[u]}}function q(){for(var t in o){if(t!="properties"){for(var u in o[t].elements){if(!o[t].elements[u].ready){return}}}}if(e===false){clearInterval(j);c(o)}}function g(t,v,u){if(o[u]&&o[u].elements[v]){o[u].elements[v].height=t.height;o[u].elements[v].width=t.width;o[u].elements[v].src=t.src;o[u].elements[v].ready=true;r()}else{a.utils.log("Loaded an image for a missing element: "+u+"."+v)}}m()}})(jwplayer);(function(a){a.html5.api=function(c,n){var m={};var f=document.createElement("div");c.parentNode.replaceChild(f,c);f.id=c.id;m.version=a.version;m.id=f.id;var l=new a.html5.model(m,f,n);var j=new a.html5.view(m,f,l);var k=new a.html5.controller(m,f,l,j);m.skin=new a.html5.skin();m.jwPlay=function(o){if(typeof o=="undefined"){e()}else{if(o.toString().toLowerCase()=="true"){k.play()}else{k.pause()}}};m.jwPause=function(o){if(typeof o=="undefined"){e()}else{if(o.toString().toLowerCase()=="true"){k.pause()}else{k.play()}}};function e(){if(l.state==a.api.events.state.PLAYING||l.state==a.api.events.state.BUFFERING){k.pause()}else{k.play()}}m.jwStop=k.stop;m.jwSeek=k.seek;m.jwPlaylistItem=k.item;m.jwPlaylistNext=k.next;m.jwPlaylistPrev=k.prev;m.jwResize=k.resize;m.jwLoad=k.load;m.jwDetachMedia=k.detachMedia;m.jwAttachMedia=k.attachMedia;function h(o){return function(){return l[o]}}function d(o,q,p){return function(){var r=l.plugins.object[o];if(r&&r[q]&&typeof r[q]=="function"){r[q].apply(r,p)}}}m.jwGetItem=h("item");m.jwGetPosition=h("position");m.jwGetDuration=h("duration");m.jwGetBuffer=h("buffer");m.jwGetWidth=h("width");m.jwGetHeight=h("height");m.jwGetFullscreen=h("fullscreen");m.jwSetFullscreen=k.setFullscreen;m.jwGetVolume=h("volume");m.jwSetVolume=k.setVolume;m.jwGetMute=h("mute");m.jwSetMute=k.setMute;m.jwGetStretching=function(){return l.stretching.toUpperCase()};m.jwGetState=h("state");m.jwGetVersion=function(){return m.version};m.jwGetPlaylist=function(){return l.playlist};m.jwGetPlaylistIndex=m.jwGetItem;m.jwAddEventListener=k.addEventListener;m.jwRemoveEventListener=k.removeEventListener;m.jwSendEvent=k.sendEvent;m.jwDockSetButton=function(r,o,p,q){if(l.plugins.object.dock&&l.plugins.object.dock.setButton){l.plugins.object.dock.setButton(r,o,p,q)}};m.jwControlbarShow=d("controlbar","show");m.jwControlbarHide=d("controlbar","hide");m.jwDockShow=d("dock","show");m.jwDockHide=d("dock","hide");m.jwDisplayShow=d("display","show");m.jwDisplayHide=d("display","hide");m.jwGetLevel=function(){};m.jwGetBandwidth=function(){};m.jwGetLockState=function(){};m.jwLock=function(){};m.jwUnlock=function(){};function b(){if(l.config.playlistfile){l.addEventListener(a.api.events.JWPLAYER_PLAYLIST_LOADED,g);l.loadPlaylist(l.config.playlistfile)}else{if(typeof l.config.playlist=="string"){l.addEventListener(a.api.events.JWPLAYER_PLAYLIST_LOADED,g);l.loadPlaylist(l.config.playlist)}else{l.loadPlaylist(l.config);setTimeout(g,25)}}}function g(o){l.removeEventListener(a.api.events.JWPLAYER_PLAYLIST_LOADED,g);l.setupPlugins();j.setup();var o={id:m.id,version:m.version};k.playerReady(o)}if(l.config.chromeless&&!a.utils.isIOS()){b()}else{m.skin.load(l.config.skin,b)}return m}})(jwplayer)};;
$(function(){$("a.link-popup-contact").each(function(){var self=this;$(this).overlay({mask:{top:200,color:'#ccc',loadSpeed:50,opacity:0.5},onBeforeLoad:function(){var wrap=this.getOverlay().find(".contentWrap");wrap.html('');var href=$(self).attr('href');wrap.load(href);}});});$('#contact_submit').live('click',function(){var requestUrl=$('#vt_form_contact').attr('action');$('#vt_contact_name').attr('disabled','disabled');$('#vt_contact_email').attr('disabled','disabled');$('#vt_contact_msisdn').attr('disabled','disabled');$('#vt_contact_subject').attr('disabled','disabled');$('#vt_contact_content').attr('disabled','disabled');var vt_contact={name:$.trim($('#vt_contact_name').val()),email:$.trim($('#vt_contact_email').val()),msisdn:$.trim($('#vt_contact_msisdn').val()),subject:$.trim($('#vt_contact_subject').val()),content:$.trim($('#vt_contact_content').val()),_csrf_token:$('#vt_contact__csrf_token').val(),captcha:$('#vt_contact_captcha').val()};$.post(requestUrl,{vt_contact:vt_contact},function(data)
{$('#overlay-login .contentWrap').html(data);return false;});return false;});$('a.view-more-cate').click(function(){$(this).parent().find('.ul_view_cate').toggleClass('_hidecate');if($(this).hasClass('lnk_show_cate')){$(this).html('Xem thêm').removeClass('lnk_show_cate');}else{$(this).html('Rút gọn').addClass('lnk_show_cate');}});});;
(function($){$('.has_default_text').each(function(){$(this).focus(function(){var defaultText=$(this).attr('default_text');if($.trim($(this).val())===defaultText){$(this).val("");}}).blur(function(){var defaultText=$(this).attr('default_text');if($.trim($(this).val())===''){$(this).val(defaultText);}});});var lyricContent=$('.box-info ._info-content');if(lyricContent.size())
{lyricContent.each(function(){var self=$(this);var height=self.height();if(height>100)
{self.addClass('_hide_detail');self.parent().find('a.view-more').show();}});}
$('a.view-more').click(function(){$(this).parent().find('._info-content').toggleClass('_hide_detail');if($(this).hasClass('show')){$(this).html('«&nbsp; Rút gọn').removeClass('show');}else{$(this).html('»&nbsp; Xem toàn bộ').addClass('show');}});})(jQuery);function htmlEncode(value){return $('<div/>').text(value).html();}
function htmlDecode(value){return $('<div/>').html(value).text();}
var listPlayerInPages=[];function insertPlayerIntoPage(playerName){var i=0;for(i in listPlayerInPages){if(listPlayerInPages[i]==playerName){return;}}
listPlayerInPages.push(playerName);}
function stopAllPlayerInPageWithout(playerName){for(i in listPlayerInPages){if(listPlayerInPages[i]!=playerName){jwpLayer(listPlayerInPages[i]).stop(true);}}}
function pauseAllPlayerInPageWithout(playerName){for(i in listPlayerInPages){if(listPlayerInPages[i]!=playerName){jwplayer(listPlayerInPages[i]).pause(true);}}};(function(a){function b(b,c){function q(){d.update();s();return d}function r(){j.obj.css(l,n/h.ratio);g.obj.css(l,-n);p["start"]=j.obj.offset()[l];var a=m.toLowerCase();h.obj.css(a,i[c.axis]);i.obj.css(a,i[c.axis]);j.obj.css(a,j[c.axis])}function s(){j.obj.bind("mousedown",t);j.obj[0].ontouchstart=function(a){a.preventDefault();j.obj.unbind("mousedown");t(a.touches[0]);return false};i.obj.bind("mouseup",w);if(c.scroll&&this.addEventListener){e[0].addEventListener("DOMMouseScroll",u,false);e[0].addEventListener("mousewheel",u,false)}else if(c.scroll){e[0].onmousewheel=u}}function t(b){p.start=k?b.pageX:b.pageY;var c=parseInt(j.obj.css(l));o.start=c=="auto"?0:c;a(document).bind("mousemove",w);document.ontouchmove=function(b){a(document).unbind("mousemove");w(b.touches[0])};a(document).bind("mouseup",v);j.obj.bind("mouseup",v);j.obj[0].ontouchend=document.ontouchend=function(b){a(document).unbind("mouseup");j.obj.unbind("mouseup");v(b.touches[0])};return false}function u(b){if(!(g.ratio>=1)){var b=b||window.event;var d=b.wheelDelta?b.wheelDelta/120:-b.detail/3;n-=d*c.wheel;n=Math.min(g[c.axis]-f[c.axis],Math.max(0,n));j.obj.css(l,n/h.ratio);g.obj.css(l,-n);if(c.lockscroll||n!==g[c.axis]-f[c.axis]&&n!==0){b=a.event.fix(b);b.preventDefault()}}}function v(b){a(document).unbind("mousemove",w);a(document).unbind("mouseup",v);j.obj.unbind("mouseup",v);document.ontouchmove=j.obj[0].ontouchend=document.ontouchend=null;return false}function w(a){if(!(g.ratio>=1)){o.now=Math.min(i[c.axis]-j[c.axis],Math.max(0,o.start+((k?a.pageX:a.pageY)-p.start)));n=o.now*h.ratio;g.obj.css(l,-n);j.obj.css(l,o.now)}return false}var d=this;var e=b;var f={obj:a(".viewport",b)};var g={obj:a(".overview",b)};var h={obj:a(".scrollbar",b)};var i={obj:a(".track",h.obj)};var j={obj:a(".thumb",h.obj)};var k=c.axis=="x",l=k?"left":"top",m=k?"Width":"Height";var n,o={start:0,now:0},p={};this.update=function(a){f[c.axis]=f.obj[0]["offset"+m];g[c.axis]=g.obj[0]["scroll"+m];g.ratio=f[c.axis]/g[c.axis];h.obj.toggleClass("disable",g.ratio>=1);i[c.axis]=c.size=="auto"?f[c.axis]:c.size;j[c.axis]=Math.min(i[c.axis],Math.max(0,c.sizethumb=="auto"?i[c.axis]*g.ratio:c.sizethumb));h.ratio=c.sizethumb=="auto"?g[c.axis]/i[c.axis]:(g[c.axis]-f[c.axis])/(i[c.axis]-j[c.axis]);n=a=="relative"&&g.ratio<=1?Math.min(g[c.axis]-f[c.axis],Math.max(0,n)):0;n=a=="bottom"&&g.ratio<=1?g[c.axis]-f[c.axis]:isNaN(parseInt(a))?n:parseInt(a);r()};return q()}a.tiny=a.tiny||{};a.tiny.scrollbar={options:{axis:"y",wheel:40,scroll:true,lockscroll:true,size:"auto",sizethumb:"auto"}};a.fn.tinyscrollbar=function(c){var c=a.extend({},a.tiny.scrollbar.options,c);this.each(function(){a(this).data("tsb",new b(a(this),c))});return this};a.fn.tinyscrollbar_update=function(b){return a(this).data("tsb").update(b)};})(jQuery);/**
 * BxSlider v4.1 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2012, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
 */

;(function($){

	var plugin = {};
	
	var defaults = {
		
		// GENERAL
		mode: 'horizontal',
		slideSelector: '',
		infiniteLoop: true,
		hideControlOnEnd: false,
		speed: 500,
		easing: null,
		slideMargin: 0,
		startSlide: 0,
		randomStart: false,
		captions: false,
		ticker: false,
		tickerHover: false,
		adaptiveHeight: false,
		adaptiveHeightSpeed: 500,
		video: false,
		useCSS: true,
		preloadImages: 'visible',

		// TOUCH
		touchEnabled: true,
		swipeThreshold: 50,
		oneToOneTouch: true,
		preventDefaultSwipeX: true,
		preventDefaultSwipeY: false,
		
		// PAGER
		pager: true,
		pagerType: 'full',
		pagerShortSeparator: ' / ',
		pagerSelector: null,
		buildPager: null,
		pagerCustom: null,
		
		// CONTROLS
		controls: true,
		nextText: 'Next',
		prevText: 'Prev',
		nextSelector: null,
		prevSelector: null,
		autoControls: false,
		startText: 'Start',
		stopText: 'Stop',
		autoControlsCombine: false,
		autoControlsSelector: null,
		
		// AUTO
		auto: false,
		pause: 4000,
		autoStart: true,
		autoDirection: 'next',
		autoHover: false,
		autoDelay: 0,
		
		// CAROUSEL
		minSlides: 1,
		maxSlides: 1,
		moveSlides: 0,
		slideWidth: 0,
		
		// CALLBACKS
		onSliderLoad: function() {},
		onSlideBefore: function() {},
		onSlideAfter: function() {},
		onSlideNext: function() {},
		onSlidePrev: function() {}
	}

	$.fn.bxSlider = function(options){
		
		if(this.length == 0) return;
		
		// support mutltiple elements
		if(this.length > 1){
			this.each(function(){$(this).bxSlider(options)});
			return this;
		}
		
		// create a namespace to be used throughout the plugin
		var slider = {};
		// set a reference to our slider element
		var el = this;
		plugin.el = this;

		/**
		 * Makes slideshow responsive
		 */
		// first get the original window dimens (thanks alot IE)
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();

		
		
		/**
		 * ===================================================================================
		 * = PRIVATE FUNCTIONS
		 * ===================================================================================
		 */
		
		/**
		 * Initializes namespace settings to be used throughout plugin
		 */
		var init = function(){
			// merge user-supplied options with the defaults
			slider.settings = $.extend({}, defaults, options);
			// parse slideWidth setting
			slider.settings.slideWidth = parseInt(slider.settings.slideWidth);
			// store the original children
			slider.children = el.children(slider.settings.slideSelector);
			// check if actual number of slides is less than minSlides / maxSlides
			if(slider.children.length < slider.settings.minSlides) slider.settings.minSlides = slider.children.length;
			if(slider.children.length < slider.settings.maxSlides) slider.settings.maxSlides = slider.children.length;
			// if random start, set the startSlide setting to random number
			if(slider.settings.randomStart) slider.settings.startSlide = Math.floor(Math.random() * slider.children.length);
			// store active slide information
			slider.active = { index: slider.settings.startSlide }
			// store if the slider is in carousel mode (displaying / moving multiple slides)
			slider.carousel = slider.settings.minSlides > 1 || slider.settings.maxSlides > 1;
			// if carousel, force preloadImages = 'all'
			if(slider.carousel) slider.settings.preloadImages = 'all';
			// calculate the min / max width thresholds based on min / max number of slides
			// used to setup and update carousel slides dimensions
			slider.minThreshold = (slider.settings.minSlides * slider.settings.slideWidth) + ((slider.settings.minSlides - 1) * slider.settings.slideMargin);
			slider.maxThreshold = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
			// store the current state of the slider (if currently animating, working is true)
			slider.working = false;
			// initialize the controls object
			slider.controls = {};
			// initialize an auto interval
			slider.interval = null;
			// determine which property to use for transitions
			slider.animProp = slider.settings.mode == 'vertical' ? 'top' : 'left';
			// determine if hardware acceleration can be used
			slider.usingCSS = slider.settings.useCSS && slider.settings.mode != 'fade' && (function(){
				// create our test div element
				var div = document.createElement('div');
				// css transition properties
				var props = ['WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
				// test for each property
				for(var i in props){
					if(div.style[props[i]] !== undefined){
						slider.cssPrefix = props[i].replace('Perspective', '').toLowerCase();
						slider.animProp = '-' + slider.cssPrefix + '-transform';
						return true;
					}
				}
				return false;
			}());
			// if vertical mode always make maxSlides and minSlides equal
			if(slider.settings.mode == 'vertical') slider.settings.maxSlides = slider.settings.minSlides;
			// perform all DOM / CSS modifications
			setup();
		}

		/**
		 * Performs all DOM and CSS modifications
		 */
		var setup = function(){
			// wrap el in a wrapper
			el.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>');
			// store a namspace reference to .bx-viewport
			slider.viewport = el.parent();
			// add a loading div to display while images are loading
			slider.loader = $('<div class="bx-loading" />');
			slider.viewport.prepend(slider.loader);
			// set el to a massive width, to hold any needed slides
			// also strip any margin and padding from el
			el.css({
				width: slider.settings.mode == 'horizontal' ? slider.children.length * 215 + '%' : 'auto',
				position: 'relative'
			});
			// if using CSS, add the easing property
			if(slider.usingCSS && slider.settings.easing){
				el.css('-' + slider.cssPrefix + '-transition-timing-function', slider.settings.easing);
			// if not using CSS and no easing value was supplied, use the default JS animation easing (swing)
			}else if(!slider.settings.easing){
				slider.settings.easing = 'swing';
			}
			var slidesShowing = getNumberSlidesShowing();
			// make modifications to the viewport (.bx-viewport)
			slider.viewport.css({
				width: '100%',
				overflow: 'hidden',
				position: 'relative'
			});
			slider.viewport.parent().css({
				maxWidth: getViewportMaxWidth()
			});
			// apply css to all slider children
			slider.children.css({
				'float': slider.settings.mode == 'horizontal' ? 'left' : 'none',
				listStyle: 'none',
				position: 'relative'
			});
			// apply the calculated width after the float is applied to prevent scrollbar interference
			slider.children.width(getSlideWidth());
			// if slideMargin is supplied, add the css
			if(slider.settings.mode == 'horizontal' && slider.settings.slideMargin > 0) slider.children.css('marginRight', slider.settings.slideMargin);
			if(slider.settings.mode == 'vertical' && slider.settings.slideMargin > 0) slider.children.css('marginBottom', slider.settings.slideMargin);
			// if "fade" mode, add positioning and z-index CSS
			if(slider.settings.mode == 'fade'){
				slider.children.css({
					position: 'absolute',
					zIndex: 0,
					display: 'none'
				});
				// prepare the z-index on the showing element
				slider.children.eq(slider.settings.startSlide).css({zIndex: 50, display: 'block'});
			}
			// create an element to contain all slider controls (pager, start / stop, etc)
			slider.controls.el = $('<div class="bx-controls" />');
			// if captions are requested, add them
			if(slider.settings.captions) appendCaptions();
			// if infinite loop, prepare additional slides
			if(slider.settings.infiniteLoop && slider.settings.mode != 'fade' && !slider.settings.ticker){
				var slice = slider.settings.mode == 'vertical' ? slider.settings.minSlides : slider.settings.maxSlides;
				var sliceAppend = slider.children.slice(0, slice).clone().addClass('bx-clone');
				var slicePrepend = slider.children.slice(-slice).clone().addClass('bx-clone');
				el.append(sliceAppend).prepend(slicePrepend);
			}
			// check if startSlide is last slide
			slider.active.last = slider.settings.startSlide == getPagerQty() - 1;
			// if video is true, set up the fitVids plugin
			if(slider.settings.video) el.fitVids();
			// set the default preload selector (visible)
			var preloadSelector = slider.children.eq(slider.settings.startSlide);
			if (slider.settings.preloadImages == "all") preloadSelector = el.children();
			// only check for control addition if not in "ticker" mode
			if(!slider.settings.ticker){
				// if pager is requested, add it
				if(slider.settings.pager) appendPager();
				// if controls are requested, add them
				if(slider.settings.controls) appendControls();
				// if auto is true, and auto controls are requested, add them
				if(slider.settings.auto && slider.settings.autoControls) appendControlsAuto();
				// if any control option is requested, add the controls wrapper
				if(slider.settings.controls || slider.settings.autoControls || slider.settings.pager) slider.viewport.after(slider.controls.el);
			}
			// preload all images, then perform final DOM / CSS modifications that depend on images being loaded
			preloadSelector.imagesLoaded(start);
		}

		/**
		 * Start the slider
		 */
		var start = function(){
			// remove the loading DOM element
			slider.loader.remove();
			// set the left / top position of "el"
			setSlidePosition();
			// if "vertical" mode, always use adaptiveHeight to prevent odd behavior
			if (slider.settings.mode == 'vertical') slider.settings.adaptiveHeight = true;
			// set the viewport height
			slider.viewport.height(getViewportHeight());
			// make sure everything is positioned just right (same as a window resize)
			el.updateDimensions();
			// onSliderLoad callback
			slider.settings.onSliderLoad(slider.active.index);
			// slider has been fully initialized
			slider.initialized = true;
			// bind the resize call to the window
			$(window).bind('resize', resizeWindow);
			// if auto is true, start the show
			if (slider.settings.auto && slider.settings.autoStart) initAuto();
			// if ticker is true, start the ticker
			if (slider.settings.ticker) initTicker();
			// if pager is requested, make the appropriate pager link active
			if (slider.settings.pager) updatePagerActive(slider.settings.startSlide);
			// check for any updates to the controls (like hideControlOnEnd updates)
			if (slider.settings.controls) updateDirectionControls();
			// if touchEnabled is true, setup the touch events
			if (slider.settings.touchEnabled && !slider.settings.ticker) initTouch();
		}
		
		/**
		 * Returns the calculated height of the viewport, used to determine either adaptiveHeight or the maxHeight value
		 */
		var getViewportHeight = function(){
			var height = 0;
			// first determine which children (slides) should be used in our height calculation
			var children = $();
			// if mode is not "vertical" and adaptiveHeight is false, include all children
			if(slider.settings.mode != 'vertical' && !slider.settings.adaptiveHeight){
				children = slider.children;
			}else{
				// if not carousel, return the single active child
				if(!slider.carousel){
					children = slider.children.eq(slider.active.index);
				// if carousel, return a slice of children
				}else{
					// get the individual slide index
					var currentIndex = slider.settings.moveSlides == 1 ? slider.active.index : slider.active.index * getMoveBy();
					// add the current slide to the children
					children = slider.children.eq(currentIndex);
					// cycle through the remaining "showing" slides
					for (i = 1; i <= slider.settings.maxSlides - 1; i++){
						// if looped back to the start
						if(currentIndex + i >= slider.children.length){
							children = children.add(slider.children.eq(i - 1));
						}else{
							children = children.add(slider.children.eq(currentIndex + i));
						}
					}
				}
			}
			// if "vertical" mode, calculate the sum of the heights of the children
			if(slider.settings.mode == 'vertical'){
				children.each(function(index) {
				  height += $(this).outerHeight();
				});
				// add user-supplied margins
				if(slider.settings.slideMargin > 0){
					height += slider.settings.slideMargin * (slider.settings.minSlides - 1);
				}
			// if not "vertical" mode, calculate the max height of the children
			}else{
				height = Math.max.apply(Math, children.map(function(){
					return $(this).outerHeight(false);
				}).get());
			}
			return height;
		}

		/**
		 * Returns the calculated width to be used for the outer wrapper / viewport
		 */
		var getViewportMaxWidth = function(){
			var width = '100%';
			if(slider.settings.slideWidth > 0){
				if(slider.settings.mode == 'horizontal'){
					width = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
				}else{
					width = slider.settings.slideWidth;
				}
			}
			return width;
		}
		
		/**
		 * Returns the calculated width to be applied to each slide
		 */
		var getSlideWidth = function(){
			// start with any user-supplied slide width
			var newElWidth = slider.settings.slideWidth;
			// get the current viewport width
			var wrapWidth = slider.viewport.width();
			// if slide width was not supplied, or is larger than the viewport use the viewport width
			if(slider.settings.slideWidth == 0 ||
				(slider.settings.slideWidth > wrapWidth && !slider.carousel) ||
				slider.settings.mode == 'vertical'){
				newElWidth = wrapWidth;
			// if carousel, use the thresholds to determine the width
			}else if(slider.settings.maxSlides > 1 && slider.settings.mode == 'horizontal'){
				if(wrapWidth > slider.maxThreshold){
					// newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.maxSlides - 1))) / slider.settings.maxSlides;
				}else if(wrapWidth < slider.minThreshold){
					newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.minSlides - 1))) / slider.settings.minSlides;
				}
			}
			return newElWidth;
		}
		
		/**
		 * Returns the number of slides currently visible in the viewport (includes partially visible slides)
		 */
		var getNumberSlidesShowing = function(){
			var slidesShowing = 1;
			if(slider.settings.mode == 'horizontal' && slider.settings.slideWidth > 0){
				// if viewport is smaller than minThreshold, return minSlides
				if(slider.viewport.width() < slider.minThreshold){
					slidesShowing = slider.settings.minSlides;
				// if viewport is larger than minThreshold, return maxSlides
				}else if(slider.viewport.width() > slider.maxThreshold){
					slidesShowing = slider.settings.maxSlides;
				// if viewport is between min / max thresholds, divide viewport width by first child width
				}else{
					var childWidth = slider.children.first().width();
					slidesShowing = Math.floor(slider.viewport.width() / childWidth);
				}
			// if "vertical" mode, slides showing will always be minSlides
			}else if(slider.settings.mode == 'vertical'){
				slidesShowing = slider.settings.minSlides;
			}
			return slidesShowing;
		}
		
		/**
		 * Returns the number of pages (one full viewport of slides is one "page")
		 */
		var getPagerQty = function(){
			var pagerQty = 0;
			// if moveSlides is specified by the user
			if(slider.settings.moveSlides > 0){
				if(slider.settings.infiniteLoop){
					pagerQty = slider.children.length / getMoveBy();
				}else{
					// use a while loop to determine pages
					var breakPoint = 0;
					var counter = 0
					// when breakpoint goes above children length, counter is the number of pages
					while (breakPoint < slider.children.length){
						++pagerQty;
						breakPoint = counter + getNumberSlidesShowing();
						counter += slider.settings.moveSlides <= getNumberSlidesShowing() ? slider.settings.moveSlides : getNumberSlidesShowing();
					}
				}
			// if moveSlides is 0 (auto) divide children length by sides showing, then round up
			}else{
				pagerQty = Math.ceil(slider.children.length / getNumberSlidesShowing());
			}
			return pagerQty;
		}
		
		/**
		 * Returns the number of indivual slides by which to shift the slider
		 */
		var getMoveBy = function(){
			// if moveSlides was set by the user and moveSlides is less than number of slides showing
			if(slider.settings.moveSlides > 0 && slider.settings.moveSlides <= getNumberSlidesShowing()){
				return slider.settings.moveSlides;
			}
			// if moveSlides is 0 (auto)
			return getNumberSlidesShowing();
		}
		
		/**
		 * Sets the slider's (el) left or top position
		 */
		var setSlidePosition = function(){
			// if last slide, not infinite loop, and number of children is larger than specified maxSlides
			if(slider.children.length > slider.settings.maxSlides && slider.active.last && !slider.settings.infiniteLoop){
				if (slider.settings.mode == 'horizontal'){
					// get the last child's position
					var lastChild = slider.children.last();
					var position = lastChild.position();
					// set the left position
					setPositionProperty(-(position.left - (slider.viewport.width() - lastChild.width())), 'reset', 0);
				}else if(slider.settings.mode == 'vertical'){
					// get the last showing index's position
					var lastShowingIndex = slider.children.length - slider.settings.minSlides;
					var position = slider.children.eq(lastShowingIndex).position();
					// set the top position
					setPositionProperty(-position.top, 'reset', 0);
				}
			// if not last slide
			}else{
				// get the position of the first showing slide
				var position = slider.children.eq(slider.active.index * getMoveBy()).position();
				// check for last slide
				if (slider.active.index == getPagerQty() - 1) slider.active.last = true;
				// set the repective position
				if (position != undefined){
					if (slider.settings.mode == 'horizontal') setPositionProperty(-position.left, 'reset', 0);
					else if (slider.settings.mode == 'vertical') setPositionProperty(-position.top, 'reset', 0);
				}
			}
		}
		
		/**
		 * Sets the el's animating property position (which in turn will sometimes animate el).
		 * If using CSS, sets the transform property. If not using CSS, sets the top / left property.
		 *
		 * @param value (int) 
		 *  - the animating property's value
		 *
		 * @param type (string) 'slider', 'reset', 'ticker'
		 *  - the type of instance for which the function is being
		 *
		 * @param duration (int) 
		 *  - the amount of time (in ms) the transition should occupy
		 *
		 * @param params (array) optional
		 *  - an optional parameter containing any variables that need to be passed in
		 */
		var setPositionProperty = function(value, type, duration, params){
			// use CSS transform
			if(slider.usingCSS){
				// determine the translate3d value
				var propValue = slider.settings.mode == 'vertical' ? 'translate3d(0, ' + value + 'px, 0)' : 'translate3d(' + value + 'px, 0, 0)';
				// add the CSS transition-duration
				el.css('-' + slider.cssPrefix + '-transition-duration', duration / 1000 + 's');
				if(type == 'slide'){
					// set the property value
					el.css(slider.animProp, propValue);
					// bind a callback method - executes when CSS transition completes
					el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(){
						// unbind the callback
						el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
						updateAfterSlideTransition();
					});
				}else if(type == 'reset'){
					el.css(slider.animProp, propValue);
				}else if(type == 'ticker'){
					// make the transition use 'linear'
					el.css('-' + slider.cssPrefix + '-transition-timing-function', 'linear');
					el.css(slider.animProp, propValue);
					// bind a callback method - executes when CSS transition completes
					el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(){
						// unbind the callback
						el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
						// reset the position
						setPositionProperty(params['resetValue'], 'reset', 0);
						// start the loop again
						tickerLoop();
					});
				}
			// use JS animate
			}else{
				var animateObj = {};
				animateObj[slider.animProp] = value;
				if(type == 'slide'){
					el.animate(animateObj, duration, slider.settings.easing, function(){
						updateAfterSlideTransition();
					});
				}else if(type == 'reset'){
					el.css(slider.animProp, value)
				}else if(type == 'ticker'){
					el.animate(animateObj, speed, 'linear', function(){
						setPositionProperty(params['resetValue'], 'reset', 0);
						// run the recursive loop after animation
						tickerLoop();
					});
				}
			}
		}
		
		/**
		 * Populates the pager with proper amount of pages
		 */
		var populatePager = function(){
			var pagerHtml = '';
			pagerQty = getPagerQty();
			// loop through each pager item
			for(var i=0; i < pagerQty; i++){
				var linkContent = '';
				// if a buildPager function is supplied, use it to get pager link value, else use index + 1
				if(slider.settings.buildPager && $.isFunction(slider.settings.buildPager)){
					linkContent = slider.settings.buildPager(i);
					slider.pagerEl.addClass('bx-custom-pager');
				}else{
					linkContent = i + 1;
					slider.pagerEl.addClass('bx-default-pager');
				}
				// var linkContent = slider.settings.buildPager && $.isFunction(slider.settings.buildPager) ? slider.settings.buildPager(i) : i + 1;
				// add the markup to the string
				pagerHtml += '<div class="bx-pager-item"><a href="" data-slide-index="' + i + '" class="bx-pager-link">' + linkContent + '</a></div>';
			};
			// populate the pager element with pager links
			slider.pagerEl.html(pagerHtml);
		}
		
		/**
		 * Appends the pager to the controls element
		 */
		var appendPager = function(){
			if(!slider.settings.pagerCustom){
				// create the pager DOM element
				slider.pagerEl = $('<div class="bx-pager" />');
				// if a pager selector was supplied, populate it with the pager
				if(slider.settings.pagerSelector){
					$(slider.settings.pagerSelector).html(slider.pagerEl);
				// if no pager selector was supplied, add it after the wrapper
				}else{
					slider.controls.el.addClass('bx-has-pager').append(slider.pagerEl);
				}
				// populate the pager
				populatePager();
			}else{
				slider.pagerEl = $(slider.settings.pagerCustom);
			}
			// assign the pager click binding
			slider.pagerEl.delegate('a', 'click', clickPagerBind);
		}
		
		/**
		 * Appends prev / next controls to the controls element
		 */
		var appendControls = function(){
			slider.controls.next = $('<a class="bx-next" href="">' + slider.settings.nextText + '</a>');
			slider.controls.prev = $('<a class="bx-prev" href="">' + slider.settings.prevText + '</a>');
			// bind click actions to the controls
			slider.controls.next.bind('click', clickNextBind);
			slider.controls.prev.bind('click', clickPrevBind);
			// if nextSlector was supplied, populate it
			if(slider.settings.nextSelector){
				$(slider.settings.nextSelector).append(slider.controls.next);
			}
			// if prevSlector was supplied, populate it
			if(slider.settings.prevSelector){
				$(slider.settings.prevSelector).append(slider.controls.prev);
			}
			// if no custom selectors were supplied
			if(!slider.settings.nextSelector && !slider.settings.prevSelector){
				// add the controls to the DOM
				slider.controls.directionEl = $('<div class="bx-controls-direction" />');
				// add the control elements to the directionEl
				slider.controls.directionEl.append(slider.controls.prev).append(slider.controls.next);
				// slider.viewport.append(slider.controls.directionEl);
				slider.controls.el.addClass('bx-has-controls-direction').append(slider.controls.directionEl);
			}
		}
		
		/**
		 * Appends start / stop auto controls to the controls element
		 */
		var appendControlsAuto = function(){
			slider.controls.start = $('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + slider.settings.startText + '</a></div>');
			slider.controls.stop = $('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + slider.settings.stopText + '</a></div>');
			// add the controls to the DOM
			slider.controls.autoEl = $('<div class="bx-controls-auto" />');
			// bind click actions to the controls
			slider.controls.autoEl.delegate('.bx-start', 'click', clickStartBind);
			slider.controls.autoEl.delegate('.bx-stop', 'click', clickStopBind);
			// if autoControlsCombine, insert only the "start" control
			if(slider.settings.autoControlsCombine){
				slider.controls.autoEl.append(slider.controls.start);
			// if autoControlsCombine is false, insert both controls
			}else{
				slider.controls.autoEl.append(slider.controls.start).append(slider.controls.stop);
			}
			// if auto controls selector was supplied, populate it with the controls
			if(slider.settings.autoControlsSelector){
				$(slider.settings.autoControlsSelector).html(slider.controls.autoEl);
			// if auto controls selector was not supplied, add it after the wrapper
			}else{
				slider.controls.el.addClass('bx-has-controls-auto').append(slider.controls.autoEl);
			}
			// update the auto controls
			updateAutoControls(slider.settings.autoStart ? 'stop' : 'start');
		}
		
		/**
		 * Appends image captions to the DOM
		 */
		var appendCaptions = function(){
			// cycle through each child
			slider.children.each(function(index){
				// get the image title attribute
				var title = $(this).find('img:first').attr('title');
				// append the caption
				if (title != undefined) $(this).append('<div class="bx-caption"><span>' + title + '</span></div>');
			});
		}
		
		/**
		 * Click next binding
		 *
		 * @param e (event) 
		 *  - DOM event object
		 */
		var clickNextBind = function(e){
			// if auto show is running, stop it
			if (slider.settings.auto) el.stopAuto();
			el.goToNextSlide();
			e.preventDefault();
		}
		
		/**
		 * Click prev binding
		 *
		 * @param e (event) 
		 *  - DOM event object
		 */
		var clickPrevBind = function(e){
			// if auto show is running, stop it
			if (slider.settings.auto) el.stopAuto();
			el.goToPrevSlide();
			e.preventDefault();
		}
		
		/**
		 * Click start binding
		 *
		 * @param e (event) 
		 *  - DOM event object
		 */
		var clickStartBind = function(e){
			el.startAuto();
			e.preventDefault();
		}
		
		/**
		 * Click stop binding
		 *
		 * @param e (event) 
		 *  - DOM event object
		 */
		var clickStopBind = function(e){
			el.stopAuto();
			e.preventDefault();
		}

		/**
		 * Click pager binding
		 *
		 * @param e (event) 
		 *  - DOM event object
		 */
		var clickPagerBind = function(e){
			// if auto show is running, stop it
			if (slider.settings.auto) el.stopAuto();
			var pagerLink = $(e.currentTarget);
			var pagerIndex = parseInt(pagerLink.attr('data-slide-index'));
			// if clicked pager link is not active, continue with the goToSlide call
			if(pagerIndex != slider.active.index) el.goToSlide(pagerIndex);
			e.preventDefault();
		}
		
		/**
		 * Updates the pager links with an active class
		 *
		 * @param slideIndex (int) 
		 *  - index of slide to make active
		 */
		var updatePagerActive = function(slideIndex){
			// if "short" pager type
			if(slider.settings.pagerType == 'short'){
				slider.pagerEl.html((slideIndex + 1) + slider.settings.pagerShortSeparator + slider.children.length);
				return;
			}
			// remove all pager active classes
			slider.pagerEl.find('a').removeClass('active');
			// apply the active class for all pagers
			slider.pagerEl.each(function(i, el) { $(el).find('a').eq(slideIndex).addClass('active'); });
		}
		
		/**
		 * Performs needed actions after a slide transition
		 */
		var updateAfterSlideTransition = function(){
			// if infinte loop is true
			if(slider.settings.infiniteLoop){
				var position = '';
				// first slide
				if(slider.active.index == 0){
					// set the new position
					position = slider.children.eq(0).position();
				// carousel, last slide
				}else if(slider.active.index == getPagerQty() - 1 && slider.carousel){
					position = slider.children.eq((getPagerQty() - 1) * getMoveBy()).position();
				// last slide
				}else if(slider.active.index == slider.children.length - 1){
					position = slider.children.eq(slider.children.length - 1).position();
				}
				if (slider.settings.mode == 'horizontal') { setPositionProperty(-position.left, 'reset', 0);; }
				else if (slider.settings.mode == 'vertical') { setPositionProperty(-position.top, 'reset', 0);; }
			}
			// declare that the transition is complete
			slider.working = false;
			// onSlideAfter callback
			slider.settings.onSlideAfter(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
		}
		
		/**
		 * Updates the auto controls state (either active, or combined switch)
		 *
		 * @param state (string) "start", "stop"
		 *  - the new state of the auto show
		 */
		var updateAutoControls = function(state){
			// if autoControlsCombine is true, replace the current control with the new state 
			if(slider.settings.autoControlsCombine){
				slider.controls.autoEl.html(slider.controls[state]);
			// if autoControlsCombine is false, apply the "active" class to the appropriate control 
			}else{
				slider.controls.autoEl.find('a').removeClass('active');
				slider.controls.autoEl.find('a:not(.bx-' + state + ')').addClass('active');
			}
		}
		
		/**
		 * Updates the direction controls (checks if either should be hidden)
		 */
		var updateDirectionControls = function(){
			// if infiniteLoop is false and hideControlOnEnd is true
			if(!slider.settings.infiniteLoop && slider.settings.hideControlOnEnd){
				// if first slide
				if (slider.active.index == 0){
					slider.controls.prev.addClass('disabled');
					slider.controls.next.removeClass('disabled');
				// if last slide
				}else if(slider.active.index == getPagerQty() - 1){
					slider.controls.next.addClass('disabled');
					slider.controls.prev.removeClass('disabled');
				// if any slide in the middle
				}else{
					slider.controls.prev.removeClass('disabled');
					slider.controls.next.removeClass('disabled');
				}
			}
		}
		
		/**
		 * Initialzes the auto process
		 */
		var initAuto = function(){
			// if autoDelay was supplied, launch the auto show using a setTimeout() call
			if(slider.settings.autoDelay > 0){
				var timeout = setTimeout(el.startAuto, slider.settings.autoDelay);
			// if autoDelay was not supplied, start the auto show normally
			}else{
				el.startAuto();
			}
			// if autoHover is requested
			if(slider.settings.autoHover){
				// on el hover
				el.hover(function(){
					// if the auto show is currently playing (has an active interval)
					if(slider.interval){
						// stop the auto show and pass true agument which will prevent control update
						el.stopAuto(true);
						// create a new autoPaused value which will be used by the relative "mouseout" event
						slider.autoPaused = true;
					}
				}, function(){
					// if the autoPaused value was created be the prior "mouseover" event
					if(slider.autoPaused){
						// start the auto show and pass true agument which will prevent control update
						el.startAuto(true);
						// reset the autoPaused value
						slider.autoPaused = null;
					}
				});
			}
		}
		
		/**
		 * Initialzes the ticker process
		 */
		var initTicker = function(){
			var startPosition = 0;
			// if autoDirection is "next", append a clone of the entire slider
			if(slider.settings.autoDirection == 'next'){
				el.append(slider.children.clone().addClass('bx-clone'));
			// if autoDirection is "prev", prepend a clone of the entire slider, and set the left position
			}else{
				el.prepend(slider.children.clone().addClass('bx-clone'));
				var position = slider.children.first().position();
				startPosition = slider.settings.mode == 'horizontal' ? -position.left : -position.top;
			}
			setPositionProperty(startPosition, 'reset', 0);
			// do not allow controls in ticker mode
			slider.settings.pager = false;
			slider.settings.controls = false;
			slider.settings.autoControls = false;
			// if autoHover is requested
			if(slider.settings.tickerHover && !slider.usingCSS){
				// on el hover
				slider.viewport.hover(function(){
					el.stop();
				}, function(){
					// calculate the total width of children (used to calculate the speed ratio)
					var totalDimens = 0;
					slider.children.each(function(index){
					  totalDimens += slider.settings.mode == 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
					});
					// calculate the speed ratio (used to determine the new speed to finish the paused animation)
					var ratio = slider.settings.speed / totalDimens;
					// determine which property to use
					var property = slider.settings.mode == 'horizontal' ? 'left' : 'top';
					// calculate the new speed
					var newSpeed = ratio * (totalDimens - (Math.abs(parseInt(el.css(property)))));
					tickerLoop(newSpeed);
				});
			}
			// start the ticker loop
			tickerLoop();
		}
		
		/**
		 * Runs a continuous loop, news ticker-style
		 */
		var tickerLoop = function(resumeSpeed){
			speed = resumeSpeed ? resumeSpeed : slider.settings.speed;
			var position = {left: 0, top: 0};
			var reset = {left: 0, top: 0};
			// if "next" animate left position to last child, then reset left to 0
			if(slider.settings.autoDirection == 'next'){
				position = el.find('.bx-clone').first().position();
			// if "prev" animate left position to 0, then reset left to first non-clone child
			}else{
				reset = slider.children.first().position();
			}
			var animateProperty = slider.settings.mode == 'horizontal' ? -position.left : -position.top;
			var resetValue = slider.settings.mode == 'horizontal' ? -reset.left : -reset.top;
			var params = {resetValue: resetValue};
			setPositionProperty(animateProperty, 'ticker', speed, params);
		}
		
		/**
		 * Initializes touch events
		 */
		var initTouch = function(){
			// initialize object to contain all touch values
			slider.touch = {
				start: {x: 0, y: 0},
				end: {x: 0, y: 0}
			}
			slider.viewport.bind('touchstart', onTouchStart);
		}
		
		/**
		 * Event handler for "touchstart"
		 *
		 * @param e (event) 
		 *  - DOM event object
		 */
		var onTouchStart = function(e){
			if(slider.working){
				e.preventDefault();
			}else{
				// record the original position when touch starts
				slider.touch.originalPos = el.position();
				var orig = e.originalEvent;
				// record the starting touch x, y coordinates
				slider.touch.start.x = orig.changedTouches[0].pageX;
				slider.touch.start.y = orig.changedTouches[0].pageY;
				// bind a "touchmove" event to the viewport
				slider.viewport.bind('touchmove', onTouchMove);
				// bind a "touchend" event to the viewport
				slider.viewport.bind('touchend', onTouchEnd);
			}
		}
		
		/**
		 * Event handler for "touchmove"
		 *
		 * @param e (event) 
		 *  - DOM event object
		 */
		var onTouchMove = function(e){
			var orig = e.originalEvent;
			// if scrolling on y axis, do not prevent default
			var xMovement = Math.abs(orig.changedTouches[0].pageX - slider.touch.start.x);
			var yMovement = Math.abs(orig.changedTouches[0].pageY - slider.touch.start.y);
			// x axis swipe
			if((xMovement * 3) > yMovement && slider.settings.preventDefaultSwipeX){
				e.preventDefault();
			// y axis swipe
			}else if((yMovement * 3) > xMovement && slider.settings.preventDefaultSwipeY){
				e.preventDefault();
			}
			if(slider.settings.mode != 'fade' && slider.settings.oneToOneTouch){
				var value = 0;
				// if horizontal, drag along x axis
				if(slider.settings.mode == 'horizontal'){
					var change = orig.changedTouches[0].pageX - slider.touch.start.x;
					value = slider.touch.originalPos.left + change;
				// if vertical, drag along y axis
				}else{
					var change = orig.changedTouches[0].pageY - slider.touch.start.y;
					value = slider.touch.originalPos.top + change;
				}
				setPositionProperty(value, 'reset', 0);
			}
		}
		
		/**
		 * Event handler for "touchend"
		 *
		 * @param e (event) 
		 *  - DOM event object
		 */
		var onTouchEnd = function(e){
			slider.viewport.unbind('touchmove', onTouchMove);
			var orig = e.originalEvent;
			var value = 0;
			// record end x, y positions
			slider.touch.end.x = orig.changedTouches[0].pageX;
			slider.touch.end.y = orig.changedTouches[0].pageY;
			// if fade mode, check if absolute x distance clears the threshold
			if(slider.settings.mode == 'fade'){
				var distance = Math.abs(slider.touch.start.x - slider.touch.end.x);
				if(distance >= slider.settings.swipeThreshold){
					slider.touch.start.x > slider.touch.end.x ? el.goToNextSlide() : el.goToPrevSlide();
					el.stopAuto();
				}
			// not fade mode
			}else{
				var distance = 0;
				// calculate distance and el's animate property
				if(slider.settings.mode == 'horizontal'){
					distance = slider.touch.end.x - slider.touch.start.x;
					value = slider.touch.originalPos.left;
				}else{
					distance = slider.touch.end.y - slider.touch.start.y;
					value = slider.touch.originalPos.top;
				}
				// if not infinite loop and first / last slide, do not attempt a slide transition
				if(!slider.settings.infiniteLoop && ((slider.active.index == 0 && distance > 0) || (slider.active.last && distance < 0))){
					setPositionProperty(value, 'reset', 200);
				}else{
					// check if distance clears threshold
					if(Math.abs(distance) >= slider.settings.swipeThreshold){
						distance < 0 ? el.goToNextSlide() : el.goToPrevSlide();
						el.stopAuto();
					}else{
						// el.animate(property, 200);
						setPositionProperty(value, 'reset', 200);
					}
				}
			}
			slider.viewport.unbind('touchend', onTouchEnd);
		}

		var resizeWindow = function(e){
			// get the new window dimens (again, thank you IE)
			var windowWidthNew = $(window).width();
			var windowHeightNew = $(window).height();
			// make sure that it is a true window resize
			// *we must check this because our dinosaur friend IE fires a window resize event when certain DOM elements
			// are resized. Can you just die already?*
			if(windowWidth != windowWidthNew || windowHeight != windowHeightNew){
				// set the new window dimens
				windowWidth = windowWidthNew;
				windowHeight = windowHeightNew;

				el.updateDimensions();

				// // resize all children in ratio to new screen size
				// slider.children.add(el.find('.bx-clone')).width(getSlideWidth());
				// // adjust the height
				// slider.viewport.css('height', getViewportHeight());

				// if active.last was true before the screen resize, we want
				// to keep it last no matter what screen size we end on
				if (slider.active.last) slider.active.index = getPagerQty() - 1;
				// if the active index (page) no longer exists due to the resize, simply set the index as last
				if (slider.active.index >= getPagerQty()) slider.active.last = true;
				// if a pager is being displayed and a custom pager is not being used, update it
				if(slider.settings.pager && !slider.settings.pagerCustom){
					populatePager();
					updatePagerActive(slider.active.index);
				}
			}
		}
		
		/**
		 * ===================================================================================
		 * = PUBLIC FUNCTIONS
		 * ===================================================================================
		 */
		
		/**
		 * Performs slide transition to the specified slide
		 *
		 * @param slideIndex (int) 
		 *  - the destination slide's index (zero-based)
		 *
		 * @param direction (string) 
		 *  - INTERNAL USE ONLY - the direction of travel ("prev" / "next")
		 */
		el.goToSlide = function(slideIndex, direction){
			// if plugin is currently in motion, ignore request
			if(slider.working || slider.active.index == slideIndex) return;
			// declare that plugin is in motion
			slider.working = true;
			// store the old index
			slider.oldIndex = slider.active.index;
			// if slideIndex is less than zero, set active index to last child (this happens during infinite loop)
			if(slideIndex < 0){
				slider.active.index = getPagerQty() - 1;
			// if slideIndex is greater than children length, set active index to 0 (this happens during infinite loop)
			}else if(slideIndex >= getPagerQty()){
				slider.active.index = 0;
			// set active index to requested slide
			}else{
				slider.active.index = slideIndex;
			}
			// onSlideBefore, onSlideNext, onSlidePrev callbacks
			slider.settings.onSlideBefore(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
			if(direction == 'next'){
				slider.settings.onSlideNext(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
			}else if(direction == 'prev'){
				slider.settings.onSlidePrev(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
			}
			// check if last slide
			slider.active.last = slider.active.index >= getPagerQty() - 1;
			// update the pager with active class
			if(slider.settings.pager) updatePagerActive(slider.active.index);
			// // check for direction control update
			if(slider.settings.controls) updateDirectionControls();
			// if slider is set to mode: "fade"
			if(slider.settings.mode == 'fade'){
				// if adaptiveHeight is true and next height is different from current height, animate to the new height
				if(slider.settings.adaptiveHeight && slider.viewport.height() != getViewportHeight()){
					slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
				}
				// fade out the visible child and reset its z-index value
				slider.children.filter(':visible').fadeOut(slider.settings.speed).css({zIndex: 0});
				// fade in the newly requested slide
				slider.children.eq(slider.active.index).css('zIndex', 51).fadeIn(slider.settings.speed, function(){
					$(this).css('zIndex', 50);
					updateAfterSlideTransition();
				});
			// slider mode is not "fade"
			}else{
				// if adaptiveHeight is true and next height is different from current height, animate to the new height
				if(slider.settings.adaptiveHeight && slider.viewport.height() != getViewportHeight()){
					slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
				}
				var moveBy = 0;
				var position = {left: 0, top: 0};
				// if carousel and not infinite loop
				if(!slider.settings.infiniteLoop && slider.carousel && slider.active.last){
					if(slider.settings.mode == 'horizontal'){
						// get the last child position
						var lastChild = slider.children.eq(slider.children.length - 1);
						position = lastChild.position();
						// calculate the position of the last slide
						moveBy = slider.viewport.width() - lastChild.width();
					}else{
						// get last showing index position
						var lastShowingIndex = slider.children.length - slider.settings.minSlides;
						position = slider.children.eq(lastShowingIndex).position();
					}
					// horizontal carousel, going previous while on first slide (infiniteLoop mode)
				}else if(slider.carousel && slider.active.last && direction == 'prev'){
					// get the last child position
					var eq = slider.settings.moveSlides == 1 ? slider.settings.maxSlides - getMoveBy() : ((getPagerQty() - 1) * getMoveBy()) - (slider.children.length - slider.settings.maxSlides);
					var lastChild = el.children('.bx-clone').eq(eq);
					position = lastChild.position();
				// if infinite loop and "Next" is clicked on the last slide
				}else if(direction == 'next' && slider.active.index == 0){
					// get the last clone position
					position = el.find('.bx-clone').eq(slider.settings.maxSlides).position();
					slider.active.last = false;
				// normal non-zero requests
				}else if(slideIndex >= 0){
					var requestEl = slideIndex * getMoveBy();
					position = slider.children.eq(requestEl).position();
				}
				// plugin values to be animated
				var value = slider.settings.mode == 'horizontal' ? -(position.left - moveBy) : -position.top;
				setPositionProperty(value, 'slide', slider.settings.speed);
			}
		}
		
		/**
		 * Transitions to the next slide in the show
		 */
		el.goToNextSlide = function(){
			// if infiniteLoop is false and last page is showing, disregard call
			if (!slider.settings.infiniteLoop && slider.active.last) return;
			var pagerIndex = parseInt(slider.active.index) + 1;
			el.goToSlide(pagerIndex, 'next');
		}
		
		/**
		 * Transitions to the prev slide in the show
		 */
		el.goToPrevSlide = function(){
			// if infiniteLoop is false and last page is showing, disregard call
			if (!slider.settings.infiniteLoop && slider.active.index == 0) return;
			var pagerIndex = parseInt(slider.active.index) - 1;
			el.goToSlide(pagerIndex, 'prev');
		}
		
		/**
		 * Starts the auto show
		 *
		 * @param preventControlUpdate (boolean) 
		 *  - if true, auto controls state will not be updated
		 */
		el.startAuto = function(preventControlUpdate){
			// if an interval already exists, disregard call
			if(slider.interval) return;
			// create an interval
			slider.interval = setInterval(function(){
				slider.settings.autoDirection == 'next' ? el.goToNextSlide() : el.goToPrevSlide();
			}, slider.settings.pause);
			// if auto controls are displayed and preventControlUpdate is not true
			if (slider.settings.autoControls && preventControlUpdate != true) updateAutoControls('stop');
		}
		
		/**
		 * Stops the auto show
		 *
		 * @param preventControlUpdate (boolean) 
		 *  - if true, auto controls state will not be updated
		 */
		el.stopAuto = function(preventControlUpdate){
			// if no interval exists, disregard call
			if(!slider.interval) return;
			// clear the interval
			clearInterval(slider.interval);
			slider.interval = null;
			// if auto controls are displayed and preventControlUpdate is not true
			if (slider.settings.autoControls && preventControlUpdate != true) updateAutoControls('start');
		}
		
		/**
		 * Returns current slide index (zero-based)
		 */
		el.getCurrentSlide = function(){
			return slider.active.index;
		}
		
		/**
		 * Returns number of slides in show
		 */
		el.getSlideCount = function(){
			return slider.children.length;
		}

		el.updateDimensions = function(){
			// resize all children in ratio to new screen size
			slider.children.add(el.find('.bx-clone')).width(getSlideWidth());
			// adjust the height
			slider.viewport.css('height', getViewportHeight());
			// update the slide position
			if(!slider.settings.ticker) setSlidePosition();
		}

		/**
		 * Destroy the current instance of the slider (revert everything back to original state)
		 */
		el.destroySlider = function(){
			// don't do anything if slider has already been destroyed
			if(!slider.initialized) return;
			slider.initialized = false;
			$('.bx-clone', this).remove();
			slider.children.removeAttr('style');
			this.removeAttr('style').unwrap().unwrap();
			if(slider.controls.el) slider.controls.el.remove();
			if(slider.controls.next) slider.controls.next.remove();
			if(slider.controls.prev) slider.controls.prev.remove();
			if(slider.pagerEl) slider.pagerEl.remove();
			$('.bx-caption', this).remove();
			if(slider.controls.autoEl) slider.controls.autoEl.remove();
			clearInterval(slider.interval);
			$(window).unbind('resize', resizeWindow);
		}

		/**
		 * Reload the slider (revert all DOM changes, and re-initialize)
		 */
		el.reloadSlider = function(settings){
			if (settings != undefined) options = settings;
			el.destroySlider();
			init();
		}
		
		init();
		
		// returns the current jQuery object
		return this;
	}

})(jQuery);

/*!
 * jQuery imagesLoaded plugin v2.1.0
 * http://github.com/desandro/imagesloaded
 *
 * MIT License. by Paul Irish et al.
 */

/*jshint curly: true, eqeqeq: true, noempty: true, strict: true, undef: true, browser: true */
/*global jQuery: false */

(function(c,n){var l="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";c.fn.imagesLoaded=function(f){function m(){var b=c(i),a=c(h);d&&(h.length?d.reject(e,b,a):d.resolve(e));c.isFunction(f)&&f.call(g,e,b,a)}function j(b,a){b.src===l||-1!==c.inArray(b,k)||(k.push(b),a?h.push(b):i.push(b),c.data(b,"imagesLoaded",{isBroken:a,src:b.src}),o&&d.notifyWith(c(b),[a,e,c(i),c(h)]),e.length===k.length&&(setTimeout(m),e.unbind(".imagesLoaded")))}var g=this,d=c.isFunction(c.Deferred)?c.Deferred():
0,o=c.isFunction(d.notify),e=g.find("img").add(g.filter("img")),k=[],i=[],h=[];c.isPlainObject(f)&&c.each(f,function(b,a){if("callback"===b)f=a;else if(d)d[b](a)});e.length?e.bind("load.imagesLoaded error.imagesLoaded",function(b){j(b.target,"error"===b.type)}).each(function(b,a){var d=a.src,e=c.data(a,"imagesLoaded");if(e&&e.src===d)j(a,e.isBroken);else if(a.complete&&a.naturalWidth!==n)j(a,0===a.naturalWidth||0===a.naturalHeight);else if(a.readyState||a.complete)a.src=l,a.src=d}):m();return d?d.promise(g):
g}})(jQuery);;
$(function(){$('.cancel-button').live('click',function(){$('#overlay-login .header a').click();});$(".sub_user").each(function(){var self=this;$(this).overlay({mask:{top:200,color:'#ccc',loadSpeed:50,opacity:0.5},onBeforeLoad:function(){var wrap=this.getOverlay().find(".contentWrap");var login_source=$(self).attr('login_source');if(login_source!='')
{$.cookie("login_source",login_source);}
wrap.html('');href=$(self).attr('vthref');wrap.load(href);},onClose:function(){$.cookie("login_source",null);}});});$(".link_signin").each(function(){var self=this;$(this).overlay({mask:{top:200,color:'#ccc',loadSpeed:50,opacity:0.5},onBeforeLoad:function(){var wrap=this.getOverlay().find(".contentWrap");var login_source=$(self).attr('login_source');if(login_source!='')
{$.cookie("login_source",login_source);}
wrap.html('');href=$(self).attr('vthref');wrap.load(href);},onClose:function(){$.cookie("login_source",null);}});});$('.box-popup-content h1 a').live('click',function(){$('#overlay-login a.close').click();});$('#signin_submit').live('click',function(){var requestUrl=$('#vt_form_signin').attr('action');$('#vt_signin_msisdn').attr('disabled','disabled');$('#vt_signin_password').attr('disabled','disabled');$('#vt_signin_captcha').attr('disabled','disabled');$('#vt_signin_remember').attr('disabled','disabled');var vt_signin={msisdn:$.trim($('#vt_signin_msisdn').val()),password:$('#vt_signin_password').val(),remember:$('#vt_signin_remember:checked').val(),captcha:$('#vt_signin_captcha').val()};var token=$('#signin_token').val();$.post(requestUrl,{vt_signin:vt_signin,token:token},function(data)
{if($.trim(data)!='ok')
$('#overlay-login .contentWrap').html(data);else{var cookie=$.cookie("login_source");$.cookie("login_source",null);if(cookie=="upload"){$(window.location).attr('href','/upload');}
else{location.reload();}}});return false;});$('#update_huawei_user_submit').live('click',function(){var requestUrl=$('#vt_form_signin').attr('action');$('#update_huawei_user_captcha').attr('disabled','disabled');var update_huawei_user={password:$('#update_huawei_user_password').val(),password_again:$('#update_huawei_user_password_again').val(),captcha:$('#update_huawei_user_captcha').val(),_csrf_token:$('#update_huawei_user__csrf_token').val()};$.post(requestUrl,{update_huawei_user:update_huawei_user},function(data)
{if($.trim(data)!='ok')
$('#overlay-login .contentWrap').html(data);else
location.reload();});return false;});$("a.link_set_ringbacktone").each(function(){var self=this;$(this).overlay({mask:{top:200,color:'#ccc',loadSpeed:50,opacity:0.5},onBeforeLoad:function(){var wrap=this.getOverlay().find(".contentWrap");wrap.html('');var href=$(self).attr('href');if(ringbacktoneId)
{href+='?ringbacktone_id='+ringbacktoneId;}
wrap.load(href);}});});$("a.link-popup-contact").each(function(){var self=this;$(this).overlay({mask:{top:200,color:'#ccc',loadSpeed:50,opacity:0.5},onBeforeLoad:function(){var wrap=this.getOverlay().find(".contentWrap");wrap.html('');href=$(self).attr('href');wrap.load(href);}});});$('.box-popup-contact h1 a').live('click',function(){$('#overlay-login a.close').click();});$('#close_popup').live('click',function(){$('#overlay-login a.close').click();});$("a.link-popup-playlist").each(function(){var self=this;$(this).overlay({mask:{top:200,color:'#ccc',loadSpeed:50,opacity:0.5},onBeforeLoad:function(){var wrap=this.getOverlay().find(".contentWrap");wrap.html('');href=$(self).attr('href');wrap.load(href);}});});$(".box-popup-content a.btn-confirm").live('click',function()
{$(this).addClass('_disable');var url=$(this).attr('href');var self=$(this);$.post(url,{confirm:1},function(response){$('#overlay-login .contentWrap').html(response);return false;});return false;});var notification_slider=$('#notification-list').bxSlider({auto:true,pause:7000,displaySlideQty:1,moveSlideQty:1,controls:false,infiniteLoop:true});var notification_slider=$('#slide_keenghitcover').bxSlider({auto:true,pause:7000,displaySlideQty:1,moveSlideQty:1,controls:false,infiniteLoop:true});$('#fogetPW').live('click',function()
{$('.box-login').css('display',"none");$('.box-forgetPass').css('display',"block");})
$('#register_sub_user').live('click',function(){var requestUrl=$('#vt_sub_user_reg_confirm').attr('action');var sub_user={_csrf_token:$('#vt_sub_user_reg_confirm__csrf_token').val()};$.post(requestUrl,{sub_user:sub_user},function(data)
{if($.trim(data)!='ok')
$('#overlay-login .contentWrap').html(data);else{location.reload();}});return false;});$('#confirm-donwnload').live('click',function(){var requestUrl=$('#confirm_form').attr('action');var confirm_form={_csrf_token:$('#confirm_form__csrf_token').val()};$.post(requestUrl,{confirm_form:confirm_form},function(data)
{$('#overlay-login .contentWrap').html(data);});return false;});$('#keeng-vip').live('click',function(){$('#overlay-login .contentWrap').html('<div class="border-transparent"><form class="dm_signin_form" id="vt_form_registerkeengvip" method="post" action="/user/registerkeengvip"><input type="hidden" name="vt_registerkeengvip[_csrf_token]" value="419ddb6f45755997ea997dd806603723" id="vt_registerkeengvip__csrf_token" />	 	 	<div class="box-popup-content" style="padding-bottom: 15px;">   <div class="box-forgetPass">	  <h1 class="header"><a >x</a></h1>      <h3 class="title">ĐĂNG KÝ KEENG VIP</h3>      <p class="sms-mess">Soạn<span class="ping"> keeng</span> gửi <span class="ping">8062</span></p>   </div>   <div class="box-login"> 	  <h1 class="header"><a >x</a></h1>	  <h3 class="title">ĐĂNG KÝ KEENG VIP</h3><input id="registerkeengvip_submit" name="" type="submit" class="button btn-rbt" value="Xác nhận đăng ký"/>   </div>	</div></form></div>');});$('#registerkeengvip_submit').live('click',function(){var requestUrl=$('#vt_form_registerkeengvip').attr('action');$.post(requestUrl,function(data)
{$('#overlay-login .contentWrap').html(data);});return false;});$("a.sv-lnk").each(function(){var self=this;$(this).overlay({mask:{top:200,color:'#ccc',loadSpeed:50,opacity:0.5},onBeforeLoad:function(){var wrap=this.getOverlay().find(".contentWrap");wrap.html('');var href=$(self).attr('vthref');var singer_id=$(self).attr('singer_id');var circleid=$(self).attr('circleid');wrap.load(href,{'singer_id':singer_id,'circleid':circleid,});}});});$('#confirm-vote').live('click',function(){var requestUrl=$('#vote_confirm_form').attr('action');var vote={_csrf_token:$('#vote_confirm_form__csrf_token').val()};var self=this;var singer_id=$(self).attr('singer_id');var circleid=$(self).attr('circleid');$.post(requestUrl,{vote:vote,singer_id:singer_id,circleid:circleid},function(data)
{$('#overlay-login .contentWrap').html(data);return false;});return false;});$("a.icon_set_rbt").each(function(){var self=this;$(this).overlay({mask:{top:200,color:'#ccc',loadSpeed:50,opacity:0.5},onBeforeLoad:function(){var ringbacktoneId;ringbacktoneId=$(self).attr('rbt');var wrap=this.getOverlay().find(".contentWrap");wrap.html('');var href=$(self).attr('href');if(ringbacktoneId)
{href+='?ringbacktone_id='+ringbacktoneId;}
wrap.load(href);}});});$('#getcodeactive_submit').live('click',function(){var requestUrl=$('#vt_form_signin_register').attr('action');$('#vt_signin_register_msisdn').attr('disabled','disabled');$('#vt_signin_register_code').attr('disabled','disabled');$('#vt_signin_register_username').attr('disabled','disabled');$('#vt_signin_register_password_new').attr('disabled','disabled');$('#vt_signin_register_re_password').attr('disabled','disabled');$('#vt_signin_register_captcha').attr('disabled','disabled');var vt_signin_register={msisdn:$.trim($('#vt_signin_register_msisdn').val()),code:$.trim($('#vt_signin_register_code').val()),username:$('#vt_signin_register_username').val(),password_new:$('#vt_signin_register_password_new').val(),captcha:$('#vt_signin_register_captcha').val(),_csrf_token:$('#vt_signin_register__csrf_token').val()};$.post(requestUrl,{vt_signin_register:vt_signin_register},function(data)
{if($.trim(data)!='ok')
$('#overlay-login .contentWrap').html(data);else{location.reload();}});return false;});$('#getActive_submit').live('click',function(){var requestUrl=$('#vt_form_get_active').attr('action');$('#vt_get_active_code').attr('disabled','disabled');$('#vt_get_active_captcha').attr('disabled','disabled');var vt_get_active={code:$.trim($('#vt_get_active_code').val()),captcha:$('#vt_get_active_captcha').val(),_csrf_token:$('#vt_get_active__csrf_token').val()};$.post(requestUrl,{vt_get_active:vt_get_active},function(data)
{if($.trim(data)!='ok')
$('#overlay-login .contentWrap').html(data);else{location.reload();}});return false;});$('#forgetpass_submit').live('click',function(){var requestUrl=$('#vt_form_get_forget_pass').attr('action');$('#vt_form_get_forget_captcha').attr('disabled','disabled');var vt_get_forget_pass={captcha:$('#vt_get_forget_pass_captcha').val(),_csrf_token:$('#vt_get_forget_pass__csrf_token').val()};$.post(requestUrl,{vt_get_forget_pass:vt_get_forget_pass},function(data)
{if($.trim(data)!='ok')
$('#overlay-login .contentWrap').html(data);else{location.reload();}});return false;});$('#vt_get_forget_pass_back_submit').live('click',function(){var requestUrl=$('#vt_form_get_forget_pass').attr('action');$('#vt_form_get_forget_captcha').attr('disabled','disabled');$('#vt_get_forget_pass_back_submit').attr('disabled','disabled');var vt_get_forget_pass={vt_get_forget_pass_back_submit:$.trim($('#vt_get_forget_pass_back_submit').val()),captcha:$('#vt_get_forget_pass_captcha').val(),_csrf_token:$('#vt_get_forget_pass__csrf_token').val()};$.post(requestUrl,{vt_get_forget_pass:vt_get_forget_pass},function(data)
{if($.trim(data)!='ok')
$('#overlay-login .contentWrap').html(data);else{location.reload();}});return false;});$('#lostpass_submit').live('click',function(){$('#overlay-login .contentWrap').html('<div class="border-transparent"><form class="dm_signin_form" id="vt_form_getlostpass" method="post" action="/user/getlostpass"><input type="hidden" name="vt_getlostpass[_csrf_token]" value="419ddb6f45755997ea997dd806603723" id="vt_getlostpass__csrf_token" />	 	 	<div class="box-popup-content" style="padding-bottom: 15px;">   <div class="box-forgetPass">	  <h1 class="header"><a >x</a></h1>      <h3 class="title">QUÊN MẬT KHẨU</h3>      <p class="sms-mess">Soạn<span class="ping"> keeng</span> gửi <span class="ping">8062</span></p>   </div>   <div class="box-login"> 	  <h1 class="header"><a >x</a></h1>	  <h3 class="title">LẤY MẬT KHẨU</h3>	  <div class="box-popup-rows">	<span class="warning">Vui lòng nhập đúng số điện thoại để lấy mã xác nhận.</span> <br>    	              	  </div>       <div class="box-popup-rows">	    <span class="item-left">SĐT</span>	    <span class="item-right"><input class="field required" type="text" name="vt_getlostpass[msisdn]" id="vt_getlostpass_msisdn" /></span>	  </div> 	  <input id="getlostpass_submit" name="" type="submit" class="button btn-rbt" value="Lấ mật khẩu"/>   </div>	</div></form></div>');});$('#getlostpass_submit').live('click',function(){var requestUrl=$('#vt_form_getlostpass').attr('action');$('#vt_getlostpass_msisdn').attr('disabled','disabled');$('#vt_getlostpass_captcha').attr('disabled','disabled');var vt_getlostpass={msisdn:$.trim($('#vt_getlostpass_msisdn').val()),captcha:$('#vt_getlostpass_captcha').val(),_csrf_token:$('#vt_getlostpass__csrf_token').val()};$.post(requestUrl,{vt_getlostpass:vt_getlostpass},function(data)
{if($.trim(data)!='ok')
$('#overlay-login .contentWrap').html(data);else{location.reload();}});return false;});});;
(function($){$('.btn-search').click(function(){var text=$('#search_query').val();if(text=='')
{alert("Vui lòng nhập vào ô tìm kiếm");$('#search_query').focus();return false;}
else if(text=='Từ khóa tìm kiếm...')
{alert("Vui lòng nhập vào ô tìm kiếm");$('#search_query').focus();return false;}
else
{return true;}});$('.btn-search-lyric').click(function(){var text=$('#search_query').val();if(text=='')
{alert("Vui lòng nhập vào ô tìm kiếm");$('#search_query').focus();return false;}
else if(text=='Từ khóa tìm kiếm...')
{alert("Vui lòng nhập vào ô tìm kiếm");$('#search_query').focus();return false;}
else
{return true;}});})(jQuery);;
$(function(){$('.cancel-button').live('click',function(){$('#overlay-login .header a').click();});$(".sub_user").each(function(){var self=this;$(this).overlay({mask:{top:200,color:'#ccc',loadSpeed:50,opacity:0.5},onBeforeLoad:function(){var wrap=this.getOverlay().find(".contentWrap");var login_source=$(self).attr('login_source');if(login_source!='')
{$.cookie("login_source",login_source);}
wrap.html('');href=$(self).attr('vthref');wrap.load(href);},onClose:function(){$.cookie("login_source",null);}});});$(".link_signin").each(function(){var self=this;$(this).overlay({mask:{top:200,color:'#ccc',loadSpeed:50,opacity:0.5},onBeforeLoad:function(){var wrap=this.getOverlay().find(".contentWrap");var login_source=$(self).attr('login_source');if(login_source!='')
{$.cookie("login_source",login_source);}
wrap.html('');href=$(self).attr('vthref');wrap.load(href);},onClose:function(){$.cookie("login_source",null);}});});$('.box-popup-content h1 a').live('click',function(){$('#overlay-login a.close').click();});$('#signin_submit').live('click',function(){var requestUrl=$('#vt_form_signin').attr('action');$('#vt_signin_msisdn').attr('disabled','disabled');$('#vt_signin_password').attr('disabled','disabled');$('#vt_signin_captcha').attr('disabled','disabled');$('#vt_signin_remember').attr('disabled','disabled');var vt_signin={msisdn:$.trim($('#vt_signin_msisdn').val()),password:$('#vt_signin_password').val(),remember:$('#vt_signin_remember:checked').val(),captcha:$('#vt_signin_captcha').val()};var token=$('#signin_token').val();$.post(requestUrl,{vt_signin:vt_signin,token:token},function(data)
{if($.trim(data)!='ok')
$('#overlay-login .contentWrap').html(data);else{var cookie=$.cookie("login_source");$.cookie("login_source",null);if(cookie=="upload"){$(window.location).attr('href','/upload');}
else{location.reload();}}});return false;});$('#update_huawei_user_submit').live('click',function(){var requestUrl=$('#vt_form_signin').attr('action');$('#update_huawei_user_captcha').attr('disabled','disabled');var update_huawei_user={password:$('#update_huawei_user_password').val(),password_again:$('#update_huawei_user_password_again').val(),captcha:$('#update_huawei_user_captcha').val(),_csrf_token:$('#update_huawei_user__csrf_token').val()};$.post(requestUrl,{update_huawei_user:update_huawei_user},function(data)
{if($.trim(data)!='ok')
$('#overlay-login .contentWrap').html(data);else
location.reload();});return false;});$("a.link_set_ringbacktone").each(function(){var self=this;$(this).overlay({mask:{top:200,color:'#ccc',loadSpeed:50,opacity:0.5},onBeforeLoad:function(){var ringbacktoneId;ringbacktoneId=$(self).parent().find('a.name-song').attr('ringbacktoneid');var wrap=this.getOverlay().find(".contentWrap");wrap.html('');var href=$(self).attr('href');if(ringbacktoneId)
{href+='?ringbacktone_id='+ringbacktoneId;}
wrap.load(href);}});});$("a.link-popup-contact").each(function(){var self=this;$(this).overlay({mask:{top:200,color:'#ccc',loadSpeed:50,opacity:0.5},onBeforeLoad:function(){var wrap=this.getOverlay().find(".contentWrap");wrap.html('');href=$(self).attr('href');wrap.load(href);}});});$('.box-popup-contact h1 a').live('click',function(){$('#overlay-login a.close').click();});$('#close_popup').live('click',function(){$('#overlay-login a.close').click();});$("a.link-popup-playlist").each(function(){var self=this;$(this).overlay({mask:{top:200,color:'#ccc',loadSpeed:50,opacity:0.5},onBeforeLoad:function(){var wrap=this.getOverlay().find(".contentWrap");wrap.html('');href=$(self).attr('href');wrap.load(href);}});});$(".box-popup-content a.btn-confirm").live('click',function()
{$(this).addClass('_disable');var url=$(this).attr('href');var self=$(this);$.post(url,{confirm:1},function(response){$('#overlay-login .contentWrap').html(response);return false;});return false;});var notification_slider=$('#notification-list').bxSlider({auto:true,pause:7000,displaySlideQty:1,moveSlideQty:1,controls:false,infiniteLoop:true});$('#fogetPW').live('click',function()
{$('.box-login').css('display',"none");$('.box-forgetPass').css('display',"block");})
$('#register_sub_user').live('click',function(){var requestUrl=$('#vt_sub_user_reg_confirm').attr('action');var sub_user={_csrf_token:$('#vt_sub_user_reg_confirm__csrf_token').val()};$.post(requestUrl,{sub_user:sub_user},function(data)
{if($.trim(data)!='ok')
$('#overlay-login .contentWrap').html(data);else{location.reload();}});return false;});$('#confirm-donwnload').live('click',function(){var requestUrl=$('#confirm_form').attr('action');var confirm_form={_csrf_token:$('#confirm_form__csrf_token').val()};$.post(requestUrl,{confirm_form:confirm_form},function(data)
{$('#overlay-login .contentWrap').html(data);});return false;});$('#keeng-vip').live('click',function(){$('#overlay-login .contentWrap').html('<div class="border-transparent"><form class="dm_signin_form" id="vt_form_registerkeengvip" method="post" action="/user/registerkeengvip"><input type="hidden" name="vt_registerkeengvip[_csrf_token]" value="419ddb6f45755997ea997dd806603723" id="vt_registerkeengvip__csrf_token" />	 	 	<div class="box-popup-content" style="padding-bottom: 15px;">   <div class="box-forgetPass">	  <h1 class="header"><a >x</a></h1>      <h3 class="title">ĐĂNG KÝ KEENG VIP</h3>      <p class="sms-mess">Soạn<span class="ping"> keeng</span> gửi <span class="ping">8062</span></p>   </div>   <div class="box-login"> 	  <h1 class="header"><a >x</a></h1>	  <h3 class="title">ĐĂNG KÝ KEENG VIP</h3><input id="registerkeengvip_submit" name="" type="submit" class="button btn-rbt" value="Xác nhận đăng ký"/>   </div>	</div></form></div>');});$('#registerkeengvip_submit').live('click',function(){var requestUrl=$('#vt_form_registerkeengvip').attr('action');$.post(requestUrl,function(data)
{$('#overlay-login .contentWrap').html(data);});return false;});$("a.sv-lnk").each(function(){var self=this;$(this).overlay({mask:{top:200,color:'#ccc',loadSpeed:50,opacity:0.5},onBeforeLoad:function(){var wrap=this.getOverlay().find(".contentWrap");wrap.html('');var href=$(self).attr('vthref');var singer_id=$(self).attr('singer_id');var circleid=$(self).attr('circleid');wrap.load(href,{'singer_id':singer_id,'circleid':circleid,});}});});$('#confirm-vote').live('click',function(){var requestUrl=$('#vote_confirm_form').attr('action');var vote={_csrf_token:$('#vote_confirm_form__csrf_token').val()};var self=this;var singer_id=$(self).attr('singer_id');var circleid=$(self).attr('circleid');$.post(requestUrl,{vote:vote,singer_id:singer_id,circleid:circleid},function(data)
{$('#overlay-login .contentWrap').html(data);return false;});return false;});$("a.icon_set_rbt").each(function(){var self=this;$(this).overlay({mask:{top:200,color:'#ccc',loadSpeed:50,opacity:0.5},onBeforeLoad:function(){var ringbacktoneId;ringbacktoneId=$(self).attr('rbt');var wrap=this.getOverlay().find(".contentWrap");wrap.html('');var href=$(self).attr('href');if(ringbacktoneId)
{href+='?ringbacktone_id='+ringbacktoneId;}
wrap.load(href);}});});$('#getcodeactive_submit').live('click',function(){var requestUrl=$('#vt_form_signin_register').attr('action');$('#vt_signin_register_msisdn').attr('disabled','disabled');$('#vt_signin_register_code').attr('disabled','disabled');$('#vt_signin_register_username').attr('disabled','disabled');$('#vt_signin_register_password_new').attr('disabled','disabled');$('#vt_signin_register_re_password').attr('disabled','disabled');$('#vt_signin_register_captcha').attr('disabled','disabled');var vt_signin_register={msisdn:$.trim($('#vt_signin_register_msisdn').val()),code:$.trim($('#vt_signin_register_code').val()),username:$('#vt_signin_register_username').val(),password_new:$('#vt_signin_register_password_new').val(),captcha:$('#vt_signin_register_captcha').val(),_csrf_token:$('#vt_signin_register__csrf_token').val()};$.post(requestUrl,{vt_signin_register:vt_signin_register},function(data)
{if($.trim(data)!='ok')
$('#overlay-login .contentWrap').html(data);else{location.reload();}});return false;});$('#getActive_submit').live('click',function(){var requestUrl=$('#vt_form_get_active').attr('action');$('#vt_get_active_code').attr('disabled','disabled');$('#vt_get_active_captcha').attr('disabled','disabled');var vt_get_active={code:$.trim($('#vt_get_active_code').val()),captcha:$('#vt_get_active_captcha').val(),_csrf_token:$('#vt_get_active__csrf_token').val()};$.post(requestUrl,{vt_get_active:vt_get_active},function(data)
{if($.trim(data)!='ok')
$('#overlay-login .contentWrap').html(data);else{location.reload();}});return false;});$('#forgetpass_submit').live('click',function(){var requestUrl=$('#vt_form_get_forget_pass').attr('action');$('#vt_form_get_forget_captcha').attr('disabled','disabled');var vt_get_forget_pass={captcha:$('#vt_get_forget_pass_captcha').val(),_csrf_token:$('#vt_get_forget_pass__csrf_token').val()};$.post(requestUrl,{vt_get_forget_pass:vt_get_forget_pass},function(data)
{if($.trim(data)!='ok')
$('#overlay-login .contentWrap').html(data);else{location.reload();}});return false;});$('#vt_get_forget_pass_back_submit').live('click',function(){var requestUrl=$('#vt_form_get_forget_pass').attr('action');$('#vt_form_get_forget_captcha').attr('disabled','disabled');$('#vt_get_forget_pass_back_submit').attr('disabled','disabled');var vt_get_forget_pass={vt_get_forget_pass_back_submit:$.trim($('#vt_get_forget_pass_back_submit').val()),captcha:$('#vt_get_forget_pass_captcha').val(),_csrf_token:$('#vt_get_forget_pass__csrf_token').val()};$.post(requestUrl,{vt_get_forget_pass:vt_get_forget_pass},function(data)
{if($.trim(data)!='ok')
$('#overlay-login .contentWrap').html(data);else{location.reload();}});return false;});$('#lostpass_submit').live('click',function(){$('#overlay-login .contentWrap').html('<div class="border-transparent"><form class="dm_signin_form" id="vt_form_getlostpass" method="post" action="/user/getlostpass"><input type="hidden" name="vt_getlostpass[_csrf_token]" value="a1e8d30e9084b190b6f0f29e4cb036c0" id="vt_getlostpass__csrf_token" />	 	 	<div class="box-popup-content" style="padding-bottom: 15px;">   <div class="box-forgetPass">	  <h1 class="header"><a >x</a></h1>      <h3 class="title">QUÊN MẬT KHẨU</h3>      <p class="sms-mess">Soạn<span class="ping"> keeng</span> gửi <span class="ping">8062</span></p>   </div>   <div class="box-login"> 	  <h1 class="header"><a >x</a></h1>	  <h3 class="title">Lấy mật khẩu</h3>	  <div class="box-popup-rows">		<span class="warning">Vui lòng nhập đúng số điện thoại để lấy mật khẩu.</span> <br>	                        <br />                      	  </div>       <div class="box-popup-rows">	    <span class="item-left">Số Điện Thoại</span>	    <span class="item-right"><input class="field required has_error" type="text" name="vt_getlostpass[msisdn]" value="" id="vt_getlostpass_msisdn" /></span>	  </div> 	  		  	<div id="captcha-row" class="box-popup-rows ">      		<span class="item-left">Mã xác nhận</span>      		<span class="item-right"><input type="text" name="vt_getlostpass[captcha]" class="captcha" id="vt_getlostpass_captcha" /><a href="" onClick="return false" title="Reload image"><img id="captcha_image" src="http://www.keeng.vn/captcha?'+Math.floor((Math.random()*100000)+1)+'" onClick="this.src="http://www.keeng.vn/captcha?r=" + Math.random() + "&reload=1"" border="0" class="captcha" /></a></span>      	</div>      	  <input id="getlostpass_submit" name="" type="submit" class="button btn-rbt" value="Lấy mật khẩu"/>      </div>	</div></form></div>');});$('#getlostpass_submit').live('click',function(){var requestUrl=$('#vt_form_getlostpass').attr('action');$('#vt_getlostpass_msisdn').attr('disabled','disabled');$('#vt_getlostpass_captcha').attr('disabled','disabled');var vt_getlostpass={msisdn:$.trim($('#vt_getlostpass_msisdn').val()),captcha:$('#vt_getlostpass_captcha').val(),_csrf_token:$('#vt_getlostpass__csrf_token').val()};$.post(requestUrl,{vt_getlostpass:vt_getlostpass},function(data)
{if($.trim(data)!='ok')
$('#overlay-login .contentWrap').html(data);else{location.reload();}});return false;});});;/*!
 * jQuery Tools v1.2.5 - The missing UI library for the Web
 * 
 * overlay/overlay.js
 * toolbox/toolbox.expose.js
 * 
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 * 
 * http://flowplayer.org/tools/
 * 
 */
(function(a){a.tools=a.tools||{version:"v1.2.5"},a.tools.overlay={addEffect:function(a,b,d){c[a]=[b,d]},conf:{close:null,closeOnClick:!0,closeOnEsc:!0,closeSpeed:"fast",effect:"default",fixed:!a.browser.msie||a.browser.version>6,left:"center",load:!1,mask:null,oneInstance:!0,speed:"normal",target:null,top:"10%"}};var b=[],c={};a.tools.overlay.addEffect("default",function(b,c){var d=this.getConf(),e=a(window);d.fixed||(b.top+=e.scrollTop(),b.left+=e.scrollLeft()),b.position=d.fixed?"fixed":"absolute",this.getOverlay().css(b).fadeIn(d.speed,c)},function(a){this.getOverlay().fadeOut(this.getConf().closeSpeed,a)});function d(d,e){var f=this,g=d.add(f),h=a(window),i,j,k,l=a.tools.expose&&(e.mask||e.expose),m=Math.random().toString().slice(10);l&&(typeof l=="string"&&(l={color:l}),l.closeOnClick=l.closeOnEsc=!1);var n=e.target||d.attr("rel");j=n?a(n):null||d;if(!j.length)throw"Could not find Overlay: "+n;d&&d.index(j)==-1&&d.click(function(a){f.load(a);return a.preventDefault()}),a.extend(f,{load:function(d){if(f.isOpened())return f;var i=c[e.effect];if(!i)throw"Overlay: cannot find effect : \""+e.effect+"\"";e.oneInstance&&a.each(b,function(){this.close(d)}),d=d||a.Event(),d.type="onBeforeLoad",g.trigger(d);if(d.isDefaultPrevented())return f;k=!0,l&&a(j).expose(l);var n=e.top,o=e.left,p=j.outerWidth({margin:!0}),q=j.outerHeight({margin:!0});typeof n=="string"&&(n=n=="center"?Math.max((h.height()-q)/2,0):parseInt(n,10)/100*h.height()),o=="center"&&(o=Math.max((h.width()-p)/2,0)),i[0].call(f,{top:n,left:o},function(){k&&(d.type="onLoad",g.trigger(d))}),l&&e.closeOnClick&&a.mask.getMask().one("click",f.close),e.closeOnClick&&a(document).bind("click."+m,function(b){a(b.target).parents(j).length||f.close(b)}),e.closeOnEsc&&a(document).bind("keydown."+m,function(a){a.keyCode==27&&f.close(a)});return f},close:function(b){if(!f.isOpened())return f;b=b||a.Event(),b.type="onBeforeClose",g.trigger(b);if(!b.isDefaultPrevented()){k=!1,c[e.effect][1].call(f,function(){b.type="onClose",g.trigger(b)}),a(document).unbind("click."+m).unbind("keydown."+m),l&&a.mask.close();return f}},getOverlay:function(){return j},getTrigger:function(){return d},getClosers:function(){return i},isOpened:function(){return k},getConf:function(){return e}}),a.each("onBeforeLoad,onStart,onLoad,onBeforeClose,onClose".split(","),function(b,c){a.isFunction(e[c])&&a(f).bind(c,e[c]),f[c]=function(b){b&&a(f).bind(c,b);return f}}),i=j.find(e.close||".close"),!i.length&&!e.close&&(i=a("<a class=\"close\"></a>"),j.prepend(i)),i.click(function(a){f.close(a)}),e.load&&f.load()}a.fn.overlay=function(c){var e=this.data("overlay");if(e)return e;a.isFunction(c)&&(c={onBeforeLoad:c}),c=a.extend(!0,{},a.tools.overlay.conf,c),this.each(function(){e=new d(a(this),c),b.push(e),a(this).data("overlay",e)});return c.api?e:this}})(jQuery);
(function(a){a.tools=a.tools||{version:"v1.2.5"};var b;b=a.tools.expose={conf:{maskId:"exposeMask",loadSpeed:"slow",closeSpeed:"fast",closeOnClick:!0,closeOnEsc:!0,zIndex:9998,opacity:.8,startOpacity:0,color:"#fff",onLoad:null,onClose:null}};function c(){if(a.browser.msie){var b=a(document).height(),c=a(window).height();return[window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,b-c<20?c:b]}return[a(document).width(),a(document).height()]}function d(b){if(b)return b.call(a.mask)}var e,f,g,h,i;a.mask={load:function(j,k){if(g)return this;typeof j=="string"&&(j={color:j}),j=j||h,h=j=a.extend(a.extend({},b.conf),j),e=a("#"+j.maskId),e.length||(e=a("<div/>").attr("id",j.maskId),a("body").append(e));var l=c();e.css({position:"absolute",top:0,left:0,width:l[0],height:l[1],display:"none",opacity:j.startOpacity,zIndex:j.zIndex}),j.color&&e.css("backgroundColor",j.color);if(d(j.onBeforeLoad)===!1)return this;j.closeOnEsc&&a(document).bind("keydown.mask",function(b){b.keyCode==27&&a.mask.close(b)}),j.closeOnClick&&e.bind("click.mask",function(b){a.mask.close(b)}),a(window).bind("resize.mask",function(){a.mask.fit()}),k&&k.length&&(i=k.eq(0).css("zIndex"),a.each(k,function(){var b=a(this);/relative|absolute|fixed/i.test(b.css("position"))||b.css("position","relative")}),f=k.css({zIndex:Math.max(j.zIndex+1,i=="auto"?0:i)})),e.css({display:"block"}).fadeTo(j.loadSpeed,j.opacity,function(){a.mask.fit(),d(j.onLoad),g="full"}),g=!0;return this},close:function(){if(g){if(d(h.onBeforeClose)===!1)return this;e.fadeOut(h.closeSpeed,function(){d(h.onClose),f&&f.css({zIndex:i}),g=!1}),a(document).unbind("keydown.mask"),e.unbind("click.mask"),a(window).unbind("resize.mask")}return this},fit:function(){if(g){var a=c();e.css({width:a[0],height:a[1]})}},getMask:function(){return e},isLoaded:function(a){return a?g=="full":g},getConf:function(){return h},getExposed:function(){return f}},a.fn.mask=function(b){a.mask.load(b);return this},a.fn.expose=function(b){a.mask.load(b,this);return this}})(jQuery);
;
var searchValue="";var lastTimeQuery=null;var lastQuery="";var timer=null;var xTriggered=0;var frirstpos=0;var lastpos=0;var offs=0;(function($){$('.searchInput').keyup(function(event){searchValue=$(this).val();offs=searchValue.length;var timerCallback=function(){suggesstionFunc();};clearTimeout(timer);timer=setTimeout(timerCallback,200);});$('.searchInput').blur(function(event){setTimeout("$('#suggestions').fadeOut(50);",300);});$('#search_query').keypress(function(e){if($('#suggestions').css('display')!='block')
return;var allItem=$('#suggestions .item-sugg li a');var activeItem=$('#suggestions .item-sugg li a.active');var totalItem=allItem.size();var firstItem=allItem.eq(0);var lastItem=allItem.eq(totalItem-1);var idx=allItem.index(activeItem);if(!totalItem)
{return;}
switch(e.keyCode){case 38:if(idx==-1)
{lastItem.addClass('active');}else{var prevItem=allItem.eq(idx-1);activeItem.removeClass('active');prevItem.addClass('active');}
break;case 40:if(idx==-1)
{firstItem.addClass('active');}else if(idx==(totalItem-1)){activeItem.removeClass('active');firstItem.addClass('active');}else{var nextItem=allItem.eq(idx+1);activeItem.removeClass('active');nextItem.addClass('active');}
break;case 13:if(idx>=0)
{$(location).attr('href',activeItem.attr('href'));}}});$(".searchInput").keypress(function(e){if((e.which&&e.which==13)||(e.keyCode&&e.keyCode==13)){var itemSugg=$('#suggestions .item-sugg li a.active');if(itemSugg.size()==0)
$('.btn-search').click();else{}
return false;}else{return true;}});})(jQuery);function unsignString(str){str=str.toLowerCase();str=str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a");str=str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e");str=str.replace(/ì|í|ị|ỉ|ĩ/g,"i");str=str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o");str=str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u");str=str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y");str=str.replace(/đ/g,"d");str=str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g," ");str=str.replace(/-+-/g,"");str=str.replace(/^\-+|\-+$/g,"");str=str.replace("-"," ");return str;}
function unsignMaxString(str){str=str.toLowerCase();str=str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a");str=str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e");str=str.replace(/ì|í|ị|ỉ|ĩ/g,"i");str=str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o");str=str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u");str=str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y");str=str.replace(/đ/g,"d");str=str.replace("-"," ");return str;}
function getDomain(){return location.host.replace(/:([0-9][0-9][0-9][0-9])/,"");}
function trim(s)
{var l=0;var r=s.length-1;while(l<s.length&&s[l]==' ')
{l++;}
while(r>l&&s[r]==' ')
{r-=1;}
return s.substring(l,r+1);}
function highlightWords(fstring){searchValue=unsignString(searchValue);string=unsignMaxString(fstring);var myKey=trim(searchValue);var myStringVar=trim(string);var first=myStringVar.indexOf(myKey);if(first!=-1)
{var last=first+offs;if(last!=-1)
{if(last>first)
{var text=fstring.substring(first,last);fstring=fstring.replace(trim(text),'<span class="bold" style="display:inline">'+trim(text)+'</span>');}}}
return fstring;}
function suggesstionFunc(){if(searchValue.length<1){$('#suggestions').fadeOut(100);}else{strr=unsignString(trim(searchValue));var link="/search/ajax-suggestion?q="+encodeURI(strr);$.ajax({type:"POST",url:link,data:{},cache:false,success:function(data){var getData=$.parseJSON(data);var singers=getData.singers;var authors=getData.authors;var albums=getData.albums;var videos=getData.videos;var songs=getData.songs;var hasResult=false;var resHtml='';resHtml+='<ul> '
+'<li><a class="search-title"> Tìm kiếm với "'+htmlEncode(searchValue)+'"</a></li>';if(singers.length>0){hasResult=true;resHtml+='<li class="item-sugg">'
+'<h3>Ca sĩ</h3>'
+'<ul>';for(var i in singers){resHtml+='<li><a class="link-search" href="'+singers[i].url+'"><img width="35" height="35" src="'
+singers[i].image_path+'" '+'class="image-search">'+highlightWords(singers[i].name)+'</a></li>';}
resHtml+='</ul></li>';}
if(songs.length>0){hasResult=true;resHtml+='<li class="item-sugg">'
+'<h3>Bài hát</h3>'
+'<ul>';for(var i in songs){resHtml+='<li><a class="link-search" href="'+songs[i].url+'">'+highlightWords(songs[i].name)+'<span>'
+highlightWords(songs[i].singers)+'</span></a></li>';}
resHtml+='</ul></li>';}
if(videos.length>0){hasResult=true;resHtml+='<li class="item-sugg">'
+'<h3>Video</h3>'
+'<ul>';for(var i in videos){resHtml+='<li><a class="link-search" href="'+videos[i].url+'"><img width="62" height="35" src="'
+videos[i].image_path+'" class="image-search">'+highlightWords(videos[i].name)+'<span>'+highlightWords(videos[i].singers)
+'</span></a></li>';}
resHtml+='</ul></li>';}
if(albums.length>0){hasResult=true;resHtml+='<li class="item-sugg">'
+'<h3>Album</h3>'
+'<ul>';for(var i in albums){resHtml+='<li><a class="link-search" href="'+albums[i].url+'"><img width="46" height="46" src="'
+albums[i].image_album+'" class="image-search">'+highlightWords(albums[i].name)+'<span>'+highlightWords(albums[i].singers)
+'</span></a></li>';}
resHtml+='</ul></li>';}
if(authors.length>0){hasResult=true;resHtml+='<li class="item-sugg">'
+'<h3>Nhạc sĩ</h3>'
+'<ul>';for(var i in authors){resHtml+='<li><a class="link-search" href="'+authors[i].url+'"><img width="35" height="35" src="'
+authors[i].image_path+'" '+'class="image-search">'+highlightWords(authors[i].name)+'</a></li>';}
resHtml+='</ul></li>';}
resHtml+='</ul>';if(hasResult)
$('#suggestions').html(resHtml);else
$('#suggestions').html('<ul><li><a class="search-title"> Không tìm thấy kết quả với "'+htmlEncode(searchValue)
+'"</a></li></ul>');},error:function(request,status,err){},complete:function(){$('#suggestions').fadeIn(200);}});}};
$(function(){$("a.btn_share_sms").each(function(){var self=this;$(this).overlay({mask:{top:200,color:'#ccc',loadSpeed:50,opacity:0.5},onBeforeLoad:function(){var wrap=this.getOverlay().find(".contentWrap");wrap.html('');var href=$(self).attr('href');wrap.load(href);}});});$("a.share_sms").each(function(){var self=this;$(this).overlay({mask:{top:200,color:'#ccc',loadSpeed:50,opacity:0.5},onBeforeLoad:function(){var wrap=this.getOverlay().find(".contentWrap");wrap.html('');var href=$(self).attr('href');wrap.load(href);}});});$("a.link_share").each(function(){var self=this;$(this).overlay({mask:{top:200,color:'#ccc',loadSpeed:50,opacity:0.5},onBeforeLoad:function(){var wrap=this.getOverlay().find(".contentWrap");wrap.html('');var href=$(self).attr('href');wrap.load(href);}});});$("a.link_download_ringtone").each(function(){var self=this;$(this).overlay({mask:{top:200,color:'#ccc',loadSpeed:50,opacity:0.5},onBeforeLoad:function(){var wrap=this.getOverlay().find(".contentWrap");var href=$(self).attr('href');wrap.html('');wrap.load(href);}});});$("a.btn_set_rbt").each(function(){var self=this;if($(self).hasClass('_disable_button'))
{return false;}
$(this).overlay({mask:{top:200,color:'#ccc',loadSpeed:50,opacity:0.5},onBeforeLoad:function(){var ringbacktoneId;ringbacktoneId=$(self).attr('rbt');var wrap=this.getOverlay().find(".contentWrap");wrap.html('');var href=$(self).attr('href');if(ringbacktoneId)
{href+='?ringbacktone_id='+ringbacktoneId;}
wrap.load(href);}});});$("a.link_gift_ringtone").each(function(){var self=this;if($(self).hasClass('_disable_button'))
{return false;}
$(this).overlay({mask:{top:200,color:'#ccc',loadSpeed:50,opacity:0.5},onBeforeLoad:function(){var wrap=this.getOverlay().find(".contentWrap");wrap.html('');var href=$(self).attr('href');wrap.load(href);}});});$('#present-ringtone-submit').live('click',function(){$(this).addClass('_disable');var url=$(this).attr('href');var self=$(this);$.post(url,{confirm:1,receiver_msisdn:$('#receiver_msisdn').val()},function(response){$('#overlay-login .contentWrap').html(response);return false;});return false;});$("a.link_gift_ringbacktone").each(function(){var self=this;if($(self).hasClass('_disable_button'))
{return false;}
$(this).overlay({mask:{top:200,color:'#ccc',loadSpeed:50,opacity:0.5},onBeforeLoad:function(){var wrap=this.getOverlay().find(".contentWrap");wrap.html('');var href=$(self).attr('href');wrap.load(href);}});});$('#present-ringbacktone-submit').live('click',function(){$(this).addClass('_disable');var url=$(this).attr('href');var self=$(this);$.post(url,{confirm:1,receiver_msisdn:$('#receiver_msisdn').val()},function(response){$('#overlay-login .contentWrap').html(response);return false;});return false;});$('#embed').click(function(){if($('.click-embed').is(":visible")){$('.click-embed').addClass('_hidden');$('.click-add').addClass('_hidden');}
else
{$('.click-embed').removeClass('_hidden');$('.click-add').addClass('_hidden');}});$("a.btn-download").each(function(){var self=this;$(this).overlay({mask:{top:200,color:'#ccc',loadSpeed:50,opacity:0.5},onBeforeLoad:function(){var wrap=this.getOverlay().find(".contentWrap");wrap.html('');var href=$(self).attr('href');wrap.load(href);}});});$("a.btn-download-song-in-album").each(function(){var self=this;$(this).overlay({mask:{top:200,color:'#ccc',loadSpeed:50,opacity:0.5},onBeforeLoad:function(){var wrap=this.getOverlay().find(".contentWrap");wrap.html('');var href=$(self).attr('href');wrap.load(href);}});});});;
if(!window._ate){var _atd="www.addthis.com/",_atr="//s7.addthis.com/",_euc=encodeURIComponent,_duc=decodeURIComponent,_atc={dr:0,ver:250,loc:0,enote:"",cwait:500,bamp:0.25,camp:1,csmp:0.0001,damp:1,famp:0.02,pamp:0.2,tamp:1,lamp:0,vamp:1,vrmp:0.0001,ltj:1,xamp:0.5,abf:!!window.addthis_do_ab};(function(){var l;try{l=window.location;if(l.protocol.indexOf("file")===0||l.protocol.indexOf("safari-extension")===0||l.protocol.indexOf("chrome-extension")===0){_atr="http:"+_atr;}if(l.hostname.indexOf("localhost")!=-1){_atc.loc=1;}}catch(e){}var ua=navigator.userAgent.toLowerCase(),d=document,w=window,dl=d.location,b={win:/windows/.test(ua),xp:(/windows nt 5.1/.test(ua))||(/windows nt 5.2/.test(ua)),osx:/os x/.test(ua),chr:/chrome/.test(ua),chb:/chrome\/(1[456789])/.test(ua),iph:/iphone/.test(ua),dro:/android/.test(ua),ipa:/ipad/.test(ua),saf:/safari/.test(ua)&&!(/chrome/.test(ua)),opr:/opera/.test(ua),msi:(/msie/.test(ua))&&!(/opera/.test(ua)),ffx:/firefox/.test(ua),ff2:/firefox\/2/.test(ua),ffn:/firefox\/((3.[6789][0-9a-z]*)|(4.[0-9a-z]*))/.test(ua),ie6:/msie 6.0/.test(ua),ie7:/msie 7.0/.test(ua),ie8:/msie 8.0/.test(ua),ie9:/msie 9.0/.test(ua),mod:-1},_7={rev:"106780",bro:b,wlp:(l||{}).protocol,dl:dl,upm:!!w.postMessage&&(""+w.postMessage).toLowerCase().indexOf("[native code]")!==-1,bamp:_atc.bamp-Math.random(),camp:_atc.camp-Math.random(),xamp:_atc.xamp-Math.random(),vamp:_atc.vamp-Math.random(),tamp:_atc.tamp-Math.random(),pamp:_atc.pamp-Math.random(),ab:"-",inst:1,wait:500,tmo:null,sub:!!window.at_sub,dbm:0,uid:null,spt:"static/r07/widget35.png",api:{},imgz:[],hash:window.location.hash};d.ce=d.createElement;d.gn=d.getElementsByTagName;window._ate=_7;_7.evl=function(_8,_9){if(_9){var _a;eval("evl = "+_8);return _a;}else{return eval(_8);}};function reduce(o,fn,_d,_e){if(!o){return _d;}if(o instanceof Array||(o.length&&(typeof o!=="function"))){for(var i=0,len=o.length,v=o[0];i<len;v=o[++i]){_d=fn.call(_e||o,_d,v,i,o);}}else{for(var _12 in o){_d=fn.call(_e||o,_d,o[_12],_12,o);}}return _d;}var _13=function(_14,_15){reduce(_14,function(acc,v,k){_15(k,v);},[]);},_19=function(a,b){var _1c={};for(var i=0;i<a.length;i++){_1c[a[i]]=1;}for(var i=0;i<b.length;i++){if(!_1c[b[i]]){a.push(b[i]);_1c[b[i]]=1;}}return a;},_1e=Array.prototype.slice,_1f=function(a){return _1e.apply(a,_1e.call(arguments,1));},_21=function(s){return(""+s).replace(/(^\s+|\s+$)/g,"");},_23=function(A,B){return reduce(_1f(arguments,1),function(A,_27){return reduce(_27,function(o,v,k){if(o){o[k]=v;}return o;},A);},A);},_2b=function(o,del){return reduce(o,function(acc,v,k){k=_21(k);if(k){acc.push(_euc(k)+"="+_euc(_21((typeof(v)=="object"?_2b(v,(del||"&")):(v)))));}return acc;},[]).join(del||"&");},_31=function(o,del){return reduce(o,function(acc,v,k){k=_21(k);if(k){acc.push(_euc(k)+"="+_euc(_21(v)));}return acc;},[]).join(del||"&");},_37=function(q,del){return reduce((q||"").split(del||"&"),function(acc,_3b){try{var kv=_3b.split("="),k=_21(_duc(kv[0])),v=_21(_duc(kv.slice(1).join("=")));if(v.indexOf(del||"&")>-1||v.indexOf("=")>-1){v=_37(v,del||"&");}if(k){acc[k]=v;}}catch(e){}return acc;},{});},_3f=function(q,del){return reduce((q||"").split(del||"&"),function(acc,_43){try{var kv=_43.split("="),k=_21(_duc(kv[0])),v=_21(_duc(kv.slice(1).join("=")));if(k){acc[k]=v;}}catch(e){}return acc;},{});},_47=function(){var _48=_1f(arguments,0),fn=_48.shift(),_4a=_48.shift();return function(){return fn.apply(_4a,_48.concat(_1f(arguments,0)));};},_4b=function(un,obj,evt,fn){if(!obj){return;}if(we){obj[(un?"detach":"attach")+"Event"]("on"+evt,fn);}else{obj[(un?"remove":"add")+"EventListener"](evt,fn,false);}},_50=function(obj,evt,fn){_4b(0,obj,evt,fn);},_54=function(obj,evt,fn){_4b(1,obj,evt,fn);},_58=function(s){return(s.match(/(([^\/\/]*)\/\/|\/\/)?([^\/\?\&\#]+)/i))[0];},_5a=function(s){return s.replace(_58(s),"");},_5c=function(obj){if(null==obj||"object"!=typeof obj){return obj;}if(obj instanceof Object){var _5e={};for(var _5f in obj){if(obj.hasOwnProperty(_5f)){_5e[_5f]=_5c(obj[_5f]);}}return _5e;}return null;},_60={unqconcat:_19,reduce:reduce,slice:_1f,strip:_21,extend:_23,toKV:_31,rtoKV:_2b,fromKV:_3f,rfromKV:_37,bind:_47,listen:_50,unlisten:_54,gUD:_58,gUQS:_5a,clone:_5c};_7.util=_60;_23(_7,_60);(function(i,k,l){var g,n=i.util;function j(q,p,s,o,r){this.type=q;this.triggerType=p||q;this.target=s||o;this.triggerTarget=o||s;this.data=r||{};}n.extend(j.prototype,{constructor:j,bubbles:false,preventDefault:n.noop,stopPropagation:n.noop,clone:function(){return new this.constructor(this.type,this.triggerType,this.target,this.triggerTarget,n.extend({},this.data));}});function e(o,p){this.target=o;this.queues={};this.defaultEventType=p||j;}function a(o){var p=this.queues;if(!p[o]){p[o]=[];}return p[o];}function h(o,p){this.getQueue(o).push(p);}function d(p,r){var s=this.getQueue(p),o=s.indexOf(r);if(o!==-1){s.splice(o,1);}}function b(o,s,r,q){var p=this;if(!q){setTimeout(function(){p.dispatchEvent(new p.defaultEventType(o,o,s,p.target,r));},10);}else{p.dispatchEvent(new p.defaultEventType(o,o,s,p.target,r));}}function m(p){for(var r=0,t=p.target,s=this.getQueue(p.type),o=s.length;r<o;r++){s[r].call(t,p.clone());}}function c(p){if(!p){return;}for(var o in f){p[o]=n.bind(f[o],this);}return p;}var f={constructor:e,getQueue:a,addEventListener:h,removeEventListener:d,dispatchEvent:m,fire:b,decorate:c};n.extend(e.prototype,f);i.event={PolyEvent:j,EventDispatcher:e};})(_7,_7.api,_7);_7.ed=new _7.event.EventDispatcher(_7);var _83={isBound:0,isReady:0,readyList:[],onReady:function(){if(!_83.isReady){_83.isReady=1;var l=_83.readyList.concat(window.addthis_onload||[]);for(var fn=0;fn<l.length;fn++){l[fn].call(window);}_83.readyList=[];}},addLoad:function(_86){var o=w.onload;if(typeof w.onload!="function"){w.onload=_86;}else{w.onload=function(){if(o){o();}_86();};}},bindReady:function(){if(r.isBound||_atc.xol){return;}r.isBound=1;if(d.addEventListener&&!b.opr){d.addEventListener("DOMContentLoaded",r.onReady,false);}var apc=window.addthis_product;if(apc&&apc.indexOf("f")>-1){r.onReady();return;}if(b.msi&&!b.ie9&&window==top){(function(){if(r.isReady){return;}try{d.documentElement.doScroll("left");}catch(error){setTimeout(arguments.callee,0);return;}r.onReady();})();}if(b.opr){d.addEventListener("DOMContentLoaded",function(){if(r.isReady){return;}for(var i=0;i<d.styleSheets.length;i++){if(d.styleSheets[i].disabled){setTimeout(arguments.callee,0);return;}}r.onReady();},false);}if(b.saf){var _8a;(function(){if(r.isReady){return;}if(d.readyState!="loaded"&&d.readyState!="complete"){setTimeout(arguments.callee,0);return;}if(_8a===undefined){var _8c=d.gn("link");for(var i=0;i<_8c.length;i++){if(_8c[i].getAttribute("rel")=="stylesheet"){_8a++;}}var _8e=d.gn("style");_8a+=_8e.length;}if(d.styleSheets.length!=_8a){setTimeout(arguments.callee,0);return;}r.onReady();})();}r.addLoad(r.onReady);},append:function(fn,_90){r.bindReady();if(r.isReady){fn.call(window,[]);}else{r.readyList.push(function(){return fn.call(window,[]);});}}},r=_83,a=_7;_23(_7,{plo:[],lad:function(x){_7.plo.push(x);}});(function(c,e,d){var a=window;c.pub=function(){return _euc((window.addthis_config||{}).pubid||(window.addthis_config||{}).username||window.addthis_pub||"");};c.usu=function(g,h){if(!a.addthis_share){a.addthis_share={};}if(h||g!=addthis_share.url){addthis_share.imp_url=0;}};c.rsu=function(){var h=document,g=h.title,f=h.location?h.location.href:"";if(_atc.ver>=250&&addthis_share.imp_url&&f&&f!=a.addthis_share.url&&!(_7.util.ivc((h.location.hash||"").substr(1).split(",").shift()))){a.addthis_share.url=a.addthis_url=f;a.addthis_share.title=a.addthis_title=g;return 1;}return 0;};c.igv=function(f,g){if(!a.addthis_config){a.addthis_config={username:a.addthis_pub};}else{if(addthis_config.data_use_cookies===false){_atc.xck=1;}}if(!a.addthis_share){a.addthis_share={};}if(!addthis_share.url){if(!a.addthis_url&&addthis_share.imp_url===undefined){addthis_share.imp_url=1;}addthis_share.url=(a.addthis_url||f||"").split("#{").shift();}if(!addthis_share.title){addthis_share.title=(a.addthis_title||g||"").split("#{").shift();}};if(!_atc.ost){if(!a.addthis_conf){a.addthis_conf={};}for(var b in addthis_conf){_atc[b]=addthis_conf[b];}_atc.ost=1;}})(_7,_7.api,_7);(function(b,f,c){var h,g=document,a=b.util;b.ckv=a.fromKV(g.cookie,";");function e(d){return a.fromKV(g.cookie,";")[d];}if(!b.cookie){b.cookie={};}b.cookie.rck=e;})(_7,_7.api,_7);(function(b,c,e){var a,h=document,g=0,m=b.util;function j(){if(g){return 1;}k("xtc",1);if(1==b.cookie.rck("xtc")){g=1;}f("xtc",1);return g;}function l(o){if(_atc.xck){return;}var n=o||_7.dh||_7.du||(_7.dl?_7.dl.hostname:"");if(n.indexOf(".gov")>-1||n.indexOf(".mil")>-1){_atc.xck=1;}var q=typeof(b.pub)==="function"?b.pub():b.pub,d=["usarmymedia","govdelivery"];for(i in d){if(q==d[i]){_atc.xck=1;break;}}}function f(n,d){if(h.cookie){h.cookie=n+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/"+(d?"; domain="+(b.bro.msi?"":".")+"addthis.com":"");}}function k(o,n,p,q,d){if(!window.at_sub){l();}if(!_atc.xck){if(!d){var d=new Date();d.setYear(d.getFullYear()+2);}document.cookie=o+"="+n+(!p?"; expires="+d.toUTCString():"")+"; path=/;"+(!q?" domain="+(b.bro.msi?"":".")+"addthis.com":"");}}if(!b.cookie){b.cookie={};}b.cookie.sck=k;b.cookie.kck=f;b.cookie.cww=j;b.cookie.gov=l;})(_7,_7.api,_7);(function(c,f,d){var b=c.util,a={};timeouts={};if(!c.cbs){c.cbs={};}function e(j,i,m,k,g){i=(_euc(i)).replace(/[0-3][A-Z]|[^a-zA-Z0-9]/g,"");a[i]=a[i]||0;var h=a[i]++,l=j+"_"+i+(!g?h:"");if(!_7.cbs[l]){_7.cbs[l]=function(){if(timeouts[l]){clearTimeout(timeouts[l]);}m.apply(this,arguments);};}_7.cbs["time_"+l]=(new Date()).getTime();if(k){clearTimeout(timeouts[l]);timeouts[l]=setTimeout(k,10000);}return"_ate.cbs."+_euc(l);}b.scb=e;})(_7,_7.api,_7);(function(b,d,c){function e(){var k=a(navigator.userAgent,16),f=((new Date()).getTimezoneOffset())+""+navigator.javaEnabled()+(navigator.userLanguage||navigator.language),h=window.screen.colorDepth+""+window.screen.width+window.screen.height+window.screen.availWidth+window.screen.availHeight,g=navigator.plugins,l=g.length;if(l>0){for(var j=0;j<Math.min(10,l);j++){if(j<5){f+=g[j].name+g[j].description;}else{h+=g[j].name+g[j].description;}}}return k.substr(0,2)+a(f,16).substr(0,3)+a(h,16).substr(0,3);}function a(h,j){var f=291;if(h){for(var g=0;g<h.length;g++){f=(f*(h.charCodeAt(g)+g)+3)&1048575;}}return(f&16777215).toString(j||32);}b.mun=a;b.gub=e;})(_7,_7.api,_7);(function(d,e,g){var c,l=d.util,j=4294967295,b=new Date().getTime();function h(){return((b/1000)&j).toString(16)+("00000000"+(Math.floor(Math.random()*(j+1))).toString(16)).slice(-8);}function a(m){return k(m)?(new Date((parseInt(m.substr(0,8),16)*1000))):new Date();}function i(m){var n=a();return((n.getTime()-1000*86400)>(new Date()).getTime());}function f(m,o){var n=a(m);return(((new Date()).getTime()-n.getTime())>o*1000);}function k(m){return m&&m.match(/^[0-9a-f]{16}$/)&&!i(m);}l.cuid=h;l.ivc=k;l.ioc=f;})(_7,_7.api,_7);(function(c,f,e){function b(g){if(!g){return"";}else{if(g.indexOf("%")>-1){g=_duc(g);}}var g=_7.util.atob(g.split(",")[1]);return g;}function d(h){var j={},g,i;j.zip=h.substring(0,5);j.continent=h.substring(5,7);j.country=h.substring(7,9);j.region=h.substring(9,11);g=h.substring(11,15);if(g!="0000"){j.lat=(parseInt(g)/10-180).toFixed(1);}lonstr=h.substring(15,19);if(lonstr!="0000"){j.lon=(parseInt(lonstr)/10-180).toFixed(1);}j.dma=h.substring(19,22);j.msa=h.substring(22,26);j.network_type=h.substring(26,27);j.throughput=h.substring(27,28);return j;}function a(j,k){j=j.split(",");for(var h=0;h<j.length;h++){var g=j[h].replace(/ /g,"");if(k.zip==g||k.continent==g||k.country==g||k.region==g){return 1;}}return 0;}c.util=c.util||{};c.util.geo={dec:b,parse:d,isin:a};})(_7,_7.api,_7);(function(a,c,b){function d(e){return e.split("//").pop().split("/").shift().split("#").shift().split("?").shift().split(".").slice(-2).join(".");}a.util=a.util||{};a.util.host=d;})(_7,_7.api,_7);(function(a,d,c){function e(g,f){var h=g.indexOf("#")>-1&&!f?g.replace(/^[^\#]+\#?|^\#?/,""):g.replace(/^[^\?]+\??|^\??/,""),i=a.util.fromKV(h);return i;}function b(k){var g=document.gn("script"),l=g.length,h=g[l-1],j=e(h.src);if(k||(h.src&&h.src.indexOf("addthis")==-1)){for(var f=0;f<l;f++){if((g[f].src||"").indexOf(k||"addthis.com")>-1){j=e(g[f].src);break;}}}return j;}if(!a.util){a.util={};}a.util.gsp=b;a.util.ghp=e;})(_7,_7.api,_7);(function(e,g,f){var d=e.util,b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=";function a(k){var j="",n,l,h,p,o,m=0;if(/[0-9a-fA-F]+/.test(k)){while(m<k.length){n=parseInt(k.charAt(m++),16);l=parseInt(k.charAt(m++),16);h=parseInt(k.charAt(m++),16);p=(n<<2)|(isNaN(h)?l&3:(l>>2));o=((l&3)<<4)|h;j+=b.charAt(p)+(isNaN(h)?"":b.charAt(o));}}return j;}function c(k){var j="",n,l,h,p,o,m=0;while(m<k.length){p=b.indexOf(k.charAt(m++));o=m>=k.length?NaN:b.indexOf(k.charAt(m++));n=p>>2;l=isNaN(o)?(p&3):(((p&3)<<2)|(o>>4));h=o&15;j+=n.toString(16)+l.toString(16)+(isNaN(o)?"":h.toString(16));}return j;}d.hbtoa=a;d.atohb=c;})(_7,_7.api,_7);(function(f,s,u){var v=f,j=new Date().getTime(),r=function(){return Math.floor(Math.random()*4294967295).toString(36);},w=function(){return Math.floor((new Date().getTime()-j)/100).toString(16);},g=0,i=function(a){if(g===0){v.sid=g=(a||v.util.cuid());}return g;},d=null,c=function(a,x){if(d!==null){clearTimeout(d);}if(a){d=setTimeout(function(){x(false);},_7.wait);}},o=function(x,a){return _euc(x)+"="+_euc(a)+";"+w();},n=1,h=function(x,z){var a=(x||"").split("?"),x=a.shift(),y=(a.pop()||"").split("&");return z(x,y);},k=function(a,x,z,y){if(!x){x={};}if(!x.remove){x.remove=[];}if(x.remove.push){x.remove.push("sms_ss");x.remove.push("at_xt");x.remove.push("fb_ref");x.remove.push("fb_source");}if(x.remove){a=t(a,x.remove);}if(x.clean){a=l(a);}if(x.defrag){a=e(a);}if(x.add){a=m(a,x.add,z,y);}return a;},m=function(z,B,A,x){var a={};if(B){for(var y in B){if(z.indexOf(y+"=")>-1){continue;}a[y]=p(B[y],z,A,x);}B=_7.util.toKV(a);}return z+(B.length?((z.indexOf("?")>-1?"&":"?")+B):"");},p=function(y,x,z,a){var z=z||addthis_share;return y.replace(/\{\{service\}\}/g,_euc(a||"")).replace(/\{\{code\}\}/g,_euc(a||"")).replace(/\{\{title\}\}/g,_euc(z.title)).replace(/\{\{url\}\}/g,_euc(x));},t=function(x,z){var a={},z=z||[];for(var y=0;y<z.length;y++){a[z[y]]=1;}return h(x,function(A,D){var E=[];if(D){for(var B in D){if(typeof(D[B])=="string"){var C=(D[B]||"").split("=");if(C.length!=2&&D[B]){E.push(D[B]);}else{if(a[C[0]]){continue;}else{if(D[B]){E.push(D[B]);}}}}}A+=(E.length?("?"+E.join("&")):"");}return A;});},q=function(a){var x=a.split("#").pop().split(",").shift().split("=").pop();if(_7.util.ivc(x)){return a.split("#").pop().split(",");}return[""];},e=function(a){var x=q(a).shift().split("=").pop();if(_7.util.ivc(x)){return a.split("#").shift();}else{x=a.split("#").slice(1).join("#").split(";").shift();if(x.split(".").length==3){x=x.split(".").slice(0,-1).join(".");}if(x.length==12&&x.substr(0,1)=="."&&(/[a-zA-Z0-9\-_]{11}/).test(x.substr(1))){return a.split("#").shift();}}return a;},l=function(a){return h(a,function(y,B){var x=y.indexOf(";jsessionid"),C=[];if(x>-1){y=y.substr(0,x);}if(B){for(var z in B){if(typeof(B[z])=="string"){var A=(B[z]||"").split("=");if(A.length==2){if(A[0].indexOf("utm_")===0||A[0]=="gclid"||A[0]=="sms_ss"||A[0]=="at_xt"||A[0]=="fb_ref"||A[0]=="fb_source"){continue;}}if(B[z]){C.push(B[z]);}}}y+=(C.length?("?"+C.join("&")):"");}return y;});},b=function(){var a=(typeof(v.pub||"")=="function"?v.pub():v.pub)||"unknown";return"AT-"+a+"/-/"+v.ab+"/"+i()+"/"+(n++)+(v.uid!==null?"/"+v.uid:"");};if(!_7.track){_7.track={};}f.util.extend(_7.track,{fcv:o,ran:r,rup:t,aup:m,cof:e,gof:q,clu:l,mgu:k,ssid:i,sta:b,sxm:c});})(_7,_7.api,_7);(function(c,e,i){var n=".",h=";",s=".",l=n.length,k=0,q={wpp:1,blg:1};function b(t){var u=t.split(";").shift();if(u.split(".").length==3){u=u.split(".").slice(0,-1).join(".");}if(u.length==12&&u.substr(0,1)=="."&&(/[a-zA-Z0-9\-_]{11}/).test(u.substr(1))){return 1;}return 0;}function r(t){return(t.length==(11+l)&&(t.substr(0,l)==n)&&(/[a-zA-Z0-9\-_]{11}/).test(t.substr(l)));}function o(u){var t=_7.util.atohb(u.substr(l));return{id:(t.substr(0,8)+"00000000,"+parseInt(t.substr(16),10)),fuid:t.substr(8,8)};}function g(K,I){if(!K){K=document.location;}if(!I){I=d.referer||d.referrer||"";}var J,P,A,N,v,E,x=0,y=0,G=K?K.href:"",C=(G||"").split("#").shift(),u=K.hash.substr(1),F=_7.util.ghp(K.search,1),H=_7.util.ghp(K.hash);y=0,at_st=H.at_st,at_pco=H.at_pco,v=F.sms_ss,fb_ref=F.fb_ref,at_xt=F.at_xt,q_at_st=F.at_st;if(!at_st){if(r(u)){var Q=_7.util.atohb(u.substr(l));E=Q.substr(8,8);at_st=Q.substr(0,8)+"00000000,";at_st+=parseInt(Q.substr(16),10);}}if(fb_ref&&!at_st){var M=s,B=fb_ref.split(M);if(B.length<2&&fb_ref.indexOf("_")>-1){M="_";B=fb_ref.split(M);}var w=B.length>1?B.pop():"",t=B.join(M);if(!r(t)){t=fb_ref;w="";}if(r(t)){var Q=_7.util.atohb(t.substr(l));at_xt=Q.substr(0,16)+","+parseInt(Q.substr(16),10);v="facebook_"+(w||"like");}else{var O=fb_ref.split("=").pop().split(s);if(O.length==2&&_7.util.ivc(O[0])){at_xt=O.join(",");v="facebook_"+(w||"like");}}}at_st=(at_st&&_7.util.ivc(at_st.split(",").shift()))?at_st:"";if(!at_xt){var M=(u.indexOf(h)>-1)?h:s,z=u.substr(l).split(M);if(z.length==2&&r(u.substr(0,1)+z[0])){var Q=_7.util.atohb(z[0]);at_xt=Q.substr(0,16)+","+parseInt(Q.substr(16),10);v=z[1];x=1;}}if(at_pco){A=1;}if(at_st){y=parseInt(at_st.split(",").pop())+1;P=at_st.split(",").shift();}else{if(G.indexOf(_atd+"book")==-1&&C!=I){var D=[],L;if(at_xt){L=at_xt.split(",");J=_duc(L.shift());if(J.indexOf(",")>-1){L=J.split(",");J=L.shift();}}else{if(q_at_st){L=q_at_st.split(",");N=_duc(L.shift());if(N.indexOf(",")>-1){L=N.split(",");N=L.shift();}}}if(L&&L.length){y=Math.min(3,parseInt(L.pop())+1);}}}if(!_7.util.ivc(P)){P=null;}if(!_7.util.ivc(N)){N=null;}v=(v||"").split("#").shift().split("?").shift();return{rsi:P,cfc:A,hash:x,rsiq:N,fuid:E,rxi:J,rsc:v,gen:y};}function f(v,t){if(!t||(t.data_track_clickback!==false&&t.data_track_linkback!==false)){if(k){return true;}if(_atc.ver>=250){return(k=true);}v=(v||window.addthis_product||"").split(",");for(var u=0;u<v.length;u++){if(q[v[u].split("-").shift()]){return(k=true);}}}return false;}function j(t,u){t=t||a.util.cuid();return n+_7.util.hbtoa(t+Math.min(3,u||0));}function p(u,v,t){t=t||a.util.cuid();return u.indexOf("#")>-1?u:u+"#"+j((v?t:t.substr(0,8)+_7.gub()),(a.smd||{}).gen)+(v?s+v:"");}function m(v){var u,x,z,A;if(v.indexOf("#")>-1){var y=v.split("#").slice(1).join("#");if(b(y)){var t=y.substr(1).split("."),w=(t.length)?t.shift():"";x=(t.length)?t.pop():"";if(w){w=_7.util.atohb(w);u=w.substr(0,16);z=parseInt(w.substr(16),10);if(!isNaN(z)){A=A||{};A.gen=z;}}if(_7.util.ivc(u)){A=A||{};A.xid=u;}if(x.search(/^[a-zA-Z0-9_]+$/)!=-1){A=A||{};A.rsc=x;}}}return A;}_7.extend(_7.track,{cur:p,dcu:m,gcc:j,cpf:n,ctp:f,eop:g,ich:b});})(_7,_7.api,_7);(function(b,d,c){function f(g){if(g=="t.co"){return"twitter";}for(var h in b.services.map){var i=b.services.map[h];if(i===""){i=h+".com";}if(g.indexOf(i)!=-1){return h;}}return;}function e(h){h=_duc(h);h=h.toLowerCase();h=h.replace(/[,;:\+\|]/g," ");h=h.replace(/[^a-z0-9. '\-]/g,"");h=h.replace(/\s+/g," ");h=h.replace(/\s+$/g,"");var k=[];var j=h.split(" ");for(var g=0;g<j.length;g++){var i=j[g];if(i.charAt(0)=="-"){continue;}else{if(/'s$/.test(i)){k.push(i.substring(0,i.length-2).replace(/[-']/g,"")+"'s");}else{k=k.concat(i.replace(/'/g,"").split("-"));}}}return k;}function a(){var h=b.dr;var l=b.ad.clr(h);var i={};if(typeof(h)=="undefined"||h===""){i.type="direct";return i;}var j=b.util.host(h);var k=f(j);if(typeof(k)!="undefined"){i.type="social";i.service=k;}else{if(b.ad.iss(h)){i.type="search";i.domain=b.util.host(h);var g=b.ad.fst(h);i.terms=e(g);}else{if(l&b.ad.ref.r_ondomain){i.type="internal";i.domain=document.location.hostname;}else{if(l&b.ad.ref.r_offdomain){i.type="referred";i.domain=b.util.host(h);}else{i.type="direct";}}}}return i;}if(!b.track){b.track={};}b.track.ts={get:a,gst:e};})(_7,_7.api,_7);(function(){var d=document,a=_7,_188=0,cvt=[],avt=null,_18b=Math.random()<_atc.csmp,_18c=(!_7.sub&&((dl||{}).href||"").indexOf(".addthis.com")>-1)?1:Math.random()<1000*_atc.csmp,_18d=new RegExp(/\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})/g),_18e=new RegExp(/^((([a-z]|[0-9]|\-)+)\.)+([a-z])+$/ig),qtp=[],xtp=function(){var p;while(p=qtp.pop()){trk(p);}},atf=null,pcs=[],spc=null;function apc(c){c=c.split("-").shift();for(var i=0;i<pcs.length;i++){if(pcs[i]==c){return;}}pcs.push(c);}function get_atssh(){var div=d.getElementById("_atssh");if(!div){div=d.ce("div");div.style.visibility="hidden";div.id="_atssh";a.opp(div.style);d.body.insertBefore(div,d.body.firstChild);}return div;}function ctf(url){var ifr,r=Math.floor(Math.random()*1000),div=get_atssh();if(!a.bro.msi){ifr=d.ce("iframe");ifr.id="_atssh"+r;ifr.title="AddThis utility frame";}else{if(a.bro.ie6&&!url&&d.location.protocol.indexOf("https")==0){url="javascript:''";}div.innerHTML="<iframe id=\"_atssh"+r+"\" width=\"1\" height=\"1\" title=\"AddThis utility frame\" name=\"_atssh"+r+"\" "+(url?"src=\""+url+"\"":"")+">";ifr=d.getElementById("_atssh"+r);}a.opp(ifr.style);ifr.frameborder=ifr.style.border=0;ifr.style.top=ifr.style.left=0;return ifr;}function jsl(){var w=window;return((((w.jQuery||{}).fn||{}).jquery&&1)|((w.Prototype||{}).Version&&2)|((w.YUI||{}).version||(w.YAHOO||{}).VERSION&&4)|((w.Ext||{}).version&&8)|((w.dojo||{}).version&&16)|((w._gaq||w._gat)&&32)|(w.google_ad_client&&64)|((w.FB||w.fbAsyncInit)&&128)|(w.$BTB&&256)|(w.meebo&&512)|(w.gigya&&1024)|(w.SHARETHIS&&2048)|(w._qevents&&4096)|(w.twttr&&8192));}function onMenuShare(e){var _19d=300;if(e&&e.data&&e.data.service){if(a.dcp>=_19d){return;}trk({gen:e.data.service.indexOf("facebook")>-1||e.data.service=="more"?-1:_19d,pix:"dest="+e.data.service});a.dcp=_19d;}}var _19e,_19f=[];function onApiUsage(evt){if(evt.data.call){_19f.push(evt.data.call);}if(!_19e){_19e=setTimeout(function(){img("ap","3","calls="+_euc(_19f.join(",")),{});},10000);}}function onMenuPop(evt){var t={},data=evt.data||{},svc=data.svc,pco=data.pco,_1a6=data.cmo,_1a7=data.crs,_1a8=data.cso;if(svc){t.sh=svc;}if(_1a6){t.cm=_1a6;}if(_1a8){t.cs=1;}if(_1a7){t.cr=1;}if(pco){t.spc=pco;}img("sh","3",null,t);}function trk(t){var dr=a.dr,rev=(a.rev||"");if(!t){return;}t.xck=_atc.xck?1:0;t.xxl=1;t.sid=a.track.ssid();t.pub=a.pub();t.ssl=a.ssl||0;t.du=a.tru(a.du||a.dl.href);if(a.dt){t.dt=a.dt;}if(a.cb){t.cb=a.cb;}t.lng=a.lng();t.ver=_atc.ver;t.jsl=a.track.jsl();if(!a.upm&&a.uid){t.uid=a.uid;}t.pc=t.spc||pcs.join(",");if(dr){t.dr=a.tru(dr);}if(a.dh){t.dh=a.dh;}if(rev){t.rev=rev;}if(a.xfr){if(a.upm){if(atf){atf.contentWindow.postMessage(_31(t),"*");}}else{var div=get_atssh(),base="static/r07/sh69.html"+(false?"?t="+new Date().getTime():"");if(atf){div.removeChild(div.firstChild);}atf=ctf();atf.src=_atr+base+"#"+_31(t);div.appendChild(atf);}}else{qtp.push(t);}}function img(i,c,x,obj,_1b2){if(!window.at_sub&&!_atc.xtr){var t=obj||{};t.evt=i;if(x){t.ext=x;}avt=t;if(_1b2===1){xmi(true);}else{a.track.sxm(true,xmi);}}}function cev(k,v){cvt.push(a.track.fcv(k,v));a.track.sxm(true,xmi);}function xmi(_1b6){var h=a.dl?a.dl.hostname:"";if(cvt.length>0||avt){a.track.sxm(false,xmi);if(_atc.xtr){return;}var t=avt||{};t.ce=cvt.join(",");cvt=[];avt=null;trk(t);if(_1b6){var i=d.ce("iframe");i.id="_atf";_7.opp(i.style);d.body.appendChild(i);i=d.getElementById("_atf");}}}function onCopy(){text="",p_copy=250;if(window.getSelection){text=_7.trim((window.getSelection().toString()||"")).replace(_18d," ").replace(/[\b]+/g," ").split(" ");if(text.length){if(_18b&&_188<3){cev("cbc",text.length);}_188++;if(!_18c){return;}var _1ba=[];for(var i=0;i<text.length;i++){if(text[i]&&text[i].length<=50&&text[i].indexOf("@")==-1&&text[i].indexOf("://")==-1&&(!(_18e.test(text[i])))){_1ba.push(text[i]);}}if(_1ba.length&&_1ba.length<=5&&(!a.dcp||a.dcp<p_copy)){setTimeout(function(){trk({gen:p_copy,pix:"tt="+_euc(_1ba.join(" "))});a.dcp=p_copy;},Math.random()*10000);}}}}try{if(_18b||_18c){if(a.bro.msi){document.body.attachEvent("oncopy",onCopy,true);}else{document.addEventListener("copy",onCopy,true);}}}catch(e){}a.ed.addEventListener("addthis-internal.api",onApiUsage);a.ed.addEventListener("addthis-internal.compact",onMenuPop);a.ed.addEventListener("addthis.menu.share",onMenuShare);if(!a.track){a.track={};}a.util.extend(a.track,{pcs:pcs,apc:apc,cev:cev,ctf:ctf,jsl:jsl,gtf:get_atssh,qtp:function(p){qtp.push(p);},stf:function(f){atf=f;},trk:trk,xtp:xtp});})();_23(_7,{_rec:[],xfr:!_7.upm||!_7.bro.ffx,pmh:function(e){if(e.origin.slice(-12)==".addthis.com"){if(!e.data){return;}var data=_7.util.rfromKV(e.data),r=_7._rec;for(var n=0;n<r.length;n++){r[n](data);}}}});_23(_7,{lng:function(){return window.addthis_language||(window.addthis_config||{}).ui_language||(_7.bro.msi?navigator.userLanguage:navigator.language)||"en";},iwb:function(l){var wd={th:1,pl:1,sl:1,gl:1,hu:1,is:1,nb:1,se:1,su:1,sw:1};return!!wd[l];},gfl:function(l){var map={ca:"es",cs:"CZ",cy:"GB",da:"DK",de:"DE",eu:"ES",ck:"US",en:"US",es:"LA",fb:"FI",gl:"ES",ja:"JP",ko:"KR",nb:"NO",nn:"NO",sv:"SE",ku:"TR",zh:"CN","zh-tr":"CN","zh-hk":"HK","zh-tw":"TW",fo:"FO",fb:"LT",af:"ZA",sq:"AL",hy:"AM",be:"BY",bn:"IN",bs:"BA",nl:"NL",et:"EE",fr:"FR",ka:"GE",el:"GR",gu:"IN",hi:"IN",ga:"IE",jv:"ID",kn:"IN",kk:"KZ",la:"VA",li:"NL",ms:"MY",mr:"IN",ne:"NP",pa:"IN",pt:"PT",rm:"CH",sa:"IN",sr:"RS",sw:"KE",tl:"PH",ta:"IN",pl:"PL",tt:"RU",te:"IN",ml:"IN",uk:"UA",vi:"VN",tr:"TR",xh:"ZA",zu:"ZA",km:"KH",tg:"TJ",he:"IL",ur:"PK",fa:"IR",yi:"DE",gn:"PY",qu:"PE",ay:"BO",se:"NO",ps:"AF",tl:"ST"},rv=map[l]||map[l.split("-").shift()];if(rv){return l.split("-").shift()+"_"+rv;}else{return"en_US";}},ivl:function(l){var lg={af:1,afr:"af",ar:1,ara:"ar",az:1,aze:"az",be:1,bye:"be",bg:1,bul:"bg",bn:1,ben:"bn",bs:1,bos:"bs",ca:1,cat:"ca",cs:1,ces:"cs",cze:"cs",cy:1,cym:"cy",da:1,dan:"da",de:1,deu:"de",ger:"de",el:1,gre:"el",ell:"ell",en:1,eo:1,es:1,esl:"es",spa:"spa",et:1,est:"et",eu:1,fa:1,fas:"fa",per:"fa",fi:1,fin:"fi",fo:1,fao:"fo",fr:1,fra:"fr",fre:"fr",ga:1,gae:"ga",gdh:"ga",gl:1,glg:"gl",gu:1,he:1,heb:"he",hi:1,hin:"hin",hr:1,ht:1,hy:1,cro:"hr",hu:1,hun:"hu",id:1,ind:"id",is:1,ice:"is",it:1,ita:"it",ja:1,jpn:"ja",ko:1,kor:"ko",ku:1,lb:1,ltz:"lb",lt:1,lit:"lt",lv:1,lav:"lv",mk:1,mac:"mk",mak:"mk",ml:1,mn:1,ms:1,msa:"ms",may:"ms",nb:1,nl:1,nla:"nl",dut:"nl",no:1,nds:1,nn:1,nno:"no",oc:1,oci:"oc",pl:1,pol:"pl",ps:1,pt:1,por:"pt",ro:1,ron:"ro",rum:"ro",ru:1,rus:"ru",sk:1,slk:"sk",slo:"sk",sl:1,slv:"sl",sq:1,alb:"sq",sr:1,se:1,si:1,ser:"sr",su:1,sv:1,sve:"sv",sw:1,swe:"sv",ta:1,tam:"ta",te:1,teg:"te",th:1,tha:"th",tl:1,tgl:"tl",tn:1,tr:1,tur:"tr",tt:1,uk:1,ukr:"uk",ur:1,urd:"ur",vi:1,vec:1,vie:"vi","zh-hk":1,"chi-hk":"zh-hk","zho-hk":"zh-hk","zh-tr":1,"chi-tr":"zh-tr","zho-tr":"zh-tr","zh-tw":1,"chi-tw":"zh-tw","zho-tw":"zh-tw",zh:1,chi:"zh",zho:"zh"};if(lg[l]){return lg[l];}l=l.split("-").shift();if(lg[l]){if(lg[l]===1){return l;}else{return lg[l];}}return 0;},ggl:function(l){var map={en:"en-US",ar:"ar",ca:"ca",zh:"zh-CN",hr:"hr",cs:"cs",da:"da",nl:"nl",et:"et",fi:"fi",fr:"fr",de:"de",el:"el",he:"iw",hi:"hi",hu:"hu",id:"id",it:"it",ja:"ja",ko:"ko",lv:"lv",lt:"lt",ms:"ms",no:"no",fa:"fa",pl:"pl",pt:"pt-BR",ro:"ro",ru:"ru",sr:"sr",sk:"sk",sl:"sl",es:"es",sv:"sv",th:"th",tr:"tr",uk:"uk",vi:"vi"};return map[l]||null;},gvl:function(l){var rv=_7.ivl(l)||"en";if(rv===1){rv=l;}return rv;},alg:function(al,f){var l=_7.gvl((al||_7.lng()).toLowerCase());if(l.indexOf("en")!==0&&(!_7.pll||f)){_7.pll=_7.ajs("static/r07/lang15/"+l+".js");}}});_23(_7,{trim:function(s,e){try{if(s&&s.trim&&typeof(s.trim)=="function"){s=s.trim();}else{s=s.replace(/^[\s\u3000]+/,"").replace(/[\s\u3000]+$/,"");}if(e){s=_euc(s);}}catch(e){}return s||"";},trl:[],tru:function(u,k){var rv="",_1d4=0,_1d5=-1;if(u){rv=u.substr(0,300);if(rv!==u){if((_1d5=rv.lastIndexOf("%"))>=rv.length-4){rv=rv.substr(0,_1d5);}if(rv!=u){for(var i in _7.trl){if(_7.trl[i]==k){_1d4=1;}}if(!_1d4){_7.trl.push(k);}}}}return rv;},opp:function(st){st.width=st.height="1px";st.position="absolute";st.zIndex=100000;},jlr:{},ajs:function(name,_1d9,_1da,id,el){if(!_7.jlr[name]){var o=d.ce("script"),head=(el)?el:d.gn("head")[0]||d.documentElement;o.setAttribute("type","text/javascript");if(_1da){o.setAttribute("async","true");}if(id){o.setAttribute("id",id);}o.src=(_1d9?"":_atr)+name;head.insertBefore(o,head.firstChild);_7.jlr[name]=1;return o;}return 1;},jlo:function(){try{var a=_7,al=a.lng(),aig=function(src){var img=new Image();_7.imgz.push(img);img.src=src;};a.alg(al);if(!a.pld){if(a.bro.ie6){aig(_atr+a.spt);aig(_atr+"static/t00/logo1414.gif");aig(_atr+"static/t00/logo88.gif");if(window.addthis_feed){aig("static/r05/feed00.gif",1);}}if(a.pll&&!window.addthis_translations){setTimeout(function(){a.pld=a.ajs("static/r07/menu89.js");},10);}else{a.pld=a.ajs("static/r07/menu89.js");}}}catch(e){}},ao:function(elt,pane,iurl,_1e7,_1e8,_1e9){_7.lad(["open",elt,pane,iurl,_1e7,_1e8,_1e9]);_7.jlo();return false;},ac:function(){},as:function(s,cf,sh){_7.lad(["send",s,cf,sh]);_7.jlo();}});(function(e,f,j){var n=document,l=1,a=["cbea","cbeab","kkk","zvys","phz","gvgf","shpxf","chfflyvcf","pernzcvr","svfgvat","wvmm","fcybbtr","flovna"],g=a.length,c={};function b(d){return d.replace(/[a-zA-Z]/g,function(i){return String.fromCharCode((i<="Z"?90:122)>=(i=i.charCodeAt(0)+13)?i:i-26);});}while(g--){c[b(a[g])]=1;}function h(d){var i=0;if(!d||typeof(d)!="string"){return i;}d=((d||"").toLowerCase()+"").replace(/ /g,"");if(d=="mature"||d=="adult"||d=="rta-5042-1996-1400-1577-rta"){i|=l;}return i;}function m(q){var t=0;if(!q||typeof(q)!="string"){return t;}q=((q||"").toLowerCase()+"").replace(/[^a-zA-Z]/g," ").split(" ");for(var d=0,r=q.length;d<r;d++){if(c[q[d]]){t|=l;return t;}}return t;}function o(){var s=(w.addthis_title||n.title),i=m(s),r=n.all?n.all.tags("META"):n.getElementsByTagName?n.getElementsByTagName("META"):new Array(),q=(r||"").length;if(r&&q){while(q--){var d=r[q]||{},u=(d.name||(d.getAttribute?d.getAttribute("property"):"")||"").toLowerCase(),t=d.content;if(u=="description"||u=="keywords"){i|=m(t);}if(u=="rating"){i|=h(t);}}}return i;}function k(){var s=[],r=n.all?n.all.tags("META"):n.getElementsByTagName?n.getElementsByTagName("META"):new Array(),i=(r||"").length;if(r&&i){while(i--){var d=r[i]||{},v=((d.getAttribute?d.getAttribute("property"):"")||d.name||"").toLowerCase(),u=d.content,q;if(v.indexOf("og:")===0){q=v.split(":").pop();if(s.length<7){s.push(q=="type"?q+"="+u:q);}}}}return s;}function p(){var s={},q="",r=n.all?n.all.tags("META"):n.getElementsByTagName?n.getElementsByTagName("META"):new Array();if(!r||r.length==0){return s;}for(var d=0;d<r.length;d++){q=r[d].getAttribute("property")||"";if(q.search(/^og:/i)!=-1){s[q.replace("og:","")]=r[d].content;}}return _31(s);}if(!e.ad){e.ad={};}_7.extend(e.ad,{cla:o,gog:k,og:p});})(_7,_7.api,_7);(function(e,g,j){var l=document,h=0,b=1,a=2,i=4;function c(n,m,d){d=(d===undefined||d)||(window.location.protocol=="https:");m=_7.util.host(m===undefined?window.location.href:m);var p=h,q=0;if(n){var o=_7.util.host(n);if(m==o){p|=a;}else{p|=i;}}if(!d&&k(n)){p|=b;}return p;}function k(d){var n=".com/";var m=0;if(d&&d.match(/ws\/results\/(Web|Images|Video|News)/)){m=1;}else{if(d&&d.indexOf("addthis"==-1)&&(d.match(/google.*\/(search|url|m\?)/)||d.indexOf(n+"url")>-1||d.indexOf("/search?")>-1||d.indexOf(n+"search")>-1||d.indexOf(n+"s?bs")>-1||d.indexOf(n+"s?wd")>-1||d.indexOf(n+"web")>-1||d.match(/aol.*\/aol/)||d.indexOf("hotbot"+n)>-1)){if(f(d)!=false){m=1;}}}if(m){return true;}else{return false;}}function f(d){var n=d.split("?").pop().toLowerCase().split("&");var o=/^(?:q|search|bs|wd|p|query|qry|text)=(.*)/;for(var m=0;m<n.length;m++){if(matches=o.exec(n[m])){return matches[1];}}return false;}if(!e.ad){e.ad={};}e.ad.clr=c;e.ad.iss=k;e.ad.fst=f;e.ad.ref={r_direct:h,r_search:b,r_ondomain:a,r_offdomain:i};})(_7,_7.api,_7);(function(f,g,h){var c,j=document,m=f.util,b=f.event.EventDispatcher,k=25,e=[];function i(p,r,o){var d=[];function d(){d.push(arguments);}function q(){o[p]=r;while(d.length){r.apply(o,d.shift());}}d.ready=q;return d;}function l(p){if(p&&p instanceof a){e.push(p);}for(var d=0;d<e.length;){var o=e[d];if(o&&o.test()){e.splice(d,1);a.fire("load",o,{resource:o});}else{d++;}}if(e.length){setTimeout(l,k);}}function a(r,o,q){var d=this,p=new b(d);p.decorate(p).decorate(d);this.ready=false;this.loading=false;this.id=r;this.url=o;if(typeof(q)==="function"){this.test=q;}else{this.test=function(){return(!!_window[q]);};}a.addEventListener("load",function(s){var t=s.resource;if(!t||t.id!==d.id){return;}d.loading=false;d.ready=true;p.fire(s.type,t,{resource:t});});}m.extend(a.prototype,{load:function(){if(!this.loading){var d;if(this.url.substr(this.url.length-4)==".css"){var o=(j.gn("head")[0]||j.documentElement);d=j.ce("link");d.rel="stylesheet";d.type="text/css";d.href=this.url;d.media="all";o.insertBefore(d,o.firstChild);}else{d=_7.ajs(this.url,1);}this.loading=true;a.monitor(this);return d;}else{return 1;}}});var n=new b(a);n.decorate(n).decorate(a);m.extend(a,{known:{},loading:e,monitor:l});f.resource={Resource:a,ApiQueueFactory:i};})(_7,_7.api,_7);(function(e,u,w){var y=document,l=y.gn("body").item(0),h={},g={},o,x=[],c=0,s=0,t=0,j=true,m=[],A=0,v=0,i=0;function p(){return((_atc.ltj&&k()&&n())||(q()&&FB.XFBML&&FB.XFBML.parse));}function n(){if(o===undefined){try{var B=(document.getElementsByTagName("html"))[0];if(B){if(B.getAttribute&&B.getAttribute("xmlns:fb")){o=true;}else{if(_7.bro.msi){var d=B.outerHTML.substr(0,B.outerHTML.indexOf(">"));if(d.indexOf("xmlns:fb")>-1){o=true;}}}}}catch(C){o=false;}}return o;}function q(){return(typeof(window.FB)=="object"&&FB.Event&&typeof(FB.Event.subscribe)=="function");}function k(){return!window.FB_RequireFeatures&&(!window.FB||(!FB.Share&&!FB.Bootstrap));}function f(){if(y.location.href.indexOf(_atr)==-1&&!_7.sub&&!c){if(q()){var d=(addthis_config.data_ga_tracker||addthis_config.data_ga_property);c=1;FB.Event.subscribe("message.send",function(D){var B={},E=g[D];for(var C in addthis_share){B[C]=addthis_share[C];}if(E){for(var C in E){B[C]=E[C];}}B.url=D;_7.share.track("facebook_send",0,B,addthis_config);if(d){_7.gat("facebook_send",D,addthis_config,B);}});FB.Event.subscribe("edge.create",function(D){if(!h[D]){var B={},E=g[D];for(var C in addthis_share){B[C]=addthis_share[C];}if(E){for(var C in E){B[C]=E[C];}}B.url=D;_7.share.track("facebook_like",0,B,addthis_config);if(d){_7.gat("facebook_like",D,addthis_config,B);}h[D]=1;}});FB.Event.subscribe("edge.remove",function(D){if(h[D]){var B={},E=g[D];for(var C in addthis_share){B[C]=addthis_share[C];}if(E){for(var C in E){B[C]=E[C];}}B.url=D;_7.share.track("facebook_unlike",0,B,addthis_config);h[D]=0;}});FB.Event.subscribe("comment.create",function(D){var B={},E=g[D.href];for(var C in addthis_share){B[C]=addthis_share[C];}if(E){for(var C in E){B[C]=E[C];}}B.url=D.href;_7.share.track("facebook_comment",0,B,addthis_config);if(d){_7.gat("facebook_comment",D.href,addthis_config,B);}});FB.Event.subscribe("comment.remove",function(D){var B={},E=g[D.href];for(var C in addthis_share){B[C]=addthis_share[C];}if(E){for(var C in E){B[C]=E[C];}}B.url=D.href;_7.share.track("facebook_uncomment",0,B,addthis_config);});}else{if(window.fbAsyncInit&&!t){if(s<3){setTimeout(f,3000+1000*2*(s++));}t=1;}}}}function r(d,E){var D="fb-root",C=y.getElementById(D),B=window.fbAsyncInit;x.push(d);if(q()&&FB.XFBML&&FB.XFBML.parse){FB.XFBML.parse(d);f();}else{if(!B){if(!C){C=y.ce("div");C.id=D;document.body.appendChild(C);}if(!B){var F=y.createElement("script");F.src=y.location.protocol+"//connect.facebook.net/"+(E||_7.gfl(_7.lng()))+"/all.js";F.async=true;C.appendChild(F);B=function(){FB.init({appId:i?"140586622674265":"172525162793917",status:true,cookie:true});};}}if(j){j=false;window.__orig__fbAsyncInit=B;window.fbAsyncInit=function(){window.__orig__fbAsyncInit();for(var G=0;G<x.length;G++){FB.XFBML.parse(x[G]);}f();};}}}function z(H,F){if(H.ost){return;}var I,G=_7.api.ptpa(H,"fb:like"),C="",E=G.layout||"button_count",J=G.locale||_7.gfl(_7.lng()),d={standard:[450,G.show_faces?80:35],button_count:[90,25],box_count:[55,65]},K=G.width||(d[E]?d[E][0]:100),D=G.height||(d[E]?d[E][1]:25);passthrough=_7.util.toKV(G);_7.ufbl=1;if(p()){if(G.layout===undefined){G.layout="button_count";}if(G.show_faces===undefined){G.show_faces="false";}if(G.action===undefined){G.action="like";}if(G.width===undefined){G.width=K;}if(G.font===undefined){G.font="arial";}if(G.href===undefined){G.href=_7.track.mgu(F.share.url,{defrag:1});}for(var B in G){C+=" "+B+"=\""+G[B]+"\"";}if(!F.share.xid){F.share.xid=_7.util.cuid();}g[G.href]={};for(var B in F.share){g[G.href][B]=F.share[B];}H.innerHTML="<fb:like ref=\""+_7.share.gcp(F.share,F.conf,".like").replace(",","_")+"\" "+C+"></fb:like>";r(H);}else{if(!_7.bro.msi){I=y.ce("iframe");}else{H.innerHTML="<iframe frameborder=\"0\" scrolling=\"no\" allowTransparency=\"true\" scrollbars=\"no\""+(_7.bro.ie6?" src=\"javascript:''\"":"")+"></iframe>";I=H.firstChild;}I.style.overflow="hidden";I.style.scrolling="no";I.style.scrollbars="no";I.style.border="none";I.style.borderWidth="0px";I.style.width=K+"px";I.style.height=D+"px";I.src="//www.facebook.com/plugins/like.php?href="+_euc(_7.track.mgu(F.share.url,{defrag:1}))+"&layout=button_count&show_faces=false&width=100&action=like&font=arial&"+passthrough;if(!_7.bro.msi){H.appendChild(I);}}H.noh=H.ost=1;}function b(E,C,G,d){var D=E.share_url_transforms||E.url_transforms||{},F=(E.passthrough||{}).facebook||{},B=a.track.cof(a.track.mgu(E.url,D,E,"facebook"));B=A?("http://www.facebook.com/sharer.php?&t="+_euc(E.title)+"&u="+_euc(_7.share.acb("facebook",E,C))):(v?("http://www.facebook.com/connect/prompt_feed.php?message="+_euc(E.title)+"%0A%0D"+_euc(_7.share.acb("facebook",E,C))):i?"http://www.facebook.com/dialog/feed?redirect_uri="+_euc("http://s7.addthis.com/static/postshare/c00.html")+"&app_id=140586622674265&link="+_euc(B)+"&name="+_euc(E.title)+"&description="+_euc(E.description||""):_7.share.genurl("facebook",0,E,C));if(A||v||i){_7.share.track("facebook",0,E,C,1);}if(C.ui_use_same_window||d){window.location.href=B;}else{_7.share.ocw(B,550,450,"facebook");}return false;}e.share=e.share||{};e.share.fb={like:z,has:q,ns:n,ready:p,compat:k,share:b,sub:f,load:r};})(_7,_7.api,_7);(function(e,o,r){var t=document,x=e,i=[],b=n();function n(){var d=t.gn("link"),B={};for(var A=0;A<d.length;A++){var a=d[A];if(a.href&&a.rel){B[a.rel]=a.href;}}return B;}function v(){var a=t.location.protocol;if(a=="file:"){a="http:";}return a+"//"+_atd;}function l(A,B,d,a){return v()+(B?"feed.php":(A=="email"&&_atc.ver>=300?"tellfriend.php":"bookmark.php"))+"?v="+(_atc.ver)+"&winname=addthis&"+z(A,B,d,a)+(x.dr?"&pre="+_euc(x.track.cof(x.dr)):"")+"&tt=0"+(A==="more"&&x.bro.ipa?"&imore=1":"");}function z(R,G,U,Z){var N=x.trim,W=window,S=x.pub(),L=window._atw||{},M=(U&&U.url?U.url:(L.share&&L.share.url?L.share.url:(W.addthis_url||W.location.href))),Y,F=function(ac){if(M&&M!=""){var d=M.indexOf("#at"+ac);if(d>-1){M=M.substr(0,d);}}};if(!Z){Z=L.conf||{};}else{for(var T in L.conf){if(!(Z[T])){Z[T]=L.conf[T];}}}if(!U){U=L.share||{};}else{for(var T in L.share){if(!(U[T])){U[T]=L.share[T];}}}if(x.rsu()){U.url=window.addthis_url;U.title=window.addthis_title;M=U.url;}if(!S||S=="undefined"){S="unknown";}Y=Z.services_custom;F("pro");F("opp");F("cle");F("clb");F("abc");if(M.indexOf("addthis.com/static/r07/ab")>-1){M=M.split("&");for(var V=0;V<M.length;V++){var P=M[V].split("=");if(P.length==2){if(P[0]=="url"){M=P[1];break;}}}}if(Y instanceof Array){for(var V=0;V<Y.length;V++){if(Y[V].code==R){Y=Y[V];break;}}}var X=((U.templates&&U.templates[R])?U.templates[R]:""),A=((U.modules&&U.modules[R])?U.modules[R]:""),D=U.share_url_transforms||U.url_transforms||{},J=U.track_url_transforms||U.url_transforms,ab=((D&&D.shorten&&U.shorteners)?(typeof(D.shorten)=="string"?D.shorten:(D.shorten[R]||D.shorten["default"]||"")):""),H="",Q=(Z.product||W.addthis_product||("men-"+_atc.ver)),B=L.crs,I="",O=x.track.gof(M),aa=O.length==2?O.shift().split("=").pop():"",a=O.length==2?O.pop():"",K=(Z.data_track_clickback||Z.data_track_linkback||!S||S=="AddThis")||(Z.data_track_clickback!==false&&_atc.ver>=250);if(U.email_vars){for(var T in U.email_vars){I+=(I==""?"":"&")+_euc(T)+"="+_euc(U.email_vars[T]);}}if(x.track.spc&&Q.indexOf(x.track.spc)==-1){Q+=","+x.track.spc;}if(D&&D.shorten&&U.shorteners){for(var T in U.shorteners){for(var C in U.shorteners[T]){H+=(H.length?"&":"")+_euc(T+"."+C)+"="+_euc(U.shorteners[T][C]);}}}M=x.track.cof(M);M=x.track.mgu(M,D,U,R);if(J){U.trackurl=x.track.mgu(U.trackurl||M,J,U,R);}var E="pub="+S+"&source="+Q+"&lng="+(x.lng()||"xx")+"&s="+R+(Z.ui_508_compliant?"&u508=1":"")+(G?"&h1="+N((U.feed||U.url).replace("feed://",""),1)+"&t1=":"&url="+N(M,1)+"&title=")+N(U.title||W.addthis_title,1)+(_atc.ver<200?"&logo="+N(W.addthis_logo,1)+"&logobg="+N(W.addthis_logo_background,1)+"&logocolor="+N(W.addthis_logo_color,1):"")+"&ate="+x.track.sta()+((R!="email"||_atc.ver<300)?"&frommenu=1":"")+((window.addthis_ssh&&(!B||addthis_ssh!=B)&&(addthis_ssh==R||addthis_ssh.search(new RegExp("(?:^|,)("+R+")(?:$|,)"))>-1))?"&ips=1":"")+(B?"&cr="+(R==B?1:0):"")+"&uid="+_euc(x.uid&&x.uid!="x"?x.uid:x.util.cuid())+(U.email_template?"&email_template="+_euc(U.email_template):"")+(I?"&email_vars="+_euc(I):"")+(ab?"&shortener="+_euc(typeof(ab)=="array"?ab.join(","):ab):"")+(ab&&H?"&"+H:"")+((U.passthrough||{})[R]?"&passthrough="+N((typeof(U.passthrough[R])=="object"?x.util.toKV(U.passthrough[R]):U.passthrough[R]),1):"")+(U.description?"&description="+N(U.description,1):"")+(U.html?"&html="+N(U.html,1):(U.content?"&html="+N(U.content,1):""))+(U.trackurl&&U.trackurl!=M?"&trackurl="+N(U.trackurl,1):"")+(U.screenshot?"&screenshot="+N(U.screenshot,1):"")+(U.swfurl?"&swfurl="+N(U.swfurl,1):"")+(x.cb?"&cb="+x.cb:"")+(x.ufbl?"&ufbl=1":"")+(x.uud?"&uud=1":"")+(U.iframeurl?"&iframeurl="+N(U.iframeurl,1):"")+(U.width?"&width="+U.width:"")+(U.height?"&height="+U.height:"")+(Z.data_track_p32?"&p32="+Z.data_track_p32:"")+(K||_7.track.ctp(Z.product,Z)?"&ct=1":"")+((K||_7.track.ctp(Z.product,Z))&&M.indexOf("#")>-1?"&uct=1":"")+((Y&&Y.url)?"&acn="+_euc(Y.name)+"&acc="+_euc(Y.code)+"&acu="+_euc(Y.url):"")+(x.smd?(x.smd.rxi?"&rxi="+x.smd.rxi:"")+(x.smd.rsi?"&rsi="+x.smd.rsi:"")+(x.smd.gen?"&gen="+x.smd.gen:""):((aa?"&rsi="+aa:"")+(a?"&gen="+a:"")))+(U.xid?"&xid="+N(U.xid,1):"")+(X?"&template="+N(X,1):"")+(A?"&module="+N(A,1):"")+(Z.ui_cobrand?"&ui_cobrand="+N(Z.ui_cobrand,1):"")+(Z.ui_header_color?"&ui_header_color="+N(Z.ui_header_color,1):"")+(Z.ui_header_background?"&ui_header_background="+N(Z.ui_header_background,1):"");return E;}function y(A,d,B){var a=A.xid;if(d.data_track_clickback||d.data_track_linkback||_7.track.ctp(d.product,d)){return x.track.gcc(a,(x.smd||{}).gen||0)+(B||"");}else{return"";}}function q(G,I,C,H,d,J){var F=x.pub(),a=H||I.url||"",B=I.xid||x.util.cuid(),D=(C.data_track_clickback||C.data_track_linkback||!F||F=="AddThis")||(C.data_track_clickback!==false&&_atc.ver>=250);if(a.toLowerCase().indexOf("http%3a%2f%2f")===0){a=_duc(a);}if(d){var A={};for(var E in I){A[E]=I[E];}A.xid=B;setTimeout(function(){(new Image()).src=l(G=="twitter"&&J?"tweet":G,0,A,C);},100);}return(D?x.track.cur(a,G,B):a);}function g(C,A,a){var A=A||{},B=C.share_url_transforms||C.url_transforms||{},d=x.track.cof(x.track.mgu(C.url,B,C,"mailto"));return"mailto:?subject="+_euc(C.title?C.title:d)+"&body="+_euc(q("mailto",C,A,d,a));}function h(a){return((!a.templates||!a.templates.twitter)&&(!x.wlp||x.wlp=="http:"));}function f(d,B,I,A){var G=B||550,C=I||450,H=screen.width,E=screen.height,F=Math.round((H/2)-(G/2)),a=0,D;if(E>C){F=Math.round((E/2)-(C/2));}w.open(d,A||"addthis_share","left="+F+",top="+a+",width="+G+",height="+C+",personalbar=no,toolbar=no,scrollbars=yes,location=yes,resizable=yes");return false;}function u(d,A,a){w.open(l(d,0,A,a),"addthis_share");return false;}function j(d){var a={twitter:1,wordpress:1,email:_atc.ver>=300,more:_atc.ver>=300,raiseyourvoice:1,vk:1};return a[d];}function p(F,E,B,D,a,A){var C={wordpress:{width:720,height:570},linkedin:{width:600,height:400},email:_atc.ver>=300?{width:660,height:660}:{width:735,height:450},more:_atc.ver>=300?{width:660,height:716}:{width:735,height:450},vk:{width:720,height:290},raiseyourvoice:{width:480,height:635},"default":{width:550,height:450}},d=l(F,0,E,B);if(B.ui_use_same_window){window.location.href=d;}else{f(d,D||(C[F]||C["default"]).width,a||(C[F]||C["default"]).height,A);}return false;}function c(F,B,G,D){var C=F.share_url_transforms||F.url_transforms||{},A,d=(F.passthrough||{}).twitter||{},a=x.track.cof(x.track.mgu(F.url,C,F,"twitter")),E=((F.passthrough||{}).twitter==undefined)?{}:d;if(!F.templates){F.templates={};}if(!F.templates.twitter){F.templates.twitter=(F.text||((F.title==t.title)?E.text:F.title)||"{{title}}:")+" {{url}} via @"+(F.via||E.via||"AddThis");}a=l("twitter",0,F,B);if(A){F.title=A;}if(B.ui_use_same_window||D){window.location.href=a;}else{f(a,550,450,"twitter_tweet");}return false;}function k(B,A,a,d){_7.ed.fire("addthis.menu.share",window.addthis||{},{element:d||{},service:B||"unknown",url:A.trackurl||A.url});}function m(C,D,B,d,A){var a=l(C,D,B,d);i.push(x.ajs(a,1));if(!A){k(C,B,d);}}function s(A,d,a){return v()+"tellfriend.php?&fromname=aaa&fromemail="+_euc(d.from)+"&frommenu=1&tofriend="+_euc(d.to)+(A.email_template?"&template="+_euc(A.email_template):"")+(d.vars?"&vars="+_euc(d.vars):"")+"&lng="+(x.lng()||"xx")+"&note="+_euc(d.note)+"&"+z("email",null,null,a);}e.share=e.share||{};e.util.extend(e.share,{auw:j,ocw:f,stw:p,siw:u,pts:c,unt:h,uadd:z,genurl:l,geneurl:s,genieu:g,acb:q,gcp:y,svcurl:v,track:m,notify:k,links:b});})(_7,_7.api,_7);(function(a,b,c){if(!a.services){a.services={};}a.services.map={facebook:"",twitter:"",reddit:"",stumbleupon:"",gmail:"mail.google.com",blogger:"",linkedin:"",tumblr:"",delicious:"",yahoomail:"compose.mail.yahoo.com",hotmail:"hotmail.msn.com","100zakladok":"100zakladok.ru","2tag":"2tag.nl","2linkme":"","7live7":"",a1webmarks:"a1-webmarks.com",a97abi:"",addio:"add.io",menu:"api.addthis.com",adfty:"",adifni:"",aerosocial:"",allmyfaves:"",amazonwishlist:"amazon.com",amenme:"",aim:"lifestream.aol.com",aolmail:"webmail.aol.com",armenix:"",arto:"",aviary:"",baang:"baang.ir",baidu:"cang.baidu.com",bebo:"",bentio:"",biggerpockets:"",bitly:"bit.ly",bizsugar:"",bleetbox:"",blinklist:"",blip:"blip.pl",bloggy:"bloggy.se",blogmarks:"blogmarks.net",blogtrottr:"",blurpalicious:"",bobrdobr:"bobrdobr.ru",bonzobox:"",socialbookmarkingnet:"social-bookmarking.net",bookmarkycz:"bookmarky.cz",bookmerkende:"bookmerken.de",bordom:"bordom.net",box:"box.net",brainify:"",bryderi:"bryderi.se",buddymarks:"",buzzzy:"",camyoo:"",cardthis:"partner.cardthis.com",care2:"",chiq:"",cirip:"cirip.ro",citeulike:"citeulike.org",classicalplace:"",cndig:"cndig.org",colivia:"colivia.de",technerd:"",connotea:"connotea.org",cootopia:"",cosmiq:"cosmiq.de",curateus:"curate.us",designbump:"",designmoo:"",digthiswebhost:"",digaculturanet:"digacultura.net",digg:"",diggita:"diggita.it",diglog:"",digo:"digo.it",digzign:"",diigo:"",dipdive:"",domelhor:"domelhor.net",dosti:"dosti.webdunia.com",dotnetkicks:"",dotnetshoutout:"",woscc:"wos.cc",douban:"",draugiem:"draugiem.lv",drimio:"",dropjack:"",dwellicious:"",dzone:"",edelight:"edelight.de",efactor:"",ekudos:"ekudos.nl",elefantapl:"elefanta.pl",embarkons:"",eucliquei:"eucliquei.com.br",evernote:"",extraplay:"",ezyspot:"",stylishhome:"",fabulously40:"",informazione:"fai.informazione.it",fark:"",farkinda:"",fashiolista:"",fashionburner:"",favable:"",faves:"",favlogde:"favlog.de",favoritende:"favoriten.de",favoritus:"",flaker:"flaker.pl",flosspro:"floss.pro",folkd:"",formspring:"formspring.me",thefreedictionary:"",fresqui:"",friendfeed:"",friendster:"",funp:"",fwisp:"",gabbr:"",gamekicker:"",givealink:"givealink.org",globalgrind:"",govn:"my.go.vn",goodnoows:"",googletranslate:"translate.google.com",gravee:"",greaterdebater:"",grono:"grono.net",habergentr:"haber.gen.tr",hackernews:"news.ycombinator.com",hadashhot:"hadash-hot.co.il",hatena:"b.hatena.ne.jp",gluvsnap:"healthimize.com",hedgehogs:"hedgehogs.net",hellotxt:"",historious:"historio.us",hitmarks:"",hotbookmark:"hotbmark.com",hotklix:"",w3validator:"validator.w3.org",hyves:"hyves.net",idearef:"",identica:"identi.ca",ihavegot:"",index4:"index4.in",indexor:"indexor.co.uk",instapaper:"",investorlinks:"",iorbix:"",isociety:"isociety.be",iwiw:"iwiw.hu",jamespot:"",jappy:"jappy.de",joliprint:"api.joliprint.com",jumptags:"",zooloo:"kablog.com",kaboodle:"",kaevur:"",kaixin:"kaixin001.com",kindleit:"fivefilters.org",kipup:"",kirtsy:"",kledy:"kledy.de",kommenting:"",latafaneracat:"latafanera.cat",laaikit:"laaik.it",ladenzeile:"ladenzeile.de",librerio:"",linkninja:"linkninja.com.br",linkagogo:"",linksgutter:"",linkshares:"linkshares.net",linkuj:"linkuj.cz",livejournal:"",lockerblogger:"",logger24:"",mymailru:"connect.mail.ru",markme:"markme.me",mashbord:"",mawindo:"",meinvz:"meinvz.net",mekusharim:"mekusharim.walla.co.il",memonic:"",memori:"memori.ru",meneame:"meneame.net",live:"profile.live.com",mindbodygreen:"",misterwong:"mister-wong.com",misterwong_de:"mister-wong.de",moemesto:"moemesto.ru",moikrug:"moikrug.ru",mototagz:"",mrcnetworkit:"mrcnetwork.it",multiply:"",myaol:"favorites.my.aol.com",myhayastan:"myhayastan.am",mylinkvault:"",myspace:"",n4g:"",naszaklasa:"nk.pl",netlog:"",netvibes:"",netvouz:"",newsmeback:"",newstrust:"newstrust.net",newsvine:"",nujij:"nujij.nl",odnoklassniki_ru:"odnoklassniki.ru",oknotizie:"oknotizie.virgilio.it",oneview:"oneview.de",ongobee:"",orkut:"promote.orkut.com",dashboard:"api.addthis.com",oyyla:"",packg:"",pafnetde:"pafnet.de",pdfonline:"savepageaspdf.pdfonline.com",pdfmyurl:"",phonefavs:"",pingfm:"ping.fm",planypus:"planyp.us",plaxo:"",plurk:"",pochvalcz:"pochval.cz",popedition:"",posteezy:"",posterous:"",pratiba:"prati.ba",printfriendly:"",pusha:"pusha.se",qrfin:"qrf.in",quantcast:"",qzone:"sns.qzone.qq.com",readitlater:"readitlaterlist.com",rediff:"share.rediff.com",redkum:"",ridefix:"",scoopat:"scoop.at",scoopit:"scoop.it",sekoman:"sekoman.lv",select2gether:"www2.select2gether.com",shaveh:"shaveh.co.il",shetoldme:"",shirintar:"shir.intar.in",simpy:"",sinaweibo:"v.t.sina.com.cn",slashdot:"slashdot.org",smiru:"smi2.ru",sodahead:"",sonico:"",speedtile:"speedtile.net",sphinn:"",spinsnap:"",spokentoyou:"",sportpost:"",yiid:"spread.ly",springpad:"springpadit.com",squidoo:"",startaid:"",startlap:"startlap.hu",storyfollower:"",studivz:"studivz.net",stuffpit:"",stumpedia:"",stylehive:"",svejo:"svejo.net",symbaloo:"",taaza:"",tagmarksde:"tagmarks.de",tagvn:"",tagza:"",tarpipe:"",tellmypolitician:"",thewebblend:"",thinkfinity:"community.thinkfinity.org",thisnext:"",throwpile:"",tipd:"",topsitelernet:"ekle.topsiteler.net",transferr:"",tuenti:"",tulinq:"",tusul:"",tvinx:"",tweetmeme:"api.tweetmeme.com",twitthis:"",typepad:"",upnews:"upnews.it",urlaubswerkde:"urlaubswerk.de",urlcapt:"",viadeo:"",virb:"",visitezmonsite:"",vk:"vkontakte.ru",vkrugudruzei:"vkrugudruzei.ru",voxopolis:"",vybralisme:"vybrali.sme.sk",vyoom:"",webnews:"webnews.de",domaintoolswhois:"domaintools.com",windows:"api.addthis.com",windycitizen:"",wirefan:"",wordpress:"",worio:"",wykop:"wykop.pl",xanga:"",xing:"",yahoobkm:"bookmarks.yahoo.com",yammer:"",yardbarker:"",yemle:"",yigg:"yigg.de",yoolink:"go.yoolink.to",yorumcuyum:"",youblr:"",youbookmarks:"",youmob:"",yuuby:"",zakladoknet:"zakladok.net",zanatic:"",ziczac:"ziczac.it",zingme:"link.apps.zing.vn",zootool:""};})(_7,_7.api,_7);var w=window,ac=w.addthis_config||{},css=new _7.resource.Resource("widgetcss",_atr+"static/r07/widget71.css",function(){return true;}),_2e4=new _7.resource.Resource("widget32css",_atr+"static/r07/widgetbig71.css",function(){return true;});function main(){try{if(_atc.xol&&!_atc.xcs&&ac.ui_use_css!==false){css.load();if(_7.bro.ipa){_2e4.load();}}var a=_7,msi=a.bro.msi,hp=0,_2e8=window.addthis_config||{},dt=d.title,dr=(typeof(a.rdr)!=="undefined")?a.rdr:(d.referer||d.referrer||""),du=dl?dl.href:null,dh=dl.hostname,_2ed=du,_2ee=0,al=(_7.lng().split("-")).shift(),_2f0=_7.track.eop(dl,dr),cvt=[],nabc=!!a.cookie.rck("nabc"),cfc=_2f0.cfc,rsiq=_2f0.rsiq,rsi=_2f0.rsi,rxi=_2f0.rxi,rsc=_2f0.rsc.split("&").shift().split("%").shift().replace(/[^a-z0-9_]/g,""),gen=_2f0.gen,fuid=_2f0.fuid,ifr,_2fb=_atr+"static/r07/sh69.html#",data,_2fd=function(){if(!_7.track.pcs.length){_7.track.apc(window.addthis_product||("men-"+_atc.ver));}data.pc=_7.track.pcs.join(",");};if(rsc=="tweet"){rsc="twitter";}if(window.addthis_product){_7.track.apc(addthis_product);if(addthis_product.indexOf("fxe")==-1&&addthis_product.indexOf("bkm")==-1){_7.track.spc=addthis_product;}}var l=_7.share.links.canonical;if(l){if(l.indexOf("http")!==0){_2ed=(du||"").split("//").pop().split("/");if(l.indexOf("/")===0){_2ed=_2ed.shift()+l;}else{_2ed.pop();_2ed=_2ed.join("/")+"/"+l;}_2ed=dl.protocol+"//"+_2ed;}else{_2ed=l;}_7.usu(0,1);}_2ed=_2ed.split("#{").shift();a.igv(_2ed,d.title||"");var _2ff=addthis_share.view_url_transforms||addthis_share.track_url_transforms||addthis_share.url_transforms;if(_2ff){_2ed=_7.track.mgu(_2ed,_2ff);}if(rsi){rsi=rsi.substr(0,8)+fuid;}if(a.bro.mod==-1){var m=document.compatMode;if(m){var md=1;if(m=="BackCompat"){md=2;}else{if(m=="CSS1Compat"){md=0;}}a.bro.mode=md;if(a.bro.msi){a.bro.mod=md;}}}a.smd={rsi:rsi,rxi:rxi,gen:gen,rsc:rsc};a.dr=a.tru(dr,"fr");a.du=a.tru(_2ed,"fp");a.dt=dt=w.addthis_share.title;a.cb=a.ad.cla();a.dh=dl.hostname;a.ssl=du&&du.indexOf("https")===0?1:0;data={iit:(new Date()).getTime(),cb:a.cb,ab:a.ab,dh:a.dh,dr:a.dr,du:a.du,dt:dt,md:a.bro.mode,inst:a.inst,jsl:a.track.jsl(),lng:a.lng(),ogt:_7.ad.gog().join(","),pc:w.addthis_product||"men",pub:a.pub(),ssl:a.ssl,sid:_7.track.ssid(),srd:_atc.damp,srf:_atc.famp,srp:_atc.pamp,srl:_atc.lamp,srx:_atc.xamp,ver:_atc.ver,xck:_atc.xck||0,og:_7.ad.og()};if(a.trl.length){data.trl=a.trl.join(",");}if(a.rev){data.rev=a.rev;}if(_2e8.data_track_clickback||_2e8.data_track_linkback||_7.track.ctp(data.pc,_2e8)){data.ct=a.ct=1;}if(a.prv){data.prv=_31(a.prv);}if(rsc){data.sr=rsc;}if(a.vamp>=0&&!a.sub){if(cfc){cvt.push(a.track.fcv("plv",Math.round(1/_atc.vamp)));cvt.push(a.track.fcv("cfc",1));cvt.push(a.track.fcv("rcf",dl.hash));data.ce=cvt.join(",");}else{if(rsi&&(fuid!=a.gub())){cvt.push(a.track.fcv("plv",Math.round(1/_atc.vamp)));cvt.push(a.track.fcv("rsi",rsi));cvt.push(a.track.fcv("gen",gen));cvt.push(a.track.fcv("abc",1));cvt.push(a.track.fcv("fcu",a.gub()));cvt.push(a.track.fcv("rcf",dl.hash));data.ce=cvt.join(",");_2ee="addressbar";}else{if(rxi||rsiq||rsc){cvt.push(a.track.fcv("plv",Math.round(1/_atc.vamp)));if(rsc){cvt.push(a.track.fcv("rsc",rsc));}if(rxi){cvt.push(a.track.fcv("rxi",rxi));}else{if(rsiq){cvt.push(a.track.fcv("rsi",rsiq));}}if(rsiq||rxi){cvt.push(a.track.fcv("gen",gen));}data.ce=cvt.join(",");_2ee=rsc||"unknown";}}}}if(_2ee&&a.bamp>=0){data.clk=1;a.dcp=data.gen=50;_7.ed.fire("addthis.user.clickback",window.addthis||{},{service:_2ee});}if(!window.at_noxld){data.xld=1;}if(a.upm){data.xd=1;}if(!nabc&&window.history&&typeof(history.replaceState)=="function"&&(!_7.bro.chr||_7.bro.chb)&&(_2e8.data_track_addressbar||_2e8.data_track_addressbar_paths)&&((du||"").split("#").shift()!=dr)&&(du.indexOf("#")==-1||rsi||(_2f0.hash&&rxi))){var path=dl.pathname||"",_303,_304=path!="/";if(_2e8.data_track_addressbar_paths){_304=0;for(var i=0;i<_2e8.data_track_addressbar_paths.length;i++){_303=new RegExp(_2e8.data_track_addressbar_paths[i].replace(/\*/g,".*")+"$");if(_303.test(path)){_304=1;break;}}}if(_304&&(!rsi||a.util.ioc(rsi,5))){var _306=function(){history.replaceState({d:(new Date()),g:gen},d.title,_7.track.cur(dl.href.split("#").shift(),null,_7.track.ssid()));};_306();}}if(dl.href.indexOf(_atr)==-1&&!a.sub){if(a.upm){if(msi){setTimeout(function(){_2fd();ifr=a.track.ctf(_2fb+_31(data));a.track.stf(ifr);},_7.wait);w.attachEvent("onmessage",a.pmh);}else{ifr=a.track.ctf();w.addEventListener("message",a.pmh,false);}if(_7.bro.ffx){ifr.src=_2fb;_7.track.qtp(data);}else{if(!msi){setTimeout(function(){_2fd();ifr.src=_2fb+_31(data);},_7.wait);}}}else{ifr=a.track.ctf();setTimeout(function(){_2fd();ifr.src=_2fb+_31(data);},_7.wait);}if(ifr){ifr=a.track.gtf().appendChild(ifr);a.track.stf(ifr);}}if(w.addthis_language||ac.ui_language){a.alg();}if(a.plo.length>0){a.jlo();}}catch(e){window.console&&console.log("lod",e);}}w._ate=a;w._adr=r;a._ssc=a._ssh=[];a.dat={};a._rec.push(function(data){_13(data,function(k,v){a.dat[k]=v;});if(data.ssc){a._ssc=data.ssc;}if(data.sshs){var s=window.addthis_ssh=_duc(data.sshs);a.gssh=1;a._ssh=s.split(",");}if(data.uss){var u=a._uss=_duc(data.uss).split(",");if(window.addthis_ssh){var seen={},u=u.concat(a._ssh),_30d=[];for(var i=0;i<u.length;i++){var s=u[i];if(!seen[s]){_30d.push(s);}seen[s]=1;}u=_30d;}a._ssh=u;window.addthis_ssh=u.join(",");}if(data.ups){var s=data.ups.split(",");a.ups={};for(var i=0;i<s.length;i++){if(s[i]){var o=_3f(_duc(s[i]));a.ups[o.name]=o;}}a._ups=a.ups;}if(data.uid){a.uid=data.uid;_7.ed.fire("addthis-internal.data.uid",{},{uid:data.uid});}if(data.bti){a.bti=data.bti;_7.ed.fire("addthis-internal.data.bti",{},{bti:data.bti});}if(data.bts){a.bts=parseInt(data.bts);_7.ed.fire("addthis-internal.data.bts",{},{bts:data.bts});}if(data.vts){a.vts=parseInt(data.vts);_7.ed.fire("addthis-internal.data.vts",{},{vts:data.vts});}if(data.geo){a.geo=(data.geo.constructor=="string")?_7.util.geo.parse(data.geo):data.geo;_7.ed.fire("addthis-internal.data.geo",{},{geo:a.geo});}if(data.dbm){a.dbm=data.dbm;}if(data.atgotcode){a.sau=data.atgotcode;}if(data.rdy){a.xfr=1;a.track.xtp();return;}});try{var _310={},_311=_7.util.gsp("addthis_widget.js");if(typeof(_311)=="object"){if(_311.provider){_310={provider:_7.mun(_311.provider_code||_311.provider),auth:_311.auth||_311.provider_auth||""};if(_311.uid||_311.provider_uid){_310.uid=_7.mun(_311.uid||_311.provider_uid);}if(_311.logout){_310.logout=1;}_7.prv=_310;}if(_311.pubid||_311.pub||_311.username){w.addthis_pub=_duc(_311.pubid||_311.pub||_311.username);}if(w.addthis_pub&&w.addthis_config){w.addthis_config.username=w.addthis_pub;}if(_311.domready){_atc.dr=1;}if(_311.onready&&_311.onready.match(/[a-zA-Z0-9_\.\$]+/)){try{_7.onr=_7.evl(_311.onready);}catch(e){window.console&&console.log("addthis: onready function ("+_311.onready+") not defined",e);}}if(_311.async){_atc.xol=1;}}if((window.addthis_conf||{}).xol){_atc.xol=1;}if(_atc.ver===120){var rc="atb"+_7.util.cuid();d.write("<span id=\""+rc+"\"></span>");_7.igv();_7.lad(["span",rc,addthis_share.url||"[url]",addthis_share.title||"[title]"]);}if(w.addthis_clickout){_7.lad(["cout"]);}if(!_atc.xol&&!_atc.xcs&&ac.ui_use_css!==false){css.load();if(_7.bro.ipa){_2e4.load();}}}catch(e){if(window.console){console.log("main",e);}}_83.bindReady();_83.append(main);})();function addthis_open(){if(typeof iconf=="string"){iconf=null;}return _ate.ao.apply(_ate,arguments);}function addthis_close(){_ate.ac();}function addthis_sendto(){_ate.as.apply(_ate,arguments);return false;}if(_atc.dr){_adr.onReady();}}else{_ate.inst++;}if(_atc.abf){addthis_open(document.getElementById("ab"),"emailab",window.addthis_url||"[URL]",window.addthis_title||"[TITLE]");}if(!window.addthis||window.addthis.nodeType!==undefined){window.addthis=(function(){var e={a1webmarks:"A1&#8209;Webmarks",aim:"AOL Lifestream",amazonwishlist:"Amazon",aolmail:"AOL Mail",aviary:"Aviary Capture",domaintoolswhois:"Whois Lookup",googlebuzz:"Google Buzz",googlereader:"Google Reader",googletranslate:"Google Translate",linkagogo:"Link-a-Gogo",meneame:"Men&eacute;ame",misterwong:"Mister Wong",mailto:"Email App",myaol:"myAOL",myspace:"MySpace",readitlater:"Read It Later",rss:"RSS",stumbleupon:"StumbleUpon",typepad:"TypePad",wordpress:"WordPress",yahoobkm:"Y! Bookmarks",yahoomail:"Y! Mail",youtube:"YouTube"},g=document,c=g.gn("body").item(0),f=_ate.util.bind;function b(d,l){var m;if(window._atw&&_atw.list){m=_atw.list[d]}else{if(e[d]){m=e[d]}else{m=(l?d:(d.substr(0,1).toUpperCase()+d.substr(1)))}}return(m||"").replace(/&nbsp;/g," ")}function i(d,u,s,r,t){u=u.toUpperCase();var p=(d==c&&addthis.cache[u]?addthis.cache[u]:(d||c||g.body).getElementsByTagName(u)),n=[],q,m;if(d==c){addthis.cache[u]=p}if(t){for(q=0;q<p.length;q++){m=p[q];if((m.className||"").indexOf(s)>-1){n.push(m)}}}else{s=s.replace(/\-/g,"\\-");var l=new RegExp("(^|\\s)"+s+(r?"\\w*":"")+"(\\s|$)");for(q=0;q<p.length;q++){m=p[q];if(l.test(m.className)){n.push(m)}}}return(n)}var k=g.getElementsByClassname||i;function j(d){if(typeof d=="string"){var l=d.substr(0,1);if(l=="#"){d=g.getElementById(d.substr(1))}else{if(l=="."){d=k(c,"*",d.substr(1))}else{}}}if(!d){d=[]}else{if(!(d instanceof Array)){d=[d]}}return d}function a(l,d){return function(){addthis.plo.push({call:l,args:arguments,ns:d})}}function h(m){var l=this,d=this.queue=[];this.name=m;this.call=function(){d.push(arguments)};this.call.queuer=this;this.flush=function(p,o){for(var n=0;n<d.length;n++){p.apply(o||l,d[n])}return p}}return{ost:0,cache:{},plo:[],links:[],ems:[],init:_adr.onReady,_Queuer:h,_queueFor:a,_select:j,_gebcn:i,data:{getShareCount:a("getShareCount","data")},bar:a("bar"),button:a("button"),counter:a("counter"),count:a("counter"),toolbox:a("toolbox"),update:a("update"),util:{getServiceName:b},addEventListener:f(_ate.ed.addEventListener,_ate.ed),removeEventListener:f(_ate.ed.removeEventListener,_ate.ed)}})()}_adr.append((function(){if(!window.addthis.ost){_ate.extend(A,_ate.api);var X=document,M=undefined,L=window,I=0,e={},aa={compact:1,expanded:1,facebook:1,email:1,twitter:1,print:1,google:1,live:1,stumbleupon:1,myspace:1,favorites:1,digg:1,delicious:1,blogger:1,googlebuzz:1,friendfeed:1,vk:1,mymailru:1,gmail:1,yahoomail:1,reddit:1,orkut:1},E=new _ate.resource.Resource("widget32css",_atr+"static/r07/widgetbig71.css",function(){return true}),R=false,t=L.addthis_config,O=L.addthis_share,F={},z={},r=X.gn("body").item(0),A=window.addthis,b=A._select,x=A._gebcn(r,"A","addthis_button_",true,true),V={rss:"Subscribe via RSS"},U={tweet:"Tweet",email:"Email",mailto:"Email",print:"Print",favorites:"Save to Favorites",twitter:"Tweet This",digg:"Digg This",more:"View more services"},N={email_vars:1,passthrough:1,modules:1,templates:1,services_custom:1},Z={feed:1,more:_atc.ver<300,email:_atc.ver<300,mailto:1},H={feed:1,email:_atc.ver<300,mailto:1,print:1,more:!_ate.bro.ipa&&_atc.ver<300,favorites:1},y={print:1,favorites:1,mailto:1},Q={email:_atc.ver>=300,more:_atc.ver>=300},J=0,k=0,D=0,T=0;function j(d){if(d.indexOf("&")>-1){d=d.replace(/&([aeiou]).+;/g,"$1")}return d}function c(u,w){if(w&&u!==w){for(var d in w){if(u[d]===M){u[d]=w[d]}}}}function m(ac,u,ad){var w=ac.onclick||function(){},d=y[u]?function(){_ate.share.track(u,0,ac.share,ac.conf)}:function(){_ate.share.notify(u,ac.share,ac.conf,ac)};if(ac.conf.data_ga_tracker||addthis_config.data_ga_tracker||ac.conf.data_ga_property||addthis_config.data_ga_property){ac.onclick=function(){_ate.gat(u,ad,ac.conf,ac.share);d();return w()}}else{ac.onclick=function(){d();return w()}}}function s(u,d){var w={googlebuzz:"http://www.google.com/profiles/%s",youtube:"http://www.youtube.com/user/%s",facebook:"http://www.facebook.com/profile.php?id=%s",facebook_url:"http://www.facebook.com/%s",rss:"%s",flickr:"http://www.flickr.com/photos/%s",twitter:"http://twitter.com/%s",linkedin:"http://www.linkedin.com/in/%s"};if(u=="facebook"&&isNaN(parseInt(d))){u="facebook_url"}return(w[u]||"").replace("%s",d)||""}function n(u,d){if(R&&!d){return true}var w=(u.parentNode||{}).className||"";R=(w.indexOf("32x32")>-1||u.className.indexOf("32x32")>-1);return R}function B(u){var w=(u.parentNode||{}).className||"",d=u.conf&&u.conf.product&&w.indexOf("toolbox")==-1?u.conf.product:"tbx"+(u.className.indexOf("32x32")>-1||w.indexOf("32x32")>-1?"32":"")+"-"+_atc.ver;if(d.indexOf(32)>-1){R=true}_ate.track.apc(d);return d}function g(w,ac){var u={};for(var d in w){if(ac[d]){u[d]=ac[d]}else{u[d]=w[d]}}return u}function W(d,ad,ae,ac){var u=X.ce("img");u.width=d;u.height=ad;u.border=0;u.alt=ae;u.src=ac;return u}function h(ac,ad){var w,d=[],ae={};for(var u=0;u<ac.attributes.length;u++){w=ac.attributes[u];d=w.name.split(ad+":");if(d.length==2){ae[d.pop()]=w.value}}return ae}_ate.api.ptpa=h;function C(u,ag,d,ac){var ag=ag||{},w={},ae=h(u,"addthis");for(var ad in ag){w[ad]=ag[ad]}if(ac){for(var ad in u[d]){w[ad]=u[d][ad]}}for(var ad in ae){if(ag[ad]&&!ac){w[ad]=ag[ad]}else{var ah=ae[ad];if(ah){w[ad]=ah}else{if(ag[ad]){w[ad]=ag[ad]}}if(w[ad]==="true"){w[ad]=true}else{if(w[ad]==="false"){w[ad]=false}}}if(w[ad]!==M&&N[ad]&&(typeof w[ad]=="string")){try{w[ad]=JSON.parse(w[ad].replace(/'/g,'"'))}catch(af){w[ad]=_ate.evl("("+w[ad]+");",true)}}}return w}function K(w){var u=(w||{}).services_custom;if(!u){return}if(!(u instanceof Array)){u=[u]}for(var ac=0;ac<u.length;ac++){var d=u[ac];if(d.name&&d.icon&&d.url){d.code=d.url=d.url.replace(/ /g,"");d.code=d.code.split("//").pop().split("?").shift().split("/").shift().toLowerCase();e[d.code]=d}}}function p(u,d){return e[u]||{}}function a(u,d,w,ac){var ad={conf:d||{},share:w||{}};ad.conf=C(u,d,"conf",ac);ad.share=C(u,w,"share",ac);return ad}function P(au,ag,am,ae){_ate.igv();if(au){ag=ag||{};am=am||{};var av=ag.conf||t,ar=ag.share||O,ad=am.onmouseover,w=am.onmouseout,ax=am.onclick,aj=am.internal,ao=am.singleservice;if(ao){if(ax===M){ax=Z[ao]?function(aA,ay,aB){var az=g(aB,z);return addthis_open(aA,ao,az.url,az.title,g(ay,F),az)}:H[ao]?function(aA,ay,aB){var az=g(aB,z);return addthis_sendto(ao,g(ay,F),az)}:Q[ao]?function(aA,ay,aB){var az=g(aB,z);return _ate.share.stw(ao,az,ay,735)}:null}}else{if(!am.noevents){if(!am.nohover){if(ad===M){ad=function(az,ay,aA){return addthis_open(az,"",null,null,g(ay,F),g(aA,z))}}if(w===M){w=function(ay){return addthis_close()}}if(ax===M){ax=function(az,ay,aA){return addthis_sendto("more",g(ay,F),g(aA,z))}}}else{if(ax===M){ax=function(az,ay,aA){return addthis_open(az,"more",null,null,g(ay,F),g(aA,z))}}}}}au=b(au);for(var at=0;at<au.length;at++){var al=au[at],ap=al.parentNode,u=a(al,av,ar,!ae)||{};c(u.conf,t);c(u.share,O);al.conf=u.conf;al.share=u.share;if(al.conf.ui_language){_ate.alg(al.conf.ui_language)}K(al.conf);if(ap&&ap.className.indexOf("toolbox")>-1&&(al.conf.product||"").indexOf("men")===0){al.conf.product="tbx"+(ap.className.indexOf("32x32")>-1?"32":"")+"-"+_atc.ver;_ate.track.apc(al.conf.product)}if(ao&&ao!=="more"){al.conf.product=B(al)}if((!al.conf||(!al.conf.ui_click&&!al.conf.ui_window_panes))&&!_ate.bro.ipa){_ate.maf=_ate.maf||{};_ate.maf.key=null;if(ad){al.onfocus=al.onmouseover=function(){_ate.maf.sib=this.nextSibling;while(_ate.maf.sib&&_ate.maf.sib.nodeType==3&&_ate.maf.sib.nextSibling){_ate.maf.sib=_ate.maf.sib.nextSibling}if(!_ate.maf.sib||_ate.maf.sib.nodeType==3){var ay=this.parentNode;if(!ay){ay=document.body.firstChild||document.body;while(ay.nodeType==3&&ay.nextSibling){ay=ay.nextSibling}}else{while(ay.nextSibling&&ay.nodeType==3){ay=ay.nextSibling}}_ate.maf.sib=ay}_ate.maf.sib.onfocus=function(){_ate.maf.sib.tabIndex=""};return ad(this,this.conf,this.share)}}if(w){al.onmouseout=function(){return w(this)};al.onkeypress=al.onkeydown=function(ay){if(!ay){var ay=window.event}if(ay.keyCode){_ate.maf.key=ay.keyCode}else{if(ay.which){_ate.maf.key=ay.which}}};al.onblur=function(ay){if(_ate.maf.key==9){_ate.maf.key=null}else{_ate.maf.key=null;return w(this)}}}if(ax){al.onclick=function(){return ax(al,al.conf,al.share)}}}else{if(ax){if(ao){al.onclick=function(){return ax(this,this.conf,this.share)}}else{if(!al.conf.ui_window_panes){al.onclick=function(){if(_ate.bro.iph||_ate.bro.dro){return addthis_sendto("more",this.conf,this.share)}else{return addthis_open(this,"",null,null,this.conf,this.share)}}}else{al.onclick=function(){return addthis_sendto("more",this.conf,this.share)}}}}}if(al.tagName.toLowerCase()=="a"){var ac=al.share.url||addthis_share.url;_ate.usu(ac);if(ao){var ai=p(ao,al.conf),d=al.firstChild;if(ai&&ai.code&&ai.icon){if(d&&d.className.indexOf("at300bs")>-1){var ak="16";if(n(al,1)){d.className=d.className.split("at15nc").join("");ak="32"}d.style.background="url("+ai.icon+") no-repeat top left transparent";if(!d.style.cssText){d.style.cssText=""}d.style.cssText="line-height:"+ak+"px!important;width:"+ak+"px!important;height:"+ak+"px!important;background:"+d.style.background+"!important"}}if(!H[ao]){if(am.follow){al.href=ac;al.onclick=function(){_ate.share.track(ao,1,al.share,al.conf)};if(al.children&&al.children.length==1&&al.parentNode&&al.parentNode.className.indexOf("toolbox")>-1){var aq=X.ce("span");aq.className="addthis_follow_label";aq.innerHTML=A.util.getServiceName(ao);al.appendChild(aq)}}else{if(ao=="twitter"){al.onclick=function(ay){return _ate.share.pts(al.share,al.conf)};al.noh=1}else{if(ao=="facebook"){al.onclick=function(ay){return _ate.share.fb.share(al.share,al.conf)};al.noh=1}else{if(ao=="google_plusone"){al.onclick=function(ay){return false}}else{if(!al.noh){if(al.conf.ui_open_windows||_ate.share.auw(ao)){al.onclick=function(ay){return _ate.share.stw(ao,al.share,al.conf)}}else{al.onclick=function(ay){return _ate.share.siw(ao,al.share,al.conf)};al.href=_ate.share.genurl(ao,0,al.share,al.conf)}}}}}}m(al,ao,ac);if(!al.noh&&!al.target){al.target="_blank"}A.links.push(al)}else{if(ao=="mailto"||(ao=="email"&&(al.conf.ui_use_mailto||_ate.bro.iph||_ate.bro.ipa||_ate.bro.dro))){al.onclick=function(){al.share.xid=_ate.util.cuid();(new Image()).src=_ate.share.genurl("mailto",0,al.share,al.config);_ate.gat(ao,ac,al.conf,al.share)};al.href=_ate.share.genieu(al.share,al.config||al.conf);A.ems.push(al)}}if(!al.title||al.at_titled){var ah=A.util.getServiceName(ao,!ai);al.title=j(am.follow?(V[ao]?V[ao]:"Follow on "+ah):(U[ao]?U[ao]:"Send to "+ah));al.at_titled=1}if(!al.href){al.href="#"}}else{if(al.conf.product&&al.parentNode.className.indexOf("toolbox")==-1){B(al)}}}var af;switch(aj){case"img":if(!al.hasChildNodes()){var aw=(al.conf.ui_language||_ate.lng()).split("-").shift(),an=_ate.ivl(aw);if(!an){aw="en"}else{if(an!==1){aw=an}}af=W(_ate.iwb(aw)?150:125,16,"Share",_atr+"static/btn/v2/lg-share-"+aw.substr(0,2)+".gif")}break}if(af){al.appendChild(af)}}}}function f(){if(window.gapi&&window.gapi.plusone){gapi.plusone.go();return}else{if(!D){var d=_ate.ajs("//apis.google.com/js/plusone.js",1,1);D=1}}if(J<3){setTimeout(f,3000+1000*2*(J++))}}function q(d){var w=d?d.share:addthis_share,u=d?d.conf:addthis_config;window._at_plusonecallback=window._at_plusonecallback||function(ae){var ac={};for(var ad in w){ac[ad]=w[ad]}ac.url=ae.href;_ate.share.track("google_"+(ae.state=="off"?"un":"")+"plusone",0,ac,u)}}function S(){if(window.twttr&&!I&&twttr.events){I=1;twttr.events.bind("click",function(ae){if(ae.region=="tweetcount"){return}var ad=(ae.target.parentNode&&ae.target.parentNode.share)?ae.target.parentNode.share:{},w=ad.url||ae.target.baseURI,af=ad.title||addthis_share.title,d={};for(var u in addthis_share){d[u]=addthis_share[u]}for(var u in ad){d[u]=ad[u]}d.url=w;if(af){d.title=af}var ac=(ae.region!="follow")?true:false;_ate.share.track(((ac)?"tweet":"twitter_follow_native"),((ac)?0:1),d,addthis_config)})}}function v(d){if(window.twttr&&window.twttr.events&&T==1){S();return}else{if(!T){_ate.ajs("//platform.twitter.com/widgets.js",1);T=1}}if(k<3){setTimeout(v,3000+1000*2*(k++))}}function ab(a7,aZ,bo,a3,bi){for(var aH=0;aH<a7.length;aH++){var aM=a7[aH];if(aM==null){continue}if(a3!==false||!aM.ost){var aK=a(aM,aZ,bo,!bi),aY=0,aO="at300",aL=aM.className||"",ae="",az=aL.match(/addthis_button_([\w\.]+)(?:\s|$)/),aT={},a6=az&&az.length?az[1]:0;c(aK.conf,t);c(aK.share,O);if(a6){if(a6.indexOf("amazonwishlist_native")>-1){}else{if(a6==="tweetmeme"&&aM.className.indexOf("chiclet_style")==-1){if(aM.ost){continue}var bc=h(aM,"tm"),ac=50,af=61;ae=_ate.util.toKV(bc);if(bc.style==="compact"){ac=95;af=25}aM.innerHTML='<iframe frameborder="0" width="'+ac+'" height="'+af+'" scrolling="no" allowTransparency="true" scrollbars="no"'+(_ate.bro.ie6?" src=\"javascript:''\"":"")+"></iframe>";var aU=aM.firstChild;aU.src="//api.tweetmeme.com/button.js?url="+_euc(aK.share.url)+"&"+ae;aM.noh=aM.ost=1}else{if(a6==="pinterest"){if(aM.ost){continue}var bp=h(aM,"pi:pinit"),aj=_ate.util.clone(aK.share);bp.url=aj.url=bp.url||_ate.track.mgu(aj.url,{defrag:1});bp.url=aj.url=_ate.share.acb("pinterest",aj,addthis_config);if(_ate.bro.ie6||_ate.bro.ie7||(_ate.bro.msi&&document.compatMode=="BackCompat")){bp.layout=""}if(bp.layout=="horizontal"){bp.layout="&layout=horizontal";bp.width="110px";bp.height="26px"}else{if(bp.layout=="vertical"){bp.layout="&layout=vertical";bp.width="49px";bp.height="59px"}else{bp.layout="";bp.width="49px";bp.height="26px"}}aM.innerHTML='<iframe frameborder="0" role="presentation" scrolling="no" allowTransparency="true" scrollbars="no"'+(_ate.bro.ie6?" src=\"javascript:''\"":"")+' style="width:'+bp.width+"; height:"+bp.height+';"></iframe>';pinitButton=aM.firstChild;if(!aK.conf.pubid){aK.conf.pubid=addthis_config.pubid||_ate.pub()}pinitButton.src=_atr+"static/r07/pinit.html?url="+_euc(bp.url)+"&media="+_euc(bp.media||"")+bp.layout+"&ats="+_euc(_ate.util.toKV(aj))+"&atc="+_euc(_ate.util.toKV(addthis_config))}else{if(a6==="linkedin_counter"){if(aM.ost){continue}var a1=h(aM,"li"),bo=aK.share,bl=a1.width||100,u=a1.height||18,ae,an="",aS;if(!a1.counter){a1.counter="horizontal"}if(!bo.passthrough){bo.passthrough={}}bo.passthrough.linkedin=_ate.util.toKV(a1);an=_ate.util.rtoKV(bo);if(a1.counter==="top"){u=55;bl=57;if(!a1.height){a1.height=u}if(!a1.width){a1.width=bl}}else{if(a1.counter==="right"){bl=100;if(!a1.width){a1.width=aA}}}if(a1.width){bl=a1.width}if(a1.height){u=a1.height}ae=_ate.util.toKV(a1),aM.innerHTML='<iframe frameborder="0" role="presentation" scrolling="no" allowTransparency="true" scrollbars="no"'+(_ate.bro.ie6?" src=\"javascript:''\"":"")+' style="width:'+bl+"px; height:"+u+'px;"></iframe>';aS=aM.firstChild;if(!aK.conf.pubid){aK.conf.pubid=addthis_config.pubid||_ate.pub()}aS.src=_atr+"static/r07/linkedin10.html"+((_ate.bro.ie6||_ate.bro.ie7)?"?":"#")+"href="+_euc(aK.share.url)+"&dr="+_euc(_ate.dr)+"&conf="+_euc(_ate.util.toKV(aK.conf))+"&share="+_euc(an)+"&li="+_euc(ae);aM.noh=aM.ost=1}else{if(a6==="twitter_follow_native"){var ba=h(aM,"tf"),aD=h(aM,"tw"),aG=X.ce("a");ba.screen_name=aD.screen_name||ba.screen_name||"addthis";aG.href="http://twitter.com/"+ba.screen_name;aG.className="twitter-follow-button";aG.innerHTML="Follow @"+ba.screen_name;for(var a9 in ba){if(ba.hasOwnProperty(a9)){aG.setAttribute("data-"+a9,ba[a9])}}for(var a9 in aD){if(aD.hasOwnProperty(a9)){aG.setAttribute("data-"+a9,aD[a9])}}aM.appendChild(aG);if(!aK.conf.pubid){aK.conf.pubid=addthis_config.pubid||_ate.pub()}v(aM)}else{if(a6==="tweet"){if(aM.ost){continue}var aD=h(aM,"tw"),bo=aK.share,aA=aD.width||55,aP=aD.height||20,ae,an="",a0;aK.share.url_transforms=aK.share.url_transforms||{};aK.share.url_transforms.defrag=1;var bd=_ate.util.clone(aK.share),bh=((_ate.bro.msi&&X.compatMode=="BackCompat")||aK.conf.ui_use_tweet_iframe||(aK.share.url_transforms.shorten||{}).twitter=="bitly")?true:false;if(typeof aD.url!="undefined"){bd.url=aD.url=aD.url}else{bd.url=aD.url=_ate.track.mgu((bd.url||(addthis_share||{}).url),bd.url_transforms,bd,"twitter")}if(!aD.counturl){aD.counturl=(bh)?aD.url.replace(/=/g,"%253D"):aD.url}aD.url=_ate.share.acb("twitter",bd,addthis_config);aD.count=aD.count||"horizontal";bo.passthrough=bo.passthrough||{};var aW=bo.passthrough.twitter||{};aK.via=aD.via=aD.via||aW.via||"AddThis";aK.text=aD.text=aD.text||((aK.share.title==X.title)?aW.text:aK.share.title)||"";aK.related=aD.related=aD.related||aW.related||"";an=_ate.util.rtoKV(bo,"#@!");if(aD.count==="vertical"){aP=62;aD.height=aD.height||aP}else{if(aD.count==="horizontal"){aA=110;aD.width=aD.width||aA}}if(aD.width){aA=aD.width}if(aD.height){aP=aD.height}ae=_ate.util.toKV(aD,"#@!");if(bh){aM.innerHTML='<iframe frameborder="0" role="presentation" scrolling="no" allowTransparency="true" scrollbars="no"'+(_ate.bro.ie6?" src=\"javascript:''\"":"")+' style="width:'+aA+"px; height:"+aP+'px;"></iframe>';a0=aM.firstChild;if(!aK.conf.pubid){aK.conf.pubid=addthis_config.pubid||_ate.pub()}a0.src=_atr+"static/r07/tweet10.html"+((_ate.bro.ie6||_ate.bro.ie7)?"?":"#")+"href="+_euc(aD.url)+"&dr="+_euc(_ate.dr)+"&conf="+_euc(_ate.util.toKV(aK.conf))+"&share="+_euc(an)+"&tw="+_euc(ae)}else{var aC=(bo.templates||{}).twitter||"";if(!aD.text){aD.text=bo.title==""?"":bo.title+":"}var ak=X.ce("a");ak.href="http://twitter.com/share";ak.className="twitter-share-button";ak.innerHTML="Tweet";for(var a9 in aD){if(aD.hasOwnProperty(a9)){ak.setAttribute("data-"+a9,aD[a9])}}aM.appendChild(ak);if(!aK.conf.pubid){aK.conf.pubid=addthis_config.pubid||_ate.pub()}v(aM)}aM.noh=aM.ost=1}else{if(a6==="google_plusone"){if(aM.ost){continue}var a2=h(aM,"g:plusone"),aR=X.ce("g:plusone"),bk="";_ate.gpl=_ate.gpl||{},_ate.gpl.lang=_ate.gpl.lang||null;a2.lang=_ate.gpl.lang=_ate.gpl.lang||((typeof a2.lang=="undefined")?null:a2.lang);window.___gcfg=window.___gcfg||{};window.___gcfg.lang=_ate.gpl.lang||a2.lang||_ate.ggl((aK.conf||{}).ui_language||window.addthis_language)||"en-US";a2.href=a2.href||_ate.track.mgu(aK.share.url,{defrag:1});a2.size=a2.size||(n(aM,true)?"standard":"small");a2.callback=a2.callback||"_at_plusonecallback";q(aK);for(var aF in a2){if(a2.hasOwnProperty(aF)){aR.setAttribute(aF,a2[aF])}}aM.appendChild(aR);aM.noh=aM.ost=1;f()}else{if(a6==="facebook_send"){if(aM.ost||_ate.bro.ie6){continue}var bg,a5=h(aM,"fb:send"),aB="",aq=a5.width||55,aw=a5.height||20;ae=_ate.util.toKV(a5);_ate.ufbl=1;if(_ate.share.fb.ready()){a5.href=a5.href||_ate.track.mgu(aK.share.url,{defrag:1});for(var aF in a5){aB+=" "+aF+'="'+a5[aF]+'"'}aM.innerHTML='<fb:send ref="'+_ate.share.gcp(aK.share,aK.conf,".send").replace(",","_")+'" '+aB+"></fb:send>";_ate.share.fb.load(aM)}else{aM.className="";aM.innerHTML="<span></span>";aM.style.width=aM.style.height="0px"}aM.noh=aM.ost=1}else{if(a6==="facebook_share"){aK.conf=aK.conf||{};aK.conf.data_track_clickback=aK.conf.data_track_linkback=false;function at(br,bq){if(!br){return}br.setAttribute("style",bq);br.style.cssText=bq;return}var aE="AT"+_ate.util.cuid(),a5=h(aM,"fb:share"),av=X.ce("span"),bj=X.ce("div"),w=X.ce("div"),aV=X.ce("div"),aJ=X.ce("div"),bm=X.ce("div"),ap=aK.share.url=a5.href||_ate.track.mgu(aK.share.url,{defrag:1}),d=typeof(d)!="undefined"?d:{};d[aE]=ap.replace(/\#.*/,"");at(av,"text-decoration:none;color:#000000;display:inline-block;cursor:pointer;");at(aV,"text-decoration:none;margin-top:10px;");at(w,"display:block;z-index:-1;background:none repeat scroll 0 0 #ECEEF5; border:1px solid #CAD4E7; filter:none; border-radius: 4px; color:#000000; font-family:Verdana,Helvetica,sans-serif; font-size:18px; line-height:16px; height:39px; text-align:center; width:58px;");at(aJ,"display:block;margin:-1px 0 0px 10px;height:4px;width:10px;font-size:1px;line-height:4px;background:url('"+_atr+"static/t00/fb_arrow.png') no-repeat ;");at(bm,"background-image:url('"+_atr+"static/t00/fb_btn.png');background-repeat:no-repeat; display:inline-block;font-family:Verdana,Helvetica,sans-serif; font-size:1px; height:22px; line-height:16px; white-space:nowrap; width:60px;");aV.innerHTML="0";aV.id=aE;aJ.innerHTML="&nbsp;";aK.share.passthrough=aK.share.passthrough||{};aK.share.passthrough.facebook_share=_ate.util.toKV({src:"sp"});bm.onmouseover=function(){this.style.opacity="0.75"};bm.onmouseout=function(){this.style.opacity="1.0"};bm.onclick=function(){var bq=this.parentNode.firstChild.firstChild;if(bq&&isNaN(bq.innerHTML)!=true){var br=parseInt(bq.innerHTML)+1;bq.removeChild(bq.firstChild);bq.appendChild(document.createTextNode(br))}};w.appendChild(aV);bj.appendChild(w);bj.appendChild(aJ);bj.appendChild(bm);av.appendChild(bj);aM.appendChild(av);aM.style.textDecoration="none";var aI=_ate.util.scb("fbsc",ap,function(bs){if(bs.length>0){for(var bq in d){if(d[bq]==bs[0].url){var bt=bs[0].share_count,br=document.getElementById(bq);if(bt>10000){bt=parseInt(bt/1000)+"K"}if(br.firstChild){br.removeChild(br.firstChild)}br.appendChild(document.createTextNode(bt))}}}},function(){});_ate.ajs("//api.facebook.com/restserver.php?method=links.getStats&format=json&callback="+aI+"&urls="+ap,1)}else{if(a6==="facebook_like"){_ate.share.fb.like(aM,aK)}else{if(a6.indexOf("stumbleupon_badge")>-1){if(_ate.bro.ie6){continue}var am=h(aM,"su:badge"),ad=am.style||"1",a4=aK.share.url=am.href||_ate.track.mgu(aK.share.url,{defrag:1}),bb=am.height||"20px",ay=am.width||"75px";if(ad=="5"){bb=am.height||"60px"}else{if(ad=="6"){bb=am.height||"31px"}}aM.innerHTML='<iframe src="http'+(_ate.ssl?"s":"")+'://www.stumbleupon.com/badge/embed/{{STYLE}}/?url={{URL}}" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:{{WIDTH}}; height:{{HEIGHT}};" allowtransparency="true"></iframe>'.replace("{{STYLE}}",ad).replace("{{URL}}",_euc(a4)).replace("{{HEIGHT}}",bb).replace("{{WIDTH}}",ay);aM.noh=aM.ost=1}else{if(a6.indexOf("hyves_respect")>-1){var bf=h(aM,"hy:respect"),ah=aK.share.url=bf.url||_ate.track.mgu(aK.share.url,{defrag:1}),aX=bf.width||"140px",aN='<iframe src="http'+(_ate.ssl?"s":"")+'://www.hyves.nl/respect/button?url={{URL}}" style="border: medium none; overflow:hidden; width:{{WIDTH}}; height:22px;" scrolling="no" frameborder="0" allowTransparency="true" ></iframe>'.replace("{{URL}}",_ate.share.acb("hyves",aK.share,addthis_config)).replace("{{WIDTH}}",aX);aM.innerHTML=aN;aM.noh=aM.ost=1}else{if(a6.indexOf("preferred")>-1){if(aM._iss){continue}az=aL.match(/addthis_button_preferred_([0-9]+)(?:\s|$)/);var ao=((az&&az.length)?Math.min(16,Math.max(1,parseInt(az[1]))):1)-1;if(!aM.conf){aM.conf={}}aM.conf.product="tbx-"+_atc.ver;B(aM);if(window._atw){if(!aM.parentNode.services){aM.parentNode.services={}}var al=_atw.conf.services_exclude||"",au=_atw.loc,be=aM.parentNode.services,bn=_ate.util.unqconcat(addthis_options.replace(",more","").split(","),au.split(","));do{a6=bn[ao++]}while(ao<bn.length&&(al.indexOf(a6)>-1||be[a6]));if(be[a6]){for(var aF in _atw.list){if(!be[aF]&&al.indexOf(aF)==-1){a6=aF;break}}}aM._ips=1;if(aM.className.indexOf(a6)==-1){aM.className+=" addthis_button_"+a6;aM._iss=1}aM.parentNode.services[a6]=1}else{_ate.alg(aK.conf.ui_language||window.addthis_language);_ate.plo.unshift(["deco",ab,[aM],aZ,bo,true]);if(_ate.gssh){_ate.pld=_ate.ajs("static/r07/menu89.js")}else{if(!_ate.pld){_ate.pld=1;var ag=function(){_ate.pld=_ate.ajs("static/r07/menu89.js")};if(_ate.upm){_ate._rec.push(function(bq){if(bq.ssh){ag()}});setTimeout(ag,500)}else{ag()}}}continue}}else{if(a6.indexOf("follow")>-1){a6=a6.split("_follow").shift();aT.follow=true;aK.share.url=s(a6,aK.share.userid)}}}}}}}}}}}}}}if(_ate.bro.msi&&!document.getElementById("at300bhoveriefilter")){var ar=document.getElementsByTagName("head")[0],aQ=document.createElement("style"),ai=document.createTextNode(".at300b:hover,.at300bs:hover {filter:alpha(opacity=80);}");aQ.id="at300bhoveriefilter";aQ.type="text/css";if(aQ.styleSheet){aQ.styleSheet.cssText=ai.nodeValue}else{aQ.appendChild(ai)}ar.appendChild(aQ)}if(!aa[a6]&&(R||n(aM))){E.load()}if(!aM.childNodes.length){var a8=X.ce("span");aM.appendChild(a8);a8.className=aO+"bs at15nc at15t_"+a6}else{if(aM.childNodes.length==1){var ax=aM.childNodes[0];if(ax.nodeType==3){var a8=X.ce("span");aM.insertBefore(a8,ax);a8.className=aO+"bs at15nc at15t_"+a6}}else{if(aM.firstChild&&aM.firstChild.nodeType==3&&aM.firstChild.textContent=="\n"){}else{aY=1}}}if(a6==="compact"||a6==="expanded"){if(!aY&&aL.indexOf(aO)==-1){aM.className+=" "+aO+"m"}if(aK.conf.product&&aK.conf.product.indexOf("men-")==-1){aK.conf.product+=",men-"+_atc.ver}if(!aM.href){aM.href="#"}if(aM.parentNode&&aM.parentNode.services){aK.conf.parentServices=aM.parentNode.services}if(a6==="expanded"){aT.nohover=true;aT.singleservice="more"}}else{if((aM.parentNode.className||"").indexOf("toolbox")>-1){if(!aM.parentNode.services){aM.parentNode.services={}}aM.parentNode.services[a6]=1}if(!aY&&aL.indexOf(aO)==-1){aM.className+=" "+aO+"b"}aT.singleservice=a6}if(aM._ips){aT.issh=true}P([aM],aK,aT,bi);aM.ost=1;B(aM)}}}}function i(ai,d,af,ah){if(ai=="facebook_unlike"||ai=="google_unplusone"){return}var w=af.data_ga_tracker,ad=af.data_ga_property;if(ad){if(typeof(window._gat)=="object"&&_gat._getTracker){w=_gat._getTracker(ad)}else{if(typeof(window._gaq)=="object"&&_gaq._getAsyncTracker){w=_gaq._getAsyncTracker(ad)}else{if(typeof(window._gaq)=="array"){_gaq.push([function(){_ate.gat(ai,d,af,ah)}])}}}}if(w&&typeof(w)=="string"){w=window[w]}if(w&&typeof(w)=="object"){var ag=d||(ah||{}).url||location.href,u=ai,ac="share";if(u.indexOf("_")>-1){u=u.split("_");ac=u.pop();if(ac.length<=2){ac="share"}u=u.shift()}if(ag.toLowerCase().replace("https","http").indexOf("http%3a%2f%2f")==0){ag=_duc(ag)}try{if(af.data_ga_social&&w._trackSocial&&ai!="google_plusone"){w._trackSocial(u,ac,ah.url)}else{w._trackEvent("addthis",ai,ag)}}catch(ae){try{w._initData();if(af.data_ga_social&&w._trackSocial&&ai!="google_plusone"){w._trackSocial(u,ac,ah.url)}else{w._trackEvent("addthis",ai,ag)}}catch(ae){}}}}_ate.gat=i;A.update=function(af,ad,w){if(af=="share"){if(ad=="url"){_ate.usu(0,1)}if(!window.addthis_share){window.addthis_share={}}window.addthis_share[ad]=w;z[ad]=w;for(var d in A.links){var ae=A.links[d],ac=new RegExp("&"+ad+"=(.*)&"),u="&"+ad+"="+_euc(w)+"&";if(ae.share){ae.share[ad]=w}if(!ae.noh){ae.href=ae.href.replace(ac,u);if(ae.href.indexOf(ad)==-1){ae.href+=u}}}for(var d in A.ems){var ae=A.ems[d];ae.href=_ate.share.genieu(addthis_share)}}else{if(af=="config"){if(!window.addthis_config){window.addthis_config={}}window.addthis_config[ad]=w;F[ad]=w}}};A._render=P;var l=[new _ate.resource.Resource("countercss",_atr+"static/r07/counter71.css",function(){return true}),new _ate.resource.Resource("counter",_atr+"js/250/plugin.sharecounter.js",function(){return window.addthis.counter.ost})];if(!L.JSON||!L.JSON.stringify){l.unshift(new _ate.resource.Resource("json2",_atr+"static/r07/json2.js",function(){return L.JSON&&L.JSON.stringify}))}A.counter=function(ac,u,w){if(ac){ac=A._select(ac);if(ac.length){if(!A.counter.selects){A.counter.selects=[]}A.counter.selects=A.counter.selects.concat({counter:ac,config:u,share:w});for(var d in l){if((l[d]||{}).load){l[d].load()}}}}};A.count=function(ac,u,w){if(ac){ac=A._select(ac);if(ac.length){if(!A.count.selects){A.count.selects=[]}A.count.selects=A.count.selects.concat({counter:ac,config:u,share:w});for(var d in l){if((l[d]||{}).load){l[d].load()}}}}};A.data.getShareCount=function(w,u){if(!A.counter.reqs){A.counter.reqs=[]}A.counter.reqs.push({share:u,callback:w});for(var d in l){if((l[d]||{}).load){l[d].load()}}};if(document.compatMode=="BackCompat"&&_ate.bro.msi&&false){var o=[new _ate.resource.Resource("barcss",_atr+"bannerQuirks.css",function(){return true}),new _ate.resource.Resource("barjs",_atr+"static/r07/banner01.js",function(){return true})]}else{var o=[new _ate.resource.Resource("barcss",_atr+"static/r07/banner01.css",function(){return true}),new _ate.resource.Resource("barjs",_atr+"static/r07/banner01.js",function(){return true})]}A.bar=function(ag,w,ae,d){if(ag){ag=A._select(ag);if(ag.length){if(!A.bar.selects){A.bar.selects=[]}A.bar.selects=A.bar.selects.concat(ag);for(var ac=0;ac<ag.length;ac++){var ad=ag[ac],af="bar"+(ad.className.indexOf("vertical")>-1?"vt":"hz")+"-"+_atc.ver;_ate.track.apc(af)}for(var u in o){if((o[u]||{}).load){o[u].load()}}}}};var G=new _ate.resource.Resource("overlayjs",_atr+"static/r07/overlay01.js",function(){return true});A.overlay=function(ac,u,w,d){if(ac){ac=A._select(ac);if(ac.length){if(!A.overlay.selects){A.overlay.selects=[]}A.overlay.selects=A.overlay.selects.concat(ac);_ate.track.apc("ovr-"+_atc.ver);if((G||{}).load){G.load()}}}};A.button=function(w,d,u){d=d||{};if(!d.product){d.product="men-"+_atc.ver}P(w,{conf:d,share:u},{internal:"img"})};A.toolbox=function(af,u,ag,ah){var ai=b(af);for(var ac=0;ac<ai.length;ac++){var w=ai[ac],ad=a(w,u,ag,ah),d=X.ce("div"),ae;w.services={};if(!ad.conf.product){ad.conf.product="tbx"+(w.className.indexOf("32x32")>-1?"32":"")+"-"+_atc.ver}if(w){ae=w.getElementsByTagName("a");if(ae){ab(ae,ad.conf,ad.share,!ah,!ah)}w.appendChild(d)}d.className="atclear"}};function Y(d){if(!d||d.length<5||d.length>30){throw new Error("Service code must be between 5 and 30 characters.")}else{if(d.search(/^[a-zA-Z0-9_]+$/)==-1){throw new Error("Service code must consist entirely of letters, numbers and underscores.")}}return true}A.logShare=function(w,d,ae,u){var af=u||addthis_config,ad=ae||addthis_share;af.product="hdl-"+_atc.ver;ad.imp_url=0;var w=w||(ae&&ae.url)||addthis_share.url,ac=_ate.track.dcu(w);if(ac.rsc&&!d){d=ac.rsc}if(Y(d)){ad.url=w;_ate.share.track(d,0,ad,af)}};A.addClickTag=function(w,d,ac,u){var w=w||ac&&ac.url||addthis_share.url;if(Y(d)){w=_ate.track.cur(_ate.track.cof(w),d)}return w};A.ready=function(){var d=A,u=".addthis_";if(d.ost){return}d.ost=1;A.toolbox(u+"toolbox",null,null,true);A.button(u+"button");A.counter(u+"counter");A.count(u+"count");A.bar(u+"bar");A.overlay(u+"shareable");ab(x,null,null,false);_ate.ed.fire("addthis.ready",A);if(_ate.onr){_ate.onr(A)}for(var w=0,ad=d.plo,ac;w<ad.length;w++){ac=ad[w];(ac.ns?d[ac.ns]:d)[ac.call].apply(this,ac.args)}_ate.share.fb.sub();S();q()};A.util.getAttributes=a;window.addthis=A;window.addthis.ready()}}));if(!window.addthis){window.addthis={}}addthis.user=(function(){var G=_ate,w=addthis,m=1000,q={},k=0,e=0,j=0,i={},o;addthis.HIGH=3;addthis.MED=2;addthis.LOW=1;addthis.ASC=1;addthis.DSC=addthis.DESC=0;function C(a,u){return G.reduce(["getID","getGeolocation","getServiceShareHistory"],a,u)}function r(a,u){return function(I){setTimeout(function(){I(G[a]||u)},0)}}function y(a){if(k){return}if(!a||!a.uid){return}if(o!==null){clearTimeout(o)}o=null;k=1;C(function(J,u,I){q[u]=q[u].queuer.flush(r.apply(w,J[I]),w);return J},[["uid",""],["geo",""],["_ssh",[]]])}function g(){if(!_ate.pld){_ate.pld=(new _ate.resource.Resource("menujs",_atr+"static/r07/menu89.js",function(){return true})).load()}}function d(a){if(e&&(a.uid||a.ssh!==undefined)){g();e=0}}function D(){var a={uid:"x",geo:{},ssh:"",ups:""};j=1;y(a);d(a)}o=setTimeout(D,m);G._rec.push(y);function f(I){var u={};for(var a=0;a<I.length;a++){u[I[a]]=I[a]}return u}function F(I,J){if(typeof(J)=="array"){J=f(J)}I=I.split(",");for(var u=0;u<I.length;u++){var a=I[u].replace(/ /g,"");if(J[a]){return 1}}return 0}function v(K,L,J){if(typeof(L)=="array"){return 0}K=K.split(",");for(var I=0;I<K.length;I++){var a=K[I].replace(/ /g,"");for(var u=0;u<J.length;J++){if(L[J[u]]==a){return 1}}}return 0}function h(a){return G.util.geo.isin(a,G.geo)}function n(a){return F(a,i.interests)}function p(a){if(!_ate.uud){_ate.ed.fire("addthis-internal.api",window.addthis||{},{call:"rdy"})}_ate.uud=1;if(window._atw){_atw.gps(function(){if(c()){a(i);return}i.interests=[];for(var I in _ate.bti){i.interests.push(_ate.bti[I])}var L=[],u={};if(G._uss){for(var K=0;K<G._uss.length;K++){if(!u[G._uss[K]]){L.push({name:G._uss[K],score:addthis.HIGH})}}}if(G._ups){for(var K=0;K<G._ups.length;K++){if(!u[G._ups[K]]){L.push({name:G._ups[K],score:addthis.HIGH})}}}if(G._ssc){for(var J in G._ssc){if(!u[J]){L.push({name:J,score:G._ssc[J]})}}}i.services=L;i.activity={};i.activity.social=_ate.bts;i.activity.view=_ate.vts;i.source=x();if(_ate.geo&&typeof(_ate.geo)=="object"&&_ate.geo[0]&&_ate.geo[1]){var M="";for(var K in _ate.geo){if(typeof(_ate.geo[K])=="string"){M+=_ate.geo[K]}}_ate.geo=_ate.util.geo.parse(M)}for(var I in _ate.geo){if(!isNaN(parseInt(_ate.geo[I]))){_ate.geo[I]=parseInt(_ate.geo[I])}}s.location=i.location=_ate.geo||{};i.location.contains=h;if(a){a(i)}_ate.ed.fire("addthis.user.data",window.addthis||{},{})})}else{_ate.ed.addEventListener("addthis.menu.ready",function(){p(a)});_ate.alg();if(G.gssh||j){g()}else{if(!G.pld&&!e){_ate._rec.push(d)}}e=1}}function l(a){p(a)}q.getData=l;q.getPreferredServices=function(a){if(window._atw){_atw.gps(a)}else{_ate.ed.addEventListener("addthis.menu.ready",function(){_atw.gps(a)});_ate.alg();if(G.gssh||j){g()}else{if(!G.pld&&!e){_ate._rec.push(d)}}e=1}};function c(){_ate.ed.fire("addthis-internal.api",window.addthis||{},{call:"ioo"});return G.uid=="0000000000000000"}function B(a){_ate.ed.fire("addthis-internal.api",window.addthis||{},{call:"iuf"});return(G._ssh&&G._ssh.indexOf(a)>-1)||(G._ssc&&G._ssc[a])}function A(a){if(!a){a=[]}a._sortasc=function(u){a.sort(function(J,I){return a._isort(J,I,addthis.ASC,u)})};a._sortdsc=function(u){a.sort(function(J,I){return a._isort(J,I,addthis.DSC,u)})};a._isort=function(J,u,L,M){var K=J[M],I=u[M];if(typeof(K)=="string"&&!isNaN(parseInt(K))){K=parseInt(K,10);I=parseInt(I,10);if(L){return K-K}return K-I}if(K>I){return L?1:-1}else{if(K==I){return 0}}return L?-1:1};a.map=function(I){if(!I){I="name"}var J={};for(var u=0;u<a.length;u++){J[a[u][I]]=a[u]}return J};a.keys=function(J,I,K){if(!I){I="name"}if(!K){K="score"}var L=[];if(J==addthis.ASC){a._sortasc(K)}else{a._sortdsc(K)}for(var u=0;u<a.length;u++){L.push(typeof(a[u])=="object"?a[u].name:a[u])}return L};a.top=function(I,J){if(!J){J="score"}a._sortdsc(J);var K=[];for(var u=0;u<Math.min(I||1,a.length);u++){K.push(a[u].name)}return K};a.filter=function(K){var J=[];for(var I=0;I<a.length;I++){for(var u in K){if(typeof(K[u])!="function"){if(a[I][u]==K[u]){J.push(a[I])}}}}return A(J)};return a}function t(){_ate.ed.fire("addthis-internal.api",window.addthis||{},{call:"gti"});return A(i.interests)}function b(){_ate.ed.fire("addthis-internal.api",window.addthis||{},{call:"gts"});return A(i.services)}function x(){_ate.ed.fire("addthis-internal.api",window.addthis||{},{call:"gtt"});return G.track.ts.get()}function H(){_ate.ed.fire("addthis-internal.api",window.addthis||{},{call:"gtl"});return i.location}function z(J){_ate.ed.fire("addthis-internal.api",window.addthis||{},{call:"isl"});var I=x();if(I.type=="social"){if(typeof(J)=="string"){J=J.split(",");var a={};for(var u=0;u<J.length;u++){a[J[u]]=1}if(!a[I.service]){return false}}return true}return false}function E(u){_ate.ed.fire("addthis-internal.api",window.addthis||{},{call:"ish"});var J=x();if(J.type=="search"){if(typeof(u)=="string"){u=u.split(",");var I={};for(var a=0;a<u.length;a++){I[u[a]]=1}if(J.terms&&J.terms.length){for(var a=0;a<J.terms.length;a++){if(!I[J.terms[a]]){return false}}}}return true}return false}var s={ready:p,isReturning:function(a){},isOptedOut:c,isUserOf:B,hasInterest:n,isLocatedIn:h,interests:t,services:b,location:H};addthis.session={source:x,isSocial:z,isSearch:E};_ate.extend(q,s);return C(function(u,a){u[a]=(new w._Queuer(a)).call;return u},q)})();;
(function($){var slider=$('#events-list').bxSlider({auto:true,pause:10000,displaySlideQty:1,moveSlideQty:1,controls:false,infiniteLoop:true});var albumhot_slider=$('#albumhot').bxSlider({auto:true,pause:7000,displaySlideQty:1,moveSlideQty:1,controls:false,infiniteLoop:true,pager:true});var singer_vote_slider=$('.wrap-singer-vote').bxSlider({auto:true,pause:5000,minSlides:3,maxSlides:3,controls:false,slideWidth:97,infiniteLoop:false,pager:true});$('#events_next').click(function(){slider.goToNextSlide();return false;});$(".my-playlist").organicTabs({"speed":200});$('#scrollbar1').tinyscrollbar();})(jQuery);function getListRankSongDetail(){var link=$('#detail-list-song-rank').attr('link');$.ajax({type:"POST",url:link,cache:false,success:function(data){$('.box-ranktablehome #rank-video-tab').hide();$(".box-ranktablehome .list-wrap").html(data);$(".box-ranktablehome #rank-song-tab").fadeIn("slow");},error:function(request,status,err){if(status=="timeout"){alert("Load list song thất bại");}}});}
function getListVideoDetail(){var link=$('#detail-list-video-rank').attr('link');$('.ajax-loading-img-rank').show();$.ajax({type:"POST",url:link,cache:false,success:function(data){$('.box-ranktablehome #rank-song-tab').hide();$(".box-ranktablehome .list-wrap #rank-video-tab").html(data);$(".box-ranktablehome #rank-video-tab").fadeIn("slow");$('.ajax-loading-img-rank').hide();$('#detail-list-video-rank').parent().find('a').removeClass('current');$('#detail-list-video-rank').addClass('current');},error:function(request,status,err){if(status=="timeout"){alert("Load list song thất bại");}}});}
$('#detail-list-song-rank').click(function(){$('.box-ranktablehome #rank-song-tab').fadeIn("slow");$(".box-ranktablehome #rank-video-tab").hide();$(this).parent().find('a').removeClass('current');$(this).addClass('current');})
function getListSongDetail(){var link=$('#detail-list-song-new').attr('link');$('#detail-list-song-new .ajax-loading-img').show();$.ajax({type:"POST",url:link,cache:false,success:function(data){$('.tab-music-box #featured').hide();$(".tab-music-box .list-wrap #core").html(data);$(".tab-music-box #core").fadeIn("slow");$('#detail-list-song-new .ajax-loading-img').hide();$('#detail-list-song-new').parent().find('a').removeClass('current');$('#detail-list-song-new a').addClass('current');},error:function(request,status,err){if(status=="timeout"){alert("Load list song thất bại");}}});}
$('#detail-list-song-more-listen').click(function(){$(".tab-music-box #featured").fadeIn("slow");$('.tab-music-box #core').hide();$('#detail-list-song-more-listen').parent().find('a').removeClass('current');$('#detail-list-song-more-listen a').addClass('current');})
function getListSongMoreDetail(){var link=$('#detail-list-song-more-listen').attr('link');$.ajax({type:"POST",url:link,cache:false,success:function(data){$('.tab-music-box #core').hide();$(".tab-music-box .list-wrap").html(data);$(".tab-music-box #featured").fadeIn("slow");$('#detail-list-song-more-listen').parent().find('a').removeClass('current');$('#detail-list-song-more-listen a').addClass('current');},error:function(request,status,err){if(status=="timeout"){alert("Load list song thất bại");}}});};
var playerMusicBoxName;var musicboxPlayer;var musicboxXml;var addMusicboxUrl;var removeMusicboxUrl;var listMusicbox;var playlistMusicbox=[];(function($){if(musicboxXml!=null&&listMusicbox.length>0){setUpMusicboxPlayer(true);var ident=0;for(ident in listMusicbox){$('.link_fav_'+listMusicbox[ident]).addClass('active-add');$('.link_fav_'+listMusicbox[ident]).attr('title','Bài hát đã được thêm vào musicbox');}}else{if($('#musicbox-list li').size()==0){$('div#musicbox div.processbar').html('<div id="playerMusicBox"></div>');$('#musicbox-list').html('<li id="no-data">Không có bài hát.</li>');$('#save_to_playlist').hide();$('#download_to_musicbox').hide();}}})(jQuery);function setUpMusicboxPlayer(isFirstLoad){if($('div#'+playerMusicBoxName).attr('id')==playerMusicBoxName){if(isFirstLoad){musicboxPlayer=jwplayer(playerMusicBoxName).setup({flashplayer:"/swf/mp3player.swf",file:$.base64Decode(musicboxXml),height:34,width:303,wmode:"transparent",skin:'/swf/mp3-mini-magenta.swf',"controlbar.position":"top","controlbar.idlehide":"false",autoplay:false,repeat:'always'});}else{musicboxPlayer=jwplayer(playerMusicBoxName).setup({flashplayer:"/swf/mp3player.swf",playlist:playlistMusicbox,height:34,width:303,wmode:"transparent",skin:'/swf/mp3-mini-magenta.swf',"controlbar.position":"top","controlbar.idlehide":"false",autoplay:false,repeat:'always','plugins':{'viral-2':{'onpause':'false','oncomplete':'false','allowmenu':'false','callout':'none'}}});}
insertPlayerIntoPage(playerMusicBoxName);musicboxPlayer.onComplete(function(){$("ul.list-playlist li.playing").removeClass("playing");});musicboxPlayer.onError(function(event){$("ul.list-playlist li.playing").removeClass("playing");musicboxPlayer.playlistNext();});musicboxPlayer.onPlay(function(event){pauseAllPlayerInPageWithout(playerMusicBoxName);});musicboxPlayer.onPlaylistItem(function(event){index=event.index;var idCurr=musicboxPlayer.getPlaylistItem(event.index).link;$("ul.list-playlist li.playing").removeClass("playing");$("ul.list-playlist #fav_song_"+idCurr).addClass("playing");});}}
function playMusicBoxSong(songid){var playList=musicboxPlayer.getPlaylist();for(var index in playList){if(songid==playList[index].link){musicboxPlayer.playlistItem(index);musicboxPlayer.play(true);break;}}}
function addSongToFavourite(obj){var id=obj.id;if($('.link_fav_'+id).hasClass('active-add')){$('.link_fav_'+id).attr('title','Bài hát đã được thêm vào musicbox');return;}
playlistMusicbox=[];var link=$.base64Decode(addMusicboxUrl)+"?song_id="+id;$.ajax({type:"POST",url:link,data:{},cache:false,success:function(data){var getData=$.parseJSON(data);bindMusicboxAjaxData(getData);},error:function(request,status,err){},complete:function(){}});}
function removeSongFromFavourite(id){playlistMusicbox=[];var link=$.base64Decode(removeMusicboxUrl)+"?song_id="+id;$.ajax({type:"POST",url:link,data:{},cache:false,success:function(data){var getData=$.parseJSON(data);bindMusicboxAjaxData(getData);},error:function(request,status,err){},complete:function(){}});}
function bindMusicboxAjaxData(getData){if(getData==null){alert('Thao tác thất bại, bạn hãy refresh và thực hiện lại thao tác!');return;}
var _result=getData.result;if(_result==0){var _count=$.base64Decode(getData.count);if(_count>0){var arrSinger=getData.singer;var arrName=getData.name;var arrShortName=getData.short_name;var arrPath=getData.path;var arrIdent=getData.ident;var _singer="";var _name="";var _short_name="";var _path="";var _ident="";var song="";$('.icon-add').removeClass('active-add');listMusicbox=[];for(var i=0;i<_count;i++){_singer=$.base64Decode(arrSinger[i]);_name=$.base64Decode(arrName[i]);_short_name=$.base64Decode(arrShortName[i]);_path=$.base64Decode(arrPath[i]);_ident=$.base64Decode(arrIdent[i]);listMusicbox.push(_ident);newItem={'file':_path,'link':_ident};playlistMusicbox.push(newItem);song='<li id="fav_song_'+_ident+'">'
+'<a class="name-song color song'+_ident+'" href="javascript:playMusicBoxSong(\''+_ident+'\');" '
+'title="'+_name+'">'+_short_name+'</a>'
+_singer
+'<a class="icon-delete" href="javascript:removeSongFromFavourite(\''+_ident+'\')"></a>'
+'</li>';if(i==0){$('#musicbox-list').html(song);}else{$('#musicbox-list').append(song);}}
$('#save_to_playlist').show();$('#download_to_musicbox').show();var ident=0;for(ident in listMusicbox){$('.link_fav_'+listMusicbox[ident]).addClass('active-add');$('.link_fav_'+listMusicbox[ident]).attr('title','Bài hát đã được thêm vào musicbox');}
bindToMusicboxPlayer();}else if(_count==0){musicboxPlayer=null;$('div#musicbox div.processbar').html('<div id="playerMusicBox"></div>');$('#musicbox-list').html('<li id="no-data">Không có bài hát.</li>');$('#save_to_playlist').hide();$('#download_to_musicbox').hide();return;}}else if(_result==-1){alert('Bạn chưa đăng nhập, hãy đăng nhập để thực hiện thao tác!');}else if(_result==1){alert('Music box hiện tại đang có 30 bài hát, vui lòng xoá bớt bài hát để add thêm!');}else if(_result==2){alert('Bài hát bạn xóa không có trên hệ thống!');}else{alert('Thao tác thất bại, bạn hãy refresh và thực hiện lại thao tác!');}}
function bindToMusicboxPlayer(){if(musicboxPlayer!=null&&playlistMusicbox.length>0){var state=musicboxPlayer.getState();musicboxPlayer.pause(true);var pos=musicboxPlayer.getPosition();var idCurr=musicboxPlayer.getPlaylistItem().link;var noCurr=-1;musicboxPlayer.load(playlistMusicbox);for(var index in playlistMusicbox){if(playlistMusicbox[index].link==idCurr){noCurr=index;break;}}
if(noCurr>=0){musicboxPlayer.playlistItem(noCurr);musicboxPlayer.seek(pos);}else{musicboxPlayer.playlistItem(0);}
if(state=='BUFFERING'){musicboxPlayer.play(true);}else if(state=='PLAYING'){musicboxPlayer.play(true);}else if(state=='PAUSED'){musicboxPlayer.pause(true);}else if(state=='IDLE'){musicboxPlayer.stop();}}else if(musicboxPlayer==null&&playlistMusicbox.length>0){setUpMusicboxPlayer(false);}};
jQuery(document).ready(function($){var items=['item1','item2','item3','item4','item5','item6','item7','item8'];$('.item1').data('data',{name:'item1',left:0,top:0,width:159,focus:[246,0],others:{item2:[130,87],item3:[130,58],item4:[130,29]}});$('.item2').data('data',{name:'item2',left:160,top:0,width:159,focus:[246,-29],others:{item1:[130,0],item3:[130,58],item4:[130,29]}});$('.item3').data('data',{name:'item3',left:320,top:0,width:159,focus:[246,-58],others:{item1:[130,0],item2:[130,-29],item4:[130,29]}});$('.item4').data('data',{name:'item4',left:480,top:0,width:159,focus:[246,-87],others:{item1:[130,0],item2:[130,-29],item3:[130,-58]}});$('.item5').data('data',{name:'item5',left:0,top:160,width:159,focus:[246,0],others:{item6:[130,87],item7:[130,58],item8:[130,29]}});$('.item6').data('data',{name:'item6',left:160,top:160,width:159,focus:[246,-29],others:{item5:[130,0],item7:[130,58],item8:[130,29]}});$('.item7').data('data',{name:'item7',left:320,top:160,width:159,focus:[246,-58],others:{item5:[130,0],item6:[130,-29],item8:[130,29]}});$('.item8').data('data',{name:'item8',left:480,top:160,width:159,focus:[246,-87],others:{item5:[130,0],item6:[130,-29],item7:[130,-58]}});function moveLeft(thiz,width,delta,black){thiz.stop(true).animate({width:width,left:thiz.data('data').left+delta},300);}
function restore(thiz){thiz.stop(true).animate({width:159,left:thiz.data('data').left},300);}
$(document).ready(function(){$('.black_mask').fadeTo(0,0);$('.black1').fadeTo(0,0.6);$('.black2').fadeTo(0,0.9);$('.item').hover(function(){var thiz=$(this);var data=thiz.data('data');moveLeft(thiz,data.focus[0],data.focus[1]);thiz.find('.label').animate({top:159-24},50).animate({top:159-24},50).animate({top:159-24-20},300);for(var i in data.others){var params=data.others[i];var node=$('.'+i);moveLeft(node,params[0],params[1],true);node.find('.label').stop(true).animate({top:135},300);}
for(var i in items){$('.'+items[i]+' .black_mask').stop(true).animate({opacity:items[i]==data.name?0:0.4},600);}},function(){var thiz=$(this);var data=thiz.data('data');restore(thiz);for(var i in data.others){restore($('.'+i));}
thiz.find('.label').stop(true).animate({top:135},300);for(var i in items){if(items[i]!=data.name){$('.'+items[i]+' .black_mask').stop(true).animate({opacity:0},300);}}});});});$(document).ready(function(){var _bxslider=$('.bxslider').bxSlider({pagerCustom:'#bx-pager',auto:true});$('.album-bx-pager a').hover(function(){_bxslider.stopAuto();$('.album-bx-pager a').removeClass('active');$(this).addClass('active');var _position=-640-parseInt($(this).attr('data-slide-index'))*640;var isIE=false||!!document.documentMode;if(isIE)
{var _cssie7=_position+'px';$('ul.bxslider').css({'-moz-transform':_css,'-webkit-transform':_css,'left':_cssie7,'postition':'relative'});}
var _css='translate3d('+_position+'px, 0, 0)';$('ul.bxslider').css({'-moz-transform':_css,'-webkit-transform':_css});})});;
(function($){$(".box-album").organicTabs({"speed":200});})(jQuery);;
(function($){var slider=$('#singers-list').bxSlider({auto:true,pause:15000,displaySlideQty:1,moveSlideQty:1,controls:false,infiniteLoop:true});$('.icon-next').click(function(){if($(this).hasClass('singers_next'))
{slider.goToNextSlide();$(this).removeClass('singers_next');}
else
{slider.goToPreviousSlide();$(this).addClass('singers_next');}
return false;});$('#_author').click(function(){$('.icon-next').css('display','none');$('.next-author').css('display','block');})
$('#_singer').click(function(){$('.next-author').css('display','none');$('.icon-next').css('display','block');if($(this).hasClass('current'))
{$('.icon-next').click();}})})(jQuery);;
(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(d.getElementById(id))return;js=d.createElement(s);js.id=id;js.src="//connect.facebook.net/vi_VN/all.js#xfbml=1&appId=392568064127522";fjs.parentNode.insertBefore(js,fjs);}(document,'script','facebook-jssdk'));;