<script lang="ts">
  import ButtonInner from "$lib/components/ui/Button_Inner.svelte";
  import ButtonOuter from "$lib/components/ui/Button_Outer.svelte";
  import { onMount } from "svelte";

  let slideUpELement: HTMLElement;
  let counter = 0;

  onMount(() => {
    setInterval(() => {
      counter = counter === 0 ? 1 : 0;
    }, 5000);
  });

</script>

<header class="header relative flex flex-col justify-center items-center text-white p-4">
  <span class="text-md sm:text-xl font-extrabold">Kami menyediakan</span>
  <h1 class="uppercase text-4xl sm:text-5xl my-4 font-extrabold text-center">
    Layanan jasa
    <span id="header-highlight-text" bind:this={slideUpELement}>
      {#if counter === 0}
        <span class="service">service</span>
        {:else}
        <span class="pasang">pasang</span>
      {/if}
    </span>
    cctv
  </h1>
  <p class="text-neutral-300 font-sans font-medium text-center">Dan menjual berbagai macam alat elekronik</p>
  <div class="my-8 flex space-x-4">
    <a href="#main" class="scale-105">
      <ButtonOuter>Telusur</ButtonOuter>
    </a>
    <a href="#contact" class="scale-105">
      <ButtonInner>Hubungi</ButtonInner>
    </a>
  </div>
</header>

<style>
  .header {
    background-image: url('/banner.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    width: 100%;
    height: 100vh;
    z-index: 1;
  }

  .header::before {
    @apply block absolute left-0 top-0 w-full h-full;
    content: "";
    background: rgb(27,37,45, .8);
    z-index: -1;
  }

  .header h1 {
    letter-spacing: -5%;
  }

  .service {
    background: rgb(63,255,163);
    background: -moz-linear-gradient(221deg, rgba(63,255,163,1) 15%, rgba(0,189,166,1) 73%);
    background: -webkit-linear-gradient(221deg, rgba(63,255,163,1) 15%, rgba(0,189,166,1) 73%);
    background: linear-gradient(221deg, rgba(63,255,163,1) 15%, rgba(0,189,166,1) 73%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .pasang {
    background: rgb(9,151,255);
    background: -moz-linear-gradient(90deg, rgba(9,151,255,1) 8%, rgba(159,214,232,1) 50%);
    background: -webkit-linear-gradient(90deg, rgba(9,151,255,1) 8%, rgba(159,214,232,1) 50%);
    background: linear-gradient(90deg, rgba(9,151,255,1) 8%, rgba(159,214,232,1) 50%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  #header-highlight-text {
    height: 50px;
    width: 205px;
    overflow: hidden;

    display: inline-flex;
    flex-direction: column;
  }

  #header-highlight-text span {
    animation: text-animation;
    animation-duration: 5s;
    animation-fill-mode: forwards;
  }

  @media screen and (max-width: 640px) {
    #header-highlight-text {
      height: min;
      width: 160px;
    }
  }

  @keyframes text-animation {
    0% {
      transform: translateY(100%);
    }

    5% {
      transform: translateY(0);
    }

    95% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(-100%);
    }
  }
</style>