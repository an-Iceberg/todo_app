<script lang="ts">
  import Task from "./Task.svelte";

  class Task_class {
    public done: boolean = false;
    public title: string = "";
    public desc: string = "";

    constructor(title: string = "", desc: string = "") {
      this.title = title;
      this.desc = desc;
    }
  }

  let tasks: Task_class[] = [
    new Task_class("Task 1", "desc 1"),
    new Task_class("Task 2", "desc 2"),
    new Task_class("Task 3", "desc 3"),
    new Task_class("Task 4", "desc 4"),
  ];

  // Todo: create list type
  // Todo: create task type with title, description, done
</script>

<button>Add Task</button>

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
