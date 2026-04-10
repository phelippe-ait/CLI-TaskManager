import { Task, Status, Priority } from "./types";
import fs from "fs";

// Path to the JSON file
const FILE_PATH = "tasks.json";

// Function to load tasks from a JSON file
function loadTasks(): Task[] {
  try {
    const fileContent = fs.readFileSync(FILE_PATH, "utf-8");
    return JSON.parse(fileContent) as Task[];
  } catch (error) {
    console.log("Could not load tasks.json. Starting with an empty task list.");
    return [];
  }
}

const tasks: Task[] = loadTasks();

// Function to get all tasks
export function getTasks(): Task[] {
  return [...tasks];
}

// Prints tasks in a readable format
export function printTasks(taskList: Task[]): void {
  if (taskList.length === 0) {
    console.log("No tasks found.");
    return;
  }

  const noDescription = "No description.";

  for (const task of taskList) {
    const description = task.description ?? noDescription;
    console.log(`ID ${task.id}: ${task.title} - Status: ${task.status}. Description: ${description} - Priority: ${task.priority}`);
  }
}

// Adds a new task
export function addTask(title: string, description?: string, priority?: Priority): Task {
  const newTask: Task = {
    id: (Math.random() * 1000).toFixed(0),
    title,
    description,
    status: "todo",
    priority: priority ?? "low"
  };
  tasks.push(newTask);
  saveTasks();
  return newTask;
}

// Deletes a task
export function deleteTask(id: string): boolean {
  const index = tasks.findIndex(task => task.id === id);

  if (index === -1) {
    console.log("Task not found.");
    return false;
  }

  tasks.splice(index, 1);
  console.log("Task deleted.");
  saveTasks();
  return true;
}

// Completes a task
export function completeTask(id: string): boolean {
  const completed = tasks.find(task => task.id === id);

  if (!completed) {
    console.log("Task not found.");
    return false;
  }

  completed.status = "done";
  console.log("Task marked as done.");
  saveTasks();
  return true;
}

// Filters tasks by status
export function filterTasksByStatus(status: Status): void {
  const filteredTasks = tasks.filter(task => task.status === status);
  printTasks(filteredTasks);
}

// Helper function to save tasks to a JSON file
function saveTasks(): void {
  fs.writeFileSync(FILE_PATH, JSON.stringify(tasks, null, 2));
}