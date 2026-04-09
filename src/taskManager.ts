import { Task, Status } from "./types";

export const tasks: Task[] = [
  { id: "1", title: "Study TS", status: "todo" },
  { id: "2", title: "Build CLI", status: "done" },
];

export function getTasks(): Task[] {
  return tasks;
}

export function printTasks(taskList: Task[]): void {
  const noDescription = "No description.";

  for (const task of taskList) {
    const description = task.description ?? noDescription;
    console.log(`ID ${task.id}: ${task.title} - Status: ${task.status}. Description: ${description}`);
  }
}

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

export function deleteTask(id: string): void {
  const index = tasks.findIndex(task => task.id === id);

  if (index === -1) {
    console.log("Task not found.");
    return;
  }

  tasks.splice(index, 1);
  console.log("Task deleted.");
}

export function completeTask(id: string): void {
  const completed = tasks.find(task => task.id === id);

  if (!completed) {
    console.log("Task not found.");
    return;
  }

  completed.status = "done";
  console.log("Task marked as done.");
}

export function filterTasksByStatus(status: Status): void {
  const filteredTasks = tasks.filter(task => task.status === status);
  printTasks(filteredTasks);
}