# CLI-TaskManager

A simple yet robust Command Line Interface (CLI) Task Manager built with TypeScript. Keep track of your to-dos directly from your terminal!

## Features

- **Add Tasks**: Easily create new tasks with an optional description.
- **List Tasks**: View all your current tasks.
- **Complete Tasks**: Mark tasks as done once you finish them.
- **Delete Tasks**: Remove tasks you no longer need.
- **Filter Tasks**: View tasks by their specific status (e.g., `todo`, `done`).

## Prerequisites

- Node.js installed on your machine.
- TypeScript installed globally or accessible via `npx`.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/phelippe-ait/CLI-TaskManager.git
   ```
2. Navigate to the project directory:
   ```bash
   cd CLI-TaskManager
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Build

To compile the TypeScript project into JavaScript, run:
```bash
npx tsc
```

## Usage

You can run the built code using `node` on the compiled `dist/index.js` file.

The program expects a command as the first argument, followed by any necessary options.

### Commands

- **List all tasks:**
  ```bash
  node dist/index.js list
  ```

- **Add a new task:**
  ```bash
  node dist/index.js add <title> [description]
  ```

- **Complete a task:**
  ```bash
  node dist/index.js done <id>
  ```

- **Delete a task:**
  ```bash
  node dist/index.js delete <id>
  ```

- **Filter tasks by status:**
  ```bash
  node dist/index.js filter <status>
  ```
  *(Status can be `todo` or `done`)*

## License
ISC
