import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsMainComponent } from './docs-main.component';

describe('DocsMainComponent', () => {
  let component: DocsMainComponent;
  let fixture: ComponentFixture<DocsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
