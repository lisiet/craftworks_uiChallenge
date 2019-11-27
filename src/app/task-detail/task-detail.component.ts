import {Component, OnInit, Input} from '@angular/core';
import {Task} from '../task';
import {TaskService} from '../task.service';

@Component({
    selector: 'bs-task-detail',
    templateUrl: './task-detail.component.html',
    styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
    @Input() task: Task;
    tasks: Task[];

    // delete current task out of list (use service)
    onDeleteTask(task) {
        this.tasks = this.taskService.getTaskList;
        this.tasks.splice(this.tasks.indexOf(task), 1);
        this.taskService.setTaskList = this.tasks;
        this.task = null; // to close detail view
    }
    constructor(private taskService: TaskService) {
    }
    ngOnInit() {
    }
}


