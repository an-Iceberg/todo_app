<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";
  import Item from "./lib/Item.svelte";
</script>

<main>
  <h1>ToDo App in Svelte</h1>

  <div class="card">
    <Counter />
  </div>

  <button>Button</button>

  <Item />
</main>

<style>
</style>
