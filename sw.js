self.addEventListener('install', function(e) {
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', function(e) {
  var url = new URL(e.request.url);

  if (url.pathname.includes('/assets/LOL.cpp')) {
    e.respondWith(new Response(
      '#include<iostream>\nusing namespace std;\nint main(){cout<<"LOL";return 0;}',
      { headers: { 'Content-Type': 'application/octet-stream', 'Content-Disposition': 'attachment; filename="LOL.cpp"' }}
    ));
  } else if (url.pathname.includes('/assets/hi.json')) {
    e.respondWith(new Response(
      '{"message":"hi","from":"george","lol":true}',
      { headers: { 'Content-Type': 'application/octet-stream', 'Content-Disposition': 'attachment; filename="hi.json"' }}
    ));
  } else if (url.pathname.includes('/assets/guys.txt')) {
    e.respondWith(new Response(
      'HI GUYS WELCOME LOL HAHAHAHA',
      { headers: { 'Content-Type': 'application/octet-stream', 'Content-Disposition': 'attachment; filename="guys.txt"' }}
    ));
  }
});
