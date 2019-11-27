import {Task} from './task';

export const TASKS: Task[] = [
    {
        id: 1,
        title: 'Task 1',
        description: 'Description of Task 1',
        dueDate: new Date('2019-12-30'),
        resolveAt: null,
        priority: false,
        resolved: false
    },
    {
        id: 2,
        title: 'Task 2',
        description: 'Description of Task 2',
        dueDate: new Date('2020-10-10'),
        resolveAt: new Date('2018-10-10'),
        priority: false,
        resolved: true

    },
    {
        id: 3,
        title: 'Task 3',
        description: 'Description of Task 3',
        dueDate: new Date('2020-01-10'),
        resolveAt: new Date('2018-10-10'),
        priority: true,
        resolved: true
    }
    ,
    {
        id: 4,
        title: 'Task 4',
        description: 'Description of Task 4',
        dueDate: new Date('2021-10-10'),
        resolveAt: new Date('2014-10-10'),
        priority: false,
        resolved: true

    }
];
