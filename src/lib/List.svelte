<script lang="ts">
  import { tasks, len } from "./task-list.svelte";
  import Task from "./Task.svelte";
</script>

<div class="list">
  {#each tasks as task}
    {#if task.present}
      <Task
        title={task.title}
        desc={task.desc}
        bind:done={task.done}
        bind:present={task.present}
      />
    {/if}
  {/each}

  <p>task1.done: {tasks[0].done}</p>
  <p>&num; of tasks: {len()}</p>
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
