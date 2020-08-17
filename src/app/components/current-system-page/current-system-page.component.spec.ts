import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentSystemPageComponent } from './current-system-page.component';

describe('CurrentSystemPageComponent', () => {
  let component: CurrentSystemPageComponent;
  let fixture: ComponentFixture<CurrentSystemPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentSystemPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentSystemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
