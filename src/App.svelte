<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";
  import Task from "./lib/Task.svelte";
  import List from "./lib/List.svelte";
</script>

<main>
  <h1>ToDo App in Svelte</h1>

  <div class="card">
    <Counter />
  </div>

  <button>Button</button>

  <br />
  <hr />

  <List />
</main>

<style>
</style>
