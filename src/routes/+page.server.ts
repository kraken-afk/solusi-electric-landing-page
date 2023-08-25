import type { Load } from '@sveltejs/kit'

export const load: Load = (event) => {
  event.setHeaders({
    'Content-Type': 'text/html',
    'Cache-Control': 'public, max-age=3600',
    'X-Robots-Tag': 'index, follow',
    'Canonical': 'https://solusi-electric.vercel.app',
    'Expires': 'Thu, 01 Dec 2024 16:00:00 GMT',
    'Last-Modified': 'Wed, 25 Aug 2023 12:00:00 GMT',
    'Content-Language': 'id-ID',
    'Link': 'https://solusi-electric.vercel.app;'
  });
}
