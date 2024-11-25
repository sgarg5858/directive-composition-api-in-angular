import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-chip',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="chip-text">
      <ng-content></ng-content>
    </span>
    <i (click)="onRemove()" *ngIf="removable" class="chip-remove-icon"></i>
  `,
  styleUrls: ['./chip.component.scss'],

})
export class ChipComponent {
  @Input()
  removable = false;

  @Output()
  removed = new EventEmitter<ChipComponent>();

  onRemove() {
    if (this.removable) {
      this.removed.emit(this);
    }
  }
}
