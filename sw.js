const CACHE='granada-v5';
const ARCHIVOS=['./','./index.html','./manifest.webmanifest',
  './icono-192.png','./icono-512.png','./icono-maskable.png'];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ARCHIVOS)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(k=>Promise.all(
    k.filter(n=>n!==CACHE).map(n=>caches.delete(n)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  const u=new URL(e.request.url);
  if(u.origin!==location.origin) return;
  e.respondWith(
    caches.match(e.request).then(hit=>hit||fetch(e.request).then(r=>{
      const copia=r.clone();
      caches.open(CACHE).then(c=>c.put(e.request,copia));
      return r;
    }).catch(()=>caches.match('./index.html')))
  );
});
