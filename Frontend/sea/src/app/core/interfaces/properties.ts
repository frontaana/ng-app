export interface Identifiable {
  id: string;
}

export interface Entity extends Identifiable {
  title: string;
}

export enum Permissions {
  View = 1,
  Edit = 2,
  Delete = 4,
  Usage = 8,
  CreateItems = 16,
  ManagePermissions = 32,
  ManageAccess = 32,
  CreateForMe = 64,
  ViewHistory = 128,
  VewManagementPages = 256,
  ManageModule = 512,
  CreateLists = 1024,
}