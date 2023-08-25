<script>
  import '../styles/app.css'
  import Nav from '$lib/components/Nav.svelte'
  import banner from '$lib/imgs/banner.jpg';

  export const prerender = true;
</script>

<svelte:head>
  <title>Solusi Electric &bull; solusi untuk instalasi listrik anda</title>
  <meta name="description" content="Solusi electric adalah toko listrik yang menjual dan melayani berbagai kebutuhan listrik anda termasuk menjual berbagai alat listrik, lampu, Set top box, hingga pemasangan dan maintenance CCTV">
  <meta name="keywords" content="CCTV, listrik, electric, pemasangan CCTV, pasang CCTV, maintenance CCTV, lampu, set top box, settopbox, antena, alat listrik, lukman, kabel, instalasi listrik">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="index, follow">
  <meta name="author" content="kraken-afk/r">
  <meta name="geo.region" content="ID-JK">
  <meta name="geo.placename" content="Cilangkap, Jakarta Timur">
  <meta name="geo.position" content="-6.3378918;106.8979113">
  <meta name="ICBM" content="-6.3378918, 106.8979113">
  <meta name="language" content="id-ID">

  <meta property="og:title" content="Solusi Electric &bull; solusi untuk instalasi listrik anda">
  <meta property="og:description" content="Solusi electric adalah toko listrik yang menjual dan melayani berbagai kebutuhan listrik anda termasuk menjual berbagai alat listrik, lampu, Set top box, hingga pemasangan dan maintenance CCTV">
  <meta property="og:image" content={banner}>
  <meta property="og:url" content="https://solusi-electric.vercel.app/">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Your Website Name">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Solusi Electric &bull; solusi untuk instalasi listrik anda">
  <meta name="twitter:description" content="Solusi electric adalah toko listrik yang menjual dan melayani berbagai kebutuhan listrik anda termasuk menjual berbagai alat listrik, lampu, Set top box, hingga pemasangan dan maintenance CCTV">
  <meta name="twitter:image" content={banner}>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,700;0,800;1,400&display=swap" rel="stylesheet">
</svelte:head>

<Nav />
<slot />
