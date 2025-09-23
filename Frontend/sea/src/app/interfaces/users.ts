export class User {
  id: string;
  name: string;
  old: number;
  permission?: Permissions;
  
  constructor() {
    this.id = '0';
    this.name = '';
    this.old = 0;
    this.permission = 1;
  }
}

export enum Permissions {

}


export enum Sex {
  Unspecified = 0,
  Male = 1,
  Female = 2,
}

export enum ContactTypes {
  Email = 1,
  Phone = 2,
  WorkPhone = 3,
  Skype = 4,
  Vkontakte = 5,
  Instagram = 6,
  Facebook = 7,
  Odnoklassniki = 8,
  Telegram = 9,
  Twitter = 10,
  Linkedin = 11,
  WhatsApp = 12
}

export enum FormType {
  View = 0,
  Add = 1,
  Edit = 2,
}

export enum PermissionSubject {
  User = 1,
  Group = 2,
}

export enum ActionType {
  Delete = 0,
  Edit = 1,
  Pin = 2,
  Unpin = 3,
  Copy = 4,
}
