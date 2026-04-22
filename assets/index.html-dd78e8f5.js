import{_ as n,b as a,p as s,A as i,B as u}from"./_plugin-vue_export-helper-836e8f2f.js";const l={},m={class:"text-center"};function p(o,e){return s(),a("div",m,"请先登录豆瓣")}const f=n(l,[["render",p]]);i(f).mount("#app");(async function(){var o;if(await u()){const[e]=await chrome.tabs.query({active:!0});e&&((o=e.url)!=null&&o.includes("douban.com/group/topic/"))&&chrome.storage.local.set({tabUrl:e.url}),window.open(chrome.runtime.getURL("src/main/index.html"))}})();self.onerror=function(o,e,r,t,c){console.info(`Error: ${o}
Source: ${e}
Line: ${r}
Column: ${t}
Error object: ${c}`)};
