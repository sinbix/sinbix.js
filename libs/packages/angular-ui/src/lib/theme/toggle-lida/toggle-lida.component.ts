import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { TLightDarkTheme } from './toggle-lida.model';

@Component({
  selector: 'sinbix-theme-toggle-lida',
  templateUrl: './toggle-lida.component.html',
  styleUrls: ['./toggle-lida.component.scss'],
})
export class ThemeToggleLidaComponent implements OnInit {
  @Output() toggleEvent = new EventEmitter<boolean>();

  @Input() color: ThemePalette;

  @Input() isDark = false;

  @Input() type: TLightDarkTheme = 'slide';

  ngOnInit(): void {}

  onToggle() {
    this.toggleEvent.emit(!this.isDark);
  }
}
