!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).RevealSearch=t()}(this,(function(){"use strict";var e=function(e){try{return!!e()}catch(e){return!0}},t=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function r(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&n.path)}},n.exports),n.exports}var o=function(e){return e&&e.Math==Math&&e},i=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof n&&n)||function(){return this}()||Function("return this")(),c=/#|\.prototype\./,u=function(t,n){var r=l[a(t)];return r==s||r!=f&&("function"==typeof n?e(n):!!n)},a=u.normalize=function(e){return String(e).replace(c,".").toLowerCase()},l=u.data={},f=u.NATIVE="N",s=u.POLYFILL="P",p=u,d=function(e){return"object"==typeof e?null!==e:"function"==typeof e},g=function(e){if(!d(e))throw TypeError(String(e)+" is not an object");return e},h=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),t=n instanceof Array}catch(e){}return function(n,r){return g(n),function(e){if(!d(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype")}(r),t?e.call(n,r):n.__proto__=r,n}}():void 0),y=i.document,v=d(y)&&d(y.createElement),b=!t&&!e((function(){return 7!=Object.defineProperty((e="div",v?y.createElement(e):{}),"a",{get:function(){return 7}}).a;var e})),x=function(e,t){if(!d(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!d(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!d(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!d(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},m=Object.defineProperty,E={f:t?m:function(e,t,n){if(g(e),t=x(t,!0),g(n),b)try{return m(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},S={}.hasOwnProperty,w=function(e,t){return S.call(e,t)},R={}.toString,O=function(e){return R.call(e).slice(8,-1)},T="".split,_=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==O(e)?T.call(e,""):Object(e)}:Object,j=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},P=function(e){return _(j(e))},I=Math.ceil,C=Math.floor,N=function(e){return isNaN(e=+e)?0:(e>0?C:I)(e)},A=Math.min,k=function(e){return e>0?A(N(e),9007199254740991):0},$=Math.max,L=Math.min,M=function(e){return function(t,n,r){var o,i=P(t),c=k(i.length),u=function(e,t){var n=N(e);return n<0?$(n+t,0):L(n,t)}(r,c);if(e&&n!=n){for(;c>u;)if((o=i[u++])!=o)return!0}else for(;c>u;u++)if((e||u in i)&&i[u]===n)return e||u||0;return!e&&-1}},U={includes:M(!0),indexOf:M(!1)},D={},F=U.indexOf,K=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype"),z={f:Object.getOwnPropertyNames||function(e){return function(e,t){var n,r=P(e),o=0,i=[];for(n in r)!w(D,n)&&w(r,n)&&i.push(n);for(;t.length>o;)w(r,n=t[o++])&&(~F(i,n)||i.push(n));return i}(e,K)}},B=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},W=t?function(e,t,n){return E.f(e,t,B(1,n))}:function(e,t,n){return e[t]=n,e},q=function(e,t){try{W(i,e,t)}catch(n){i[e]=t}return t},G="__core-js_shared__",V=i[G]||q(G,{}),Y=r((function(e){(e.exports=function(e,t){return V[e]||(V[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.9.0",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),X=0,H=Math.random(),J=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++X+H).toString(36)},Q=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())})),Z=Q&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,ee=Y("wks"),te=i.Symbol,ne=Z?te:te&&te.withoutSetter||J,re=function(e){return w(ee,e)||(Q&&w(te,e)?ee[e]=te[e]:ee[e]=ne("Symbol."+e)),ee[e]},oe=re("match"),ie=function(){var e=g(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t};function ce(e,t){return RegExp(e,t)}var ue={UNSUPPORTED_Y:e((function(){var e=ce("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),BROKEN_CARET:e((function(){var e=ce("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ae=Function.toString;"function"!=typeof V.inspectSource&&(V.inspectSource=function(e){return ae.call(e)});var le,fe,se,pe,de=V.inspectSource,ge=i.WeakMap,he="function"==typeof ge&&/native code/.test(de(ge)),ye=Y("keys"),ve=i.WeakMap;if(he){var be=V.state||(V.state=new ve),xe=be.get,me=be.has,Ee=be.set;le=function(e,t){return t.facade=e,Ee.call(be,e,t),t},fe=function(e){return xe.call(be,e)||{}},se=function(e){return me.call(be,e)}}else{var Se=ye[pe="state"]||(ye[pe]=J(pe));D[Se]=!0,le=function(e,t){return t.facade=e,W(e,Se,t),t},fe=function(e){return w(e,Se)?e[Se]:{}},se=function(e){return w(e,Se)}}var we={set:le,get:fe,has:se,enforce:function(e){return se(e)?fe(e):le(e,{})},getterFor:function(e){return function(t){var n;if(!d(t)||(n=fe(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},Re=r((function(e){var t=we.get,n=we.enforce,r=String(String).split("String");(e.exports=function(e,t,o,c){var u,a=!!c&&!!c.unsafe,l=!!c&&!!c.enumerable,f=!!c&&!!c.noTargetGet;"function"==typeof o&&("string"!=typeof t||w(o,"name")||W(o,"name",t),(u=n(o)).source||(u.source=r.join("string"==typeof t?t:""))),e!==i?(a?!f&&e[t]&&(l=!0):delete e[t],l?e[t]=o:W(e,t,o)):l?e[t]=o:q(t,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||de(this)}))})),Oe=i,Te=function(e){return"function"==typeof e?e:void 0},_e=function(e,t){return arguments.length<2?Te(Oe[e])||Te(i[e]):Oe[e]&&Oe[e][t]||i[e]&&i[e][t]},je=re("species"),Pe=E.f,Ie=z.f,Ce=we.set,Ne=re("match"),Ae=i.RegExp,ke=Ae.prototype,$e=/a/g,Le=/a/g,Me=new Ae($e)!==$e,Ue=ue.UNSUPPORTED_Y;if(t&&p("RegExp",!Me||Ue||e((function(){return Le[Ne]=!1,Ae($e)!=$e||Ae(Le)==Le||"/a/i"!=Ae($e,"i")})))){for(var De=function(e,t){var n,r,o,i=this instanceof De,c=d(n=e)&&(void 0!==(r=n[oe])?!!r:"RegExp"==O(n)),u=void 0===t;if(!i&&c&&e.constructor===De&&u)return e;Me?c&&!u&&(e=e.source):e instanceof De&&(u&&(t=ie.call(e)),e=e.source),Ue&&(o=!!t&&t.indexOf("y")>-1)&&(t=t.replace(/y/g,""));var a,l,f,s,p,g=(a=Me?new Ae(e,t):Ae(e,t),l=i?this:ke,f=De,h&&"function"==typeof(s=l.constructor)&&s!==f&&d(p=s.prototype)&&p!==f.prototype&&h(a,p),a);return Ue&&o&&Ce(g,{sticky:o}),g},Fe=function(e){e in De||Pe(De,e,{configurable:!0,get:function(){return Ae[e]},set:function(t){Ae[e]=t}})},Ke=Ie(Ae),ze=0;Ke.length>ze;)Fe(Ke[ze++]);ke.constructor=De,De.prototype=ke,Re(i,"RegExp",De)}!function(e){var n=_e(e),r=E.f;t&&n&&!n[je]&&r(n,je,{configurable:!0,get:function(){return this}})}("RegExp");var Be={}.propertyIsEnumerable,We=Object.getOwnPropertyDescriptor,qe={f:We&&!Be.call({1:2},1)?function(e){var t=We(this,e);return!!t&&t.enumerable}:Be},Ge=Object.getOwnPropertyDescriptor,Ve={f:t?Ge:function(e,t){if(e=P(e),t=x(t,!0),b)try{return Ge(e,t)}catch(e){}if(w(e,t))return B(!qe.f.call(e,t),e[t])}},Ye={f:Object.getOwnPropertySymbols},Xe=_e("Reflect","ownKeys")||function(e){var t=z.f(g(e)),n=Ye.f;return n?t.concat(n(e)):t},He=function(e,t){for(var n=Xe(t),r=E.f,o=Ve.f,i=0;i<n.length;i++){var c=n[i];w(e,c)||r(e,c,o(t,c))}},Je=Ve.f,Qe=RegExp.prototype.exec,Ze=String.prototype.replace,et=Qe,tt=function(){var e=/a/,t=/b*/g;return Qe.call(e,"a"),Qe.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),nt=ue.UNSUPPORTED_Y||ue.BROKEN_CARET,rt=void 0!==/()??/.exec("")[1];(tt||rt||nt)&&(et=function(e){var t,n,r,o,i=this,c=nt&&i.sticky,u=ie.call(i),a=i.source,l=0,f=e;return c&&(-1===(u=u.replace("y","")).indexOf("g")&&(u+="g"),f=String(e).slice(i.lastIndex),i.lastIndex>0&&(!i.multiline||i.multiline&&"\n"!==e[i.lastIndex-1])&&(a="(?: "+a+")",f=" "+f,l++),n=new RegExp("^(?:"+a+")",u)),rt&&(n=new RegExp("^"+a+"$(?!\\s)",u)),tt&&(t=i.lastIndex),r=Qe.call(c?n:i,f),c?r?(r.input=r.input.slice(l),r[0]=r[0].slice(l),r.index=i.lastIndex,i.lastIndex+=r[0].length):i.lastIndex=0:tt&&r&&(i.lastIndex=i.global?r.index+r[0].length:t),rt&&r&&r.length>1&&Ze.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r});var ot=et;!function(e,t){var n,r,o,c,u,a=e.target,l=e.global,f=e.stat;if(n=l?i:f?i[a]||q(a,{}):(i[a]||{}).prototype)for(r in t){if(c=t[r],o=e.noTargetGet?(u=Je(n,r))&&u.value:n[r],!p(l?r:a+(f?".":"#")+r,e.forced)&&void 0!==o){if(typeof c==typeof o)continue;He(c,o)}(e.sham||o&&o.sham)&&W(c,"sham",!0),Re(n,r,c,e)}}({target:"RegExp",proto:!0,forced:/./.exec!==ot},{exec:ot});var it="toString",ct=RegExp.prototype,ut=ct.toString,at=e((function(){return"/a/b"!=ut.call({source:"a",flags:"b"})})),lt=ut.name!=it;(at||lt)&&Re(RegExp.prototype,it,(function(){var e=g(this),t=String(e.source),n=e.flags;return"/"+t+"/"+String(void 0===n&&e instanceof RegExp&&!("flags"in ct)?ie.call(e):n)}),{unsafe:!0});var ft=re("species"),st=!e((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),pt="$0"==="a".replace(/./,"$0"),dt=re("replace"),gt=!!/./[dt]&&""===/./[dt]("a","$0"),ht=!e((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),yt=function(e){return function(t,n){var r,o,i=String(j(t)),c=N(n),u=i.length;return c<0||c>=u?e?"":void 0:(r=i.charCodeAt(c))<55296||r>56319||c+1===u||(o=i.charCodeAt(c+1))<56320||o>57343?e?i.charAt(c):r:e?i.slice(c,c+2):o-56320+(r-55296<<10)+65536}},vt={codeAt:yt(!1),charAt:yt(!0)}.charAt,bt=function(e,t,n){return t+(n?vt(e,t).length:1)},xt=Math.floor,mt="".replace,Et=/\$([$&'`]|\d\d?|<[^>]*>)/g,St=/\$([$&'`]|\d\d?)/g,wt=function(e,t,n,r,o,i){var c=n+e.length,u=r.length,a=St;return void 0!==o&&(o=Object(j(o)),a=Et),mt.call(i,a,(function(i,a){var l;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(c);case"<":l=o[a.slice(1,-1)];break;default:var f=+a;if(0===f)return i;if(f>u){var s=xt(f/10);return 0===s?i:s<=u?void 0===r[s-1]?a.charAt(1):r[s-1]+a.charAt(1):i}l=r[f-1]}return void 0===l?"":l}))},Rt=function(e,t){var n=e.exec;if("function"==typeof n){var r=n.call(e,t);if("object"!=typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==O(e))throw TypeError("RegExp#exec called on incompatible receiver");return ot.call(e,t)},Ot=Math.max,Tt=Math.min;!function(t,n,r,o){var i=re(t),c=!e((function(){var e={};return e[i]=function(){return 7},7!=""[t](e)})),u=c&&!e((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[ft]=function(){return n},n.flags="",n[i]=/./[i]),n.exec=function(){return e=!0,null},n[i](""),!e}));if(!c||!u||"replace"===t&&(!st||!pt||gt)||"split"===t&&!ht){var a=/./[i],l=r(i,""[t],(function(e,t,n,r,o){return t.exec===ot?c&&!o?{done:!0,value:a.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:pt,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:gt}),f=l[0],s=l[1];Re(String.prototype,t,f),Re(RegExp.prototype,i,2==n?function(e,t){return s.call(e,this,t)}:function(e){return s.call(e,this)})}o&&W(RegExp.prototype[i],"sham",!0)}("replace",2,(function(e,t,n,r){var o=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,i=r.REPLACE_KEEPS_$0,c=o?"$":"$0";return[function(n,r){var o=j(this),i=null==n?void 0:n[e];return void 0!==i?i.call(n,o,r):t.call(String(o),n,r)},function(e,r){if(!o&&i||"string"==typeof r&&-1===r.indexOf(c)){var u=n(t,e,this,r);if(u.done)return u.value}var a=g(e),l=String(this),f="function"==typeof r;f||(r=String(r));var s=a.global;if(s){var p=a.unicode;a.lastIndex=0}for(var d=[];;){var h=Rt(a,l);if(null===h)break;if(d.push(h),!s)break;""===String(h[0])&&(a.lastIndex=bt(l,k(a.lastIndex),p))}for(var y,v="",b=0,x=0;x<d.length;x++){h=d[x];for(var m=String(h[0]),E=Ot(Tt(N(h.index),l.length),0),S=[],w=1;w<h.length;w++)S.push(void 0===(y=h[w])?y:String(y));var R=h.groups;if(f){var O=[m].concat(S,E,l);void 0!==R&&O.push(R);var T=String(r.apply(void 0,O))}else T=wt(m,l,E,S,R,r);E>=b&&(v+=l.slice(b,E)+T,b=E+m.length)}return v+l.slice(b)}]}));var _t={};_t[re("toStringTag")]="z";var jt="[object z]"===String(_t),Pt=re("toStringTag"),It="Arguments"==O(function(){return arguments}()),Ct=jt?O:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),Pt))?n:It?O(t):"Object"==(r=O(t))&&"function"==typeof t.callee?"Arguments":r},Nt=jt?{}.toString:function(){return"[object "+Ct(this)+"]"};jt||Re(Object.prototype,"toString",Nt,{unsafe:!0})
/*!
   * Handles finding a text string anywhere in the slides and showing the next occurrence to the user
   * by navigatating to that slide and highlighting it.
   *
   * @author Jon Snyder <snyder.jon@gmail.com>, February 2013
   */;return function(){var e,t,n,r,o,i,c;function u(){(t=document.createElement("div")).classList.add("searchbox"),t.style.position="absolute",t.style.top="10px",t.style.right="10px",t.style.zIndex=10,t.innerHTML='<input type="search" class="searchinput" placeholder="Search..." style="vertical-align: top;"/>\n\t\t</span>',(n=t.querySelector(".searchinput")).style.width="240px",n.style.fontSize="14px",n.style.padding="4px 6px",n.style.color="#000",n.style.background="#fff",n.style.borderRadius="2px",n.style.border="0",n.style.outline="0",n.style.boxShadow="0 2px 18px rgba(0, 0, 0, 0.2)",n.style["-webkit-appearance"]="none",e.getRevealElement().appendChild(t),n.addEventListener("keyup",(function(t){switch(t.keyCode){case 13:t.preventDefault(),function(){if(i){var t=n.value;""===t?(c&&c.remove(),r=null):(c=new f("slidecontent"),r=c.apply(t),o=0)}r&&(r.length&&r.length<=o&&(o=0),r.length>o&&(e.slide(r[o].h,r[o].v),o++))}(),i=!1;break;default:i=!0}}),!1),l()}function a(){t||u(),t.style.display="inline",n.focus(),n.select()}function l(){t||u(),t.style.display="none",c&&c.remove()}function f(t,n){var r=document.getElementById(t)||document.body,o=n||"EM",i=new RegExp("^(?:"+o+"|SCRIPT|FORM)$"),c=["#ff6","#a0ffff","#9f9","#f99","#f6f"],u=[],a=0,l="",f=[];this.setRegex=function(e){e=e.replace(/^[^\w]+|[^\w]+$/g,"").replace(/[^\w'-]+/g,"|"),l=new RegExp("("+e+")","i")},this.getRegex=function(){return l.toString().replace(/^\/\\b\(|\)\\b\/i$/g,"").replace(/\|/g," ")},this.hiliteWords=function(t){if(null!=t&&t&&l&&!i.test(t.nodeName)){if(t.hasChildNodes())for(var n=0;n<t.childNodes.length;n++)this.hiliteWords(t.childNodes[n]);var r,s;if(3==t.nodeType)if((r=t.nodeValue)&&(s=l.exec(r))){for(var p=t;null!=p&&"SECTION"!=p.nodeName;)p=p.parentNode;var d=e.getIndices(p),g=f.length,h=!1;for(n=0;n<g;n++)f[n].h===d.h&&f[n].v===d.v&&(h=!0);h||f.push(d),u[s[0].toLowerCase()]||(u[s[0].toLowerCase()]=c[a++%c.length]);var y=document.createElement(o);y.appendChild(document.createTextNode(s[0])),y.style.backgroundColor=u[s[0].toLowerCase()],y.style.fontStyle="inherit",y.style.color="#000";var v=t.splitText(s.index);v.nodeValue=v.nodeValue.substring(s[0].length),t.parentNode.insertBefore(y,v)}}},this.remove=function(){for(var e,t=document.getElementsByTagName(o);t.length&&(e=t[0]);)e.parentNode.replaceChild(e.firstChild,e)},this.apply=function(e){if(null!=e&&e)return this.remove(),this.setRegex(e),this.hiliteWords(r),f}}return{id:"search",init:function(n){(e=n).registerKeyboardShortcut("CTRL + Shift + F","Search"),document.addEventListener("keydown",(function(e){"F"==e.key&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),t||u(),"inline"!==t.style.display?a():l())}),!1)},open:a}}}));
