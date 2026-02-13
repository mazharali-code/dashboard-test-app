import { Component, Input } from '@angular/core';
import { Task } from '../../../core/model/task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
  standalone: true,
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
}
