import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard.component';
import { TasksService } from '../../../core/service/task.service';
import { Task } from '../../../core/model/task.model';

describe('DashboardComponent', () => {
  let fixture: ComponentFixture<DashboardComponent>;
  let component: DashboardComponent;

  const mockTasks: Task[] = [
    {
      title: 'Upload data',
      description: 'Data uploaded successfully.',
      imageUrl: 'assets/images/data-upload.png',
      imageAlt: 'Data upload icon',
      href: '/data-upload',
    },
    {
      title: 'See my documents',
      description: 'Access all of your documents.',
      imageUrl: 'assets/images/see-my-documents.png',
      imageAlt: 'See my documents icon',
      href: '/see-my-documents',
    },
  ];

  const tasksServiceMock: Pick<TasksService, 'getTasks'> = {
    getTasks: () => mockTasks,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponent], 
      providers: [
        { provide: TasksService, useValue: tasksServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load tasks from TasksService on init', () => {
    fixture.detectChanges(); 
    expect(component.tasks()).toEqual(mockTasks);
  });

  it('should render one TaskComponent per task', () => {
    fixture.detectChanges(); 
    const taskComponents = fixture.debugElement.queryAll(By.css('app-task'));
    expect(taskComponents.length).toBe(mockTasks.length);
  });

  it('should render task titles in the DOM', () => {
    fixture.detectChanges();
    const html = fixture.nativeElement as HTMLElement;
    expect(html.textContent).toContain('Upload data');
    expect(html.textContent).toContain('See my documents');
  });
});