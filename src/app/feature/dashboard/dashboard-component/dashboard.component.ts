import { Component } from '@angular/core';
import { BannerComponent } from '../../../shared/components/banner/banner.component';
import { TaskComponent } from '../../../shared/components/task/task.component';

@Component({
  selector: 'app-dashboard',
  imports: [BannerComponent, TaskComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
})
export class DashboardComponent {

}
