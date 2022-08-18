var tinybirdTrackerJs=function(){var e=function(e){var t=e.document,n=e.localStorage;if(e&&e.document&&e.document.currentScript){var i=(P("api")||"https://api.tinybird.co")+"/v0/events",r=P("source"),o=P("token"),s="false"!==P("cookie-enabled"),u=P("cookie-domain")||e.location.hostname,a=P("function")||"tinybird";if(!r)throw new Error("'dataSource' name is required to start sending events");if(!o)throw new Error("'token' is required to start sending events");var c,d,f="tinybird",l="tinybird_events",x="tinybird_last_activity",v=1e3,g=N(f),h=JSON.parse(n.getItem(l)||"[]"),m="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}),p=L(),b=!1;if(s)if(g){var y=function(e){if(e){var t=e.split(":");if(2===t.length)return{id:t[0],sessionStart:parseInt(t[1],10)}}return null}(N(f));y?(m=y.id,p=y.sessionStart):M(f,E(m,p))}else M(f,E(m,p));else g&&(e.document.cookie=f+"=; path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; domain="+u);void 0!==t.hidden?(c="hidden",d="visibilitychange"):void 0!==t.msHidden?(c="msHidden",d="msvisibilitychange"):void 0!==t.webkitHidden&&(c="webkitHidden",d="webkitvisibilitychange"),e.addEventListener("beforeunload",U),e.addEventListener("unload",U,!1),t.addEventListener(d,function(){t[c]||H()},!1),H();var S=e[a]||[];e[a]=O;for(var w=0;w<S.length;w++)O.apply(this,S[w]);k(v,5)}function T(e){function t(){e>0&&(b=!1,k(v,e-1))}b||(h.length>0?(b=!0,function(e,t){return t=t||{},new Promise(function(n,i){var r=new XMLHttpRequest,o=[],s=[],u={},a=function(){return{ok:2==(r.status/100|0),statusText:r.statusText,status:r.status,url:r.responseURL,text:function(){return Promise.resolve(r.responseText)},json:function(){return Promise.resolve(r.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([r.response]))},clone:a,headers:{keys:function(){return o},entries:function(){return s},get:function(e){return u[e.toLowerCase()]},has:function(e){return e.toLowerCase()in u}}}};for(var c in r.open(t.method||"get",e,!0),r.onload=function(){r.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,t,n){o.push(t=t.toLowerCase()),s.push([t,n]),u[t]=u[t]?u[t]+","+n:n}),n(a())},r.onerror=i,r.withCredentials="include"==t.credentials,t.headers)r.setRequestHeader(c,t.headers[c]);r.send(t.body||null)})}(i+"?name="+r+"&token="+o,{method:"POST",body:I(h)}).then(function(e){var i=e?e.status:0;200===i||202===i?(h=[],n.setItem(l,JSON.stringify([])),k(v,5)):t(),b=!1}).catch(function(e){t()})):k(v,5))}function k(e,t){setTimeout(function(){T(t)},e)}function C(){n.setItem(x,JSON.stringify(L()))}function O(e,t){var n=L(),i=t||{};i.event=e||"",i.timestamp=J(n),i.session_start=J(p),i.uuid=s?m:"",h.push(i),C()}function U(){n.setItem(l,JSON.stringify(h)),T()}function H(){var e=L(),t=n.getItem(x);null!==t&&e-parseInt(t,10)>18e5&&(p=e,s&&M(f,E(m,p)),C())}function I(e){return e.map(e=>JSON.stringify(e)).join("\n")}function J(e){return new Date(e).toISOString().replace("T"," ").split(".")[0]}function L(){var e=new Date;return Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds())}function E(e,t){return e+":"+t}function M(t,n){e.document.cookie=t+"="+(n||"")+"; path=/; domain="+u}function N(t){var n=t+"=";if(e.document.cookie)for(var i=e.document.cookie.split(";"),r=0;r<i.length;++r){for(var o=i[r];" "===o.charAt(0);)o=o.substring(1,o.length);if(0===o.indexOf(n))return o.substring(n.length,o.length)}return null}function P(e){return t.currentScript.getAttribute("data-"+e)}};return e(window),e}();
//# sourceMappingURL=tinybird-tracker.js.map
