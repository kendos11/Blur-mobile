const C='blur-v1';self.addEventListener('install',()=>self.skipWaiting());self.addEventListener('activate',e=>e.waitUntil(clients.claim()));
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET'||!r.url.startsWith(self.location.origin))return;
e.respondWith(caches.open(C).then(async c=>{const hit=await c.match(r);if(hit&&/\.bin($|\?)/.test(r.url))return hit;try{const res=await fetch(r);if(res.ok)c.put(r,res.clone());return res}catch(_){return hit||Response.error()}}))});
