addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);

  if (url.pathname.includes('.') || url.pathname === '/') {
    return fetch(request);
  } else {
    const response = await fetch(`${url.origin}/index.html`);
    if (response.status === 404) {
      return new Response('Not Found', { status: 404 });
    }
    return response;
  }
}
