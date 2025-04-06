<script lang="ts">
import {tasks, len} from "./task-list.svelte";
import Task from "./Task.svelte";

// Debug: delete after done
$inspect(tasks);
</script>

<button>Add Task</button>

<div class="list">
  {#if tasks.length == 0}
    <!-- Todo: display a random ‹done› message -->
    <p>Nothing left to do ^ω^</p>
  {/if}

  <!-- Not an elegang solution to use the index from the each block but at least it works -->
  {#each tasks as task, index}
    <Task title={task.title} desc={task.desc} {index} bind:done={task.done} />
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
