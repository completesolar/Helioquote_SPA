import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyOverviewPageComponent } from './energy-overview-page.component';

describe('EnergyOverviewPageComponent', () => {
  let component: EnergyOverviewPageComponent;
  let fixture: ComponentFixture<EnergyOverviewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnergyOverviewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
