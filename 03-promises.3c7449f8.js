var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var r=n("iQIUW");const i=document.querySelector(".form"),l=document.querySelector("[name=delay]"),a=document.querySelector("[name=step]"),s=document.querySelector("[name=amount]");i.addEventListener("submit",(function(e){e.preventDefault();let t=parseInt(l.value);const o=parseInt(a.value),n=parseInt(s.value);for(let e=0;e<n;e+=1){let n=1;setTimeout((()=>{var i,l;n+=e,(i=n,l=t,new Promise(((e,t)=>{setTimeout((()=>{const o=Math.random()>.3;o?e({position:i,delay:l}):t({position:i,delay:l})}),l)}))).then((({position:e,delay:t})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{r.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)})),t+=o}))}}));
//# sourceMappingURL=03-promises.3c7449f8.js.map