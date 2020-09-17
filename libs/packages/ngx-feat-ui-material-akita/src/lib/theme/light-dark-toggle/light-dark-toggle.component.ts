import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TMaterialColor } from '@sinbix/ngx-ui-material/common';
import { TLightDarkTheme } from '@sinbix/ngx-ui-material/theme';
import { ThemeService, ThemeQuery } from '@sinbix/ngx-data-access-akita/theme';

@Component({
  selector: 'smart-mat-light-dark-toggle-theme',
  templateUrl: './light-dark-toggle.component.html',
})
export class LightDarkToggleComponent implements OnInit {
  @Input() color: TMaterialColor;

  @Input() lightThemeId = 'light';

  @Input() darkThemeId = 'dark';

  @Input() type: TLightDarkTheme = 'slide';

  isDark: Observable<boolean>;

  constructor(
    private themeService: ThemeService,
    private themeQuery: ThemeQuery
  ) {}

  ngOnInit(): void {
    this.isDark = this.themeQuery
      .selectActiveId()
      .pipe(map((themeId) => themeId === this.darkThemeId));
  }

  onToggle(isDark: boolean) {
    this.themeService.setTheme(isDark ? this.darkThemeId : this.lightThemeId);
  }
}
