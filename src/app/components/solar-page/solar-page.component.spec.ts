import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarPageComponent } from './solar-page.component';

describe('SolarPageComponent', () => {
  let component: SolarPageComponent;
  let fixture: ComponentFixture<SolarPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolarPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
