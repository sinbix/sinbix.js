import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHChildrenComponent } from './children.component';

describe('ChildrenComponent', () => {
  let component: NavHChildrenComponent;
  let fixture: ComponentFixture<NavHChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavHChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavHChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
