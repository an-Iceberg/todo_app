class Task_class {
  // This determines if the task should be present in the DOM
  public present: boolean = true;
  // This is simply a visual indicator of the task state
  public done: boolean = false;
  public title: string = "";
  public desc: string = "";

  constructor(title: string, desc: string) {
    this.title = title;
    this.desc = desc;
  }
}

export const tasks = $state([
  new Task_class("Task 1", "desc 1"),
  new Task_class("Task 2", "desc 2"),
  new Task_class("Task 3", "desc 3"),
  new Task_class("Task 4", "desc 4"),
]);
