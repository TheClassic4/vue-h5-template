(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"057f":function(t,e,r){var n=r("fc6a"),o=r("241c").f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(e){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?a(t):o(n(t))}},"746f":function(t,e,r){var n=r("428f"),o=r("5135"),i=r("e538"),c=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||c(e,t,{value:i.f(t)})}},"9ca8":function(t,e,r){},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),i=r("d066"),c=r("c430"),a=r("83ab"),f=r("4930"),u=r("fdbf"),s=r("d039"),b=r("5135"),l=r("e8b5"),p=r("861d"),v=r("825a"),d=r("7b0b"),y=r("fc6a"),g=r("c04e"),h=r("5c6c"),m=r("7c73"),O=r("df75"),w=r("241c"),j=r("057f"),P=r("7418"),S=r("06cf"),N=r("9bf2"),_=r("d1e7"),D=r("9112"),E=r("6eeb"),k=r("5692"),x=r("f772"),C=r("d012"),J=r("90e3"),T=r("b622"),U=r("e538"),A=r("746f"),F=r("d44e"),z=r("69f3"),I=r("b727").forEach,Q=x("hidden"),W="Symbol",$="prototype",q=T("toPrimitive"),B=z.set,G=z.getterFor(W),H=Object[$],K=o.Symbol,L=i("JSON","stringify"),M=S.f,R=N.f,V=j.f,X=_.f,Y=k("symbols"),Z=k("op-symbols"),tt=k("string-to-symbol-registry"),et=k("symbol-to-string-registry"),rt=k("wks"),nt=o.QObject,ot=!nt||!nt[$]||!nt[$].findChild,it=a&&s((function(){return 7!=m(R({},"a",{get:function(){return R(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=M(H,e);n&&delete H[e],R(t,e,r),n&&t!==H&&R(H,e,n)}:R,ct=function(t,e){var r=Y[t]=m(K[$]);return B(r,{type:W,tag:t,description:e}),a||(r.description=e),r},at=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof K},ft=function(t,e,r){t===H&&ft(Z,e,r),v(t);var n=g(e,!0);return v(r),b(Y,n)?(r.enumerable?(b(t,Q)&&t[Q][n]&&(t[Q][n]=!1),r=m(r,{enumerable:h(0,!1)})):(b(t,Q)||R(t,Q,h(1,{})),t[Q][n]=!0),it(t,n,r)):R(t,n,r)},ut=function(t,e){v(t);var r=y(e),n=O(r).concat(vt(r));return I(n,(function(e){a&&!bt.call(r,e)||ft(t,e,r[e])})),t},st=function(t,e){return void 0===e?m(t):ut(m(t),e)},bt=function(t){var e=g(t,!0),r=X.call(this,e);return!(this===H&&b(Y,e)&&!b(Z,e))&&(!(r||!b(this,e)||!b(Y,e)||b(this,Q)&&this[Q][e])||r)},lt=function(t,e){var r=y(t),n=g(e,!0);if(r!==H||!b(Y,n)||b(Z,n)){var o=M(r,n);return!o||!b(Y,n)||b(r,Q)&&r[Q][n]||(o.enumerable=!0),o}},pt=function(t){var e=V(y(t)),r=[];return I(e,(function(t){b(Y,t)||b(C,t)||r.push(t)})),r},vt=function(t){var e=t===H,r=V(e?Z:y(t)),n=[];return I(r,(function(t){!b(Y,t)||e&&!b(H,t)||n.push(Y[t])})),n};if(f||(K=function(){if(this instanceof K)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=J(t),r=function(t){this===H&&r.call(Z,t),b(this,Q)&&b(this[Q],e)&&(this[Q][e]=!1),it(this,e,h(1,t))};return a&&ot&&it(H,e,{configurable:!0,set:r}),ct(e,t)},E(K[$],"toString",(function(){return G(this).tag})),E(K,"withoutSetter",(function(t){return ct(J(t),t)})),_.f=bt,N.f=ft,S.f=lt,w.f=j.f=pt,P.f=vt,U.f=function(t){return ct(T(t),t)},a&&(R(K[$],"description",{configurable:!0,get:function(){return G(this).description}}),c||E(H,"propertyIsEnumerable",bt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:K}),I(O(rt),(function(t){A(t)})),n({target:W,stat:!0,forced:!f},{for:function(t){var e=String(t);if(b(tt,e))return tt[e];var r=K(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(b(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!f,sham:!a},{create:st,defineProperty:ft,defineProperties:ut,getOwnPropertyDescriptor:lt}),n({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:pt,getOwnPropertySymbols:vt}),n({target:"Object",stat:!0,forced:s((function(){P.f(1)}))},{getOwnPropertySymbols:function(t){return P.f(d(t))}}),L){var dt=!f||s((function(){var t=K();return"[null]"!=L([t])||"{}"!=L({a:t})||"{}"!=L(Object(t))}));n({target:"JSON",stat:!0,forced:dt},{stringify:function(t,e,r){var n,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(n=e,(p(e)||void 0!==t)&&!at(t))return l(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!at(e))return e}),o[1]=e,L.apply(null,o)}})}K[$][q]||D(K[$],q,K[$].valueOf),F(K,W),C[Q]=!0},c012:function(t,e,r){"use strict";var n=r("9ca8"),o=r.n(n);o.a},dbb4:function(t,e,r){var n=r("23e7"),o=r("83ab"),i=r("56ef"),c=r("fc6a"),a=r("06cf"),f=r("8418");n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,r,n=c(t),o=a.f,u=i(n),s={},b=0;while(u.length>b)r=o(n,e=u[b++]),void 0!==r&&f(s,e,r);return s}})},e439:function(t,e,r){var n=r("23e7"),o=r("d039"),i=r("fc6a"),c=r("06cf").f,a=r("83ab"),f=o((function(){c(1)})),u=!a||f;n({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(t,e){return c(i(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},f820:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about"},[r("h1",[t._v("This is an about page")]),r("van-button",{attrs:{type:"default"},on:{click:t.initData}},[t._v("默认按钮")]),r("van-button",{attrs:{type:"primary"}},[t._v("主要按钮")]),r("div",[t._v(t._s(t._f("capitalize")(t.title)))]),r("div",[r("p",[t._v("svg-icon test:")]),r("span",{staticClass:"svg-container"},[r("svg-icon",{staticClass:"test-icon",attrs:{"icon-class":"phone"}})],1)]),r("div",[t._v("vuex state: userName ==> "+t._s(t.userName))])],1)},o=[];r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f=r("c24f"),u=r("5880"),s={name:"About",data:function(){return{title:"about"}},computed:a({},Object(u["mapState"])({userName:function(t){return t.user.userName}})),watch:{},created:function(){},methods:a({},Object(u["mapActions"])({setUserName:"user/setUserName"}),{initData:function(){var t=this,e={};Object(f["a"])(e).then((function(e){console.log("res: ",e),t.setUserName("userName")})).catch((function(t){console.log("err: ",t)}))}})},b=s,l=(r("c012"),r("2877")),p=Object(l["a"])(b,n,o,!1,null,"2a56a762",null);e["default"]=p.exports}}]);