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
  tasks = [
    {
      title: 'Upload data',
      description: 'Submit member and cashflow data to Hymans Robertson via our single secure data submission portal with real-time data validation.',
      href: '#',
      imageUrl: 'assets/images/upload-data.png',
      imageAlt: 'Upload data icon'
    },
    {
      title: 'See my documents',
      description: 'Access all your documents from Hyman Robertson visa our secure online storage facility.',
      href: '#',
      imageUrl: 'assets/images/see-my-documents.png',
      imageAlt: 'See my documents icon'
    },
    {
      title: 'Whole fund funding update',
      description: 'Monitor and view latest whole fund funding position.',
      href: '#',
      imageUrl: 'assets/images/whole-fund-update.png',
      imageAlt: 'Whole fund funding update icon'
    },
    {
      title: 'Employer funding update',
      description: 'Calculate an updated funding level or indicative cessation valuation for any employer. View and download reports to share with your employers.',
      href: '#',
      imageUrl: 'assets/images/employer-funding-update.png',
      imageAlt: 'Employer funding update icon'
    }
  ]; 
}
