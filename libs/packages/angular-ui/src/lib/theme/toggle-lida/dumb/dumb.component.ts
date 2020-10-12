import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { TLightDarkTheme } from '../toggle-lida.model';

@Component({
  selector: 'sinbix-theme-toggle-lida-dumb',
  templateUrl: './dumb.component.html',
  styleUrls: ['./dumb.component.scss'],
})
export class ThemeToggleLidaDumbComponent implements OnInit {
  @Output() toggleEvent = new EventEmitter<boolean>();

  @Input() color: ThemePalette;

  @Input() isDark = false;

  @Input() type: TLightDarkTheme = 'slide';

  ngOnInit(): void {}

  onToggle() {
    this.toggleEvent.emit(!this.isDark);
  }
}
