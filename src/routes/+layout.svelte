<script>
  import '../styles/app.css'
  import Nav from '$lib/components/Nav.svelte'
</script>

<svelte:head>
  <title>CCTV Solusi Electric</title>
  <meta name="description" content="Melayani pemasangan dan maintenance CCTV, menjual lampu, Set top box, dan lain-lain">
  <meta name="keywords" content="CCTV, listrik, electric, pemasangan CCTV, pasang CCTV, maintenance CCTV, lampu, set top box, settopbox, antena, alat listrik, lukman, kabel, instalasi listrik, solusi-electric, solusi electric">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="index, follow">
  <meta name="author" content="kraken-afk/r">
  <meta name="geo.region" content="ID-JK">
  <meta name="geo.placename" content="Cilangkap, Jakarta Timur">
  <meta name="geo.position" content="-6.3378918;106.8979113">
  <meta name="ICBM" content="-6.3378918, 106.8979113">
  <meta name="language" content="id-ID">

  <meta property="og:title" content="Menerima pemasangan dan maintenance CCTV">
  <meta property="og:description" content="Melayani pemasangan dan maintenance CCTV, menjual lampu, Set top box, dan lain-lain">
  <meta property="og:image" content="/og.jpg">
  <meta property="og:url" content="https://solusi-electric.vercel.app/">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="CCTV Solusi Electric">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Menerima pemasangan dan maintenance CCTV">
  <meta name="twitter:description" content="Melayani pemasangan dan maintenance CCTV, menjual lampu, Set top box, dan lain-lain">
  <meta name="twitter:image" content="/og.jpg">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,700;0,800;1,400&display=swap" rel="stylesheet">
</svelte:head>

<Nav />
<slot />
