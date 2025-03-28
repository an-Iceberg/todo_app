<script lang="ts">
  import { tasks } from "./task-list.svelte";

  import Task from "./Task.svelte";
</script>

<div class="list">
  {#each tasks as task}
    <Task title={task.title} desc={task.desc} />
  {/each}
</div>

<style>
  .list {
    --spacing: 0.75rem;

    margin: var(--spacing);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: var(--spacing);
  }
</style>
