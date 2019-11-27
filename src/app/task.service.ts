import { Injectable } from '@angular/core';
import { Task } from './task';
import { TASKS } from './mock-tasks';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
    taskList: Task[];
    getMockTasks(): Observable<Task[]> {
        this.taskList = TASKS;
        return of(TASKS); // of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes
    }
    set setTaskList(list: Task[]) {
        this.taskList = list;
    }
    get getTaskList(): Task[] {
        return this.taskList;
    }
  constructor() {
  }
}
