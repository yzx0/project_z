(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{303:function(t,e,n){"use strict";var r=n(8),i=n(4),s=n(96),a=n(13),c=n(7),u=n(25),o=n(306),l=n(42),f=n(2),h=n(43),d=n(66).f,p=n(24).f,v=n(9).f,_=n(305).trim,b=i.Number,m=b.prototype,g="Number"==u(h(m)),N=function(t){var e,n,r,i,s,a,c,u,o=l(t,!1);if("string"==typeof o&&o.length>2)if(43===(e=(o=_(o)).charCodeAt(0))||45===e){if(88===(n=o.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(o.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+o}for(a=(s=o.slice(2)).length,c=0;c<a;c++)if((u=s.charCodeAt(c))<48||u>i)return NaN;return parseInt(s,r)}return+o};if(s("Number",!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var y,E=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof E&&(g?f((function(){m.valueOf.call(n)})):"Number"!=u(n))?o(new b(N(e)),n,E):N(e)},I=r?d(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),x=0;I.length>x;x++)c(b,y=I[x])&&!c(E,y)&&v(E,y,p(b,y));E.prototype=m,m.constructor=E,a(i,"Number",E)}},304:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},305:function(t,e,n){var r=n(23),i="["+n(304)+"]",s=RegExp("^"+i+i+"*"),a=RegExp(i+i+"*$"),c=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(s,"")),2&t&&(n=n.replace(a,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},306:function(t,e,n){var r=n(5),i=n(164);t.exports=function(t,e,n){var s,a;return i&&"function"==typeof(s=e.constructor)&&s!==n&&r(a=s.prototype)&&a!==n.prototype&&i(t,a),t}},315:function(t,e,n){},316:function(t,e,n){},317:function(t,e,n){},318:function(t,e,n){},319:function(t,e,n){},326:function(t,e,n){"use strict";n(315)},327:function(t,e,n){"use strict";n(316)},328:function(t,e,n){"use strict";n(317)},329:function(t,e,n){"use strict";n(318)},330:function(t,e,n){"use strict";n(319)},331:function(t,e,n){"use strict";n(94),n(67),n(95);var r={name:"ZLayout",mounted:function(){var t=this;console.log(this.$children[0].$options.name),this.$children.forEach((function(e){"ZSider"===e.$options.name&&(t.layoutClass[0]["has-sider"]=!0)}))},data:function(){return{layoutClass:[{"has-sider":!1},"layout"]}}},i=(n(326),n(41)),s=Object(i.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.layoutClass},[this._t("default")],2)}),[],!1,null,"08a14ae2",null);e.a=s.exports},332:function(t,e,n){"use strict";var r={name:"ZHeader"},i=(n(327),n(41)),s=Object(i.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)}),[],!1,null,"1b2c1b8a",null);e.a=s.exports},333:function(t,e,n){"use strict";var r={name:"ZContent"},i=(n(328),n(41)),s=Object(i.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content"},[this._t("default")],2)}),[],!1,null,"1787bccc",null);e.a=s.exports},334:function(t,e,n){"use strict";var r={name:"ZFooter"},i=(n(329),n(41)),s=Object(i.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)}),[],!1,null,"4212b13b",null);e.a=s.exports},335:function(t,e,n){"use strict";n(303);var r={name:"ZSider",props:{width:{type:[Number,String],default:200}}},i=(n(330),n(41)),s=Object(i.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"sider",style:{width:this.width+"px"}},[this._t("default")],2)}),[],!1,null,"0986fea0",null);e.a=s.exports},363:function(t,e,n){},408:function(t,e,n){"use strict";n(363)},431:function(t,e,n){"use strict";n.r(e);var r=n(331),i=n(332),s=n(333),a=n(334),c=n(335),u={components:{"z-layout":r.a,"z-header":i.a,"z-content":s.a,"z-footer":a.a,"z-sider":c.a}},o=(n(408),n(41)),l=Object(o.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("z-layout",{staticStyle:{height:"100vh",margin:"0"}},[e("z-header",{staticStyle:{height:"50px",background:"lightskyblue"}},[this._v("header")]),this._v(" "),e("z-content",{staticStyle:{background:"deepskyblue"}},[this._v("content")]),this._v(" "),e("z-footer",{staticStyle:{height:"50px",background:"lightskyblue"}},[this._v("footer")])],1)],1)}),[],!1,null,"197e0008",null);e.default=l.exports}}]);