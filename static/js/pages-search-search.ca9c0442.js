(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-search-search"],{5363:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{searchList:[],keywords:""}},onLoad:function(){var t=this,e=t.serverUrl;uni.request({url:e+"/search/hot/detail",method:"GET",success:function(e){if(200==e.data.code){var i=e.data.data;t.searchList=i}}})},methods:{goBack:function(){history.back()},goserarchsong:function(t){uni.navigateTo({url:"../searchsong/searchsong?value="+t})},SearchSong:function(t){var e=this,i=t.detail.value;e.Search(i)},Search:function(t){var e=this;e.goserarchsong(t)},searchMe:function(t){var e=this,i=e.serverUrl,a=t.detail.value;uni.request({url:i+"/search/suggest?type=mobile&keywords="+a,method:"GET",success:function(t){if(200==t.data.code)t.data.result}})}}};e.default=a},a3d0:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"search-box"},[i("v-uni-view",{staticClass:"search-input"},[i("v-uni-input",{staticClass:"input",attrs:{type:"text",focus:"true","placeholder-style":"color:#ababab;","confirm-type":"search"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.SearchSong.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.searchMe.apply(void 0,arguments)}}})],1),i("v-uni-text",{staticClass:"search-box-icon text-black cuIcon-people"})],1),i("v-uni-view",{staticClass:"hot-search-title"},[t._v("热搜榜")]),i("v-uni-view",{staticClass:"hot-search-list"},t._l(t.searchList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"search-list",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.Search(e.searchWord)}}},[i("v-uni-view",{staticClass:"search-list-left"},[i("v-uni-view",{staticClass:"search-rank"},[t._v(t._s(a+1))]),i("v-uni-view",{staticClass:"search-list-title"},[i("v-uni-view",{staticClass:"search-list-name"},[t._v(t._s(e.searchWord))]),i("v-uni-view",{staticClass:"search-list-msg"},[t._v(t._s(e.content))])],1)],1),i("v-uni-view",{staticClass:"search-list-right"},[i("v-uni-image",{staticClass:"icon",attrs:{src:e.iconUrl}}),t._v(t._s(e.score))],1)],1)})),1),i("v-uni-view",{staticClass:"last"},[t._v("没有啦 ~")])],1)},s=[]},a95a:function(t,e,i){"use strict";i.r(e);var a=i("a3d0"),n=i("bfeb");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("e914");var c,r=i("f0c5"),o=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"31b772c8",null,!1,a["a"],c);e["default"]=o.exports},bb11:function(t,e,i){var a=i("fb1c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("0e950856",a,!0,{sourceMap:!1,shadowMode:!1})},bfeb:function(t,e,i){"use strict";i.r(e);var a=i("5363"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},e914:function(t,e,i){"use strict";var a=i("bb11"),n=i.n(a);n.a},fb1c:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".status-bar[data-v-31b772c8]{height:0;width:100%}.search-box[data-v-31b772c8]{width:100%;height:%?90?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 %?25?%}.search-box-icon[data-v-31b772c8]{padding-top:15px;width:26px;height:26px}.search-input[data-v-31b772c8]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:100%;margin:0 %?25?%;padding:0 %?15?%;border-bottom:1px solid #d7d7d7}.search-input .input[data-v-31b772c8]{width:100%;height:100%;font-size:20px}.hot-search-title[data-v-31b772c8]{width:100%;height:%?60?%;margin-top:%?60?%;line-height:%?60?%;margin-left:%?25?%}.hot-search-list[data-v-31b772c8]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background-color:#fff}.hot-search-list .search-list[data-v-31b772c8]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 %?25?%;margin-top:%?25?%}.search-list-left[data-v-31b772c8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.search-rank[data-v-31b772c8]{width:%?100?%;height:%?100?%;text-align:center;font-size:20px;line-height:%?100?%;color:#ababab}.search-list-title[data-v-31b772c8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-left:%?20?%}.search-list-name[data-v-31b772c8]{font-size:16px;font-weight:500;color:#505050;width:%?450?%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.search-list-msg[data-v-31b772c8]{font-size:12px;color:#ababab;margin-top:%?10?%;width:%?450?%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.search-list-right[data-v-31b772c8]{font-size:10px;color:#c5c5c5;padding-right:%?25?%}.last[data-v-31b772c8]{width:100%;height:%?80?%;text-align:center;font-size:12px;color:#ababab;padding-top:%?10?%;line-height:%?60?%;background-color:#fff}.icon[data-v-31b772c8]{width:%?30?%;height:%?30?%}",""]),t.exports=e}}]);