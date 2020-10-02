import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { TLightDarkTheme } from './light-dark-toggle.model';

@Component({
  selector: 'smat-light-dark-toggle-theme',
  templateUrl: './light-dark-toggle.component.html',
  styleUrls: ['./light-dark-toggle.component.scss'],
})
export class LightDarkToggleComponent implements OnInit {
  @Output() toggleEvent = new EventEmitter<boolean>();

  @Input() color: ThemePalette;

  @Input() isDark = false;

  @Input() type: TLightDarkTheme = 'slide';

  ngOnInit(): void {}

  onToggle() {
    this.toggleEvent.emit(!this.isDark);
  }
}
