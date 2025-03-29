<script lang="ts">
  import { tasks } from "./task-list.svelte";

  import Task from "./Task.svelte";
</script>

<div class="list">
  {#each tasks as task}
    {#if task.present}
      <Task
        title={task.title}
        desc={task.desc}
        done={task.done}
        bind:present={task.present}
      />
    {/if}
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
