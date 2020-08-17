import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemOverviewPageComponent } from './system-overview-page.component';

describe('SystemOverviewPageComponent', () => {
  let component: SystemOverviewPageComponent;
  let fixture: ComponentFixture<SystemOverviewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemOverviewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
