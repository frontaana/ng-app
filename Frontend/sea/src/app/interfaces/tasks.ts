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

// сфера жизни (для распределения по кругу)
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
// делаю дома / делаю вне дома
// делаю одна / с кем-то

// цель - забота о себе - здоровье
// цель - семья         - семья
// цель - окружение     - отношения
// цель - фридайвинг    - путешествие, духовость, творчество, карьера
// цель - деньги        - финансы
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
