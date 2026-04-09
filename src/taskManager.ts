import { Task, Status } from "./types";

// TODO: Replace with a database
export const tasks: Task[] = [
  { id: "1", title: "Study TS", status: "todo" },
  { id: "2", title: "Build CLI", status: "done" },
];

// TODO: Replace with a database
export function getTasks(): Task[] {
  return tasks;
}

// Prints tasks in a readable format
export function printTasks(taskList: Task[]): void {
  const noDescription = "No description.";

  for (const task of taskList) {
    const description = task.description ?? noDescription;
    console.log(`ID ${task.id}: ${task.title} - Status: ${task.status}. Description: ${description}`);
  }
}

// Adds a new task
export function addTask(title: string, description?: string): Task {
  const newTask: Task = {
    id: (Math.random() * 1000).toFixed(0),
    title,
    description,
    status: "todo"
  };
  tasks.push(newTask);
  return newTask;
}

// Deletes a task
export function deleteTask(id: string): void {
  const index = tasks.findIndex(task => task.id === id);

  if (index === -1) {
    console.log("Task not found.");
    return;
  }

  tasks.splice(index, 1);
  console.log("Task deleted.");
}

// Completes a task
export function completeTask(id: string): void {
  const completed = tasks.find(task => task.id === id);

  if (!completed) {
    console.log("Task not found.");
    return;
  }

  completed.status = "done";
  console.log("Task marked as done.");
}

// Filters tasks by status
export function filterTasksByStatus(status: Status): void {
  const filteredTasks = tasks.filter(task => task.status === status);
  printTasks(filteredTasks);
}