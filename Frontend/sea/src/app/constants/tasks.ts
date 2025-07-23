import { Cost, LifePurpose, LifeSphere, Location, Participant, Priority, State, Task } from "../interfaces/tasks";

export const tasks_important = [
  'убраться дома',
  'прогулка и кафе для мотивации',
  'спорт и исследование',
  'продажи на авито',
  'спорт каждый день',
  'кремик каждый день',
  'волосы через день',
  'свидание',
]

export const tasks: Task[] = [
  {
    id: '001',
    title: 'смотреть кино',
    description: '',
    sphereOfLife: LifeSphere.relationships,
    purposeOfLife: LifePurpose.environment,
    location: Location.outside,
    participants: [Participant.me, Participant.friends, Participant.boyfriend],
    state: State.backlog,
    priority: Priority.later,
    cost: Cost.medium,
    permissions: [1]
  },
];
