"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/dinos/index.html","aa9087ae1bf7f8f5c26a98cb10a4b958"],["/dinos/static/css/main.a5fd882b.css","9a4a264c3f19d6d2813d25888aaf04e2"],["/dinos/static/js/main.aff64454.js","7d93134834b3b89fa07cee1b8d66c283"],["/dinos/static/media/abelisaurus.dcf4d082.svg","dcf4d082e134d52ac12acb63a9497a0f"],["/dinos/static/media/aerosteon.eef472d0.svg","eef472d005ca9652a0d653d3e8cdfb80"],["/dinos/static/media/albertosaurus.bb4816a3.svg","bb4816a3e85002d2a92ef7e3bb3f5429"],["/dinos/static/media/allosaurus.acae7e4a.svg","acae7e4ae23111e09d916633c1e41ca0"],["/dinos/static/media/archaeopteryx.ac9308f1.svg","ac9308f177d81f7dfd3e121e5390a3ef"],["/dinos/static/media/argentinosaurus.6d94796c.svg","6d94796cac607ff05dc44884569ab67e"],["/dinos/static/media/baryonyx.f5ea19cf.svg","f5ea19cf10428e2c4737b7a88462a535"],["/dinos/static/media/brachiosaurus.bb0697f2.svg","bb0697f23ce5c1051dfb8759034a807a"],["/dinos/static/media/camarosaurus.8ec3a730.svg","8ec3a730496cdfcbaffd8755265368ac"],["/dinos/static/media/camptosaurus.e6f961d5.svg","e6f961d5b193367fa571c1f7dd2aff8a"],["/dinos/static/media/carcharodontosaurus.aa251c33.svg","aa251c338650d26e861e8cd933532079"],["/dinos/static/media/caudipteryx.16921e0f.svg","16921e0f805309fcf0be6a4f56a40c53"],["/dinos/static/media/centrosaurus.f477cc8d.svg","f477cc8d0e97b0f9788dd6d5f5b3156c"],["/dinos/static/media/cetiosaurus.739beb31.svg","739beb31794820313ca91d3a3e3a09af"],["/dinos/static/media/chasmosaurus.cff06414.svg","cff06414f9bd36e3afe3fb6ad2a4e68e"],["/dinos/static/media/citipati.822220f9.svg","822220f9d2ce059a5d1f3de38cbddf15"],["/dinos/static/media/claosaurus.0b9fc3c6.svg","0b9fc3c6d3b8760484c96eb4a2f097b2"],["/dinos/static/media/daspletosaurus.82bcfd3b.svg","82bcfd3b3e31c3253dda452247171250"],["/dinos/static/media/deinonychus.d93506e9.svg","d93506e9154074fe09d866fbbcb2702d"],["/dinos/static/media/dilong.f350b370.svg","f350b3702ed4c8bee02e3e09f1d9973e"],["/dinos/static/media/diplodocus.924b3838.svg","924b38386ed3808edf8b33d8ed87670d"],["/dinos/static/media/edmontosaurus.197dcae2.svg","197dcae2d8e126f2a567c7be4967ab52"],["/dinos/static/media/elasmosaurus.af589e1d.svg","af589e1d4f16b486c9fb3107dcf70372"],["/dinos/static/media/epidexipteryx.2f35d283.svg","2f35d283c88dd70b0f9c995353f4c159"],["/dinos/static/media/eromangasaurus.27705388.svg","27705388886afb200270f1e07ede1102"],["/dinos/static/media/gigantoraptor.d8b46bda.svg","d8b46bda3236e6e12d987c411bdb2d96"],["/dinos/static/media/giraffatitan.75bbace2.svg","75bbace2730d54e383270709160fb620"],["/dinos/static/media/iguanodon.fd50e95a.svg","fd50e95a1a2926395d2eb6f44fd46f36"],["/dinos/static/media/irritator.d08137b9.svg","d08137b9467d0f7a6bf8abf71b6993c6"],["/dinos/static/media/leyesaurus.15e1268d.svg","15e1268dbae24ecb355f9626f452bd2e"],["/dinos/static/media/magyarosaurus.9983aa6a.svg","9983aa6ae7cd20539088e37b814562b0"],["/dinos/static/media/main-illustration.6ceebd23.jpg","6ceebd2322dd291af80329aa4ae3aa00"],["/dinos/static/media/majungasaurus.0289b9cd.svg","0289b9cd64ce11fef3363bcd06416803"],["/dinos/static/media/mamenchisaurus.e30cd21f.svg","e30cd21fbc22469a71610f178388997e"],["/dinos/static/media/mapusaurus.24c6c071.svg","24c6c071c8a088c3a2bdd989159c1100"],["/dinos/static/media/massospondylus.1deca8ec.svg","1deca8ec6aff59dedb3ae7c407e5554f"],["/dinos/static/media/megalosaurus.ef401ee7.svg","ef401ee7604b4b4125079a8dad3a7f09"],["/dinos/static/media/microraptor.fcae2c95.svg","fcae2c95dba36928229d2c1b54ba7700"],["/dinos/static/media/monoclonius.af32de3e.svg","af32de3e287ba277ba11168a7f25816b"],["/dinos/static/media/plateosaurus.341ddb90.svg","341ddb90c478c9601f4b4c45031314fd"],["/dinos/static/media/pterodactyl.6b036256.svg","6b036256527e518abc5d5b0796fac2ad"],["/dinos/static/media/spinosaurus.d87c8e51.svg","d87c8e513784d84adc957ba909f12001"],["/dinos/static/media/tyrannosaurusRex.213710f3.svg","213710f33032d94ec4178ce1ff8018bf"],["/dinos/static/media/velociraptor.1403c37e.svg","1403c37eeadca3cee4fb145e4ec4d5d7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var s=new URL(e);return"/"===s.pathname.slice(-1)&&(s.pathname+=a),s.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,s,t){var c=new URL(e);return t&&c.pathname.match(t)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(s)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var s=new URL(a).pathname;return e.some(function(e){return s.match(e)})},stripIgnoredUrlParameters=function(e,a){var s=new URL(e);return s.hash="",s.search=s.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),s.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],s=e[1],t=new URL(a,self.location),c=createCacheKey(t,hashParamName,s,/\.\w{8}\./);return[t.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(s){if(!a.has(s)){var t=new Request(s,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+s+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(s,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(s){return Promise.all(s.map(function(s){if(!a.has(s.url))return e.delete(s)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,s=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(s))||(s=addDirectoryIndex(s,"index.html"),a=urlsToCacheKeys.has(s));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(s=new URL("/dinos/index.html",self.location).toString(),a=urlsToCacheKeys.has(s)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(s)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});