import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHButtonsComponent } from './buttons.component';

describe('ButtonsComponent', () => {
  let component: NavHButtonsComponent;
  let fixture: ComponentFixture<NavHButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavHButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavHButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
