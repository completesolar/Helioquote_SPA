import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackCircleComponent } from './feedback-circle.component';

describe('FeedbackCircleComponent', () => {
  let component: FeedbackCircleComponent;
  let fixture: ComponentFixture<FeedbackCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
