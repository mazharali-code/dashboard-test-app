import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
  standalone: true,
})
export class BannerComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
}
