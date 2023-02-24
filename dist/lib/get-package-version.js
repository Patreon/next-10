"use strict";exports.__esModule=true;exports.getPackageVersion=getPackageVersion;var _fs=require("fs");var _findUp=_interopRequireDefault(require("next/dist/compiled/find-up"));var _json=_interopRequireDefault(require("next/dist/compiled/json5"));var path=_interopRequireWildcard(require("path"));function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap();_getRequireWildcardCache=function(){return cache;};return cache;}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}let cachedDeps;async function getDependencies({cwd}){if(cachedDeps){return cachedDeps;}const configurationPath=await(0,_findUp.default)('package.json',{cwd});if(!configurationPath){return cachedDeps={dependencies:{},devDependencies:{}};}const content=await _fs.promises.readFile(configurationPath,'utf-8');const packageJson=_json.default.parse(content);const{dependencies={},devDependencies={}}=packageJson||{};return cachedDeps={dependencies,devDependencies};}async function getPackageVersion({cwd,name}){const{dependencies,devDependencies}=await getDependencies({cwd});if(!(dependencies[name]||devDependencies[name])){return null;}const cwd2=cwd.endsWith(path.posix.sep)||cwd.endsWith(path.win32.sep)?cwd:`${cwd}/`;try{var _JSON5$parse$version;const targetPath=require.resolve(`${name}/package.json`,{paths:[cwd2]});const targetContent=await _fs.promises.readFile(targetPath,'utf-8');return(_JSON5$parse$version=_json.default.parse(targetContent).version)!=null?_JSON5$parse$version:null;}catch(_unused){return null;}}
//# sourceMappingURL=get-package-version.js.map