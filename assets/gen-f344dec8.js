var n=(s,t,a)=>new Promise((i,e)=>{var l=o=>{try{d(a.next(o))}catch(c){e(c)}},r=o=>{try{d(a.throw(o))}catch(c){e(c)}},d=o=>o.done?i(o.value):Promise.resolve(o.value).then(l,r);d((a=a.apply(s,t)).next())});import{n as v}from"./index-15cbd143.js";const _={data(){return{loading:!1}},mounted(){this.loading=!0;const s="https://api.thelittleredridinghood.com/story/",t={theme:"注意安全",key_words:["滑滑梯","下雨"]};function a(){return n(this,arguments,function*(i="",e={}){return(yield fetch(i,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(e)})).json()})}a(s,t).then(i=>{this.loading=!0,console.log(i)}).catch(i=>{this.loading=!0,console.log(i,11)})}};var C=function(){var t=this,a=t._self._c;return a("main",{key:"33"},[t.loading?a("div",{staticClass:"loading",attrs:{id:"loading"}},[a("h1",{staticClass:"loading-text"},[t._v("故事生成中...")]),t._m(0)]):a("div",{staticClass:"my-story"},[t._m(1),t._m(2)])])},p=[function(){var s=this,t=s._self._c;return t("div",{staticClass:"loader"},[t("div",{staticClass:"dot"}),t("div",{staticClass:"dot"}),t("div",{staticClass:"dot"}),t("div",{staticClass:"dot"}),t("div",{staticClass:"dot"}),t("div",{staticClass:"dot"}),t("div",{staticClass:"dot"}),t("div",{staticClass:"dot"}),t("div",{staticClass:"dot"}),t("div",{staticClass:"dot"}),t("div",{staticClass:"dot"}),t("div",{staticClass:"dot"}),t("div",{staticClass:"dot"}),t("div",{staticClass:"dot"}),t("div",{staticClass:"dot"}),t("div",{staticClass:"dot"}),t("div",{staticClass:"dot"}),t("div",{staticClass:"dot"}),t("div",{staticClass:"dot"}),t("div",{staticClass:"dot"}),t("div",{staticClass:"dot"}),t("div",{staticClass:"dot"}),t("div",{staticClass:"dot"}),t("div",{staticClass:"dot"}),t("div",{staticClass:"dot"})])},function(){var s=this,t=s._self._c;return t("section",[t("p",[s._v(" 总结一波我日常使用的AI工具： 1. 写文章用Claude模型（100k上下文一次可以输出一整篇文章），背后是poe.com（付费，一个月150左右） 2. 写代码用copilot（模型是gpt-3.5），虽然不够聪明，但能联系整个项目的workspace提供建议（付费，我的是微软送的） 3. 问问题用GPT-4，背后是poe.com 4. 查资料用https://www.perplexity.ai/ ，免费，他能全网搜索我需要的主题，并给出引用地址 5. 问编程相关问题除了GPT-4，还能用 https://devv.ai/ ，免费，针对编程问题有优化 ")])])},function(){var s=this,t=s._self._c;return t("div",{staticClass:"phonation"},[t("div",{staticClass:"item-1"},[t("img",{attrs:{src:require(""),alt:""}})])])}],m=v(_,C,p,!1,null,"4ea580c1",null,null);const f=m.exports;export{f as default};