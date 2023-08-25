<script lang="ts">
  let onClick: (event: MouseEvent) => void = () => {};
  let onHover: (event: MouseEvent) => void = () => {};
</script>

<button class="block bg-plain-green border-2 border-plain-green px-4 py-1 rounded-full transition-all hover:opacity-90 active:scale-95" on:click={onClick} on:mouseenter={onHover}>
  <slot />
</button>