!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=96)}({165:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t);var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"isLocalStorage",value:function(){try{return void 0!==window.localStorage}catch(e){return!1}}},{key:"getTrackROIRootDomain",value:function(){var e=location.host.split(".").reverse();return"."+e[1]+"."+e[0]}},{key:"setTrackROIItem",value:function(e,t){this.isLocalStorage()&&localStorage.setItem(e,t),this.setTrackROICookie(e,t,1,"/",this.getTrackROIRootDomain())}},{key:"getTrackROIItem",value:function(e){var t=null;return this.isLocalStorage()&&(t=localStorage.getItem(e)),null==t&&(t=this.readTrackROICookie(e)),t}},{key:"readTrackROICookie",value:function(e){for(var t=encodeURIComponent(e)+"=",n=document.cookie.split(";"),r=0;r<n.length;r++){for(var i=n[r];" "===i.charAt(0);)i=i.substring(1,i.length);if(0===i.indexOf(t))return decodeURIComponent(i.substring(t.length,i.length))}return null}},{key:"setTrackROICookie",value:function(e,t,n,r,i,o,a){var s=new Date;s.setTime(s.getTime()),n&&(n=Math.floor(1e3*parseFloat(n)*60*60*24));var c=new Date(s.getTime()+n);document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+(n?";expires="+c.toGMTString():"")+(r?";path="+r:"")+(i?";domain="+i:"")+";secure"+(a?";samesite="+a:";samesite=none")}}],null&&r(t.prototype,null),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"process",value:function(e,t,n,r){var i,o=null!==(i=this.getFbc())&&void 0!==i?i:this.generateFbc(this.getFbclid(location.href)),a=this.getFbp();if(o&&a||r){var s=(new Date).getTime(),c="?WickedClientID="+e+"&WickedEmail="+encodeURIComponent(null!=r?r:"")+"&fbp="+a+"&fbc="+o+"&WickedURL="+t+"&WickedReferrerURL="+n+"&WickedTrackingDate="+s;h.submitRequest("https://track.wickedreports.com/f.php",c)}}},{key:"getFbc",value:function(){return i.readTrackROICookie("_fbc")}},{key:"generateFbc",value:function(e){return e?"fb.1."+this.getEpochTimeInSeconds()+"."+e:""}},{key:"getEpochTimeInSeconds",value:function(){return Math.floor((new Date).getTime()/1e3)}},{key:"getFbclid",value:function(e){var t=k.fullyDecodeURI(e).match(/fbclid=([^\=\&\?]+)/gi);return null!==t?t[0].replace("fbclid=",""):i.readTrackROICookie("fbclid")||""}},{key:"getFbp",value:function(){var e=i.readTrackROICookie("_fbp");return null!=e?e:"fb.1."+this.getEpochTimeInSeconds()+"."+this.getRandomNumber(9999999999,1e9)}},{key:"getRandomNumber",value:function(e,t){return Math.random()*(e-t)+t}}],null&&o(t.prototype,null),n&&o(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var u={spider:1,ArchitextSpider:1,Googlebot:1,TeomaAgent:1,Zyborg:1,Gulliver:1,"Architext spider":1,"FAST-WebCrawler":1,Slurp:1,"Ask Jeeves":1,ia_archiver:1,Scooter:1,Mercator:1,"crawler@fast":1,Crawler:1,"InfoSeek Sidewinder":1,"almaden.ibm.com":1,"appie 1.1":1,augurfind:1,baiduspider:1,bannana_bot:1,bdcindexer:1,docomo:1,frooglebot:1,geobot:1,henrythemiragorobot:1,sidewinder:1,lachesis:1,"moget/1.0":1,"nationaldirectory-webspider":1,naverrobot:1,"ncsa beta":1,netresearchserver:1,"ng/1.0":1,"osis-project":1,polybot:1,pompos:1,seventwentyfour:1,"steeler/1.3":1,szukacz:1,teoma:1,turnitinbot:1,vagabondo:1,"zao/0":1,"zyborg/1.0":1,"Lycos_Spider_(T-Rex)":1,"Lycos_Spider_Beta2(T-Rex)":1,"Fluffy the Spider":1,Ultraseek:1,MantraAgent:1,Moget:1,"T-H-U-N-D-E-R-S-T-O-N-E":1,MuscatFerret:1,VoilaBot:1,"Sleek Spider":1,KIT_Fireball:1,WISEnut:1,WebCrawler:1,"asterias2.0":1,"suchtop-bot":1,YahooSeeker:1,ai_archiver:1,Jetbot:1},d=function(e){var t=2;null!==e.match(/\.(4fd|a|ab|abo|ac|ad|adm|adv|adygeya|aero|agr|agric|agrinet|ah|alt|altai|am|amur|arkhangelsk|arq|art|arts|asn|assn|asso|astrakhan|ato|av|b|bashkiria|bbs|bc|bd|bel|belau|belgorod|bialystok|bio|bir|biz|bj|bl|blog|bmd|bourse|british-library|bryansk|buryatia|busan|c|cat|cbg|cc|chel|chelyabinsk|cherkassy|chernigov|chernovtsy|chita|chukotka|chungbuk|chungnam|chuvashia|cim|city|ck|club|cn|cng|cnt|co|com|conf|consulado|coop|cq|cri|crimea|csiro|cv|cybernet|cym|d|daegu|daejeon|dagestan|db|de|defense|dn|dnepropetrovsk|dni|dnssec|donetsk|dp|dr|e|e-burg|ebiz|ecn|ed|edu|edunet|ekloges|embaixada|eng|ens|ernet|es|esp|est|etc|eti|eun|f|fam|far|fed|fi|fin|firm|fj|flog|fm|fnd|fot|fst|g|g12|game|gangwon|gd|gda|gdansk|geek|gen|ggf|go|gob|gok|gon|gop|gorzow|gos|gouv|gov|govt|gr|grondar|grozny|grp|gs|gub|gv|gwangju|gx|gyeongbuk|gyeonggi|gyeongnam|gz|h|ha|hb|he|health|hi|hl|hn|hotel|hs|i|iaccess|icnet|id|idf|idn|idv|if|imb|imt|in|inca|incheon|ind|inf|info|ing|int|intl|irkutsk|isa|isla|it|its|ivano-frankivsk|ivanovo|iwi|izhevsk|jar|jeju|jeonbuk|jeonnam|jet|jl|jobs|jor|joshkar-ola|js|jus|jx|k|k12|kalmykia|kaluga|kamchatka|karelia|katowice|kazan|kchr|kemerovo|kg|kh|khabarovsk|khakassia|kharkov|kherson|khmelnitskiy|khv|kids|kiev|kirov|kirovograd|km|koenig|komi|kostroma|kr|krakow|kranoyarsk|ks|kuban|kurgan|kursk|kv|l|landesign|law|lea|lel|lg|lipetsk|ln|lodz|ltd|lublin|lugansk|lutsk|lviv|m|magadan|maori|mari|mari-el|marine|mat|mb|me|med|medecin|mi|mil|mincom|mk|mob|mobi|mod|mordovia|mosreg|ms|msk|muni|murmansk|mus|museum|n|nalchik|name|nat|national-library-scotland|nb|ne|nel|net|news|nf|ngo|nhs|nic|nikolaev|nis|nl|nls|nm|nnov|nom|nome|not|notaires|nov|novosibirsk|ns|nsk|nsn|nt|ntr|nu|nx|o|od|odessa|odo|og|olivetti|olsztyn|omsk|on|or|orenburg|org|orgn|oryol|other|p|parliament|parti|pb|pe|penza|per|perm|perso|pharmaciens|pix|pl|plc|plo|pol|police|poltava|poznan|pp|ppg|prd|press|presse|principe|priv|pro|prof|psc|psi|pskov|ptz|pub|publ|pwr|qc|qh|qsl|r|radom|re|rec|red|res|rnd|rnrt|rns|rnu|rochest|rovno|rs|rv|ryazan|s|sa|sakhalin|samara|saotome|saratov|sc|sch|school|sci|scot|sd|sebastopol|sec|seoul|sh|simbirsk|sk|sld|slg|slupsk|smolensk|sn|soc|spb|srv|stavropol|store|stv|sumy|surgut|sx|szczecin|t|tambov|tatarstan|te|tel|ternopil|test|tj|tm|tmp|tom|tomsk|torun|tourism|travel|trd|tsaritsyn|tsk|tula|tur|tuva|tv|tver|tw|tyumen|u|udm|udmurtia|ulan-ude|ulsan|unbi|univ|unmo|unsa|untz|unze|uzhgorod|vet|veterinaire|vinnica|vladikavkaz|vladimir|vladivostok|vlog|vn|volgograd|vologda|voronezh|vrn|vyatka|w|warszawa|waw|web|wiki|wroc|wroclaw|www|x|xj|xz|y|yakutia|yamal|yekaterinburg|yk|yn|yuzhno-sakhalinsk|z|zaporizhzhe|zgora|zhitomir|zj|zlg|zp|zt)\.(ac|ae|af|al|ao|ar|at|au|ba|bb|bh|bn|bo|br|bs|bz|ca|ck|cn|co|cr|cy|do|dz|ec|eg|er|es|et|fj|fk|fr|gg|gh|gn|gr|gt|gu|hk|id|il|in|iq|ir|it|je|jo|jp|ke|kh|ki|km|kn|kr|kw|ky|kz|lb|lk|lr|lv|ly|ma|mc|me|mg|mk|ml|mn|mo|mt|mu|mv|mw|mx|my|mz|na|nf|ng|ni|np|nr|nz|om|pa|pe|ph|pk|pl|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|sl|sn|st|sv|sy|sz|th|tj|tn|tr|tt|tw|tz|ua|ug|uk|us|uy|ve|vi|vn|ye|yu|za|zm)/i)&&(t=3);for(var n=e.split(".");n.length>t;)n.shift();return n.join(".")},f=function(e,t,n){var r=[],i=[];r[0]="google",i[0]="q",r[1]="yahoo",i[1]="p",r[2]="msn",i[2]="q",r[3]="aol",i[3]="query",r[4]="aol",i[4]="encquery",r[5]="lycos",i[5]="query",r[6]="ask",i[6]="q",r[7]="altavista",i[7]="q",r[8]="netscape",i[8]="query",r[9]="cnn",i[9]="query",r[10]="looksmart",i[10]="qt",r[11]="about",i[11]="terms",r[12]="mamma",i[12]="query",r[13]="alltheweb",i[13]="q",r[14]="gigablast",i[14]="q",r[15]="voila",i[15]="rdata",r[16]="virgilio",i[16]="qs",r[18]="baidu",i[18]="wd",r[19]="alice",i[19]="qs",r[20]="yandex",i[20]="text",r[21]="najdi",i[21]="q",r[22]="aol",i[22]="q",r[23]="club-internet",i[23]="query",r[24]="mama",i[24]="query",r[25]="seznam",i[25]="q",r[26]="search",i[26]="q",r[27]="wp",i[27]="szukaj",r[28]="onet",i[28]="qt",r[29]="netsprint",i[29]="q",r[30]="google.interia",i[30]="q",r[31]="szukacz",i[31]="q",r[32]="yam",i[32]="k",r[33]="pchome",i[33]="q",r[34]="kvasir",i[34]="searchExpr",r[35]="sesam",i[35]="q",r[36]="ozu",i[36]="q",r[37]="terra",i[37]="query",r[38]="nostrum",i[38]="query",r[39]="mynet",i[39]="q",r[40]="ekolay",i[40]="q",r[41]="search.ilse",i[41]="search_for",r[42]="bing",i[42]="q",r[43]="facebook",i[43]="q";var o=document.createElement("a"),a=e.split("?")[0].replace("www.","").replace(/https?\:\/\//i,"").replace(/\/+$/,""),s="Direct",c="Direct",l=a,u="Direct";o.href=decodeURIComponent(t.trim());var f=o.hostname.replace("www.","").replace(/https?\:\/\//i,"");if(""!==t.trim()&&!function(e,t){if(t&&t.length>0)for(var n in t){if(null!==t[n].match(/^www\./i)){var r=new RegExp(d(t[n]),"i");if(null!==e.match(r))return!0}var i=new RegExp(t[n],"i");if(null!==e.match(i))return!0}return!1}(f,n)){var p=d(a),m=d(f);if(null===p.match(m)){for(var h in s=f,c="Referral",u="Referral",r)-1<t.toLowerCase().indexOf(r[h])&&(s=r[h].replace(/\b[a-z]/g,(function(e){return e.toUpperCase()})),c="Organic Search",u="Organic");t.match(/facebook/i)&&(s="Facebook",u="Referral",c="Social"),t.match(/linkedin/i)&&(s="LinkedIn",u="Referral",c="Social"),t.match(/instagram/i)&&(s="Instagram",u="Referral",c="Social")}}return(e=-1!==e.indexOf("?")?e+"&":e.replace(/\/+$/,"")+"/?")+"utm_source="+encodeURIComponent(s)+"&utm_medium="+u+"&utm_campaign="+c+"&utm_content="+encodeURIComponent(l)+"&utm_term="+encodeURIComponent("Organic traffic")},p=function(){function e(){s(this,e)}return l(e,null,[{key:"validate",value:function(e,t){return null!==e&&""!==e&&(t?/(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i).test(e)}},{key:"parse",value:function(e){var t=e.match(/([\w-]+(?:[.+][\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)/i);return!!(t&&t.length>0)&&t[0]}}]),e}(),m=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0},h=function(){function e(){s(this,e)}return l(e,null,[{key:"submitRequest",value:function(e,t,n){var r;n||((r=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")).open("GET",e+t,!0),r.setRequestHeader("Content-Type","text/plain"),r.send())}}]),e}(),g=function(){function e(){s(this,e)}return l(e,null,[{key:"wrPush",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=new Date,r=n.getTime(),i=encodeURIComponent(document.location.href),o=decodeURIComponent(document.referrer||""),s="?WickedClientID="+window.wrWidgetSettings.cId+"&WickedEmail="+encodeURIComponent(e)+"&WickedTrackingDate="+r+"&WickedURL="+i+"&WickedReferrerURL="+o;h.submitRequest("https://track.wickedreports.com/"+(t?"test.php":"index.php"),s,t),window.wrWidgetSettings.facebookOCT&&a.process(window.wrWidgetSettings.cId,i,o,encodeURIComponent(e))}},{key:"setupListener",value:function(){window.addEventListener?window.addEventListener("message",this.onMessage,!1):window.attachEvent&&window.attachEvent("onmessage",this.onMessage,!1)}},{key:"onMessage",value:function(t){var n=t.data;"function"==typeof e[n.func]&&-1!==["wrPush"].indexOf(n.func)&&e[n.func].call(null,n.message)}}]),e}(),k=function(){function e(){s(this,e)}return l(e,null,[{key:"isEncoded",value:function(e){e=e||"";try{return e!==decodeURIComponent(e)}catch(e){return!1}}},{key:"fullyDecodeURI",value:function(t){for(;e.isEncoded(t);)t=decodeURIComponent(t);return t}},{key:"encodeOnlyOnce",value:function(t){return encodeURIComponent(e.fullyDecodeURI(t))}}]),e}();function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"captureAffiliate",value:function(e){var t=e.match(/\?[^?]*hop=([^\?=&]*)/i);return t&&t[1]&&(e=e.replace(t[0],t[0]+"&utm_source=ClickBank&utm_medium=Landing Page Traffic&utm_campaign=Affiliate Traffic&utm_content="+t[1]+"&utm_term=ClickBank Affiliate")),e}}],null&&v(t.prototype,null),n&&v(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"processGCIDFor",value:function(e,t,n){for(var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=location.search.substr(1,location.search.length).split("&"),o=0;o<i.length;o++){var a=i[o].split("=");if("gclid"===a[0]){var s="?WickedClientID="+e+"&gclid="+a[1]+"&WickedURL="+t+"&WickedReferrerURL="+n;h.submitRequest("https://track.wickedreports.com/g.php",s,r);break}}}}],null&&b(t.prototype,null),n&&b(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"process",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=arguments.length>5?arguments[5]:void 0,s=i.readTrackROICookie("hubspotutk");if(s){var c=location.pathname+location.search,l=s+"@hubspot.com",u="wickedEmails"+m(c),d=i.readTrackROICookie(u);if(null!==d){if((d=(d=decodeURIComponent(d)).split(",")).indexOf(l)>-1)return}else d=[];d.push(l),i.setTrackROICookie(u,d.join(",").substr(0,1e3),.01,"/",i.getTrackROIRootDomain());var f=new Date,p=f.getTime(),g="?WickedClientID="+e+"&WickedEmail="+encodeURIComponent(l)+"&WickedTrackingDate="+p+"&WickedURL="+t+"&WickedReferrerURL="+n,v=JSON.parse(i.getTrackROIItem("trackfu_null"))||a;null!=v&&"object"==R(v)&&(g+="&WickedNullURL="+k.encodeOnlyOnce(v.url)+"&WickedNullReferrerURL="+k.encodeOnlyOnce(v.referrer)),h.submitRequest("https://track.wickedreports.com/"+(r?"test.php":"index.php"),g,r)}else if(o&&o<30){o+=1;var y=this;setTimeout((function(){y.process(e,t,n,r,o,a)}),500)}}}],null&&I(t.prototype,null),n&&I(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"process",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=arguments.length>4?arguments[4]:void 0,a=decodeURIComponent(t).match(/tx=([0-9A-Z]+)/);if(a&&a.length>1){var s=location.pathname+location.search,c=a[1]+"@paypal.com",l="wickedEmails"+m(s),u=i.readTrackROICookie(l);if(null!==u){if((u=(u=decodeURIComponent(u)).split(",")).indexOf(c)>-1)return}else u=[];u.push(c),i.setTrackROICookie(l,u.join(",").substr(0,1e3),.01,"/",i.getTrackROIRootDomain());var d=new Date,f=d.getTime(),p="?WickedClientID="+e+"&WickedEmail="+encodeURIComponent(c)+"&WickedTrackingDate="+f+"&WickedURL="+t+"&WickedReferrerURL="+n,g=JSON.parse(i.getTrackROIItem("wickedfu_null"))||o;null!=g&&"object"==S(g)&&(p+="&WickedNullURL="+encodeURIComponent(g.url)+"&WickedNullReferrerURL="+encodeURIComponent(g.referrer)),h.submitRequest("https://track.wickedreports.com/"+(r?"test.php":"index.php"),p,r)}}}],null&&T(t.prototype,null),n&&T(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.initialized=!1,this.isMSIE=!1,this.MutationObserver=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,this.widgetSettings=t,this.getReferrer(),this.plugins={ClickBank:y,GoogleAds:w,Hubspot:O,Paypal:C,Facebook:a},this.test=!1,this.pageInputs=[],this.wickedEmails=[]}var t,n;return t=e,(n=[{key:"boot",value:function(){var e=this;if(function(){var e;for(e in u)if(navigator.appVersion.toLowerCase().indexOf(e.toLowerCase())>0)return!0;return!1}())return!1;["local","WickedLoad","readystatechange","DOMContentLoaded","pageshow"].forEach((function(t){window.addEventListener(t,(function(){"readystatechange"===t&&"loaded"!==document.readyState&&"complete"!==document.readyState||e.start()}),!1)})),"undefined"!=typeof jQuery&&jQuery(document).ready((function(){e.start()})),"complete"!==document.readyState&&"loaded"!==document.readyState&&"interactive"!==document.readyState||this.start()}},{key:"start",value:function(){if(this.initialized)return!1;try{var e=location.pathname+location.search,t="wickedEmails"+m(e);i.setTrackROICookie(t,"0",-1e6),p.validate(k.fullyDecodeURI(window.location.href),!0)&&(this.emailAddressField={value:p.parse(k.fullyDecodeURI(window.location.href))}),this.initialized=!0,this.trackPageLoad(),this.setupFieldChangeEvents(),this.widgetSettings.legacyBrowsers||this.setupLegacyBrowsersTracking()}catch(e){}}},{key:"trackPageLoad",value:function(){var e,t,n;if(n=this.widgetSettings.clickBank?this.plugins.ClickBank.captureAffiliate(window.location.href.replace("%20#","?")):window.location.href.replace("%20#","?"),/utm_|wickedid|wickedsource/i.test(n)){var r=!0,o=JSON.parse(i.getTrackROIItem("wickedfu"));null!=o&&"object"==E(o)&&parseInt((new Date).getTime())-parseInt(o.time)<6e4&&-1===location.search.indexOf("utm_source=_WR_tesmode")&&(r=!1),r&&(e={url:n,time:(new Date).getTime(),c:this.widgetSettings.cId},i.setTrackROIItem("wickedfu",JSON.stringify(e)),this.process(!0,e))}else if(this.widgetSettings.organic){var a=JSON.parse(i.getTrackROIItem("wickedfu_null"));(null==a||parseInt((new Date).getTime())-parseInt(a.time)>6e4*this.widgetSettings.minTimeMinutes)&&(t={url:f(n,this.referrer,this.widgetSettings.organicDomains),referrer:this.referrer,time:(new Date).getTime(),c:this.widgetSettings.cId},i.setTrackROIItem("wickedfu_null",JSON.stringify(t)),this.process(!0,null,t))}if(null==this.emailAddressField||r||this.process(!0,e,t),this.widgetSettings.paypalEC&&this.plugins.Paypal.process(this.widgetSettings.cId,this.getEncodedUrl(e),this.referrer,this.test,t),this.widgetSettings.facebookOCT&&this.plugins.Facebook.process(this.widgetSettings.cId,this.getEncodedUrl(e),this.referrer),this.widgetSettings.gClick&&/gclid/i.test(n)){var s=this.getEncodedUrl();this.plugins.GoogleAds.processGCIDFor(this.widgetSettings.cId,s,this.referrer,this.test)}this.widgetSettings.hubspot&&this.plugins.Hubspot.process(this.widgetSettings.cId,this.getEncodedUrl(e),this.referrer,this.test,1,t)}},{key:"setupLegacyBrowsersTracking",value:function(){var e=this;if(setTimeout(this.setupFieldChangeEvents,1e3),setTimeout(this.setupFieldChangeEvents,2e3),this.isMSIE&&setTimeout(this.setupFieldChangeEvents,3e3),new MutationObserver((function(t){e.setupFieldChangeEvents();try{t.forEach((function(t){if(t.addedNodes.length>0)t.addedNodes.forEach((function(t){if("IFRAME"===t.tagName){var n=!1;try{n=t.contentWindow.document||t.contentDocument}catch(e){}!1!==n&&e.setupFieldChangeEvents(n)}}));else{var n=t.target.querySelector("iframe");if(n){var r=!1;try{r=n.contentWindow.document||n.contentDocument}catch(e){}!1!==r&&e.setupFieldChangeEvents(r)}}}))}catch(e){}})).observe(document.querySelector("body"),{childList:!0,attributes:!0,characterData:!0,subtree:!0}),!this.isMSIE){var t=document.getElementsByTagName("body")[0];t.addEventListener("mousemove",(function(){e.setupFieldChangeEvents()})),t.addEventListener("keydown",(function(){e.setupFieldChangeEvents()}))}t.addEventListener("mousedown",(function(){e.setupFieldChangeEvents()}))}},{key:"setupFieldChangeEvents",value:function(e){var t=e||document;try{for(var n=t.getElementsByTagName("input"),r=0;r<n.length;r++){var i=m(n[r].outerHTML+r);this.pageInputs&&-1!==this.pageInputs.indexOf(i)||this.setupEventListenersOn&&(this.setupEventListenersOn(n[r]),this.pageInputs.push(i))}}catch(e){}try{for(var o=document.querySelectorAll("flt-glass-pane"),a=0;a<o.length;a++)for(var s=o[a].shadowRoot.querySelectorAll("input"),c=0;c<s.length;c++){var l=m(s[c].outerHTML+c);this.pageInputs&&-1!==this.pageInputs.indexOf(l)||this.setupEventListenersOn&&(this.setupEventListenersOn(s[c]),this.pageInputs.push(l))}}catch(e){}}},{key:"setupEventListenersOn",value:function(e){var t=this;if("input"!==e.tagName.toLowerCase()||!["text","email","hidden"].includes(e.type))return!1;var n=function(e){p.validate(e.target.value.trim())&&(t.emailAddressField=e.target,t.process(!1))},r=["input","propertychange","change"];e.addEventListener?r.forEach((function(t){e.removeEventListener(t,n,!1),e.addEventListener(t,n,!1)})):e.attachEvent?r.forEach((function(t){e.attachEvent(t,n)})):(this.isMSIE&&(document.oninput=null,document.onpropertychange=null,document.onchange=null),e.oninput=n,e.onpropertychange=n,e.onchange=n),null!==e.value&&""!==e.value&&p.validate(e.value)&&(this.emailAddressField=e,this.process(!1))}},{key:"getEncodedUrl",value:function(e){var t=JSON.parse(i.getTrackROIItem("wickedfu"))||e;return this.wickedUrl=k.fullyDecodeURI(document.location.href),null!=t&&"object"==E(t)&&(this.wickedUrl=null!=t.url&&parseInt(t.c)===this.widgetSettings.cId&&parseInt((new Date).getTime())-parseInt(t.time)<864e5?k.fullyDecodeURI(t.url):this.wickedUrl),k.encodeOnlyOnce(this.wickedUrl)}},{key:"process",value:function(e,t,n){try{if(null!=this.emailAddressField&&this.emailAddressField.value.length>0||e){var r=this.getEncodedUrl(t),o=(new Date).getTime(),a=this.emailAddressField?this.emailAddressField.value.trim():"",s=location.pathname+location.search,c="wickedEmails"+m(s),l=i.readTrackROICookie(c);if((l=(l=null!=l?(l=decodeURIComponent(l)).split(","):[]).concat(this.wickedEmails)).indexOf(a)>-1)return;""!==a&&(l.push(a),this.wickedEmails.push(a),this.widgetSettings.facebookOCT&&this.plugins.Facebook.process(this.widgetSettings.cId,this.getEncodedUrl(t),this.referrer,a)),l.length>0&&i.setTrackROICookie(c,l.join(",").substr(0,1e3),.01,"/",i.getTrackROIRootDomain());var u="?WickedClientID="+this.widgetSettings.cId+"&WickedEmail="+encodeURIComponent(a)+"&WickedTrackingDate="+o+"&WickedURL="+r+"&WickedReferrerURL="+this.referrer,d=JSON.parse(i.getTrackROIItem("wickedfu_null"))||n;null!=d&&"object"==E(d)&&(u+="&WickedNullURL="+k.encodeOnlyOnce(d.url)+"&WickedNullReferrerURL="+k.encodeOnlyOnce(d.referrer)),this.submitTrackRequest(u)}}catch(e){}}},{key:"submitTrackRequest",value:function(e){h.submitRequest("https://track.wickedreports.com/"+(this.isLiveMode(e)?"index.php":"test.php"),e,this.test)}},{key:"isLiveMode",value:function(e){return-1===decodeURIComponent(e).indexOf("testing@wickedreports.com")&&-1===location.search.indexOf("utm_source=_WR_tesmode")&&-1===decodeURIComponent(this.referrer).indexOf("utm_source=_WR_tesmode")&&-1===this.wickedUrl.indexOf("utm_source=_WR_tesmode")}},{key:"getReferrer",value:function(){this.referrer=decodeURIComponent(document.referrer||""),this.referrer&&"undefined"!==this.referrer.trim()?this.referrer=encodeURIComponent(this.referrer):this.referrer=""}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();!function(e,t,n){new j(e.wrWidgetSettings).boot()}(window,document),window._wr=g||[],window._wr.setupListener()},96:function(e,t,n){e.exports=n(165)}});