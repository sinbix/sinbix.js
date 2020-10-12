import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ThemeService, ThemeQuery } from '@sinbix/angular/theme';
import { map } from 'rxjs/operators';
import { TLightDarkTheme } from './toggle-lida.model';

@Component({
  selector: 'sinbix-theme-toggle-lida',
  templateUrl: './toggle-lida.component.html',
  styleUrls: ['./toggle-lida.component.scss'],
})
export class ThemeToggleLidaComponent implements OnInit {
  @Output() toggleEvent = new EventEmitter<boolean>();

  @Input() color: ThemePalette;

  @Input() lightThemeId = 'light';

  @Input() darkThemeId = 'dark';

  @Input() type: TLightDarkTheme = 'slide';

  isDark$ = this.themeQuery
  .selectActiveId()
  .pipe(map((themeId) => themeId === this.darkThemeId));

  constructor(
    private themeService: ThemeService,
    private themeQuery: ThemeQuery
  ) {
    
  }

  ngOnInit(): void {
  }

  onToggle(isDark) {
    this.themeService.setTheme(isDark ? this.darkThemeId : this.lightThemeId);
  }


}
