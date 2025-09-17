import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ButtonConfig } from '../../../core/models/dynamics.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'euro-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() config!: ButtonConfig;
  @Output() clicked = new EventEmitter<Event>();

  ngOnInit(): void {
    this.config.iconPosition = this.config?.iconPosition
      ? this.config?.iconPosition
      : 'after';
  }

  onClick(event: Event) {
    if (!this.config?.disabled) {
      this.clicked.emit(event);
    }
  }
}
