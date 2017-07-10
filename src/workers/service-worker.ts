self.addEventListener('install', (event) => {
    console.log('SW installed at', new Date().toLocaleTimeString());
    self['skipWaiting']();
});

self.addEventListener('activate', (event) => {
    console.log('SW activated at', new Date().toLocaleTimeString());
});

self.addEventListener('fetch', (event) => {
    console.log(event.request.url);
    if (!navigator.onLine) {
        event.respondWith(
            new Response(
                `<style>body {
                    font-family: 'arial';
                    color: #fff;
                    padding: 0;
                    font-size: 13px;
                    background-color: #2BB5FD;
                    display: block;
                }</style>
                <h1> Offline </h1>
                `
            , { headers: { 'Content-Type': 'text/html' } }))
    }
    event.respondWith(fetch(event.request)); // Explicit service request passthrough;
})