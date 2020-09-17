import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NgxDataAccessThemeModule } from '@sinbix/ngx-data-access-akita/theme';
import { NgxUiMatThemeModule } from '@sinbix/ngx-ui-material/theme';

import { LightDarkToggleComponent } from './light-dark-toggle.component';

describe('LightDarkToggleComponent', () => {
  let component: LightDarkToggleComponent;
  let fixture: ComponentFixture<LightDarkToggleComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NgxUiMatThemeModule, NgxDataAccessThemeModule.forRoot()],
        declarations: [LightDarkToggleComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LightDarkToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
