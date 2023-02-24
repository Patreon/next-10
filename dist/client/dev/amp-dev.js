"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _eventSourcePolyfill=_interopRequireDefault(require("./event-source-polyfill"));var _eventsource=require("./error-overlay/eventsource");var _onDemandEntriesUtils=require("./on-demand-entries-utils");var _fouc=require("./fouc");/* globals __webpack_hash__ */if(!window.EventSource){window.EventSource=_eventSourcePolyfill.default;}const data=JSON.parse(document.getElementById('__NEXT_DATA__').textContent);let{assetPrefix,page}=data;assetPrefix=assetPrefix||'';let mostRecentHash=null;/* eslint-disable-next-line */let curHash=__webpack_hash__;const hotUpdatePath=assetPrefix+(assetPrefix.endsWith('/')?'':'/')+'_next/static/webpack/';// Is there a newer version of this code available?
function isUpdateAvailable(){// __webpack_hash__ is the hash of the current compilation.
// It's a global variable injected by Webpack.
/* eslint-disable-next-line */return mostRecentHash!==__webpack_hash__;}// Webpack disallows updates in other states.
function canApplyUpdates(){return module.hot.status()==='idle';}// This function reads code updates on the fly and hard
// reloads the page when it has changed.
async function tryApplyUpdates(){if(!isUpdateAvailable()||!canApplyUpdates()){return;}try{const res=await fetch(`${hotUpdatePath}${curHash}.hot-update.json`);const jsonData=await res.json();const curPage=page==='/'?'index':page;// webpack 5 uses an array instead
const pageUpdated=(Array.isArray(jsonData.c)?jsonData.c:Object.keys(jsonData.c)).some(mod=>{return mod.indexOf(`pages${curPage.substr(0,1)==='/'?curPage:`/${curPage}`}`)!==-1||mod.indexOf(`pages${curPage.substr(0,1)==='/'?curPage:`/${curPage}`}`.replace(/\//g,'\\'))!==-1;});if(pageUpdated){document.location.reload(true);}else{curHash=mostRecentHash;}}catch(err){console.error('Error occurred checking for update',err);document.location.reload(true);}}(0,_eventsource.addMessageListener)(event=>{if(event.data==='\uD83D\uDC93'){return;}try{const message=JSON.parse(event.data);if(message.action==='sync'||message.action==='built'){if(!message.hash){return;}mostRecentHash=message.hash;tryApplyUpdates();}else if(message.action==='reloadPage'){document.location.reload(true);}}catch(ex){console.warn('Invalid HMR message: '+event.data+'\n'+ex);}});(0,_onDemandEntriesUtils.setupPing)(assetPrefix,()=>page);(0,_fouc.displayContent)();
//# sourceMappingURL=amp-dev.js.map