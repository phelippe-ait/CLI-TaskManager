import { addTask, deleteTask, completeTask, filterTasksByStatus, printTasks, getTasks, saveToCompleted,  } from "./taskManager";

// Gets the arguments from the command line
const args = process.argv.slice(2);
const command = args[0];

// Main switch statement to handle commands
switch (command) {
  case "menu":
    console.log("Available commands:");
    console.log("list - List all tasks");
    console.log("add - Add a new task");
    console.log("delete - Delete a task");
    console.log("done - Complete a task");
    console.log("filter - Filter tasks by status");
    break;
  case "list":
    printTasks(getTasks());
    break;
  case "add":
    if (!args[1]) {
      console.log("Please provide a task title.");
      break;
    }
    addTask(args[1], args[2]);
    console.log("Task added.");
    printTasks(getTasks());
    break;
  case "delete":
    if (!args[1]) {
      console.log("Please provide a task id.");
      break;
    }

    if (deleteTask(args[1])) {
      console.log("Task deleted.");
      printTasks(getTasks());
    }
    break;
  case "done":
    if (!args[1]) {
      console.log("Please provide a task id.");
      break;
    }

    if (completeTask(args[1])) {
      saveToCompleted();
      deleteTask(args[1]);
    }
    break;
  case "filter":
    if (args[1] !== "todo" && args[1] !== "done") {
      console.log('Please provide a valid status: "todo" or "done".');
      break;
    }
    filterTasksByStatus(args[1]);
    break;
  default:
    console.log("Unknown command.");
}