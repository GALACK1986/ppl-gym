const CACHE="ppl-gym-v5-1";
const CORE=["./","./index.html","./manifest.webmanifest","./icon-192.png","./icon-512.png"];
self.addEventListener("install",e=>{{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)));self.skipWaiting()}});
self.addEventListener("activate",e=>{{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))));self.clients.claim()}});
self.addEventListener("fetch",e=>{{if(e.request.method!=="GET")return;e.respondWith(fetch(e.request).then(r=>{{let c=r.clone();caches.open(CACHE).then(x=>x.put(e.request,c)).catch(()=>{{}});return r}}).catch(()=>caches.match(e.request).then(x=>x||caches.match("./index.html"))))}});
