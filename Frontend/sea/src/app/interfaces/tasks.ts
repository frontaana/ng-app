import { Entity, Permissions } from "../core/interfaces/properties";

export interface Task extends Entity {
  sphereOfLife: LifeSphere,
  purposeOfLife: LifePurpose,
  description: string,
  location: Location,
  participants: Participant[],
  state: State,
  priority: Priority,
  cost: Cost,
  permissions: Permissions[],
}

export enum LifeSphere {
  health,
  family,
  relationships,
  travel,
  spirituality,
  creativity,
  career,
  finance,
}

export enum LifePurpose {
  money,
  freediving,
  environment,
  family,
  selfcare
}

export enum Participant {
  me,
  parents,
  friends,
  boyfriend
}

export enum Location {
  home,
  outside
}

export enum State {
  backlog,
  inprogress,
  test,
  done
}

export enum Priority {
  now,
  later
}

export enum Cost {
  free,
  medium,
  high
}
