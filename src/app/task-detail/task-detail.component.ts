import {Component, OnInit, Input} from '@angular/core'; // include the Innput, so that it can be bound like one in the html class
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

    curPriority(task: Task): string {
        return task.priority ? 'High priority' : 'No priority';
    }

    onDeleteTask(task) {
        this.tasks = this.taskService.getTaskList;
        this.tasks.splice(this.tasks.indexOf(task), 1);
         this.taskService.setTaskList = this.tasks;
    }

    constructor(private taskService: TaskService) {
    }

    ngOnInit() {
    }

}


