<script>
  import { register } from 'swiper/element/bundle';

  import img1 from '$lib/imgs/img-1.webp';
  import img2 from '$lib/imgs/img-2.webp';
  import img4 from '$lib/imgs/img-4.webp';
  import img5 from '$lib/imgs/img-5.webp';

  import heart_icon from '$lib/svgs/code-of-conduct.svg';
  import gear_icon from '$lib/svgs/gear.svg';
  import tools_icon from '$lib/svgs/tools.svg';
  import email_icon from '$lib/svgs/email.svg';
  import tel_icon from '$lib/svgs/tel.svg';
  import pin_svg from '$lib/svgs/pin.svg';

  register();
</script>

<!-- svelte-ignore a11y-distracting-elements -->
<div class="w-full overflow-hidden my-4">
  <div class="text-5xl text-neutral-300 uppercase flex marque" aria-hidden="true">
    <span>solusi electric</span>
    <span>&bull;</span>
    <span>solusi electric</span>
    <span>&bull;</span>
    <span>solusi electric</span>
    <span>&bull;</span>
    <span>solusi electric</span>
    <span>&bull;</span>
    <span>solusi electric</span>
    <span>&bull;</span>
    <span>solusi electric</span>
    <span>&bull;</span>
    <span>solusi electric</span>
    <span>&bull;</span>
  </div>
</div>

<main class="px-4 mx-auto max-w-4xl" id="main">
  <span class="block w-max text-lg px-4 pb-2 my-20 mx-auto relative why-us">Mengapa kami?</span>
  <section class="flex gap-16 md:gap-8 flex-col md:flex-row-reverse justify-start md:justify-items-end md:items-center mt-28 px-4">
    <article class="w-full md:w-1/2">
      <h2 class="uppercase text-3xl mb-6" >
        <span class="text-blue-gradient">100%</span> terpercaya
      </h2>
      <p class="text-md md:text-sm font-sans">Telah terbukti melayani banyak pelanggan, kami berkomitmen untuk memberikan yang terbaik. Dari memperbaiki perangkat yang rusak hingga memasang sistem keamanan CCTV yang canggih, kami selalu berusaha memberikan yang terbaik untuk Anda. Dengan toko kami, Anda dapat yakin bahwa kebutuhan teknologi Anda akan terpenuhi dengan baik.</p>
    </article>
    <swiper-container
      pagination="true"
      autoplay-delay="2500"
      autoplay-disable-on-interaction="false"
      style="fill: #fff;"
      class="block self-center max-w-full md:max-w-xs h-[240px] overflow-hidden object-cove" slide-per-view="1"
    >
      <swiper-slide>
        <img src={img1} alt="img 1">
      </swiper-slide>
      <swiper-slide>
        <img src={img2} alt="img 2">
      </swiper-slide>
      <swiper-slide>
        <img src={img4} alt="img 4">
      </swiper-slide>
      <swiper-slide>
        <img src={img5} alt="img 5">
      </swiper-slide>
    </swiper-container>
  </section>

  <section class="flex gap-16 md:gap-24 mt-28 md:mt-60 mb-6 md:mb-52 flex-col md:flex-row justify-center items-center p-4 md:p-0">
    <div class="spacing-y-4 text-center max-w-xs">
      <img src={heart_icon} alt="heart icon" class="pointer-events-none w-[72px] mx-auto" style="filter: invert(48%) sepia(42%) saturate(2862%) hue-rotate(140deg) brightness(101%) contrast(101%);">
      <h3 class="font-bold text-3xl my-4">Berkualitas</h3>
      <p class="max-w-xs text-md font-sans">Kami hanya menjual produk berkualitas dengan harga yang bersaing dipasaran.</p>
    </div>
    <div class="spacing-y-4 text-center max-w-xs md:translate-y-[-2rem]">
      <img src={gear_icon} alt="gear icon" class="pointer-events-none w-[72px] mx-auto" style="filter: invert(62%) sepia(89%) saturate(4953%) hue-rotate(184deg) brightness(101%) contrast(102%);">
      <h3 class="font-bold text-3xl my-4">Professional</h3>
      <p class="max-w-xs text-md font-sans">Layanan pemasangan CCTV kami telah dipesan oleh berbagai konsumen dari rumahan, hingga pelaku bisnis dan instansi.</p>
    </div>
    <div class="spacing-y-4 text-center max-w-xs">
      <img src={tools_icon} alt="tools icon" class="pointer-events-none w-[72px] mx-auto rotate-45" style="filter: invert(48%) sepia(42%) saturate(2862%) hue-rotate(140deg) brightness(101%) contrast(101%);">
      <h3 class="font-bold text-3xl my-4">Repair service</h3>
      <p class="max-w-xs text-md font-sans">Kami juga dapat memperbaiki CCTV anda yang rusak, dengan cepat dan efisien.</p>
    </div>
  </section>

  <section class="my-52" id="contact">
    <h2 class="font-bold text-4xl text-center mb-8">Kunjungi kami</h2>
    <div class="flex gap-16 md:gap-6 items-center flex-col md:flex-row">
      <address>
         <a href="https://www.google.com/maps/place/CCTV+Solusi+Electric/@-6.3378918,106.8979113,15z/data=!4m6!3m5!1s0x2e69edc916bfb005:0xcc889c89c906d3ed!8m2!3d-6.3378918!4d106.8979113!16s%2Fg%2F11s8y2dvcp?entry=ttu" class="flex items-start gap-3 text-blue-500 underline"><img class="inline" src={pin_svg} alt="pin icon"> Jl. Malaka Raya RT. 02/05 No.20A Cilangkap - Jakarta Timur</a>
         <div>
          <a class="flex gap-3 mt-4 text-blue-500 underline" href="https://wa.me/+6281384217355"><img src={tel_icon} alt="tel icon"> +62 813 8421 7355</a>
          <a class="flex gap-3 mt-4 text-blue-500 underline" href="mailto:lukmankoto.lk@gmail.com"><img src={email_icon} alt="email icon"> lukmankoto.lk@gmail.com</a>
         </div>
      </address>
      <div class="mapouter shadow-md shadow-black">
        <div class="gmap_canvas">
          <iframe title="map location" class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=400&amp;height=250&amp;hl=en&amp;q=CCTV Solusi Electric&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://gachanox.io/">Gacha Nox Download</a></div><style>.mapouter{position:relative;text-align:right;width:100%;height:250px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:250px;}.gmap_iframe {height:250px!important;}</style>
        </div>
    </div>
  </section>
</main>

<style>
  .why-us::before {
    content: "";
    @apply absolute bottom-0 left-0 w-full h-1 rounded-full bg-gradient-to-r from-darken-blue to-plain-blue;
  }

  .text-blue-gradient {
    @apply bg-gradient-to-r from-darken-blue to-plain-blue;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .marque {
    animation: slide 30s linear infinite;
  }

  .marque:hover {
    animation-play-state: paused;
  }

  .marque > span {
    white-space: nowrap;
    margin-inline: 1rem;
    transition: 200ms ease-in-out color;
    cursor: default;
  }

  .marque > span:hover {
    @apply text-neutral-700;
  }

  @media (prefers-reduce-motion) {
    .marque {
      animation-play-state: paused;
    }
  }

  @keyframes slide {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-100%);
    }
  }
</style>
