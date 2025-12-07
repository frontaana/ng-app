import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewTasksComponent } from './interview-tasks.component';

describe('InterviewTasksComponent', () => {
  let component: InterviewTasksComponent;
  let fixture: ComponentFixture<InterviewTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewTasksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
