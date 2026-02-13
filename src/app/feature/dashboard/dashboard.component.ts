import { Component, inject, OnInit, signal } from '@angular/core';
import { BannerComponent } from '../../shared/components/banner/banner.component';
import { TaskComponent } from '../../shared/components/task/task.component';
import { TasksService } from '../../core/service/task.service';
import { Task } from '../../core/model/task.model';

@Component({
  selector: 'app-dashboard',
  imports: [BannerComponent, TaskComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
})
export class DashboardComponent implements OnInit {
  private readonly tasksService = inject(TasksService);
  tasks = signal<Task[]>([]);
  
  ngOnInit() {
    this.tasks.update(() => this.tasksService.getTasks());
  }
}
  