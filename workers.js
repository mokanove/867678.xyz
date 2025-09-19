export default {
  async fetch(request) {
    const url = new URL(request.url);
    const pathname = url.pathname;
    const ip = request.headers.get('CF-Connecting-IP') || 'Cannot be get client IP addr';

    switch (pathname) {
      case '/ip-json':
        return new Response(JSON.stringify({ ip }), {
          headers: {
            'content-type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
          },
        });
      case '/ip':
        return new Response(ip, {
          headers: {
            'content-type': 'text/plain;charset=UTF-8',
          },
        });
      case '/':
        const html = `This is API page with Mo Kanove`;
        return new Response(html, {
          headers: {
            'content-type': 'text/html;charset=UTF-8',
          },
        });
      default:
        return new Response('API not found', {
          status: 404,
        });
    }
  },
};