"use strict";
const tasks = [
    { id: "1", title: "Study TS", status: "todo" },
    { id: "2", title: "Build CLI", status: "done" },
];
function printTasks(taskList) {
    var _a;
    const noDescription = "No description";
    for (const task of taskList) {
        const description = (_a = task.description) !== null && _a !== void 0 ? _a : noDescription;
        console.log(`ID ${task.id}: ${task.title} - Status: ${task.status}. Description: ${description}`);
    }
}
function addTask(title, description) {
    const newTask = {
        id: (Math.random() * 1000).toFixed(0).toString(),
        title,
        description,
        status: "todo"
    };
    tasks.push(newTask);
    return newTask;
}
function deleteTask(id) {
    if (!tasks.find(task => task.id === id)) {
        console.log("Task id not found");
        return;
    }
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);
    console.log("Task deleted.");
}
function completeTask(id) {
    const completed = tasks.find(task => task.id === id);
    if (!completed) {
        console.log("Task not found.");
        return;
    }
    completed.status = "done";
    console.log("Task marked as done.");
}
function filterTasksByStatus(tasksList, status) {
    const filteredTasks = tasksList.filter(task => task.status === status);
    printTasks(filteredTasks);
}
// type Command = "list" | "add" | "done" | "delete" | "filter";
const args = process.argv.slice(2);
const command = args[0];
switch (command) {
    case "list":
        printTasks(tasks);
        break;
    case "add":
        if (!args[1]) {
            console.log("Please provide a task title.");
            printTasks(tasks);
            break;
        }
        addTask(args[1], args[2]);
        console.log("Task added.");
        printTasks(tasks);
        break;
    case "delete":
        if (!args[1]) {
            console.log("Please provide a task id");
            break;
        }
        deleteTask(args[1]);
        console.log("Task successfully deleted");
        printTasks(tasks);
        break;
    case "done":
        if (!args[1]) {
            console.log("Please provide a task id");
            break;
        }
        completeTask(args[1]);
        printTasks(tasks);
        break;
    case "filter":
        if (args[1] !== "todo" && args[1] !== "done") {
            console.log('Please provide a valid status: "todo" or "done".');
            break;
        }
        filterTasksByStatus(tasks, args[1]);
        break;
    default:
        console.log("Unknown command");
}
