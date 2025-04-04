class Task_class {
  // This is simply a visual indicator of the task state
  public done: boolean = $state(false);
  public title: string = $state("");
  public desc: string = $state("");

  constructor(title: string, desc: string) {
    this.title = title;
    this.desc = desc;
  }
}

// Todo: figure out a way to remove the tasks from the list
export const tasks = $state([
  new Task_class("Task 1", "desc 1"),
  new Task_class("Task 2", "desc 2"),
  new Task_class("Task 3", "desc 3"),
  new Task_class("Task 4", "desc 4"),
]);
export let len = () => tasks.length;
export let remove = (index: number) => tasks.splice(index, 1);
