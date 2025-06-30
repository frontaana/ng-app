import { create } from "node:domain"

export const urls: IUrls = {
  createTask: 'task/create',
  updateTask: 'task/update',
  deleteTask: 'task/delete',
  getTask: (accountId: string, taskId: string) => `${accountId}/get-task/${taskId}`,
  getTasks: (accountId: string) => `/${accountId}/get-tasks`,
}

interface IUrls {
  createTask: string;
  updateTask: string;
  deleteTask: string;
  getTask: (accountId: string, taskId: string) => string;
  getTasks: (accountId: string) => string;
  ping?: string;
}

// create - add
// read - get
// update - update/rename
// delete - 