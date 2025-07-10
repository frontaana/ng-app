import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JSQuestionsComponent } from './js-questions.component';

describe('JSQuestionsComponent', () => {
  let component: JSQuestionsComponent;
  let fixture: ComponentFixture<JSQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JSQuestionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JSQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
