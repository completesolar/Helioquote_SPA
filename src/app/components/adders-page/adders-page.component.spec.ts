import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddersPageComponent } from './adders-page.component';

describe('AddersPageComponent', () => {
  let component: AddersPageComponent;
  let fixture: ComponentFixture<AddersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
