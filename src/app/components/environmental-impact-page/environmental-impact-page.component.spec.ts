import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentalImpactPageComponent } from './environmental-impact-page.component';

describe('EnvironmentalImpactPageComponent', () => {
  let component: EnvironmentalImpactPageComponent;
  let fixture: ComponentFixture<EnvironmentalImpactPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvironmentalImpactPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentalImpactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
