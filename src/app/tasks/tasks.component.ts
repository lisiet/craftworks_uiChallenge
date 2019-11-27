import {Component, Directive, Input, NgModule, OnInit, ViewChild} from '@angular/core';
import { Task } from '../task';
import { TASKS } from '../mock-tasks';
import { TaskService } from '../task.service';
import {angularClassDecoratorKeys} from 'codelyzer/util/utils';
import {ɵEmptyOutletComponent} from '@angular/router';
import {AppComponent} from '../app.component';

@Component({
    selector: 'bs-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
    @Input() newTaskInput: string;

    curTask: Task;
    tasks: Task[];
    curId: number;
    constructor(private taskService: TaskService) {
    }
    ngOnInit() {
        this.initTasks();
        this.curId = 4; // 5 mock-tasks are automatically included
    }
    // initTasks: load all mockTasks
    initTasks(): void {
        this.taskService.getMockTasks()
            .subscribe(tasks => this.tasks = tasks);
    }
    // onSelect: define which task in list is currently clicked on
    onSelect(task: Task): void {
        this.curTask = task;
    }
    // handle the creation of a new task: add it to curTaskList and View
    onNewTask()  {
        this.curId++;
        this.tasks.push({id: this.curId,
            title: this.newTaskInput,
            description: 'Description of Task' + this.curId,
            dueDate: new Date(this.getRandomNr(2020, 2022) + '-' + this.getRandomNr(1, 12) + '-' + this.getRandomNr(1, 30)) as Date,
            resolveAt: null,
            priority: false,
            resolved: false}
        );
        this.taskService.setTaskList = this.tasks;
        this.curTask = this.tasks[this.tasks.length];
    }
    // sort tasks according to dueDate
    get getSortedTasks() {
        return this.tasks.sort((a, b) => {
            return (new Date(a.dueDate) as any) - (new Date(b.dueDate) as any);
        });
        return this.tasks;
    }
    // get random number between min and max value (for random creation of a task)
    getRandomNr(min, max): number {
        return Math.floor((Math.random() * (max - min + 1) ) + min);
    }
    // handle click on check box when task is resolved
    clickedCB(selectedTask: Task) {
        if (selectedTask.resolved) {
            selectedTask.resolveAt = new Date (Date.now());
        } else {
            selectedTask.resolveAt = null;
        }
    }
}
