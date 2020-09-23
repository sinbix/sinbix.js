import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsComponentsComponent } from './components.component';

describe('ComponentsComponent', () => {
  let component: DocsComponentsComponent;
  let fixture: ComponentFixture<DocsComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocsComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
