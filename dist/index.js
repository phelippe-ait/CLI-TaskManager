"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taskManager_1 = require("./taskManager");
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
        (0, taskManager_1.printTasks)((0, taskManager_1.getTasks)());
        break;
    case "add":
        if (!args[1]) {
            console.log("Please provide a task title.");
            break;
        }
        (0, taskManager_1.addTask)(args[1], args[2]);
        console.log("Task added.");
        (0, taskManager_1.printTasks)((0, taskManager_1.getTasks)());
        break;
    case "delete":
        if (!args[1]) {
            console.log("Please provide a task id.");
            break;
        }
        if ((0, taskManager_1.deleteTask)(args[1])) {
            console.log("Task deleted.");
            (0, taskManager_1.printTasks)((0, taskManager_1.getTasks)());
        }
        break;
    case "done":
        if (!args[1]) {
            console.log("Please provide a task id.");
            break;
        }
        if ((0, taskManager_1.completeTask)(args[1])) {
            (0, taskManager_1.saveToCompleted)();
            (0, taskManager_1.deleteTask)(args[1]);
        }
        break;
    case "filter":
        if (args[1] !== "todo" && args[1] !== "done") {
            console.log('Please provide a valid status: "todo" or "done".');
            break;
        }
        (0, taskManager_1.filterTasksByStatus)(args[1]);
        break;
    default:
        console.log("Unknown command.");
}
