<script lang="ts">
import {tasks, len, add} from "./task-list.svelte";
import Task from "./Task.svelte";
import plus from "../assets/plus-svgrepo-com.svg";

let show_new_task_inputs = $state(false);
let new_task_title = $state("");
let new_task_desc = $state("");

function toggle_task() {
  show_new_task_inputs = !show_new_task_inputs;
  new_task_title = "";
  new_task_desc = "";
}

// Debug: delete after done
$inspect(tasks);
$inspect(show_new_task_inputs);
</script>

<button class="add-button {show_new_task_inputs ? 'hidden' : ''}" onclick={toggle_task}>
  <!-- Todo: use inline SVGs -->
  <img src={plus} alt="+ Add task" />
</button>

<div id="new_task" class={show_new_task_inputs ? "" : "hidden"}>
  <label for="title">Title:</label>
  <input type="text" id="title" bind:value={new_task_title} />

  <label for="desc">Description:</label>
  <textarea id="desc" bind:value={new_task_desc}></textarea>

  <div class="buttons">
    <button
      onclick={() => {
        add(new_task_title, new_task_desc);
        toggle_task();
      }}>Add Task</button
    >
    <button onclick={toggle_task}>Cancel</button>
  </div>
</div>

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
.hidden {
  display: none !important;
}

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

#new_task {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin: 0 10px;

  input,
  textarea,
  .buttons {
    width: 100%;
  }

  .buttons {
    align-self: center;
  }
}
</style>
