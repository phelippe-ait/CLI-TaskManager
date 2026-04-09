import { addTask, deleteTask, completeTask, filterTasksByStatus, printTasks, getTasks } from "./taskManager";



// type Command = "list" | "add" | "done" | "delete" | "filter";

// Gets the arguments from the command line
const args = process.argv.slice(2);
const command = args[0];

// Main switch statement to handle commands
switch (command) {
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
    deleteTask(args[1]);
    printTasks(getTasks());
    break;
  case "done":
    if (!args[1]) {
      console.log("Please provide a task id.");
      break;
    }
    completeTask(args[1]);
    printTasks(getTasks());
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