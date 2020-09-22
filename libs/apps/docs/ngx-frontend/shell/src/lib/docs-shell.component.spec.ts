import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DocsShellComponent } from './docs-shell.component';

describe('ShellComponent', () => {
  let component: DocsShellComponent;
  let fixture: ComponentFixture<DocsShellComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DocsShellComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
