self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open('static')
            .then(function(cache){
                cache.addAll([
                    '/',
                    '/index.html',
                    '/favicon.ico',
                    '/assets/js/app.js',
                    '/assets/css/style.css',
                    '/assets/icons/app-icon-144x144.png',
                    'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap',

                ])
            })
    )
});
self.addEventListener('activate', function(event){
    console.log('[Service Worker] Activating Service Worker', event);
    return self.clients.claim();
});
self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request)
            .then(function(response){
                if(response){
                    return response;
                }else{
                    return fetch(event.request)
                        .then(function(res){
                            return caches.open('dynamic')
                                .then(function(cache){
                                    cache.put(event.request.url, res.clone())
                                    return res;
                                })
                        })
                }
            })
    )
});