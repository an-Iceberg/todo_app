<script lang="ts">
import {tasks, len} from "./task-list.svelte";
import Task from "./Task.svelte";
import plus from "../assets/plus-svgrepo-com.svg";

// Debug: delete after done
$inspect(tasks);
</script>

<button class="add-button">
  <!-- Todo: use inline SVGs -->
  <img src={plus} alt="+ Add task" />
</button>

<div class="list">
  {#if tasks.length == 0}
    <!-- Todo: display a random ‹done› message -->
    <p>Nothing left to do ^ω^</p>
  {/if}

  <!-- Not an elegant solution to use the index from the each block but at least it works -->
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

.add-button {
  aspect-ratio: 1/1;
  border: 1px solid lime;
  padding: 0.7rem;

  transition: background-color 250ms;

  &:hover {
    background-color: lime;
    transition: background-color 250ms;
  }

  img {
    width: 2rem;

    fill: lime;
  }
}
</style>
