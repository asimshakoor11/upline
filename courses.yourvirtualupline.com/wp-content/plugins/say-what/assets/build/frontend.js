(()=>{"use strict";window.wp.hooks;const t={gettext:(e,a,n)=>t.handle(e,a,a,void 0,void 0,n),gettext_with_context:(e,a,n,o)=>t.handle(e,a,a,void 0,n,o),ngettext:(e,a,n,o,i)=>t.handle(e,a,n,o,void 0,i),ngettext_with_context:(e,a,n,o,i,d)=>t.handle(e,a,n,o,i,d),has_translation(e,a,n,o){const i=t.handle(a,a,a,void 0,n,o)!==a;return e||i},handle(t,e,a,n,o,i){void 0===i&&(i=""),void 0===o&&(o="");let d=i+"|"+a+"|"+o;return void 0!==n&&1!==n||(d=i+"|"+e+"|"+o),void 0!==window.say_what_data.replacements[d]?window.say_what_data.replacements[d]:t}};wp.hooks.addFilter("i18n.gettext","say-what",t.gettext,99),wp.hooks.addFilter("i18n.ngettext","say-what",t.ngettext,99),wp.hooks.addFilter("i18n.gettext_with_context","say-what",t.gettext_with_context,99),wp.hooks.addFilter("i18n.ngettext_with_context","say-what",t.ngettext_with_context,99),wp.hooks.addFilter("i18n.has_translation","say-what",t.has_translation,99)})();