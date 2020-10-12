import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHItemComponent } from './item.component';

describe('ItemComponent', () => {
  let component: NavHItemComponent;
  let fixture: ComponentFixture<NavHItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavHItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavHItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
