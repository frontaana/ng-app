import { CommonModule } from '@angular/common';
import { Component, signal, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ng-app-modal',
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  visible = signal(false);

  @Input() title = 'Modal';
  @Output() closed = new EventEmitter<void>();

  open() { this.visible.set(true); }
  close() {
    this.visible.set(false);
    this.closed.emit();
  }
}
