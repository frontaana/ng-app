// 'смотреть кино'
// 'убраться дома'
// 'погулка, кафе'
// 'продажи на авито'
// 'спорт каждый день'
// 'кремик каждый день'
// 'волосы через день'
// 'свидания'

import { LifeSphere, Task } from "../interfaces/tasks";


export const tasks: Task[] = [
  {
    id: '001',
    title: 'смотреть кино',
    description: '',
    sphereOfLife: LifeSphere.relationships,
    purposeOfLife: 'environment',
    location: 'outside',
    participants: ['me', 'friends','boyfriend'],
    state: 'backlog',
    priority: 'later',
    cost: 'medium',
    permissions: [1]
  },
  {
    id: '002',
    title: 'убраться дома',
  },
  {
    id: '003',
    title: 'прогулка и кафе для мотивации',
  },
  {
    id: '004',
    title: 'спорт и исследование',
  },
  {
    id: '005',
    title: 'продажи на авито',
  },
  {
    id: '006',
    title: 'спорт каждый день',
  },
  {
    id: '007',
    title: 'кремик каждый день',
  },
  {
    id: '008',
    title: 'волосы через день',
  },
  {
    id: '009',
    title: 'свидание',
  },
  {
    id: '000',
    title: 'х',
  },
  {
    id: '000',
    title: 'х',
  }
];