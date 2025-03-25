<script lang="ts">
  import Task from "./Task.svelte";

  class Task_class {
    public done: boolean = false;
    public present: boolean = true;
    public title: string = "";
    public desc: string = "";

    constructor(title: string, desc: string) {
      this.title = title;
      this.desc = desc;
    }
  }

  let tasks = [
    new Task_class(
      "Task 1",
      "this is a long description describing the task at hand. it is necessary that the task at hand be done eventually.",
    ),
    new Task_class("Task 2", "desc 2"),
    new Task_class("Task 3", "desc 3"),
    new Task_class("Task 4", "desc 4"),
  ];

  // Todo: create list type
  // Todo: create task type with title, description, done

  // Todo: if present is false, remove taks from list
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
