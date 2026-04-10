// Types for the task tracker
export type Status = "todo" | "done";

export type Priority = "low" | "medium" | "high";

// Task type
export type Task = {
  id: string;
  title: string;
  description?: string;
  status: Status;
  priority: Priority;
};