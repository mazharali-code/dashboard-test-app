import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
  standalone: true,
})
export class TaskComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() href = '#';
  
  @Input() imageUrl = '';
  @Input() imageAlt = '';

}
