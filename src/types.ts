// Types for the task tracker
export type Status = "todo" | "done";

// Task type
export type Task = {
  id: string;
  title: string;
  description?: string;
  status: Status;
};