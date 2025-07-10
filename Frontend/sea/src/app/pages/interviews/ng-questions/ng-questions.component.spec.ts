import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgQuestionsComponent } from './ng-questions.component';

describe('NgQuestionsComponent', () => {
  let component: NgQuestionsComponent;
  let fixture: ComponentFixture<NgQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgQuestionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
