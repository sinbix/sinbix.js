import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { ThemeToggleLidaComponent } from './toggle-lida.component';

describe('ThemeToggleLidaComponent', () => {
  let component: ThemeToggleLidaComponent;
  let fixture: ComponentFixture<ThemeToggleLidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatButtonModule, MatSlideToggleModule, MatIconModule],
      declarations: [ThemeToggleLidaComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeToggleLidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
