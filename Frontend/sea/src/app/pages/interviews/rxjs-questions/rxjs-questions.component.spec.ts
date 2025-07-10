import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsQuestionsComponent } from './rxjs-questions.component';

describe('RxjsModuleComponent', () => {
  let component: RxjsQuestionsComponent;
  let fixture: ComponentFixture<RxjsQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsQuestionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
