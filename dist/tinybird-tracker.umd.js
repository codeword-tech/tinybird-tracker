!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self).tinybirdTrackerJs=n()}(this,function(){return function(){var e,n,t,r,o,i=this.localStorage,s=function(e){for(var n=document.cookie.split(";"),t=0;t<n.length;++t){for(var r=n[t];" "===r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf("_track="))return r.substring("_track=".length,r.length)}return null}(),a=JSON.parse(i.getItem("tinybird_events")||"[]"),u=x(),c=!1;function f(n){if(!c)if(a.length>0){c=!0;var r=o+"/v0/datasources?mode=append&name="+t+"&token="+e,s=new FormData;s.append("csv",a.map(function(e){return e.map(function(e){return"string"==typeof e?('"'===(e=e.replace(/\"/g,'""'))[0]&&'"'===e[e.length-1]||(e='"'+e+'"'),e):e}).join(",")}).join("\n")),function(e,n){return n=n||{},new Promise(function(t,r){var o=new XMLHttpRequest,i=[],s=[],a={},u=function(){return{ok:2==(o.status/100|0),statusText:o.statusText,status:o.status,url:o.responseURL,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(JSON.parse(o.responseText))},blob:function(){return Promise.resolve(new Blob([o.response]))},clone:u,headers:{keys:function(){return i},entries:function(){return s},get:function(e){return a[e.toLowerCase()]},has:function(e){return e.toLowerCase()in a}}}};for(var c in o.open(n.method||"get",e,!0),o.onload=function(){o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){i.push(n=n.toLowerCase()),s.push([n,t]),a[n]=a[n]?a[n]+","+t:t}),t(u())},o.onerror=r,o.withCredentials="include"==n.credentials,n.headers)o.setRequestHeader(c,n.headers[c]);o.send(n.body||null)})}(r,{method:"POST",body:s}).then(function(e){return e.json()}).then(function(e){e?(a=[],i.setItem("tinybird_events","[]"),l(2e3,5)):u(),c=!1}).catch(function(){u()})}else l(2e3,5);function u(){n>0&&(c=!1,l(2e3,n-1))}}function l(e,n){setTimeout(function(){f(n)},e)}function d(e){function t(e){if(!Array.isArray(e))throw new Error("Only array events are allowed");!function(){var e=Array.prototype.slice.call(arguments)[0],t=[x(),u,n,s,document.location.href,navigator.userAgent].concat(e);t.length<14&&(t=t.concat(Array(14-t.length).fill(""))),a.push(t),"pageload"===e[0]&&f()}(e)}if(e){if(!Array.isArray(e))throw new Error("Events can only be sent as an array");for(var r=0,o=e.length;r<o;r++)t(Array.prototype.slice.call(e[r]))}}function p(){i.setItem("tinybird_events",JSON.stringify(a)),f()}function x(e){return(e=e||new Date).toISOString().replace("T"," ").split(".")[0]}function h(e,n){n||(n=document.currentScript&&document.currentScript.src||""),e=e.replace(/[\[\]]/g,"\\$&");var t=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(n);return t?t[2]?decodeURIComponent(t[2].replace(/\+/g," ")):"":null}s||(s="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var n=16*Math.random()|0;return("x"==e?n:3&n|8).toString(16)}),document.cookie="_track="+(s||"")+"; path=/"),this.addEventListener("beforeunload",p),this.addEventListener("unload",p,!1),function(){if(!h("t"))throw new Error("token is needed for sending events");e=h("t"),n=h("a")||"main",r=h("f")||"tbt",t=h("da")||"tracker",o=h("h")||"https://api.tinybird.co"}(),d(this[r]),this[r]={push:function(e){d(arguments.length>1?Array.prototype.slice.call(arguments):[e])}},l(2e3,5)}()});
//# sourceMappingURL=tinybird-tracker.umd.js.map
