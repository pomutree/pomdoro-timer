(function(t){function e(e){for(var i,n,o=e[0],c=e[1],l=e[2],m=0,u=[];m<o.length;m++)n=o[m],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&u.push(a[n][0]),a[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(u.length)u.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],i=!0,o=1;o<s.length;o++){var c=s[o];0!==a[c]&&(i=!1)}i&&(r.splice(e--,1),t=n(n.s=s[0]))}return t}var i={},a={app:0},r=[];function n(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=i,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(s,i,function(e){return t[e]}.bind(null,i));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},4678:function(t,e,s){var i={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(t){var e=r(t);return s(e)}function r(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=r,t.exports=a,a.id="4678"},"4f5e":function(t,e,s){"use strict";var i=s("6318"),a=s.n(i);a.a},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var i=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",{style:{"background-color":t.siteTheme},attrs:{id:"site"}},[s("div",{attrs:{id:"titleBar"}}),s("v-app-bar",{attrs:{app:"",flat:"",color:"transparent"}},[s("v-spacer"),s("div",{staticClass:"d-flex align-center title  white--text"},[t._v("\n      Pomodoro Timer\n    ")]),s("v-spacer")],1),s("v-content",{staticClass:"pt-4"},[s("Timer",{on:{timeUp:t.siteThemeChange}})],1)],1)},n=[],o=s("c1df"),c=s.n(o),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{id:"site-container",fluid:""}},[s("div",{staticClass:"timer"},[s("span",{staticClass:"timer-ssession js-session white--text"},[t._v(t._s(t.isBreakTime?"break":"work"))]),t.isOverHour?s("span",{staticClass:"timer-countdown js-countdown white--text"},[t._v(t._s(t.hour+":"+t.minutes+":"+t.seconds))]):s("span",{staticClass:"timer-countdown js-countdown white--text"},[t._v(t._s(t.minutes+":"+t.seconds))])]),s("div",{staticClass:"controllers"},[s("v-row",{staticClass:"control-btn",attrs:{justify:"center","align-content":"center"}},[s("Reset",{on:{reset:t.reset}}),s("Play",{attrs:{isTimerActive:t.isTimerActive,isCountUp:t.isCountUp},on:{play:t.play}}),s("Information"),s("Done",{attrs:{isBreakTime:t.isBreakTime},on:{done:t.done}}),s("StopWatch",{attrs:{isTimerActive:t.isTimerActive,isBreakTime:t.isBreakTime},on:{stopWatch:t.stopWatch}}),s("TimerSettings",{attrs:{isTimerActive:t.isTimerActive},on:{timerSettings:t.timerSettings}})],1)],1)])},d=[],m=(s("c5f6"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-col",{attrs:{cols:"4"}},[s("div",{staticStyle:{height:"0.5rem"}}),s("v-btn",{staticClass:"btn-sm",attrs:{text:"",fab:"",outlined:"",dark:""},on:{click:t.reset}},[s("v-icon",{staticClass:"white--text"},[t._v("mdi-replay")])],1)],1)}),u=[],f={methods:{reset:function(){this.$emit("reset")}}},h=f,b=s("2877"),v=s("6544"),j=s.n(v),p=s("8336"),k=s("62ad"),g=s("132d"),T=Object(b["a"])(h,m,u,!1,null,null,null),y=T.exports;j()(T,{VBtn:p["a"],VCol:k["a"],VIcon:g["a"]});var C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-col",{attrs:{cols:"4"}},[s("v-btn",{staticClass:"btn-md",attrs:{text:"","x-large":"",fab:"",outlined:"",dark:"",disabled:t.isCountUp},on:{click:t.toggleTimer}},[t.isTimerActive?s("span",{staticClass:"flex-center"},[s("v-icon",{staticClass:"white--text"},[t._v("mdi-pause")])],1):s("span",{staticClass:"flex-center"},[s("v-icon",{staticClass:"white--text"},[t._v("mdi-play")])],1)])],1)},B=[],x={props:{isTimerActive:Boolean,isCountUp:Boolean},methods:{toggleTimer:function(){this.$emit("play")}}},_=x,S=Object(b["a"])(_,C,B,!1,null,null,null),w=S.exports;j()(S,{VBtn:p["a"],VCol:k["a"],VIcon:g["a"]});var V=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-col",{attrs:{cols:"4"}},[s("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-card",[s("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[s("tbody",[s("tr",[s("th",{staticClass:"text-left"},[t._v("Total pomodoro")]),s("td",[t._v(t._s(t.pomodoro))])]),s("tr",[s("th",{staticClass:"text-left"},[t._v("Start time")]),s("td",[t._v(t._s(t.start))])])])]},proxy:!0}])})],1)],1),s("div",{staticStyle:{height:"0.5rem"}}),s("v-btn",{staticClass:"btn-sm",attrs:{text:"",fab:"",outlined:"",dark:""},on:{click:t.toggleDialog}},[s("v-icon",{staticClass:"white--text"},[t._v("mdi-information-outline")])],1)],1)},O=[],A={data:function(){return{dialog:!1,start:null,pomodoro:0}},methods:{toggleDialog:function(t){this.dialog=!0,this.start=localStorage.start,this.pomodoro=localStorage.pomodoro}}},z=A,W=s("b0af"),$=s("169a"),U=s("1f4f"),I=Object(b["a"])(z,V,O,!1,null,null,null),N=I.exports;j()(I,{VBtn:p["a"],VCard:W["a"],VCol:k["a"],VDialog:$["a"],VIcon:g["a"],VSimpleTable:U["a"]});var L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-col",{attrs:{cols:"3"}},[s("v-btn",{staticClass:"btn-sm",attrs:{text:"",small:"",fab:"",outlined:"",dark:"",title:"done",disabled:t.isBreakTime},on:{click:t.done}},[s("v-icon",{staticClass:"white--text"},[t._v("mdi-check-bold")])],1)],1)},E=[],P={props:{isBreakTime:Boolean},methods:{done:function(){this.$emit("done")}}},D=P,M=Object(b["a"])(D,L,E,!1,null,null,null),H=M.exports;j()(M,{VBtn:p["a"],VCol:k["a"],VIcon:g["a"]});var Y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-col",{attrs:{cols:"3"}},[s("v-btn",{staticClass:"btn-md",attrs:{text:"",small:"",fab:"",outlined:"",dark:"",title:"count up timer",disabled:t.isTimerActive||t.isBreakTime},on:{click:t.stopWatch}},[s("v-icon",{staticClass:"white--text"},[t._v("mdi-camera-timer ")])],1)],1)},R=[],q={props:{isBreakTime:Boolean,isTimerActive:Boolean},methods:{stopWatch:function(){this.$emit("stopWatch")}}},G=q,J=Object(b["a"])(G,Y,R,!1,null,null,null),F=J.exports;j()(J,{VBtn:p["a"],VCol:k["a"],VIcon:g["a"]});var Z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-col",{attrs:{cols:"3"}},[s("div",{staticClass:"align-center"},[s("v-btn",{staticClass:"btn-sm",attrs:{text:"",small:"",fab:"",outlined:"",dark:"",color:"white",title:"settings",disabled:t.isTimerActive},on:{click:function(e){t.sheet=!0}}},[s("v-icon",{staticClass:"white--text"},[t._v("mdi-settings")])],1)],1),s("div",{staticClass:"text-center"},[s("v-bottom-sheet",{attrs:{persistent:""},model:{value:t.sheet,callback:function(e){t.sheet=e},expression:"sheet"}},[s("v-sheet",{staticClass:"text-center"},[s("v-card-text",[s("div",{staticClass:"title"},[t._v("Work")]),s("div",{staticClass:"body-2"},[t._v(t._s(t.sliderWork))]),s("v-slider",{staticClass:"align-center",attrs:{color:"gray","track-color":"gray","thumb-color":"error",max:t.max,min:t.min},model:{value:t.sliderWork,callback:function(e){t.sliderWork=e},expression:"sliderWork"}})],1),s("v-card-text",[s("div",{staticClass:"title"},[t._v("Short break")]),s("div",{staticClass:"body-2"},[t._v(t._s(t.sliderShortBreak))]),s("v-slider",{staticClass:"align-center",attrs:{color:"gray","track-color":"gray","thumb-color":"error",max:t.max,min:t.min},model:{value:t.sliderShortBreak,callback:function(e){t.sliderShortBreak=e},expression:"sliderShortBreak"}})],1),s("v-card-text",[s("div",{staticClass:"title"},[t._v("Long break")]),s("div",{staticClass:"body-2"},[t._v(t._s(t.sliderLongBreak))]),s("v-slider",{staticClass:"align-center",attrs:{color:"gray","track-color":"gray","thumb-color":"error",max:t.max,min:t.min},model:{value:t.sliderLongBreak,callback:function(e){t.sliderLongBreak=e},expression:"sliderLongBreak"}})],1),s("v-btn",{staticClass:"mt-6",attrs:{color:"error"},on:{click:t.toggleSave}},[t._v("close")]),s("br"),s("br")],1)],1)],1)])},K=[],Q={data:function(){return{sheet:!1,sliderWork:25,sliderShortBreak:5,sliderLongBreak:15,min:1,max:60}},props:{isTimerActive:Boolean},methods:{toggleSave:function(){this.sheet=!1,this.$emit("timerSettings",this.sliderWork,this.sliderShortBreak,this.sliderLongBreak)}}},X=Q,tt=s("288c"),et=s("99d9"),st=s("8dd9"),it=s("ba0d"),at=Object(b["a"])(X,Z,K,!1,null,null,null),rt=at.exports;j()(at,{VBottomSheet:tt["a"],VBtn:p["a"],VCardText:et["a"],VCol:k["a"],VIcon:g["a"],VSheet:st["a"],VSlider:it["a"]});var nt={components:{Reset:y,Information:N,Play:w,Done:H,StopWatch:F,TimerSettings:rt},data:function(){return{initWork:"25",initShortBreak:"05",initLongBreak:"15",isCountUp:!1,isBreakTime:!1,isTimerActive:!1,isOverHour:!1,hour:0,minutes:"25",seconds:"00",timer:null,round:0,isModalOpen:!1}},methods:{toggleTimer:function(){var t=this;function e(){var e=Number(t.$data.seconds),s=Number(t.$data.minutes),i=t.isBreakTime;if(0===e)if(0===s){t.isBreakTime||(localStorage.pomodoro=Number(localStorage.pomodoro)+1),t.seconds="00",i?t.minutes=t.initWork:Number(localStorage.pomodoro)%4==0?t.minutes=t.initLongBreak:t.minutes=t.initShortBreak,t.isBreakTime=!t.isBreakTime,t.$emit("timeUp",t.isBreakTime),clearInterval(t.timer);var r=i?"Break":"Work";new Notification(r,{body:"time up !!"});t.isTimerActive=!t.isTimerActive,a=new Audio("se_maoudamashii_jingle04.mp3"),a.play()}else t.minutes=s<=10?"0".concat(s-1):"".concat(s-1),t.seconds="59";else t.seconds=e<=10?"0".concat(e-1):"".concat(e-1)}function s(){var e=Number(t.$data.seconds),s=Number(t.$data.minutes);t.isBreakTime;59===e?59===s?(t.isOverHour=!0,t.hour++,t.minutes="00",t.seconds="00"):(t.minutes=s<=10?"0".concat(s+1):"".concat(s+1),t.seconds="00"):t.seconds=e<9?"0".concat(e+1):"".concat(e+1)}this.isCountUp?t.isTimerActive?clearInterval(t.timer):t.timer=setInterval(s,1e3):t.isTimerActive?clearInterval(t.timer):t.timer=setInterval(e,1e3),t.isTimerActive=!t.isTimerActive},play:function(){this.isCountUp=!1,this.toggleTimer()},stopWatch:function(){this.hour=0,this.minutes="00",this.seconds="00",this.isOverHour=!1,this.isCountUp=!0,this.toggleTimer()},reset:function(){this.isTimerActive||(this.isBreakTime=!this.isBreakTime),this.isBreakTime?this.minutes=this.initShortBreak:this.minutes=this.initWork,this.isTimerActive=!1,this.isCountUp=!1,this.isOverHour=!1,this.seconds="00",this.$emit("timeUp",this.isBreakTime),clearInterval(this.timer)},done:function(){if(!this.isBreakTime){if(clearInterval(this.timer),this.isCountUp){var t=Number(this.minutes)+Number(60*this.hour),e=Math.floor(t/30);t%30>15&&e++,localStorage.pomodoro=Number(localStorage.pomodoro)+e}else localStorage.pomodoro=Number(localStorage.pomodoro)+1;this.minutes=this.initShortBreak,this.isTimerActive=!1,this.isCountUp=!1,this.isOverHour=!1,this.seconds="00",this.isBreakTime=!0,this.$emit("timeUp",this.isBreakTime)}},timerSettings:function(t,e,s){this.initWork=String(t<10?"0".concat(t):"".concat(t)),this.initShortBreak=String(e<10?"0".concat(e):"".concat(e)),this.initLongBreak=String(s<10?"0".concat(s):"".concat(s)),this.isBreakTime?this.minutes=this.initShortBreak:this.minutes=this.initWork,this.seconds="00",clearInterval(this.timer)}}},ot=nt,ct=(s("4f5e"),s("a523")),lt=s("0fd9"),dt=Object(b["a"])(ot,l,d,!1,null,null,null),mt=dt.exports;j()(dt,{VContainer:ct["a"],VRow:lt["a"]});var ut={components:{Timer:mt},data:function(){return{siteTheme:"#a83232"}},mounted:function(){localStorage.start=c()().format("YYYY/MM/DD HH:mm:ss Z"),localStorage.pomodoro=0},methods:{siteThemeChange:function(t){this.siteTheme=t?"#3eab45":"#a83232"}}},ft=ut,ht=(s("5c0b"),s("7496")),bt=s("40dc"),vt=s("a75b"),jt=s("2fa4"),pt=Object(b["a"])(ft,r,n,!1,null,null,null),kt=pt.exports;j()(pt,{VApp:ht["a"],VAppBar:bt["a"],VContent:vt["a"],VSpacer:jt["a"]});s("5363");var gt=s("f309");i["a"].use(gt["a"]);var Tt=new gt["a"]({icons:{iconfont:"mdi"}});i["a"].config.devtools=!0,i["a"].config.productionTip=!1,new i["a"]({vuetify:Tt,render:function(t){return t(kt)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var i=s("b263"),a=s.n(i);a.a},6318:function(t,e,s){},b263:function(t,e,s){}});
//# sourceMappingURL=app.f40ad8f2.js.map